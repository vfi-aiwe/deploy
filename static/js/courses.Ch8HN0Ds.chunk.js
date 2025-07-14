import{B as e,q as R,r as l,by as g,bz as m,bN as U,E as F,aP as X,L as Y,p as H,x as $}from"./index.BDWbwHp_.js";import{eD as Q,eE as V,eF as Z,eG as ee,ar as D,eH as se,eI as re,eJ as ae,eK as oe,eL as te,eq as k,a0 as ne,eM as L,eN as E,D as ie,H as B,G as le}from"./index.CMGJEYRC.chunk.js";import{m as ce,R as P,L as A,S as ue}from"./SlideLessonLeftOff.C1VwGTo-.chunk.js";import{G as de,C as pe}from"./group-cards.D75Uknw1.chunk.js";import{D as M}from"./daily-rewards.CD4N1uff.chunk.js";import{S as ge}from"./index.DcXSrrbJ.chunk.js";import"./relativeTime.DEMDksMo.chunk.js";import"./index.DkPCQd0h.chunk.js";import"./index.BWoEZuKS.chunk.js";import"./date.DyEs2qzH.chunk.js";import"./MobileTopNav.DqgLhJ0b.chunk.js";const me=({image:r="",name:s="",className:t="",onClick:n})=>{const i=D+r,u=s?.length<27?s:s?.slice(0,23)+"...";return e.jsxs(Q,{className:t,role:"button",onClick:n,children:[e.jsx(V,{children:e.jsx("img",{src:i,alt:s})}),e.jsx(Z,{children:e.jsx(ee,{children:u})})]})},he=({image:r="",name:s="",className:t="",onClick:n})=>{const i=D+r;return e.jsxs(se,{className:t,role:"button",onClick:n,children:[e.jsx(re,{children:e.jsx("img",{src:i,alt:s})}),e.jsx(ae,{children:e.jsx(oe,{children:s})})]})},fe=()=>{const{isMobile:r}=R();l.useEffect(()=>{const s=document.getElementById("App");return r&&s&&s&&(s.style.background="none",s.style.backgroundImage=`linear-gradient(to bottom, rgba(var(--body-color--rgb), 0.0001) 160px, rgba(var(--body-color--rgb), 1) 380px), url(${ce})`,s.style.backgroundPosition="0 0",s.style.backgroundSize="135% auto",s.style.backgroundRepeat="no-repeat"),()=>{r&&s&&(s.style.background="")}},[r])},T=l.createContext(null),I=()=>l.useContext(T),Ce=g.div(()=>m`
    --row-gap: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--row-gap) 9px;
    padding-left: var(--padding-mobile);
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  `),xe=({className:r,limit:s=4,courses:t,onClick:n})=>e.jsx(Ce,{className:r,children:t.slice(0,s).map(i=>e.jsx(me,{image:i.imageCover,name:i.name,onClick:n(i._id)},i._id))}),be=g.div(()=>m`
      background: rgba(255, 255, 255, 0.2);
      width: 100%;
      height: 52px;
      display: flex;
      align-items: center;
      padding: 13px 20px;

      &:has(input:focus) {
        background: rgba(255, 255, 255, 0.3);
      }
    `),je=g.div(()=>m`
      flex-shrink: 0;
      margin-right: 8px;
    `),ve=g.input(()=>m`
      background: none;
      border: none;
      width: 100%;
      height: 100%;
      margin-right: 8px;
      font-size: 16px;
      line-height: 100%;
      color: white;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    `),Se=g.button(()=>m`
      background: rgba(255, 255, 255, 0.2);
      border-radius: 100%;
      height: 100%;
      width: auto;
      padding: 5px;
      flex-shrink: 0;
    `),ye=l.forwardRef(({handleClear:r,...s},t)=>e.jsxs(be,{children:[e.jsx(je,{as:U}),e.jsx(ve,{...s,ref:t}),s.value&&e.jsx(Se,{as:te,onClick:r})]})),_e=g.div(()=>m`
      display: flex;
      flex-direction: column;
    `),Ge=g.div(()=>m`
      border-top: var(--basic-border);
      padding: 12px 0 12px 5px;

      &:active,
      &:focus {
        background: rgba(255, 255, 255, 0.1);
      }

      &:last-child {
        border-bottom: var(--basic-border);
      }
    `),Ne=({results:r,className:s=""})=>{const{selectCourse:t}=I();return e.jsx(_e,{className:F(s,"mobile-padding"),children:r.map(n=>e.jsx(Ge,{children:e.jsx(he,{image:n.imageCover,name:n.name,onClick:t(n._id)})}))})},ke=g.div(()=>m`
    margin-bottom: 15px;
  `),we=({isOpen:r=!1,handleClose:s,devStatus:t})=>{const[n,i]=l.useState(""),{handleGroups:u,activeGroups:f,selectCourse:d,courses:_,displayedCourses:S,searchForCourses:b}=I(),{groupsNativeNames:c,tags:N}=k(t),h=X(),C=p=>{i(p.target.value),w(p)},j=l.useCallback(()=>{n&&b(null),i("")},[]),w=h(b,400);l.useEffect(()=>{r||j()},[r,j]);const G=p=>u(N[p].native);return e.jsxs(ne,{header:"Find your dream course",isOpen:r,handleClose:s,closeLabel:"Cancel",children:[e.jsx(ke,{children:e.jsx(ye,{placeholder:"Type anything...",value:n,onChange:C,handleClear:j})}),n.length<1?e.jsxs(e.Fragment,{children:[e.jsx(L,{header:"Popular",className:"mobile-padding",component:e.jsx(xe,{courses:_,onClick:d})}),e.jsx(L,{header:"Groups",className:"mobile-padding",component:e.jsx(E,{groups:c,isCourses:!0,activeGroups:f.map(p=>p.label),className:"groups",handleGroups:G,isSearchIcon:!1,handleOpen:()=>{}})})]}):e.jsx(Ne,{results:S})]})},Oe=g.div(()=>m`
      display: flex;
      align-items: center;
      height: 46px;
      max-height: 46px;
    `),Ie=g.div(()=>m`
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
      width: 100%;
      margin-bottom: 46px;
      & > * {
        color: white;
      }

      h1 {
        text-align: center;
        font-size: 38px;
        font-weight: 500;
        line-height: 114%;
        letter-spacing: -0.38px;
        margin: 0;
      }
      p {
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 136%;
      }
    `),Le=({className:r="",devStatus:s})=>{const{displayedName:t}=Y(),{handleGroups:n,activeGroups:i,searchForCourses:u}=I(),[f,d]=l.useState(!1),{groupsNativeNames:_}=k(s);function S(){d(!0)}function b(){d(!1),u(null)}return e.jsxs(e.Fragment,{children:[e.jsx(Oe,{className:r,as:E,isCourses:!0,activeGroups:i.map(c=>c.label),handleGroups:n,isSearchIcon:!0,handleOpen:S,groups:_}),e.jsxs(Ie,{className:"mobile-padding",children:[e.jsxs("h1",{children:["Welcome to ",t," Courses"]}),e.jsx("p",{children:"Learn and earn EXP"})]}),e.jsx(we,{devStatus:s,isOpen:f,handleClose:b})]})},Be="_container_8l45k_1",Re="_header_8l45k_5",Fe="_mobileSearchbar_8l45k_14",He="_banner_8l45k_50",$e="_groupCards_8l45k_56",De="_groupCardsWrapper_8l45k_60",Ee="_groupCardsHeader_8l45k_60",x={container:Be,header:Re,mobileSearchbar:Fe,banner:He,groupCards:$e,groupCardsWrapper:De,groupCardsHeader:Ee},Pe=()=>{const r=H(),{interests:s}=$(),{tags:t}=k();return l.useMemo(()=>{if(!r)return[];const i=localStorage.getItem("course-groups")||"[]",u=JSON.parse(i);return Array.isArray(u)&&u?.length?u:s?.map(f=>t[f])||[]},[r,s,t])},Ae=r=>{l.useEffect(()=>{localStorage.setItem("course-groups",JSON.stringify(r))},[JSON.stringify(r)])},Me=[{component:P,name:"Referrals",props:{isForcingHorizontal:!0}},{component:A,name:"LeftOffLesson",props:{isBannerOnly:!0}},{component:M,name:"DailyRewards",props:{isBannerOnly:!0}}],Te=[e.jsx(M,{}),e.jsx(ue,{}),e.jsx(P,{})],ze={loading:!1,displayedCourses:[],groups:[],selectedCourse:{_id:"0"},isStarted:!1,isCourseOpen:!1},ss=()=>{const{isMobile:r}=R(),{resultCourses:s=[]}=$(!0),t=H(),{favouritesKey:n,tags:i,groupsNativeNames:u,favouriteCourses:f}=k();fe();const[d,_]=l.useState([]),S=Pe(),[b,c]=l.useReducer((a,o)=>({...a,...o}),{...ze,groups:S}),{displayedCourses:N,groups:h,selectedCourse:C,isCourseOpen:j}=b;Ae(h),l.useEffect(()=>{c({displayedCourses:d})},[d]);const w=a=>{if(!a){c({displayedCourses:d,groups:S});return}const o=a.target.value.toLowerCase(),y=d.filter(({name:v,description:O,estimatedTime:J,difficulty:q})=>v.toLowerCase().includes(o)||O.map(K=>K.title).join("").toLowerCase().includes(o)||J.toString().includes(o)||q.toLowerCase().includes(o));c({displayedCourses:y})},G=a=>{if(h.map(o=>o.native).includes(a))c({groups:h.filter(o=>o.native!==a)});else{const o=i[a];c({groups:[...h,o]})}},p=a=>()=>{if(a){if(C?._id===a&&j){c({isCourseOpen:!1,isStarted:!1});return}const o=!!s&&s.some(v=>v.courseId===a),y=d.find(v=>v._id===a);y&&c({selectedCourse:y,isCourseOpen:!0,isStarted:o});return}c({isCourseOpen:!1})},z=a=>{_(o=>{const y=a.filter(v=>!o.some(O=>O._id===v._id));return[...o,...y]})},W=l.useMemo(()=>f.map(a=>a._id),[f]);return e.jsxs("div",{className:F(x.container,{mobile:r}),children:[r?e.jsxs(e.Fragment,{children:[e.jsx(T.Provider,{value:{courses:d,displayedCourses:N,activeGroups:h,handleGroups:G,selectCourse:p,searchForCourses:w},children:e.jsx(Le,{className:x.mobileSearchbar})}),t&&e.jsx(ie,{containerClassName:x.banner,containerDivProps:{style:{paddingTop:"10px"}},slides:Te,slideHeight:200,dots:!0,spaced:!0,dotsOffsetY:-9,variableWitdh:!0,slideSizeOfSlider:!0,slidesToShow:1,slidesToScroll:1,listOverflow:"visible"})]}):e.jsxs(ge,{children:[e.jsx("h2",{className:x.header,children:"Courses"}),t&&e.jsx(B,{className:x.banner,slides:Me,isBannerOnly:!0,withAnimation:!1}),e.jsxs("div",{className:x.groupCardsWrapper,children:[e.jsx("h3",{className:x.groupCardsHeader,children:"categories"}),e.jsx(de,{className:x.groupCards,activeGroups:h,handleGroups:G})]})]}),u.map(a=>i[a]).map(a=>e.jsx(pe,{handleToggle:G,isEditMode:!1,selectCourse:p,handleLoadCourses:z,group:a,isOpen:h.map(o=>o.native).includes(a.native),courses:N.filter(o=>a.native===n?W.includes(o._id):o.groups.includes(a.native))},a.native)),r||!b.isStarted?e.jsx(le,{open:j,course:C,setSelectedCourse:p()},C?._id??"CourseBannerAtCourses"):e.jsx(B,{isForcedHidden:!j,isPanelOnly:!0,onClose:p(),slides:[{component:A,name:`LeftOffLesson_profileCourse_${C?._id}`,props:{horizontalClassName:"leftOffBanner",givenCourseId:C?._id,isPanelOnly:!0}}]},C?._id??"mpbanner")]})};export{ss as default};
