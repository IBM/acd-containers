"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[3018],{3624:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(7294),r=a(8650),l=a.n(r),i=a(1597),o=a(3383),p=a(2618),s=a(5900),m=a.n(s),c=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,p=l.subDirectory,s=o+"/edit/"+l.branch+p+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},k=a(4703),u=a(1721),N=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],p=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),p=a===o,s=new RegExp(o+"/?(#.*)?$"),c=r.replace(s,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=p,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},p))))))},t}(n.Component),g=N,h=a(7296),b=a(5387),f=a(3732),w=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},C=function(e){var t=e.pageContext,a=e.children,r=e.location,s=e.Title,m=t.frontmatter,u=void 0===m?{}:m,N=t.relativePagePath,f=t.titleType,C=u.tabs,E=u.title,v=u.theme,x=u.description,y=u.keywords,D=u.date,P=(0,b.Z)().interiorTheme,T=(0,i.useStaticQuery)("2456312558").site.pathPrefix,L=T?r.pathname.replace(T,""):r.pathname,A=C?L.split("/").filter(Boolean).slice(-1)[0]||l()(C[0],{lower:!0}):"",Z=v||P;return n.createElement(p.Z,{tabs:C,homepage:!1,theme:Z,pageTitle:E,pageDescription:x,pageKeywords:y,titleType:f},n.createElement(c,{title:s?n.createElement(s,null):E,label:"label",tabs:C,theme:Z}),C&&n.createElement(g,{title:E,slug:L,tabs:C,currentTab:A}),n.createElement(h.Z,{padded:!0},a,n.createElement(d,{relativePagePath:N}),n.createElement(w,{date:D})),n.createElement(k.Z,{pageContext:t,location:r,slug:L,tabs:C,currentTab:A}),n.createElement(o.Z,null))}},7457:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return m}});var n=a(3366),r=(a(7294),a(4983)),l=a(3624),i=["components"],o={},p={_frontmatter:o},s=l.Z;function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(s,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Troubleshooting ACD instances"),(0,r.kt)("h3",null,"ACD Operator Not Starting"),(0,r.kt)("p",null,"To diagnose problems with resources not started as expected follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the logs on the ACD operator pod for errors. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"ibm-wh-acd-operator-controller-manager-5c58b6b869-q8nwj")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc logs <pod> --namespace <namespace> | grep controller\n")),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/acd-containers/troubleshooting/logging-monitoring"},"Logging and Montioring")," for more details."))),(0,r.kt)("h3",null,"ACD Operator or ACD Instance Not Starting"),(0,r.kt)("p",null,"To diagnose problems with resources not started as expected follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check for errors or events on the deployments."),(0,r.kt)("p",{parentName:"li"},"List deployments"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc get deployments --namespace <namespace>\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<namespace>")," namespace where the operator or instance was installed")),(0,r.kt)("p",{parentName:"li"},"Describe a specific deployment"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc describe deployments <deployment> --namespace <namespace>\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<deployment>")," ACD deployment name, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"ibm-wh-acd-acd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<namespace>")," namespace where the operator or instance was installed"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check for errors or events on the replicasets."),(0,r.kt)("p",{parentName:"li"},"List replica sets"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc get replicasets --namespace <namespace>\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<namespace>")," namespace where the operator or instance was installed")),(0,r.kt)("p",{parentName:"li"},"Describe a specific replicaset"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc describe replicasets <replicaset> --namespace <namespace>\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<replicaset>")," ACD replica set name, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"ibm-wh-acd-acd-749c996465")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<namespace>")," namespace where the operator or instance was installed"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check for errors or events on the pods."),(0,r.kt)("p",{parentName:"li"},"List pods"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc get pods --namespace <namespace>\n")),(0,r.kt)("p",{parentName:"li"},"Describe a specific pod"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc describe pods <pod> --namespace <namespace>\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<pod>")," ACD pod name, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"ibm-wh-acd-acd-749c996465-bt6zc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<namespace>")," namespace where the operator or instance was installed"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the logs for errors"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc logs <pod> --namespace <namespace>\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<pod>")," ACD pod name, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"ibm-wh-acd-acd-749c996465-bt6zc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<namespace>")," namespace where the operator or instance was installed")),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/acd-containers/troubleshooting/logging-monitoring"},"Logging and Montioring")," for more details."))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-troubleshooting-troubleshooting-acd-instances-md-e15fe1a835c2713f09f1.js.map