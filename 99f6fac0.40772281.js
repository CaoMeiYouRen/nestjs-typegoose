(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(6),a=(n(0),n(133)),i={id:"discriminators",title:"Mongoose Discriminators"},s={id:"discriminators",title:"Mongoose Discriminators",description:"To add [discriminators](https://mongoosejs.com/docs/discriminators.html) to a model, you may specify a `discriminators` array in the long-form options shown above.",source:"@site/docs/discriminators.md",permalink:"/nestjs-typegoose/docs/discriminators",editUrl:"https://github.com/kpfromer/nestjs-typegoose/edit/master/website/docs/discriminators.md",sidebar:"someSidebar",previous:{title:"FAQ",permalink:"/nestjs-typegoose/docs/faq"},next:{title:"Multiple MongoDB Connections",permalink:"/nestjs-typegoose/docs/multiple-connections"}},c=[],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To add ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/discriminators.html"}),"discriminators")," to a model, you may specify a ",Object(a.b)("inlineCode",{parentName:"p"},"discriminators")," array in the long-form options shown above."),Object(a.b)("p",null,"You may either add just the class, or if you need to override the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/discriminators.html#discriminator-keys"}),"discriminator key")," value, an object with ",Object(a.b)("inlineCode",{parentName:"p"},"typegooseClass")," and ",Object(a.b)("inlineCode",{parentName:"p"},"discriminatorId")," property. "),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"class Tabby extends Cat {\n  @prop()\n  spotted: boolean \n}\n\nclass BlackCat extends Cat {\n  @prop()\n  unlucky: boolean\n}\n\n@Module({\n  imports: [\n    TypegooseModule.forFeature([\n      {\n        typegooseClass: Cat,\n        discriminators: [\n          Tabby,\n          {\n            typegooseClass: BlackCat,\n            discriminatorId: 'Black'\n          }\n        ]\n      }\n    ])\n  ]\n})\nexport class CatsModule {}\n")))}l.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return n?o.a.createElement(b,s({ref:t},p,{components:n})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);