(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4612],{15282:function(e,t,n){"use strict";n.d(t,{p:function(){return d}});var i=n(64532),o=n.n(i),r=n(47984),a=n(52923),s=n(93311);class d{constructor(){this.http=o()}static getInstance(){return this.instance||(this.instance=new d),this.instance}async getOrderDetails(e){const t={"Content-Type":"text/plain"},n=`${s.q.functions.FASITY_FUNCTION}/ordersApiFunctions-getSingleOrder`,i=a.j.encrypt(JSON.stringify({orderId:e}));try{const e=await r.sM.sendData({apiPath:n,requestBody:i,requestHeader:t});if(e.data)return JSON.parse(a.j.decrypt(e.data))}catch(o){console.log("failing because ",o)}return{}}async cancelOrder(e,t,n){const i={"Content-Type":"text/plain"},o=`${s.q.functions.CLOUD_FUNCTION_URL_INDIA}/ordersApiFunctions-cancelOrder`,d=a.j.encrypt(JSON.stringify({orderId:e,cancellationReason:t,cancellationComment:n}));try{const e=await r.sM.sendData({apiPath:o,requestBody:d,requestHeader:i});if(e.data)return JSON.parse(a.j.decrypt(e.data))}catch(l){console.log("failing because ",l)}return{}}async returnOrder(e,t){const n={"Content-Type":"text/plain"},i=`${s.q.functions.CLOUD_FUNCTION_URL_INDIA}/ordersApiFunctions-returnOrder`,o=a.j.encrypt(JSON.stringify({orderId:e,returnRequests:t}));try{const e=await r.sM.sendData({apiPath:i,requestBody:o,requestHeader:n});if(e.data)return JSON.parse(a.j.decrypt(e.data))}catch(d){console.log("failing because ",d)}return{}}}},7943:function(e,t,n){"use strict";n.d(t,{gA:function(){return a},ij:function(){return s},Yw:function(){return d},$t:function(){return l},rM:function(){return c},B4:function(){return m},RF:function(){return p},YS:function(){return u},l_:function(){return f},f4:function(){return h},TZ:function(){return g}});n(67294);var i=n(1852),o=n(53918),r=n(85893),a=function(e){var t=e.children;return(0,i.useMediaQuery)({minWidth:769})?(0,r.jsx)(r.Fragment,{children:t}):null},s=function(e){var t=e.children;return(0,i.useMediaQuery)({maxWidth:768})?(0,r.jsx)(r.Fragment,{children:t}):null},d=o.default.div.withConfig({displayName:"Commonstyle__DateWrapperContainer",componentId:"sc-31lzko-0"})(["padding:16px;> *{margin-bottom:10px;}"]),l=o.default.div.withConfig({displayName:"Commonstyle__TitleWrapper",componentId:"sc-31lzko-1"})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]),c=o.default.p.attrs({className:"title4 title3-mobile"}).withConfig({displayName:"Commonstyle__MobileTitle3",componentId:"sc-31lzko-2"})(["margin-left:0 !important;margin-top:0;color:",";"],(function(e){return e.color?e.color:e.theme.colors.shade1})),m=o.default.p.attrs({className:"body-small body-small-mobile"}).withConfig({displayName:"Commonstyle__BodySmall",componentId:"sc-31lzko-3"})(["color:",";"],(function(e){return e.color})),p=o.default.div.withConfig({displayName:"Commonstyle__CalenderTitleWrapper",componentId:"sc-31lzko-4"})(["display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;"]),u=o.default.p.attrs({className:"caption caption-mobile"}).withConfig({displayName:"Commonstyle__Caption",componentId:"sc-31lzko-5"})(["margin-bottom:0px;color:",";"],(function(e){return e.color})),f=o.default.span.attrs({className:"body-regular body-regular-mobile"}).withConfig({displayName:"Commonstyle__BodyRegularSpan",componentId:"sc-31lzko-6"})(["margin-right:8px;color:",";"],(function(e){return e.color})),h=o.default.span.attrs({className:"body-small body-small-mobile"}).withConfig({displayName:"Commonstyle__BodySmallSpan",componentId:"sc-31lzko-7"})(["color:",";"],(function(e){return e.color})),g=(o.default.div.withConfig({displayName:"Commonstyle__FooterWrapper",componentId:"sc-31lzko-8"})(["text-align:center;padding:10px;"]),o.default.div.withConfig({displayName:"Commonstyle__SlotAvailabilitycontainer",componentId:"sc-31lzko-9"})(["padding:10px;text-align:center;display:flex;justify-content:center;flex-direction:column;align-items:center;> *{margin:10px !important;}"]))},41268:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return he}});var i=n(59499),o=n(67294),r=n(22314),a=n(17361),s=n(50029),d=n(87794),l=n.n(d),c=n(25617),m=n(53918),p=n(15282);var u=m.default.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  isolation: isolate;
`,f=n(7943),h=m.default.div.withConfig({displayName:"Background",componentId:"sc-esqipa-0"})(["position:absolute;top:0px;left:0px;width:100%;z-index:-1;height:240px;background-color:",";"],(function(e){return e.theme.colors.shade1})),g=n(42809),x=n(31132),y=n(29422),v=n(85893),b=m.default.div.withConfig({displayName:"CommonStyles__Container",componentId:"sc-t96a9c-0"})(["border-radius:4px;border:1px solid ",";padding:16px;background-color:",";@media only screen and (min-width:768px){border:none;padding:0px;}"],(function(e){return e.theme.colors.tint3}),(function(e){return e.theme.colors.tint1})),w=m.default.p.attrs({className:"title3 title3-mobile"}).withConfig({displayName:"CommonStyles__Title",componentId:"sc-t96a9c-1"})(["margin-bottom:16px;"]),j=m.default.div.withConfig({displayName:"BookingDetails__Detail",componentId:"sc-1t06fjd-0"})(["display:flex;align-items:center;justify-content:space-between;margin-top:16px;"]),_=m.default.p.attrs({className:"body-small body-small-mobile"}).withConfig({displayName:"BookingDetails__DetailText",componentId:"sc-1t06fjd-1"})(["max-width:60%;text-align:end;"]),C=m.default.div.withConfig({displayName:"BookingDetails__PaymentContainer",componentId:"sc-1t06fjd-2"})(["display:flex;flex-direction:row;align-items:center;"]),N=(0,m.default)(g.sz).attrs((function(e){return{color:e.theme.colors.shade1}})).withConfig({displayName:"BookingDetails__StyledInfoIcon",componentId:"sc-1t06fjd-3"})(["margin-left:8px;"]),I=function(e){var t,n,i=e.order,r=(0,o.useState)({}),a=r[0],s=r[1];return(0,o.useEffect)((function(){i.items&&s(i.items[0])}),[i]),(0,v.jsxs)(b,{children:[(0,v.jsx)(w,{children:"Booking details"}),(0,v.jsxs)(j,{children:[(0,v.jsx)(_,{children:"Total paid"}),(0,v.jsxs)(C,{children:[(0,v.jsx)(_,{children:null===a||void 0===a?void 0:a.price}),(0,v.jsx)(N,{})]})]}),(0,v.jsxs)(j,{children:[(0,v.jsx)(_,{children:"Date & time"}),a.bookingSlot?(0,v.jsxs)(_,{children:[(0,x.Z)(new Date((null===a||void 0===a?void 0:a.bookingDate)+" "+a.bookingSlot.split("-")[0]),"dd MMM, hh:mmaaa")," ","to",(0,x.Z)((0,y.Z)(new Date((null===a||void 0===a?void 0:a.bookingDate)+" "+a.bookingSlot.split("-")[0]),{minutes:null===a||void 0===a?void 0:a.bookingDurationInMins})," hh:mm aaa")]}):null]}),(0,v.jsxs)(j,{children:[(0,v.jsx)(_,{children:"Your details"}),(0,v.jsxs)(_,{children:[i.customerName," ",null===i||void 0===i?void 0:i.phoneNumber]})]}),i.address&&(0,v.jsxs)(j,{children:[(0,v.jsx)(_,{children:"Your address"}),(0,v.jsx)(_,{children:i.address.address+", "+(null===(t=i.address.city)||void 0===t||null===(n=t.split(",")[0])||void 0===n?void 0:n.trim())+", "+i.address.pinCode})]})]})},k=m.default.div.withConfig({displayName:"ConfirmationTime__Container",componentId:"sc-zz90vu-0"})(["padding:32px 0px;"]),S=m.default.div.withConfig({displayName:"ConfirmationTime__CheckIconContainer",componentId:"sc-zz90vu-1"})(["background-color:",";border-radius:24px;padding:4px 8px;margin-bottom:20px;width:fit-content;@media only screen and (min-width:768px){background-color:",";}"],(function(e){return e.theme.colors.tint1}),(function(e){return e.theme.colors.shade1})),D=m.default.p.attrs({className:"title2 title2-mobile"}).withConfig({displayName:"ConfirmationTime__Title",componentId:"sc-zz90vu-2"})(["color:",";@media only screen and (min-width:768px){color:",";}"],(function(e){return e.theme.colors.tint1}),(function(e){return e.theme.colors.shade1})),O=m.default.div.withConfig({displayName:"ConfirmationTime__TimeContainer",componentId:"sc-zz90vu-3"})(["display:flex;align-items:center;flex-direction:row;margin-top:12px;"]),z=(0,m.default)(g.Qu).attrs({width:20,height:20}).withConfig({displayName:"ConfirmationTime__StyledCalendarIcon",componentId:"sc-zz90vu-4"})(["margin-right:8px;"]),T=m.default.p.attrs({className:"body-regular body-regular-mobile"}).withConfig({displayName:"ConfirmationTime__Time",componentId:"sc-zz90vu-5"})(["color:",";@media only screen and (min-width:768px){color:",";}"],(function(e){return e.theme.colors.tint1}),(function(e){return e.theme.colors.shade1})),B=function(e){var t=e.appointmentTime,n=e.appointmentDuration,i=(0,m.useTheme)(),o=i.isMobile;return(0,v.jsxs)(k,{children:[(0,v.jsx)(S,{children:(0,v.jsx)(g.nQ,{color:o?i.colors.shade1:i.colors.tint1})}),(0,v.jsx)(D,{children:"Booking confirmed"}),(0,v.jsxs)(O,{children:[(0,v.jsx)(z,{color:o?i.colors.tint1:i.colors.shade1}),(0,v.jsxs)(T,{children:[(0,x.Z)(t,"dd MMM, hh:mmaaa")," to",(0,x.Z)((0,y.Z)(t,{minutes:n})," hh:mm aaa")]})]})]})},M=(0,m.default)(b).withConfig({displayName:"MeetingDetails__StyledContainer",componentId:"sc-tshvjw-0"})(["display:flex;flex-direction:row;align-items:center;"]),q=(0,m.default)(g.EQ).withConfig({displayName:"MeetingDetails__StyledVideoIcon",componentId:"sc-tshvjw-1"})(["margin-right:8px;"]),A=m.default.p.attrs({className:"body-small body-small-mobile"}).withConfig({displayName:"MeetingDetails__BodySmall",componentId:"sc-tshvjw-2"})([""]),P=function(){return(0,v.jsxs)(M,{children:[(0,v.jsx)(q,{}),(0,v.jsx)(A,{children:"A meeting link will be shared on your registered mobile or email address."})]})},Z=(0,m.default)(b).withConfig({displayName:"ServiceDetails__StyledContainer",componentId:"sc-legf91-0"})(["display:flex;flex-direction:row;align-items:center;@media only screen and (min-width:768px){flex-direction:column;border:1px solid ",";max-width:400px;align-items:flex-start;border-radius:12px;padding:0;}"],(function(e){return e.theme.colors.tint3})),E=m.default.div.withConfig({displayName:"ServiceDetails__Detail",componentId:"sc-legf91-1"})(["display:flex;flex-direction:column;border-bottom-left-radius:0px;@media only screen and (min-width:768px){padding:20px 16px;}"]),W=m.default.p.attrs({className:"title3 title3-mobile"}).withConfig({displayName:"ServiceDetails__Title",componentId:"sc-legf91-2"})(["margin-bottom:8px;"]),F=m.default.p.attrs({className:"body-small body-small-mobile"}).withConfig({displayName:"ServiceDetails__TimeText",componentId:"sc-legf91-3"})([""]),L=m.default.div.withConfig({displayName:"ServiceDetails__TimeContainer",componentId:"sc-legf91-4"})(["display:flex;align-items:center;"]),R=(0,m.default)(g.T3).attrs({width:16,height:16}).withConfig({displayName:"ServiceDetails__StyledClockIcon",componentId:"sc-legf91-5"})(["margin-right:8px;"]),U=m.default.img.withConfig({displayName:"ServiceDetails__StyledImage",componentId:"sc-legf91-6"})(["width:80px;height:60px;border-radius:8px;margin-right:16px;@media only screen and (min-width:768px){border-bottom-left-radius:0px;border-bottom-right-radius:0px;width:100%;height:210px;object-fit:cover;}"]),H=function(e){var t=e.appointmentDuration,n=e.image,i=e.name;return(0,v.jsxs)(Z,{children:[(0,v.jsx)(U,{src:n}),(0,v.jsxs)(E,{children:[(0,v.jsx)(W,{children:i}),(0,v.jsxs)(L,{children:[(0,v.jsx)(R,{}),(0,v.jsxs)(F,{children:[t," mins"]})]})]})]})},J=(0,m.default)(b).withConfig({displayName:"StoreAddress__StyledContainer",componentId:"sc-17jrzkp-0"})(["padding:0px;"]),Q=m.default.div.withConfig({displayName:"StoreAddress__AddressContainer",componentId:"sc-17jrzkp-1"})(["padding:14px;display:flex;align-items:center;"]),Y=m.default.p.attrs({className:"body-small body-small-mobile"}).withConfig({displayName:"StoreAddress__BodySmall",componentId:"sc-17jrzkp-2"})([""]),$=(0,m.default)(g.tE).withConfig({displayName:"StoreAddress__StyledMapPinIcon",componentId:"sc-17jrzkp-3"})(["margin-right:12px;"]),X=((0,m.default)(g.qz).attrs((function(e){return{textColor:e.theme.colors.shade4}})).withConfig({displayName:"StoreAddress__StyledButton",componentId:"sc-17jrzkp-4"})(["margin:auto;margin-bottom:14px;"]),m.default.div.withConfig({displayName:"StoreAddress__MapContainer",componentId:"sc-17jrzkp-5"})(["width:100%;height:80px;@media only screen and (min-width:768px){height:120px;border-radius:4px;}"])),V=m.default.iframe.withConfig({displayName:"StoreAddress__Map",componentId:"sc-17jrzkp-6"})(["@media only screen and (min-width:768px){border-radius:4px;}"]),G=function(e){var t,n,i,o=e.orderItem,r=(0,c.v9)((function(e){return e.storeState.store})),a=null===o||void 0===o||null===(t=o.address)||void 0===t?void 0:t.latitude,s=null===o||void 0===o||null===(n=o.address)||void 0===n?void 0:n.longitude,d=null===r||void 0===r||null===(i=r.meta)||void 0===i?void 0:i.address;return(0,v.jsxs)(J,{children:[a&&s&&d&&(0,v.jsx)(X,{children:(0,v.jsx)(V,{width:"100%",height:"100%",frameBorder:"0",scrolling:"no",marginHeight:0,marginWidth:0,src:"https://maps.google.com/maps?q=".concat(a,",").concat(s,"&hl=es&z=14&amp;output=embed")})}),d&&(0,v.jsxs)(Q,{children:[(0,v.jsx)($,{}),(0,v.jsx)(Y,{children:d})]})]})},K=n(1926),ee=n(68510),te=(0,m.default)(g.qz).attrs({buttonSize:"small",buttonStyle:"primary"}).withConfig({displayName:"StoreDetails__Button",componentId:"sc-1cw0yh5-0"})(["flex:1;"]),ne=m.default.div.withConfig({displayName:"StoreDetails__Controls",componentId:"sc-1cw0yh5-1"})(["display:flex;align-items:center;justify-content:space-around;"]),ie=m.default.div.withConfig({displayName:"StoreDetails__Seperator",componentId:"sc-1cw0yh5-2"})(["margin-right:16px;"]),oe=function(){var e,t=(0,m.useTheme)(),n=(0,c.v9)((function(e){return e.storeState.store})),i=null===n||void 0===n?void 0:n.meta;return(0,v.jsxs)(b,{children:[(0,v.jsx)(w,{children:null===n||void 0===n||null===(e=n.meta)||void 0===e?void 0:e.name}),(0,v.jsxs)(ne,{children:[(0,v.jsxs)(te,{backgroundColor:t.colors.tint2,textColor:t.colors.shade1,IconLeft:g.qW,click:function(){return navigator.clipboard.writeText(i.phoneNumber)},children:["+",i.phoneNumber]}),(0,v.jsx)(ie,{}),(0,v.jsx)(te,{backgroundColor:t.colors.whatsAppShade1,textColor:t.colors.whatsApp,IconLeft:g.ud,click:function(){var e=new K.C,t=(new ee.w).sanitizePhonenumber(i.phoneNumber);e.msgWhatsapp("","91"+t,!0)},children:"Whatsapp"})]})]})},re=(0,m.default)(u).withConfig({displayName:"BookingConfirmation__Container",componentId:"sc-qcgsmd-0"})(["padding:16px;position:relative;"]),ae=(0,m.default)(u).withConfig({displayName:"BookingConfirmation__DesktopContainer",componentId:"sc-qcgsmd-1"})(["padding:40px 180px;display:flex;justify-content:space-between;"]),se=m.default.div.withConfig({displayName:"BookingConfirmation__Section",componentId:"sc-qcgsmd-2"})(["flex:1;"]),de=m.default.div.withConfig({displayName:"BookingConfirmation__Seperator",componentId:"sc-qcgsmd-3"})(["margin-bottom:8px;@media only screen and (min-width:768px){margin-bottom:24px;}"]),le=m.default.div.withConfig({displayName:"BookingConfirmation__HorizontalSeperator",componentId:"sc-qcgsmd-4"})(["margin-right:24px;"]),ce=m.default.div.withConfig({displayName:"BookingConfirmation__Hairline",componentId:"sc-qcgsmd-5"})(["height:1px;background-color:",";margin:16px 0px;"],(function(e){return e.theme.colors.tint2})),me=(0,m.default)(se).withConfig({displayName:"BookingConfirmation__DetailsSection",componentId:"sc-qcgsmd-6"})(["box-shadow:0px 2px 14px rgba(0,0,0,0.04);padding:24px;max-width:520px;"]),pe=function(e){var t=(0,o.useState)({}),n=t[0],i=t[1],r=(0,o.useState)({}),a=r[0],d=r[1],m=p.p.getInstance(),u=(0,c.v9)((function(e){return e.storeState.store}));(0,o.useEffect)((function(){g()}),[e,u]);var g=function(){var t=(0,s.Z)(l().mark((function t(){var n,o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.bookingId,t.next=3,x(n);case 3:o=t.sent,i(o),d(null===o||void 0===o?void 0:o.items[0]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.getOrderDetails(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{children:[(0,v.jsx)(f.ij,{children:(0,v.jsxs)(re,{children:[(0,v.jsx)(h,{}),a.bookingSlot?(0,v.jsx)(B,{appointmentDuration:null===a||void 0===a?void 0:a.bookingDurationInMins,appointmentTime:new Date((null===a||void 0===a?void 0:a.bookingDate)+" "+(null===a||void 0===a?void 0:a.bookingSlot.split("-")[0]))}):null,(0,v.jsx)(H,{appointmentDuration:null===a||void 0===a?void 0:a.bookingDurationInMins,name:null===a||void 0===a?void 0:a.name,image:null===a||void 0===a?void 0:a.image}),(0,v.jsx)(de,{}),(0,v.jsx)(oe,{}),(0,v.jsx)(de,{}),"ONLINE"==(null===a||void 0===a?void 0:a.bookingType)&&(0,v.jsx)(P,{}),(0,v.jsx)(de,{}),(0,v.jsx)(G,{orderItem:n}),(0,v.jsx)(de,{}),(0,v.jsx)(I,{order:n})]})}),(0,v.jsx)(f.gA,{children:(0,v.jsxs)(ae,{children:[(0,v.jsxs)(se,{children:[a.bookingSlot?(0,v.jsx)(B,{appointmentDuration:null===a||void 0===a?void 0:a.bookingDurationInMins,appointmentTime:new Date((null===a||void 0===a?void 0:a.bookingDate)+" "+(null===a||void 0===a?void 0:a.bookingSlot.split("-")[0]))}):null,(0,v.jsx)(H,{appointmentDuration:null===a||void 0===a?void 0:a.bookingDurationInMins,name:null===a||void 0===a?void 0:a.name,image:null===a||void 0===a?void 0:a.image})]}),(0,v.jsx)(le,{}),(0,v.jsxs)(me,{children:[(0,v.jsx)(I,{order:n}),(0,v.jsx)(ce,{}),(0,v.jsx)(oe,{}),(0,v.jsx)(de,{}),(0,v.jsx)(G,{orderItem:n}),(0,v.jsx)(de,{}),"ONLINE"==(null===a||void 0===a?void 0:a.bookingType)&&(0,v.jsx)(P,{})]})]})})]})};function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he=function(e){return(0,v.jsx)(r.Z,{themeName:"PRIME",children:(0,v.jsx)(a.Z,{children:(0,v.jsx)(pe,fe({},e))})})}},93752:function(e,t,n){"use strict";t.Z=void 0;var i=n(41268);Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return i.default}})},53857:function(e,t,n){"use strict";n(67294);var i=n(53918),o=n(85893),r=i.default.div.withConfig({displayName:"LayoutWrapper__LayoutWrapperStyle",componentId:"sc-b8rzhv-0"})([".wrapper__content{min-height:100vh;overflow-x:inherit;}"]);t.Z=function(e){return(0,o.jsx)(r,{children:(e.SSR,(0,o.jsx)("div",{className:"wrapper__content",children:e.children}))})}},81530:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(53857),o=(n(67294),n(11163)),r=n(95814),a=n(93752),s=n(85893),d=function(){var e=(0,o.useRouter)(),t=r.c.getInstance(e),n=e.query.bookingId;return(0,s.jsx)(a.Z,{bookingId:n,actionService:t})},l=function(){return(0,s.jsx)(i.Z,{children:(0,s.jsx)(d,{})})}},74131:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[username]/pay/booking/[bookingId]",function(){return n(81530)}])}},function(e){e.O(0,[2086,9774,2888,179],(function(){return t=74131,e(e.s=t);var t}));var t=e.O();_N_E=t}]);