(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5885],{69055:function(e,t,r){"use strict";r.d(t,{J:function(){return a}});var o=r(67294);const a=e=>o.createElement("svg",{onClick:()=>e.toggleModal(!1),width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",fill:"#142236"}))},73110:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var o=r(67294),a=r(53857),n=r(31592),i=r(11163),l=r(82175),s=r(53918);const d=s.default.div`

position: absolute;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: 999999;
overflow-y: auto;
background-color: rgba(31, 32, 41, 0.75);
opacity: 1;
transition: opacity 250ms 700ms ease;

.referree-wrapper {
  background: ${e=>e.theme.colors.tint3};
  border-radius: 8px;
  padding: 8px 8px 46px 0px;
  max-width: 612px;

  &__ticketContainer {
    border: 1px dashed rgba(79, 84, 92, 0.2);
    box-sizing: border-box;
    border-radius: 8px;
    width: 296px;

    &__upperPart {
      justify-content: left;
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 16px 0 0 16px;

      .offer-digit {
        font-style: normal;
        ${e=>e.theme.fonts.title1Mobile};
        font-feature-settings: "tnum" on, "lnum" on;
        color: ${e=>e.theme.colors.textPrimary};
      }

      .offer-text {
        margin: 0 8px;
        width: 100%;
        font-style: normal;
        ${e=>e.theme.fonts.bodySmall2WithWithoutLineHeight};
        font-feature-settings: "tnum" on, "lnum" on;
        color: ${e=>e.theme.colors.shade2};
        opacity: 0.8;
      }
    }

    &__lowerPart {
      display: flex;
      padding: 0 0 16px 16px;
      justify-content: space-between;

      .copy-btn {
        border: 1px solid ${e=>e.theme.colors.shade2};
        box-sizing: border-box;
        border-radius: 4px;
        margin-right: 5px;
        padding: 4px 12px;
        cursor: pointer;

        @media (max-width: 768px) {
          border: 0px solid ${e=>e.theme.colors.shade2};
        }

        .text {
          font-style: normal;
          ${e=>e.theme.fonts.title4};
          font-feature-settings: "tnum" on, "lnum" on;

          color: ${e=>e.theme.colors.shade2};
          flex: none;
          order: 0;
          flex-grow: 0;
          margin: 0px 8px;
        }
      }

      .coupon-code {
        font-style: normal;
        ${e=>e.theme.fonts.title7};
        padding-top: 8px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: ${e=>e.theme.colors.shade1};

        &.copied {
          ${e=>e.theme.fonts.title7};
        }
      }
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      margin-right: -8px;
    }
  }

  &__referreeBox {
    display: flex;
  
    @media (max-width: 768px) {
      flex-direction: column;
    }
  
    &__leftSection {
      margin: auto 8px auto 0px;
      flex: 1;
  
      @media (max-width: 768px) {
        margin: 10px auto 40px;
  
        svg {
          width: 130px;
          height: 105px;
        }
      }
  
      &.mob {
        @media (min-width: 768px) {
          display: none !important;
        }
      }
    }
  
    &__rightSection {
      margin: auto 29px auto 8px;
      flex: 1;
  
      @media (max-width: 768px) {
        margin: auto;
      }
  
      &__header {
        font-style: normal;
        text-align: center;
        ${e=>e.theme.fonts.title5};
        font-feature-settings: "tnum" on, "lnum" on;
        color: ${e=>e.theme.colors.black};
        margin-bottom: 0px;

        @media(max-width: 768px) {
          max-width: 296px;
        }
      }
  
      .start-shopping {
        text-align: center;
        border-radius: 4px;
        font-style: normal;
        ${e=>e.theme.fonts.title4};
        font-feature-settings: "tnum" on, "lnum" on;
        color: ${e=>e.theme.colors.tint3};
        flex-grow: 0;
      }
  
      &__info {
        text-align: center;
        margin: 16px auto;
        font-style: normal;
        ${e=>e.theme.fonts.title6};
        font-feature-settings: "tnum" on, "lnum" on;
        color: ${e=>e.theme.colors.shade2};
      }
  
      &__ticket {
        margin: 34px auto 0px;
        background: ${e=>e.theme.colors.tint5};
        position: relative;
        border-radius: 8px;
  
        @media (max-width: 768px) {
          margin: 16px auto 0px;
        }
  
        .circle {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 37%;
          background: white;
          border-radius: 50% 50% 0px 0px;
          border: 1px dashed rgba(79, 84, 92, 0.2);
          z-index: 1;
          border-bottom: 0px;
          -webkit-transform: rotate(-90deg);
          -ms-transform: rotate(-90deg);
  
          border-right: 0px;
          border-left: 0px;
  
          &.leftSide {
            transform: rotate(90deg);
            left: -15px;
          }
  
          &.rightSide {
            right: -15px;
            transform: rotate(-90deg);
          }
        }
  
        .seperator {
          width: 90%;
          margin: 20px auto 16px auto;
          height: 0px;
          left: 16px;
          top: 64px;
          opacity: 0.2;
          border: 1px dashed ${e=>e.theme.colors.shade2};
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 8px 16px 24px;
  }
}


`;var c=r(42809),m=r(25617),p=r(47984),f=r(93311);class u{constructor(){this.CLOUD_FUNCTION_URL=f.q.functions.FASITY_FUNCTION}async fetchReferreePromoCode(e){const t={"Content-Type":"application/json"},r=this.CLOUD_FUNCTION_URL+"/referralsApiFunctions-getReferralDetails",o={referralCode:e};try{const e=await p.sM.sendData({apiPath:r,requestBody:o,requestHeader:t});if(e.data){return JSON.parse(JSON.stringify(e.data))}}catch(a){return{}}return{}}}var x=r(69055);var h=()=>{var e,t,r,a;const[n,i]=(0,o.useState)(!0),[l,p]=(0,o.useState)(!1),[f,h]=(0,o.useState)(!1),[g,_]=(0,o.useState)({}),v=(0,m.v9)((e=>e.storeState.store)),w=(0,s.useTheme)(),b=()=>{y(!1)},E=new u;(0,o.useEffect)((()=>{var e;document.body.classList.add("referree-modal");const t=null===(e=window.location)||void 0===e?void 0:e.href.split("/ref/")[1];h(!0),E.fetchReferreePromoCode(t).then((e=>{_(e||{}),h(!1)})).catch((()=>{console.log("something went wrong"),_({}),h(!1)}))}),[]);const y=e=>{i(e),e?document.body.classList.add("referree-modal"):document.body.classList.remove("referree-modal")};return o.createElement(o.Fragment,null,n&&o.createElement(o.Fragment,null,o.createElement(d,{onClick:()=>{b()}},o.createElement("div",{className:"referree-wrapper",onClick:e=>{e.stopPropagation()}},o.createElement(o.Fragment,null,o.createElement("div",{className:"referree-wrapper__header"},o.createElement("h1",{className:"title3"}),o.createElement(x.J,{toggleModal:y})),o.createElement("div",{className:"referree-wrapper__referreeBox"},o.createElement("div",{className:"referree-wrapper__referreeBox__leftSection"},o.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/referree.png?alt=media&token=8935439d-14b0-4597-84cc-112e4fba2ca4",alt:""})),o.createElement("div",{className:"referree-wrapper__referreeBox__rightSection"},o.createElement("p",{className:"referree-wrapper__referreeBox__rightSection__header"},o.createElement("span",{className:"referree-wrapper__referreeBox__rightSection__header__referree_name"},f?"Loading...":g&&g.referrerName?`${g.referrerName} has invited you to shop at ${v.meta.name}`:"INVALID REFERRAL CODE")),o.createElement("div",{className:"referree-wrapper__referreeBox__rightSection__ticket"},o.createElement("div",{className:"circle leftSide"}),o.createElement("div",{className:"referree-wrapper__ticketContainer"},o.createElement("div",{className:"referree-wrapper__ticketContainer__upperPart"},o.createElement("div",{className:"offer-digit"},o.createElement("div",null,"\u20b9",(null===(e=null===g||void 0===g?void 0:g.referralSettings)||void 0===e?void 0:e.discountValReferee)?`${null===(t=null===g||void 0===g?void 0:g.referralSettings)||void 0===t?void 0:t.discountValReferee}`:"0")),o.createElement("div",{className:"offer-text"},o.createElement("span",null,"off on any purchase above \u20b9",o.createElement("span",null,(null===(r=null===g||void 0===g?void 0:g.referralSettings)||void 0===r?void 0:r.minOrderValReferee)?null===(a=null===g||void 0===g?void 0:g.referralSettings)||void 0===a?void 0:a.minOrderValReferee:"0")))),o.createElement("div",{className:"seperator"}),o.createElement("div",{className:"referree-wrapper__ticketContainer__lowerPart"},o.createElement("div",{className:"coupon-code"},o.createElement("span",null,g.referreePromocode?g.referreePromocode:"INVALID")),o.createElement("div",{className:"copy-btn",onClick:()=>{(()=>{const e=document.createElement("textarea");e.innerText=(null===g||void 0===g?void 0:g.referreePromocode)?null===g||void 0===g?void 0:g.referreePromocode:"INVALID",document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove(),p(!0)})()}},o.createElement("span",{className:"text"},l?"Copied!":"Copy")))),o.createElement("div",{className:"circle rightSide"})),o.createElement("div",{className:"referree-wrapper__referreeBox__rightSection__info"},"Copy coupon & enter to cart to get discount"),o.createElement(c.qz,{buttonStyle:"primary",buttonSize:"small",buttonPadding:"8px",textColor:w.colors.tint3,buttonWidth:"100%",click:()=>{b()}},o.createElement("span",{className:"start-shopping"},"Start Shopping")))))))))},g=r(88397),_=r(43324),v=r(28818);const w=s.default.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
  * {
    font-family: "Inter";
  }
`;var b=r(85893),E=function(){var e=(0,i.useRouter)();return(0,o.useEffect)((function(){e.asPath.includes("ref")&&class{static popper(){const e=document.getElementById("referreeNode"),t=new l.X(void 0);return g.render(o.createElement(s.StyleSheetManager,{disableCSSOMInjection:!0},o.createElement(m.zt,{store:_.ZP},o.createElement(s.ThemeProvider,{theme:v.t},o.createElement(w,null,o.createElement(h,null))))),e),t.subscribe((t=>{void 0!==t&&g.unmountComponentAtNode(e)})),t}}.popper()}),[]),(0,b.jsx)(a.Z,{children:(0,b.jsx)(n.Z,{},e.query.pageId)})}},60746:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[username]/ref/[refId]",function(){return r(73110)}])}},function(e){e.O(0,[4864,5362,2063,1199,6414,9774,2888,179],(function(){return t=60746,e(e.s=t);var t}));var t=e.O();_N_E=t}]);