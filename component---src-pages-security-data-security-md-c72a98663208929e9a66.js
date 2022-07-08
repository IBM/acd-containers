"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[767],{3624:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(7294),n=a(8650),l=a.n(n),i=a(1597),s=a(1931),o=a(9514),c=a(5900),u=a.n(c),m=function(e){var t,a=e.title,n=e.theme,l=e.tabs,i=void 0===l?[]:l;return r.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,n=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,s=l.baseUrl,o=l.subDirectory,c=s+"/edit/"+l.branch+o+"/src/pages"+t;return s?r.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"bx--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4703),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,s=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),o=a===s,c=new RegExp(s+"/?(#.*)?$"),m=n.replace(c,a);return r.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--aBB0K"]=o,t),"PageTabs-module--list-item--024o6")},r.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},r.createElement("nav",{"aria-label":t},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(r.Component),b=h,f=a(7296),E=a(5387),v=a(3732),k=function(e){var t=e.date,a=new Date(t);return t?r.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(v.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,n=e.location,c=e.Title,u=t.frontmatter,g=void 0===u?{}:u,h=t.relativePagePath,v=t.titleType,y=g.tabs,N=g.title,P=g.theme,w=g.description,x=g.keywords,T=g.date,C=(0,E.Z)().interiorTheme,D=(0,i.useStaticQuery)("2456312558").site.pathPrefix,B=D?n.pathname.replace(D,""):n.pathname,S=y?B.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",Z=P||C;return r.createElement(o.Z,{tabs:y,homepage:!1,theme:Z,pageTitle:N,pageDescription:w,pageKeywords:x,titleType:v},r.createElement(m,{title:c?r.createElement(c,null):N,label:"label",tabs:y,theme:Z}),y&&r.createElement(b,{title:N,slug:B,tabs:y,currentTab:S}),r.createElement(f.Z,{padded:!0},a,r.createElement(d,{relativePagePath:h}),r.createElement(k,{date:T})),r.createElement(p.Z,{pageContext:t,location:n,slug:B,tabs:y,currentTab:S}),r.createElement(s.Z,null))}},290:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var r=a(3366),n=(a(7294),a(4983)),l=a(3624),i=["components"],s={},o={_frontmatter:s},c=l.Z;function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)(c,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,"Security of data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It is the responsibility of the user to ensure that the proper security measures are established when using the server.")),(0,n.kt)("h3",null,"Data in motion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All transports used to interact with IBM ACD Server must be encrypted. TLS 1.2 is recommended."),(0,n.kt)("li",{parentName:"ul"},"All transport within the ACD server itself are encrypted using FIPS compliant protocols.")),(0,n.kt)("h3",null,"Data at rest"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The IBM ACD Server is a stateless offering in that it doesn’t store any data sent to it for analyzing."),(0,n.kt)("li",{parentName:"ul"},"Configuration data is stored in the user provided storage."),(0,n.kt)("li",{parentName:"ul"},"The prerequisite storage used for ACD configuration must have data encryption enabled."),(0,n.kt)("li",{parentName:"ul"},"The user is responsible for Backup and Recovery of the configuration storage and must backup solution specific configurations.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-security-data-security-md-c72a98663208929e9a66.js.map