(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[665],{5665:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(1614),o=n(4708),i=n(4554),a=n(3044),u=n(890),s=n(8994),c=n(4294),d=n(403),l=n(9434),m=n(9273),f=n(184),p=function(){var e=(0,l.I0)();return(0,f.jsxs)(r.Z,{component:"main",maxWidth:"xs",children:[(0,f.jsx)(o.ZP,{}),(0,f.jsxs)(i.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,f.jsx)(a.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,f.jsx)(d.Z,{})}),(0,f.jsx)(u.Z,{component:"h1",variant:"h5",children:"Registers"}),(0,f.jsxs)(i.Z,{component:"form",onSubmit:function(t){t.preventDefault();var n=t.currentTarget;e((0,m.z2)({name:n.elements.name.value,email:n.elements.email.value,password:n.elements.password.value})),n.reset()},sx:{mt:1},children:[(0,f.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Username",name:"name",autoComplete:"name",autoFocus:!0}),(0,f.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,f.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,f.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Register"})]})]})]})};function h(){return(0,f.jsx)("div",{style:{height:"100dvh"},children:(0,f.jsx)(p,{})})}},403:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var o=r(n(5649)),i=n(184),a=(0,o.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=a},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(4421)},1614:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(4942),o=n(3366),i=n(7462),a=n(2791),u=n(3733),s=n(1122),c=n(1217),d=n(4419),l=n(7078),m=(0,n(4046).ZP)(),f=n(5080),p=n(184),h=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,f.Z)(),x=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,s.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:v})},Z=function(e,t){var n=e.classes,r=e.fixed,o=e.disableGutters,i=e.maxWidth,a={root:["root",i&&"maxWidth".concat((0,s.Z)(String(i))),r&&"fixed",o&&"disableGutters"]};return(0,d.Z)(a,(function(e){return(0,c.Z)(t,e)}),n)};var g=n(4036),k=n(6934),S=n(1402),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?x:t,s=e.useThemeProps,c=void 0===s?b:s,d=e.componentName,l=void 0===d?"MuiContainer":d,m=n((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,o=t.breakpoints.values[r];return 0!==o&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),f=a.forwardRef((function(e,t){var n=c(e),r=n.className,a=n.component,s=void 0===a?"div":a,d=n.disableGutters,f=void 0!==d&&d,v=n.fixed,x=void 0!==v&&v,b=n.maxWidth,g=void 0===b?"lg":b,k=(0,o.Z)(n,h),S=(0,i.Z)({},n,{component:s,disableGutters:f,fixed:x,maxWidth:g}),W=Z(S,l);return(0,p.jsx)(m,(0,i.Z)({as:s,ownerState:S,className:(0,u.Z)(W.root,r),ref:t},k))}));return f}({createStyledComponent:(0,k.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,g.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,S.Z)({props:e,name:"MuiContainer"})}}),w=W},4708:function(e,t,n){"use strict";var r=n(9439),o=n(7462),i=n(2791),a=n(1402),u=n(6199),s=n(184),c=function(e,t){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode})},d=function(e){return(0,o.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};t.ZP=function(e){var t=(0,a.Z)({props:e,name:"MuiCssBaseline"}),n=t.children,l=t.enableColorScheme,m=void 0!==l&&l;return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(u.Z,{styles:function(e){return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};n&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(t){var n,o=(0,r.Z)(t,2),a=o[0],u=o[1];i[e.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:null==(n=u.palette)?void 0:n.mode}}));var a=(0,o.Z)({html:c(e,n),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},d(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},i),u=null==(t=e.components)||null==(t=t.MuiCssBaseline)?void 0:t.styleOverrides;return u&&(a=[a,u]),a}(e,m)}}),n]})}},4421:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return c.Z},ownerDocument:function(){return d.Z},ownerWindow:function(){return l.Z},requirePropFactory:function(){return m},setRef:function(){return f},unstable_ClassNameGenerator:function(){return k},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return v},useControlled:function(){return x.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return g.Z}});var r=n(5902),o=n(4036),i=n(8949).Z,a=n(9201),u=n(3199);var s=function(e,t){return function(){return null}},c=n(9103),d=n(8301),l=n(7602);n(7462);var m=function(e,t){return function(){return null}},f=n(2971).Z,p=n(162),h=n(7384);var v=function(e,t,n,r,o){return null},x=n(5158),b=n(9683),Z=n(2071),g=n(3031),k={configure:function(e){r.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=665.949a5967.chunk.js.map