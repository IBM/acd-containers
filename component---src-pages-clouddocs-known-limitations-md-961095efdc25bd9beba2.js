"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[9671],{3624:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(7294),n=a(8650),l=a.n(n),o=a(1597),i=a(1931),s=a(9514),d=a(5900),c=a.n(d),m=function(e){var t,a=e.title,n=e.theme,l=e.tabs,o=void 0===l?[]:l;return r.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,n=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,i=l.baseUrl,s=l.subDirectory,d=i+"/edit/"+l.branch+s+"/src/pages"+t;return i?r.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"bx--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},p=a(4703),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===i,d=new RegExp(i+"/?(#.*)?$"),m=n.replace(d,a);return r.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},r.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},r.createElement("nav",{"aria-label":t},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(r.Component),f=g,y=a(7296),b=a(5387),v=a(3732),E=function(e){var t=e.date,a=new Date(t);return t?r.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(v.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},x=function(e){var t=e.pageContext,a=e.children,n=e.location,d=e.Title,c=t.frontmatter,h=void 0===c?{}:c,g=t.relativePagePath,v=t.titleType,x=h.tabs,k=h.title,P=h.theme,w=h.description,N=h.keywords,T=h.date,C=(0,b.Z)().interiorTheme,D=(0,o.useStaticQuery)("2456312558").site.pathPrefix,Z=D?n.pathname.replace(D,""):n.pathname,L=x?Z.split("/").filter(Boolean).slice(-1)[0]||l()(x[0],{lower:!0}):"",S=P||C;return r.createElement(s.Z,{tabs:x,homepage:!1,theme:S,pageTitle:k,pageDescription:w,pageKeywords:N,titleType:v},r.createElement(m,{title:d?r.createElement(d,null):k,label:"label",tabs:x,theme:S}),x&&r.createElement(f,{title:k,slug:Z,tabs:x,currentTab:L}),r.createElement(y.Z,{padded:!0},a,r.createElement(u,{relativePagePath:g}),r.createElement(E,{date:T})),r.createElement(p.Z,{pageContext:t,location:n,slug:Z,tabs:x,currentTab:L}),r.createElement(i.Z,null))}},3876:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return c}});var r=a(3366),n=(a(7294),a(4983)),l=a(3624),o=["components"],i={},s={_frontmatter:i},d=l.Z;function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,n.kt)(d,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,"Text Size Limits"),(0,n.kt)("p",null,"Annotator for Clinical Data imposes a 50K limit on text being analyzed per request. For json requests, the json metadata does not count towards the 50K threshold. The Annotator for Clinical Data /analyze APIs will return a 413 error if the input text exceeds the 50K threshold."),(0,n.kt)("h2",null,"Cartridge Deployment Timeouts"),(0,n.kt)("p",null,"Cartridge deployments via the /deploy API can sometimes exceed the one minute timeout threshold for services to provide a response. When the timeout is exceeded, a 504 response is returned in html format. Despite the 504 response, the deploy operation will continue to completion. In the event of a deployment timeout, you can verify successful deployment of the cartridge through monitoring the status of the deployment.  See ",(0,n.kt)("a",{parentName:"p",href:"/clouddocs/customizing/#cartridge-deployment"},"Cartridge Deployment"),"."),(0,n.kt)("p",null,"Use of the asynchronous /cartridges APIs is recommended to avoid cartridge deployment timeouts.  See here for more information about ",(0,n.kt)("a",{parentName:"p",href:"/troubleshooting/troubleshooting-cartridge-deploy/"},"troubleshooting a cartridge deployment"),"."),(0,n.kt)("h2",null,"Multiple Unstructured Array Elements"),(0,n.kt)("p",null,"While multiple unstructured array elements with text values may be submitted in a single request, 40 unstructured array elements is the recommended limit to avoid performance degradation due to processing overhead."),(0,n.kt)("h2",null,"Cartridge Use While Deployment in Progress"),(0,n.kt)("p",null,"When a cartridge is in the midst of being deployed or re-deployed, use of the flows therein for text analysis should be avoided until cartridge deployment has successfully completed. Use of cartridge flows while the cartridge is actively being deployed may yield unexpected results."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clouddocs-known-limitations-md-961095efdc25bd9beba2.js.map