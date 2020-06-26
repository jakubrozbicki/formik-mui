(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return m})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(9),o=(r(0),r(155)),a={id:"migrating",title:"Migrating"},c={id:"guide/migrating",isDocsHomePage:!1,title:"Migrating",description:"Migrating from formik-material-ui 1.0.0",source:"@site/docs/guide/migrating.md",permalink:"/formik-material-ui/docs/guide/migrating",editUrl:"https://github.com/stackworx/formik-material-ui/edit/master/docs/guide/migrating.md",sidebar:"someSidebar",previous:{title:"Creating Custom Components",permalink:"/formik-material-ui/docs/guide/custom-component"},next:{title:"FAQ",permalink:"/formik-material-ui/docs/guide/faq"}},m=[{value:"Migrating from formik-material-ui 1.0.0",id:"migrating-from-formik-material-ui-100",children:[{value:"Standard Components",id:"standard-components",children:[]},{value:"Changes",id:"changes",children:[]}]}],l={rightToc:m};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"migrating-from-formik-material-ui-100"},"Migrating from formik-material-ui 1.0.0"),Object(o.b)("h3",{id:"standard-components"},"Standard Components"),Object(o.b)("h3",{id:"changes"},"Changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"type=checkbox")," recommended for Switches and Checkboxes - See ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://jaredpalmer.com/formik/docs/migrating-v2#checkboxes-and-select-multiple"}),"here"))),Object(o.b)("h4",{id:"before"},"Before"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Field } from 'formik';\nimport { Checkbox, Switch } from 'formik-material-ui';\n\n<Field name=\"checkbox\" component={Checkbox} />;\n<Field name=\"switch\" component={Switch} />;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Rename fieldToTextField to useFieldToTextField")),Object(o.b)("h4",{id:"after"},"After"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import { Field } from \'formik\';\nimport { Checkbox, Switch } from \'formik-material-ui\';\n\nimport {\n  // Field Helpers\n  useField,\n  // Form Helpers\n  useFormik,\n} from \'formik\';\n\n<Field name="checkbox" type="checkbox" component={Checkbox} />;\n<Field name="switch" type="checkbox" component={Switch} />;\n')))}u.isMDXComponent=!0},155:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,s=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return r?i.a.createElement(s,c(c({ref:t},l),{},{components:r})):i.a.createElement(s,c({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);