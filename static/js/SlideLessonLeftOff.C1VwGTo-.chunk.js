import{a1 as k,B as e,E as p,ag as L,gC as q,ds as K,dv as Q,r as s,bM as v,by as o,bJ as oe,q as le,bz as O}from"./index.BDWbwHp_.js";import{O as V,bS as Y,bT as J,bU as P,bV as X,ar as z,r as I,bW as ie,I as ce,bd as A,aa as de,t as he,bX as ue,bY as fe}from"./index.CMGJEYRC.chunk.js";import{S as ge}from"./index.DkPCQd0h.chunk.js";import{M as pe,F as ee}from"./daily-rewards.CD4N1uff.chunk.js";import{R as xe}from"./index.BWoEZuKS.chunk.js";const me=({_id:t,completion:n,name:r,imageCover:a,className:h="",onClick:l})=>{const f=k(),b=r?.length<25?r:r?.slice(0,23)+"...",x=z+a,y=V(x,{opacity:"0.1"});function j(){f(`${L.COURSES}/${t}`)}const _=()=>{l?l():j()};return e.jsxs(Y,{className:p("profile-course bright--hover",{[h]:!!h}),onClick:_,style:{backgroundColor:y},children:[e.jsx(J,{children:e.jsx("img",{src:x,alt:r})}),e.jsxs(P,{children:[e.jsx(X,{children:b}),e.jsx(ge,{labelType:"big",completion:n})]})]})},be="_container_17814_1",_e="_bannerOnly_17814_12",we="_panelOnly_17814_16",ve="_loader_17814_20",ye="_cover_17814_33",je="_body_17814_47",Ce="_info_17814_55",Le="_header_17814_69",Ne="_text_17814_75",$e="_subtext_17814_79",Ee="_button_17814_84",c={container:be,bannerOnly:_e,panelOnly:we,loader:ve,cover:ye,body:je,info:Ce,header:Le,text:Ne,subtext:$e,button:Ee},Ie="_container_26t6p_1",ke="_bannerOnly_26t6p_16",Oe="_panelOnly_26t6p_20",Se="_header_26t6p_24",Be="_coursecard_26t6p_33",Fe="_text_26t6p_37",ze="_rewardsWrap_26t6p_44",Re="_rewards_26t6p_44",Te="_buttons_26t6p_62",Ge="_button_26t6p_62",u={container:Ie,bannerOnly:ke,panelOnly:Oe,header:Se,coursecard:Be,text:Fe,rewardsWrap:ze,rewards:Re,buttons:Te,button:Ge},D={isLoading:!0,isActive:!1,leftOff:null,isSeeLessons:!1};function _t({className:t="",isBannerOnly:n=!1,isPanelOnly:r=!1,onMPBannerClose:a,isActive:h,givenCourseId:l}){const[f]=q(),[b]=K(),{courseId:x}=Q(),y=k(),[j,_]=s.useReducer((w,m)=>({...w,...m}),D),N=V(z+(j.leftOff?.courseImageCover??""));s.useEffect(()=>((async()=>{const w=l??x;let m;w?m=await f(w).unwrap().then(H=>structuredClone(H)).catch(a):m=await b().unwrap().then(H=>structuredClone(H)).catch(a),m?.lessonId?_({leftOff:m,isLoading:!1}):a()})(),()=>_(D)),[x,f,b,l,a]);const{leftOff:C,isLoading:$}=j;if(s.useEffect(()=>{!$&&!C?.courseId&&h&&a()},[$,C?.courseId,h,a]),$)return e.jsx(pe,{className:p(c.loader,{[c.bannerOnly]:n})});if(!C)return null;const{chapterId:R,index:E,lessonId:S,lessonName:T,courseId:G,courseImageCover:g,courseName:i,rewards:B,completion:ne}=C,re=z.concat(g);function U(){y(`${L.COURSES}/${G}/${R}/${S}`)}const ae=i?.length<30?i:i?.slice(0,30)+"...";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:p(c.container,{[c.bannerOnly]:n&&!r,[c.panelOnly]:!n&&r}),children:[e.jsx("div",{className:c.cover,children:e.jsx("img",{src:re,alt:i})}),e.jsxs("div",{className:c.body,children:[e.jsxs("div",{className:c.info,children:[e.jsx("p",{className:c.header,children:"Continue where you left off"}),e.jsx("p",{className:c.text,children:e.jsx("span",{style:{color:N},children:ae})}),e.jsx("p",{className:c.subtext,children:"Hint: spend your energy everyday to receive more rewards"})]}),e.jsx(I,{style:{background:N?.replace(/,1\)/,",0.1)")},isLabelFirst:!0,onClick:U,className:c.button,label:"Continue",icon:e.jsx(ie,{}),variant:"cool"})]})]}),e.jsxs("div",{className:p(u.container,{[u.bannerOnly]:n&&!r,[u.panelOnly]:!n&&r}),children:[e.jsx("h4",{className:u.header,children:"Continue where you left off:"}),e.jsx(me,{className:u.coursecard,_id:S,completion:ne,name:i,imageCover:g}),e.jsxs("p",{className:u.text,children:[e.jsx("span",{style:{color:N},children:i})," | Lesson ",E+1,": ",T]}),e.jsxs("div",{className:u.rewardsWrap,children:[e.jsx("p",{children:"Rewards:"}),e.jsx("div",{className:p(u.rewards,"tiny-sb"),children:B.map((w,m)=>e.jsx(ce,{isShowTooltip:!1,itemId:w.id,amount:w.quantity,isSmall:!0},"left-off-reward"+m))})]}),e.jsx("div",{className:u.buttons,children:e.jsx(I,{className:u.button,isLabelFirst:!0,onClick:U,label:"Continue",variant:"cool"})})]})]})}const M=o.p`
  font-size: 30px;
  line-height: 34.2px;
  text-align: center;
  color: ${t=>t.$theme===v.LIGHT?"#111":"white"};
`,Z=o.span`
  background: linear-gradient(90deg, #6487ef 0%, #53259b 125.56%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`,te=o.p`
  text-align: center;
  color: ${t=>t.$theme===v.LIGHT?"#111":t.$isHorizontal?"whtie":"#AFB4B8"};
  font-size: 16px;
  line-height: 21.12px;
`,W=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,He=o.div`
  width: 100px;
  height: 150px;
  border-radius: 10px;
  background: ${t=>t.$theme===v.LIGHT?"#d8e0f9":"linear-gradient(76.31deg, rgba(50, 53, 71, 0.472) 5.23%, rgba(40, 42, 57, 0.8) 107.31%)"};
  box-shadow:
    103px 187px 86px rgba(28, 29, 38, 0.01),
    58px 105px 72px rgba(28, 29, 38, 0.05),
    26px 47px 53px rgba(28, 29, 38, 0.09),
    6px 12px 29px rgba(28, 29, 38, 0.1),
    0px 0px 0px rgba(28, 29, 38, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  width: 350px;
  height: 530px;
  position: relative;
  padding: 78px 32px 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .chest {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  & > ${W} {
    max-width: 270px;
    margin-bottom: 19px;
    & > ${M} {
      margin-bottom: 16px;
    }
  }
  & > .refs {
    margin-bottom: auto;
  }
  & > .refs-banner-button {
    height: 58px;
  }
`,Me=o.div`
  backdrop-filter: blur(20px);
  width: 100%;
  height: 150px;
  padding: 32px 32px 32px 258px;
  display: flex;
  align-items: flex-end;
  background: ${t=>t.$theme===v.LIGHT?"#d8e0f9":"linear-gradient(76.31deg, rgba(50, 53, 71, 0.472) 5.23%, rgba(40, 42, 57, 0.8) 107.31%)"};
  justify-content: space-between;
  border-radius: 10px;
  & > .chest {
    position: absolute;
    left: 20px;
    top: 38%;
    transform: translateY(-50%);
  }
  & > ${W} {
    height: 100%;
    justify-content: space-between;
    align-items: flex-start;
    & > ${M} {
      text-align: left;
      font-size: 28px;
      line-height: 100%;
    }
    & > ${te} {
      text-align: left;
      max-width: 410px;
    }
    & br {
      display: none;
    }
  }
`,se=o.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: auto;
  line-height: 22.32px;
`,We=o.p`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${t=>t.$theme===v.LIGHT?"#111":"white"};
  & > .logo {
    width: 17px;
    height: 17px;
  }
`,Ue=o.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > .chest {
    margin: -24px 0px 0px -14px;
    min-width: 150px;
  }
  & ${se} {
    color: ${t=>t.$theme===v.LIGHT?"#111":"white"};
  }
`,Ae=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,wt=({isForcingHorizontal:t})=>{const n=oe(),{isMobile:r,viewportWidth:a}=le(),h=k(),l=s.useMemo(()=>t||a<=1539,[a,t]),f=l?Me:He;return r?e.jsx(ee,{background:n===v.LIGHT?"#d8e0f9":"#FFFFFF0F",padding:"21px 23px",headSlot:e.jsxs(We,{$theme:n,children:[e.jsx(de,{containerClassName:"logo"})," Referral program"]}),children:e.jsxs(Ue,{$theme:n,children:[e.jsx(A,{size:150,smallerGlow:!0,containerClassName:"chest"}),e.jsxs(Ae,{children:[e.jsxs(se,{children:["Invite your friends ",e.jsx("br",{})," and get rewards"]}),e.jsx(I,{onClick:()=>h(L.REFERRALS),label:"Learn more",variant:"cool",style:{maxWidth:161,marginRight:"auto",height:54}})]})]})}):e.jsxs(f,{$theme:n,children:[e.jsx(A,{size:l?210:200,containerClassName:"chest",smallerGlow:!0}),e.jsxs(W,{children:[e.jsxs(M,{$theme:n,children:[e.jsx(Z,{children:"Learn"})," Together, ",e.jsx("br",{}),e.jsx(Z,{children:"Earn"})," Together!"]}),e.jsx(te,{$isHorizontal:l,$theme:n,children:"Invite friends to join the learning adventure and earn exclusive rewards for each referral."})]}),!l&&e.jsx(xe,{containerClassName:"refs",hideArrows:!0,hideUser:!0}),e.jsx(I,{label:"Learn More",variant:"cool",size:"lg",fullWidth:!1,onClick:()=>h(L.REFERRALS),className:"refs-banner-button",style:{height:l?38:49,fontSize:l?14:18}})]})},De="_slideWrap_w0y1j_1",Ze="_left_w0y1j_6",qe="_leftContent_w0y1j_22",Ke="_head_w0y1j_37",F={slideWrap:De,left:Ze,leftContent:qe,head:Ke},Qe="/static/media/lightning-premium.DEqnLtmf.png";o.div(({$margin:t,$direction:n,$justifyContent:r})=>O`
      display: flex;
      flex-direction: ${n};
      align-items: center;
      justify-content: ${r};
      margin: ${t};
    `);o.div(({$maxWidth:t})=>O`
      position: relative;
      max-width: ${t}px;
    `);o.img(()=>O`
      width: 100%;
      position: relative;
      z-index: 2;
    `);o.h2(({$margin:t,$fontSize:n})=>O`
      font-size: ${n||"48px"};
      font-weight: 500;
      line-height: 115%;
      letter-spacing: 0.5px;
      background: var(--gold-bg);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: ${t};
      position: relative;
      z-index: 2;

      @media screen and (max-width: 992px) {
        font-size: ${n||"34px"};
      }
    `);o.div(({$options:t={top:"-61%",left:"-30%",width:"370px",height:"370px"}})=>O`
      background-image: url(${Qe});
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      width: ${t.width};
      height: ${t.height};
      top: ${t.top};
      left: ${t.left};
      mix-blend-mode: screen;
      pointer-events: none;
      filter: contrast(0.8);

      &.light {
        background-image: none;
        background-size: none;
        background-repeat: none;
      }
    `);const Ve=({title:t,titleId:n,...r},a)=>s.createElement("svg",{width:350,height:446,viewBox:"0 0 350 446",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":n,...r},t?s.createElement("title",{id:n},t):null,s.createElement("g",{filter:"url(#filter0_f_14855_12672)"},s.createElement("path",{d:"M75.5821 265.441C246.082 382.941 625.082 -144.559 820.094 275.233C834.196 276.644 844.945 324.353 775.123 503.905C687.845 728.345 618.698 616.817 62.2264 567.792C-494.245 518.768 -257.61 35.8222 75.5821 265.441Z",fill:"#EDC386",fillOpacity:.2})),s.createElement("defs",null,s.createElement("filter",{id:"filter0_f_14855_12672",x:-381.082,y:.15625,width:1321.57,height:748.988,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),s.createElement("feGaussianBlur",{stdDeviation:55,result:"effect1_foregroundBlur_14855_12672"}))));s.forwardRef(Ve);const Ye=({title:t,titleId:n,...r},a)=>s.createElement("svg",{width:948,height:919,viewBox:"0 0 948 919",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":n,...r},t?s.createElement("title",{id:n},t):null,s.createElement("g",{filter:"url(#filter0_f_2816_27764)"},s.createElement("path",{d:"M833.617 475.619C914.626 957.496 605.907 828.693 441.421 704.056C423.109 735.824 338.048 729.242 144.298 448.778C-97.8892 98.1975 732.357 -126.727 833.617 475.619Z",fill:"#2B4073"})),s.createElement("defs",null,s.createElement("filter",{id:"filter0_f_2816_27764",x:.105682,y:.965057,width:946.937,height:918.015,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),s.createElement("feGaussianBlur",{stdDeviation:50.0604,result:"effect1_foregroundBlur_2816_27764"}))));s.forwardRef(Ye);const Je=({title:t,titleId:n,...r},a)=>s.createElement("svg",{width:934,height:556,viewBox:"0 0 934 556",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":n,...r},t?s.createElement("title",{id:n},t):null,s.createElement("g",{filter:"url(#filter0_f_2816_27765)"},s.createElement("path",{d:"M449.312 178.17C659.86 406.659 1208.23 445.947 426.901 421.279C432.66 441.805 395.344 474.481 200.014 440.985C-44.1471 399.115 208.677 -82.9699 449.312 178.17Z",fill:"#435190",fillOpacity:.8})),s.createElement("defs",null,s.createElement("filter",{id:"filter0_f_2816_27765",x:.44162,y:.898651,width:932.914,height:554.615,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),s.createElement("feGaussianBlur",{stdDeviation:50.0604,result:"effect1_foregroundBlur_2816_27765"}))));s.forwardRef(Je);const Pe="/static/media/courses-bg--mobile.B16LHZkD.png",Xe=({title:t,titleId:n,...r},a)=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:11,height:12,viewBox:"0 0 11 12",fill:"none",ref:a,"aria-labelledby":n,...r},t?s.createElement("title",{id:n},t):null,s.createElement("path",{d:"M10 6L6.625 10.5M10 6L6.625 1.5M10 6L1 6",stroke:"currentColor",strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"})),et=s.forwardRef(Xe);function tt({isLoading:t}){const n=k();function r(){n(L.MAIN)}return e.jsx(Y,{className:p("profile-course bright--hover"),width:"344px",onClick:r,style:{backgroundColor:"rgba(98, 126, 234, 0.10)"},$isLoading:t,children:t?e.jsx(he,{}):e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx("img",{src:Pe,alt:"placeholder"})}),e.jsxs(P,{className:"placeholder",children:[e.jsx(X,{className:"placeholder",$fontSize:"22px",$lineHeight:"114%",children:"No Courses Started"}),e.jsxs(ue,{children:["Choose from Library ",e.jsx(et,{})]})]})]})})}const st="_wrap_9zve5_1",nt="_left_9zve5_4",rt="_courseLogo_9zve5_10",at="_rewards_9zve5_16",ot="_right_9zve5_28",lt="_header_9zve5_38",it="_title_9zve5_51",ct="_fullTitle_9zve5_71",dt="_courseName_9zve5_75",ht="_lesson_9zve5_83",ut="_lessonName_9zve5_90",ft="_button_9zve5_97",d={wrap:st,left:nt,courseLogo:rt,rewards:at,right:ot,header:lt,title:it,fullTitle:ct,courseName:dt,lesson:ht,lessonName:ut,button:ft},vt=()=>{const t=fe(),{courseId:n}=Q(),[r,{isFetching:a}]=K(),[h,{isFetching:l}]=q(),[f,b]=s.useState(),x=k(),y=a||l;if(s.useEffect(()=>{(async()=>{let g;n?g=await h(n).unwrap().then(i=>structuredClone(i)).catch(console.log):g=await r().unwrap().then(i=>structuredClone(i)).catch(console.log),g?.lessonId&&b(g)})()},[n,r,h]),!f||y)return e.jsx(tt,{isLoading:y});const{chapterId:j,index:_,lessonId:N,lessonName:C,courseId:$,courseImageCover:R,courseName:E,rewards:S}=f,T=()=>{x(`${L.COURSES}/${$}/${j}/${N}`)},G=z.concat(R);return e.jsx(ee,{headSlot:e.jsx("div",{className:F.head,children:e.jsx("p",{children:"Continue studying"})}),padding:"21px 23px",background:"linear-gradient(0deg, rgba(32, 32, 107, 0.30) 0%, rgba(32, 32, 107, 0.30) 100%), rgba(255, 255, 255, 0.03)",children:e.jsxs("div",{className:p(F.slideWrap,d.wrap),children:[e.jsxs("div",{className:p(F.left,d.left),children:[e.jsx("img",{className:d.courseLogo,src:G,alt:E}),e.jsx("div",{className:p(F.leftContent,d.rewards),children:S.map((g,i)=>{const B=t("id",g.id);return e.jsx("img",{src:B.image,alt:B.name,style:{zIndex:i}},"left-off-reward"+i)})})]}),e.jsxs("div",{className:d.right,children:[e.jsxs("div",{className:d.header,children:[e.jsxs("h2",{className:d.title,children:[E,": Lesson ",_+1]}),e.jsx("p",{children:"Continue where you left off:"}),e.jsxs("div",{className:d.fullTitle,children:[e.jsx("span",{className:d.courseName,children:E}),e.jsxs("span",{className:d.lesson,children:["Lesson ",_+1,": ",e.jsx("span",{className:d.lessonName,children:C})]})]})]}),e.jsx(I,{label:"Continue",variant:"cool",fullWidth:!0,onClick:T,className:d.button})]})]})})};export{_t as L,me as P,wt as R,vt as S,tt as a,Pe as m};
