import{r as n,by as o,J as z,j as P,y as I,bM as x,a1 as k,B as t,q as w,bJ as y,ae as W,fL as _,fK as K,x as O,cT as U,cU as G,ag as H,dj as N}from"./index.BDWbwHp_.js";import{O as V,J,bf as Y,bg as M,D as j,t as b,ab as Q,bh as C,P as L,aa as X,bi as q,bj as S}from"./index.CMGJEYRC.chunk.js";import{S as Z}from"./index.DcXSrrbJ.chunk.js";import"./relativeTime.DEMDksMo.chunk.js";const ee=({title:e,titleId:s,...r},i)=>n.createElement("svg",{width:39,height:30,viewBox:"0 0 39 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:i,"aria-labelledby":s,...r},e?n.createElement("title",{id:s},e):null,n.createElement("path",{d:"M2.91406 9.19661H6.9974M6.9974 9.19661L6.99739 13.2799M6.9974 9.19661L6.9974 5.11328M6.9974 9.19661L11.0807 9.19661",stroke:"white",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M23.6562 25C29.1791 25 33.6562 20.5228 33.6562 15C33.6562 9.47715 29.1791 5 23.6562 5C18.1334 5 13.6562 9.47715 13.6562 15C13.6562 20.5228 18.1334 25 23.6562 25Z",stroke:"white",strokeWidth:1.8,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M29.9066 7.00057C32.419 6.5882 34.2988 6.9146 34.9723 8.08114C36.353 10.4726 32.141 15.4893 25.5645 19.2863C18.9879 23.0832 12.5373 24.2226 11.1566 21.8311C10.3687 20.4665 11.402 18.2469 13.6566 15.887",stroke:"white",strokeWidth:1.8,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),te=n.forwardRef(ee),ie=o.div`
  width: 335px;
  min-width: 335px;
  max-width: 335px;
  height: 175px;
  position: relative;
`,ne=o.div`
  display: flex;
  flex-direction: column;
  padding: 21px 25px;
  border-radius: 5px;
  background: ${e=>e.color||"#FFFFFF0a"};
  border: 1px solid #ffffff0a;
  height: 100%;
  margin-left: auto;
  width: 196px;
  backdrop-filter: blur(40px);

  @media screen and (max-width: 992px) {
    padding: 21px 10px;
  }
`,se=o.span`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 13px;
  color: white;
  font-size: 22px;
  line-height: 100%;
  & > span {
    color: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
  }
`,re=o.img`
  /* width: 116px; */
  /* height: 116px; */
  width: 140px;
  height: 140px;
  object-fit: cover;
  position: absolute;
  top: 50%;
  /* left: 39px; */
  left: 25px;
  transform: translateY(-50%);
  z-index: -1;
  border-radius: 50%;
`,oe=o.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-bottom: auto;
`,ae=o.div`
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0px 8px;
  overflow: hidden;
  border-radius: 4px;

  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    color: white;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
  }
`,le=["left: 95px; top: -10px;","left: 37px; top: -5px;","left: -5px; top: 38px;","left: -5px; bottom: 38px;","left: 37px; bottom: -5px;","left: 95px; bottom: -10px;"];o(z.img)`
  width: 40px;
  height: 40px;
  position: absolute;
  object-fit: contain;
  pointer-events: none;
  ${e=>le[e.index]}
`;const de=({space:e})=>{const s=P(I),r=V(e.imageThumb,{opacity:s===x.DARK?"0.1":"1"}),{FollowButton:i}=J(e),a=k();return t.jsxs(ie,{onClick:()=>a("/"+e.name.replaceAll(" ","_")),children:[t.jsx(re,{src:e.imageThumb||""}),t.jsxs(ne,{color:r||"rgba(17,17,17,0.2)",children:[t.jsxs(se,{children:[t.jsx("span",{children:e.name})," ",e.isVerified&&t.jsx(Y,{style:{minWidth:"25px"}})]}),t.jsx(oe,{children:e.tags.map((d,l)=>l>1?null:t.jsx(ae,{children:t.jsx("span",{children:d})},d))}),t.jsx(i,{})]})]})},ce=({spaces:e})=>{const{isMobile:s}=w(),r=n.useMemo(()=>e.map(i=>s?t.jsx(de,{space:i},i._id+"slider"):t.jsx(M,{large:!0,space:i},i._id+"slider")),[e,s]);return s?t.jsx(j,{containerDivProps:{style:{marginBottom:"80px",marginLeft:-20,marginRight:-20}},slides:r,gap:30,variableWitdh:!0,spaced:!0,slideHeight:200,autoplay:5e3,dotsOffsetY:8,slidesToScroll:1,slidesToShow:3,centerMode:!0,infinite:!0,dots:!0}):t.jsx(t.Fragment,{children:t.jsx(j,{slides:r,arrows:"bottom",slidesToScroll:1,slidesToShow:1,variableWitdh:!0,centerMode:!1,autoplay:5e3,infinite:!0,sliderDivProps:{style:{borderRadius:10}},gap:8,slideWidth:722})})},D=({initiate:e,isFetching:s,isFinished:r})=>{const i=n.useRef(null),[a,d]=n.useState(!1),l=()=>{if(i.current&&!a&&!r){const h=window.scrollY+window.innerHeight,c=i.current.getBoundingClientRect().top;h>=c&&(e(),d(!0),setTimeout(()=>{d(!1)},2e3))}};return n.useEffect(()=>(document.addEventListener("scroll",l),()=>document.removeEventListener("scroll",l)),[]),t.jsx("div",{style:{height:"200px"},ref:i,children:s&&t.jsx(b,{})})},pe=({title:e,titleId:s,...r},i)=>n.createElement("svg",{width:33,height:33,viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:i,"aria-labelledby":s,...r},e?n.createElement("title",{id:s},e):null,n.createElement("path",{d:"M18.818 8.17383L12.168 16.1538L18.818 24.1338",stroke:"white",strokeWidth:1.97647,strokeLinecap:"round",strokeLinejoin:"round"})),xe=n.forwardRef(pe),he=({title:e,titleId:s,...r},i)=>n.createElement("svg",{width:33,height:32,viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:i,"aria-labelledby":s,...r},e?n.createElement("title",{id:s},e):null,n.createElement("path",{d:"M14.182 23.9824L20.832 16.0024L14.182 8.02242",stroke:"white",strokeWidth:1.97647,strokeLinecap:"round",strokeLinejoin:"round"})),ge=n.forwardRef(he),me=({title:e,titleId:s,...r},i)=>n.createElement("svg",{width:33,height:33,viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:i,"aria-labelledby":s,...r},e?n.createElement("title",{id:s},e):null,n.createElement("path",{d:"M18.818 8.17383L12.168 16.1538L18.818 24.1338",stroke:"#627EEA",strokeWidth:1.97647,strokeLinecap:"round",strokeLinejoin:"round"})),fe=n.forwardRef(me),ue=({title:e,titleId:s,...r},i)=>n.createElement("svg",{width:33,height:33,viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:i,"aria-labelledby":s,...r},e?n.createElement("title",{id:s},e):null,n.createElement("path",{d:"M14.182 24.1387L20.832 16.1587L14.182 8.17867",stroke:"#627EEA",strokeWidth:1.97647,strokeLinecap:"round",strokeLinejoin:"round"})),we=n.forwardRef(ue),be="/static/media/mobile-bg.BpCibJ0y.webp",ve="/static/media/mobile-bg-light.DbuWW4QF.webp",v={[x.LIGHT]:{title:"#627EEA",spaceCardLargeTitle:"#1C1D26",spaceCardSmallTitle:"#1C1D26",subtitles:"#1C1D2680",spaceCardSmallDescription:"#111111",spaceCardLargeDescription:"#FFFFFF",followers:"#1C1D26"},[x.DARK]:{title:"#FDFDFD",spaceCardLargeTitle:"#FDFDFD",spaceCardSmallTitle:"#FDFDFD",subtitles:"#FDFDFD",spaceCardSmallDescription:"#FDFDFD66",spaceCardLargeDescription:"#FDFDFD66",followers:"#FDFDFD"}},je=o.div`
  display: flex;
  flex-direction: column;
  max-width: 1015px;
  min-height: 100vh;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  position: relative;
  @media screen and (min-width: 1620px) {
    transform: translateX(calc(50vw - (1015px / 2) - 206px));
  }
  @media screen and (max-width: 992px) {
    padding: 59px 19px 19px;
    width: 100%;
    min-height: auto;
    max-width: 100vw;
    transform: none;
    padding-bottom: 100px;
    margin-top: -33px;
  }
`,Le=o.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 460px;
  background-image: url(${e=>e.$theme===x.DARK?be:ve});
  background-repeat: no-repeat;
  background-position: center 50%;
  background-size: cover;
  z-index: 0;

  @media screen and (max-width: 992px) {
    top: -30px;
  }
`,E=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${e=>e.$noMargin?"0":"48px"};
  @media screen and (max-width: 992px) {
    width: 100%;
    max-width: 100%;
  }
`,Se=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  margin-bottom: 48px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`,Fe=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    gap: 0px;
  }
`,ke=o.span`
  display: flex;
  align-items: center;
  color: ${e=>v[e.$theme].title};
  gap: 5px;
  & > div {
    margin-right: -3px;
  }
  @media screen and (max-width: 992px) {
    text-align: center;
    font-size: 26px;
  }
`,$=o.h1`
  font-size: 35px;
  line-height: 39.9px;
  font-weight: 500;
  color: ${e=>v[e.$theme].title};
  margin: 0;
  @media screen and (max-width: 992px) {
    font-size: 26px;
    margin-bottom: 14px;
    line-height: 100%;
  }
`,ye=o.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 18.88px;
  color: ${e=>v[e.$theme].subtitles};
  @media screen and (max-width: 992px) {
    text-align: center;
    max-width: 270px;
    margin-bottom: 24px;
  }
`,Me=o($)`
  font-size: 26px;
  margin-bottom: 24px;
  @media screen and (max-width: 992px) {
    margin-bottom: 20px;
  }
`,Ce=o.button`
  position: relative;
  font-size: 20px;
  color: white;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  z-index: 0;
  border: none;
  outline: none;
  border-radius: 300px;
  padding: 14px 30px;
  ${e=>e.$theme===x.DARK?` background: linear-gradient(90deg, #6487ef 0%, #53259b 125.56%);
    &::after {
      background: #212433;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      top: 2px;
      left: 2px;
      border-radius: 300px;
      position: absolute;
      content: '';
      display: block;
      z-index: -1;
    }`:"background: linear-gradient(90deg, #6487EF 0%, #53259B 125.56%), linear-gradient(281.94deg, rgba(255, 255, 255, 0.21) -0.2%, rgba(255, 255, 255, 0.03) 98.72%);  "}

  @media screen and (max-width: 992px) {
    font-size: 18px;
    & > svg {
      width: 33px;
      height: auto;
    }
  }
`,De=o.div`
  display: grid;
  grid-template-columns: ${e=>e.$moreCols?"1fr 1fr 1fr 1fr 1fr":"1fr 1fr 1fr"};
  gap: 16px;
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 8px;
  }
`;o.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: flex-end;
  gap: 6px;
`;const F={[x.DARK]:{left:xe,right:ge},[x.LIGHT]:{left:fe,right:we}};o.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-image: url(${e=>e.$next?F[e.$theme].right:F[e.$theme].left});
  background-position: center;
  background-size: 32px 32px;
  background-repeat: no-repeat;
  background-color: ${e=>e.$theme===x.DARK?"#ffffff0a":"#627EEA1A"};
  &:hover {
    filter: brightness(1.1);
    transform: scale(1.1);
  }
  ${e=>e.disabled&&"opacity: .4; pointer-events: none;"}
  transition: all .3s;

  cursor: pointer;
  ${e=>e.hidden&&"display: none;"}
`;const u=({spacesList:e,title:s,isLoading:r,moreCols:i,hideUntilLoaded:a})=>{const{isMobile:d}=w(),l=y(),h=n.useMemo(()=>({initial:{opacity:0},whileInView:{opacity:1},transition:c=>({delay:c*.02})}),[d]);return!e.length&&!r||r&&a?null:t.jsxs(E,{children:[t.jsx(Me,{$theme:l,children:s}),t.jsx(De,{$moreCols:i,children:r?t.jsx(b,{}):t.jsx(t.Fragment,{children:e.map((c,m)=>t.jsx(Q,{style:{display:"inline-grid"},initial:h.initial,whileInView:h.whileInView,forcedOnMobile:!0,transition:h.transition(m),children:t.jsx(M,{forcedMobile:i,space:c})},c._id.toString()))})})]})},Be=()=>{const e=k(),s=W(),r=y(),{isMobile:i}=w(),{spaces:a=[],isFetching:d,isLoading:l,initiate:h,isFinished:c}=C(!0,9),{isLoading:m}=_(),g=K(),p=O(),R=a.length>0&&!l&&!c,A=n.useMemo(()=>p?.roles?p?.roles.includes(L.ADMIN):!1,[p]),T=n.useMemo(()=>p?g.filter(f=>f.isAdmin):[],[g,p]),B=n.useCallback(()=>{if(!l)if(g.length>0){if(i){e("/profile?screen=Spaces");return}s(U({isMainMenu:!0,screen:G.SPACES}))}else{if(!p?.roles||!p?.roles.includes(L.ADMIN)){window.open("https://forms.gle/RwrPzvMH21anR4VR6","_blank");return}e(H.SPACE_CREATION)}},[l,g,i,s,e,p]);return t.jsxs(je,{children:[i&&t.jsx(Le,{$theme:r}),t.jsxs(E,{$noMargin:!0,children:[t.jsx(Z,{children:t.jsxs(Se,{children:[t.jsxs(Fe,{children:[t.jsxs($,{$theme:r,children:["Welcome"," ",t.jsxs(ke,{$theme:r,children:[" ","to ",t.jsx(X,{inline:!0,width:i?25:35,height:"auto"})," Mighty Spaces"]})]}),t.jsx(ye,{$theme:r,children:"Unlock Knowledge, Gain Rewards, Connect and Create!"})]}),t.jsx(Ce,{$theme:r,onClick:B,children:l?t.jsx(b,{style:{width:25,height:25}}):g.length<=0?t.jsxs(t.Fragment,{children:[t.jsx(te,{})," Create Space"]}):t.jsxs(t.Fragment,{children:[t.jsx(N,{})," My spaces"]})})]})}),l||!a.length?t.jsx(q,{}):t.jsx(ce,{spaces:a.length>10?a.slice(0,10):a})]}),l?t.jsx(S,{}):t.jsx(u,{title:"My Spaces",spacesList:T,isLoading:m,moreCols:!0}),l?t.jsx(S,{}):t.jsx(u,{title:"Following",spacesList:g,isLoading:m,moreCols:!0}),t.jsx(u,{title:"Spaces",spacesList:a?.filter(f=>f.isVerified),isLoading:l,hideUntilLoaded:!0}),A&&t.jsx(Ee,{verifiedLoaded:c}),R&&t.jsx(D,{isFinished:c,initiate:h,isFetching:d})]})},Ee=({verifiedLoaded:e})=>{const{spaces:s,isLoading:r,isFetching:i,isFinished:a,initiate:d}=C(!1,9);return e?t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Inactive",spacesList:s,isLoading:r,hideUntilLoaded:!0}),!a&&t.jsx(D,{isFetching:i,initiate:d,isFinished:a})]}):null};export{Be as default};
