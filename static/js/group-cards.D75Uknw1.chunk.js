import{p as R,hw as F,x as K,by as h,bz as p,J as k,bM as $,bJ as T,q as N,r as d,B as e,E as C,bL as A}from"./index.BDWbwHp_.js";import{P as q,et as H,eu as J,ba as Q,aI as W,ay as V,ab as X,dr as Y,ev as Z,eq as O,ew as ee,D as te}from"./index.CMGJEYRC.chunk.js";const ie=s=>{const x=R(),[r,{isLoading:f,isSuccess:g,isFetching:i,isError:u}]=F(),{_id:l,roles:m}=K();return{isLoading:i||f,fetchCourses:async n=>{let o={};return x&&(m&&!m.includes(q.ADMIN)&&s&&(o.authors=l),o.isInDevelopment=!!s),r({...o,...n}).unwrap()},isSuccess:g,isError:u}},se=h.div(()=>p`
      display: flex;
      flex-direction: column;
      margin-bottom: 36px;

      &.empty {
        margin-bottom: 29px;
        gap: 0;
      }
      &.mobile {
        margin-bottom: 25px;
        &.empty {
          margin-bottom: 12px;
        }
      }
      transition: margin 0.1s;
    `),oe=h(k.div)(()=>p`
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      overflow: hidden;

      .inview {
        height: fit-content;
        z-index: 1;
        &:hover {
          z-index: 2;
        }
      }

      &.mobile {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0 17px;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      &::-webkit-scrollbar {
        display: none;
      }
    `),ae=h.div(()=>p`
      transition: margin 0.3s;
      margin-bottom: 24px;
      &.mobile {
        margin: 0 17px;
      }
      &.empty {
        margin-bottom: 0;
      }
    `);h.div(()=>p`
      /* width: 180px;
      min-width: 180px;
      height: 180px; */
    `);const ne=h.div(({$theme:s})=>p`
      display: flex;
      align-items: center;
      position: relative;
      height: 76px;
      cursor: pointer;
      &,
      & * {
        user-select: none;
      }
      color: ${s===$.DARK?"#fff":"#111"};

      & .group-img {
        margin-right: 24px;
        margin-left: 7px;
      }

      &:not(.mobile) ${_}, &:not(.mobile) ${P} {
        margin-bottom: -5px;
      }

      &.mobile {
        height: 68px;
        padding: 8px 0 8px 9.5px;
        transition: margin 0.3s ease-in-out;
        ${E} {
          top: 0;
          height: 100%;
          width: 100%;
        }

        ${_} {
          font-weight: 400;
        }

        &.open {
          margin-bottom: 14px;
          ${_} {
            font-weight: 500;
          }
          ${E} {
            height: 42px;
            width: 100%;
            top: 14px;
          }
        }
      }
    `),E=h.div(()=>p`
      position: absolute;
      top: 13px;
      right: 0;
      border-radius: 7px;
      height: 56px;
      width: calc(100% - 30px);
      z-index: 1;
      transition: all 0.3s ease-in-out;
    `),_=h.h6(({$theme:s})=>p`
      flex: 1;
      z-index: 2;
      font-size: 20px;
      font-weight: 500;
      line-height: 1;
      text-transform: capitalize;
      color: ${s===$.DARK?"#fff":"#111"};
      letter-spacing: -0.5px;
      transition: 0.3s;
    `);h.div(()=>p`
      width: auto;
      height: 50%;
      margin-right: 20px;
      margin-top: 5px;
    `);const P=h.div(()=>p`
      z-index: 2;
      padding: 5px;
      height: 100%;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: inherit;
      }
    `);h.div(()=>p`
      position: relative;
      height: 41px;
      width: 41px;
      min-height: 41px;
      min-width: 41px;
      z-index: 2;
      margin-right: 15px;
    `);h.img(()=>p`
      position: absolute;
      transform: rotate(10deg);
      height: 100%;
      width: 100%;
      min-height: 100%;
      min-width: 100%;
    `);const re=({isOpen:s,group:x,onClick:r,isLoading:f,className:g=""})=>{const i=T(),{isMobile:u}=N(),l=d.useRef(null),m=H(l).replace(/(rgba\(\d+,\d+,\d+,).*\)/,"$1 0.1)"),t=d.useMemo(()=>m.replace("0.1","0.5"),[m]),n=o=>{f||r(o)};return e.jsxs(ne,{$theme:i,role:"button",onClick:n,className:C({[g]:!!g,mobile:u,open:s}),children:[e.jsx(J,{group:x,size:u?41:59,ref:l}),e.jsx(E,{className:"blur-15",style:{background:i===$.DARK?m:t}}),e.jsx(_,{$theme:i,children:x.label}),e.jsx(P,{children:s?e.jsx(Q,{}):e.jsx(W,{})})]})},le={isOpen:!1,limit:12,page:1,totalPages:1},ge=d.memo(({group:s,handleLoadCourses:x,courses:r,selectCourse:f,isEditMode:g=!1,isOpen:i=!1,handleToggle:u})=>{const{isMobile:l}=N(),{fetchCourses:m,isLoading:t,isError:n}=ie(g),[o,y]=d.useState([]),[{limit:D,page:v,totalPages:z},L]=d.useReducer((a,c)=>({...a,...c}),le),b=d.useMemo(()=>v<=z&&i,[v,z,i]),w=l?1:4,B=d.useMemo(()=>r.length<1?w:w-(r.length+4)%w,[r.length,w]);d.useEffect(()=>{y(r)},[r.map(a=>a._id).join(",")]);const M=d.useCallback(async()=>{t||i&&b&&(n||m({page:v,limit:D,groups:s.native}).then(a=>{if(!a)return;const{items:c,totalPages:j}=a;if(c.length>0)x(c);else{L({page:j>0?j:1,totalPages:j});return}L({totalPages:j,page:v+1})}).catch(a=>{console.error(a)}))},[s.native,i,b,t,v,n]),G=d.useCallback(a=>{a&&!t&&M()},[M,t]),I=V({handler:G,debounceTime:200}),U=g?{customLabel:"Edit course",isEditMode:!0}:{};return e.jsx(X,{children:e.jsxs(se,{className:C({mobile:l,empty:o.length<1&&!b&&!t||!i}),children:[e.jsx(ae,{className:C({mobile:l,empty:o.length<1&&!b&&!t||!i}),as:re,group:s,isOpen:i,onClick:()=>u(s.native),isLoading:t}),e.jsx(A,{children:e.jsxs(oe,{animate:i?{height:"auto",scale:1,opacity:1}:{height:0,scale:.98,opacity:0},className:C({mobile:l}),children:[e.jsx(A,{exitBeforeEnter:!0,children:o.length>0&&i&&e.jsx(e.Fragment,{children:o.map((a,c)=>e.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{delay:0}},transition:{delay:.08*(c%4)+.05*(c/4)},children:e.jsx(Y,{course:a,onClick:f(a._id),...U})},a._id))})}),e.jsx(A,{children:b&&e.jsx(e.Fragment,{children:[...Array(B).keys()].map((a,c)=>e.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.1*(4+c)},children:e.jsx(Z,{isMobile:l,ref:c===0?I:void 0},"CourseCardSkeleton"+a)},`skeletron-${c}`))})}),!b&&!t&&!o.length&&!r.length&&i&&e.jsx(k.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},style:{padding:"15px 0px 10px 10px"},children:"No courses"})]})})]})})}),ce="_container_14eyn_1",de="_slide_14eyn_7",he="_categoriesSlider_14eyn_26",S={container:ce,slide:de,categoriesSlider:he};function ue({activeGroups:s,handleGroups:x,className:r="",devStatus:f}){const g=T(),i=R(),{groupsNativeNames:u,tags:l}=O(f),m=d.useMemo(()=>u.map(t=>{const n=l[t];if(!n||!i&&t==="favourites")return null;const o=s.map(y=>y.native).includes(t);return e.jsx(ee,{isActive:o,group:n,onClick:()=>x(n.native)},t)}).reduce((t,n,o,y)=>(o%2===0&&t.push([n,y[o+1]]),t),[]).map((t,n)=>e.jsx("div",{className:S.slide,children:t},"course-group-picker"+n)),[...u,Object.values(s).map(t=>t.native).join("")]);return e.jsx("div",{className:C(S.container,S[g],{[r]:!!r}),children:e.jsx(te,{containerClassName:S.categoriesSlider,slides:m.filter(Boolean),slidesToShow:4,slideWidth:245,slideHeight:148,slidesToScroll:2,variableWitdh:!0,arrows:"sides",gap:16,arrowsOffset:40})})}export{ge as C,ue as G};
