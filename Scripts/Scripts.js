var initialIndexes = new Array();
var imageAnchorDivs = new Array();
var whiteSiteIcons = new Array();
var blackSiteIcons = new Array();
var interval = 1000;

function Start() {

    imageAnchorDivs[0] = new ImageAnchorDiv(0);
    imageAnchorDivs[1] = new ImageAnchorDiv(1);
    imageAnchorDivs[2] = new ImageAnchorDiv(2);
    imageAnchorDivs[3] = new ImageAnchorDiv(3);

    whiteSiteIcons[0] = new SiteIcon('http://www.anyahindmarch.com', 'Images/AnyaHindmarchLogo.png');
    whiteSiteIcons[1] = new SiteIcon('http://designmuseum.org', 'Images/TheDesignMuseumLogo.png');
    whiteSiteIcons[2] = new SiteIcon('http://ilovegorgeous.co.uk', 'Images/ILoveGorgeousLogo.png');
    whiteSiteIcons[3] = new SiteIcon('http://penelopechilvers.com', 'Images/PenelopeChilversLogo.png');
    whiteSiteIcons[4] = new SiteIcon('http://fieldcandy.com', 'Images/FieldCandyLogo.png');
    whiteSiteIcons[4] = new SiteIcon('http://shrimps.co.uk', 'Images/ShrimpsLogo.png');

    blackSiteIcons[0] = new SiteIcon('http://www.domperignon.com', 'Images/DomPerignonLogo.png');
    blackSiteIcons[1] = new SiteIcon('http://www.linksoflondon.com', 'Images/LinksOfLondonLogo.png');
    blackSiteIcons[2] = new SiteIcon('http://www.moet.com', 'Images/MoetEtChandonLogo.png');

    RandomiseArray(whiteSiteIcons);
    RandomiseArray(blackSiteIcons);

    //populate the initialIndexes
    for (i = 0; i < 4; ++i) {
        initialIndexes[i] = i;
    }

    //randomise them
    RandomiseArray(initialIndexes);

    Switch();
}

function Switch() {

    //get random imageAnchorDiv index
    var imageAnchorDivIndex = Math.floor(Math.random() * imageAnchorDivs.length);

    //while initialIndex still has values remove the first and use that
    if (initialIndexes.length > 0) {
        imageAnchorDivIndex = initialIndexes.splice(0, 1);
    }
    //once initialIndexes has been cleared increase the interval

    if (initialIndexes.length == 0) {

        interval = 5000;
    }

    var siteIcons = whiteSiteIcons;

    if (imageAnchorDivIndex % 2 == 0) {
        siteIcons = blackSiteIcons;
    }


    //get random siteIcon index
    var siteIconIndex = Math.floor(Math.random() * siteIcons.length);
    //get siteIcon
    var siteIcon = siteIcons[siteIconIndex];
    //remove from array
    siteIcons.splice(siteIconIndex, 1);

    //if existing siteIcon is not null
    if (imageAnchorDivs[imageAnchorDivIndex].siteIcon != null) {
        siteIcons.push(imageAnchorDivs[imageAnchorDivIndex].siteIcon);
    }

    imageAnchorDivs[imageAnchorDivIndex].show(siteIcon);

    //start the Show again
    window.timer = window.setTimeout("Switch()", interval);
}

function SiteIcon(siteUrl, iconUrl) {
    this.siteUrl = siteUrl;
    this.iconUrl = iconUrl;
}

function ImageAnchorDiv(index) {
    this.img = document.getElementById('img' + index);
    this.a = document.getElementById('a' + index);
    this.div = document.getElementById('div' + index);
    this.siteIcon = null;

    this.show = function (siteIcon) {
        this.siteIcon = siteIcon;

        this.div.style.backgroundImage = 'url(' + this.img.src + ')';
        this.div.style.backgroundRepeat = 'no-repeat';

        //set opacity of img to 0
        setOpacity(this.img, 0);

        this.img.src = siteIcon.iconUrl;
        this.a.href = siteIcon.siteUrl;


        //clear any existing timer
        if (this.img.timer)
            window.clearTimeout(this.img.timer);

        var startMS = (new Date()).getTime();

        //start the opacity changing
        this.img.timer = window.setTimeout("changeOpacity('" + this.img.id + "',1000," + startMS + ",0,100)", 10);
    }
}


function setOpacity(object, opacityPct) {
    // IE.
    object.style.filter = 'alpha(opacity=' + opacityPct + ')';
    // Old mozilla and firefox
    object.style.MozOpacity = opacityPct / 100;
    // Everything else.
    object.style.opacity = opacityPct / 100;
}

function changeOpacity(id, msDuration, msStart, fromO, toO) {
    var element = document.getElementById(id);
    var opacity = element.style.opacity * 100;
    var msNow = (new Date()).getTime();
    opacity = fromO + (toO - fromO) * (msNow - msStart) / msDuration;
    if (opacity < 0)
        setOpacity(element, 0)
    else if (opacity > 100)
        setOpacity(element, 100)
    else {
        setOpacity(element, opacity);
        element.timer = window.setTimeout("changeOpacity('" + id + "'," + msDuration + "," + msStart + "," + fromO + "," + toO + ")", 1);
    }
}

function RandomiseArray(array) {

    for (i = 0; i < 100; ++i) {
        var from = Math.floor(Math.random() * array.length);
        var to = Math.floor(Math.random() * array.length);
        var tmp = array[from];
        array[from] = array[to];
        array[to] = tmp;
    }
}