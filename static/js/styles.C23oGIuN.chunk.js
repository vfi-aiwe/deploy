import{by as t,J as a,bz as e,bJ as b,r as v,B as n,E as y}from"./index.BDWbwHp_.js";import{aD as r,d7 as k}from"./index.CMGJEYRC.chunk.js";const $=t.div`
  height: fit-content;

  display: flex;
  flex-direction: column;
  position: relative;

  opacity: 0;
  scale: 0.98;
  transition: 0.3s;

  &.isVisible {
    opacity: 1;
    scale: 1;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
  }

  & .lesson-button {
    margin-top: 32px;
  }
  & h3 {
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 1;
    margin-bottom: 2.2rem;

    @media screen and (max-width: 992px) {
      font-size: 18px;
      line-height: 20.7px;
    }
  }
  & .page-num {
    position: absolute;
    top: 23px;
    right: 18px;

    opacity: 0.5;

    @media screen and (max-width: 992px) {
      display: none;
    }
  }
`,B=t.div(({$bgColor:o,$bgImage:i})=>e`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2999;
    background-color: ${o||"#1c1d26"};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: auto scroll;
    padding-bottom: 100px;
    ${i?e`
          background-image: ${i};
        `:o?e`
            background-image: none;
          `:""}
    @media screen and (max-width: 992px) {
      padding: 0px 16px 50px;
      overflow: hidden auto;
    }

    &.hide-scrollbar {
      &::-webkit-scrollbar {
        display: none;
      }
    }
  `);t.div`
  position: absolute;
  z-index: 3001;
  width: 100%;
  height: 100%;
`;const W=t.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 752px;
  padding-top: 42px;
  gap: 36px;
  & .vertical-lesson-loader {
    margin: 0 auto;
  }
`,N=t(a.div)`
  height: fit-content;

  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 428pt) {
    padding-bottom: 35px;
  }

  & .lesson-button {
    margin-top: 32px;
  }

  & h3 {
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 1;
    margin-bottom: 2.2rem;

    @media screen and (max-width: 992px) {
      font-size: 18px;
      line-height: 20.7px;
    }
  }
  & .page-num {
    position: absolute;
    top: 23px;
    right: 18px;

    opacity: 0.5;

    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  & .lesson-content-space {
    width: 100%;
    position: relative;
    color: var(--font-color-strong);
    word-break: break-word;

    .code {
      color: white;
    }
  }
`,L=t.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 30px;
  & .vertical-lesson-button {
    font-size: 20px !important;
    font-weight: 500 !important;
    width: fit-content;
    height: 66px;
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 20px;
    & .vertical-lesson-button {
      height: 52px !important;
      width: 100% !important;
    }
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,S=t(a.div).attrs({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}})``,p=t.div`
  overflow: hidden;
  opacity: 0;
  padding: 0;
  width: 0;
  transition: 0.3s ease-in-out;
  box-sizing: content-box;
  white-space: nowrap;
`,d=t.div`
  width: fit-content;
  color: var(--font-color-strong);
  font-size: 16px;
  /* padding-right: 12px; */
`,z=t(r).attrs({align:"center",justify:"center",className:"blur-50"})(({$contentWidth:o,$gap:i})=>e`
    height: 44px;
    width: fit-content !important;
    min-width: 44px;
    border-radius: 44px;
    background: #ffffff0a;
    color: var(--font-color);
    transition: 0.3s ease-in-out;
    padding: 0px 10px;
    cursor: pointer;

    --custom-gap: ${i||"8px"};

    &.square {
      border-radius: 10px;
    }

    &.light {
      background: #1111110a;
      color: #11111166 !important;
      & ${d} {
        color: #11111166;
      }
    }
    & > svg {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }
    &:hover {
      color: var(--font-color-strong);
      & ${p} {
        opacity: 1;
        width: ${o}px;
        padding: 0px var(--custom-gap) 0px 6px;
      }
    }
  `),E=({children:o,className:i,icon:c,onClick:x,style:l,gap:h,square:g})=>{const m=b(),[f,u]=v.useState(0),w=s=>{s&&u(s.getBoundingClientRect().width)};return n.jsxs(z,{$gap:h,style:l,$contentWidth:f,className:y(i,m,{square:g}),onClick:x,children:[n.jsx(p,{children:n.jsx(d,{ref:w,children:o})}),c]})},P=t(r).attrs({align:"center",justify:"space-between"})``,R=t(r).attrs({align:"center"})`
  gap: 16px;
  @media screen and (max-width: 992px) {
    gap: 8px;
  }
`,J=t.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  object-fit: cover;
`,q=t(k)`
  width: 24px;
  height: 24px;
  stroke-width: 0.5px;
  cursor: pointer;
  color: var(--font-color);
  transition: 0.3s;
  &:hover {
    color: var(--font-color-strong);
  }
`,D=t.p.attrs({className:"text-overflow"})`
  font-size: 18px;
  font-weight: 500;
  color: var(--font-color-strong);
  max-width: 100%;
`,G=t(a.div).attrs({initial:{y:-100},animate:{y:0},exit:{y:-100},className:"blur-10"})`
  z-index: 100;
  position: fixed;
  top: 22px;
  left: 16px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff26;
  cursor: pointer;
  & > svg {
    width: 37px;
    height: 37px;
    color: var(--font-color-strong);
  }
`;export{S as B,$ as C,J as I,L,D as N,B as P,E as S,W,P as a,R as b,q as c,G as d,N as e};
