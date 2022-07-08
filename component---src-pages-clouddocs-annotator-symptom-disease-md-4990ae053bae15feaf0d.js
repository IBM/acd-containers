"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[9594],{3624:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(8650),i=a.n(r),l=a(1597),o=a(1931),s=a(9514),d=a(5900),m=a.n(d),p=function(e){var t,a=e.title,r=e.theme,i=e.tabs,l=void 0===i?[]:i;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=l.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},c=function(e){var t=e.relativePagePath,a=e.repository,r=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,o=i.baseUrl,s=i.subDirectory,d=o+"/edit/"+i.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},h=a(4703),u=a(1721),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===o,d=new RegExp(o+"/?(#.*)?$"),p=r.replace(d,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),k=f,g=a(7296),N=a(5387),b=a(3732),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,r=e.location,d=e.Title,m=t.frontmatter,u=void 0===m?{}:m,f=t.relativePagePath,b=t.titleType,v=u.tabs,T=u.title,x=u.theme,C=u.description,E=u.keywords,S=u.date,w=(0,N.Z)().interiorTheme,D=(0,l.useStaticQuery)("2456312558").site.pathPrefix,I=D?r.pathname.replace(D,""):r.pathname,M=v?I.split("/").filter(Boolean).slice(-1)[0]||i()(v[0],{lower:!0}):"",P=x||w;return n.createElement(s.Z,{tabs:v,homepage:!1,theme:P,pageTitle:T,pageDescription:C,pageKeywords:E,titleType:b},n.createElement(p,{title:d?n.createElement(d,null):T,label:"label",tabs:v,theme:P}),v&&n.createElement(k,{title:T,slug:I,tabs:v,currentTab:M}),n.createElement(g.Z,{padded:!0},a,n.createElement(c,{relativePagePath:f}),n.createElement(y,{date:S})),n.createElement(h.Z,{pageContext:t,location:r,slug:I,tabs:v,currentTab:M}),n.createElement(o.Z,null))}},474:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return m}});var n=a(3366),r=(a(7294),a(4983)),i=a(3624),l=["components"],o={},s={_frontmatter:o},d=i.Z;function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)(d,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This annotator identifies symptoms and diseases mentioned in the text. It also identifies related text that describes the symptom or disease."),(0,r.kt)("h2",null,"Configurations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Library"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"umls.latest"),(0,r.kt)("li",null,"umls.2021AA"),(0,r.kt)("li",null,"umls.2020AA"),(0,r.kt)("li",null,"umls.2019AA ",(0,r.kt)("i",null,"(deprecated - will be removed in 2022)")))),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the version of the UMLS library that is used when analyzing unstructured data.")))),(0,r.kt)("p",null,"The value ",(0,r.kt)("inlineCode",{parentName:"p"},"umls.latest")," will reference the latest available version of UMLS within the service. As newer versions of UMLS are made available in the service, ",(0,r.kt)("inlineCode",{parentName:"p"},"umls.latest")," library configurations will automatically leverage the latest available version of UMLS in the service once available. Declaration of a specific version of UMLS is recommended to avoid undesirable changes in output as newer versions of UMLS are made available within the service. Through declaration of a specific version of UMLS, newer versions of UMLS may be evaluated prior to use in production."),(0,r.kt)("h3",null,"Annotation Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aci.SymptomDiseaseInd")),(0,r.kt)("h3",null,"aci.SymptomDiseaseInd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"The start position of the annotation as a character offset into the text. The smallest possible start position is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"The end position of the annotation as character offset into the text. The end position points at the first character after the annotation, such that end-begin equals the length of the coveredText.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.SymptomDiseaseInd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the date related to the event.  For instance, in a patient’s medical form, this date may indicate the date of surgery, or the date of last diagnosis.  The value of date is detected from the date that is nearest to the text that is annotated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dateInMilliseconds"),(0,r.kt)("td",{parentName:"tr",align:null},"It is a java.util.Calendar date and is the difference, measured in milliseconds, between the date of the event and midnight, January 1, 1970 UTC.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dateSource"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates where in the document or text the date value is identified. For example, ",(0,r.kt)("q",null,"sentence")," is one possible option for dateSource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"snomedConceptId"),(0,r.kt)("td",{parentName:"tr",align:null},"Numerical code provided by the SNOMED dictionaries that represents the symptom or disease.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ccsCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Clinical Classification System (CCS) code is used to categorize the symptom and diseases such that it can be used for further analysis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hccCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Hierarchical Condition Categories (HCC) code is primarily used by Medicare and Medicaid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cui"),(0,r.kt)("td",{parentName:"tr",align:null},"UMLS Concept Unique ID (CUI). CUIs are used to uniquely identify concepts across different UMLS sources. Depending on the source of the symptom/disease information, this value may not be available.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"modality"),(0,r.kt)("td",{parentName:"tr",align:null},"There are three potential values for this feature: positive, negative, and potential.  Positive modality means there is a high probability that the identified text is related to symptoms or diseases.  Negative modality means that the identified text is not a symptom or a disease.  Potential modality means there is some likelihood that the identified text is related to symptoms or diseases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"icd9Code"),(0,r.kt)("td",{parentName:"tr",align:null},"ICD stands for International Classification of Diseases.  The number 9 is a revision number for this code set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"icd10Code"),(0,r.kt)("td",{parentName:"tr",align:null},"ICD stands for International Classification of Diseases.  The number 10 is a revision number for this code set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symptomDiseaseSurfaceForm"),(0,r.kt)("td",{parentName:"tr",align:null},"The covered text that refers to the sympton or disease identified by the annotation. For example, in text ",(0,r.kt)("q",null,"He had a persistent cough."),", the symptom is ",(0,r.kt)("q",null,"persistent cough"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symptomDiseaseSurfaceFormNormalizedName"),(0,r.kt)("td",{parentName:"tr",align:null},"The normalized term for the sympton or disease. For instance, for the term ",(0,r.kt)("q",null,"roll-in shower bench"),", the normalized form can be ",(0,r.kt)("q",null,"shower bench"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sectionSurfaceForm"),(0,r.kt)("td",{parentName:"tr",align:null},"Medical documents have many sections such as patient’s information, previous medical history, family history, etc.  The covered text that identifies which section of the document that spans the annotation. The default value of this feature is ",(0,r.kt)("q",null,"document"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sectionNormalizedName"),(0,r.kt)("td",{parentName:"tr",align:null},"The normalized term for the section.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"modifiers"),(0,r.kt)("td",{parentName:"tr",align:null},"Modifiers represents text that describes the disease or symptom in more detail or provides additional context.")))),(0,r.kt)("hr",null),(0,r.kt)("h4",null,"Modifers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.SiteInd - Identifies the related body site or location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.ModifierGroupInd - General modifiers that further describe the symptom or disease such as severe, low, high, or mild.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"The start position of the annotation as a character offset into the text. The smallest possible start position is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"The end position of the annotation as character offset into the text. The end position points at the first character after the annotation, such that end-begin equals the length of the coveredText.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.Measurement - Identifies the cancer grade which can help determine the rate of tumor growth.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gradeValue"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the grade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"siteNormalizedName"),(0,r.kt)("td",{parentName:"tr",align:null},"The normalized name for the site from UMLS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"compound"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this a multi-site term.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.ModifierGroupInd - General modifiers that further describe the symptom or disease such as severe, low, high, or mild.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"aci.ModifierGroupInd - General modifiers that further describe the symptom or disease such as severe, low, high, or mild.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"The start position of the annotation as a character offset into the text. The smallest possible start position is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"The end position of the annotation as character offset into the text. The end position points at the first character after the annotation, such that end-begin equals the length of the coveredText.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:null},"The text covered by an annotation as a string.")))),(0,r.kt)("h3",null,"Sample Response"),(0,r.kt)("p",null,"Sample response from the symptom disease annotator for the text: ",(0,r.kt)("inlineCode",{parentName:"p"},"He has severe cramping and pain in his left leg due to diabetic neuropathy.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "unstructured": [\n    {\n      "text": "He has severe cramping and pain in his left leg due to diabetic neuropathy.",\n      "data": {\n        "SymptomDiseaseInd": [\n          {\n            "type": "aci.SymptomDiseaseInd",\n            "begin": 7,\n            "end": 22,\n            "coveredText": "severe cramping",\n            "icd9Code": "729.82",\n            "icd10Code": "R25.2",\n            "modality": "positive",\n            "symptomDiseaseSurfaceForm": "cramping",\n            "cui": "C0026821",\n            "dateInMilliseconds": " ",\n            "snomedConceptId": "55300003",\n            "modifiers": [\n              {\n                "coveredText": "severe",\n                "end": 13,\n                "type": "aci.ModifierGroupInd",\n                "begin": 7\n              }\n            ],\n            "ccsCode": "211",\n            "symptomDiseaseNormalizedName": "cramp"\n          },\n          {\n            "type": "aci.SymptomDiseaseInd",\n            "begin": 27,\n            "end": 47,\n            "coveredText": "pain in his left leg",\n            "modality": "positive",\n            "symptomDiseaseSurfaceForm": "pain",\n            "dateInMilliseconds": " ",\n            "modifiers": [\n              {\n                "coveredText": "his left leg",\n                "end": 47,\n                "siteNormalizedName": "structure of left lower leg",\n                "type": "aci.SiteInd",\n                "snomedConceptId": "48979004",\n                "begin": 35,\n                "compound": "false"\n              }\n            ],\n            "symptomDiseaseNormalizedName": "pain"\n          },\n          {\n            "type": "aci.SymptomDiseaseInd",\n            "begin": 55,\n            "end": 74,\n            "coveredText": "diabetic neuropathy",\n            "icd9Code": "355.9,250.60",\n            "icd10Code": "E14.4,G63.2,E11.40",\n            "modality": "positive",\n            "symptomDiseaseSurfaceForm": "diabetic neuropathy",\n            "cui": "C0011882",\n            "dateInMilliseconds": " ",\n            "snomedConceptId": "230572002",\n            "ccsCode": "50",\n            "symptomDiseaseNormalizedName": "diabetic neuropathy",\n            "hccCode": "18"\n          }\n        ]\n      }\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clouddocs-annotator-symptom-disease-md-4990ae053bae15feaf0d.js.map