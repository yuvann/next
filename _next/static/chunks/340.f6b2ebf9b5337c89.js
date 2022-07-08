"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[340],{10340:function(e,t,o){o.r(t),o.d(t,{default:function(){return R}});var a=o(67294),r=o(25617),l=o(53918),i=o(43324),n=o(3346),d=o(55889),c=o(33125),s=o(67713),m=o(68420),u=o(22314),p=o(91685),h=o(37597),g=o(75191),x=o(12791);const f=l.default.div`
  p {
    margin-bottom: 0px;
  }

  .scroller {
    padding-bottom: 280px;
    overflow: auto;
    height: 100%;

    @media (max-width: 768px) {
      padding-bottom: 220px;
    }

    .promo-container {
      margin-top: 14px;
    }
  }

  .align--items--center {
    align-items: center;
  }

  .justify--content--start {
    justify-content: flex-start;
  }

  .text--center {
    text-align: center;
  }

  .w--full {
    width: 100%;
  }

  .flex {
    display: flex;
  }

  .flex--1 {
    flex: 1 !important;
  }

  .flex--column {
    flex-direction: column;
  }

  .flex--row {
    flex-direction: row;
  }
`;var v=o(77389),C=o(7034);const b=e=>a.createElement("svg",{width:e.isMobile?"16":"28",height:e.isMobile?"18":"30",viewBox:"0 0 28 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M11.3337 12.3334C12.07 12.3334 12.667 12.9303 12.667 13.6667V21.6667C12.667 22.4031 12.07 23 11.3337 23C10.5973 23 10.0003 22.4031 10.0003 21.6667V13.6667C10.0003 12.9303 10.5973 12.3334 11.3337 12.3334Z",fill:"#8C8E95"}),a.createElement("path",{d:"M18.0003 21.6667V13.6667C18.0003 12.9303 17.4034 12.3334 16.667 12.3334C15.9306 12.3334 15.3337 12.9303 15.3337 13.6667V21.6667C15.3337 22.4031 15.9306 23 16.667 23C17.4034 23 18.0003 22.4031 18.0003 21.6667Z",fill:"#8C8E95"}),a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.33366 5.66671V4.33337C7.33366 3.27251 7.75509 2.25509 8.50523 1.50495C9.25538 0.754801 10.2728 0.333374 11.3337 0.333374H16.667C17.7279 0.333374 18.7453 0.754801 19.4954 1.50495C20.2456 2.25509 20.667 3.27251 20.667 4.33337V5.66671H26.0003C26.7367 5.66671 27.3337 6.26366 27.3337 7.00004C27.3337 7.73642 26.7367 8.33337 26.0003 8.33337H24.667V25.6667C24.667 26.7276 24.2456 27.745 23.4954 28.4951C22.7453 29.2453 21.7279 29.6667 20.667 29.6667H7.33366C6.27279 29.6667 5.25538 29.2453 4.50523 28.4951C3.75509 27.745 3.33366 26.7276 3.33366 25.6667V8.33337H2.00033C1.26395 8.33337 0.666992 7.73642 0.666992 7.00004C0.666992 6.26366 1.26395 5.66671 2.00033 5.66671H7.33366ZM10.3909 3.39056C10.6409 3.14052 10.98 3.00004 11.3337 3.00004H16.667C17.0206 3.00004 17.3598 3.14052 17.6098 3.39056C17.8598 3.64061 18.0003 3.97975 18.0003 4.33337V5.66671H10.0003V4.33337C10.0003 3.97975 10.1408 3.64061 10.3909 3.39056ZM6.00033 8.33337V25.6667C6.00033 26.0203 6.1408 26.3595 6.39085 26.6095C6.6409 26.8596 6.98004 27 7.33366 27H20.667C21.0206 27 21.3598 26.8596 21.6098 26.6095C21.8598 26.3595 22.0003 26.0203 22.0003 25.6667V8.33337H6.00033Z",fill:"#8C8E95"}));var E=o(62711),w=o(45642);const y=a.createContext({closeNudge:()=>{}}),N=()=>(0,a.useContext)(y),M=l.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: ${e=>e.noBottomBorder?0:1}px solid
    ${e=>e.theme.colors.tint2};
  padding: ${e=>e.theme.isMobile?12:24}px;
  background-color: ${e=>e.showHighlight?"rgba(236, 185, 53, 0.4)":"unset"};
  transition: background-color 1s;

  .img--holder {
    margin-right: ${e=>e.theme.isMobile?8:24}px;
  }

  img {
    width: ${e=>e.theme.isMobile?48:120}px;
    height: ${e=>e.theme.isMobile?48:120}px;
    border-radius: 4px;
    object-fit: ${e=>e.theme.isMobile?"cover":"contain"};
  }

  .details {
    display: flex;
    flex-direction: column;
    width: 100%;

    .name__detail {
      display: flex;
      flex-direction: ${e=>e.theme.isMobile?"column":"row"};

      .price__detail {
        display: flex;
        flex-direction: column;
        margin-top: ${e=>e.theme.isMobile?"4px":0};

        .discount {
          text-align: right;
          text-decoration-line: line-through;
        }
      }
    }

    .variant__detail {
      display: flex;
      flex-direction: row;
      margin-top: 8px;

      .variant__color {
        height: 20px;
        width: 20px;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }
      .custom--variant {
        margin-left: 8px;
      }
    }

    .item--control--panel {
      display: flex;
      flex-direction: row;
      margin-top: ${e=>e.theme.isMobile?8:24}px;
      align-items: center;

      .qty {
        flex: 1;
        margin-right: ${e=>e.theme.isMobile?8:24}px;
      }
    }
  }
`,k=a.memo((({orderItem:e,noBottomBorder:t,addHighlight:o,idx:r})=>{var n,d,c;const{formatCurrency:s}=(0,C.U)(),m=(0,i.CG)((e=>e.cartState)),[u,p]=(0,a.useState)(!1),{isMobile:h}=(0,l.useTheme)(),[g,x]=(0,a.useState)(o),f=r.replace(`${e.productId}-${e.catalogId}-`,""),v=null===(d=null===(n=m.validationState)||void 0===n?void 0:n.errors)||void 0===d?void 0:d[f];return(0,a.useEffect)((()=>{g&&setTimeout((()=>{x(!1)}),1500)}),[]),a.createElement(M,{noBottomBorder:t,showHighlight:g},a.createElement("div",{className:"img--holder"},a.createElement("img",{src:e.image})),a.createElement("div",{className:"details"},a.createElement("div",{className:"name__detail"},a.createElement("p",{className:(h?"body-small":"body-large")+" flex--1 m--r--16 text-shade1"},e.name),a.createElement("div",{className:"price__detail"},a.createElement("p",{className:h?"body-small text-shade2":"title3 text-shade1"},s(null!==(c=e.discount)&&void 0!==c?c:e.price)),!!e.discount&&a.createElement("p",{className:`text-shade3 ${h?"body-small":"body-regular"} discount`},s(e.discount)))),!(!e.typeVariant&&!e.colorVariant)&&a.createElement("div",{className:"variant__detail"},!!e.colorVariant&&a.createElement("div",{className:"variant__color",style:{backgroundColor:e.colorVariant}}),!!e.typeVariant&&a.createElement("div",{className:"custom--variant"},a.createElement("p",{className:"text-shade2 body-regular"},e.typeVariant))),a.createElement("div",{className:"item--control--panel"},a.createElement("div",{className:"qty"},a.createElement(E.Z,{orderItem:e,qtyTextPrefix:h?"Qty":"Quantity"})),a.createElement("div",{className:"delete--btn",onClick:()=>p(!0)},a.createElement(b,{isMobile:h}))),v&&a.createElement("div",{className:"m--t--4"},a.createElement("p",{className:"caption text-error"},v))),!!u&&a.createElement(w.n,{idx:parseInt(f),onClose:()=>p(!1),orderItem:e}))})),S=l.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,$=a.memo((()=>{var e;const t=(0,i.CG)((e=>e.cartState.uiCart)),{lastAddedProductDetail:o}=N();return a.createElement(S,null,null===(e=t.items)||void 0===e?void 0:e.map(((e,r)=>{let l=!1;return o&&(l=e.productId.toString()===o.productId.toString()&&e.catalogId.toString()===o.catalogId.toString()&&e.colorVariant===o.selectedColor&&e.typeVariant===o.selectedVariant),a.createElement(k,{idx:`${e.productId}-${e.catalogId}-${r}`,addHighlight:l,noBottomBorder:r===t.items.length-1,key:`${e.productId}-${e.catalogId}-${r}`,orderItem:e})})))}));var _=o(42809),V=o(71213),I=o(87335),T=o(90548),H=o(41334);const Z=({onCrossClick:e})=>a.createElement(_.u_,null,a.createElement(H.H,{onClose:e}));var F=o(37046);const B=l.default.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: white;
  .footer {
    &__body {
      padding: ${e=>e.theme.isMobile?12:24}px;
      display: flex;
      flex-direction: column;
    }
    &__btns {
      text-align: center;

      display: flex;
      flex-direction: row;
      padding: ${e=>e.theme.isMobile?"12px 0px 0":"16px 16px 0px"};

      p {
        cursor: pointer;
      }
      border-left {
        border-left: 1px solid ${e=>e.theme.colors.tint2};
      }
    }
  }
  .view .border--left--tint2 {
    border-left: 1px solid ${e=>e.theme.colors.tint2};
  }

  /* .nudge--footer--body {
    padding: ${e=>e.theme.isMobile?12:24}px;
    display: flex;
    flex-direction: column;
  } */
`,G=(0,l.default)(F.Bc)`
  position: absolute;
  bottom: 100%;
  z-index: unset;
`,L=l.default.div`
  background: #fdf7e9;
  border-radius: 4px;
  padding: 8px 12px;
  color: #926902;
`,P=({showFastCheckout:e,setFastCheckout:t})=>{const o=(0,i.CG)((e=>e.cartState.footerState)),r=(0,i.CG)((e=>e.cartState.validationState)),[n,d]=(0,a.useState)(!1),c=(0,i.CG)((e=>e.cartState.uiCart)),{isMobile:s,colors:m}=(0,l.useTheme)(),{formatCurrency:u}=(0,C.U)(),{freeShippingAboveAmount:p}=(0,I.v)(),{redirectToCart:h,closeNudge:g}=N();return a.createElement(B,null,a.createElement(a.Fragment,null,(o.errorMessage||o.infoMessage)&&a.createElement(G,null,a.createElement("p",{className:s?"caption-mobile":"body-regular"},o.errorMessage||o.infoMessage))),a.createElement(a.Fragment,null,!(!r.errors||!Object.keys(r.errors).length)&&a.createElement(G,null,a.createElement("p",{className:s?"caption-mobile":"body-regular"},"Please correct product quantities to complete your purchase"))),0!==p&&a.createElement(L,{className:s?"caption-mobile":"body-regular"},"Get free delivery by adding items worth"," ",u(p)," more"),a.createElement(T.Z,{backgroundColor:m.tint2}),a.createElement("div",{className:"footer__body"},a.createElement("div",null,a.createElement(_.qz,{buttonName:`${u(c.totalAmountToBeShown)} \u2022 CHECKOUT`,buttonStyle:"primary",buttonSize:s?"small":"large",buttonType:"parent-relative",click:()=>{r.errors&&Object.keys(r.errors).length||o.errorMessage||o.infoMessage||t(!0)}})),a.createElement("div",{className:"footer__btns"},a.createElement("div",{className:"flex--1",onClick:()=>{h(),g()}},a.createElement("p",{className:(s?"caption":"body-regular")+" text-shade3"},"View cart")),a.createElement("div",{className:"flex--1 border-left",onClick:()=>d(!0)},a.createElement("p",{className:(s?"caption":"body-regular")+" text-shade3"},"View breakdown")))),n&&(s?a.createElement(V.$,{onClose:()=>d(!1)}):a.createElement(Z,{onCrossClick:()=>d(!1)})))};var O=o(99770);const j=({toggleModal:e,isMobile:t})=>a.createElement("svg",{onClick:e,width:t?"14":"20",height:t?"14":"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M18.9431 2.94277C19.4638 2.42207 19.4638 1.57785 18.9431 1.05715C18.4224 0.536451 17.5782 0.536451 17.0575 1.05715L10.0003 8.11434L2.94313 1.05715C2.42244 0.536451 1.57822 0.536451 1.05752 1.05715C0.536817 1.57785 0.536817 2.42207 1.05752 2.94277L8.11471 9.99996L1.05752 17.0572C0.536817 17.5779 0.536817 18.4221 1.05752 18.9428C1.57822 19.4635 2.42244 19.4635 2.94313 18.9428L10.0003 11.8856L17.0575 18.9428C17.5782 19.4635 18.4224 19.4635 18.9431 18.9428C19.4638 18.4221 19.4638 17.5779 18.9431 17.0572L11.8859 9.99996L18.9431 2.94277Z",fill:"#142236"})),z=(0,l.default)(O.animated.div)`
  width: 520px;
  height: 100%;
  position: fixed;
  margin-left: auto;
  right: 0;
  top: 0;
  padding-bottom: 40px;
  background: #ffffff;
  z-index: 999999;

  @media (max-width: 600px) {
    width: 240px;
  }
`,A=l.default.div`
  height: 100%;
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);

  z-index: 9999999999 !important;
`,q=l.default.div`
  width: 100%;
  padding: ${e=>e.theme.isMobile?"10px 12px":"24px"};
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${e=>e.theme.colors.tint2};
  align-items: center;

  .m--auto {
    margin: auto;
  }

  .cross--holder {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`,D=l.default.div`
  height: calc(100% - 45px);
`,U=({children:e})=>{const{isMobile:t}=(0,l.useTheme)(),{closeNudge:o}=N(),r=(0,i.CG)((e=>{var t,o,a;return null===(a=null===(o=null===(t=e.storeState)||void 0===t?void 0:t.store)||void 0===o?void 0:o.meta)||void 0===a?void 0:a.id})),[n,d]=(0,O.useSpring)((()=>({from:{transform:"translateX(100%)"},config:O.config.default})));return(0,a.useLayoutEffect)((()=>{d.start({to:{transform:"unset"}})}),[]),a.createElement(A,{onClick:e=>{e.stopPropagation(),v.dO.closeNudge(r)}},a.createElement(z,{style:n,onClick:e=>e.stopPropagation()},a.createElement(q,null,a.createElement("p",{className:"text-shade1 title2 flex--1"},"Cart"),a.createElement(j,{toggleModal:o,isMobile:t})),a.createElement(D,null,e)))},Q=({showFastCheckout:e,setFastCheckout:t})=>{var o,r;const s=c.fX.getInstance(),u=(0,i.CG)((e=>e.storeState.store)),g=(0,i.CG)((e=>e.cartState.uiCart)),C=(0,i.CG)((e=>e.customerState)),[b,E]=(0,a.useState)(!1),{init:w}=(0,n.j)(),{isMobile:y}=(0,l.useTheme)(),N=(0,d.i)(),[M,k]=(0,a.useState)(void 0);return(0,a.useEffect)((()=>{!b&&(null===u||void 0===u?void 0:u.meta)&&(null===u||void 0===u?void 0:u.meta.id)&&(E(!0),w().then((()=>{try{C.isLoggedIn&&x.i.fetchIdToken().then((e=>{s.fetchCustomer(u.meta.id,e).then().catch()}))}catch(e){}})).catch())}),[null===(o=null===u||void 0===u?void 0:u.meta)||void 0===o?void 0:o.id]),(0,a.useEffect)((()=>{var e;0===(null===(e=g.items)||void 0===e?void 0:e.length)&&v.dO.closeNudge(u.meta.id)}),[null===(r=g.items)||void 0===r?void 0:r.length]),(0,a.useEffect)((()=>{N.width&&(N.width<=p.G?k(!0):k(!1))}),[N.width]),a.createElement(a.Fragment,null,void 0!==M&&a.createElement(f,{className:"nudge"},a.createElement(U,null,b?a.createElement(a.Fragment,null,a.createElement("div",{className:"scroller"},a.createElement($,null),a.createElement("div",{className:""+(y?"":"promo-container")},a.createElement(h.Z,{fastCheckoutEnv:!0}))),a.createElement(P,{showFastCheckout:e,setFastCheckout:t})):a.createElement(a.Fragment,null,a.createElement(m.Z,{boxes:[{height:"48px",width:"100%"}]}),a.createElement(m.Z,{boxes:[{height:"48px",width:"100%"}]}),a.createElement(m.Z,{boxes:[{height:"48px",width:"100%"}]}),a.createElement(m.Z,{boxes:[{height:"48px",width:"100%"}]})))))};var R=({closeNudge:e,lastAddedProductDetail:t,redirectToCart:o,redirectToOrder:l,redirectToOrderStatusPage:n})=>{const[d,c]=(0,a.useState)(!1),m=(0,i.CG)((e=>{var t,o;return null===(o=null===(t=e.storeState.store)||void 0===t?void 0:t.meta)||void 0===o?void 0:o.id}));return a.createElement(r.zt,{store:i.ZP},a.createElement(u.Z,{themeName:"PRIME"},d?a.createElement(g.default,{redirectToOrderReceipt:l,redirectToOrderStatusPage:n,toggleFastCheckoutModal:()=>{s.C.addToLocal("showLCcomponent",JSON.stringify({showCartNudge:!0,id:m})),c(!1)}}):a.createElement(y.Provider,{value:{closeNudge:e,lastAddedProductDetail:t,redirectToCart:o}},a.createElement(Q,{showFastCheckout:d,setFastCheckout:c}))))}}}]);