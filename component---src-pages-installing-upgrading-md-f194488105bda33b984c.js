"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[406],{3624:function(e,a,t){t.d(a,{Z:function(){return A}});var n=t(7294),r=t(8650),o=t.n(r),i=t(1597),l=t(3383),s=t(2618),p=t(5900),c=t.n(p),d=function(e){var a,t=e.title,r=e.theme,o=e.tabs,i=void 0===o?[]:o;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(a={},a["PageHeader-module--with-tabs--vbQ-W"]=i.length,a["PageHeader-module--dark-mode--WCeH8"]="dark"===r,a))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},m=function(e){var a=e.relativePagePath,t=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=t||r,l=o.baseUrl,s=o.subDirectory,p=l+"/edit/"+o.branch+s+"/src/pages"+a;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},u=t(4703),h=t(1721),g=function(e){function a(){return e.apply(this,arguments)||this}return(0,h.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var a,t=o()(e,{lower:!0,strict:!0}),s=t===l,p=new RegExp(l+"/?(#.*)?$"),d=r.replace(p,t);return n.createElement("li",{key:e,className:c()((a={},a["PageTabs-module--selected-item--aBB0K"]=s,a),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":a},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},a}(n.Component),b=g,f=t(7296),v=t(5387),k=t(3732),w=function(e){var a=e.date,t=new Date(a);return a?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},A=function(e){var a=e.pageContext,t=e.children,r=e.location,p=e.Title,c=a.frontmatter,h=void 0===c?{}:c,g=a.relativePagePath,k=a.titleType,A=h.tabs,N=h.title,E=h.theme,y=h.description,C=h.keywords,x=h.date,P=(0,v.Z)().interiorTheme,T=(0,i.useStaticQuery)("2456312558").site.pathPrefix,D=T?r.pathname.replace(T,""):r.pathname,O=A?D.split("/").filter(Boolean).slice(-1)[0]||o()(A[0],{lower:!0}):"",L=E||P;return n.createElement(s.Z,{tabs:A,homepage:!1,theme:L,pageTitle:N,pageDescription:y,pageKeywords:C,titleType:k},n.createElement(d,{title:p?n.createElement(p,null):N,label:"label",tabs:A,theme:L}),A&&n.createElement(b,{title:N,slug:D,tabs:A,currentTab:O}),n.createElement(f.Z,{padded:!0},t,n.createElement(m,{relativePagePath:g}),n.createElement(w,{date:x})),n.createElement(u.Z,{pageContext:a,location:r,slug:D,tabs:A,currentTab:O}),n.createElement(l.Z,null))}},9569:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return c}});var n=t(3366),r=(t(7294),t(4983)),o=t(3624),i=["components"],l={},s={_frontmatter:l},p=o.Z;function c(e){var a=e.components,t=(0,n.Z)(e,i);return(0,r.kt)(p,Object.assign({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note:  The upgrade path only applies to IBM Watson Annotator for Clinical Data Container Edition.")),(0,r.kt)("p",null,"The Annotator for Clinical Data Container Edition supports both manual and automatic upgrades of the operator and operand through ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.7/operators/understanding/olm/olm-understanding-olm.html#olm-overview_olm-understanding-olm"},"Operator Lifecycle Manager (OLM)")," integration. OLM operators are limited to upgrades and do not rollback function. An operator upgrade is always done with a new replacement version. Operand upgrades are managed by the operator. An ACD instance is upgraded based on a specific set of related images that align with the ACD operator version."),(0,r.kt)("h2",null,"Upgrade paths"),(0,r.kt)("p",null,"The update graph for ACD is expected to grow over time, but is very simple today. The major and minor version for ACD continues to be ",(0,r.kt)("inlineCode",{parentName:"p"},"2.0"),". New function and fixes are released as patch versions made available as part of a continuous delivery strategy. Refer here for a list of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/merative/acd-containers/blob/master/CHANGELOG.md#releases-from-ibm"},"available versions"),"."),(0,r.kt)("h2",null,"Automatic upgrades"),(0,r.kt)("p",null,"With OLM integration, at operator install time, a subscription is created to an upgrade channel. The channel defines the stream of upgrades available for an operator and is used to roll out the upgrades for channel subscribers."),(0,r.kt)("p",null,"At the present time, the ACD operator only provides one channel, ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.0"),". When a new patch version becomes available within that channel, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.0.202109011707"),", the operator will automatically reconcile the new version and use a rolling update strategy to upgrade both the operator and ACD instance, creating new pods with the new version installed before terminating the pods running the old versions."),(0,r.kt)("h2",null,"Manual upgrades"),(0,r.kt)("p",null,"To manually upgrade, a project administrator must review and approve the manual install plan for the new version. Once approved, the resources for the new version will be created in order to satisfy the requirements for the components specified in the plan."),(0,r.kt)("p",null,"To review and approve a manual upgrade of ACD through the OpenShift Container Platform web console, do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to the OpenShift Container Platform ",(0,r.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.7/web_console/web-console.html"},"web console")," using your login credentials."),(0,r.kt)("li",{parentName:"ol"},"Expand the ",(0,r.kt)("strong",{parentName:"li"},"Operators")," dropdown and select ",(0,r.kt)("strong",{parentName:"li"},"Installed Operators"),"."),(0,r.kt)("li",{parentName:"ol"},"Expand the ",(0,r.kt)("strong",{parentName:"li"},"Project")," dropdown and select the correct project where the ACD operator is already installed."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Annotator for Clinical Data")," link to open the operator details panel."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Subscription")," tab to open the subscription details panel."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Upgrade available")," link to open the InstallPlan details panel."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Preview InstallPlan")," button to inspect the requirements for the components specified in this InstallPlan before approving."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Approve")," button to approve the manual install plan and begin the upgrade.")),(0,r.kt)("h2",null,"How do I know when an upgrade is available for an operator?"),(0,r.kt)("p",null,"You can inspect the status of your ACD operator’s subscription to know if an update is available. The value associated with the currentCSV field is the newest version that is known to OLM, and installedCSV is the version that is installed on the cluster."),(0,r.kt)("p",null,"When using the web console, the operator status will also show ",(0,r.kt)("inlineCode",{parentName:"p"},"Upgrade available"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"1 requires approval")," if the approval strategy is set to Manual, as shown here."),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"830px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.23611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA30lEQVQY05WR2U7EMAxF+//fiEbQyZQWOo1D42zeUFOQmDfmvF3J19fLAMghcW28d4jI/s0w3ePoptfxOo5vl8sFAJ4wI6YYIwBETGHHiJmZW2si0g6o/SIi+siAiLW2hBibvSzlutWUC3gopXoPAAFC8B62zRORPDI456ZpmufZ3VzvbU+MndKRiog5Z+1WZhJhMzukqggzkQqrGbHKn+6DmcHXDhB+qs2Wz7vv0swq8+1jfV9WH3YRXUILmanv3s2quUmpZKbnSULiXNoZm4nWWEM63imiMTMgxcKn+RtPuNOJcCThyQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/acd-containers/static/8946693acf4eee2de4bec5a6a499e38c/0eda2/upgrade_available.webp 288w","/acd-containers/static/8946693acf4eee2de4bec5a6a499e38c/460e2/upgrade_available.webp 576w","/acd-containers/static/8946693acf4eee2de4bec5a6a499e38c/9acd4/upgrade_available.webp 830w"],sizes:"(max-width: 830px) 100vw, 830px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/acd-containers/static/8946693acf4eee2de4bec5a6a499e38c/7fc1e/upgrade_available.png 288w","/acd-containers/static/8946693acf4eee2de4bec5a6a499e38c/a5df1/upgrade_available.png 576w","/acd-containers/static/8946693acf4eee2de4bec5a6a499e38c/456de/upgrade_available.png 830w"],sizes:"(max-width: 830px) 100vw, 830px",type:"image/png"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/acd-containers/static/8946693acf4eee2de4bec5a6a499e38c/456de/upgrade_available.png",alt:"image",title:"image",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-installing-upgrading-md-f194488105bda33b984c.js.map