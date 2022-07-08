(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6604],{16451:function(e,t,r){"use strict";r.d(t,{z:function(){return n}});var a=r(43324);class n{static sanitizePhoneNumber(e){return e.replace(/\W/g,"")}static validatePhoneNumber(e){var t;const r=a.ZP.getState().storeState.store;return"INR"!==(null===(t=null===r||void 0===r?void 0:r.meta)||void 0===t?void 0:t.currency)||/^([0]|\+91|91|\+91-|91-)?[123456789]\d{9}$/.test(e.trim())}}},53857:function(e,t,r){"use strict";r(67294);var a=r(53918),n=r(85893),i=a.default.div.withConfig({displayName:"LayoutWrapper__LayoutWrapperStyle",componentId:"sc-b8rzhv-0"})([".wrapper__content{min-height:100vh;overflow-x:inherit;}"]);t.Z=function(e){return(0,n.jsx)(i,{children:(e.SSR,(0,n.jsx)("div",{className:"wrapper__content",children:e.children}))})}},15893:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var a=r(67294),n=r(42809),i=r(40602),l=r(64532),s=r.n(l),o=r(25617),c=r(16451);const m=e=>{const[t,r]=(0,a.useState)([!0,!0,!0,!0,!0]);return a.createElement("div",{className:"component star__container"},a.createElement("div",{className:"star-inner d-flex"},t.map(((n,i)=>a.createElement("div",{onClick:()=>(a=>{console.log(a);const n=[];for(let e=0;e<t.length;e++)e<=a?n.push(!0):n.push(!1);r(n),e.clickHandler(a+1)})(i),key:i},!n&&a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},a.createElement("rect",{width:"40",height:"40",fill:"white"}),a.createElement("path",{d:"M20.4484 2.03827L25.1968 11.6597C25.4153 12.1024 25.8377 12.4092 26.3262 12.4802L36.9441 14.0231C37.3542 14.0827 37.5179 14.5867 37.2212 14.8759L29.538 22.3652C29.1845 22.7098 29.0232 23.2063 29.1066 23.6929L30.9204 34.2678C30.9904 34.6763 30.5617 34.9877 30.1949 34.7949L20.698 29.8021C20.261 29.5723 19.739 29.5723 19.302 29.8021L9.8051 34.7949C9.43828 34.9877 9.00957 34.6763 9.07962 34.2678L10.8934 23.6929C10.9768 23.2063 10.8155 22.7098 10.462 22.3652L2.77883 14.8759C2.48207 14.5867 2.64582 14.0827 3.05593 14.0231L13.6738 12.4802C14.1623 12.4092 14.5847 12.1024 14.8032 11.6597L19.5516 2.03827C19.735 1.66665 20.265 1.66665 20.4484 2.03827Z",fill:"#E6E6E6",stroke:"#D9D9D9"})),n&&a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},a.createElement("g",{clipPath:"url(#clip0_116_39)"},a.createElement("rect",{width:"40",height:"40",fill:"white"}),a.createElement("path",{d:"M21.4484 2.03827L26.1968 11.6597C26.4153 12.1024 26.8377 12.4092 27.3262 12.4802L37.9441 14.0231C38.3542 14.0827 38.5179 14.5867 38.2212 14.8759L30.538 22.3652C30.1845 22.7098 30.0232 23.2063 30.1066 23.6929L31.9204 34.2678C31.9904 34.6763 31.5617 34.9877 31.1949 34.7949L21.698 29.8021C21.261 29.5723 20.739 29.5723 20.302 29.8021L10.8051 34.7949C10.4383 34.9877 10.0096 34.6763 10.0796 34.2678L11.8934 23.6929C11.9768 23.2063 11.8155 22.7098 11.462 22.3652L3.77883 14.8759C3.48207 14.5867 3.64582 14.0827 4.05593 14.0231L14.6738 12.4802C15.1623 12.4092 15.5847 12.1024 15.8032 11.6597L20.5516 2.03827C20.735 1.66665 21.265 1.66665 21.4484 2.03827Z",fill:"#FFCE21",stroke:"#FFBA07"})),a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_116_39"},a.createElement("rect",{width:"40",height:"40",fill:"white"})))))))))};var u=r(93311);const d=()=>{const e=(0,o.v9)((e=>{var t;return null===(t=null===e||void 0===e?void 0:e.storeState.store)||void 0===t?void 0:t.meta})),t=(0,o.v9)((e=>e.contextState.storeUrlPrefix||"")),[r,l]=(0,a.useState)(!1),d=e=>{_((t=>Object.assign(Object.assign({},t),{value:e.target.value})))},[v,p]=(0,a.useState)({error:!1,type:"text",placeHolder:"Enter name",isRequired:!0,value:"",onChange:e=>{p((t=>Object.assign(Object.assign({},t),{value:e.target.value})))},name:"name",id:"name",subText:"Name is required"}),[h,w]=(0,a.useState)({error:!1,type:"tel",placeHolder:"Enter your phone number",isRequired:!0,value:"",onChange:e=>{w((t=>Object.assign(Object.assign({},t),{value:e.target.value})))},name:"Phone",subText:"Phone number is required"}),[g,_]=(0,a.useState)({header:"Enter your review",error:!1,isRequired:!1,value:"",onChange:d,name:"review",id:"review"}),[E,b]=(0,a.useState)(5),f=async()=>{if(h.error=!c.z.validatePhoneNumber(h.value),h.error&&(h.subText=h.value?"Invalid Phone number":"Phone number is required"),p(Object.assign(Object.assign({},v),{error:!v.value})),_(Object.assign(Object.assign({},g),{error:!g.value})),w(Object.assign({},h)),h.error||v.error||g.error)return;const r=u.q.functions.CLOUD_FUNCTION_URL+"/saveCustomerReview",a={storeId:e.id,name:v.value,phoneNumber:h.value,review:g.value,rating:E};l(!0);200===(await s().post(r,JSON.stringify(a),{headers:{"content-type":"application/json"},responseType:"text"})).status?window.location.replace(`/${t}`):l(!1)};return a.createElement("div",{className:"component customer-review customer-review__container"},a.createElement("div",{className:"customer-review__inner container"},a.createElement("h2",null,"Submit Your Review"),a.createElement("form",{onSubmit:e=>{e.preventDefault(),f()}},a.createElement("div",{className:"form__row"},a.createElement(m,{clickHandler:b,currentStars:E})),a.createElement("div",{className:"form__row"},a.createElement(n.Gj,{name:v.name,value:v.value,onChange:v.onChange,type:v.type,error:v.error,subText:v.error?v.subText:"",id:v.id,placeHolder:v.placeHolder,isRequired:v.isRequired})),a.createElement("div",{className:"form__row"},a.createElement(n.Gj,{type:h.type,onChange:h.onChange,value:h.value,id:h.id,name:h.name,error:h.error,subText:h.error?h.subText:"",placeHolder:h.placeHolder,isRequired:h.isRequired})),a.createElement("div",{className:"form__row"},a.createElement(i.Z,{header:g.header,onChange:d,value:g.value,name:"feedback",placeHolder:g.placeHolder,id:g.id,isRequired:g.isRequired})),a.createElement("div",{className:"form__row"},a.createElement("button",{type:"submit",className:"btn btn-solid btn-danger form__submit"},"Submit"))),r&&a.createElement(n.u_,null,a.createElement("div",{className:"container modal__wrapper"},a.createElement("div",{className:"modal center-contents-vertical"},a.createElement("div",{className:"modal-content m-auto"},a.createElement("div",{className:"modal-header global theme1 color2 text-white"},a.createElement("h4",{className:"montserrat "},"Review Submitted")),a.createElement("div",{className:"modal-body global theme1 montserrat d-flex"},a.createElement("div",{className:"row m-auto"},a.createElement("div",{className:"col-12 p-2 montserrat text-center text-white bg-success"},"Review Submitted. Taking you to home page."),a.createElement("div",{className:"loading-center m-auto d-flex pt-4"},a.createElement("div",{className:"col-sm-12 d-flex"},a.createElement("div",{className:"error-section m-auto"},a.createElement("h2",{className:"spinner-border"},a.createElement("span",{className:"sr-only"},"Loading...")))))))))))))};const v=r(53918).default.div`
  .component.customer-review {
    &__container {
    }

    .customer-review {
      &__inner {
        padding: 60px 0 60px;
        max-width: 500px;

        .form {
          &__row {
            margin-bottom: 10px;

            label {
              display: block;
            }

            input {
              height: 40px;
              z-index: auto;
            }
          }

          &__submit {
            padding: 13px 29px;
          }
        }
      }

      .modal {
        &__wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .modal-content{
    width: 640px !important;
  }
`;var p=r(53857),h=r(85893),w=function(){return(0,h.jsx)(p.Z,{children:(0,h.jsx)(v,{children:(0,h.jsx)(d,{})})})}},68898:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[username]/customer/feedback",function(){return r(15893)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=68898,e(e.s=t);var t}));var t=e.O();_N_E=t}]);