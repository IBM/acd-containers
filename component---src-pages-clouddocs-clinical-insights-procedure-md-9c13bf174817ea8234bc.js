"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[7589],{3624:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(7294),n=a(8650),l=a.n(n),i=a(1597),o=a(1931),c=a(9514),p=a(5900),d=a.n(p),s=function(e){var t,a=e.title,n=e.theme,l=e.tabs,i=void 0===l?[]:l;return r.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,n=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,o=l.baseUrl,c=l.subDirectory,p=o+"/edit/"+l.branch+c+"/src/pages"+t;return o?r.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"bx--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},u=a(4703),g=a(1721),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),c=a===o,p=new RegExp(o+"/?(#.*)?$"),s=n.replace(p,a);return r.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=c,t),"PageTabs-module--list-item--024o6")},r.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+s},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},r.createElement("nav",{"aria-label":t},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(r.Component),h=f,b=a(7296),k=a(5387),N=a(3732),y=function(e){var t=e.date,a=new Date(t);return t?r.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(N.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,n=e.location,p=e.Title,d=t.frontmatter,g=void 0===d?{}:d,f=t.relativePagePath,N=t.titleType,w=g.tabs,v=g.title,S=g.theme,E=g.description,A=g.keywords,x=g.date,T=(0,k.Z)().interiorTheme,P=(0,i.useStaticQuery)("2456312558").site.pathPrefix,C=P?n.pathname.replace(P,""):n.pathname,Z=w?C.split("/").filter(Boolean).slice(-1)[0]||l()(w[0],{lower:!0}):"",B=S||T;return r.createElement(c.Z,{tabs:w,homepage:!1,theme:B,pageTitle:v,pageDescription:E,pageKeywords:A,titleType:N},r.createElement(s,{title:p?r.createElement(p,null):v,label:"label",tabs:w,theme:B}),w&&r.createElement(h,{title:v,slug:C,tabs:w,currentTab:Z}),r.createElement(b.Z,{padded:!0},a,r.createElement(m,{relativePagePath:f}),r.createElement(y,{date:x})),r.createElement(u.Z,{pageContext:t,location:n,slug:C,tabs:w,currentTab:Z}),r.createElement(o.Z,null))}},668:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return d}});var r=a(3366),n=(a(7294),a(4983)),l=a(3624),i=["components"],o={},c={_frontmatter:o},p=l.Z;function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)(p,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The procedure model provides information about how the procedure applies to the the patient and other classification information about the procedure."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABnUlEQVQoz22S62rbQBBG/RyF+irb1V0rW7fVSopkO7bjW0zb0NJCHiBP0Ocpfc5Tdk0Cof0xzOwwnPk+ZntZllEUBbecm5znuemlaUocx4RhiGVZjMdjRqMRk8kEy5oyHX9ktHhicPpD//CbD+Uvep7v43o+dd1QlsoAFouFieVySZokBp4kCUopHg4H8/ZcD9v+hO0K5oHCETWy2dFL0oyq7Wiajko1N1CSICJBUZeUXU0YhIRhRFUVvLx8p6oVYZxg2zbWZMxk1Md1Zlwfz/SWRcnpdGaz2ZDnGZWSyCJnu71HSslgMDB2tU0d2rLv+9RNRZZmRoDjuggRc7lc6MVly8PhSNe1FFKxP31hvTvzeP3MarWi3+8zm82YTqdv4bouURQZsOd5RqmuDVDIhu1uTykLpLqj6vZkZcfXp2+07d0/QK3W8wPCSOB57pt6vcQAI9lwPJ3Z3m9QdUu3u6K6Iz9+PrNadf8FOo6DEAtzwNe+EOIG9OOUqq7NF9E29FAQBKzXa/OFhsPhO7saqNXoI+n5+XxuFupaA/8CQkoCWY3eRjMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/static/8eab3c571f30e5deff2769895ef5e0c4/0eda2/procedure.webp 288w","/static/8eab3c571f30e5deff2769895ef5e0c4/460e2/procedure.webp 576w","/static/8eab3c571f30e5deff2769895ef5e0c4/e0ca3/procedure.webp 1152w","/static/8eab3c571f30e5deff2769895ef5e0c4/d02be/procedure.webp 1728w","/static/8eab3c571f30e5deff2769895ef5e0c4/c1f4c/procedure.webp 2304w","/static/8eab3c571f30e5deff2769895ef5e0c4/cdfd3/procedure.webp 2796w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/static/8eab3c571f30e5deff2769895ef5e0c4/7fc1e/procedure.png 288w","/static/8eab3c571f30e5deff2769895ef5e0c4/a5df1/procedure.png 576w","/static/8eab3c571f30e5deff2769895ef5e0c4/3cbba/procedure.png 1152w","/static/8eab3c571f30e5deff2769895ef5e0c4/0b124/procedure.png 1728w","/static/8eab3c571f30e5deff2769895ef5e0c4/4ea69/procedure.png 2304w","/static/8eab3c571f30e5deff2769895ef5e0c4/4ea3c/procedure.png 2796w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/8eab3c571f30e5deff2769895ef5e0c4/3cbba/procedure.png",alt:"procedure",title:"procedure",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,n.kt)("p",null,"The demo application above shows an example of how to use the scores from the procedure model to create attributes.  In this example, Chemotherapy has a high ",(0,n.kt)("em",{parentName:"p"},"discussed")," score and is not promoted to an attribute.  Radiotherapy does apply to the patient in this example and is promoted to an attribute."),(0,n.kt)("p",null,"The usage section of the JSON response indicates how a procedure applies to a patient."),(0,n.kt)("h2",null,"usage"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"explicitScore"),(0,n.kt)("td",{parentName:"tr",align:null},"The procedure has been done.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pendingScore"),(0,n.kt)("td",{parentName:"tr",align:null},"The procedure has been scheduled or is highly recommended by a physician.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"discussedScore"),(0,n.kt)("td",{parentName:"tr",align:null},"Other mentions of the procedure that do not directly apply to the patient.")))),(0,n.kt)("h2",null,"task"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"therapeuticScore"),(0,n.kt)("td",{parentName:"tr",align:null},"This procedure is meant to treat a condition.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"diagnosticScore"),(0,n.kt)("td",{parentName:"tr",align:null},"This procedure is meant to diagnose a condition.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"surgicalTaskScore"),(0,n.kt)("td",{parentName:"tr",align:null},"This procedure is a subtask of a larger surgical process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clinicalAssessmentScore"),(0,n.kt)("td",{parentName:"tr",align:null},"This procedure is a physician’s evaluation of a patient.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"labTestScore"),(0,n.kt)("td",{parentName:"tr",align:null},"This procedure is a lab test.")))),(0,n.kt)("h2",null,"type"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"deviceScore"),(0,n.kt)("td",{parentName:"tr",align:null},"The procedure involves an implanted device.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"materialScore"),(0,n.kt)("td",{parentName:"tr",align:null},"The procedure involves grafts or other material implants.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"medicationScore"),(0,n.kt)("td",{parentName:"tr",align:null},"The procedure involves the administration of a medication.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"conditionManagementScore"),(0,n.kt)("td",{parentName:"tr",align:null},"An ongoing procedure to manage a long term condition.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"procedureScore"),(0,n.kt)("td",{parentName:"tr",align:null},"Any other type of procedure.")))),(0,n.kt)("h2",null,"Sample Response"),(0,n.kt)("p",null,"Consider the following sample text."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Chemotherapy with Cisplatin was not an option for his type of cancer.")),(0,n.kt)("p",null,"The clinical insight features for Chemotherapy might look as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'"insightModelData": {\n    "procedure": {\n        "usage": {\n            "explicitScore": 0.035,\n            "pendingScore": 0.002,\n            "discussedScore": 0.963\n        },\n        "task": {\n            "therapeuticScore": 0.999,\n            "diagnosticScore": 0,\n            "surgicalTaskScore": 0.001,\n            "clinicalAssessmentScore": 0\n        },\n        "type": {\n            "deviceScore": 0,\n            "materialScore": 0,\n            "medicationScore": 0.994,\n            "procedureScore": 0.005,\n            "conditionManagementScore": 0\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clouddocs-clinical-insights-procedure-md-9c13bf174817ea8234bc.js.map