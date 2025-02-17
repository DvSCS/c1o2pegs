"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4148],{58845:function(e,n,t){t.d(n,{K:function(){return u},_:function(){return d}});var r=t(27573),s=t(57908),l=t(32288),a=t.n(l),o=t(51585),c=t.n(o),i=t(7653);let d=e=>{let{label:n,id:t,className:l}=e;return n?(0,r.jsx)("label",{htmlFor:t,className:(0,s.Z)("text-text-200 mb-1 block text-sm font-medium",l),children:n}):null},u=e=>{let{label:n,id:t}=e;return(0,i.useMemo)(()=>t||(n&&"string"==typeof n?c()("".concat(a()(n),"_")):c()()),[n,t])}},83925:function(e,n,t){t.d(n,{P:function(){return c}});var r=t(27573),s=t(58845),l=t(65517),a=t(7653);let o=(0,l.j)("block\n  text-text-200\n  py-0\n  transition-colors\n  focus:border-accent-secondary-100\n  focus:ring-0\n  focus:outline-none",{variants:{size:{sm:"h-8 pl-3 pr-8 text-sm tracking-tight rounded-md",normal:"h-9 pl-3 pr-6.5 rounded-lg",lg:"h-11 pl-4 pr-6.5 rounded-[0.6rem]"},variant:{outline:"bg-bg-000 border border-border-200 hover:border-border-100 shadow bg-bg-000",ghost:"bg-transparent border-none shadow-none cursor-pointer",danger:"bg-danger-900 text-danger-100 shadow border-danger-200 hover:border-danger-200 focus:border-danger-200"}},defaultVariants:{size:"normal",variant:"outline"}}),c=(0,a.forwardRef)((e,n)=>{let{size:t,variant:l,className:a,label:c,id:i,...d}=e,u=(0,s.K)({id:i,label:c});return(0,r.jsxs)(r.Fragment,{children:[c&&(0,r.jsx)(s._,{label:c,id:u}),(0,r.jsx)("select",{id:u,ref:n,className:o({size:t,className:a,variant:l}),...d})]})});c.displayName="Select"},63074:function(e,n,t){t.d(n,{o:function(){return u}});var r=t(27573);function s(e){return n=>{e.forEach(e=>{"function"==typeof e?e(n):null!==e&&(e.current=n)})}}var l=t(65517),a=t(57908),o=t(7653),c=t(72459),i=t(58845);let d=(0,l.j)("bg-bg-000\n  border\n  border-border-200\n  hover:border-border-100\n  transition-colors\n  placeholder:text-text-500\n  focus:border-accent-secondary-100\n  focus-within:!border-accent-secondary-100\n  focus:ring-0\n  focus:outline-none\n  disabled:cursor-not-allowed\n  disabled:opacity-50",{variants:{size:{default:"h-9 px-3 py-2 rounded-lg",sm:"h-8 rounded-md px-3 text-xs",lg:"h-11 px-3 rounded-[0.6rem]"},error:{true:"!border-danger-200/50 hover:!border-danger-200/90 focus:!border-danger-200"}},defaultVariants:{size:"default"}}),u=(0,o.forwardRef)((e,n)=>{let{autoFocus:t,className:l,id:u,label:f,secondaryLabel:h,size:x="default",error:p,type:m,value:g,currencySymbol:b="$",labelClassName:v,onChange:w,onValueChange:j,automaticallyFocusAndSelect:y,prepend:_,append:z,...k}=e,C=(0,a.Z)(d({size:x,error:p,className:l}),l),N=(0,i.K)({id:u,label:f}),F=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(y){var e,n;null===(e=F.current)||void 0===e||e.focus(),null===(n=F.current)||void 0===n||n.select()}},[]);let{defaultValue:M,step:V,...Z}=k,E="currency"!==m&&!(_||z);return(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(i._,{label:f,id:N,className:v}),(_||z)&&(0,r.jsxs)("div",{className:(0,a.Z)(C,"inline-flex cursor-text items-stretch gap-2"),onClick:()=>{var e;return null===(e=F.current)||void 0===e?void 0:e.focus()},children:[_&&(0,r.jsx)("div",{className:"flex items-center",children:_}),(0,r.jsx)("input",{id:N,autoFocus:t,type:m,className:"w-full placeholder:text-text-500 m-0 bg-transparent p-0 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",ref:s([n,F]),value:g,onChange:e=>{null==w||w(e),null==j||j(e.target.value)},...k}),z&&(0,r.jsx)("div",{className:(0,a.Z)("flex items-center","default"===x&&"-mr-2","sm"===x&&"-mr-2","lg"===x&&"-mr-1.5"),children:z})]}),"currency"===m&&(0,r.jsx)(c.Z,{id:N,ref:n,autoFocus:t,prefix:b,placeholder:b,className:C,value:g,onValueChange:e=>null==j?void 0:j(e),allowDecimals:!1,...Z}),E&&(0,r.jsx)("input",{id:N,autoFocus:t,type:m,className:C,ref:s([n,F]),value:g,onChange:e=>{null==w||w(e),null==j||j(e.target.value)},...k}),h&&(0,r.jsx)("div",{className:"text-text-400 mt-1 text-sm",children:h})]})});u.displayName="TextInput"},85409:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(27573),s=t(57908);function l(e){let{className:n,variant:t,...l}=e;return(0,r.jsxs)("div",{className:(0,s.Z)("relative",n),children:[(0,r.jsx)("input",{type:"checkbox",className:"peer sr-only",...l}),(0,r.jsx)("div",{className:(0,s.Z)("border-border-300 peer-focus:ring-offset-bg-300 peer h-5 w-[36px] rounded-full after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-offset-2 peer-disabled:opacity-50 rtl:peer-checked:after:-translate-x-full",a[t||"default"])})]})}let a={default:"\n    bg-bg-500\n    after:border-border-300\n    after:bg-white\n    peer-focus:ring-accent-secondary-100\n    peer-checked:bg-accent-secondary-000\n    peer-checked:after:border-white\n    ",secondary:"\n    bg-bg-000\n    border\n    after:border-bg-000\n    after:bg-text-500\n    peer-focus:ring-accent-secondary-100\n    peer-checked:bg-accent-secondary-900\n    peer-checked:after:border-accent-secondary-900\n    peer-checked:after:bg-accent-secondary-100\n    ",accent:"\n    bg-bg-500\n    after:border-border-300\n    after:bg-white\n    peer-focus:ring-accent-main-100\n    peer-checked:bg-accent-main-000\n    peer-checked:after:border-white\n    "}},11096:function(e,n,t){t.d(n,{z:function(){return d}});var r=t(27573),s=t(41464),l=t(65517),a=t(57908),o=t(87659),c=t(7653);let i=(0,l.j)("inline-flex\n  items-center\n  justify-center\n  relative\n  shrink-0\n  ring-offset-2\n  ring-offset-bg-300\n  ring-accent-main-100\n  focus-visible:outline-none\n  focus-visible:ring-1\n  disabled:pointer-events-none\n  disabled:opacity-50\n  disabled:shadow-none\n  disabled:drop-shadow-none",{variants:{variant:{primary:"\n          bg-accent-main-100\n          bg-gradient-to-r\n          from-accent-main-100\n          via-accent-main-200/50\n          to-accent-main-200\n          bg-[length:200%_100%]\n          hover:bg-right\n          active:bg-accent-main-000\n          border-0.5\n          border-border-300\n          text-oncolor-100\n          font-medium\n          font-styrene\n          drop-shadow-sm\n          transition-all\n          shadow-[inset_0_0.5px_0px_rgba(255,255,0,0.15)]\n          [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)]\n          active:shadow-[inset_0_1px_6px_rgba(0,0,0,0.2)]\n          hover:from-accent-main-200\n          hover:to-accent-main-200",flat:"bg-accent-main-100\n          text-oncolor-100\n          font-medium\n          font-styrene\n          transition-colors\n          hover:bg-accent-main-200",secondary:"\n          bg-[radial-gradient(ellipse,_var(--tw-gradient-stops))]\n          from-bg-500/10\n          from-50%\n          to-bg-500/30\n          border-0.5\n          border-border-400\n          font-medium\n          font-styrene\n          text-text-100/90\n          transition-colors\n          active:bg-bg-500/50\n          hover:text-text-000\n          hover:bg-bg-500/60",outline:"border-1.5\n          font-medium\n          font-styrene\n          bg-transparent\n          text-text-200\n          transition-colors\n          hover:text-text-100\n          hover:bg-bg-400\n          hover:border-bg-400",ghost:"text-text-200\n          border-transparent\n          transition-colors\n          font-styrene\n          active:bg-bg-400\n          hover:bg-bg-500/40\n          hover:text-text-100",underline:"opacity-80\n          transition-all\n          active:scale-[0.985]\n          hover:opacity-100\n          hover:underline\n          underline-offset-3",danger:"bg-danger-100\n          text-oncolor-100\n          font-medium\n          font-styrene\n          transition-colors\n          hover:bg-danger-200",unstyled:""},size:{default:"h-9 px-4 py-2 rounded-lg min-w-[5rem] active:scale-[0.985] whitespace-nowrap",sm:"h-8 rounded-md px-3 text-xs min-w-[4rem] active:scale-[0.985] whitespace-nowrap",lg:"h-11 rounded-[0.6rem] px-5 min-w-[6rem] active:scale-[0.985] whitespace-nowrap",icon:"h-9 w-9 rounded-md active:scale-95 shrink-0",icon_xs:"h-6 w-6 rounded-md active:scale-95",icon_sm:"h-8 w-8 rounded-md active:scale-95",icon_lg:"h-11 w-11 rounded-[0.6rem] active:scale-95",inline:"px-0.5 rounded-[0.25rem]",unset:""},option:{rounded:"!rounded-full",prepend:"",append:""},state:{active:""}},compoundVariants:[{size:"default",option:"prepend",class:"pl-2 pr-3 gap-1"},{size:"lg",option:"prepend",class:"pl-2.5 pr-3.5 gap-1"},{size:"sm",option:"prepend",class:" pl-2 pr-2.5 gap-1"},{size:"default",option:"append",class:"pl-3 pr-2 gap-1"},{size:"lg",option:"append",class:"pl-3.5 pr-2.5 gap-1"},{size:"sm",option:"append",class:"pl-2.5 pr-2 gap-1"},{variant:"ghost",state:"active",class:"!bg-bg-400"}],defaultVariants:{variant:"primary",size:"default"}}),d=(0,c.forwardRef)((e,n)=>{let{className:t,variant:l,size:c,option:d,loading:u,href:f,target:h,prepend:x,append:p,state:m,disabled:g,children:b,type:v="button",...w}=e;x&&(d="prepend"),p&&(d="append");let j=(0,a.Z)(i({variant:l,size:c,option:d,state:m,className:t}),u&&"text-transparent ![text-shadow:_none]"),y=(0,r.jsxs)(r.Fragment,{children:[u&&(0,r.jsx)("div",{className:(0,a.Z)("absolute inset-0 flex items-center justify-center",l&&"primary"!==l&&"flat"!==l&&"danger"!==l?"text-text-200":"text-oncolor-100"),children:(0,r.jsx)(s.g,{size:"sm",inheritColor:!0})}),x,b,p]});return f?(0,r.jsx)(o.default,{href:f,target:h||"_self",className:j,"aria-label":w["aria-label"],children:y}):(0,r.jsx)("button",{className:j,ref:n,disabled:g||u,type:v,...w,children:y})});d.displayName="Button"},61814:function(e,n,t){t.d(n,{A2:function(){return C},AZ:function(){return z},HF:function(){return y},Lt:function(){return m},Vy:function(){return w},WR:function(){return k},YG:function(){return g},hP:function(){return _},nI:function(){return j},u2:function(){return N}});var r=t(85565),s=t(27573),l=t(82880),a=t(19570);function o(){let e=(0,r._)(["\n  outline-none\n  py-2\n  px-1.5\n  -mx-1\n  -mt-1\n  mb-1\n  border-b-0.5\n  border-border-300\n"]);return o=function(){return e},e}function c(){let e=(0,r._)(["\n  z-dropdown\n  bg-bg-200\n  border-0.5\n  border-border-300\n  backdrop-blur-xl\n  rounded-lg\n  min-w-[8rem]\n  overflow-hidden\n  p-1\n  text-text-200\n  shadow-element\n"]);return c=function(){return e},e}function i(){let e=(0,r._)(["\n  rounded\n  py-1\n  px-2\n  max-w-full\n  whitespace-nowrap\n  text-ellipsis\n  overflow-hidden\n  outline-none\n  ring-offset-2\n  ring-offset-bg-300\n  ring-accent-main-100\n  focus-visible:outline-none\n  focus-visible:ring-1\n  focus:backdrop-blur-xl\n  hover:backdrop-blur-xl\n  hover:bg-bg-400/50\n"]);return i=function(){return e},e}function d(){let e=(0,r._)(["text-text-500 pt-1 px-2"]);return d=function(){return e},e}function u(){let e=(0,r._)(["\n  py-1\n  px-2\n  rounded-md\n  cursor-pointer\n  whitespace-nowrap\n  overflow-hidden\n  text-ellipsis\n  grid\n  grid-cols-[minmax(0,_1fr)_auto]\n  gap-2\n  items-center\n  outline-none\n  select-none\n  [&[data-highlighted]]:bg-bg-300\n  [&[data-highlighted]]:text-text-000\n  ","\n"]);return u=function(){return e},e}function f(){let e=(0,r._)(["\n  py-1\n  px-2\n  rounded-md\n  whitespace-nowrap\n  overflow-hidden\n  text-ellipsis\n  flex\n  justify-between\n  gap-2\n  items-center\n"]);return f=function(){return e},e}function h(){let e=(0,r._)(["\n  py-1\n  px-2\n  rounded\n  cursor-pointer\n  whitespace-nowrap\n  overflow-hidden\n  text-ellipsis\n  grid\n  grid-cols-[minmax(0,_1fr)_auto]\n  gap-2\n  items-center\n  outline-none\n  select-none\n  [&[data-highlighted]]:bg-bg-300\n  [&[data-highlighted]]:text-text-000\n"]);return h=function(){return e},e}function x(){let e=(0,r._)(["\n  z-dropdown\n  bg-bg-200\n  border-0.5\n  border-border-300\n  backdrop-blur-xl\n  rounded-lg\n  min-w-[8rem]\n  overflow-hidden\n  p-1\n  text-text-200\n  shadow-element\n"]);return x=function(){return e},e}function p(){let e=(0,r._)(["\n  h-[0.5px]\n  bg-border-300\n  m-1\n"]);return p=function(){return e},e}function m(e){var n;let{trigger:t,children:r,unstyledTrigger:l=!1,matchTriggerWidth:o=!1,open:c,onOpenChange:i,...d}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a.fC,{open:c,onOpenChange:i,children:[l?(0,s.jsx)(a.xz,{asChild:!0,children:t}):(0,s.jsx)(v,{asChild:!0,children:t}),(0,s.jsx)(a.Uv,{children:(0,s.jsx)(b,{style:o?{width:"var(--radix-dropdown-menu-trigger-width)"}:void 0,sideOffset:null!==(n=d.sideOffset)&&void 0!==n?n:4,...d,children:r})})]})})}t(7653);let g=(0,l.q)(a.Ju)(o()),b=(0,l.q)(a.VY)(c()),v=(0,l.q)(a.xz)(i());a.Qk;let w=a.Tr,j=a.Uv,y=(0,l.q)(a.Ju)(d()),_=(0,l.q)(a.ck)(u(),e=>{let{disabled:n}=e;return n&&"\n    opacity-50\n    pointer-events-none\n  "}),z=l.q.div(f()),k=(0,l.q)(a.fF)(h()),C=(0,l.q)(a.tu)(x()),N=(0,l.q)(a.VD)(p())},92131:function(e,n,t){t.d(n,{g:function(){return o}});var r=t(27573),s=t(2965),l=t(35747),a=t(57908);let o=(0,t(7653).forwardRef)((e,n)=>{let{checkState:t,onClick:o,label:c,...i}=e,d="partial"===t?s.W:l.J;return(0,r.jsxs)("div",{className:"p-2 -m-2 flex items-center",onClick:e=>{e.stopPropagation(),o({didCheck:"unchecked"===t})},children:[(0,r.jsx)("button",{ref:n,className:(0,a.Z)("rounded p-[0.5px] border-0.5 flex items-center justify-center transition","unchecked"!==t?"bg-accent-secondary-000 border-accent-secondary-200 shadow-sm":"border-border-200 hover:bg-bg-000 hover:shadow-sm"),...i,children:(0,r.jsx)(d,{className:(0,a.Z)("text-always-white transition",{invisible:"unchecked"===t}),weight:"bold",size:14})}),c&&(0,r.jsx)("span",{className:"ml-2 cursor-pointer",children:c})]})});o.displayName="PartialCheckbox"},41464:function(e,n,t){t.d(n,{g:function(){return l}});var r=t(27573),s=t(57908);let l=(0,t(7653).memo)(function(e){let{size:n="md",fullscreen:t=!1,inheritColor:l}=e;return(0,r.jsx)("div",{className:(0,s.Z)(t?"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2":"m-auto"),children:(0,r.jsx)("div",{className:(0,s.Z)("sm"===n&&"h-4 w-4 border-2","md"===n&&"h-20 w-20 border-8",l?"border-current":"border-border-200","text-secondary inline-block animate-spin rounded-full border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"),role:"status",children:(0,r.jsx)("span",{className:"sr-only",children:"Loading..."})})})})},74651:function(e,n,t){t.d(n,{dm:function(){return h},mH:function(){return x},u_:function(){return m}});var r=t(85565),s=t(27573),l=t(82880),a=t(18081),o=t(11737),c=t(57908),i=t(7653),d=t(11096);function u(){let e=(0,r._)(['\n  fixed\n  z-modal\n  inset-0\n  grid\n  items-center\n  justify-items-center\n  bg-black\n  bg-opacity-50\n  backdrop-brightness-75\n  overflow-y-auto\n  md:p-10\n  p-4\n  data-[state="open"]:animate-[fade_250ms_ease-in_forwards]\n  data-[state="closed"]:animate-[fade_125ms_ease-out_reverse_forwards]\n']);return u=function(){return e},e}function f(){let e=(0,r._)(['\n  flex\n  flex-col\n  focus:outline-none\n  relative\n  text-text-100\n  text-left\n  shadow-xl\n  border-0.5\n  border-border-300\n  rounded-2xl\n  md:p-6\n  p-4\n  align-middle\n  data-[state="open"]:animate-[zoom_250ms_ease-in_forwards]\n  data-[state="closed"]:animate-[zoom_125ms_ease-out_reverse_forwards]\n']);return f=function(){return e},e}function h(e){let{children:n,layout:t="right",className:r}=e;return(0,s.jsx)("div",{className:(0,c.Z)("mt-4 flex flex-col gap-2","left"===t&&"sm:flex-row","center"===t&&"justify-center sm:flex-row","right"===t&&"sm:flex-row-reverse","between"===t&&"justify-between sm:flex-row",r),children:n})}function x(e){let{...n}=e;return(0,s.jsx)(d.z,{...n})}function p(e){let{onClose:n}=e;return(0,s.jsx)("button",{className:"text-text-500 hover:text-text-400 hover:bg-bg-300 -ml-2 rounded-full px-2 py-2 transition-colors",onClick:()=>n(),children:(0,s.jsx)(a.X,{color:"currentColor",size:20})})}function m(e){let{title:n,subtitle:t,isOpen:r,className:l,children:a,onClose:d,icon:u,modalSize:f="md",backgroundColor:h,autoCloseOnFocusOut:x=!0,fullWidth:m=!0,fullHeight:v,hasCloseButton:w=!1,prependBeforeCloseButton:j,overlayChildren:y,overlayClassName:_}=e,[z,k]=(0,i.useState)(!1);(0,i.useEffect)(()=>{k(!0)},[]);let C=e=>{x||e.preventDefault()},[N,F]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{if(r)F(!0);else{let e=window.setTimeout(()=>{F(!1)},125);return setTimeout(()=>{document.body.style.pointerEvents="auto"},300),()=>{window.clearTimeout(e)}}},[r]),z)?(0,s.jsx)(o.fC,{open:r,onOpenChange:e=>{e||d()},children:N&&(0,s.jsx)(o.h_,{forceMount:!0,children:(0,s.jsxs)(g,{forceMount:!0,className:_,children:[(0,s.jsx)(b,{forceMount:!0,onOpenAutoFocus:e=>e.preventDefault(),onInteractOutside:C,onEscapeKeyDown:C,className:(0,c.Z)("min-w-0",l,m&&"w-full",v&&"h-full","sm"===f&&"max-w-sm","md"===f&&"max-w-md","lg"===f&&"max-w-lg","xl"===f&&"max-w-3xl","3xl"===f&&"max-w-6xl",null!=h?h:"bg-bg-200"),children:(0,s.jsxs)("div",{className:(0,c.Z)("flex flex-col min-h-full",v&&"w-full h-full"),children:[(0,s.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[n&&(0,s.jsxs)(o.Dx,{className:"font-styrene-display text-text-100 flex w-full min-w-0 items-center text-lg font-medium leading-6 break-words",children:[u&&(0,s.jsx)("span",{className:"mr-2",children:u}),n]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[j,w&&(0,s.jsx)(p,{onClose:d})]})]}),t&&(0,s.jsx)("p",{className:"text-text-400 mb-2 text-sm",children:t}),a]})}),y]})})}):null}let g=(0,l.q)(o.aV)(u()),b=(0,l.q)(o.VY)(f())},50513:function(e,n,t){t.d(n,{cT:function(){return s},j0:function(){return b},k6:function(){return d}});var r,s,l=t(27573),a=t(99694),o=t(65076),c=t(72500),i=t(57908);(r=s||(s={})).DOCS="docs",r.SHEETS="sheets",r.SLIDES="slides";let d=e=>{let{size:n,className:t,variant:r}=e;return"docs"===r?(0,l.jsx)(u,{size:n,className:t}):(0,l.jsxs)("svg",{width:n,height:n,viewBox:"0 0 87.3 78",xmlns:"http://www.w3.org/2000/svg",className:t,children:[(0,l.jsx)("path",{d:"m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z",fill:"#0066da"}),(0,l.jsx)("path",{d:"m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z",fill:"#00ac47"}),(0,l.jsx)("path",{d:"m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z",fill:"#ea4335"}),(0,l.jsx)("path",{d:"m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z",fill:"#00832d"}),(0,l.jsx)("path",{d:"m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z",fill:"#2684fc"}),(0,l.jsx)("path",{d:"m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z",fill:"#ffba00"})]})},u=e=>{let{size:n}=e;return(0,l.jsxs)("svg",{width:n,height:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 88",children:[(0,l.jsx)("path",{fill:"#3086F6",d:"M58,88H6c-3.3,0-6-2.7-6-6V6c0-3.3,2.7-6,6-6h36l22,22v60C64,85.3,61.3,88,58,88z"}),(0,l.jsx)("path",{fill:"#0C67D6",d:"M42,0l22,22H42V0z"}),(0,l.jsx)("path",{fill:"#FDFFFF",d:"M50,39H14v-5h36V39z M50,46H14v5h36V46z M40,58H14v5h26V58z"})]})},f=e=>{let{color:n="currentColor",size:t,className:r}=e;return(0,l.jsx)("svg",{className:(0,i.Z)("text-text-100",r),width:t,height:t,viewBox:"0 0 98 96",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{fill:n,fillRule:"evenodd",clipRule:"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"})})},h=e=>{let{size:n,className:t}=e;return(0,l.jsxs)("svg",{className:(0,i.Z)("text-text-100",t),width:n,height:n,viewBox:"52 42 88 66",children:[(0,l.jsx)("path",{fill:"#4285f4",d:"M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"}),(0,l.jsx)("path",{fill:"#34a853",d:"M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"}),(0,l.jsx)("path",{fill:"#fbbc04",d:"M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"}),(0,l.jsx)("path",{fill:"#ea4335",d:"M72 74V48l24 18 24-18v26L96 92"}),(0,l.jsx)("path",{fill:"#c5221f",d:"M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"})]})},x=e=>{let{size:n,className:t}=e;return(0,l.jsx)("svg",{className:(0,i.Z)("text-text-100",t),width:n,height:n,viewBox:"0 0 200 200","enable-background":"new 0 0 200 200",children:(0,l.jsx)("g",{children:(0,l.jsxs)("g",{transform:"translate(3.75 3.75)",children:[(0,l.jsx)("path",{fill:"#FFFFFF",d:"M148.882,43.618l-47.368-5.263l-57.895,5.263L38.355,96.25l5.263,52.632l52.632,6.579l52.632-6.579 l5.263-53.947L148.882,43.618z"}),(0,l.jsx)("path",{fill:"#1A73E8",d:"M65.211,125.276c-3.934-2.658-6.658-6.539-8.145-11.671l9.132-3.763c0.829,3.158,2.276,5.605,4.342,7.342 c2.053,1.737,4.553,2.592,7.474,2.592c2.987,0,5.553-0.908,7.697-2.724s3.224-4.132,3.224-6.934c0-2.868-1.132-5.211-3.395-7.026 s-5.105-2.724-8.5-2.724h-5.276v-9.039H76.5c2.921,0,5.382-0.789,7.382-2.368c2-1.579,3-3.737,3-6.487 c0-2.447-0.895-4.395-2.684-5.855s-4.053-2.197-6.803-2.197c-2.684,0-4.816,0.711-6.395,2.145s-2.724,3.197-3.447,5.276 l-9.039-3.763c1.197-3.395,3.395-6.395,6.618-8.987c3.224-2.592,7.342-3.895,12.342-3.895c3.697,0,7.026,0.711,9.974,2.145 c2.947,1.434,5.263,3.421,6.934,5.947c1.671,2.539,2.5,5.382,2.5,8.539c0,3.224-0.776,5.947-2.329,8.184 c-1.553,2.237-3.461,3.947-5.724,5.145v0.539c2.987,1.25,5.421,3.158,7.342,5.724c1.908,2.566,2.868,5.632,2.868,9.211 s-0.908,6.776-2.724,9.579c-1.816,2.803-4.329,5.013-7.513,6.618c-3.197,1.605-6.789,2.421-10.776,2.421 C73.408,129.263,69.145,127.934,65.211,125.276z"}),(0,l.jsx)("path",{fill:"#1A73E8",d:"M121.25,79.961l-9.974,7.25l-5.013-7.605l17.987-12.974h6.895v61.197h-9.895L121.25,79.961z"}),(0,l.jsx)("path",{fill:"#EA4335",d:"M148.882,196.25l47.368-47.368l-23.684-10.526l-23.684,10.526l-10.526,23.684L148.882,196.25z"}),(0,l.jsx)("path",{fill:"#34A853",d:"M33.092,172.566l10.526,23.684h105.263v-47.368H43.618L33.092,172.566z"}),(0,l.jsx)("path",{fill:"#4285F4",d:"M12.039-3.75C3.316-3.75-3.75,3.316-3.75,12.039v136.842l23.684,10.526l23.684-10.526V43.618h105.263 l10.526-23.684L148.882-3.75H12.039z"}),(0,l.jsx)("path",{fill:"#188038",d:"M-3.75,148.882v31.579c0,8.724,7.066,15.789,15.789,15.789h31.579v-47.368H-3.75z"}),(0,l.jsx)("path",{fill:"#FBBC04",d:"M148.882,43.618v105.263h47.368V43.618l-23.684-10.526L148.882,43.618z"}),(0,l.jsx)("path",{fill:"#1967D2",d:"M196.25,43.618V12.039c0-8.724-7.066-15.789-15.789-15.789h-31.579v47.368H196.25z"})]})})})},p=e=>{let{size:n,className:t}=e;return(0,l.jsxs)("svg",{className:(0,i.Z)("text-text-100",t),width:n,height:n,viewBox:"0 0 127 127",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z",fill:"#E01E5A"}),(0,l.jsx)("path",{d:"M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z",fill:"#36C5F0"}),(0,l.jsx)("path",{d:"M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z",fill:"#2EB67D"}),(0,l.jsx)("path",{d:"M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z",fill:"#ECB22E"})]})},m=e=>{let{size:n,className:t}=e;return(0,l.jsxs)("svg",{version:"1.1",className:(0,i.Z)("text-text-100",t),width:n,height:n,viewBox:"0 0 273 191",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("defs",{children:(0,l.jsx)("path",{id:"a",d:"m0.06 0.5h272v190h-272z"})}),(0,l.jsxs)("g",{"fill-rule":"evenodd",children:[(0,l.jsx)("path",{d:"m113 21.3c8.78-9.14 21-14.8 34.5-14.8 18 0 33.6 10 42 24.9a58 58 0 0 1 23.7-5.05c32.4 0 58.7 26.5 58.7 59.2s-26.3 59.2-58.7 59.2c-3.96 0-7.82-0.398-11.6-1.15-7.35 13.1-21.4 22-37.4 22a42.7 42.7 0 0 1-18.8-4.32c-7.45 17.5-24.8 29.8-45 29.8-21.1 0-39-13.3-45.9-32a45.1 45.1 0 0 1-9.34 0.972c-25.1 0-45.4-20.6-45.4-45.9 0-17 9.14-31.8 22.7-39.8a52.6 52.6 0 0 1-4.35-21c0-29.2 23.7-52.8 52.9-52.8 17.1 0 32.4 8.15 42 20.8",fill:"#00A1E0",mask:"url(#b)"}),(0,l.jsx)("path",{d:"m39.4 99.3c-0.171 0.446 0.061 0.539 0.116 0.618 0.511 0.37 1.03 0.638 1.55 0.939 2.78 1.47 5.4 1.9 8.14 1.9 5.58 0 9.05-2.97 9.05-7.75v-0.094c0-4.42-3.92-6.03-7.58-7.18l-0.479-0.155c-2.77-0.898-5.16-1.68-5.16-3.5v-0.093c0-1.56 1.4-2.71 3.56-2.71 2.4 0 5.26 0.799 7.09 1.81 0 0 0.542 0.35 0.739-0.173 0.107-0.283 1.04-2.78 1.14-3.06 0.106-0.293-0.08-0.514-0.271-0.628-2.1-1.28-5-2.15-8-2.15l-0.557 2e-3c-5.11 0-8.68 3.09-8.68 7.51v0.095c0 4.66 3.94 6.18 7.62 7.23l0.592 0.184c2.68 0.824 5 1.54 5 3.42v0.094c0 1.73-1.51 3.02-3.93 3.02-0.941 0-3.94-0.016-7.19-2.07-0.393-0.229-0.617-0.394-0.92-0.579-0.16-0.097-0.56-0.272-0.734 0.252l-1.1 3.06m81.7 0c-0.171 0.446 0.061 0.539 0.118 0.618 0.509 0.37 1.03 0.638 1.55 0.939 2.78 1.47 5.4 1.9 8.14 1.9 5.58 0 9.05-2.97 9.05-7.75v-0.094c0-4.42-3.91-6.03-7.58-7.18l-0.479-0.155c-2.77-0.898-5.16-1.68-5.16-3.5v-0.093c0-1.56 1.4-2.71 3.56-2.71 2.4 0 5.25 0.799 7.09 1.81 0 0 0.542 0.35 0.74-0.173 0.106-0.283 1.04-2.78 1.13-3.06 0.107-0.293-0.08-0.514-0.27-0.628-2.1-1.28-5-2.15-8-2.15l-0.558 2e-3c-5.11 0-8.68 3.09-8.68 7.51v0.095c0 4.66 3.94 6.18 7.62 7.23l0.591 0.184c2.69 0.824 5 1.54 5 3.42v0.094c0 1.73-1.51 3.02-3.93 3.02-0.943 0-3.95-0.016-7.19-2.07-0.393-0.229-0.623-0.387-0.921-0.579-0.101-0.064-0.572-0.248-0.733 0.252l-1.1 3.06m55.8-9.36c0 2.7-0.504 4.83-1.49 6.34-0.984 1.49-2.47 2.22-4.54 2.22s-3.55-0.724-4.52-2.21c-0.977-1.5-1.47-3.64-1.47-6.34 0-2.7 0.496-4.82 1.47-6.31 0.968-1.48 2.44-2.19 4.52-2.19s3.56 0.717 4.54 2.19c0.992 1.49 1.49 3.61 1.49 6.31m4.66-5.01c-0.459-1.55-1.17-2.91-2.12-4.05-0.951-1.14-2.15-2.06-3.58-2.72-1.42-0.665-3.1-1-5-1s-3.57 0.337-5 1c-1.42 0.664-2.63 1.58-3.58 2.72-0.948 1.14-1.66 2.5-2.12 4.05-0.455 1.54-0.686 3.22-0.686 5.01 0 1.79 0.231 3.47 0.686 5.01 0.457 1.55 1.17 2.91 2.12 4.05 0.951 1.14 2.16 2.05 3.58 2.7 1.43 0.648 3.11 0.978 5 0.978 1.89 0 3.57-0.33 4.99-0.978 1.42-0.648 2.63-1.56 3.58-2.7 0.949-1.14 1.66-2.5 2.12-4.05 0.454-1.54 0.685-3.22 0.685-5.01 0-1.78-0.231-3.47-0.685-5.01m38.3 12.8c-0.153-0.453-0.595-0.282-0.595-0.282-0.677 0.259-1.4 0.499-2.17 0.619-0.776 0.122-1.64 0.183-2.55 0.183-2.25 0-4.05-0.671-5.33-2-1.29-1.33-2.01-3.47-2-6.37 7e-3 -2.64 0.645-4.62 1.79-6.14 1.13-1.5 2.87-2.28 5.17-2.28 1.92 0 3.39 0.223 4.93 0.705 0 0 0.365 0.159 0.54-0.322 0.409-1.13 0.711-1.94 1.15-3.18 0.124-0.355-0.18-0.505-0.291-0.548-0.604-0.236-2.03-0.623-3.11-0.786-1.01-0.154-2.18-0.234-3.5-0.234-1.96 0-3.7 0.335-5.19 0.999-1.49 0.663-2.75 1.58-3.75 2.72-1 1.14-1.76 2.5-2.27 4.05-0.505 1.54-0.76 3.23-0.76 5.02 0 3.86 1.04 6.99 3.1 9.28 2.06 2.3 5.16 3.46 9.2 3.46 2.39 0 4.84-0.483 6.6-1.18 0 0 0.336-0.162 0.19-0.554l-1.15-3.16m8.15-10.4c0.223-1.5 0.634-2.75 1.28-3.72 0.967-1.48 2.44-2.29 4.51-2.29 2.07 0 3.44 0.814 4.42 2.29 0.65 0.975 0.934 2.27 1.04 3.72l-11.3-2e-3zm15.7-3.3c-0.397-1.49-1.38-3-2.02-3.69-1.02-1.09-2.01-1.86-3-2.28a11.5 11.5 0 0 0-4.52-0.917c-1.97 0-3.76 0.333-5.21 1.01-1.45 0.682-2.67 1.61-3.63 2.77-0.959 1.16-1.68 2.53-2.14 4.1-0.46 1.55-0.692 3.25-0.692 5.03 0 1.82 0.241 3.51 0.715 5.04 0.479 1.54 1.25 2.89 2.29 4.01 1.04 1.13 2.37 2.01 3.97 2.63 1.59 0.615 3.52 0.934 5.73 0.927 4.56-0.015 6.96-1.03 7.94-1.58 0.175-0.098 0.34-0.267 0.134-0.754l-1.03-2.89c-0.158-0.431-0.594-0.275-0.594-0.275-1.13 0.422-2.73 1.18-6.48 1.17-2.45-4e-3 -4.26-0.727-5.4-1.86-1.16-1.16-1.74-2.85-1.83-5.25l15.8 0.012s0.416-4e-3 0.459-0.41c0.017-0.168 0.541-3.24-0.471-6.79zm-142 3.3c0.223-1.5 0.635-2.75 1.28-3.72 0.968-1.48 2.44-2.29 4.51-2.29 2.07 0 3.44 0.814 4.42 2.29 0.649 0.975 0.933 2.27 1.04 3.72l-11.3-2e-3zm15.7-3.3c-0.396-1.49-1.38-3-2.02-3.69-1.02-1.09-2.01-1.86-3-2.28a11.5 11.5 0 0 0-4.52-0.917c-1.97 0-3.76 0.333-5.21 1.01-1.45 0.682-2.67 1.61-3.63 2.77-0.957 1.16-1.68 2.53-2.14 4.1-0.459 1.55-0.69 3.25-0.69 5.03 0 1.82 0.239 3.51 0.716 5.04 0.478 1.54 1.25 2.89 2.28 4.01 1.04 1.13 2.37 2.01 3.97 2.63 1.59 0.615 3.51 0.934 5.73 0.927 4.56-0.015 6.96-1.03 7.94-1.58 0.174-0.098 0.34-0.267 0.133-0.754l-1.03-2.89c-0.159-0.431-0.595-0.275-0.595-0.275-1.13 0.422-2.73 1.18-6.48 1.17-2.44-4e-3 -4.26-0.727-5.4-1.86-1.16-1.16-1.74-2.85-1.83-5.25l15.8 0.012s0.416-4e-3 0.459-0.41c0.017-0.168 0.541-3.24-0.472-6.79zm-49.8 13.6c-0.619-0.494-0.705-0.615-0.91-0.936-0.313-0.483-0.473-1.17-0.473-2.05 0-1.38 0.46-2.38 1.41-3.05-0.01 2e-3 1.36-1.18 4.58-1.14a32 32 0 0 1 4.28 0.365v7.17h2e-3s-2 0.431-4.26 0.567c-3.21 0.193-4.63-0.924-4.62-0.921zm6.28-11.1c-0.64-0.047-1.47-0.07-2.46-0.07-1.35 0-2.66 0.168-3.88 0.498-1.23 0.332-2.34 0.846-3.29 1.53a7.63 7.63 0 0 0-2.29 2.6c-0.559 1.04-0.844 2.26-0.844 3.64 0 1.4 0.243 2.61 0.723 3.6a6.54 6.54 0 0 0 2.06 2.47c0.877 0.638 1.96 1.11 3.21 1.39 1.24 0.283 2.64 0.426 4.18 0.426 1.62 0 3.23-0.136 4.79-0.399a95.1 95.1 0 0 0 3.97-0.772c0.526-0.121 1.11-0.28 1.11-0.28 0.39-0.099 0.36-0.516 0.36-0.516l-9e-3 -14.4c0-3.16-0.844-5.51-2.51-6.96-1.66-1.45-4.09-2.18-7.24-2.18-1.18 0-3.09 0.16-4.23 0.389 0 0-3.44 0.668-4.86 1.78 0 0-0.312 0.192-0.142 0.627l1.12 3c0.139 0.389 0.518 0.256 0.518 0.256s0.119-0.047 0.259-0.13c3.03-1.65 6.87-1.6 6.87-1.6 1.7 0 3.02 0.345 3.9 1.02 0.861 0.661 1.3 1.66 1.3 3.76v0.667c-1.35-0.196-2.6-0.309-2.6-0.309zm127-8.13a0.428 0.428 0 0 0-0.237-0.568c-0.269-0.102-1.61-0.385-2.64-0.449-1.98-0.124-3.08 0.21-4.07 0.654-0.978 0.441-2.06 1.15-2.66 1.97l-2e-3 -1.92c0-0.264-0.187-0.477-0.453-0.477h-4.04c-0.262 0-0.452 0.213-0.452 0.477v23.5a0.48 0.48 0 0 0 0.479 0.479h4.14a0.479 0.479 0 0 0 0.478-0.479v-11.8c0-1.58 0.174-3.15 0.521-4.14 0.342-0.979 0.807-1.76 1.38-2.32a4.79 4.79 0 0 1 1.95-1.17 7.68 7.68 0 0 1 2.12-0.298c0.825 0 1.73 0.212 1.73 0.212 0.304 0.034 0.473-0.152 0.576-0.426 0.271-0.721 1.04-2.88 1.19-3.31",fill:"#FFFFFE"}),(0,l.jsx)("path",{d:"M162.201 67.548a13.258 13.258 0 0 0-1.559-.37 12.217 12.217 0 0 0-2.144-.166c-2.853 0-5.102.806-6.681 2.398-1.568 1.58-2.635 3.987-3.17 7.154l-.193 1.069h-3.581s-.437-.018-.529.459l-.588 3.28c-.041.314.094.51.514.508h3.486l-3.537 19.743c-.277 1.59-.594 2.898-.945 3.889-.346.978-.684 1.711-1.1 2.243-.403.515-.785.894-1.444 1.115-.544.183-1.17.267-1.856.267-.382 0-.89-.064-1.265-.139-.375-.074-.57-.158-.851-.276 0 0-.409-.156-.57.254-.131.335-1.06 2.89-1.17 3.206-.112.312.045.558.243.629.464.166.809.272 1.441.421.878.207 1.618.22 2.311.22 1.452 0 2.775-.204 3.872-.6 1.104-.399 2.065-1.094 2.915-2.035.919-1.015 1.497-2.078 2.05-3.528.547-1.437 1.013-3.221 1.386-5.3l3.554-20.109h5.196s.438.016.529-.459l.588-3.28c.041-.314-.093-.51-.515-.508h-5.043c.025-.114.254-1.888.833-3.558.247-.713.712-1.288 1.106-1.683a3.273 3.273 0 0 1 1.321-.822 5.48 5.48 0 0 1 1.693-.244c.475 0 .941.057 1.296.131.489.104.679.159.807.197.514.157.583.005.684-.244l1.206-3.312c.124-.356-.178-.506-.29-.55m-70.474 34.117c0 .264-.188.479-.452.479h-4.183c-.265 0-.453-.215-.453-.479V67.997c0-.263.188-.476.453-.476h4.183c.264 0 .452.213.452.476v33.668",fill:"#FFFFFE"})]})]})},g=e=>{let{size:n,className:t}=e;return(0,l.jsx)("svg",{className:(0,i.Z)("text-text-100",t),width:n,height:n,viewBox:"0 0 155 144",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M110.73 34.0139C110.73 52.5445 95.7048 67.581 77.1742 67.581C58.6319 67.581 43.607 52.5562 43.607 34.0139C43.607 15.4716 58.6319 0.446716 77.1742 0.446716C95.7048 0.446716 110.73 15.4716 110.73 34.0139ZM33.5671 75.967C15.0365 75.967 0 90.9919 0 109.523C0 128.053 15.0248 143.09 33.5671 143.09C52.1094 143.09 67.1343 128.065 67.1343 109.523C67.1343 90.9919 52.1094 75.967 33.5671 75.967ZM120.77 75.967C102.227 75.967 87.2024 90.9919 87.2024 109.534C87.2024 128.076 102.227 143.101 120.77 143.101C139.3 143.101 154.337 128.076 154.337 109.534C154.337 90.9919 139.312 75.967 120.77 75.967Z",fill:"#FF584A"})})};function b(e){let n,{type:t,size:r,className:s,variant:i,isError:u=!1}=e,b={size:r,className:s,variant:i};switch(t){case a.Fg.GITHUB:n=(0,l.jsx)(f,{...b});break;case a.Fg.GDRIVE:n=(0,l.jsx)(d,{...b});break;case a.Fg.SLACK:n=(0,l.jsx)(p,{...b});break;case a.Fg.SALESFORCE:n=(0,l.jsx)(m,{...b});break;case a.Fg.GMAIL:n=(0,l.jsx)(h,{...b});break;case a.Fg.GCAL:n=(0,l.jsx)(x,{...b});break;case a.Fg.ASANA:n=(0,l.jsx)(g,{...b});break;case a.Fg.OUTLINE:throw Error("Unknown sync source type");default:n=(0,l.jsx)(o.Z,{...b})}return(0,l.jsxs)(l.Fragment,{children:[n,u&&(0,l.jsx)("div",{className:"absolute bottom-0 left-0 border-0.5 border-border-300 rounded-md m-0.5 p-0.5 bg-danger-900 text-danger-100",children:(0,l.jsx)(c.v,{size:14})})]})}},36222:function(e,n,t){t.d(n,{LT:function(){return a},M0:function(){return s},_6:function(){return r},_I:function(){return o},kC:function(){return l}});let r=(e,n,t)=>1===e?n:t||n+"s",s=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s",s=r(e,n,n+t);return"".concat(e," ").concat(s)};function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}function a(e,n){let t=n?"present":"past",r={get:{present:"getting",past:"got"},find:{present:"finding",past:"found"},read:{present:"reading",past:"read"},send:{present:"sending",past:"sent"},query:{present:"querying",past:"queried"}};return r[e]?r[e][t]:"present"===t?e.endsWith("e")?e.slice(0,-1)+"ing":e.length<=4&&/[bcdfghjklmnpqrstvwxyz][aeiou][bcdfghjklmnpqrstvwxyz]$/.test(e)?e+e.slice(-1)+"ing":e+"ing":e.endsWith("e")?e+"d":e.endsWith("y")?e.slice(0,-1)+"ied":e+"ed"}function o(e){return["search","find","query","list"].includes(e)?"in":"from"}}}]);