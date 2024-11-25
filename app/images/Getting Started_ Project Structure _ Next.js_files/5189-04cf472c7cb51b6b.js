"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5189],{53995:(e,t,r)=>{r.d(t,{UC:()=>$,bL:()=>B,l9:()=>U});var n=r(6631),o=r(42255),s=r(93669),a=r(43339),i=r(98726),u=r(25229),l=r(55431),c=r(82073),p=r(84467),d=(r(21662),r(95314)),f=r(32611),h=r(33381),m=r(97581),v=r(11140),g=r(71434),x=r(89071),C="Popover",[E,R]=(0,a.A)(C,[p.Bk]),P=(0,p.Bk)(),[w,y]=E(C),k=e=>{let{__scopePopover:t,children:r,open:o,defaultOpen:s,onOpenChange:a,modal:i=!1}=e,u=P(t),l=n.useRef(null),[d,f]=n.useState(!1),[h=!1,v]=(0,m.i)({prop:o,defaultProp:s,onChange:a});return(0,x.jsx)(p.bL,{...u,children:(0,x.jsx)(w,{scope:t,contentId:(0,c.B)(),triggerRef:l,open:h,onOpenChange:v,onOpenToggle:n.useCallback(()=>v(e=>!e),[v]),hasCustomAnchor:d,onCustomAnchorAdd:n.useCallback(()=>f(!0),[]),onCustomAnchorRemove:n.useCallback(()=>f(!1),[]),modal:i,children:r})})};k.displayName=C;var b="PopoverAnchor";n.forwardRef((e,t)=>{let{__scopePopover:r,...o}=e,s=y(b,r),a=P(r),{onCustomAnchorAdd:i,onCustomAnchorRemove:u}=s;return n.useEffect(()=>(i(),()=>u()),[i,u]),(0,x.jsx)(p.Mz,{...a,...o,ref:t})}).displayName=b;var A="PopoverTrigger",O=n.forwardRef((e,t)=>{let{__scopePopover:r,...n}=e,a=y(A,r),i=P(r),u=(0,s.s)(t,a.triggerRef),l=(0,x.jsx)(f.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":L(a.open),...n,ref:u,onClick:(0,o.m)(e.onClick,a.onOpenToggle)});return a.hasCustomAnchor?l:(0,x.jsx)(p.Mz,{asChild:!0,...i,children:l})});O.displayName=A;var[j,F]=E("PopoverPortal",{forceMount:void 0}),D="PopoverContent",_=n.forwardRef((e,t)=>{let r=F(D,e.__scopePopover),{forceMount:n=r.forceMount,...o}=e,s=y(D,e.__scopePopover);return(0,x.jsx)(d.C,{present:n||s.open,children:s.modal?(0,x.jsx)(M,{...o,ref:t}):(0,x.jsx)(I,{...o,ref:t})})});_.displayName=D;var M=n.forwardRef((e,t)=>{let r=y(D,e.__scopePopover),a=n.useRef(null),i=(0,s.s)(t,a),u=n.useRef(!1);return n.useEffect(()=>{let e=a.current;if(e)return(0,v.E)(e)},[]),(0,x.jsx)(g.A,{as:h.DX,allowPinchZoom:!0,children:(0,x.jsx)(N,{...e,ref:i,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.m)(e.onCloseAutoFocus,e=>{e.preventDefault(),u.current||r.triggerRef.current?.focus()}),onPointerDownOutside:(0,o.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey,n=2===t.button||r;u.current=n},{checkForDefaultPrevented:!1}),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),I=n.forwardRef((e,t)=>{let r=y(D,e.__scopePopover),o=n.useRef(!1),s=n.useRef(!1);return(0,x.jsx)(N,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(o.current||r.triggerRef.current?.focus(),t.preventDefault()),o.current=!1,s.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(s.current=!0));let n=t.target;r.triggerRef.current?.contains(n)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&s.current&&t.preventDefault()}})}),N=n.forwardRef((e,t)=>{let{__scopePopover:r,trapFocus:n,onOpenAutoFocus:o,onCloseAutoFocus:s,disableOutsidePointerEvents:a,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,...m}=e,v=y(D,r),g=P(r);return(0,u.Oh)(),(0,x.jsx)(l.n,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:o,onUnmountAutoFocus:s,children:(0,x.jsx)(i.qW,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:h,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onDismiss:()=>v.onOpenChange(!1),children:(0,x.jsx)(p.UC,{"data-state":L(v.open),role:"dialog",id:v.contentId,...g,...m,ref:t,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),z="PopoverClose";function L(e){return e?"open":"closed"}n.forwardRef((e,t)=>{let{__scopePopover:r,...n}=e,s=y(z,r);return(0,x.jsx)(f.sG.button,{type:"button",...n,ref:t,onClick:(0,o.m)(e.onClick,()=>s.onOpenChange(!1))})}).displayName=z,n.forwardRef((e,t)=>{let{__scopePopover:r,...n}=e,o=P(r);return(0,x.jsx)(p.i3,{...o,...n,ref:t})}).displayName="PopoverArrow";var B=k,U=O,$=_},67791:(e,t,r)=>{r.d(t,{N:()=>v});var n=r(6631),o=r(44769),s=r(45094);function a(){let e=(0,n.useRef)(!1);return(0,s.E)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var i=r(99274),u=r(41301);class l extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let r=(0,n.useId)(),o=(0,n.useRef)(null),s=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{let{width:e,height:n,top:a,left:i}=s.current;if(t||!o.current||!e||!n)return;o.current.dataset.motionPopId=r;let u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${a}px !important;
            left: ${i}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),n.createElement(l,{isPresent:t,childRef:o,sizeRef:s},n.cloneElement(e,{ref:o}))}let p=({children:e,initial:t,isPresent:r,onExitComplete:o,custom:s,presenceAffectsLayout:a,mode:l})=>{let p=(0,u.M)(d),f=(0,n.useId)(),h=(0,n.useMemo)(()=>({id:f,initial:t,isPresent:r,custom:s,onExitComplete:e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;o&&o()},register:e=>(p.set(e,!1),()=>p.delete(e))}),a?void 0:[r]);return(0,n.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[r]),n.useEffect(()=>{r||p.size||!o||o()},[r]),"popLayout"===l&&(e=n.createElement(c,{isPresent:r},e)),n.createElement(i.t.Provider,{value:h},e)};function d(){return new Map}var f=r(67077),h=r(92806);let m=e=>e.key||"",v=({children:e,custom:t,initial:r=!0,onExitComplete:i,exitBeforeEnter:u,presenceAffectsLayout:l=!0,mode:c="sync"})=>{var d;(0,h.V)(!u,"Replace exitBeforeEnter with mode='wait'");let v=(0,n.useContext)(f.L).forceRender||function(){let e=a(),[t,r]=(0,n.useState)(0),s=(0,n.useCallback)(()=>{e.current&&r(t+1)},[t]);return[(0,n.useCallback)(()=>o.Gt.postRender(s),[s]),t]}()[0],g=a(),x=function(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}(e),C=x,E=(0,n.useRef)(new Map).current,R=(0,n.useRef)(C),P=(0,n.useRef)(new Map).current,w=(0,n.useRef)(!0);if((0,s.E)(()=>{w.current=!1,function(e,t){e.forEach(e=>{let r=m(e);t.set(r,e)})}(x,P),R.current=C}),d=()=>{w.current=!0,P.clear(),E.clear()},(0,n.useEffect)(()=>()=>d(),[]),w.current)return n.createElement(n.Fragment,null,C.map(e=>n.createElement(p,{key:m(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:l,mode:c},e)));C=[...C];let y=R.current.map(m),k=x.map(m),b=y.length;for(let e=0;e<b;e++){let t=y[e];-1!==k.indexOf(t)||E.has(t)||E.set(t,void 0)}return"wait"===c&&E.size&&(C=[]),E.forEach((e,r)=>{if(-1!==k.indexOf(r))return;let o=P.get(r);if(!o)return;let s=y.indexOf(r),a=e;a||(a=n.createElement(p,{key:m(o),isPresent:!1,onExitComplete:()=>{P.delete(r),E.delete(r);let e=R.current.findIndex(e=>e.key===r);if(R.current.splice(e,1),!E.size){if(R.current=x,!1===g.current)return;v(),i&&i()}},custom:t,presenceAffectsLayout:l,mode:c},o),E.set(r,a)),C.splice(s,0,a)}),C=C.map(e=>{let t=e.key;return E.has(t)?e:n.createElement(p,{key:m(e),isPresent:!0,presenceAffectsLayout:l,mode:c},e)}),n.createElement(n.Fragment,null,E.size?C:C.map(e=>(0,n.cloneElement)(e)))}}}]);