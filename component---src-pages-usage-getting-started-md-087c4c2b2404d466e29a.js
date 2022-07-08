"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[6689],{3624:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),r=a(8650),o=a.n(r),i=a(1597),l=a(1931),s=a(9514),c=a(5900),d=a.n(c),p=function(e){var t,a=e.title,r=e.theme,o=e.tabs,i=void 0===o?[]:o;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},h=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||r,l=o.baseUrl,s=o.subDirectory,c=l+"/edit/"+o.branch+s+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(4703),m=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,m.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===l,c=new RegExp(l+"/?(#.*)?$"),p=r.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),f=g,v=a(7296),x=a(5387),y=a(3732),k=function(e){var t=e.date,a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,d=t.frontmatter,m=void 0===d?{}:d,g=t.relativePagePath,y=t.titleType,w=m.tabs,b=m.title,_=m.theme,T=m.description,N=m.keywords,A=m.date,C=(0,x.Z)().interiorTheme,E=(0,i.useStaticQuery)("2456312558").site.pathPrefix,P=E?r.pathname.replace(E,""):r.pathname,D=w?P.split("/").filter(Boolean).slice(-1)[0]||o()(w[0],{lower:!0}):"",z=_||C;return n.createElement(s.Z,{tabs:w,homepage:!1,theme:z,pageTitle:b,pageDescription:T,pageKeywords:N,titleType:y},n.createElement(p,{title:c?n.createElement(c,null):b,label:"label",tabs:w,theme:z}),w&&n.createElement(f,{title:b,slug:P,tabs:w,currentTab:D}),n.createElement(v.Z,{padded:!0},a,n.createElement(h,{relativePagePath:g}),n.createElement(k,{date:A})),n.createElement(u.Z,{pageContext:t,location:r,slug:P,tabs:w,currentTab:D}),n.createElement(l.Z,null))}},9462:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return d}});var n=a(3366),r=(a(7294),a(4983)),o=a(3624),i=["components"],l={},s={_frontmatter:l},c=o.Z;function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ACD service provides a robust set of REST APIs to generate clinical annotations over text and interact with persisted analytic artifacts.  To get started using the ACD service, see the Cloud API docs and examples for ",(0,r.kt)("span",null,(0,r.kt)("a",{"aria-current":"",to:"https://merative.github.io/acd-containers/apidocs/index.html?shell",href:"https://merative.github.io/acd-containers/apidocs/index.html?shell",rel:"noopener noreferrer",target:"_blank",className:"LeftNav-module--outboundLink"},"curl"),(0,r.kt)("svg",{focusable:"false",preserveAspectRatio:"xMidYMid meet",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"14",height:"14",viewBox:"0 0 16 16","aria-hidden":"true"},(0,r.kt)("path",{d:"M13,14H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h5v1H3v10h10V8h1v5C14,13.6,13.6,14,13,14z"}),(0,r.kt)("path",{d:"M10 1L10 2 13.3 2 9 6.3 9.7 7 14 2.7 14 6 15 6 15 1z"}))),". The ACD Service REST APIs can be called directly or with the ",(0,r.kt)("a",{parentName:"p",href:"/usage/sdks/"},"IBM Watson Annotator for Clinical Data Software Development Kits (SDKs)"),"."),(0,r.kt)("h3",null,"Deploying and updating the ACD-provided cartridges"),(0,r.kt)("p",null,"ACD provides a set of predefined cartridges (containing ACD flow and profile configuration) as published ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/merative/wh-acd-cartridges"},"here"),". Add the cartridges to your ACD deployment for reference and use as example configuration.  These provided cartrides are built using a reserved prefix and need to be placed into a special supertenant tenant storage location in the ACD configuration store and are available as read-only configurations to all tenants of the ACD instance.  An administrator can deploy or update these predefined cartridges by specifying this supertenant tenant id on a direct call to an ACD container as documented below."),(0,r.kt)("p",null,"The following steps are for the ",(0,r.kt)("a",{parentName:"p",href:"/clouddocs/clinical_insights_overview/"},"Clinical Insights")," cartridge."),(0,r.kt)("h4",null,"1. Download the zip of the ",(0,r.kt)("a",{parentName:"h4",href:"https://github.com/merative/wh-acd-cartridges/blob/master/cartridges/wh_acd.ibm_clinical_insights_v1.0.zip"},"wh_acd.ibm_clinical_insights_v1.0"),"."),(0,r.kt)("h4",null,"2. Port-forward to connect to an ACD pod."),(0,r.kt)("p",null,"List the pod names."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oc get pod -n ${acd_namespace} | grep ibm-wh-acd-acd\n")),(0,r.kt)("p",null,"Port-forward to an ACD pod. ",(0,r.kt)("strong",{parentName:"p"},"Note that only an admin can do the port-forward and access the pods through localhost.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oc port-forward ${pod_name} -n ${acd_namespace} 9443:9443\n")),(0,r.kt)("p",null,"The terminal should hang here waiting to accept network traffic on the localhost port 9443.  Open a new terminal window to run the following steps."),(0,r.kt)("h4",null,"3. Use curl to deploy the cartridge."),(0,r.kt)("p",null,"In a new terminal window, run one of the following commands to deploy the cartridge.  Be sure to be in the directory where the cartridge zip file was downloaded to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -k -X POST \\\n    'https://localhost:9443/services/clinical_data_annotator/api/v1/cartridges?version=2020-09-29' \\\n    --header 'Content-Type: application/octet-stream' \\\n    --header 'Accept: application/json' \\\n    --header 'X-Watson-UserInfo: bluemix-instance-id=__ibm_supertenant__' \\\n    --data-binary @wh_acd.ibm_clinical_insights_v1.0.zip\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Use POST to create it the first time, or PUT to update a previously deployed or partially deployed cartridge."),(0,r.kt)("p",null,"The command above uses the default ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Watson-UserInfo")," header to specify the supertenant tenant id required to deploy or update these provided cartridges to the shared tenant configuration location. This is the default header and format used by ACD if no Tenant header (tenantHeader) value was set in the ACD deployment to support tenant isolation.   If you set a Tenant header value on the ACD instance you will use that header instead.  Using the OAuth proxy and multitenancy configuration with the X-Forwarded-User value as the tenantHeader you’d use this command instead with a different header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -k -X POST \\\n    'https://localhost:9443/services/clinical_data_annotator/api/v1/cartridges?version=2020-09-29' \\\n    --header 'Content-Type: application/octet-stream' \\\n    --header 'Accept: application/json' \\\n    --header 'X-Forwarded-User: __ibm_supertenant__' \\\n    --data-binary @wh_acd.ibm_clinical_insights_v1.0.zip\n")),(0,r.kt)("p",null,"Note this ",(0,r.kt)("strong",{parentName:"p"},"ibm_supertenant")," is only required when deploying the provided cartridges which are shared across tenants.  Note also if you change the instance to add the OAuth proxy for authentication and mutitenancy later, you do not need to redeploy the clinical insights cartridge. If you update the instance later you will need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Forwarded-User")," header with a PUT command on curl, however."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deploying custom cartridges"),"\nIf you are deploying a custom cartridge rather than an ACD-provided cartridge, you would remove this header completely to have it placed into the defaultTenant configuration location, or if you are using ACD multitenancy (which requires a ",(0,r.kt)("a",{parentName:"p",href:"../../security/manage-access"},"security proxy"),"), you should deploy and update your custom cartridges for each application (i.e. tenant) through the proxy route using the bearer token for the tenant and not use a port forward direct to an ACD container at all for deploying custom cartridges."),(0,r.kt)("p",null,"After the POST or PUT comes back, look at the returned JSON structure for a statusLocation field.\nUse GET on the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"statusLocation")," to get status of the POST or PUT of the cartridge."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -k -X GET \\\n    --header 'Accept: application/json' \\\n    'https://localhost:9443/services/clinical_data_annotator/api/v1/cartridges/wh_acd.ibm_clinical_insights_v1.0?version=2021-03-15'\n")),(0,r.kt)("h4",null,"4. Use the ACD APIs to get flows and post to analyze to analyze text."),(0,r.kt)("p",null,"Test ACD APIs to verify the cartridge was deployed using an externalized route to the ACD service.  In the examples below replace <route_host> with the hostname and path to the externalized route to ACD, or if you have a security proxy configured in front of ACD use that route instead and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--header 'Authorization: Bearer xxxxxxxxxxxxxxx'")," header as required for the proxy.  If testing directly to a pod via port fowarding use localhost:9443 as the route host.  The -k option ignores the ssl cert and should be removed if you have a valid certificate on your route."),(0,r.kt)("p",null,"Get the flows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -k -X GET \\\n    --header 'Accept: application/json' \\\n    --header 'Authorization: Bearer xxxxxxxxxxxxxxx' \\\n    'https://<route_host>/services/clinical_data_annotator/api/v1/flows?version=2021-03-15'\n")),(0,r.kt)("p",null,"Use POST to analyze text:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -k -X POST \\\n    --header 'Content-Type: text/plain' \\\n    --header 'Accept: application/json' \\\n    --header 'Authorization: Bearer xxxxxxxxxxxxxxxxxx' \\\n    -d 'Patient has lung cancer, but did not smoke. She may consider chemotherapy as part of a treatment plan.' \\\n    'https://<route_host>/services/clinical_data_annotator/api/v1/analyze/wh_acd.ibm_clinical_insights_v1.0_standard_flow?version=2020-03-31'\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-usage-getting-started-md-087c4c2b2404d466e29a.js.map