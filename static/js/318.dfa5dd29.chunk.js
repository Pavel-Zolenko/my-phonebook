"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[318],{6318:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r,o=n(1614),a=n(4708),i=n(4554),s=n(3044),d=n(890),c=n(2838),u=n(4294),l=n(403),m=n(9434),p=n(9273),h=n(184),x=function(){var e=(0,m.I0)();return(0,h.jsxs)(o.Z,{component:"main",maxWidth:"xs",children:[(0,h.jsx)(a.ZP,{}),(0,h.jsxs)(i.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,h.jsx)(s.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,h.jsx)(l.Z,{})}),(0,h.jsx)(d.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,h.jsxs)(i.Z,{component:"form",onSubmit:function(t){t.preventDefault();var n=t.currentTarget;e((0,p.Ib)({email:n.elements.email.value,password:n.elements.password.value})),n.reset()},noValidate:!0,sx:{mt:1},children:[(0,h.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,h.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,h.jsx)(u.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"})]})]})]})},f=n(168),v=(0,n(225).Z)(i.Z)(r||(r=(0,f.Z)(["\n  height: 100dvh;\n"])));function b(){return(0,h.jsx)(v,{children:(0,h.jsx)(x,{})})}},403:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(184),i=(0,o.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=i},1614:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(4942),o=n(3366),a=n(7462),i=n(2791),s=n(3733),d=n(1122),c=n(1217),u=n(4419),l=n(7078),m=(0,n(4046).ZP)(),p=n(5080),h=n(184),x=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,p.Z)(),v=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,d.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:f})},g=function(e,t){var n=e.classes,r=e.fixed,o=e.disableGutters,a=e.maxWidth,i={root:["root",a&&"maxWidth".concat((0,d.Z)(String(a))),r&&"fixed",o&&"disableGutters"]};return(0,u.Z)(i,(function(e){return(0,c.Z)(t,e)}),n)};var Z=n(4036),S=n(6934),k=n(1402),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?v:t,d=e.useThemeProps,c=void 0===d?b:d,u=e.componentName,l=void 0===u?"MuiContainer":u,m=n((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,o=t.breakpoints.values[r];return 0!==o&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),p=i.forwardRef((function(e,t){var n=c(e),r=n.className,i=n.component,d=void 0===i?"div":i,u=n.disableGutters,p=void 0!==u&&u,f=n.fixed,v=void 0!==f&&f,b=n.maxWidth,Z=void 0===b?"lg":b,S=(0,o.Z)(n,x),k=(0,a.Z)({},n,{component:d,disableGutters:p,fixed:v,maxWidth:Z}),W=g(k,l);return(0,h.jsx)(m,(0,a.Z)({as:d,ownerState:k,className:(0,s.Z)(W.root,r),ref:t},S))}));return p}({createStyledComponent:(0,S.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),w=W},4708:function(e,t,n){var r=n(9439),o=n(7462),a=n(2791),i=n(1402),s=n(6199),d=n(184),c=function(e,t){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode})},u=function(e){return(0,o.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};t.ZP=function(e){var t=(0,i.Z)({props:e,name:"MuiCssBaseline"}),n=t.children,l=t.enableColorScheme,m=void 0!==l&&l;return(0,d.jsxs)(a.Fragment,{children:[(0,d.jsx)(s.Z,{styles:function(e){return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};n&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(t){var n,o=(0,r.Z)(t,2),i=o[0],s=o[1];a[e.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:null==(n=s.palette)?void 0:n.mode}}));var i=(0,o.Z)({html:c(e,n),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},u(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},a),s=null==(t=e.components)||null==(t=t.MuiCssBaseline)?void 0:t.styleOverrides;return s&&(i=[i,s]),i}(e,m)}}),n]})}}}]);
//# sourceMappingURL=318.dfa5dd29.chunk.js.map