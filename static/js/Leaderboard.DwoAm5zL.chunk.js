import{B as e,E as q,by as i,bz as s,q as B,cp as F,r as d,ae as be,cZ as we,hD as ve,bE as V,bT as ke,J as L,dv as J,a1 as I,dj as je,p as K,cj as N,x as ee,bp as A,hE as ye,ag as _e,bv as te,du as Ce,hF as Se,aU as ze,bV as $e}from"./index.BDWbwHp_.js";import{eO as Be,v as Le,r as Pe,aw as ne,eP as Me,eQ as Fe,eR as Ee,ae as Ie,ba as Ne,aI as Ae,a5 as ie,W as Re,Z as Te,dC as We,eC as Ge,H as Oe}from"./index.CMGJEYRC.chunk.js";import"./relativeTime.DEMDksMo.chunk.js";const Ue=({options:t,className:r="",value:n,onChange:a,color:o="red",accentColor:g})=>e.jsx(Be,{$accentColor:g,className:r,$color:o,children:t.map(x=>e.jsx("div",{className:q(n===x.value&&"toggler__option-active"),onClick:()=>a(x.value),children:e.jsx("span",{children:x.label})},x.value))}),W="/static/media/premium.B1KUUqt_.png",re="/static/media/leaderboard1Place.fu8Xg40n.png",ae="/static/media/leaderboard2Place.CavSli4r.png",oe="/static/media/leaderboard3Place.BMApxPI2.png",He="/static/media/4thAndHigher.BZR3HFIE.png",De=i.div(()=>s`
    display: flex;
    gap: 18px;

    @media screen and (max-width: 992px) {
      gap: 8px;
    }

    .togglers__select {
      height: 38px;
    }
  `),G=[{label:"Overall",value:"overall"},{label:"Monthly",value:"monthly"}],O=({state:t,updateState:r,accentColor:n})=>{const{isMobile:a}=B();return e.jsx(De,{children:a?e.jsx(e.Fragment,{children:e.jsx(Le,{options:G,value:t.period,onChange:o=>r({period:o}),color:"red",className:"togglers__select",customBgColor:n})}):e.jsx(e.Fragment,{children:e.jsx(Ue,{options:G,accentColor:n,value:t.period,onChange:o=>r({period:o})})})})},Xe=i.div(({$accentColor:t})=>s`
    display: flex;
    align-items: center;

    @media screen and (min-width: 993px) {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      backdrop-filter: blur(11px);
      gap: 32px;
      padding: 0 31px;
      max-width: 1110px;
    }

    @media screen and (max-width: 992px) {
      gap: 6px;
      padding: 0 20px;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    div {
      color: #fff;

      @media screen and (min-width: 993px) {
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 0.425px;
        padding: 14px 0 18px 0;
        position: relative;
        cursor: pointer;

        &.filter-active {
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: ${t??F.color};
          }
        }
      }

      @media screen and (max-width: 992px) {
        padding: 10px 20px;
        border-radius: 49px;
        border: 2px solid transparent;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(11.5px);

        font-size: 16px;
        font-weight: 400;
        line-height: 110%;
        white-space: nowrap;

        &.filter-active {
          border: 2px solid ${t??F.color};
        }
      }
    }
  `),U=({state:t,updateState:r,accentColor:n,filters:a=[]})=>e.jsx(Xe,{$accentColor:n,children:a.map(o=>e.jsx("div",{onClick:()=>r({filter:o}),className:q(t.filter===o&&"filter-active"),children:o},o))}),Ze=({title:t,titleId:r,...n},a)=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:147,height:147,viewBox:"0 0 147 147",fill:"none",ref:a,"aria-labelledby":r,...n},t?d.createElement("title",{id:r},t):null,d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M88.8126 67.375C101.495 67.375 111.781 57.089 111.781 44.4062C111.781 31.7185 101.495 21.4375 88.8126 21.4375C76.1299 21.4375 65.8439 31.7185 65.8439 44.4062C65.7983 57.0434 76.0134 67.3294 88.6504 67.375H88.8126Z",stroke:"currentColor",strokeWidth:7,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M88.8125 122.5C67.3412 122.5 49 119.594 49 107.962C49 96.3299 67.223 85.75 88.8125 85.75C110.284 85.75 128.625 96.2291 128.625 107.856C128.625 119.484 110.402 122.5 88.8125 122.5Z",stroke:"currentColor",strokeWidth:7,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M51.6485 64.3206H51.5079C40.5536 64.2811 31.6987 55.3647 31.7382 44.4103C31.7382 33.412 40.6546 24.5 51.6485 24.5M36.3362 118.672C25.7868 117.33 18.375 114.096 18.375 107.336C18.375 100.567 25.7594 94.2235 36.3362 90.9953",stroke:"currentColor",strokeWidth:7,strokeLinecap:"round",strokeLinejoin:"round"})),Qe=d.forwardRef(Ze),Ye=i.div(()=>s`
    border-radius: 0 0 4px 4px;
    background: linear-gradient(284deg, rgba(255, 255, 255, 0.1) -0.22%, rgba(255, 255, 255, 0.1) 158.74%), rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(2.5px);
    width: 100%;
    height: 100%;
    max-width: 1110px;
    color: #fff;
    padding-top: 30px;
    padding-bottom: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 992px) {
      justify-content: flex-start;
      width: calc(100% - 5px);
      min-height: 100vh;

      svg {
        margin-top: 80px;
        width: 110px;
        height: 110px;
      }
    }

    h4 {
      color: inherit;
      font-size: 35px;
      font-weight: 500;
      line-height: 100%;
      margin-bottom: 10px;

      @media screen and (max-width: 992px) {
        font-size: 28px;
        line-height: 114%;
        text-align: center;
        max-width: 240px;
        margin-bottom: 8px;
      }
    }

    p {
      color: inherit;
      line-height: 100%;
      margin-bottom: 32px;

      @media screen and (max-width: 992px) {
        font-size: 16px;
        margin-bottom: 26px;
      }
    }

    .friendsPlaceholder__button {
      color: inherit;
      font-weight: 500;
      width: 192px;
      height: 60px;
      background:
        linear-gradient(282deg, rgba(255, 255, 255, 0.4) -0.2%, rgba(255, 255, 255, 0.1) 98.72%),
        radial-gradient(177.65% 199.04% at 30.69% 50.15%, rgba(241, 79, 99, 0.8) 10%, rgba(241, 79, 99, 0) 100%);
      background-blend-mode: overlay, normal;
    }
  `),qe=()=>{const t=be();function r(){t(we(!0))}return e.jsxs(Ye,{children:[e.jsx(Qe,{}),e.jsx("h4",{children:"You don't have friends yet"}),e.jsx("p",{children:"Add friends to view leaderboards"}),e.jsx(Pe,{label:"Find friend",className:"friendsPlaceholder__button",onClick:r})]})},H=i.div(()=>s`
      position: relative;
      width: 100%;

      @media screen and (min-width: 993px) {
        max-width: 1110px;
        min-height: 259px;
        overflow: hidden;

        border-radius: 4px;
        background: rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(12px);

        .monthly-winners__bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }
      }

      @media screen and (max-width: 992px) {
        padding: 0 20px;
      }
    `),Ve=i.div(()=>s`
      position: relative;
      z-index: 2;
      padding: 56px 64px;
      width: 100%;
      h2 {
        width: 284px;

        color: #fff;
        font-size: 70px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
      }

      @media screen and (max-width: 1044px) {
        padding: 56px 32px;

        h2 {
          font-size: 62px;
        }
      }
    `),Je=i.div(()=>s`
      display: flex;
      align-items: flex-end;
      position: absolute;
      z-index: 1;
      right: 0;
      bottom: 0;

      @media screen and (max-width: 992px) {
        position: static;
        border-bottom: 1px solid #fff;
      }
    `),Ke=i.div(()=>s`
      @media screen and (max-width: 992px) {
        flex: 1;
      }
    `),et=i.div(()=>s`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 992px) {
        svg {
          width: 100%;
        }
      }

      &.monthly-winners__silver,
      &.monthly-winners__bronze {
        .monthly-winners__icon img {
          width: 60px;
          height: 60px;

          @media screen and (max-width: 992px) {
            width: 50px;
            height: 50px;
          }
        }

        .monthly-winners__place {
          font-size: 21.108px;

          @media screen and (max-width: 992px) {
            font-size: 17.262px;
          }
        }
      }

      &.monthly-winners__silver {
        .monthly-winners__place {
          background: var(--silver-bg);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media screen and (max-width: 992px) {
          svg {
            height: 78px;
          }
        }
      }

      &.monthly-winners__bronze {
        .monthly-winners__place {
          background: var(--bronze-bg);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transform: translateX(1px);
        }

        @media screen and (max-width: 992px) {
          svg {
            height: 57px;
          }
        }
      }

      &.monthly-winners__gold {
        .monthly-winners__icon img {
          width: 99px;
          height: 99px;

          @media screen and (max-width: 992px) {
            width: 80px;
            height: 80px;
          }
        }

        .monthly-winners__place {
          font-size: 34.3px;
          background: var(--gold-bg);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transform: translateX(1px);

          @media screen and (max-width: 992px) {
            font-size: 28.052px;
          }
        }

        @media screen and (max-width: 992px) {
          svg {
            height: 121px;
          }
        }
      }

      .monthly-winners__icon,
      .monthly-winners__place {
        position: absolute;
      }

      .monthly-winners__icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .monthly-winners__place {
        color: #fff;
        font-weight: 700;
        line-height: 112%;
      }
    `),tt=i.div(()=>s`
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0 0 15px 20px;

      @media screen and (max-width: 992px) {
        flex-direction: column;
        gap: 4px;
        margin: 0 0 8px 0;
      }
    `),nt=i.div(()=>s`
      h5 {
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        line-height: 112%;
        width: 113px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 2px;

        @media screen and (max-width: 992px) {
          font-size: 12px;
          text-align: center;
          width: 100px;
        }
      }

      .winner-info__exp {
        display: flex;
        align-items: center;

        img {
          max-width: 24px;
        }

        span {
          color: #fff;
          line-height: 112%;
        }

        @media screen and (max-width: 992px) {
          justify-content: center;

          img {
            max-width: 21px;
          }

          span {
            font-size: 12px;
          }
        }
      }
    `),it=i.div(()=>s`
      position: absolute;
      top: -4px;
      right: 12px;
      padding: 8px;
    `),rt=[{name:"gold",podium:e.jsx(Me,{}),icon:re},{name:"silver",podium:e.jsx(Fe,{}),icon:ae},{name:"bronze",podium:e.jsx(Ee,{}),icon:oe}],D=({rows:t,show:r,onClose:n,title:a})=>{const{isMobile:o}=B();return o?r?e.jsxs(H,{children:[e.jsx(it,{onClick:n,children:e.jsx(ve,{width:15,height:15})}),e.jsx(X,{rows:t,isMobile:o})]}):e.jsx(e.Fragment,{}):e.jsxs(H,{children:[e.jsx(Ve,{children:e.jsx("h2",{children:a||"Monthly Winners"})}),e.jsx(X,{rows:t})]})},X=({rows:t,isMobile:r})=>e.jsx(Je,{children:t.slice(0,3).map((n,a)=>{const o=rt[a];return e.jsxs(Ke,{style:{order:a===1?-1:0},children:[e.jsxs(tt,{children:[e.jsx(ne,{userName:n.nickname,src:n.avatar,size:r?52:68}),e.jsxs(nt,{children:[e.jsx("h5",{children:n.nickname}),e.jsxs("div",{className:"winner-info__exp",children:[e.jsx("img",{src:V,alt:"expIcon"}),e.jsx("span",{children:n.balance})]})]})]}),e.jsxs(et,{className:`monthly-winners__${o.name}`,children:[o.podium,e.jsxs("div",{className:"monthly-winners__icon",children:[e.jsx("img",{src:o.icon,alt:"placeIcon"}),e.jsx("div",{className:"monthly-winners__place",children:a+1})]})]})]},a)})}),at=["linear-gradient(270deg, rgba(255, 255, 255, 0.00) 50%, rgba(235, 170, 89, 0.4) 81.54%), linear-gradient(284deg, rgba(255, 255, 255, 0.1) -0.22%, rgba(255, 255, 255, 0.1) 158.74%), rgba(255, 255, 255, 0.06)","linear-gradient(270deg, rgba(255, 255, 255, 0.00) 50%, rgba(234, 238, 246, 0.4) 81.54%), linear-gradient(284deg, rgba(255, 255, 255, 0.1) -0.22%, rgba(255, 255, 255, 0.1) 158.74%), rgba(255, 255, 255, 0.06)","linear-gradient(270deg, rgba(255, 255, 255, 0.00) 50%, rgba(238, 107, 70, 0.4) 81.54%), linear-gradient(284deg, rgba(255, 255, 255, 0.1) -0.22%, rgba(255, 255, 255, 0.1) 158.74%), rgba(255, 255, 255, 0.06)","linear-gradient(270deg, rgba(255, 255, 255, 0) 50%, rgba(100, 135, 239, 0.2) 81.54%), linear-gradient(284deg, rgba(255, 255, 255, 0.1) -0.22%, rgba(255, 255, 255, 0.1) 158.74%), rgba(255, 255, 255, 0.06)","linear-gradient(284deg, rgba(255, 255, 255, 0.1) -0.22%, rgba(255, 255, 255, 0.10) 158.74%), rgba(255, 255, 255, 0.06)"],ot=["gold","silver","bronze"],st={period:"monthly",users:"allUsers",filter:"EXP"},dt=ke`
0% {
    background-position: 200% 0;
}
100% {
    background-position: -200% 0; 
}
`,lt=i.div`
  ${({$accentColor:t})=>s`
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, ${t}, ${t} 25%, var(--body-color) 50%, ${t} 75%, ${t});
    position: fixed;
    top: 0;
    left: 0;
    background-size: 200% 100%;
    animation: ${dt} 2s infinite ease-in-out;
  `}
`,ct=i.div(()=>s`
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 1110px;
      position: relative;
      border-radius: 4px;
      margin-top: 20px;

      @media screen and (max-width: 992px) {
        padding: 0 20px 0 20px;
        margin-top: unset;
        /* padding-bottom: 100px; */
      }
    `);i.div(()=>s`
      width: 100%;
      height: 5px;
    `);const pt=i.div(()=>s`
      width: 100%;
      max-width: 1110px;

      @media screen and (max-width: 992px) {
        margin-bottom: 11px;
      }

      .leaderboard-page__back-button {
        margin-bottom: 28px;

        @media screen and (max-width: 992px) {
          margin: 0 10px;
          padding: 5px;
          position: absolute;
        }
      }

      .leaderboard-page__monthly-banner {
        backdrop-filter: blur(12px);
        box-shadow: unset;
        max-width: 1110px;
        margin: 20px 0 0 0;
      }

      .leaderboard-page__monthly-close {
        background-color: rgba(255, 255, 255, 0.1);
      }
    `),xt=i.div(()=>s`
      display: flex;
      align-items: center;
      margin-bottom: 26px;

      @media screen and (max-width: 992px) {
        flex-direction: column;
        margin: 0 0 20px 0;
      }

      h3 {
        font-size: 35px;
        color: var(--font-color-strong);
        margin-right: 32px;

        @media screen and (max-width: 992px) {
          font-size: 28px;
          margin: 0 0 20px 0;
        }
      }
    `),ht=i.div(({$showWinners:t})=>s`
      position: relative;
      z-index: 1;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      height: fit-content;
    `),gt=i.div(()=>s`
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      height: fit-content;
    `),mt=i.div(()=>s`
      background: rgba(255, 255, 255, 0.06);
      border-radius: 4px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      max-width: 1110px;

      @media screen and (max-width: 992px) {
        background: rgba(255, 255, 255, 0.08);
        left: 20px;
        right: 20px;
      }
    `),ut=i.div(()=>s`
      display: flex;
      padding: 15px 0 15px 30px;
      width: 100%;
      max-width: 1110px;
      backdrop-filter: blur(12px);
      margin-bottom: -6px;
      font-size: 16px;
      color: var(--font-color);

      ${m} {
        color: #ffffff;
        opacity: 0.4;
      }

      @media screen and (max-width: 992px) {
        padding: 15px 0 20px 17px;
        width: calc(100% - 5px);
      }
    `),E=i.div(({myRow:t})=>s`
      height: 64px;
      overflow: hidden;
      display: flex;
      padding-left: 30px;
      align-items: center;
      border-radius: 4px;
      width: 100%;
      max-width: 1110px;
      outline: ${t&&"3px solid var(--leaders-accent)"};
      backdrop-filter: blur(${t?"10px":"2.5px"});

      @media screen and (max-width: 992px) {
        height: 50px;
        padding-left: 17px;
        border-radius: 3px;
        outline: ${t&&"2px solid var(--leaders-accent)"};
        backdrop-filter: ${t?"blur(17px)":"blur(2.5px)"};
      }
    `),se=i.div(()=>s`
      padding-top: 6px;
    `),ft=i.div(()=>s`
      position: relative;
      width: 56px;
      height: 56px;
      font-weight: bold;
      font-size: 18px;

      @media screen and (max-width: 992px) {
        width: 43px;
        height: 43px;
      }

      img {
        width: 56px;
        height: 56px;

        @media screen and (max-width: 992px) {
          width: 43px;
          height: 43px;
        }
      }

      img,
      span {
        color: var(--font-color-strong);
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
      }

      span {
        font-weight: 700;
        line-height: 112%;

        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 992px) {
          font-size: 14px;
          top: 1px;
        }

        &.gold {
          background: var(--gold-bg);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &.silver {
          background: var(--silver-bg);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &.bronze {
          background: var(--bronze-bg);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .my-row-label {
        font-size: 16px;
        font-weight: 400;
        margin-left: 72px;
        margin-top: 4px;

        @media screen and (max-width: 992px) {
          font-size: 10px;
          margin: 0 0 0 47px;
        }
      }
    `),m=i.div(({$widthPercent:t})=>s`
      width: ${t}%;
    `),bt=i(m)(()=>s`
      display: flex;
      gap: 6px;
      align-items: center;
      color: var(--font-color-strong);
      font-size: 18px;

      @media screen and (max-width: 992px) {
        gap: 4px;
        font-size: 12px;
      }

      img {
        width: 40px;
        height: 40px;

        @media screen and (max-width: 992px) {
          width: 31px;
          height: 31px;
        }
      }

      span {
        color: inherit;
      }
    `),wt=i(m)(()=>s`
      display: flex;
      align-items: center;

      .user-cell__nickname {
        color: #fff;
        font-size: 18px;
        line-height: 112%;
        margin-left: 16px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        @media screen and (max-width: 992px) {
          font-size: 12px;
          margin-left: 4px;
        }
      }

      img {
        max-width: 29px;
        margin: 0 16px 0 8px;

        @media screen and (max-width: 992px) {
          margin: 0 16px 0 4px;
          max-width: 17px;
        }
      }
    `),vt=i.div(({$accentColor:t,$bgImage:r,$bgColor:n})=>s`
      background-image: ${r};
      background-size: cover;
      background-position: bottom;
      background-color: ${n??"black"};
      position: fixed;
      overflow: scroll;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 2999;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 20px 60px 20px;
      box-sizing: border-box;
      --leaders-accent: ${t??"#F14F63"};
      @media screen and (max-width: 992px) {
        padding: 57px 0 100px;
        z-index: 1000;
      }
    `),de=i.div(()=>s`
      position: sticky;
      bottom: 0px;
      left: 0px;
      @media screen and (max-width: 992px) {
        bottom: 0px;
        width: 100%;
      }
    `),kt="data:image/svg+xml,%3csvg%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.87109%208.75391C2.87109%205.30204%205.66955%202.50373%209.12141%202.50391C12.5731%202.50408%2015.3711%205.30221%2015.3711%208.75391C15.3711%2012.2056%2012.5731%2015.0037%209.12141%2015.0039C5.66955%2015.0041%202.87109%2012.2058%202.87109%208.75391Z'%20stroke='white'%20stroke-width='1.6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.6523%2016.2852L13.7061%2013.3389'%20stroke='white'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3c/svg%3e",jt="data:image/svg+xml,%3csvg%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_b_26594_34735)'%3e%3ccircle%20cx='10.6133'%20cy='10.0039'%20r='10'%20fill='white'%20fill-opacity='0.1'/%3e%3c/g%3e%3cpath%20d='M6.91016%206.30078L10.6139%2010.0045M10.6139%2010.0045L6.91016%2013.7082M10.6139%2010.0045L14.3176%206.30078M10.6139%2010.0045L14.3176%2013.7082'%20stroke='%23AFB4B8'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cdefs%3e%3cfilter%20id='filter0_b_26594_34735'%20x='-33.0231'%20y='-33.6325'%20width='87.2727'%20height='87.2727'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeGaussianBlur%20in='BackgroundImageFix'%20stdDeviation='16.8182'/%3e%3cfeComposite%20in2='SourceAlpha'%20operator='in'%20result='effect1_backgroundBlur_26594_34735'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_backgroundBlur_26594_34735'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",yt=i(L.div)`
  display: flex;
  align-items: center;
  gap: 19px;
  margin-left: auto;
  @media screen and (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }
`,_t=i.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  font-weight: 400;
  color: white;
  @media screen and (max-width: 992px) {
    display: none;
  }
`,Ct=i.div`
  position: relative;
  z-index: 20;
  width: 190px;
  height: 48px;
`,St=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: #ffffff1a;
  border-radius: 36px;
  padding: 0 18px;
  height: 48px;
  backdrop-filter: blur(24px);
`,Z=i.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  border-radius: 50%;
`,Q=i.p`
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 17.6px;
  max-width: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,zt=i(L.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
  border-radius: 22px 22px 4px 4px;
  padding: calc(48px + 13px) 18px 0px;
  background: #ffffff1a;
  gap: 17px;
  height: fit-content;
  max-height: 794px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  ${t=>!t.$opened&&"height: 0px !important; padding-top: 0px; padding-bottom: 0px;"}
`,$t=i.input`
  border: none;
  outline: none;
  background: none;
  color: white;
  text-indent: 28px;
  background-image: url("${kt}");
  background-repeat: no-repeat;
  background-position: 0 0;
  height: 26px;
  border-bottom: 1px solid #ffffff40;
  padding-bottom: 6px;
  font-size: 16px;
  width: 100%;
`,Bt=i.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: url("${jt}");
  background-position: center;
  background-size: contain;
  border-radius: 50%;
  transition: 0.2s;
  position: absolute;
  right: 0;
  bottom: 6px;
  &:hover {
    filter: brightness(1.3);
  }
`,Lt=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow: auto;

  padding-bottom: 16px;
`,Pt=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,Mt=({spaces:t})=>{const{spaceName:r}=J(),[n,a]=d.useState(!1),[o,g]=d.useState(""),x=I(),b=Ie(()=>a(!1)),_=B(),w=d.useMemo(()=>r?t.find(l=>l.name.replaceAll(" ","_")===r):null,[t,r]),C=d.useMemo(()=>o?t.filter(l=>l.name.toLowerCase().startsWith(o.toLowerCase())):[],[o,t]),p=d.useMemo(()=>o?C:t,[o,C,t]),u=d.useMemo(()=>{const l=32*p.length,j=18*p.length-1,S=48,h=26,y=p.length<=2?24:0,f=p.length===0?50:0,M=l+j+S+h+y+f;return Math.min(M,_?300:750)},[p.length]);if(d.useEffect(()=>{n||g("")},[n]),!w)return null;const P=l=>{x(`/play/leaderboard/${l.replaceAll(" ","_")}`,{replace:!0}),a(!1)};return e.jsxs(yt,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[e.jsxs(_t,{children:[e.jsx(je,{})," Space"]}),e.jsxs(Ct,{ref:b,children:[e.jsxs(St,{onClick:()=>a(!0),children:[e.jsx(Z,{src:w.imageThumb}),e.jsx(Q,{children:w.name}),n?e.jsx(Ne,{style:{marginLeft:"auto",color:"white"}}):e.jsx(Ae,{style:{marginLeft:"auto",color:"white"}})]}),e.jsxs(zt,{animate:n?{height:u}:{height:0},$opened:n,children:[e.jsxs("div",{style:{position:"relative",width:"100%"},children:[e.jsx($t,{value:o,onChange:l=>g(l.target.value),placeholder:"Search"}),!!o&&e.jsx(Bt,{onClick:()=>g("")})]}),!p.length&&e.jsx("p",{children:"Nothing found"}),e.jsx(Lt,{children:p.map((l,j)=>e.jsxs(Pt,{onClick:()=>P(l.name),children:[e.jsx(Z,{src:l.imageThumb}),e.jsx(Q,{children:l.name})]},l.name+j))})]})]})]})},Ft=({title:t,titleId:r,...n},a)=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":r,...n},t?d.createElement("title",{id:r},t):null,d.createElement("path",{d:"M8 8C8 4.5 9.9078 3 14.4539 3C19 3 21 4.5 21 12C21 19.5 19 21 14.4539 21C9.9078 21 8 19.5 8 16",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M15 12L12 9M15 12L12 15M15 12L3 12",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"})),le=d.forwardRef(Ft),Et=i.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: white;
  font-size: 18px;
  line-height: 20px;
`,It=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({$accentColor:t})=>t?t+"29":"#ffffff29"};
  & > svg {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
`,Nt=()=>{const t=K(),{leaderboards:r}=N({}),n=ie(),a=()=>{n()};return t?null:e.jsx(de,{style:{cursor:"pointer"},onClick:a,children:e.jsx(L.div,{animate:{y:0,opacity:1},initial:{y:10,opacity:.2},transition:{duration:.35,delay:.8},style:{width:"100%"},children:e.jsx(se,{children:e.jsx(E,{myRow:!0,style:{background:"linear-gradient(284deg, rgba(255, 255, 255, 0.1) -0.22%, rgba(255, 255, 255, 0.10) 158.74%), rgba(255, 255, 255, 0.06)",backgroundBlendMode:"normal, overlay, normal"},children:e.jsx(m,{$widthPercent:100,children:e.jsxs(Et,{children:[e.jsx(It,{$accentColor:r?.accentColor,children:e.jsx(le,{})}),"Login to see your rank"]})})})})})})},At=i.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;
  @media screen and (max-width: 992px) {
    margin: 0px 0px 16px;
  }
`,Rt=i.div`
  font-size: 16px;
  color: ${({$accentColor:t})=>t??"white"};
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Y=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
  & > svg {
    width: 24px;
    height: 24px;
  }
`,Tt=()=>{const t=ee(),r=A(),n=K(),{leaderboards:a}=N({}),o=t.email,g=Re(),x=ie(),b=d.useMemo(()=>n&&o?e.jsxs(e.Fragment,{children:[e.jsx(Rt,{$accentColor:a?.accentColor,children:o}),e.jsxs(Y,{onClick:g,children:[e.jsx(Te,{}),"Logout"]})]}):e.jsxs(Y,{onClick:()=>x(),children:[e.jsx(le,{}),"Login"]}),[o,n]);return r?e.jsx(At,{children:b}):null},Ut=()=>{const{setBodyWithControls:t}=Ce(),r=I(),{isMobile:n}=B(),a=A(),{_id:o}=ee(),{spaceName:g=""}=J(),x=g?.replaceAll("_"," "),[b,_]=d.useState(["EXP"]),[w,C]=d.useState(!0),[p,u]=d.useReducer((c,v)=>({...c,...v}),{...st}),{data:P=[]}=Se(),{leaderboards:l}=N({}),{isFetching:j,refetch:S}=ze(x),{users:h,isFetching:y}=We({isFriends:p.users==="friends",isMonthly:p.period==="monthly",spaceName:x,filter:p.filter}),{accentColor:f,bgImage:M,isBannerShow:ce,bannerTitle:pe,bannerTitleMonthly:xe}=d.useMemo(()=>({accentColor:l?.accentColor?l.accentColor:"#F14F63",bgImage:$e(l?.images?.bgImage)??(l?.bgColor?void 0:`url(${F.background})`),isBannerShow:l?!!l.isBannerShow:!0,bannerTitle:l?.customBannerLabel??"Overall winners",bannerTitleMonthly:l?.customBannerMonthlyLabel??""}),[l]),he=()=>{r(`/${x.replaceAll(" ","_")}`)};d.useEffect(()=>(t(!1),()=>{t(!0)}),[]),d.useEffect(()=>{S().then(({data:c})=>{c?.defaultLeaderboard?(_([c?.defaultLeaderboard,"EXP"]),u({filter:c?.defaultLeaderboard})):(_(["EXP"]),u({filter:"EXP"}))})},[x,S]);function R({index:c,key:v,style:ge,myRow:z}={}){const k=h?h[c]:null,me=c<3?c:c<10?3:4,$=at[me],ue={duration:.35},fe={0:re,1:ae,2:oe};return e.jsx(L.div,{animate:{y:0,opacity:1},initial:{y:10,opacity:.2},transition:{...ue,delay:z?.8:c*.15},style:{width:"100%"},children:e.jsx(se,{style:ge,children:k?e.jsxs(E,{myRow:z,style:$?{background:$,backgroundBlendMode:"normal, overlay, normal"}:{},children:[e.jsx(m,{$widthPercent:n?20:33.333,children:e.jsxs(ft,{children:[c<10&&e.jsx("img",{src:c<3?fe[c.toString()]:He,alt:"You"}),e.jsx("span",{className:ot[c],children:c+1}),z&&e.jsx("span",{className:"my-row-label",children:"You"})]})}),e.jsxs(wt,{$widthPercent:n?50:33.333,children:[e.jsx(ne,{userName:k.nickname,src:k.avatar,size:n?27:46}),e.jsx("span",{className:"user-cell__nickname",children:k.nickname}),k?.isPremium&&e.jsx("img",{src:W,alt:W})]}),e.jsxs(bt,{$widthPercent:n?30:33.333,children:[e.jsx("img",{src:V,alt:"exp"}),e.jsx("span",{children:k.balance})]})]}):e.jsx(E,{myRow:z,style:$?{background:$,backgroundBlendMode:"normal, overlay, normal"}:{},children:e.jsx(m,{$widthPercent:100,children:"Loading..."})})})},v)}const T=h.findIndex(c=>c.extId===o);return j?e.jsx(te,{}):e.jsxs(vt,{$accentColor:f,$bgImage:M,$bgColor:l?.bgColor,children:[y&&e.jsx(lt,{$accentColor:f}),e.jsxs(pt,{children:[e.jsx(Ge,{className:"leaderboard-page__back-button",onClick:he,text:n?"":"Back"}),e.jsxs(xt,{children:[e.jsx("h3",{children:"Leaderboards"}),!n&&e.jsx(O,{state:p,updateState:u,accentColor:f}),!a&&e.jsx(Mt,{spaces:P}),!!a&&e.jsx(Tt,{})]}),!n&&e.jsx(U,{accentColor:f,state:p,updateState:u,filters:b}),n&&e.jsxs("div",{style:{display:"flex"},children:[e.jsx(U,{state:p,accentColor:f,updateState:u,filters:b}),e.jsx(O,{accentColor:f,state:p,updateState:u})]}),!n&&h.length>=3&&ce&&e.jsx(Oe,{className:"leaderboard-page__monthly-banner",classNameCloseButton:"leaderboard-page__monthly-close",slides:[{component:D,name:"MonthlyWinners",props:{rows:h||[],title:p.period==="monthly"?xe:pe}}],isBannerOnly:!0})]}),y&&!h?e.jsx(e.Fragment,{children:"Loading"}):e.jsxs(e.Fragment,{children:[n&&h.length>2&&e.jsx(D,{rows:h||[],show:w,onClose:()=>C(!1)}),e.jsxs(ct,{children:[e.jsx(mt,{}),e.jsxs(ht,{$showWinners:w,children:[e.jsxs(ut,{style:{marginBottom:"0px"},children:[e.jsx(m,{$widthPercent:n?20:33.333,children:"Rank"}),e.jsx(m,{$widthPercent:n?50:33.333,children:"Name"}),e.jsx(m,{$widthPercent:n?30:33.333,children:"EXP Value"})]}),p.users==="friends"&&h.length<1&&!y&&e.jsx(qe,{}),!!h.length&&e.jsxs(e.Fragment,{children:[e.jsx(gt,{children:h.map((c,v)=>R({index:v,key:v+c.nickname}))}),T>=0?e.jsx(de,{children:R({index:T,key:"my-key",myRow:!0})}):e.jsx(Nt,{})]})]})]})]})]})},Ht=()=>{const{data:t,isError:r}=ye(),n=A(),a=I();return d.useEffect(()=>{if(n){a(`/play/leaderboard/${n}`,{replace:!0});return}t?a(`/play/leaderboard/${t.replaceAll(" ","_")}`,{replace:!0}):r&&a(_e.SPACES)},[t,r,n]),e.jsx(te,{})};export{Ht as LeaderboardPlayPlaceholder,Ut as default};
