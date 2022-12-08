"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(g,s(s({ref:t},u),{},{components:r})):o.createElement(g,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},s="SCS Documentation Collection",a={unversionedId:"intro",id:"intro",title:"SCS Documentation Collection",description:"Creative Commons Attribution-ShareAlike 4.0 International",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/sync-test/docs/intro",draft:!1,editUrl:"https://github.com/SovereignCloudStack/Docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar"},c={},l=[{value:"About",id:"about",level:2},{value:"Structure",id:"structure",level:2},{value:"Conceptual Structure",id:"conceptual-structure",level:3},{value:"Directory Structure",id:"directory-structure",level:3},{value:"SCS project repo strucutre",id:"scs-project-repo-strucutre",level:4},{value:"Git subtree",id:"git-subtree",level:3}],u={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scs-documentation-collection"},"SCS Documentation Collection"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/4.0/"},(0,n.kt)("img",{parentName:"a",src:"https://licensebuttons.net/l/by-sa/4.0/88x31.png",alt:"Creative Commons Attribution-ShareAlike 4.0 International"}))),(0,n.kt)("h2",{id:"about"},"About"),(0,n.kt)("p",null,"SCS is made up of different and optional modules, services and repositories. These building blocks are not developed by the SCS Project Team. It is a carefully curated and supported collection of repositories, forming all together the Sovereign Cloud Stack. Therefore individual documentations reside in their owner organisations."),(0,n.kt)("p",null,"The aim of this documentation is to give operators, cloud service provides and others an easy overview and entry into a common collection of documentation, without the need of searching individual projects doc pages."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Repositories",src:r(534).Z,width:"708",height:"349"})),(0,n.kt)("h2",{id:"structure"},"Structure"),(0,n.kt)("h3",{id:"conceptual-structure"},"Conceptual Structure"),(0,n.kt)("p",null,"We follow the ",(0,n.kt)("a",{parentName:"p",href:"https://diataxis.fr/"},"Diataxis Framework")," to structure our documentation, in order respond best to our users needs."),(0,n.kt)("h3",{id:"directory-structure"},"Directory Structure"),(0,n.kt)("p",null,"In order to get all the different docs into one place and to render a comprehensive static page for best Developer Epxerience, the subprojects need to be consumed by this main docs repository. This is will be managed by git's subtree feature and not as submodule."),(0,n.kt)("p",null,"As the final output in this repository will be a statically generated website, the subtree docs repositories should only contain markdown and static files. If a sub repository should reside within a repository which code it is documenting, it should also be imported as subtree or submodule. This is a bit more management overhead, but also enbables the freedom of choice for rendering the content in another output repository as a static page with any docs renderer. But furthermore this enables this SCS Docs repository to inherit all the different docs rendered into one page for the best user experience."),(0,n.kt)("h4",{id:"scs-project-repo-strucutre"},"SCS project repo strucutre"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"project\n\u251c\u2500\u2500 static  // static content\n\u251c\u2500\u2500 blog    // optional blog\n\u251c\u2500\u2500 src     // source files\n\u251c\u2500\u2500 docs    // the folder where all individual docs reside as subtree modules\n\u2502   \u2514\u2500\u2500 @osism/openstack-image-manager-docs\n\u2502       \u251c\u2500\u2500 overiew.md\n\u2502       \u251c\u2500\u2500 usage.md\n\u2502       \u251c\u2500\u2500 requirements.md\n\u2502       \u251c\u2500\u2500 images\n\u2502       \u2502   \u251c\u2500\u2500 logo.png\n\u2502       \u2502   \u2514\u2500\u2500 image.svg\n\u2502       \u2514\u2500\u2500 support\n\u2502           \u251c\u2500\u2500 index.js\n\u2502           \u2514\u2500\u2500 styles.module.css\n\u2502   \u2514\u2500\u2500 @scs/Docs\n\u2502       \u251c\u2500\u2500 overview.md\n\u2502       \u251c\u2500\u2500 standards.md\n\u2502       \u251c\u2500\u2500 requirements.md\n\u2502       \u251c\u2500\u2500 images\n\u2502       \u2502   \u251c\u2500\u2500 logo.png\n\u2502       \u2502   \u2514\u2500\u2500 image.svg\n\u2502       \u2514\u2500\u2500 Design Docs\n\u2502           \u251c\u2500\u2500 lorem.md\n\u2502           \u2514\u2500\u2500 ipsum.md\n.   \u2514\u2500\u2500 @abc/xyz\n.       .\n.          .\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"@osism/openstack-image-manager\n\u251c\u2500\u2500 code  // static content\n\u251c\u2500\u2500 blog    // optional blog\n\u251c\u2500\u2500 src     // source files\n\u251c\u2500\u2500 docs    // the folder where all individual docs reside as subtree modules\n\u2502   \u2514\u2500\u2500 @osism/openstack-image-manager-docs\n\u2502       \u251c\u2500\u2500 overiew.md\n\u2502       \u251c\u2500\u2500 usage.md\n\u2502       \u251c\u2500\u2500 requirements.md\n\u2502       \u251c\u2500\u2500 images\n\u2502       \u2502   \u251c\u2500\u2500 logo.png\n\u2502       \u2502   \u2514\u2500\u2500 image.svg\n\u2502       \u2514\u2500\u2500 support\n\u2502           \u251c\u2500\u2500 index.js\n\u2502           \u2514\u2500\u2500 styles.module.css\n")),(0,n.kt)("h3",{id:"git-subtree"},"Git subtree"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://blog.developer.atlassian.com/the-power-of-git-subtree/?_ga=2-71978451-1385799339-1568044055-1068396449-1567112770"},"The Power of Git Subtree by Nicola Paolucci")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/SKempin/b7857a6ff6bddb05717cc17a44091202"},"Git Subtree Basics Gist")),(0,n.kt)("p",null,"In order to add a docs repository we use the following git commmand:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git subtree add --prefix /docs/{repo name} {remote repo URL} {remote branch} --squash\n")),(0,n.kt)("p",null,"For updating the repo we use the following git commmand:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git subtree pull --prefix /docs/{repo name} {remote repo URL} {remote branch} --squash\n")))}d.isMDXComponent=!0},534:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/overview-0e90a2ae7831d404bd2cecbbf0fe57ee.svg"}}]);