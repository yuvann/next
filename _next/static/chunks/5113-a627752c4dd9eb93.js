"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5113],{25540:function(e,t,a){a.d(t,{U:function(){return N}});var n=a(67294),i=a(53918);const s=i.default.div`
  width: 100%;
  height: 100%;
  margin-top: ${e=>e.fastCheckoutEnv?"0px":e.isMobile?"96px":"128px"};

  .w--100 {
    width: 100%;
  }
`;var r=a(77040),l=a(51225);const o=i.default.div`
  padding-top: 100px;
  .loading{
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .modal {
    &__wrapper{
      width:408px;
      position: relative;
      height:fit-content;
      max-height: 640px;
      overflow-y: scroll;
      background-color: ${e=>e.theme.colors.tint3};
      padding: 16px 24px 24px;
      border-radius: 8px;
      @media(max-width: 768px) {
        width:312px;
      }
      &__top {
        display: flex;
        flex-direction: row;
      }
      &__text {
        flex:1;
        ${e=>e.theme.fonts.title3Mobile};
        text-align: center;
        color: ${e=>e.theme.colors.shade1};
        @media(max-width: 768px) {
          text-align: left;
        }
      }
      &__icon {
        flex:0;
      }
    }
  }
`,d=n.createContext({fastCheckoutEnv:!1}),c=()=>(0,n.useContext)(d),m=i.default.div`
  color: ${e=>e.isDisabled?e.theme.colors.shade3:e.theme.colors.shade1} !important;
`;var u=e=>{const{fastCheckoutEnv:t}=c();return n.createElement(m,{className:(t?"body-regular":"title3")+" title3-mobile",isDisabled:e.disabled},e.header)};const p=i.default.div`
  color: ${e=>e.isDisabled?e.theme.colors.shade3:e.theme.colors.shade2} !important;
`;var h=e=>{const{fastCheckoutEnv:t}=c();return n.createElement(p,{isDisabled:e.disabled,className:(t?"text-shade3":"")+" caption sub-header caption-mobile"},e.subHeader)};const v=i.default.div`
  padding: 16px;
  cursor: pointer;
  width: 100%;

  .top-section {
    display: flex;

    svg {
      min-width: 24px;
    }

    .right-section {
      margin-right: 8px;
      margin-left: auto;
    }

    .right-section-mobile {
    }

    .header-container-wrapper {
      width: calc(100% - 40px);
      margin-left: 16px;
      flex: ${e=>e.fastCheckoutEnv?"1":"unset"};
    }

    .header-container {
      display: flex;
      flex-direction: column;

      .header-section {
        display: flex;

        .extra-charges {
          border-radius: 4px;
          margin-left: 8px;
          padding: 4px 6px;
          background: ${e=>e.theme.colors.tint2};
        }
      }

      .sub-header {
        margin-top: 4px;
      }
    }
  }

  .disabled-instructions {
    margin-top: 8px;
    width: fit-content;
    padding: 4px 6px;
    border-radius: 4px;
    background: ${e=>e.theme.colors.tint2};
    display: flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }
  }

  .merchant-instructions {
    margin-top: 16px;
    padding: 12px;
    background: ${e=>e.theme.colors.tint2};
    width: ${e=>e.fastCheckoutEnv?"fit-content":"unset"};

    @media all and (max-width: 768px) {
      width: fit-content;
    }

    .merchant-instructions-header {
      color: ${e=>e.theme.colors.shade2};
    }

    .merchant-instructions-sub-header {
      color: ${e=>e.theme.colors.shade2};
      margin-top: 4px;
    }
  }

  border-bottom: 1px solid ${e=>e.theme.colors.tint2};
`;var b=e=>{const{isMobile:t}=(0,i.useTheme)(),{fastCheckoutEnv:a}=c(),[s,r]=(0,n.useState)(!0),l=t||null!==a&&void 0!==a&&a;return n.createElement(v,{onClick:()=>{e.disabled||(e.onClick(!s),r((e=>!e)))},isDisabled:e.disabled,fastCheckoutEnv:a},n.createElement("div",{className:"top-section"},e.leftIcon,n.createElement("div",{className:"header-container-wrapper"},n.createElement("div",{className:"header-container"},n.createElement("div",{className:"header-section"},n.createElement(u,{header:e.header,disabled:e.disabled}),e.extraCharges&&n.createElement("div",{className:"extra-charges caption"},"\u20b9",e.extraCharges," extra")),n.createElement(h,{subHeader:e.subHeader,disabled:e.disabled})),e.disabledNotes&&n.createElement("div",{className:"disabled-instructions caption"},e.disabledNotes,n.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M7.99984 7.33329C8.36803 7.33329 8.6665 7.63177 8.6665 7.99996V10.6666C8.6665 11.0348 8.36803 11.3333 7.99984 11.3333C7.63165 11.3333 7.33317 11.0348 7.33317 10.6666V7.99996C7.33317 7.63177 7.63165 7.33329 7.99984 7.33329Z",fill:"#142236"}),n.createElement("path",{d:"M7.99984 5.99996C8.36803 5.99996 8.6665 5.70148 8.6665 5.33329C8.6665 4.9651 8.36803 4.66663 7.99984 4.66663C7.63165 4.66663 7.33317 4.9651 7.33317 5.33329C7.33317 5.70148 7.63165 5.99996 7.99984 5.99996Z",fill:"#142236"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.666504 7.99996C0.666504 3.94987 3.94975 0.666626 7.99984 0.666626C12.0499 0.666626 15.3332 3.94987 15.3332 7.99996C15.3332 12.05 12.0499 15.3333 7.99984 15.3333C3.94975 15.3333 0.666504 12.05 0.666504 7.99996ZM7.99984 1.99996C4.68613 1.99996 1.99984 4.68625 1.99984 7.99996C1.99984 11.3137 4.68613 14 7.99984 14C11.3135 14 13.9998 11.3137 13.9998 7.99996C13.9998 4.68625 11.3135 1.99996 7.99984 1.99996Z",fill:"#142236"}))),e.selected&&e.merchantInstructions&&n.createElement("div",{className:"merchant-instructions"},n.createElement("div",{className:"merchant-instructions-header title4 title4-mobile"},"Merchant\u2019s instructions"),n.createElement("div",{className:"merchant-instructions-sub-header caption-mobile"},e.merchantInstructions)),l&&e.rightSection&&n.createElement("div",{className:"right-section-mobile"},e.rightSection)),!l&&e.rightSection&&n.createElement("div",{className:"ml-auto right-section"},e.rightSection)))};var C=e=>{const t=(0,i.useTheme)(),a=e.isDisabled?t.colors.shade3:t.colors.brandMain;return n.createElement(n.Fragment,null,!e.isChecked&&n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:a})),e.isChecked&&n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z",fill:"#41584B"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z",fill:t.colors.brandMain})))},y=a(7034);var g=e=>{const{formatCurrency:t}=(0,y.U)(),a=e.partialCodModel.isEnabled?l.h.partialCOD:l.h.cashOnDelivery,{fastCheckoutEnv:i}=c(),s=a===l.h.cashOnDelivery?i?"Cash on delivery":"Pay cash on delivery":"Partial cash on delivery",r=e.codExtra,o=a===l.h.cashOnDelivery?"Pay the merchant in cash when order is delivered.":`Pay ${t(e.partialCodModel.amount/100)} online now and remaining amount in cash when you get your order`;return n.createElement(b,{selected:e.isSelected,disabled:e.isDisabled,onClick:()=>{e.onClick(a)},leftIcon:n.createElement(C,{isChecked:e.isSelected&&!e.isDisabled,isDisabled:e.isDisabled}),header:s,subHeader:o,extraCharges:r||void 0,merchantInstructions:e.instructions,disabledNotes:e.disabledNotes||void 0})};var E=e=>{const{fastCheckoutEnv:t}=c(),a=t?"Offline settlement":e.header,i=e.codExtra;return n.createElement(b,{selected:e.isSelected,disabled:e.isDisabled,onClick:()=>{e.onClick(l.h.settleDirectly)},leftIcon:n.createElement(C,{isChecked:e.isSelected&&!e.isDisabled,isDisabled:e.isDisabled}),header:a,subHeader:"Settle with merchant over chat, in-person, etc.",extraCharges:i,merchantInstructions:e.instructions,disabledNotes:e.disabledNotes})};const f=i.default.div`
  .payment-option {
    margin-top: 8px;
    background: url('https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/images-uid%2F5da8b2e9-68a3-41e8-80cb-b0b7330ffe29?alt=media&token=0ba13489-1396-426d-9fb6-dbf4674f4f25');
    width: 40px;
    height: 24px;
    background-size: cover;
    margin-right: 8px;
    flex-shrink: 0;
  }
  .disabled{
    opacity: 0.2;
  }
  .strip {
    width: 100%;
    overflow-x: auto;
  }
`,x=e=>n.createElement(f,null,n.createElement("div",{className:(e.isDisabled?"disabled":"")+" payment-stripe ml-auto my-auto"},n.createElement("div",{className:"d-flex strip"},[1,2,3,4,5,6,7,8,9,10,11,12].map((e=>n.createElement("div",{style:{backgroundPosition:-40*(e-1)+"px 0px"},className:"payment-option"}))))));var w=e=>{const{fastCheckoutEnv:t}=c(),a=t?"Online payment":"Pay online";return n.createElement(b,{selected:e.isSelected,disabled:e.isDisabled,onClick:()=>{e.onClick(l.h.online)},leftIcon:n.createElement(C,{isChecked:e.isSelected&&!e.isDisabled,isDisabled:e.isDisabled}),header:a,subHeader:t?"":"Cards, UPI apps, wallets, netbanking, pay later\n",merchantInstructions:e.instructions,rightSection:n.createElement(x,{isDisabled:e.isDisabled}),disabledNotes:e.disabledNotes})},P=a(82452);var D=e=>n.createElement(b,{leftIcon:n.createElement(P.Z,{isChecked:e.isChecked,isDisabled:e.isDisabled}),header:"Use wallet credits",subHeader:`Wallet Balance: ${r.R.convertToIntWithCurrency(e.walletBalance/100)}`,merchantInstructions:"",onClick:e.onClick,selected:e.isChecked,disabled:e.isDisabled}),O=a(28818),S=a(36707),k=a(27294),R=a(42809),M=a(43324),I=a(35635);const N=({isMobile:e,isWalletAvailable:t,isWalletBalanceNonZero:a,useWalletCredits:c,customerState:m,onWalletToggle:u,onlineEnabled:p,partialCodState:h,isModeEnabled:v,onClick:b,mode:C,paymentRestrictions:y,manualEnabled:f,store:x,codEnabled:P,fastCheckoutEnv:N,showModal:W,setShowModal:_})=>{var T,F,A,$;const L=x.meta.extraConfiguration.manualPaymentInstructionsTitle||"Settle offline",Z=e||null!==N&&void 0!==N&&N,U=(0,M.TL)();return n.createElement(d.Provider,{value:{fastCheckoutEnv:N}},n.createElement(s,{fastCheckoutEnv:N,className:Z?"":"border--fastcheckout--child",isMobile:Z},n.createElement("div",{className:"flex flex--column flex--1"},N&&n.createElement("div",{className:"w--100"},n.createElement("p",{className:` ${Z?"title3 m--t--16":"title2 m--x--24"} m--l--16 m--b--8`},"Choose a payment method")),t&&a&&n.createElement(D,{isChecked:c,isDisabled:0===(null===(T=m.customer)||void 0===T?void 0:T.walletCredits),walletBalance:m.customer.walletCredits,onClick:u}),p&&n.createElement(w,{header:L,partialCodModel:h,isDisabled:!v(l.h.online),onClick:b,isSelected:C===l.h.online,disabledNotes:null===(F=y.onlineEnabled)||void 0===F?void 0:F.message}),P&&n.createElement(g,{partialCodModel:h,codExtra:r.R.convertToIntFromString(x.meta.paymentInformation.codExtraCharge),isDisabled:!v(l.h.cashOnDelivery),onClick:b,instructions:x.meta.paymentInformation.codPaymentInstructions,isSelected:C===l.h.cashOnDelivery||C===l.h.partialCOD,disabledNotes:null===(A=y.codEnabled)||void 0===A?void 0:A.message}),f&&n.createElement(E,{header:L,partialCodModel:h,isDisabled:!v(l.h.settleDirectly),onClick:b,instructions:x.meta.paymentInformation.paymentInstructions,isSelected:C===l.h.settleDirectly,disabledNotes:null===($=y.manualEnabled)||void 0===$?void 0:$.message}),t&&!a&&n.createElement(D,{isChecked:!1,isDisabled:!0,walletBalance:0,onClick:u}),l.h.online&&W&&"PAYPAL"===x.meta.extraConfiguration.paymentGatewayType&&n.createElement(i.ThemeProvider,{theme:O.t},n.createElement(o,null,n.createElement(S.Modal,null,n.createElement("div",{className:"modal__wrapper"},n.createElement("div",{className:"modal__wrapper__top"},n.createElement("div",{className:"modal__wrapper__text"},"Checkout"),n.createElement("div",{className:"modal__wrapper__icon",onClick:()=>{U(k.W2.setCartLoading(!1)),U(k.W2.updateFooterState({bigErrorMessage:"Unexpected error occured. Please contact support"})),_(!1)}},n.createElement(R.aM,null))),n.createElement("hr",null),n.createElement("div",{className:"loading"},n.createElement(I.aN,{color:"black"})),n.createElement("div",{id:"paypalModal"}))))))))}},56418:function(e,t,a){a.d(t,{k:function(){return E}});var n=a(77646),i=a(13914),s=a(81108),r=a(37541),l=a(10697),o=a(43324),d=a(51225),c=a(64532),m=a.n(c),u=a(52923),p=a(46906),h=a(93311);class v{constructor(){this.isPlaceOrderActivated=!1,this.collectLocationFromUser=!1,this.eventService=p.P.getInstance()}static getInstance(){return this.instance||(this.instance=new v),this.instance}placeOrder(e,t=!1,a){var s,r,c;console.log("payment page : place order inside ",e);const m=o.ZP.getState().storeState.store,u=o.ZP.getState().contextState,p=o.ZP.getState().cartState.uiCart,h=m.meta.id,v=p,b=new i.R;if(e[n.KEYS.ORDER.razorpayOrderId]=null===(s=u.razorPayContext)||void 0===s?void 0:s.orderId,e[n.KEYS.ORDER.razorpayPaymentId]=null===(r=u.razorPayContext)||void 0===r?void 0:r.paymentId,e[n.KEYS.ORDER.razorpaySignature]=null===(c=u.razorPayContext)||void 0===c?void 0:c.signature,0!==b.errorFields.length)return b.errorMessage=b.errorMessage||"Please fill all required fields",b;const C=m.meta.minimumCheckoutValue,y=m.meta.maximumCheckoutValue,g=m.meta.currency;if(!t){if(C&&v.total<C)return b.errorFields.push("payment"),b.errorMessage=`Minimum order of ${g} ${C} is required`,b;if(y&&v.total>y)return b.errorFields.push("payment"),b.errorMessage=`Maximum order of ${g} ${y} is allowed`,b;if(m.meta.loginCompulsory){if(!o.ZP.getState().customerState.isLoggedIn)return b.errorMessage="Not logged in. Please login again.",b.errorFields.push("login_compulsory"),b}}return(v.paymentMode===d.h.online||v.paymentMode===d.h.partialCOD)&&v.total<5?(b.errorFields.push("payment"),b.errorMessage="Minimum order of Rs 5 is required to choose online payments.",b):v.paymentMode?this.isPlaceOrderActivated?(b.status="Loading",b.inProgress=!0,b.pulse=new l.y((t=>{var a,n,i;console.log(null===(a=e.items[0])||void 0===a?void 0:a.isSubscribable),1==(null===(n=e.items[0])||void 0===n?void 0:n.isSubscribable)&&(null===(i=e.items[0])||void 0===i?void 0:i.startDate)?this.createSubscription(e).then((e=>{this.eventService.recordEvent("send-enquiry",h,"success"),b.response=e,b.inProgress=!1,b.status="success",t.next(e),t.complete()})):this.placeOrderInternal(e).then((a=>{this.eventService.recordEvent("send-enquiry",h,"success"),b.response=a,b.inProgress=!1,b.status="success",v.paymentMode===d.h.online||v.paymentMode===d.h.partialCOD?t.next(e.razorpayOrderId):t.next(a),t.complete()}))})),b):(b.errorMessage="Something went wrong! Please try again",b.errorFields.push("Purchase error"),b):(b.errorMessage="Please select payment method",b.errorFields.push("payment_mode"),b)}async placeOrderInternal(e){if(!this.isPlaceOrderActivated)return"404";const t=h.q.functions.CLOUD_FUNCTION_URL+"/placeOrder";this.isPlaceOrderActivated=!1;const a=u.j.encrypt(JSON.stringify(e)),n=await m().post(t,a,{headers:{"content-type":"text/plain"},responseType:"text"});return u.j.decrypt(n.data)}async createSubscription(e){if(!this.isPlaceOrderActivated)return"404";const t={storeId:e.storeId,subObject:e},a=h.q.functions.FASITY_FUNCTION+"/bikayiSubscription-createSubscription";this.isPlaceOrderActivated=!1,t.subObject.items[0].cutOffDays=t.subObject.items[0].cutOffTime,t.subObject.items[0].nextActiveDate=t.subObject.items[0].startDate,delete t.subObject.items[0].cutOffTime;const n=u.j.encrypt(JSON.stringify(t)),i=await m().post(a,n,{headers:{"content-type":"text/plain"},responseType:"text"});return u.j.decrypt(i.data)}}var b=a(67294),C=a(14601),y=a(27294);var g=a(3346);const E=()=>{const e=v.getInstance(),t=(0,o.CG)((e=>e.customerState)),a=(0,o.CG)((e=>e.cartState.isReseller)),l=(0,o.TL)(),{cartState:d}=(0,g.j)(),c=o.ZP.getState().storeState.store.meta.currency,m=p.P.getInstance(),u=(0,b.useCallback)((async(o,d,c)=>{l(y.W2.setCartLoading(!0)),console.log("_placeOrder called");let m=new i.R;e.isPlaceOrderActivated=!0;const u=new s._(o,t).preparePayload(d,a),p=o.meta.paymentInformation;if(console.log("payment page ",d.paymentMode,d.payableAmountInCents),d.paymentMode!==C.h.online&&d.paymentMode!==C.h.partialCOD||!p.onlineEnabled&&p.partialCod.type===n.PartialCodTypes.NONE){m=e.placeOrder(u);return await h(m,d,o.meta)}if(!d.paymentBreakdown.onlinePayment){m=e.placeOrder(u);return await h(m,d,o.meta)}{const t={storeId:o.meta.id,amount:d.payableAmountInCents,type:r.G4.ORDER,currency:"INR",pgData:{},payload:{order:u},paymentProcessor:await c.getPaymentGateway()},a=await c.paymentProcessor.makePayment(t);if(console.log("PaymentResult ",a),c.paymentProcessor.processingExternalPayment=!1,null===a||void 0===a?void 0:a.success){m=e.placeOrder(u);return await h(m,d,o.meta)}"Custom domain and no personal gateway"===a.errorMessage||(m.errorMessage=a.errorMessage||"Transaction Failed. Please try again.",m.errorFields=["Payment"],m.inProgress=!1,l(y.W2.setBigFooterErrors(m.errorMessage)),l(y.W2.setCartLoading(!1)))}}),[t]);async function h(e,t,a){if(console.log("payment page ... "," inside api response ",e),e.errorMessage)return e.inProgress=!1,void l(y.W2.setCartLoading(!1));(e=>{m.recordEvent("place_order","ecommerce","order placed"),m.recordEvent("purchase","ecommerce","order placed",!1,d.cart.total),m.recordFbPixelEvent("track","Purchase",{num_items:d.cart.items.length,value:d.cart.total,content_type:"product",contents:d.cart.items.map((e=>({id:e.productId,name:e.name,quantity:e.quantity,price:e.price}))),product_catalog_id:d.cart.items.map((e=>e.catalogId)),currency:e})})(c);const n=e.pulse.toPromise();return e.response,console.log("order placed",e.response,n),l(y.W2.setBigFooterErrors(e.errorMessage)),m.recordFbPixelEvent("track","Purchase",{num_items:t.items.length,value:t.total,content_type:"product",contents:t.items.map((e=>({id:e.productId,name:e.name,quantity:e.quantity,price:e.price}))),currency:a.currency}),n}return{_placeOrder:u}}},1807:function(e,t,a){a.d(t,{V:function(){return g}});var n=a(67294),i=a(14601),s=a(77646),r=a(37541),l=a(43324),o=a(73255),d=a(27294),c=a(79389);class m{applyRestrictions(e,t){var a;new c.m;const n={},i=t.promoData,s=(null===(a=null===i||void 0===i?void 0:i.promo)||void 0===a?void 0:a.paymentModes)?i.promo.paymentModes:void 0;if(s){const e=s.manual,t=s.online,a=s.cod;e||(n.manualEnabled={isRestricted:!0,message:"Promo code applied does not allow this mode"}),t||(n.onlineEnabled={isRestricted:!0,message:"Promo code applied does not allow this mode"}),a||(n.codEnabled={isRestricted:!0,message:"Promo code applied does not allow this mode"})}return n}}class u{applyRestrictions(e,t){if(!e.meta.paymentInformation.onlineEnabled)return;return t.items.some((e=>!1===e.offlineEnabled))?{manualEnabled:{isRestricted:!0,message:"Some items only allow online payments"},codEnabled:{isRestricted:!0,message:"Some items only allow online payments"}}:void 0}}class p{applyRestrictions(e,t){const a={},n=t.pincodeBasedShipping.paymentModesEnabled;if(!n)return;const i=n.manual,s=n.online,r=n.cod;return"undefined"!==typeof i&&!1===i&&(a.manualEnabled={isRestricted:!0,message:"This payment mode is not available for selected pincode"}),"undefined"!==typeof s&&!1===s&&(a.onlineEnabled={isRestricted:!0,message:"This payment mode is not available for selected pincode"}),"undefined"!==typeof r&&!1===r&&(a.codEnabled={isRestricted:!0,message:"This payment mode is not available for selected pincode"}),a}}class h{applyRestriction(e,t){return t.walletCredits.useWalletCredits&&t.walletCredits.availableWalletCredits>t.total?{codEnabled:{isRestricted:!0,message:""},manualEnabled:{isRestricted:!0,message:""},onlineEnabled:{isRestricted:!0,message:""}}:{}}}class v{findRestriction(e,t){const a=e.find((e=>{var a;return null===(a=e[t])||void 0===a?void 0:a.isRestricted}));return a?a[t]:void 0}manageRestrictions(e,t,a,n,i){var s,r,l;console.log("all restrictions ... ",i);const o={};let d=0;return e&&(o.onlineEnabled=this.findRestriction(i,"onlineEnabled"),d+=(null===(s=o.onlineEnabled)||void 0===s?void 0:s.isRestricted)?0:1),t&&(o.manualEnabled=this.findRestriction(i,"manualEnabled"),d+=(null===(r=o.manualEnabled)||void 0===r?void 0:r.isRestricted)?0:1),a&&(o.codEnabled=this.findRestriction(i,"codEnabled"),d+=(null===(l=o.codEnabled)||void 0===l?void 0:l.isRestricted)?0:1),0!==d||n?o:{}}applyRestrictions(e,t,a){const n=[],i=(new m).applyRestrictions(t,a);i&&n.push(i);const s=(new u).applyRestrictions(t,a);s&&n.push(s);const r=(new p).applyRestrictions(t,a);r&&n.push(r);const l=(new h).applyRestriction(t,a),o=!!l;return l&&n.push(l),this.manageRestrictions(e.onlineEnabled,e.manualEnabled,e.codEnabled,o,n)}}class b{calculatePartialCodState(e,t,a,n,i){var r;const l=e.meta.paymentInformation,d=Object.assign({},a);if((null===(r=l.partialCod)||void 0===r?void 0:r.type)===s.PartialCodTypes.NONE)return d;d.total=t.total,n||(d.total+=l.cashOnDeliveryExtra||0);const c=new o.z(e,i);return d.amount=c.getPartialCodOnlineAmountInCents(d.total),d.isEnabled=d.amount>=5,d}}var C=a(33125),y=a(12791);const g=()=>{var e,t,a,c;const m=new C.fX,{uiCart:u}=(0,l.CG)((e=>e.cartState)),p=(0,l.CG)((e=>e.storeState.store)),h=(0,l.CG)((e=>e.cartState)),g=null===(e=p.meta)||void 0===e?void 0:e.paymentInformation,E=p.meta.hasAccessForFeature(s.AdvancedEcommerceFeatures.CUSTOMER_WALLET),[f,x]=(0,n.useState)(),w=new r.yS(p.meta),P=(0,l.CG)((e=>e.customerState)),[D,O]=(0,n.useState)(null!==(t=g.cashOnDeliveryExtra)&&void 0!==t?t:0),[S]=(0,n.useState)(g.onlineEnabled),[k]=(0,n.useState)(g.codEnabled),[R]=(0,n.useState)(g.manualEnabled),[M,I]=(0,n.useState)(!1),[N,W]=(0,n.useState)(!0),[_,T]=(0,n.useState)({}),[F,A]=(0,n.useState)(!1),$=(0,l.TL)(),L=P.isLoggedIn,Z=(0,l.CG)((e=>e.cartState.isReseller));(0,n.useEffect)((()=>{h.uiCart.walletCredits&&A(h.uiCart.walletCredits.useWalletCredits)}),[null===(a=h.uiCart.walletCredits)||void 0===a?void 0:a.useWalletCredits]),(0,n.useEffect)((()=>{P.customer&&(I(E&&P.isLoggedIn),W(!!P.customer.walletCredits),$(d.W2.setAvailableWalletCredits({availableWalletCredits:(P.customer.walletCredits||0)/100})),$(d.W2.setUseWalletCredits({useWalletCredits:!1})),W(P.customer.walletCredits>0))}),[P.customer]);const[U,B]=(0,n.useState)({isEnabled:!1,amount:0,total:0});(0,n.useEffect)((()=>{Z&&(g.codEnabled=!1)}),[Z]),(0,n.useEffect)((()=>{const e=(new v).applyRestrictions({manualEnabled:R,onlineEnabled:S,codEnabled:k},p,u);T(e)}),[null===(c=h.uiCart.walletCredits)||void 0===c?void 0:c.useWalletCredits]);const j=()=>{console.log("cod extra charges",g.cashOnDeliveryExtra),g.cashOnDeliveryExtra&&(f!==i.h.cashOnDelivery&&f!==i.h.partialCOD?(O(0),$(d.W2.updateCodExtraPrice({codExtraPrice:0}))):f!==i.h.cashOnDelivery&&f!==i.h.partialCOD||(O(g.cashOnDeliveryExtra),$(d.W2.updateCodExtraPrice({codExtraPrice:g.cashOnDeliveryExtra}))),F&&!G(i.h.partialCOD)&&$(d.W2.updateCodExtraPrice({codExtraPrice:0})))},G=e=>{var t,a,n;return e===i.h.online?g.onlineEnabled&&!(null===(t=_.onlineEnabled)||void 0===t?void 0:t.isRestricted):e===i.h.settleDirectly?g.manualEnabled&&!(null===(a=_.manualEnabled)||void 0===a?void 0:a.isRestricted):e===i.h.partialCOD||e===i.h.cashOnDelivery?g.codEnabled&&!(null===(n=_.codEnabled)||void 0===n?void 0:n.isRestricted):void 0},q=e=>{G(e)&&(x(e),$(d.W2.updatePaymentMode({paymentMode:e})))};return(0,n.useEffect)((()=>{j(),(async()=>{if(f===i.h.cashOnDelivery||f===i.h.settleDirectly)$(d.W2.updatePaymentProcessor({paymentProcessor:""}));else if(f===i.h.online||f===i.h.partialCOD){await w.setUp();const e=await w.getPaymentGateway();$(d.W2.updatePaymentProcessor({paymentProcessor:e}))}})()}),[f,F]),(0,n.useEffect)((()=>{P.customer&&(I(E&&P.isLoggedIn),W(!!P.customer.walletCredits))}),[L]),{onPaymentModeClick:e=>{q(e)},onChange:q,onWalletToggle:e=>{$(d.W2.setUseWalletCredits({useWalletCredits:!e})),$(d.W2.setAvailableWalletCredits({availableWalletCredits:e?0:P.customer.walletCredits/100})),$(d.W2.updateCodExtraPrice({codExtraPrice:0}))},isModeEnabled:G,addCodExtraCodCharges:j,setUpPartialCodInformation:()=>{var e;if((null===(e=g.partialCod)||void 0===e?void 0:e.type)===s.PartialCodTypes.NONE)return;const t=Object.assign({},U);t.total=u.total,D||(t.total+=g.cashOnDeliveryExtra||0);const a=new o.z(p,P);t.amount=a.getPartialCodOnlineAmountInCents(t.total),t.isEnabled=t.amount>=5,B(t)},setUp:async()=>{var e,t,a,n;const s=(new v).applyRestrictions({manualEnabled:R,onlineEnabled:S,codEnabled:k},p,u);T(s);const r=new b;if(B(r.calculatePartialCodState(p,u,U,D,P)),g.onlineEnabled&&!(null===(e=_.onlineEnabled)||void 0===e?void 0:e.isRestricted))x(i.h.online),q(i.h.online);else if(g.manualEnabled&&!(null===(t=_.manualEnabled)||void 0===t?void 0:t.isRestricted))x(i.h.settleDirectly),q(i.h.settleDirectly);else if(g.codEnabled&&!(null===(a=_.codEnabled)||void 0===a?void 0:a.isRestricted)){const e=U.isEnabled?i.h.partialCOD:i.h.cashOnDelivery;x(e),q(e)}else x(i.h.settleDirectly),q(i.h.settleDirectly);if(null===(n=h.uiCart)||void 0===n?void 0:n.paymentMode)return x(h.uiCart.paymentMode),q(h.uiCart.paymentMode),void $(d.W2.setCartLoading(!1));await w.setUp();const l=await w.getPaymentGateway();$(d.W2.updatePaymentProcessor({paymentProcessor:l}));const o=await y.i.fetchIdToken();await m.fetchCustomer(p.meta.id,o),console.log("finish setting up"),$(d.W2.setCartLoading(!1))},isWalletAvailable:M,setIsWalletAvailable:I,isWalletBalanceNonZero:N,setIsWalletBalanceNonZero:W,useWalletCredits:F,extraCharges:D,setExtraCharges:O,setuseWalletCredits:A,onlineEnabled:S,codEnabled:k,manualEnabled:R,isCustomerWalletEnabled:E,paymentInformation:g,paymentRestrictions:_,setPaymentRestrictions:T,mode:f,setMode:x,partialCodState:U}}},51225:function(e,t,a){var n;a.d(t,{h:function(){return n}}),function(e){e.cashOnDelivery="cod",e.partialCOD="partialCOD",e.settleDirectly="manual",e.online="online"}(n||(n={}))},13914:function(e,t,a){a.d(t,{R:function(){return n}});class n{constructor(){this.errorFields=[]}}}}]);