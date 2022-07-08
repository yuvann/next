(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4340],{9871:function(e,t,n){"use strict";var r=n(67294),i=n(68420);t.Z=()=>r.createElement(i.Z,{boxes:[{height:"130px",width:"260px"},{height:"24px",width:"120px"},{height:"24px",width:"100%"},{height:"24px",width:"120px"},{height:"24px",width:"100%"},{height:"24px",width:"120px"},{height:"24px",width:"100%"}]})},79709:function(e,t,n){"use strict";n.d(t,{uT:function(){return o},ad:function(){return l},p6:function(){return c},lk:function(){return d},gr:function(){return s},Wl:function(){return u},pZ:function(){return p}});var r=n(16657),i=n(7056),a=n(69982);const o=(e,t)=>{let n=-1;const r=new Date(t).getDay(),i=e.indexOf(r);return n=i===e.length-1?e[0]:e[i+1],n},l=(e,t,n=-1)=>{const r=new Date(e),i=new Date(e);if(n>=0)return i.setDate(r.getDate()+(7+n-r.getDay()-1)%7+1),i;switch(t){case"once_every_week":return i.setDate(r.getDate()+7),i;case"once_every_two_weeks":return i.setDate(r.getDate()+14),i;case"once_every_one_month":return i.setMonth(r.getMonth()+1),i;case"once_every_two_months":return i.setMonth(r.getMonth()+2),i;default:return r}},c=e=>(0,r.Z)(e)?(0,i.Z)(new Date(e),"dd MMM yyyy"):(0,a.Z)(e.toLocaleString().slice(0,10),"dd/MM/yyyy",new Date).toDateString(),d=e=>["S","M","T","W","T","F","S"][e]||"",s=e=>{var t;return null!==(t={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6}[e])&&void 0!==t?t:null},u=e=>(0,r.Z)(e)?(0,i.Z)(new Date(e),"dd/MM/yyyy"):e,p=e=>(0,i.Z)(new Date(e),"dd/MM/yyyy")},1482:function(e,t,n){"use strict";n.d(t,{Gn:function(){return a},B4:function(){return o},X2:function(){return l},im:function(){return c},_L:function(){return d},dq:function(){return s},mo:function(){return u},Qk:function(){return p},qb:function(){return m},xS:function(){return f},eq:function(){return x},tY:function(){return g},cm:function(){return h},oy:function(){return y},Se:function(){return b}});var r=n(53918),i=n(68630);const a=r.default.p.attrs({className:"title4 title3-mobile"})`
  color: ${e=>e.color?e.color:e.theme.colors.shade1};
`,o=r.default.p.attrs({className:"body-small body-small-mobile"})`
  color: ${e=>e.color?e.color:e.theme.colors.shade2};
`,l=r.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,c=(r.default.div`
  display: flex;
  flex-direction: column;
`,r.default.div`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.colors.tint2};
  margin-bottom: 16px;
  cursor: pointer;
`),d=r.default.div`
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`,s=r.default.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 16px 16px;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding-inline-start: 0px;
    li: first-child {
      list-style: none;
    }
    li {
      padding-right: 26px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  p {
    margin-bottom: 8px;
  }
`,u=r.default.div`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    height: 144px;
    width: 226px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 4px;
    }
  }
`,p=r.default.div`
  display: inline-block;
  width: 14px;
  background-color: ${e=>e.cV?e.cV:null};
  border-radius: 1px;
  height: 14px;
`,m=r.default.div`
  background: ${e=>e.theme.colors.tint2};
  width: 100%;
  border-radius: 4px 4px 0 0;
  padding: 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-bottom: 8px;
  }
  div {
    margin-top: auto;
    margin-bottom: auto;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    div {
      margin-top: 0;
    }
    button {
      width: 100%;
    }
  }
`,f=r.default.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`,x=(0,r.default)(o)`
  margin-right: 8px;
`,g=r.default.div`
  padding: 4px 8px;
  background: #848b95;
  border-radius: 4px;
  height: 20px;
  width: 84px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`,h=(0,r.default)(i.h8)`
  color: ${e=>e.theme.colors.tint3};
  letter-spacing: 0.08em;
`,y=r.default.div`
  display: flex;
  width: 100%;
  height: 228px;
  border: 1px solid #ecf0f4;
  border-radius: 4px;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #ccd3df;
`,b=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`},68630:function(e,t,n){"use strict";n.d(t,{tz:function(){return i},A0:function(){return a},im:function(){return o},_L:function(){return l},gM:function(){return c},q2:function(){return d},dq:function(){return s},SE:function(){return u},uf:function(){return p},Fy:function(){return m},YS:function(){return f},nI:function(){return x},f2:function(){return g},jT:function(){return h},t6:function(){return y},IV:function(){return b},CA:function(){return v},h8:function(){return w},l:function(){return E},MF:function(){return S}});var r=n(53918);const i=r.default.div`
  margin-top: 30px;
  p {
    margin-bottom: 8px;
  }
`,a=r.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  gap: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,o=r.default.div`
  border-radius: 4px;
  border: 1px solid #ecf0f4;
  margin-bottom: 16px;
  cursor: pointer;
  padding: 20px 15px;
  max-width: 300px;
`,l=(r.default.div`
  padding: 20px 10px;
`,r.default.div`
  border-radius: 4px 4px 0 0;
  display: flex;
  background: ${e=>e.theme.colors.tint2};
  padding: 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`),c=r.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 25em));
  grid-auto-flow: column;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(5em, 10em));
  }
`,d=r.default.div`
  display: flex;
  flex-direction: row;
  justify-content: justify-content;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
    button {
      width: 100%;
    }
  }
`,s=r.default.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  background: white;
  border-radius: 4px;
  padding: 8px 10px 0px 10px;
  margin-bottom: 10px;
  ul {
    display: grid;
    grid-auto-flow: column;
    width: fit-content;
    margin: 0;
    padding-inline-start: 0px;
   /*  li: first-child {
      list-style: none;
    } */
    li {
      list-style: none;
      margin-left : 5px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  p {
    margin-bottom: 8px;
  }
`,u=r.default.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`,p=r.default.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  > * {
    width: 180px;
     
  }
`,m=r.default.p.attrs({className:"body-regular caption-mobile"})`
  color: ${e=>e.color};
`,f=r.default.p.attrs({className:"caption caption-mobile"})`
  margin-bottom: 0px;
  color: ${e=>e.color};
`,x=r.default.div`
  width: 55vw;
  @media (max-width: 768px) {
    width: 100%;
  }
`,g=r.default.div`
  width: 20vw;
  @media (max-width: 768px) {
    width: 100%;
  }
`,h=r.default.div`
  padding: 8px 16px;
`,y=r.default.div`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  border-bottom: 1px solid ${e=>e.theme.colors.lightGray2};
  ${({isCreated:e,borderColor:t})=>e&&`border: 1px solid ${t};border-top-left-radius: 8px;border-top-right-radius: 8px;`}
`,b=r.default.p`
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`,v=r.default.p.attrs({className:"title4 title3-mobile"})`
  margin-bottom: 20px;
`,w=r.default.p`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
`,E=r.default.div`
  padding: 4px 8px;
  background: ${e=>e.theme.colors.warning?e.theme.colors.warning:"#f3ba50"};
  border-radius: 4px;
  height: 20px;
`,S=r.default.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
`},41210:function(e,t,n){"use strict";n.d(t,{y$:function(){return a},B4:function(){return o},Tu:function(){return l},S5:function(){return c},$q:function(){return d},O7:function(){return s},AJ:function(){return u},m8:function(){return p},n1:function(){return m},i7:function(){return f},YS:function(){return x},X2:function(){return g},sg:function(){return h},CJ:function(){return y},bk:function(){return b},nM:function(){return v},zv:function(){return w},y:function(){return E},kl:function(){return S}});var r=n(53918),i=n(42809);r.default.p.attrs({className:"title4 title4-mobile"})``;const a=r.default.p.attrs({className:"title3 title3-mobile"})``,o=r.default.p.attrs({className:"body-small body-small-mobile"})`
  color: ${e=>e.color};
`,l=r.default.p.attrs({className:"caption caption-mobile"})`
  color: ${e=>e.theme.colors.shade3};
  margin-top: 5px !important;
  margin-bottom: 5px !important;
`,c=(0,r.default)(i.qz)`
  width: 90%;
  margin: 10px;
  padding: 10px;
`,d=r.default.p.attrs({className:"button-small"})`
  margin-bottom: 0px !important;
`,s=(r.default.div`
  align-content: center;
  justify-content: center;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px !important;
  justify-items: center;
  alignitems: center;
`,r.default.div`
  border: 1px solid ${e=>e.theme.colors.success1};
  background-color: ${e=>e.theme.colors.success2};
  color: ${e=>e.theme.colors.success1};
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  width: 90%;
`,r.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`),u=r.default.div`
  background: ${e=>e.isAvailable?e.isSelected?e.theme.colors.brandMain:e.theme.colors.tint1:(e.isSelected,e.theme.colors.tint2)};
  color: ${e=>e.isAvailable?e.isSelected?e.theme.colors.tint3:e.theme.colors.shade1:(e.isSelected,e.theme.colors.tint2)};
  border: 1px solid #d6dbe2;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  padding: 9px;
  min-width: 40px;
`,p=(0,r.default)(a)`
  margin-bottom: 7px !important;
  margin-top: 7px !important;
`,m=r.default.div`
  background: border-box;
  padding: 2px;
  border: 2px solid
    ${e=>e.isSelected?"rgb(0, 0, 0)":"transparent"};
  border-radius: 8px;
`,f=r.default.div`
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  padding: 9px;
  min-width: 41px;
  min-height: 38px;
  background: ${e=>e.color};
`,x=(r.default.div`
  padding: 16px;
  > * {
    margin-bottom: 10px;
  }
`,r.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,r.default.p.attrs({className:"title4 title3-mobile"})`
  color: ${e=>e.color?e.color:e.theme.colors.shade1};
`,r.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`,r.default.p.attrs({className:"caption caption-mobile"})`
  margin-bottom: 0px;
  color: ${e=>e.color};
`),g=(r.default.span.attrs({className:"body-regular body-regular-mobile"})`
  margin-right: 8px;
  color: ${e=>e.color};
`,r.default.span.attrs({className:"body-small body-small-mobile"})`
  color: ${e=>e.color};
`,r.default.div`
  text-align: center;
  padding: 10px;
`,r.default.div`
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > * {
    margin: 10px;
  }
`,r.default.div`
  display: flex;
  flex-direction: row;
`),h=r.default.div`
  display: flex;
  flex-direction: column;
  input {
    max-width: 33%;
    border-radius: 5px;
    border: 1px solid ${e=>e.theme.colors.tint3};
    padding: 4px 10px;
  }
  p {
    margin-bottom: 0px !important;
  }
`,y=r.default.div`
  margin: 5px 10px 10px 0px !important;
`,b=r.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0px !important;
`,v=r.default.div`
  display: flex;
  justify-content: center;
`,w=r.default.div`
  background: ${e=>e.color?e.color:e.theme.colors.lightGray2};
  ${({isOrder:e})=>e&&"\n    border: 1px solid #926902;\n  "}

  border-radius: 4px;
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  width: 100%;
  padding: 0px 10px;
  align-items: center;
`,E=((0,r.default)(o)`
  font-weight: 700px;
`,(0,r.default)(o)`
  margin-bottom: 5px !important;
  font-size: 12px !important;
`),S=r.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-left: 16px;
`},76823:function(e,t,n){"use strict";n.d(t,{R:function(){return c}});var r=n(93311),i=n(64532),a=n.n(i),o=n(33125),l=n(12791);class c{async fetchSubscriptions(e){const t=await l.i.fetchIdToken(),n=new o.fX,i=await n.fetchCustomer(e,t),c=`${r.q.functions.FASITY_FUNCTION}/bikayiSubscription-listSubscriptions`,d={storeId:e,customerId:i.id},s=await a().post(c,d,{headers:{"content-type":"application/json"},responseType:"text"});if("string"==typeof s.data.resp)return[];return s.data.resp.map((e=>Object.assign(Object.assign({},e.data),{docId:e.id}))).sort(((e,t)=>new Date(e.items[0].nextActiveDate).getTime()-new Date(t.items[0].nextActiveDate).getTime()))}async getSubscriptionDetails(e){const t=`${r.q.functions.FASITY_FUNCTION}/bikayiSubscription-getSubscription`,n={subscriptionId:e};return(await a().post(t,n,{headers:{"content-type":"application/json"},responseType:"text"})).data.resp}async fetchOrders(e,t){const n=`${r.q.functions.FASITY_FUNCTION}/bikayiSubscription-listOrdersByStoreAndSubscriptionId`,i={storeId:e,subscriptionId:t},o=await a().post(n,i,{headers:{"content-type":"application/json"},responseType:"text"});if("string"==typeof o.data.resp)return"NO_DATA";return o.data.resp.map((e=>Object.assign(Object.assign({},e.data),{docId:e.id})))}async updateSubscription(e){const t=`${r.q.functions.FASITY_FUNCTION}/bikayiSubscription-cancelSubscriptionV2`,n={subscriptionId:e};return await a().post(t,n,{headers:{"content-type":"application/json"},responseType:"text"})}}},7034:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var r=n(43324);function i(){const e=(0,r.CG)((e=>{var t;return null===(t=e.storeState.snapshotStore)||void 0===t?void 0:t.meta}));return{formatCurrency:function(t,n=!1){var r;try{const i=new Intl.NumberFormat("en-IN",{style:"currency",currency:null!==(r=null===e||void 0===e?void 0:e.currency)&&void 0!==r?r:"INR"}).format;if(n){return i(t).split(".")[0]}return i(t)}catch(i){return`\u20b9${t}`}}}}},53857:function(e,t,n){"use strict";n(67294);var r=n(53918),i=n(85893),a=r.default.div.withConfig({displayName:"LayoutWrapper__LayoutWrapperStyle",componentId:"sc-b8rzhv-0"})([".wrapper__content{min-height:100vh;overflow-x:inherit;}"]);t.Z=function(e){return(0,i.jsx)(a,{children:(e.SSR,(0,i.jsx)("div",{className:"wrapper__content",children:e.children}))})}},65711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(53857),i=n(67294),a=n(76823),o=n(53918);const l=o.default.button`
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({active:e})=>e&&"\n    border-bottom: 2px solid black;\n    opacity: 1;\n    font-weight : 700;\n  "}
`,c=o.default.div`
  display: flex;
  border-bottom: 1px solid #c4c4c4;
`;var d=({tablist:e,children:t,activeTab:n,onChanginTab:r})=>{const[a,o]=(0,i.useState)(n);return i.createElement(i.Fragment,null,i.createElement(c,null,e.map((e=>i.createElement(l,{key:e.title,active:a===e.key,onClick:()=>{r(e.key),o(e.key)}},e.title)))),i.createElement("p",null),t)},s=n(25617),u=n(77646),p=n(68630),m=n(7056),f=n(43324),x=n(8195),g=n(1926),h=n(42809),y=n(79709),b=n(1482),v=n(41210);var w=({props:e,docId:t,status:n,subscriptionCreatedDate:r,onCancelingOrder:a})=>{const{startDate:o,nextActiveDate:l,cV:c,tV:d,name:s,price:u,image:w,quantity:E,daysOfWeek:S,frequency:k}=e,[D,O]=(0,i.useState)(l),N=x.N.getInstance(),[C,T]=(0,i.useState)(n),[I,_]=(0,i.useState)(!1);return i.createElement(p._L,null,i.createElement(p.q2,null,i.createElement("div",null,i.createElement(b.Gn,null,"Subscription - ",t),i.createElement(b.B4,null,"Subscription placed :"," ",r?(0,m.Z)(new Date(r),"dd MMM yyyy"):(0,m.Z)(new Date,"dd MMM yyyy"))),"active"==C&&i.createElement(h.qz,{buttonName:"Cancel",buttonStyle:"primary",buttonSize:"small",buttonPadding:"8px 16px",click:()=>(()=>{const e=new g.C,n=f.ZP.getState().storeState.store.meta.phoneNumber,r=`Hello, I want to cancel my subscription(No.\n      ${t}): \n      \n ${N.websiteLink()}/pay/${t}`;e.msgWhatsapp(r,n)})()})),i.createElement(p.dq,null,i.createElement(b.mo,null,i.createElement("img",{src:w,alt:""})),i.createElement(p.SE,null,i.createElement(p.gM,null,i.createElement(b.Gn,null,s),i.createElement(b.B4,null,"Qty"),i.createElement(b.B4,null,"Price")),i.createElement(p.gM,null,i.createElement("div",null,(c||d)&&i.createElement("ul",null,c&&i.createElement("li",null,i.createElement(b.Qk,{cV:c})),d&&i.createElement("li",null,i.createElement(b.B4,null,d)))),i.createElement("div",null,i.createElement(b.B4,null,E)),i.createElement(b.B4,null,u)))),i.createElement(p.uf,null,i.createElement(v.YS,null,"Frequency"),i.createElement(v.YS,null,"StartDate")),i.createElement(p.uf,null,i.createElement(p.IV,null,(()=>{if((null===S||void 0===S?void 0:S.length)>0){return 7===(null===S||void 0===S?void 0:S.length)?"Once everyday":`On ${S.map((e=>(0,y.lk)(e))).join(" ")}`}switch(k){case"once_every_week":return"Once every week";case"once_every_two_weeks":return"Once every two weeks";case"once_every_one_month":return"Once every month";case"once_every_two_months":return"Once every two months";default:return""}})()),i.createElement(p.IV,null,(0,m.Z)(new Date(o),"dd/MM/yyyy"))))},E=n(7034),S=n(24650);var k=({docId:e,items:t,tab:n,orders:r,activeDatecalculated:a,ordersToSkip:o,actionService:l})=>{const[c,d]=(0,i.useState)(a);(0,i.useEffect)((()=>{d(a)}),[a]);const s=(0,i.useCallback)(((e,t,n)=>{const r=new Date(e);return"add"===n?r.setDate(r.getDate()+t):r.setDate(r.getDate()-t),(0,y.p6)(r)}),[]),u=(0,E.U)(),{cutOffDays:p,daysOfWeek:f,frequency:x,price:g}=t,[h,b]=(0,i.useState)([]),v=(0,i.useCallback)((()=>{const e=[],t=r.length>0?r.filter((e=>{new Date(1e3*e.timestamp._seconds).toDateString(),(new Date).toDateString()})):[];return t.length>0?e.push({lastOrder:(0,m.Z)(new Date,"dd MMM yyyy"),title:`Total : ${u.formatCurrency(g)}`,hasOrderGenerated:!0,id:t[0].docId}):e.push({lastOrder:(0,m.Z)(new Date(c),"dd MMM yyyy"),title:`Total : ${u.formatCurrency(g)}`,hasOrderGenerated:!1}),e}),[c,p,s,r]),w=(0,i.useCallback)((()=>{const e=v(),t=e.length>0?e:[];let n=c;for(;t.length<4;){const e=(null===f||void 0===f?void 0:f.length)>0?(0,y.p6)((0,y.ad)(n,x,(0,y.uT)(f,n))):(0,y.p6)((0,y.ad)(n,x));t.push({lastOrder:e,title:`Total : ${u.formatCurrency(g)}`,hasOrderGenerated:!1}),n=e}return t}),[s,p,f,x,v,c]);(0,i.useEffect)((()=>{b(w())}),[r,e,w]);return i.createElement(i.Fragment,null,"past"==n?i.createElement(D,{orders:r,actionService:l,cutOffDays:p,ordersToSkip:[]}):i.createElement(i.Fragment,null,h.map(((e,t)=>i.createElement(O,{lastOrder:e.lastOrder,subtitle:e.title,hasOrderGenerated:e.hasOrderGenerated,isCreated:e.hasOrderGenerated,key:t,orderId:null===e||void 0===e?void 0:e.id,onClick:()=>{return t=e.id,void(e.hasOrderGenerated&&l.redirectToOrderPlacedPage(t));var t},ordersToSkip:o})))))};const D=({orders:e,ordersToSkip:t,actionService:n,cutOffDays:r})=>{const a=(0,E.U)();return i.createElement(i.Fragment,null,(null===e||void 0===e?void 0:e.length)>0?i.createElement(i.Fragment,null,e.map(((e,r)=>{var o;return i.createElement(O,{lastOrder:`Order ID: ${e.uid}`,subtitle:`Delivered: ${(0,y.Wl)(e.date)}    Total:${a.formatCurrency(null===(o=e.items)||void 0===o?void 0:o[0].price)} `,isCreated:!1,hasOrderGenerated:!0,key:r,orderId:e.docId,onClick:()=>{return t=e.docId,void n.redirectToOrderPlacedPage(t);var t},ordersToSkip:t})}))):i.createElement("p",null,"No orders Available"))},O=({lastOrder:e,subtitle:t,hasOrderGenerated:n,onClick:r,orderId:a,isCreated:l,ordersToSkip:c})=>{const d=(0,o.useTheme)();return i.createElement(p.t6,{onClick:()=>r(a),isCreated:l,borderColor:d.colors.lightGray2},i.createElement(p.jT,null,l?i.createElement(p.MF,null,i.createElement(b.Gn,null,e),i.createElement(p.l,null,i.createElement(p.h8,null,"IN PROGESS"))):i.createElement(i.Fragment,null,(null===c||void 0===c?void 0:c.length)>0&&c.includes(new Date(e).toDateString())?i.createElement(p.MF,null,i.createElement(b.Gn,null,e),i.createElement(b.tY,{style:{marginTop:2}},i.createElement(b.cm,{color:d.colors.tint1},"SKIPPED"))):i.createElement(p.Fy,null,e)),i.createElement(p.YS,null,t)),i.createElement(p.jT,null,n?i.createElement(S.Z,null):i.createElement(i.Fragment,null)))},N={cod:"Cash on Delivery",online:"Online",partialCOD:"Partial COD",manual:"Manual"};var C=({customerName:e,phoneNumber:t,alternateNumber:n,address:r,paymentMethod:a,customFieldsResponse:l})=>{const c=(0,o.useTheme)();return i.createElement(p.f2,null,i.createElement(p.im,null,i.createElement(p.CA,null,"Shipping address"),i.createElement(p.Fy,{color:c.colors.shade2},e),i.createElement(p.Fy,{color:c.colors.shade2},t),i.createElement(p.Fy,{color:c.colors.shade2},n),i.createElement(p.Fy,{color:c.colors.shade2},r.address,", ",r.city," , ",r.pinCode," ,"," ",r.pinCode)),i.createElement(p.im,null,i.createElement(p.CA,null,"Payment Method"),i.createElement(p.Fy,{color:c.colors.shade2},N[a])),(null===l||void 0===l?void 0:l.length)&&i.createElement(p.im,null,i.createElement(p.CA,null,"Checkout Questions"),l.map(((e,t)=>i.createElement("div",{className:"margin-t16 body-regular caption-mobile",key:t},i.createElement("div",{className:"checkout bold-desk bold-mob"},e.question),i.createElement("div",{className:"checkout"},e.answer))))))},T=n(9871);var I=({subscriptionId:e,actionService:t})=>{var n;const[r,o]=(0,i.useState)("upcoming"),l=new a.R,c=(0,s.v9)((e=>e.storeState.store)),[m,x]=(0,i.useState)({}),g=(0,f.CG)((e=>e.customerState.isLoggedIn)),h=(0,f.CG)((e=>e.storeState.store.meta)),y=(0,f.CG)((e=>e.contextState.storeUrlPrefix)),[b,v]=(0,i.useState)(!1),[E,S]=(0,i.useState)(!1),[D,O]=(0,i.useState)(!0),[N,I]=(0,i.useState)([]),[_,$]=(0,i.useState)("");(0,i.useEffect)((()=>{l.getSubscriptionDetails(e).then((e=>{x(e),$(e.items[0].nextActiveDate),v(!0),O(!1)})).catch(),O(!0),l.fetchOrders(c.meta.id,e).then((e=>{I("NO_DATA"==e?[]:e),S(!0),O(!1)})).catch()}),[]);return g&&h.hasAccessForFeature(u.AdvancedEcommerceFeatures.SUBSCRIPTION_SYSTEM)||window.location.replace(y),b||E||i.createElement(i.Fragment,null),i.createElement(p.tz,{className:"container"},i.createElement(p.A0,null,b&&i.createElement(i.Fragment,null,i.createElement(p.nI,null,i.createElement(w,{props:m.items[0],docId:e,status:m.status,subscriptionCreatedDate:m.subscriptionCreatedDate,onCancelingOrder:e=>{$(e)}}),i.createElement(d,{tablist:[{key:"upcoming",title:"Upcoming"},{key:"past",title:"Past deliveries"}],activeTab:r,onChanginTab:e=>o(e)},i.createElement(k,{docId:m.docId,items:m.items[0],tab:r,orders:N,activeDatecalculated:_||m.items[0].nextActiveDate,ordersToSkip:null===(n=null===m||void 0===m?void 0:m.orderToSkip)||void 0===n?void 0:n.cc.map((e=>new Date(e).toDateString())),actionService:t}))),i.createElement(C,{customerName:m.customerName,phoneNumber:m.phoneNumber,alternateNumber:m.alternateNumber,address:m.address,paymentMethod:m.pM,customFieldsResponse:m.customFieldsResponse}))),D&&i.createElement(T.Z,null))},_=n(11163),$=n(95814),M=n(85893),j=function(){var e=(0,_.useRouter)();var t=$.c.getInstance(e),n=e.query.subscriptionId;return(0,M.jsx)(I,{subscriptionId:n,actionService:t})},F=function(){return(0,M.jsx)(r.Z,{children:(0,M.jsx)(j,{})})}},71384:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[username]/subscriptions/[subscriptionId]",function(){return n(65711)}])}},function(e){e.O(0,[7056,9982,9774,2888,179],(function(){return t=71384,e(e.s=t);var t}));var t=e.O();_N_E=t}]);