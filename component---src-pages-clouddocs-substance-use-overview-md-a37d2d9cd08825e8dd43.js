"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[1450],{3624:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),s=a(8650),l=a.n(s),i=a(1597),r=a(1931),o=a(9514),c=a(5900),d=a.n(c),u=function(e){var t,a=e.title,s=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===s,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,s=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||s,r=l.baseUrl,o=l.subDirectory,c=r+"/edit/"+l.branch+o+"/src/pages"+t;return r?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4703),b=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,s=e.slug,r=s.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),u=s.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=o,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component),f=g,h=a(7296),w=a(5387),E=a(3732),k=function(e){var t=e.date,a=new Date(t);return t?n.createElement(E.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(E.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,s=e.location,c=e.Title,d=t.frontmatter,b=void 0===d?{}:d,g=t.relativePagePath,E=t.titleType,v=b.tabs,N=b.title,y=b.theme,x=b.description,A=b.keywords,P=b.date,S=(0,w.Z)().interiorTheme,C=(0,i.useStaticQuery)("2456312558").site.pathPrefix,T=C?s.pathname.replace(C,""):s.pathname,_=v?T.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",D=y||S;return n.createElement(o.Z,{tabs:v,homepage:!1,theme:D,pageTitle:N,pageDescription:x,pageKeywords:A,titleType:E},n.createElement(u,{title:c?n.createElement(c,null):N,label:"label",tabs:v,theme:D}),v&&n.createElement(f,{title:N,slug:T,tabs:v,currentTab:_}),n.createElement(h.Z,{padded:!0},a,n.createElement(m,{relativePagePath:g}),n.createElement(k,{date:P})),n.createElement(p.Z,{pageContext:t,location:s,slug:T,tabs:v,currentTab:_}),n.createElement(r.Z,null))}},1657:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return d}});var n=a(3366),s=(a(7294),a(4983)),l=a(3624),i=["components"],r={},o={_frontmatter:r},c=l.Z;function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)(c,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The substance use feature is a ready-to-use annotation capability within Annotator for Clinical Data that provides contextual information for alcohol use, tobacco use, illicit drug use, and substance abuse treatment identified in unstructured text.  "),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.91666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYElEQVQ4y52TS2/TQBSF/UNQSf1+2+Ox41fqNG81JQRUlQ2koqq6ZsMfYsWOv/ihmSSAxKbq4mhmrDvH5557xhBVT172iGpCXnZkotJI85I0l4RJjh+mBFGmVz9MTjjt/QDPD/CDENd1MIZhSt9PuLoa6PoJXdvSNDV1rTBGSoltW5jmJY5t672tVmuE5aVcbH8w2v3kze4XF+03jPV6rUmEEBplWTJfLFitVsznc6bTKcMwEEURpmliWYrQOZI6HnY6w8nmWOkSK6gw7u/v2e12Gop8s9nw+PWRp6cnHh4e+PLlwOFwoGkagiAgjmM8z8N1XXzfw3NGGr4zwnVMDKVqMpmw3W5p24aiEBRSUBQ5ZVVSNzVd1zLpO+7u7th/2FOWFWmanUgDPM8njhOKQmJkWUaSJPiehxCS6bBkNmxYzm8py5q+vaaurxhZLq6nLrvUTU/VdPqeUqvaV8qLosCIo5A4ivGCgNn1hufH76xX77nZ7GnqjqoauFnMeP7YsZxILNvVQxvXlR7Y2YI8z4+Em8WKz/sVD7cVshC0Zc27Wmp/0ixh92nL+mZKJxOyOMCybPquo287xvX4f8IwisnTGJEEOkeObZGFoS7ShSIljEPejkxMy9bt9X1Pq1SOFcakafqXUEXBNC0uzWOxioRpnbJm23+i4jjHqDiuqy8nSUwYRXry5+krCwxd5DgvwrlWyIpClnoo5x+/mlBFRUVEFFI/BPXd9329V8pfRag8O8ftmEVfvySl0rD+8eulKGRFlksc53g+e6wJlaFhGL4YSkmeC+2XalOdFZRapfw3iIzSQenyMUAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("picture",{parentName:"span"},"\n          ",(0,s.kt)("source",{parentName:"picture",srcSet:["/static/a412f11850438450f41d2dad1dbd2282/0eda2/substance_use.webp 288w","/static/a412f11850438450f41d2dad1dbd2282/460e2/substance_use.webp 576w","/static/a412f11850438450f41d2dad1dbd2282/e0ca3/substance_use.webp 1152w","/static/a412f11850438450f41d2dad1dbd2282/e078e/substance_use.webp 1412w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,s.kt)("source",{parentName:"picture",srcSet:["/static/a412f11850438450f41d2dad1dbd2282/7fc1e/substance_use.png 288w","/static/a412f11850438450f41d2dad1dbd2282/a5df1/substance_use.png 576w","/static/a412f11850438450f41d2dad1dbd2282/3cbba/substance_use.png 1152w","/static/a412f11850438450f41d2dad1dbd2282/c1221/substance_use.png 1412w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,s.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/a412f11850438450f41d2dad1dbd2282/3cbba/substance_use.png",alt:"substance_use",title:"substance_use",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,s.kt)("p",null,"The Annotator for Clinical Data ",(0,s.kt)("a",{parentName:"p",href:"https://acd-try-it-out.mybluemix.net/preview"},"demo application")," allows you to see how substance use is detected."),(0,s.kt)("p",null,"The substance use capability is currently available through ",(0,s.kt)("a",{parentName:"p",href:"/clouddocs/clinical_insights_overview/"},"Clinical Insights"),".  "),(0,s.kt)("h2",null,"Models"),(0,s.kt)("p",null,"Each model contributes contextual features to annotations that are either produced by standard Annotator for Clinical Data annotators or from custom annotations you create using the Annotator for Clinical Data Configuration Editor.  The Substance Use Models include:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/clouddocs/substance_use_alcohol/"},"Alcohol")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/clouddocs/substance_use_tobacco/"},"Tobacco")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/clouddocs/substance_use_illicit_drug/"},"Illicit Drug")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/clouddocs/substance_abuse_treatment/"},"Substance Abuse Treatment"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clouddocs-substance-use-overview-md-a37d2d9cd08825e8dd43.js.map