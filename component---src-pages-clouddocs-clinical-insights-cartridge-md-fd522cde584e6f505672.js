"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[8238],{3624:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),o=a(8650),i=a.n(o),r=a(1597),l=a(1931),s=a(9514),c=a(5900),d=a.n(c),m=function(e){var t,a=e.title,o=e.theme,i=e.tabs,r=void 0===i?[]:i;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,o=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||o,l=i.baseUrl,s=i.subDirectory,c=l+"/edit/"+i.branch+s+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4703),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,l=o.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===l,c=new RegExp(l+"/?(#.*)?$"),m=o.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),f=g,b=a(7296),k=a(5387),N=a(3732),E=function(e){var t=e.date,a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,o=e.location,c=e.Title,d=t.frontmatter,h=void 0===d?{}:d,g=t.relativePagePath,N=t.titleType,v=h.tabs,y=h.title,P=h.theme,w=h.description,x=h.keywords,C=h.date,T=(0,k.Z)().interiorTheme,D=(0,r.useStaticQuery)("2456312558").site.pathPrefix,Z=D?o.pathname.replace(D,""):o.pathname,A=v?Z.split("/").filter(Boolean).slice(-1)[0]||i()(v[0],{lower:!0}):"",L=P||T;return n.createElement(s.Z,{tabs:v,homepage:!1,theme:L,pageTitle:y,pageDescription:w,pageKeywords:x,titleType:N},n.createElement(m,{title:c?n.createElement(c,null):y,label:"label",tabs:v,theme:L}),v&&n.createElement(f,{title:y,slug:Z,tabs:v,currentTab:A}),n.createElement(b.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(E,{date:C})),n.createElement(p.Z,{pageContext:t,location:o,slug:Z,tabs:v,currentTab:A}),n.createElement(l.Z,null))}},1934:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return d}});var n=a(3366),o=(a(7294),a(4983)),i=a(3624),r=["components"],l={},s={_frontmatter:l},c=i.Z;function d(e){var t=e.components,a=(0,n.Z)(e,r);return(0,o.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Clinical Insights Cartridge is a default configuration set that ships with Annotator for Clinical Data that uses the low level insight model scores to promote annotations that apply to the patient to one of the following known ",(0,o.kt)("a",{parentName:"p",href:"/clouddocs/annotator_attribute_detection/"},"attribute")," types."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Diagnosis"),(0,o.kt)("li",{parentName:"ol"},"PotentialDiagnosis"),(0,o.kt)("li",{parentName:"ol"},"PatientReportedCondition"),(0,o.kt)("li",{parentName:"ol"},"TherapeuticProcedure"),(0,o.kt)("li",{parentName:"ol"},"DiagnosticProcedure"),(0,o.kt)("li",{parentName:"ol"},"PendingTherapeuticProcedure"),(0,o.kt)("li",{parentName:"ol"},"PendingDiagnosticProcedure"),(0,o.kt)("li",{parentName:"ol"},"PrescribedMedication"),(0,o.kt)("li",{parentName:"ol"},"MedicationAdverseEvent"),(0,o.kt)("li",{parentName:"ol"},"MedicationAllergy"),(0,o.kt)("li",{parentName:"ol"},"AbnormalFinding"),(0,o.kt)("li",{parentName:"ol"},"NormalFinding"),(0,o.kt)("li",{parentName:"ol"},"LabValue")),(0,o.kt)("p",null,"These attributes can be thought of as the result of a distillation step where all candidate annotations are considered, but only those that apply to the patient get promoted to attributes."),(0,o.kt)("p",null,"If you need different behavior than what the default cartridge provides, you can extend the default Clinical Insights Cartridge using the Annotator for Clinical Data Configuration Editor.  See the ",(0,o.kt)("a",{parentName:"p",href:"/clouddocs/customizing/"},"Customizing")," section for more information.  Options for extending the cartridge include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Adding your own candidate annotations from custom dictionaries.  For example, if there is a medication that the Annotator for Clinical Data does not annotate by default, you could add that to a custom dictionary and then ensure entries from your custom dictionary are scored by the insights medication model.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Changing the scoring thresholds used to promote candidate annotations to one of the attributes noted above.  Your application needs may necessitate different scoring thresholds than what the default cartridge provides.  You can extend the default cartridge and change the scoring thresholds used for each attribute noted above."))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clouddocs-clinical-insights-cartridge-md-fd522cde584e6f505672.js.map