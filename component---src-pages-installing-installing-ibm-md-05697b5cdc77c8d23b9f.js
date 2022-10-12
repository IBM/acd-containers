"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[5522],{3624:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(7294),r=a(8650),o=a.n(r),l=a(1597),i=a(3383),s=a(2618),p=a(5900),c=a.n(p),m=function(e){var t,a=e.title,r=e.theme,o=e.tabs,l=void 0===o?[]:o;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=l.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||r,i=o.baseUrl,s=o.subDirectory,p=i+"/edit/"+o.branch+s+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},d=a(4703),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,i=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===i,p=new RegExp(i+"/?(#.*)?$"),m=r.replace(p,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),k=g,f=a(7296),N=a(5387),y=a(3732),b=function(e){var t=e.date,a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},C=function(e){var t=e.pageContext,a=e.children,r=e.location,p=e.Title,c=t.frontmatter,h=void 0===c?{}:c,g=t.relativePagePath,y=t.titleType,C=h.tabs,w=h.title,v=h.theme,A=h.description,x=h.keywords,D=h.date,I=(0,N.Z)().interiorTheme,O=(0,l.useStaticQuery)("2456312558").site.pathPrefix,E=O?r.pathname.replace(O,""):r.pathname,B=C?E.split("/").filter(Boolean).slice(-1)[0]||o()(C[0],{lower:!0}):"",M=v||I;return n.createElement(s.Z,{tabs:C,homepage:!1,theme:M,pageTitle:w,pageDescription:A,pageKeywords:x,titleType:y},n.createElement(m,{title:p?n.createElement(p,null):w,label:"label",tabs:C,theme:M}),C&&n.createElement(k,{title:w,slug:E,tabs:C,currentTab:B}),n.createElement(f.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(b,{date:D})),n.createElement(d.Z,{pageContext:t,location:r,slug:E,tabs:C,currentTab:B}),n.createElement(i.Z,null))}},149:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return c}});var n=a(3366),r=(a(7294),a(4983)),o=a(3624),l=["components"],i={},s={_frontmatter:i},p=o.Z;function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)(p,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: The following instructions are for installing IBM Annotator for Clinical Data Container Edition.")),(0,r.kt)("p",null,"To install IBM Annotator for Clinical Data Container Edition, you may use either the OpenShift Container Platform web console, the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.11/welcome/index.html"},"oc")," command line utility, or the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IBM/cloud-pak-cli"},"cloudctl")," command line utility."),(0,r.kt)("h2",null,"Overview"),(0,r.kt)("p",null,"Annotator for Clinical Data Container Edition is an ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},"operator-based")," release and uses a custom resource to define your ACD configuration."),(0,r.kt)("p",null,"The ACD operator uses the custom resource to deploy and manage the entire lifecycle of each ACD instance. Custom resources are presented as YAML configuration documents that define instances of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Acd")," custom resource type."),(0,r.kt)("p",null,"Installing ACD has three phases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the IBM operator catalog:  This will deploy the catalog from which IBM operators, including ACD, can be installed."),(0,r.kt)("li",{parentName:"ol"},"Install the ACD operator:  This will deploy the operator that can be used to install and manage your ACD instances."),(0,r.kt)("li",{parentName:"ol"},"Install one or more replicas of ACD by using the ACD operator.")),(0,r.kt)("h2",null,"Before you begin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/acd-containers/planning/namespace/"},"Plan for your installation"),", such as preparing for persistent storage, considering security options, and planning for performance and capacity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://myibm.ibm.com/products-services/containerlibrary"},"Obtain an entitlement key")," and ",(0,r.kt)("a",{parentName:"li",href:"#verifying-acd-registry-access"},"verify registry access")," to the IBM Entitled Registry. Note that customers must use their IBMid to log in to their ",(0,r.kt)("inlineCode",{parentName:"li"},"myibm")," account. The customer must request the entitlement key so the ownership and management of the entitlement stays with them."),(0,r.kt)("li",{parentName:"ul"},"Set up your environment according to the ",(0,r.kt)("a",{parentName:"li",href:"/acd-containers/installing/prereqs/"},"prerequisites"),", including setting up your OpenShift Container Platform."),(0,r.kt)("li",{parentName:"ul"},"Obtain the connection details for your OpenShift Container Platform cluster from your administrator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/acd-containers/installing/setup-namespace/"},"Set up")," your project and project dependencies if required for your environment. If using the CLI to install the ACD operator and ACD service, you will need the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/IBM/cloud-pak-cli"},"cloudctl")," command line utility.")),(0,r.kt)("h2",null,"Verifying ACD Registry access"),(0,r.kt)("p",null,"A pull secret consists of a username and password used to authenticate the user with the container registry to ensure the user is entitled to pull images. When an entitlement key is obtained from myibm, the username should be ",(0,r.kt)("inlineCode",{parentName:"p"},"cp")," and the password should be the entitlement key."),(0,r.kt)("p",null,"Before setting up the pull secret, verify the entitlement key can access the entitled registry."),(0,r.kt)("p",null,"Example (Docker with IBM Entitled Registry entitlement key):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker login cp.icr.io --username cp --password <your entitlement key>\n")),(0,r.kt)("h2",null,"Air-gapped (disconnected) installation"),(0,r.kt)("p",null,"Some environments are disconnected and do not have access to the public internet, and therefore no access to DockerHub or other image registries. When deploying in an air-gapped environment, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/acd-containers/installing/air-gap-installation/"},"Air-gap Installation"),"."),(0,r.kt)("h2",null,"Non air-gapped (connected) installation"),(0,r.kt)("p",null,"When deploying in a non air-gapped or connected environment, continue with the following installation. These installation steps require internet access to pull images from the image registries."),(0,r.kt)("h3",null,"ACD Registry Pull Secret"),(0,r.kt)("p",null,"In order for ACD images to be pulled from the ACD Registry, a pull secret must be added to the environment. This can be setup using one of the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Added to the Openshift global pull secrets"),(0,r.kt)("li",{parentName:"ol"},"Added to the ACD operand service account")),(0,r.kt)("h4",null,"Option 1: Openshift global pull secret installation"),(0,r.kt)("p",null,"To add the pull secret to the Openshift global pull secret:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract the current global image pull secret from the cluster into a file in the current directory named .dockerconfigjson:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"oc extract secret/pull-secret --namespace openshift-config --to=."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a base64 encoded string with the registry userid and password as it aligns with your access method."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'printf "cp:<acd registry key>" | base64'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the .dockerconfigjson file and ",(0,r.kt)("strong",{parentName:"p"},"ADD")," a new JSON object to the exiting auths object with the credentials for the ACD Registry. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'"cp.icr.io": {\n    "auth": "aWFtYXBpaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxcGFzc3dvcmQ=",\n    "email": "xxx@nomail.relay.ibm.com"\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the global image pull secret with the updated credentials:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"oc set data secret/pull-secret --namespace openshift-config --from-file=.dockerconfigjson"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Monitor the node status using the command:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"oc get nodes"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the nodes are finish restarting, your cluster is now ready to pull images from the registry."))),(0,r.kt)("p",null,"For more information on Openshift pull secrets refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.7/openshift_images/managing_images/using-image-pull-secrets.html#images-update-global-pull-secret_using-image-pull-secrets"},"Using image pull secrets")),(0,r.kt)("h4",null,"Option 2: Service account pull secret installation"),(0,r.kt)("p",null,"To add the pull secret to individual ACD operand service accounts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a secret"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl create secret docker-registry ibm-entitlement-key \\\n    --docker-server=cp.icr.io \\\n    --docker-username=<username> \\\n    --docker-password=<password> \\\n    --docker-email=<email_address> \\\n    --namespace=<namespace>\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<username>")," is the username for the entitled registry. This should be ",(0,r.kt)("inlineCode",{parentName:"li"},"cp")," when using a ",(0,r.kt)("inlineCode",{parentName:"li"},"myibm")," entitlement key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<password>")," is the password for the entitled registry. This should be the entitlement key from ",(0,r.kt)("inlineCode",{parentName:"li"},"myibm"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the ACD operand has been installed, the service account must be patched to point to the secret."),(0,r.kt)("p",{parentName:"li"},"NOTE: If using the current release of the ACD Container Edition, this ",(0,r.kt)("inlineCode",{parentName:"p"},"ibm-entitlement-key")," pull secret is already defined in the operand service account so the patch step is no longer necessary."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'kubectl patch serviceaccount ibm-wh-acd-operand \\\n    --namespace <namespace> \\\n    --patch \'{"imagePullSecrets": [{"name": "ibm-entitlement-key"}]}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then the ACD operand pods must be restarted"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl delete pods \\\n    --namespace <namespace> \\\n    --all\n")))),(0,r.kt)("h2",null,"Installing the IBM Operator catalog"),(0,r.kt)("p",null,"Before you can install the ACD operator and use it to create instances of the ACD service, you must have a catalog source which includes ACD. ACD is available with the IBM Operator Catalog."),(0,r.kt)("p",null,"If you have other IBM products installed in your cluster, then you may already have the IBM Operator Catalog available, and you can continue to installing the ACD operator from there."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important"),": If you operate in an internet-connected Red Hat OpenShift Container Platform cluster, you must migrate your images from Docker to the IBM Container Registry by 30 September 2021. IBM Operator Catalog related images can be sourced from icr.io/cpopen. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/cloud-paks/1.0?topic=clusters-migrating-from-docker-container-registry"},"Migrating from Docker to IBM Container Registry")," for more details."),(0,r.kt)("p",null,"To add the IBM Operator Catalog:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a file for the IBM Operator Catalog source with the following content, and save as ",(0,r.kt)("inlineCode",{parentName:"p"},"IBMCatalogSource.yaml"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"IBMCatalogSource.yaml","IBMCatalogSource.yaml":!0},'apiVersion: operators.coreos.com/v1alpha1\nkind: CatalogSource\nmetadata:\n   name: ibm-operator-catalog\n   namespace: openshift-marketplace\nspec:\n   displayName: "IBM Operator Catalog"\n   publisher: IBM\n   sourceType: grpc\n   image: icr.io/cpopen/ibm-operator-catalog\n   updateStrategy:\n     registryPoll:\n       interval: 45m\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to your Red Hat OpenShift Container Platform as a cluster administrator by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"oc")," CLI.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply the source by using the following command:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"oc apply -f IBMCatalogSource.yaml")))),(0,r.kt)("p",null,"The IBM Operator Catalog source is added to the OperatorHub catalog, making the ACD operator available to install."),(0,r.kt)("p",null,"More information on the IBM Operator Catalog can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IBM/cloud-pak/blob/master/reference/operator-catalog-enablement.md"},"Red Hat Catalog Enablement for the IBM Operator Catalog")),(0,r.kt)("h2",null,"Installing the ACD Operator"),(0,r.kt)("h3",null,"Install the ACD Operator using the web console"),(0,r.kt)("p",null,"To install the ACD operator through the OpenShift Container Platform web console, do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to the OpenShift Container Platform ",(0,r.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.7/web_console/web-console.html"},"web console")," using your login credentials."),(0,r.kt)("li",{parentName:"ol"},"Expand the ",(0,r.kt)("strong",{parentName:"li"},"Operators")," dropdown and select ",(0,r.kt)("strong",{parentName:"li"},"OperatorHub")," to open the ",(0,r.kt)("strong",{parentName:"li"},"OperatorHub")," dashboard."),(0,r.kt)("li",{parentName:"ol"},"Select the project you want to use as the target namespace for your ACD deployment."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"All Items")," search box enter ",(0,r.kt)("inlineCode",{parentName:"li"},"ACD")," to locate the operator title."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"ACD")," tile to open the install side panel."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Install")," button to open the ",(0,r.kt)("strong",{parentName:"li"},"Create Operator Subscription")," dashboard."),(0,r.kt)("li",{parentName:"ol"},"Select the chosen installation mode that suits your requirements. If the installation mode is ",(0,r.kt)("strong",{parentName:"li"},"A specific namespace on the cluster"),", select the target namespace you created previously."),(0,r.kt)("li",{parentName:"ol"},"Select the approval strategy that suits your requirements. If set to ",(0,r.kt)("strong",{parentName:"li"},"Automatic"),", the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.7/operators/understanding/olm/olm-understanding-olm.html#olm-subscription_olm-understanding-olm"},"Subscription")," resource uses ",(0,r.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.7/operators/understanding/olm/olm-understanding-olm.html#olm-overview_olm-understanding-olm"},"Operator Lifecycle Manager (OLM)")," to manage and upgrade the operator to ensure that the latest version is always running in the cluster. With ",(0,r.kt)("strong",{parentName:"li"},"Manual")," approval set, a project administrator must manually approve the install plan to enable the upgrade. See the ",(0,r.kt)("a",{parentName:"li",href:"../../installing/upgrading"},"upgrading")," section for more details."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Install")," to begin the installation.")),(0,r.kt)("p",null,"The installation can take a few minutes to complete."),(0,r.kt)("h3",null,"Install the ACD Operator using cloudctl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cloudctl case launch \\\n    --case case/ibm-wh-acd \\\n    --namespace <namespace> \\\n    --inventory clinicalDataAnnotatorOperatorSetup \\\n    --action installOperator \\\n    --tolerance 1\n")),(0,r.kt)("h2",null,"Installing the ACD Service"),(0,r.kt)("p",null,"Instances of ACD can be created after the ACD operator is installed."),(0,r.kt)("p",null,"If the ACD operator was installed into a specific namespace, then it can only be used to manage instances of ACD in that namespace."),(0,r.kt)("p",null,"If the ACD operator was installed for all namespaces, then it can be used to manage instances of ACD in any namespace, including those created after the ACD operator was deployed."),(0,r.kt)("p",null,"When installing an instance of ACD, ensure you are using a namespace that an ACD operator is managing."),(0,r.kt)("h3",null,"Install the ACD Service by using the web console"),(0,r.kt)("p",null,"To install the ACD service through the OpenShift Container Platform web console, do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to the OpenShift Container Platform ",(0,r.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.7/web_console/web-console.html"},"web console")," using your login credentials."),(0,r.kt)("li",{parentName:"ol"},"Expand the ",(0,r.kt)("strong",{parentName:"li"},"Operators")," dropdown and select ",(0,r.kt)("strong",{parentName:"li"},"Installed Operators")," to open the ",(0,r.kt)("strong",{parentName:"li"},"Installed Operators")," page."),(0,r.kt)("li",{parentName:"ol"},"Expand the ",(0,r.kt)("strong",{parentName:"li"},"Project")," dropdown and select the project the operator is installed in. Select the ",(0,r.kt)("strong",{parentName:"li"},"Annotator for Clinical Data")," operator link in the ",(0,r.kt)("strong",{parentName:"li"},"Name")," column. If the operator is not shown, it is either not installed or not available for the selected namespace."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Operator Details")," dashboard, click the ",(0,r.kt)("strong",{parentName:"li"},"Annotator for Clinical Data")," tab."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Create Acd")," button to open the ",(0,r.kt)("strong",{parentName:"li"},"Create Acd")," panel. You can use this panel to define an ",(0,r.kt)("inlineCode",{parentName:"li"},"Acd")," custom resource.")),(0,r.kt)("p",null,"From here, you can install by using the form view. For more advanced configurations or to install an instance using default configuration, see installing by using the YAML view."),(0,r.kt)("h3",null,"Install the ACD service using cloudctl"),(0,r.kt)("p",null,"By default, this will deploy 3 replicas of ACD. Include ",(0,r.kt)("inlineCode",{parentName:"p"},'--args "--replicas 1"')," to install a 1 replica ACD instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cloudctl case launch \\\n    --case case/ibm-wh-acd \\\n    --namespace <namespace> \\\n    --inventory clinicalDataAnnotatorOperator \\\n    --action applyCustomResources \\\n    --tolerance 1\n")),(0,r.kt)("p",null,"To install with object storage, the following parameters need to be added."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cloudctl case launch \\\n    --case case/ibm-wh-acd \\\n    --namespace <namespace> \\\n    --inventory clinicalDataAnnotatorOperator \\\n    --action applyCustomResources \\\n    --tolerance 1 \\\n    --args "--backend cos --bucket <bucket> --endpointUrl <endpoint> --location <location>"\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-installing-installing-ibm-md-05697b5cdc77c8d23b9f.js.map