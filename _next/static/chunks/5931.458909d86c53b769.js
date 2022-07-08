"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5931],{75931:function(e,t,a){a.r(t);var o=a(67294),i=a(89047),n=a(42809),l=a(54549),r=a(53918),c=a(9383);const s=r.default.div`
  .header {
    padding: 24px 24px 28px !important;
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: #fff;
    @media (max-width: 600px) {
      padding: 16px !important;
    }
  }
  .promo-codes-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: ${e=>e.isMobileDevice?"0 0 32px 0":"0px 24px 24px"};

    .single-promo-container {
      width: 100%;

      @media (max-width: 600px) {
        padding: 0 16px;
      }
      
      #coupon-container {
        width: unset;
        margin: 8px auto;
        margin-top: 0;

        p[class='caption'] {
          ${e=>e.theme.fonts.bodySmall};
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
    
          @media (max-width: 600px) {
            ${e=>e.theme.fonts.title4Mobile};
          }
        }
      }
     
    }
  }
`;t.default=e=>{var t;const a=(0,l.iP)(),{colors:m}=(0,r.useTheme)();return o.createElement(n.u_,{onBackdropPress:e.onBackdropPress},o.createElement(i.K,null,o.createElement(s,{isMobileDevice:a},o.createElement("div",{className:"bg-white modal-container "+(a?" bottom-sheet ":"")},o.createElement("div",{className:"header d-flex align-items-center"},o.createElement("div",{className:(a?"title3-mobile":"title3")+' "text-shade1"'},"Promos and offers"),o.createElement("span",{className:"ml-auto",onClick:e.onBackdropPress},o.createElement(n.aM,{color:m.shade1,width:"24px",height:"24px"}))),a&&o.createElement("div",{className:"line m--b--8"}),o.createElement("div",{className:"promo-codes-container"},null===(t=e.allPromoModalData)||void 0===t?void 0:t.map(((t,a)=>o.createElement(o.Fragment,null,o.createElement("div",{key:a,className:"single-promo-container"},o.createElement(c.l,{uiPromo:t,buttonType:"BUTTON",onCouponCardSelect:()=>{e.openPromoModal(t)},buttonAction:"COPY"}))))))))))}}}]);