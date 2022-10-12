"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[298],{3624:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7294),i=a(8650),r=a.n(i),s=a(1597),o=a(3383),c=a(2618),l=a(5900),d=a.n(l),p=function(e){var t,a=e.title,i=e.theme,r=e.tabs,s=void 0===r?[]:r;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=s.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,i=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||i,o=r.baseUrl,c=r.subDirectory,l=o+"/edit/"+r.branch+c+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},u=a(4703),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),c=a===o,l=new RegExp(o+"/?(#.*)?$"),p=i.replace(l,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=c,t),"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(n.Component),b=h,f=a(7296),v=a(5387),A=a(3732),w=function(e){var t=e.date,a=new Date(t);return t?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},k=function(e){var t=e.pageContext,a=e.children,i=e.location,l=e.Title,d=t.frontmatter,g=void 0===d?{}:d,h=t.relativePagePath,A=t.titleType,k=g.tabs,y=g.title,N=g.theme,E=g.description,C=g.keywords,x=g.date,S=(0,v.Z)().interiorTheme,B=(0,s.useStaticQuery)("2456312558").site.pathPrefix,P=B?i.pathname.replace(B,""):i.pathname,T=k?P.split("/").filter(Boolean).slice(-1)[0]||r()(k[0],{lower:!0}):"",L=N||S;return n.createElement(c.Z,{tabs:k,homepage:!1,theme:L,pageTitle:y,pageDescription:E,pageKeywords:C,titleType:A},n.createElement(p,{title:l?n.createElement(l,null):y,label:"label",tabs:k,theme:L}),k&&n.createElement(b,{title:y,slug:P,tabs:k,currentTab:T}),n.createElement(f.Z,{padded:!0},a,n.createElement(m,{relativePagePath:h}),n.createElement(w,{date:x})),n.createElement(u.Z,{pageContext:t,location:i,slug:P,tabs:k,currentTab:T}),n.createElement(o.Z,null))}},7428:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return d}});var n=a(3366),i=(a(7294),a(4983)),r=a(3624),s=["components"],o={},c={_frontmatter:o},l=r.Z;function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: For IBM Annotator for Clinical Data Container Edition, the License Service is ",(0,i.kt)("strong",{parentName:"em"},"required")," to be running on your cluster in accordance with the pricing rule for IBM containerized software.")),(0,i.kt)("p",null,"The IBM License Service provides monitoring and measuring license usage of ACD.  License usage is based on a Virtual Processing Core (VPC) metric. For ACD, it is the top-level pod ",(0,i.kt)("inlineCode",{parentName:"p"},"merative-acd-acd")," that will be metered for VPC usage.  The usage will be the capacity of the node where this pod runs. For example, ACD running in a cluster with 16 CPU/node has license usage = 16 VPC. The ACD CPU limit can be adjusted by the number of replicas configured and the size of the nodes where ACD runs. For more information on configuration see ",(0,i.kt)("a",{parentName:"p",href:"/acd-containers/management/configuring/"},"Configuration"),"."),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("p",null,"The integrated licensing solution collects and stores the license usage information which can be used for audit purposes and for tracking license consumption in cloud environments.\nThe solution works in the background and does not require any configuration.\nOnly one instance of the License Service is deployed per cluster."),(0,i.kt)("p",null,"Review ",(0,i.kt)("a",{parentName:"p",href:"#validating-if-license-service-is-deployed-on-the-cluster"},"Validating if License Service is deployed on the cluster"),",\nand use the License Service APIs to generate usage audit reports (see ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/cpfs?topic=operator-overview"},"License Service")," documentation)."),(0,i.kt)("h2",null,"Deploying License Service"),(0,i.kt)("p",null,"If ",(0,i.kt)("a",{parentName:"p",href:"#validating-if-license-service-is-deployed-on-the-cluster"},"Validating if License Service is deployed on the cluster")," determines that the License Service is not deployed on the cluster where you have deployed ACD,\nor the License Service does not return a status of Running, refer to the information about License Service, including how to install, retrieve license usage data, and troubleshoot.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/IBM/ibm-licensing-operator/blob/master/docs/License_Service_main.md"},"License Service")," documentation. If deploying the License Service to a disconnected or air-gapped cluster, see the ","[offline installation License Service]","(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/IBM/ibm-licensing-operator/blob/latest/docs/Content/Install_offline"},"https://github.com/IBM/ibm-licensing-operator/blob/latest/docs/Content/Install_offline"),".."),(0,i.kt)("h2",null,"Validating if License Service is deployed on the cluster"),(0,i.kt)("p",null,"To ensure license reporting continuity, make sure that License Service is successfully deployed.\nIt is recommended to periodically verify whether it is active."),(0,i.kt)("p",null,"To validate whether License Service is deployed and running on the cluster, you can, for example, log into the Red Hat OpenShift Container Platform cluster and run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"oc get pods --all-namespaces | grep ibm-licensing | grep -v operator\n")),(0,i.kt)("p",null,"The following response is a confirmation of successful deployment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"1/1     Running\n")),(0,i.kt)("h2",null,"Viewing license usage"),(0,i.kt)("p",null,"The license service is accessable via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ibm-licensing-service-instance")," route ",(0,i.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"530px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAABD0lEQVQoz5WSzW7CMBCE/f7P1LfgkEuhFUUQJ06xibP2en/cggFVRRz4Dj7Mamd2JBvv/Xa7tdYOwzCO4+FwmKbJWuucSykxc32OUVVEFBFEBIBlWdqbUiIiZpbnmGma9hdyzvVFzDAMXdetVivvfa1VVV9YVtVWTERqraWU1qLp97P/rTXFzPO8Wb87N8YYRcQ51/c9AKScw6kxx7jQDWYmohijqhqtFaWy6CXsaqwX/kY1RURyzkTUpoZFP8d0XKjwY9urxd2IiXdfuxBCu9wk0rdN2Xu0AfdH7D32AW0ou28E5Fvk1QVw+eg3bnTOufMySV0fBYoAypwlZgYUQD1loYdbWHhJEc5fAX47/wBm20gTiUfVjwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("picture",{parentName:"span"},"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/acd-containers/static/0e8f5f492302a9921f789deb3e39abe2/0eda2/license_route.webp 288w","/acd-containers/static/0e8f5f492302a9921f789deb3e39abe2/acad6/license_route.webp 530w"],sizes:"(max-width: 530px) 100vw, 530px",type:"image/webp"}),"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/acd-containers/static/0e8f5f492302a9921f789deb3e39abe2/7fc1e/license_route.png 288w","/acd-containers/static/0e8f5f492302a9921f789deb3e39abe2/f113e/license_route.png 530w"],sizes:"(max-width: 530px) 100vw, 530px",type:"image/png"}),"\n          ",(0,i.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/acd-containers/static/0e8f5f492302a9921f789deb3e39abe2/f113e/license_route.png",alt:"ibm-licensing-service-instance",title:"ibm-licensing-service-instance",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")," that is created as part of the license service setup."),(0,i.kt)("p",null,"In order to run the report the ",(0,i.kt)("inlineCode",{parentName:"p"},"ibm-licensing-token")," secret’s token must be retrieved and provided on the above service. Once run, the results will show the ",(0,i.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"557px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5UlEQVQY043Ky27CQBBE0fn/3wsKYCAKjoTlDH7OeB7dXd0RSnYIKUd3UYtyNx/a63W/P3h/v5w/Ts05xi3nklJOKZdSa6VXuWkcpmnue991/WN4fx+GlFPcthAjMasqVGFPKdycTWB/WHVhy9AKjWIFWoAsmgSBNDDmisBYCTMpwX2OQqKmqmaIXHdzfV/ouNa3mZrAXxudAh1XTKSbYCFE1ihY2URdO0s7SeN5ympZqAm1WblNj9/vlaAEU3vmLoPsOj58cxGjUlK7oCvcJbkl6TJGstfckjEljBu2ahW1oNi//QAGMZXPFUTdrgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("picture",{parentName:"span"},"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/acd-containers/static/340448472933390d59b196d57c90581e/0eda2/license_report.webp 288w","/acd-containers/static/340448472933390d59b196d57c90581e/0ae72/license_report.webp 557w"],sizes:"(max-width: 557px) 100vw, 557px",type:"image/webp"}),"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/acd-containers/static/340448472933390d59b196d57c90581e/7fc1e/license_report.png 288w","/acd-containers/static/340448472933390d59b196d57c90581e/b503f/license_report.png 557w"],sizes:"(max-width: 557px) 100vw, 557px",type:"image/png"}),"\n          ",(0,i.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/acd-containers/static/340448472933390d59b196d57c90581e/b503f/license_report.png",alt:"ACD usage",title:"ACD usage",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),"."),(0,i.kt)("h2",null,"Archiving license usage data"),(0,i.kt)("p",null,"Remember to archive the license usage evidence before you decommission the cluster where ACD was deployed. Retrieve the audit snapshot for the period when ACD was on the cluster and store it in case of audit."),(0,i.kt)("p",null,"For more information about the licensing solution, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/cpfs?topic=operator-overview"},"License Service")," documentation."),(0,i.kt)("p",null,"For FAQs related to Container licensing, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/software/passportadvantage/containerfaqov.html"},"Container Licensing FAQs"),"."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-installing-license-tracking-md-7cbe116da11b0ba774c8.js.map