this["Templates"] = this["Templates"] || {};
this["Templates"]["templates/patterns/banner.mustache"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("\n" + i);_.b("<!-- Banner // start");_.b("\n" + i);_.b("  Options");_.b("\n" + i);_.b("  ===========");_.b("\n" + i);_.b("  Layout Types >");_.b("\n" + i);_.b("    (no class) : Text only, left aligned full width across");_.b("\n" + i);_.b("    banner-with-product : Slimmer image (270px) on left, text right. For mobile product images.");_.b("\n" + i);_.b("    banner-with-wide-product : Image on left (370px), text right. For other product images.");_.b("\n" + i);_.b("    banner-with-talent : Full width image, text contained to left");_.b("\n" + i);_.b("  Height >");_.b("\n" + i);_.b("    banner-grande : Set height to fit (6) Quicklinks and (3) Social links.");_.b("\n" + i);_.b("    banner-tall : Set height to fit (6) Quicklinks only.");_.b("\n" + i);_.b("    banner-short : Set height to fit (3) Social links.");_.b("\n" + i);_.b("    banner-default : Set height for banners when there are (0) no Quicklinks or Social links (Only applies to Business)");_.b("\n" + i);_.b("  Other / Misc >");_.b("\n" + i);_.b("    image-overlap : For .banner-image to push out of banner area");_.b("\n" + i);_.b("    -->");_.b("\n" + i);_.b("<div class=\"banner-bg banner-with-talent banner-grande zindex-bottom\">");_.b("\n" + i);_.b("    <div class=\"row collapse\">");_.b("\n" + i);_.b("\n" + i);_.b("        <div class=\"columns medium-7 large-12 zindex-top\">");_.b("\n" + i);_.b("            <div class=\"banner-content\">");_.b("\n" + i);_.b("\n" + i);_.b("                <h1>");_.b(_.v(_.f("heading",c,p,0)));_.b("</h1>");_.b("\n" + i);_.b("\n" + i);_.b("                <div class=\"banner-text\">");_.b("\n" + i);_.b("                    <div class=\"intro-text\">");_.b("\n" + i);_.b("                        <p>");_.b(_.v(_.f("lead",c,p,0)));_.b("</p>");_.b("\n" + i);_.b("                        <p class=\"smallprint\">");_.b(_.v(_.f("smallPrint",c,p,0)));_.b("</p>");_.b("\n" + i);_.b("                    </div>");_.b("\n" + i);_.b("\n" + i);_.b("                    <a href=\"#\" class=\"button radius large yellow\">");_.b(_.v(_.f("cta",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("\n" + i);_.b("        <div class=\"columns medium-5 large-12 banner-position at-bottom zindex-bottom\">");_.b("\n" + i);_.b("            <div class=\"row\">");_.b("\n" + i);_.b("\n" + i);_.b("                <div class=\"banner-image large-is-absolute \">");_.b("\n" + i);_.b("                    <img src=\"http://localhost:8070/static/assets/images/_content-managed/banner/");_.b(_.v(_.f("image",c,p,0)));_.b("\" data-interchange=\"[http://localhost:8070/static/assets/images/_content-managed/banner/banner_talentshot_mobile.png, (default)], [http://localhost:8070/static/assets/images/_content-managed/banner/banner_talentshot.png, (medium)]\" alt=\"\">");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<!-- Banner // end -->");return _.fl();;});
this["Templates"]["templates/patterns/navigation.mustache"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<!-- Navigation Partial -->");_.b("\n" + i);_.b("\n" + i);_.b("<a class=\"nav-back-arrow\" href=\"#\"></a>");_.b("\n" + i);_.b("<ul id=\"nav-primary-level\" class=\"nav-primary-level\">");_.b("\n" + i);_.b("    <!-- add active class for active category -->");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);if(_.s(_.f("items",c,p,1),c,p,0,189,293,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        <li><a href=\"");_.b(_.v(_.f("link",c,p,0)));_.b("\"><span class=\"ico ico-header ico-");_.b(_.v(_.f("icon",c,p,0)));_.b("\"></span>");_.b(_.v(_.f("title",c,p,0)));_.b("</a></li>");_.b("\n");});c.pop();}_.b("\n" + i);_.b("    <!--<li><a href=\"category-mobile.html\"><span class=\"ico ico-header ico-personal_mobile\"></span>");_.b(_.v(_.f("title",c,p,0)));_.b("</a></li>-->");_.b("\n" + i);_.b("\n" + i);_.b("    <!---->");_.b("\n" + i);_.b("    <!--<li><a href=\"category-tablet.html\"><span class=\"ico ico-header ico-personal_tablet\"></span>Tablet</a>-->");_.b("\n" + i);_.b("\n" + i);_.b("    <!--</li>-->");_.b("\n" + i);_.b("    <!--<li><a href=\"category-tablet.html\"><span class=\"ico ico-header ico-personal_internet\"></span>Broadband</a>-->");_.b("\n" + i);_.b("\n" + i);_.b("    <!--</li>-->");_.b("\n" + i);_.b("    <!--<li><a href=\"homephone.html\"><span class=\"ico ico-header ico-personal_home-phone\"></span>Home phone</a>-->");_.b("\n" + i);_.b("\n" + i);_.b("    <!--</li>-->");_.b("\n" + i);_.b("    <!--<li><a href=\"bundles.html\"><span class=\"ico ico-header ico-personal_bundles\"></span>Bundles</a>-->");_.b("\n" + i);_.b("\n" + i);_.b("    <!--</li>-->");_.b("\n" + i);_.b("    <!--<li><a href=\"tv.html\"><span class=\"ico ico-header ico-personal_tv\"></span>Tv</a>-->");_.b("\n" + i);_.b("\n" + i);_.b("    <!--</li>-->");_.b("\n" + i);_.b("    <!--<li class=\"locked align-right \"><a href=\"support.html\"><span class=\"ico ico-header ico-personal_support\"></span>Support</a>-->");_.b("\n" + i);_.b("\n" + i);_.b("    <!--</li>-->");_.b("\n" + i);_.b("</ul>");return _.fl();;});