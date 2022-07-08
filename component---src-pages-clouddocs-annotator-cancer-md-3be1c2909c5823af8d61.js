"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[9288],{3624:function(t,e,a){a.d(e,{Z:function(){return v}});var n=a(7294),r=a(8650),l=a.n(r),i=a(1597),o=a(1931),d=a(9514),s=a(5900),m=a.n(s),c=function(t){var e,a=t.title,r=t.theme,l=t.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(e={},e["PageHeader-module--with-tabs--vbQ-W"]=i.length,e["PageHeader-module--dark-mode--WCeH8"]="dark"===r,e))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(t){var e=t.relativePagePath,a=t.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,d=l.subDirectory,s=o+"/edit/"+l.branch+d+"/src/pages"+e;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},h=a(4703),u=a(1721),k=function(t){function e(){return t.apply(this,arguments)||this}return(0,u.Z)(e,t),e.prototype.render=function(){var t=this.props,e=t.title,a=t.tabs,r=t.slug,o=r.split("/").filter(Boolean).slice(-1)[0],d=a.map((function(t){var e,a=l()(t,{lower:!0,strict:!0}),d=a===o,s=new RegExp(o+"/?(#.*)?$"),c=r.replace(s,a);return n.createElement("li",{key:t,className:m()((e={},e["PageTabs-module--selected-item--aBB0K"]=d,e),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},d))))))},e}(n.Component),N=k,g=a(7296),f=a(5387),b=a(3732),y=function(t){var e=t.date,a=new Date(e);return e?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(t){var e=t.pageContext,a=t.children,r=t.location,s=t.Title,m=e.frontmatter,u=void 0===m?{}:m,k=e.relativePagePath,b=e.titleType,v=u.tabs,T=u.title,C=u.theme,x=u.description,S=u.keywords,w=u.date,E=(0,f.Z)().interiorTheme,D=(0,i.useStaticQuery)("2456312558").site.pathPrefix,I=D?r.pathname.replace(D,""):r.pathname,M=v?I.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",P=C||E;return n.createElement(d.Z,{tabs:v,homepage:!1,theme:P,pageTitle:T,pageDescription:x,pageKeywords:S,titleType:b},n.createElement(c,{title:s?n.createElement(s,null):T,label:"label",tabs:v,theme:P}),v&&n.createElement(N,{title:T,slug:I,tabs:v,currentTab:M}),n.createElement(g.Z,{padded:!0},a,n.createElement(p,{relativePagePath:k}),n.createElement(y,{date:w})),n.createElement(h.Z,{pageContext:e,location:r,slug:I,tabs:v,currentTab:M}),n.createElement(o.Z,null))}},2028:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return m}});var n=a(3366),r=(a(7294),a(4983)),l=a(3624),i=["components"],o={},d={_frontmatter:o},s=l.Z;function m(t){var e=t.components,a=(0,n.Z)(t,i);return(0,r.kt)(s,Object.assign({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Detects potential cancer disease terms such as adenocarcinoma carcinomatosis. Extra features that can be found by the annotator include: the actual name of the cancer, measurement, cancer grade, site, date, and modality."),(0,r.kt)("h2",null,"Configurations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Library"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"umls.latest"),(0,r.kt)("li",null,"umls.2021AA"),(0,r.kt)("li",null,"umls.2020AA"),(0,r.kt)("li",null,"umls.2019AA ",(0,r.kt)("i",null,"(deprecated - will be removed in 2022)")))),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the version of the UMLS library that is used when analyzing unstructured data.")))),(0,r.kt)("p",null,"The value ",(0,r.kt)("inlineCode",{parentName:"p"},"umls.latest")," will reference the latest available version of UMLS within the service. As newer versions of UMLS are made available in the service, ",(0,r.kt)("inlineCode",{parentName:"p"},"umls.latest")," library configurations will automatically leverage the latest available version of UMLS in the service once available. Declaration of a specific version of UMLS is recommended to avoid undesirable changes in output as newer versions of UMLS are made available within the service. Through declaration of a specific version of UMLS, newer versions of UMLS may be evaluated prior to use in production."),(0,r.kt)("h2",null,"Annotation Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aci.IcaCancerDiagnosisInd")),(0,r.kt)("h3",null,"aci.IcaCancerDiagnosisInd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"The start position of the annotation as a character offset into the text. The smallest possible start position is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"The end position of the annotation as character offset into the text. The end position points at the first character after the annotation, such that end-begin equals the length of the coveredText.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.IcaCancerDiagnosisInd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"modality"),(0,r.kt)("td",{parentName:"tr",align:null},"Potenial values are: ",(0,r.kt)("inlineCode",{parentName:"td"},"positive")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"negative"),".  This based on whether the patient has or does not have the cancer identified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sectionSurfaceForm"),(0,r.kt)("td",{parentName:"tr",align:null},"Medical documents have many sections such as patient’s information, previous medical history, family history, etc.  The covered text that identifies which section of the document that spans the annotation. The default value of this feature is ",(0,r.kt)("inlineCode",{parentName:"td"},"document"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cancer"),(0,r.kt)("td",{parentName:"tr",align:null},"See aci.Cancer table below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"See aci.Date table below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"measurement"),(0,r.kt)("td",{parentName:"tr",align:null},"See aci.Measurement table below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CancerGrade"),(0,r.kt)("td",{parentName:"tr",align:null},"See aci.CancerGrade table below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"site"),(0,r.kt)("td",{parentName:"tr",align:null},"See aci.SiteInd table below.")))),(0,r.kt)("p",null,"Subtypes for aci.IcaCancerDiagnosisInd"),(0,r.kt)("h4",null,"aci.Cancer"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"The start position of the annotation as a character offset into the text. The smallest possible start position is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"The end position of the annotation as character offset into the text. The end position points at the first character after the annotation, such that end-begin equals the length of the coveredText.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.Cancer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cancerSurfaceForm"),(0,r.kt)("td",{parentName:"tr",align:null},"Covered text that represents the cancer.   For example, in the text ",(0,r.kt)("inlineCode",{parentName:"td"},"He has lung cancer"),", the cancerSurfaceForm is ",(0,r.kt)("inlineCode",{parentName:"td"},"lung cancer"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cancerNormalizedName"),(0,r.kt)("td",{parentName:"tr",align:null},"Normalized name for the cancer from the UMLS dictionary   For example, in the text ",(0,r.kt)("inlineCode",{parentName:"td"},"He has lung cancer"),", the cancerSurfaceForm is ",(0,r.kt)("inlineCode",{parentName:"td"},"primary malignant neoplasm of lung"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ccsCode"),(0,r.kt)("td",{parentName:"tr",align:null},"CCS stands for Clinical Classification System, used to categorize diagnosis and procedures such that it can be used for further analysis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hccCode"),(0,r.kt)("td",{parentName:"tr",align:null},"HCC stands for Hierarchical Condition Categories and primarily used by Medicare and Medicaid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"icd9Code"),(0,r.kt)("td",{parentName:"tr",align:null},"ICD stands for International Classification of Diseases.  The number 9 is a revision number for this code set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"icd10Code"),(0,r.kt)("td",{parentName:"tr",align:null},"ICD stands for International Classification of Diseases.  The number 10 is a revision number for this code set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"snomedConceptId"),(0,r.kt)("td",{parentName:"tr",align:null},"Numerical code provided by the SNOMED dictionaries that represents the cancer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cui"),(0,r.kt)("td",{parentName:"tr",align:null},"UMLS Concept Unique ID (CUI). CUIs are used to uniquely identify concepts across different UMLS sources. Depending on the source of the cancer information, this value may not be available.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"morphologyCode"),(0,r.kt)("td",{parentName:"tr",align:null},"A value that describes the behavior of cancer from malignant to benign.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"behavior"),(0,r.kt)("td",{parentName:"tr",align:null},"The code represents the type of growth such as benign, malignant, in situ, or uncertain.  This code only applies to cancer related disease.  See behavior code below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"behaviorSource"),(0,r.kt)("td",{parentName:"tr",align:null},"A code that will either come from morphology code, icd 9 code, or icd 10 code.")))),(0,r.kt)("hr",null),(0,r.kt)("h4",null,"aci.Date"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"The start position of the annotation as a character offset into the text. The smallest possible start position is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"The end position of the annotation as character offset into the text. The end position points at the first character after the annotation, such that end-begin equals the length of the coveredText.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.Date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dateInMilliseconds"),(0,r.kt)("td",{parentName:"tr",align:null},"It is a java.util.Calendar date and is the difference, measured in milliseconds, between the date of the event and midnight, January 1, 1970 UTC.")))),(0,r.kt)("hr",null),(0,r.kt)("h4",null,"aci.Measurement"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"The start position of the annotation as a character offset into the text. The smallest possible start position is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"The end position of the annotation as character offset into the text. The end position points at the first character after the annotation, such that end-begin equals the length of the coveredText.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.Measurement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dimension"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of mesurement. For example, in the text ",(0,r.kt)("inlineCode",{parentName:"td"},"4.3mm tumor"),", the dimension of measurement is ",(0,r.kt)("inlineCode",{parentName:"td"},"length"),".")))),(0,r.kt)("hr",null),(0,r.kt)("h4",null,"aci.CancerGrade"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"The start position of the annotation as a character offset into the text. The smallest possible start position is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"The end position of the annotation as character offset into the text. The end position points at the first character after the annotation, such that end-begin equals the length of the coveredText.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.CancerGrade")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gradeValue"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the grade.")))),(0,r.kt)("hr",null),(0,r.kt)("h4",null,"aci.SiteInd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"The start position of the annotation as a character offset into the text. The smallest possible start position is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"The end position of the annotation as character offset into the text. The end position points at the first character after the annotation, such that end-begin equals the length of the coveredText.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.SiteInd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gradeValue<"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the grade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"siteNormalizedName"),(0,r.kt)("td",{parentName:"tr",align:null},"The normalized name for the site from UMLS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"compound"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this a multi-site term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nomedConceptId"),(0,r.kt)("td",{parentName:"tr",align:null},"Numerical code provided by the SNOMED dictionaries that represents the site.")))),(0,r.kt)("hr",null),(0,r.kt)("h4",null,"Behavior Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Behavior"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Benign")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown (uncertain if benign or malignant)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Insitu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Malignant (primary)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Malignant (metastatic or secondary site)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Malignant (uncertain if primary or metastatic)")))),(0,r.kt)("h3",null,"Sample Response"),(0,r.kt)("p",null,"Sample response from the cancer annotator for the text: ",(0,r.kt)("inlineCode",{parentName:"p"},"She was previously treated for adenocarcinoma of the colon.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "unstructured": [\n    {\n      "text": "She was previously treated for adenocarcinoma of the colon.",\n      "data": {\n        "IcaCancerDiagnosisInd": [\n          {\n            "begin": 31,\n            "end": 58,\n            "coveredText": "adenocarcinoma of the colon",\n            "type": "aci.IcaCancerDiagnosisInd",\n            "site": [\n              {\n                "coveredText": "the colon",\n                "end": 58,\n                "siteNormalizedName": "colon structure",\n                "type": "aci.SiteInd",\n                "snomedConceptId": "71854001",\n                "begin": 49,\n                "compound": "false"\n              }\n            ],\n            "modality": "positive",\n            "cancer": [\n              {\n                "icd10Code": "C80.9,C80.1",\n                "cancerSurfaceForm": "adenocarcinoma",\n                "cancerNormalizedName": "malignant adenomatous neoplasm",\n                "type": "aci.Cancer",\n                "snomedConceptId": "443961001",\n                "ccsCode": "43",\n                "icd9Code": "199.1",\n                "coveredText": "adenocarcinoma",\n                "cui": "C0001418",\n                "behaviorSource": "icd-10",\n                "end": 45,\n                "behavior": "3",\n                "begin": 31,\n                "hccCode": "12"\n              }\n            ]\n          }\n        ]\n      }\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clouddocs-annotator-cancer-md-3be1c2909c5823af8d61.js.map