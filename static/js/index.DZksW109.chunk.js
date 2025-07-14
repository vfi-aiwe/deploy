import{j as ve,y as Ze,r as a,B as s,E as B,q as Li,by as g,J as we,as as fe,bS as ht,b_ as J,aP as _t,dv as Re,a1 as et,h2 as os,fZ as Eo,h3 as Io,h4 as Ao,h5 as Lo,c4 as rs,c6 as tt,bL as je,x as is,ae as ki,aC as Rn,f_ as O,ag as _n,h6 as jt,h7 as lt,ao as At,bM as V,az as ko,aI as Ro,bB as as,h8 as Ri,h9 as _i,ha as Ti,ad as ls,hb as Di,hc as Ni,bJ as le,gP as Mi,cj as Oi,bV as $i,hd as Fi,he as _o,bG as Bi,hf as To,hg as Pi,hh as Hi,hi as Wi,hj as zi,a0 as Gi,bz as G,hk as Do,hl as No,hm as Mo,K as Je,bT as Ui,f$ as L,dR as Oo,hn as Vi,dy as Ki,L as qi,bp as Xi,gO as dt,fP as Yi,fO as Qi,fX as Ji,bD as $o,ho as Zi,c5 as ea,hp as ta,hq as na,gN as sa,fA as Fo,gF as Bo,hr as vn,gT as Po,dj as oa,hs as ra,ht as ia,bv as Ho,hu as aa,aU as la,hv as ca}from"./index.BDWbwHp_.js";import{ae as cs,dM as da,dN as ua,dO as ha,dP as pa,dQ as fa,dR as ga,dS as xa,dT as Os,bw as Wo,aL as zo,dU as ma,dV as ba,dW as va,Q as Le,dX as he,ak as ee,dY as wa,dZ as Ca,d_ as Tn,d$ as ds,az as us,K as Go,bC as ya,e0 as Y,bB as rn,h as Lt,P as hs,dt as Sa,aD as $,A as Uo,B as Fe,aJ as Xt,d7 as Vo,e1 as ja,e2 as Ea,da as wn,aI as Ia,e3 as Aa,e4 as La,df as ps,dg as fs,ar as Yn,de as ka,d9 as Ko,dn as St,dp as Me,g as Yt,e5 as Qt,e6 as ue,e7 as nt,e8 as Ra,e9 as Jt,ea as xn,d8 as _a,eb as Zt,bt as qo,ec as kt,ed as Ta,ee as Xo,a4 as Yo,Y as Da,ef as Na,aN as Ma,M as Oa,dv as Pt,eg as $a,dI as $s,eh as Fa,r as Ut,ei as Qo,ej as Jo,di as Ba,ek as Pa,el as Qe,em as Ha,ds as Wa,a3 as Zo,c9 as za,en as Ga,t as Ua,eo as Va,ep as Ka,bc as qa,eq as Xa,er as Ya,es as Qa}from"./index.CMGJEYRC.chunk.js";import{T as Ja,L as Za,M as el,a as er,S as tr,b as nr,c as sr,C as or,U as rr,d as ir,B as ar,W as tl,g as nl,E as U,e as ut,f as Qn,p as Fs,h as sl,i as ol,j as rl,k as il,l as al,m as ll,Q as cl,n as dl,o as ul,q as Bs,r as Et,s as hl,t as pl,v as Ps,w as Hs,x as fl,y as gl,z as xl,A as ml,D as bl,F as vl,G as wl,H as lr,I as Cl,J as yl,K as Sl,N as jl,O as El,P as Il,V as Al}from"./TestFrame.Co2ECLEU.chunk.js";import{v as Ll}from"./v4.CtRu48qb.chunk.js";import{g as cr}from"./date.DyEs2qzH.chunk.js";import{C as kl}from"./copy.CIfHs9ZE.chunk.js";import{C as Rl,a as _l,b as Tl,c as Dl,I as Nl,N as Ml,W as Ol,e as $l,P as Fl,S as an}from"./styles.C23oGIuN.chunk.js";import{i as Bl,j as Pl,k as Hl,l as Wl,m as zl,n as Gl,o as Ul,p as Vl,q as Kl,r as ql,t as Xl,u as Yl}from"./logo.C114fS_H.chunk.js";import{default as O1}from"./RedirectToEditLesson.DSIt0PN2.chunk.js";import{G as Ql,C as Jl}from"./group-cards.D75Uknw1.chunk.js";import"./relativeTime.DEMDksMo.chunk.js";import"./timeout.a7nJCnw9.chunk.js";import"./useGetShopItems.CzsFvbUc.chunk.js";import"./useGetChestRewards.Cb2-pkZP.chunk.js";function Zl({icon:e,className:t="",onClick:n}){const o=ve(Ze),[r,i]=a.useState(!1),l=cs(()=>i(!1)),c=()=>{r?n():i(!0)};return s.jsx(da,{ref:l,className:B(`glass-div linear ${o} ${r&&"ready"}`,{[t]:!!t}),onClick:c,children:e})}const ec="_button_1brjy_1",tc="_mobile_1brjy_14",nc="_iconContainer_1brjy_22",sc="_title_1brjy_40",ln={button:ec,mobile:tc,iconContainer:nc,title:sc},oc=({title:e,onCLick:t,className:n=""})=>{const o=ve(Ze),{isMobile:r}=Li();return s.jsxs("button",{className:B(ln.button,`glass-div basic ${o}`,{[n]:!!n,[ln.mobile]:r}),onClick:t,children:[s.jsx(ua,{className:ln.iconContainer}),s.jsx("div",{className:ln.title,children:e})]})},dr=({label:e,onClick:t,icon:n,disabled:o,size:r,className:i})=>{const l=n??s.jsx(fa,{});return s.jsxs(ha,{onClick:t,disabled:o,className:B(r,i),children:[s.jsx(pa,{children:l}),e]})},gs=({onClose:e,onSubmit:t,defaultValue:n="",disabled:o,toUpperCase:r=!1})=>{const[i,l]=a.useState(r?n.toUpperCase():n),c=u=>{l(u.target.value)},d=()=>{t(i)};return s.jsxs(ga,{className:B({disabled:o}),children:[s.jsx(xa,{value:i,disabled:o,onChange:c}),s.jsx(Os,{onClick:d,children:s.jsx(Wo,{})}),s.jsx(Os,{className:"close",onClick:e,children:s.jsx(zo,{})})]})},ur=({isOpen:e,items:t,onClose:n,containerClassName:o,disabled:r})=>{const i=cs(n);if(!e)return null;const l=c=>()=>{c(),n()};return s.jsx(ma,{ref:i,className:B({disabled:r},o),children:t.map(({label:c,onClick:d,icon:u,className:h})=>s.jsxs(ba,{onClick:l(d),className:h,children:[u,c]},`menu-${c}`))})},rc=g.div`
  position: fixed;
  top: calc(104px - 48px);
  left: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 248px;
  max-height: calc(100vh - 92px);
  padding-top: 48px;
  /* overflow-y: auto; */
  /* overflow-x: hidden; */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  mask-mode: alpha;
  /* mask-image: linear-gradient(  // IT CAUSES BLUR PROBLEMS
    180deg,
    transparent 0%,
    transparent 25px,
    #000000 50px,
    #000000 calc(100% - 50px),
    transparent calc(100% - 25px),
    transparent 100%
  ); */
  animation: appear 1s;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;g.div`
  font-size: 16px;
  line-height: 100%;
  font-weight: 400;
  margin-bottom: 16px;
  color: var(--font-color-strong);
  opacity: 0.5;
`;const ic=g.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: fit-content;
  padding-bottom: 48px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,ac=g.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,hr=g.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 4px;
  transition: color 0.3s;
  font-size: 14px;
  line-height: 100%;
  padding-left: 10px;
  padding-top: 2px;
  min-height: 24px;
  height: 24px;
  color: #838389;
  cursor: pointer;
  & .menu {
    left: 10px;
    top: calc(100% + 4px);
  }
  & > p {
    min-height: 20px;
    display: flex;
    align-items: center;
    line-height: 100%;
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    left: -1px;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 1px;
    background: transparent;
    transition: 0.3s;
  }
  &:hover {
    color: var(--font-color-strong);
    &::before {
      background: var(--font-color-strong);
    }
  }
  &.isActive {
    color: var(--mighty-blue);
    &::before {
      background: var(--mighty-blue);
    }
  }
  &.isDragging {
    &::before {
      display: none;
    }
  }
`,pr=g.div`
  display: flex;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,mn=g(we.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  min-width: 20px;
  color: inherit;
`,lc=g.div`
  margin-top: -4px;
`,Pn={initial:{opacity:0},animate:{opacity:1}};function cc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return a.useMemo(()=>o=>{t.forEach(r=>r(o))},t)}const Dn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Tt(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function xs(e){return"nodeType"in e}function ge(e){var t,n;return e?Tt(e)?e:xs(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function ms(e){const{Document:t}=ge(e);return e instanceof t}function en(e){return Tt(e)?!1:e instanceof ge(e).HTMLElement}function fr(e){return e instanceof ge(e).SVGElement}function Dt(e){return e?Tt(e)?e.document:xs(e)?ms(e)?e:en(e)||fr(e)?e.ownerDocument:document:document:document}const Be=Dn?a.useLayoutEffect:a.useEffect;function bs(e){const t=a.useRef(e);return Be(()=>{t.current=e}),a.useCallback(function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function dc(){const e=a.useRef(null),t=a.useCallback((o,r)=>{e.current=setInterval(o,r)},[]),n=a.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function Vt(e,t){t===void 0&&(t=[e]);const n=a.useRef(e);return Be(()=>{n.current!==e&&(n.current=e)},t),n}function tn(e,t){const n=a.useRef();return a.useMemo(()=>{const o=e(n.current);return n.current=o,o},[...t])}function Cn(e){const t=bs(e),n=a.useRef(null),o=a.useCallback(r=>{r!==n.current&&t?.(r,n.current),n.current=r},[]);return[n,o]}function Jn(e){const t=a.useRef();return a.useEffect(()=>{t.current=e},[e]),t.current}let Hn={};function nn(e,t){return a.useMemo(()=>{if(t)return t;const n=Hn[e]==null?0:Hn[e]+1;return Hn[e]=n,e+"-"+n},[e,t])}function gr(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return o.reduce((i,l)=>{const c=Object.entries(l);for(const[d,u]of c){const h=i[d];h!=null&&(i[d]=h+e*u)}return i},{...t})}}const It=gr(1),yn=gr(-1);function uc(e){return"clientX"in e&&"clientY"in e}function vs(e){if(!e)return!1;const{KeyboardEvent:t}=ge(e.target);return t&&e instanceof t}function hc(e){if(!e)return!1;const{TouchEvent:t}=ge(e.target);return t&&e instanceof t}function Zn(e){if(hc(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return uc(e)?{x:e.clientX,y:e.clientY}:null}const ft=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[ft.Translate.toString(e),ft.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:o}=e;return t+" "+n+"ms "+o}}}),Ws="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function pc(e){return e.matches(Ws)?e:e.querySelector(Ws)}const fc={display:"none"};function gc(e){let{id:t,value:n}=e;return fe.createElement("div",{id:t,style:fc},n)}function xc(e){let{id:t,announcement:n,ariaLiveType:o="assertive"}=e;const r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return fe.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},n)}function mc(){const[e,t]=a.useState("");return{announce:a.useCallback(o=>{o!=null&&t(o)},[]),announcement:e}}const xr=a.createContext(null);function bc(e){const t=a.useContext(xr);a.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function vc(){const[e]=a.useState(()=>new Set),t=a.useCallback(o=>(e.add(o),()=>e.delete(o)),[e]);return[a.useCallback(o=>{let{type:r,event:i}=o;e.forEach(l=>{var c;return(c=l[r])==null?void 0:c.call(l,i)})},[e]),t]}const wc={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Cc={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function yc(e){let{announcements:t=Cc,container:n,hiddenTextDescribedById:o,screenReaderInstructions:r=wc}=e;const{announce:i,announcement:l}=mc(),c=nn("DndLiveRegion"),[d,u]=a.useState(!1);if(a.useEffect(()=>{u(!0)},[]),bc(a.useMemo(()=>({onDragStart(p){let{active:x}=p;i(t.onDragStart({active:x}))},onDragMove(p){let{active:x,over:f}=p;t.onDragMove&&i(t.onDragMove({active:x,over:f}))},onDragOver(p){let{active:x,over:f}=p;i(t.onDragOver({active:x,over:f}))},onDragEnd(p){let{active:x,over:f}=p;i(t.onDragEnd({active:x,over:f}))},onDragCancel(p){let{active:x,over:f}=p;i(t.onDragCancel({active:x,over:f}))}}),[i,t])),!d)return null;const h=fe.createElement(fe.Fragment,null,fe.createElement(gc,{id:o,value:r.draggable}),fe.createElement(xc,{id:c,announcement:l}));return n?ht.createPortal(h,n):h}var Z;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Z||(Z={}));function Sn(){}function ws(e,t){return a.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function Cs(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return a.useMemo(()=>[...t].filter(o=>o!=null),[...t])}const ke=Object.freeze({x:0,y:0});function Sc(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function jc(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return n-o}function Ec(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return o-n}function Ic(e,t){if(!e||e.length===0)return null;const[n]=e;return n[t]}function zs(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const ys=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const r=zs(t,t.left,t.top),i=[];for(const l of o){const{id:c}=l,d=n.get(c);if(d){const u=Sc(zs(d),r);i.push({id:c,data:{droppableContainer:l,value:u}})}}return i.sort(jc)};function Ac(e,t){const n=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),l=r-o,c=i-n;if(o<r&&n<i){const d=t.width*t.height,u=e.width*e.height,h=l*c,p=h/(d+u-h);return Number(p.toFixed(4))}return 0}const Lc=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const r=[];for(const i of o){const{id:l}=i,c=n.get(l);if(c){const d=Ac(c,t);d>0&&r.push({id:l,data:{droppableContainer:i,value:d}})}}return r.sort(Ec)};function kc(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function mr(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:ke}function Rc(e){return function(n){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];return r.reduce((l,c)=>({...l,top:l.top+e*c.y,bottom:l.bottom+e*c.y,left:l.left+e*c.x,right:l.right+e*c.x}),{...n})}}const _c=Rc(1);function Tc(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Dc(e,t,n){const o=Tc(t);if(!o)return e;const{scaleX:r,scaleY:i,x:l,y:c}=o,d=e.left-l-(1-r)*parseFloat(n),u=e.top-c-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),h=r?e.width/r:e.width,p=i?e.height/i:e.height;return{width:h,height:p,top:u,right:d+h,bottom:u+p,left:d}}const Nc={ignoreTransform:!1};function Nt(e,t){t===void 0&&(t=Nc);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:u,transformOrigin:h}=ge(e).getComputedStyle(e);u&&(n=Dc(n,u,h))}const{top:o,left:r,width:i,height:l,bottom:c,right:d}=n;return{top:o,left:r,width:i,height:l,bottom:c,right:d}}function Gs(e){return Nt(e,{ignoreTransform:!0})}function Mc(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function Oc(e,t){return t===void 0&&(t=ge(e).getComputedStyle(e)),t.position==="fixed"}function $c(e,t){t===void 0&&(t=ge(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{const i=t[r];return typeof i=="string"?n.test(i):!1})}function Ss(e,t){const n=[];function o(r){if(t!=null&&n.length>=t||!r)return n;if(ms(r)&&r.scrollingElement!=null&&!n.includes(r.scrollingElement))return n.push(r.scrollingElement),n;if(!en(r)||fr(r)||n.includes(r))return n;const i=ge(e).getComputedStyle(r);return r!==e&&$c(r,i)&&n.push(r),Oc(r,i)?n:o(r.parentNode)}return e?o(e):n}function br(e){const[t]=Ss(e,1);return t??null}function Wn(e){return!Dn||!e?null:Tt(e)?e:xs(e)?ms(e)||e===Dt(e).scrollingElement?window:en(e)?e:null:null}function vr(e){return Tt(e)?e.scrollX:e.scrollLeft}function wr(e){return Tt(e)?e.scrollY:e.scrollTop}function es(e){return{x:vr(e),y:wr(e)}}var ne;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(ne||(ne={}));function Cr(e){return!Dn||!e?!1:e===document.scrollingElement}function yr(e){const t={x:0,y:0},n=Cr(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},r=e.scrollTop<=t.y,i=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,c=e.scrollLeft>=o.x;return{isTop:r,isLeft:i,isBottom:l,isRight:c,maxScroll:o,minScroll:t}}const Fc={x:.2,y:.2};function Bc(e,t,n,o,r){let{top:i,left:l,right:c,bottom:d}=n;o===void 0&&(o=10),r===void 0&&(r=Fc);const{isTop:u,isBottom:h,isLeft:p,isRight:x}=yr(e),f={x:0,y:0},m={x:0,y:0},b={height:t.height*r.y,width:t.width*r.x};return!u&&i<=t.top+b.height?(f.y=ne.Backward,m.y=o*Math.abs((t.top+b.height-i)/b.height)):!h&&d>=t.bottom-b.height&&(f.y=ne.Forward,m.y=o*Math.abs((t.bottom-b.height-d)/b.height)),!x&&c>=t.right-b.width?(f.x=ne.Forward,m.x=o*Math.abs((t.right-b.width-c)/b.width)):!p&&l<=t.left+b.width&&(f.x=ne.Backward,m.x=o*Math.abs((t.left+b.width-l)/b.width)),{direction:f,speed:m}}function Pc(e){if(e===document.scrollingElement){const{innerWidth:i,innerHeight:l}=window;return{top:0,left:0,right:i,bottom:l,width:i,height:l}}const{top:t,left:n,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:n,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function Sr(e){return e.reduce((t,n)=>It(t,es(n)),ke)}function Hc(e){return e.reduce((t,n)=>t+vr(n),0)}function Wc(e){return e.reduce((t,n)=>t+wr(n),0)}function zc(e,t){if(t===void 0&&(t=Nt),!e)return;const{top:n,left:o,bottom:r,right:i}=t(e);br(e)&&(r<=0||i<=0||n>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const Gc=[["x",["left","right"],Hc],["y",["top","bottom"],Wc]];class js{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const o=Ss(n),r=Sr(o);this.rect={...t},this.width=t.width,this.height=t.height;for(const[i,l,c]of Gc)for(const d of l)Object.defineProperty(this,d,{get:()=>{const u=c(o),h=r[i]-u;return this.rect[d]+h},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Wt{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...n)})},this.target=t}add(t,n,o){var r;(r=this.target)==null||r.addEventListener(t,n,o),this.listeners.push([t,n,o])}}function Uc(e){const{EventTarget:t}=ge(e);return e instanceof t?e:Dt(e)}function zn(e,t){const n=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+o**2)>t:"x"in t&&"y"in t?n>t.x&&o>t.y:"x"in t?n>t.x:"y"in t?o>t.y:!1}var Se;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Se||(Se={}));function Us(e){e.preventDefault()}function Vc(e){e.stopPropagation()}var P;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(P||(P={}));const jr={start:[P.Space,P.Enter],cancel:[P.Esc],end:[P.Space,P.Enter,P.Tab]},Kc=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case P.Right:return{...n,x:n.x+25};case P.Left:return{...n,x:n.x-25};case P.Down:return{...n,y:n.y+25};case P.Up:return{...n,y:n.y-25}}};class Er{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new Wt(Dt(n)),this.windowListeners=new Wt(ge(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Se.Resize,this.handleCancel),this.windowListeners.add(Se.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Se.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,o=t.node.current;o&&zc(o),n(ke)}handleKeyDown(t){if(vs(t)){const{active:n,context:o,options:r}=this.props,{keyboardCodes:i=jr,coordinateGetter:l=Kc,scrollBehavior:c="smooth"}=r,{code:d}=t;if(i.end.includes(d)){this.handleEnd(t);return}if(i.cancel.includes(d)){this.handleCancel(t);return}const{collisionRect:u}=o.current,h=u?{x:u.left,y:u.top}:ke;this.referenceCoordinates||(this.referenceCoordinates=h);const p=l(t,{active:n,context:o.current,currentCoordinates:h});if(p){const x=yn(p,h),f={x:0,y:0},{scrollableAncestors:m}=o.current;for(const b of m){const C=t.code,{isTop:y,isRight:j,isLeft:v,isBottom:S,maxScroll:E,minScroll:k}=yr(b),I=Pc(b),w={x:Math.min(C===P.Right?I.right-I.width/2:I.right,Math.max(C===P.Right?I.left:I.left+I.width/2,p.x)),y:Math.min(C===P.Down?I.bottom-I.height/2:I.bottom,Math.max(C===P.Down?I.top:I.top+I.height/2,p.y))},A=C===P.Right&&!j||C===P.Left&&!v,T=C===P.Down&&!S||C===P.Up&&!y;if(A&&w.x!==p.x){const _=b.scrollLeft+x.x,H=C===P.Right&&_<=E.x||C===P.Left&&_>=k.x;if(H&&!x.y){b.scrollTo({left:_,behavior:c});return}H?f.x=b.scrollLeft-_:f.x=C===P.Right?b.scrollLeft-E.x:b.scrollLeft-k.x,f.x&&b.scrollBy({left:-f.x,behavior:c});break}else if(T&&w.y!==p.y){const _=b.scrollTop+x.y,H=C===P.Down&&_<=E.y||C===P.Up&&_>=k.y;if(H&&!x.x){b.scrollTo({top:_,behavior:c});return}H?f.y=b.scrollTop-_:f.y=C===P.Down?b.scrollTop-E.y:b.scrollTop-k.y,f.y&&b.scrollBy({top:-f.y,behavior:c});break}}this.handleMove(t,It(yn(p,this.referenceCoordinates),f))}}}handleMove(t,n){const{onMove:o}=this.props;t.preventDefault(),o(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Er.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:o=jr,onActivation:r}=t,{active:i}=n;const{code:l}=e.nativeEvent;if(o.start.includes(l)){const c=i.activatorNode.current;return c&&e.target!==c?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function Vs(e){return!!(e&&"distance"in e)}function Ks(e){return!!(e&&"delay"in e)}class Es{constructor(t,n,o){var r;o===void 0&&(o=Uc(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:i}=t,{target:l}=i;this.props=t,this.events=n,this.document=Dt(l),this.documentListeners=new Wt(this.document),this.listeners=new Wt(o),this.windowListeners=new Wt(ge(l)),this.initialCoordinates=(r=Zn(i))!=null?r:ke,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(Se.Resize,this.handleCancel),this.windowListeners.add(Se.DragStart,Us),this.windowListeners.add(Se.VisibilityChange,this.handleCancel),this.windowListeners.add(Se.ContextMenu,Us),this.documentListeners.add(Se.Keydown,this.handleKeydown),n){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Ks(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(Vs(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,n){const{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(Se.Click,Vc,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Se.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:o,initialCoordinates:r,props:i}=this,{onMove:l,options:{activationConstraint:c}}=i;if(!r)return;const d=(n=Zn(t))!=null?n:ke,u=yn(r,d);if(!o&&c){if(Vs(c)){if(c.tolerance!=null&&zn(u,c.tolerance))return this.handleCancel();if(zn(u,c.distance))return this.handleStart()}if(Ks(c)&&zn(u,c.tolerance))return this.handleCancel();this.handlePending(c,u);return}t.cancelable&&t.preventDefault(),l(d)}handleEnd(){const{onAbort:t,onEnd:n}=this.props;this.detach(),this.activated||t(this.props.active),n()}handleCancel(){const{onAbort:t,onCancel:n}=this.props;this.detach(),this.activated||t(this.props.active),n()}handleKeydown(t){t.code===P.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const qc={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Nn extends Es{constructor(t){const{event:n}=t,o=Dt(n.target);super(t,qc,o)}}Nn.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return!n.isPrimary||n.button!==0?!1:(o?.({event:n}),!0)}}];const Xc={move:{name:"mousemove"},end:{name:"mouseup"}};var ts;(function(e){e[e.RightClick=2]="RightClick"})(ts||(ts={}));class Ir extends Es{constructor(t){super(t,Xc,Dt(t.event.target))}}Ir.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return n.button===ts.RightClick?!1:(o?.({event:n}),!0)}}];const Gn={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class Yc extends Es{constructor(t){super(t,Gn)}static setup(){return window.addEventListener(Gn.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Gn.move.name,t)};function t(){}}}Yc.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;const{touches:r}=n;return r.length>1?!1:(o?.({event:n}),!0)}}];var zt;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(zt||(zt={}));var jn;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(jn||(jn={}));function Qc(e){let{acceleration:t,activator:n=zt.Pointer,canScroll:o,draggingRect:r,enabled:i,interval:l=5,order:c=jn.TreeOrder,pointerCoordinates:d,scrollableAncestors:u,scrollableAncestorRects:h,delta:p,threshold:x}=e;const f=Zc({delta:p,disabled:!i}),[m,b]=dc(),C=a.useRef({x:0,y:0}),y=a.useRef({x:0,y:0}),j=a.useMemo(()=>{switch(n){case zt.Pointer:return d?{top:d.y,bottom:d.y,left:d.x,right:d.x}:null;case zt.DraggableRect:return r}},[n,r,d]),v=a.useRef(null),S=a.useCallback(()=>{const k=v.current;if(!k)return;const I=C.current.x*y.current.x,w=C.current.y*y.current.y;k.scrollBy(I,w)},[]),E=a.useMemo(()=>c===jn.TreeOrder?[...u].reverse():u,[c,u]);a.useEffect(()=>{if(!i||!u.length||!j){b();return}for(const k of E){if(o?.(k)===!1)continue;const I=u.indexOf(k),w=h[I];if(!w)continue;const{direction:A,speed:T}=Bc(k,w,j,t,x);for(const _ of["x","y"])f[_][A[_]]||(T[_]=0,A[_]=0);if(T.x>0||T.y>0){b(),v.current=k,m(S,l),C.current=T,y.current=A;return}}C.current={x:0,y:0},y.current={x:0,y:0},b()},[t,S,o,b,i,l,JSON.stringify(j),JSON.stringify(f),m,u,E,h,JSON.stringify(x)])}const Jc={x:{[ne.Backward]:!1,[ne.Forward]:!1},y:{[ne.Backward]:!1,[ne.Forward]:!1}};function Zc(e){let{delta:t,disabled:n}=e;const o=Jn(t);return tn(r=>{if(n||!o||!r)return Jc;const i={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[ne.Backward]:r.x[ne.Backward]||i.x===-1,[ne.Forward]:r.x[ne.Forward]||i.x===1},y:{[ne.Backward]:r.y[ne.Backward]||i.y===-1,[ne.Forward]:r.y[ne.Forward]||i.y===1}}},[n,t,o])}function ed(e,t){const n=t!=null?e.get(t):void 0,o=n?n.node.current:null;return tn(r=>{var i;return t==null?null:(i=o??r)!=null?i:null},[o,t])}function td(e,t){return a.useMemo(()=>e.reduce((n,o)=>{const{sensor:r}=o,i=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...n,...i]},[]),[e,t])}var Kt;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Kt||(Kt={}));var ns;(function(e){e.Optimized="optimized"})(ns||(ns={}));const qs=new Map;function nd(e,t){let{dragging:n,dependencies:o,config:r}=t;const[i,l]=a.useState(null),{frequency:c,measure:d,strategy:u}=r,h=a.useRef(e),p=C(),x=Vt(p),f=a.useCallback(function(y){y===void 0&&(y=[]),!x.current&&l(j=>j===null?y:j.concat(y.filter(v=>!j.includes(v))))},[x]),m=a.useRef(null),b=tn(y=>{if(p&&!n)return qs;if(!y||y===qs||h.current!==e||i!=null){const j=new Map;for(let v of e){if(!v)continue;if(i&&i.length>0&&!i.includes(v.id)&&v.rect.current){j.set(v.id,v.rect.current);continue}const S=v.node.current,E=S?new js(d(S),S):null;v.rect.current=E,E&&j.set(v.id,E)}return j}return y},[e,i,n,p,d]);return a.useEffect(()=>{h.current=e},[e]),a.useEffect(()=>{p||f()},[n,p]),a.useEffect(()=>{i&&i.length>0&&l(null)},[JSON.stringify(i)]),a.useEffect(()=>{p||typeof c!="number"||m.current!==null||(m.current=setTimeout(()=>{f(),m.current=null},c))},[c,p,f,...o]),{droppableRects:b,measureDroppableContainers:f,measuringScheduled:i!=null};function C(){switch(u){case Kt.Always:return!1;case Kt.BeforeDragging:return n;default:return!n}}}function Ar(e,t){return tn(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function sd(e,t){return Ar(e,t)}function od(e){let{callback:t,disabled:n}=e;const o=bs(t),r=a.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:i}=window;return new i(o)},[o,n]);return a.useEffect(()=>()=>r?.disconnect(),[r]),r}function Mn(e){let{callback:t,disabled:n}=e;const o=bs(t),r=a.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:i}=window;return new i(o)},[n]);return a.useEffect(()=>()=>r?.disconnect(),[r]),r}function rd(e){return new js(Nt(e),e)}function Xs(e,t,n){t===void 0&&(t=rd);const[o,r]=a.useState(null);function i(){r(d=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=d??n)!=null?u:null}const h=t(e);return JSON.stringify(d)===JSON.stringify(h)?d:h})}const l=od({callback(d){if(e)for(const u of d){const{type:h,target:p}=u;if(h==="childList"&&p instanceof HTMLElement&&p.contains(e)){i();break}}}}),c=Mn({callback:i});return Be(()=>{i(),e?(c?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(c?.disconnect(),l?.disconnect())},[e]),o}function id(e){const t=Ar(e);return mr(e,t)}const Ys=[];function ad(e){const t=a.useRef(e),n=tn(o=>e?o&&o!==Ys&&e&&t.current&&e.parentNode===t.current.parentNode?o:Ss(e):Ys,[e]);return a.useEffect(()=>{t.current=e},[e]),n}function ld(e){const[t,n]=a.useState(null),o=a.useRef(e),r=a.useCallback(i=>{const l=Wn(i.target);l&&n(c=>c?(c.set(l,es(l)),new Map(c)):null)},[]);return a.useEffect(()=>{const i=o.current;if(e!==i){l(i);const c=e.map(d=>{const u=Wn(d);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,es(u)]):null}).filter(d=>d!=null);n(c.length?new Map(c):null),o.current=e}return()=>{l(e),l(i)};function l(c){c.forEach(d=>{const u=Wn(d);u?.removeEventListener("scroll",r)})}},[r,e]),a.useMemo(()=>e.length?t?Array.from(t.values()).reduce((i,l)=>It(i,l),ke):Sr(e):ke,[e,t])}function Qs(e,t){t===void 0&&(t=[]);const n=a.useRef(null);return a.useEffect(()=>{n.current=null},t),a.useEffect(()=>{const o=e!==ke;o&&!n.current&&(n.current=e),!o&&n.current&&(n.current=null)},[e]),n.current?yn(e,n.current):ke}function cd(e){a.useEffect(()=>{if(!Dn)return;const t=e.map(n=>{let{sensor:o}=n;return o.setup==null?void 0:o.setup()});return()=>{for(const n of t)n?.()}},e.map(t=>{let{sensor:n}=t;return n}))}function dd(e,t){return a.useMemo(()=>e.reduce((n,o)=>{let{eventName:r,handler:i}=o;return n[r]=l=>{i(l,t)},n},{}),[e,t])}function Lr(e){return a.useMemo(()=>e?Mc(e):null,[e])}const Js=[];function ud(e,t){t===void 0&&(t=Nt);const[n]=e,o=Lr(n?ge(n):null),[r,i]=a.useState(Js);function l(){i(()=>e.length?e.map(d=>Cr(d)?o:new js(t(d),d)):Js)}const c=Mn({callback:l});return Be(()=>{c?.disconnect(),l(),e.forEach(d=>c?.observe(d))},[e]),r}function hd(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return en(t)?t:e}function pd(e){let{measure:t}=e;const[n,o]=a.useState(null),r=a.useCallback(u=>{for(const{target:h}of u)if(en(h)){o(p=>{const x=t(h);return p?{...p,width:x.width,height:x.height}:x});break}},[t]),i=Mn({callback:r}),l=a.useCallback(u=>{const h=hd(u);i?.disconnect(),h&&i?.observe(h),o(h?t(h):null)},[t,i]),[c,d]=Cn(l);return a.useMemo(()=>({nodeRef:c,rect:n,setRef:d}),[n,c,d])}const fd=[{sensor:Nn,options:{}},{sensor:Er,options:{}}],gd={current:{}},bn={draggable:{measure:Gs},droppable:{measure:Gs,strategy:Kt.WhileDragging,frequency:ns.Optimized},dragOverlay:{measure:Nt}};class Gt extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,o;return(n=(o=this.get(t))==null?void 0:o.node.current)!=null?n:void 0}}const xd={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Gt,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Sn},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:bn,measureDroppableContainers:Sn,windowRect:null,measuringScheduled:!1},md={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Sn,draggableNodes:new Map,over:null,measureDroppableContainers:Sn},On=a.createContext(md),kr=a.createContext(xd);function bd(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Gt}}}function vd(e,t){switch(t.type){case Z.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Z.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Z.DragEnd:case Z.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Z.RegisterDroppable:{const{element:n}=t,{id:o}=n,r=new Gt(e.droppable.containers);return r.set(o,n),{...e,droppable:{...e.droppable,containers:r}}}case Z.SetDroppableDisabled:{const{id:n,key:o,disabled:r}=t,i=e.droppable.containers.get(n);if(!i||o!==i.key)return e;const l=new Gt(e.droppable.containers);return l.set(n,{...i,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Z.UnregisterDroppable:{const{id:n,key:o}=t,r=e.droppable.containers.get(n);if(!r||o!==r.key)return e;const i=new Gt(e.droppable.containers);return i.delete(n),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function wd(e){let{disabled:t}=e;const{active:n,activatorEvent:o,draggableNodes:r}=a.useContext(On),i=Jn(o),l=Jn(n?.id);return a.useEffect(()=>{if(!t&&!o&&i&&l!=null){if(!vs(i)||document.activeElement===i.target)return;const c=r.get(l);if(!c)return;const{activatorNode:d,node:u}=c;if(!d.current&&!u.current)return;requestAnimationFrame(()=>{for(const h of[d.current,u.current]){if(!h)continue;const p=pc(h);if(p){p.focus();break}}})}},[o,t,r,l,i]),null}function Cd(e,t){let{transform:n,...o}=t;return e!=null&&e.length?e.reduce((r,i)=>i({transform:r,...o}),n):n}function yd(e){return a.useMemo(()=>({draggable:{...bn.draggable,...e?.draggable},droppable:{...bn.droppable,...e?.droppable},dragOverlay:{...bn.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Sd(e){let{activeNode:t,measure:n,initialRect:o,config:r=!0}=e;const i=a.useRef(!1),{x:l,y:c}=typeof r=="boolean"?{x:r,y:r}:r;Be(()=>{if(!l&&!c||!t){i.current=!1;return}if(i.current||!o)return;const u=t?.node.current;if(!u||u.isConnected===!1)return;const h=n(u),p=mr(h,o);if(l||(p.x=0),c||(p.y=0),i.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const x=br(u);x&&x.scrollBy({top:p.y,left:p.x})}},[t,l,c,o,n])}const Rr=a.createContext({...ke,scaleX:1,scaleY:1});var Xe;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Xe||(Xe={}));const Is=a.memo(function(t){var n,o,r,i;let{id:l,accessibility:c,autoScroll:d=!0,children:u,sensors:h=fd,collisionDetection:p=Lc,measuring:x,modifiers:f,...m}=t;const b=a.useReducer(vd,void 0,bd),[C,y]=b,[j,v]=vc(),[S,E]=a.useState(Xe.Uninitialized),k=S===Xe.Initialized,{draggable:{active:I,nodes:w,translate:A},droppable:{containers:T}}=C,_=I!=null?w.get(I):null,H=a.useRef({initial:null,translated:null}),q=a.useMemo(()=>{var ie;return I!=null?{id:I,data:(ie=_?.data)!=null?ie:gd,rect:H}:null},[I,_]),K=a.useRef(null),[te,ce]=a.useState(null),[D,W]=a.useState(null),X=Vt(m,Object.values(m)),Ge=nn("DndDescribedBy",l),ot=a.useMemo(()=>T.getEnabled(),[T]),re=yd(x),{droppableRects:Ee,measureDroppableContainers:Pe,measuringScheduled:Ce}=nd(ot,{dragging:k,dependencies:[A.x,A.y],config:re.droppable}),pe=ed(w,I),xt=a.useMemo(()=>D?Zn(D):null,[D]),_e=Ai(),Ie=sd(pe,re.draggable.measure);Sd({activeNode:I!=null?w.get(I):null,config:_e.layoutShiftCompensation,initialRect:Ie,measure:re.draggable.measure});const F=Xs(pe,re.draggable.measure,Ie),mt=Xs(pe?pe.parentElement:null),Ae=a.useRef({activatorEvent:null,active:null,activeNode:pe,collisionRect:null,collisions:null,droppableRects:Ee,draggableNodes:w,draggingNode:null,draggingNodeRect:null,droppableContainers:T,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),rt=T.getNodeFor((n=Ae.current.over)==null?void 0:n.id),Te=pd({measure:re.dragOverlay.measure}),it=(o=Te.nodeRef.current)!=null?o:pe,at=k?(r=Te.rect)!=null?r:F:null,M=!!(Te.nodeRef.current&&Te.rect),N=id(M?null:F),z=Lr(it?ge(it):null),de=ad(k?rt??pe:null),bt=ud(de),vt=Cd(f,{transform:{x:A.x-N.x,y:A.y-N.y,scaleX:1,scaleY:1},activatorEvent:D,active:q,activeNodeRect:F,containerNodeRect:mt,draggingNodeRect:at,over:Ae.current.over,overlayNodeRect:Te.rect,scrollableAncestors:de,scrollableAncestorRects:bt,windowRect:z}),Mt=xt?It(xt,A):null,on=ld(de),He=Qs(on),Ci=Qs(on,[F]),wt=It(vt,He),Ct=at?_c(at,vt):null,Ot=q&&Ct?p({active:q,collisionRect:Ct,droppableRects:Ee,droppableContainers:ot,pointerCoordinates:Mt}):null,Ts=Ic(Ot,"id"),[Ue,Ds]=a.useState(null),yi=M?vt:It(vt,Ci),Si=kc(yi,(i=Ue?.rect)!=null?i:null,F),Fn=a.useRef(null),Ns=a.useCallback((ie,xe)=>{let{sensor:me,options:Ve}=xe;if(K.current==null)return;const ye=w.get(K.current);if(!ye)return;const be=ie.nativeEvent,De=new me({active:K.current,activeNode:ye,event:be,options:Ve,context:Ae,onAbort(oe){if(!w.get(oe))return;const{onDragAbort:Ne}=X.current,We={id:oe};Ne?.(We),j({type:"onDragAbort",event:We})},onPending(oe,Ke,Ne,We){if(!w.get(oe))return;const{onDragPending:Ft}=X.current,qe={id:oe,constraint:Ke,initialCoordinates:Ne,offset:We};Ft?.(qe),j({type:"onDragPending",event:qe})},onStart(oe){const Ke=K.current;if(Ke==null)return;const Ne=w.get(Ke);if(!Ne)return;const{onDragStart:We}=X.current,$t={activatorEvent:be,active:{id:Ke,data:Ne.data,rect:H}};ht.unstable_batchedUpdates(()=>{We?.($t),E(Xe.Initializing),y({type:Z.DragStart,initialCoordinates:oe,active:Ke}),j({type:"onDragStart",event:$t}),ce(Fn.current),W(be)})},onMove(oe){y({type:Z.DragMove,coordinates:oe})},onEnd:yt(Z.DragEnd),onCancel:yt(Z.DragCancel)});Fn.current=De;function yt(oe){return async function(){const{active:Ne,collisions:We,over:$t,scrollAdjustedTranslate:Ft}=Ae.current;let qe=null;if(Ne&&Ft){const{cancelDrop:Bt}=X.current;qe={activatorEvent:be,active:Ne,collisions:We,delta:Ft,over:$t},oe===Z.DragEnd&&typeof Bt=="function"&&await Promise.resolve(Bt(qe))&&(oe=Z.DragCancel)}K.current=null,ht.unstable_batchedUpdates(()=>{y({type:oe}),E(Xe.Uninitialized),Ds(null),ce(null),W(null),Fn.current=null;const Bt=oe===Z.DragEnd?"onDragEnd":"onDragCancel";if(qe){const Bn=X.current[Bt];Bn?.(qe),j({type:Bt,event:qe})}})}}},[w]),ji=a.useCallback((ie,xe)=>(me,Ve)=>{const ye=me.nativeEvent,be=w.get(Ve);if(K.current!==null||!be||ye.dndKit||ye.defaultPrevented)return;const De={active:be};ie(me,xe.options,De)===!0&&(ye.dndKit={capturedBy:xe.sensor},K.current=Ve,Ns(me,xe))},[w,Ns]),Ms=td(h,ji);cd(h),Be(()=>{F&&S===Xe.Initializing&&E(Xe.Initialized)},[F,S]),a.useEffect(()=>{const{onDragMove:ie}=X.current,{active:xe,activatorEvent:me,collisions:Ve,over:ye}=Ae.current;if(!xe||!me)return;const be={active:xe,activatorEvent:me,collisions:Ve,delta:{x:wt.x,y:wt.y},over:ye};ht.unstable_batchedUpdates(()=>{ie?.(be),j({type:"onDragMove",event:be})})},[wt.x,wt.y]),a.useEffect(()=>{const{active:ie,activatorEvent:xe,collisions:me,droppableContainers:Ve,scrollAdjustedTranslate:ye}=Ae.current;if(!ie||K.current==null||!xe||!ye)return;const{onDragOver:be}=X.current,De=Ve.get(Ts),yt=De&&De.rect.current?{id:De.id,rect:De.rect.current,data:De.data,disabled:De.disabled}:null,oe={active:ie,activatorEvent:xe,collisions:me,delta:{x:ye.x,y:ye.y},over:yt};ht.unstable_batchedUpdates(()=>{Ds(yt),be?.(oe),j({type:"onDragOver",event:oe})})},[Ts]),Be(()=>{Ae.current={activatorEvent:D,active:q,activeNode:pe,collisionRect:Ct,collisions:Ot,droppableRects:Ee,draggableNodes:w,draggingNode:it,draggingNodeRect:at,droppableContainers:T,over:Ue,scrollableAncestors:de,scrollAdjustedTranslate:wt},H.current={initial:at,translated:Ct}},[q,pe,Ot,Ct,w,it,at,Ee,T,Ue,de,wt]),Qc({..._e,delta:A,draggingRect:Ct,pointerCoordinates:Mt,scrollableAncestors:de,scrollableAncestorRects:bt});const Ei=a.useMemo(()=>({active:q,activeNode:pe,activeNodeRect:F,activatorEvent:D,collisions:Ot,containerNodeRect:mt,dragOverlay:Te,draggableNodes:w,droppableContainers:T,droppableRects:Ee,over:Ue,measureDroppableContainers:Pe,scrollableAncestors:de,scrollableAncestorRects:bt,measuringConfiguration:re,measuringScheduled:Ce,windowRect:z}),[q,pe,F,D,Ot,mt,Te,w,T,Ee,Ue,Pe,de,bt,re,Ce,z]),Ii=a.useMemo(()=>({activatorEvent:D,activators:Ms,active:q,activeNodeRect:F,ariaDescribedById:{draggable:Ge},dispatch:y,draggableNodes:w,over:Ue,measureDroppableContainers:Pe}),[D,Ms,q,F,y,Ge,w,Ue,Pe]);return fe.createElement(xr.Provider,{value:v},fe.createElement(On.Provider,{value:Ii},fe.createElement(kr.Provider,{value:Ei},fe.createElement(Rr.Provider,{value:Si},u)),fe.createElement(wd,{disabled:c?.restoreFocus===!1})),fe.createElement(yc,{...c,hiddenTextDescribedById:Ge}));function Ai(){const ie=te?.autoScrollEnabled===!1,xe=typeof d=="object"?d.enabled===!1:d===!1,me=k&&!ie&&!xe;return typeof d=="object"?{...d,enabled:me}:{enabled:me}}}),jd=a.createContext(null),Zs="button",Ed="Draggable";function Id(e){let{id:t,data:n,disabled:o=!1,attributes:r}=e;const i=nn(Ed),{activators:l,activatorEvent:c,active:d,activeNodeRect:u,ariaDescribedById:h,draggableNodes:p,over:x}=a.useContext(On),{role:f=Zs,roleDescription:m="draggable",tabIndex:b=0}=r??{},C=d?.id===t,y=a.useContext(C?Rr:jd),[j,v]=Cn(),[S,E]=Cn(),k=dd(l,t),I=Vt(n);Be(()=>(p.set(t,{id:t,key:i,node:j,activatorNode:S,data:I}),()=>{const A=p.get(t);A&&A.key===i&&p.delete(t)}),[p,t]);const w=a.useMemo(()=>({role:f,tabIndex:b,"aria-disabled":o,"aria-pressed":C&&f===Zs?!0:void 0,"aria-roledescription":m,"aria-describedby":h.draggable}),[o,f,b,C,m,h.draggable]);return{active:d,activatorEvent:c,activeNodeRect:u,attributes:w,isDragging:C,listeners:o?void 0:k,node:j,over:x,setNodeRef:v,setActivatorNodeRef:E,transform:y}}function Ad(){return a.useContext(kr)}const Ld="Droppable",kd={timeout:25};function Rd(e){let{data:t,disabled:n=!1,id:o,resizeObserverConfig:r}=e;const i=nn(Ld),{active:l,dispatch:c,over:d,measureDroppableContainers:u}=a.useContext(On),h=a.useRef({disabled:n}),p=a.useRef(!1),x=a.useRef(null),f=a.useRef(null),{disabled:m,updateMeasurementsFor:b,timeout:C}={...kd,...r},y=Vt(b??o),j=a.useCallback(()=>{if(!p.current){p.current=!0;return}f.current!=null&&clearTimeout(f.current),f.current=setTimeout(()=>{u(Array.isArray(y.current)?y.current:[y.current]),f.current=null},C)},[C]),v=Mn({callback:j,disabled:m||!l}),S=a.useCallback((w,A)=>{v&&(A&&(v.unobserve(A),p.current=!1),w&&v.observe(w))},[v]),[E,k]=Cn(S),I=Vt(t);return a.useEffect(()=>{!v||!E.current||(v.disconnect(),p.current=!1,v.observe(E.current))},[E,v]),a.useEffect(()=>(c({type:Z.RegisterDroppable,element:{id:o,key:i,disabled:n,node:E,rect:x,data:I}}),()=>c({type:Z.UnregisterDroppable,key:i,id:o})),[o]),a.useEffect(()=>{n!==h.current.disabled&&(c({type:Z.SetDroppableDisabled,id:o,key:i,disabled:n}),h.current.disabled=n)},[o,i,n,c]),{active:l,rect:x,isOver:d?.id===o,node:E,over:d,setNodeRef:k}}function sn(e,t,n){const o=e.slice();return o.splice(n<0?o.length+n:n,0,o.splice(t,1)[0]),o}function _d(e,t){return e.reduce((n,o,r)=>{const i=t.get(o);return i&&(n[r]=i),n},Array(e.length))}function cn(e){return e!==null&&e>=0}function Td(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Dd(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const _r=e=>{let{rects:t,activeIndex:n,overIndex:o,index:r}=e;const i=sn(t,o,n),l=t[r],c=i[r];return!c||!l?null:{x:c.left-l.left,y:c.top-l.top,scaleX:c.width/l.width,scaleY:c.height/l.height}},dn={scaleX:1,scaleY:1},As=e=>{var t;let{activeIndex:n,activeNodeRect:o,index:r,rects:i,overIndex:l}=e;const c=(t=i[n])!=null?t:o;if(!c)return null;if(r===n){const u=i[l];return u?{x:0,y:n<l?u.top+u.height-(c.top+c.height):u.top-c.top,...dn}:null}const d=Nd(i,r,n);return r>n&&r<=l?{x:0,y:-c.height-d,...dn}:r<n&&r>=l?{x:0,y:c.height+d,...dn}:{x:0,y:0,...dn}};function Nd(e,t,n){const o=e[t],r=e[t-1],i=e[t+1];return o?n<t?r?o.top-(r.top+r.height):i?i.top-(o.top+o.height):0:i?i.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}const Tr="Sortable",Dr=fe.createContext({activeIndex:-1,containerId:Tr,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:_r,disabled:{draggable:!1,droppable:!1}});function Ls(e){let{children:t,id:n,items:o,strategy:r=_r,disabled:i=!1}=e;const{active:l,dragOverlay:c,droppableRects:d,over:u,measureDroppableContainers:h}=Ad(),p=nn(Tr,n),x=c.rect!==null,f=a.useMemo(()=>o.map(k=>typeof k=="object"&&"id"in k?k.id:k),[o]),m=l!=null,b=l?f.indexOf(l.id):-1,C=u?f.indexOf(u.id):-1,y=a.useRef(f),j=!Td(f,y.current),v=C!==-1&&b===-1||j,S=Dd(i);Be(()=>{j&&m&&h(f)},[j,f,m,h]),a.useEffect(()=>{y.current=f},[f]);const E=a.useMemo(()=>({activeIndex:b,containerId:p,disabled:S,disableTransforms:v,items:f,overIndex:C,useDragOverlay:x,sortedRects:_d(f,d),strategy:r}),[b,p,S.draggable,S.droppable,v,f,C,d,x,r]);return fe.createElement(Dr.Provider,{value:E},t)}const Md=e=>{let{id:t,items:n,activeIndex:o,overIndex:r}=e;return sn(n,o,r).indexOf(t)},Od=e=>{let{containerId:t,isSorting:n,wasDragging:o,index:r,items:i,newIndex:l,previousItems:c,previousContainerId:d,transition:u}=e;return!u||!o||c!==i&&r===l?!1:n?!0:l!==r&&t===d},$d={duration:200,easing:"ease"},Nr="transform",Fd=ft.Transition.toString({property:Nr,duration:0,easing:"linear"}),Bd={roleDescription:"sortable"};function Pd(e){let{disabled:t,index:n,node:o,rect:r}=e;const[i,l]=a.useState(null),c=a.useRef(n);return Be(()=>{if(!t&&n!==c.current&&o.current){const d=r.current;if(d){const u=Nt(o.current,{ignoreTransform:!0}),h={x:d.left-u.left,y:d.top-u.top,scaleX:d.width/u.width,scaleY:d.height/u.height};(h.x||h.y)&&l(h)}}n!==c.current&&(c.current=n)},[t,n,o,r]),a.useEffect(()=>{i&&l(null)},[i]),i}function $n(e){let{animateLayoutChanges:t=Od,attributes:n,disabled:o,data:r,getNewIndex:i=Md,id:l,strategy:c,resizeObserverConfig:d,transition:u=$d}=e;const{items:h,containerId:p,activeIndex:x,disabled:f,disableTransforms:m,sortedRects:b,overIndex:C,useDragOverlay:y,strategy:j}=a.useContext(Dr),v=Hd(o,f),S=h.indexOf(l),E=a.useMemo(()=>({sortable:{containerId:p,index:S,items:h},...r}),[p,r,S,h]),k=a.useMemo(()=>h.slice(h.indexOf(l)),[h,l]),{rect:I,node:w,isOver:A,setNodeRef:T}=Rd({id:l,data:E,disabled:v.droppable,resizeObserverConfig:{updateMeasurementsFor:k,...d}}),{active:_,activatorEvent:H,activeNodeRect:q,attributes:K,setNodeRef:te,listeners:ce,isDragging:D,over:W,setActivatorNodeRef:X,transform:Ge}=Id({id:l,data:E,attributes:{...Bd,...n},disabled:v.draggable}),ot=cc(T,te),re=!!_,Ee=re&&!m&&cn(x)&&cn(C),Pe=!y&&D,Ce=Pe&&Ee?Ge:null,xt=Ee?Ce??(c??j)({rects:b,activeNodeRect:q,activeIndex:x,overIndex:C,index:S}):null,_e=cn(x)&&cn(C)?i({id:l,items:h,activeIndex:x,overIndex:C}):S,Ie=_?.id,F=a.useRef({activeId:Ie,items:h,newIndex:_e,containerId:p}),mt=h!==F.current.items,Ae=t({active:_,containerId:p,isDragging:D,isSorting:re,id:l,index:S,items:h,newIndex:F.current.newIndex,previousItems:F.current.items,previousContainerId:F.current.containerId,transition:u,wasDragging:F.current.activeId!=null}),rt=Pd({disabled:!Ae,index:S,node:w,rect:I});return a.useEffect(()=>{re&&F.current.newIndex!==_e&&(F.current.newIndex=_e),p!==F.current.containerId&&(F.current.containerId=p),h!==F.current.items&&(F.current.items=h)},[re,_e,p,h]),a.useEffect(()=>{if(Ie===F.current.activeId)return;if(Ie&&!F.current.activeId){F.current.activeId=Ie;return}const it=setTimeout(()=>{F.current.activeId=Ie},50);return()=>clearTimeout(it)},[Ie]),{active:_,activeIndex:x,attributes:K,data:E,rect:I,index:S,newIndex:_e,items:h,isOver:A,isSorting:re,isDragging:D,listeners:ce,node:w,overIndex:C,over:W,setNodeRef:ot,setActivatorNodeRef:X,setDroppableNodeRef:T,setDraggableNodeRef:te,transform:rt??xt,transition:Te()};function Te(){if(rt||mt&&F.current.newIndex===S)return Fd;if(!(Pe&&!vs(H)||!u)&&(re||Ae))return ft.Transition.toString({...u,property:Nr})}}function Hd(e,t){var n,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e?.draggable)!=null?n:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}P.Down,P.Right,P.Up,P.Left;class Wd extends Error{}const zd=()=>{Le({type:"incorrect",label:"Cannot make changes",sub:"Please unpublish the project before making changes"})},ae=e=>{if(e)throw zd(),new Wd("Please unpublish the project before making changes")},st=e=>e?.spaceVisibility!==va.Invisible,Oe=({refetchHandler:e,label:t="Saved!"})=>()=>{Le({label:t,type:"correct"}),e&&e()},$e=e=>{Le({label:"Error updating course",type:"incorrect",sub:e?.data?.message||"Check console"}),console.error(e)},Gd=()=>{const{refetchCourse:e,course:t}=he(),[n]=J.useReorderChaptersMutation(),[o,r]=a.useState(t?.chapters??[]),i=_t(),l=a.useRef(!1),c=a.useMemo(()=>o.map(p=>p._id),[o]),d=st(t),u=i(()=>n({chaptersIds:c,courseId:t?._id??""}).unwrap().then(Oe({refetchHandler:e})).catch($e),500);return a.useEffect(()=>{t&&r(t.chapters)},[t]),a.useEffect(()=>{l.current&&(l.current=!1,u())},[c]),{handleDragEnd:p=>{const{active:x,over:f}=p;ae(d),l.current||(l.current=!0),f&&x.id!==f.id&&r(m=>{const b=m.findIndex(y=>y._id===x.id),C=m.findIndex(y=>y._id===f.id);return sn(m,b,C)})},chapters:o,chaptersOrder:c}},Ud=({chapterId:e,lessons:t})=>{const{refetchCourse:n,course:o}=he(),[r]=J.useReorderLessonsMutation(),[i,l]=a.useState(t),c=_t(),d=a.useRef(!1),u=a.useMemo(()=>i.map(f=>f._id),[i]),h=st(o),p=c(()=>r({lessonsIds:u,chapterId:e}).unwrap().then(Oe({refetchHandler:n})).catch($e),500);return a.useEffect(()=>{d.current&&(d.current=!1,p())},[i]),a.useEffect(()=>{l(t)},[t]),{handleDragEnd:f=>{const{active:m,over:b}=f;ae(h),d.current||(d.current=!0),b&&m.id!==b.id&&l(C=>{const y=C.findIndex(v=>v._id===m.id),j=C.findIndex(v=>v._id===b.id);return sn(C,y,j)})},lessons:i,lessonsOrder:u}},Vd=({chapter:e})=>{const{lessonId:t}=Re(),{refetchCourse:n,course:o}=he(),[r,{isLoading:i}]=J.useDeleteChapterMutation(),[l,{isLoading:c}]=J.useUpdateChapterMutation(),[d,{isLoading:u}]=J.useToggleLockChapterMutation(),h=st(o),p=i||c||u,x=a.useMemo(()=>e.lessons.some(C=>C._id===t),[t,e]);return{isLoading:p,handleDeleteChapter:()=>{ae(h),x&&Le({label:"Deleting the chapter you are currrently in",type:"declined"}),r(e._id).unwrap().then(Oe({refetchHandler:n,label:"Chapter deleted"})).catch($e)},handleToggleChapterLock:()=>{ae(h),d({chapterId:e._id}).unwrap().then(Oe({refetchHandler:n})).catch($e)},handleUpdateChapter:(C,y)=>{ae(h);const j=e.lessons.map(k=>k._id),{isLocked:v,...S}=e,E=()=>{n(),y&&y()};l({chapterId:e._id,dto:{...S,name:C,lessons:j}}).unwrap().then(Oe({refetchHandler:E})).catch($e)}}},Kd=({lesson:e})=>{const{lessonId:t}=Re(),{refetchCourse:n,course:o}=he(),[r,{isLoading:i}]=J.useDeleteLessonMutation(),[l,{isLoading:c}]=J.useUpdateLessonMutation(),[d,{isLoading:u}]=J.useToggleLockLessonMutation(),h=st(o);return{isLoading:i||c||u,handleDeleteLesson:()=>{ae(h),t===e._id&&Le({label:"Deleting the lesson you are currently in",type:"declined"}),r(e._id).unwrap().then(Oe({refetchHandler:n,label:"Lesson deleted"})).catch($e)},handleToggleLessonLock:()=>{ae(h),d({lessonId:e._id}).unwrap().then(Oe({refetchHandler:n})).catch($e)},handleUpdateLesson:(b,C)=>{ae(h);const{isLocked:y,...j}=e,v=()=>{n(),C&&C()};l({lessonId:e._id,dto:{...j,name:b}}).unwrap().then(Oe({refetchHandler:v})).catch($e)}}},qd=({lesson:e})=>{const{lessonId:t,spaceName:n}=Re(),{isOpen:o,open:r,close:i}=ee(),{isOpen:l,close:c,open:d}=ee(),{isOpen:u,close:h,open:p}=ee(),x=et(),{handleDeleteLesson:f,handleToggleLessonLock:m,handleUpdateLesson:b,isLoading:C}=Kd({lesson:e}),y=K=>b(K,()=>{h(),c()}),j=K=>{K.defaultPrevented||r()},{isLocked:v}=e,{setNodeRef:S,transform:E,transition:k,attributes:I,listeners:w,isDragging:A}=$n({id:e._id}),T={transform:ft.Translate.toString(E),transition:k},_=a.useMemo(()=>l||A?s.jsx(mn,{variants:Pn,initial:"initial",animate:"animate",exit:"exit",onClick:j,children:s.jsx(os,{})},"lesson-dnd-dots"):e.isLocked?s.jsx(mn,{variants:Pn,initial:"initial",animate:"animate",exit:"exit",children:s.jsx(Eo,{})},"lesson-lock"):s.jsx(mn,{variants:Pn,initial:"initial",animate:"animate",exit:"exit",children:s.jsx(Io,{})},"lesson-circle"),[l,e.isLocked,A]),H=e._id===t,q=()=>{if(n){x(`/${n}/lesson/${e._id}`);return}x(`/courses/edit/lessons/${e._id}`)};return u?s.jsx(Mr,{defaultValue:e.name,onClose:h,disabled:C,onSubmit:y}):s.jsxs(hr,{style:{...T,zIndex:A?999:void 0},ref:S,onMouseEnter:d,onMouseLeave:c,className:B({isActive:H,isDragging:A}),children:[s.jsx(ur,{containerClassName:"menu",isOpen:o,items:[{label:v?"Unlock Lesson":"Lock Lesson",icon:v?s.jsx(Ao,{}):s.jsx(Lo,{}),onClick:m},{label:"Edit Name",icon:s.jsx(rs,{}),onClick:p},{label:"Delete Lesson",icon:s.jsx(tt,{}),onClick:f,className:"delete"}],onClose:i}),s.jsx(pr,{...I,...w,children:s.jsx(je,{exitBeforeEnter:!0,children:_})}),s.jsx("p",{onClick:q,style:{width:"100%"},children:e.name})]})},Mr=({defaultValue:e,onSubmit:t,onClose:n,disabled:o})=>s.jsxs(hr,{children:[s.jsx(pr,{children:s.jsx(mn,{children:s.jsx(Io,{})})}),s.jsx(lc,{children:s.jsx(gs,{defaultValue:e,onSubmit:t,onClose:n,disabled:o})})]}),Xd=g.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Yd=g.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 4px;
  position: relative;
`,Qd=g.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 4px;
  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--font-color-strong);
  transition: 0.3s;
  cursor: pointer;
  margin-left: auto;
  & > svg {
    width: 24px;
    min-width: 24px;
    height: 24px;
    &.lock {
      margin-left: auto;
    }
  }
  & > p {
    min-height: 24px;
    line-height: 100%;
    display: flex;
    align-items: center;
  }
`,Jd=g.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ffffff1a;
  gap: 16px;
`,Zd=g.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding-left: 10px;
`,eu=({isOpen:e,onClick:t,chapter:n,attributes:o,listeners:r,isDragging:i})=>{const{isOpen:l,open:c,close:d}=ee(),{isOpen:u,close:h,open:p}=ee(),{isOpen:x,close:f,open:m}=ee(),{isLocked:b,name:C}=n,{handleDeleteChapter:y,handleToggleChapterLock:j,handleUpdateChapter:v,isLoading:S}=Vd({chapter:n}),E=w=>v(w,()=>{f(),h()}),k=w=>{w.defaultPrevented||c()},I=u||i;return s.jsxs(Yd,{onMouseEnter:p,onMouseLeave:h,children:[s.jsx(ur,{disabled:S,isOpen:l,items:[{label:b?"Unlock Chapter":"Lock Chapter",icon:b?s.jsx(Ao,{}):s.jsx(Lo,{}),onClick:j},{label:"Edit Name",icon:s.jsx(rs,{}),onClick:m},{label:"Delete Chapter",icon:s.jsx(tt,{}),className:"delete",onClick:y}],onClose:d}),x?s.jsx(gs,{defaultValue:n.name,onClose:f,disabled:S,onSubmit:E,toUpperCase:!0}):s.jsxs(s.Fragment,{children:[s.jsx(je,{children:I&&s.jsx(wa,{...o,onClick:k,...r,variants:Ca,initial:"initial",animate:"animate",exit:"initial",children:s.jsx(os,{})})}),s.jsxs(Qd,{className:B({isLocked:b}),onClick:t,children:[s.jsx("p",{children:C}),b&&s.jsx(Eo,{className:"lock"}),s.jsx(Tn,{className:B({isOpen:e,noMargin:b})})]})]})]})},tu=({chapter:e,isOpenDefault:t=!1})=>{const{refetchCourse:n,course:o}=he(),{isOpen:r,toggle:i}=ee(t),{setNodeRef:l,transform:c,transition:d,attributes:u,listeners:h,isDragging:p}=$n({id:e._id}),[x,{isLoading:f}]=J.useAddLessonMutation(),[m,b]=a.useState(!1),C=st(o),y=()=>{n(),b(!1)},j=w=>{w&&(ae(C),x({chapterId:e._id,name:w}).unwrap().then(Oe({refetchHandler:y})).catch($e))},v={transform:ft.Translate.toString(c),transition:d},S=Cs(ws(Nn,{activationConstraint:{distance:8}})),{handleDragEnd:E,lessons:k,lessonsOrder:I}=Ud({chapterId:e._id,lessons:e.lessons});return s.jsxs(Xd,{ref:l,style:{...v,zIndex:p?999:void 0},children:[s.jsx(eu,{attributes:u,listeners:h,isOpen:r,onClick:i,chapter:e,isDragging:p}),s.jsx(ds,{className:B({isOpen:r}),style:r?{overflow:"visible"}:void 0,children:s.jsx("div",{style:r?{overflow:"visible"}:void 0,children:s.jsxs(Jd,{children:[s.jsx(Is,{onDragEnd:E,collisionDetection:ys,sensors:S,children:s.jsx(Ls,{items:I,strategy:As,children:k.map(w=>s.jsx(qd,{lesson:w},`less${w._id}`))})}),s.jsx(je,{children:m?s.jsx(Mr,{onSubmit:j,onClose:()=>b(!1),disabled:f}):s.jsx(Zd,{children:s.jsx(dr,{onClick:()=>b(!0),label:"Lesson"})})})]})})})]})},nu=()=>{const{course:e,isLoading:t}=he();return!e||t?null:s.jsx(rc,{children:s.jsx(su,{})})},su=()=>{const{lessonId:e}=Re(),{course:t,refetchCourse:n}=he(),{chapters:o,chaptersOrder:r,handleDragEnd:i}=Gd(),[l,{isLoading:c}]=J.useCreateChapterMutation(),[d,u]=a.useState(!1),h=st(t),p=Cs(ws(Nn,{activationConstraint:{distance:8}})),x=()=>{n(),u(!1)},f=b=>{!t||!b||(ae(h),l({courseId:t._id,name:b}).unwrap().then(Oe({refetchHandler:x})).catch($e))},m=a.useMemo(()=>o.find(b=>b.lessons.find(C=>C._id===e))?._id||"",[e,o]);return s.jsx(Is,{onDragEnd:i,collisionDetection:ys,sensors:p,children:s.jsx(Ls,{items:r,strategy:As,children:s.jsxs(ic,{children:[o.map(b=>{const C=m===b._id;return s.jsx(tu,{chapter:b,isOpenDefault:C},`chap${b._id}`)}),s.jsx(je,{children:d?s.jsx(gs,{disabled:c,onClose:()=>u(!1),onSubmit:f}):s.jsx(ac,{children:s.jsx(dr,{onClick:()=>u(!0),label:"Chapter"})})})]})})})},ou=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: #1c1d26;
  padding: 104px 0px 200px; // page padding + course contents width + gap between
  overflow: auto;
  &.light {
    background: white;
  }
`,ru=e=>ve(e),iu=e=>{const{_id:t}=is(),{space:n,isLoading:o}=us(),{isAbleToEdit:r}=Go(n??null);return{isAllowed:a.useMemo(()=>e.includes(t)||r,[e,t,r]),isSpaceLoading:o}};var R=(e=>(e.MAIL="Send the Email",e.WEBSITE="Visit the website",e.YT_WATCH="Watch a video on YouTube",e.YT_VISIT="Visit a Channel on YouTube",e.FACEBOOK="Visit a page on Facebook",e.X_FOLLOW="Follow X",e.X_LIKE="Like a Tweet",e.X_RETWEET="Retweet",e.DISCORD="Join Discord",e.INSTAGRAM_VISIT="Visit a profile/post/reels/story",e.INSTAGRAM_SAVE="Save a profile/post/reels/story",e.INSTAGRAM_COMMENT="Comment a profile/post/reels/story",e.INSTAGRAM_LIKE="Like a profile/post/reels/story",e.TIKTOK="Visit our TikTok",e.TELEGRAM="Join Telegram",e.ONCHAIN_DEPOSIT="Deposit tokens to your wallet",e.ONCHAIN_BRIDGE_TON_ETH="Bridge yourself ETH tokens",e.ONCHAIN_BRIDGE_TON_BSC="Bridge yourself BSC tokens",e.ONCHAIN_TOKEN_BALANCE_ETHENA_USDE="Deposit Ethena USDe token to your wallet",e.SOLANA_HOLD="Hold 0.1 SOL in your wallet",e))(R||{});const Q=e=>`{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"bold"}],"text":"${e}"}]}]}`,au={[R.MAIL]:{title:"Task",content:Q("Send the Email"),icon:Y.MAIL,color:"#FDFDFD"},[R.WEBSITE]:{title:"Task",content:Q("Visit the website"),icon:Y.WEBSITE,color:"#FDFDFD"},[R.YT_WATCH]:{title:"Task",content:Q("Watch a video on YouTube"),icon:Y.YOUTUBE,color:"#FF0209"},[R.YT_VISIT]:{title:"Task",content:Q("Visit a channel on YouTube"),icon:Y.YOUTUBE,color:"#FF0209"},[R.FACEBOOK]:{title:"Task",content:Q("Visit a page on Facebook"),icon:Y.FACEBOOK,color:"#1877F2"},[R.X_FOLLOW]:{title:"Task",content:Q("Follow X"),icon:Y.TWITTER,color:"#1D9BF0"},[R.X_LIKE]:{title:"Task",content:Q("Like a Tweet"),icon:Y.TWITTER,color:"#1D9BF0"},[R.X_RETWEET]:{title:"Task",content:Q("Retweet a Tweet"),icon:Y.TWITTER,color:"#1D9BF0"},[R.DISCORD]:{title:"Task",content:Q("Join Discord"),icon:Y.DISCORD,color:"#5765F2"},[R.INSTAGRAM_VISIT]:{title:"Task",content:Q("Visit a profile"),icon:Y.INSTAGRAM,color:"#E226A8"},[R.INSTAGRAM_SAVE]:{title:"Task",content:Q("Save a profile"),icon:Y.INSTAGRAM,color:"#E226A8"},[R.INSTAGRAM_COMMENT]:{title:"Task",content:Q("Comment a profile"),icon:Y.INSTAGRAM,color:"#E226A8"},[R.INSTAGRAM_LIKE]:{title:"Task",content:Q("Like a profile"),icon:Y.INSTAGRAM,color:"#E226A8"},[R.TELEGRAM]:{title:"Task",content:Q("Join Telegram"),icon:Y.TELEGRAM,color:"#29A9EB"},[R.TIKTOK]:{title:"Task",content:Q("Visit our TikTok"),icon:Y.TIKTOK,color:"#25f4ee"},[R.ONCHAIN_BRIDGE_TON_ETH]:{title:"Task",content:Q(R.ONCHAIN_BRIDGE_TON_ETH),icon:Y.TON,color:"#29A9EB",link:"https://bridge.ton.org",taskType:rn.TONBridgeETH},[R.ONCHAIN_BRIDGE_TON_BSC]:{title:"Task",content:Q(R.ONCHAIN_BRIDGE_TON_BSC),icon:Y.TON,color:"#29A9EB",link:"https://bridge.ton.org",taskType:rn.TONBridgeBSC},[R.ONCHAIN_DEPOSIT]:{title:"Task",content:Q(R.ONCHAIN_DEPOSIT),icon:Y.TON,color:"#29A9EB",taskType:rn.TONDeposit},[R.ONCHAIN_TOKEN_BALANCE_ETHENA_USDE]:{title:"Task",content:Q(R.ONCHAIN_TOKEN_BALANCE_ETHENA_USDE),icon:Y.TON,color:"#29A9EB",taskType:rn.TONTokenBalance},[R.SOLANA_HOLD]:{title:"Task",content:Q(R.SOLANA_HOLD),icon:Y.SOLANA,color:"#a266de",taskType:ya.HoldSOL}},lu=()=>{const{course:e}=he(),t=st(e),{slides:n}=ru(M=>M.coursesConstructor),{lessonId:o=""}=Re(),r=ki(),i=et(),l=_t(),c=Rn(),[d,{isLoading:u}]=J.useCreateSlideMutation(),[h,{isLoading:p}]=J.useUpdateSlideMutation(),[x,{isLoading:f}]=J.useDuplicateSlideMutation(),[m,{isLoading:b}]=J.useDeleteSlideMutation(),[C,{isLoading:y}]=J.useAddAttachmentMutation(),[j,{isLoading:v}]=J.useDeleteAttachmentMutation(),[S,{isLoading:E}]=J.useReorderSlidesMutation(),{data:k,isLoading:I,isFetching:w,isError:A,refetch:T}=J.useFetchSlidesQuery(o,{refetchOnMountOrArgChange:!0}),{data:_,isLoading:H}=J.useFetchRewardsQuery({id:o||"",subject:"lesson"},{refetchOnMountOrArgChange:!0}),q=u||p||f||b||y||v||E||I||H,K=k?.breadcrumbs,te=k?.authors??[],[ce,D]=a.useState(""),W=a.useRef(!0),X=()=>D(Date.now().toString());a.useEffect(()=>{!W.current||!k||(D(k.lastUpdatedAt),W.current=!1)},[k]);const{isAllowed:Ge,isSpaceLoading:ot}=iu(te),re=a.useMemo(()=>n.filter(M=>M.typeOfSlide!==O.INFO).map(M=>M._id),[n]),Ee=_?.totalRewards??[],Pe=c.map(M=>({...M,quantity:Ee.find(N=>N.id===M.id)?.quantity??0}));a.useEffect(()=>{te.length>0&&!Ge&&!ot&&i(_n.COURSES_ADMIN_LIST)},[te,Ge,ot]);const Ce=(M,N)=>{console.error(N),At.error(s.jsx(Lt,{label:M,subtext:N?.data?.message,type:"incorrect"}))},pe=l(M=>{M._id===jt&&d(M).unwrap().then(X).catch(N=>{Ce("Error on slide create",N),r(lt.deleteSlide({slideId:jt}))})},200),xt=M=>({widget:N})=>()=>{ae(t);let z;if(N&&(z={type:N.type,preset:N.preset,content:"",id:Ll()},N.taskPreset)){const de=au[N.taskPreset];z={...z,...de}}r(lt.createEmptyInfoSlide({index:M+1,lessonId:o,widget:z}))},_e=M=>N=>{ae(t),r(lt.createEmptyTestSlide({type:N,lessonId:o,slideIndex:M+1,name:"Slide "+(n.length+1)}))},Ie=M=>()=>{ae(t),m(M).unwrap().then(X).catch(N=>{Ce("Error deleting slide",N)})},F=l(M=>{const N=n.find(z=>z._id===M._id);N&&(r(lt.updateSlide(M)),h(M).unwrap().then(X).catch(z=>{Ce("Error updating slide",z),r(lt.updateSlide(N))}))},1900);return{slides:n,isLoading:q,isCreateSlideLoading:u,isSlideUpdating:p,isDuplicationLoading:f,isDeleting:b,isAddAttachmentLoading:y,isDeleteAttachmentLoading:v,isReordering:E,isSlidesLoading:I,isAllRewardsLoading:H,slidesData:k,allRewardsData:_,isError:A,breadcrumbs:K,allRewards:Pe,lastUpdated:ce,isRefetchingSlides:w,testSlidesIds:re,handleCreateEmptyTestSlide:_e,handleDeleteSlide:Ie,handleUpdateSlide:F,handleAddAttachment:async M=>await C(M).unwrap().then(N=>(X(),N)).catch(N=>{Ce("Error uploading attachment",N)}),handleDeleteAttachment:async M=>{await j(M),X(),At.info(s.jsx(Lt,{label:"Attachment deleted"}),{autoClose:2500,toastId:"attachmentDeleted"})},handleDuplicateSlide:M=>()=>{const N=n[M];ae(t),N&&x({...N,slideIndex:M}).unwrap().then(X).catch(z=>{Ce("Error duplicating slide",z)})},handleDragEnd:M=>{const{active:N,over:z}=M;if(ae(t),!z||N.id===z.id)return;const de=[...n],bt=de.findIndex(He=>He._id===N.id),vt=de.findIndex(He=>He._id===z.id),Mt=sn(de,bt,vt),on=Mt.map(He=>He._id);r(lt.reorderSlides(Mt)),S({lessonId:o,slidesIds:on}).unwrap().then(X).catch(He=>{r(lt.reorderSlides(de)),Ce("Error reordering slides",He)})},toggleAnyCorrect:M=>{const N=n.find(z=>z._id===M);if(N){const z=structuredClone(N);z.slideType.isAnyCorrect=!N?.slideType.isAnyCorrect,F(z)}},toggleIsOptional:M=>{const N=n.find(z=>z._id===M);if(N){const z=structuredClone(N);z.slideType.isOptional=!N?.slideType.isOptional,F(z)}},refetchSlides:T,handleSaveCreatedSlide:pe,handleCreateEmptyInfoSlide:xt}},Or=a.createContext(null),se=()=>a.useContext(Or),$r=g.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Fr=g.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 100px;
`,Br=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`,Pr=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  border-radius: 2px;
  height: 28px;
  background: ${e=>e.$theme===V.LIGHT?"#1111111a":"#1c1d26"};
  font-size: 16px;
  font-weight: 400;
  color: white;
  width: fit-content;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`,Hr=g.div`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  padding: 26px 20px;
  background: ${e=>e.$theme===V.LIGHT?"#11111112":"#ffffff12"};
  border-radius: 4px;
`,Wr=g.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`,zr=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`,Gr=g.p`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.$theme===V.LIGHT?"#111111":"#ffffff"};
  line-height: 100%;
`,Ur=g.p`
  color: ${e=>e.$theme===V.LIGHT?"#11111166":"#afb4b8"};
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
`,Vr=g.p`
  opacity: 40%;
  color: ${e=>e.$theme===V.LIGHT?"#111111":"#afb4b8"};
  font-size: 14px;
  line-height: 100%;
  font-weight: 40;
`,En=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: ${e=>e.$nm?0:"20px"};
`,Kr=g(we.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`,eo={[V.LIGHT]:{question:"#627eea;",answer:"#111"},[V.DARK]:{question:"#B1BFF5",answer:"#FFFFFF"}},to={[V.LIGHT]:{question:"#627EEA40",answer:"#FFFFFF26"},[V.DARK]:{question:"#627EEA40",answer:"#FFFFFF26"}},In=g.div`
  color: ${e=>e.$isQuestion?eo[e.$theme].question:eo[e.$theme].answer};
  background: ${e=>e.$isQuestion?to[e.$theme].question:to[e.$theme].answer};
  word-wrap: break-word;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  line-height: 20px;
`,An=g.p`
  text-transform: uppercase;
  color: #6f7279;
  font-size: 14px;
  font-weight: 400;
`,cu=g.div`
  display: flex;
  gap: 15px;
  align-items: center;
  width: 100%;
`,du=g.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 24px;
  line-height: 100%;
  color: ${e=>e.$theme===V.LIGHT?"#111111d0":"white"};
`,no=g.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`,uu=g.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  color: ${e=>e.$theme===V.LIGHT?"#111111d0":"white"};
  font-weight: 400;
  gap: 5px;
  background: #ffffff1a;
  padding: 0px 8px;
  border-radius: 4px;
  margin-left: auto;
`,hu=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 8px;
`,pu=g.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,fu=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  min-width: 105px;
  color: white;
  gap: 10px;
  background: #ffffff1a;
  border-radius: 4px;
  padding: 0px 6px;
`,gu=g.input`
  border: none;
  outline: none;
  padding: 0;
  color: ${e=>e.$theme===V.LIGHT?"#111111d0":"white"};
  font-size: 24px;
  line-height: 100%;
  width: 35px;
  text-align: center;
  background: none;
`,so=g.div`
  cursor: pointer;
  width: 19px;
  height: 19px;
  background: #d9d9d94d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    filter: brightness(0.9);
  }
  ${({$disabled:e})=>e&&"pointer-events: none; opacity: 0.5;"}
  & > svg {
    width: 60%;
    height: auto;
  }
`,qr=g.div`
  display: flex;
  gap: 12px;
  margin-top: 18px;
`,xu=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:34,height:34,viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M16.9533 18.0625C18.3699 16.6458 19.7866 16.0856 19.7866 14.5208C19.7866 12.956 18.518 11.6875 16.9532 11.6875C15.633 11.6875 14.5237 12.5905 14.2092 13.8125M16.9533 22.3125H16.9674M29.75 17C29.75 24.0416 24.0416 29.75 17 29.75C9.95837 29.75 4.25 24.0416 4.25 17C4.25 9.95837 9.95837 4.25 17 4.25C24.0416 4.25 29.75 9.95837 29.75 17Z",stroke:"#627EEA",strokeWidth:1.6,strokeLinecap:"round"})),mu=a.forwardRef(xu),bu=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:6,height:2,viewBox:"0 0 6 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M0.333984 1H2.95408L5.57419 1",stroke:"white",strokeWidth:.666667,strokeLinecap:"round",strokeLinejoin:"round"})),vu=a.forwardRef(bu),wu=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:8,height:8,viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M0.886719 4.15799H3.99403M3.99403 4.15799L3.99403 7.2691M3.99403 4.15799L3.99403 1.04688M3.99403 4.15799L7.10135 4.15799",stroke:"white",strokeWidth:.666667,strokeLinecap:"round",strokeLinejoin:"round"})),Cu=a.forwardRef(wu),yu=[{max:10},{max:1}],Xr=({rewards:e,handleRewardsChange:t})=>{const n=ve(ko),{roles:o}=ve(Ro),r=ve(Ze),i=o.some(p=>p===hs.ADMIN),l=i?n.filter(p=>p.type==="fungible"):n.filter(p=>p.id===0||p.id===1),[c,d]=a.useState(!1),u=a.useMemo(()=>e.reduce((p,x)=>p+=x.quantity,0),[e]),h=a.useMemo(()=>c?l.map(p=>{const x=e.find(m=>m.id===p.id)?.quantity||0,f=i?void 0:yu[p.id]?.max;return s.jsxs(pu,{children:[s.jsx(no,{src:p?.imageThumb||p?.image}),s.jsxs(fu,{children:[s.jsx(so,{onClick:()=>t(p.id,x>=1?x-1:0),$disabled:x<=0,children:s.jsx(vu,{})}),s.jsx(gu,{$theme:r,min:0,value:x,type:"number",onChange:m=>{!f||+m.target.value<=f?t(p.id,Number(m.target.value)):t(p.id,+m.target.value<f?+m.target.value:x)},max:f}),s.jsx(so,{onClick:()=>t(p.id,x+1),$disabled:typeof f=="number"&&x>=f,children:s.jsx(Cu,{})})]})]},p.id)}):null,[u,e,c]);return c?s.jsx(hu,{children:h}):s.jsxs(cu,{children:[u?s.jsx(s.Fragment,{children:e.map(p=>{const x=n.find(f=>f.id===p.id);return p.quantity&&x?s.jsxs(du,{$theme:r,children:[s.jsx(no,{src:x?.imageThumb||x?.image})," ",p.quantity]},p.id):null})}):"No rewards",s.jsx(uu,{$theme:r,onClick:()=>d(!0),children:"Edit"})]})},Su=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`,ju=g(Sa)`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 5px;
  object-fit: cover;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    scale: 1.05;
  }
`,Eu=g($).attrs({align:"center",justify:"center",className:"blur-50"})`
  background: #1c1d26cc;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1999;
  &.light {
    background-color: #ffffff0a;
  }
`,Iu=g.img`
  object-fit: contain;
  width: auto;
  height: auto;
  max-width: 80vw;
  max-height: 90vh;
`,Au=g($).attrs({justify:"center",align:"center"})`
  background: #ffffff0a;
  &.light {
    background: #1111110a;
  }
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  top: 48px;
  right: 48px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    scale: 1.1;
  }
  color: var(--font-color-strong);
  & > svg {
    width: 24px;
    height: 24px;
  }
`,Lu=({images:e})=>{const[t,n]=a.useState(null);return s.jsxs(s.Fragment,{children:[s.jsx(Su,{children:e.map(o=>s.jsx(ju,{src:o,onClick:()=>n(o)},"image"+o))}),!!t&&ht.createPortal(s.jsxs(Eu,{children:[s.jsx(Iu,{src:t}),s.jsx(Au,{onClick:()=>n(null),children:s.jsx(zo,{})})]}),document.getElementById(as.SUPREME))]})},ku=({answer:e,onRequestFulfilled:t})=>{const[n,o]=a.useState([]),[r,i]=a.useState(!1),{spaceName:l}=Re(),c=et(),d=a.useMemo(()=>n.reduce((y,j)=>y+=j.quantity,0),[n]),u=ve(Ze),[h,{isLoading:p}]=Ri(),x=(y,j)=>{o(v=>{const S=v.filter(k=>k.id!==y),E={id:y,quantity:j};return[...S,E].sort((k,I)=>k.id-I.id)})},f=()=>{c(l?`/${l}/lesson/${e.lessonId}#${e.slideId}`:`/courses/edit/lessons/${e.lessonId}#${e.slideId}`)},m=()=>{h({id:e._id,rewards:n.filter(y=>!!y.quantity),slideId:e.slideId}).unwrap().then(()=>{o([]),t(e._id),At.success(s.jsx(Lt,{label:"Answer approved",type:"correct"}))}).catch(console.error)},b=()=>{h({id:e._id,slideId:e.slideId}).unwrap().then(()=>{t(e._id),At.success(s.jsx(Lt,{label:"Answer declined",type:"declined"}))}).catch(console.error)},C=a.useMemo(()=>e.possibleAnswers.map((y,j)=>s.jsx("span",{children:y.text},y.text+j)),[e.possibleAnswers]);return s.jsxs(Br,{$theme:u,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[s.jsx(Pr,{onClick:f,$theme:u,children:e.path}),s.jsxs(Hr,{$theme:u,children:[s.jsxs(Wr,{children:[s.jsx(Uo,{avatar:e.userId.avatar,nickname:e.userId.nickname}),s.jsxs(zr,{children:[s.jsx(Gr,{$theme:u,children:e.userId.nickname}),s.jsx(Ur,{$theme:u,children:e.userId.email}),s.jsx(Vr,{$theme:u,children:cr(new Date(e.createdAt),!0)})]})]}),s.jsxs(En,{children:[s.jsx(mu,{}),s.jsx(In,{$isQuestion:!0,$theme:u,children:C})]}),s.jsxs(En,{$nm:!0,children:[s.jsx(An,{$theme:u,children:"Student's answer"}),e.images?.length?s.jsx(Lu,{images:e.images}):s.jsx(In,{$theme:u,children:e.userAnswer})]}),s.jsx(je,{children:(r||p)&&s.jsxs(Kr,{animate:{height:"auto",opacity:1,marginTop:"20px"},initial:{height:0,opacity:0,marginTop:0},exit:{height:0,opacity:-1,marginTop:0},children:[s.jsx(An,{$theme:u,children:"award designation "}),s.jsx(Xr,{rewards:n,handleRewardsChange:x}),s.jsxs(qr,{children:[s.jsx(Fe,{onClick:m,disabled:!d,isLoading:p,style:{width:"fit-content"},variant:"solid",size:"sm",children:"Approve & gift reward"}),s.jsx(Fe,{isLoading:p,onClick:b,style:{width:"fit-content"},variant:"outline",size:"sm",children:"Decline"})]})]})})]})]})},Ru=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:34,height:34,viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M17.0007 4.25C9.95884 4.24964 4.25 9.95819 4.25 17C4.25 19.1621 4.78817 21.1985 5.73786 22.9825C6.15648 23.7689 6.36579 24.1621 6.42391 24.444C6.48381 24.7346 6.48605 24.9096 6.43357 25.2016C6.38266 25.4849 6.22658 25.797 5.91442 26.4213L5.91441 26.4214L4.25 29.75C4.25 29.75 9.9592 29.7504 17.0007 29.75C24.0421 29.7496 29.75 24.0415 29.75 17C29.75 9.95855 24.0421 4.25036 17.0007 4.25Z",stroke:"#6487EF",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.9993 18.416C16.2169 18.416 15.5827 17.781 15.5827 16.9986C15.5827 16.2162 16.2169 15.5813 16.9993 15.5813C17.7818 15.5813 18.416 16.2162 18.416 16.9986C18.416 17.781 17.7818 18.416 16.9993 18.416Z",fill:"#6487EF"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.6673 18.416C21.8849 18.416 21.2507 17.781 21.2507 16.9986C21.2507 16.2162 21.8849 15.5813 22.6673 15.5813C23.4497 15.5813 24.084 16.2162 24.084 16.9986C24.084 17.781 23.4497 18.416 22.6673 18.416Z",fill:"#6487EF"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3333 18.416C10.5509 18.416 9.91667 17.781 9.91667 16.9986C9.91667 16.2162 10.5509 15.5813 11.3333 15.5813C12.1157 15.5813 12.75 16.2162 12.75 16.9986C12.75 17.781 12.1157 18.416 11.3333 18.416Z",fill:"#6487EF"})),_u=a.forwardRef(Ru),Tu=({comment:e,onRequestFulfilled:t})=>{const[n,o]=a.useState([]),[r,i]=a.useState(!1),l=et(),c=ve(Ze),{spaceName:d}=Re(),u=a.useMemo(()=>n.reduce((S,E)=>S+=E.quantity,0),[n]),[h,{isLoading:p}]=_i(),x=()=>{l(d?`/${d}/lesson/${e.lessonId}#${e.slideId}`:`/courses/edit/lessons/${e.lessonId}#${e.slideId}`)},f=(S,E)=>{o(k=>{const I=k.filter(A=>A.id!==S),w={id:S,quantity:E};return[...I,w].sort((A,T)=>A.id-T.id)})},m=()=>{h({commentId:e._id,rewards:n.filter(S=>!!S.quantity),slideId:e.slideId}).unwrap().then(()=>{o([]),t(e._id),At.success(s.jsx(Lt,{label:"Comment approved",type:"correct"}))}).catch(console.error)},b=()=>{h({commentId:e._id,slideId:e.slideId}).unwrap().then(()=>{t(e._id),At.success(s.jsx(Lt,{label:"Comment declined",type:"declined"}))}).catch(console.error)},{widgetId:C}=e,y=a.useMemo(()=>{try{return document.querySelector(`[data-rbd-draggable-id="${C}"]`)}catch(S){return console.error(S),null}},[C]),j=a.useCallback(()=>{y&&y.classList.add("comment-hovered")},[C]),v=a.useCallback(()=>{y&&y.classList.remove("comment-hovered")},[]);return s.jsxs(Br,{$theme:c,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[s.jsx(Pr,{onClick:x,$theme:c,children:e.path}),s.jsxs(Hr,{$theme:c,children:[s.jsxs(Wr,{children:[s.jsx(Uo,{avatar:e.user.avatar,nickname:e.user.nickname,customization:""}),s.jsxs(zr,{children:[s.jsx(Gr,{$theme:c,children:e.user.nickname}),s.jsx(Ur,{$theme:c,children:e.user.email}),s.jsx(Vr,{$theme:c,children:cr(new Date(e.comment.createdAt),!0)})]})]}),s.jsxs(En,{children:[s.jsx(_u,{}),s.jsxs(In,{$theme:c,$isQuestion:!0,onMouseEnter:j,onMouseLeave:v,children:["Selected Text: ",e.comment.selectedText]})]}),s.jsxs(En,{$nm:!0,children:[s.jsx(An,{$theme:c,children:"Student's comment"}),s.jsx(In,{$theme:c,children:e.comment.commentText})]}),s.jsx(je,{children:(r||p)&&s.jsxs(Kr,{animate:{height:"auto",opacity:1,marginTop:"20px"},initial:{height:0,opacity:0,marginTop:0},exit:{height:0,opacity:-1,marginTop:0},children:[s.jsx(An,{$theme:c,children:"award designation"}),s.jsx(Xr,{rewards:n,handleRewardsChange:f}),s.jsxs(qr,{children:[s.jsx(Fe,{onClick:m,disabled:!u,isLoading:p,style:{width:"fit-content"},variant:"solid",size:"sm",children:"Approve & gift reward"}),s.jsx(Fe,{isLoading:p,onClick:b,style:{width:"fit-content"},variant:"outline",size:"sm",children:"Decline"})]})]})})]})]})},Yr={selectedSlideId:null,dashboardContextTab:null,answers:[],comments:[]},Du=(e,t)=>({...e,...t}),Qr=a.createContext({...Yr,updateState:()=>{},refetch:()=>{}}),gt=()=>a.useContext(Qr),ks=e=>{const{comments:t,refetch:n}=gt(),[o,r]=a.useState([]);return a.useEffect(()=>{if(!e){r(t);return}r(t.filter(l=>l.slideId===e))},[t,e]),{comments:o,removeCommentLocalAndRefetch:l=>{r(c=>c.filter(d=>d._id!==l)),n()}}},Rs=e=>{const{answers:t,refetch:n}=gt(),[o,r]=a.useState([]);return a.useEffect(()=>{if(!e){r(t);return}r(t.filter(l=>l.slideId===e))},[t,e]),{answers:o,removeAnswerLocalAndRefetch:l=>{r(c=>c.filter(d=>d._id!==l)),n()}}},Nu=()=>{const{selectedSlideId:e}=gt(),{answers:t,removeAnswerLocalAndRefetch:n}=Rs(e);return t.length?s.jsx($r,{children:s.jsx(Fr,{children:t.map(o=>s.jsx(ku,{onRequestFulfilled:n,answer:o},o._id))})}):s.jsx(s.Fragment,{children:"No answers yet"})},Mu=()=>{const{selectedSlideId:e}=gt(),{comments:t,removeCommentLocalAndRefetch:n}=ks(e);return t.length?s.jsx($r,{children:s.jsx(Fr,{children:t.map(o=>s.jsx(Tu,{onRequestFulfilled:n,comment:o},o._id))})}):s.jsx(s.Fragment,{children:"No comments yet"})},Ou=({courseId:e,courseName:t})=>{const[n,{isLoading:o}]=Ti(),r=()=>{o||n(e).unwrap().then(i=>{const l=`${t.replaceAll(" ","_")}_answers.xlsx`,c=document.createElement("a");c.href=window.URL.createObjectURL(i),c.download=l,c.click()}).catch(i=>{Le({label:"Oops!",sub:"Failed to export answers",type:"incorrect"}),console.error(i)})};return s.jsx(Fe,{size:"sm",disabled:o,variant:"solid",onClick:r,style:{width:"fit-content",height:"30px"},children:"Export Answers"})};var Jr=(e=>(e.ANSWERS="Answers",e.COMMENTS="Comments",e))(Jr||{});const $u=()=>{const e=ve(Ze),{selectedSlideId:t,dashboardContextTab:n,updateState:o}=gt(),{answers:r}=Rs(t),{comments:i}=ks(t),{course:l}=he(),[c,d]=a.useState("Comments");a.useEffect(()=>{n&&d(n)},[n]);const u=a.useMemo(()=>{if(c==="Answers")return s.jsx(Nu,{});if(c==="Comments")return s.jsx(Mu,{})},[r,i,c]),h=f=>f>=100?"99+":f,p=()=>{o({selectedSlideId:null,dashboardContextTab:null})},x=a.useMemo(()=>s.jsxs(s.Fragment,{children:[s.jsx("p",{className:`title ${e}`,children:"Notifications"}),s.jsx("div",{className:`tabs ${e}`,children:Object.values(Jr).map(f=>s.jsxs("div",{className:`tab ${c===f?"active":""}`,onClick:()=>d(f),children:[f," ",s.jsx("div",{className:"tab__num",children:h(f==="Answers"?r.length:i.length)})]},f))}),u]}),[e,r.length,i.length,c,u]);return s.jsx(Xt,{width:"480px",withOverlay:!1,triggerValue:t||n,onClose:p,position:"right",isVisible:!1,secondIconNode:l?s.jsx(Ou,{courseId:l._id,courseName:l.name}):void 0,children:x})},Fu=g.div`
  width: 100%;
  max-width: 752px;
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  height: fit-content;
  padding-bottom: 100px; // to have some empty space
  // 1369 - width, when sidebar starts overlapping with content
  // 248 - sidebard's width
  @media screen and (max-width: 1369px) {
    margin-left: calc(248px + 56px);
  }
`,Bu=g.h1`
  font-size: 20px;
  line-height: 100%;
  color: var(--font-color-strong);
  margin-top: 0;
  margin-bottom: 36px;
`,Pu=g($).attrs({align:"center"})`
  position: fixed;
  top: 0;
  left: 0;
  height: 56px;
  padding: 0px 48px;
  background-color: #1c1d26;
  z-index: 2000;
  border-bottom: 1px solid #ffffff0a;
  &.light {
    background-color: white;
    border-color: #1111110a;
  }
`,Hu=g.div`
  width: 32px;
  min-width: 32px;
  height: 32px;
  background: #ffffff0a;
  color: var(--font-color-strong);
  cursor: pointer;
  &.light {
    background: #1111110a;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`,oo=g($).attrs({align:"center"})`
  flex: 1;
  width: fit-content;
`,Wu=g.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 500;
  margin-right: 24px;
  & > svg {
    width: 20px;
    height: 20px;
  }
  color: var(--font-color-strong);
`,zu=g($).attrs({direction:"column"})`
  gap: 16px;
  position: relative;
  width: fit-content;
  max-width: 220px;
`;g.p`
  color: var(--font-color-strong);
  font-size: 16px;
  line-height: 100%;
  font-weight: 400;
  opacity: 0.5;
`;const Zr=g($).attrs({align:"center",gap:8})`
  cursor: pointer;
  & > img {
    width: 24px;
    height: 24px;
    min-width: 24px;
    border-radius: 4px;
    object-fit: cover;
  }
  & > .check {
    margin-left: auto;
  }
  color: var(--font-color-strong);
  & > span {
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
    opacity: 0.5;
    transition: 0.3s;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &.active > span,
  &:hover > span {
    opacity: 1;
  }
`,Gu=g(we.div).attrs({className:"blur-100"})`
  position: absolute;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: calc(100% + 12px);
  left: -12px;
  width: calc(100% + 24px);
  padding: 12px;
  background: #ffffff0a;
  border-radius: 4px;
  z-index: 20;
`,Uu=g.p`
  cursor: pointer;
  font-size: 16px;
  line-height: 140%;
  color: var(--mighty-blue);
`,Vu={initial:{opacity:0,y:50},animate:{opacity:1,y:0}},Ku=({courses:e,onClose:t,currentCourseId:n})=>{const{isOpen:o,toggle:r,close:i}=ee(),l=cs(t),c=et();return a.useEffect(()=>i,[]),s.jsxs(Gu,{ref:l,variants:Vu,initial:"initial",animate:"animate",exit:"initial",children:[e.map((d,u)=>{if(u>2&&!o)return null;const h=n===d._id,p=d.chapters[0]?.lessons[0]?._id,x=ls.StaticHostPath+(d.imageBanner||d.imageCover||d.imageLogo),m="/"+(d.spaceInfo?.name?.replaceAll(" ","_")??_n.COURSES_ADMIN_LIST),b=p?`lesson/${p}`:`course/${d._id}`,C=()=>{h||(c(`${m}/${b}`),t())};return s.jsxs(Zr,{className:B({active:h}),onClick:C,children:[s.jsx("img",{src:x,alt:""}),s.jsx("span",{children:d.name}),!!h&&s.jsx(Wo,{style:{width:24,height:24,minWidth:24}})]})}),s.jsx(Uu,{onClick:r,children:o?"Hide":"Show All Projects"})]})},qu=()=>{const{space:e}=us(),{course:t}=he(),{open:n,close:o,isOpen:r}=ee(),i=e?._id||t?.spaceInfo?._id||"",{data:l=[],isLoading:c}=Di(i,{skip:!i}),d=a.useMemo(()=>l.filter(h=>!h.isQuest),[l]),u=`${ls.StaticHostPath}/${t?.imageBanner||t?.imageCover||t?.imageLogo}`;return t?s.jsxs(zu,{children:[s.jsxs(Zr,{onClick:n,className:"active",children:[s.jsx("img",{src:u,alt:""}),s.jsx("span",{children:t?.name}),s.jsx(Tn,{className:B({isOpen:r})})]}),s.jsx(je,{children:!!r&&s.jsx(Ku,{courses:d,currentCourseId:t._id,onClose:o})})]}):null},Xu=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M7.51366 18.6497C5.90587 18.1876 4.45871 17.2865 3.33461 16.0475C2.21051 14.8086 1.45397 13.2809 1.14991 11.6358C0.845848 9.99079 1.0063 8.29357 1.61325 6.73466C2.2202 5.17576 3.24963 3.81687 4.58599 2.81053C5.92235 1.80419 7.51275 1.19022 9.17866 1.03756C10.8446 0.884888 12.5201 1.19956 14.0171 1.94624C15.5141 2.69293 16.7734 3.84207 17.6536 5.26469C18.5337 6.68732 19 8.3271 19 10",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round"})),Yu=a.forwardRef(Xu),Qu=g(Yu)`
  width: 20px;
  height: 20px;
  animation: rotate 1s infinite ease-in-out;
  color: var(--font-color-strong);
  opacity: 0.5;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,ro=g($).attrs({align:"center",gap:"8px",justify:"center"})`
  width: fit-content;
  & p {
    color: var(--font-color-strong);
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
  }
`,Ju=({isLoading:e=!1,lastEdited:t})=>{const[n,o]=a.useState(e),r=_t(),i=a.useCallback(r(l=>o(l),300),[]);return a.useEffect(()=>{i(e)},[e]),t?n?s.jsxs(ro,{children:[s.jsx(Qu,{})," Saving..."]}):s.jsx(ro,{children:s.jsxs("p",{children:["Edited ",s.jsx(Ni,{timestamp:t,autoUpdate:!0})]})}):null},Zu=({studentsCount:e=0,lastUpdated:t,isLoading:n})=>{const{space:o}=us(),r=le(),{course:i}=he(),l=et(),c=a.useCallback(()=>{const h=o?.name?`/${o.name.replaceAll(" ","_")}`:_n.COURSES;l(h)},[o?.name]),d=a.useMemo(()=>i?._id?!i.chapters.length||!i.chapters[0].lessons?.length?`${window.location.origin}/${i?._id}`:`${window.location.origin}/courses/${i?._id}/${i.chapters[0]._id}/${i.chapters[0].lessons[0]._id}`:"",[i]),u=()=>i?._id&&navigator.clipboard.writeText(d);return s.jsxs(Pu,{className:B(r),children:[s.jsxs(oo,{gap:36,children:[s.jsx(Hu,{className:B(r),onClick:c,children:s.jsx(Vo,{})}),s.jsx(qu,{})]}),s.jsx(Ju,{isLoading:n,lastEdited:t}),s.jsxs(oo,{justify:"end",children:[s.jsxs(Wu,{children:[s.jsx(Mi,{}),e]}),s.jsx(ja,{size:"small"}),s.jsx(kl,{style:{minWidth:32,borderRadius:8,marginLeft:8},handleCopy:u})]})]})},eh=g($).attrs({direction:"column",align:"end"})`
  position: fixed;
  width: fit-content;
  top: 165px;
  right: 48px;
  gap: 16px;
`,th=g.p`
  color: var(--font-color-strong);
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
`,nh=g.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
`,io=({count:e,type:t})=>{const n=t==="Answers"?"#FC6842":"#6487EF",o=le();if(!e)return t;const r=e>99?"99+":e;return s.jsxs($,{direction:"column",align:"center",gap:"4px",children:[s.jsxs(th,{className:o,children:[r," ",t]}),s.jsx(nh,{style:{color:n},children:"Check Required"})]})},sh=({slide:e})=>{const t=e.typeOfSlide!==O.INFO,n=a.useMemo(()=>t?Ja:Za,[t]);return s.jsx(el.Provider,{value:{isCompleting:!1,isInProgress:!0,handleAnswer:async()=>{},rewards:[],slideId:e._id},children:s.jsx(Rl,{className:"isVisible",children:s.jsx(n,{isCompleted:!1,isRewarded:!1,slide:e,right:null,updateRight:()=>{},testsIds:[]})})})},oh=()=>{const{course:e}=he(),t=ls.StaticHostPath+e?.imageBanner||e?.imageCover,n=e?.name;return e?s.jsx(_l,{children:s.jsxs(Tl,{children:[s.jsx(Dl,{}),s.jsx(Nl,{src:t}),s.jsx(Ml,{children:n})]})}):null},ei=a.createContext([]),rh=()=>a.useContext(ei),ih=g(Fl)`
  position: relative;
  border-radius: 20px;
  padding: 48px 48px 60px;
  --full-screen-width: 1110px;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`,ah=()=>{const e=le(),{lessonPage:t}=Oi({}),n=$i(t?.images?.bgImage),o=rh();return o.length?s.jsxs(ih,{$theme:e,$bgImage:n,$bgColor:t?.bgColor,children:[s.jsx(oh,{}),s.jsx(Ol,{children:o.map(r=>s.jsx($l,{children:s.jsx(sh,{slide:r})},"preview"+r._id))})]}):s.jsx(Fi,{isFixed:!1})},lh=({isOpen:e,onClose:t})=>s.jsx(Xt,{position:"right",isVisible:e,onClose:t,width:"1150px",style:{padding:20},children:s.jsx(ah,{})}),ao=e=>({background:e==="Answers"?"#FC68421A":"#6487EF1A",color:e==="Answers"?"#FC6842":"#6487EF"}),ch=({lastEdited:e})=>{const{course:t,refetchCourse:n}=he(),{lessonId:o=""}=Re(),{answers:r,comments:i,updateState:l}=gt(),{open:c,close:d,isOpen:u}=ee(),{open:h,close:p,isOpen:x}=ee(),{refetchCourse:f}=he(),m=r.length,b=i.length,C=()=>l({dashboardContextTab:"Comments"}),y=()=>l({dashboardContextTab:"Answers"}),j=()=>{f(),n()},v=a.useMemo(()=>{if(!t)return null;let S=null;for(let E of t.chapters)for(let k of E.lessons)if(k._id===o){S=E._id;break}return S?{courseId:t._id,chapterId:S,lessonId:o}:null},[t,o]);return s.jsxs(s.Fragment,{children:[s.jsxs(eh,{children:[s.jsx(an,{icon:s.jsx(_o,{}),onClick:c,children:"Project Settings"}),s.jsx(an,{icon:s.jsx(Bi,{}),onClick:h,children:"Preview"}),s.jsx(an,{icon:s.jsx(To,{}),style:b?ao("Comments"):void 0,onClick:C,children:s.jsx(io,{type:"Comments",count:b})}),s.jsx(an,{icon:s.jsx(Pi,{}),style:m?ao("Answers"):void 0,onClick:y,children:s.jsx(io,{type:"Answers",count:m})})]}),!!v&&s.jsx(lh,{isOpen:x,onClose:p}),!!t&&s.jsx(Ea,{onChange:j,isOpen:u,course:t,onClose:d})]})},dh=({title:e,children:t,lastUpdated:n,isUpdating:o})=>{const{lessonId:r=""}=Re(),{data:i,isLoading:l,refetch:c}=Hi(r,{skip:!r,refetchOnMountOrArgChange:!0}),{data:d,isLoading:u,refetch:h}=Wi(r,{skip:!r,refetchOnMountOrArgChange:!0}),{data:p,isLoading:x}=zi(r,{skip:!r}),[{dashboardContextTab:f,selectedSlideId:m},b]=a.useReducer(Du,Yr),C=u||l||x,y=()=>{c(),h()},{answers:j,comments:v}=a.useMemo(()=>({answers:d?.items??[],comments:i?.items??[]}),[d,i]);return s.jsx(Fu,{children:s.jsxs(Qr.Provider,{value:{answers:j,comments:v,refetch:y,dashboardContextTab:f,selectedSlideId:m,updateState:b,isLoading:C},children:[s.jsx(ch,{lastEdited:n}),s.jsx(Zu,{isLoading:o,lastUpdated:n,studentsCount:p?.students}),s.jsx($u,{}),s.jsx(Bu,{children:e?`Edit ${e}`:null}),t]})})},uh=g.div`
  width: 100%;
  max-width: 752px;
  display: flex;
  flex-direction: column;
  /* gap: 36px;  */
`;g.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 36px 0px;
  width: 100%;
  border-top: 1px solid #ffffff1a;
  border-bottom: 1px solid #ffffff1a;
`;g.div``;const hh="_root_6na5h_1",ph={root:hh},fh=({children:e,index:t=0,slideId:n})=>{const{hash:o}=Gi();return a.useEffect(()=>{n===o.replace("#","")&&document.getElementById(n)?.scrollIntoView()},[o,n]),s.jsx("div",{className:ph.root,id:n,children:e})},gh=g.div(()=>G`
    width: 100%;
    line-height: 1.42;
  `),xh=({content:e,onChange:t})=>s.jsx(gh,{className:"root-transition",children:s.jsx(er,{extensions:[tr,nr,sr,or,rr,ir.configure({openOnClick:!0})],bubble:n=>s.jsx(ar,{editor:n}),content:e,onChange:t,placeholder:"Type text"})}),mh=({id:e,onChange:t,content:n,color:o="#FFBF66",icon:r="Info",image:i})=>s.jsx("div",{style:{width:"100%"},className:"root-transition",children:s.jsx(tl,{image:i,type:r,color:o,children:s.jsx(er,{extensions:[tr,nr,sr,or,rr,ir.configure({openOnClick:!0})],bubble:l=>s.jsx(ar,{editor:l}),content:n,placeholder:"Type infotext",onChange:t})})}),bh="_root_1oq2z_1",vh="_label_1oq2z_5",lo={root:bh,label:vh},wh=({children:e,onChange:t,id:n,accept:o,...r})=>s.jsxs(Fe,{className:lo.root,...r,children:[s.jsx("input",{type:"file",hidden:!0,id:n,onChange:t,accept:o}),e,s.jsx("label",{className:lo.label,htmlFor:n})]}),Ch=g.div(()=>G`
      width: 100%;
    `),yh=g.div(({$justifyContent:e})=>G`
      display: flex;
      justify-content: ${e};
      align-items: center;
      position: relative;
    `),Sh=g.div(({$isSmall:e})=>G`
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      padding: ${e?"5px":"10px"};
      gap: ${e?"3px":"8px"};

      svg {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    `),un=g.button(({$isSmall:e})=>G`
      padding: 5px;
      width: ${e?"24px":"32px"};
      height: ${e?"24px":"32px"};
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(40px);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      transition: background-color 0.25s ease-in-out;
      font-size: ${e?"12px":"16px"};
      white-space: nowrap;
      &.fit {
        width: fit-content;
        padding: 0px ${e?"8px":"12px"};
        gap: ${e?"4px":"8px"};
        & > svg {
          width: 1em;
          height: 1em;
          margin-bottom: -2px;
        }
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }
    `),jh=g.div`
    position: relative;
    height: auto;
    display: flex;
    align-items: center;
    background-color: #000;
    border-radius: 13px;
    overflow: hidden;
  `,Eh=g.img(()=>G`
      width: 100%;
    `);g.div`
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 100%;
    cursor: grab;
    user-select: none;
    will-change: width;
    transition:
      width,
      background-color 0.2s ease;
    padding: 5px;

    & svg {
      height: 100%;
      width: 100%;
      color: white;
    }
    &:hover svg {
      filter: brightness(1.2);
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.7);
    }

    &:active .image {
      /* height: 50%; */
    }

    ${({$isLeft:e})=>e&&G`
        left: 10px;
      `}
    ${({$isGrabbing:e})=>e&&G`
        cursor: grabbing;
      `}
  `;const Ih=a.memo(({width:e,justifyContent:t="flex-start",src:n,alt:o,tabs:r,onChange:i,onDelete:l})=>{const c=m=>()=>i({width:m}),d=m=>i({align:m}),u=()=>{switch(t){case"flex-start":d("center");break;case"center":d("flex-end");break;default:d("flex-start");break}},h=a.useMemo(()=>{switch(t){case"flex-start":return Mo;case"center":return No;default:return Do}},[t]),p=ut[e],x=e!==U.FIT&&Number(e)<Number(U.SMALL),[f]=nl(e,!0);return s.jsx(Ch,{children:s.jsxs(yh,{$justifyContent:t,children:[s.jsx(jh,{style:f,className:"root-transition",children:s.jsx(Eh,{src:n,alt:o})}),s.jsxs(Sh,{$isSmall:x,children:[s.jsx(wn,{triggerNode:s.jsxs(un,{$isSmall:x,className:"fit",children:["Size: ",p,s.jsx(Ia,{})]}),items:[{title:"Small",onClick:c(U.SMALL)},{title:"Medium",onClick:c(U.MEDIUM)},{title:"Large",onClick:c(U.LARGE)},{title:"Fit",onClick:c(U.FIT)},{title:"Fit+Blur",onClick:c(U.FIT_BLUR)},{title:"Screen Width",onClick:c(U.FULLSCREEN)}]}),s.jsx(wn,{triggerNode:s.jsx(un,{$isSmall:x,children:s.jsx(Aa,{})}),variant:"secondary",children:s.jsx(Qn,{tabs:r})}),e!==U.FIT&&s.jsx(un,{$isSmall:x,onClick:u,children:s.jsx(h,{})}),s.jsx(un,{$isSmall:x,onClick:l,children:s.jsx(tt,{})})]})]})})}),Ah=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.502 8.74902C13.502 7.78304 14.2851 6.99995 15.2511 7C16.217 7.00005 17 7.78309 17 8.74902C17 9.71495 16.217 10.498 15.2511 10.498C14.2851 10.4981 13.502 9.715 13.502 8.74902Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M12.5 16.5L10.2769 14.2769C9.4715 13.4715 9.06881 13.0688 8.60308 12.9215C8.21061 12.7974 7.78939 12.7974 7.39692 12.9215C6.93119 13.0688 6.5285 13.4715 5.72312 14.2769L3.4768 16.5232M12.5 16.5L13.7231 15.2769C14.5285 14.4715 14.9312 14.0688 15.3969 13.9215C15.7894 13.7974 16.2106 13.7974 16.6031 13.9215C17.0688 14.0688 17.4715 14.4715 18.2769 15.2769L20.2744 17.2744M12.5 16.5L16.5254 20.5254M16.5254 20.5254C15.3215 20.8603 13.8303 21 12.0005 21C6.89002 21 4.41985 19.91 3.4768 16.5232M16.5254 20.5254C18.4215 19.998 19.6045 18.9864 20.2744 17.2744M3.4768 16.5232C3.14239 15.3222 3 13.8324 3 12C3 5 5.00092 3 12.0005 3C19 3 21 5 21 12C21 14.2355 20.7882 15.961 20.2744 17.2744",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Lh=a.forwardRef(Ah),kh=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M3 12H7.50023M3 12C3 10.4249 3.10131 9.10295 3.33808 7.99999M3 12C3 13.5553 3.10258 14.8638 3.33808 15.9583M21 12H16.5002M21 12C21 10.4249 20.8987 9.10295 20.662 7.99999M21 12C21 13.5553 20.8975 14.8638 20.662 15.9583M16.5002 12H7.50023M16.5002 12V7.99999M16.5002 12V15.9583M16.5002 3.45868C15.3033 3.1353 13.821 3 12.0005 3C10.1798 3 8.69727 3.13532 7.50023 3.45877M16.5002 3.45868V7.99999M16.5002 3.45868C18.8696 4.09886 20.1204 5.47613 20.662 7.99999M16.5002 20.5323C15.3008 20.8622 13.8176 21 12.0005 21C10.1832 21 8.69982 20.8622 7.50023 20.5323M16.5002 20.5323C18.855 19.8848 20.116 18.4969 20.662 15.9583M16.5002 20.5323V15.9583M7.50023 12L7.5 7.99999M7.50023 12V15.9583M7.50023 3.45877L7.5 7.99999M7.50023 3.45877C5.13085 4.09898 3.87985 5.47624 3.33808 7.99999M7.50023 20.5323V15.9583M7.50023 20.5323C5.14545 19.8846 3.88427 18.4968 3.33808 15.9583M7.5 7.99999H3.33808M16.5002 7.99999H20.662M20.662 15.9583H16.5002M7.50023 15.9583H3.33808",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Rh=a.forwardRef(kh);function _h(e){return La({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"17 8 12 3 7 8"}},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"}}]})(e)}const Th="_embdedLink_135ax_1",Dh={embdedLink:Th},Nh=Ui`
  0% {
    top: calc(100% - 20px);
    opacity: 0.5;
  }

  100% {
    top: calc(100% - 10px);
    opacity: 1;
  }
`,co=g.div(()=>G`
      position: relative;
      width: 100%;
    `),uo=g.button(({theme:e})=>G`
      border: none;
      outline: none;
      display: flex;
      gap: 10px;
      width: 100%;
      height: 50px;
      padding: 12px 6px;
      align-items: center;
      border-radius: 4px;
      background: ${Je(e.theme.basicBlue,.1)};
      color: ${e.theme.fontColor};

      &:hover {
        background: ${Je(e.theme.basicBlue,.15)};
      }

      span {
        white-space: nowrap;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `),ho=g.div(()=>G`
      width: auto;
      min-width: 20px;
      height: 100%;
      min-height: 20px;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    `),Mh=g.div(({theme:e})=>G`
      position: relative;
      display: flex;
      justify-content: center;
      width: auto;
      height: 200px;
      max-height: 200px;
      background: ${Je(e.theme.fontColor,.1)};
      border-radius: 5px;
    `),Oh=g.img(()=>G`
      object-fit: contain;
      max-height: 100%;
      max-width: 100%;
    `),$h=g.div(()=>G`
      position: absolute;
      top: 0;
      left: 0;
      border-radius: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;
      height: 100%;
      z-index: 2;
      transition: all 0.2s ease-in-out;
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;

      &:hover {
        opacity: 1;
      }
      & > * {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        display: none;
        padding: 10px;
        border-radius: inherit;
      }
      & > *:hover {
        color: var(--font-color-strong);
        background: rgba(255, 255, 255, 0.2);
      }
      &:hover > * {
        display: block;
      }
    `),Fh=g.label(()=>G`
      & > svg {
        width: 100%;
        height: auto;
        color: var(--font-color-strong);
      }
    `);g.div(({theme:e})=>G`
      position: absolute;
      z-index: 1;
      top: 0;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 400px;
      padding: 20px 15px;
      background: ${e.theme.basicBG};
      border: 2px solid ${Je(e.theme.fontColor,.1)};
      border-radius: 5px;
      animation: 0.1s ${Nh} ease-out;
    `);const po=g.div(()=>G`
      padding-top: 20px;
    `);function Bh(e){try{JSON.parse(e)}catch{return!1}return!0}const Ph={[L.FILE]:{title:"Embed or upload a file",icon:s.jsx(Oo,{}),buttonTitle:"Choose a file",accept:".json,.txt,.ts,.js,.tsx,.jsx,.py,.md,.java,.cpp,.html,.css,.scss,.sass"},[L.IMAGE]:{title:"Add an image",icon:s.jsx(Lh,{}),buttonTitle:"Choose an image",accept:".png,.jpg,.jpeg,.svg,.webp"},[L.VIDEO]:{title:"Embed or upload a video",icon:s.jsx(Rh,{}),buttonTitle:"Choose a video",accept:"video/mp4,video/x-m4v,video/*"}},Un=({type:e,onChange:t,onDelete:n,id:o,value:r})=>{const{slide:i,attachmentAction:l}=se(),c=a.useMemo(()=>Fs(r)||r,[r]),d=Ph[e],u=Fs(c)??c,[h,p]=a.useState(""),[x,f]=a.useState(""),m=ps().shape({link:fs().required().url()}),b=a.useCallback(I=>{try{if(!I.target?.files)return;const w=I.target.files[0],A=3,T=A*1024,_=w?.size/1024;if(T<_)Le({type:"incorrect",label:"Your image is too large!",sub:`Allowed size is ${A}mb`});else{const H=new FormData;H.append("file",w),H.append("slideId",i._id),l.add({slideId:i._id,widgetId:o,form:H}).then(q=>{q?.content&&t(q?.content.find(K=>K.id===o)?.content??"")})}}catch(w){Le({type:"incorrect",label:"Something went wrong...:/"}),console.error(w)}},[o,l,i._id]),C=a.useCallback(I=>{r&&t(JSON.stringify({...JSON.parse(r),...I}))},[r]),y=async I=>{const w=I.target.value;try{await m.validate({link:w}),x&&f("")}catch(A){f(A.errors[0])}finally{p(w)}},j=()=>{x||t(h)},v=[],S=a.useMemo(()=>{let I;const w=i.content.find(A=>A.id===o);if(w?.content)if(Bh(w?.content)){const A=JSON.parse(w.content);I=Yn+A.filePath}else I=w?.content;return I??""},[o,i.content]);e!==L.VIDEO&&v.push({title:"Upload",content:s.jsx(po,{children:S?s.jsxs(Mh,{children:[s.jsx($h,{children:s.jsxs(Fh,{children:[s.jsx("input",{type:"file",hidden:!0,onChange:b}),s.jsx(_h,{})]})}),e===L.IMAGE&&s.jsx(Oh,{src:S,alt:"preview"})]}):s.jsx(wh,{onChange:b,id:"fileWidgetFile",accept:d.accept,children:d.buttonTitle})})}),v.push({title:"Embed link",content:s.jsxs(po,{children:[s.jsx(ka,{autoFocus:!0,className:Dh.embdedLink,placeholder:"Paste link",onChange:y,value:h}),s.jsx(Fe,{onClick:j,disabled:!!x||!h,children:e===L.IMAGE?"Upload file":"Embed video"})]})});const{width:E=U.MEDIUM,align:k="flex-start"}=u;return e===L.IMAGE?s.jsx(a.Fragment,{children:S?s.jsx(Ih,{width:E,justifyContent:k,src:S,alt:"preview",tabs:v,onDelete:()=>n(o),onChange:C}):s.jsx(co,{children:s.jsx(wn,{triggerNode:s.jsxs(uo,{children:[s.jsx(ho,{children:S?s.jsx("img",{src:S,alt:"preview"}):d.icon}),s.jsx("span",{children:(typeof u=="string"?u:u.name)||d.title})]}),variant:"secondary",children:s.jsx(Qn,{tabs:v})})})}):s.jsx(co,{children:s.jsx(wn,{triggerNode:s.jsxs(uo,{children:[s.jsx(ho,{children:S?s.jsx(Oo,{}):d.icon}),s.jsx("span",{children:(typeof u=="string"?u:u.name)||d.title})]}),variant:"secondary",children:s.jsx(Qn,{tabs:v})})})},Hh={[L.TEXT]:({content:e="",onChange:t})=>s.jsx(xh,{content:e,onChange:t}),[L.WARNING]:({id:e,content:t="",icon:n,color:o,image:r,onChange:i})=>s.jsx(mh,{id:e,content:t,onChange:i,isCustomization:!0,color:o||void 0,icon:n||void 0,image:r}),[L.CODE]:({content:e="",onChange:t,preset:n})=>s.jsx(ul,{webEditorSetup:{withOutput:!1,withConsole:!1,withConstructor:!0},content:e,onChange:t,preset:n}),[L.FILE]:({id:e,type:t,content:n="",onChange:o,onDelete:r})=>s.jsx(Un,{id:e,type:t,onChange:o,onDelete:r,value:n}),[L.IMAGE]:({id:e,type:t,content:n="",onChange:o,onDelete:r})=>s.jsx(Un,{id:e,type:t,onChange:o,onDelete:r,value:n}),[L.VIDEO]:({id:e,type:t,content:n="",onChange:o,onDelete:r})=>s.jsx(Un,{id:e,type:t,onChange:o,onDelete:r,value:n}),[L.TASK]:({content:e="",icon:t,color:n,title:o,link:r,isRequired:i,onChange:l,preset:c})=>s.jsx(dl,{color:n,icon:t,title:o,link:r,content:e,onChange:l,isRequired:i,preset:c}),[L.QUOTE]:({content:e="",icon:t,color:n,author:o,onChange:r})=>s.jsx(cl,{author:o,onChange:r,color:n??"#FFFFFF",icon:t??Ko.QUOTE,content:e}),[L.COURSES_LIST]:({listData:e,openMenu:t,preset:n})=>s.jsx(ll,{inDev:!0,listData:e,preset:n,openMenu:t}),[L.SPACES_LIST]:({listData:e,openMenu:t,preset:n})=>s.jsx(al,{listData:e,openMenu:t,preset:n,inDev:!0}),[L.SPACE_DASHBOARD]:({preset:e,title:t})=>s.jsx(il,{preset:e,title:t,inConstructor:!0}),[L.LEADERBOARD_BANNER]:()=>s.jsx(rl,{isInDev:!0}),[L.TREASURE_CHESTS]:({preset:e})=>s.jsx(ol,{preset:e,isInDev:!0}),[L.SHOP_ITEMS]:({listData:e,openMenu:t,preset:n})=>s.jsx(sl,{listData:e,openMenu:t,preset:n,isInDev:!0})},Wh={id:"",content:""},zh=(e,t)=>typeof t=="string"?{...e,content:t}:{...e,...t};g.div`
  position: absolute;
  left: calc(100% + 10px);
  display: flex;
  flex-direction: column;
  background: #ffffff0a;
  color: var(--font-color);
  padding: 20px;
  z-index: 30;
  /* overflow: hidden; */
  /* gap: 36px; */
`;const Gh=g.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 36px;
`;g.div`
  /* height: 32px; */
  width: 100%;
`;const Uh=g.div`
  .drawer {
    color: black;
    .drawer-button {
      color: var(--mighty-blue);
      opacity: 0.4;
    }
  }
`,Vh={backdropFilter:"blur(100px)",zIndex:"10001",padding:"20px",width:"328px"},Kh={zIndex:"10000",background:"transparent"};var _s=(e=>(e.PRESET_1="preset_1",e.PRESET_2="preset_2",e))(_s||{});const qh=[{value:"preset_1",label:"Preset 1"},{value:"preset_2",label:"Preset 2"}],Xh=[{value:Me.PIC_ONLY,label:"Project - Picture"},{value:Me.LONG,label:"Project - Horizontal"},{value:Me.DEFAULT,label:"Project - Card 1"},{value:Me.V2_FILLED,label:"Project - Card 2"},{value:Me.V2_HOLLOW,label:"Project - Card 3"},{value:Me.QUEST_CIRCLE,label:"Quest - Circle"},{value:Me.QUEST_SQUARE,label:"Quest - Square"},{value:Me.BANNER_1,label:"Banner 1"},{value:Me.BANNER_2,label:"Banner 2"}],Yh=[{label:"Preset 1",value:Bs.PRESET_1},{label:"Preset 2",value:Bs.PRESET_2}],Qh=[{label:"Card",value:Et.DEFAULT},{label:"Mini Card",value:Et.MINI},{label:"Banner",value:Et.BANNER}],Jh=[{value:St.DEFAULT,label:"Shop - Card 1"},{value:St.CARD_LARGE,label:"Shop - Card 2"},{value:St.PIC_ONLY,label:"Shop - Compact"},{value:St.BANNER_1,label:"Shop - Banner"}],Zh=e=>{const t=[L.TASK,L.TEXT,L.QUOTE,L.WARNING].includes(e),n=[L.TASK,L.QUOTE,L.WARNING].includes(e),o=[L.TASK].includes(e),r=e===L.CODE,i=[L.CODE,L.TASK,L.COURSES_LIST,L.SPACES_LIST,L.SPACE_DASHBOARD,L.SHOP_ITEMS].includes(e),l=e===L.IMAGE,c=e===L.WARNING,d=L.COURSES_LIST===e,u=L.SPACES_LIST===e,h=L.SHOP_ITEMS===e,p=L.TREASURE_CHESTS===e;return{showColorPicker:t,showIconPicker:n,showReqPicker:o,showEditorTabsPicker:r,showPresetPicker:i,showImageSettings:l,showCoursesListSettings:d,showSpacesListSettings:u,showChestsPicker:p,showItemListSettings:h,showWarningImageSettings:c}},ep=({type:e,preset:t=_s.PRESET_1})=>{switch(e){case L.SPACES_LIST:return Object.values(Et).includes(t)?t:Et.DEFAULT;case L.SHOP_ITEMS:return Object.values(St).includes(t)?t:St.DEFAULT;default:return t}},tp=["html","css","js","python"],np=({onChange:e,content:t=""})=>{const n=a.useMemo(()=>t?hl(t)?JSON.parse(t):t:"",[t]),o=typeof n!="object",r=a.useMemo(()=>o?[]:n.tabs,[n,o]),i={css:"CSS",html:"HTML",python:"Python",js:"JavaScript"},l=a.useCallback(c=>()=>{let d=[...r];r.includes(c)?d=r.filter(h=>h!==c):d.push(c);let u={};o?u={tabs:d,activeTab:d[0]}:u={...n,tabs:d,activeTab:d[0]},e(d.length?JSON.stringify(u):"")},[n]);return s.jsx(Yt,{$flexDirection:"column",$gap:"12px",children:s.jsx(Qt,{label:"Type",pickerLabel:"Choose type",style:{width:"100%"},children:s.jsx(ue,{style:{display:"flex",flexDirection:"column",gap:"12px"},children:tp.map(c=>s.jsxs(ue.ListItem,{children:[s.jsx(ue.Toggle,{value:c,onChange:l(c),checked:r.includes(c)}),i[c]]},`${c}-lang`))})})})},sp=({currentValue:e,onChange:t,label:n,placeholder:o})=>s.jsxs(Yt,{$flexDirection:"column",$gap:"12px",children:[s.jsx(nt,{children:n}),s.jsx(Ra,{value:e,placeholder:o,onChange:t})]}),op=({currentValue:e,onChange:t})=>s.jsxs(Yt,{$flexDirection:"column",$gap:"12px",children:[s.jsx(nt,{children:"Type"}),s.jsx(Jt,{style:{width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr"},optionStyle:{width:"100%"},currentValue:e,onChange:t,options:[{label:"Optional",value:!1},{label:"Required",value:!0}]})]}),rp=["#FFFFFF","#AFB4B8","#95D8F5","#627EEA","#53259B","#CA47CE","#F14F63","#FF070B","#FF5500","#FFBF66","#BFFF66","#25FF28","#27A17B"],ip=({onChange:e,currentColor:t})=>s.jsx(xn,{onChange:e,currentColor:t,customColorSet:rp}),ap=g.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,lp=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`,cp=g.div`
  width: 100%;
  height: 33px;
  border-radius: 2px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #ffffff0a;
  }
  & > * {
    color: ${e=>e.color};
    transition: 0.3s;
    height: 24px;
    width: 24px;
  }
  & .quotePath {
    fill: ${e=>e.color};
    transition: 0.3s;
  }
`,dp=({color:e,onChange:t})=>s.jsxs(ap,{children:[s.jsx(nt,{children:"Icons"}),s.jsx(lp,{children:Object.values(Ko).map(n=>s.jsx(cp,{color:e,onClick:()=>t(n),children:s.jsx(_a,{type:n})},n))})]}),up=({onChange:e,preset:t=_s.PRESET_1,type:n})=>{const o=a.useMemo(()=>{switch(n){case L.COURSES_LIST:return Xh;case L.SPACES_LIST:return Qh;case L.SPACE_DASHBOARD:return Yh;case L.SHOP_ITEMS:return Jh;default:return qh}},[n]);return s.jsx(Zt,{currentValue:t,onChange:e,settingsLabel:"Appearance",options:o})},hp=[{label:ut[U.SMALL],value:U.SMALL},{label:ut[U.MEDIUM],value:U.MEDIUM},{label:ut[U.LARGE],value:U.LARGE},{label:ut[U.FIT],value:U.FIT},{label:ut[U.FIT_BLUR],value:U.FIT_BLUR},{label:ut[U.FULLSCREEN],value:U.FULLSCREEN}],pp=({currentWidth:e,onChange:t})=>{const n=o=>t({width:o});return s.jsx(Yt,{$flexDirection:"column",$gap:"20px",children:s.jsx(Zt,{currentValue:e,onChange:n,settingsLabel:"Size",options:hp})})},fp=({currentAlign:e,onChange:t,disabled:n})=>{const o=r=>t({align:r});return s.jsxs(Yt,{$flexDirection:"column",$gap:"20px",children:[s.jsx(nt,{children:"Align"}),s.jsx(Jt,{disabled:n,onChange:o,currentValue:e,optionStyle:{width:"36px",padding:0},options:[{label:"",icon:s.jsx(Mo,{}),value:"flex-start"},{label:"",icon:s.jsx(No,{}),value:"center"},{label:"",icon:s.jsx(Do,{}),value:"flex-end"}]})]})},gp=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M12.0005 3C5.00092 3 3 5 3 12C3 13.8324 3.14239 15.3222 3.4768 16.5232M21 12C21 14.2355 20.7882 15.961 20.2744 17.2744M12.5 16.5L10.2769 14.2769C9.4715 13.4715 9.06881 13.0688 8.60308 12.9215C8.21061 12.7974 7.78939 12.7974 7.39692 12.9215C6.93119 13.0688 6.5285 13.4715 5.72312 14.2769L3.4768 16.5232M12.5 16.5L13.7231 15.2769C14.5285 14.4715 14.9312 14.0688 15.3969 13.9215C15.7894 13.7974 16.2106 13.7974 16.6031 13.9215C17.0688 14.0688 17.4715 14.4715 18.2769 15.2769L20.2744 17.2744M12.5 16.5L16.5254 20.5254M16.5254 20.5254C15.3215 20.8603 13.8303 21 12.0005 21C6.89002 21 4.41985 19.91 3.4768 16.5232M16.5254 20.5254C18.4215 19.998 19.6045 18.9864 20.2744 17.2744",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M18 3V9",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round"}),a.createElement("path",{d:"M21 6L15 6",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round"})),fo=a.forwardRef(gp),ss=g($).attrs({gap:12,align:"center"})`
  color: white;
  height: 48px;
  gap: 12px;
  width: fit-content;
  border-radius: 48px;
  background: #ffffff1a;
  backdrop-filter: blur(20px);
  padding: 0px 16px 0px 12px;
  white-space: nowrap;
  & > svg {
    width: 24px;
    height: 24px;
  }
  font-size: 18px;
  line-height: 100%;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0;
  z-index: 2;
`,xp=g($).attrs({direction:"column",gap:20,align:"center"})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,mp=g.div(()=>G`
    position: relative;
    height: 120px;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    &:hover ${ss} {
      opacity: 1;
    }
    &.square {
      height: auto;
      aspect-ratio: 1;
    }
  `),bp=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: -1;
  pointer-events: none;
`,go=g.input`
  opacity: 0;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
`,vp=g($).attrs({align:"center",gap:6})`
  color: var(--font-color-strong);
  font-size: 16px;
  width: fit-content;
  cursor: pointer;
  position: relative;
`,wp=g($).attrs({justify:"center",align:"center",className:"blur-10"})`
  width: 24px;
  height: 24px;
  background: #ffffff0a;
  border-radius: 4px;
  & > svg {
    width: 16px;
    height: 16px;
  }
`,Cp=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=r=>t(r.target.result),o.onerror=r=>n(r),o.readAsDataURL(e)}),ti=({filePath:e,widgetId:t,showDeleteButton:n,square:o,onImageChange:r})=>{const{attachmentAction:i,slide:l}=se(),[c,d]=a.useState(e?Yn+e:"");a.useEffect(()=>{d(Yn+e)},[e]);const u=a.useCallback(async p=>{try{if(!p.target?.files)return;const x=p.target.files[0],f=3,m=f*1024,b=x?.size/1024;if(m<b)Le({label:"Your image is too large!",type:"incorrect",sub:`Allowed size is ${f}mb`});else{Cp(x).then(y=>d(y));const C=new FormData;C.append("file",x),C.append("slideId",l._id),i.add({slideId:l._id,widgetId:t,form:C}).then(y=>{if(r){const j=y?.content?.find(v=>v.id===t);r(j?.image)}})}}catch(x){Le({label:"Something went wrong...:/",type:"incorrect"}),console.log(x)}},[t,i,l._id]),h=()=>{i.delete({slideId:l._id,widgetId:t}).then(()=>{r&&r()})};return e?s.jsxs($,{direction:"column",gap:"20px",children:[s.jsx(nt,{children:"Image"}),s.jsxs(mp,{className:B({square:o}),children:[s.jsx(bp,{src:c}),s.jsxs(xp,{children:[s.jsxs(ss,{children:[s.jsx(go,{type:"file",onChange:u}),s.jsx(fo,{}),"Change Image"]}),n&&s.jsxs(ss,{onClick:h,children:[s.jsx(tt,{}),"Delete Image"]})]})]})]}):s.jsxs(vp,{children:[s.jsx(go,{type:"file",onChange:u}),s.jsx(wp,{children:s.jsx(fo,{})}),"Upload Image"]})},yp=({content:e,handleContentChange:t,widgetId:n})=>{const o=a.useMemo(()=>e?JSON.parse(e):null,[e]),r=a.useCallback(d=>{const u={...o,...d};t(JSON.stringify(u))},[o]);if(!o)return s.jsx("div",{style:{height:"20px"},children:s.jsx(nt,{children:"Please add an Image first!"})});const{align:i,width:l,filePath:c}=o;return s.jsxs(s.Fragment,{children:[!!c&&s.jsx(ti,{widgetId:n,filePath:c}),s.jsx(pp,{currentWidth:l??U.MEDIUM,onChange:r}),s.jsx(fp,{disabled:l===U.FIT,currentAlign:i??"flex-start",onChange:r})]})},Ln=5,Sp=e=>{const[t]=Vi(),[n,o]=a.useState([]),[r,i]=a.useState(1),[l,c]=a.useState(Ln),[d,u]=a.useState(2),h=a.useRef(!1),p=a.useMemo(()=>l<=n.length||d<=r,[r,d,l,n.length]),x=a.useCallback(()=>{h.current||p||(h.current=!0,t({page:r,limit:Ln,groups:e}).unwrap().then(f=>{f.page===r&&(o(m=>[...m,...f.items]),i(m=>m+1),c(f.total),u(f.totalPages))}).finally(()=>h.current=!1))},[p,r]);return a.useEffect(()=>{!h.current&&!n.length&&x()},[]),{refetch:x,isFinished:p,isLoading:!!h.current,courses:n}},jp=()=>{const[e]=Ki(),[t,n]=a.useState([]),[o,r]=a.useState(1),[i,l]=a.useState(Ln),[c,d]=a.useState(2),u=a.useRef(!1),h=a.useMemo(()=>i<=t.length||c<=o,[o,c,i,t.length]),p=a.useCallback(()=>{u.current||h||(u.current=!0,e({page:o,limit:Ln,verified:!0}).unwrap().then(x=>{x.page===o&&(n(f=>[...f,...x.items.map(m=>({_id:m._id,name:m.name}))]),r(f=>f+1),l(x.total),d(x.totalPages))}).finally(()=>u.current=!1))},[h,o]);return a.useEffect(()=>{!u.current&&!t.length&&p()},[]),{refetch:p,isFinished:h,isLoading:!!u.current,spaces:t}},Ep=({category:e,currentCourses:t=[],handleCoursesChange:n})=>{const{isFinished:o,isLoading:r,refetch:i,courses:l}=Sp(e),c=d=>()=>{let u=[...t];u.includes(d)?u=t.filter(h=>h!==d):u.push(d),n(u)};return l.length?s.jsxs(kt,{children:[s.jsx(Ta,{className:"text-overflow",style:{textTransform:"capitalize"},children:e}),s.jsx(ue,{children:s.jsx(kt,{children:l.map(d=>s.jsx(ue.ListItem,{style:{width:"100%"},className:"text-overflow line-clamp-2",children:s.jsxs($,{align:"center",gap:"12px",children:[s.jsx(ue.Toggle,{checked:t.includes(d._id),value:d._id,onClick:c(d._id)}),d.name]})},d._id+"in-picker"))})}),s.jsx(Xo,{onClick:i,className:B({isFinished:o,isLoading:r}),children:"Load More"})]}):null},Ip=({groups:e,handleChange:t})=>{const n=["my",...Object.values(qo)],o=r=>()=>{let i=[...e];i.includes(r)?i=e.filter(l=>l!==r):i.push(r),t(i)};return s.jsx(Qt,{style:{width:"100%"},label:"Project Category",pickerLabel:"Choose Category",children:s.jsx(ue,{children:s.jsx(kt,{className:"scrollable",children:n.map(r=>s.jsxs(ue.ListItem,{children:[s.jsx(ue.Toggle,{checked:e.includes(r),value:r,onClick:o(r)}),r]},r+"inpicker"))})})})},Ap=({currentValue:e,onChange:t})=>{const{originalName:n}=qi(),o=Xi(),r=[{value:dt.BANNER,label:"Open Sidebar"},{value:dt.SAME_WINDOW_OPEN,label:"Open Project - Same Tab"},{value:dt.NEW_WINDOW_OPEN,label:"Open Project - New Tab"},{value:dt.SAME_WINDOW_OPEN_MAIN,label:`Open ${n} Space - New Tab`},{value:dt.SAME_WINDOW_OPEN_PARTNER,label:`Open ${o??"Partner"} Space - New Tab`},{value:dt.OPEN_TELEGRAM,label:"Open Project - Telegram MiniApp"}];return s.jsx(Zt,{currentValue:e,onChange:t,settingsLabel:"On-click behaviour",options:r})},xo=["#1C1D26","#32333B","#242944","#312347","#431525"],Lp=["#FDFDFD","#FFB65D","#95D8F5","#627EEA","#53259B","#CA47CE"],kp=({listData:e,onChange:t})=>{const n=le(),[o,r]=a.useState(["my",...Object.values(qo)]),[i,l]=a.useState(e?.buttonBehaviour||dt.BANNER),c=h=>{const p={...e,items:h};t(p)},d=h=>{l(h);const p={...e,buttonBehaviour:h};t(p)},u=h=>p=>{const x=e?.[n]??{},f={...e,[n]:{...x,[h]:p}};t(f)};return s.jsxs(s.Fragment,{children:[s.jsx(Ip,{groups:o,handleChange:r}),s.jsx(Qt,{style:{width:"100%"},label:"Display Projects",pickerLabel:"Choose Projects",children:s.jsx(kt,{className:"scrollable",children:o.map(h=>s.jsx(Ep,{currentCourses:e?.items,handleCoursesChange:c,category:h},h+"picker"))})}),s.jsx(Ap,{currentValue:i,onChange:d}),s.jsx(xn,{customColorSet:xo,label:"Card Background",onChange:u("bgColor"),currentColor:e?.[n]?.bgColor??"",withNullifyOption:!0}),s.jsx(xn,{customColorSet:xo,label:"Card Border",onChange:u("borderColor"),currentColor:e?.[n]?.borderColor??"",withNullifyOption:!0}),s.jsx(xn,{customColorSet:Lp,label:"Text Color",onChange:u("color"),currentColor:e?.[n]?.color})]})},Rp=({handleChange:e,currentSpaces:t=[]})=>{const{spaces:n,refetch:o,isLoading:r,isFinished:i}=jp(),l=c=>()=>{let d=[...t];d.includes(c)?d=t.filter(u=>u!==c):d.push(c),e(d)};return s.jsx(Qt,{label:"Display Spaces",pickerLabel:"Choose Spaces",style:{width:"100%"},children:r?s.jsx("div",{style:{padding:"0px 12px"},children:"Loading Spaces..."}):s.jsxs(s.Fragment,{children:[s.jsx(ue,{children:s.jsx(kt,{children:n.map(c=>s.jsx(ue.ListItem,{style:{width:"100%"},className:"text-overflow line-clamp-2",children:s.jsxs($,{align:"center",gap:"12px",children:[s.jsx(ue.Toggle,{checked:t.includes(c._id),value:c._id,onClick:l(c._id)}),c.name]})},c._id+"in-picker"))})}),s.jsx(Xo,{onClick:o,className:B({isFinished:i,isLoading:r}),children:"Load More"})]})})},_p=({onChange:e,listData:t})=>{const n=a.useCallback(o=>{const r={...t,items:o};e(r)},[e,t]);return s.jsx(Rp,{currentSpaces:t?.items,handleChange:n})},Tp=({handleChange:e,currentItems:t=[]})=>{const n=Rn(),o=!n||n.length===0,r=a.useCallback(i=>()=>{let l=[...t];l.includes(i)?l=t.filter(c=>c!==i):l.push(i),e(l)},[t,e]);return s.jsx(Qt,{label:"Display Items",pickerLabel:"Choose Items",style:{width:"100%"},children:o?s.jsx("div",{style:{padding:"0px 12px"},children:"Loading Items..."}):s.jsx(s.Fragment,{children:s.jsx(ue,{children:s.jsx(kt,{children:n.map(i=>s.jsx(ue.ListItem,{style:{width:"100%"},className:"text-overflow line-clamp-2",children:s.jsxs($,{align:"center",gap:"12px",children:[s.jsx(ue.Toggle,{checked:t.includes(i.id.toString()),value:i.id.toString(),onClick:r(i.id.toString())}),i.imageThumb&&s.jsx("img",{src:i.imageThumb,alt:i.name,style:{width:"24px",height:"24px",objectFit:"cover"}}),i.name]})},i.id+"in-picker"))})})})})},Dp=({onChange:e,listData:t})=>{const n=a.useCallback(o=>{const r={...t,items:o};e(r)},[e,t]);return s.jsx(s.Fragment,{children:s.jsx(Tp,{currentItems:t?.items,handleChange:n})})},Np=({handleChange:e,currentChest:t=Qi.NatureChest})=>{const{chests:n=[]}=Yi(),o=a.useMemo(()=>n.map(r=>({label:r.name,value:r.fungibleType})),[n]);return s.jsx(Zt,{currentValue:t,onChange:e,options:o,settingsLabel:"Chest"})},Mp=({widgetId:e,image:t,onImageChange:n})=>{const o=a.useMemo(()=>{if(!t)return"";const{filePath:r}=JSON.parse(t);return r||""},[t]);return s.jsx(ti,{filePath:o,widgetId:e,showDeleteButton:!0,square:!0,onImageChange:n})},Op=({isVisible:e,onClose:t,state:n,onChange:o})=>{const r=le(),i=_=>o({color:_}),l=_=>o({icon:_}),c=_=>o({isRequired:_}),d=_=>o({link:_}),u=_=>o({preset:_}),h=_=>o({listData:_}),p=_=>o(_),x=_=>o({image:_});if(!n?.type)return null;const{type:f,preset:m}=n,{showColorPicker:b,showIconPicker:C,showReqPicker:y,showEditorTabsPicker:j,showPresetPicker:v,showImageSettings:S,showCoursesListSettings:E,showSpacesListSettings:k,showChestsPicker:I,showItemListSettings:w,showWarningImageSettings:A}=Zh(f),T=ep({type:f,preset:m});return s.jsx(Uh,{"data-testid":"customization-sidebar-wrapper",children:s.jsx(Xt,{style:Vh,styleOverlay:Kh,isVisible:e,onClose:t,position:"right",width:"fit-content",portal:as.LOADING,className:B("default-bg",r),withOverlay:!1,backButtonClassName:"drawer-button",children:s.jsxs(Gh,{children:[y&&s.jsx(op,{currentValue:n?.isRequired||!1,onChange:c}),y&&s.jsx(sp,{label:"Link",currentValue:n?.link??"",onChange:d,placeholder:"Paste Link…"}),b&&s.jsx(ip,{currentColor:n?.color||"#FFFFFF",onChange:i}),C&&s.jsx(dp,{color:n?.color||"#FFFFFF",onChange:l}),j&&s.jsx(np,{onChange:p,content:n?.content}),v&&s.jsx(up,{type:n.type,onChange:u,preset:T}),S&&s.jsx(yp,{widgetId:n.id,content:n?.content,handleContentChange:p}),E&&s.jsx(kp,{listData:n?.listData,onChange:h}),k&&s.jsx(_p,{listData:n?.listData,onChange:h}),w&&s.jsx(Dp,{listData:n?.listData,onChange:h}),I&&s.jsx(Np,{currentChest:n.preset,handleChange:u}),A&&s.jsx(Mp,{onImageChange:x,widgetId:n.id,image:n?.image})]})})})},ni=g.div`
  position: absolute;
  left: auto;
  right: calc(100% + 8px);
  top: -8px;
  transition: 0.3s;
  opacity: 0;
`,si=g.div`
  gap: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: min-content;
  position: absolute;
  top: 0;
  left: calc(100% + 8px);
  height: 100%;
  min-height: fit-content;
  transition: 0.3s;
  box-sizing: content-box;
  &.left {
    left: auto;
    right: calc(100% + 8px);
    width: fit-content;
  }
`,Ye=g.div`
  display: flex;
  width: 32px;
  height: 32px;
  background: #ffffff0a;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  color: #afb4b8;
  & > svg {
    width: 24px;
    height: 24px;
  }
  &:hover,
  &.forcedShow {
    color: var(--font-color-strong);
    &.answers {
      color: #fc6842;
      background-color: #fc68421a;
    }
    &.comments {
      color: #6487ef;
      background-color: #6487ef1a;
    }
    &.rewards {
      color: #ffbf66;
      background-color: #ffbf661a;
    }
    &.delete {
      color: #f14f64;
      background-color: #f14f641a;
    }
  }
  &:not(.forcedShow) {
    display: none;
  }
`,$p=g.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  background: transparent;
  transition: margin 0.3s;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% + 3px); // 3px for smoother animation
    height: calc(100% + 3px); // 3px for smoother animation
    translate: -50% -50%;
    background: transparent;
    z-index: -1;
    display: block;
    content: "";
    border-radius: 8px;
    transition: 0.3s;
    pointer-events: none;
  }
  &::after {
    // just to have hover on sides of slide
    position: absolute;
    z-index: -1;
    width: calc(100% + 100px);
    height: 100%;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    display: none;
    content: "";
  }
  &:hover,
  &.isDragging {
    margin-bottom: 8px;
    &::after {
      display: block;
    }
    &::before {
      background: #ffffff0a;
      width: calc(100% + 16px);
      height: calc(100% + 16px);
    }
    &.light::before {
      background: #1111110a;
    }
    & ${si} {
      top: -8px;
      padding-left: 8px;
      flex-direction: row;
    }
    & ${ni} {
      padding-right: 8px;
      opacity: 1;
    }
    & ${Ye} {
      display: flex;
    }
  }
  &.light ${Ye} {
    background: #1111110a;
  }
  &.light:hover,
  &.light.isDragging {
    &::before {
      background: #1111110a;
    }
  }
`,Fp=g.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 72px;
  gap: 12px;
  padding: 10px 20px; // 10 px to fit lots of rewards?
  background: #ffffff0a;
  border-radius: 10px;
  &.light {
    background: #1111110a;
  }
`,Bp=g.div`
  & > div {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffbf66;
    border-radius: 4px;
    color: white;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  align-items: center;
  display: flex;
  gap: 9px;
  font-size: 18px;
  font-weight: 400;
  line-height: 100%;
  color: #ffbf66;
`,Pp=g.div`
  display: flex;
  gap: 4px;
`,Hp=g.div`
  width: 32px !important;
  height: 32px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  & > img {
    width: 24px;
    height: 24px;
  }
`,Wp=g.div`
  color: var(--font-color-strong);
  cursor: pointer;
  transition: 0.3s;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: #ffffff0a;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    opacity: 0.8;
  }
  &.light {
    background: #1111110a;
  }
`,zp="_modal_1oo41_1",Gp="_light_1oo41_8",Vn={modal:zp,light:Gp},Up=g.div`
  width: 600px;
  height: 575px;
  padding: 40px 40px 15px;
  overflow: hidden;
`,Vp=g.div`
  display: flex;
  align-items: center;
  font-size: 31px;
  line-height: 100%;
  color: var(--font-color-strong);
  margin-bottom: 14px;
`,Kp=g.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  gap: 8px;
`,qp=g(we.div)`
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 4px;
  background: ${e=>e.$theme===V.LIGHT?"#11111108":"#FFFFFF08"};
  border-radius: 100px;
  width: 100%;
`,Xp=g(Yo)`
  width: 24px;
  cursor: pointer;
`,Yp=g(Da)`
  width: 24px;
  cursor: pointer;
`,Qp=g.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  border-radius: 46px;
  max-width: 464px;
  scroll-behavior: smooth;
`,Jp=g.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 18px;
  border-radius: 46px;
  white-space: nowrap;
  cursor: pointer;
  color: ${e=>e.$active?e.$color:"var(--font-color)"};
  background: ${e=>e.$active?e.$bg:"transparent"};
  transition: 0.3s;
`,Zp=g(we.div)`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  gap: 3px;
  background: ${e=>e.$theme===V.LIGHT?"#11111108":"#FFFFFF08"};
  border-radius: 100px;
  ${e=>e.$active&&"jutify-content: flex-start;"}
  min-width: 48px;
  padding: 0px 12px;
`,ef=g(Na)`
  width: 24px;
  cursor: pointer;
`,tf=g(Vo)`
  width: 28px;
  cursor: pointer;
`,nf=({onClick:e})=>s.jsx(we.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},style:{display:"flex",alignItems:"center",height:28},onClick:t=>{t.stopPropagation(),e()},children:s.jsx(tf,{})}),sf=g(we.input)`
  background: none;
  border: none;
  outline: none;
  font-size: 18px;
  height: 20px;
  width: 100%;
  color: ${e=>e.$theme===V.DARK?"white":"#111"};
`;var pt=(e=>(e.ALL="All",e.ORIGINAL="Mighty Originals",e.CHESTS="Treasure Chests",e.CERTIFICATES="Certificates",e))(pt||{});const mo={All:{color:"#627EEA",bg:"white"},"Mighty Originals":{color:"white",bg:"#8578D6"},"Treasure Chests":{color:"white",bg:"#29AB88"},Certificates:{color:"white",bg:"#F14F63"}},of={initial:{width:"0px",padding:"4px 4px",marginrRight:"8px",opacity:0},animate:{width:"100%",padding:"4px 4px",marginrRight:"8px",opacity:1},exit:{width:"0px",padding:"4px 0px",marginRight:"0px",opacity:0}},rf=({search:e,tab:t,updateState:n})=>{const o=ve(Ze),[r,i]=a.useState(!1),l=()=>i(!0),c=()=>{i(!1),n({search:null})},d=m=>n({search:m}),u=a.useRef(null),h=a.useMemo(()=>u.current?u.current.getBoundingClientRect().width:0,[u]),p=()=>{u.current&&(u.current.scrollLeft=h)},x=()=>{u.current&&(u.current.scrollLeft=0)},f=m=>{u.current=m};return s.jsxs(Kp,{children:[s.jsx(je,{exitBeforeEnter:!0,children:!r&&s.jsxs(qp,{variants:of,exit:"exit",initial:"initial",animate:"animate",$theme:o,children:[s.jsx(Xp,{onClick:x}),s.jsx(Qp,{ref:f,children:Object.values(pt).map(m=>s.jsx(Jp,{$active:m===t,$color:mo[m].color,$bg:mo[m].bg,onClick:()=>n({tab:m}),children:m},m))}),s.jsx(Yp,{onClick:p})]})}),s.jsxs(Zp,{animate:r?{width:"520px"}:{width:"48px"},$theme:o,$active:r,onClick:l,children:[s.jsx(ef,{}),r&&s.jsxs(s.Fragment,{children:[s.jsx(sf,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},placeholder:"Search Items",$theme:o,onChange:m=>d(m.target.value),value:e||""}),s.jsx(nf,{onClick:c})]})]})]})},af=g(we.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 405px;
`,lf=g.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  max-height: inherit;
  overflow-y: auto;
  padding-right: 30px;
  margin-right: -30px;
  box-sizing: content-box;
`,cf=g.div`
  display: flex;
  padding-bottom: 7px;
  width: 100%;
  border-bottom: 1px solid ${e=>e.$theme===V.LIGHT?"#11111126":"#FFFFFF26"};
`,bo=g.p`
  opacity: 0.4;
  font-size: 16px;
  font-weight: 400;
  color: ${e=>e.$theme===V.LIGHT?"#111":"#fff"};
`,df=g.div`
  display: flex;
  align-items: center;
  padding: 18px 0px;
  width: 100%;
  border-bottom: 1px solid ${e=>e.$theme===V.LIGHT?"#11111126":"#FFFFFF26"};
`,uf=g.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 14px;
`,hf=g.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  color: ${({$grade:e})=>Ji[e]};
  ${({$grade:e})=>e===$o.COMMON&&"color: var(--font-color-strong) !important;"}
`;g.p`
  color: white;
  font-size: 18px;
`;const pf=g.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;
  min-width: 102px;
  justify-content: space-between;
`,ff=g.p`
  font-size: 18px;
  font-weight: 500;
`,vo=g.div`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${({$theme:e})=>e===V.DARK?"#ffffff0f":"#1111110f"};
  transition: 0.3s;
  color: var(--font-color-strong);
  &:hover {
    background: ${({$theme:e})=>e===V.DARK?"#ffffff16":"#11111116"};
  }
  & > svg {
    height: 20px;
    width: 20px;
  }
`,gf=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:6,height:2,viewBox:"0 0 6 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M0.333984 1H2.95408L5.57419 1",stroke:"currentColor",strokeWidth:.666667,strokeLinecap:"round",strokeLinejoin:"round"})),xf=a.forwardRef(gf),mf=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:8,height:8,viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M0.886719 4.15799H3.99403M3.99403 4.15799L3.99403 7.2691M3.99403 4.15799L3.99403 1.04688M3.99403 4.15799L7.10135 4.15799",stroke:"currentColor",strokeWidth:.666667,strokeLinecap:"round",strokeLinejoin:"round"})),bf=a.forwardRef(mf),vf=({item:e,updateReward:t,rewards:n})=>{const{roles:o}=ve(Ro),r=le(),i=a.useMemo(()=>o&&o.includes(hs.ADMIN),[o]),l=a.useMemo(()=>n.find(p=>p.id===e.id),[e,n]),c=a.useMemo(()=>n.find(p=>p.id===0)?.quantity||0,[n]),d=a.useMemo(()=>n.filter(p=>!!p.quantity).length,[n]),u=()=>{if(i)t(e.id,l?l.quantity+1:1);else{if(l?.id===0&&l?.quantity>=10)return;if(l?.id===0&&c>0){t(e.id,l?l.quantity+1:1);return}else if((l?.quantity||0)>=1)return;if(d>=2)return;t(e.id,l?l.quantity+1:1)}},h=()=>{t(e.id,l&&l?.quantity>0?l.quantity-1:0)};return s.jsxs(df,{$theme:r,children:[s.jsx(uf,{src:e.image}),s.jsx(hf,{$grade:e.grade,children:e.name}),s.jsxs(pf,{children:[s.jsx(vo,{$theme:r,onClick:u,children:s.jsx(bf,{})}),s.jsx(ff,{children:l?.quantity||0}),s.jsx(vo,{$theme:r,onClick:h,children:s.jsx(xf,{})})]})]})},wf=({items:e,rewards:t,updateReward:n,search:o})=>{const r=d=>d.toLowerCase(),i=a.useMemo(()=>o?e.filter(d=>r(d.name).includes(r(o))):e,[o,e]),l=a.useMemo(()=>o?i.sort((d,u)=>Number(r(u.name).startsWith(r(o)))-Number(r(d.name).startsWith(r(o)))):i,[o,i]),c=le();return s.jsxs(af,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[s.jsxs(cf,{$theme:c,children:[s.jsx(bo,{$theme:c,children:"Item"}),s.jsx(bo,{$theme:c,style:{marginLeft:"auto",minWidth:"102px"},children:"Amount"})]}),s.jsx(lf,{children:l.map(d=>s.jsx(vf,{rewards:t,updateReward:n,item:d},"RewardItem"+d.fungibleType+d.id))})]})},wo=({rewards:e,updateReward:t,search:n})=>{const o=Rn(),{roles:r}=is(),i=a.useMemo(()=>r&&r.includes(hs.ADMIN),[r]),l=a.useMemo(()=>o.filter(c=>c.type==="fungible"&&(i||!c.fungibleType?.includes("-chest"))&&(i||c.grade===$o.COMMON)),[o]);return s.jsx(wf,{search:n,items:l,rewards:e,updateReward:t})},Cf=g.div`
  position: absolute;
  top: calc(100% + 10px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`,yf=g(we.div)`
  display: flex;
  width: 100%;
  align-items: center;
  height: 100px;
  background: ${e=>e.$theme===V.LIGHT?"rgb(var(--glass-bg--rgb))":"rgba(255, 255, 255, 0.04)"};
  border: 1px solid ${e=>e.$theme===V.LIGHT?"rgba(17, 17, 17, 0.2)":"rgba(255, 255, 255, 0.2)"};
  backdrop-filter: blur(98.4463px);
  border-radius: 10px;
  gap: 6px;
  padding: 0px 14px;
`,oi=g.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--font-color-strong);
  background: ${e=>e.$theme===V.LIGHT?"#1111110F":"#ffffff0F"};
  width: 100%;
  border-radius: 4px;
  transition: 0.3s;
`,Sf=g(we.div)`
  cursor: pointer;
`,ri=g.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #11111166;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 50%;
    height: 50%;
  }
`,jf=g(we.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 75px;
  align-items: center;
  transition: 0.3s;
  border-radius: 4px;
  &:hover {
    background: ${e=>e.$theme===V.LIGHT?"#1111110F":"#ffffff0F"};
    & ${oi} {
      background: transparent;
    }
    & ${ri} {
      opacity: 1;
      pointer-events: all;
    }
  }
`,Ef=g.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`,If=({id:e,quantity:t,deleteReward:n})=>{const o=le(),r=ve(ko),i=a.useMemo(()=>r.find(c=>c.id===e),[e,r]),l=()=>{n(e)};return s.jsx(Sf,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},exit:{x:-20,opacity:0},children:s.jsxs(jf,{$theme:o,children:[s.jsx(ri,{onClick:l,children:s.jsx(tt,{})}),s.jsx(Ef,{src:i?.image}),s.jsx(oi,{children:t})]})})},Co={initial:{y:20,opacity:0,scale:.8},animate:{y:0,opacity:1,scale:1},exit:{opacity:-2}},Af=({rewards:e,onSubmit:t,updateRewards:n})=>{const o=le(),r=a.useMemo(()=>e.filter(l=>!!l.quantity),[e]),i=l=>n(l,0);return s.jsxs(Cf,{children:[s.jsx(je,{children:!!r.length&&s.jsx(yf,{$theme:o,variants:Co,initial:"initial",animate:"animate",exit:"exit",children:s.jsx(je,{children:r.map(l=>s.jsx(If,{deleteReward:i,...l},"RewardItem"+l.id))})})}),s.jsx(je,{children:s.jsx(we.div,{variants:Co,initial:"initial",animate:"animate",exit:"exit",transition:{delay:.2},children:s.jsx(Fe,{onClick:t,variant:"rounded",style:{width:"fit-content",color:"white"},children:r.length?"Add to slide":"Save without rewards"})})})]})},ii=g(we.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 9px;
`,ai=g.img`
  height: 147px;
  width: auto;
  object-fit: contain;
  margin-bottom: 16px;
`,li=g.p`
  font-size: 26px;
  color: var(--font-color-strong);
  margin-bottom: 8px;
  text-align: center;
`,ci=g.p`
  font-size: 16px;
  opacity: 0.7;
  color: var(--font-color-strong);
  margin-bottom: 32px;
  text-align: center;
  max-width: 420px;
`,di=g(Fe)`
  border-radius: 100px !important;
  width: 174px !important;
  background: linear-gradient(92.09deg, rgba(255, 255, 255, 0.14) 1.76%, rgba(255, 255, 255, 0.06) 109.28%) !important;
  color: var(--font-color-strong) !important;
  font-size: 20px !important;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`,Lf=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:28,height:22,viewBox:"0 0 28 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M23.6006 2.46142C21.821 1.64669 19.9424 1.06869 18.0126 0.742188C17.7485 1.21426 17.5096 1.69996 17.2968 2.19725C15.2412 1.88749 13.1508 1.88749 11.0952 2.19725C10.8823 1.70001 10.6433 1.21432 10.3794 0.742188C8.44835 1.07144 6.56843 1.65082 4.78707 2.46568C1.25061 7.69794 0.291931 12.8002 0.771271 17.8301C2.84231 19.3603 5.1604 20.524 7.62476 21.2707C8.17966 20.5244 8.67068 19.7326 9.09261 18.9038C8.29122 18.6045 7.51774 18.2353 6.78112 17.8003C6.97499 17.6597 7.1646 17.5148 7.34781 17.3742C9.4912 18.3822 11.8306 18.9048 14.1992 18.9048C16.5677 18.9048 18.9071 18.3822 21.0505 17.3742C21.2359 17.5255 21.4255 17.6703 21.6172 17.8003C20.8792 18.236 20.1043 18.6059 19.3015 18.906C19.7229 19.7344 20.2139 20.5255 20.7693 21.2707C23.2358 20.527 25.5557 19.3638 27.6271 17.8322C28.1895 11.9992 26.6663 6.94378 23.6006 2.46142ZM9.69977 14.7368C8.36401 14.7368 7.26046 13.5246 7.26046 12.0333C7.26046 10.542 8.32566 9.31917 9.69551 9.31917C11.0654 9.31917 12.1604 10.542 12.1369 12.0333C12.1135 13.5246 11.0611 14.7368 9.69977 14.7368ZM18.6986 14.7368C17.3607 14.7368 16.2614 13.5246 16.2614 12.0333C16.2614 10.542 17.3266 9.31917 18.6986 9.31917C20.0705 9.31917 21.1571 10.542 21.1336 12.0333C21.1102 13.5246 20.0599 14.7368 18.6986 14.7368Z",fill:"currentColor"})),ui=a.forwardRef(Lf),kf=()=>{const e=()=>{window.open("https://discord.gg/7cdjn7QZ6M","_blank")};return s.jsxs(ii,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[s.jsx(ai,{src:Ma}),s.jsx(li,{children:"Your company does not have any chests"}),s.jsx(ci,{children:"Please contact us at discord to discuss the terms and conditions for creating your unique chest"}),s.jsx(di,{onClick:e,icon:ui,children:"Contact"})]})},Rf="/static/media/certificate.B0fJ4VqI.png",_f=()=>{const e=()=>{window.open("https://discord.gg/7cdjn7QZ6M","_blank")};return s.jsxs(ii,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[s.jsx(ai,{src:Rf}),s.jsx(li,{children:"Your space does not have any Certificates"}),s.jsx(ci,{children:"Please contact us on discord to discuss the terms and conditions for creating your own certificates"}),s.jsx(di,{onClick:e,icon:ui,children:"Contact"})]})},Tf={tab:pt.ALL,search:null,rewards:[]},Df=({handleClose:e,isOpen:t,onSubmit:n,slideRewards:o})=>{const r=le(),[i,l]=a.useReducer((f,m)=>({...f,...m}),{...Tf,rewards:o.length?structuredClone(o):[]}),{rewards:c,search:d,tab:u}=i,h=(f,m)=>{const b=c.find(C=>C.id===f);if(b){const C={...b,quantity:m},y=c.filter(j=>j.id!==f);l({rewards:[...y,C]})}else l({rewards:[{id:f,quantity:m},...c]})},p=()=>{n(c.filter(f=>!!f.quantity)),e()},x=a.useMemo(()=>({[pt.ALL]:s.jsx(wo,{search:d,rewards:c,updateReward:h},"all"),[pt.ORIGINAL]:s.jsx(wo,{search:d,rewards:c,updateReward:h},"origs"),[pt.CHESTS]:s.jsx(kf,{},"chests"),[pt.CERTIFICATES]:s.jsx(_f,{},"certfs")}),[c,h,d]);return s.jsxs(Oa,{closeButtonLocation:"outside",className:B(Vn.modal,Vn[r]),containerClassName:Vn.container,open:t,onClose:e,children:[s.jsxs(Up,{children:[s.jsx(Vp,{children:"Add Rewards"}),s.jsx(rf,{search:d,tab:u,updateState:l}),s.jsx(je,{exitBeforeEnter:!0,children:x[u]})]}),s.jsx(Af,{updateRewards:h,onSubmit:p,rewards:c})]})},Nf=()=>{const e=Rn(),t=le(),{slide:n,slideActions:o}=se(),{isOpen:r,open:i,close:l}=ee(!1),c=a.useCallback(h=>{o.update({...n,rewards:h}),l()},[n]),d=a.useMemo(()=>n.rewards.filter(h=>!!h.quantity),[n.rewards]),u=a.useMemo(()=>d.map(h=>{const p=e.find(x=>x.id===h.id);if(p)return{...h,image:p.image,grade:p.grade}}).filter(h=>!!h).slice(0,6),[d,e]);return s.jsxs(Fp,{className:t,children:[s.jsx(Df,{isOpen:r,handleClose:l,slideRewards:n.rewards,onSubmit:c}),s.jsxs(Bp,{children:[s.jsx("div",{children:s.jsx(Zi,{})}),"Slide Rewards"]}),s.jsxs(Pp,{children:[u.map(({id:h,image:p,grade:x})=>s.jsx(Hp,{className:B(Pt[x],Pt.small,Pt.mightybg,Pt.item,Pt[t]),children:s.jsx("img",{src:p,alt:""})},`${h}-rew-controls`)),s.jsx(Wp,{className:t,onClick:i,children:s.jsx($a,{})})]})]})},hi=({openSettingsSidebar:e,children:t,hide:n,hideSettingsButton:o})=>{const r=le(),{slide:i,slideActions:l,isReordering:c}=se(),{attributes:d,listeners:u,isDragging:h}=$n({id:i._id,disabled:c}),p=!!i.rewards.length,{toggle:x,isOpen:f}=ee(p),{answers:m}=Rs(i._id),{comments:b}=ks(i._id),{updateState:C}=gt(),y=i.typeOfSlide!==O.INFO,j=m.length+b.length>0,v=()=>C({dashboardContextTab:y?"Answers":"Comments",selectedSlideId:i._id}),S=y?na:To,E=y?"answers":"comments";return n?s.jsx(s.Fragment,{children:t}):s.jsxs(s.Fragment,{children:[s.jsxs($p,{$theme:r,className:B(r,{isDragging:h}),children:[s.jsx(ni,{children:s.jsx(Ye,{...d,...u,children:s.jsx(os,{})})}),s.jsxs(si,{children:[!o&&s.jsx(Ye,{onClick:e,children:s.jsx(_o,{})}),s.jsx(Ye,{onClick:l.duplicate,children:s.jsx(ea,{})}),s.jsx(Ye,{className:"delete",onClick:l.delete,children:s.jsx(tt,{})}),s.jsx(Ye,{className:B("rewards",{forcedShow:f||p}),onClick:x,children:s.jsx(ta,{})}),s.jsx(Ye,{className:B(E,{forcedShow:j}),onClick:v,children:s.jsx(S,{})})]}),t]}),s.jsx(ds,{className:B({isOpen:f}),children:s.jsx("div",{children:s.jsx(Nf,{})})})]})},Mf=({onChange:e,widget:t,index:n})=>{const[o,r]=a.useReducer(zh,{...Wh,...t}),{slide:{typeOfSlide:i,content:l},slideActions:{delete:c}}=se(),{isOpen:d,close:u,open:h}=ee(!1),p=a.useRef(!1);a.useEffect(()=>{p.current&&e(o)},[o]);const x=C=>{p.current||(p.current=!0),r(C)},f=a.useCallback(()=>h(),[h]);if(!o.type)return null;const m=![L.FILE,L.TEXT,L.VIDEO].includes(o.type),b=n+1===l.length;return s.jsxs("div",{style:{width:"100%"},children:[s.jsx(hi,{hide:!b||i!==O.INFO,openSettingsSidebar:f,hideSettingsButton:o.type===L.TEXT,children:Hh[o.type]({...o,type:o.type,onChange:x,onDelete:c,openMenu:f})}),m&&s.jsx(Op,{state:o,isVisible:d,onClose:u,onChange:x})]})},Of=({onChange:e})=>{const{slide:{content:t,typeOfSlide:n},slideActions:{delete:o}}=se(),r=_t(),i=a.useRef(!1),[l,c]=a.useState(t);a.useEffect(()=>{c(t)},[t]);const d=a.useCallback(u=>r(h=>{const p=structuredClone(l);typeof h=="string"&&(p[u].content=h),typeof h=="object"&&(p[u]={...p[u],...h}),e(p)},500),[l,e]);return a.useEffect(()=>{if(!i.current){i.current=!0;return}c(t)},[t]),l.length?s.jsx($,{direction:"column",gap:"20px",children:!!l.length&&s.jsx(s.Fragment,{children:l.map((u,h)=>s.jsx(Mf,{index:h,widget:u,onChange:d(h)},`widget-${u.id}`))})}):n!==O.INFO?null:s.jsxs("p",{children:["This block is somehow empty! Please"," ",s.jsx("u",{onClick:o,style:{cursor:"pointer"},children:"Delete"})," ","it."]})};var kn=(e=>(e.CHECKBOX="checkbox",e.RADIO="radio",e))(kn||{});const $f={},Ff=({type:e,label:t,checked:n,additionalInfo:o,onChange:r})=>s.jsx(pl,{label:t?.toString()??"",onChange:r,type:e===kn.CHECKBOX?"checkbox":"radio",checked:n,children:o&&s.jsx("div",{className:$f.additionalInfo,children:o})});var Rt=(e=>(e.WARNING="warning",e))(Rt||{});const Bf=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:20,height:21,viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.5 10.6797C2.5 4.84635 4.16743 3.17969 10.0004 3.17969C15.8333 3.17969 17.5 4.84635 17.5 10.6797C17.5 16.513 15.7692 18.1797 10.0004 18.1797C4.23154 18.1797 2.5 16.513 2.5 10.6797Z",stroke:"url(#paint0_linear_52979_56301)",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.5 10.6797C2.5 4.84635 4.16743 3.17969 10.0004 3.17969C15.8333 3.17969 17.5 4.84635 17.5 10.6797C17.5 16.513 15.7692 18.1797 10.0004 18.1797C4.23154 18.1797 2.5 16.513 2.5 10.6797Z",stroke:"url(#paint1_radial_52979_56301)",strokeOpacity:.8,strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M10 10.2637V14.0137",stroke:"url(#paint2_linear_52979_56301)",strokeWidth:1.6,strokeLinecap:"round"}),a.createElement("path",{d:"M10 10.2637V14.0137",stroke:"url(#paint3_radial_52979_56301)",strokeOpacity:.8,strokeWidth:1.6,strokeLinecap:"round"}),a.createElement("path",{d:"M10 7.3457V7.3467",stroke:"url(#paint4_linear_52979_56301)",strokeWidth:1.6,strokeLinecap:"round"}),a.createElement("path",{d:"M10 7.3457V7.3467",stroke:"url(#paint5_radial_52979_56301)",strokeOpacity:.8,strokeWidth:1.6,strokeLinecap:"round"}),a.createElement("defs",null,a.createElement("linearGradient",{id:"paint0_linear_52979_56301",x1:2.66364,y1:18.1797,x2:24.9482,y2:13.1784,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#FFE152"}),a.createElement("stop",{offset:.40625,stopColor:"#FFD435"}),a.createElement("stop",{offset:1,stopColor:"#FFD341"})),a.createElement("radialGradient",{id:"paint1_radial_52979_56301",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(5.35455 5.97969) rotate(69.1544) scale(13.0545 11.165)"},a.createElement("stop",{stopColor:"#FFE981"}),a.createElement("stop",{offset:1,stopColor:"#FFE152",stopOpacity:0})),a.createElement("linearGradient",{id:"paint2_linear_52979_56301",x1:10.0109,y1:14.0137,x2:11.5658,y2:13.9206,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#FFE152"}),a.createElement("stop",{offset:.40625,stopColor:"#FFD435"}),a.createElement("stop",{offset:1,stopColor:"#FFD341"})),a.createElement("radialGradient",{id:"paint3_radial_52979_56301",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(10.1903 10.9637) rotate(84.2021) scale(3.06568 0.792391)"},a.createElement("stop",{stopColor:"#FFE981"}),a.createElement("stop",{offset:1,stopColor:"#FFE152",stopOpacity:0})),a.createElement("linearGradient",{id:"paint4_linear_52979_56301",x1:10.0109,y1:7.3467,x2:10.0109,y2:7.33975,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#FFE152"}),a.createElement("stop",{offset:.40625,stopColor:"#FFD435"}),a.createElement("stop",{offset:1,stopColor:"#FFD341"})),a.createElement("radialGradient",{id:"paint5_radial_52979_56301",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(10.1903 7.34589) rotate(0.150471) scale(0.309698 0.00209169)"},a.createElement("stop",{stopColor:"#FFE981"}),a.createElement("stop",{offset:1,stopColor:"#FFE152",stopOpacity:0})))),Pf=a.forwardRef(Bf),Hf=g.div(({theme:e})=>`
  padding: 11px 13px;
  border-radius: 5px;
  background: ${Je(e.theme.basicYellow,.3)};
  backdrop-filter: blur(2px);
  color: var(--font-color);
  display: flex;
  align-items: center;
`),qt=({type:e,children:t,...n})=>s.jsxs(Hf,{...n,children:[s.jsx(Pf,{})," ",t]}),Wf="_title_hx8o9_1",zf="_blurBg_hx8o9_8",Gf="_options_hx8o9_18",Uf="_editingControls_hx8o9_41",Vf="_controlWrapper_hx8o9_54",Kf="_addInput_hx8o9_62",qf="_dotsButton_hx8o9_73",Xf="_optionWrapper_hx8o9_94",ze={title:Wf,blurBg:zf,options:Gf,editingControls:Uf,controlWrapper:Vf,addInput:Kf,dotsButton:qf,optionWrapper:Xf},Kn=-1,yo=({answers:e,rightAnswers:t,onChange:n,slideId:o})=>{const{slide:r}=se(),i=sa(),l=ps().shape({title:fs().required().min(2).max(180)}),c=D=>{n(vn(r,{answers:f,rightAnswers:D}))},d=D=>{n(vn(r,{answers:D,rightAnswers:u}))},[u,{toggleItem:h,replaceItem:p,removeItems:x}]=$s(t,c),[f,{addItem:m,replaceItem:b,removeItems:C}]=$s(e,d),y=a.useRef(null),j=a.useMemo(()=>u.length>1,[u]),[v,S]=a.useState(null),[E,k]=a.useState(""),[I,w]=a.useState(""),A=D=>()=>{h({item:{text:D},findFn:W=>W.text===D,filterFn:W=>W.text!==D})},T=()=>{S(Kn)},_=()=>{S(null),w(""),k("")},H=D=>()=>{S(D)},q=async D=>{const W=D.target.value;try{await l.validate({title:W}),w("")}catch(X){w(X.errors[0])}finally{k(W)}},K=()=>{if(v===null)return;if(v===Kn){m({text:E});return}const D=f[v].text;b({newItem:{text:E},findFn:W=>W.text===D}),p({newItem:{text:E},findFn:W=>W.text===D})},te=D=>()=>{if(u.length===1&&u[0].text===D){Le({type:"incorrect",label:"Cannot remove answer",sub:"Must have at least one right answer"});return}C({filterFn:W=>W.text!==D}),x({filterFn:W=>W.text!==D})},ce=a.useMemo(()=>s.jsxs("div",{children:[s.jsx(Ps,{className:B(ze.controlWrapper,j?"checkbox":"radio"),style:{borderColor:Je(i.theme.fontColorStrong,.05)},children:s.jsx(Hs,{children:s.jsx(Fa,{autoFocus:!0,className:ze.addInput,onChange:q,minLength:2,maxLength:180,placeholder:"Enter answer title here",ref:y,value:E})})}),s.jsxs("div",{className:ze.editingControls,children:[s.jsx(Ut,{label:"Cancel",variant:"outline",onClick:_,size:"sm"}),s.jsx(Ut,{isDisabled:!!I,label:"Save",variant:"cool",onClick:K,size:"sm"})]})]},o),[E,I]);return a.useEffect(()=>{v!==null&&y.current?.focus()},[v]),a.useEffect(()=>{_()},[f,u]),s.jsxs("div",{style:{maxWidth:"100%",width:"100%"},children:[s.jsx("div",{className:ze.title,children:"Answers"}),s.jsxs("div",{className:ze.options,children:[o===jt&&s.jsx("div",{className:ze.blurBg}),f.map((D,W)=>v===W?ce:s.jsx("div",{className:ze.optionWrapper,children:s.jsx(Ff,{checked:u.some(X=>X.text===D.text),label:D.text,type:j?kn.CHECKBOX:kn.RADIO,onChange:A(D.text),additionalInfo:s.jsx(Qo,{toggle:s.jsx("button",{className:ze.dotsButton,children:s.jsx(Fo,{})}),items:[{title:"Edit Answer",icon:s.jsx(rs,{}),onClick:H(W)},{title:"Delete Answer",icon:s.jsx(tt,{}),onClick:te(D.text)}]})})},W)),v!==null&&v===Kn&&ce,f.length<4&&v===null&&s.jsx(Ps,{className:B(ze.controlWrapper,j?"checkbox":"radio"),onClick:T,style:{borderColor:Je(i.theme.fontColorStrong,.05)},children:s.jsx(Hs,{children:s.jsxs(fl,{children:[s.jsx(Bo,{}),"Add new answer"]})})})]}),I&&s.jsx(qt,{type:Rt.WARNING,children:I}),v!==null&&f.filter((D,W)=>W!==v).some(D=>D.text===E)&&s.jsxs(qt,{type:Rt.WARNING,children:["Answer with value ",s.jsx("strong",{children:E})," already exists"]})]})},Yf="_title_wd9n8_1",Qf="_answers_wd9n8_8",Jf="_answer_wd9n8_8",Zf="_answerSettingsButton_wd9n8_29",eg="_answerContent_wd9n8_56",tg="_light_wd9n8_61",ng="_controls_wd9n8_65",ct={title:Yf,answers:Qf,answer:Jf,answerSettingsButton:Zf,answerContent:eg,light:tg,controls:ng},hn=-1,sg=({answers:e,rightAnswers:t,onChange:n})=>{const{slide:o}=se(),r=a.useRef(null),[i,l]=a.useState(null),[c,d]=a.useState(""),[u,h]=a.useState(""),p=ps().shape({answer:fs().required().max(100)}),x=ve(Ze),f=(v=hn)=>{v!==hn&&d(t[v].text),l(v)},m=()=>{l(null)},b=async v=>{const S=v.target.value;try{await p.validate({answer:S}),h("")}catch(E){h(E.errors[0])}finally{d(S)}},C=()=>{if(u||i===null)return;let v=[...t];i===hn?v=[...v,{text:c}]:v[i]={text:c},n(vn(o,{answers:v,rightAnswers:v}))},y=v=>()=>{const S=t.filter((E,k)=>k!==v);n(vn(o,{answers:S,rightAnswers:S}))};a.useEffect(()=>{m()},[t]),a.useEffect(()=>{i!==null&&r.current?.focus()},[i]);const j=a.useMemo(()=>s.jsxs("div",{children:[s.jsx(gl,{className:x,value:c,placeholder:"Type your answer here...",onChange:b,rows:c?.split(`
`).length,ref:r}),s.jsxs("div",{className:ct.controls,children:[s.jsx(Ut,{label:"Cancel",onClick:m,size:"sm",variant:"outline"}),s.jsx(Ut,{label:"Save",onClick:C,size:"sm",variant:"cool"})]})]}),[b]);return s.jsxs("div",{children:[s.jsx("div",{className:ct.title,children:"answer"}),s.jsxs("div",{className:ct.answers,children:[t.map((v,S)=>S===i?s.jsx(a.Fragment,{children:j},v.text+S):s.jsxs("div",{className:`${ct.answer}`,children:[s.jsx("div",{className:`${ct.answerContent} ${ct[x]}`,onClick:()=>f(S),children:v.text}),s.jsx(Qo,{toggle:s.jsx(Fo,{}),toggleClassName:ct.answerSettingsButton,items:[{title:"Delete",onClick:y(S)},{title:"Edit",onClick:()=>f(S)}]})]},v.text+S)),i===hn&&j]}),u&&s.jsx(qt,{type:Rt.WARNING,children:u}),i===null&&s.jsxs(Fe,{size:"sm",variant:"rounded",fullWidth:!1,onClick:()=>f(),children:[s.jsx(Bo,{})," Add one more possible answer"]})]})};class og{constructor(t){this._frozenRange=null,this._extensions={},this.focus=(r=!1)=>{this._root.focus();const i=window.getSelection();if(!i)return;const l=new Range;l.selectNodeContents(this._root),l.collapse(r),i.removeAllRanges(),i.addRange(l)},this.getRoot=()=>this._root,this.getWrapper=()=>this._wrapper,this.attachExtension=r=>{const i=new r.Extension(r.props);i.attach(this),this._extensions[r.id]=i},this.detachExtension=r=>{const i=this._extensions[r];i&&(i.detach(),delete this._extensions[r])},this._bootstrap=()=>{this._initListeners()},this._initListeners=()=>{this._root.addEventListener("keydown",this._handleKeyDown),this._root.addEventListener("input",this._handleInput)},this._handleKeyDown=r=>{if(r.key==="Tab"){r.preventDefault();return}},this._handleInput=()=>{if(this._root.innerHTML===""){this._root.innerHTML="<div>&#x200b;</div>";return}const i=window.getSelection()?.getRangeAt(0);if(!i)return;const l=i.startContainer;if(l.nodeType===Node.TEXT_NODE)return;const c=l;c.innerHTML.trim()==="<br>"&&(c.innerHTML="&#x200b;")},this.freezeSelection=()=>{const r=window.getSelection();!r||!r.rangeCount||(this._frozenRange=r.getRangeAt(0))},this.restoreSelection=()=>{const r=window.getSelection();!this._frozenRange||!r||(r.removeAllRanges(),r.addRange(this._frozenRange),this._frozenRange=null)},this.lock=()=>{this._root.addEventListener("keydown",this._handleKeydownLock)},this.unlock=()=>{this._root.removeEventListener("keydown",this._handleKeydownLock)},this._handleKeydownLock=r=>{r.preventDefault()},this.insertText=r=>{const i=window.getSelection();if(!i)return;const l=i.rangeCount?i.getRangeAt(0):new Range,c=document.createTextNode(r);l.insertNode(c),i.removeAllRanges(),i.addRange(l),i.collapseToEnd()},this.insertNode=r=>{const i=window.getSelection();if(!i)return;const l=i.rangeCount?i.getRangeAt(0):new Range;l.deleteContents(),l.insertNode(r),i.removeAllRanges(),i.addRange(l),i.collapseToEnd()},this.getExtension=r=>{const i=this._extensions[r];if(!i)throw new Error(`Extension with id ${r} not registered`);return i},this.destroy=()=>{this._root&&(this._root.removeEventListener("keydown",this._handleKeyDown),this._root.removeEventListener("input",this._handleInput),this._root.removeEventListener("keydown",this._handleKeydownLock),this._wrapper.parentNode&&this._wrapper.parentNode.removeChild(this._wrapper),this._wrapper=null,this._root=null,this._frozenRange=null,this._extensions={})};const n=document.createElement("div");n.style.position="relative";const o=document.createElement("div");o.setAttribute("contenteditable","true"),n.appendChild(o),this._wrapper=n,this._root=o,t.appendChild(this._wrapper),this._bootstrap()}}const rg=()=>{const e=window.getSelection();if(!e)return{x:0,y:0,width:0,height:0};if(e.rangeCount===0)return{x:0,y:0,width:0,height:0};const n=e.getRangeAt(0).getBoundingClientRect();return{x:n.left,y:n.top,width:n.width,height:n.height}};class ig{constructor(t){this._visible=!1,this._selectedText=null,this.updateProps=n=>{this._props=n},this.attach=n=>{this._editor=n,this._bootstrap()},this.detach=()=>{this._unsetListeners()},this._initNode=()=>{const n=document.createElement("div");n.className="inline-answers-v2__bubble",n.style.visibility="hidden";const o=document.createElement("div");o.innerHTML=`
    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 5.5026H5M5 5.5026L5 9.29427M5 5.5026L5 1.71094M5 5.5026L8.5 5.5026" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,n.appendChild(o);const r=document.createElement("span");r.textContent="Add as answer",n.appendChild(r),this._node=n,this._editor.getWrapper().appendChild(n)},this._hide=()=>{this._visible&&(document.activeElement!==this._editor.getRoot()&&this._editor.restoreSelection(),this._node.style.visibility="hidden",this._visible=!1)},this._show=()=>{this._visible||(this._editor.freezeSelection(),this._node.style.visibility="visible",this._visible=!0)},this._bootstrap=()=>{this._initNode(),this._initListeners()},this._handleSelection=()=>{this._node&&setTimeout(()=>{const n=window.getSelection();if(!n||!n.rangeCount){this._hide();return}const r=n.getRangeAt(0).commonAncestorContainer,i=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);let l=i.nextNode(),c=!1;for(;l;){if(l.nodeName==="SPAN"&&l.getAttribute("data-mighty-answer")){c=!0;break}l=i.nextNode()}const d=n?.toString();if(!d||!d.trim().length||c||d.length>30||d.includes(`
`)){this._hide();return}this._selectedText=d,this._show();const u=this._editor.getWrapper().getBoundingClientRect(),h=rg();this._node.style.left=`${h.x+h.width/2-u.x}px`,this._node.style.top=`${h.y-u.y}px`},100)},this._handleDocumentMouseUp=n=>{this._visible&&n.target!==this._editor.getWrapper()&&!this._editor.getWrapper().contains(n.target)&&this._hide()},this._handleBubbleClick=()=>{this._selectedText&&(this._hide(),this._props.onAddAnswer(this._selectedText),this._selectedText=null)},this._initListeners=()=>{this._editor.getRoot().addEventListener("mouseup",this._handleSelection),this._editor.getRoot().addEventListener("keyup",this._handleSelection),this._node.addEventListener("click",this._handleBubbleClick),document.addEventListener("click",this._handleDocumentMouseUp)},this._unsetListeners=()=>{this._editor.getRoot().removeEventListener("mouseup",this._handleSelection),this._editor.getRoot().removeEventListener("keyup",this._handleSelection),this._node.removeEventListener("click",this._handleBubbleClick),document.removeEventListener("click",this._handleDocumentMouseUp)},this._props=t}}class ag{constructor(t){this._visible=!1,this.attach=n=>{this._editor=n,this._bootstrap()},this.detach=()=>{throw new Error("Method not implemented.")},this._bootstrap=()=>{this._initListeners()},this._initListeners=()=>{this._editor.getRoot().addEventListener("keydown",this._handleEditorKeydown)},this._handleEditorKeydown=n=>{if(n.key==="/"&&!this._visible){this.mount(),n.preventDefault();return}},this.mount=(n=!1)=>{let o=window.getSelection();if(o||(this._editor.focus(),o=window.getSelection()),!o)return;this._createInputElement(),this._setupInputListeners();const r=this._node.querySelector("input");this._editor.freezeSelection();const i=o.rangeCount>0?o.getRangeAt(0):new Range;if(n){const l=this._editor.getRoot().lastElementChild;l&&(i.selectNodeContents(l),i.collapse(!1))}i.insertNode(this._node),o.removeAllRanges(),o.addRange(i),i.collapse(!1),r?.focus(),this._visible=!0},this._remove=()=>{this._resetInputListeners(),this._node?.remove(),this._measureNode?.remove(),this._editor.restoreSelection(),this._visible=!1},this._handleInputKeydown=n=>{if(!this._node)return;const o=this._node.querySelector("input"),r=o.value.trim();if(n.key==="Backspace"&&!r){n.preventDefault(),this._remove();return}if(n.key==="Escape"&&!r){n.preventDefault(),n.stopPropagation(),this._remove(),this._editor.insertText("/");return}if(n.key==="Enter"){if(n.preventDefault(),!r){this._remove();return}this._remove(),this._props.onAddAnswer(o.value?.trim())}},this._handleInputInput=()=>{const n=this._node.querySelector("input");n&&(this._measureNode.textContent=n.value,n.style.width=`${this._measureNode.offsetWidth+5}px`)},this._createInputElement=()=>{const n=document.createElement("span");n.setAttribute("contenteditable","false"),n.className="inline-answers-v2__answer-input",n.textContent="Add answer: ";const o=document.createElement("input");n.appendChild(o),this._node=n;const r=document.createElement("div");r.className="inline-answers-v2__answer-input-measure",document.body.appendChild(r),this._measureNode=r},this._handleUnfocus=()=>{if(!this._node)return;const n=this._node.querySelector("input");if(!n.value.trim()){this._remove();return}this._remove(),this._props.onAddAnswer(n.value?.trim())},this._setupInputListeners=()=>{if(!this._node)return;const n=this._node.querySelector("input");n?.addEventListener("keydown",this._handleInputKeydown),n?.addEventListener("input",this._handleInputInput),n?.addEventListener("focusout",this._handleUnfocus)},this._resetInputListeners=()=>{if(!this._node)return;const n=this._node.querySelector("input");n?.removeEventListener("keydown",this._handleInputKeydown),n?.removeEventListener("input",this._handleInputInput),n?.removeEventListener("focusout",this._handleUnfocus)},this._props=t}updateProps(t){this._props=t}}class lg{constructor(){this.attach=t=>{this._editor=t},this.detach=()=>{throw new Error("Method not implemented.")},this.insertAnswer=t=>{const n=document.createElement("span");n.setAttribute("contenteditable","false"),n.setAttribute("data-mighty-answer",t),n.className="inline-answers-v2__answer-badge",n.textContent=t,this._editor.insertNode(n)}}updateProps(t){}}const pi=e=>{const t=[],n=e.attributes["data-mighty-answer"];return n&&t.push(n),e.children.forEach(o=>{t.push(...pi(o))}),t},cg=g.button(({theme:e})=>G`
    outline: none;
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 9px 14px 9px 8px;
    border-radius: 5px;
    line-height: 1;
    height: 34px;
    width: fit-content;
    border: var(--basic-border);
    background: transparent;
    color: var(--font-color);
  `),fi=({onClick:e,children:t})=>s.jsx(cg,{onClick:e,children:t}),So=()=>'<div>Example template</div><div><br></div><div>1 === 1 is <span class="mighty-answer" data-mighty-answer="true" data-mighty-type="mighty-answer-slot" contenteditable="false">true</span></div><div>2 === 2 is <span class="mighty-answer" data-mighty-answer="true" data-mighty-type="mighty-answer-slot" contenteditable="false">true</span></div><div>2 === 1 is <span class="mighty-answer" data-mighty-answer="false" data-mighty-type="mighty-answer-slot" contenteditable="false">false</span></div>',dg=g.div(()=>G`
      position: absolute;
      top: -9999px;
      left: -9999px;
      visibility: hidden;
      white-space: pre;
      font-size: 16px;
    `),ug=g.input(()=>G`
      width: 5px;
      min-width: 5px;
      background: transparent;
      outline: none;
      border: none;
      font-size: 16px;
    `),hg=a.forwardRef(({value:e,onChange:t,className:n,wrapperTag:o="div",...r},i)=>{const l=a.useRef(null),c=a.useRef(null),d=h=>{l.current};a.useEffect(()=>{const h=i?.current??c.current;!h||!l.current||(h.style.width=`${l.current.offsetWidth+5}px`)},[e]);const u=s.jsxs(s.Fragment,{children:[s.jsx(dg,{ref:l,className:n,children:e}),s.jsx(ug,{ref:i??c,value:e,onChange:t,className:n,onInput:d,...r})]});return o==="div"?s.jsx("div",{children:u}):s.jsx("span",{children:u})}),pg=g.div(()=>G``),fg=g.div(()=>G`
      font-size: 16px;
      height: 34px;
      background: var(--basic-blue);
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      color: var(--font-color-strong);
      font-weight: bold;
      gap: 5px;

      .invalid-answers__input {
        font-weight: bold;
        color: var(--font-color-strong);
      }
    `),gg=({rightAnswers:e,onCreatingModeChange:t,onError:n,onAddInvalidAnswer:o})=>{const[r,i]=a.useState(!1),[l,c]=a.useState(""),d=a.useRef(null),u=()=>{i(!0),t(!0)},h=()=>{i(!1),t(!1),c(""),n("")},p=f=>{c(f.target.value)},x=f=>{if(f.key==="Enter"&&e.some(({text:m})=>m===l)){n(`Answer ${l} already exists in right answers.`);return}if(f.key==="Enter"){h(),o(l);return}};return a.useEffect(()=>{r&&d.current?.focus()},[r]),s.jsx(pg,{children:r?s.jsxs(fg,{children:[s.jsx("div",{children:"Add wrong answer:"}),s.jsx(hg,{className:"invalid-answers__input",ref:d,value:l,onKeyDown:x,onChange:p,onBlur:h})]}):s.jsxs(fi,{onClick:u,children:[s.jsx(Jo,{})," Wrong Answer"]})})},xg=g.div(()=>G`
      margin-top: 15px;

      > span {
        display: block;
        font-size: 14px;
        text-transform: uppercase;
        color: var(--font-color);
        margin-bottom: 5px;
        opacity: 0.7;
      }
    `),mg=g.div(()=>G`
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    `),bg=g.div(({theme:e})=>G`
      display: flex;
      gap: 5px;
      font-size: 14px;
      align-items: center;
      font-weight: bold;
      padding: 8px 10px;
      border-radius: 5px;
      background: ${Je(e.theme.fontColor,.1)};
    `),vg=({wrongAnswers:e,onDelete:t})=>{const n=o=>()=>{t(o)};return s.jsxs(xg,{children:[s.jsx("span",{children:"Incorrect Answers"}),s.jsx(mg,{children:e.map((o,r)=>s.jsxs(bg,{children:[s.jsx("span",{children:o}),s.jsx(Ba,{size:20,icon:s.jsx(Pa,{size:15}),onClick:n(o)})]},r))})]})},qn=e=>{if(!e)return So();try{const t=JSON.parse(e);return wl(t).innerHTML}catch{return So()}},pn=({answers:e,rightAnswers:t,onChange:n,type:o})=>{const{slide:r}=se(),{slideType:{nodes:i=""}}=r,[l,c]=a.useState(!e.length),[d,u]=a.useState(!1),[h,p]=a.useState(""),x=_t(),f=a.useRef(null),m=a.useRef(null),b=a.useRef(qn(i));a.useRef();const C=a.useMemo(()=>{const w=e.map(T=>T.text),A=t.map(T=>T.text);return w.filter(T=>!A.includes(T))},[e,t]),y=a.useCallback(w=>{n({...r,slideType:{...r.slideType,answers:[...e,{text:w}],rightAnswers:t,nodes:i}})},[r,e,t,i,n]),j=a.useCallback(w=>{n({...r,slideType:{...r.slideType,answers:e.filter(A=>A.text!==w),rightAnswers:t,nodes:i}})},[r,e,t,i,n]),v=a.useCallback(x(()=>{if(!f.current)return;const w=xl(f.current.getRoot()),A=pi(w).map(H=>({text:H})),T=JSON.stringify(w);if(A.length)c(!1);else{c(!0);return}const _=[...A,...C.map(H=>({text:H}))];n({...r,slideType:{...r.slideType,answers:_,rightAnswers:A,nodes:T}})},3e3),[n,r,C]),S=a.useCallback(w=>{if(!f.current)return;f.current.getExtension("answer-badge").insertAnswer(w),v()},[v]),E=a.useCallback(()=>{if(!f.current)return;f.current.focus(),f.current.getExtension("answer-input").mount(!0)},[]),k=a.useCallback(()=>{if(!m.current||f.current)return;const w=new og(m.current);w.attachExtension({Extension:ig,props:{onAddAnswer:S},id:"bubble"}),w.attachExtension({Extension:ag,props:{onAddAnswer:S},id:"answer-input"}),w.attachExtension({Extension:lg,props:{},id:"answer-badge"}),w.getRoot().innerHTML=b.current,f.current=w},[S]);a.useEffect(()=>(k(),()=>{f.current&&(f.current.destroy(),f.current=null)}),[k]),a.useEffect(()=>{f.current&&b.current!==qn(i)&&(b.current=qn(i),f.current.getRoot().innerHTML=b.current)},[i]),a.useEffect(()=>{if(!f.current)return;const w=()=>{v()};return f.current.getRoot().addEventListener("input",w),()=>{f.current?.getRoot().removeEventListener("input",w)}},[v]);const I=a.useMemo(()=>o===O.FILLSPACES_CODE||o===O.FILLBLOCKS_CODE?s.jsx(ml,{type:L.CODE,content:s.jsx("div",{ref:m,className:"inline-answers-v2 code"})}):s.jsx("div",{ref:m,className:"inline-answers-v2"}),[o]);return s.jsxs(s.Fragment,{children:[s.jsx(bl,{}),s.jsxs("div",{className:"inline-answers-v2-wrapper",children:[s.jsx("div",{className:"inline-answers-v2-placeholder",children:'Press "/" or select word to add an answer'}),I]}),s.jsxs(vl,{children:[s.jsxs(fi,{onClick:E,children:[s.jsx(Jo,{})," Answer"]}),o&&[O.FILLBLOCKS,O.FILLBLOCKS_CODE].includes(o)&&s.jsx(gg,{rightAnswers:t,onError:p,onCreatingModeChange:u,onAddInvalidAnswer:y})]}),h&&s.jsx(qt,{style:{marginTop:"15px"},type:Rt.WARNING,children:h}),l&&s.jsx(qt,{type:Rt.WARNING,style:{marginTop:"15px"},children:"Please add at least 1 answer"}),!!C.length&&o&&[O.FILLBLOCKS,O.FILLBLOCKS_CODE].includes(o)&&s.jsx(vg,{wrongAnswers:C,onDelete:j})]})},wg="_form_qg6w1_13",Cg={form:wg},yg=()=>{const{slide:e,isLoading:t,attachmentAction:{toggleAnyCorrect:n}}=se(),o=e.slideType.isAnyCorrect,[r,i]=a.useState(e.slideType.isAnyCorrect),l=a.useRef(!1),c=a.useCallback(d=>{t||r===d||(l.current=!0,i(d))},[r,t]);return a.useEffect(()=>{l.current&&o!==r&&n(e._id)},[o,r]),s.jsxs($,{direction:"column",gap:"12px",children:[s.jsx(nt,{children:"Answer Verification"}),s.jsx(Jt,{style:{width:"100%"},optionStyle:{width:"100%",whiteSpace:"nowrap"},currentValue:r,onChange:c,options:[{label:"Any Correct",value:!0},{label:"Verify Answer",value:!1}]})]})},Sg=()=>{const{slide:e,isLoading:t,attachmentAction:{toggleIsOptional:n}}=se(),o=e.slideType.isOptional,[r,i]=a.useState(e.slideType.isOptional),l=a.useRef(!1),c=a.useCallback(d=>{t||r===d||(l.current=!0,i(d))},[r,t]);return a.useEffect(()=>{l.current&&o!==r&&n(e._id)},[o,r]),s.jsxs($,{direction:"column",gap:"12px",children:[s.jsx(nt,{children:"Type"}),s.jsx(Jt,{style:{width:"100%"},optionStyle:{width:"100%"},currentValue:r,onChange:c,options:[{label:"Optional",value:!0},{label:"Required",value:!1}]})]})},jg=[{label:"Any answer",value:Qe.ALLOW_ANY},{label:"Partial match",value:Qe.PARTIAL_MATCH},{label:"Strict match",value:Qe.STRICT_MATCH}],Eg=()=>{const{slide:e,slideActions:{update:t}}=se(),[n,o]=a.useState(e?.slideType?.matchRule||Qe.ALLOW_ANY);a.useEffect(()=>{o(e.slideType?.matchRule||Qe.ALLOW_ANY)},[e]);const r=a.useCallback(i=>{o(i);const l={...e,slideType:{...e.slideType,matchRule:i}};t(l)},[e]);return s.jsxs($,{direction:"column",gap:10,children:[s.jsx(Zt,{currentValue:n,onChange:r,options:jg,settingsLabel:"Match Rule"}),s.jsx(Ig,{matchRule:n})]})},Ig=({matchRule:e})=>{const t=a.useMemo(()=>{switch(e){case Qe.ALLOW_ANY:return"Any user input is considered a correct answer.";case Qe.PARTIAL_MATCH:return"The user's input must include one of the correct answers. Overridden by the 'Any Correct' option.";case Qe.STRICT_MATCH:return"The user's input must exactly match one of the correct answers. Overridden by the 'Any Correct' option."}},[e]);return s.jsx("p",{style:{fontSize:14},children:t})},Ag=()=>{const{slide:e,slideActions:{update:t}}=se(),{defaultTestTitle:n,testTitle:o}=Po(e),r=a.useCallback(i=>{t({...e,slideType:{...e.slideType,customTestTitle:i}})},[e]);return s.jsx(Ha,{placeholder:n,label:"Test Title",onChange:r,value:o,maxOpts:{len:200,error:"The test title must be 200 characters or fewer"}})},Lg=({isOpen:e,onClose:t})=>{const{slide:{typeOfSlide:n}}=se(),o=![O.TYPEANSWER,O.ADD_IMAGES].includes(n),r=n===O.TYPEANSWER;return s.jsx(Xt,{isVisible:e,onClose:t,position:"right",width:"328px",style:{padding:"20px"},children:s.jsxs($,{direction:"column",gap:"36px",children:[s.jsx(Sg,{}),o&&O.TYPEANSWER&&s.jsx(yg,{}),r&&s.jsx(Eg,{}),s.jsx(Ag,{})]})})},kg=({value:e,onChange:t,...n})=>{const o=a.useRef(null),[r,i]=a.useState(e??""),l=c=>{i(c.target.value),t?.(c)};return a.useLayoutEffect(()=>{const c=o.current;c&&(c.style.height="auto",c.style.height=`${c.scrollHeight}px`)},[r]),s.jsx("textarea",{ref:o,value:r,onChange:l,rows:1,style:{overflow:"hidden",resize:"none",lineHeight:"1.5"},...n})},Rg=g($).attrs({align:"center"})`
  background: #ffffff1a;
  border-radius: 12px;
  margin-bottom: 24px;
  overflow: hidden;
  &.light {
    background: #0000001a;
  }
`,_g=g(kg)`
  text-indent: 70px;
  color: var(--font-color-strong);
  line-height: 110%;
  font-size: 18px;
  width: 100%;
  border: none;
  outline: none;
  background: none;
  min-height: 60px;
  padding: 19px 12px;
  resize: none;
`,Tg=g.p`
  position: absolute;
  left: 12px;
  top: 19px;
  font-size: 18px;
  line-height: 110%;
  color: var(--font-color-strong);
  opacity: 0.5;
`,Dg=()=>{const{slide:e,slideActions:{update:t},testSlidesIds:n}=se(),o=le(),{testTitle:r,defaultTestTitle:i}=Po(e),l=a.useMemo(()=>n.findIndex(h=>h===e._id)+1,[n,e]),c=a.useRef(null),d=h=>{h&&(c.current=h.getBoundingClientRect().width+5)},u=a.useCallback(h=>{const p=h.target.value;p.length>200||t({...e,slideType:{...e.slideType,customTestTitle:p}})},[e]);return s.jsxs(Rg,{className:o,children:[s.jsxs(Tg,{ref:d,children:["Test ",l+1,":"]}),s.jsx(_g,{style:{textIndent:c.current||60},placeholder:i,value:r,onChange:u})]})},Ng=g($).attrs({align:"center",direction:"column",justify:"center",gap:20})`
  height: 137px;
  color: var(--font-color-strong);
  font-size: 18px;
  background-color: #6487ef0f;
  border: 1px dashed var(--mighty-blue);
  border-radius: 4px;
  position: relative;
  & span {
    color: var(--mighty-blue);
  }
  & > svg {
    width: 36px;
    height: 36px;
  }
  &:hover span {
    text-decoration: underline;
  }
`,Mg=()=>s.jsxs(Ng,{children:[s.jsx(lr,{}),s.jsxs("p",{children:["Drag and Drop photo or ",s.jsx("span",{children:"Choose File"})]})]}),jo={[O.INFO]:()=>s.jsx("div",{children:"Empty"}),[O.TEST]:yo,[O.MULTICHOICE]:yo,[O.TYPEANSWER]:sg,[O.FILLBLOCKS]:pn,[O.FILLBLOCKS_CODE]:pn,[O.FILLSPACES]:pn,[O.FILLSPACES_CODE]:pn,[O.ADD_IMAGES]:Mg},Og=()=>{const{slide:e,slideActions:{update:t}}=se(),{typeOfSlide:n,slideType:{rightAnswers:o=[],answers:r},_id:i}=e,{open:l,isOpen:c,close:d}=ee();if(!jo[n])return null;const u=jo[n];return s.jsxs(hi,{openSettingsSidebar:l,children:[s.jsx(Lg,{isOpen:c,onClose:d}),s.jsxs("div",{className:Cg.form,style:{marginTop:e.content.length?"20px":void 0},children:[s.jsx(Dg,{}),s.jsx(u,{answers:r,rightAnswers:o,slideId:i,onChange:t,type:n})]})]})},gi=g.div``,$g=g(Wa)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 10px;
`,Fg=g.div`
  position: relative;
  &.not-saved {
    pointer-events: none;
    & ${gi} {
      opacity: 0;
    }
  }
`,Bg=()=>{const{slide:e,slideActions:{update:t,saveNewSlide:n}}=se();a.useEffect(()=>{e._id===jt&&n(e)},[e]);const o=i=>{t({...e,content:i})},r=e.typeOfSlide&&e.typeOfSlide!==O.INFO;return s.jsxs(Fg,{className:B({"not-saved":e._id===jt}),children:[e._id===jt&&s.jsx($g,{}),s.jsxs(gi,{children:[s.jsx(Of,{onChange:o}),!!r&&s.jsx(Og,{})]})]})},Pg=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:37,height:32,viewBox:"0 0 37 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.7388 16.6454C37.082 16.2868 37.0908 15.7043 36.7426 15.3507L36.5702 15.1758C36.5364 15.1415 36.5137 15.1184 36.5067 15.1111C35.4769 14.0466 34.5054 13.0375 33.5578 12.0532C31.1937 9.59778 28.978 7.2964 26.3763 4.67173C23.3081 1.57358 19.7035 -0.0120834 15.6457 6.93289e-05C14.8179 0.00256499 13.9713 0.0715211 13.1065 0.207697C3.03786 1.79526 -2.77284 12.8448 1.32719 22.47C4.14502 29.0677 11.0425 32.9589 17.8648 31.7954C21.285 31.2115 24.1952 29.6195 26.6372 27.0772C28.7998 24.8406 30.7968 22.7804 32.8377 20.675C34.0317 19.4433 35.2407 18.196 36.5067 16.8889L36.628 16.7615L36.7388 16.6454ZM16.4215 11.2361C16.4215 10.9216 16.1688 10.6667 15.8571 10.6667C15.5455 10.6667 15.2928 10.9216 15.2928 11.2361V15.4306H11.1357C10.8241 15.4306 10.5714 15.6856 10.5714 16C10.5714 16.3145 10.8241 16.5694 11.1357 16.5694H15.2928V20.764C15.2928 21.0784 15.5455 21.3333 15.8571 21.3333C16.1688 21.3333 16.4215 21.0784 16.4215 20.764V16.5694H20.5785C20.8902 16.5694 21.1429 16.3145 21.1429 16C21.1429 15.6856 20.8902 15.4306 20.5785 15.4306H16.4215V11.2361Z",fill:"#627EEA"})),Hg=a.forwardRef(Pg),Wg=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM18.6154 12.6154C18.6154 12.2755 18.3399 12 18 12C17.6601 12 17.3846 12.2755 17.3846 12.6154L17.3846 17.3846H12.6154C12.2755 17.3846 12 17.6601 12 18C12 18.3399 12.2755 18.6154 12.6154 18.6154H17.3846V23.3846C17.3846 23.7245 17.6601 24 18 24C18.3399 24 18.6154 23.7245 18.6154 23.3846L18.6154 18.6154L23.3846 18.6154C23.7245 18.6154 24 18.3399 24 18C24 17.6601 23.7245 17.3846 23.3846 17.3846H18.6154V12.6154Z",fill:"#627EEA"})),zg=a.forwardRef(Wg),Gg=g.div`
  width: 100%;
  display: flex;
  position: relative;
  transition: 0.3s;
  height: 36px;
  &.isLast {
    justify-content: center;
    padding-top: 36px;
    height: fit-content;
  }
`,Ug=g(Zo)`
  width: 36px;
  height: 36px;
  transition: 0.3s;
  & > svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    scale: 1.05;
  }
`,Vg=g(Zo)`
  width: 40px;
  height: 32px;
  transition: 0.3s;
  & > svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    scale: 1.05;
  }
  position: absolute;
  right: 100%;
  top: 50%;
  padding-right: 3px;
  translate: -50% -50%;
  opacity: 0;
  &.isOpen {
    translate: 0 -50%;
    opacity: 1;
  }
`,xi=({onClick:e,isLast:t,isOpen:n})=>s.jsx(Gg,{className:B({isLast:t}),children:t?s.jsx(Ug,{onClick:e,children:s.jsx(zg,{})}):s.jsx(Vg,{className:B({isOpen:n}),onClick:e,children:s.jsx(Hg,{})})}),Kg=g(Xt).attrs({className:"blur-100"})`
  width: 328px;
  background: #ffffff0a;
  padding: 20px;
  &.light {
    background: #1111110a;
  }
`;g.div``;const qg=g.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  width: 100%;
  & svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
  }
`,Xg=g.div`
  height: 44px;
  padding: 0px 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  line-height: 100%;
  color: var(--font-color-strong);
  font-weight: 400;
  background-color: #ffffff0f;
  &.light {
    background-color: #1111110f;
  }
`,Yg=g.div`
  padding: 0px 8px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  font-size: 16px;
  color: var(--font-color-strong);
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #6487ef1a;
  }
`,Qg=g.div`
  display: flex;
  width: 100px;
  padding: 0px 8px;
  align-items: center;
  gap: 8px;
  color: #afb4b8;
  font-weight: 100%;
  font-size: 16px;
  & > svg {
    width: 16px;
    min-width: 16px;
    height: 16px;
  }
`,Ht=({headerLabel:e,items:t=[],topics:n,headerIcon:o})=>{const{isOpen:r,toggle:i}=ee(),l=le(),c=h=>s.jsx($,{direction:"column",gap:"8px",children:h.map(({label:p,onClick:x,icon:f})=>s.jsxs(Yg,{onClick:x,children:[f," ",p]},`item-${p}`))}),d=h=>s.jsx($,{gap:"12px",direction:"column",children:h.map(({icon:p,items:x,label:f})=>s.jsxs($,{direction:"column",gap:"8px",children:[s.jsxs(Qg,{children:[p," ",f]}),c(x)]},`topic-${f}`))}),u=a.useMemo(()=>n?.length?d(n):c(t),[t,n]);return s.jsxs(qg,{children:[s.jsxs(Xg,{onClick:i,className:l,children:[o,e,s.jsx(Tn,{className:B({isOpen:r})})]}),s.jsx(ds,{className:B({isOpen:r}),$customGap:12,children:s.jsx("div",{children:u})})]})},Jg=({title:e,titleId:t,...n},o)=>a.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":t,...n},e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M12.5013 15.8333L14.168 17.5L17.5013 14.1667M10.8346 2.5H6.83464C5.90121 2.5 5.4345 2.5 5.07798 2.68166C4.76438 2.84144 4.50941 3.09641 4.34962 3.41002C4.16797 3.76654 4.16797 4.23325 4.16797 5.16667V14.8333C4.16797 15.7668 4.16797 16.2335 4.34962 16.59C4.50941 16.9036 4.76438 17.1586 5.07798 17.3183C5.4345 17.5 5.90121 17.5 6.83464 17.5H9.58464M10.8346 2.5L15.8346 7.5M10.8346 2.5V6.16667C10.8346 6.63338 10.8346 6.86673 10.9255 7.04499C11.0054 7.20179 11.1328 7.32928 11.2896 7.40917C11.4679 7.5 11.7013 7.5 12.168 7.5H15.8346M15.8346 7.5V11.1667M7.5013 14.1667H9.58464M7.5013 10.8333H12.5013M7.5013 7.5H8.33464",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Zg=a.forwardRef(Jg),e1=({close:e,createSlide:t,createTestSlide:n})=>{const o=(l,c)=>()=>{t({typeOfSlide:O.INFO,widget:{type:l,preset:c}})(),e()},r=l=>()=>{t({typeOfSlide:O.INFO,widget:{type:L.TASK,taskPreset:l}})(),e()},i=l=>()=>{n(l),e()};return s.jsxs($,{direction:"column",gap:"12px",children:[s.jsx(Ht,{headerLabel:"Basic Blocks",headerIcon:s.jsx(Al,{}),items:[{label:"Text",icon:s.jsx(Cl,{}),onClick:o(L.TEXT)},{label:"Code Editor",icon:s.jsx(yl,{}),onClick:o(L.CODE)},{label:"Image",icon:s.jsx(lr,{}),onClick:o(L.IMAGE)},{label:"Video",icon:s.jsx(Sl,{}),onClick:o(L.VIDEO)},{label:"File",icon:s.jsx(jl,{}),onClick:o(L.FILE)},{label:"Warning",icon:s.jsx(El,{}),onClick:o(L.WARNING)},{label:"Quote",icon:s.jsx(Il,{}),onClick:o(L.QUOTE)}]}),s.jsx(Ht,{headerLabel:"Social Tasks",headerIcon:s.jsx(ql,{}),topics:[{label:"Website",icon:s.jsx(Bl,{}),items:[{label:R.WEBSITE,onClick:r(R.WEBSITE)}]},{label:"Mail",icon:s.jsx(Pl,{}),items:[{label:R.MAIL,onClick:r(R.MAIL)}]},{label:"YouTube",icon:s.jsx(Hl,{}),items:[{label:R.YT_VISIT,onClick:r(R.YT_VISIT)},{label:R.YT_WATCH,onClick:r(R.YT_WATCH)}]},{label:"X",icon:s.jsx(Wl,{}),items:[{label:R.X_FOLLOW,onClick:r(R.X_FOLLOW)},{label:R.X_LIKE,onClick:r(R.X_LIKE)},{label:R.X_RETWEET,onClick:r(R.X_RETWEET)}]},{label:"Facebook",icon:s.jsx(zl,{}),items:[{label:R.FACEBOOK,onClick:r(R.FACEBOOK)}]},{label:"Discord",icon:s.jsx(Gl,{}),items:[{label:R.DISCORD,onClick:r(R.DISCORD)}]},{label:"Instagram",icon:s.jsx(Ul,{}),items:[{label:R.INSTAGRAM_VISIT,onClick:r(R.INSTAGRAM_VISIT)},{label:R.INSTAGRAM_SAVE,onClick:r(R.INSTAGRAM_SAVE)},{label:R.INSTAGRAM_LIKE,onClick:r(R.INSTAGRAM_LIKE)},{label:R.INSTAGRAM_COMMENT,onClick:r(R.INSTAGRAM_COMMENT)}]},{label:"Telegram",icon:s.jsx(Vl,{}),items:[{label:R.TELEGRAM,onClick:r(R.TELEGRAM)}]},{label:"TikTok",icon:s.jsx(Kl,{}),items:[{label:R.TIKTOK,onClick:r(R.TIKTOK)}]}]}),s.jsx(Ht,{headerLabel:"On-chain Tasks",headerIcon:s.jsx(Yl,{}),topics:[{label:"TON",icon:s.jsx(Xl,{}),items:[{label:R.ONCHAIN_DEPOSIT,onClick:r(R.ONCHAIN_DEPOSIT)},{label:R.ONCHAIN_BRIDGE_TON_ETH,onClick:r(R.ONCHAIN_BRIDGE_TON_ETH)},{label:R.ONCHAIN_BRIDGE_TON_BSC,onClick:r(R.ONCHAIN_BRIDGE_TON_BSC)}]},{label:"Solana",icon:s.jsx(za,{}),items:[{label:R.SOLANA_HOLD,onClick:r(R.SOLANA_HOLD)}]}]}),s.jsx(Ht,{headerLabel:"UI Elements",headerIcon:s.jsx(ra,{}),topics:[{label:"Spaces",icon:s.jsx(oa,{}),items:[{label:"Dashboard",onClick:o(L.SPACE_DASHBOARD)},{label:"Cards",onClick:o(L.SPACES_LIST)},{label:"Banner",onClick:o(L.SPACES_LIST,Et.BANNER)}]},{label:"Courses",icon:s.jsx(Ga,{}),items:[{label:"Cards",onClick:o(L.COURSES_LIST)},{label:"Banner",onClick:o(L.COURSES_LIST,Me.BANNER_1)}]},{label:"Misc",icon:s.jsx(s.Fragment,{}),items:[{label:"Leaderboard",onClick:o(L.LEADERBOARD_BANNER)},{label:"Treasure Chest",onClick:o(L.TREASURE_CHESTS)},{label:"Shop Items",onClick:o(L.SHOP_ITEMS)}]}]}),s.jsx(Ht,{headerLabel:"Tests",headerIcon:s.jsx(Zg,{}),items:[{label:"Multi Choice",onClick:i(O.MULTICHOICE)},{label:"Type Answer",onClick:i(O.TYPEANSWER)},{label:"Type Gaps",onClick:i(O.FILLSPACES)},{label:"Type Gaps (Code)",onClick:i(O.FILLSPACES_CODE)},{label:"Select Gaps",onClick:i(O.FILLBLOCKS)},{label:"Select Gaps (Code)",onClick:i(O.FILLBLOCKS_CODE)},{label:"Add Photos",onClick:i(O.ADD_IMAGES)}]})]})},t1=g.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  color: var(--font-color-strong);
  background: #ffffff0f;
  padding: 0px 12px;
  cursor: pointer;
  transition: 0.3s;
  &.light {
    background: #1111110f;
  }
  &:hover {
    opacity: 0.9;
  }
`,n1=({children:e,onClick:t})=>{const n=le();return s.jsxs(t1,{className:n,onClick:t,children:[e,s.jsx(Tn,{style:{transform:"rotate(-90deg)",width:"20px",height:"20px",minWidth:"20px",margin:0}})]})};g.input.attrs({type:"text",className:"blur-45"})`
  height: 40px;
  font-size: 16px;
  line-height: 400;
  padding: 0px 12px;
  color: var(--font-color-strong);
  background: #ffffff0d;
  border: none;
  outline: none;
  border-radius: 4px;
  &.light {
    background: #1111110d;
  }
  &::placeholder {
    color: var(--font-color-strong);
    opacity: 0.5;
  }
`;const s1=g.p`
  font-size: 16px;
  color: var(--font-color-strong);
  opacity: 0.5;
  line-height: 140%;
  margin-bottom: 20px;
`,mi=a.createContext({isLoading:!1,isError:!1,isSuccess:!1,goBack:()=>{},handleImport:()=>{}}),bi=()=>a.useContext(mi),o1=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  position: relative;
  white-space: nowrap;
  width: 100%;
  & .chevron {
    position: absolute;
    left: 0;
    top: 2.5px;
    cursor: pointer;
    width: 15px;
    height: 15px;
    margin: 0;
    transition: 0.3s;
    &.isLoading {
      opacity: 0.5;
      pointer-events: none;
    }
  }
  font-size: 16px;
  font-weight: 400;
  color: var(--font-color-strong);
  margin-bottom: 36px;
`,r1=({text:e})=>{const{isLoading:t,goBack:n}=bi();return s.jsxs(o1,{children:[s.jsx(Yo,{strokeWidth:"1.1",className:B({isLoading:t},"chevron"),onClick:n}),e]})},fn=g($).attrs({direction:"column",align:"center"})`
  margin-top: 48px;
`,i1=g(Ut).attrs({variant:"cool"})`
  height: 52px;
  background: #6487ef;
  font-size: 18px;
  font-weight: 500;
`,Xn=g.p`
  width: 100%;
  text-align: center;
  padding-top: 17px;
  font-size: 20px;
  font-weight: 500;
  color: var(--font-color-strong);
  &.isSuccess {
    color: #27a17b;
  }
  &.isError {
    color: #f14f64;
  }
`,a1=g(Ua)`
  margin-top: 36px;
  width: 64px;
  height: 64px;
`,l1=({formData:e})=>{const{isLoading:t,isSuccess:n,isError:o,handleImport:r}=bi(),i=()=>{e&&r(e)};return t?s.jsxs(fn,{children:[s.jsx(Xn,{children:"Importing..."}),s.jsx(a1,{})]}):o?s.jsx(fn,{children:s.jsx(Xn,{className:"isError",children:"Import Failed!"})}):n?s.jsx(fn,{children:s.jsx(Xn,{className:"isSuccess",children:"Import Success!"})}):s.jsx(fn,{children:s.jsx(i1,{label:"Import",isDisabled:!e,onClick:i})})};g.div`
  width: 100%;
  height: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color-strong);
  border-radius: 10px;
  border: 1px dashed#ffffff66;
  color: #ffffff66;
  position: relative;
  font-size: 14px;
  cursor: pointer;
  & span {
    color: var(--mighty-blue);
    text-decoration: underline;
  }
  &.light {
    border-color: #11111166;
    color: #11111166;
  }
`;g.div`
  display: flex;
  height: 40px;
  padding: 0px 12px 0px 4px;
  align-items: center;
  width: 100%;
  color: var(--font-color-strong);
  border-radius: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  gap: 4px;
  background: #ffffff0d;
  &.light {
    background: #1111110d;
  }
  & .trash {
    margin-left: auto;
    width: 24px;
    min-width: 24px;
    height: 24px;
    opacity: 0.4;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
  }
`;const c1=()=>{const[e,t]=a.useState(""),n=r=>t(r),o=a.useMemo(()=>{if(!e)return;const r=new FormData;return r.append("source",e),r},[e]);return s.jsxs($,{direction:"column",children:[s.jsx(r1,{text:"Import from text"}),s.jsx(s1,{children:"Please enter text to generate slides"}),s.jsx(Va,{value:e,onChange:n}),s.jsx(l1,{formData:o})]})};var vi=(e=>(e.TEXT="text",e))(vi||{});const d1={text:c1},u1=({refetchSlides:e})=>{const{lessonId:t=""}=Re(),{course:n}=he(),[o,r]=a.useState(null),[i,{isLoading:l,isError:c,isSuccess:d}]=ia(),u=f=>()=>r(f),h=()=>r(null),p=f=>{t&&(ae(st(n)),i({form:f,lessonId:t}).unwrap().then(e).catch(console.error))},x=a.useMemo(()=>o?d1[o]:()=>s.jsx(s.Fragment,{}),[o]);return s.jsx(mi.Provider,{value:{goBack:h,isLoading:l,isError:c,isSuccess:d,handleImport:p},children:o?s.jsx(x,{}):s.jsx($,{direction:"column",gap:"12px",children:s.jsx(n1,{onClick:u(vi.TEXT),children:"Text"})})})},wi=({isOpen:e,onClose:t,createSlide:n,createTestSlide:o,refetchSlides:r})=>{const[i,l]=a.useState("add");return s.jsx(Kg,{isVisible:e,onClose:t,position:"right",styleOverlay:{background:"none"},children:s.jsxs($,{direction:"column",gap:"20px",children:[s.jsx(Jt,{options:[{label:"Add Block",value:"add"},{label:"Import",value:"import"}],style:{width:"100%"},optionStyle:{width:"50%"},currentValue:i,onChange:l}),i==="add"&&s.jsx(e1,{createSlide:n,createTestSlide:o,close:t}),i==="import"&&s.jsx(u1,{refetchSlides:r})]})})},h1=({isLastSlide:e,index:t})=>{const{slide:n,isReordering:o,slideActions:{createInfoSlide:r,createTestSlide:i},refetchSlides:l}=se(),{setNodeRef:c,transform:d,transition:u,isDragging:h}=$n({id:n._id,disabled:o}),{isOpen:p,open:x,close:f}=ee(),{isOpen:m,open:b,close:C}=ee(!1,{onClose:f}),y=199,j={transform:ft.Translate.toString(d),transition:u,zIndex:h?999:void 0,position:"relative",opacity:1,lineBreak:"auto"};return s.jsxs(p1,{wrap:"wrap",ref:c,style:j,onMouseEnter:x,onMouseLeave:f,$defaultZIndex:y-t,children:[s.jsx(fh,{index:t,slideId:n._id,children:s.jsx(Bg,{})}),s.jsx(xi,{isOpen:p&&!h,onClick:b,isLast:e}),s.jsx(wi,{refetchSlides:l,isOpen:m,onClose:C,createSlide:r,createTestSlide:i})]})},p1=g($).attrs({wrap:"wrap"})`
  z-index: ${({$defaultZIndex:e})=>e};
  &:has(.tiptapEditor-bubble) {
    z-index: 999;
  }
`,f1=()=>{const{isError:e,slides:t,isSlidesLoading:n,isCreateSlideLoading:o,isSlideUpdating:r,isDuplicationLoading:i,isAddAttachmentLoading:l,isDeleteAttachmentLoading:c,isDeleting:d,isReordering:u,allRewards:h,lastUpdated:p,breadcrumbs:x,testSlidesIds:f,handleCreateEmptyInfoSlide:m,handleCreateEmptyTestSlide:b,handleDeleteSlide:C,handleUpdateSlide:y,handleSaveCreatedSlide:j,handleAddAttachment:v,handleDeleteAttachment:S,handleDuplicateSlide:E,handleDragEnd:k,toggleAnyCorrect:I,toggleIsOptional:w,refetchSlides:A}=lu(),T=Cs(ws(Ir)),{isOpen:_,open:H,close:q}=ee();if(e)return s.jsx("div",{children:"Something went wrong..."});const K=l||c||i||r||d||o;return s.jsx(ei.Provider,{value:t,children:s.jsx(dh,{isUpdating:K||u,lastUpdated:p,title:x?.lesson?.name,children:n?s.jsx(Ho,{}):!!t&&s.jsx(uh,{children:s.jsx(Is,{sensors:T,collisionDetection:ys,onDragEnd:k,children:s.jsxs(Ls,{items:t.map(te=>te._id),strategy:As,children:[!t.length&&s.jsxs(s.Fragment,{children:[s.jsx(xi,{onClick:H,isLast:!0}),s.jsx(wi,{refetchSlides:A,createSlide:m(0),createTestSlide:b(0),isOpen:_,onClose:q})]}),!!t.length&&t.map((te,ce)=>s.jsx(Or.Provider,{value:{slide:te,isLoading:K,isReordering:u,allRewards:h,testSlidesIds:f,attachmentAction:{add:v,delete:S,toggleAnyCorrect:I,toggleIsOptional:w},slideActions:{delete:C(te._id),duplicate:E(ce),createTestSlide:b(ce),createInfoSlide:m(ce),saveNewSlide:j,update:y},refetchSlides:A},children:s.jsx(h1,{index:ce,isLastSlide:ce+1===t.length},te._id+"sortable-box")},te._id))]})})})})})},T1=()=>{const e=le(),{lessonId:t=""}=Re(),n=et(),{isError:o,isFetching:r,isLoading:i,data:l,refetch:c}=aa(t,{skip:!t}),d=l?.spaceInfo?.name,{data:u,isFetching:h,isLoading:p}=la(d||"",{skip:!d}),{isAbleToEdit:x}=Go(u||null),f=a.useCallback(()=>n(d?`/${d.replaceAll(" ","_")}`:_n.COURSES),[d]);return a.useEffect(()=>{if(o||!x&&!r&&!h){f();return}},[o,x,r,h]),o?s.jsx(Ho,{}):ht.createPortal(s.jsx(ou,{className:e,children:s.jsx(Ka.Provider,{value:{course:l,isLoading:i,refetchCourse:c},children:s.jsxs(qa.Provider,{value:{space:u,isLoading:p},children:[s.jsx(nu,{}),s.jsx(f1,{})]})})}),document.getElementById(as.FULLSCREEN))},g1="_container_7ynw5_1",x1="_content_7ynw5_16",m1="_card_7ynw5_22",b1="_flushButton_7ynw5_32",gn={container:g1,content:x1,card:m1,flushButton:b1},D1=()=>{const{interests:e}=is(),[t,{isLoading:n}]=ca(),{favouritesKey:o,tags:r,groupsNativeNames:i,favouriteCourses:l}=Xa("all"),c=[r[o]].concat(e.map(w=>r[w])),d=et(),[u,h]=a.useState(c),[p,x]=a.useState(!1),[f,m]=a.useState(!1),[b,C]=a.useState([]),[y,j]=a.useState([]),v=w=>()=>{w&&d(`/courses/edit/course/${w}`)},S=()=>{m(!1)},E=async()=>{await t(),x(!1)},k=w=>{C(A=>{const T=w.filter(_=>!A.some(H=>H._id===_._id));return[...A,...T]})},I=w=>{if(u.map(A=>A.native).includes(w))h(u.filter(A=>A.native!==w));else{const A=r[w];h([...u,A])}};return a.useEffect(()=>{j(b)},[b]),s.jsxs(s.Fragment,{children:[s.jsx(Ya,{title:"Reset courses progress?",isOpen:p,isLoading:n,onClose:()=>x(!1),deleteCourse:E}),s.jsx(Zl,{className:gn.flushButton,icon:s.jsx(tt,{}),onClick:()=>x(!0)}),s.jsxs("div",{className:gn.container,children:[s.jsx("h1",{className:"mobile-padding",children:"Course constructor"}),s.jsxs("div",{className:B(gn.content,"mobile-padding"),children:[s.jsx(oc,{className:gn.card,title:"Create new course",onCLick:()=>m(!0)}),f&&s.jsx(Qa,{onSubmit:S,isOpen:f,onClose:()=>m(!1)})]}),s.jsx(Ql,{activeGroups:u,handleGroups:I}),s.jsx("div",{children:i.map(w=>r[w]).map(w=>s.jsx(Jl,{handleToggle:I,isEditMode:!0,selectCourse:v,handleLoadCourses:k,group:w,isOpen:u.map(A=>A.native).includes(w.native),courses:y.filter(A=>w.native===o?l.map(T=>T._id).includes(A._id):A.groups.includes(w.native))},w.native))})]})]})};export{D1 as CoursesAdministrationPage,T1 as EditLessonPage,O1 as RedirectToEditLesson};
