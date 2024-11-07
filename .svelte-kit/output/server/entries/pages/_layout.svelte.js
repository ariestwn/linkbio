import { G as store_get, I as head, J as unsubscribe_stores, F as pop, K as attr, C as push, L as stringify } from "../../chunks/index.js";
import { s as siteUrl, a as siteName, p as pwaThemeColor, b as siteDescription, t as twitterHandle } from "../../chunks/app.config.js";
import { p as page } from "../../chunks/stores.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  const schemaOrgWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl
  };
  let canonicalUrl = `${siteUrl}${store_get($$store_subs ??= {}, "$page", page).url.pathname}`;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="robots" content="index, follow"> <link rel="canonical"${attr("href", canonicalUrl)}> <link rel="icon" type="image/png" href="/images/favicons/favicon-96x96.png" sizes="96x96"> <link rel="icon" type="image/svg+xml" href="/images/favicons/favicon.svg"> <link rel="shortcut icon" href="/images/favicons/favicon.ico"> <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png"> <meta name="mobile-web-app-capable" content="yes"> <meta name="apple-mobile-web-app-capable" content="yes"> <meta name="apple-mobile-web-app-title"${attr("content", siteName)}> <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"> <meta name="theme-color"${attr("content", pwaThemeColor)}> <link rel="manifest" href="/site.webmanifest"> <meta name="theme-color"${attr("content", pwaThemeColor)}> <meta name="msapplication-TileColor"${attr("content", pwaThemeColor)}>  <meta property="og:type" content="website"> <meta property="og:url"${attr("content", canonicalUrl)}> <meta property="og:title"${attr("content", siteName)}> <meta property="og:description"${attr("content", siteDescription)}> <meta property="og:image"${attr("content", `${stringify(siteUrl)}/images/social.png`)}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:url"${attr("content", canonicalUrl)}> <meta name="twitter:title"${attr("content", siteName)}> <meta name="twitter:description"${attr("content", siteDescription)}> <meta name="twitter:image"${attr("content", `${stringify(siteUrl)}/images/social.png`)}> `;
    {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="twitter:creator"${attr("content", twitterHandle)}>`;
    }
    $$payload2.out += `<!--]--> ${html(`<script type="application/ld+json">${JSON.stringify(schemaOrgWebsite)}<\/script>`)}`;
  });
  children?.($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
