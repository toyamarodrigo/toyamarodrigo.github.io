(this["webpackJsonpportfolio-v2"]=this["webpackJsonpportfolio-v2"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/project-image1-min.694175c2.png"},101:function(e,t,a){e.exports=a.p+"static/media/project-image2-min.71d7a926.png"},102:function(e,t,a){e.exports=a.p+"static/media/project-image3-min.46a273bf.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/project-image4-min.567621c7.png"},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),c=a.n(l),s=a(16),i=a(17),o=a(22),m=a(19),u=a(18),p=a(7),d=a(20),g=a(116),h=a(21),b=a(12),f=a(28),y=a.n(f),E=(a(86),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleCollapse=function(){n.setState({isOpen:!n.state.isOpen})},n.state={collapse:!1},n.onClick=n.onClick.bind(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"onClick",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){var e=this;return y()(document).ready((function(){y()(document).click((function(e){var t=y()(e.target);!0!==y()(".navbar-collapse").hasClass("show")||t.hasClass("navbar-toggler")||y()(".navbar-toggler").click()}))})),r.a.createElement("div",{className:"header transition-item",ref:function(t){return e.node=t}},r.a.createElement(b.g,{dark:!0,className:"fixed-top shadow-none p-0",expand:"md"},r.a.createElement(b.d,null,r.a.createElement(b.h,null,r.a.createElement(p.c,{exact:!0,to:"/"},"rt.codes")),r.a.createElement(b.j,{className:"d-block d-md-none",onClick:this.onClick}),r.a.createElement(b.c,{isOpen:this.state.collapse,navbar:!0},r.a.createElement(b.i,{right:!0},r.a.createElement(b.f,{className:"link-items"},r.a.createElement(p.c,{exact:!0,activeClassName:"nav-link--active",className:"nav-link",to:"/",onClick:function(){return e.onClick()}},"Home")),r.a.createElement(b.f,{className:"link-items"},r.a.createElement(p.c,{activeClassName:"nav-link--active",className:"nav-link",to:"/about",onClick:function(){return e.onClick()}},"About")),r.a.createElement(b.f,{className:"link-items"},r.a.createElement(p.c,{activeClassName:"nav-link--active",className:"nav-link",to:"/projects",onClick:function(){return e.onClick()}},"Projects")),r.a.createElement(b.f,{className:"link-items"},r.a.createElement(p.c,{activeClassName:"nav-link--active",className:"nav-link",to:"/contact",onClick:function(){return e.onClick()}},"Contact")))))))}}]),a}(r.a.Component)),v=Object(d.f)(E),w=a(114),N=a(115),j=a(56),k=a.n(j),x=(a(87),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{className:"justify-content-center"},r.a.createElement(N.a,{xs:10,lg:5},this.props.children))}}]),a}(r.a.Component)),C=a(23),S=a(27),I=a(25),O=(a(91),function(e){var t=e.profile;return r.a.createElement("ul",{className:"connect-list"},t.basics.profiles.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{className:"".concat(e.name," ").concat(e.animation),href:e.url,"aria-label":e.network,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,{icon:"file"===e.name?S.c:"linkedin"===e.name?I.c:"github"===e.name?I.a:"mail"===e.name?S.b:"",className:"svg-icon"})))})))}),T=(a(92),function(e){var t=e.title,a=e.subtitle,n=e.profile;return r.a.createElement("div",{className:"homepage transition-item"},r.a.createElement("div",{className:"landing d-flex align-items-center"},r.a.createElement(g.a,null,r.a.createElement(w.a,{className:"justify-content-center"},r.a.createElement(N.a,{xs:12},r.a.createElement("h1",{className:"text-center title"},t),r.a.createElement("h3",{className:"text-center subtitle-typed"},r.a.createElement(k.a,{strings:a,typeSpeed:100,backSpeed:40,loop:!0})))),r.a.createElement(w.a,{className:"justify-content-center"},r.a.createElement("hr",{className:"separator"})),r.a.createElement(x,null,r.a.createElement(O,{profile:n})),r.a.createElement(g.a,{className:"view-project-btn-container"},r.a.createElement(w.a,{className:"justify-content-center"},r.a.createElement(N.a,{lg:4,className:"text-center"},r.a.createElement(p.b,{className:"custom-btn",to:"/projects"},"View My Projects")))))))}),J=(a(93),function(e){return r.a.createElement(g.a,{fluid:!0},r.a.createElement(w.a,{className:"justify-content-center"},r.a.createElement(N.a,{md:8,lg:10},e.children)))}),P=(a(94),function(e){var t=e.profile;return r.a.createElement("ul",{className:"footer-contact-list"},t.basics.footer.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{className:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,{icon:"ig"===e.name?I.b:"linkedin"===e.name?I.c:"github"===e.name?I.a:"",className:"svg-icon"})))})))}),M=(a(95),function(e){var t=e.profile;return r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement(J,null,r.a.createElement(P,{profile:t})),r.a.createElement(J,{className:"text-white"},"\xa9 ",(new Date).getFullYear()," Copyright:"," ",r.a.createElement("a",{href:"https://toyamarodrigo.com"},"Rodrigo Toyama")))}),A=(a(96),a(117)),B=a(118),H=function(e){var t=e.title,n=e.profile;return r.a.createElement("div",{className:"aboutpage landing"},r.a.createElement(J,null,r.a.createElement("div",{className:"title-container"},r.a.createElement("h1",{className:"text-center about-title"},t),r.a.createElement(w.a,{className:"justify-content-center"},r.a.createElement("hr",{className:"separator"})))),r.a.createElement(g.a,null,r.a.createElement(w.a,{className:"justify-content-center align-items-center pt-5"},r.a.createElement(N.a,{md:6,lg:3,className:"text-center"},r.a.createElement("img",{src:a(48),alt:"",className:"avatar"})),r.a.createElement(N.a,{xs:12,lg:7},r.a.createElement(A.a.Body,{className:"text-white about-me text-center"},r.a.createElement(A.a.Text,null,"Hi, I'm Rodrigo, an aspiring Full-Stack Developer based in Argentina."),r.a.createElement(A.a.Text,null,"Passionate about Software and Web development. I love to learn new things as well as solving real world problems."))))),r.a.createElement(J,null,r.a.createElement("div",{className:"subtitle-container"},r.a.createElement("h2",{className:"text-center about-subtitle"},"My Goal"))),r.a.createElement(g.a,{className:"py-5"},r.a.createElement(w.a,{className:"justify-content-center align-items-center"},r.a.createElement(N.a,{xs:12,lg:6,className:"text-center"},r.a.createElement("img",{src:a(49),alt:"",className:"goal-img"})),r.a.createElement(N.a,{xs:12,lg:5},r.a.createElement(A.a.Body,{className:"text-white about-me"},r.a.createElement(A.a.Text,null,"My goal is to provide high quality work to clients no matter if the project is small or of high complexity."),r.a.createElement(A.a.Text,null,"I entered the world of Software development because I realised that I can make an impact on people by just using my imagination and passion when building applications."))))),r.a.createElement(g.a,null,r.a.createElement(w.a,{className:"flex-row-reverse justify-content-center align-items-center"},r.a.createElement(N.a,{xs:12,lg:5,className:"text-center"},r.a.createElement("img",{src:a(50),alt:"",className:"goal-img"})),r.a.createElement(N.a,{xs:12,lg:6},r.a.createElement(A.a.Body,{className:"text-white about-me"},r.a.createElement(A.a.Text,null,"By 2018, I thought it would be a good idea to start documenting/bloging my journey of becoming a developer to inspire others as well as keep myself acountable. So I started my Instagram",r.a.createElement("a",{href:"https://www.instagram.com/rt.codes/",className:"ig-link"}," @rt.codes "),"talking about the progress I was making and what concepts I was currently learning."),r.a.createElement(A.a.Text,null,"I also did a bunch of Personal projects with the knowledge I gathered from courses and Internet. Check them out on the button below."))))),r.a.createElement(g.a,{className:"py-5 view-project-btn-container"},r.a.createElement(w.a,{className:"justify-content-center"},r.a.createElement(N.a,{lg:4,className:"text-center"},r.a.createElement(p.b,{className:"custom-btn",to:"/projects"},"View My Projects")))),r.a.createElement("section",{id:"Contact"},r.a.createElement("div",{className:"container footer-container pt-5"},r.a.createElement("h2",{className:"text-center title"},"Contact me"),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("hr",{className:"separator"})),r.a.createElement("h5",{className:"text-center text-white my-4"},"Let's work together to create game-changing experiences."),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("form",{className:"col-md-10 col-lg-8 pt-3 text-center"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control mb-4",placeholder:"Name"}),r.a.createElement("input",{type:"email",className:"form-control mb-4",id:"Email","aria-describedby":"emailHelp",placeholder:"Email"}),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",id:"TextArea",rows:"3",placeholder:"Message"}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted text-center mt-3"},"We'll never share your email with anyone else."))),r.a.createElement(g.a,{className:"py-4 view-project-btn-container"},r.a.createElement(w.a,{className:"justify-content-center"},r.a.createElement(N.a,{lg:4,className:"text-center"},r.a.createElement(B.a,{type:"submit",className:"custom-btn"},"Submit")))))))),r.a.createElement(M,{profile:n}))},L=a(31),z=(a(97),function(e){var t=e.profile;return r.a.createElement("div",null,t.projects.map((function(e,t){return r.a.createElement(A.a,{key:t,className:"my-5 shadow"},r.a.createElement(g.a,null,r.a.createElement(w.a,{className:"".concat(e.classPosition," justify-content-center align-items-center")},r.a.createElement(N.a,{sm:12,lg:7},Object(L.a)(e.images).map((function(e){var t=e.resolutions.micro.url,n=e.resolutions.micro.id;return r.a.createElement(A.a.Img,{key:n,variant:"left",src:a(98)("./assets"+t),className:"project-img"})}))),r.a.createElement(N.a,{md:12,lg:5},r.a.createElement(A.a.Body,null,r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement(A.a.Title,null,e.name),r.a.createElement(A.a.Text,null,e.summary))),r.a.createElement(w.a,null,r.a.createElement(N.a,{className:"used-tech-container"},r.a.createElement(A.a.Subtitle,null,e.subtitle),r.a.createElement("ul",{className:"d-inline-flex used-tech flex-wrap"},Object(L.a)(e.languages).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("p",{className:"p-languages"},e))})),Object(L.a)(e.libraries).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("p",{className:"p-libraries"},e))}))))),r.a.createElement(w.a,{className:"justify-content-around"},r.a.createElement(B.a,{className:"col-10 mx-1 my-2 custom-btn btn-block",href:e.githubUrl,target:"_blank"},r.a.createElement(C.a,{icon:S.a,className:"mr-2"}),"code"),r.a.createElement(B.a,{className:"col-10 mx-1 custom-btn btn-block",href:e.website,target:"_blank"},r.a.createElement(C.a,{icon:S.d,className:"mr-2"}),"view")))))))})))}),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{className:"py-5"},this.props.children)}}]),a}(r.a.Component),U=(a(104),function(e){var t=e.profile,a=e.title;return r.a.createElement("div",{className:"projectspage landing"},r.a.createElement(J,{className:"py-0"},r.a.createElement("div",{className:"title-container"},r.a.createElement("h1",{className:"text-center title"},a)),r.a.createElement(w.a,{class:"justify-content-center"},r.a.createElement("hr",{class:"separator"}))),r.a.createElement(D,null,r.a.createElement(z,{profile:t})),r.a.createElement(M,{profile:t}))}),F=(a(105),function(e){var t=e.title,a=e.profile,n=(e.name,e.mail,e.message,e.onChange),l=e.onSubmit;return r.a.createElement("div",{className:"contactpage landing"},r.a.createElement(J,null,r.a.createElement("div",{className:"title-container"},r.a.createElement("h1",{className:"text-center title"},t))),r.a.createElement("section",{id:"Contact"},r.a.createElement(w.a,{className:"m-0 justify-content-center"},r.a.createElement("hr",{className:"separator"})),r.a.createElement(w.a,{className:"pt-3 m-0 justify-content-center"},r.a.createElement(N.a,{xs:12},r.a.createElement("h5",{className:"text-center text-white my-4"},"Let's work together to create game-changing experiences.")),r.a.createElement(N.a,{xs:12,md:8,lg:6},r.a.createElement("form",{className:"pt-3 text-center",method:"post",onSubmit:l},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"name",className:"form-control mb-4",placeholder:"Name",onChange:n}),r.a.createElement("input",{type:"email",className:"form-control mb-4",id:"Email","aria-describedby":"emailHelp",placeholder:"Email",onChange:n}),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",id:"TextArea",rows:"3",placeholder:"Message",onChange:n}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted text-center mt-3"},"We'll never share your email with anyone else."))),r.a.createElement(g.a,{className:"py-4 view-project-btn-container"},r.a.createElement(w.a,{className:"justify-content-center"},r.a.createElement(N.a,{lg:4,className:"text-center"},r.a.createElement(B.a,{type:"submit",className:"custom-btn"},"Submit")))))))),r.a.createElement(M,{profile:a}))}),R=(a(106),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:"",about:{title:"About me"},projects:{title:"Projects page"},contact:{title:"Contact page"}},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("http://localhost:3000/contact",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(alert("Message Sent."),t.resetForm()):"fail"===e.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.mail,l=t.message,c=t.about,s=t.contact;return r.a.createElement(p.a,null,r.a.createElement(g.a,{className:"p-0",fluid:!0},r.a.createElement(v,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(T,{title:h.basics.name,subtitle:h.basics.subtitle,profile:h})}}),r.a.createElement(d.a,{path:"/about",render:function(){return r.a.createElement(H,{title:c.title,profile:h})}}),r.a.createElement(d.a,{path:"/projects",render:function(){return r.a.createElement(U,{profile:h,title:h.basics.pages.projects.title})}}),r.a.createElement(d.a,{path:"/contact",render:function(){return r.a.createElement(F,{title:s.title,profile:h,name:a,mail:n,message:l,onChange:e.handleChange,onSubmit:e.handleSubmit})}}))))}}]),a}(r.a.Component)),W=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(W,"px")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}));var _=R;a(107),a(108),a(109);c.a.render(r.a.createElement(_,null),document.getElementById("root"))},21:function(e){e.exports=JSON.parse('{"basics":{"name":"Rodrigo Toyama","subtitle":["^300 Front-end Developer^1000","^400 Maker^1000"],"picture":"https://media-exp1.licdn.com/dms/image/C4D03AQGfEA_NUlCATA/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=ANr5sptyJJuhptyqykxTpJueo0cN9xW0fc4354yEf_Y","summary":"Passionate about Software, Web development and new technologies, proactive with desire to develop myself through real challenges having as tools to achieve them: responsability, commitment and learning. I love to learn new things as well as solving real world problems","goals":"My goal is to provide high quality work to clients no matter if the project is small or of high complexity. I entered the world of Software development because I realised that I can make an impact on people by just using my imagination and passion when building applications.","myHistory":"By 2018, I thought it would be a good idea to start documenting/bloging my journey of becoming a developer to inspire others as well as keep my self acountable. So I started my Instagram @rt.codes talking about the progress I was making and what conecpts I was currently learning. I also did a bunch of Personal projects with the knowledge I gathered from courses and Internet. Check them out on the Button below.","website":"http://www.toyamarodrigo.com","username":"toyamarodrigo","email":"toyama.rodrigo@gmail.com","region":"Buenos Aires, Argentina","pages":{"about":{"title":"About me"},"projects":{"title":"Projects page"},"contact":{"title":"Contact page"}},"profiles":[{"name":"file","network":"CV","animation":"connect-icon","url":"https://bit.ly/rt-cv-eng"},{"name":"linkedin","network":"LinkedIn","animation":"connect-icon","url":"https://bit.ly/rtoyama-linkedin"},{"name":"github","network":"GitHub","username":"toyamarodrigo","animation":"connect-icon","url":"https://bit.ly/rt-github"},{"name":"mail","network":"Mail","url":"mailto:toyama.rodrigo@gmail.com","animation":"connect-icon"}],"footer":[{"id":0,"name":"ig","url":"https://instagram.com/rt.codes"},{"id":1,"name":"linkedin","url":"https://www.linkedin.com/in/rodrigo-toyama-1861b1154/"},{"id":2,"name":"github","url":"https://github.com/toyamarodrigo"}]},"skills":[{"name":"HTML","level":"Expert","keywords":[]},{"name":"CSS","level":"Intermediate","keywords":[]},{"name":"Javascript","level":"Advanced","keywords":[]},{"name":"Java","level":"Advanced","keywords":[]},{"name":"MySQL","level":"Beginner","keywords":[]},{"name":"JQuery","level":"Beginner","keywords":[]},{"name":"Bootstrap 4","level":"Beginner","keywords":[]},{"name":"Spring Framework","level":"Beginner","keywords":[]},{"name":"Hibernate","level":"Beginner","keywords":[]}],"projects":[{"id":0,"name":"Invoice Management System","displayName":"invoice-management-system","summary":"Main objective of this project was managing Customers and their Invoices. Developed all type of CRUD operations, learning Spring Framework and Java in the process also how Hibernate works and the use of Thymeleaf and JQuery.","website":"https://bit.ly/rt-invoice","githubUrl":"https://bit.ly/rt-invoice-code","subtitle":"Used tech","classPosition":false,"primaryLanguage":"","languages":["HTML","CSS","Java","Javascript","MySQL"],"libraries":["JQuery","MD-Bootstrap","Spring Framework","Hibernate","Thymeleaf"],"images":[{"resolutions":{"micro":{"id":0,"url":"/project-image1-min.png","size":1228,"width":32,"height":22},"thumbnail":{"url":"https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-thumbnail","size":4326,"width":224,"height":155},"mobile":{"url":"https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-mobile","size":7821,"width":400,"height":277},"desktop":{"url":"https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=accion-brillar-concentrarse-dedos-735911.jpg&fm=jpg","size":7836,"width":400,"height":277}}}],"videos":[{"url":"https://www.instagram.com/p/B_J0aPyA4qY","source":"instagram","sourceId":""}]},{"id":1,"name":"Web Portfolio v2","displayName":"my-web-portfolio","summary":"Updated my web portfolio, trying to implement ReactJS and Router on it for learning purposes and to show my projects.","website":"https://bit.ly/rt-portfolio","githubUrl":"https://bit.ly/rt-portfolio-code","subtitle":"Used tech","classPosition":"flex-row-reverse","primaryLanguage":"","languages":["HTML","SCSS","Javascript"],"libraries":["React-Bootstrap","React","NodeJS","React-Router","JQuery"],"images":[{"resolutions":{"micro":{"id":0,"url":"/project-image2-min.png","size":1228,"width":32,"height":22},"thumbnail":{"url":"https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-thumbnail","size":4326,"width":224,"height":155},"mobile":{"url":"https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-mobile","size":7821,"width":400,"height":277},"desktop":{"url":"https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=accion-brillar-concentrarse-dedos-735911.jpg&fm=jpg","size":7836,"width":400,"height":277}}}]},{"id":2,"name":"Project SAP Landing Web","displayName":"sap-landing-web","summary":"College project - Landing web for a made-up SAP company, Rules were to use ONLY html, css, bootstrap and some JS plugins. With this project I improved my Bootstrap skills and learn about JS plugins and how they work. ","website":"https://bit.ly/rt-sap-landing","githubUrl":"https://bit.ly/rt-sap-landing-code","subtitle":"Used tech","classPosition":false,"primaryLanguage":"","languages":["HTML","CSS","Javascript"],"libraries":["Bootstrap","Wow.js","Fancybox.js"],"images":[{"resolutions":{"micro":{"id":0,"url":"/project-image3-min.jpg","size":1228,"width":32,"height":22},"thumbnail":{"url":"https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-thumbnail","size":4326,"width":224,"height":155},"mobile":{"url":"https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-mobile","size":7821,"width":400,"height":277},"desktop":{"url":"https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=accion-brillar-concentrarse-dedos-735911.jpg&fm=jpg","size":7836,"width":400,"height":277}}}]},{"id":3,"name":"Project SAP Home Web","displayName":"sap-home-web","summary":"Homepage from Landing. same rules applied from Landing project.","website":"https://bit.ly/rt-sap-homesite","githubUrl":"https://bit.ly/rt-sap-homesite-code","subtitle":"Used tech","classPosition":"flex-row-reverse","primaryLanguage":"","languages":["HTML","CSS","Javascript"],"libraries":["Bootstrap","Wow.js","Fancybox.js"],"images":[{"resolutions":{"micro":{"id":0,"url":"/project-image4-min.png","size":1228,"width":32,"height":22},"thumbnail":{"url":"https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-thumbnail","size":4326,"width":224,"height":155},"mobile":{"url":"https://project-images.gitconnectedcontent.com/88a0a093-c7b7-4928-a6fc-b03d174995de-mobile","size":7821,"width":400,"height":277},"desktop":{"url":"https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=accion-brillar-concentrarse-dedos-735911.jpg&fm=jpg","size":7836,"width":400,"height":277}}}]}],"education":[{"institution":"Instituto Jos\xe9 Hernandez","area":"Comunicaci\xf3n Arte y Dise\xf1o","studyType":"Bachelor\'s of Arts","startDate":"2008","endDate":"2011","start":{"year":2008,"month":null},"end":{"year":2011,"month":null},"gpa":"4.0/4.0"},{"institution":"Universidad de San Mart\xedn","area":"Information Programming Technology","studyType":"","startDate":"2015","endDate":"","start":{"year":2015,"month":null},"end":{"year":null,"month":null},"description":"","gpa":"4.0/4.0"},{"institution":"Escuela de Arte Multimedial Davinci","area":"Systems analyst","studyType":"","startDate":"2019","endDate":"","start":{"year":2019,"month":null},"end":{"year":null,"month":null},"description":"","gpa":"4.0/4.0"}],"languages":["Spanish","English","Japanese"]}')},48:function(e,t,a){e.exports=a.p+"static/media/avatar-min.802def85.jpeg"},49:function(e,t,a){e.exports=a.p+"static/media/goals-image1.29c806af.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/goals-image2.59a46eca.jpg"},58:function(e,t,a){e.exports=a(110)},86:function(e,t,a){},87:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){var n={"./assets/avatar-min.jpeg":48,"./assets/goals-image1.htm":99,"./assets/goals-image1.jpg":49,"./assets/goals-image2.jpg":50,"./assets/project-image1-min.png":100,"./assets/project-image2-min.png":101,"./assets/project-image3-min.jpg":102,"./assets/project-image4-min.png":103};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=98},99:function(e,t,a){e.exports=a.p+"static/media/goals-image1.d166864d.htm"}},[[58,1,2]]]);
//# sourceMappingURL=main.7c55b2b4.chunk.js.map