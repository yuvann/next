"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5424],{75424:function(e,t,a){a.r(t);var o=a(67294),l=a(7034),c=a(89047),r=a(42979),s=a(42809),m=a(79389),n=a(54549),i=a(77646),d=a(53918),p=a(77281);t.default=e=>{const[t,a]=o.useState(!1),[u,h]=o.useState([]),{formatCurrency:E}=(0,l.U)(),_=(0,n.iP)(),{colors:f}=(0,d.useTheme)(),{store:x}=(0,r.o)();(0,o.useEffect)((()=>{v()}),[]);const v=()=>{const t=[],a=new m.m,o=e.promoModalData.originalPromo;"FIXED"===o.type?t.push(`Flat ${E(o.value)} off`):"PERCENTAGE"===o.type&&(t.push(`Flat ${o.value}% off`),o.maxValue&&t.push(`Maximum discount: ${E(o.maxValue)}`)),o.base&&t.push(`Minimum order value: ${E(o.base)}`),o.applyOnce&&t.push("Valid once per customer"),"COLLECTIONS"===o.validOn&&t.push(`Applicable on ${a.getPromoCollectionsText(o.entities)}`),h(t)};return o.createElement(s.u_,{onBackdropPress:e.onBackdropPress,backdropId:"promo-details-backdrop"},o.createElement(c.K,null,o.createElement("div",{className:"bg-white modal-container "+(_?" bottom-sheet ":"")},o.createElement("div",{className:"header d-flex align-items-start"},o.createElement("div",{className:"header__tag"},o.createElement(p.Z,{color:f.success3,width:"40px",height:"40px"})),o.createElement("div",{className:"d-flex flex-column"},o.createElement("div",{className:"header__title text-success3 body-large"},e.promoModalData.promoText),e.promoModalData.originalPromo.validOn!==i.PROMO_CODE_VALID_TYPE.ALL&&o.createElement("div",{className:"m--t--16",onClick:()=>{var t;null===(t=e.onAllOffersClicked)||void 0===t||t.call(e,e.promoModalData.promoCode)}},o.createElement("span",{className:"text-brandMain "+(_?"title4-mobile":"title4"),role:"button"},_?"View eligible products for this offer":"Eligible products for this offer"),o.createElement("span",{className:"m--l--8"},o.createElement(s._Q,{color:f.brandMain,width:_?"16px":"24px",height:_?"16px":"24px"})))),_&&o.createElement("span",{className:"ml-auto",onClick:e.onBackdropPress},o.createElement(s.aM,{color:f.textPrimary}))),o.createElement("div",{className:"line "}),o.createElement("div",{className:"promo"},u.map(((e,t)=>o.createElement("div",{key:t,className:"d-flex align-items-center promo__info "+(t===u.length-1?"m--b--24":"")},o.createElement("div",{className:"m--r--16"},o.createElement(s.nQ,{color:f.shade2})),o.createElement("div",{className:"promo__info__text text-shade2"},e)))),o.createElement("div",{className:"promo__copy d-flex align-items-center justify-content-between m--t--4"},o.createElement("div",{className:"m--y--4 m--x--8 promo__copy__text text-shade1"},e.promoModalData.promoCode),o.createElement("div",{className:"button-small text-tint1 promo__copy__button "+(t?"copied":""),onClick:()=>{navigator.clipboard.writeText(e.promoModalData.promoCode).then().catch((e=>console.error(e))),a(!0),setTimeout((()=>{a(!1)}),3e3)}},t?"Copied":"Copy code")),o.createElement("div",{className:"caption text-center text-shade3 "+(_?"m--t--8":"m--t--12")},_?"You can apply the coupon code at the time of purchase":"You can apply the coupon code during checkout")))))}}}]);