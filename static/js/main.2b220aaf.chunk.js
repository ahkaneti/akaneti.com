(this["webpackJsonpakaneti.com"]=this["webpackJsonpakaneti.com"]||[]).push([[0],{103:function(e,a,t){},107:function(e,a){},109:function(e,a){},110:function(e,a){},111:function(e,a){},112:function(e,a){},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},32:function(e,a,t){},38:function(e,a){function t(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=38},41:function(e,a,t){e.exports=t.p+"static/media/HearoLogo.83ad7bf7.png"},51:function(e,a,t){"use strict";var n=t(76),l=t(77),r=t(95),c=t(94),s=t(1),i=t.n(s),o=(t(150),t(78)),m=t.n(o),d=t(79),p=t.n(d),u=t(41),h=t.n(u),E=window.innerWidth<=1200||window.innerHeight<600,g=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,E?i.a.createElement("div",null):i.a.createElement("div",{className:"logo_holder"},i.a.createElement("img",{src:p.a,alt:"IEEE Logo",className:"logo"}),i.a.createElement("img",{src:m.a,alt:"Northwestern Logo",className:"logo"}),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"logo_text",styles:{fontFamily:"Montserrat"},href:"http://hymnco.com/"},"hymn"),i.a.createElement("img",{src:h.a,alt:"Hearo Logo",className:"logo"})))}}]),t}(i.a.Component);a.a=g},70:function(e,a,t){"use strict";(function(e){var n=t(1),l=t.n(n),r=(t(59),t(71)),c=t(73),s=t(75),i=t(80),o=t(81),m=t(87),d=(t(51),t(22)),p=t(4);e.isMobile=window.innerWidth<=1200||window.innerHeight<600,e.isSmaller=window.innerHeight<=775,t(159),a.a=function(){return l.a.createElement(d.a,{basename:"/"},l.a.createElement(p.c,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement(m.a,null),l.a.createElement(p.a,{exact:!0,path:"/",component:r.a}),l.a.createElement(p.a,{exact:!0,path:"/aboutme",component:s.a}),l.a.createElement(p.a,{exact:!0,path:"/resume",component:c.a}),l.a.createElement(p.a,{exact:!0,path:"/educationexperience",component:i.a}),l.a.createElement(p.a,{exact:!0,path:"/projects",component:o.a})))))}}).call(this,t(29))},71:function(e,a,t){"use strict";var n=t(44),l=t(1),r=t.n(l),c=t(72),s=t.n(c),i=(t(32),t(59),t(8)),o=t.n(i),m=(t(36),window.innerWidth<=1200||window.innerHeight<600);a.a=function(){var e=Object(l.useState)(!1),a=Object(n.a)(e,2),t=a[0],c=a[1];return Object(l.useEffect)((function(){var e=function(){return c(!0)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[t]),r.a.createElement("div",{className:"App"},m?console.log("hi"):console.log("not hi"),r.a.createElement("div",{className:"screen"},r.a.createElement("div",{className:"welcome_text"},r.a.createElement("p",{styles:{fontFamily:"Montserrat"}},"Hi, I'm Aaron! I'm a",r.a.createElement(o.a,{cursor:{blink:!0}},r.a.createElement("span",null,"developer"),r.a.createElement(o.a.Backspace,{count:9,delay:1200}),r.a.createElement("span",null,"HCI Researcher"),r.a.createElement(o.a.Backspace,{count:14,delay:1200}),r.a.createElement("span",null,"Front-End Engineer")))),r.a.createElement("div",{className:"pro_pic_holder"},r.a.createElement("img",{className:"pro_pic",src:s.a,alt:"professional_pic"})),r.a.createElement("div",null,r.a.createElement("p",null,"You can contact me at aaronkaneti@gmail.com"))))}},72:function(e,a,t){e.exports=t.p+"static/media/profile_pic.85ecdfa4.jpg"},73:function(e,a,t){"use strict";var n=t(1),l=t.n(n),r=t(35),c=t(74),s=t.n(c),i=t(8),o=t.n(i);t(36),t(32);function m(){document.querySelectorAll(".react-pdf__Page__textContent").forEach((function(e){var a=e.style;a.top="0",a.left="0",a.transform=""}))}r.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(r.pdfjs.version,"/pdf.worker.js"),a.a=function(){var e=1.5*window.innerHeight;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"mid"},l.a.createElement("h1",null,l.a.createElement(o.a,null,l.a.createElement(o.a.Delay,{ms:1e3}),l.a.createElement("strong",null,"R\xe9sum\xe9"))),l.a.createElement("h2",null,l.a.createElement("strong",null,"Last Updated 20th of July, 2020.")),l.a.createElement(r.Document,{file:s.a,className:"resume_holder"},l.a.createElement(r.Page,{height:e,pageNumber:1,onLoadSuccess:m,renderAnnotationLayer:!0}))))}},74:function(e,a,t){e.exports=t.p+"static/media/download_resume.af7c5650.pdf"},75:function(e,a,t){"use strict";var n=t(1),l=t.n(n),r=(t(32),t(149),t(51)),c=t(8),s=t.n(c);t(36);a.a=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"midpart"},l.a.createElement("h1",null,l.a.createElement(s.a,null,l.a.createElement(s.a.Delay,{ms:1e3}),"About ",l.a.createElement("strong",null,"Me"))),l.a.createElement("h3",null,"Bachelor of Science in Psychology & Computer Science ",l.a.createElement("br",null)," Front-End Engineer \u2022 Data Analyst"),l.a.createElement("p",{style:{marginLeft:"10%",marginRight:"10%"}},l.a.createElement("strong",null,"I am a software engineer that strives to create code that is as ergonomically induced as possible. My aim, when coding, is to create code that anyone can use.")),l.a.createElement("h1",null,l.a.createElement(s.a,null,l.a.createElement(s.a.Delay,{ms:2e3}),l.a.createElement("strong",null,"Technical Expertise"))),l.a.createElement("div",{className:"expertise-row"},l.a.createElement("div",{className:"all-parts"},l.a.createElement("p",{className:"subject"},l.a.createElement("strong",null,"HTML 5")),l.a.createElement("p",{className:"percentage"},"90%"),l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"achieved"}))),l.a.createElement("div",{className:"all-parts"},l.a.createElement("p",{className:"subject"},l.a.createElement("strong",null,"JavaScript")),l.a.createElement("p",{className:"percentage"},"90%"),l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"achieved"})))),l.a.createElement("div",{className:"expertise-row"},l.a.createElement("div",{className:"all-parts"},l.a.createElement("p",{className:"subject"},l.a.createElement("strong",null,"Unity")),l.a.createElement("p",{className:"percentage"},"80%"),l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"achieved",style:{width:"80%"}}))),l.a.createElement("div",{className:"all-parts"},l.a.createElement("p",{className:"subject"},l.a.createElement("strong",null,"java")),l.a.createElement("p",{className:"percentage"},"75%"),l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"achieved",style:{width:"75%"}})))),l.a.createElement("div",{className:"expertise-row"},l.a.createElement("div",{className:"all-parts"},l.a.createElement("p",{className:"subject"},l.a.createElement("strong",null,"React Native")),l.a.createElement("p",{className:"percentage"},"70%"),l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"achieved",style:{width:"70%"}}))),l.a.createElement("div",{className:"all-parts"},l.a.createElement("p",{className:"subject"},l.a.createElement("strong",null,"C++")),l.a.createElement("p",{className:"percentage"},"80%"),l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"achieved",style:{width:"80%"}})))),l.a.createElement("div",{className:"expertise-row"},l.a.createElement("div",{className:"all-parts"},l.a.createElement("p",{className:"subject"},l.a.createElement("strong",null,"Python")),l.a.createElement("p",{className:"percentage"},"85%"),l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"achieved",style:{width:"85%"}}))),l.a.createElement("div",{className:"all-parts"},l.a.createElement("p",{className:"subject"},l.a.createElement("strong",null,"C#")),l.a.createElement("p",{className:"percentage"},"70%"),l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"achieved",style:{width:"70%"}})))),l.a.createElement("div",{className:"expertise-row"},l.a.createElement("div",{className:"all-parts"},l.a.createElement("p",{className:"subject"},l.a.createElement("strong",null,"CSS3")),l.a.createElement("p",{className:"percentage"},"80%"),l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"achieved",style:{width:"80%"}}))),l.a.createElement("div",{className:"all-parts"},l.a.createElement("p",{className:"subject"},l.a.createElement("strong",null,"Racket")),l.a.createElement("p",{className:"percentage"},"90%"),l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"achieved"}))))),l.a.createElement(r.a,null))}},78:function(e,a,t){e.exports=t.p+"static/media/NULogo.dd04fe1b.png"},79:function(e,a,t){e.exports=t.p+"static/media/IEEELogo.ea014391.png"},80:function(e,a,t){"use strict";var n=t(1),l=t.n(n),r=(t(32),t(151),t(8)),c=t.n(r);t(36);a.a=function(){return console.log("education"),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"midpart"},l.a.createElement("h1",null,l.a.createElement(c.a,null,l.a.createElement(c.a.Delay,{ms:1e3}),"Education & Experience")),l.a.createElement("div",{className:"holder"},l.a.createElement("div",{className:"education"},l.a.createElement("h2",null,"Education"),l.a.createElement("div",{className:"box"},l.a.createElement("p",{className:"year"},"2019 - 2019"),l.a.createElement("p",{className:"title"},l.a.createElement("strong",null,"Resident at The Garage at Northwestern University")),l.a.createElement("p",{className:"description"},"Managed the startup 'hymn' as a part of the residency program at the Garage.")),l.a.createElement("div",{className:"box"},l.a.createElement("p",{className:"year"},"2017 - 2020"),l.a.createElement("p",{className:"title"},l.a.createElement("strong",null,"IEEE Northwestern University Chapter")),l.a.createElement("p",{className:"description"},"Served in various different positions including, Social Chair, Project Manager and President. Created a game using Unity, and two applications using React Native.")),l.a.createElement("div",{className:"box"},l.a.createElement("p",{className:"year"},"2016 - 2020"),l.a.createElement("p",{className:"title"},l.a.createElement("strong",null,"Northwestern University")),l.a.createElement("p",{className:"description"},"Studied Psychology and Computer Science in McCormick School of Engineering")),l.a.createElement("div",{className:"box"},l.a.createElement("p",{className:"year"},"2012 - 2016"),l.a.createElement("p",{className:"title"},l.a.createElement("strong",null,"Ulus Private Jewish Schools")),l.a.createElement("p",{className:"description"},"Finished in the top 5% of his year as the student body president. Completed the science track."))),l.a.createElement("div",{className:"experience"},l.a.createElement("h2",null,"Experience"),l.a.createElement("div",{className:"box"},l.a.createElement("p",{className:"year"},"2019 - 2019"),l.a.createElement("p",{className:"title"},l.a.createElement("strong",null,"Data Scientist Intern / Software Engineering Intern at Anodot")),l.a.createElement("p",{className:"description"},"Created a UI, using React, R and JavaScript, that helped interpret the anomaly data easily and made the process of interpreting more accessible and ergonomically advanced. This UI was used by the Sales Engineers to help explain the main product of Anodot, the anomaly detection, to the customers.")),l.a.createElement("div",{className:"box"},l.a.createElement("p",{className:"year"},"2018 - 2020"),l.a.createElement("p",{className:"title"},l.a.createElement("strong",null,"Founder and Software Engineer at hymn")),l.a.createElement("p",{className:"description"},"Worked on the music service hymn. Managed the start-up and worked on the Front-End interfaces as well as API integration. The start-up was selected to the Garage Residency program at Northwestern University. The APIs are displayed on the right. ")),l.a.createElement("div",{className:"box"},l.a.createElement("p",{className:"year"},"2018 - 2018"),l.a.createElement("p",{className:"title"},l.a.createElement("strong",null,"Co-Founder and Software Engineer at Hearo")),l.a.createElement("p",{className:"description"},"Was part of the team that created the transcription app Hearo. Worked on the navigation part, the calling part and several other front-end side developments of the application. The app is displayed on the right.")),l.a.createElement("div",{className:"box"},l.a.createElement("p",{className:"year"},"2017 - 2020"),l.a.createElement("p",{className:"title"},l.a.createElement("strong",null,"Peer Mentor at Northwestern University")),l.a.createElement("p",{className:"description"},'Peer mentored in the classes "Fundamentals of Computer Programming I & II", "Introduction to Artificial Intelligence" and Human Computer Interaction at Northwestern University.')),l.a.createElement("div",{className:"box"},l.a.createElement("p",{className:"year"},"2017 - 2017"),l.a.createElement("p",{className:"title"},l.a.createElement("strong",null,"Front-End Engineering Intern at Inveon")),l.a.createElement("p",{className:"description"},"Worked on translating an application to React Native and bugfixes, added several other features including Google Firebase Analytics.")),l.a.createElement("div",{className:"box"},l.a.createElement("p",{className:"year"},"2014 - 2014"),l.a.createElement("p",{className:"title"},l.a.createElement("strong",null,"Web Developer Intern at Pixelsoft Office")),l.a.createElement("p",{className:"description"},"Helped create the Coca Cola machine interface at Turkey and editted some of the websites the company worked on."))))))}},81:function(e,a,t){"use strict";var n=t(1),l=t.n(n),r=(t(32),t(152),t(82)),c=t(56),s=t(57),i=t(41),o=t.n(i),m=t(83),d=t.n(m),p=t(84),u=t.n(p);a.a=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"midpart"},l.a.createElement("div",{className:"outer-holder"},l.a.createElement("div",{className:"legend"},l.a.createElement("div",{className:"singular-legend"},l.a.createElement("div",{className:"react legend-circle"})," ",l.a.createElement("p",null,"React")),l.a.createElement("div",{className:"singular-legend"},l.a.createElement("div",{className:"react-native legend-circle"}),l.a.createElement("p",null,"React Native")),l.a.createElement("div",{className:"singular-legend"},l.a.createElement("div",{className:"python legend-circle"}),l.a.createElement("p",null,"Python")),l.a.createElement("div",{className:"singular-legend"},l.a.createElement("div",{className:"html legend-circle"}),l.a.createElement("p",null,"HTML"))),r.projects.map((function(e){return l.a.createElement(c.a,null,l.a.createElement(s.a,{className:"box",key:e.name},l.a.createElement(c.a.Toggle,{as:s.a.Header,eventKey:"0"},l.a.createElement("div",{className:"project-legend"},l.a.createElement("div",{className:e.used_technologies.includes("React Native")?"react-native legend-circle":e.used_technologies.includes("Python")?"python legend-circle":e.used_technologies.includes("HTML")?"html legend-circle":"react legend-circle"})),l.a.createElement("p",{style:{fontSize:"25px",marginTop:"2vh"}},l.a.createElement("strong",null,e.name)),"Hearo"===e.name?l.a.createElement("img",{src:o.a,alt:"Hearo Logo",className:"project-logo"}):l.a.createElement("div",null),"TaskFull"===e.name?l.a.createElement("img",{src:d.a,alt:"Taskfull Logo",className:"project-logo"}):l.a.createElement("div",null),"LetMeAsk"===e.name?l.a.createElement("img",{src:u.a,alt:"LetMeAsk Logo",className:"project-logo"}):l.a.createElement("div",null),"hymn"===e.name?l.a.createElement("p",{style:{fontFamily:"Montserrat",marginTop:"1vh",paddingTop:".4rem",fontSize:"25px",marginLeft:"77%"}},"hymn"):l.a.createElement("div",null)),l.a.createElement(c.a.Collapse,{eventKey:"0"},l.a.createElement(s.a.Body,null,l.a.createElement("div",{className:"line"},l.a.createElement("p",null,"Github Link: "),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.github_link},e.github_link)),l.a.createElement("div",{className:"line"},l.a.createElement("p",null,"Tech Stack: "),l.a.createElement("p",null,e.used_technologies)),l.a.createElement("div",{className:"line"},l.a.createElement("p",null,"Description: "),l.a.createElement("p",null,e.description)),l.a.createElement("div",{className:"line"},l.a.createElement("p",null,"Team Members: "),l.a.createElement("p",null,e.contributors)),e["other links"]?l.a.createElement("div",{className:"line"},l.a.createElement("p",null,"Other Links:"),l.a.createElement("a",{href:e["other links"],target:"_blank",rel:"noopener noreferrer"},e["other links"]," ")):l.a.createElement("div",null)))))})))))}},82:function(e){e.exports=JSON.parse('{"projects":[{"name":"LetMeAsk","github_link":"https://github.com/cs394-s20/LetMeAsk","used_technologies":"React Native","description":"Project created for the class CS 394. The point of this project was to create an application where students could ask questions directly to the author\'s of textbooks.","contributors":"Brian Sui, Zhuping Yu, Patrice Powers, Jordan Zax, Andrew Courtner, Zev Stravitz"},{"name":"TaskFull","github_link":"https://github.com/cs394-s20/TaskFull","used_technologies":"React","description":"Project created for the class CS 394. This web app was created to help people in need with tasks that were too cumbersome to overcome, by having other people help the user.","icon":"../assets/TaskfullLogo.jpg","contributors":"Brian Sui, Zhuping Yu, Patrice Powers, Jordan Zax, Andrew Courtner, Zev Stravitz"},{"name":"AllRecipes-NLP","github_link":"https://github.com/wdnnll21/allrecipes-nlp","used_technologies":"Python","description":"A Natural Language Processing project for the class CS 337. The point of this application was to adapt recipes by handling prompts from user inputs.","contributors":"Adnan Can Turkay"},{"name":"Retrieving Awards","github_link":"https://github.com/canturkay/NLP-Projects/tree/master/Project1","used_technologies":"Python","description":"A Natural Language Processing project for the class CS 337. This project skimmed through tweets to find award names and winners for the Academy Awards by being trained with previous years\' tweets.","contributors":"Adnan Can Turkay"},{"name":"MeetMeNative","github_link":"https://github.com/397-F19/MeetMeNative/commits/master","used_technologies":"React Native","description":"An application created for the class CS 397. Designed to help busy people meet with their friends at their own accords.","contributors":"Bradley Ramos, Danyil Pysmak, Terry Tan"},{"name":"Localert","github_link":"https: //github.com/ahkaneti/ITChackathon","used_technologies":"React","description":"Designed for the ITC Hackathon 2019, this was an app where people could alert other pedestrians for any kind of disturbance.","contributors":"Elroi Luria, Igor Sved, Julia Hania, Rotem Sapir"},{"name":"Tagalong","github_link":"https://github.com/ahkaneti/AppDev","presentation_link":"https://docs.google.com/presentation/d/1D-HSyiHXLehmH0bztF0n6qnSt9edA44f1-h6EQNfWGU/edit?usp=sharing","used_technologies":"React Native","description":"An application created to help people in groups safely travel to different locations.","contributors":"Kieran Bondy, Adnan Can Turkay, Bradley Ramos, Ka Wong"},{"name":"NUPay","github_link":"https://github.com/ahkaneti/nupay","used_technologies":"HTML5, CSS3, JavaScript","description":"A web page created for the class CS 330. The point of the app was to create a prototype of Venmo where you could just send money to other people by touching phones.","contributors":"Deokcelmo Filho, Danyil Pysmak, Ishaan Madan"},{"name":"hymn","github_link":"https://github.com/ahkaneti/hymn","used_technologies":"HTML5, CSS3, JavaScript","description":"A startup that was built to give music suggestions and music ratings, with the intent of becoming an internet music database.","contributors":"Cem Unuvar, Adnan Can Turkay, Alp Kismir","other links":["http://hymnco.com","http://hymnco.com/newLook"]},{"name":"Hearo","github_link":"https://github.com/ralfisalhon/Hearo-noSensitive","used_technologies":"React Native, Voximplant API, Google Speech-to-Text API, Twilio API","description":"An application that let you transcribe voice calls made inside of this application.","icon":"../assets/HearoLogo.png","contributors":"Rifat Ralfi Salhon, Eytan Nahmiyas","other links":"https://youtu.be/QadrLYQTbFI"}]}')},83:function(e,a,t){e.exports=t.p+"static/media/TaskfullLogo.fee08885.jpg"},84:function(e,a,t){e.exports=t.p+"static/media/LetMeAskLogo.9235ea76.png"},87:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(44),l=t(1),r=t.n(l),c=(t(153),t(93)),s=t(92),i=t(46),o=t(22),m=window.innerWidth<=1200||window.innerHeight<600;function d(){var e=Object(l.useState)("/"),a=Object(n.a)(e,2),t=a[0],d=a[1];return r.a.createElement("div",{className:m?"sidebar-mobile":"sidebar"},r.a.createElement(c.a,{className:"flex-column"},r.a.createElement(o.b,{to:"/",className:"/"===t?"navitem navitem-selected":"navitem",style:{textDecoration:"null",marginTop:"10vh"},onClick:function(){return d("/")}},"Home"),r.a.createElement(o.b,{to:"/aboutme",className:"/aboutme"===t?"navitem navitem-selected":"navitem",onClick:function(){return d("/aboutme")}},"About Me"),r.a.createElement(o.b,{to:"/resume",className:"/resume"===t?"navitem navitem-selected":"navitem",onClick:function(){return d("/resume")}},"R\xe9sum\xe9"),r.a.createElement(o.b,{to:"/educationexperience",onClick:function(){d("/educationexperience"),console.log(t)},className:"/educationexperience"===t?"navitem navitem-selected":"navitem"},"Education & Experience"),r.a.createElement(o.b,{to:"/projects",className:"/projects"===t?"navitem navitem-selected":"navitem",onClick:function(){return d("/projects")}},"Projects")),r.a.createElement("div",{className:m?"logo-holder mobile":"logo-holder"},r.a.createElement("div",{className:"logo-background"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ahkaneti"},r.a.createElement(s.a,{size:35,color:"white"}))),r.a.createElement("div",{className:"logo-background",style:{marginLeft:"5.5%"}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/aaronkaneti"},r.a.createElement(i.c,{size:30,color:"white",style:{paddingTop:"4",paddingLeft:"2"}}))),r.a.createElement("div",{className:"logo-background",style:{marginLeft:"5.5%"}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/harunkaneti/"},r.a.createElement(i.a,{size:30,color:"white",style:{paddingTop:"4",paddingLeft:"2"}}))),r.a.createElement("div",{className:"logo-background",style:{marginLeft:"5.5%"}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/ahkaneti"},r.a.createElement(i.b,{size:30,color:"white",style:{paddingTop:"4",paddingLeft:"2"}})))))}},97:function(e,a,t){e.exports=t(98)},98:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(31),c=t.n(r),s=(t(103),t(70)),i=t(22);c.a.render(l.a.createElement(i.a,null,l.a.createElement(s.a,null)),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.2b220aaf.chunk.js.map