using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace PorterWright
{
    public partial class Site : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            penelopeChilversRow.Visible = Request.Url.AbsoluteUri.Contains("Portfolio");
            fieldCandyRow.Visible = Request.Url.AbsoluteUri.Contains("Portfolio");
            shrimpsRow.Visible = Request.Url.AbsoluteUri.Contains("Portfolio");
            ilovegorgeousRow.Visible = Request.Url.AbsoluteUri.Contains("Portfolio");
            linksOfLondonRow.Visible = Request.Url.AbsoluteUri.Contains("Portfolio");
            anyaHindmarchRow.Visible = Request.Url.AbsoluteUri.Contains("Portfolio");
            moetEtChandonRow.Visible = Request.Url.AbsoluteUri.Contains("Portfolio");
            domPerignonRow.Visible = Request.Url.AbsoluteUri.Contains("Portfolio");
            theDesignMuseumRow.Visible = Request.Url.AbsoluteUri.Contains("Portfolio");

            about.CssClass = Request.Url.AbsoluteUri.Contains("About") ? "linkSelected" : "link";
            services.CssClass = Request.Url.AbsoluteUri.Contains("Services") ? "linkSelected" : "link";
            portfolio.CssClass = Request.Url.AbsoluteUri.Contains("Portfolio") ? "linkSelected" : "link";
            penelopeChilvers.CssClass = Request.Url.AbsoluteUri.Contains("PenelopeChilvers") ? "linkSmallSelected" : "linkSmall";
            fieldCandy.CssClass = Request.Url.AbsoluteUri.Contains("FieldCandy") ? "linkSmallSelected" : "linkSmall";
            shrimps.CssClass = Request.Url.AbsoluteUri.Contains("Shrimps") ? "linkSmallSelected" : "linkSmall";
            ilovegorgeous.CssClass = Request.Url.AbsoluteUri.Contains("ILoveGorgeous") ? "linkSmallSelected" : "linkSmall";
            linksOfLondon.CssClass = Request.Url.AbsoluteUri.Contains("LinksOfLondon") ? "linkSmallSelected" : "linkSmall";
            anyaHindmarch.CssClass = Request.Url.AbsoluteUri.Contains("AnyaHindmarch") ? "linkSmallSelected" : "linkSmall";
            moetEtChandon.CssClass = Request.Url.AbsoluteUri.Contains("MoetEtChandon") ? "linkSmallSelected" : "linkSmall";
            domPerignon.CssClass = Request.Url.AbsoluteUri.Contains("DomPerignon") ? "linkSmallSelected" : "linkSmall";
            theDesignMuseum.CssClass = Request.Url.AbsoluteUri.Contains("TheDesignMuseum") ? "linkSmallSelected" : "linkSmall";
            testimonials.CssClass = Request.Url.AbsoluteUri.Contains("Testimonials") ? "linkSelected" : "link";
            contact.CssClass = Request.Url.AbsoluteUri.Contains("Contact") ? "linkSelected" : "link";            
        }
    
        protected void Link_Click(object sender, EventArgs e)
        {
            if (sender == about)
            {
                Response.Redirect("~/About.aspx");
            }
            else if (sender == services)
            {
                Response.Redirect("~/Services.aspx");
            }
            else if (sender == portfolio)
            {
                Response.Redirect("~/Portfolio_PenelopeChilvers.aspx");
            }
            else if (sender == penelopeChilvers)
            {
                Response.Redirect("~/Portfolio_PenelopeChilvers.aspx");
            }
            else if (sender == fieldCandy)
            {
                Response.Redirect("~/Portfolio_FieldCandy.aspx");
            }
            else if (sender == shrimps)
            {
                Response.Redirect("~/Portfolio_Shrimps.aspx");
            }
            else if (sender == ilovegorgeous)
            {
                Response.Redirect("~/Portfolio_ILoveGorgeous.aspx");
            }
            else if (sender == linksOfLondon)
            {
                Response.Redirect("~/Portfolio_LinksOfLondon.aspx");
            }
            else if (sender == anyaHindmarch)
            {
                Response.Redirect("~/Portfolio_AnyaHindmarch.aspx");
            }
            else if (sender == moetEtChandon)
            {
                Response.Redirect("~/Portfolio_MoetEtChandon.aspx");
            }
            else if (sender == domPerignon)
            {
                Response.Redirect("~/Portfolio_DomPerignon.aspx");
            }
            else if (sender == theDesignMuseum)
            {
                Response.Redirect("~/Portfolio_TheDesignMuseum.aspx");
            }
            else if (sender == testimonials)
            {
                Response.Redirect("~/Testimonials.aspx");
            }
            else if (sender == contact)
            {
                Response.Redirect("~/Contact.aspx");
            }
        }
    }
}