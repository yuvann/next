(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8582],{56418:function(e,t,r){"use strict";r.d(t,{k:function(){return b}});var a=r(77646),i=r(13914),n=r(81108),o=r(37541),s=r(10697),l=r(43324),c=r(51225),d=r(64532),m=r.n(d),p=r(52923),u=r(46906),h=r(93311);class g{constructor(){this.isPlaceOrderActivated=!1,this.collectLocationFromUser=!1,this.eventService=u.P.getInstance()}static getInstance(){return this.instance||(this.instance=new g),this.instance}placeOrder(e,t=!1,r){var n,o,d;console.log("payment page : place order inside ",e);const m=l.ZP.getState().storeState.store,p=l.ZP.getState().contextState,u=l.ZP.getState().cartState.uiCart,h=m.meta.id,g=u,y=new i.R;if(e[a.KEYS.ORDER.razorpayOrderId]=null===(n=p.razorPayContext)||void 0===n?void 0:n.orderId,e[a.KEYS.ORDER.razorpayPaymentId]=null===(o=p.razorPayContext)||void 0===o?void 0:o.paymentId,e[a.KEYS.ORDER.razorpaySignature]=null===(d=p.razorPayContext)||void 0===d?void 0:d.signature,0!==y.errorFields.length)return y.errorMessage=y.errorMessage||"Please fill all required fields",y;const v=m.meta.minimumCheckoutValue,x=m.meta.maximumCheckoutValue,f=m.meta.currency;if(!t){if(v&&g.total<v)return y.errorFields.push("payment"),y.errorMessage=`Minimum order of ${f} ${v} is required`,y;if(x&&g.total>x)return y.errorFields.push("payment"),y.errorMessage=`Maximum order of ${f} ${x} is allowed`,y;if(m.meta.loginCompulsory){if(!l.ZP.getState().customerState.isLoggedIn)return y.errorMessage="Not logged in. Please login again.",y.errorFields.push("login_compulsory"),y}}return(g.paymentMode===c.h.online||g.paymentMode===c.h.partialCOD)&&g.total<5?(y.errorFields.push("payment"),y.errorMessage="Minimum order of Rs 5 is required to choose online payments.",y):g.paymentMode?this.isPlaceOrderActivated?(y.status="Loading",y.inProgress=!0,y.pulse=new s.y((t=>{var r,a,i;console.log(null===(r=e.items[0])||void 0===r?void 0:r.isSubscribable),1==(null===(a=e.items[0])||void 0===a?void 0:a.isSubscribable)&&(null===(i=e.items[0])||void 0===i?void 0:i.startDate)?this.createSubscription(e).then((e=>{this.eventService.recordEvent("send-enquiry",h,"success"),y.response=e,y.inProgress=!1,y.status="success",t.next(e),t.complete()})):this.placeOrderInternal(e).then((r=>{this.eventService.recordEvent("send-enquiry",h,"success"),y.response=r,y.inProgress=!1,y.status="success",g.paymentMode===c.h.online||g.paymentMode===c.h.partialCOD?t.next(e.razorpayOrderId):t.next(r),t.complete()}))})),y):(y.errorMessage="Something went wrong! Please try again",y.errorFields.push("Purchase error"),y):(y.errorMessage="Please select payment method",y.errorFields.push("payment_mode"),y)}async placeOrderInternal(e){if(!this.isPlaceOrderActivated)return"404";const t=h.q.functions.CLOUD_FUNCTION_URL+"/placeOrder";this.isPlaceOrderActivated=!1;const r=p.j.encrypt(JSON.stringify(e)),a=await m().post(t,r,{headers:{"content-type":"text/plain"},responseType:"text"});return p.j.decrypt(a.data)}async createSubscription(e){if(!this.isPlaceOrderActivated)return"404";const t={storeId:e.storeId,subObject:e},r=h.q.functions.FASITY_FUNCTION+"/bikayiSubscription-createSubscription";this.isPlaceOrderActivated=!1,t.subObject.items[0].cutOffDays=t.subObject.items[0].cutOffTime,t.subObject.items[0].nextActiveDate=t.subObject.items[0].startDate,delete t.subObject.items[0].cutOffTime;const a=p.j.encrypt(JSON.stringify(t)),i=await m().post(r,a,{headers:{"content-type":"text/plain"},responseType:"text"});return p.j.decrypt(i.data)}}var y=r(67294),v=r(14601),x=r(27294);var f=r(3346);const b=()=>{const e=g.getInstance(),t=(0,l.CG)((e=>e.customerState)),r=(0,l.CG)((e=>e.cartState.isReseller)),s=(0,l.TL)(),{cartState:c}=(0,f.j)(),d=l.ZP.getState().storeState.store.meta.currency,m=u.P.getInstance(),p=(0,y.useCallback)((async(l,c,d)=>{s(x.W2.setCartLoading(!0)),console.log("_placeOrder called");let m=new i.R;e.isPlaceOrderActivated=!0;const p=new n._(l,t).preparePayload(c,r),u=l.meta.paymentInformation;if(console.log("payment page ",c.paymentMode,c.payableAmountInCents),c.paymentMode!==v.h.online&&c.paymentMode!==v.h.partialCOD||!u.onlineEnabled&&u.partialCod.type===a.PartialCodTypes.NONE){m=e.placeOrder(p);return await h(m,c,l.meta)}if(!c.paymentBreakdown.onlinePayment){m=e.placeOrder(p);return await h(m,c,l.meta)}{const t={storeId:l.meta.id,amount:c.payableAmountInCents,type:o.G4.ORDER,currency:"INR",pgData:{},payload:{order:p},paymentProcessor:await d.getPaymentGateway()},r=await d.paymentProcessor.makePayment(t);if(console.log("PaymentResult ",r),d.paymentProcessor.processingExternalPayment=!1,null===r||void 0===r?void 0:r.success){m=e.placeOrder(p);return await h(m,c,l.meta)}"Custom domain and no personal gateway"===r.errorMessage||(m.errorMessage=r.errorMessage||"Transaction Failed. Please try again.",m.errorFields=["Payment"],m.inProgress=!1,s(x.W2.setBigFooterErrors(m.errorMessage)),s(x.W2.setCartLoading(!1)))}}),[t]);async function h(e,t,r){if(console.log("payment page ... "," inside api response ",e),e.errorMessage)return e.inProgress=!1,void s(x.W2.setCartLoading(!1));(e=>{m.recordEvent("place_order","ecommerce","order placed"),m.recordEvent("purchase","ecommerce","order placed",!1,c.cart.total),m.recordFbPixelEvent("track","Purchase",{num_items:c.cart.items.length,value:c.cart.total,content_type:"product",contents:c.cart.items.map((e=>({id:e.productId,name:e.name,quantity:e.quantity,price:e.price}))),product_catalog_id:c.cart.items.map((e=>e.catalogId)),currency:e})})(d);const a=e.pulse.toPromise();return e.response,console.log("order placed",e.response,a),s(x.W2.setBigFooterErrors(e.errorMessage)),m.recordFbPixelEvent("track","Purchase",{num_items:t.items.length,value:t.total,content_type:"product",contents:t.items.map((e=>({id:e.productId,name:e.name,quantity:e.quantity,price:e.price}))),currency:r.currency}),a}return{_placeOrder:p}}},51225:function(e,t,r){"use strict";var a;r.d(t,{h:function(){return a}}),function(e){e.cashOnDelivery="cod",e.partialCOD="partialCOD",e.settleDirectly="manual",e.online="online"}(a||(a={}))},13914:function(e,t,r){"use strict";r.d(t,{R:function(){return a}});class a{constructor(){this.errorFields=[]}}},53857:function(e,t,r){"use strict";r(67294);var a=r(53918),i=r(85893),n=a.default.div.withConfig({displayName:"LayoutWrapper__LayoutWrapperStyle",componentId:"sc-b8rzhv-0"})([".wrapper__content{min-height:100vh;overflow-x:inherit;}"]);t.Z=function(e){return(0,i.jsx)(n,{children:(e.SSR,(0,i.jsx)("div",{className:"wrapper__content",children:e.children}))})}},17780:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return U}});var a=r(53857),i=r(67294),n=r(11163),o=r(95814),s=r(25617),l=r(53918),c=r(82524),d=r(51083),m=r(43324),p=r(22314),u=r(34590),h=r(71051),g=r(77646),y=r(27294),v=r(69071),x=r(81108),f=r(56418),b=r(37541);const w=i.createContext({uiOrder:{}}),E=()=>{const e=(0,m.CG)((e=>e.cartState)),t=(0,f.k)(),r=(0,m.TL)(),a=(0,m.CG)((e=>e.storeState.store)),n=(0,m.CG)((e=>e.customerState)),o=new b.yS(a.meta),s=new x._(a,n),[l,c]=(0,i.useState)(new g.NormalisedAddress),{actionService:d}=(0,i.useContext)(w);return(0,i.useEffect)((()=>{const e=n.userInfo;if(e){const{address:t,city:r,firstName:a,lastName:i,name:n,phoneNumber:o,pinCode:s,state:l}=e,d=new g.NormalisedAddress;d.address=t,d.city=r,d.name=null!==n&&void 0!==n?n:(null!==a&&void 0!==a?a:"")+(null!==i&&void 0!==i?i:""),d.phoneNumber=o,d.pinCode=s,d.state=l,c(d)}}),[n]),{pay:async function(i){r(v.b.updateUserInfo(i));const n=Object.assign({},e.uiCart);s.onChange(n);try{const e=await t._placeOrder(a,n,o);e&&(r(y.W2.emptyCart({})),d.redirectToOrderPlacedPage.call(d,e,!0))}catch(l){r(y.W2.updateFooterState({bigErrorMessage:"Unexpected error occured. Please contact support"}))}},address:l}},C=l.default.div`
  margin: auto;

  .item--list {
    padding: 24px;
    border: ${e=>e.theme.isMobile?0:1}px solid
      ${e=>e.theme.colors.tint3};
    border-radius: 8px;
    padding-right: 0;
  }

  .border--top {
    border-top: 1px solid ${e=>e.theme.colors.tint2};
  }

  .item--list--horizontal--divider {
    width: calc(100% - 100px);
    height: 1px;
    background-color: ${e=>e.theme.colors.tint2};
    margin-left: auto;
    margin-top: ${e=>e.theme.isMobile?12:16}px;
    margin-bottom: ${e=>e.theme.isMobile?12:16}px;
  }

  .form--head {
    margin-bottom: ${e=>e.theme.isMobile?16:24}px;

    h3 {
      font-weight: 400;
      letter-spacing: 0.03em;
      color: #444;
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }
  }
  .form--top {
    width: 100%;
    display: flex;
    flex-direction: column;

    .total--section {
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      margin: 15px 0;
      padding: 15px 0;
      width: 100%;

      .total--row--section {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 18px;
        text-transform: capitalize;

        p:nth-child(1) {
          flex: 1;
        }
      }
    }

    .final--section {
      display: flex;
      flex-direction: row;
      align-items: center;

      h3 {
        letter-spacing: 0.03em;
        font-weight: 700;
        text-transform: uppercase;
        color: #000;
        margin-bottom: -2px;
      }

      h3:nth-child(1) {
        flex: 1;
      }
    }
  }

  .form--body {
    margin-top: 1.5rem !important;

    max-width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    .form--body {
      max-width: 100%;
    }
    .input--container {
      max-width: 100% !important;
    }

    .pay--btn--holder {
      margin: auto;
    }

    .item--list {
      padding: 0px 16px;
    }

    .item--list--horizontal--divider {
      width: 100%;
    }
  }

  .address--body {
    padding: 0px 16px;
  }
`;var P=r(77958),S=r(7034);const O=l.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    overflow-x: auto;
  }

  .color--variant {
    width: ${e=>e.theme.isMobile?12:16}px;
    height: ${e=>e.theme.isMobile?12:16}px;
    border: 1px solid rgba(20, 34, 54, 0.1);
    box-sizing: border-box;
    border-radius: 2px;
  }

  .variants {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  div.img {
    width: 80px;
    height: 80px;
    margin-right: 16px;
    border-radius: 4px;
  }

  div.img > img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  div.order--detail {
    margin-right: 24px;
  }

  .name {
    flex: 1;
  }

  .price--holder {
    display: flex;
    flex-direction: row;
    border-left: 1px solid ${e=>e.theme.colors.tint3};
    padding-left: 24px;
    height: 100%;
  }

  .price {
    width: 69px;
    text-align: left;
  }

  @media (max-width: 768px) {
    .order--detail.small--width {
      max-width: 100%;
    }

    .price {
      width: unset;
    }

    div.order--detail {
      margin-right: 8px;
    }

    div.img {
      width: 48px;
      height: 48px;
      border-radius: 4px;
    }

    div.img > img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }

    .price--holder {
      display: flex;
      flex-direction: column;
      padding-left: 8px;
    }
  }
`;var N=i.memo((({item:e})=>{const{formatCurrency:t}=(0,S.U)(),{isMobile:r}=(0,l.useTheme)();return i.createElement(O,null,i.createElement("div",{className:"img"},i.createElement("img",{src:e.image})),i.createElement("div",{className:"order--detail name"},i.createElement("p",{className:r?"body-small":"body-large"},e.name),!!e.variants&&!!Object.keys(e.variants).length&&i.createElement("p",{className:(r?"caption text-shade3":"body-regular text-shade2")+" variants  m--t--4"},Object.keys(e.variants).map(((t,r)=>"color"===t?i.createElement("span",{className:"color--variant m--r--4",style:{backgroundColor:(0,P.hexToColor)(parseInt(e.variants[t].option.value.toString()))}}):e.variants[t].option.value)))),i.createElement("div",{className:"order--detail"},i.createElement("p",{className:(r?"caption":"body-large")+" text-shade1"},r?"Qty":"Quantity",": ",e.quantity)),i.createElement("div",{className:"order--detail price--holder "+(r?"m--r--0":"")},i.createElement("p",{className:(r?"caption":"title3")+" text-shade1 price"},t(e.price,!0)),e.mrp&&i.createElement("p",{className:(r?"caption":"title4")+" text-shade3 price"},t(e.mrp,!0))))}));var I=()=>{var e,t;const r=(0,m.CG)((e=>e.cartState)),{pay:a,address:n}=E();return i.createElement(C,null,i.createElement("div",{className:"item--list"},i.createElement("div",{className:"form--head"},i.createElement("p",{className:"title2 text-shade1"},"Order Details")),i.createElement("div",{className:"form--top"},null===(t=null===(e=r.uiCart)||void 0===e?void 0:e.items)||void 0===t?void 0:t.map(((e,t)=>{var a;return i.createElement(i.Fragment,null,i.createElement(N,{key:t,item:e}),(null===(a=r.uiCart)||void 0===a?void 0:a.items.length)-1!==t&&i.createElement("div",{className:"item--list--horizontal--divider "}))})))),i.createElement("div",{className:"form--body"},i.createElement(h.Z,{selectedAddress:n,onProceedClick:a,btnText:"PAY NOW"})))};var M=()=>i.createElement(I,null),_=r(84466);var k=()=>{var e,t;const r=(0,m.CG)((e=>e.cartState)),{isMobile:a,colors:n}=(0,l.useTheme)(),{pay:o,address:s}=E(),c={backgroundColor:n.tint1,btnHeight:"32px",btnSize:"small",btnText:"PAY",btnWidth:"100%",height:"48px",padding:"8px"};return i.createElement(C,null,i.createElement("div",{className:"item--list"},i.createElement("div",{className:"form--head"},i.createElement("p",{className:"title3 text-shade1 m--x--8"},"Order Details")),i.createElement("div",{className:"form--top"},null===(t=null===(e=r.uiCart)||void 0===e?void 0:e.items)||void 0===t?void 0:t.map(((e,t)=>{var n;return i.createElement(i.Fragment,null,i.createElement(N,{key:t,item:e}),(a||(null===(n=r.uiCart)||void 0===n?void 0:n.items.length)-1!==t)&&i.createElement("div",{className:"item--list--horizontal--divider "}))})))),i.createElement(_.$,{totalText:"Total to be paid"}),i.createElement("div",{className:"address--body"},i.createElement("p",{className:"title3 text-shade1 p--t--24 p--b--16 border--top"},"Enter your billing details"),i.createElement(h.Z,{mobileBtnWidth:"100%",selectedAddress:s,onProceedClick:o,btnText:"PAY NOW",showCartSummaryOnBottom:!1,bottomBarProps:c})))},T=r(93311),F=r(47984),j=r(33125),D=r(12791);const R=1e7,A=l.default.div`
  p {
    margin-bottom: 0;
  }

  .flex--row--top {
    display: flex;
    flex-direction: row;
    padding-left: 84px;
    padding-right: 84px;
    margin-top: 16px;
    margin-bottom: 80px;
    justify-content: center;
  }

  .main--wrapper {
    width: 840px;
    margin-right: 24px;
  }

  .summary--wrapper {
    width: 408px;
  }

  @media (max-width: 768px) {
    .flex--row--top {
      padding-left: 0px;
      padding-right: 0px;
      flex-direction: column;
    }

    .main--wrapper {
      width: 100%;
    }

    .summary--wrapper {
      width: 100%;
    }
  }
`,z=({linkId:e,actionService:t})=>{const{isMobile:r}=(0,l.useTheme)(),{totalSaving:a,loader:n}=(e=>{const t=new j.fX,r=(0,m.CG)((e=>e.storeState.store)),a=(0,m.CG)((e=>e.cartState)),[n,o]=(0,i.useState)(!0),[s,l]=(0,i.useState)(0),c=(0,m.TL)(),d=new b.yS(r.meta),[p,u]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{c(y.W2.emptyCart({})),c(y.W2.setSourceType("paylink")),u(!0)}),[]),(0,i.useEffect)((()=>{if(p){const i=T.q.functions.FIREBASE_URL+"/paymentlinks/"+r.meta.id+"/"+e+".json";F.sM.fetchDataFromUrl(i).then((i=>{if(i.data){const n=new g.Order;n.load(i.data.o),n.payLinkId=e,i.data.o.sC&&(n._shippingCost=i.data.o.sC),n.paymentMode="online",n.freeShippingAbove=R,n.subTotal<R&&(n.shippingCost=n._shippingCost);const s=Object.assign({},a.uiCart),m=Object.assign(Object.assign({},s),n);c(y.W2.setUiCart({cart:m})),d.setUp().then((async()=>{const e=await d.getPaymentGateway();c(y.W2.updatePaymentProcessor({paymentProcessor:e}));let a=0;m.items.forEach((e=>{var t;const r=e.price,i=null!==(t=e.mrp)&&void 0!==t?t:r;a+=r>i?r-i:0})),l(a),D.i.fetchIdToken().then((async e=>{try{const a=await t.fetchCustomer(r.meta.id,e);m.customerData=a,c(y.W2.setUiCart({cart:m}))}catch(a){}o(!1)})).catch((()=>{o(!1)}))}))}}))}}),[p]),{loader:n,totalSaving:s}})(e);return i.createElement(w.Provider,{value:{linkId:e,totalSaving:a,paymentSetupLoader:n,actionService:t}},r?i.createElement(k,null):i.createElement(i.Fragment,null,i.createElement("div",{className:"main--wrapper"},i.createElement(M,null)),i.createElement("div",{className:"summary--wrapper"},i.createElement(c.h,{noBtn:!0,summaryFeatures:[]}))))},W=({linkId:e,actionService:t})=>i.createElement(s.zt,{store:m.ZP},i.createElement(p.Z,{themeName:"PRIME"},i.createElement(A,null,i.createElement(d.Pz,null,i.createElement(u.Z,{redirectToHome:t.redirectToHome.bind(t)})),i.createElement("div",{className:"flex--row--top"},i.createElement(z,{linkId:e,actionService:t})))));var L=r(85893),$=function(){var e=(0,n.useRouter)(),t=o.c.getInstance(e),r=e.query.linkId;return(0,L.jsx)(W,{linkId:r,actionService:t})},q=i.memo($),U=function(){return(0,L.jsx)(a.Z,{children:(0,L.jsx)(q,{})})}},42042:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[username]/pay/link/[linkId]",function(){return r(17780)}])}},function(e){e.O(0,[4864,5362,2063,3223,1240,1199,3346,7502,9423,5138,7541,9774,2888,179],(function(){return t=42042,e(e.s=t);var t}));var t=e.O();_N_E=t}]);