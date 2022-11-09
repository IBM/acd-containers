"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[864],{3624:function(e,a,t){t.d(a,{Z:function(){return P}});var n=t(7294),i=t(8650),r=t.n(i),o=t(1597),l=t(3383),s=t(2618),d=t(5900),c=t.n(d),p=function(e){var a,t=e.title,i=e.theme,r=e.tabs,o=void 0===r?[]:r;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(a={},a["PageHeader-module--with-tabs--vbQ-W"]=o.length,a["PageHeader-module--dark-mode--WCeH8"]="dark"===i,a))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},m=function(e){var a=e.relativePagePath,t=e.repository,i=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=t||i,l=r.baseUrl,s=r.subDirectory,d=l+"/edit/"+r.branch+s+"/src/pages"+a;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},u=t(4703),b=t(1721),v=function(e){function a(){return e.apply(this,arguments)||this}return(0,b.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,i=e.slug,l=i.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var a,t=r()(e,{lower:!0,strict:!0}),s=t===l,d=new RegExp(l+"/?(#.*)?$"),p=i.replace(d,t);return n.createElement("li",{key:e,className:c()((a={},a["PageTabs-module--selected-item--aBB0K"]=s,a),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":a},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},a}(n.Component),h=v,g=t(7296),k=t(5387),f=t(3732),y=function(e){var a=e.date,t=new Date(a);return a?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},P=function(e){var a=e.pageContext,t=e.children,i=e.location,d=e.Title,c=a.frontmatter,b=void 0===c?{}:c,v=a.relativePagePath,f=a.titleType,P=b.tabs,E=b.title,D=b.theme,N=b.description,w=b.keywords,B=b.date,x=(0,k.Z)().interiorTheme,L=(0,o.useStaticQuery)("2456312558").site.pathPrefix,A=L?i.pathname.replace(L,""):i.pathname,T=P?A.split("/").filter(Boolean).slice(-1)[0]||r()(P[0],{lower:!0}):"",C=D||x;return n.createElement(s.Z,{tabs:P,homepage:!1,theme:C,pageTitle:E,pageDescription:N,pageKeywords:w,titleType:f},n.createElement(p,{title:d?n.createElement(d,null):E,label:"label",tabs:P,theme:C}),P&&n.createElement(h,{title:E,slug:A,tabs:P,currentTab:T}),n.createElement(g.Z,{padded:!0},t,n.createElement(m,{relativePagePath:v}),n.createElement(y,{date:B})),n.createElement(u.Z,{pageContext:a,location:i,slug:A,tabs:P,currentTab:T}),n.createElement(l.Z,null))}},3598:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return c}});var n=t(3366),i=(t(7294),t(4983)),r=t(3624),o=["components"],l={},s={_frontmatter:l},d=r.Z;function c(e){var a=e.components,t=(0,n.Z)(e,o);return(0,i.kt)(d,Object.assign({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Pod Disruption Budget (pdb) limits the number of pods that are down simultaneously from voluntary disruptions.  Refer to these links for information on disruptions and Pod Disruption Budgets."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/disruptions/"},"Disruptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/"},"Pod Disruption Budgets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.9/nodes/pods/nodes-pods-configuring.html#nodes-pods-configuring-pod-distruption-about_nodes-pods-configuring"},"OpenShift documentation"))),(0,i.kt)("p",null,"A pdb is not required but may be desired if you are running 2 or more replicas of ACD and want to ensure a minimal availability when cluster maintenance (such as node replacement) is done. Be aware that if you have a minimum availability of 1 in a pod disruption budget and a deployment has a replica count of 1, the pod will never be moved by the scheduler and will cause voluntary maintenance such as replacing nodes to hang.    "),(0,i.kt)("p",null,"To use a pdb with ACD, create a Pod Disruption Budget object for each ACD deployment. The examples below can be used to do this."),(0,i.kt)("h3",null,"Pod Disruption Budget Setup"),(0,i.kt)("p",null,"Download the following example yaml and save it as acd-pdb.yaml locally.  Edit the spec as desired.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"acd-pdb.yaml","acd-pdb.yaml":!0},"kind: List\napiVersion: v1\nitems:\n- apiVersion: policy/v1\n  kind: PodDisruptionBudget\n  metadata:\n    name: merative-acd-acd-pdb\n  spec:\n    minAvailable: 1\n    selector:\n      matchLabels:\n        app.kubernetes.io/name: merative-acd-acd\n- apiVersion: policy/v1\n  kind: PodDisruptionBudget\n  metadata:\n    name: merative-acd-aci-pdb\n  spec:\n    minAvailable: 1\n    selector:\n      matchLabels:\n        app.kubernetes.io/name: merative-acd-aci\n- apiVersion: policy/v1\n  kind: PodDisruptionBudget\n  metadata:\n    name: merative-acd-av-pdb\n  spec:\n    minAvailable: 1\n    selector:\n      matchLabels:\n        app.kubernetes.io/name: merative-acd-av\n- apiVersion: policy/v1\n  kind: PodDisruptionBudget\n  metadata:\n    name: merative-acd-cd-pdb\n  spec:\n    minAvailable: 1\n    selector:\n      matchLabels:\n        app.kubernetes.io/name: merative-acd-cd\n- apiVersion: policy/v1\n  kind: PodDisruptionBudget\n  metadata:\n    name: merative-acd-cds-pdb\n  spec:\n    minAvailable: 1\n    selector:\n      matchLabels:\n        app.kubernetes.io/name: merative-acd-cds\n- apiVersion: policy/v1\n  kind: PodDisruptionBudget\n  metadata:\n    name: merative-acd-cv-pdb\n  spec:\n    minAvailable: 1\n    selector:\n      matchLabels:\n        app.kubernetes.io/name: merative-acd-cv\n- apiVersion: policy/v1\n  kind: PodDisruptionBudget\n  metadata:\n    name: merative-acd-hyp-pdb\n  spec:\n    minAvailable: 1\n    selector:\n      matchLabels:\n        app.kubernetes.io/name: merative-acd-hyp\n- apiVersion: policy/v1\n  kind: PodDisruptionBudget\n  metadata:\n    name: merative-acd-mod-pdb\n  spec:\n    minAvailable: 1\n    selector:\n      matchLabels:\n        app.kubernetes.io/name: merative-acd-mod\n- apiVersion: policy/v1\n  kind: PodDisruptionBudget\n  metadata:\n    name: merative-acd-neg-pdb\n  spec:\n    minAvailable: 1\n    selector:\n      matchLabels:\n        app.kubernetes.io/name: merative-acd-neg\n- apiVersion: policy/v1\n  kind: PodDisruptionBudget\n  metadata:\n    name: merative-acd-ont-pdb\n  spec:\n    minAvailable: 1\n    selector:\n      matchLabels:\n        app.kubernetes.io/name: merative-acd-ont\n- apiVersion: policy/v1\n  kind: PodDisruptionBudget\n  metadata:\n    name: merative-acd-spl-pdb\n  spec:\n    minAvailable: 1\n    selector:\n      matchLabels:\n        app.kubernetes.io/name: merative-acd-spl\n")),(0,i.kt)("p",null,"Create the Pod Disruption Budgets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"oc project <acd_namespace>\noc create -f acd-pdb.yaml\n")),(0,i.kt)("p",null,"Check the status of the Pod Disruption Budgets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"oc get pdb\n")),(0,i.kt)("p",null,"Get details of the Pod Disruption Budgets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"oc describe pdb\n")),(0,i.kt)("p",null,"You can patch the Pod Disruption Budgets and change the spec using the file with an override such as this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'oc patch -f acd-pdb.yaml -p \'{"spec":{"minAvailable":0}}\'\n')),(0,i.kt)("p",null,"If you no long want the Pod Disruption Budgets you can remove them using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"oc delete pdb -f acd-pdb.yaml\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-management-pod-disruption-md-a5d765b169cf9374e405.js.map