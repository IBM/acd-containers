"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[9973],{3624:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(7294),o=a(8650),l=a.n(o),r=a(1597),i=a(1931),s=a(9514),c=a(5900),p=a.n(c),m=function(e){var t,a=e.title,o=e.theme,l=e.tabs,r=void 0===l?[]:l;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,o=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||o,i=l.baseUrl,s=l.subDirectory,c=i+"/edit/"+l.branch+s+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},h=a(4703),u=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,i=o.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===i,c=new RegExp(i+"/?(#.*)?$"),m=o.replace(c,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),k=g,f=a(7296),N=a(5387),b=a(3732),w=function(e){var t=e.date,a=new Date(t);return t?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},C=function(e){var t=e.pageContext,a=e.children,o=e.location,c=e.Title,p=t.frontmatter,u=void 0===p?{}:p,g=t.relativePagePath,b=t.titleType,C=u.tabs,v=u.title,E=u.theme,D=u.description,y=u.keywords,P=u.date,x=(0,N.Z)().interiorTheme,A=(0,r.useStaticQuery)("2456312558").site.pathPrefix,T=A?o.pathname.replace(A,""):o.pathname,O=C?T.split("/").filter(Boolean).slice(-1)[0]||l()(C[0],{lower:!0}):"",I=E||x;return n.createElement(s.Z,{tabs:C,homepage:!1,theme:I,pageTitle:v,pageDescription:D,pageKeywords:y,titleType:b},n.createElement(m,{title:c?n.createElement(c,null):v,label:"label",tabs:C,theme:I}),C&&n.createElement(k,{title:v,slug:T,tabs:C,currentTab:O}),n.createElement(f.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(w,{date:P})),n.createElement(h.Z,{pageContext:t,location:o,slug:T,tabs:C,currentTab:O}),n.createElement(i.Z,null))}},2170:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return p}});var n=a(3366),o=(a(7294),a(4983)),l=a(3624),r=["components"],i={},s={_frontmatter:i},c=l.Z;function p(e){var t=e.components,a=(0,n.Z)(e,r);return(0,o.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ACD should be uninstalled using the same interface that was used to install. The uninstall can be done using either the OpenShift Container Platform web console or the command line."),(0,o.kt)("p",null,"The order of the uninstall is important. Delete the ACD service instance first, then delete the operator. If the operator was installed into all namespaces, ensure all ACD service instances are deleted before deleting the operator."),(0,o.kt)("p",null,"Follow the uninstall steps for the ACD service and operator before deleting a project or namespace. Failure to do so may result in resources left in a terminating state. See the ",(0,o.kt)("a",{parentName:"p",href:"/troubleshooting/troubleshooting-uninstall/"},"Troubleshooting Uninstall")," section for more info."),(0,o.kt)("p",null,"To check for installed ACD instances, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc get acds --all-namespace\n")),(0,o.kt)("h2",null,"Uninstalling using the OpenShift Container Platform web console"),(0,o.kt)("h3",null,"1. Uninstall the ACD service."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to the OpenShift Container Platform ",(0,o.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.7/web_console/web-console.html"},"web console")," using your login credentials."),(0,o.kt)("li",{parentName:"ol"},"Expand the ",(0,o.kt)("strong",{parentName:"li"},"Operators")," dropdown and select ",(0,o.kt)("strong",{parentName:"li"},"Installed Operators")," to open the ",(0,o.kt)("strong",{parentName:"li"},"Installed Operators")," page."),(0,o.kt)("li",{parentName:"ol"},"Expand the ",(0,o.kt)("strong",{parentName:"li"},"Project")," dropdown and select the project the operator is installed in. Select the ",(0,o.kt)("strong",{parentName:"li"},"Annotator for Clinical Data")," link in the ",(0,o.kt)("strong",{parentName:"li"},"Provided APIs")," column."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"More options")," icon on the right side of row showing the instance to be deleted."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Delete Acd")," menu option to open the delete confirmation panel."),(0,o.kt)("li",{parentName:"ol"},"Check that the namespace and instance name are correct and click ",(0,o.kt)("strong",{parentName:"li"},"Delete")," to shutdown the associated pods and delete the ACD service instance."),(0,o.kt)("li",{parentName:"ol"},"Check uninstallation progress by expanding ",(0,o.kt)("strong",{parentName:"li"},"Workloads")," and selecting ",(0,o.kt)("strong",{parentName:"li"},"Pods")," in the left navigation menu.\nConfirm all the ACD instance pods show  Terminating status and then are removed from the list.")),(0,o.kt)("p",null,"Note that the operator pod will remain, if it was installed into the same namespace. Uninstall it next."),(0,o.kt)("h3",null,"2. Uninstall the ACD operator."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to the OpenShift Container Platform ",(0,o.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.7/web_console/web-console.html"},"web console")," using your login credentials."),(0,o.kt)("li",{parentName:"ol"},"Expand the ",(0,o.kt)("strong",{parentName:"li"},"Operators")," dropdown and select ",(0,o.kt)("strong",{parentName:"li"},"Installed Operators")," to open the ",(0,o.kt)("strong",{parentName:"li"},"Installed Operators")," page."),(0,o.kt)("li",{parentName:"ol"},"Expand the ",(0,o.kt)("strong",{parentName:"li"},"Project")," dropdown and select the project the operator is installed in. For cluster-wide operators, select the ",(0,o.kt)("inlineCode",{parentName:"li"},"openshift-operators")," project."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"More options")," icon on the right side of row showing the operator to be deleted."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Uninstall Operator")," menu option to open the delete confirmation panel."),(0,o.kt)("li",{parentName:"ol"},"Note the warning about removing the operator’s managed resources first. You should always uninstall the ACD instance before uninstalling the operator. If ready to proceed, check that the namespace and instance name are correct and click ",(0,o.kt)("strong",{parentName:"li"},"Uninstall")," to delete the ACD operator."),(0,o.kt)("li",{parentName:"ol"},"Check uninstallation progress by expanding ",(0,o.kt)("strong",{parentName:"li"},"Workloads")," and selecting ",(0,o.kt)("strong",{parentName:"li"},"Pods")," in the left navigation menu.\nConfirm the ACD operator pod shows Terminating status and then is removed from the list.")),(0,o.kt)("h3",null,"3. Delete the namespace created for ACD."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important"),": Do not delete any of the default or system namespaces, such as those used when the ACD operator is installed for all namespaces (some examples of these are: default, kube-system, kube-public, and openshift-operators)."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to the OpenShift Container Platform ",(0,o.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.7/web_console/web-console.html"},"web console")," using your login credentials."),(0,o.kt)("li",{parentName:"ol"},"Expand the ",(0,o.kt)("strong",{parentName:"li"},"Home")," dropdown and select ",(0,o.kt)("strong",{parentName:"li"},"Projects")," to open the list of projects."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"More options")," icon on the right side of row showing the project to be deleted."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Delete Project")," menu option to open the delete confirmation panel."),(0,o.kt)("li",{parentName:"ol"},"Check that the namespace is correct and confirm deletion by entering the project name into the text box. Click ",(0,o.kt)("strong",{parentName:"li"},"Delete")," to delete the project.")),(0,o.kt)("h2",null,"Uninstalling using Command line"),(0,o.kt)("h3",null,"1. Uninstall the ACD service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cloudctl case launch \\\n    --case case/ibm-wh-acd \\\n    --namespace <target_namespace> \\\n    --inventory clinicalDataAnnotatorOperator \\\n    --action deleteCustomResources \\\n    --tolerance 1\n")),(0,o.kt)("h3",null,"2. Uninstall the ACD operator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cloudctl case launch \\\n    --case case/ibm-wh-acd \\\n    --namespace <target_namespace> \\\n    --inventory clinicalDataAnnotatorOperatorSetup \\\n    --action uninstallOperator \\\n    --tolerance 1\n")),(0,o.kt)("h3",null,"3. Delete namespace"),(0,o.kt)("p",null,"To remove the namespace run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc delete namespace <namespace>\n")),(0,o.kt)("h2",null,"Uninstalling the IBM Operator catalog"),(0,o.kt)("p",null,"To remove the catalog run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc delete catalogsource ibm-operator-catalog -n openshift-marketplace\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," This catalog resource provides access to many operators, one of which is the IBM Watson Annotator for Clinical Data Container Edition operator. Before deleting the catalog source, ensure you want to remove the full catalog. If you need to reinstall, see ",(0,o.kt)("a",{parentName:"p",href:"/installing/installing/#installing-the-ibm-operator-catalog"},"Installing the IBM Operator catalog"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-installing-uninstalling-md-b7523cb1829907ff08d3.js.map