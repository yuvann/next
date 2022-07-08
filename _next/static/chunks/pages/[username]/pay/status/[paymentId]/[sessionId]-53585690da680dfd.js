(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1374],{97839:function(e,t,n){"use strict";var a=n(67294),i=n(64532),r=n.n(i),s=n(23218),o=n(8195),c=n(25617),l=n(93311);t.Z=e=>{var t,n;const i=[0,3e3,5e3,1e4,15e3],[d,u]=(0,a.useState)(!0),[m,p]=(0,a.useState)(!1),v=(null===(t=e.routeParams)||void 0===t?void 0:t.paymentId)||e.paymentId,f=(null===(n=e.routeParams)||void 0===n?void 0:n.sessionId)||(null===e||void 0===e?void 0:e.sessionId)||void 0,h=(0,c.v9)((e=>e.storeState.store)),g=t=>{t<i.length?setTimeout((()=>{(async(e,t)=>{try{const n={uid:e};t&&(n.sessionId=t);const a=`${l.q.functions.FASITY_FUNCTION}/paymentsApiFunctions-checkPaymentStatusAndTakeAction`;return(await r().post(a,n,{responseType:"text"})).data.response}catch(n){return void u(!1)}})(v,f).then((n=>{"200"===(null===n||void 0===n?void 0:n.status)?(u(!1),e.cartService.loadFromCache(),e.cartService.empty(),e.actionService.redirectToOrderPlacedPage(n.data.orderId,!0)):(p(!0),g(t+1))}),(()=>{g(t+1)}))}),i[t]):u(!1)};(0,a.useEffect)((()=>{y().then((()=>{}))}),[]),(0,a.useEffect)((()=>{h.meta&&g(0)}),[h.meta]);const y=async()=>{const t={paymentId:v,sessionId:f};if((new s.s).setUp(t),!h.meta){const t=new o.N;await t.loadRoute(e.routeParams)}};if(!h.meta)return a.createElement(a.Fragment,null);return a.createElement("div",null,a.createElement("div",{className:"loading__container loading"},d&&a.createElement("div",{className:"center-contents-vertical"},a.createElement("div",{className:"lds-ring"},a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null)),a.createElement("div",{className:"loading-label"},"Loading payment status")),!d&&m&&a.createElement("div",{className:"center-contents-vertical"},a.createElement("div",{className:"loading-label"},"Payment failed"),a.createElement("button",{className:"btn btn-primary",onClick:function(){e.actionService.redirectToCart()}},"Continue Shopping"))))}},53857:function(e,t,n){"use strict";n(67294);var a=n(53918),i=n(85893),r=a.default.div.withConfig({displayName:"LayoutWrapper__LayoutWrapperStyle",componentId:"sc-b8rzhv-0"})([".wrapper__content{min-height:100vh;overflow-x:inherit;}"]);t.Z=function(e){return(0,i.jsx)(r,{children:(e.SSR,(0,i.jsx)("div",{className:"wrapper__content",children:e.children}))})}},42006:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(67294),i=n(11163),r=n(95814);const s=n(53918).default.div`
  .loading {
    &__container {
      display: flex;
      max-width: 500px;
      height: 350px;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .center-contents-vertical {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__label {
      padding-top: 15px;
      padding-bottom: 15px;
    }

    .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }

    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid #fff;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${e=>e.theme.colors.brandMain} transparent transparent transparent;
    }

    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }

    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }

    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }

    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;var o=n(97839),c=n(43324),l=n(25617);const d=e=>a.createElement(l.zt,{store:c.ZP},a.createElement(s,null,a.createElement(o.Z,Object.assign({},e))));var u=n(3346),m=n(85893),p=function(){var e,t=(0,i.useRouter)(),n=(0,u.j)(),a=r.c.getInstance(t),s=t.query.paymentId,o=null===(e=t.query)||void 0===e?void 0:e.sessionId;return(0,m.jsx)(d,{actionService:a,cartService:n,paymentId:s,sessionId:o})},v=a.memo(p)},88697:function(e,t,n){"use strict";n.r(t);var a=n(53857),i=n(42006),r=n(85893);t.default=function(){return(0,r.jsx)(a.Z,{children:(0,r.jsx)(i.Z,{})})}},34201:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[username]/pay/status/[paymentId]/[sessionId]",function(){return n(88697)}])}},function(e){e.O(0,[4864,5362,2063,1199,3346,9774,2888,179],(function(){return t=34201,e(e.s=t);var t}));var t=e.O();_N_E=t}]);