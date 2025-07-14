import{by as a,q as b,bS as C,B as t,bL as w,J as r,E as o,bB as _}from"./index.BDWbwHp_.js";import{I as l,q as v,r as y}from"./index.CMGJEYRC.chunk.js";const j=a.div.attrs({className:"blur-20"})`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(19, 26, 41, 0.71);
    backdrop-filter: blur(20px);
    z-index: 3000;
  `,S=a.div`
    max-width: 934px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    will-change: scale;
  `,N=a.h2`
    color: #fff;
    font-size: 72px;
    font-weight: 500;
    line-height: 119%;
    margin-bottom: 11px;

    @media screen and (max-width: 992px) {
      font-size: 32px;
      margin-bottom: 5px;
    }
  `,c=a.p`
    color: #fff;
    font-size: 28px;
    line-height: 143%;
    letter-spacing: 0.5px;
    text-align: center;

    @media screen and (max-width: 992px) {
      font-size: 18px;
      line-height: 125%;
    }
  `,W=a.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-height: 450px;
    overflow: auto;
    padding-right: 15px;

    &.singleChild {
      grid-template-columns: repeat(1, 1fr);
      padding-right: 0px;
    }
  `,E="_rewardsWrapper_11cuc_1",I="_itemCarousel_11cuc_9",k="_buttonCarousel_11cuc_12",q="_hidden_11cuc_16",z="_reward_11cuc_1",B="_button_11cuc_12",e={rewardsWrapper:E,itemCarousel:I,buttonCarousel:k,hidden:q,reward:z,button:B},L={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.3}}},A={initial:{scale:.5},animate:{scale:1,transition:{type:"spring",stiffness:300}},exit:{scale:.5,transition:{duration:.3}}},R=({portal:p=_.FULLSCREEN,title:d="Congratulations!",subtitle:m="Here's what you get:",secondSubtitle:u="",rewards:n,buttonTitle:x="Continue",open:h=!1,onClickButton:g})=>{const{isMobile:f}=b();return C.createPortal(t.jsx(w,{children:h&&t.jsx(j,{as:r.div,variants:L,initial:"initial",animate:"animate",exit:"exit",children:t.jsxs(S,{as:r.div,variants:A,initial:"initial",animate:"animate",exit:"exit",children:[t.jsx(N,{children:d}),t.jsx(c,{children:m}),t.jsx(c,{children:u}),f?t.jsx(W,{className:o(e.rewardsWrapper,"tiny-sb",n.length===1?"singleChild":""),children:[...n].reverse().map((i,s)=>t.jsx(l,{amount:i.quantity,itemId:i.id,className:e.reward,navigateOnClick:!1,variantTooltip:"cool"},i.createdAt.toString()+s))}):t.jsx(v,{width:"100%",items:[...n].reverse().map((i,s)=>t.jsx(l,{amount:i.quantity,itemId:i.id,className:e.reward,navigateOnClick:!1,variantTooltip:"cool",withAnimation:"flip"},"congrat-reward"+s)),className:e.rewardsWrapper,itemClassName:e.itemCarousel,buttonClassName:o(e.buttonCarousel,n.length<=4&&e.hidden)}),t.jsx(y,{label:x,variant:"white",onClick:g,className:e.button})]})})}),document.querySelector(`#${p}`))};export{R as F};
