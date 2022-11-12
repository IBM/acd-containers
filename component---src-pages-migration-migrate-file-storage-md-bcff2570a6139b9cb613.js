"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[1999],{3624:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(8650),i=a.n(r),o=a(1597),c=a(3383),s=a(2618),p=a(5900),l=a.n(p),m=function(e){var t,a=e.title,r=e.theme,i=e.tabs,o=void 0===i?[]:i;return n.createElement("div",{className:l()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,c=i.baseUrl,s=i.subDirectory,p=c+"/edit/"+i.branch+s+"/src/pages"+t;return c?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},u=a(4703),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,c=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===c,p=new RegExp(c+"/?(#.*)?$"),m=r.replace(p,a);return n.createElement("li",{key:e,className:l()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),k=h,N=a(7296),f=a(5387),_=a(3732),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(_.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(_.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,r=e.location,p=e.Title,l=t.frontmatter,g=void 0===l?{}:l,h=t.relativePagePath,_=t.titleType,y=g.tabs,C=g.title,b=g.theme,w=g.description,x=g.keywords,$=g.date,E=(0,f.Z)().interiorTheme,D=(0,o.useStaticQuery)("2456312558").site.pathPrefix,P=D?r.pathname.replace(D,""):r.pathname,A=y?P.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",V=b||E;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:V,pageTitle:C,pageDescription:w,pageKeywords:x,titleType:_},n.createElement(m,{title:p?n.createElement(p,null):C,label:"label",tabs:y,theme:V}),y&&n.createElement(k,{title:C,slug:P,tabs:y,currentTab:A}),n.createElement(N.Z,{padded:!0},a,n.createElement(d,{relativePagePath:h}),n.createElement(v,{date:$})),n.createElement(u.Z,{pageContext:t,location:r,slug:P,tabs:y,currentTab:A}),n.createElement(c.Z,null))}},7559:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return l}});var n=a(3366),r=(a(7294),a(4983)),i=a(3624),o=["components"],c={},s={_frontmatter:c},p=i.Z;function l(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(p,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Merative Annotator for Clinical Data Container Edition is the replacement for the IBM Watson Annotator for Clinical Data Container Edition. All Annotator for Clinical Data (ACD) Container Edition consumers need to migrate their ACD instances from IBM Watson ACD to Merative ACD by March 31, 2023."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For more information and general considerations, see ",(0,r.kt)("a",{parentName:"p",href:"/acd-containers/migration/considerations/"},"Migration Considerations"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Additional storage migration options include:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/acd-containers/migration/redeploy-file-storage/"},"Cartridge Redeployment with Shared File Storage")," to recreate the data by redeploying your cartridges to a new shared file storage volume."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/acd-containers/migration/restore-file-storage/"},"Backup and Restore with Shared File Storage")," to restore the data from a backup to a new shared file storage volume."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/acd-containers/migration/migrate-object-storage/"},"Migration of Existing Object Storage")," to migrate the data using the same object storage bucket.")))),(0,r.kt)("p",null,"Plan to do the following when migrating an ACD instance and an existing shared file storage volume as a storage medium."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new namespace and new volume claim."),(0,r.kt)("li",{parentName:"ul"},"Create a new ACD instance with zero replicas."),(0,r.kt)("li",{parentName:"ul"},"Turn off access to the existing instance."),(0,r.kt)("li",{parentName:"ul"},"Backup the existing persistent storage."),(0,r.kt)("li",{parentName:"ul"},"Bind the new volume claim to the existing persistent volume."),(0,r.kt)("li",{parentName:"ul"},"Fix user permissions in persistent volume."),(0,r.kt)("li",{parentName:"ul"},"Start up the new ACD instance and verify operation."),(0,r.kt)("li",{parentName:"ul"},"Enable access to the new instance and verify."),(0,r.kt)("li",{parentName:"ul"},"Remove the old instance at a later date.")),(0,r.kt)("p",null,"A set of detailed steps are provided below as an option for migration."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note:")," References to source ACD or source namespace are referring to your existing IBM ACD instance and namespace. References to target ACD or target namespace are referring to a new Merative ACD instance and namespace."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Capture storage configuration information from the source ACD instance."),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<existing_ACD_namespace>")," with your existing ACD namespace."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'export source_acd_namespace=<existing_ACD_namespace>\nexport source_pvc_name=$(oc get pvc -n ${source_acd_namespace} -o yaml | yq -r ".items[].metadata.name")\necho ${source_pvc_name}\n')),(0,r.kt)("p",{parentName:"li"},"Verify the source pvc name is correct."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'export pv_id=$(oc get pvc ${source_pvc_name} -n ${source_acd_namespace} -o yaml | yq -r ".spec.volumeName")\necho ${pv_id}\n')),(0,r.kt)("p",{parentName:"li"},"Verify the volume name is correct."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc get pv ${pv_id} -n ${source_acd_namespace} -o yaml | grep persistentVolumeReclaimPolicy\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"NOTE: Very Important! Verify the reclaim policy is set to “Retain”."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the target ACD namespace and switch to that namespace as your project."),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<target_ACD_namespace>")," with the name you want to use as your new ACD namespace."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"export target_acd_namespace=<target_ACD_namespace>\noc create namespace ${target_acd_namespace}\noc project ${target_acd_namespace}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Capture user information from the target namespace."),(0,r.kt)("p",{parentName:"li"},"The annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"openshift.io/sa.scc.uid-range")," indicates the user ID range for the project. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<target_project_uid>")," with the starting number in the range identified by that annotation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'export target_project_uid=$(oc get project ${target_acd_namespace} -o yaml | yq -r \'.metadata.annotations."openshift.io/sa.scc.uid-range" | split("/") | .[0]\')\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new PersistentVolumeClaim (PVC) using the existing PersistentVolume (PV) in the target namespace. Create a PVC using the OpenShift console, or save the example yaml below as <target_pvc_name>.yaml. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<target_pvc_name>")," with the new PVC name and ",(0,r.kt)("inlineCode",{parentName:"p"},"<pv_id>")," with the persistent volume name. Ensure the rest of the configuration matches that of your existing PVC in the source ACD namespace. It will be in ",(0,r.kt)("inlineCode",{parentName:"p"},"Pending")," status."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: <target_pvc_name>\nspec:\n  accessModes:\n  - ReadWriteMany\n  resources:\n    requests:\n      storage: 10Gi\n  storageClassName: ocs-storagecluster-cephfs\n  volumeMode: Filesystem\n  volumeName: <pv_id>\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"export target_pvc_name=<target_pvc_name>\noc create -f <target_pvc_name>.yaml -n ${target_acd_namespace}\noc get pvc -n ${target_acd_namespace}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new pod using the ubi8 base image to fix permissions on the storage volume. Save the yaml below as ",(0,r.kt)("inlineCode",{parentName:"p"},"acd-ubi-pod-pvc-debug.yaml"),". Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<target_pvc_name>")," with the new PVC name. It will be in ",(0,r.kt)("inlineCode",{parentName:"p"},"Pending")," status as it needs to use the PVC mount and can’t yet at this point."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kind: Pod\napiVersion: v1\nmetadata:\n  name: acd-ubi-pod-pvc-debug\nspec:\n  containers:\n    - name: main\n      command:\n        - /bin/bash\n      volumeMounts:\n        - name: acd-file-store\n          mountPath: /opt/ibm/watsonhealth/services/config/artifactstore/tenant_data\n      image: 'registry.access.redhat.com/ubi8/ubi:latest'\n      args:\n        - '-c'\n        - sleep 7200\n  volumes:\n    - name: acd-file-store\n      persistentVolumeClaim:\n        claimName: <target_pvc_name>\n  tolerations:\n    - key: node.kubernetes.io/not-ready\n      operator: Exists\n      effect: NoExecute\n      tolerationSeconds: 300\n    - key: node.kubernetes.io/unreachable\n      operator: Exists\n      effect: NoExecute\n      tolerationSeconds: 300\n    - key: node.kubernetes.io/memory-pressure\n      operator: Exists\n      effect: NoSchedule\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the Configuration Editor is deployed, create a new zero-replica instance of the cartridge and dictionary services in the target namespace using the target PVC name."),(0,r.kt)("p",{parentName:"li"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://merative.github.io/acd-containers/configeditor/download_openshift/#installing-acd-configuration-editor"},"Installing ACD Configuration Editor")," for installation steps."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"helm install merative-acd-ce-cdc   merative-acd-ce/cdc/chart/cdc   --set replicas=0   --set configurationStorage.file.volume.existingClaimName=${target_pvc_name}   --namespace ${target_acd_namespace}\nhelm install merative-acd-ce-crtg   merative-acd-ce/crtg/chart/crtg   --set replicas=0   --set configurationStorage.file.volume.existingClaimName=${target_pvc_name}   --namespace ${target_acd_namespace}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new zero-replica ACD instance in the target namespace using the target PVC name."),(0,r.kt)("p",{parentName:"li"},"Also bring forward the rest of your configured settings from the existing source deployment, such as tenant header, license usage, etc."),(0,r.kt)("p",{parentName:"li"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/acd-containers/installing/installing/"},"Installing ACD")," for installation steps.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Shut off network access to the ACD instance in the source namespace and to the Configuration Editor, if it is also deploy."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"First, verify you can get to the URL that clients use."),(0,r.kt)("li",{parentName:"ul"},"Then edit the Route to point to a non-existent service."),(0,r.kt)("li",{parentName:"ul"},"Finally, verify you can no longer get to the URL that clients use."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Take a backup of the persistent storage in the source namespace. Follow your usual backup process, or run this command as an example of a direct command to do the backup (",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," in, tar to shared file system, and then copy out.)"),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<backup_file_name>")," with the name you want to use as your backup file name."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"export source_acd_pod_name=$(oc get pods -n ${source_acd_namespace} | grep acd-acd | awk '{print $1}')\noc exec ${source_acd_pod_name} -n ${source_acd_namespace} -- tar -I \"gzip --best\" -cf - /opt/ibm/watsonhealth/services/config/artifactstore/tenant_data > <backup_file_name>.tar.gz\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the Configuration Editor is deployed, scale down the cartridge and dictionary services to zero replicas in the source namespace."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"export source_crtg_deployment_name=$(oc get deployments -n ${source_acd_namespace} | grep acd-crtg | awk '{print $1}')\noc scale --replicas=0 deployment ${source_crtg_deployment_name} -n ${source_acd_namespace}\nexport source_cdc_deployment_name=$(oc get deployments -n ${source_acd_namespace} | grep acd-cdc | awk '{print $1}')\noc scale --replicas=0 deployment ${source_cdc_deployment_name} -n ${source_acd_namespace}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scale down the ACD instance to zero replicas in the source namespace."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc scale --replicas=0 -n ${source_acd_namespace} acds.wh-acd.ibm.com/acd-instance\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the PVC in the source namespace. The Persistent Volume (PV) will become ",(0,r.kt)("inlineCode",{parentName:"p"},"Released"),", but will still be retained."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc delete pvc ${source_pvc_name} -n ${source_acd_namespace}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the PVC reference from the released PV."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc edit pv ${pv_id} -n ${source_acd_namespace}\n")),(0,r.kt)("p",{parentName:"li"},"Delete the claimRef entry, such as the following lines:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"claimRef:\n  kind: PersistentVolumeClaim\n  namespace: merative-acd-operator-system\n  name: merative-acd-config-storage-cephfs-pvc\n  uid: 44453347-562c-47e8-a82f-190eee5cb1ae\n  apiVersion: v1\n  resourceVersion: '326022050'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The volume status should show ",(0,r.kt)("inlineCode",{parentName:"p"},"Bound")," again to the new PVC. Verify the PV is bound to the PVC in the target namespace."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc get pvc ${target_pvc_name} -n ${target_acd_namespace}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fix user permissions to directories and artifacts in persistent storage in the target namespace. Use the user id, ",(0,r.kt)("inlineCode",{parentName:"p"},"target_project_uid"),", previously identified."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc exec  acd-ubi-pod-pvc-debug   -n ${target_acd_namespace} -- chown -R  ${target_project_uid} /opt/ibm/watsonhealth/services/config/artifactstore/tenant_data/.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scale up the ACD instance to one (or more) replicas in the target namespace. Use the OpenShift console, or from the command line, run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc scale --replicas=1 -n ${target_acd_namespace} acds.acd.merative.com/acd-instance\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the Configuration Editor is deployed, scale up the cartridge and dictionary deployments to one (or more) replicas."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"export target_crtg_deployment_name=$(oc get deployments -n ${target_acd_namespace} | grep acd-crtg | awk '{print $1}')\noc scale --replicas=1 deployment ${target_crtg_deployment_name} -n ${target_acd_namespace}\nexport target_cdc_deployment_name=$(oc get deployments -n ${target_acd_namespace}  | grep acd-cdc | awk '{print $1}')\noc scale --replicas=1 deployment ${target_cdc_deployment_name} -n ${target_acd_namespace}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the temporary ubi8 pod used to fix permissions."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc delete -f acd-ubi-pod-pvc-debug.yaml -n ${target_acd_namespace}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify all ACD pods start up as expected."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc get pods -n ${target_acd_namespace}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make OAuth proxy updates for secure access to the target namespace, if configured to use this."),(0,r.kt)("p",{parentName:"li"},"For ACD deployments (not the Configuration Editor), create a serviceview role in target namespace and grant all service accounts in the proxy namespace access to it. Follow the steps 7 and 8 under ",(0,r.kt)("a",{parentName:"p",href:"/acd-containers/security/manage-access/"},"Manage Access"),"."),(0,r.kt)("p",{parentName:"li"},"Update the proxy deployment upstream option to point to the ACD service (or cartridge service) in the target namespace. Follow step 2 under ",(0,r.kt)("a",{parentName:"p",href:"/acd-containers/security/manage-access/"},"Manage Access"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Re-enable network access and client traffic to the target namespace."),(0,r.kt)("p",{parentName:"li"},"Fix the Route you disabled in step 8 above to point to the OAuth service if using an OAuth proxy or to the ACD service.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Uninstall the source ACD instance and source ACD operator at a later date."),(0,r.kt)("p",{parentName:"li"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://merative.github.io/acd-containers/installing/uninstalling/"},"Uninstalling ACD")," for instructions."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-migration-migrate-file-storage-md-bcff2570a6139b9cb613.js.map