import{r as c,by as s,bz as C,fX as le,bD as ce,aP as J,dv as F,B as e,E as f,hx as S,hy as de,hz as pe,aC as he,q as I,x as K,cc as D,J as O,fO as a,a1 as Q,hA as xe,hB as me,bS as ue,bB as G,fP as ge,hC as fe,bt as we,ag as V,bv as Ce}from"./index.BDWbwHp_.js";import{r as W,aD as Z,I as _,aa as be,C as ye,eA as ve,ad as U,as as je,at as X,eB as $e,eC as Se}from"./index.CMGJEYRC.chunk.js";import{u as ke}from"./useGetChestRewards.Cb2-pkZP.chunk.js";import{F as Re}from"./FullscreenCongratulations.z8PIOMVo.chunk.js";import{s as k}from"./timeout.a7nJCnw9.chunk.js";import{d as T}from"./index.2PPIBWbF.chunk.js";import"./relativeTime.DEMDksMo.chunk.js";const ee={isOpening:!1,isShowingAll:!1,chestLayout:null,isChestReady:!1,showAnimation:!1,drop:[]},Ae=(t,i)=>({...t,...i}),Te={...ee,updateState:()=>{}},te=c.createContext(Te),E=()=>c.useContext(te),Ie=s.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden auto;
  z-index: 1000;
  & .backButton {
    position: absolute;
    top: 40px;
    left: 10vw;
    transition: 0.5s;
    &.isHidden {
      opacity: 0;
      pointer-events: none;
    }
    &.isShowingAll {
      left: 5vw;
    }
    z-index: 100;
  }

  @media screen and (max-width: 992px) {
    & .backButton,
    & .backButton.isShowingAll {
      top: 62px;
      left: 24px;
    }
  }
`,Oe=s.div(()=>C`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(36, 36, 36);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 999;
    &::after {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      content: "";
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      background: #11111101;
      transition: 0.3s ease-in-out;
    }
    &.isOpening {
      &::after {
        -webkit-backdrop-filter: blur(0px);
        backdrop-filter: blur(0px);
        background: transparent;
      }
    }
  `),Ee=s.div`
  position: fixed;
  width: 96vh;
  height: 27vh;
  top: 56vh;
  left: 50.9%;
  transform: translateX(-50%);
  pointer-events: none;
  @media screen and (max-width: 992px) {
    width: 110vw;
    height: 20vw;
    bottom: 30vw;
    left: 52%;
    top: auto;
  }
`,A=t=>t===ce.COMMON?"#ffffff":le[t],Ne=s.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: fit-content; // fill parent height no matter what
  min-height: 100%;
  width: calc(100% - 510px);
  padding: 50px 0px; // make some space for smaller screens
  transition: 1.2s ease-in-out;
  &.isHidden {
    pointer-events: none;
    opacity: 0;
    transition: 0.3s ease-in-out;
    & * {
      pointer-events: none;
    }
  }
`,Me=s.div`
  width: 530px;
  height: 388px;
  overflow: visible;
  margin-bottom: 5px;
`,Pe=s.p(({$grade:t})=>C`
    color: ${A(t)};
    font-size: 70px;
    line-height: 1.1;
    margin-bottom: 12px;
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
  `),Be=s.p(({$grade:t})=>C`
    color: ${A(t)};
    font-size: 35px;
    line-height: 1.1;
    margin-bottom: 32px;
    text-align: center;
    opacity: 0.5;
    text-transform: capitalize;
  `),q=({updater:t,node:i,fireCondition:n})=>{const o=J(),r=c.useCallback(o(()=>{!n||!i||t(i)},300),[n,i]);c.useEffect(()=>(window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)),[r]),c.useEffect(()=>{!i||!n||t(i)},[n,i])},ze=({chest:t,updateChestPosition:i})=>{const n=c.useRef(null),{isShowingAll:o,isOpening:r,updateState:d}=E(),{type:p}=F(),h=p?.split("-")[0],x=()=>d({isShowingAll:!1});return q({node:n.current,fireCondition:!r&&o,updater:i}),e.jsxs(Ne,{className:f({isHidden:!o}),children:[e.jsx(Me,{ref:n,className:"preview"}),e.jsxs(Pe,{$grade:t.grade,children:[h," Chest"]}),e.jsx(Be,{$grade:t.grade,children:t.grade}),e.jsx(W,{label:"Open more",variant:"white",className:"button",onClick:x})]})},ie=s.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  height: fit-content; // fill parent height no matter what
  min-height: 100%;
  width: 100%;
  padding: 50px 0px; // to have some space on smaller screens
  transition: 0.8s ease-in-out;
  &.isHidden {
    transition: 0.3s ease-in-out;
    opacity: 0;
    pointer-events: none;
  }
  @media screen and (max-width: 992px) {
    padding: 33px 20px;
    align-items: center;
  }
`,ne=s.p(({$grade:t})=>C`
    text-align: center;
    font-size: 64px;
    line-height: 1.1;
    color: white;
    font-weight: 500;
    & > span {
      color: ${A(t)};
      text-transform: capitalize;
    }
    margin-bottom: 81px;
    @media screen and (max-width: 992px) {
      font-size: 26px;
      line-height: 30px;
      margin-bottom: 12px;
    }
  `),He=s.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 57px;
`,se=s.div`
  width: 622px;
  max-width: 622px;
  height: 454px;
  overflow: visible;
  @media screen and (max-width: 992px) {
    height: auto;
    margin-bottom: 12px;
    width: 72%;
    aspect-ratio: 1.35 !important;
  }
`,_e=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ae=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 10px;
    & > .button {
      height: 60px;
    }
  }
`,L=s.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: white;
  font-size: 16px;
  gap: 3px;
  & > svg {
    width: 24px;
    height: 24px;
  }
  & > img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  span {
    font-size: 24px;
    font-weight: 500;
    line-height: 110%;
    color: white;
  }
`,Le=s.p`
  text-decoration: underline;
  font-size: 18px;
  color: white;
  text-align: center;
  cursor: pointer;
`,Fe=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 992px) {
    width: 100%;
    margin-bottom: 37px;
  }
`,De=s.p`
  width: 100%;
  margin-bottom: 38px;
  font-size: 24px;
  line-height: 26px;
  color: white;
  font-weight: 500;
  @media screen and (max-width: 992px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 22.5px;
    margin-bottom: 24px;
    width: auto;
  }
`,We=s.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 9px;
  flex-wrap: nowrap;
  margin-bottom: 28px;
  @media screen and (max-width: 992px) {
    margin-bottom: 10px;
    flex-wrap: wrap-reverse;
  }
`,Ue=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: fit-content;
  @media screen and (max-width: 992px) {
    gap: 9px;
  }
`,qe=s(Z).attrs({justify:"center"})`
  width: 405px;
  max-width: 405px;
  @media screen and (max-width: 992px) {
    max-width: none;
    width: 100%;
  }
`,Ge=s.div(()=>C`
      display: flex;
      gap: 2px;

      .chance {
        width: 4px;
        height: 14px;
        border-radius: 38px;
        background: rgba(255, 255, 255, 0.45);

        &.active {
          background: #9ed44e;
        }
      }
    `),Ve=s.div(()=>C`
      width: 4px;
      height: 14px;
      border-radius: 38px;
      background: rgba(255, 255, 255, 0.45);

      &.active {
        &.${S.ExtremelyLowChance} {
          background: #f14f63;
        }
        &.${S.LowChance} {
          background: #f1804f;
        }
        &.${S.MediumChance} {
          background: #ffbf66;
        }
        &.${S.HighChance} {
          background: #9ed44e;
        }
        &.${S.VeryHighChance} {
          background: #2aab8e;
        }
      }
    `),Xe=({chance:t})=>{const i=Object.values(S).indexOf(t),n=Object.values(S).length;return e.jsx(Ge,{children:[...Array(n).keys()].map(o=>e.jsx(Ve,{className:f(t,{active:o<=i})},t+o))})},Ye="_rewardDetails_2kums_1",Je="_reward_2kums_1",Ke="_rewardWrap_2kums_16",Qe="_head_2kums_25",Ze="_title_2kums_41",et="_chanceWrap_2kums_50",R={rewardDetails:Ye,reward:Je,rewardWrap:Ke,head:Qe,title:Ze,chanceWrap:et},tt=({reward:t,rate:i})=>{const n=pe[i],o=de[n];return e.jsxs("div",{className:R.rewardDetails,children:[e.jsx(_,{amount:0,itemId:t.id,navigateOnClick:!1,isShowTooltip:!1,isAmountShown:!1,className:R.reward}),e.jsxs("div",{className:R.rewardWrap,children:[e.jsxs("div",{className:R.head,children:[e.jsx(be,{width:30}),e.jsx("span",{children:t.grade})]}),e.jsx("h4",{className:R.title,children:t.name}),e.jsxs("div",{className:R.chanceWrap,children:[e.jsx("span",{children:o}),e.jsx(Xe,{chance:n})]})]})]})},oe=({chest:t})=>{const[i,n]=c.useState(null),o=he(),{rewards:r,mainRewards:d}=ke(t),p=c.useMemo(()=>{if(!i)return null;const l=o.find(u=>u.id===i.itemId);return l?{...l,quantity:1}:null},[o,i]),{isMobile:h}=I(),x=l=>()=>{n(l)},m=()=>{n(null)};return e.jsxs(Fe,{children:[e.jsx(De,{children:"What might be inside:"}),e.jsx(We,{children:d.map(l=>e.jsx(_,{amount:0,itemId:l.itemId,isAmountShown:!1,isShowTooltip:!1,action:x(l),hoverEffect:!0,activeHoverEffect:i?.itemId===l.itemId},l.itemId.toString()+"main"))}),e.jsx(qe,{children:e.jsx(Ue,{children:r.map(l=>e.jsx(_,{amount:0,itemId:l.itemId,isAmountShown:!1,isShowTooltip:!1,action:x(l),hoverEffect:!0,activeHoverEffect:i?.itemId===l.itemId,isSmallMid:h},l.itemId.toString()+"misc"))})}),e.jsx(ye,{show:!!i,onClose:m,isClosing:!1,hasOverlay:!0,children:p&&e.jsx(tt,{reward:p,rate:i?.rate||1})})]})},it=({chest:t,updateChestPosition:i,openChest:n,isLoading:o})=>{const r=c.useRef(null),{isOpening:d,isShowingAll:p,isChestReady:h,updateState:x}=E(),{isMobile:m}=I(),{exp:{items:l}}=K(),{buyItem:w,data:{isLoading:u}}=ve(),g=l.find($=>$.item.id===t.id)?.quantity??0,b=t.goodsId>0,j=!g&&!b,y=()=>x({isShowingAll:!0}),v=()=>{g<1?w(t.goodsId,t.id,1):n()};return q({updater:i,node:r.current,fireCondition:!d&&!p||h}),m?e.jsx(nt,{chest:t,isLoading:u||o,onClick:v,userBalance:g,ref:r,isHidden:d}):e.jsxs(ie,{className:f({isHidden:d||p}),children:[e.jsxs(ne,{$grade:t.grade,children:["Open ",e.jsx("span",{children:t.name}),"?"]}),e.jsxs(He,{children:[e.jsx(se,{ref:r,className:"current"}),e.jsx(oe,{chest:t})]}),e.jsxs(_e,{children:[e.jsxs(ae,{children:[e.jsx(W,{label:g>0?"Open":"Buy",variant:"white",size:"lg",onClick:v,loading:u||o,isDisabled:u||o||j}),e.jsx(L,{children:g>0?e.jsxs(e.Fragment,{children:[e.jsx(D,{}),g," in inventory"]}):b?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:U,alt:"expToken"}),e.jsxs("span",{children:[t.price," EXP"]})]}):e.jsx("span",{children:"Not available"})})]}),e.jsx(Le,{onClick:y,children:"See All"})]})]})},nt=c.forwardRef(({isLoading:t,onClick:i,userBalance:n,chest:o,isHidden:r},d)=>e.jsxs(ie,{className:f({isHidden:r}),children:[e.jsx(se,{ref:d}),e.jsxs(ne,{$grade:o.grade,children:["Open ",e.jsx("span",{children:o.name}),"?"]}),e.jsx(oe,{chest:o}),e.jsxs(ae,{children:[e.jsx(W,{label:n>0?"Open":"Buy",variant:"white",size:"lg",onClick:i,loading:t,isDisabled:t,className:"button"}),n>0?e.jsxs(L,{children:[e.jsx(D,{}),n," in inventory"]}):e.jsxs(L,{children:[e.jsx("img",{src:U,alt:"expToken"}),e.jsxs("span",{children:[o.price," EXP"]})]})]})]})),st=s(O.div)`
  width: 100%;
  height: 100%;
  overflow: visible;
  position: absolute;
  z-index: 2;
  pointer-events: none;
  &.isHidden {
    opacity: 0;
  }
`,at=s.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 !important;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  transition: 0.3s;
  &.isHidden {
    opacity: 0;
    scale: 0.3 !important;
  }

  &.${a.VioletChest} {
    scale: 1.05 0.95;
  }
  &.${a.DivineChest} {
    scale: 0.85;
  }
  &.${a.AquaChest} {
    scale: 0.8;
  }
  &.${a.RoyalChest} {
    scale: 0.85;
  }
  &.${a.SolanaChest},
    &.${a.BalkanChest},
    &.${a.FreenameChest},
    &.${a.WirexChest},
    &.${a.MagicChest} {
    scale: 0.9;
  }
  &.${a.FioChest} {
    scale: 0.8;
  }

  &.isOpening {
    &.${a.VioletChest} {
    }
    &.${a.DivineChest} {
      transform: translateY(-25px);
    }
    &.${a.AquaChest} {
      transform: translateY(-25px);
    }
    &.${a.RoyalChest} {
      transform: translateY(-65px);
    }
    &.${a.SolanaChest},
      &.${a.MagicChest},
      &.${a.BalkanChest},
      &.${a.FioChest},
      &.${a.FreenameChest},
      &.${a.WirexChest} {
      transform: translate(-30px, -80px);
    }
  }
  @media screen and (max-width: 992px) {
    &.${a.VioletChest} {
      scale: 1.05 0.95;
    }
    &.${a.AquaChest} {
      scale: 0.85;
    }
    &.${a.RoyalChest} {
      scale: 1;
    }
    &.${a.SolanaChest},
      &.${a.MagicChest},
      &.${a.BalkanChest},
      &.${a.FioChest},
      &.${a.FreenameChest},
      &.${a.WirexChest} {
      scale: 0.8;
    }
    &.${a.FioChest} {
      scale: 0.7;
    }
    &.isOpening {
      &.${a.VioletChest} {
      }
      &.${a.AquaChest} {
        transform: translateY(-25px);
      }
      &.${a.RoyalChest} {
        transform: translateY(-30px);
      }

      &.${a.SolanaChest},
        &.${a.MagicChest},
        &.${a.BalkanChest},
        &.${a.FioChest},
        &.${a.FreenameChest},
        &.${a.WirexChest} {
        transform: translate(-10px, 0px);
      }
    }
  }
`,ot=s(O.div)(({$grade:t})=>{const i=A(t);return C`
    will-change: "opacity";
    background-color: ${i};
    width: 247px;
    height: 247px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow:
      0px 0px 1638.56px ${i},
      0px 0px 936.319px ${i},
      0px 0px 546.186px ${i},
      0px 0px 273.093px ${i},
      0px 0px 78.0266px ${i},
      0px 0px 39.0133px ${i};
    mix-blend-mode: hard-light;
    filter: blur(5px);
    z-index: -2;
    transition: 0.5s;
    &.isHidden {
      opacity: 0;
    }
    @media screen and (max-width: 992px) {
      width: 150px;
      height: 150px;
    }
  `}),rt={initial:t=>({...t}),animate:t=>({...t})},lt=({chest:t})=>{const[i,n]=c.useState(!1),{chestLayout:o,isOpening:r,isShowingAll:d,isChestReady:p,updateState:h}=E(),[x,m]=c.useState(!1),[l,w]=c.useState(!1),u=c.useMemo(()=>r||d?"animate":"initial",[r,d]),g=c.useRef(t.fungibleType);c.useEffect(()=>{n(!1),r||setTimeout(()=>{n(!0)},800)},[o,r]),c.useEffect(()=>{!o||l||setTimeout(()=>{w(!0)},800)},[o,l]);const b=j=>{j==="animate"&&r&&h({showAnimation:!0})};return c.useEffect(()=>{g.current!==t.fungibleType&&(m(!1),g.current=t.fungibleType)},[t.fungibleType]),e.jsxs(st,{className:f({isHidden:p}),onAnimationComplete:b,custom:o,variants:rt,animate:u,transition:{duration:r?1:.8},children:[e.jsx(at,{className:f(t.fungibleType,{isHidden:!x||!l,isOpening:r}),onLoad:()=>m(!0),src:t.image}),e.jsx(ot,{className:f({isHidden:!i||!l}),$grade:t.grade})]})},ct=s.div.attrs({className:"blur-30"})`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 510px;
  padding-top: 76px;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 10;
  background: #ffffff0a;
  &.isHidden {
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
  }
`,dt=s.p`
  width: 100%;
  padding: 0px 55px 0px 24px;
  font-size: 35px;
  font-weight: 500;
  color: white;
  line-height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
`,pt=s(Z).attrs({align:"center",justify:"center"})`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  transition: 0.3s;
  opacity: 0.7;
  & > svg {
    width: 18px;
    height: 18px;
  }
  &:hover {
    background: #ffffff0a;
    opacity: 1;
  }
  position: absolute;
  top: 20px;
  left: 20px;
`,ht=s.div.attrs({className:"tiny-sb"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 50px;
`,xt=s.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 29px;
  padding: 23px 26px 23px 55px;
  transition: 0.3s;
  cursor: pointer;
  &.isActive {
    background: #ffffff1a;
    cursor: default;
  }
`,mt=s.div`
  width: 187px;
  min-width: 187px;
  height: 153px;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    pointer-events: none;
    height: 150%;
    margin-bottom: -15px;
  }
`,ut=s.p(({$grade:t})=>C`
    color: ${A(t)};
    text-transform: capitalize;
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 2px;
  `),gt=s.p(({$grade:t})=>C`
    color: ${A(t)};
    text-transform: capitalize;
    font-size: 18px;
    line-height: 19px;
    opacity: 0.5;
    margin-bottom: 14px;
  `),ft=s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,wt=s.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 14px;
  & > svg {
    width: 20px;
  }
`,Ct=s.div`
  background: linear-gradient(78.72deg, rgba(244, 248, 255, 0.14) 60.06%, rgba(255, 255, 255, 0.026) 127.89%);
  height: 35px;
  color: white;
  width: fit-content;
  border-radius: 6px;
  padding: 0px 8px 0px 6px;
  display: flex;
  align-items: center;
  gap: 2px;
  line-height: 100%;
  font-weight: 500;
  font-size: 20px;
  & > img {
    width: 31px;
    height: 31px;
    object-fit: contain;
  }
`,bt=({title:t,titleId:i,...n},o)=>c.createElement("svg",{width:18,height:16,viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":i,...n},t?c.createElement("title",{id:i},t):null,c.createElement("path",{d:"M1 14.6654L7.66667 7.9987L1 1.33203M10.3333 14.6654L17 7.9987L10.3333 1.33203",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"})),yt=c.forwardRef(bt),vt=({chests:t,handleClose:i})=>{const{isShowingAll:n}=E(),{isMobile:o}=I(),{type:r}=F(),d=Q(),p=h=>()=>{d(`/fullscreen/shop/chests/${h}`)};return o?null:e.jsxs(ct,{className:f({isHidden:!n}),children:[e.jsx(pt,{onClick:i,children:e.jsx(yt,{})}),e.jsx(dt,{children:"Treasure Chests"}),e.jsx(ht,{children:t.map(h=>e.jsx(jt,{chest:h,isActive:h.fungibleType===r,onClick:p(h.fungibleType)},h.fungibleType+"inList"))})]})},jt=({chest:t,onClick:i,isActive:n})=>{const{exp:{items:o}}=K(),r=()=>{n||i()},{image:d,grade:p,fungibleType:h,price:x}=t,m=o.find(l=>l.item.id===t.id)?.quantity??0;return t.goodsId<0&&!m?null:e.jsxs(xt,{onClick:r,className:f({isActive:n}),children:[e.jsx(mt,{children:e.jsx("img",{src:d,alt:h})}),e.jsxs(ft,{children:[e.jsxs(ut,{$grade:p,children:[h.split("-")[0]," Chest"]}),e.jsx(gt,{$grade:p,children:p}),e.jsxs(wt,{children:[e.jsx(D,{}),m," in inventory"]}),t.goodsId>0&&e.jsxs(Ct,{children:[e.jsx("img",{src:U}),x," EXP"]})]})]})},$t=s.div`
  position: absolute;
  top: 17%;
  left: calc(50% - 320px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: unset;
    width: 100%;
    left: 0;
    top: auto;
    bottom: min(80vh, 98vw); // magic number to match animation
  }

  img {
    width: 200px;
    height: 200px;

    @media screen and (max-width: 992px) {
      width: 150px;
      height: 150px;
    }

    &:first-child {
      @media screen and (max-width: 992px) {
        grid-column: 1 / 3;
      }
    }
  }
`,St={initial:{opacity:0,scale:.8,y:200},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:1,y:0}},kt=({rewards:t,showRewards:i})=>e.jsx($t,{as:O.div,variants:St,initial:"initial",animate:i?"animate":"exit",children:t.slice(0,3).map((n,o)=>e.jsx("img",{src:n.image,alt:n.name},n.createdAt.toString()+o))}),Rt=s.div(()=>C`
    position: absolute;
    top: calc(50% - 250px);
    left: calc(50% - 250px);

    @media screen and (max-width: 992px) {
      top: auto;
      left: calc(50% - 175px);
      bottom: min(80vh, 66vw); // magic number to match animation
    }

    img {
      width: 500px;
      height: 500px;

      @media screen and (max-width: 992px) {
        width: 350px;
        height: 350px;
      }
    }
  `),At={initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8}},Tt=({reward:t,showMainReward:i})=>e.jsx(Rt,{as:O.div,variants:At,initial:"initial",animate:i?"animate":"exit",children:e.jsx("img",{src:t?.image,alt:t?.name})}),It=s.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &.isHidden {
      opacity: 0;
    }
  `,Ot=s(O.div)`
    position: relative;
    width: 100%;
    height: 100%;

    .background-player {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .chest-player {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  `,Y={open:!1,isReady:{background:!1,chest:!1},isPlayingSound:!1,showMainReward:!1,showRewards:!1},Et=(t,i)=>({...t,...i}),Nt={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},Mt=c.memo(({chest:t,onClose:i,receivedRewards:n})=>{const{updateState:o,isChestReady:r}=E(),[{isPlayingSound:d,isReady:p,open:h,showMainReward:x,showRewards:m},l]=c.useReducer(Et,Y),{isMobile:w}=I(),u=xe(t.fungibleType),{play:g}=je({sound:X.CHEST_UNCOMMON.sound}),b=J(),j=c.useMemo(()=>{const M=me[t.fungibleType],B=n[n.length-1]?.grade??t.grade,P=w&&!u?"mobile":"desktop",[z,...H]=P,re=z.toUpperCase().concat(...H);return`${$e}/chests/${re}/${M}/${M.toLowerCase()}treasure_${B}_${P}.riv`},[t,n,w]),{rive:y,RiveComponent:v}=T.useRive({src:j,onLoad:()=>{l({isReady:{chest:!0,background:!0}})},onStop:()=>{l({open:!0})},onPlay:b(()=>l({isPlayingSound:!0}),u?1100:600),layout:new T.Layout({fit:w?T.Fit.FitWidth:T.Fit.FitHeight,alignment:T.Alignment.BottomCenter})});c.useEffect(()=>{p.background&&p.chest&&y&&setTimeout(()=>{y?.play(),o({isChestReady:!0})},1e3)},[p,t.grade,y]);const $=async()=>{if(u){await k(1300,l,{showRewards:!0}),await k(2e3,l,{showRewards:!1}),await k(350,l,{open:!0});return}await k(1e3,l,{showRewards:!0}),await k(1400,l,{showRewards:!1}),await k(1500,l,{showMainReward:!0})};c.useEffect(()=>{d&&(g(X.CHEST_UNCOMMON.volume),$())},[d]);function N(){l(Y),i()}return c.useEffect(()=>{},[y]),e.jsxs(e.Fragment,{children:[ue.createPortal(e.jsx(It,{className:f({isHidden:!r}),children:e.jsxs(Ot,{variants:Nt,exit:"exit",children:[e.jsx(v,{className:"chest-player"}),e.jsx(kt,{rewards:n,showRewards:m}),e.jsx(Tt,{reward:n[n.length-1],showMainReward:x})]})}),document.getElementById(G.PORTAL)),e.jsx(Re,{rewards:n,open:h,onClickButton:N,buttonTitle:w?"Claim":"Continue",portal:G.SUPREME})]})}),Dt=()=>{const[t,i]=c.useReducer(Ae,ee),{type:n}=F(),{chests:o=[],chest:r}=ge(n),{isMobile:d}=I(),[p,{isLoading:h}]=fe(),x=c.useRef(null),m=c.useRef(null),l=Q(),{drop:w,isOpening:u,showAnimation:g,isShowingAll:b}=t,j=async()=>{r&&await p({fungibleType:r.fungibleType}).unwrap().then($=>{i({isOpening:!0,drop:$.drop})}).catch(console.error)},y=()=>{i({isOpening:!1,isChestReady:!1,drop:[],showAnimation:!1})},v=$=>{const N=x.current;if(!N)return;const M=N.scrollTop,{width:B,height:P,top:z,left:H}=$.getBoundingClientRect();i({chestLayout:{width:B,height:P,top:z+M,left:H}})};return q({updater:v,fireCondition:u,node:m.current}),n?r?e.jsxs(te.Provider,{value:{...t,updateState:i},children:[e.jsxs(Ie,{ref:x,children:[e.jsx(Se,{className:f("backButton",{isHidden:u,isShowingAll:b}),text:d?"":"Back",onClick:()=>l(V.SHOP)}),e.jsx(it,{chest:r,updateChestPosition:v,openChest:j,isLoading:h}),!d&&e.jsxs(e.Fragment,{children:[e.jsx(ze,{chest:r,updateChestPosition:v}),e.jsx(vt,{handleClose:()=>i({isShowingAll:!1}),chests:o})]}),e.jsx(lt,{chest:r}),g&&e.jsx(Mt,{chest:r,onClose:y,receivedRewards:w})]}),e.jsx(Oe,{style:{backgroundImage:`url(${r.backgroundImage})`},className:f({isOpening:g})}),e.jsx(Ee,{ref:m})]}):e.jsx(Ce,{}):e.jsx(we,{to:V.SHOP,replace:!0})};export{Dt as default};
