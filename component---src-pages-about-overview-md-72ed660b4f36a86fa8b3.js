"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[936],{3624:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7294),i=a(8650),o=a.n(i),r=a(1597),c=a(3383),l=a(2618),s=a(5900),d=a.n(s),u=function(e){var t,a=e.title,i=e.theme,o=e.tabs,r=void 0===o?[]:o;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,i=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||i,c=o.baseUrl,l=o.subDirectory,s=c+"/edit/"+o.branch+l+"/src/pages"+t;return c?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},m=a(4703),h=a(1721),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,c=i.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),l=a===c,s=new RegExp(c+"/?(#.*)?$"),u=i.replace(s,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component),g=f,b=a(7296),w=a(5387),C=a(3732),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(C.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(C.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},k=function(e){var t=e.pageContext,a=e.children,i=e.location,s=e.Title,d=t.frontmatter,h=void 0===d?{}:d,f=t.relativePagePath,C=t.titleType,k=h.tabs,A=h.title,y=h.theme,D=h.description,E=h.keywords,N=h.date,x=(0,w.Z)().interiorTheme,P=(0,r.useStaticQuery)("2456312558").site.pathPrefix,T=P?i.pathname.replace(P,""):i.pathname,S=k?T.split("/").filter(Boolean).slice(-1)[0]||o()(k[0],{lower:!0}):"",H=y||x;return n.createElement(l.Z,{tabs:k,homepage:!1,theme:H,pageTitle:A,pageDescription:D,pageKeywords:E,titleType:C},n.createElement(u,{title:s?n.createElement(s,null):A,label:"label",tabs:k,theme:H}),k&&n.createElement(g,{title:A,slug:T,tabs:k,currentTab:S}),n.createElement(b.Z,{padded:!0},a,n.createElement(p,{relativePagePath:f}),n.createElement(v,{date:N})),n.createElement(m.Z,{pageContext:t,location:i,slug:T,tabs:k,currentTab:S}),n.createElement(c.Z,null))}},1415:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return d}});var n=a(3366),i=(a(7294),a(4983)),o=a(3624),r=["components"],c={},l={_frontmatter:c},s=o.Z;function d(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)(s,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"Annotator for Clinical Data (ACD) Container Edition"),(0,i.kt)("h2",null,"Details"),(0,i.kt)("p",null,"This program is the container version of Annotator for Clinical Data (ACD).\nThe program allows a customer to run Annotator for Clinical Data on a cloud of their choice that supports Red Hat OpenShift.\nThis documentation discusses how to install Annotator for Clinical Data Container Edition on a Red Hat OpenShift cluster."),(0,i.kt)("p",null,"Annotator for Clinical Data is an AI-powered service that applies Natural Language Processing (NLP) engines to deliver meaningful insights from unstructured data, purpose-built for healthcare and life sciences domains. Annotator for Clinical Data uses clinical NLP trained models to extract key concepts from natural language text, such as conditions, medications, allergies, and procedures along with their associated medical codes (e.g. ICD-10, RxNorm, Snomed, LOINC). These features are enriched with deep contextual insights, along with values for key clinical attributes, in order to provide a more complete view of the data at hand. Potential data sources include a variety of healthcare and life sciences sources, such as clinical notes, discharge summaries, clinical trial protocols, and literature data."),(0,i.kt)("p",null,"This program supports English-only text for insight extraction."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://acd-try-it-out.mybluemix.net/preview"},"Try it Now")),(0,i.kt)("h2",null,"Features"),(0,i.kt)("h3",null,"Clinical Insights"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/acd-containers/clouddocs/clinical_insights_overview/"},"clinical insights")," feature is a ready-to-use annotation capability within Annotator for Clinical Data that provides critical contextual information for problems, procedures, and medications identified in the text."),(0,i.kt)("h3",null,"Clinical Coding"),(0,i.kt)("p",null,"Identify and code clinical concepts with support for SNOMED CT, RxNorm, ICD-10-PCS, CPT, NCI, MESH, and LOINC."),(0,i.kt)("h3",null,"Flexible Annotators"),(0,i.kt)("p",null,"The medical domain NLP service features a variety of annotators for detecting metadata (such as entities, concepts, concept values, negated spans, hypothetical spans)\nand a collection of annotators that detect, normalize, and code medical and social findings from unstructured clinical data. Multiple annotators can be employed\nto analyze unstructured data from a single request."),(0,i.kt)("h2",null,"How it works"),(0,i.kt)("p",null,"Annotator for Clinical Data is a REST API service that detects medical concepts within unstructured data.\nWhen you send unstructured data to the service to be analyzed and designate the desired annotators to employ,\nthe service will route your unstructured data through the designated annotators and return the medical concepts detected within your unstructured data."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Designate which ",(0,i.kt)("a",{parentName:"p",href:"/acd-containers/usage/overview/#available-annotators"},"available annotators")," to employ in analyzing your unstructured data.\nThis designation is defined as an annotator flow. See ",(0,i.kt)("a",{parentName:"p",href:"/acd-containers/usage/analyze_text/"},"Analyzing Text")," for more details.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Send your unstructured data along with the annotator flow to the service to extract the desired medical concepts.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The service will return a JSON response with extracted insights from the unstructured text analysis based on the requested annotator flow."))),(0,i.kt)("h2",null,"Annotator for Clinical Data Container Edition Overview"),(0,i.kt)("p",null,"The container edition of Annotator for Clinical Data is provided as a Kubernetes operator and set of container images that allow you to deploy, configure and manage Annotator for Clinical Data instances on your own Kubernetes cluster.  This documentation provides the ",(0,i.kt)("a",{parentName:"p",href:"../../planning/namespace/"},"Planning")," and  ",(0,i.kt)("a",{parentName:"p",href:"../../installing/prereqs/"},"Installation")," instructions to get started."),(0,i.kt)("p",null,"Annotator for Clinical Data consists of a top level “macro” or orchestration Annotator for Clinical Data service which provides the REST API endpoints and a set of local micro services that provide the analytics or annotators that are invoked with specific parameters and in a specified order during analyze calls.   These are provided as Kubernetes container images and the operator creates and manages the deployment of these.\nThe analytics of text is a stateless operation with nothing stored, however, configuration is stored in a local shared file system or object storage.\nThe following shows this setup with an optional security proxy that can be configured."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.083333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACs0lEQVQoz12S20vTAQCFf1vQhUot0+pBpTRTYSGWUmbmJa28bOosnY7llhMvZRphdlNzmivtpuZ00zbnVnmZZjlEi8SE1k0ffBHCiKioiIj+gi+0h7CH7+Vwznn6BEEQcF/nxbbgUAKDQ/Ha6INYJGIh9/b24OT5FE6cS6bg9CG05YmUVUtJV0YiEkSIxeIliP7uBCJ2J5OvGyCvtp+ww9rFs0WWCfhINuAbsp6twZ6Ex0uISg5ls9/qf53/CfDfzvHcYlTJKgo1Z8g6WkBmYgbKXdHkhEYiC4hAtiUMVcheNBEHUESlkpaqIkuuJjdLgzJbzRFpDspMDWGScASNSsvPt5953epgfugF7xwv+dDn4kuLgw9t/Uw2Gxi72cx0WzfzhmHmWgeZbbLxttbEJ+cM32a+Mj84w6+Jj1wuPIcgj0li9sEUYx1OprrGcJnHeNPzhFeWcUbvOLjXbKHnViej5iGe9zzDZXLy6pqFlw1dvL9t5731IXNtdr7bRqjOUiNk7IpmuM5KT303trpueq/acXYMYzeOclPfy636BxhvDOOwTOCwPKXX/BS77TkDtilcNTcY1Gux6jSMNJ+gRBqDkO8fwvQlIwP1Vhw1nQxWtPBDrsGla2dcf5fJBhN2nQWz/j5PdEae6TowVJvpq+3id4oC9idBrBQS5bQHShAOrlqD0TeIxqBwLPtk2Pak4NwRiUmqwJRbgkFRTE2KivL9qbTmFGMuqOSKPJ+6eCmPI+JweHhiX7OWETcP1CtW/tVmgZC96SgvWlFUdhGbX0909lnSS1tIO2XATxKz2ElUV1Pc9Ig90kKWu28ioagJt4CdS7VZEDT8sBZZWSfSUyZSSzvIrjCTV2VHeb4b5QUb6SXXScqr4kiRHllhI3EqHTGKC8QpL5NwrA6/oN2LZ2KRmD//ArdMmEcH3gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("picture",{parentName:"span"},"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/acd-containers/static/e5bcce1c886d48ed88fa5a50c5bfcd9f/0eda2/ACD-OCP-HLD.webp 288w","/acd-containers/static/e5bcce1c886d48ed88fa5a50c5bfcd9f/460e2/ACD-OCP-HLD.webp 576w","/acd-containers/static/e5bcce1c886d48ed88fa5a50c5bfcd9f/e0ca3/ACD-OCP-HLD.webp 1152w","/acd-containers/static/e5bcce1c886d48ed88fa5a50c5bfcd9f/d02be/ACD-OCP-HLD.webp 1728w","/acd-containers/static/e5bcce1c886d48ed88fa5a50c5bfcd9f/73ad0/ACD-OCP-HLD.webp 2045w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/acd-containers/static/e5bcce1c886d48ed88fa5a50c5bfcd9f/7fc1e/ACD-OCP-HLD.png 288w","/acd-containers/static/e5bcce1c886d48ed88fa5a50c5bfcd9f/a5df1/ACD-OCP-HLD.png 576w","/acd-containers/static/e5bcce1c886d48ed88fa5a50c5bfcd9f/3cbba/ACD-OCP-HLD.png 1152w","/acd-containers/static/e5bcce1c886d48ed88fa5a50c5bfcd9f/0b124/ACD-OCP-HLD.png 1728w","/acd-containers/static/e5bcce1c886d48ed88fa5a50c5bfcd9f/0ade1/ACD-OCP-HLD.png 2045w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,i.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/acd-containers/static/e5bcce1c886d48ed88fa5a50c5bfcd9f/3cbba/ACD-OCP-HLD.png",alt:"Annotator for Clinical Data Container Edition",title:"Annotator for Clinical Data Container Edition",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,i.kt)("h2",null,"Customizing Annotator for Clinical Data"),(0,i.kt)("p",null,"Annotator for Clinical Data provides a set of predefined configurations you can install to use with your local ACD instance.  See ",(0,i.kt)("a",{parentName:"p",href:"../../usage/getting-started/"},"Using ACD")," for setup instructions after installing Annotator for Clinical Data.  See the ",(0,i.kt)("a",{parentName:"p",href:"../../usage/customizing/"},"Customizing")," documentation for information on customizing Annotator for Clinical Data."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-about-overview-md-72ed660b4f36a86fa8b3.js.map