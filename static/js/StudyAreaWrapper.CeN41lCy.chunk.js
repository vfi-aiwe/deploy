import{aC as s3,r as s,bJ as J,a1 as ce,ae as De,B as t,ad as n3,bF as P3,aP as Ue,cI as Z3,E as I,dv as ue,p as ee,bp as fe,fQ as D3,aU as U3,ag as F,x as xe,fR as z3,fS as G3,fT as W3,fU as q3,d6 as o3,fV as r3,fW as Ke,bo as je,by as C,fX as Me,bT as Ie,fY as Q3,bD as re,bL as ae,J as K,ao as K3,fZ as He,as as i3,f_ as Y,f$ as a3,cj as ye,j as Ae,d2 as c3,aE as Te,g0 as l3,y as d3,q as pe,cn as C3,bM as Q,a0 as X3,di as Y3,cQ as J3,cR as e7,cS as t7,dj as s7,a8 as n7,bz as ze,g1 as o7,g2 as r7,bV as i7,g3 as a7,bv as c7,bS as l7,bB as d7}from"./index.BDWbwHp_.js";import{ae as u3,af as he,ag as $e,ah as Ne,ai as Ve,aj as Oe,ak as Re,Q as Se,al as C7,am as u7,t as p3,an as p7,ao as h7,ap as m7,aq as h3,ar as f7,as as ke,at as se,au as m3,a5 as Ge,av as x7,g as f3,aw as We,h as g7,ax as w7,ay as b7,az as qe,aA as v7,r as me,aB as x3,aC as ie,aD as le,aE as y7,aF as g3,P as w3,aG as j7,o as k7,ad as b3,aH as S7,aI as E7,M as L7,aJ as M7,aK as R7,aL as v3,aM as Fe,aN as _7,aO as I7,aP as A7,aQ as T7,aR as ne,aS as oe,aT as we,aU as $7,aV as N7,aW as V7,aX as O7,aY as B7,aZ as H7,a_ as F7,a$ as P7,b0 as Z7,b1 as D7,b2 as U7,b3 as z7,b4 as G7,b5 as y3,b6 as j3,b7 as k3,b8 as S3,b9 as E3,ba as W7,bb as q7,bc as Q7}from"./index.CMGJEYRC.chunk.js";import{s as Ce}from"./timeout.a7nJCnw9.chunk.js";import{R as K7,T as X7,L as Y7,M as J7}from"./TestFrame.Co2ECLEU.chunk.js";import{u as e2,D as t2}from"./index.DjyqjnHG.chunk.js";import{C as s2,L as n2,B as Be,S as de,a as o2,b as r2,c as i2,I as a2,N as c2,d as l2,W as d2}from"./styles.C23oGIuN.chunk.js";import{r as ve,E as C2}from"./rewardUserLocal.B1ZAeSu3.chunk.js";import{d as u2}from"./index.2PPIBWbF.chunk.js";import{R as L3}from"./RangeSlider.D-zdvBYA.chunk.js";import{F as p2}from"./sunCircle.CnZtQDBR.chunk.js";import{F as h2}from"./FullscreenCongratulations.z8PIOMVo.chunk.js";import"./relativeTime.DEMDksMo.chunk.js";import"./logo.C114fS_H.chunk.js";import"./useGetShopItems.CzsFvbUc.chunk.js";import"./useGetChestRewards.Cb2-pkZP.chunk.js";import"./v4.CtRu48qb.chunk.js";const M3=({rewards:e})=>{const n=s3();return s.useMemo(()=>Object.entries(e.reduce((i,a)=>(i[a.id]?i[a.id]+=a.quantity:i[a.id]=a.quantity,i),{})).map(i=>{let a=n.find(c=>c.id===+i[0]);return a?{quantity:i[1],...a}:null}).filter(i=>!!i),[e,n])},m2=({close:e,results:n,queryLength:r,isFetching:o})=>{const i=u3(e),a=J(),c=s3(),d=ce(),l=De(),u=h=>c.find(p=>p.id===h),b=(h,p)=>()=>{switch(h){case"course":d(`/courses/${p}`);break;case"space":d(`/${p}`);break;case"item":l(P3({type:"goods",itemId:+p}));break}e()},m=s.useMemo(()=>n?.items?.map(({id:h})=>{const p=u(h);return p?t.jsxs(he,{style:{cursor:"pointer"},onClick:b("item",h),children:[t.jsx($e,{src:p.imageThumb,alt:p.name}),t.jsx(Ne,{children:p.name})]},"search-item"+h):null}).filter(h=>!!h),[n]);return r<3&&r>0?t.jsx(Ve,{ref:i,className:a,children:"Please enter at least 3 symbols"}):!n||o?null:!n.courses?.length&&!n.items?.length&&!n.spaces?.length?t.jsx(Ve,{ref:i,className:a,children:"Nothing found :C"}):t.jsxs(Ve,{className:a,ref:i,children:[!!n.courses?.length&&t.jsxs(t.Fragment,{children:[t.jsx(he,{children:t.jsx(Oe,{children:"Courses"})}),n.courses.map(({_id:h,imageCover:p,name:f})=>t.jsxs(he,{style:{cursor:"pointer"},onClick:b("course",h),children:[t.jsx($e,{src:n3.StaticHostPath+p,alt:f}),t.jsx(Ne,{children:f})]},"search-course"+h))]}),!!n.spaces?.length&&t.jsxs(t.Fragment,{children:[t.jsx(he,{children:t.jsx(Oe,{children:"Spaces"})}),n.spaces.map(({imageThumb:h,name:p,_id:f})=>t.jsxs(he,{style:{cursor:"pointer"},onClick:b("space",p.replaceAll(" ","_")),children:[t.jsx($e,{src:h,alt:p}),t.jsx(Ne,{children:p})]},"search-space"+f))]}),!!m?.length&&t.jsxs(t.Fragment,{children:[t.jsx(he,{children:t.jsx(Oe,{children:"Items"})}),m.map(h=>h)]})]})},R3=({alwaysOpen:e,style:n,fillFreeSpace:r})=>{const o=J(),i=Ue(),[a,c]=s.useState(""),[d,l]=s.useState(null),[u,{isFetching:b}]=Z3(),{open:m,close:h,isOpen:p}=Re(!1,{onClose:()=>{l(null),c("")}}),f=u3(h),y=s.useMemo(()=>e||p,[p,e]),M=i(g=>{g.trim().length<3||u(g).unwrap().then(l).catch(L=>{Se({label:"Ooops",sub:"Something went wrong",type:"incorrect"}),console.error(L)})},500),v=s.useCallback(()=>{p||m()},[p]);return s.useEffect(()=>{a.trim().length<3||M(a)},[a]),s.useEffect(()=>()=>{l(null),c("")},[]),t.jsxs(C7,{ref:f,className:I({fillFreeSpace:r}),children:[t.jsxs(u7,{style:n,className:I({isOpen:y,fillFreeSpace:r},o),onClick:v,children:[b?t.jsx(p3,{style:{width:20,height:20}}):t.jsx(p7,{}),t.jsx(h7,{children:t.jsx(m7,{type:"text",placeholder:"Search Courses, Shop, Accounts, Items...",onChange:g=>c(g.target.value)})})]}),t.jsx(m2,{queryLength:a.trim().length,results:d,close:()=>l(null),isFetching:b})]})},f2=()=>{const{courseId:e="",chapterId:n="",lessonId:r=""}=ue(),[o,i]=s.useState(null),a=ee(),c=ce(),d=fe(),{data:l,isLoading:u,isFetching:b,isError:m,refetch:h}=D3({courseId:e,chapterId:n,lessonId:r},{skip:!e||!n||!r}),p=s.useMemo(()=>l?l.course:null,[l]),f=s.useMemo(()=>p?.spaceInfo?.name??null,[p]),{data:y,isFetching:M}=U3(f??"",{skip:!f,refetchOnMountOrArgChange:!0}),v=u||b||M;s.useEffect(()=>{l&&i(l.resultCourse)},[l]),s.useEffect(()=>{h()},[a,e,n,r]);const{chapter:g,lesson:L}=s.useMemo(()=>{if(!p)return{chapter:null,lesson:null};const V=p.chapters.find(A=>A._id===n);if(!V)return{chapter:null,lesson:null};const B=V.lessons.find(A=>A._id===r)??null;return{chapter:V,lesson:B}},[p,n,r]),{completedSlides:E,rewardedSlides:N}=s.useMemo(()=>{const V={completedSlides:[],rewardedSlides:[]};if(!o?.resultChapters)return V;const B=o.resultChapters.find(j=>j.chapterId===n);if(!B)return V;const A=B.resultLessons.find(j=>j.lessonId===r);if(!A)return V;const z=A.resultSlides.filter(j=>j.isRewardsClaimed).map(j=>j.slideId);return{completedSlides:A.resultSlides.filter(j=>j.status===h3.FINISHED).map(j=>j.slideId),rewardedSlides:z}},[o]),{imageLogo:O,isQuest:U}=s.useMemo(()=>({isQuest:!!p?.isQuest,imageLogo:f7+"/"+(p?.imageLogo||p?.imageCover||p?.imageBanner)}),[p]);return s.useEffect(()=>{!p||!d||d.replaceAll(" ","_")!==f?.replaceAll(" ","_")&&c(`/${d}`,{replace:!0})},[d,f]),s.useEffect(()=>{if(!l&&!u||m){c(F.MAIN);return}},[l,m,u,a,d]),{course:p,resultCourse:o,setResultCourse:i,isLoadingCourse:v,isQuest:U,space:y,imageLogo:O,chapter:g,lesson:L,completedSlides:E,rewardedSlides:N}},x2=({course:e,chapter:n})=>{const r=ce(),o=s.useRef(null),{nextLessonId:i=null,nextChapterId:a=null}=s.useMemo(()=>{if(!n)return{nextLessonId:null,nextChapterId:null};const{nextLessonId:u,nextChapterId:b}=n;return{nextLessonId:u,nextChapterId:b}},[n]),c=fe();return{navToOverview:()=>{if(e){if(c){r(`/${c}`);return}if(e.spaceInfo?.name){r(`/${e.spaceInfo.name.replaceAll(" ","_")}`);return}r(F.MAIN)}},navToNextLesson:()=>{i&&e&&n&&r(`${F.COURSES}/${e._id}/${a??n._id}/${i}`)},nextLessonId:i,screenRef:o}},_3=()=>{const{play:e}=ke({sound:se.SLIDE_CHANGE.sound}),{play:n}=ke({sound:se.RECEIVING_REWARD.sound}),{play:r}=ke({sound:se.ANSWER_RIGHT.sound}),{play:o}=ke({sound:se.ANSWER_WRONG.sound});return{playSlideChange:()=>e(se.SLIDE_CHANGE.volume),playReward:()=>n(se.RECEIVING_REWARD.volume),playAnswerRight:()=>r(se.ANSWER_RIGHT.volume),playAnswerWrong:()=>o(se.ANSWER_WRONG.volume)}},g2=()=>{const[e,n]=s.useState([]),r=a=>n(c=>[...c,a]),o=a=>n(c=>c.filter(d=>d.slideId!==a)),i=s.useRef(!1);return s.useEffect(()=>{const a=e[0]??null;!a||i.current||(i.current=!0,a.callback().finally(()=>{o(a.slideId),i.current=!1}))},[e]),{addQueryItem:r,query:e}},I3=s.createContext({addQueryItem:()=>{},query:[]}),w2=()=>{const{addQueryItem:e,query:n}=s.useContext(I3);return{addQueryItem:e,query:n}},b2=({slide:e,resultCourse:n,completedSlides:r,isSlideRewarded:o,updateRight:i,setResultCourse:a,addClaimedRewards:c,handleEnergyModal:d})=>{const l=xe(),u=ee(),{refetch:b}=z3({props:["exp"]},{skip:!u}),{chapterId:m,lessonId:h}=ue(),[p,f]=s.useState(!1),{playAnswerRight:y,playAnswerWrong:M,playReward:v}=_3(),{getMultipliedExp:g}=m3(),[L,{isLoading:E}]=G3(),[N,{isLoading:O}]=W3(),[U,{isLoading:V}]=q3(),{addQueryItem:B,query:A}=w2(),z=De(),H=s.useMemo(()=>E||V||O||!!A.find(({slideId:x})=>e._id===x),[E,V,O,A,e]),j=s.useMemo(()=>l?.exp?l.exp.energy:40,[l]),T=s.useMemo(()=>{const x=n?.resultChapters.find($=>$.chapterId===m);if(!x)return null;const S=x.resultLessons.find($=>$.lessonId===h);return S?S.resultSlides.find($=>$.slideId===e._id)??null:null},[h,m,n,e]),P=s.useCallback(()=>{if(!r.includes(e._id)&&!p){if(j<25){d(!0),f(!0);return}B({slideId:e._id,callback:async()=>{await L({resultCourseId:n?._id||"",slideId:e._id,userAnswers:[]}).unwrap().then(x=>{a(x.resultCourse)}).catch(console.error)}})}},[e,r,u,p,T]),R=s.useCallback(async({data:x})=>{if(x.energy===0&&d(!0),x.answersResult==="wrong"){Se({type:"incorrect"},{autoClose:2500}),M(),i(!1);return}Se({type:"incorrect",label:x.message??"Something went wrong :/"},{autoClose:2500})},[M]),_=s.useCallback(async(x,S,$)=>{if(x.answersResult==="right"&&(y(),i(!0),Se({type:"correct"},{autoClose:2500}),e.rewards.length&&!o)){const Z=e.rewards.map(w=>({...w,quantity:g(w.id,w.quantity)})),k=Z.find(w=>w.id===o3.EXP_TOKEN)?.quantity||0;z(r3(k)),c(Z),u&&await Ce(1e3,()=>{v(),ve(Z)})}S&&!e.slideType.isOptional&&await S(),$&&($(),e.rewardExp&&await Ce(1e3,()=>{v(),ve([{id:0,quantity:e.rewardExp}])})),"resultCourse"in x&&a(x.resultCourse),u&&b()},[o,u,y,v,e]),X=s.useCallback(async(x,S)=>{if(i(null),!!u){if(j<Ke){d(!0);return}B({slideId:e._id,callback:async()=>{await L({resultCourseId:n?._id||"",slideId:e._id,userAnswers:x}).unwrap().then($=>_($,S)).catch(R)}})}},[e,n,r,u,j,o,T,R,_]),D=s.useCallback(async(x,S)=>{if(i(null),!!u){if(j<Ke){d(!0);return}B({slideId:e._id,callback:async()=>{await N({resultCourseId:n?._id||"",slideId:e._id,images:x}).unwrap().then($=>_($,S)).catch(R)}})}},[e,n,r,u,j,o,T,R,_]),G=x=>{B({slideId:e._id,callback:()=>new Promise(S=>{setTimeout(()=>{x(e._id),S()},900)})})},W=s.useCallback(x=>async(S,$)=>{i(null);const Z=()=>x(e._id,e.rewardExp);B({slideId:e._id,callback:async()=>{await U({slideId:e._id,userAnswers:S}).unwrap().then(k=>{_(k,$,Z)}).catch(R)}})},[e,o,R,_]);return{completeTestSlide:X,completeInfoSlide:P,completeTestSlideUnauth:W,completeInfoSlideUnauth:G,completeImagesTestSlide:D,isLoading:H,resultSlide:T}},v2=(e,n)=>{const r=Ge(),o=Number(localStorage.getItem(je.UNAUTH_REWARD_EXP)),i=localStorage.getItem(je.WAS_SENT_TO_AUTH_CAUSE_EXP)==="true";s.useEffect(()=>{e===50&&o&&n(o)},[o,e]),s.useEffect(()=>{e<=o||localStorage.setItem(je.UNAUTH_REWARD_EXP,e.toString())},[e,o]),s.useEffect(()=>{e===300&&!i&&(localStorage.setItem(je.WAS_SENT_TO_AUTH_CAUSE_EXP,"true"),r(void 0,{exp:300}))},[e,i])},y2=C(x7)`
  position: absolute;
  left: calc(100% + 50px);
  bottom: -25px;
  gap: 8px;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  & .animation-before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 155%;
    height: 155%;
    pointer-events: none;
    z-index: 1;
    transform: translate(-50%, -50%);
  }

  & .animation-claiming {
    position: absolute;
    bottom: -98%;
    width: 235%;
    pointer-events: none;
  }

  &.inTask {
    right: 0 !important;
    left: auto !important;
    top: 50% !important;
    bottom: auto !important;
    transform: translate(50%, -50%) !important;
    position: absolute !important;
  }

  @media screen and (max-width: 992px) {
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
    left: auto;
    bottom: auto;
    margin-top: -48px;
    position: sticky;
    right: 0;
    transform: translateX(8px);
    bottom: 80px;
    top: 20px;
  }
`,j2=C.p`
  font-size: 16px;
  line-height: 19px;
  color: ${({$grade:e})=>Me[e]} !important;
  text-align: center;
  white-space: nowrap;
  @media screen and (max-width: 992px) {
    font-size: 18px;
    text-shadow: 0px 0px 18.432px ${({$grade:e})=>Me[e]};
    display: none;
  }
`,k2=C(f3)`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  border: 2px solid;
  border-color: ${({$grade:e})=>Me[e]};
  background: rgba(255, 255, 255, 0.1);
  position: relative;
`,S2=C.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  filter: blur(30px);
  background: ${({$grade:e})=>Me[e]};
  z-index: -1;
  opacity: 0.8;
`,E2=C(f3)``,L2=Ie`
  0% {
    opacity: 1;
  }
  15% {
    transform: translateX(20%);
  }
  30% {
    transform: translateX(120%);
  }
  35% {
    opacity: 1;
    scale: 1;
  }
  41%, 100%{
    transform: translateX(80%);
    opacity: 0;
    scale: 0;
  }

`,M2=Ie`
  20% {
    transform: translateY(160%);
  }
  35%, 100% {
    transform: translateY(-160%);
  }
`,R2=C.div`
  display: none;
  &:not(:first-child) {
    margin-left: -47px;
  }
  &.animated {
    display: block;
    animation: ${M2} 2s ease-in;
    animation-delay: ${({$delay:e})=>e};
    /* animation-timing-function: ease-in; */
  }
`,Xe=C.img`
  height: 37px;
  width: 37px;
  &.animated {
    opacity: 0;
    animation: ${L2} 2s ease-out;
    animation-delay: ${({$delay:e})=>e};
    /* animation-timing-function: ease-out; */
    &:not(:first-child) {
      margin-left: -37px;
    }
  }
  &.hidden {
    opacity: 0;
  }
  &:not(:first-child) {
    margin-left: -20px;
  }
  &:nth-child(1) {
    z-index: 1;
  }
  &:nth-child(2) {
    z-index: 0;
  }
  &:nth-child(3) {
    z-index: -1;
  }
`,_2=Ie`
  0% {
    scale: 0;
  }
  12% {
    scale: 1.7;
  }
  35% {
    scale: 1;
  }
  50% {
    scale: 1.5;
  }
  100% {
    scale: 0;
  }

`,I2=C.div`
  position: absolute;
  scale: 0;
  width: 32px;
  height: 32px;
  z-index: 20;
  bottom: 152%;
  left: 28%;
  /* background: #00000050; */
  & > div {
    width: 100% !important;
    height: 100% !important;
    min-width: 100% !important;
    min-height: 100% !important;
    /* opacity: 0.5; */
  }

  &.animated {
    animation: ${_2} 2s ease-in-out;
  }
`,Ye="https://test.api.mighty.study/animations/",Je={[re.COMMON]:0,[re.UNCOMMON]:1,[re.RARE]:2,[re.EPIC]:3,[re.LEGENDARY]:4,[re.MYTHICAL]:5,[re.DIVINE]:6},A3=({rewards:e,resultCourseId:n,slideId:r,setResultCourse:o,updateRewards:i,disabled:a,inTask:c,autoCompleteOn:d,handleCompletion:l,updateUnauthExp:u,rewardExp:b})=>{const m=ee(),[h,{isLoading:p}]=Q3(),f=s.useRef(!1),[y,M]=s.useState(!1),[v,g]=s.useState(!1),[L,E]=s.useState(!1),[N,O]=s.useState(!1),{nickname:U,avatar:V}=xe(),B=De(),{playReward:A}=_3(),{getMultipliedExp:z}=m3(),H=w7(),j=H?"mov":"webm",T=H?"hevc":"webm",P=M3({rewards:e}).sort((x,S)=>Je[S.grade]-Je[x.grade]).slice(0,3),R=s.useMemo(()=>P.length?P[0].grade:re.COMMON,[P]),_=s.useMemo(()=>`${Ye}rewards/glow/${T}/${R}.${j}`,[j,T,R]),X=s.useMemo(()=>`${Ye}rewards/collect/${T}/${R}.${j}`,[j,T,R]),D=()=>{M(!1),g(!1),E(!1),O(!1),f.current=!1},G=async()=>{g(!0),await Ce(1e3,ve,e),A(),l&&l()};s.useEffect(()=>{d&&G()},[d]);const W=()=>{if(u&&!f.current&&r&&b&&!m){f.current=!0,g(!0),Ce(2200,()=>{u(),M(!0),ve([{id:0,quantity:b}]),A()});return}p||y||a||!n||!r||!i||c||f.current||(f.current=!0,g(!0),h({resultCourseId:n,slideId:r}).unwrap().then(x=>{x.resultCourse&&Ce(2e3,o,x.resultCourse),A();const S=e.map(Z=>({...Z,quantity:z(Z.id,Z.quantity)}));i(S);const $=S.find(Z=>Z.id===o3.EXP_TOKEN)?.quantity||0;B(r3($)),ve(S),Ce(1500,M,!0)}).catch(x=>{K3.error(t.jsx(g7,{label:"Oops...",subtext:x?.data?.message??x.toString()}),{autoClose:1e3}),D()}))};return!m&&!b?null:t.jsx(ae,{children:!y&&t.jsxs(y2,{$alignItems:"center",$justifyContent:"center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,scale:0},onClick:W,className:I({inTask:c}),children:[t.jsxs(k2,{$alignItems:"center",$justifyContent:"center",$grade:R,children:[t.jsx(I2,{className:I({animated:N}),children:t.jsx(We,{userName:U||"??",src:V})}),t.jsx(ae,{exitBeforeEnter:!0,children:v?t.jsx(K.video,{className:"animation-claiming",playsInline:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},src:X,onEnded:()=>{g(!1),O(!1)},onPlay:()=>O(!0),autoPlay:v},"anim-claiming"):t.jsx(K.video,{playsInline:!0,className:"animation-before",src:_,autoPlay:!0,loop:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},"anim-before")}),t.jsx(S2,{$grade:R}),t.jsx(E2,{$alignItems:"center",$justifyContent:"center",children:!L&&P.map((x,S)=>t.jsxs(s.Fragment,{children:[t.jsx(Xe,{$delay:"0s",className:I({hidden:N}),src:x.image}),t.jsx(R2,{className:I({animated:N}),$delay:`${.07*S}s`,onAnimationEnd:()=>{E(!0)},children:t.jsx(Xe,{className:I({animated:N}),src:x.image,$delay:`${.07*S}s`})})]},"reward-"+S))})]}),!c&&t.jsx(j2,{$grade:R,children:"Claim Rewards"})]})})},A2=C.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 90%;
  max-width: 372px;
  padding: 0px 48px 0px 16px;
  color: var(--font-color);
  background: #ffffff0a;
  white-space: nowrap;
  &.light {
    background: #1111110a;
  }
  border-radius: 10px;
  gap: 12px;
  position: relative;
  margin: 0 auto;
  font-size: 18px;
  margin-top: 56px;
  @media screen and (max-width: 992px) {
    margin-top: 22px;
  }
`,T2=({rewards:e,rewarded:n})=>{const r=J(),[o,i]=s.useState(n),[a,c]=s.useState(!1),d=()=>{o||c(!0)};s.useEffect(()=>{!o&&n&&d()},[o,n]);const l=()=>{setTimeout(()=>{i(!0)},2e3)};return e.length?t.jsx(ae,{children:o?t.jsx(K7,{rewards:e}):t.jsxs(A2,{className:I({theme:r}),children:[t.jsx(He,{}),"Complete task to receive rewards",t.jsx(A3,{inTask:!0,rewards:e,disabled:!0,autoCompleteOn:a,handleCompletion:l})]})}):null},$2={completedTasksCount:0,tasksLeft:0,isVisible:!1,isRight:null},N2=(e,n)=>{if("type"in n)switch(n.type){case"TASKS_COUNT":return{...e,completedTasksCount:e.completedTasksCount+1};case"TASKS_LEFT":return n.payload?{...e,tasksLeft:n.payload}:e;default:return e}return{...e,...n}},V2=({slide:e,isLastSlide:n,resultCourse:r,testsSlidesIds:o,completedSlides:i,rewardedSlidesIds:a,setResultCourse:c,handleEnergyModal:d,addClaimedRewards:l,unauthCompleteSlide:u,startSlideUnlockAnimation:b})=>{const m=ee(),h=s.useRef(!1),[p,f]=s.useReducer(N2,$2),{completedTasksCount:y,isRight:M,isVisible:v,tasksLeft:g}=p,L=s.useCallback(w=>f({isRight:w}),[f]),E=s.useCallback(()=>f({isVisible:!0}),[f]),N=()=>f({type:"TASKS_COUNT"}),O=w=>f({type:"TASKS_LEFT",payload:w}),{completeInfoSlide:U,completeTestSlide:V,completeImagesTestSlide:B,completeInfoSlideUnauth:A,completeTestSlideUnauth:z,isLoading:H}=b2({slide:e,resultCourse:r,completedSlides:i,isSlideRewarded:!!a.includes(e._id),updateRight:L,addClaimedRewards:l,handleEnergyModal:d,setResultCourse:c}),{mappedContent:j}=e2({slide:e,incrementCompletedTasksCount:async()=>N(),setTasksLeft:O}),T=s.useMemo(()=>e.typeOfSlide!==Y.INFO,[]),P=s.useMemo(()=>!!e.content.find(w=>w.isRequired&&w.type===a3.TASK)&&!T,[e,T]),R=s.useMemo(()=>P?y>=g:!0,[g,y]),_=i.includes(e._id),X=a.includes(e._id),D=e.slideType.isOptional&&T,G=T||P||!!e.rewards.length||n||!m,W=s.useMemo(()=>(!T||D)&&G&&R,[T,D,G,R]),x=s.useMemo(()=>T?X7:Y7,[T]),S=s.useMemo(()=>v&&i.includes(e._id)&&!!e.rewards.length&&!X&&!g&&!o.includes(e._id),[v,i,e,X,g,o]),$=s.useCallback(w=>{v||w&&E()},[v]),Z=b7({handler:$}),k=s.useCallback(async w=>{m?e.typeOfSlide===Y.ADD_IMAGES?await B(w,b):await V(w,b):await z(u)(w,b)},[m,e,u,V]);return s.useEffect(()=>{m&&v&&W&&!h.current&&(h.current=!0,U())},[U,T,D,R,v,G,m,W]),s.useEffect(()=>{m||!v||!W||_||A(u)},[m,v,_,W]),t.jsx(J7.Provider,{value:{isCompleting:H,isInProgress:!i.includes(e._id),handleAnswer:k,rewards:[],slideId:e._id,hideButtonOnRight:!0},children:t.jsxs(s2,{id:e._id,ref:Z,className:I({isVisible:v}),children:[t.jsx(x,{testsIds:o,isRewarded:a.includes(e._id),slide:{...e,content:j},right:M,updateRight:w=>L(w),isCompleted:i.includes(e._id)}),P&&!!e.rewards.length&&t.jsx(T2,{rewards:e.rewards,disabled:!R,rewarded:X}),S&&!P&&t.jsx(A3,{resultCourseId:r?._id||"",setResultCourse:c,updateRewards:l,slideId:e._id,rewards:e.rewards,updateUnauthExp:()=>u(e._id,e.rewardExp),rewardExp:e.rewardExp})]})})},O2=i3.memo(V2),B2=C(K.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  justify-content: center;
  /* gap: 12px; */
  height: 153px;
  color: var(--font-color-strong);
  position: relative;
  & > svg {
    width: 64px;
    height: 64px;
  }
  & canvas {
  }
`,H2=C(K.p)`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: inherit;
`,F2=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  color: inherit;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(10px);
  pointer-events: none;
  @media screen and (max-width: 992px) {
    height: 200px;
    overflow: hidden;
  }
`,P2=C.h3`
  font-size: 28px;
`,Z2=C.p`
  font-size: 18px;
`,D2=C(K.div)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding-bottom: 30px;
`,U2=C.div`
  margin-bottom: -20px;
  height: 104px;
  width: 100%;
`,z2=C(K.div)`
  height: 153px;
`,T3=s.createContext({}),te=()=>s.useContext(T3),G2=({isLoading:e})=>t.jsx(t.Fragment,{children:e&&t.jsx(D2,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.5}},exit:{opacity:0},children:t.jsx(p3,{})})}),W2=({isTask:e})=>{const{state:{isAnimationStarted:n}}=te(),[r,o]=s.useState(!1),i=J(),a=s.useMemo(()=>`https://test.api.mighty.study/animations/lock_${i}.riv`,[i]),{rive:c,RiveComponent:d}=u2.useRive({src:a,onLoad:()=>o(!0),autoplay:!1});return s.useEffect(()=>(n&&r&&c&&c.play(),n||c&&c.reset(),()=>{c&&c.reset()}),[c,n,r]),t.jsx(z2,{initial:{opacity:0,filter:"blur(10px)"},animate:{opacity:1,filter:"blur(0px)",transition:{delay:.5}},exit:{opacity:0,filter:"blur(10px)",transition:{duration:.5}},children:t.jsxs(B2,{children:[t.jsx(U2,{children:t.jsx(d,{})}),t.jsx(ae,{children:!n&&t.jsxs(H2,{initial:{opacity:0,height:0},animate:{opacity:1,filter:"blur(0px)",transition:{delay:.5},height:24},exit:{filter:"blur(10px)",opacity:0,height:0},children:["Complete the ",e?"task":"test"," to progress forward"]})}),t.jsxs(F2,{children:[t.jsx(P2,{children:"Guides and safe areas"}),t.jsx(Z2,{children:"It is the mark of an educated mind to be able to entertain a thought without accepting it. No great mind has ever existed without a touch of madness. Those who know, do. Those that understand, teach. The high-minded man must care more for the truth than for what people think."})]})]})})},q2=({isCompleted:e,nextLessonId:n,isLastSlideInfo:r,finishLesson:o,isRequiredTask:i})=>{const{space:a}=qe(),{state:{isPlaceholder:c},functions:{navToNextLesson:d}}=te(),l=v7(),{lessonPage:u}=ye({}),b=s.useMemo(()=>!!a,[a]),m=s.useMemo(()=>c?"placeholder":e?"buttons":r?"loader":null,[c,r,e]),h=s.useMemo(()=>t.jsxs(n2,{children:[!b&&!n&&t.jsx(me,{onClick:o,className:"vertical-lesson-button",variant:"white",label:"Go to courses"}),b&&!n&&t.jsx(me,{onClick:o,className:"vertical-lesson-button",variant:"white",label:"Back to space"}),!!n&&!l&&t.jsx(me,{style:{background:u?.accentColor},onClick:d,className:"vertical-lesson-button",variant:"cool",label:"Next Lesson"})]}),[b,o,n]),p=s.useMemo(()=>t.jsx(W2,{isTask:i}),[i]),f=s.useMemo(()=>t.jsx(G2,{isLoading:!0}),[]);return t.jsxs(ae,{exitBeforeEnter:!0,children:[m==="buttons"&&t.jsx(Be,{children:h},"btns"),m==="placeholder"&&t.jsx(Be,{children:p},"plchldr"),m==="loader"&&t.jsx(Be,{children:f},"ldr")]})},Q2=i3.memo(q2),$3={claimedRewards:[],isAnimationStarted:!1,isEnergyModal:!1,isLoadingCourse:!0,isNavigatingToNextLesson:!1,isRewardsModal:!1,scrollTop:0,isPlaceholder:!1,isSidePanelOn:!0,mobileMenuState:null,unauthRewardsExp:50},K2=(e,n)=>{if("type"in n){const{payload:r}=n;switch(n.type){case"REWARDS_UPDATE":return typeof r=="object"&&"length"in r?{...e,claimedRewards:[...e.claimedRewards,...r]}:e;case"INCREASE_UNAUTH_EXP":if(typeof r=="number"){const o=Math.min(e.unauthRewardsExp+r,300);return{...e,unauthRewardsExp:o}}return e;default:return e}}return{...e,...n}},X2=C.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3000;
  background-color: #1c1d26;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden auto;
  padding-top: 46px;
  scrollbar-gutter: stable both-edges;
  &.light {
    background-color: #ffffff;
  }
  @media screen and (max-width: 992px) {
    padding: 0px 16px;
    scrollbar-gutter: unset;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: none;
  }
`,Y2=C.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px 48px 0px;
  z-index: 100;

  @media screen and (max-width: 992px) {
    padding: 24px 0px 0px;
    &.isIOS_app {
      padding: 40px 0px 0px;
    }
    position: relative;
  }
`,J2=C.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 119px;
  z-index: 20;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: inherit;
  background-image: inherit;
  mask-mode: alpha;
  mask-image: linear-gradient(to top, transparent 0%, transparent 30px, #000 50px, #000 100%);
  pointer-events: none;
  @media screen and (max-width: 992px) {
    display: none;
  }
`,e1=C.div`
  position: fixed;
  top: 50%;
  translate: 0% -50%;
  left: 48px;
  z-index: 50;
  &.${x3.TOP}, &.${ie.CONTENTS} {
    top: 88px !important;
    translate: none;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`,t1=C.div`
  position: fixed;
  top: 50%;
  right: 48px;
  translate: 0% -50%;
  z-index: 50;
  &.${x3.TOP} {
    top: 88px !important;
    translate: none;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`,s1=C.div`
  width: 100%;
  height: fit-content;
  position: relative;
`,n1=C.div`
  cursor: pointer;
  color: var(--font-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  position: fixed;
  right: 50px;
  bottom: 55px;
  z-index: 2;
  transform: rotate(${({$reversed:e})=>e?"180deg":"0deg"});
  transition: 0.2s;
  background-color: #ffffff21;
  &.light {
    background-color: #11111121;
  }
  &:hover {
    scale: 1.1;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`,o1=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("path",{d:"M18 9.00179C18.6277 9.83745 18.9996 10.8762 18.9996 12.0018C18.9996 13.1274 18.6277 14.1661 18 15.0018M6.6 9.00179H7.5012C8.05213 9.00179 8.32759 9.00179 8.58285 8.93312C8.80903 8.87227 9.02275 8.77216 9.21429 8.63737C9.43047 8.48524 9.60681 8.27362 9.95951 7.85038L12.5854 4.69929C13.0211 4.17647 13.2389 3.91506 13.4292 3.88785C13.594 3.86429 13.7597 3.92429 13.8712 4.04788C14 4.1906 14 4.53087 14 5.21143V18.7922C14 19.4727 14 19.813 13.8712 19.9557C13.7597 20.0793 13.594 20.1393 13.4292 20.1157C13.239 20.0885 13.0211 19.8271 12.5854 19.3043L9.95951 16.1532C9.60681 15.73 9.43047 15.5184 9.21429 15.3662C9.02275 15.2314 8.80903 15.1313 8.58285 15.0705C8.32759 15.0018 8.05213 15.0018 7.5012 15.0018H6.6C6.03995 15.0018 5.75992 15.0018 5.54601 14.8928C5.35785 14.7969 5.20487 14.6439 5.10899 14.4558C5 14.2419 5 13.9618 5 13.4018V10.6018C5 10.0417 5 9.76172 5.10899 9.5478C5.20487 9.35964 5.35785 9.20666 5.54601 9.11079C5.75992 9.00179 6.03995 9.00179 6.6 9.00179Z",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"})),r1=s.forwardRef(o1),i1=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("path",{d:"M16 9.50179L21 14.5018M21 9.50179L16 14.5018M4.6 9.00179H5.5012C6.05213 9.00179 6.32759 9.00179 6.58285 8.93312C6.80903 8.87227 7.02275 8.77216 7.21429 8.63737C7.43047 8.48524 7.60681 8.27362 7.95951 7.85038L10.5854 4.69929C11.0211 4.17647 11.2389 3.91506 11.4292 3.88785C11.594 3.86429 11.7597 3.92429 11.8712 4.04788C12 4.1906 12 4.53087 12 5.21143V18.7922C12 19.4727 12 19.813 11.8712 19.9557C11.7597 20.0793 11.594 20.1393 11.4292 20.1157C11.239 20.0885 11.0211 19.8271 10.5854 19.3043L7.95951 16.1532C7.60681 15.73 7.43047 15.5184 7.21429 15.3662C7.02275 15.2314 6.80903 15.1313 6.58285 15.0705C6.32759 15.0018 6.05213 15.0018 5.5012 15.0018H4.6C4.03995 15.0018 3.75992 15.0018 3.54601 14.8928C3.35785 14.7969 3.20487 14.6439 3.10899 14.4558C3 14.2419 3 13.9618 3 13.4018V10.6018C3 10.0417 3 9.76172 3.10899 9.5478C3.20487 9.35964 3.35785 9.20666 3.54601 9.11079C3.75992 9.00179 4.03995 9.00179 4.6 9.00179Z",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"})),a1=s.forwardRef(i1),c1=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("path",{d:"M16.0004 9.00179C16.6281 9.83745 17 10.8762 17 12.0018C17 13.1274 16.6281 14.1661 16.0004 15.0018M18 5.29347C19.8412 6.94144 21 9.33629 21 12.0018C21 14.6673 19.8412 17.0622 18 18.7101M4.6 9.00179H5.5012C6.05213 9.00179 6.32759 9.00179 6.58285 8.93312C6.80903 8.87227 7.02275 8.77216 7.21429 8.63737C7.43047 8.48524 7.60681 8.27362 7.95951 7.85038L10.5854 4.69929C11.0211 4.17647 11.2389 3.91506 11.4292 3.88785C11.594 3.86429 11.7597 3.92429 11.8712 4.04788C12 4.1906 12 4.53087 12 5.21143V18.7922C12 19.4727 12 19.813 11.8712 19.9557C11.7597 20.0793 11.594 20.1393 11.4292 20.1157C11.239 20.0885 11.0211 19.8271 10.5854 19.3043L7.95951 16.1532C7.60681 15.73 7.43047 15.5184 7.21429 15.3662C7.02275 15.2314 6.80903 15.1313 6.58285 15.0705C6.32759 15.0018 6.05213 15.0018 5.5012 15.0018H4.6C4.03995 15.0018 3.75992 15.0018 3.54601 14.8928C3.35785 14.7969 3.20487 14.6439 3.10899 14.4558C3 14.2419 3 13.9618 3 13.4018V10.6018C3 10.0417 3 9.76172 3.10899 9.5478C3.20487 9.35964 3.35785 9.20666 3.54601 9.11079C3.75992 9.00179 4.03995 9.00179 4.6 9.00179Z",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"})),l1=s.forwardRef(c1),d1=({square:e})=>{const n=Ae(c3),r=Ue(),o=n/100,i=()=>o<=.05?t.jsx(a1,{}):o<=.5?t.jsx(r1,{}):t.jsx(l1,{});function a(){c(o?0:1)}const c=r(d=>{Te(l3(d*100))},100);return t.jsx(de,{square:e,icon:i(),onClick:a,children:t.jsx("div",{style:{width:66,height:"100%"},onClick:d=>d.stopPropagation(),children:t.jsx(L3,{knobColor:"#fff",progressColor:"#627EEA",knobSize:10,myValue:o,height:2,min:0,max:1,onChange:c,withKnob:!0,widthSlider:45})})})},C1=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("path",{d:"M6.99709 7.00037L8.73435 5.26311C9.52638 4.47108 9.9224 4.07506 10.3791 3.92668C10.7807 3.79617 11.2134 3.79617 11.6151 3.92668C12.0718 4.07506 12.4678 4.47108 13.2598 5.26311L13.9971 6.00049M9.99709 10.0004L13.9971 14.0004M9.49712 18.5006C10.1551 17.8426 16.641 11.3567 20.0011 7.99663C21.1057 6.89202 21.1017 5.10511 19.9971 4.00047C18.8925 2.89577 17.1055 2.89174 16.0008 3.9964C12.6408 7.35647 6.15504 13.8422 5.497 14.5002C3.71241 16.2847 2.64351 20.6467 2.997 21.0002C3.35048 21.3537 7.65774 20.34 9.49712 18.5006Z",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),u1=s.forwardRef(C1),p1=C(le).attrs({direction:"column",align:"end",gap:"8px"})``,h1=C.div``,m1=C.span`
  text-transform: capitalize;
`,f1=C.img`
  height: 44px;
  width: 44px;
  object-fit: contain;
`,Pe=C.div`
  margin-left: -10px;
  margin-right: -10px;
`,x1=C(We).attrs({size:44})``,g1=C(le).attrs({direction:"column",align:"center",gap:"4px"})`
  width: 70px;
`,w1=C.p`
  color: var(--font-color-strong);
  font-size: 12px;
  font-weight: 400;
  line-height: 110%;
`,b1=C.p`
  line-height: 100%;
  font-size: 16px;
  font-weight: 500;
`,v1=()=>{const e=xe();if(!e)return null;const{exp:{energy:n,limit:{maxEnergy:r}}}=e,o=Math.floor(n/r*100),i=o>50?"#00FFBA":o>10?"#F3BC27":"#F14F63",a=o>50?"forceGood":o>10?"forceMid":"forceBad";return t.jsx(de,{gap:"16px",icon:t.jsx(Pe,{style:{height:44,width:44},children:t.jsx(y7,{customGradient:a,customColor:i,amount:o,type:"energy"})}),children:t.jsxs(g1,{children:[t.jsx(w1,{children:"Energy"}),t.jsxs(b1,{style:{color:i},children:[o,"%"]})]})})},y1=({preparedLink:e,menuState:n,setMenuState:r})=>{const{courseProps:{course:o}}=te(),i=Ae(d3),{lessonId:a=""}=ue(),c=xe(),d=ee(),{isMobile:l,isTablet:u}=pe(),b=fe(),{space:m}=qe(),h=m?.name?.replaceAll(" ","_")||"",p=ce(),f=o?.customization?.sidebarRight?.preset===g3.SQUARE,y=s.useMemo(()=>c?.roles?.includes(w3.ADMIN),[c]),M=c?.expTokenBalance,v=()=>Te(C3(i===Q.DARK?Q.LIGHT:Q.DARK)),g=()=>{r&&r(n===null?"progress":null)},L=s.useMemo(()=>!!((o?.customization?.sidebarLeft||ie.CONTENTS)!==ie.CONTENTS||l||u),[o?.customization?.sidebarLeft,l,u]),E=`${window.location.origin}${F.SPACE_COURSE_CONSTRUCTOR.replace(":lessonId",a).replace(":spaceName",h)}`,N=()=>{window.open(e??E.toString(),"_blank")};return t.jsx(h1,{children:t.jsxs(p1,{children:[t.jsx(t2,{children:t.jsx(d1,{square:f})}),L&&t.jsx(de,{square:f,onClick:g,icon:t.jsx(j7,{style:{transform:"rotate(180deg)"},strokeWidth:1.5}),children:"Course Progress"}),!b&&t.jsx(de,{square:f,icon:i==="dark"?t.jsx(p2,{}):t.jsx(k7,{stroke:"var(--font-color)"}),onClick:v,children:t.jsx(m1,{children:i})}),y&&t.jsx(de,{square:f,icon:t.jsx(u1,{}),onClick:N,children:"Edit Lesson"}),!!d&&!!c&&t.jsxs(t.Fragment,{children:[t.jsxs(de,{square:f,gap:"12px",icon:t.jsx(Pe,{children:t.jsx(f1,{src:b3})}),children:[M," EXP"]}),t.jsx(v1,{}),t.jsx(de,{onClick:()=>p(F.PROFILE),gap:"16px",icon:t.jsx(Pe,{children:t.jsx(x1,{userName:c.nickname,src:c.avatar})}),children:"Profile"})]})]})})},j1=C(le).attrs({direction:"column",gap:"16px"})`
  width: fit-content;
`,Ee=C(le).attrs({align:"center",justify:"center"})`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  & > svg {
    width: 24px;
    height: 24px;
  }
  color: var(--font-color);
  background: #ffffff0a;
  &.light {
    background: #1111110a;
  }
  transition: 0.3s;
`,Le=C.p`
  color: var(--font-color);
  transition: 0.3s;
  opacity: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
`,k1=C(le).attrs({align:"center",gap:"8px"})`
  width: 127px;
  height: 44px;
  border-radius: 44px;
  transition: 0.3s;
  background: transparent;
  cursor: pointer;
  &.isActive {
    & ${Ee} {
      color: var(--mighty-blue) !important;
      background: #627eea1a;
    }
    & ${Le} {
      color: var(--mighty-blue) !important;
    }
  }
  &.light ${Ee} {
    background: #1111110a;
  }
  &.isParentHovered,
  &:hover {
    & ${Le} {
      opacity: 1;
    }
  }
  &:hover {
    background: #ffffff0a;
    &.light {
      background: #1111110a;
    }
    &.isActive {
      background: #627eea1a;
    }
    & ${Ee} {
      background: transparent;
      color: var(--font-color-strong);
    }
    & ${Le} {
      color: var(--font-color-strong);
    }
  }
`,be=({icon:e,href:n,isActive:r,isParentHovered:o,title:i,authOnly:a})=>{const c=J(),d=ce(),l=()=>{if(a){d(F.AUTH);return}d(n)};return t.jsxs(k1,{onClick:l,className:I({isActive:r,isParentHovered:o},c),children:[t.jsx(Ee,{children:e}),t.jsx(Le,{children:i})]})},S1=({style:e})=>{const{isOpen:n,open:r,close:o}=Re(),{pathname:i}=X3(),a=c=>c.some(d=>n7(d,i));return t.jsxs(j1,{onMouseEnter:r,onMouseLeave:o,style:e,children:[t.jsx(be,{href:F.MAIN,icon:t.jsx(Y3,{}),isActive:a([F.MAIN,F.STUDY_AREA]),isParentHovered:n,title:"Study"}),t.jsx(be,{href:F.PROFILE,icon:t.jsx(J3,{}),isActive:a([F.PROFILE]),isParentHovered:n,title:"Profile"}),t.jsx(be,{href:F.PLAY,icon:t.jsx(e7,{}),isActive:a([F.PLAY]),isParentHovered:n,title:"Play"}),t.jsx(be,{href:F.SHOP,icon:t.jsx(t7,{}),isActive:a([F.PROFILE]),isParentHovered:n,title:"Shop"}),t.jsx(be,{href:F.SPACES,icon:t.jsx(s7,{}),isActive:a([F.SPACES]),isParentHovered:n,title:"Spaces"})]})},E1=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:20,height:21,viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("circle",{cx:9.95312,cy:10.7695,r:6.7,stroke:"currentColor",strokeWidth:1.6})),L1=s.forwardRef(E1),M1=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:20,height:21,viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.95312 18.2695C14.0953 18.2695 17.4531 14.9117 17.4531 10.7695C17.4531 6.6274 14.0953 3.26953 9.95312 3.26953C5.81099 3.26953 2.45312 6.6274 2.45312 10.7695C2.45312 14.9117 5.81099 18.2695 9.95312 18.2695ZM13.5688 9.33834C13.8812 9.02592 13.8812 8.51939 13.5688 8.20697C13.2564 7.89455 12.7499 7.89455 12.4374 8.20697L9.00313 11.6413L7.56881 10.207C7.25639 9.89455 6.74986 9.89455 6.43744 10.207C6.12502 10.5194 6.12502 11.0259 6.43744 11.3383L8.43744 13.3383C8.74986 13.6508 9.25639 13.6508 9.56881 13.3383L13.5688 9.33834Z",fill:"currentColor"})),R1=s.forwardRef(M1),_1=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:18,height:19,viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("path",{d:"M15.8416 5.77051L7.38208 14.23L3.15234 10.0002",stroke:"#627EEA",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),I1=s.forwardRef(_1),A1={[Q.DARK]:"#3f4356",[Q.LIGHT]:"rgba(17, 17, 17, 0.08)"},_e="#6487EF",T1=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  gap: 16px;
  animation: appear 1s ease-in-out;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,N3=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  /* color: ${({$theme:e})=>A1[e]}; */
  color: var(--font-color-strong);
  transition: 0.3s;
  cursor: pointer;
  &.isOpened {
    color: var(--font-color-strong);
  }
  &.isLessonsOpen {
    margin-bottom: 16px;
  }
`,$1=C(K.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:hover {
    ${N3} {
      color: var(--font-color-strong);
    }
  }
`,N1=C.span`
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;C.span`
  width: 36px;
  min-width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  color: var(--font-color-strong);
  font-size: 18px;
  font-weight: 700;
`;const V1=C.span`
  width: 100%;
  text-overflow: ellipsis;
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  color: var(--font-color-strong);
  transition: 0.3s;
  &:hover {
    opacity: 0.9;
  }
`,O1=C(S7)(()=>ze`
    width: 24px;
    height: 24px;
    min-width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    svg {
      width: 24px;
      height: 24px;
    }
  `),B1=C(E7)`
  color: var(--font-color-strong);
  transition: 0.3s;
  rotate: -90deg;

  &.isReversed {
    rotate: 0deg;
  }
`,e3=C.svg`
  width: 20px;
  min-width: 20px;
  height: 20px;
  transition: 0.3s;
`,H1=C(K.div)`
  gap: 20px;
  display: grid;
  grid-template-rows: 0fr;
  width: 100%;
  transition: 0.3s;
  border-left: 1px solid #ffffff1a;
  &.isOpen {
    grid-template-rows: 1fr;
  }
`,F1=C.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  transition: 0.3s;
  position: relative;
  gap: 16px;
  margin-left: -1px;
  &.isOpen {
    opacity: 1;
  }
`,V3=C.p`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  font-weight: 500;
  font-size: 14px;
  padding-left: 12px;
  width: 100%;
  min-height: 20px;
  color: var(--font-color);
  position: relative;
  border-radius: 0px 4px 4px 0px;
  background: transparent;
  /* padding-right: 5px; */
  &.isActive {
    color: ${({$accentColor:e})=>e??_e};
    &::before {
      left: 0;
      top: 50%;
      position: absolute;
      width: 1px;
      height: 18px;
      display: block;
      transform: translateY(-50%);
      content: "";
      background-color: ${({$accentColor:e})=>e??_e};
      transition: 0.3s;
    }
  }
  &:hover {
    &:not(.isActive) {
      color: var(--font-color-strong);
    }
    &::before {
      height: 20px;
    }
  }
`,O3=C.span`
  font-size: inherit;
  color: inherit;
  max-width: 100%;
  width: 100%;
  transition: 0.3s;
  line-height: 110%;
  margin-top: 3px; // for better text alignment
`,P1=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 100%;
  cursor: pointer;

  &.isActive {
    & ${O3} {
      color: ${({$accentColor:e})=>e??_e};
    }
    & ${V3} {
      color: ${({$accentColor:e})=>e??_e};
    }
  }
`;C(I1)`
  width: 18px;
  height: 18px;
  margin-top: -1px;
`;const Z1=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:232,height:132,viewBox:"0 0 232 132",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("rect",{width:232,height:132,rx:5,fill:"url(#paint0_linear_55867_57048)",fillOpacity:.8}),s.createElement("g",{filter:"url(#filter0_f_55867_57048)"},s.createElement("path",{opacity:.7,d:"M27.042 30.824V32H21.204V22.298H22.562V30.824H27.042ZM27.8097 28.374C27.8097 27.73 27.903 27.17 28.0897 26.694C28.2764 26.2087 28.5237 25.8073 28.8317 25.49C29.1397 25.1727 29.4944 24.9347 29.8957 24.776C30.297 24.6173 30.7077 24.538 31.1277 24.538C32.1077 24.538 32.859 24.846 33.3817 25.462C33.9044 26.0687 34.1657 26.9973 34.1657 28.248C34.1657 28.304 34.1657 28.3787 34.1657 28.472C34.1657 28.556 34.161 28.6353 34.1517 28.71H29.1677C29.2237 29.466 29.443 30.04 29.8257 30.432C30.2084 30.824 30.8057 31.02 31.6177 31.02C32.075 31.02 32.4577 30.9827 32.7657 30.908C33.083 30.824 33.321 30.7447 33.4797 30.67L33.6617 31.762C33.503 31.846 33.223 31.9347 32.8217 32.028C32.4297 32.1213 31.9817 32.168 31.4777 32.168C30.843 32.168 30.2924 32.0747 29.8257 31.888C29.3684 31.692 28.9904 31.426 28.6917 31.09C28.393 30.754 28.169 30.3573 28.0197 29.9C27.8797 29.4333 27.8097 28.9247 27.8097 28.374ZM32.8077 27.66C32.817 27.072 32.6677 26.5913 32.3597 26.218C32.061 25.8353 31.6457 25.644 31.1137 25.644C30.815 25.644 30.549 25.7047 30.3157 25.826C30.0917 25.938 29.9004 26.0873 29.7417 26.274C29.583 26.4607 29.457 26.6753 29.3637 26.918C29.2797 27.1607 29.2237 27.408 29.1957 27.66H32.8077ZM37.73 31.062C38.262 31.062 38.654 30.992 38.906 30.852C39.1673 30.712 39.298 30.488 39.298 30.18C39.298 29.8627 39.172 29.6107 38.92 29.424C38.668 29.2373 38.2527 29.0273 37.674 28.794C37.394 28.682 37.1233 28.57 36.862 28.458C36.61 28.3367 36.3907 28.1967 36.204 28.038C36.0173 27.8793 35.868 27.688 35.756 27.464C35.644 27.24 35.588 26.9647 35.588 26.638C35.588 25.994 35.826 25.4853 36.302 25.112C36.778 24.7293 37.4267 24.538 38.248 24.538C38.4533 24.538 38.6587 24.552 38.864 24.58C39.0693 24.5987 39.2607 24.6267 39.438 24.664C39.6153 24.692 39.7693 24.7247 39.9 24.762C40.04 24.7993 40.1473 24.832 40.222 24.86L39.984 25.98C39.844 25.9053 39.6247 25.8307 39.326 25.756C39.0273 25.672 38.668 25.63 38.248 25.63C37.884 25.63 37.5667 25.7047 37.296 25.854C37.0253 25.994 36.89 26.218 36.89 26.526C36.89 26.6847 36.918 26.8247 36.974 26.946C37.0393 27.0673 37.1327 27.1793 37.254 27.282C37.3847 27.3753 37.5433 27.464 37.73 27.548C37.9167 27.632 38.1407 27.7207 38.402 27.814C38.7473 27.9447 39.0553 28.0753 39.326 28.206C39.5967 28.3273 39.8253 28.472 40.012 28.64C40.208 28.808 40.3573 29.0133 40.46 29.256C40.5627 29.4893 40.614 29.7787 40.614 30.124C40.614 30.796 40.362 31.3047 39.858 31.65C39.3633 31.9953 38.654 32.168 37.73 32.168C37.086 32.168 36.582 32.112 36.218 32C35.854 31.8973 35.6067 31.818 35.476 31.762L35.714 30.642C35.8633 30.698 36.1013 30.782 36.428 30.894C36.7547 31.006 37.1887 31.062 37.73 31.062ZM43.9781 31.062C44.5101 31.062 44.9021 30.992 45.1541 30.852C45.4154 30.712 45.5461 30.488 45.5461 30.18C45.5461 29.8627 45.4201 29.6107 45.1681 29.424C44.9161 29.2373 44.5007 29.0273 43.9221 28.794C43.6421 28.682 43.3714 28.57 43.1101 28.458C42.8581 28.3367 42.6387 28.1967 42.4521 28.038C42.2654 27.8793 42.1161 27.688 42.0041 27.464C41.8921 27.24 41.8361 26.9647 41.8361 26.638C41.8361 25.994 42.0741 25.4853 42.5501 25.112C43.0261 24.7293 43.6747 24.538 44.4961 24.538C44.7014 24.538 44.9067 24.552 45.1121 24.58C45.3174 24.5987 45.5087 24.6267 45.6861 24.664C45.8634 24.692 46.0174 24.7247 46.1481 24.762C46.2881 24.7993 46.3954 24.832 46.4701 24.86L46.2321 25.98C46.0921 25.9053 45.8727 25.8307 45.5741 25.756C45.2754 25.672 44.9161 25.63 44.4961 25.63C44.1321 25.63 43.8147 25.7047 43.5441 25.854C43.2734 25.994 43.1381 26.218 43.1381 26.526C43.1381 26.6847 43.1661 26.8247 43.2221 26.946C43.2874 27.0673 43.3807 27.1793 43.5021 27.282C43.6327 27.3753 43.7914 27.464 43.9781 27.548C44.1647 27.632 44.3887 27.7207 44.6501 27.814C44.9954 27.9447 45.3034 28.0753 45.5741 28.206C45.8447 28.3273 46.0734 28.472 46.2601 28.64C46.4561 28.808 46.6054 29.0133 46.7081 29.256C46.8107 29.4893 46.8621 29.7787 46.8621 30.124C46.8621 30.796 46.6101 31.3047 46.1061 31.65C45.6114 31.9953 44.9021 32.168 43.9781 32.168C43.3341 32.168 42.8301 32.112 42.4661 32C42.1021 31.8973 41.8547 31.818 41.7241 31.762L41.9621 30.642C42.1114 30.698 42.3494 30.782 42.6761 30.894C43.0027 31.006 43.4367 31.062 43.9781 31.062ZM54.9581 28.36C54.9581 28.9387 54.8741 29.4613 54.7061 29.928C54.5381 30.3947 54.3001 30.796 53.9921 31.132C53.6934 31.468 53.3341 31.7293 52.9141 31.916C52.4941 32.0933 52.0368 32.182 51.5421 32.182C51.0474 32.182 50.5901 32.0933 50.1701 31.916C49.7501 31.7293 49.3861 31.468 49.0781 31.132C48.7794 30.796 48.5461 30.3947 48.3781 29.928C48.2101 29.4613 48.1261 28.9387 48.1261 28.36C48.1261 27.7907 48.2101 27.2727 48.3781 26.806C48.5461 26.33 48.7794 25.924 49.0781 25.588C49.3861 25.252 49.7501 24.9953 50.1701 24.818C50.5901 24.6313 51.0474 24.538 51.5421 24.538C52.0368 24.538 52.4941 24.6313 52.9141 24.818C53.3341 24.9953 53.6934 25.252 53.9921 25.588C54.3001 25.924 54.5381 26.33 54.7061 26.806C54.8741 27.2727 54.9581 27.7907 54.9581 28.36ZM53.6001 28.36C53.6001 27.5387 53.4134 26.89 53.0401 26.414C52.6761 25.9287 52.1768 25.686 51.5421 25.686C50.9074 25.686 50.4034 25.9287 50.0301 26.414C49.6661 26.89 49.4841 27.5387 49.4841 28.36C49.4841 29.1813 49.6661 29.8347 50.0301 30.32C50.4034 30.796 50.9074 31.034 51.5421 31.034C52.1768 31.034 52.6761 30.796 53.0401 30.32C53.4134 29.8347 53.6001 29.1813 53.6001 28.36ZM56.7899 24.93C57.0886 24.8553 57.4853 24.776 57.9799 24.692C58.4746 24.608 59.0439 24.566 59.6879 24.566C60.2666 24.566 60.7473 24.65 61.1299 24.818C61.5126 24.9767 61.8159 25.2053 62.0399 25.504C62.2733 25.7933 62.4366 26.1433 62.5299 26.554C62.6233 26.9647 62.6699 27.4173 62.6699 27.912V32H61.3679V28.192C61.3679 27.744 61.3353 27.3613 61.2699 27.044C61.2139 26.7267 61.1159 26.47 60.9759 26.274C60.8359 26.078 60.6493 25.938 60.4159 25.854C60.1826 25.7607 59.8933 25.714 59.5479 25.714C59.4079 25.714 59.2633 25.7187 59.1139 25.728C58.9646 25.7373 58.8199 25.7513 58.6799 25.77C58.5493 25.7793 58.4279 25.7933 58.3159 25.812C58.2133 25.8307 58.1386 25.8447 58.0919 25.854V32H56.7899V24.93ZM68.2512 24.3C68.7832 24.0947 69.3012 23.8333 69.8052 23.516C70.3092 23.1893 70.7712 22.7833 71.1912 22.298H72.1152V32H70.8132V24.104C70.7012 24.2067 70.5612 24.314 70.3932 24.426C70.2346 24.538 70.0572 24.6453 69.8612 24.748C69.6746 24.8507 69.4739 24.9487 69.2592 25.042C69.0539 25.1353 68.8532 25.2147 68.6572 25.28L68.2512 24.3Z",fill:"#AFB4B8"}),s.createElement("path",{d:"M26.32 72.28C26.92 71.28 27.5067 70.2667 28.08 69.24C28.6533 68.2133 29.1733 67.18 29.64 66.14H32.44C31.6933 67.5533 30.9133 68.96 30.1 70.36C29.3 71.7467 28.44 73.1467 27.52 74.56V80H25V74.6C24.08 73.1733 23.2133 71.76 22.4 70.36C21.5867 68.96 20.8067 67.5533 20.06 66.14H23.02C23.4867 67.18 24 68.2133 24.56 69.24C25.12 70.2667 25.7067 71.28 26.32 72.28ZM42.4844 74.76C42.4844 75.5867 42.3644 76.34 42.1244 77.02C41.8844 77.7 41.5444 78.28 41.1044 78.76C40.6644 79.24 40.131 79.6133 39.5044 79.88C38.891 80.1467 38.211 80.28 37.4644 80.28C36.7177 80.28 36.0377 80.1467 35.4244 79.88C34.811 79.6133 34.2844 79.24 33.8444 78.76C33.4044 78.28 33.0577 77.7 32.8044 77.02C32.5644 76.34 32.4444 75.5867 32.4444 74.76C32.4444 73.9333 32.5644 73.1867 32.8044 72.52C33.0577 71.84 33.4044 71.26 33.8444 70.78C34.2977 70.3 34.831 69.9333 35.4444 69.68C36.0577 69.4133 36.731 69.28 37.4644 69.28C38.1977 69.28 38.871 69.4133 39.4844 69.68C40.111 69.9333 40.6444 70.3 41.0844 70.78C41.5244 71.26 41.8644 71.84 42.1044 72.52C42.3577 73.1867 42.4844 73.9333 42.4844 74.76ZM40.0044 74.76C40.0044 73.72 39.7777 72.9 39.3244 72.3C38.8844 71.6867 38.2644 71.38 37.4644 71.38C36.6644 71.38 36.0377 71.6867 35.5844 72.3C35.1444 72.9 34.9244 73.72 34.9244 74.76C34.9244 75.8133 35.1444 76.6467 35.5844 77.26C36.0377 77.8733 36.6644 78.18 37.4644 78.18C38.2644 78.18 38.8844 77.8733 39.3244 77.26C39.7777 76.6467 40.0044 75.8133 40.0044 74.76ZM53.5575 79.68C53.0908 79.8 52.4842 79.92 51.7375 80.04C50.9908 80.1733 50.1708 80.24 49.2775 80.24C48.4375 80.24 47.7308 80.12 47.1575 79.88C46.5975 79.64 46.1442 79.3067 45.7975 78.88C45.4642 78.4533 45.2242 77.9467 45.0775 77.36C44.9308 76.76 44.8575 76.1067 44.8575 75.4V69.54H47.2775V75.02C47.2775 76.14 47.4375 76.94 47.7575 77.42C48.0908 77.9 48.6642 78.14 49.4775 78.14C49.7708 78.14 50.0775 78.1267 50.3975 78.1C50.7308 78.0733 50.9775 78.04 51.1375 78V69.54H53.5575V79.68ZM62.5977 71.72C62.3977 71.6533 62.1177 71.5867 61.7577 71.52C61.411 71.44 61.0043 71.4 60.5377 71.4C60.271 71.4 59.9843 71.4267 59.6777 71.48C59.3843 71.5333 59.1777 71.58 59.0577 71.62V80H56.6377V70.04C57.1043 69.8667 57.6843 69.7067 58.3777 69.56C59.0843 69.4 59.8643 69.32 60.7177 69.32C60.8777 69.32 61.0643 69.3333 61.2777 69.36C61.491 69.3733 61.7043 69.4 61.9177 69.44C62.131 69.4667 62.3377 69.5067 62.5377 69.56C62.7377 69.6 62.8977 69.64 63.0177 69.68L62.5977 71.72ZM79.872 80H77.452V69.54H79.872V80ZM80.152 66.48C80.152 66.9333 80.0054 67.2933 79.712 67.56C79.4187 67.8267 79.072 67.96 78.672 67.96C78.2587 67.96 77.9054 67.8267 77.612 67.56C77.3187 67.2933 77.172 66.9333 77.172 66.48C77.172 66.0133 77.3187 65.6467 77.612 65.38C77.9054 65.1133 78.2587 64.98 78.672 64.98C79.072 64.98 79.4187 65.1133 79.712 65.38C80.0054 65.6467 80.152 66.0133 80.152 66.48ZM73.672 64.48C74.1787 64.48 74.6054 64.52 74.952 64.6C75.312 64.68 75.592 64.76 75.792 64.84L75.412 66.8C75.2254 66.7333 74.9987 66.6733 74.732 66.62C74.4787 66.5667 74.1987 66.54 73.892 66.54C73.092 66.54 72.5387 66.7533 72.232 67.18C71.9387 67.6067 71.792 68.16 71.792 68.84V69.54H75.632V71.56H71.792V80H69.372V68.8C69.372 67.44 69.7254 66.38 70.432 65.62C71.1387 64.86 72.2187 64.48 73.672 64.48ZM88.9258 71.72C88.7258 71.6533 88.4458 71.5867 88.0858 71.52C87.7391 71.44 87.3324 71.4 86.8658 71.4C86.5991 71.4 86.3124 71.4267 86.0058 71.48C85.7124 71.5333 85.5058 71.58 85.3858 71.62V80H82.9658V70.04C83.4324 69.8667 84.0124 69.7067 84.7058 69.56C85.4124 69.4 86.1924 69.32 87.0458 69.32C87.2058 69.32 87.3924 69.3333 87.6058 69.36C87.8191 69.3733 88.0324 69.4 88.2458 69.44C88.4591 69.4667 88.6658 69.5067 88.8658 69.56C89.0658 69.6 89.2258 69.64 89.3458 69.68L88.9258 71.72ZM93.6522 78.26C94.2922 78.26 94.7589 78.1867 95.0522 78.04C95.3455 77.88 95.4922 77.6133 95.4922 77.24C95.4922 76.8933 95.3322 76.6067 95.0122 76.38C94.7055 76.1533 94.1922 75.9067 93.4722 75.64C93.0322 75.48 92.6255 75.3133 92.2522 75.14C91.8922 74.9533 91.5789 74.74 91.3122 74.5C91.0455 74.26 90.8322 73.9733 90.6722 73.64C90.5255 73.2933 90.4522 72.8733 90.4522 72.38C90.4522 71.42 90.8055 70.6667 91.5122 70.12C92.2189 69.56 93.1789 69.28 94.3922 69.28C95.0055 69.28 95.5922 69.34 96.1522 69.46C96.7122 69.5667 97.1322 69.6733 97.4122 69.78L96.9722 71.74C96.7055 71.62 96.3655 71.5133 95.9522 71.42C95.5389 71.3133 95.0589 71.26 94.5122 71.26C94.0189 71.26 93.6189 71.3467 93.3122 71.52C93.0055 71.68 92.8522 71.9333 92.8522 72.28C92.8522 72.4533 92.8789 72.6067 92.9322 72.74C92.9989 72.8733 93.1055 73 93.2522 73.12C93.3989 73.2267 93.5922 73.34 93.8322 73.46C94.0722 73.5667 94.3655 73.68 94.7122 73.8C95.2855 74.0133 95.7722 74.2267 96.1722 74.44C96.5722 74.64 96.8989 74.8733 97.1522 75.14C97.4189 75.3933 97.6122 75.6867 97.7322 76.02C97.8522 76.3533 97.9122 76.7533 97.9122 77.22C97.9122 78.22 97.5389 78.98 96.7922 79.5C96.0589 80.0067 95.0055 80.26 93.6322 80.26C92.7122 80.26 91.9722 80.18 91.4122 80.02C90.8522 79.8733 90.4589 79.7533 90.2322 79.66L90.6522 77.64C91.0122 77.7867 91.4389 77.9267 91.9322 78.06C92.4389 78.1933 93.0122 78.26 93.6522 78.26ZM100.053 66.78L102.473 66.38V69.54H106.193V71.56H102.473V75.82C102.473 76.66 102.606 77.26 102.873 77.62C103.139 77.98 103.593 78.16 104.233 78.16C104.673 78.16 105.059 78.1133 105.393 78.02C105.739 77.9267 106.013 77.84 106.213 77.76L106.613 79.68C106.333 79.8 105.966 79.92 105.513 80.04C105.059 80.1733 104.526 80.24 103.913 80.24C103.166 80.24 102.539 80.14 102.033 79.94C101.539 79.74 101.146 79.4533 100.853 79.08C100.559 78.6933 100.353 78.2333 100.233 77.7C100.113 77.1533 100.053 76.5333 100.053 75.84V66.78ZM28.48 100.82C28.48 99.74 28.2333 98.9 27.74 98.3C27.26 97.7 26.48 97.4 25.4 97.4C25.1733 97.4 24.9333 97.4133 24.68 97.44C24.44 97.4533 24.2 97.4933 23.96 97.56V103.54C24.1733 103.687 24.4533 103.827 24.8 103.96C25.16 104.08 25.54 104.14 25.94 104.14C26.82 104.14 27.46 103.84 27.86 103.24C28.2733 102.64 28.48 101.833 28.48 100.82ZM30.96 100.78C30.96 101.58 30.8533 102.313 30.64 102.98C30.44 103.647 30.1467 104.22 29.76 104.7C29.3733 105.18 28.8867 105.553 28.3 105.82C27.7267 106.087 27.0733 106.22 26.34 106.22C25.8467 106.22 25.3933 106.16 24.98 106.04C24.5667 105.92 24.2267 105.787 23.96 105.64V109.7H21.54V95.88C22.0333 95.7467 22.64 95.62 23.36 95.5C24.08 95.38 24.84 95.32 25.64 95.32C26.4667 95.32 27.2067 95.4467 27.86 95.7C28.5133 95.9533 29.0667 96.32 29.52 96.8C29.9867 97.2667 30.34 97.84 30.58 98.52C30.8333 99.1867 30.96 99.94 30.96 100.78ZM39.4141 97.72C39.2141 97.6533 38.9341 97.5867 38.5741 97.52C38.2274 97.44 37.8207 97.4 37.3541 97.4C37.0874 97.4 36.8007 97.4267 36.4941 97.48C36.2007 97.5333 35.9941 97.58 35.8741 97.62V106H33.4541V96.04C33.9207 95.8667 34.5007 95.7067 35.1941 95.56C35.9007 95.4 36.6807 95.32 37.5341 95.32C37.6941 95.32 37.8807 95.3333 38.0941 95.36C38.3074 95.3733 38.5207 95.4 38.7341 95.44C38.9474 95.4667 39.1541 95.5067 39.3541 95.56C39.5541 95.6 39.7141 95.64 39.8341 95.68L39.4141 97.72ZM50.9805 100.76C50.9805 101.587 50.8605 102.34 50.6205 103.02C50.3805 103.7 50.0405 104.28 49.6005 104.76C49.1605 105.24 48.6271 105.613 48.0005 105.88C47.3871 106.147 46.7071 106.28 45.9605 106.28C45.2138 106.28 44.5338 106.147 43.9205 105.88C43.3071 105.613 42.7805 105.24 42.3405 104.76C41.9005 104.28 41.5538 103.7 41.3005 103.02C41.0605 102.34 40.9405 101.587 40.9405 100.76C40.9405 99.9333 41.0605 99.1867 41.3005 98.52C41.5538 97.84 41.9005 97.26 42.3405 96.78C42.7938 96.3 43.3271 95.9333 43.9405 95.68C44.5538 95.4133 45.2271 95.28 45.9605 95.28C46.6938 95.28 47.3671 95.4133 47.9805 95.68C48.6071 95.9333 49.1405 96.3 49.5805 96.78C50.0205 97.26 50.3605 97.84 50.6005 98.52C50.8538 99.1867 50.9805 99.9333 50.9805 100.76ZM48.5005 100.76C48.5005 99.72 48.2738 98.9 47.8205 98.3C47.3805 97.6867 46.7605 97.38 45.9605 97.38C45.1605 97.38 44.5338 97.6867 44.0805 98.3C43.6405 98.9 43.4205 99.72 43.4205 100.76C43.4205 101.813 43.6405 102.647 44.0805 103.26C44.5338 103.873 45.1605 104.18 45.9605 104.18C46.7605 104.18 47.3805 103.873 47.8205 103.26C48.2738 102.647 48.5005 101.813 48.5005 100.76ZM55.3736 100.5C55.3736 101.527 55.5936 102.28 56.0336 102.76C56.4869 103.227 57.0669 103.46 57.7736 103.46C58.1603 103.46 58.5203 103.407 58.8536 103.3C59.2003 103.193 59.4803 103.067 59.6936 102.92V97.5C59.5203 97.46 59.3069 97.4267 59.0536 97.4C58.8003 97.36 58.4803 97.34 58.0936 97.34C57.2136 97.34 56.5403 97.6333 56.0736 98.22C55.6069 98.7933 55.3736 99.5533 55.3736 100.5ZM62.1136 104.94C62.1136 106.607 61.6869 107.827 60.8336 108.6C59.9936 109.373 58.7003 109.76 56.9536 109.76C56.3136 109.76 55.6869 109.707 55.0736 109.6C54.4736 109.493 53.9269 109.353 53.4336 109.18L53.8736 107.12C54.2869 107.293 54.7536 107.433 55.2736 107.54C55.8069 107.647 56.3803 107.7 56.9936 107.7C57.9669 107.7 58.6603 107.5 59.0736 107.1C59.4869 106.7 59.6936 106.107 59.6936 105.32V104.92C59.4536 105.04 59.1336 105.16 58.7336 105.28C58.3469 105.4 57.9003 105.46 57.3936 105.46C56.7269 105.46 56.1136 105.353 55.5536 105.14C55.0069 104.927 54.5336 104.613 54.1336 104.2C53.7469 103.787 53.4403 103.273 53.2136 102.66C53.0003 102.033 52.8936 101.313 52.8936 100.5C52.8936 99.74 53.0069 99.04 53.2336 98.4C53.4736 97.76 53.8136 97.2133 54.2536 96.76C54.7069 96.3067 55.2536 95.9533 55.8936 95.7C56.5336 95.4467 57.2603 95.32 58.0736 95.32C58.8603 95.32 59.6069 95.38 60.3136 95.5C61.0203 95.62 61.6203 95.7467 62.1136 95.88V104.94ZM71.1523 97.72C70.9523 97.6533 70.6723 97.5867 70.3123 97.52C69.9657 97.44 69.559 97.4 69.0923 97.4C68.8257 97.4 68.539 97.4267 68.2323 97.48C67.939 97.5333 67.7323 97.58 67.6123 97.62V106H65.1923V96.04C65.659 95.8667 66.239 95.7067 66.9323 95.56C67.639 95.4 68.419 95.32 69.2723 95.32C69.4323 95.32 69.619 95.3333 69.8323 95.36C70.0457 95.3733 70.259 95.4 70.4723 95.44C70.6857 95.4667 70.8923 95.5067 71.0923 95.56C71.2923 95.6 71.4523 95.64 71.5723 95.68L71.1523 97.72ZM76.9388 104.3C77.6854 104.3 78.2521 104.26 78.6388 104.18V101.5C78.5054 101.46 78.3121 101.42 78.0588 101.38C77.8054 101.34 77.5254 101.32 77.2188 101.32C76.9521 101.32 76.6788 101.34 76.3988 101.38C76.1321 101.42 75.8854 101.493 75.6588 101.6C75.4454 101.707 75.2721 101.86 75.1388 102.06C75.0054 102.247 74.9388 102.487 74.9388 102.78C74.9388 103.353 75.1188 103.753 75.4788 103.98C75.8388 104.193 76.3254 104.3 76.9388 104.3ZM76.7388 95.28C77.5388 95.28 78.2121 95.38 78.7588 95.58C79.3054 95.78 79.7388 96.06 80.0588 96.42C80.3921 96.78 80.6254 97.22 80.7588 97.74C80.9054 98.2467 80.9788 98.8067 80.9788 99.42V105.76C80.6054 105.84 80.0388 105.933 79.2788 106.04C78.5321 106.16 77.6854 106.22 76.7388 106.22C76.1121 106.22 75.5388 106.16 75.0188 106.04C74.4988 105.92 74.0521 105.727 73.6788 105.46C73.3188 105.193 73.0321 104.847 72.8188 104.42C72.6188 103.993 72.5188 103.467 72.5188 102.84C72.5188 102.24 72.6321 101.733 72.8588 101.32C73.0988 100.907 73.4188 100.573 73.8188 100.32C74.2188 100.053 74.6788 99.8667 75.1988 99.76C75.7321 99.64 76.2854 99.58 76.8587 99.58C77.1254 99.58 77.4054 99.6 77.6988 99.64C77.9921 99.6667 78.3054 99.72 78.6388 99.8V99.4C78.6388 99.12 78.6054 98.8533 78.5388 98.6C78.4721 98.3467 78.3521 98.1267 78.1788 97.94C78.0188 97.74 77.7988 97.5867 77.5188 97.48C77.2521 97.3733 76.9121 97.32 76.4988 97.32C75.9388 97.32 75.4254 97.36 74.9588 97.44C74.4921 97.52 74.1121 97.6133 73.8188 97.72L73.5188 95.76C73.8254 95.6533 74.2721 95.5467 74.8588 95.44C75.4454 95.3333 76.0721 95.28 76.7388 95.28ZM89.9023 100.5C89.9023 99.4067 89.7623 98.62 89.4823 98.14C89.2157 97.6467 88.709 97.4 87.9623 97.4C87.6957 97.4 87.4023 97.42 87.0823 97.46C86.7623 97.5 86.5223 97.5333 86.3623 97.56V106H83.9423V95.88C84.409 95.7467 85.0157 95.62 85.7623 95.5C86.5223 95.38 87.3223 95.32 88.1623 95.32C88.8823 95.32 89.469 95.4133 89.9223 95.6C90.389 95.7867 90.7757 96.0333 91.0823 96.34C91.229 96.2333 91.4157 96.12 91.6423 96C91.869 95.88 92.1223 95.7733 92.4023 95.68C92.6823 95.5733 92.9757 95.4867 93.2823 95.42C93.6023 95.3533 93.9223 95.32 94.2423 95.32C95.0557 95.32 95.7223 95.44 96.2423 95.68C96.7757 95.9067 97.189 96.2333 97.4823 96.66C97.789 97.0733 97.9957 97.58 98.1023 98.18C98.2223 98.7667 98.2823 99.4133 98.2823 100.12V106H95.8623V100.5C95.8623 99.4067 95.729 98.62 95.4623 98.14C95.1957 97.6467 94.6823 97.4 93.9223 97.4C93.5357 97.4 93.169 97.4667 92.8223 97.6C92.4757 97.72 92.2157 97.84 92.0423 97.96C92.149 98.2933 92.2223 98.6467 92.2623 99.02C92.3023 99.3933 92.3223 99.7933 92.3223 100.22V106H89.9023V100.5Z",fill:"#AFB4B8"})),s.createElement("g",{filter:"url(#filter1_b_55867_57048)"},s.createElement("path",{d:"M141.084 76.0481C141.084 88.9843 134.87 96.125 116 96.125C97.1305 96.125 90.917 88.9843 90.917 76.0481C90.917 56.4196 97.1305 52.625 116 52.625C134.87 52.625 141.084 56.4196 141.084 76.0481Z",fill:"#AFB4B8",fillOpacity:.15}),s.createElement("path",{d:"M141.084 76.0481C141.084 88.9843 134.87 96.125 116 96.125C97.1305 96.125 90.917 88.9843 90.917 76.0481C90.917 56.4196 97.1305 52.625 116 52.625C134.87 52.625 141.084 56.4196 141.084 76.0481Z",stroke:"#F14F63",strokeWidth:3.6,strokeLinecap:"round",strokeLinejoin:"round"})),s.createElement("path",{d:"M116 63.5V70.75",stroke:"#F14F63",strokeWidth:3.6,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M101.667 52.625V45.375C101.667 36.3125 108.834 30.875 116 30.875C123.167 30.875 130.334 36.3125 130.334 45.375V52.625",stroke:"#F14F63",strokeWidth:3.6,strokeLinejoin:"round"}),s.createElement("defs",null,s.createElement("filter",{id:"filter0_f_55867_57048",x:16,y:16,width:200,height:100,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),s.createElement("feGaussianBlur",{stdDeviation:2,result:"effect1_foregroundBlur_55867_57048"})),s.createElement("filter",{id:"filter1_b_55867_57048",x:77.1172,y:38.825,width:77.7666,height:71.1001,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:6}),s.createElement("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_55867_57048"}),s.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_55867_57048",result:"shape"})),s.createElement("linearGradient",{id:"paint0_linear_55867_57048",x1:23.6296,y1:151.979,x2:272.547,y2:45.4454,gradientUnits:"userSpaceOnUse"},s.createElement("stop",{stopColor:"#2A2C3B"}),s.createElement("stop",{offset:1,stopColor:"#20212D"})))),D1=s.forwardRef(Z1),U1=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:233,height:133,viewBox:"0 0 233 133",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("g",{filter:"url(#filter0_b_55867_57033)"},s.createElement("rect",{x:.411133,y:.124023,width:232,height:132,rx:5,fill:"#DBE2FF"})),s.createElement("g",{filter:"url(#filter1_f_55867_57033)"},s.createElement("path",{opacity:.7,d:"M27.042 30.824V32H21.204V22.298H22.562V30.824H27.042ZM27.8097 28.374C27.8097 27.73 27.903 27.17 28.0897 26.694C28.2764 26.2087 28.5237 25.8073 28.8317 25.49C29.1397 25.1727 29.4944 24.9347 29.8957 24.776C30.297 24.6173 30.7077 24.538 31.1277 24.538C32.1077 24.538 32.859 24.846 33.3817 25.462C33.9044 26.0687 34.1657 26.9973 34.1657 28.248C34.1657 28.304 34.1657 28.3787 34.1657 28.472C34.1657 28.556 34.161 28.6353 34.1517 28.71H29.1677C29.2237 29.466 29.443 30.04 29.8257 30.432C30.2084 30.824 30.8057 31.02 31.6177 31.02C32.075 31.02 32.4577 30.9827 32.7657 30.908C33.083 30.824 33.321 30.7447 33.4797 30.67L33.6617 31.762C33.503 31.846 33.223 31.9347 32.8217 32.028C32.4297 32.1213 31.9817 32.168 31.4777 32.168C30.843 32.168 30.2924 32.0747 29.8257 31.888C29.3684 31.692 28.9904 31.426 28.6917 31.09C28.393 30.754 28.169 30.3573 28.0197 29.9C27.8797 29.4333 27.8097 28.9247 27.8097 28.374ZM32.8077 27.66C32.817 27.072 32.6677 26.5913 32.3597 26.218C32.061 25.8353 31.6457 25.644 31.1137 25.644C30.815 25.644 30.549 25.7047 30.3157 25.826C30.0917 25.938 29.9004 26.0873 29.7417 26.274C29.583 26.4607 29.457 26.6753 29.3637 26.918C29.2797 27.1607 29.2237 27.408 29.1957 27.66H32.8077ZM37.73 31.062C38.262 31.062 38.654 30.992 38.906 30.852C39.1673 30.712 39.298 30.488 39.298 30.18C39.298 29.8627 39.172 29.6107 38.92 29.424C38.668 29.2373 38.2527 29.0273 37.674 28.794C37.394 28.682 37.1233 28.57 36.862 28.458C36.61 28.3367 36.3907 28.1967 36.204 28.038C36.0173 27.8793 35.868 27.688 35.756 27.464C35.644 27.24 35.588 26.9647 35.588 26.638C35.588 25.994 35.826 25.4853 36.302 25.112C36.778 24.7293 37.4267 24.538 38.248 24.538C38.4533 24.538 38.6587 24.552 38.864 24.58C39.0693 24.5987 39.2607 24.6267 39.438 24.664C39.6153 24.692 39.7693 24.7247 39.9 24.762C40.04 24.7993 40.1473 24.832 40.222 24.86L39.984 25.98C39.844 25.9053 39.6247 25.8307 39.326 25.756C39.0273 25.672 38.668 25.63 38.248 25.63C37.884 25.63 37.5667 25.7047 37.296 25.854C37.0253 25.994 36.89 26.218 36.89 26.526C36.89 26.6847 36.918 26.8247 36.974 26.946C37.0393 27.0673 37.1327 27.1793 37.254 27.282C37.3847 27.3753 37.5433 27.464 37.73 27.548C37.9167 27.632 38.1407 27.7207 38.402 27.814C38.7473 27.9447 39.0553 28.0753 39.326 28.206C39.5967 28.3273 39.8253 28.472 40.012 28.64C40.208 28.808 40.3573 29.0133 40.46 29.256C40.5627 29.4893 40.614 29.7787 40.614 30.124C40.614 30.796 40.362 31.3047 39.858 31.65C39.3633 31.9953 38.654 32.168 37.73 32.168C37.086 32.168 36.582 32.112 36.218 32C35.854 31.8973 35.6067 31.818 35.476 31.762L35.714 30.642C35.8633 30.698 36.1013 30.782 36.428 30.894C36.7547 31.006 37.1887 31.062 37.73 31.062ZM43.9781 31.062C44.5101 31.062 44.9021 30.992 45.1541 30.852C45.4154 30.712 45.5461 30.488 45.5461 30.18C45.5461 29.8627 45.4201 29.6107 45.1681 29.424C44.9161 29.2373 44.5007 29.0273 43.9221 28.794C43.6421 28.682 43.3714 28.57 43.1101 28.458C42.8581 28.3367 42.6387 28.1967 42.4521 28.038C42.2654 27.8793 42.1161 27.688 42.0041 27.464C41.8921 27.24 41.8361 26.9647 41.8361 26.638C41.8361 25.994 42.0741 25.4853 42.5501 25.112C43.0261 24.7293 43.6747 24.538 44.4961 24.538C44.7014 24.538 44.9067 24.552 45.1121 24.58C45.3174 24.5987 45.5087 24.6267 45.6861 24.664C45.8634 24.692 46.0174 24.7247 46.1481 24.762C46.2881 24.7993 46.3954 24.832 46.4701 24.86L46.2321 25.98C46.0921 25.9053 45.8727 25.8307 45.5741 25.756C45.2754 25.672 44.9161 25.63 44.4961 25.63C44.1321 25.63 43.8147 25.7047 43.5441 25.854C43.2734 25.994 43.1381 26.218 43.1381 26.526C43.1381 26.6847 43.1661 26.8247 43.2221 26.946C43.2874 27.0673 43.3807 27.1793 43.5021 27.282C43.6327 27.3753 43.7914 27.464 43.9781 27.548C44.1647 27.632 44.3887 27.7207 44.6501 27.814C44.9954 27.9447 45.3034 28.0753 45.5741 28.206C45.8447 28.3273 46.0734 28.472 46.2601 28.64C46.4561 28.808 46.6054 29.0133 46.7081 29.256C46.8107 29.4893 46.8621 29.7787 46.8621 30.124C46.8621 30.796 46.6101 31.3047 46.1061 31.65C45.6114 31.9953 44.9021 32.168 43.9781 32.168C43.3341 32.168 42.8301 32.112 42.4661 32C42.1021 31.8973 41.8547 31.818 41.7241 31.762L41.9621 30.642C42.1114 30.698 42.3494 30.782 42.6761 30.894C43.0027 31.006 43.4367 31.062 43.9781 31.062ZM54.9581 28.36C54.9581 28.9387 54.8741 29.4613 54.7061 29.928C54.5381 30.3947 54.3001 30.796 53.9921 31.132C53.6934 31.468 53.3341 31.7293 52.9141 31.916C52.4941 32.0933 52.0368 32.182 51.5421 32.182C51.0474 32.182 50.5901 32.0933 50.1701 31.916C49.7501 31.7293 49.3861 31.468 49.0781 31.132C48.7794 30.796 48.5461 30.3947 48.3781 29.928C48.2101 29.4613 48.1261 28.9387 48.1261 28.36C48.1261 27.7907 48.2101 27.2727 48.3781 26.806C48.5461 26.33 48.7794 25.924 49.0781 25.588C49.3861 25.252 49.7501 24.9953 50.1701 24.818C50.5901 24.6313 51.0474 24.538 51.5421 24.538C52.0368 24.538 52.4941 24.6313 52.9141 24.818C53.3341 24.9953 53.6934 25.252 53.9921 25.588C54.3001 25.924 54.5381 26.33 54.7061 26.806C54.8741 27.2727 54.9581 27.7907 54.9581 28.36ZM53.6001 28.36C53.6001 27.5387 53.4134 26.89 53.0401 26.414C52.6761 25.9287 52.1768 25.686 51.5421 25.686C50.9074 25.686 50.4034 25.9287 50.0301 26.414C49.6661 26.89 49.4841 27.5387 49.4841 28.36C49.4841 29.1813 49.6661 29.8347 50.0301 30.32C50.4034 30.796 50.9074 31.034 51.5421 31.034C52.1768 31.034 52.6761 30.796 53.0401 30.32C53.4134 29.8347 53.6001 29.1813 53.6001 28.36ZM56.7899 24.93C57.0886 24.8553 57.4853 24.776 57.9799 24.692C58.4746 24.608 59.0439 24.566 59.6879 24.566C60.2666 24.566 60.7473 24.65 61.1299 24.818C61.5126 24.9767 61.8159 25.2053 62.0399 25.504C62.2733 25.7933 62.4366 26.1433 62.5299 26.554C62.6233 26.9647 62.6699 27.4173 62.6699 27.912V32H61.3679V28.192C61.3679 27.744 61.3353 27.3613 61.2699 27.044C61.2139 26.7267 61.1159 26.47 60.9759 26.274C60.8359 26.078 60.6493 25.938 60.4159 25.854C60.1826 25.7607 59.8933 25.714 59.5479 25.714C59.4079 25.714 59.2633 25.7187 59.1139 25.728C58.9646 25.7373 58.8199 25.7513 58.6799 25.77C58.5493 25.7793 58.4279 25.7933 58.3159 25.812C58.2133 25.8307 58.1386 25.8447 58.0919 25.854V32H56.7899V24.93ZM68.2512 24.3C68.7832 24.0947 69.3012 23.8333 69.8052 23.516C70.3092 23.1893 70.7712 22.7833 71.1912 22.298H72.1152V32H70.8132V24.104C70.7012 24.2067 70.5612 24.314 70.3932 24.426C70.2346 24.538 70.0572 24.6453 69.8612 24.748C69.6746 24.8507 69.4739 24.9487 69.2592 25.042C69.0539 25.1353 68.8532 25.2147 68.6572 25.28L68.2512 24.3Z",fill:"#AFB4B8"}),s.createElement("path",{d:"M26.32 72.28C26.92 71.28 27.5067 70.2667 28.08 69.24C28.6533 68.2133 29.1733 67.18 29.64 66.14H32.44C31.6933 67.5533 30.9133 68.96 30.1 70.36C29.3 71.7467 28.44 73.1467 27.52 74.56V80H25V74.6C24.08 73.1733 23.2133 71.76 22.4 70.36C21.5867 68.96 20.8067 67.5533 20.06 66.14H23.02C23.4867 67.18 24 68.2133 24.56 69.24C25.12 70.2667 25.7067 71.28 26.32 72.28ZM42.4844 74.76C42.4844 75.5867 42.3644 76.34 42.1244 77.02C41.8844 77.7 41.5444 78.28 41.1044 78.76C40.6644 79.24 40.131 79.6133 39.5044 79.88C38.891 80.1467 38.211 80.28 37.4644 80.28C36.7177 80.28 36.0377 80.1467 35.4244 79.88C34.811 79.6133 34.2844 79.24 33.8444 78.76C33.4044 78.28 33.0577 77.7 32.8044 77.02C32.5644 76.34 32.4444 75.5867 32.4444 74.76C32.4444 73.9333 32.5644 73.1867 32.8044 72.52C33.0577 71.84 33.4044 71.26 33.8444 70.78C34.2977 70.3 34.831 69.9333 35.4444 69.68C36.0577 69.4133 36.731 69.28 37.4644 69.28C38.1977 69.28 38.871 69.4133 39.4844 69.68C40.111 69.9333 40.6444 70.3 41.0844 70.78C41.5244 71.26 41.8644 71.84 42.1044 72.52C42.3577 73.1867 42.4844 73.9333 42.4844 74.76ZM40.0044 74.76C40.0044 73.72 39.7777 72.9 39.3244 72.3C38.8844 71.6867 38.2644 71.38 37.4644 71.38C36.6644 71.38 36.0377 71.6867 35.5844 72.3C35.1444 72.9 34.9244 73.72 34.9244 74.76C34.9244 75.8133 35.1444 76.6467 35.5844 77.26C36.0377 77.8733 36.6644 78.18 37.4644 78.18C38.2644 78.18 38.8844 77.8733 39.3244 77.26C39.7777 76.6467 40.0044 75.8133 40.0044 74.76ZM53.5575 79.68C53.0908 79.8 52.4842 79.92 51.7375 80.04C50.9908 80.1733 50.1708 80.24 49.2775 80.24C48.4375 80.24 47.7308 80.12 47.1575 79.88C46.5975 79.64 46.1442 79.3067 45.7975 78.88C45.4642 78.4533 45.2242 77.9467 45.0775 77.36C44.9308 76.76 44.8575 76.1067 44.8575 75.4V69.54H47.2775V75.02C47.2775 76.14 47.4375 76.94 47.7575 77.42C48.0908 77.9 48.6642 78.14 49.4775 78.14C49.7708 78.14 50.0775 78.1267 50.3975 78.1C50.7308 78.0733 50.9775 78.04 51.1375 78V69.54H53.5575V79.68ZM62.5977 71.72C62.3977 71.6533 62.1177 71.5867 61.7577 71.52C61.411 71.44 61.0043 71.4 60.5377 71.4C60.271 71.4 59.9843 71.4267 59.6777 71.48C59.3843 71.5333 59.1777 71.58 59.0577 71.62V80H56.6377V70.04C57.1043 69.8667 57.6843 69.7067 58.3777 69.56C59.0843 69.4 59.8643 69.32 60.7177 69.32C60.8777 69.32 61.0643 69.3333 61.2777 69.36C61.491 69.3733 61.7043 69.4 61.9177 69.44C62.131 69.4667 62.3377 69.5067 62.5377 69.56C62.7377 69.6 62.8977 69.64 63.0177 69.68L62.5977 71.72ZM79.872 80H77.452V69.54H79.872V80ZM80.152 66.48C80.152 66.9333 80.0054 67.2933 79.712 67.56C79.4187 67.8267 79.072 67.96 78.672 67.96C78.2587 67.96 77.9054 67.8267 77.612 67.56C77.3187 67.2933 77.172 66.9333 77.172 66.48C77.172 66.0133 77.3187 65.6467 77.612 65.38C77.9054 65.1133 78.2587 64.98 78.672 64.98C79.072 64.98 79.4187 65.1133 79.712 65.38C80.0054 65.6467 80.152 66.0133 80.152 66.48ZM73.672 64.48C74.1787 64.48 74.6054 64.52 74.952 64.6C75.312 64.68 75.592 64.76 75.792 64.84L75.412 66.8C75.2254 66.7333 74.9987 66.6733 74.732 66.62C74.4787 66.5667 74.1987 66.54 73.892 66.54C73.092 66.54 72.5387 66.7533 72.232 67.18C71.9387 67.6067 71.792 68.16 71.792 68.84V69.54H75.632V71.56H71.792V80H69.372V68.8C69.372 67.44 69.7254 66.38 70.432 65.62C71.1387 64.86 72.2187 64.48 73.672 64.48ZM88.9258 71.72C88.7258 71.6533 88.4458 71.5867 88.0858 71.52C87.7391 71.44 87.3324 71.4 86.8658 71.4C86.5991 71.4 86.3124 71.4267 86.0058 71.48C85.7124 71.5333 85.5058 71.58 85.3858 71.62V80H82.9658V70.04C83.4324 69.8667 84.0124 69.7067 84.7058 69.56C85.4124 69.4 86.1924 69.32 87.0458 69.32C87.2058 69.32 87.3924 69.3333 87.6058 69.36C87.8191 69.3733 88.0324 69.4 88.2458 69.44C88.4591 69.4667 88.6658 69.5067 88.8658 69.56C89.0658 69.6 89.2258 69.64 89.3458 69.68L88.9258 71.72ZM93.6522 78.26C94.2922 78.26 94.7589 78.1867 95.0522 78.04C95.3455 77.88 95.4922 77.6133 95.4922 77.24C95.4922 76.8933 95.3322 76.6067 95.0122 76.38C94.7055 76.1533 94.1922 75.9067 93.4722 75.64C93.0322 75.48 92.6255 75.3133 92.2522 75.14C91.8922 74.9533 91.5789 74.74 91.3122 74.5C91.0455 74.26 90.8322 73.9733 90.6722 73.64C90.5255 73.2933 90.4522 72.8733 90.4522 72.38C90.4522 71.42 90.8055 70.6667 91.5122 70.12C92.2189 69.56 93.1789 69.28 94.3922 69.28C95.0055 69.28 95.5922 69.34 96.1522 69.46C96.7122 69.5667 97.1322 69.6733 97.4122 69.78L96.9722 71.74C96.7055 71.62 96.3655 71.5133 95.9522 71.42C95.5389 71.3133 95.0589 71.26 94.5122 71.26C94.0189 71.26 93.6189 71.3467 93.3122 71.52C93.0055 71.68 92.8522 71.9333 92.8522 72.28C92.8522 72.4533 92.8789 72.6067 92.9322 72.74C92.9989 72.8733 93.1055 73 93.2522 73.12C93.3989 73.2267 93.5922 73.34 93.8322 73.46C94.0722 73.5667 94.3655 73.68 94.7122 73.8C95.2855 74.0133 95.7722 74.2267 96.1722 74.44C96.5722 74.64 96.8989 74.8733 97.1522 75.14C97.4189 75.3933 97.6122 75.6867 97.7322 76.02C97.8522 76.3533 97.9122 76.7533 97.9122 77.22C97.9122 78.22 97.5389 78.98 96.7922 79.5C96.0589 80.0067 95.0055 80.26 93.6322 80.26C92.7122 80.26 91.9722 80.18 91.4122 80.02C90.8522 79.8733 90.4589 79.7533 90.2322 79.66L90.6522 77.64C91.0122 77.7867 91.4389 77.9267 91.9322 78.06C92.4389 78.1933 93.0122 78.26 93.6522 78.26ZM100.053 66.78L102.473 66.38V69.54H106.193V71.56H102.473V75.82C102.473 76.66 102.606 77.26 102.873 77.62C103.139 77.98 103.593 78.16 104.233 78.16C104.673 78.16 105.059 78.1133 105.393 78.02C105.739 77.9267 106.013 77.84 106.213 77.76L106.613 79.68C106.333 79.8 105.966 79.92 105.513 80.04C105.059 80.1733 104.526 80.24 103.913 80.24C103.166 80.24 102.539 80.14 102.033 79.94C101.539 79.74 101.146 79.4533 100.853 79.08C100.559 78.6933 100.353 78.2333 100.233 77.7C100.113 77.1533 100.053 76.5333 100.053 75.84V66.78ZM28.48 100.82C28.48 99.74 28.2333 98.9 27.74 98.3C27.26 97.7 26.48 97.4 25.4 97.4C25.1733 97.4 24.9333 97.4133 24.68 97.44C24.44 97.4533 24.2 97.4933 23.96 97.56V103.54C24.1733 103.687 24.4533 103.827 24.8 103.96C25.16 104.08 25.54 104.14 25.94 104.14C26.82 104.14 27.46 103.84 27.86 103.24C28.2733 102.64 28.48 101.833 28.48 100.82ZM30.96 100.78C30.96 101.58 30.8533 102.313 30.64 102.98C30.44 103.647 30.1467 104.22 29.76 104.7C29.3733 105.18 28.8867 105.553 28.3 105.82C27.7267 106.087 27.0733 106.22 26.34 106.22C25.8467 106.22 25.3933 106.16 24.98 106.04C24.5667 105.92 24.2267 105.787 23.96 105.64V109.7H21.54V95.88C22.0333 95.7467 22.64 95.62 23.36 95.5C24.08 95.38 24.84 95.32 25.64 95.32C26.4667 95.32 27.2067 95.4467 27.86 95.7C28.5133 95.9533 29.0667 96.32 29.52 96.8C29.9867 97.2667 30.34 97.84 30.58 98.52C30.8333 99.1867 30.96 99.94 30.96 100.78ZM39.4141 97.72C39.2141 97.6533 38.9341 97.5867 38.5741 97.52C38.2274 97.44 37.8207 97.4 37.3541 97.4C37.0874 97.4 36.8007 97.4267 36.4941 97.48C36.2007 97.5333 35.9941 97.58 35.8741 97.62V106H33.4541V96.04C33.9207 95.8667 34.5007 95.7067 35.1941 95.56C35.9007 95.4 36.6807 95.32 37.5341 95.32C37.6941 95.32 37.8807 95.3333 38.0941 95.36C38.3074 95.3733 38.5207 95.4 38.7341 95.44C38.9474 95.4667 39.1541 95.5067 39.3541 95.56C39.5541 95.6 39.7141 95.64 39.8341 95.68L39.4141 97.72ZM50.9805 100.76C50.9805 101.587 50.8605 102.34 50.6205 103.02C50.3805 103.7 50.0405 104.28 49.6005 104.76C49.1605 105.24 48.6271 105.613 48.0005 105.88C47.3871 106.147 46.7071 106.28 45.9605 106.28C45.2138 106.28 44.5338 106.147 43.9205 105.88C43.3071 105.613 42.7805 105.24 42.3405 104.76C41.9005 104.28 41.5538 103.7 41.3005 103.02C41.0605 102.34 40.9405 101.587 40.9405 100.76C40.9405 99.9333 41.0605 99.1867 41.3005 98.52C41.5538 97.84 41.9005 97.26 42.3405 96.78C42.7938 96.3 43.3271 95.9333 43.9405 95.68C44.5538 95.4133 45.2271 95.28 45.9605 95.28C46.6938 95.28 47.3671 95.4133 47.9805 95.68C48.6071 95.9333 49.1405 96.3 49.5805 96.78C50.0205 97.26 50.3605 97.84 50.6005 98.52C50.8538 99.1867 50.9805 99.9333 50.9805 100.76ZM48.5005 100.76C48.5005 99.72 48.2738 98.9 47.8205 98.3C47.3805 97.6867 46.7605 97.38 45.9605 97.38C45.1605 97.38 44.5338 97.6867 44.0805 98.3C43.6405 98.9 43.4205 99.72 43.4205 100.76C43.4205 101.813 43.6405 102.647 44.0805 103.26C44.5338 103.873 45.1605 104.18 45.9605 104.18C46.7605 104.18 47.3805 103.873 47.8205 103.26C48.2738 102.647 48.5005 101.813 48.5005 100.76ZM55.3736 100.5C55.3736 101.527 55.5936 102.28 56.0336 102.76C56.4869 103.227 57.0669 103.46 57.7736 103.46C58.1603 103.46 58.5203 103.407 58.8536 103.3C59.2003 103.193 59.4803 103.067 59.6936 102.92V97.5C59.5203 97.46 59.3069 97.4267 59.0536 97.4C58.8003 97.36 58.4803 97.34 58.0936 97.34C57.2136 97.34 56.5403 97.6333 56.0736 98.22C55.6069 98.7933 55.3736 99.5533 55.3736 100.5ZM62.1136 104.94C62.1136 106.607 61.6869 107.827 60.8336 108.6C59.9936 109.373 58.7003 109.76 56.9536 109.76C56.3136 109.76 55.6869 109.707 55.0736 109.6C54.4736 109.493 53.9269 109.353 53.4336 109.18L53.8736 107.12C54.2869 107.293 54.7536 107.433 55.2736 107.54C55.8069 107.647 56.3803 107.7 56.9936 107.7C57.9669 107.7 58.6603 107.5 59.0736 107.1C59.4869 106.7 59.6936 106.107 59.6936 105.32V104.92C59.4536 105.04 59.1336 105.16 58.7336 105.28C58.3469 105.4 57.9003 105.46 57.3936 105.46C56.7269 105.46 56.1136 105.353 55.5536 105.14C55.0069 104.927 54.5336 104.613 54.1336 104.2C53.7469 103.787 53.4403 103.273 53.2136 102.66C53.0003 102.033 52.8936 101.313 52.8936 100.5C52.8936 99.74 53.0069 99.04 53.2336 98.4C53.4736 97.76 53.8136 97.2133 54.2536 96.76C54.7069 96.3067 55.2536 95.9533 55.8936 95.7C56.5336 95.4467 57.2603 95.32 58.0736 95.32C58.8603 95.32 59.6069 95.38 60.3136 95.5C61.0203 95.62 61.6203 95.7467 62.1136 95.88V104.94ZM71.1523 97.72C70.9523 97.6533 70.6723 97.5867 70.3123 97.52C69.9657 97.44 69.559 97.4 69.0923 97.4C68.8257 97.4 68.539 97.4267 68.2323 97.48C67.939 97.5333 67.7323 97.58 67.6123 97.62V106H65.1923V96.04C65.659 95.8667 66.239 95.7067 66.9323 95.56C67.639 95.4 68.419 95.32 69.2723 95.32C69.4323 95.32 69.619 95.3333 69.8323 95.36C70.0457 95.3733 70.259 95.4 70.4723 95.44C70.6857 95.4667 70.8923 95.5067 71.0923 95.56C71.2923 95.6 71.4523 95.64 71.5723 95.68L71.1523 97.72ZM76.9388 104.3C77.6854 104.3 78.2521 104.26 78.6388 104.18V101.5C78.5054 101.46 78.3121 101.42 78.0588 101.38C77.8054 101.34 77.5254 101.32 77.2188 101.32C76.9521 101.32 76.6788 101.34 76.3988 101.38C76.1321 101.42 75.8854 101.493 75.6588 101.6C75.4454 101.707 75.2721 101.86 75.1388 102.06C75.0054 102.247 74.9388 102.487 74.9388 102.78C74.9388 103.353 75.1188 103.753 75.4788 103.98C75.8388 104.193 76.3254 104.3 76.9388 104.3ZM76.7388 95.28C77.5388 95.28 78.2121 95.38 78.7588 95.58C79.3054 95.78 79.7388 96.06 80.0588 96.42C80.3921 96.78 80.6254 97.22 80.7588 97.74C80.9054 98.2467 80.9788 98.8067 80.9788 99.42V105.76C80.6054 105.84 80.0388 105.933 79.2788 106.04C78.5321 106.16 77.6854 106.22 76.7388 106.22C76.1121 106.22 75.5388 106.16 75.0188 106.04C74.4988 105.92 74.0521 105.727 73.6788 105.46C73.3188 105.193 73.0321 104.847 72.8188 104.42C72.6188 103.993 72.5188 103.467 72.5188 102.84C72.5188 102.24 72.6321 101.733 72.8588 101.32C73.0988 100.907 73.4188 100.573 73.8188 100.32C74.2188 100.053 74.6788 99.8667 75.1988 99.76C75.7321 99.64 76.2854 99.58 76.8587 99.58C77.1254 99.58 77.4054 99.6 77.6988 99.64C77.9921 99.6667 78.3054 99.72 78.6388 99.8V99.4C78.6388 99.12 78.6054 98.8533 78.5388 98.6C78.4721 98.3467 78.3521 98.1267 78.1788 97.94C78.0188 97.74 77.7988 97.5867 77.5188 97.48C77.2521 97.3733 76.9121 97.32 76.4988 97.32C75.9388 97.32 75.4254 97.36 74.9588 97.44C74.4921 97.52 74.1121 97.6133 73.8188 97.72L73.5188 95.76C73.8254 95.6533 74.2721 95.5467 74.8588 95.44C75.4454 95.3333 76.0721 95.28 76.7388 95.28ZM89.9023 100.5C89.9023 99.4067 89.7623 98.62 89.4823 98.14C89.2157 97.6467 88.709 97.4 87.9623 97.4C87.6957 97.4 87.4023 97.42 87.0823 97.46C86.7623 97.5 86.5223 97.5333 86.3623 97.56V106H83.9423V95.88C84.409 95.7467 85.0157 95.62 85.7623 95.5C86.5223 95.38 87.3223 95.32 88.1623 95.32C88.8823 95.32 89.469 95.4133 89.9223 95.6C90.389 95.7867 90.7757 96.0333 91.0823 96.34C91.229 96.2333 91.4157 96.12 91.6423 96C91.869 95.88 92.1223 95.7733 92.4023 95.68C92.6823 95.5733 92.9757 95.4867 93.2823 95.42C93.6023 95.3533 93.9223 95.32 94.2423 95.32C95.0557 95.32 95.7223 95.44 96.2423 95.68C96.7757 95.9067 97.189 96.2333 97.4823 96.66C97.789 97.0733 97.9957 97.58 98.1023 98.18C98.2223 98.7667 98.2823 99.4133 98.2823 100.12V106H95.8623V100.5C95.8623 99.4067 95.729 98.62 95.4623 98.14C95.1957 97.6467 94.6823 97.4 93.9223 97.4C93.5357 97.4 93.169 97.4667 92.8223 97.6C92.4757 97.72 92.2157 97.84 92.0423 97.96C92.149 98.2933 92.2223 98.6467 92.2623 99.02C92.3023 99.3933 92.3223 99.7933 92.3223 100.22V106H89.9023V100.5Z",fill:"#AFB4B8"})),s.createElement("g",{filter:"url(#filter2_b_55867_57033)"},s.createElement("path",{d:"M141.084 76.0481C141.084 88.9843 134.87 96.125 116 96.125C97.1305 96.125 90.917 88.9843 90.917 76.0481C90.917 56.4196 97.1305 52.625 116 52.625C134.87 52.625 141.084 56.4196 141.084 76.0481Z",fill:"#AFB4B8",fillOpacity:.15}),s.createElement("path",{d:"M141.084 76.0481C141.084 88.9843 134.87 96.125 116 96.125C97.1305 96.125 90.917 88.9843 90.917 76.0481C90.917 56.4196 97.1305 52.625 116 52.625C134.87 52.625 141.084 56.4196 141.084 76.0481Z",stroke:"#F14F63",strokeWidth:3.6,strokeLinecap:"round",strokeLinejoin:"round"})),s.createElement("path",{d:"M116 63.5V70.75",stroke:"#F14F63",strokeWidth:3.6,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M101.667 52.625V45.375C101.667 36.3125 108.834 30.875 116 30.875C123.167 30.875 130.334 36.3125 130.334 45.375V52.625",stroke:"#F14F63",strokeWidth:3.6,strokeLinejoin:"round"}),s.createElement("defs",null,s.createElement("filter",{id:"filter0_b_55867_57033",x:-3.58887,y:-3.87598,width:240,height:140,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:2}),s.createElement("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_55867_57033"}),s.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_55867_57033",result:"shape"})),s.createElement("filter",{id:"filter1_f_55867_57033",x:16,y:16,width:200,height:100,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),s.createElement("feGaussianBlur",{stdDeviation:2,result:"effect1_foregroundBlur_55867_57033"})),s.createElement("filter",{id:"filter2_b_55867_57033",x:77.1172,y:38.825,width:77.7666,height:71.1001,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:6}),s.createElement("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_55867_57033"}),s.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_55867_57033",result:"shape"})))),z1=s.forwardRef(U1);function G1({open:e,close:n,partType:r="lesson"}){const o=Ae(d3);return t.jsx(L7,{open:e,onClose:n,className:`glass-div basic ${o}`,closeButtonLocation:"outside",children:t.jsxs("div",{className:"acc-rej",children:[t.jsxs("h2",{id:"header",style:{textTransform:"capitalize"},children:[r," Locked"]}),o===Q.LIGHT?t.jsx(z1,{}):t.jsx(D1,{}),t.jsxs("p",{id:"desc",children:["This ",r," is unavailable, please complete all lessons before to unlock this lesson."]}),t.jsx(me,{onClick:n,label:"Continue",variant:"outline"})]})})}const W1=({chapters:e,resultCourse:n})=>{const r=o=>n?.resultChapters.find(i=>i.chapterId===o)||null;return t.jsx(T1,{children:t.jsx(ae,{exitBeforeEnter:!0,children:e.map((o,i)=>t.jsx(q1,{chapterIndex:i+1,chapter:o,resultChapter:r(o._id)},o._id))})})},q1=({chapter:e,resultChapter:n,chapterIndex:r})=>{const{lessonId:o,courseId:i}=ue(),a=ce(),c=J(),{lessonPage:d}=ye({}),[l,u]=s.useState(),{isOpen:b,open:m,close:h}=Re(!1),{isOpen:p,toggle:f}=Re(!e.isLocked,{onClose:()=>u(void 0)}),y=s.useMemo(()=>p&&!e.isLocked,[e,p]),M=g=>{if(g.stopPropagation(),e.isLocked){u("chapter"),m();return}f()},v=s.useCallback((g,L,E)=>N=>{if(o!==g){if(E||e.isLocked){m();return}a(`/courses/${i}/${L}/${g}`)}},[o,i,a,m]);return t.jsxs(t.Fragment,{children:[t.jsx(G1,{partType:l,open:b,close:h}),t.jsx(ae,{children:t.jsxs($1,{initial:{opacity:0},animate:{opacity:1,transition:{delay:r*.05}},children:[t.jsxs(N3,{onClick:M,className:I({isOpen:!!n,isLessonsOpen:y}),$theme:c,children:[t.jsx(N1,{children:t.jsx(V1,{children:e.name})}),e.isLocked&&t.jsx(e3,{as:He}),t.jsx(O1,{children:t.jsx(B1,{className:I({isReversed:y})})})]}),t.jsx(H1,{className:I({isOpen:y}),children:t.jsx(F1,{className:I({isOpen:y}),children:!!e.lessons.length&&e.lessons.map(g=>{const L=g.isLocked?He:(g?.completion??0)>=100?R1:L1;return t.jsx(P1,{$theme:c,className:I({isActive:g._id===o}),onClick:v(g._id,e._id,!!g?.isLocked),$accentColor:d?.accentColor,children:t.jsxs(V3,{$accentColor:d?.accentColor,className:I({isActive:g._id===o}),children:[t.jsx(e3,{as:L}),t.jsx(O3,{children:g.name})]})},g._id)})})})]},e._id+"progress")})]})},Q1=C(K.div)`
  height: calc(100vh - 85px);
  width: calc((100vw - 752px) / 2 - 100px);
  max-width: 250px;
  overflow: auto;
  padding: 50px 0px;
  margin-top: -50px; // to match mask
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  &.headerHidden {
    top: 30px;
  }
  scrollbar-width: none;
  mask-mode: alpha;
  mask-image: linear-gradient(
    180deg,
    transparent 0%,
    transparent 25px,
    #000000 50px,
    #000000 calc(100% - 50px),
    transparent calc(100% - 25px),
    transparent 100%
  );
  &.drawer {
    width: 250px;
    position: relative;
    margin-top: -32px; // compensate drawer header
  }
  &.mobile {
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    overflow-y: auto;
    transition: 0.3s;
    background: none;
    translate: none !important;
    mask-image: none;
    margin: 0;
    padding: 20px;
  }
`,K1=C(K.div)`
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100% !important;
  background: #262733cc;
  backdrop-filter: blur(30px);
  border-radius: 20px 20px 0px 0px;
  height: 70vh;
  max-height: 446px;
  padding: 24px 20px 20px;
  z-index: 9999;
  &.light {
    background: rgba(217, 217, 217, 0.4);
  }
  &::after {
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-50%);
    width: 139px;
    height: 5px;
    border-radius: 10px;
    background-blend-mode: luminosity;
    background-blend-mode: overlay;
    background: #ffffff80;
    display: block;
    content: "";
    transition: 0.5s;
  }
  &.light::after {
    background: #3d3d3d60;
  }
  &.isOpen::after {
    top: 8px;
    background: #3d3d3d80;
    width: 48px;
  }
`,X1=C(M7).attrs({width:"344px",className:"blur-100"})`
  padding: 20px 48px;
  background: #ffffff0a;
`,Ze=({course:e,resultCourse:n,mode:r})=>{const{chapterId:o,lessonId:i}=ue(),a=s.useMemo(()=>{if(!e)return;const d=e.chapters.find(u=>u._id===o);if(!d)return;const l=d.lessons.find(u=>u._id===i);if(l)return l},[e,i,o]);if(!e||!a)return null;const c=d=>{d.preventDefault(),d.stopPropagation()};return t.jsx(Q1,{onTouchMove:c,className:r,children:t.jsx(W1,{chapters:e.chapters,resultCourse:n},"chaps-progress")})},Y1=e=>{const{state:{mobileMenuState:n}}=te(),r=J(),{onTouchStart:o,onTouchMove:i,onTouchEnd:a}=R7({direction:"vertical",handleLeftTop:()=>e.changeMobileMenuState("progress"),handleRightBottom:()=>e.changeMobileMenuState(null),minSwipeDistance:150}),c=n==="progress";return t.jsx(K1,{onTouchStart:o,onTouchMove:i,onTouchEnd:a,initial:{y:446},animate:{y:c?0:446},transition:{bounce:0},className:I("blur-30",r,{isOpen:c}),children:t.jsx(Ze,{...e,forceHovered:!0})})},B3=e=>{const{courseProps:{course:n,resultCourse:r},state:{mobileMenuState:o},functions:{updateState:i}}=te(),{data:a,isLoading:c,refetch:d}=o7(n?._id||"",{skip:!n}),{lessonId:l}=ue(),u=ee();if(s.useEffect(()=>{d()},[r,u,l]),!a||c)return null;const b=o==="progress",m=h=>i({mobileMenuState:h});return e.mode==="drawer"?t.jsx(X1,{position:"left",onClose:()=>m(null),isVisible:b,withOverlay:!1,children:t.jsx(Ze,{changeMobileMenuState:m,...e,course:a,resultCourse:r})}):e.mode==="mobile"?t.jsx(Y1,{changeMobileMenuState:m,...e,resultCourse:r,course:a}):t.jsx(Ze,{changeMobileMenuState:m,...e,resultCourse:r,course:a})},J1=()=>{const{courseProps:{course:e}}=te(),{isMobile:n,isTablet:r}=pe();return s.useMemo(()=>{if(n||r)return null;switch(e?.customization?.sidebarLeft?.preset){case ie.MAIN_NAV:return t.jsx(S1,{});case ie.CONTENTS:default:return t.jsx(B3,{})}},[e?.customization?.sidebarLeft,n,r])},e4=()=>{const{state:{scrollTop:e},courseProps:{course:n},functions:{navToOverview:r}}=te(),{isMobile:o}=pe(),i=s.useMemo(()=>e>60&&o,[e,o]);if(!n)return null;const a=n3.StaticHostPath+n?.imageCover||n?.imageBanner||n.imageLogo;return t.jsxs(o2,{children:[t.jsxs(r2,{children:[t.jsx(i2,{onClick:r}),t.jsx(a2,{src:a}),t.jsx(c2,{children:n.name})]}),!o&&t.jsx(R3,{}),o&&t.jsx(ae,{children:i&&t.jsx(l2,{onClick:r,children:t.jsx(v3,{})})})]})},t4=C(le).attrs({align:"center"})`
  padding-right: 44px;
`,s4=C(le).attrs({className:"blur-50",align:"center",justify:"center"})`
  width: 44px;
  min-width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ffffff0a;
  color: var(--font-color-strong);
  cursor: pointer;
  & > svg {
    width: 24px;
    height: 24px;
  }
`,n4=C(le).attrs({align:"center",gap:12})`
  width: 752px;
  margin: 0 auto;
`,o4=C.img`
  width: 44px;
  min-width: 44px;
  height: 44px;
  border-radius: 10px;
  object-fit: cover;
  background: #ffffff0a;
`,r4=()=>{const{functions:{navToOverview:e}}=te(),{space:n}=qe();return n?t.jsxs(t4,{children:[t.jsx(s4,{onClick:e,children:t.jsx(v3,{})}),t.jsxs(n4,{children:[t.jsx(o4,{src:n?.imageThumb}),t.jsx(R3,{alwaysOpen:!0,fillFreeSpace:!0})]})]}):null},i4=()=>{const{courseProps:{course:e}}=te(),{isMobile:n}=pe();return e?.customization?.header?.preset===Fe.NONE?null:e?.customization?.header?.preset===Fe.SEARCH_BAR&&!n?t.jsx(r4,{}):t.jsx(e4,{})},a4=e=>{const n=e??"#6487ef";return`linear-gradient(120deg, ${n}1a 0%, ${n}1a 70%, ${n}55 75%, ${n}55 85%, ${n}1a 95%, ${n}1a 100%)`},c4=Ie`
  0% {
    background-position-x: 0;
  }
  30%, 100% {
    background-position-x: -300%;
  }
`,l4=C(K.div).attrs({className:"blur-100"})(({$accentColor:e})=>ze`
    display: flex;
    align-items: center;
    gap: 19px;
    height: 88px;
    padding: 0px 36px;
    background: ${a4(e)};
    background-size: 150% 100%;
    border-radius: 12px;
    position: fixed;
    bottom: 64px;
    left: 50%;
    translate: -50% 0;
    color: var(--font-color-strong);
    white-space: nowrap;
    animation: ${c4} 6s ease-in-out infinite;

    @media screen and (max-width: 992px) {
      position: static;
      transform: none;
      width: 100%;
      height: 60px;
      padding: 0px 15px;
      font-size: 18px;
      font-weight: 500;
      justify-content: space-between;
      border-radius: 10px;
      translate: none;

      &.outsideMenu {
        position: fixed;
        bottom: 20px;
        left: 16px;
        width: calc(100% - 32px);
      }
    }
  `),d4=C.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,t3=C(K.div)(({$rewardExp:e=0})=>ze`
    width: 56px;
    min-width: 56px;
    height: 56px;
    position: relative;
    &::after {
      position: absolute;
      right: 2px;
      bottom: 2px;
      content: ${`'${e.toString()}'`};
      display: ${e?"block":"none"};
      font-size: 14px;
      font-weight: 400;
      color: var(--font-color-strong);
    }
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media screen and (max-width: 992px) {
      width: 42px;
      min-width: 42px;
      height: 42px;
      &::after {
        font-size: 12px;
      }
    }
  `),H3=({rewardExp:e=50,accentColor:n})=>{const{isMobile:r}=pe(),o=ee(),i=Ge(),a=fe(),c=()=>i(void 0,{exp:e}),d=()=>r?i(void 0,{exp:e}):void 0;return o?null:t.jsxs(l4,{$accentColor:n,initial:{opacity:0,y:300},animate:{opacity:1,y:0},onClick:d,className:I({outsideMenu:!!a}),children:["Login to collect rewards",t.jsxs(d4,{children:[t.jsx(t3,{$rewardExp:e,children:t.jsx("img",{src:b3})}),t.jsx(t3,{children:t.jsx("img",{src:_7})})]}),!r&&t.jsx(me,{variant:"cool",label:"Login",style:{background:n},onClick:c})]})},C4=({resultCourseId:e,style:n})=>{const[r]=r7(),o=xe(),i=ce(),a=()=>{r({resultCourseId:e}).finally(()=>{i(F.MAIN)})};return o&&o?.roles?.includes(w3.ADMIN)?t.jsx(me,{label:"[DEV] flush course",style:{opacity:".3",width:"fit-content",...n},onClick:a}):null},u4=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:26,height:20,viewBox:"0 0 26 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("path",{d:"M18 2.00391L2 2.0039",stroke:"currentColor",strokeWidth:2.6,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M24.3984 2.00391L24.3953 2.00391L24.3953 2.00082L24.3984 2.00082L24.3984 2.00391Z",stroke:"currentColor",strokeWidth:2.6,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M18 10.0039L2 10.0039",stroke:"currentColor",strokeWidth:2.6,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M24.3984 10.0039L24.3953 10.0039L24.3953 10.0008L24.3984 10.0008L24.3984 10.0039Z",stroke:"currentColor",strokeWidth:2.6,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M18 18.0039L2 18.0039",stroke:"currentColor",strokeWidth:2.6,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M24.3984 18.0039L24.3953 18.0039L24.3953 18.0008L24.3984 18.0008L24.3984 18.0039Z",stroke:"currentColor",strokeWidth:2.6,strokeLinecap:"round",strokeLinejoin:"round"})),p4=s.forwardRef(u4),h4=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({$theme:e,$accentColor:n})=>e===Q.DARK?"#ffffff26":n?I7(n,50):"var(--basic-light-bg)"};
  border-radius: 40px;
  height: 48px;
  min-width: 48px;
  width: fit-content;
`,m4=C.div`
  display: flex;
  & > svg {
    width: 24px;
    height: 24px;
    color: ${({$theme:e,$accentColor:n})=>e===Q.DARK?"white":n||"var(--mighty-blue)"};
  }
  margin-left: 12px;
  margin-right: 12px;
`,f4=C.div`
  overflow: hidden;
  width: 0;
  transition: 0.3s;
  &.isOpen {
    width: 67px;
    padding-right: 12px;
  }
`,x4=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("path",{d:"M16.0004 8.99984C16.6281 9.8355 17 10.8742 17 11.9998C17 13.1254 16.6281 14.1642 16.0004 14.9998M18 5.29152C19.8412 6.93948 21 9.33434 21 11.9998C21 14.6653 19.8412 17.0602 18 18.7082M4.6 8.99984H5.5012C6.05213 8.99984 6.32759 8.99984 6.58285 8.93116C6.80903 8.87032 7.02275 8.77021 7.21429 8.63542C7.43047 8.48328 7.60681 8.27166 7.95951 7.84843L10.5854 4.69733C11.0211 4.17451 11.2389 3.9131 11.4292 3.8859C11.594 3.86234 11.7597 3.92233 11.8712 4.04592C12 4.18864 12 4.52892 12 5.20948V18.7902C12 19.4708 12 19.811 11.8712 19.9538C11.7597 20.0774 11.594 20.1373 11.4292 20.1138C11.239 20.0866 11.0211 19.8252 10.5854 19.3023L7.95951 16.1512C7.60681 15.728 7.43047 15.5164 7.21429 15.3643C7.02275 15.2295 6.80903 15.1294 6.58285 15.0685C6.32759 14.9998 6.05213 14.9998 5.5012 14.9998H4.6C4.03995 14.9998 3.75992 14.9998 3.54601 14.8908C3.35785 14.795 3.20487 14.642 3.10899 14.4538C3 14.2399 3 13.9599 3 13.3998V10.5998C3 10.0398 3 9.75976 3.10899 9.54585C3.20487 9.35769 3.35785 9.20471 3.54601 9.10883C3.75992 8.99984 4.03995 8.99984 4.6 8.99984Z",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"})),g4=s.forwardRef(x4),w4=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("path",{d:"M18 8.99984C18.6277 9.8355 18.9996 10.8742 18.9996 11.9998C18.9996 13.1254 18.6277 14.1642 18 14.9998M6.6 8.99984H7.5012C8.05213 8.99984 8.32759 8.99984 8.58285 8.93116C8.80903 8.87032 9.02275 8.77021 9.21429 8.63542C9.43047 8.48328 9.60681 8.27166 9.95951 7.84843L12.5854 4.69733C13.0211 4.17451 13.2389 3.9131 13.4292 3.8859C13.594 3.86234 13.7597 3.92233 13.8712 4.04592C14 4.18864 14 4.52892 14 5.20948V18.7902C14 19.4708 14 19.811 13.8712 19.9538C13.7597 20.0774 13.594 20.1373 13.4292 20.1138C13.239 20.0866 13.0211 19.8252 12.5854 19.3023L9.95951 16.1512C9.60681 15.728 9.43047 15.5164 9.21429 15.3643C9.02275 15.2295 8.80903 15.1294 8.58285 15.0685C8.32759 14.9998 8.05213 14.9998 7.5012 14.9998H6.6C6.03995 14.9998 5.75992 14.9998 5.54601 14.8908C5.35785 14.795 5.20487 14.642 5.10899 14.4538C5 14.2399 5 13.9599 5 13.3998V10.5998C5 10.0398 5 9.75976 5.10899 9.54585C5.20487 9.35769 5.35785 9.20471 5.54601 9.10883C5.75992 8.99984 6.03995 8.99984 6.6 8.99984Z",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"})),b4=s.forwardRef(w4),v4=({title:e,titleId:n,...r},o)=>s.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":n,...r},e?s.createElement("title",{id:n},e):null,s.createElement("path",{d:"M16 9.49984L21 14.4998M21 9.49984L16 14.4998M4.6 8.99984H5.5012C6.05213 8.99984 6.32759 8.99984 6.58285 8.93116C6.80903 8.87032 7.02275 8.77021 7.21429 8.63542C7.43047 8.48328 7.60681 8.27166 7.95951 7.84843L10.5854 4.69733C11.0211 4.17451 11.2389 3.9131 11.4292 3.8859C11.594 3.86234 11.7597 3.92233 11.8712 4.04592C12 4.18864 12 4.52892 12 5.20948V18.7902C12 19.4708 12 19.811 11.8712 19.9538C11.7597 20.0774 11.594 20.1373 11.4292 20.1138C11.239 20.0866 11.0211 19.8252 10.5854 19.3023L7.95951 16.1512C7.60681 15.728 7.43047 15.5164 7.21429 15.3643C7.02275 15.2295 6.80903 15.1294 6.58285 15.0685C6.32759 14.9998 6.05213 14.9998 5.5012 14.9998H4.6C4.03995 14.9998 3.75992 14.9998 3.54601 14.8908C3.35785 14.795 3.20487 14.642 3.10899 14.4538C3 14.2399 3 13.9599 3 13.3998V10.5998C3 10.0398 3 9.75976 3.10899 9.54585C3.20487 9.35769 3.35785 9.20471 3.54601 9.10883C3.75992 8.99984 4.03995 8.99984 4.6 8.99984Z",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"})),y4=s.forwardRef(v4),j4=({onChange:e,closeOn:n,accentColor:r})=>{const[o,i]=s.useState(!1),a=J(),c=Ae(c3),d=l=>{Te(l3(l)),e&&e(l)};return s.useEffect(()=>{n&&i(!1)},[n]),t.jsxs(h4,{$accentColor:r,$theme:a,onClick:()=>i(l=>!l),children:[t.jsxs(m4,{$accentColor:r,$theme:a,children:[c>50&&t.jsx(g4,{}),c<=50&&c>0&&t.jsx(b4,{}),c===0&&t.jsx(y4,{})]}),t.jsx(f4,{onClick:l=>l.stopPropagation(),className:I({isOpen:o}),children:t.jsx(L3,{myValue:c,handler:d,knobSize:8,knobColor:"#6487EF"})})]})},k4=({isHidden:e,openLessons:n})=>{const r=xe(),o=ee(),i=Ge(),{lessonPage:a}=ye({}),c=r?.exp?.energy??1,d=r?.exp?.limit?.maxEnergy??1,l=r?.exp?.balance?.amount??0,u=r?.nickname??"??",b=r?.avatar??"",m=s.useMemo(()=>Math.floor(c/d*100),[d,c]),h=J(),p=()=>Te(C3(h===Q.DARK?Q.LIGHT:Q.DARK)),{color:f}=A7("energy"),y=ce(),M=()=>y("/profile?screen=Settings"),v=()=>y("/profile");return t.jsxs(T7,{children:[t.jsxs(ne,{children:[t.jsx(j4,{accentColor:a?.accentColor,closeOn:e}),t.jsx(oe,{children:"Volume"})]}),!!o&&t.jsxs(t.Fragment,{children:[t.jsxs(ne,{onClick:n,children:[t.jsx(we,{$accentColor:a?.accentColor,$theme:h,children:t.jsx(p4,{className:"lessons"})}),t.jsx(oe,{children:"Lessons"})]}),t.jsxs(ne,{children:[t.jsx(we,{$accentColor:a?.accentColor,$theme:h,children:t.jsx("img",{src:$7,className:"exp"})}),t.jsxs(oe,{$noMaxWidth:!0,children:[l," EXP"]})]}),t.jsxs(ne,{children:[t.jsx("div",{style:{pointerEvents:"none"},children:t.jsx(N7,{$larger:!0})}),t.jsxs(oe,{$color:f,children:[m,"%"]})]})]}),t.jsxs(ne,{children:[t.jsx(we,{$accentColor:a?.accentColor,$theme:h,onClick:p,children:h===Q.DARK?t.jsx(V7,{}):t.jsx(O7,{})}),t.jsx(oe,{children:h===Q.DARK?"Light":"Dark"})]}),!!o&&t.jsxs(t.Fragment,{children:[t.jsxs(ne,{onClick:M,children:[t.jsx(we,{$accentColor:a?.accentColor,$theme:h,children:t.jsx(B7,{})}),t.jsx(oe,{children:"Settings"})]}),t.jsxs(ne,{onClick:v,children:[t.jsx(We,{userName:u??"??",src:b??"",size:48}),t.jsx(oe,{children:"Profile"})]})]}),!o&&t.jsxs(ne,{onClick:()=>i(),children:[t.jsx(we,{$theme:h,children:t.jsx(H7,{})}),t.jsx(oe,{children:"Login"})]})]})},S4=({chapterId:e,lessonId:n,resultCourse:r})=>{if(!r)return{resultChapter:null,resultLesson:null};const o=r.resultChapters.find(a=>a.chapterId===e),i=o&&n?o.resultLessons.find(a=>a.lessonId===n):void 0;return{resultChapter:o,resultLesson:i}},E4=e=>s.useMemo(()=>S4(e),[JSON.stringify(e)]),L4=({resultCourse:e,lesson:n,hide:r=!1,changeMenuState:o,menuState:i,screenHeight:a,scrollTop:c,unauthRewardExp:d})=>{const l=J(),u=ee(),{vh:b,viewportWidth:m}=pe(),h=i==="menu",{lessonPage:p}=ye({}),f=u?0:d?76:0,y=()=>{o(i==="menu"?null:"menu")},M=()=>o("progress"),{chapterId:v="",lessonId:g=""}=ue(),{resultLesson:L}=E4({resultCourse:e,chapterId:v,lessonId:g}),E=s.useMemo(()=>L?Math.floor(L.resultSlides.filter(V=>V.status===h3.FINISHED).length/n.slides.length*100):0,[L,n]),N=s.useMemo(()=>Math.floor(c/(a-100*b)*100),[c,a,b]),O=s.useMemo(()=>u?Math.min(N,E):N,[N,E,u]),U=s.useMemo(()=>m*O/100,[O,m]);return t.jsxs(F7,{$theme:l,className:I({isHidden:!h||r}),children:[t.jsxs(P7,{$higherPx:f,$accentColor:p?.accentColor,onClick:y,children:[t.jsx(Z7,{$accentColor:p?.accentColor,$visible:!h}),t.jsx(D7,{$accentColor:p?.accentColor,$visible:h})]}),t.jsx(U7,{children:!!d&&t.jsx(H3,{rewardExp:d,accentColor:p?.accentColor})}),t.jsx(z7,{}),t.jsx(G7,{style:{transform:`scaleX(${U})`,background:p?.accentColor}}),t.jsx(k4,{openLessons:M,isHidden:!h})]})},M4=({children:e})=>{const{isMobile:n,isMedium:r}=pe(),o=fe(),i=J(),{lessonPage:a}=ye({}),c=i7(a?.images?.bgImage),d=a?.bgColor,l=Ue(),u=s.useRef(null),{isIOS:b,isInstalledApp:m}=a7(),h=y3(),p=j3(),f=k3(),y=S3(),M=E3(),{functions:{updateState:v,navToNextLesson:g,navToOverview:L},state:{mobileMenuState:E,isSidePanelOn:N,isEnergyModal:O,claimedRewards:U,isRewardsModal:V,isNavigatingToNextLesson:B,scrollTop:A,unauthRewardsExp:z},courseProps:{course:H,lesson:j,isCompleted:T,resultCourse:P}}=te(),R=q=>v({mobileMenuState:q}),_=s.useMemo(()=>n?!!o:!0,[o,n]),X=s.useMemo(()=>{if(!(!H||!j||!H.spaceInfo?.name))return`/${H.spaceInfo.name.replaceAll(" ","_")}/lesson/${j._id}`},[H,j]),{sidebarLeft:D={preset:ie.CONTENTS},sidebarRight:G,header:W}=H?.customization||{},x=s.useMemo(()=>!(H?.customization?.sidebarLeft?.preset===ie.CONTENTS&&!n&&!r),[D,n,r]),S=!f&&W?.preset!==Fe.NONE,$=!n&&!y&&D?.preset!==ie.NONE,Z=!n&&!y&&G?.preset!==g3.NONE,k=M3({rewards:U}),w=s.useCallback(l(()=>{const q=u?.current?.scrollTop??0;v({scrollTop:q})},150),[]),ge=s.useCallback(q=>{u.current&&u.current.removeEventListener("scroll",w),q?(q.addEventListener("scroll",w),u.current=q):u.current=null},[w]),F3=s.useCallback(()=>{const q=u.current;q&&(A>=50?q.scrollTo({top:0,behavior:"smooth"}):q.scrollTo({top:q.scrollHeight,behavior:"smooth"}))},[A,u.current]);return s.useEffect(()=>{const{isPlaceholder:q,...Qe}=$3;return j?._id&&(v(Qe),u.current&&u.current.scrollTo({top:0,behavior:"smooth"})),()=>{v(Qe)}},[j?._id]),t.jsxs(X2,{ref:ge,style:{backgroundColor:d,backgroundImage:c},className:I(i,{isScrollbarHidden:p}),children:[S&&t.jsxs(t.Fragment,{children:[t.jsx(J2,{}),t.jsx(Y2,{className:I({isIOS_app:b&&m}),children:t.jsx(i4,{})})]}),$&&t.jsx(e1,{className:I(D?.position,D?.preset),children:t.jsx(J1,{})}),Z&&t.jsx(t1,{className:I(G?.position),children:!!H&&t.jsx(y1,{menuState:E,setMenuState:R,preparedLink:X,sidePanelClassName:"vertical-lesson-sidepanel",isShown:N,onClose:()=>v({isSidePanelOn:!N}),course:H})}),t.jsx(s1,{style:{paddingBottom:M},children:e}),t.jsx(h2,{open:V,rewards:k,onClickButton:B?g:L,subtitle:T?t.jsxs(t.Fragment,{children:["You have completed ",t.jsx("span",{className:"lesson_name",children:j?.name})]}):void 0,secondSubtitle:"Rewards you earned from this lesson:"}),t.jsx(C2,{isShown:O,onClose:()=>v({isEnergyModal:!1})}),!h&&t.jsx(n1,{className:i,$reversed:A<50,onClick:F3,children:t.jsx(W7,{strokeWidth:1.5,size:16})}),_&&t.jsx(H3,{rewardExp:z,accentColor:a?.accentColor}),!!P&&t.jsx(C4,{style:{position:"fixed",right:0,bottom:0},resultCourseId:P._id}),n&&!!j&&!o&&t.jsx(L4,{menuState:E,changeMenuState:R,lesson:j,resultCourse:P??void 0,scrollTop:A,screenHeight:0,unauthRewardExp:z}),x&&t.jsx(B3,{mode:n?"mobile":"drawer"})]})},R4=()=>{const e=ee(),n=fe(),{addQueryItem:r,query:o}=g2(),{chapter:i,course:a,isLoadingCourse:c,isQuest:d,lesson:l,resultCourse:u,setResultCourse:b,completedSlides:m,rewardedSlides:h,space:p}=f2(),[f,y]=s.useReducer(K2,$3);s.useEffect(()=>{L([])},[l?._id]),q7(l?.name||null,!n);const{claimedRewards:M,unauthRewardsExp:v}=f;v2(v,k=>y({unauthRewardsExp:k}));const[g,L]=s.useState([]),E=s.useMemo(()=>e?m:g,[m,g,e]),N=k=>y({isEnergyModal:k}),O=y3(),U=j3(),V=k3(),B=S3(),A=E3(),{navToOverview:z,nextLessonId:H,navToNextLesson:j}=x2({course:a,chapter:i}),T=async()=>{y({isAnimationStarted:!0}),await Ce(2300,y,{isAnimationStarted:!1})},P=s.useCallback(()=>{if(M.length&&e){y({isRewardsModal:!0});return}z()},[z,M.length,e]),R=s.useMemo(()=>{if(!l)return[];let k=[...E];for(let w of l.slides)if(!E.includes(w._id)&&(k.push(w._id),w.typeOfSlide!==Y.INFO&&!w.slideType.isOptional||w.typeOfSlide===Y.INFO&&w.content.some(ge=>ge.isRequired)))break;return k},[E,l?.slides]),_=s.useMemo(()=>l?l.slides.filter(k=>R.includes(k._id)):[],[R,l,e]),X=s.useMemo(()=>l?l.slides.filter(k=>k.typeOfSlide!==Y.INFO).map(k=>k._id):[],[l]),D=s.useMemo(()=>{const k=_[_.length-1];return k?!!(k.typeOfSlide===Y.INFO&&k.content.some(w=>w.isRequired&&w.type==a3.TASK)&&!E.includes(k._id)):!1},[_,E]),G=s.useMemo(()=>_[_.length-1]?.typeOfSlide??Y.INFO,[_]),W=s.useMemo(()=>_[_.length-1]?.slideType.isOptional,[_]),x=s.useMemo(()=>!!l&&E.length===l.slides.length,[E,l]),S=s.useCallback((k,w)=>{(k!==Y.INFO||w)&&!x?y({isPlaceholder:!0}):y({isPlaceholder:!1})},[x]),$=k=>y({type:"REWARDS_UPDATE",payload:k}),Z=s.useCallback((k,w)=>{L(ge=>[...ge,k]),v<300&&w&&y({type:"INCREASE_UNAUTH_EXP",payload:w})},[v]);return s.useEffect(()=>{if(x){S(Y.INFO,!1);return}S(W?Y.INFO:G,D)},[G,D,x,l,W]),!a||c?t.jsx(c7,{}):t.jsx(Q7.Provider,{value:{space:p},children:t.jsx(T3.Provider,{value:{state:f,courseProps:{course:a,chapter:i,lesson:l,isCompleted:x,resultCourse:u},partnerProps:{isScrollOff:O,isScrollbarHidden:U,isStudyHeadOff:V,isHidingSidebars:B,paddingBottom:A},functions:{updateState:y,navToNextLesson:j,navToOverview:z,addClaimedRewards:$}},children:t.jsx(M4,{children:t.jsx(I3.Provider,{value:{addQueryItem:r,query:o},children:t.jsxs(d2,{children:[_.map((k,w)=>t.jsx(O2,{slide:k,isLastSlide:w+1===l?.slides?.length,testsSlidesIds:X,completedSlides:e?E:g,rewardedSlidesIds:h,resultCourse:u,setResultCourse:b,handleEnergyModal:N,addClaimedRewards:$,unauthCompleteSlide:Z,startSlideUnlockAnimation:T},"slide"+k._id)),t.jsx(Q2,{finishLesson:P,isCompleted:x,isLastSlideInfo:G===Y.INFO,isQuest:!!d,isRequiredTask:D,nextLessonId:H})]})})})})})},G4=()=>l7.createPortal(t.jsx(R4,{}),document.getElementById(d7.FULLSCREEN));export{G4 as default};
