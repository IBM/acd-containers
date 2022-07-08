"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[5739],{3624:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7294),r=a(8650),l=a.n(r),i=a(1597),o=a(1931),s=a(9514),c=a(5900),m=a.n(c),p=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,c=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},d=a(4703),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),p=r.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),k=h,N=a(7296),b=a(5387),f=a(3732),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},E=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,m=t.frontmatter,g=void 0===m?{}:m,h=t.relativePagePath,f=t.titleType,E=g.tabs,y=g.title,w=g.theme,x=g.description,P=g.keywords,C=g.date,T=(0,b.Z)().interiorTheme,Z=(0,i.useStaticQuery)("2456312558").site.pathPrefix,D=Z?r.pathname.replace(Z,""):r.pathname,L=E?D.split("/").filter(Boolean).slice(-1)[0]||l()(E[0],{lower:!0}):"",B=w||T;return n.createElement(s.Z,{tabs:E,homepage:!1,theme:B,pageTitle:y,pageDescription:x,pageKeywords:P,titleType:f},n.createElement(p,{title:c?n.createElement(c,null):y,label:"label",tabs:E,theme:B}),E&&n.createElement(k,{title:y,slug:D,tabs:E,currentTab:L}),n.createElement(N.Z,{padded:!0},a,n.createElement(u,{relativePagePath:h}),n.createElement(v,{date:C})),n.createElement(d.Z,{pageContext:t,location:r,slug:D,tabs:E,currentTab:L}),n.createElement(o.Z,null))}},7665:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return m}});var n=a(3366),r=(a(7294),a(4983)),l=a(3624),i=["components"],o={},s={_frontmatter:o},c=l.Z;function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Troubleshooting the OAuth Proxy"),(0,r.kt)("p",null,"To diagnose problems follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure the OAuth proxy deployment and pod are running in the proxy namespace"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check the pod logs to ensure it is starting without errors"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure you can login with the token as the service account and view the services in the target acd namespace"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"oc login https://api.youserver.com:6443  --token <yourtoken>  --insecure-skip-tls-verify=true")," - ensure your token is good"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"oc whoami")," - ensure you are the service account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"oc get service ibm-wh-acd-acd -n <namespace>"),"  - change <namespace",">"," to your acd target namespace and ensure you can view the service as the service account user.  If role binding is setup correctly you will see the service info.  If not, you will see an ",(0,r.kt)("inlineCode",{parentName:"li"},"Error from server (Forbidden)"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the proxy logs for access errors"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc logs <pod> --namespace <namespace>\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<pod>")," is the proxy pod name, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"ibm-wh-acd-acd-749c996465-bt6zc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<namespace>")," namespace where the proxy was installed")),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/troubleshooting/logging-monitoring"},"Logging and Montioring")," for more details.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the ACD instance logs for errors during request processing."),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/troubleshooting/logging-monitoring"},"Logging and Montioring")," for more details."))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-troubleshooting-troubleshooting-the-oauth-proxy-md-25e59ca3f6cccce9f9d8.js.map