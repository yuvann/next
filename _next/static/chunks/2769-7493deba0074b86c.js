"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2769],{55506:function(e,t,a){a.d(t,{V:function(){return i}});var r=a(47984),n=a(93311);class i{static async generateReferralCode(e,t,a,n){const o=i.CLOUD_FUNCTION_URL+"/referralsApiFunctions-generateReferralCode";try{return await r.sM.sendData({apiPath:o,requestHeader:i.headers,apiMethod:r.s1.POST,requestBody:{storeId:e,storeName:n,referrerId:t,referrerName:a}})}catch(l){return console.error(l),{}}}static async getReferralDetails(e){const t=i.CLOUD_FUNCTION_URL+"/referralsApiFunctions-getReferralDetails";try{return(await r.sM.sendData({apiPath:t,requestHeader:i.headers,apiMethod:r.s1.POST,requestBody:{referralCode:e}})).data}catch(a){return console.error(a),{}}}static async getReferralCode(e,t){const a=i.CLOUD_FUNCTION_URL+"/referralsApiFunctions-getReferralCode";try{return(await r.sM.sendData({apiPath:a,apiMethod:r.s1.POST,requestHeader:i.headers,requestBody:{storeId:e,customerId:t}})).data}catch(n){return console.error(n),{}}}static async getReferralSettings(e){const t=i.CLOUD_FUNCTION_URL+"/referralsApiFunctions-getReferralSettings";try{return(await r.sM.sendData({apiPath:t,requestHeader:i.headers,apiMethod:r.s1.POST,requestBody:{storeId:e}})).data}catch(a){return console.error(a),{}}}static async getReffererUsageDetails(e,t){const a=i.CLOUD_FUNCTION_URL+"/referralsApiFunctions-getReferrerUsageDetails";try{return(await r.sM.sendData({apiPath:a,apiMethod:r.s1.POST,requestHeader:i.headers,requestBody:{storeId:e,customerId:t}})).data}catch(n){return console.error(n),{}}}}i.CLOUD_FUNCTION_URL=n.q.functions.FASITY_FUNCTION,i.headers={"Content-Type":"application/json"}},1574:function(e,t,a){a.d(t,{O:function(){return l}});var r=a(64532),n=a.n(r),i=a(84386),o=a(93311);class l{constructor(){}async fetchReview(e){const t=o.q.functions.FASITY_FUNCTION+"/reviewsApiFunctions-getReviews",a=await n().post(t,e),{reviews:r}=a.data;return r?r.map((e=>{const t=new i.C;return t.load(e),t})):null}async addReview(e){const t=o.q.functions.FASITY_FUNCTION+"/reviewsApiFunctions-addReview";return await n().post(t,e)}async upadateReview(e){const t=o.q.functions.FASITY_FUNCTION+"/reviewsApiFunctions-updateReview";return await n().post(t,e)}}},84386:function(e,t,a){a.d(t,{C:function(){return r}});class r{constructor(){this.isEditable=!1,this.token="",this.hidden=!1,this.imagesUrl=[]}load(e){this.storeId=e.storeId,this.catalogId=e.catalogId,this.productId=e.productId,this.userId=e.userId,this.review=e.review,this.date=e.date,this.rating=e.rating,this.imagesUrl=e.imagesUrl,this.isActive=e.isActive,this.customerName=e.customerName,this.orderId=e.orderId,this.token=e.token,this.hidden=e.hidden,this.timestamp=e.timestamp,this.address=e.address}}},41210:function(e,t,a){a.d(t,{y$:function(){return i},B4:function(){return o},Tu:function(){return l},S5:function(){return s},$q:function(){return d},O7:function(){return c},AJ:function(){return m},m8:function(){return p},n1:function(){return u},i7:function(){return g},YS:function(){return h},X2:function(){return x},sg:function(){return v},CJ:function(){return b},bk:function(){return f},nM:function(){return w},zv:function(){return _},y:function(){return E},kl:function(){return y}});var r=a(53918),n=a(42809);r.default.p.attrs({className:"title4 title4-mobile"})``;const i=r.default.p.attrs({className:"title3 title3-mobile"})``,o=r.default.p.attrs({className:"body-small body-small-mobile"})`
  color: ${e=>e.color};
`,l=r.default.p.attrs({className:"caption caption-mobile"})`
  color: ${e=>e.theme.colors.shade3};
  margin-top: 5px !important;
  margin-bottom: 5px !important;
`,s=(0,r.default)(n.qz)`
  width: 90%;
  margin: 10px;
  padding: 10px;
`,d=r.default.p.attrs({className:"button-small"})`
  margin-bottom: 0px !important;
`,c=(r.default.div`
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
`),m=r.default.div`
  background: ${e=>e.isAvailable?e.isSelected?e.theme.colors.brandMain:e.theme.colors.tint1:(e.isSelected,e.theme.colors.tint2)};
  color: ${e=>e.isAvailable?e.isSelected?e.theme.colors.tint3:e.theme.colors.shade1:(e.isSelected,e.theme.colors.tint2)};
  border: 1px solid #d6dbe2;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  padding: 9px;
  min-width: 40px;
`,p=(0,r.default)(i)`
  margin-bottom: 7px !important;
  margin-top: 7px !important;
`,u=r.default.div`
  background: border-box;
  padding: 2px;
  border: 2px solid
    ${e=>e.isSelected?"rgb(0, 0, 0)":"transparent"};
  border-radius: 8px;
`,g=r.default.div`
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  padding: 9px;
  min-width: 41px;
  min-height: 38px;
  background: ${e=>e.color};
`,h=(r.default.div`
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
`),x=(r.default.span.attrs({className:"body-regular body-regular-mobile"})`
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
`),v=r.default.div`
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
`,b=r.default.div`
  margin: 5px 10px 10px 0px !important;
`,f=r.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0px !important;
`,w=r.default.div`
  display: flex;
  justify-content: center;
`,_=r.default.div`
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
`),y=r.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-left: 16px;
`},69055:function(e,t,a){a.d(t,{J:function(){return n}});var r=a(67294);const n=e=>r.createElement("svg",{onClick:()=>e.toggleModal(!1),width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",fill:"#142236"}))},15282:function(e,t,a){a.d(t,{p:function(){return s}});var r=a(64532),n=a.n(r),i=a(47984),o=a(52923),l=a(93311);class s{constructor(){this.http=n()}static getInstance(){return this.instance||(this.instance=new s),this.instance}async getOrderDetails(e){const t={"Content-Type":"text/plain"},a=`${l.q.functions.FASITY_FUNCTION}/ordersApiFunctions-getSingleOrder`,r=o.j.encrypt(JSON.stringify({orderId:e}));try{const e=await i.sM.sendData({apiPath:a,requestBody:r,requestHeader:t});if(e.data)return JSON.parse(o.j.decrypt(e.data))}catch(n){console.log("failing because ",n)}return{}}async cancelOrder(e,t,a){const r={"Content-Type":"text/plain"},n=`${l.q.functions.CLOUD_FUNCTION_URL_INDIA}/ordersApiFunctions-cancelOrder`,s=o.j.encrypt(JSON.stringify({orderId:e,cancellationReason:t,cancellationComment:a}));try{const e=await i.sM.sendData({apiPath:n,requestBody:s,requestHeader:r});if(e.data)return JSON.parse(o.j.decrypt(e.data))}catch(d){console.log("failing because ",d)}return{}}async returnOrder(e,t){const a={"Content-Type":"text/plain"},r=`${l.q.functions.CLOUD_FUNCTION_URL_INDIA}/ordersApiFunctions-returnOrder`,n=o.j.encrypt(JSON.stringify({orderId:e,returnRequests:t}));try{const e=await i.sM.sendData({apiPath:r,requestBody:n,requestHeader:a});if(e.data)return JSON.parse(o.j.decrypt(e.data))}catch(s){console.log("failing because ",s)}return{}}}},70307:function(e,t,a){a.d(t,{M:function(){return l},m:function(){return s}});var r=a(34284),n=a(14857),i=a(41399),o=a(82175);class l{constructor(){this.observer=new o.X(0)}static fromBase64(e){const t=new l;return t.base64String=e,t}}class s{constructor(){this.saveFile=async e=>{const t=(0,i.cF)((0,n.Mq)()),a=`dynamic-form/${r.Z()}`,o=(0,i.iH)(t,a);return await(0,i.KV)(o,e),await(0,i.Jt)(o)}}async uploadImage(e,t){try{let a;a=e.uuid?e.uuid:r.Z();const o=`${t}/${a}`,l=(0,i.cF)((0,n.Mq)()),s=(0,i.iH)(l,o);await(0,i.sf)(s,e.base64String.split(",")[1],"base64"),e.urlToSave=await(0,i.Jt)(s),e.uuid=a}catch(a){e.error=!0}}}},53857:function(e,t,a){a(67294);var r=a(53918),n=a(85893),i=r.default.div.withConfig({displayName:"LayoutWrapper__LayoutWrapperStyle",componentId:"sc-b8rzhv-0"})([".wrapper__content{min-height:100vh;overflow-x:inherit;}"]);t.Z=function(e){return(0,n.jsx)(i,{children:(e.SSR,(0,n.jsx)("div",{className:"wrapper__content",children:e.children}))})}},33527:function(e,t,a){a.d(t,{Z:function(){return dt}});var r=a(67294),n=a(77646),i=a(53918),o=a(42809);const l=(0,i.default)(o.qz)`
  background: ${e=>e.theme.colors.tint3};
  border: 1px solid ${e=>e.theme.colors.shade2};
  color: ${e=>e.textColor?e.textColor:e.theme.colors.shade2};
  margin: 8px 0;
`,s=(0,i.default)(o.qz)`
  background-color: ${e=>e.theme.colors.whatsApp};
  border-color: ${e=>e.theme.colors.whatsApp};
  margin: 8px 0;
`,d=(0,i.default)(o.qz)`
  background-color: ${e=>e.theme.colors.whatsApp};
  border-color: ${e=>e.theme.colors.whatsApp};
  margin: 8px 0 0;
`,c=(0,i.default)(o.qz)`
  background-color: ${e=>e.theme.colors.brandMain};
  border-color: ${e=>e.theme.colors.brandMain};
  margin: 8px 0;
`,m=i.default.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  font-family: 'Inter', sans-serif;

  .margin-t2 {
    margin-top: 2px;
  }

  .margin-t4 {
    margin-top: 4px;
  }

  .margin-t8 {
    margin-top: 8px;
  }

  .margin-t16 {
    margin-top: 16px;
  }

  .margin-l16 {
    margin-left: 16px;
  }

  .margin-t64 {
    margin-top: 64px;
    @media(max-width: 768px){
      margin-top: unset;
    }
  }

  .divider--wrapper {
    padding-top: 26px;
    padding-bottom: -10px;
  }

  .divider-button {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid ${e=>e.theme.colors.tint1};
    line-height: 0.1em;
    margin: 10px 0 20px;
  }

  .divider-button > span {
    background:#fff;
    padding:0 10px;
    color: ${e=>e.theme.colors.tint1};
    font-size: 12px;
    font-weight: 700;
  }

  .container {
    padding: 56px 0 44px 0;
    display: flex;
  }

  .cancel-bar {
    width: 100%;
    padding: 10px 16px;

    &.confirm {
      background: ${e=>e.theme.colors.error};
        color: #FFFFFF;
    }

    &.pending {
      background: ${e=>e.theme.colors.warning};
        color: ${e=>e.theme.colors.shade1};
    }

    &__message {
      ${e=>e.theme.fonts.bodySmall};

      @media screen and (max-width: 766px) {
        ${e=>e.theme.fonts.bodyRegularBoldMobile};
      }
    }
  }

  .container-no-login {
    padding-top: unset !important;
  }

  .summary-login {
    ${e=>e.theme.fonts.bodyRegular};

    @media(max-width: 768px) {
      ${e=>e.theme.fonts.title7} !important;
      color: ${e=>e.theme.colors.shade1};
    }
  }

  .browse {
    ${e=>e.theme.fonts.bodyRegular};
    @media(max-width: 768px) {
      ${e=>e.theme.fonts.title7} !important;
      color: ${e=>e.theme.colors.shade1};
    }
  }

  .left-wrapper-no-login {
    @media(max-width: 768px) {
      padding: 0px 16px 8px !important;
    }
  }
  .left-wrapper {
    padding: 0 0 0 24px;

    .cancel-pending-notifier {
      border-radius: 4px;
      margin: 0 auto 16px;
      border: 1px solid ${e=>e.theme.colors.warning};
      border-left: 16px solid ${e=>e.theme.colors.warning};
      display: flex;

      @media(max-width: 768px) {
        margin: -8px auto 16px;
        border-left: 8px solid ${e=>e.theme.colors.warning};
      }

      &__container {
        padding: 16px;

        &__notice {
          ${e=>e.theme.fonts.bodyRegular};
          color: ${e=>e.theme.colors.shade2};

          @media(max-width: 768px) {
            ${e=>e.theme.fonts.bodyRegularMobile};
          }
        }
      }

      .btn-container {
        display: flex;
        align-items: center;
        white-space: nowrap;

        &__icon {
          svg {
            height: 16px;
            width: 16px;
          }
        }
      }
    }

    .header {
      background: ${e=>e.theme.colors.tint2};
      border-radius: 4px;
      padding: 16px;

      &__refund-detail {
        width: 100%;
        margin-top: 8px;
        background: rgba(255, 255, 255, 0.5);
       
        border: 1px solid ${e=>e.theme.colors.tint1};
        border-radius: 4px; 
        padding: 16px;

        &__text {
          ${e=>e.theme.fonts.bodyRegular};
          color: ${e=>e.theme.colors.shade2};

          @media (max-width: 768px) {
            ${e=>e.theme.fonts.captionMobile};
          }
        }
      }

      &__cancelledOrder {
        background: #FFFFFF;
        border: 1px solid ${e=>e.theme.colors.tint1};

        &__refund-policy {
          @media (min-width: 768px) {
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 0px;
          }
        }
      }

      &__details {
        padding: 8px;
        display: flex;

        &--grayscale {
          color: ${e=>e.theme.colors.shade2};
        }

        ${l} {
          background: ${e=>e.theme.colors.tint2};
          margin: 0;
          padding: 8px 12px;
        }
      }

      &__cancelOrder {
        ${e=>e.theme.fonts.bodyRegularMobile};
        border: 1px solid ${e=>e.theme.colors.tint1};
        background: ${e=>e.theme.colors.tint2};
        padding: 16px;
        border-radius: 4px;
        margin-top: 16px;
        color: ${e=>e.theme.colors.shade2};

        &__refund-policy {
          span {
            cursor: pointer;
          }

          color: ${e=>e.theme.colors.shade2};
          padding: 16px;
          ${e=>e.theme.fonts.title4};
          border: 1px solid ${e=>e.theme.colors.tint1};
          border-top: 0px solid ${e=>e.theme.colors.tint1};
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
          text-align: right;

          @media(max-width: 768px){
            ${e=>e.theme.fonts.captionBoldMobile};
            border: 0px solid ${e=>e.theme.colors.tint1};
            border-radius: 0px;
            border-bottom: 1px solid ${e=>e.theme.colors.tint1};
          }
        }
      }

      &__status {
        border: 1px solid ${e=>e.theme.colors.tint1};
        border-radius: 4px;
        color: ${e=>e.theme.colors.shade1};
        background: ${e=>e.theme.colors.tint3};
        margin-top: 16px;

        &--bar {
          background: #F5F7F9;

          .status-info {
            padding: 32px 24px 24px 32px;
            display: flex;
            width: 100%;
            border-bottom: 1px solid ${e=>e.theme.colors.tint1};
            cursor: pointer;
          }

          .progressbar {
            padding: 20px 40px;
            flex-grow: 1;
          }

          .early-updates {
            padding: 12px 32px;
            color: ${e=>e.theme.colors.shade2};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
            cursor: pointer;
          }

          .detailed {
            height: auto !important;
          }

          .collapsed {
            max-height: 360px;
            overflow: hidden;
          }
        }

        &--details {
          padding: 0 24px 0 32px;
          margin-top: 16px;

          .info {
            margin: 2px 8px;
            color: var(--cta-color);
          }
        }

        &--wrapper {
          display: flex;
        }

        ${s} {
          background: var(--cta-color);
          margin: 24px;
          padding: 8px 12px;
        }

      }
    }

    .details {
      padding: 24px 8px;
      color: ${e=>e.theme.colors.shade1};

      &__subtotal {
        margin-top: 24px;
        color: ${e=>e.theme.colors.shade2};
        font-weight: 400;
        border: 1px solid ${e=>e.theme.colors.tint1};
        border-radius: 4px;

        &--total {
          color: ${e=>e.theme.colors.shade1};
          display: flex;
          font-weight: 600;
          background: rgba(236, 240, 244, 0.5);
          padding: 8px 24px 8px 16px;
        }

        &--wrapper {
          padding: 8px 24px 8px 16px;
        }

        .caption {
          color: ${e=>e.theme.colors.shade2} !important;
        }
      }
    }
  }

  .right-wrapper {
    padding: 0 0 0 54px;

    .details {
      border: 1px solid ${e=>e.theme.colors.tint1};
      border-radius: 4px;
      padding: 16px;
      color: ${e=>e.theme.colors.shade2};

      &--bold {
        font-weight: 700;
        color: ${e=>e.theme.colors.shade1};
      }
    }

    .checkout {
      word-break: break-all;
    }

    .title4 {
      color: ${e=>e.theme.colors.shade1} !important;
    }
  }

  .footer {
    margin: 8px 0;
    font-weight: 600;
    display: flex;
    flex-direction: column;

    .success {
      color: ${e=>e.theme.colors.success};
      font-size: 14px;
      line-height: 16px;
    }

    &__outline {
      display: contents;
    }

    &__outline {
      ${l} {
        border: none;
      }
    }
  }

  @media screen and (min-width: 767px) {
    .bold-desk {
      font-weight: 600;
    }

    .left-wrapper {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }

    .right-wrapper {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }

    .header__status {
      &--border {
        border-left: 2px solid ${e=>e.theme.colors.tint1};
      }

      &--details {
        margin-bottom: 24px;
      }

    }

    .row-gap {
      margin-top: 16px;
    }

    .checkout {
      margin-top: 12px !important;
    }

    .footer {
      &__outline {
        ${l} {
          border: none;
        }
      }
    }
  }

  @media screen and (max-width: 766px) {
    .bold-mob {
      font-weight: 600;
    }

    .container {
      flex-direction: column !important;
      padding: 0 !important;
      margin-top: 8px !important;
    }

    .left-wrapper {
      padding: 16px 8px 8px 8px;
    }

    .right-wrapper {
      padding: 24px 24px !important;

      .details {
        padding: 0 !important;
        border: none !important;
        color: ${e=>e.theme.colors.shade3};

        &--bold {
          font-size: 14px !important;
          line-height: 16px !important;
        }
      }

      .row-gap {
        margin-top: 24px !important;
      }

      .checkout {
        margin-top: 8px !important;
      }
    }

    .header {
      &__details {
        padding: 0 !important;
      }

      &__status {

        &--bar {
          .status-info {
            padding: 16px !important;
          }

          .early-updates {
            padding: 12px 16px !important;
          }

          .progressbar {
            padding: 4px 16px !important;
          }

          .collapsed {
            max-height: 304px !important;
          }
        }

        &--wrapper {
          display: block !important;
        }

        &--details {
          padding: 0 !important;
          margin: 16px 0 16px 16px !important;
        }

        ${s} {
          margin: 16px !important;
        }
      }
    }

    .details {
      padding: 24px 0 0 !important;

      &__subtotal {
        color: ${e=>e.theme.colors.shade1} !important;
        border: none !important;
        margin-top: 16px !important;

        .caption {
          color: ${e=>e.theme.colors.shade2} !important;
        }

        .row-gap {
          margin-top: 8px;
        }

        &--total {
          background: ${e=>e.theme.colors.tint3} !important;
          border-top: 1px solid ${e=>e.theme.colors.tint1};
          margin: 0 16px !important;
          padding: 8px 0 !important;
        }

        &--wrapper {
          padding: 8px 16px !important;
        }
      }
    }


    .footer {
      margin: 32px 0 -24px 0 !important;
    }
  }

  .btn {
    line-height: 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    border-radius: 0;
    transition: .3s ease-in-out;

    &:hover {
      transition: .3s ease-in-out;
    }

    &:focus {
      box-shadow: none;
    }
  }

  .banner {
    margin-top: 24px;
    background: linear-gradient(0deg, #71C3CE, #71C3CE), #FFFFFF;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    gap: 34px;
    padding: 24px;
    @media(max-width: 768px){
      flex-direction: column-reverse;
    }

    &__left {
      flex: 1;
      &__title {
        padding-top: 34px;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;
        @media(max-width: 768px){
          padding-top: 20px;
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
        }
      }

      &__button {
        background: #FFFFFF;
        margin-top: 24px;
        border-radius: 4px;
        text-align: center;
        padding: 8px 12px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #8340AD;
        cursor: pointer;
      }
    }

    &__right{
      flex: 1;
    }
  }
  .banner__wrapper {
    padding: 16px 8px 8px 8px;
  }
`,p=i.default.div`
  .btn-solid {
    padding: 13px 29px;
    color: ${e=>e.theme.colors.tint3};
    letter-spacing: 0.05em;
    border: 2px solid var(--cta-color);
    background-image: -webkit-linear-gradient(30deg, var(--cta-color) 50%, transparent 50%);
    background-image: linear-gradient(30deg, var(--cta-color) 50%, transparent 50%);
    background-size: 540px;
    background-repeat: no-repeat;
    background-position: 0;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 300ms ease-in-out;

    &:hover {
      background-position: 100%;
      color: ${e=>e.theme.colors.shade1} !important;
      background-color: ${e=>e.theme.colors.tint3};
    }

    &:focus {
      color: ${e=>e.theme.colors.shade1};
    }

}`;class u{constructor(){this.cancellable=!1,this.receiptAvailable=!0}load(e,t){this.id=t,this.order=new n.Order,this.order.load(e),this.cancellable="ORDERED"===this.order.status||"IN PROGRESS"===this.order.status,this.summary=this.generateSummary(this.order.items)}loadOrder(e){this.id=e.id,this.order=e,this.cancellable="ORDERED"===this.order.status||"IN PROGRESS"===this.order.status,this.summary=this.generateSummary(this.order.items)}generateSummary(e){const t=e.map((e=>e.name));return t.length<=2?t.join(", "):t.slice(0,2).join(", ")+" and "+(t.length-2)+" more..."}}const g=(e,t=2)=>(Math.round(100*e)/100).toFixed(t),h=i.default.div`
  .stepper-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .stepper-item {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    min-height: 48px;
  }

  .step-name {
    text-align: center;
    text-transform: capitalize;
    color: ${e=>e.theme.colors.shade1};

    &__cancelled-msg {
      ${e=>e.theme.fonts.title4Mobile};    
    }

    &__initial {
      ${e=>e.theme.fonts.bodyRegularMobile};  
    }
  }

  .stepper-item::before {
    position: absolute;
    content: "";
    z-index: 2;
    border-right: 2px solid ${e=>e.theme.colors.tint1};
    height: 100%;
    left: 12px;
    top: -50%;
  }

  .stepper-item::after {
    position: absolute;
    content: "";
    z-index: 2;
    border-right: 2px solid ${e=>e.theme.colors.tint1};
    height: 100%;
    left: 12px;
    top: 50%;
  }

  .stepper-item .step-counter {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${e=>e.theme.colors.tint1};
    margin-right: 16px;

    &.white-background {
      border: 1px solid ${e=>e.theme.colors.tint1};
      background: #FFFFFF;
    }
  }

  .step-counter {
    font-weight: 700 !important;
  }

  .stepper-item.active .step-counter {
    background-color: ${e=>e.theme.colors.tint3};
    color: ${e=>e.theme.colors.success};
    border: 1px solid ${e=>e.theme.colors.success};
  }

  .stepper-item.completed .step-counter {
    background-color: ${e=>e.theme.colors.success};
    color: ${e=>e.theme.colors.tint3};
  }

  .stepper-item.completed::after {
    position: absolute;
    content: "";
    z-index: 3;
    border-right: 2px solid ${e=>e.theme.colors.success};
    height: 100%;
    left: 12px;
    top: 50%;
  }

  .stepper-container:first-child {
    .stepper-item::before {
      content: none;
    }
  }

  .stepper-container:last-child {
    .stepper-item::after {
      content: none;
    }
  }

  .active {
    .step-name {
      font-weight: bold !important;
      color: ${e=>e.theme.colors.shade1};
    }
  }

  .shipped {
    .stepper-item::after {
      border-right: 2px solid ${e=>e.theme.colors.success};
      z-index: 3;
    }
  }

  .checkpoint-wrapper {
    padding: 4px 0;

    .stepper-item {
      align-items: flex-start;
    }

    .stepper-item.completed::after {
      top: 4px;
    }

    .step-name {
      text-align: left !important;
      white-space: break-spaces;
      color: ${e=>e.theme.colors.shade2};
      padding-bottom: 24px;
    }

    .step-counter {
      width: 12px !important;
      height: 12px !important;
      min-width: 12px;
      margin: 4px 22px 0 7px !important;
    }

    .stepper-item:last-child::after {
      border-right: 2px solid ${e=>e.theme.colors.tint1};
      z-index: 3;
    }

    .stepper-item:last-child {
      .step-name {
        padding-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 766px) {

  }


`,x=["PENDING","IN PROGRESS","SHIPPED","DELIVERED"];class v{getMessageFromCheckPoints(e){const t=[];return null===e||void 0===e||e.forEach((e=>{const a=e.message+" from "+e.location+"\n"+e.created_at;t.push(a)})),[!!e,t]}setProgressSteps(e){const t=x.indexOf(e);if(-1===t){let t,a=[...x];if("RETURNED"===e&&a.push(e),"CANCELLED"===e){const e=x.indexOf("IN PROGRESS")+1,t=x.slice(0,e);t.push("CANCELLED"),a=[...t]}return t=a.indexOf(e),[t,a]}return[t,x]}}const b=()=>r.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{cx:"16",cy:"16",r:"16",fill:"#C83939"}),r.createElement("path",{d:"M20.4711 12.4713C20.7314 12.211 20.7314 11.7889 20.4711 11.5285C20.2107 11.2682 19.7886 11.2682 19.5283 11.5285L15.9997 15.0571L12.4711 11.5285C12.2107 11.2682 11.7886 11.2682 11.5283 11.5285C11.2679 11.7889 11.2679 12.211 11.5283 12.4713L15.0569 15.9999L11.5283 19.5285C11.2679 19.7889 11.2679 20.211 11.5283 20.4713C11.7886 20.7317 12.2107 20.7317 12.4711 20.4713L15.9997 16.9427L19.5283 20.4713C19.7886 20.7317 20.2107 20.7317 20.4711 20.4713C20.7314 20.211 20.7314 19.7889 20.4711 19.5285L16.9425 15.9999L20.4711 12.4713Z",fill:"white"}));var f=a(54549);const w=()=>r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{cx:"12",cy:"12",r:"12",fill:"#C83939"}),r.createElement("path",{d:"M16.4716 8.47132C16.7319 8.21097 16.7319 7.78886 16.4716 7.52851C16.2112 7.26816 15.7891 7.26816 15.5288 7.52851L12.0002 11.0571L8.47157 7.52851C8.21122 7.26816 7.78911 7.26816 7.52876 7.52851C7.26841 7.78886 7.26841 8.21097 7.52876 8.47132L11.0574 11.9999L7.52876 15.5285C7.26841 15.7889 7.26841 16.211 7.52876 16.4713C7.78911 16.7317 8.21122 16.7317 8.47157 16.4713L12.0002 12.9427L15.5288 16.4713C15.7891 16.7317 16.2112 16.7317 16.4716 16.4713C16.7319 16.211 16.7319 15.7889 16.4716 15.5285L12.943 11.9999L16.4716 8.47132Z",fill:"white"}));var _=e=>{const t=new v,[a,n]=t.getMessageFromCheckPoints(e.checkPoints),[i,o]=t.setProgressSteps(e.stage),l=f.iP;return r.createElement(h,null,r.createElement("div",{className:"stepper-wrapper"},e.showCancelledProgressBar?r.createElement(r.Fragment,null,r.createElement("div",{className:"stepper-container"},r.createElement("div",{className:"stepper-item",key:0},r.createElement("div",{className:"step-counter white-background caption-small"},"1"),r.createElement("div",{className:"step-name step-name__initial"},`Order placed on ${e.orderPlacedDate||"-"}`))),r.createElement("div",{className:"stepper-container"},r.createElement("div",{className:"stepper-item completed",key:1},r.createElement("div",{className:"step-counter caption-small"},l?r.createElement(w,null):r.createElement(b,null)),r.createElement("div",{className:"step-name step-name__cancelled-msg"},`Cancelled on ${e.cancellationPlacedDate||"-"}`)))):o.map(((e,t)=>r.createElement("div",{className:"stepper-container"+("SHIPPED"===e&&a?" shipped ":" ")},r.createElement("div",{className:"stepper-item"+(i>t?" completed ":" ")+(i===t?" active ":" "),key:t},r.createElement("div",{className:"step-counter caption-small"},t+1),r.createElement("div",{className:"step-name body-regular body-regular-mobile"},e.toLowerCase())),"SHIPPED"===e&&a&&r.createElement("div",{className:"stepper-wrapper checkpoint-wrapper"},n.map(((e,t)=>r.createElement("div",{className:"stepper-item completed",key:t},r.createElement("div",{className:"step-counter"}),r.createElement("div",{className:"step-name body-small caption-mobile"},e))))))))))};const E=i.default.div`

.margin-unset {
  margin: unset !important;
}
.no-d-flex {
  margin-top: 4px;
}

.return-orders {
  @media (max-width: 768px) {
    white-space: nowrap;
    padding: 20px;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 16%);
    border-radius: 4px;
    text-align: left;
    ${e=>e.theme.fonts.bodyRegular};
    color: ${e=>e.theme.colors.textPrimary};
  }
}
  .option {
    width: 24px;
    height: 24px;
  }

  .item {
    margin-top: 16px;
    border-radius: 4px;
    border: 1px solid ${e=>e.theme.colors.tint2};
    display: flex;
    flex-direction: column;
    font-weight: 400;

    &.success-border {
      border: 1px solid ${e=>e.theme.colors.success};
    }

    &.error-border {
      border: 1px solid ${e=>e.theme.colors.warning};
    }

    &__return-notify {
      padding: 8px 16px;
      border-top: 1px solid ${e=>e.theme.colors.tint1};

      &__pending-req {
        ${e=>e.theme.fonts.captionBold};        
        color: ${e=>e.theme.colors.shade3};

        @media(max-width: 768px) {
          text-align: center;
          padding: 8px 16px;
          ${e=>e.theme.fonts.buttonSmallMobile};      
        }
      }
      &__div {
        width: 100%;
        padding: 16px;
        display: flex;
        
        background: ${e=>e.theme.colors.tint2};
        border: 1px solid ${e=>e.theme.colors.tint1};
        border-radius: 4px;

        &__text {
          display: inline-block;
          margin-left: 8px;
          ${e=>e.theme.fonts.bodyRegular};
          color: ${e=>e.theme.colors.shade1};

          @media (max-width: 768px) {
            ${e=>e.theme.fonts.bodyRegularMobile};
          }
        }

        &__subtext {
          margin-top: 4px;
          margin-left: 8px;
          color: ${e=>e.theme.colors.shade2};
          ${e=>e.theme.fonts.caption};

          @media (max-width: 768px) {
            ${e=>e.theme.fonts.captionMobile};
          }
        }
      }
    }

    &__details {
      display: flex;
      padding: 16px;

      .shade-2 {
        color: ${e=>e.theme.colors.shade2};
      }

      &--img-container {
        width: 58px;
        height: 58px;
        border-radius: 4px;
        border: 1px solid ${e=>e.theme.colors.tint2};
        display: flex;

        img {
          max-width: 56px;
          max-height: 56px;
          overflow: hidden;
          margin: auto;
        }
      }

      &--variants {
        display: flex;
        margin: 8px 0;
        color: ${e=>e.theme.colors.shade3};

        .color-variant {
          width: 16px;
          height: 16px;
          border-radius: 1px;
          align-self: center;
          margin-right: 4px;
        }

        .type-variant {
          align-self: center;
          margin-right: 4px;
        }
      }

      &--wrapper {
        display: flex;
        color: ${e=>e.theme.colors.shade1};
      }

    }

    &__rating {
      background: rgba(236, 240, 244, 0.5);
      padding: 8px 16px;
      display: flex;

      &--title {
        align-self: center;
        margin-right: 28px;
        color: ${e=>e.theme.colors.shade2};
      }
    }

    &__reviewed {
      font-weight: 700;
      background: rgba(236, 240, 244, 0.5);
      padding: 8px 16px;

      .options {
        display: flex;

        .edit {
          font-weight: bold;
          font-size: 14px;
          line-height: 20px;
          margin-left: auto;
          color: ${e=>e.theme.colors.shade2};
          cursor: pointer;
        }
      }

      .review-text {
        margin: 8px 0 4px 0;
        color: ${e=>e.theme.colors.textPrimary};
      }

      .review-images {
        display: flex;

        .image-container {
          display: flex;
          width: 32px;
          height: 32px;
          margin: 4px 8px 4px 0;
          border: 1px solid ${e=>e.theme.colors.lightGray2};
          border-radius: 4px;
          overflow: hidden;
        }

        img {
          max-width: 32px;
          max-height: 32px;
          margin: auto;
        }
      }
    }
  }

  @media screen and (min-width: 767px) {
    .item__details {
      &--container {
        margin-left: 32px;
        text-align: right;
        .quantity {
          display: flex;
          justify-content: center;
        }

        &.extra-space {
          margin-left: 56px;
        }
      }

      &.ml-auto {
        margin-left: auto;
      }

      &--wrapper {
        flex-grow: 1;
      }

      &__return-order {
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        cursor: pointer;
        white-space: nowrap;
        width: 100%;
        padding: 16px;
        color: ${e=>e.theme.colors.textPrimary};
        ${e=>e.theme.fonts.bodyRegular};
      }
    }
  }
  @media screen and (max-width: 766px) {

    .item__details {
      &--container {
        margin-left: 16px;
        text-align: left;
      }

      &--wrapper {
        flex-direction: column !important;

        .title-4, .title {
          font-size: 12px;
          line-height: 16px;
          font-weight: 600;
        }
      }
    }
  }
`;var y=a(43324),C=a(1574),N=a(46906);const S=i.default.div`
  .primary {
    padding: 16px 48px;
  }

  .star-rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: auto;

    &__star {
      display: inline-block;
      padding: 0 4px;
      vertical-align: middle;
      line-height: 1;
      transition: color .2s ease-out;

      :hover > svg > path, :hover ~ label > svg > path {
        fill: ${e=>e.theme.colors.warning};
      }

      :hover > svg > rect, :hover ~ label > svg > rect {
        fill: ${e=>e.theme.colors.warningSecondary};
      }

      &.is-selected > svg > path {
        fill: ${e=>e.theme.colors.warning};
      }

      &.is-selected > svg > rect {
        fill: ${e=>e.theme.colors.warningSecondary};
      }
    }
  }

  label {
    margin: 0;
  }

  @media screen and (max-width: 766px) {
    .primary {
      padding: 0;
      margin: auto;

      .star-rating__star {
        svg {
          height: 48px !important;
          width: 48px !important;
        }
      }
    }
  }
`,I=i.default.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  font-family: 'Inter', sans-serif;
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    z-index: 999999;
  }

  .modal-content {
    background: ${e=>e.theme.colors.tint3};
    border-radius: 8px;

    .header {
      padding: 16px;
      background: ${e=>e.theme.colors.tint2};
      border-radius: 8px 8px 0 0;

      &__img-container {
        display: flex;
        height: 66px;
        width: 66px;
        border-radius: 4px;
        border: 1px solid ${e=>e.theme.colors.lightGray2};
        overflow: hidden;

        img {
          max-width: 64px;
          max-height: 64px;
          margin: auto;
        }
      }


      &__title {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        padding-left: 16px;
        margin: auto 0;
        color: ${e=>e.theme.colors.shade1};
      }

      .svg {
        padding: 0 4px;
        margin-left: auto;
      }
    }

    .body {
      margin: 24px 16px;
      display: flex;
      flex-direction: column;

      .upload {
        display: flex;
        margin: 16px 0;
        padding-top: 12px;
        overflow-x: scroll;

        &__info {
          color: ${e=>e.theme.colors.shade3};
          height: 56px;
          width: 208px;
          display: flex;
          align-items: center;
        }

        &__container {
          min-width: 56px;
          min-height: 56px;
          border: 1px solid ${e=>e.theme.colors.lightGray2};
          box-sizing: border-box;
          border-radius: 4px;
          display: flex;
          margin-right: 12px;
          position: relative;

          &--delete {
            position: absolute;
            margin: -10px 44px;
            border-radius: 50%;
            border: 1px solid ${e=>e.theme.colors.lightGray2};
            background: ${e=>e.theme.colors.tint3};
            display: flex;
            height: 20px;
            width: 20px;
            z-index: 1;
          }
        }

        img {
          max-width: 56px;
          max-height: 56px;
          margin: auto;
          overflow: hidden;
        }

        &__error {
          background: ${e=>e.theme.colors.shade1};
          opacity: 0.6;
          position: absolute;
          width: 54px;
          height: 54px;
          border-radius: 4px;
          display: flex;
        }
      }

      .input-wrapper {
        margin: 16px 0;
      }
    }
    .experience {
      padding: 16px 0 16px;
      ${e=>e.theme.fonts.bodyRegular};
      text-align: center;
      color: ${e=>e.theme.colors.shade1};
      @media(max-width: 768px) {
        padding: 0 0 16px;
      }
    }

  }

  @media screen and (min-width: 767px) {
    .modal-content {
      width: 516px;

      .header {
        &__title {
          padding: 8px 16px;
          margin: 0;
        }

        .svg {
          padding: 0 4px;
          margin: 8px;
          margin-left: auto;
        }
      }

      .body {
        display: flex;
        flex-direction: column;

        .rating {
          padding: 16px;
          margin: auto;
        }

        .rating > label {
          width: 56px;
          height: 56px;
          margin: 0 8px;
        }

        .rating > input ~ label > svg {
          width: 56px !important;
          height: 56px !important;
        }

        .upload {
          display: flex;
          margin: 24px 0;
          padding-top: 12px;
          overflow-x: scroll;

          &__info {
            color: ${e=>e.theme.colors.shade3};
            height: 72px;
            width: 388px;
          }

          &__container {
            min-width: 72px;
            height: 72px;
            margin-right: 16px;
            position: relative;

            &--delete {
              position: absolute;
              margin: -12px 58px;
              border-radius: 50%;
              height: 24px;
              width: 24px;
            }
          }

          img {
            max-width: 72px;
            max-height: 72px;
          }

          &__error {
            width: 70px;
            height: 70px;
          }
        }
      }

      .review-input {
        ::ng-deep {
          .float-container {
            height: 124px;
          }
        }
      }

      .btn {
        margin: 8px 0 0 auto;
        height: 40px;
        border-radius: 4px;
      }
    }

    .success {
      width: 408px !important;

      .svg-success {
        margin: 48px auto 0 !important;
        height: 48px !important;
        width: 48px !important;;

        svg {
          height: 28px !important;
          width: 28px !important;
        }
      }
    }
  }
  @media screen and (max-width: 766px) {
    .modal-content {
      width: 312px;
    }
  }

  .margin-icon {
    margin: 0 auto;
  }

  .success {
    background: ${e=>e.theme.colors.tint2};


    .svg-close {
      margin: 4px 4px 4px auto;
    }

    .svg-success {
      margin: 32px auto 0;
      height: 32px;
      width: 32px;
      border: 2px solid ${e=>e.theme.colors.shade1};
      border-radius: 50%;
      display: flex;

      svg {
        margin: auto;
        fill: ${e=>e.theme.colors.shade1};
      }
    }

    &__text {
      margin: 8px auto 24px;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      text-align: center;
      color: ${e=>e.theme.colors.shade1};
      padding-top: 16px;
    }
  }

  .item {
    border-radius: 4px;
    color: 1px solid ${e=>e.theme.colors.shade1};
    border: 1px solid ${e=>e.theme.colors.lightGray2};
    background: ${e=>e.theme.colors.tint3};
    font-weight: 400;
    margin: 16px;

    &__header {
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      padding: 8px 16px 0;
    }

    &__details {
      display: flex;
      padding: 0 16px;
      margin: 16px 0;

      &--img-container {
        display: flex;
        height: 66px;
        width: 66px;
        overflow: hidden;
        border-radius: 4px;
        border: 1px solid ${e=>e.theme.colors.lightGray2};

        img {
          max-width: 64px;
          max-height: 64px;
          margin: auto;
        }
      }

      &--container {
        margin: 0 16px;
      }

      .body-small {
        font-weight: 600;
      }

      &--variants {
        display: flex;
        margin: 6px 0;
        line-height: 12px;

        .color-variant {
          width: 12px;
          height: 12px;
          border-radius: 1px;
          margin-right: 4px;
          align-self: center;
        }

        .margin-r4 {
          margin-right: 4px;
        }
      }
    }

    &__rating {
      display: flex;
      border-top: 1px solid ${e=>e.theme.colors.lightGray2};
      padding: 12px 16px;
      background: unset;
    }

    @media screen and (max-width: 766px) {
      .body-regular-mobile {
        font-weight: 400 !important;
      }
    }
  }

  .loading-center {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100px;
    width: 100px;
    z-index: 12345;
  }

  ${o.G8} {
    color: ${e=>e.error?e.theme.colors.error:e.theme.colors.shade2} !important;
    transform: none !important;
    font-size: 10px !important;
    line-height: 10px !important;
    font-weight: 600 !important;
    letter-spacing: 0.08em;

    label {
      margin-bottom: 4px !important;
    }
  }

  ${o.EY} {
    height: 18px !important;
  }

  ${o.Tj} {
    padding: 8px 16px !important;

    ::placeholder {
      color: ${e=>e.theme.colors.shade3};
    }

    textarea {
      padding: 0 !important;
      color: ${e=>e.theme.colors.shade1} !important;
    }

  }

  ${o.YF} {
    height: 52px !important;
    padding: 8px 16px !important;
    margin: 0 !important;
  }

  ${o.SP} {
    input {
      padding: 16px 0 0 !important;
      font-size: 14px !important;
      line-height: 20px !important;
      color: ${e=>e.theme.colors.shade1} !important;

    }

    & input + ${o.ay} {
      color: ${e=>e.error?e.theme.colors.error:e.theme.colors.shade2} !important;
    }

    & input:focus + ${o.ay} {
      font-size: 10px !important;
      letter-spacing: 0.08em;
      font-weight: 600 !important;
    }

    ${e=>e.value?`& input:not(:focus) + ${o.ay} { font-size: 10px !important; letter-spacing: 0.08em; font-weight: 600 !important;}`:""}
  }

  .center-fix {
    top: -17px;
  }
`;var $=a(25617),k=a(67713),R=a(12791),L=a(34284),O=a(22314),F=a(70307),P=a(91102);class M{constructor(){this.toBase64=e=>new Promise(((t,a)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result),r.onerror=e=>a(e)}))}async compressImage(e,t,a){let r,n;const i=await(0,P.Z)(e,{maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0}),o=new File([i],t,{type:a});return r=await this.toBase64(i),n=o,{newData:r,newFile:n}}}const D={header:"REVIEW",id:"review",isRequired:!1,type:{id:"TEXTAREA"},value:"",error:!1,errorMessage:""},q={header:"NAME OF THE REVIEWER",id:"reviewer",isRequired:!1,type:{id:"TEXT"},value:"",error:!1,errorMessage:""},T=e=>{const t=[],[a,n]=(0,r.useState)(e.review.rating);for(let i=5;i>0;i--){let o="star-rating__star";a&&a>=i&&(o+=" is-selected"),t.push(r.createElement("label",{className:o,onClick:()=>{return n(t=i),e.review.rating=t,void(e.isPrimary||e.onOpen());var t},key:i},e.isPrimary?r.createElement("svg",{width:"56",height:"56",viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("rect",{width:"56",height:"56",rx:"28",fill:"#ECF0F4"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 7.66669C28.6344 7.66669 29.2137 8.02681 29.4945 8.59565L34.2571 18.2441L44.9077 19.8009C45.5353 19.8926 46.0565 20.3326 46.2521 20.936C46.4477 21.5393 46.2839 22.2014 45.8296 22.644L38.1242 30.149L39.9427 40.7516C40.0499 41.3769 39.7929 42.0089 39.2796 42.3818C38.7663 42.7547 38.0858 42.8038 37.5243 42.5085L28 37.4998L18.4758 42.5085C17.9142 42.8038 17.2337 42.7547 16.7205 42.3818C16.2072 42.0089 15.9501 41.3769 16.0573 40.7516L17.8758 30.149L10.1705 22.644C9.71609 22.2014 9.5523 21.5393 9.74793 20.936C9.94356 20.3326 10.4647 19.8926 11.0923 19.8009L21.7429 18.2441L26.5055 8.59565C26.7863 8.02681 27.3656 7.66669 28 7.66669Z",fill:"#CCD3DF"})):r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1C12.3806 1 12.7282 1.21607 12.8967 1.55738L15.7543 7.34647L22.1446 8.28051C22.5212 8.33555 22.8339 8.59956 22.9512 8.96157C23.0686 9.32358 22.9703 9.72083 22.6977 9.98636L18.0745 14.4894L19.1656 20.851C19.23 21.2261 19.0757 21.6053 18.7677 21.8291C18.4598 22.0528 18.0515 22.0823 17.7145 21.9051L12 18.8998L6.28545 21.9051C5.94853 22.0823 5.54024 22.0528 5.23226 21.8291C4.92429 21.6053 4.77004 21.2261 4.83439 20.851L5.92548 14.4894L1.30227 9.98636C1.02965 9.72083 0.931375 9.32358 1.04875 8.96157C1.16613 8.59956 1.47881 8.33555 1.85537 8.28051L8.24574 7.34647L11.1033 1.55738C11.2718 1.21607 11.6194 1 12 1Z",fill:"#CCD3DF"}))))}return r.createElement(S,null,r.createElement("div",{className:"star-rating"+(e.isPrimary?" primary ":" ")},t))};var A=e=>{const[t,a]=(0,r.useState)(D),[n,i]=(0,r.useState)(q),[l,s]=(0,r.useState)([]),[d,c]=(0,r.useState)(),[m,p]=(0,r.useState)(!1),[u,g]=(0,r.useState)(),[h,x]=(0,r.useState)(Object.assign({},e.reviewItem)),[v,b]=(0,r.useState)(!0),f=e.orderItem,w=(0,r.useRef)(null);(0,r.useEffect)((()=>{e.reviewItem&&(a(Object.assign(Object.assign({},D),{value:Object.assign({},e.reviewItem).review})),i(Object.assign(Object.assign({},q),{value:Object.assign({},e.reviewItem).customerName})),s(Object.assign({},e.reviewItem).imagesUrl||[]),g(!!e.reviewItem.date)),x(Object.assign({},e.reviewItem)),p(e.isSubmitted),document.body.classList.add("login-modal")}),[e.isSubmitted]);const _=()=>{if(e.reviewItem){const t=h.date?Object.assign({},e.reviewItem):Object.assign(Object.assign({},e.reviewItem),{rating:0});e.setReview(t,!0)}else e.setReview(null,!0);b(!1),document.body.classList.remove("login-modal")},E=e=>{"review"===e.target.name&&(a(Object.assign(Object.assign({},t),{error:!1,errorMessage:"",value:e.target.value})),h.review=e.target.value),"reviewer"===e.target.name&&(i(Object.assign(Object.assign({},n),{error:!1,errorMessage:"",value:e.target.value})),h.customerName=e.target.value)},C=async()=>{c("In Progress"),w.current.style.visibility="hidden";const[t,a]=await(async()=>{const t=Object.assign({},h);let a=!1;const r=[],n=new F.m;return l.forEach((e=>{e.isNew&&r.push(n.uploadImage(e,"review"))})),await Promise.all(r),l.forEach((e=>{e.error&&(a=!0),e.isNew&&(t.imagesUrl=[...t.imagesUrl,e.urlToSave])})),t.date=(new Date).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),t.isActive=!0,t.userId=k.C.getItem("authId"),e.showNoLoginReview||(t.token=await R.i.fetchIdToken()),t.timestamp=Date.now(),x(t),[a,t]})();t||e.updateReview(a,u)};return r.createElement($.zt,{store:y.ZP},r.createElement(o.Q2,null,v&&r.createElement(I,{value:n.value},r.createElement("div",{className:"modal"},!m&&f?r.createElement("div",{className:"modal-content"},r.createElement("div",{className:"header d-flex"},r.createElement("div",{className:"header__img-container"},r.createElement("img",{src:f.image,alt:"",className:"img-fluid"})),r.createElement("div",{className:"header__title"},f.name),r.createElement("div",{className:"svg"},r.createElement("svg",{onClick:_,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z",fill:"#9E9E9E"})))),r.createElement("div",{className:"body"},r.createElement("div",{className:"experience"},"How was your experience while using the product?"),r.createElement(T,{review:h,isPrimary:!0}),r.createElement("div",{className:"upload"},r.createElement("div",{className:"upload__container"},r.createElement("svg",{onClick:()=>{document.getElementById("saveImagesContainer").click()},className:"m-auto",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M8.68063 4.01952C8.897 3.69495 9.26127 3.5 9.65135 3.5H16.015C16.4051 3.5 16.7693 3.69495 16.9857 4.01952L18.7606 6.68182H21.212C22.084 6.68182 22.9202 7.02822 23.5368 7.64482C24.1534 8.26141 24.4998 9.0977 24.4998 9.9697V13.8409C24.4998 14.4852 23.9775 15.0076 23.3332 15.0076C22.6888 15.0076 22.1665 14.4852 22.1665 13.8409V9.9697C22.1665 9.71654 22.0659 9.47374 21.8869 9.29473C21.7079 9.11572 21.4651 9.01515 21.212 9.01515H18.1362C17.7461 9.01515 17.3819 8.8202 17.1655 8.49564L15.3906 5.83333H10.2757L8.50087 8.49564C8.28449 8.8202 7.92022 9.01515 7.53014 9.01515H4.45438C4.20122 9.01515 3.95843 9.11572 3.77942 9.29473C3.60041 9.47374 3.49984 9.71654 3.49984 9.9697V20.0455C3.49984 20.2986 3.60041 20.5414 3.77942 20.7204C3.95843 20.8994 4.20122 21 4.45438 21H15.1665C15.8108 21 16.3332 21.5223 16.3332 22.1667C16.3332 22.811 15.8108 23.3333 15.1665 23.3333H4.45438C3.58238 23.3333 2.7461 22.9869 2.1295 22.3703C1.5129 21.7537 1.1665 20.9175 1.1665 20.0455V9.9697C1.1665 9.0977 1.5129 8.26141 2.1295 7.64482C2.7461 7.02822 3.58238 6.68182 4.45438 6.68182H6.90576L8.68063 4.01952Z",fill:"#616161"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.1665 14C8.1665 11.4227 10.2558 9.33333 12.8332 9.33333C15.4105 9.33333 17.4998 11.4227 17.4998 14C17.4998 16.5773 15.4105 18.6667 12.8332 18.6667C10.2558 18.6667 8.1665 16.5773 8.1665 14ZM12.8332 11.6667C11.5445 11.6667 10.4998 12.7113 10.4998 14C10.4998 15.2887 11.5445 16.3333 12.8332 16.3333C14.1218 16.3333 15.1665 15.2887 15.1665 14C15.1665 12.7113 14.1218 11.6667 12.8332 11.6667Z",fill:"#616161"}),r.createElement("path",{d:"M22.1665 18.6667C22.1665 18.0223 22.6888 17.5 23.3332 17.5C23.9775 17.5 24.4998 18.0223 24.4998 18.6667V21H26.8332C27.4775 21 27.9998 21.5223 27.9998 22.1667C27.9998 22.811 27.4775 23.3333 26.8332 23.3333H24.4998V25.6667C24.4998 26.311 23.9775 26.8333 23.3332 26.8333C22.6888 26.8333 22.1665 26.311 22.1665 25.6667V23.3333H19.8332C19.1888 23.3333 18.6665 22.811 18.6665 22.1667C18.6665 21.5223 19.1888 21 19.8332 21H22.1665V18.6667Z",fill:"#616161"}))),l.length?l.map(((e,t)=>r.createElement("div",{className:"upload__container",key:t},(null===e||void 0===e?void 0:e.base64String)?r.createElement("img",{src:e.base64String,alt:""}):r.createElement("img",{src:e,alt:""}),r.createElement("div",{className:"upload__container--delete",onClick:()=>(e=>{var t;if(!(null===(t=l[e])||void 0===t?void 0:t.isNew)){const t=[...h.imagesUrl];t.splice(e,1),h.imagesUrl=t}const a=[...l];a.splice(e,1),s(a)})(t)},r.createElement("svg",{className:"m-auto",width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M7.72663 1.0596C7.94359 0.842641 7.94359 0.490882 7.72663 0.273924C7.50967 0.0569666 7.15791 0.0569666 6.94096 0.273924L4.00046 3.21442L1.05996 0.273924C0.843007 0.0569666 0.491249 0.0569666 0.274291 0.273924C0.0573328 0.490882 0.0573328 0.842641 0.274291 1.0596L3.21479 4.00009L0.274291 6.94059C0.0573328 7.15755 0.0573328 7.50931 0.274291 7.72626C0.491249 7.94322 0.843007 7.94322 1.05996 7.72626L4.00046 4.78577L6.94096 7.72626C7.15791 7.94322 7.50967 7.94322 7.72663 7.72626C7.94359 7.50931 7.94359 7.15755 7.72663 6.94059L4.78613 4.00009L7.72663 1.0596Z",fill:"#212121"}))),(null===e||void 0===e?void 0:e.error)&&r.createElement("div",{className:"upload__error"},r.createElement("svg",{className:"m-auto",width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.77324 0.902589C9.14764 0.691795 9.57006 0.581055 9.99973 0.581055C10.4294 0.581055 10.8518 0.691795 11.2262 0.902589C11.6006 1.11338 11.9144 1.41712 12.1372 1.78448L12.1396 1.78844L19.198 13.5718L19.2047 13.5833C19.423 13.9613 19.5385 14.3899 19.5397 14.8264C19.541 15.263 19.4279 15.6922 19.2117 16.0714C18.9955 16.4507 18.6838 16.7667 18.3076 16.9881C17.9314 17.2095 17.5037 17.3285 17.0672 17.3333L17.0581 17.3334L2.93224 17.3333C2.49574 17.3285 2.0681 17.2095 1.69187 16.9881C1.31565 16.7667 1.00394 16.4507 0.787774 16.0714C0.571604 15.6922 0.458504 15.263 0.459727 14.8264C0.460949 14.3899 0.576451 13.9613 0.79474 13.5833L0.80151 13.5718L7.85984 1.78845L7.86223 1.78448C8.08507 1.41712 8.39883 1.11338 8.77324 0.902589ZM9.28824 2.64721L2.2353 14.4215C2.16432 14.5464 2.12679 14.6874 2.12639 14.8311C2.12598 14.9766 2.16368 15.1197 2.23574 15.2461C2.30779 15.3725 2.41169 15.4779 2.5371 15.5517C2.66141 15.6248 2.80256 15.6644 2.94673 15.6667H17.0527C17.1969 15.6644 17.338 15.6248 17.4624 15.5517C17.5878 15.4779 17.6917 15.3725 17.7637 15.2461C17.8358 15.1197 17.8735 14.9766 17.8731 14.8311C17.8727 14.6875 17.8351 14.5464 17.7642 14.4216L10.7122 2.64886L10.7112 2.64721C10.637 2.52549 10.5328 2.42485 10.4086 2.3549C10.2838 2.28463 10.143 2.24772 9.99973 2.24772C9.85651 2.24772 9.7157 2.28463 9.5909 2.3549C9.46666 2.42485 9.36246 2.52549 9.28824 2.64721ZM9.99992 5.66668C10.4602 5.66668 10.8333 6.03978 10.8333 6.50002V9.83335C10.8333 10.2936 10.4602 10.6667 9.99992 10.6667C9.53968 10.6667 9.16658 10.2936 9.16658 9.83335V6.50002C9.16658 6.03978 9.53968 5.66668 9.99992 5.66668ZM9.99992 12.3333C9.53968 12.3333 9.16658 12.7064 9.16658 13.1667C9.16658 13.6269 9.53968 14 9.99992 14H10.0083C10.4685 14 10.8416 13.6269 10.8416 13.1667C10.8416 12.7064 10.4685 12.3333 10.0083 12.3333H9.99992Z",fill:"#C22828"})))))):r.createElement("div",{className:"upload__info caption-mobile body-regular"},"Adding photos and videos can be very helpful for the other customers"),r.createElement("input",{id:"saveImagesContainer",type:"file",accept:"image/*",name:"myfile",multiple:!0,hidden:!0,onChange:e=>{const t=Array.from(e.target.files),a=[...l];t.forEach((e=>{const t=new FileReader;t.readAsDataURL(e),t.onload=async()=>{const t=new M,r=new F.M;r.isNew=!0;const{newData:n,newFile:i}=await t.compressImage(e,e.name,e.type);r.base64String=n,r.fileData=i,r.uuid=L.Z(),a.push(r),s([...a])}}))}})),r.createElement(O.Z,null,r.createElement(o.Ki,{header:t.header,placeHolder:"Write a few words about your overall experience.",value:t.value,onChange:e=>{E(e)},id:t.id,name:t.id,error:t.error,subText:t.errorMessage,isRequired:t.isRequired}),r.createElement("div",{className:"input-wrapper"},r.createElement(o.Gj,{placeHolder:n.header,iconRight:!0,value:n.value,type:"text",onChange:E,id:n.id,name:n.id,error:n.error,subText:n.errorMessage,isRequired:n.isRequired}))),r.createElement(o.qz,{buttonStyle:"primary",click:()=>{var e;const r=10-((null===(e=h.review)||void 0===e?void 0:e.length)||0);let o="";h.review&&r>0&&(o="Atleast 10 characters required",a(Object.assign(Object.assign({},t),{error:!0,errorMessage:o}))),h.customerName||(o="Please add your name ",i(Object.assign(Object.assign({},n),{error:!0,errorMessage:o}))),o||C()},isDisabled:"In Progress"===d},"In Progress"===d&&r.createElement("section",{className:"p-0"},r.createElement("div",{className:"position-fixed"},r.createElement("div",{className:"col-sm-12 d-flex center-fix"},r.createElement("div",{className:"error-section m-auto"},r.createElement("h2",{className:"spinner-border"},r.createElement("span",{className:"sr-only"},"Loading...")))))),r.createElement("span",{ref:w,id:"buttonText"},"Submit")))):r.createElement("div",{className:"modal-content success"},r.createElement("div",{className:"body"},r.createElement("svg",{className:"svg-close",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:_},r.createElement("path",{d:"M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z",fill:"#9E9E9E"})),r.createElement("div",{className:"margin-icon"},r.createElement("svg",{width:"72",height:"72",viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("rect",{width:"72",height:"72",rx:"36",fill:"#319657"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M53.4142 22.5858C54.1953 23.3668 54.1953 24.6332 53.4142 25.4142L31.4142 47.4142C30.6332 48.1953 29.3668 48.1953 28.5858 47.4142L18.5858 37.4142C17.8047 36.6332 17.8047 35.3668 18.5858 34.5858C19.3668 33.8047 20.6332 33.8047 21.4142 34.5858L30 43.1716L50.5858 22.5858C51.3668 21.8047 52.6332 21.8047 53.4142 22.5858Z",fill:"white"}))),r.createElement("div",{className:"success__text"},"Thank you for your feedback")),!!f&&r.createElement("div",{className:"item"},r.createElement("div",{className:"item__header"},"Also rate"),r.createElement("div",{className:"item__details"},!!f.image&&r.createElement("div",{className:"item__details--img-container"},r.createElement("img",{src:f.image,alt:""})),r.createElement("div",{className:"item__details--container"},r.createElement("div",{className:" body-regular-mobile body-small"},f.name),r.createElement("div",{className:"item__details--variants caption"},!!f.colorVariant&&r.createElement("div",{className:"color-variant",style:{backgroundColor:f.colorVariant}}),!!f.typeVariant&&r.createElement("div",null,!!f.colorVariant&&r.createElement("span",{className:"margin-r4"},"\u2022"),f.typeVariant)))),r.createElement("div",{className:"item__rating"},r.createElement("div",{className:"my-auto body-regular-mobile body-small"},"Add rating"),r.createElement("div",{className:"ml-auto"},r.createElement(T,{review:h,onOpen:()=>{p(!1),c("")},isPrimary:!1})))))))))};const B={header:"NAME OF THE REVIEWER",id:"reviewer",isRequired:!1,type:{id:"TEXT"},value:"",error:!1,errorMessage:""},j=e=>{const t=[],[a,n]=(0,r.useState)(e.review.rating),i=async t=>{n(t),e.review.rating=t,await e.setInitialRating(e.review)};for(let o=5;o>0;o--){let n="star-rating__star";a&&a>=o&&(n+=" is-selected"),t.push(r.createElement("label",{className:n,onClick:()=>i(o),key:o},e.isPrimary?r.createElement("svg",{width:"56",height:"56",viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("rect",{width:"56",height:"56",rx:"28",fill:"#ECF0F4"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 7.66669C28.6344 7.66669 29.2137 8.02681 29.4945 8.59565L34.2571 18.2441L44.9077 19.8009C45.5353 19.8926 46.0565 20.3326 46.2521 20.936C46.4477 21.5393 46.2839 22.2014 45.8296 22.644L38.1242 30.149L39.9427 40.7516C40.0499 41.3769 39.7929 42.0089 39.2796 42.3818C38.7663 42.7547 38.0858 42.8038 37.5243 42.5085L28 37.4998L18.4758 42.5085C17.9142 42.8038 17.2337 42.7547 16.7205 42.3818C16.2072 42.0089 15.9501 41.3769 16.0573 40.7516L17.8758 30.149L10.1705 22.644C9.71609 22.2014 9.5523 21.5393 9.74793 20.936C9.94356 20.3326 10.4647 19.8926 11.0923 19.8009L21.7429 18.2441L26.5055 8.59565C26.7863 8.02681 27.3656 7.66669 28 7.66669Z",fill:"#CCD3DF"})):r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1C12.3806 1 12.7282 1.21607 12.8967 1.55738L15.7543 7.34647L22.1446 8.28051C22.5212 8.33555 22.8339 8.59956 22.9512 8.96157C23.0686 9.32358 22.9703 9.72083 22.6977 9.98636L18.0745 14.4894L19.1656 20.851C19.23 21.2261 19.0757 21.6053 18.7677 21.8291C18.4598 22.0528 18.0515 22.0823 17.7145 21.9051L12 18.8998L6.28545 21.9051C5.94853 22.0823 5.54024 22.0528 5.23226 21.8291C4.92429 21.6053 4.77004 21.2261 4.83439 20.851L5.92548 14.4894L1.30227 9.98636C1.02965 9.72083 0.931375 9.32358 1.04875 8.96157C1.16613 8.59956 1.47881 8.33555 1.85537 8.28051L8.24574 7.34647L11.1033 1.55738C11.2718 1.21607 11.6194 1 12 1Z",fill:"#CCD3DF"}))))}return r.createElement(S,null,r.createElement("div",{className:"star-rating"+(e.isPrimary?" primary ":" ")},t))};var z=e=>{const[t,a]=(0,r.useState)(B),[n,i]=(0,r.useState)(!1),[l,s]=(0,r.useState)(),[d,c]=(0,r.useState)(Object.assign({},e.reviewItem)),[m,p]=(0,r.useState)(!0),u=e.orderItem,[g,h]=(0,r.useState)(),[x,v]=(0,r.useState)();(0,r.useEffect)((()=>{e.reviewItem&&(a(Object.assign(Object.assign({},B),{value:Object.assign({},e.reviewItem).customerName})),s(!!d.date)),c(Object.assign({},e.reviewItem)),i(e.isSubmitted),document.body.classList.add("login-modal")}),[e.isSubmitted]),(0,r.useEffect)((()=>{v(e.reviewItem)}),[e.reviewItem]);return r.createElement($.zt,{store:y.ZP},r.createElement(o.Q2,null,m&&r.createElement(I,{value:t.value},r.createElement("div",{className:"modal"},!g&&u?r.createElement("div",{className:"modal-content"},r.createElement("div",{className:"header d-flex"},r.createElement("div",{className:"header__img-container"},r.createElement("img",{src:u.image,alt:"",className:"img-fluid"})),r.createElement("div",{className:"header__title"},u.name),r.createElement("div",{className:"svg"},r.createElement("svg",{onClick:async()=>{const[t,a]=await(async()=>{const t=Object.assign({},d);return t.date=(new Date).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),t.isActive=!0,t.userId=k.C.getItem("authId"),e.showNoLoginReview||(t.token=await R.i.fetchIdToken()),t.timestamp=Date.now(),c(t),[!1,t]})();t||(await e.updateReview(a,l),e.updateOnClose(),p(!1),document.body.classList.remove("login-modal"))},width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z",fill:"#9E9E9E"})))),r.createElement("div",{className:"body"},r.createElement("div",{className:"experience"},"How was your experience while using the product?"),r.createElement(j,{review:d,isPrimary:!0,setInitialRating:async e=>{v(e),h(!0)}}))):r.createElement(A,{reviewItem:x,orderItem:e.orderItem,isSubmitted:e.isSubmitted,showNoLoginReview:e.showNoLoginReview,setReview:e.setReview,updateReview:e.updateReview})))))};const H="ACCEPTED",U="PENDING",Z="REJECTED",W="ACCEPTED",V="PENDING",G="REJECTED",J="ORDERED",Q="PENDING",Y="IN PROGRESS",K="CANCELLED",X="DELIVERED",ee="SUCCESSFUL",te="IN_PROGRESS",ae="FAILED";var re=a(77624);const ne=(e,t,a)=>r.createElement(re.Z,{customPopoverStyle:"no-d-flex",triggerNode:r.createElement("div",{className:"option"},r.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/frontend-icons%2FmoreOptionvertical.png?alt=media&token=7ef4bd1a-fb36-443d-bea9-da4e50d77809"})),openOnHover:!0,closeOnHoverOutSide:!0},r.createElement("div",{className:a,onClick:()=>{e(t)}},r.createElement("span",null,"Request return")));var ie=a(72050);var oe=e=>{var t,a,n;const[i,l]=(0,r.useState)(e.reviewItems),[s,d]=(0,r.useState)(),[c,m]=(0,r.useState)(),[p,u]=(0,r.useState)(),[g,h]=(0,r.useState)(!1),[x,v]=(0,r.useState)(!1),b=(0,f.iP)(),w=new C.O,_=N.P.getInstance(),S=y.ZP.getState().storeState.store.meta.id,I=y.ZP.getState().storeState.store.meta.extraConfiguration.isProductNameTitleCaseDisabled,$=(0,y.CG)((e=>e.customerState.isLoggedIn)),k=(0,y.CG)((e=>e.storeState.store.meta)),R=null!==(a=null===(t=null===k||void 0===k?void 0:k.returnInformation)||void 0===t?void 0:t.featureEnabled)&&void 0!==a&&a,[L,O]=(0,r.useState)(!1);(0,r.useEffect)((()=>{var t,a,r;l(e.reviewItems);const n=(0,ie.Hl)(e.currentOrder.timestamp),i=(new Date).getTime();O((null===(t=null===k||void 0===k?void 0:k.returnInformation)||void 0===t?void 0:t.featureEnabled)&&(null===(a=null===k||void 0===k?void 0:k.returnInformation)||void 0===a?void 0:a.returnBefore)>0&&i-n<=864e5*(null===(r=null===k||void 0===k?void 0:k.returnInformation)||void 0===r?void 0:r.returnBefore))}),[e.refreshOrderData]);const F=async(t,a,r=!1)=>{if(!$&&!e.showNoLoginReviews)return void e.openLoginPopup();const n=Object.assign({},i);r||(n.reviews[t].rating=a,l(n)),u(t),d(i.reviews[t]),m(i.orderItems[t]),h(!0)},P=async e=>{let t;console.log("entering post submit on click"),document.body.classList.remove("login-modal"),M(e),i.reviews.map(((e,a)=>{e.rating||a===p||(t=a)})),d(t?i.reviews[t]:void 0),m(t?i.orderItems[t]:void 0),u(t),v(!0)},M=async(e,t=!1)=>{if(console.log("checking on setReview"),e){console.log("checking inside if");const t=Object.assign({},i);t.reviews.splice(p,1,e),l(t)}t&&(h(!1),v(!1))};return r.createElement(E,null,null===(n=null===i||void 0===i?void 0:i.orderItems)||void 0===n?void 0:n.map(((t,a)=>{var n,l,s,d,c,m,p;return r.createElement("div",{className:`item ${(null===t||void 0===t?void 0:t.returnRequest)&&t.returnRequest.status===W?"success-border":""} ${(null===t||void 0===t?void 0:t.returnRequest)&&t.returnRequest.status===G?"error-border":""} `,key:a},r.createElement("div",{className:"item__details "+(b?"caption-bold":"body-small")},r.createElement("div",{className:"item__details--img-container"},t.image&&r.createElement("img",{src:t.image,alt:"",className:"img-fluid"})),r.createElement("div",{className:"item__details--wrapper"},r.createElement("div",{className:"margin-l16"},r.createElement("div",{className:"body-small toast-mobile"},I?t.name:t.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")),r.createElement("div",{className:"item__details--variants"},t.colorVariant&&r.createElement("div",{className:"color-variant",style:{backgroundColor:t.colorVariant}}),t.typeVariant&&t.colorVariant&&r.createElement("span",{className:"type-variant"},"\u2022"),r.createElement("div",{className:"type-variant caption"},t.typeVariant))),r.createElement("div",{className:(b?"":"ml-auto")+" d-flex"},r.createElement("div",{className:"item__details--container"},r.createElement("span",{className:"shade-2 body-small caption-mobile"},"Qty"),r.createElement("br",null),r.createElement("span",{className:"quantity "+(b?"caption-bold":"title4")},t.quantity)),r.createElement("div",{className:"item__details--container"},r.createElement("span",{className:"shade-2 body-small caption-mobile"},"Price"),r.createElement("br",null),r.createElement("span",{className:b?"caption-bold":"title4"},r.createElement(f.fP,{currency:e.currency}),t.price)),R&&L&&r.createElement("div",{className:"item__details--container desktop-only "+(t.returnRequest||e.currentOrder.status!==X?"extra-space":"")},!t.returnRequest&&e.currentOrder.status===X&&ne(e.returnOrder,a,"item__details__return-order")))),R&&L&&r.createElement("div",{className:"item__details--container ml-auto mobile-only"},!t.returnRequest&&e.currentOrder.status===X&&ne(e.returnOrder,a,"return-orders"))),(null===t||void 0===t?void 0:t.returnRequest)&&r.createElement("div",{className:"item__return-notify"},(null===t||void 0===t?void 0:t.returnRequest)&&t.returnRequest.status!==V&&r.createElement("div",{className:"item__return-notify__div"},r.createElement("div",null,(e=>{var t;if(null===e||void 0===e?void 0:e.returnRequest)switch(null===(t=null===e||void 0===e?void 0:e.returnRequest)||void 0===t?void 0:t.status){case W:return r.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/frontend-icons%2FreturnReqAcceptGreenIcon.png?alt=media&token=341ec87a-8a7c-4809-a504-cf5a7eeb3782"});case G:return r.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/frontend-icons%2FreturnReqRejectedWarning.png?alt=media&token=614cc46c-1001-43d7-b701-1c92b2933147"});default:return null}})(t)),r.createElement("div",null,r.createElement("span",{className:"item__return-notify__div__text"},(e=>{var t;if(null===e||void 0===e?void 0:e.returnRequest)switch(null===(t=null===e||void 0===e?void 0:e.returnRequest)||void 0===t?void 0:t.status){case W:return"Return request accepted";case G:return"Return request denied";default:return""}})(t)),r.createElement("div",{className:"item__return-notify__div__subtext"},t.returnRequest.status===G&&(null===(n=t.returnRequest)||void 0===n?void 0:n.denialReason)?`Reason for denial: ${null===(l=t.returnRequest)||void 0===l?void 0:l.denialReason}`:"We will get in touch with you soon for further information"))),(null===t||void 0===t?void 0:t.returnRequest)&&t.returnRequest.status===V&&r.createElement("div",{className:"item__return-notify__pending-req"},"Return requested")),!!(null===i||void 0===i?void 0:i.reviews.length)&&((null===(s=null===i||void 0===i?void 0:i.reviews[a])||void 0===s?void 0:s.date)?r.createElement("div",{className:"item__reviewed"},r.createElement("div",{className:"options"},r.createElement("div",{className:"display-rating"},r.createElement(o.ZF,{currentRating:null===(c=i.reviews[a])||void 0===c?void 0:c.rating})),r.createElement("div",{className:"edit",onClick:()=>F(a,null,!0)},"EDIT")),i.reviews[a].review&&r.createElement("div",{className:"body-small body-regular-mobile review-text"},i.reviews[a].review),r.createElement("div",{className:"review-images"},null===(p=null===(m=i.reviews[a])||void 0===m?void 0:m.imagesUrl)||void 0===p?void 0:p.map(((e,t)=>r.createElement("div",{className:"image-container",key:t},r.createElement("img",{src:e,alt:""})))))):r.createElement("div",{className:"item__rating"},r.createElement("div",{className:"body-small caption-mobile item__rating--title"},"Add rating"),r.createElement(o.ZF,{currentRating:null===(d=i.reviews[a])||void 0===d?void 0:d.rating,onRatingClicked:e=>F(a,e)}))))})),g&&r.createElement(z,{reviewItem:s,orderItem:c,setReview:M,updateReview:async(e,t)=>{let a;if(v(!1),a=t?await w.upadateReview(e):await w.addReview(e),a.data&&200===a.data.status){const a={storeId:S,event:"product_review",options:{type:t?"edit":"add",rating:e.rating,text_added:e.review?"Yes":"No",image_added:e.imagesUrl.length?"Yes":"No",product_name:i.orderItems[p].name}};_.recordAmplitudeEvent(a),P(e)}},isSubmitted:x,showNoLoginReview:e.showNoLoginReviews,updateOnClose:()=>{v(!1),h(!1)},postSubmit:P}))},le=a(84386),se=a(3346);var de=a(42979),ce=a(8195),me=a(15282),pe=a(92293);const ue=()=>r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.5818 14.0427C16.333 13.9182 15.1097 13.3163 14.8816 13.2332C14.6536 13.1502\n      14.4877 13.1087 14.3218 13.3577C14.1559 13.6068 13.6791 14.1673 13.5339 14.3334C13.3888\n      14.4994 13.2437 14.5203 12.9948 14.3956C12.746 14.2711 11.9443 14.0084 10.9939\n      13.1606C10.2542 12.5008 9.75482 11.6861 9.60971 11.4369C9.46456 11.1878 9.5942 11.0532\n      9.71877 10.9291C9.83074 10.8177 9.96764 10.6385 10.092 10.4932C10.2165 10.348 10.2579\n      10.2441 10.3408 10.0781C10.4238 9.91201 10.3823 9.76676 10.3201 9.64223C10.2579 9.5177\n      9.76026 8.29291 9.55294 7.79465C9.35097 7.30953 9.14584 7.37523 8.99309 7.36754C8.84813\n      7.36033 8.68206 7.3588 8.51623 7.3588C8.35035 7.3588 8.08076 7.42107 7.85267 7.67012C7.62462\n      7.91923 6.98183 8.52124 6.98183 9.74589C6.98183 10.9707 7.87339 12.1538 7.99782 12.3199C8.12225\n      12.486 9.75234 14.9992 12.2484 16.0769C12.842 16.3334 13.3055 16.4864 13.6669 16.6011C14.2629\n      16.7905 14.8054 16.7638 15.2341 16.6997C15.7122 16.6283 16.7062 16.0978 16.9136 15.5166C17.1209\n      14.9353 17.1209 14.4371 17.0587 14.3334C16.9965 14.2296 16.8307 14.1673 16.5818 14.0427ZM12.0418\n      20.2417H12.0385C10.5533 20.2411 9.09656 19.8421 7.82579 19.088L7.52354 18.9086L4.39095 19.7303L5.22708\n      16.676L5.03031 16.3629C4.20178 15.0451 3.76416 13.522 3.76483 11.9581C3.76664 7.39462 7.47966 3.68189\n      12.0451 3.68189C14.2559 3.68265 16.334 4.5447 17.8967 6.10923C19.4594 7.67366 20.3195 9.7532 20.3186\n      11.9648C20.3168 16.5286 16.6038 20.2417 12.0418 20.2417ZM19.0861 4.92044C17.206 3.03815 14.7057 2.0011\n      12.0417 2C6.55291 2 2.08566 6.46696 2.08347 11.9575C2.08275 13.7126 2.54128 15.4257 3.41273 16.9359L2\n      22.0961L7.27897 20.7114C8.73348 21.5047 10.3711 21.9229 12.0378 21.9234H12.0419C17.5301 21.9234 21.9978\n      17.456 22 11.9654C22.001 9.3046 20.9662 6.80268 19.0861 4.92044Z",fill:"white"}));var ge=a(1926),he=a(55506),xe=a(24650),ve=a(41210);var be=({subscriptionId:e,actionService:t})=>r.createElement(ve.zv,{color:"#FDF7E9",isOrder:!0},r.createElement(o.T3,{height:18,width:18}),r.createElement(ve.kl,null,r.createElement(ve.B4,{color:"#926902",style:{fontWeight:600,marginTop:14}},"Generated through weekly subscription ",e),r.createElement(xe.Z,{style:{float:"right"},onClick:()=>{t.redirectToSubscriptionOrdersDetails(e)}}))),fe=a(82850);const we=["online","manual","partialCOD"],_e=e=>{if(!e)return"-";const t=(0,ie.Hl)(e);return(0,ie.i$)(t)},Ee=(e,t)=>{switch(null===e||void 0===e?void 0:e.status){case ee:return`${t?"Partial refund":"Refund"} processed on ${_e(e.updatedAt)}. It may take up to 14 days to reflect in your account.`;case te:return"Refund pending";case ae:return"Failed to refund. Kindly contact the store";default:return"Refund update pending"}},ye=i.default.div`
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

  .cancelOrderWrapper {
    width: 406px;
    background: #ffffff;
    border-radius: 8px;
    padding: 16px;

    @media (max-width: 768px) {
      max-width: unset;
      width: 100%;
      border-radius: 4px;
    }

    &__dropdown {
      margin: 16px auto 8px;

      &__disabled {
        opacity: 0.5;
        pointer-events: none;
        background: ${e=>e.theme.colors.tint2};
      }
    }

    &__textArea {
      &__disabled {
        opacity: 0.5;
        pointer-events: none;
        background: ${e=>e.theme.colors.tint2};
      }
    }

    &__cancel-btn {
      margin-top: 12px;
    }

    &__alert {
      &__icon {
        margin: 16px auto;

        svg {
          display: block;
          margin: auto;
        }
      }

      &__message {
        text-align: center;
        ${e=>e.theme.fonts.title2Mobile};
        color: ${e=>e.theme.colors.shade2};
      }

      &__done-btn {
        justify-content: center;
        display: flex;

        &__borderRadius {
          border-radius: 4px;
        }
      }
    }

    &__btn-text {
      ${e=>e.theme.fonts.buttonSmall};
      color: ${e=>e.theme.colors.tint3};
    }

    &__progressBar {
      box-sizing: content-box;
      position: relative;
      border-radius: 25px;
      padding: 6px 0 10px 0px;
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
    }
    &__progressBar > span {
      display: block;
      height: 4px;
      background-color: ${e=>e.theme.colors.brandMain};
      background-image: linear-gradient(
        center bottom,
        rgb(43, 194, 83) 37%,
        rgb(84, 240, 84) 69%
      );
      position: relative;
      overflow: hidden;
    }

    &__undo-cancellation {
      cursor: pointer;
      text-align: center;
      padding: 12px;

      &__text {
        ${e=>e.theme.fonts.buttonSmall};
        color: ${e=>e.theme.colors.shade2};
      }

      &__disableBtn {
        cursor: no-drop;

        span {
          color: ${e=>e.theme.colors.shade3} !important;
        }
      }
    }

    &__header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (max-width: 768px) {
      position: fixed;
      bottom: 0;
      width: 100%;
    }

    &__topSection {
      display: flex;
      justify-content: space-between;

      @media (max-width: 768px) {
        margin-top: 0;
      }

      &__header {
        display: block;
        ${e=>e.theme.fonts.title3};
        color: ${e=>e.theme.colors.textPrimary};

        @media (max-width: 768px) {
          margin-top: unset;
          font-style: normal;
          display: inline-block;
          ${e=>e.theme.fonts.title3Mobile};
          color: ${e=>e.theme.colors.shade1};
        }
      }
    }
  }

  @media (max-width: 768px) {
    bottom: 0px;
    width: 100%;
  }
`;var Ce=a(69055);const Ne=()=>r.createElement("svg",{width:"72",height:"72",viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{cx:"36",cy:"36",r:"36",fill:"#ECF0F4"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M47.6095 27.0572C48.1302 27.5778 48.1302 28.4221 47.6095 28.9428L32.9428 43.6094C32.4221 44.1301 31.5779 44.1301 31.0572 43.6094L24.3905 36.9428C23.8698 36.4221 23.8698 35.5778 24.3905 35.0572C24.9112 34.5365 25.7554 34.5365 26.2761 35.0572L32 40.781L45.7239 27.0572C46.2446 26.5365 47.0888 26.5365 47.6095 27.0572Z",fill:"#4F545C"})),Se=()=>r.createElement("svg",{width:"72",height:"72",viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{cx:"36",cy:"36",r:"36",fill:"#FFEEEE"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.037 23.0441C34.636 22.7068 35.3119 22.5297 35.9994 22.5297C36.6868 22.5297 37.3627 22.7068 37.9618 23.0441C38.5608 23.3814 39.0628 23.8674 39.4194 24.4552L39.4232 24.4615L50.7165 43.3148L50.7274 43.3332C51.0766 43.9381 51.2614 44.6238 51.2634 45.3223C51.2653 46.0207 51.0844 46.7075 50.7385 47.3143C50.3926 47.9211 49.8939 48.4267 49.2919 48.7809C48.69 49.1351 48.0058 49.3256 47.3074 49.3332L47.2927 49.3334L24.6914 49.3333C23.993 49.3256 23.3088 49.1351 22.7068 48.7809C22.1048 48.4267 21.6061 47.9211 21.2602 47.3143C20.9144 46.7075 20.7334 46.0207 20.7354 45.3223C20.7373 44.6238 20.9221 43.9381 21.2714 43.3332L21.2822 43.3148L32.5756 24.4615L32.5794 24.4552C32.9359 23.8674 33.4379 23.3814 34.037 23.0441ZM34.861 25.8355L23.5763 44.6744C23.4627 44.8742 23.4027 45.0999 23.402 45.3297C23.4014 45.5626 23.4617 45.7915 23.577 45.9938C23.6923 46.196 23.8585 46.3646 24.0592 46.4826C24.2581 46.5997 24.4839 46.6631 24.7146 46.6667H47.2842C47.5148 46.6631 47.7407 46.5997 47.9396 46.4826C48.1402 46.3646 48.3065 46.196 48.4218 45.9938C48.5371 45.7915 48.5974 45.5626 48.5967 45.3297C48.5961 45.0999 48.536 44.8742 48.4225 44.6745L37.1394 25.8382L37.1378 25.8355C37.019 25.6408 36.8523 25.4797 36.6535 25.3678C36.4538 25.2554 36.2285 25.1963 35.9994 25.1963C35.7702 25.1963 35.5449 25.2554 35.3452 25.3678C35.1465 25.4797 34.9797 25.6408 34.861 25.8355ZM35.9997 30.6667C36.7361 30.6667 37.333 31.2636 37.333 32V37.3333C37.333 38.0697 36.7361 38.6667 35.9997 38.6667C35.2633 38.6667 34.6663 38.0697 34.6663 37.3333V32C34.6663 31.2636 35.2633 30.6667 35.9997 30.6667ZM35.9997 41.3333C35.2633 41.3333 34.6663 41.9303 34.6663 42.6667C34.6663 43.403 35.2633 44 35.9997 44H36.013C36.7494 44 37.3463 43.403 37.3463 42.6667C37.3463 41.9303 36.7494 41.3333 36.013 41.3333H35.9997Z",fill:"#C83939"})),Ie="Order cancelled successfully",$e="Cancellation request submitted successfully",ke="An error occurred while submitting your request",Re="Cancellation request got rejected. Kindly contact the store";var Le=e=>{var t,a;const[n,l]=(0,r.useState)({}),s=me.p.getInstance(),[d,c]=(0,r.useState)(""),[m,p]=(0,r.useState)(!1),[u,g]=(0,r.useState)(!1),h=(0,f.iP)(),[x,v]=(0,r.useState)(0),[b,w]=(0,r.useState)(!1),[_,E]=(0,r.useState)(!0),[y,C]=(0,r.useState)(!0),[N,S]=(0,r.useState)("");(0,r.useEffect)((()=>{let t;return m&&(t=setInterval((()=>{v((a=>b||80!==parseInt(a.toString())?a<=100?a+.1:(clearInterval(t),a):(a+=1,s.cancelOrder(e.orderId,n.header,d).then((t=>{var a;if(t&&Object.keys(t).length&&200===t.status){if(t.cancellationRequest&&"REJECTED"===t.cancellationRequest.status)return C(!1),S(Re),w(!0),void e.reloadDbOrder();C(!0),S(e.autoCancellation||"ACCEPTED"===(null===(a=t.cancellationRequest)||void 0===a?void 0:a.status)?Ie:$e)}else C(!1),S(ke);w(!0),E(!1),e.reloadDbOrder()})).catch((()=>{w(!0),C(!1),S(ke),E(!1),e.reloadDbOrder()})),a)))}),1)),()=>{clearInterval(t)}}),[m,b]);const{colors:I}=(0,i.useTheme)(),$=()=>{e.closeModal()};return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement(ye,{onClick:()=>{$()}},r.createElement("div",{className:"cancelOrderWrapper",onClick:e=>{e.stopPropagation()}},r.createElement(r.Fragment,null,r.createElement("div",{className:"cancelOrderWrapper__header",id:"mod-header"},r.createElement("div",{className:"cancelOrderWrapper__topSection"},r.createElement("span",{className:"cancelOrderWrapper__topSection__header"},_?"Cancel order":""),(0,Ce.J)({toggleModal:$}))),_&&r.createElement(r.Fragment,null,r.createElement("div",{className:"cancelOrderWrapper__dropdown "+(u?"cancelOrderWrapper__dropdown__disabled":"")},r.createElement(o.gK,{placeHolder:"REASON (OPTIONAL)",dropdataPosition:h?"UP":"DOWN",value:n.header,onChange:(e,t)=>((e,t)=>{l(t)})(0,t),name:"Reason",options:[{id:1,header:"Issues with shipping"},{id:2,header:"Found better price elsewhere "},{id:3,header:"Order created by mistake"},{id:4,header:"Duplicate Order"},{id:5,header:"I need to make changes in my order"},{id:6,header:"Other\u2026"}]})),r.createElement("div",{className:""+(u?"cancelOrderWrapper__textArea__disabled":"")},r.createElement(o.Ki,{header:"Additional comments\u2026",value:d,onChange:e=>{c(e.target.value)},id:"1",name:"comment",isRequired:!1})),m?r.createElement(r.Fragment,null,r.createElement("div",{className:"cancelOrderWrapper__progressBar"},r.createElement("span",{style:{width:`${x}%`}})),r.createElement("div",{className:"cancelOrderWrapper__undo-cancellation "+(x>=80?"cancelOrderWrapper__undo-cancellation__disableBtn":""),onClick:()=>{x<=80&&(v(0),p(!1),g(!1))}},r.createElement("span",{className:"cancelOrderWrapper__undo-cancellation__text"},"Stop cancellation"))):r.createElement("div",{className:"cancelOrderWrapper__cancel-btn"},r.createElement(o.qz,{buttonStyle:"primary",buttonSize:"large",buttonType:"parent-relative",className:"bottomSection__checkLocation",backgroundColor:null!==(t=I.brandMain)&&void 0!==t?t:I.shade4,click:()=>{g(!0),p(!0)}},r.createElement("span",{className:"cancelOrderWrapper__btn-text"},"Request cancellation"))))),!_&&r.createElement("div",{className:"cancelOrderWrapper__alert"},b&&r.createElement("div",{className:"cancelOrderWrapper__alert__icon"},y?r.createElement(Ne,null):r.createElement(Se,null)),r.createElement("div",{className:"cancelOrderWrapper__alert__message"},r.createElement("span",null,N.length?N:"Loading...")),r.createElement("div",{className:"cancelOrderWrapper__alert__done-btn",style:{marginTop:y?"52px":"28px"}},r.createElement(o.qz,{buttonStyle:"primary",buttonSize:"large",buttonWidth:"30%",buttonType:"parent-relative",className:"cancelOrderWrapper__alert__done-btn__borderRadius",backgroundColor:null!==(a=I.brandMain)&&void 0!==a?a:I.shade4,click:()=>{$()}},r.createElement("span",{className:"cancelOrderWrapper__btn-text"},"Done"))))))))};const Oe="ANY_TIME",Fe="BEFORE_SHIPPED",Pe="TIME_BOUND",Me=e=>{var t;const{store:a}=(0,de.o)(),n=null===(t=null===a||void 0===a?void 0:a.meta)||void 0===t?void 0:t.currency;return r.createElement("div",{className:"left-wrapper left-wrapper-no-login"},r.createElement("div",{className:"details"},r.createElement("span",{className:"title4"},"Product Details"),r.createElement(oe,{reviewItems:e.reviewItems,currency:n,openLoginPopup:e.login,showNoLoginReviews:e.showNoLoginReviews})))},De=e=>{const t=(0,f.iP)();return r.createElement("div",{className:"right-wrapper"},r.createElement("div",{className:"details margin-t64"},r.createElement("div",{className:"summary-login"},"To view more details about your order summary..."),r.createElement("div",{className:"footer"},r.createElement(c,{buttonName:"Login",buttonStyle:"primary",buttonSize:"small",click:e.login}))),t&&r.createElement("div",{className:"divider--wrapper"},r.createElement("div",{className:"divider-button"},r.createElement("span",null,"OR"))),r.createElement("div",{className:"details row-gap"},r.createElement("div",{className:"browse"},"Browse exciting products on our home page..."),r.createElement("div",{className:"footer"},r.createElement(l,{buttonName:"Continue Shopping",buttonStyle:"primary",buttonSize:"small",click:e.actionService.redirectToHome.bind(e.actionService)}))))};const qe=i.default.div`
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

  .margin-unset {
    margin: unset !important;
  }

  .disable-div {
    pointer-events: none;
  }

  .disable {
    opacity: 0.3;
  }

  .imp-star {
    color: #d53434;
  }

  .returnorderwrapper {
    width: 406px;
    background: #ffffff;
    border-radius: 8px;

    @media (max-width: 768px) {
      max-width: unset;
      width: 100%;
      padding: 0px;
      border-radius: 8px 8px 0px 0px;
    }

    &__items {
      &.setup-height {
        max-height: 415px;
        overflow-x: hidden;
        padding: 0px 16px;
        @media (max-width: 768px) {
          max-height: 544px;
          overflow-y: scroll;
        }
      }
    }

    &__btn {
      padding: 16px;

      @media (max-width: 768px) {
        padding: 8px 16px;
        box-shadow: 0px -4px 8px rgb(0 0 0 / 8%);
      }
    }

    &__btn-text {
      ${e=>e.theme.fonts.buttonSmall};
      color: ${e=>e.theme.colors.tint3};
    }

    &__header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (max-width: 768px) {
      position: fixed;
      bottom: 0;
      width: 100%;
    }

    &__top-section {
      display: flex;
      justify-content: space-between;
      padding: 16px;

      &.left-div {
        justify-content: left;

        svg {
          display: inline-block;
          margin-right: 16px;
        }
      }

      &.right-div {
        margin-left: auto;
        margin-right: 0px;
        border-bottom: 0px solid;
      }

      @media (max-width: 768px) {
        margin-top: 0;
        padding: 16px;
        border-bottom: 1px solid #d6dbe2;
      }

      &__header {
        display: block;
        ${e=>e.theme.fonts.title3};
        color: ${e=>e.theme.colors.textPrimary};

        @media (max-width: 768px) {
          display: inline-block;
          ${e=>e.theme.fonts.title3Mobile};
          color: ${e=>e.theme.colors.shade1};
        }
      }
    }

    &__chevron {
      width: 24px;
      display: inline-block;
      margin-right: 16px;
    }
  }

  @media (max-width: 768px) {
    bottom: 0px;
    width: 100%;
  }
`;var Te=a(82223);const Ae=i.default.div`
  .returnitem {
    &__item {
      display: flex;
      width: 100%;

      &.margin-t-b {
        margin: 8px auto;
      }

      @media (max-width: 768px) {
        max-width: 100%;
      }

      &__right {
        margin-left: 16px;
        width: calc(100% - 80px);
      }

      &__checkbox {
        margin-right: 11px;
        position: relative;

        input[type="checkbox"] {
          height: 18px;
          width: 18px;
        }

        &__style {
          border-radius: 4px;
          accent-color: ${e=>e.theme.colors.success};
        }
      }

      &__img {
        width: 64px;
        height: 64px;
        border-radius: 4px;
      }

      &__description {
        padding: 16px;
        display: flex;
        width: 100%;
        background: #ffffff;
        border-top: 1px solid ${e=>e.theme.colors.tint2};
        border-bottom: 1px solid ${e=>e.theme.colors.tint2};

        @media (max-width: 768px) {
          max-width: 100%;
        }

        &__header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          ${e=>e.theme.fonts.captionBold};
          color: ${e=>e.theme.colors.shade1};

          @media (max-width: 768px) {
            ${e=>e.theme.fonts.captionBoldMobile};
          }
        }

        &__deleteIcon {
          width: 24px;
          height: 24px;
        }

        &__variant {
          display: flex;
          margin-bottom: 16px;

          &__text {
            display: flex;
            align-items: center;

            ${e=>e.theme.fonts.caption};
            color: ${e=>e.theme.colors.shade2};

            @media (max-width: 768px) {
              ${e=>e.theme.fonts.captionBoldMobile};
            }
          }
        }

        &__qty-price {
          display: flex;
        }

        &.with-checkbox {
          border-radius: 4px;
          border-right: 1px solid ${e=>e.theme.colors.tint2};
          border-left: 1px solid ${e=>e.theme.colors.tint2};
          width: calc(100% - 29px);
        }
      }
    }
  }

  .qty {
    margin-left: 16px;
    &__title {
      ${e=>e.theme.fonts.caption};
      color: ${e=>e.theme.colors.shade1};

      @media (max-width: 768px) {
        ${e=>e.theme.fonts.captionMobile};
      }
    }

    &__amt {
      ${e=>e.theme.fonts.captionBold};
      color: ${e=>e.theme.colors.shade1};
    }
  }

  .price {
    &__title {
      ${e=>e.theme.fonts.caption};
      color: ${e=>e.theme.colors.shade1};
    }

    &__amt {
      ${e=>e.theme.fonts.captionBold};
      color: ${e=>e.theme.colors.shade1};
    }
  }

  .colorbox {
    display: inline-block;
    width: 12px;
    margin-right: 2px;
    height: 12px;
    border-radius: 1px;
    border: 1px solid #000000;

    &__dot {
      display: inline-block;
      margin: 0 2px;
    }
  }

  @media (max-width: 768px) {
    bottom: 0px;
    width: 100%;
  }
`,Be=e=>{const{index:t,showCheckBox:a,selectedIdxList:n,setSelectedIdxList:i,element:o,deleteWholeItem:l}=e;return r.createElement(Ae,null,r.createElement("div",{className:"returnitem__item "+(a?"margin-t-b":"")},a&&r.createElement("div",{className:"returnitem__item__checkbox"},r.createElement("div",null,r.createElement("input",{type:"checkbox",className:"returnitem__item__checkbox__style",checked:n.includes(t),value:t,onChange:e=>{const t=parseInt(e.target.value);if(n.includes(t)){const e=n.indexOf(t);n.splice(e,1),i([...n])}else{n.push(t);const e=[...n];i(e)}}}))),r.createElement("div",{className:"returnitem__item__description "+(a?"with-checkbox":"")},r.createElement("div",{className:"returnitem__item__img"},r.createElement(Te.Z,{src:o.image||"http://www.w3.org/2000/svg",hideBackgroundColor:!0,showBlurredBackground:!1,alt:""})),r.createElement("div",{className:"returnitem__item__right"},r.createElement("div",{className:"returnitem__item__description__header"},r.createElement("div",null,o.name||"-"),!a&&r.createElement("div",{onClick:l},r.createElement("div",{className:"returnitem__item__description__deleteIcon"},r.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/frontend-icons%2Fdeleteicon.png?alt=media&token=3428539c-00d2-4267-85ce-73553b91e2bf"})))),(o.typeVariant||o.colorVariant)&&r.createElement("div",{className:"returnitem__item__description__variant"},r.createElement("div",{className:"returnitem__item__description__variant__text"},o.colorVariant&&r.createElement(r.Fragment,null,r.createElement("span",{className:"colorbox",style:{background:o.colorVariant}}),r.createElement("span",{className:"colorbox__dot"},"\u2022")),o.typeVariant?`${o.typeVariant}`:null)),r.createElement("div",{className:"returnitem__item__description__qty-price"},r.createElement("div",{className:"price"},r.createElement("div",{className:"price__title"},"Price"),r.createElement("div",{className:"price__amt"},"\u20b9",o.price||"0")),r.createElement("div",{className:"qty"},r.createElement("div",{className:"qty__title"},"Qty"),r.createElement("div",{className:"qty__amt"},o.quantity||"0")))))))},je=new F.m,ze=async e=>{const t=[],a=[];for(let r=0;r<e.length;r++)a.push(je.uploadImage(e[r],"cancelOrder"));await Promise.all(a);for(let r=0;r<e.length;r++)t.push(e[r].urlToSave?e[r].urlToSave:"");return t},He=[{id:1,header:"Specifications not matching product"},{id:2,header:"Defective or damaged product"},{id:3,header:"Fake product"},{id:4,header:"Wrong product delivered"},{id:5,header:"Sizing issue"},{id:6,header:"Changed my mind"},{id:7,header:"Other"}],Ue="Return request sent successfully",Ze="Return requests sent successfully",We="An error occurred while submitting your request",Ve=i.default.div`
  .itr-box {
    width: 36px;
    height: 36px;
  }

  .loader-box {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;

    &__loader {
      margin: 16px auto;
    }
  }

  .returnorderformwrapper {
    &__items {
      &__maxheight {
        max-height: 646px;

        &.enable-scroll {
          max-height: 646px;
          overflow-y: scroll;
        }

        @media (max-width: 768px) {
          max-height: 584px;
          overflow-y: scroll;
        }
      }
    }

    &__return-config {
      border-bottom: 1px solid ${e=>e.theme.colors.tint2};
      padding: 16px;

      &__title {
        ${e=>e.theme.fonts.bodyRegular};
        color: ${e=>e.theme.colors.shade2};
        margin-bottom: 8px;

        @media (max-width: 768px) {
          ${e=>e.theme.fonts.bodyRegularMobile};
        }
      }

      &__itr {
        display: flex;

        input {
          text-align: center;
        }

        &__number {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 56px;
          margin: auto 8px;
          height: 36px;
          background: #ffffff;
          border: 1px solid ${e=>e.theme.colors.tint2};
          border-radius: 4px;
        }
      }
    }

    &__return-desc {
      padding: 16px;
      border-bottom: 1px solid ${e=>e.theme.colors.tint2};

      &__title {
        ${e=>e.theme.fonts.bodyRegular};
        color: ${e=>e.theme.colors.shade2};

        @media (max-width: 768px) {
          ${e=>e.theme.fonts.bodyRegularMobile};
        }
      }
    }

    &__dropdown {
      margin: 8px auto;

      &__disabled {
        opacity: 0.5;
        pointer-events: none;
        background: ${e=>e.theme.colors.tint2};
      }
    }

    &__textarea {
      &__disabled {
        opacity: 0.5;
        pointer-events: none;
        background: ${e=>e.theme.colors.tint2};
      }
    }
  }

  .disable-div {
    pointer-events: none;
  }

  .disable {
    opacity: 0.3;
  }

  .imp-star {
    color: #d53434;
  }

  @media (max-width: 768px) {
    bottom: 0px;
    width: 100%;
  }
`,Ge=i.default.div`
  .alertcomponentwrapper {
    &__btn-text {
      ${e=>e.theme.fonts.buttonSmall};
      color: ${e=>e.theme.colors.tint3};
    }

    &__alert {
      &__icon {
        margin: 16px auto;

        svg {
          display: block;
          margin: auto;
        }
      }

      &__message {
        padding: 0px 59px;
        text-align: center;
        ${e=>e.theme.fonts.title2Mobile};
        color: ${e=>e.theme.colors.shade2};
      }

      &__done-btn {
        justify-content: center;
        display: flex;
        padding: 16px;

        &__borderRadius {
          border-radius: 4px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    bottom: 0px;
    width: 100%;
  }
`,Je=e=>{var t;const{isResponseAvailable:a,isSuccessFulResponse:n,AlertMessge:l,closeModal:s}=e,{colors:d}=(0,i.useTheme)();return r.createElement(Ge,null,r.createElement("div",{className:"alertcomponentwrapper__alert"},a&&r.createElement("div",{className:"alertcomponentwrapper__alert__icon"},n?r.createElement(Ne,null):r.createElement(Se,null)),r.createElement("div",{className:"alertcomponentwrapper__alert__message"},r.createElement("span",null,l.length?l:"Loading...")),r.createElement("div",{className:"alertcomponentwrapper__alert__done-btn",style:{marginTop:n?"12px":"24px"}},r.createElement(o.qz,{buttonStyle:"primary",buttonSize:"large",buttonWidth:"30%",buttonType:"parent-relative",className:"alertcomponentwrapper__alert__done-btn__borderRadius",backgroundColor:null!==(t=d.brandMain)&&void 0!==t?t:d.shade4,click:()=>{s()}},r.createElement("span",{className:"alertcomponentwrapper__btn-text"},"Done")))))},Qe=i.default.div`
  .buttoncomponentwrapper {
    &__return-btn {
      padding: 16px;

      @media (max-width: 768px) {
        padding: 8px 16px;
        box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.08);
      }
    }

    &__btn-text {
      ${e=>e.theme.fonts.buttonSmall};
      color: ${e=>e.theme.colors.tint3};
    }

    &__progressBar {
      box-sizing: content-box;
      position: relative;
      padding: 0 16px;
      border-radius: 25px;
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
    }

    &__progressBar > span {
      display: block;
      height: 4px;
      background-color: ${e=>e.theme.colors.brandMain};
      background-image: linear-gradient(
        center bottom,
        rgb(43, 194, 83) 37%,
        rgb(84, 240, 84) 69%
      );
      position: relative;
      overflow: hidden;
    }

    &__undo-cancellation {
      cursor: pointer;
      text-align: center;
      padding: 16px;
      margin-bottom: -4px;

      @media (max-width: 768px) {
        margin-bottom: 0px;
        padding: 16px;
      }

      &__text {
        ${e=>e.theme.fonts.buttonSmall};
        color: ${e=>e.theme.colors.shade2};
      }

      &__disableBtn {
        cursor: no-drop;

        span {
          color: ${e=>e.theme.colors.shade3} !important;
        }
      }
    }
  }

  @media (max-width: 768px) {
    bottom: 0px;
    width: 100%;
  }
`,Ye=e=>{var t;const{isDisabled:a,finalSubmit:n,currentIdx:l,selectedOrders:s,timer:d,clickedUndoCancellation:c}=e,{colors:m}=(0,i.useTheme)();return r.createElement(Qe,null,a?r.createElement(r.Fragment,null,r.createElement("div",{className:"buttoncomponentwrapper__progressBar"},r.createElement("span",{style:{width:`${d}%`}})),r.createElement("div",{className:"buttoncomponentwrapper__undo-cancellation "+(d>=80?"buttoncomponentwrapper__undo-cancellation__disableBtn":""),onClick:()=>{d<=80&&c()}},r.createElement("span",{className:"buttoncomponentwrapper__undo-cancellation__text"},"Cancel return request"))):r.createElement("div",{className:"buttoncomponentwrapper__return-btn"},r.createElement(o.qz,{buttonStyle:"primary",buttonSize:"large",buttonType:"parent-relative",backgroundColor:null!==(t=m.brandMain)&&void 0!==t?t:m.shade4,click:n},r.createElement("span",{className:"buttoncomponentwrapper__btn-text"},l===s.length-1?"Submit return request":"Next"))))},Ke=()=>r.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M12.4721 4.47145C12.7324 4.2111 12.7324 3.78899 12.4721 3.52864C12.2117 3.26829 11.7896 3.26829 11.5292 3.52864L8.00065 7.05723L4.47206 3.52864C4.21171 3.26829 3.7896 3.26829 3.52925 3.52864C3.2689 3.78899 3.2689 4.2111 3.52925 4.47145L7.05784 8.00004L3.52925 11.5286C3.2689 11.789 3.2689 12.2111 3.52925 12.4714C3.7896 12.7318 4.21171 12.7318 4.47206 12.4714L8.00065 8.94285L11.5292 12.4714C11.7896 12.7318 12.2117 12.7318 12.4721 12.4714C12.7324 12.2111 12.7324 11.789 12.4721 11.5286L8.94346 8.00004L12.4721 4.47145Z",fill:"white"})),Xe=i.default.div`
  .imageuploadsectionWrapper {
    &__imgs {
      padding: 16px 16px 0px;

      &__title {
        ${e=>e.theme.fonts.bodyRegular};
        color: ${e=>e.theme.colors.shade2};

        @media (max-width: 768px) {
          ${e=>e.theme.fonts.bodyRegularMobile};
        }
      }

      &__upload-error {
        ${e=>e.theme.fonts.bodySmall};
        color: ${e=>e.theme.colors.error};

        @media (max-width: 768px) {
          ${e=>e.theme.fonts.bodyRegularMobile};
        }
      }

      &__upload-notification {
        ${e=>e.theme.fonts.bodySmall};
        color: ${e=>e.theme.colors.success};

        @media (max-width: 768px) {
          ${e=>e.theme.fonts.bodyRegularMobile};
        }
      }
    }
  }

  .upload {
    display: flex;
    margin: 8px 0;

    &__info {
      color: ${e=>e.theme.colors.shade3};
      height: 56px;
      width: 208px;
      display: flex;
      align-items: center;
    }

    &__container {
      svg {
        width: 100% !important;
      }

      &.uploaded-img {
        border-radius: 4px;
        border: 0px dashed ${e=>e.theme.colors.lightGray2};
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
        margin: auto 4px;
      }

      &__img-chamber {
        width: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;

        &__uploaded-img-pic {
          width: 100% !important;
          height: 100% !important;
        }
      }

      background: ${e=>e.theme.colors.tint2};
      min-width: 56px;
      width: 100%;
      height: 104px;
      min-height: 56px;
      border: 1px dashed ${e=>e.theme.colors.lightGray2};
      box-sizing: border-box;
      border-radius: 4px;
      display: flex;
      position: relative;

      &.error {
        border: 1px dashed ${e=>e.theme.colors.error};
      }

      &--delete {
        position: absolute;
        right: 0;
        display: flex;
        height: 20px;
        width: 20px;
        z-index: 1;
      }
    }

    img {
      opacity: 0.9;
      width: 40px;
      height: 40px;
      margin: auto;
      border-radius: 4px;
      overflow: hidden;
    }

    &__error {
      background: ${e=>e.theme.colors.shade1};
      opacity: 0.6;
      position: absolute;
      width: 54px;
      height: 54px;
      border-radius: 4px;
      display: flex;
    }
  }

  .disable-div {
    pointer-events: none;
  }

  @media (max-width: 768px) {
    bottom: 0px;
    width: 100%;
  }
`,et=e=>{const{disableFields:t,images:a,currentIdx:n,imageError:i,setImages:o,setImageError:l}=e,[s,d]=(0,r.useState)("");return r.createElement(Xe,null,r.createElement("div",{className:"imageuploadsectionWrapper__imgs"},r.createElement("div",{className:"imageuploadsectionWrapper__imgs__title"},"Add photos of this item to explain the issue"," ",r.createElement("span",{className:"imp-star"},"*")),r.createElement("div",{className:"upload "+(t?"disable-div":"")},a&&a[n]&&a[n].length<=2&&r.createElement("div",{className:"upload__container "+(i.length?"error":"")},r.createElement("div",{className:"upload__container__img-chamber",onClick:()=>{document.getElementById(`saveImagesContainer-${n}`).click()}},r.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/frontend-icons%2Fcamera_add.png?alt=media&token=1cb37067-bf76-42e4-a848-d644c690c693"}))),a&&a[n]&&a[n].length?(a[n]||[]).map(((e,t)=>r.createElement("div",{className:"upload__container uploaded-img",key:t},r.createElement("img",{className:"upload__container__img-chamber__uploaded-img-pic",src:e.base64String||"http://www.w3.org/2000/svg",alt:""}),r.createElement("div",{className:"upload__container--delete",onClick:()=>(e=>{const t=[...a[n]];t.splice(e,1),a[n]=t,o([...a])})(t)},r.createElement(Ke,null))))):null,r.createElement("input",{key:n,id:`saveImagesContainer-${n}`,type:"file",accept:"image/*",name:"myfile",multiple:!0,onClick:e=>{e.target.value=null},hidden:!0,onChange:e=>{const t=Array.from(e.target.files),r=[...a[n]];t.forEach((e=>{const t=new FileReader;t.readAsDataURL(e),t.onload=async()=>{const t=new M,s=new F.M;s.isNew=!0;const{newData:c,newFile:m}=await t.compressImage(e,e.name,e.type);m.size>1e6?l(`File size too large: ${null===m||void 0===m?void 0:m.name}`):(i.length&&l(""),s.base64String=c,s.fileData=m,s.uuid=L.Z(),r.push(s),r.length>3&&d("Note: Only 3 images allowed"),a[n]=r.slice(0,3),o([...a]))}}))}})),i&&r.createElement("span",{className:"imageuploadsectionWrapper__imgs__upload-error"},i||"Error"),s&&r.createElement("div",{className:"imageuploadsectionWrapper__imgs__upload-notification"},s)))},tt=e=>{var t,a;return r.createElement("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{opacity:"0.2",cx:"44",cy:"44",r:"44",fill:null!==(t=null===e||void 0===e?void 0:e.brandMain)&&void 0!==t?t:"#DF4718"}),r.createElement("path",{d:"M62 44C62 47.5601 60.9443 51.0402 58.9665 54.0003C56.9886 56.9603 54.1774 59.2675 50.8883 60.6298C47.5992 61.9922 43.98 62.3487 40.4884 61.6541C36.9967 60.9596 33.7894 59.2453 31.2721 56.7279C28.7547 54.2106 27.0404 51.0033 26.3459 47.5116C25.6513 44.02 26.0078 40.4008 27.3702 37.1117C28.7325 33.8226 31.0397 31.0114 33.9997 29.0335C36.9598 27.0557 40.4399 26 44 26",stroke:null!==(a=null===e||void 0===e?void 0:e.brandMain)&&void 0!==a?a:"#DF4718",strokeWidth:"4",strokeLinecap:"round"}),r.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",values:"0 0 0; 360 0 0",dur:"3s",repeatCount:"indefinite"}))};var at=e=>{var t,a,n;const{orderToReturn:l,currentIdx:s,setCurrentIdx:d,reloadDbOrder:c,setSelectedOrders:m,selectedOrders:p,closeModal:u,setSubmitAll:g,setShowHeader:h,orderId:x,setShowForm:v,selectedIdxList:b,showLoader:w,setShowLoader:_}=e;(0,r.useEffect)((()=>{0===p.length&&u()}),[p]);const{comments:E,setComments:y,reasons:C,setreasons:N,images:S,setImages:I,quantity:$,setquantity:k,timer:R,setTimer:L,commentError:O,setCommentError:F,reasonError:P,setreasonError:M,imageError:D,setImageError:q,isResponseAvailable:T,isDisabled:A,setIsDisabled:B,disableFields:j,setDisableFields:z,alertSection:H,showtopSection:U,setShowtopSection:Z,isSuccessFulResponse:W,AlertMessge:V,submitReturnRequest:G,finalSubmit:J}=(()=>{const[e,t]=(0,r.useState)([]),[a,n]=(0,r.useState)([]),[i,o]=(0,r.useState)([]),[l,s]=(0,r.useState)([]),[d,c]=(0,r.useState)(0),[m,p]=(0,r.useState)(""),[u,g]=(0,r.useState)(""),[h,x]=(0,r.useState)(""),v=me.p.getInstance(),[b,f]=(0,r.useState)(!1),[w,_]=(0,r.useState)(!1),[E,y]=(0,r.useState)(!1),[C,N]=(0,r.useState)(!1),[S,I]=(0,r.useState)(!0),[$,k]=(0,r.useState)(!0),[R,L]=(0,r.useState)("");return{comments:e,setComments:t,reasons:a,setreasons:n,images:i,setImages:o,quantity:l,setquantity:s,timer:d,setTimer:c,submitReturnRequest:(t,r,n,o,s,d,c)=>{if(!b&&80===parseInt(t.toString())){t+=1;const d=[],m=r.length>1;for(let t=0;t<r.length;t++)ze(i[t]).then((i=>{d.push({itemIndex:r[t].itemIndex,reason:a[t].header,comment:e[t]||"",images:i,returnQuantity:l[t]}),d.length===r.length&&v.returnOrder(n,d).then((e=>{e&&Object.keys(e).length&&200===e.status?(k(!0),L(m?Ze:Ue)):(k(!1),L(We)),f(!0),N(!0),o(!1),c(!1),s()})).catch((()=>{f(!0),k(!1),L(We),N(!0),o(!1),c(!1),s()}))}));return t}return t<=100?t+.1:(clearInterval(d),I(!1),c(!0),t)},commentError:m,setCommentError:p,reasonError:u,finalSubmit:(t,r,n,o)=>{var d,c;p(""),g(""),x("");let m=!1;l&&!l[t]&&(l[t]=1,s([...l])),a&&0!==((null===(d=a[t])||void 0===d?void 0:d.header)||"").length||(g("Please add a reason "),m=!0),a&&"Other"===(null===(c=a[t])||void 0===c?void 0:c.header)&&0===(e[t]||"").length&&(p("Please tell us why you want to return this product"),m=!0),(e[t]||"").length>500&&(p("Maximum limit: 500 characters"),m=!0),(!i||i&&0===i[t].length)&&(x("Please add atleast one image"),m=!0),m||(t<=n.length-2?r(t+1):o())},setreasonError:g,imageError:h,setImageError:x,isResponseAvailable:b,setIsResponseAvailable:f,isDisabled:w,setIsDisabled:_,disableFields:E,setDisableFields:y,alertSection:C,setAlertSection:N,showtopSection:S,setShowtopSection:I,isSuccessFulResponse:$,setIsSuccessFulResponse:k,AlertMessge:R,setAlertMessge:L}})(),{colors:Q}=(0,i.useTheme)();(0,r.useEffect)((()=>{b.sort(((e,t)=>e-t));const e=[];for(let t=0;t<b.length;t++)e.push(l[b[t]]),$[t]=1,S[t]=[];k([...$]),I([...S]),m(e),Z(!0)}),[]),(0,r.useEffect)((()=>{let e;return A&&(e=setInterval((async()=>{L((t=>G(t,p,x,h,c,e,_)))}),1)),()=>{clearInterval(e)}}),[A]);const Y=()=>{z(!0),B(!0),g(!0)},K=(0,f.iP)();return r.createElement(Ve,null,r.createElement(r.Fragment,null,U&&r.createElement(r.Fragment,null,r.createElement("div",{className:"returnorderformwrapper__items"},r.createElement("div",{className:"returnorderformwrapper__items__maxheight "+(D.length||O.length||P.length?"enable-scroll":"")},r.createElement("span",{className:""+(j?"disable-div":"")},r.createElement(Be,{index:s,deleteWholeItem:()=>{const e=p.length;p.splice(s,1),$.splice(s,1),C.splice(s,1),E.splice(s,1),S.splice(s,1),v(p.length>0),0===p.length&&u(),s===e-1&&d(s-1),m([...p]),k([...$]),N([...C]),y([...E]),I([...S])},showCheckBox:!1,selectedIdxList:b,element:p[s]})),p[s].quantity>1&&r.createElement("div",{className:"returnorderformwrapper__return-config "+(j?"disable-div":"")},r.createElement("div",{className:"returnorderformwrapper__return-config__title"},"Select return quantity"),r.createElement("div",{className:"returnorderformwrapper__return-config__itr"},r.createElement("div",{className:"returnorderformwrapper__return-config__itr__minus itr-box "+($[s]<=1?"disable":"")},r.createElement("img",{onClick:()=>{if($[s]<=1)return $[s]=1,void k([...$]);$[s]-=1,k([...$])},src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/frontend-icons%2Fminusround.png?alt=media&token=07015c96-053b-4f36-9555-5f480077dce6"})),r.createElement("div",null,r.createElement("input",{className:"returnorderformwrapper__return-config__itr__number",type:"text",onChange:e=>{const t=parseInt(e.target.value);t<=p[s].quantity&&t>=1?$[s]=parseInt(e.target.value):""===e.target.value?$[s]=null:$[s]=t<=1?1:p[s].quantity,k([...$])},value:null!==(t=$[s])&&void 0!==t?t:""})),r.createElement("div",{className:"returnorderformwrapper__return-config__itr__plus itr-box "+($[s]===(null===(a=p[s])||void 0===a?void 0:a.quantity)?"disable":"")},r.createElement("img",{onClick:()=>{$[s]!==p[s].quantity&&($[s]+=1,k([...$]))},src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/frontend-icons%2Fplusround.png?alt=media&token=1c030c3a-d2e6-4775-a02a-09b4878ca03b"})))),r.createElement("div",{className:"returnorderformwrapper__return-desc"},r.createElement("div",{className:"returnorderformwrapper__return-desc__title"},"Tell us why you want to return this item"," ",r.createElement("span",{className:"imp-star"},"*")),r.createElement("div",{className:"returnorderformwrapper__dropdown "+(j?"returnorderformwrapper__dropdown__disabled":"")},r.createElement(o.gK,{dropDownUpInMobileView:!0,maxHeightInMobileView:"52px",placeHolder:"REASON",error:0!==(P||"").length,subText:P,dropdataPosition:K?"UP":"DOWN",value:C&&C[s]&&C[s].header?C[s].header:"",onChange:(e,t)=>((e,t)=>{C[s]=t,N([...C]),P.length&&t&&M("")})(0,t),name:"Reason",options:He})),r.createElement("div",{className:"returnorderformwrapper__textarea "+(j?"returnorderformwrapper__textarea__disabled":"")},r.createElement(o.Ki,{header:"ADDITIONAL COMMENTS\u2026",error:0!==(O||"").length,subText:O,value:E&&E[s]||"",onChange:e=>{O.length&&e.target.value.length&&F(""),E[s]=e.target.value,y([...E])},heightInMobileView:"108px",id:s.toString(),name:"comment",isRequired:!1}))),r.createElement(et,{disableFields:j,images:S,currentIdx:s,imageError:D,setImages:I,setImageError:q}))),r.createElement("div",null,r.createElement(Ye,{isDisabled:A,finalSubmit:()=>{J(s,d,p,Y)},currentIdx:s,selectedOrders:p,timer:R,clickedUndoCancellation:()=>{L(0),B(!1),z(!1),g(!1)}}))),H&&r.createElement(Je,{isResponseAvailable:T,isSuccessFulResponse:W,AlertMessge:V,closeModal:u}),!U&&w&&r.createElement("div",{className:"loader-box"},r.createElement("div",{className:"loader-box__loader"},r.createElement(tt,{brandMain:null!==(n=Q.brandMain)&&void 0!==n?n:"#DF4718"})))))};var rt=e=>{var t;const{handleSelectedOrders:a,selectedIdxList:n,setSelectedIdxList:l,orderToReturn:s,setorderToReturn:d,showHeader:c,setShowHeader:m,selectedOrders:p,setSelectedOrders:u,currentIdx:g,setCurrentIdx:h,submitAll:x,setSubmitAll:v,showForm:b,setShowForm:f,showLoader:w,setShowLoader:_}=(()=>{const[e,t]=(0,r.useState)([]),[a,n]=(0,r.useState)([]),[i,o]=(0,r.useState)(!0),[l,s]=(0,r.useState)([]),[d,c]=(0,r.useState)(0),[m,p]=(0,r.useState)(!1),[u,g]=(0,r.useState)(!1),[h,x]=(0,r.useState)(!1);return{handleSelectedOrders:()=>{e.sort(((e,t)=>e-t));const t=[];for(let r=0;r<e.length;r++)t.push(a[e[r]]);s(t),g(e.length>0)},selectedIdxList:e,setSelectedIdxList:t,orderToReturn:a,setorderToReturn:n,showHeader:i,setShowHeader:o,selectedOrders:l,setSelectedOrders:s,currentIdx:d,setCurrentIdx:c,submitAll:m,setSubmitAll:p,showForm:u,setShowForm:g,showLoader:h,setShowLoader:x}})(),{orderId:E,reloadDbOrder:y,closeModal:C,orderItems:N,clickedItemIdx:S}=e;(0,r.useEffect)((()=>{d(N||[]);const e=N.map((function(e){return e.itemIndex})).indexOf(S);n.push(e)}),[]);const{colors:I}=(0,i.useTheme)(),$=()=>{C()};return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement(qe,{onClick:()=>{$()}},r.createElement("div",{className:"returnorderwrapper",onClick:e=>{e.stopPropagation()}},r.createElement(r.Fragment,null,c&&r.createElement("div",{className:"returnorderwrapper__header",id:"mod-header"},!w&&r.createElement("div",{className:`returnorderwrapper__top-section ${b?"left-div":""}  ${x?"disable-div":""} `},b&&r.createElement(r.Fragment,null,r.createElement("div",{className:"returnorderwrapper__chevron"},r.createElement("img",{onClick:()=>{0===g?f(!1):h((e=>e-1))},src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/frontend-icons%2Fchevronleft.png?alt=media&token=3fbe0862-e330-4d06-a760-7303266e6a44"}))),r.createElement("span",{className:"returnorderwrapper__top-section__header"},b?"Return details":"Select items you want to return"),!b&&(0,Ce.J)({toggleModal:$}))),!c&&r.createElement("div",{className:"returnorderwrapper__header",id:"mod-header"},r.createElement("div",{className:"returnorderwrapper__top-section right-div"},(0,Ce.J)({toggleModal:$}))),!b&&r.createElement(r.Fragment,null,r.createElement("div",{className:"returnorderwrapper__items setup-height"},s.map(((e,t)=>r.createElement(Be,{index:t,key:t,showCheckBox:!0,selectedIdxList:n,setSelectedIdxList:l,element:e})))),r.createElement("div",{className:"returnorderwrapper__btn"},r.createElement(o.qz,{buttonStyle:"primary",buttonSize:"large",buttonType:"parent-relative",className:"bottomSection__checkLocation "+(0===n.length?"disable":""),backgroundColor:null!==(t=I.brandMain)&&void 0!==t?t:I.shade4,click:()=>{a()}},r.createElement("span",{className:"returnorderwrapper__btn-text"},"Next")))),b&&r.createElement(at,{selectedIdxList:n,setShowHeader:m,orderId:E,setSubmitAll:v,currentIdx:g,closeModal:C,setShowForm:f,selectedOrders:p,setSelectedOrders:u,reloadDbOrder:y,setCurrentIdx:h,orderToReturn:s,showLoader:w,setShowLoader:_}))))))};var nt=e=>{var t,a,i,c,h,x,v,b,w,E,S,I,$,R,L,O,F,P,M,D,q,T;const{store:A}=(0,de.o)(),[B,j]=(0,r.useState)(!1),[z,V]=(0,r.useState)(),[G,ee]=(0,r.useState)(!1),[ae,re]=(0,r.useState)(!1),[ne,xe]=(0,r.useState)(!1),[ve,ye]=(0,r.useState)(""),[Ce,Ne]=(0,r.useState)(""),[Se,Ie]=(0,r.useState)(!1),[$e,ke]=(0,r.useState)(!0),[Re,qe]=(0,r.useState)(!0),[Te,Ae]=(0,r.useState)(!1),[Be,je]=(0,r.useState)({orderItems:[],reviews:[]}),[ze,He]=(0,r.useState)(""),[Ue,Ze]=(0,r.useState)(),We=(0,y.CG)((e=>e.customerState.isLoggedIn)),Ve=(0,f.iP)(),Ge=new C.O,Je=ce.N.getInstance(),Qe=null===(t=null===A||void 0===A?void 0:A.meta)||void 0===t?void 0:t.currency,Ye=null===(a=null===A||void 0===A?void 0:A.meta)||void 0===a?void 0:a.reviewsDisabled,Ke=N.P.getInstance(),Xe=me.p.getInstance(),et=function(){const e=(0,se.j)();return{reorderOrder:function(t){return e.loadFromCache(),t.order.items.forEach((t=>{const a=e.addItem(t.catalogId,t.productId,t.mrp,t.name,t.quantity,t.colorVariant,t.typeVariant,t.image,t.price,t.skuId);a.maximumOrderQuantity=t.maximumOrderQuantity,a.minimumOrderQuantity=t.minimumOrderQuantity,a.shippingRate=t.shippingRate,a.taxRate=t.taxRate,a.offlineEnabled=t.offlineEnabled,a.maximumOrderQuantity>=1&&a.maximumOrderQuantity<a.quantity&&(a.quantity=a.maximumOrderQuantity),a.minimumOrderQuantity>a.quantity&&(a.quantity=a.minimumOrderQuantity)})),t.id}}}(),tt=null===(c=null===(i=null===z||void 0===z?void 0:z.deliveryInfo)||void 0===i?void 0:i.checkpoints)||void 0===c?void 0:c.length,[at,nt]=(0,r.useState)(0),[it,ot]=(0,r.useState)(),[lt,st]=(0,r.useState)(!1),[dt,ct]=(0,r.useState)(""),[mt,pt]=(0,r.useState)(!1),[ut,gt]=(0,r.useState)(!1),ht=A.meta.hasAccessForFeature(fe.AdvancedEcommerceFeatures.REFERRAL_PROGRAM),xt=(null===(h=A.meta)||void 0===h?void 0:h.isReseller)||!1,{showGreyBackground:vt,cancellationRejected:bt,cancellationSetup:ft,refundMessage:wt,notifierMessage:_t,setNotifierMessage:Et,showNotifier:yt,setShowNotifier:Ct,showOrderCancelledBar:Nt,showCancelProgressBar:St,showPendingCancellationBar:It,showRefundPolicy:$t}=(()=>{const[e,t]=(0,r.useState)("Refund update pending"),[a,n]=(0,r.useState)("If you have queries related to your order cancellation, you can get in touch with us "),[i,o]=(0,r.useState)(!1),[l,s]=(0,r.useState)(!0),[d,c]=(0,r.useState)(!1),[m,p]=(0,r.useState)(!1),[u,g]=(0,r.useState)(!1),[h,x]=(0,r.useState)(!1),[v,b]=(0,r.useState)(!1);return{showGreyBackground:l,cancellationRejected:d,cancellationSetup:e=>{b(we.includes(e.paymentMode));const{cancellationRequest:a,refundDetails:r}=e;if(a)switch(null===a||void 0===a?void 0:a.status){case H:p(!0),s(!1),g(!0),o(!1);break;case U:x(!0),s(!0),g(!1),o(!0);break;case Z:n("Cancellation is not possible for this order. You can choose to return the item(s) once delivered or contact us."),c(!0),s(!0),g(!1),o(!0)}if(r){const e=Ee(r,!1);e&&t(e)}},setNotifierMessage:n,refundMessage:e,setShowNotifier:o,notifierMessage:a,showNotifier:i,showOrderCancelledBar:m,showCancelProgressBar:u,showPendingCancellationBar:h,showRefundPolicy:v}})(),[kt,Rt]=(0,r.useState)(!0),Lt=null===(x=window.location)||void 0===x?void 0:x.href.includes("/review/");(0,r.useEffect)((()=>{Rt(!We&&Lt),Mt()}),[lt]),(0,r.useEffect)((()=>{Se&&Pt()}),[Se]);const Ot=()=>{je({orderItems:[],reviews:[]}),st((e=>!e))};(0,r.useEffect)((()=>{var e;he.V.getReferralSettings(null===(e=A.meta)||void 0===e?void 0:e.id).then((e=>{ot(e.discountValReferrer)}))}),[]);const Ft=async()=>{pe.u.login({}).asObservable().subscribe((async e=>{e&&We&&window.location.reload()}))},Pt=()=>{setTimeout((()=>{const e=document.getElementById("progressBar");e.scrollTop=e.scrollHeight}),50)},Mt=async()=>{var t,a;const r=await qt(e.orderId);if(r){if(r.customerId&&!We&&!Lt)return Ft().then().catch(),Ae(!0),void j(!0);ct(r.subscriptionId),ye(r.uid||e.orderId);const i=new n.Order;i.load(r);let o=!1;for(let e=0;e<(null===(t=(null===i||void 0===i?void 0:i.items)||[])||void 0===t?void 0:t.length);e++)i.items[e].returnRequest&&(Ct(!0),o=!0,Et("Please get in touch with us in case of any queries related to your return request"),(i.refundDetails||(null===(a=null===i||void 0===i?void 0:i.items[e])||void 0===a?void 0:a.returnRequest.status)===W)&&gt(!0));if(o){const e=((null===i||void 0===i?void 0:i.items)||[]).every((e=>{var t;return e.returnRequest&&(null===(t=e.returnRequest)||void 0===t?void 0:t.status)===W}));Ct(!e),pt(!e)}i.resellerDocId&&ee(!0),i.promoCode=i.promoCode||r.dC,At(i),Bt(i),i.paymentAmount=i.paymentAmount/100,i.adjustmentAmount&&(i.total+=i.adjustmentAmount),V(i),i.items.forEach((async e=>{Be.orderItems.push(e),Be.orderItems.length===i.items.length&&(Ye||await Tt(i.customerName,i.address),j(!0))})),Ke.recordGoogleAdsEvent("purchase","ecommerce","order placed",null===i||void 0===i?void 0:i.total,e.orderId);const l=new u;l.load(r,e.orderId),Ze(l),Dt(i)}},Dt=e=>{const t=A.meta.cancellationInformation;if(!t)return;const a=t.cancelCondition;if(e.status!==K)switch(a){case Oe:ke(e.status!==X);break;case Fe:ke(e.status===J||e.status===Q||e.status===Y);break;case Pe:if(null===e||void 0===e?void 0:e.timestamp){const a=(0,ie.Hl)(e.timestamp),r=(new Date).getTime();ke(e.status!==X&&a+1e3*(t.cancelConditionDelay||0)>=r)}else ke(!1);break;default:ke(!0)}(e.status===K||e&&e.cancellationRequest)&&(ke(!1),ft(e))},qt=async e=>Xe.getOrderDetails(e),Tt=async(t,a)=>{var r;const n=new le.C;n.storeId=null===(r=A.meta)||void 0===r?void 0:r.id,Lt||(n.userId=k.C.getItem("authId")),Lt&&(n.orderId=e.orderId);const i=await Ge.fetchReview(Object.assign(Object.assign({},n),{hidden:!0}));Be.orderItems.forEach((r=>{const o=null===i||void 0===i?void 0:i.find((e=>e.catalogId===r.catalogId&&e.productId===r.productId));o?Be.reviews.push(o):(n.catalogId=r.catalogId,n.productId=r.productId,n.orderId=e.orderId,n.rating=0,n.customerName=t,n.address=a,Be.reviews.push(Object.assign({},n)))})),je(Be)},At=e=>{var t,a,r,n,i,o,l,s;const d=null===(a=null===(t=e.customerName)||void 0===t?void 0:t.split("\n")[0])||void 0===a?void 0:a.trim();e.address?Ne(e.address.address+", "+(null===(n=null===(r=e.address.city)||void 0===r?void 0:r.split(",")[0])||void 0===n?void 0:n.trim())+", "+(null===(o=null===(i=e.address.state)||void 0===i?void 0:i.split(",")[0])||void 0===o?void 0:o.trim())+", "+e.address.pinCode):Ne(null===(s=null===(l=e.customerName)||void 0===l?void 0:l.split("Address:")[1])||void 0===s?void 0:s.trim()),e.customerName=d},Bt=e=>{for(const t of e.customFieldsResponse)if("Cod extra charge"===t.question)if("cod"===e.paymentMode)t.answer=`${t.extraPrice} ${Qe}`;else{const a=e.customFieldsResponse.indexOf(t);e.customFieldsResponse.splice(a,1)}},jt=()=>{const t=new ge.C,a=y.ZP.getState().storeState.store.meta.phoneNumber,r=`Hello, I have a query regarding my order(No. ${ve}): \n ${Je.websiteLink()}/pay/${e.orderId}`;t.msgWhatsapp(r,a)},zt=()=>{let t="receipt/"+e.orderId+"/download";const a=y.ZP.getState().configurationState,r=y.ZP.getState().contextState;a.isSubDomain&&(t=`https://${r.username}.bikayi.app/pay/receipt/${e.orderId}/download`),window.open(t)},Ht=()=>{const e=z.items.reduce(((e,t)=>e+((null===t||void 0===t?void 0:t.margin)?null===t||void 0===t?void 0:t.margin:0)),0);return String(e)};return r.createElement(o.Q2,null,ae&&r.createElement(Le,{orderId:e.orderId,autoCancellation:null===(b=null===(v=A.meta)||void 0===v?void 0:v.cancellationInformation)||void 0===b?void 0:b.autoCancel,reloadDbOrder:Ot,closeModal:()=>re(!1)}),ne&&r.createElement(rt,{orderId:e.orderId,clickedItemIdx:at,reloadDbOrder:Ot,closeModal:()=>xe(!1),orderItems:(Be.orderItems||[]).map(((e,t)=>{if(!e.returnRequest){const a=e;return a.itemIndex=t,a}})).filter((e=>!!e))}),!B&&r.createElement("section",{className:"p-0"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-12 d-flex"},r.createElement("div",{className:"error-section m-auto"},r.createElement("h2",{className:"spinner-border"},r.createElement("span",{className:"sr-only"},"Loading..."))))))),B&&!z&&r.createElement(p,{className:"p-0"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-12 d-flex"},r.createElement("div",{className:"error-section m-auto"},Te&&!kt&&r.createElement("div",{className:"text-center"},r.createElement("a",{onClick:e.actionService.redirectToHome.bind(e.actionService),className:""},"Continue Shopping"),r.createElement("div",null,r.createElement("strong",null,"Please login to view order details"),r.createElement("br",null),r.createElement("a",{onClick:Ft,className:"btn btn-solid m-4"},"Login")))))))),r.createElement(m,null,Nt&&!vt&&r.createElement("div",{className:"cancel-bar confirm"},r.createElement("div",{className:"cancel-bar__message"},"Order cancelled")),It&&r.createElement("div",{className:"cancel-bar pending"},r.createElement("div",{className:"cancel-bar__message"},`Cancellation request sent on ${_e(null===(w=null===z||void 0===z?void 0:z.cancellationRequest)||void 0===w?void 0:w.createdAt)||"-"}`)),r.createElement("div",{className:"bg-white"},B&&!!z&&r.createElement("div",{className:"container "+(!We&&Lt?"container-no-login":"")},!kt&&r.createElement("div",{className:"left-wrapper"},yt&&r.createElement("div",{className:"cancel-pending-notifier"},r.createElement("div",{className:"cancel-pending-notifier__container"},r.createElement("div",{className:"cancel-pending-notifier__container__notice"},_t),r.createElement(d,{buttonStyle:"primary",buttonPadding:"8px",buttonSize:"small",click:()=>{jt()},buttonName:r.createElement((()=>r.createElement("div",{className:"btn-container"},r.createElement("div",{className:"btn-container__icon"},r.createElement(ue,null)),r.createElement("div",{className:"m--l--4"},"Contact Us"))),null)}))),dt&&r.createElement(be,{subscriptionId:dt,actionService:e.actionService}),r.createElement("div",{className:`header ${St&&!bt?"header__cancelledOrder":""} ${$t&&!bt||ut?"header__cancelledOrder__refund-policy":""}`},r.createElement("div",{className:"header__details"},r.createElement("div",null,r.createElement("div",{className:"header__details--grayscale title4"},"Order - ",ve),vt&&r.createElement("div",{className:"margin-t8 body-small caption-mobile"},"Order placed : ",z.date),vt&&r.createElement("div",{className:"margin-t4 body-small caption-mobile"},"Total Amt. : ",r.createElement(f.fP,{currency:Qe}),z.total)),!Ve&&vt&&r.createElement("div",{className:"ml-auto"},r.createElement(l,{buttonName:"Download invoice",buttonStyle:"outline",buttonSize:"small",click:zt}))),St&&!bt&&$t&&!ut&&r.createElement("div",{className:"header__cancelOrder"},r.createElement("div",null,wt)),St&&!bt&&r.createElement(_,{key:"cancellation",stage:z.status,orderPlacedDate:_e(z.timestamp),cancellationPlacedDate:_e(null===(E=null===z||void 0===z?void 0:z.cancellationRequest)||void 0===E?void 0:E.createdAt),showCancelledProgressBar:!0,checkPoints:null===(S=z.deliveryInfo)||void 0===S?void 0:S.checkpoints}),vt&&r.createElement("div",{className:"header__status"},r.createElement("div",{className:"header__status--bar"},r.createElement("div",{className:"status-info  caption caption-mobile",onClick:()=>{Ie(!Se);(Ve?tt>2:tt>3)&&qe(!1)}},r.createElement("div",null,"Status",r.createElement("br",null),r.createElement("span",{className:"title4 title4-mobile text-capitalize"},null===(I=z.status)||void 0===I?void 0:I.toLowerCase())),r.createElement("div",{className:"ml-auto d-flex"},!Se&&r.createElement("svg",{className:"my-auto",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z",fill:"#142236"})),Se&&r.createElement("svg",{className:"my-auto",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289Z",fill:"#142236"})))),Se&&!Re&&r.createElement("div",{className:"early-updates body-regular-desktop body-regular-mobile",onClick:()=>{qe(!0)}},"Show earlier updates..."),Se&&r.createElement("div",{id:"progressBar",className:"progressbar"+(Re?" detailed ":" collapsed ")},r.createElement(_,{key:"progress-bar-general",stage:z.status,checkPoints:null===($=z.deliveryInfo)||void 0===$?void 0:$.checkpoints}))),r.createElement("div",{className:"d-flex"},r.createElement("div",{className:"header__status--wrapper"},!!(null===(R=z.deliveryInfo)||void 0===R?void 0:R.eta)&&r.createElement("div",{className:"header__status--details"},r.createElement("div",{className:"caption-bold"},"Estimated time of arrival"),r.createElement("span",{className:"margin-t2 caption"},null===(L=z.deliveryInfo)||void 0===L?void 0:L.eta)),!!(null===(O=z.deliveryInfo)||void 0===O?void 0:O.waybillNo)&&r.createElement("div",{className:"header__status--details"+((null===(F=z.deliveryInfo)||void 0===F?void 0:F.eta)?" header__status--border ":"")},r.createElement("div",{className:"caption-bold"},"Tracking ref no."),r.createElement("div",{className:"d-flex"},r.createElement("span",{className:"margin-t2 caption"},null===(P=z.deliveryInfo)||void 0===P?void 0:P.waybillNo),r.createElement("span",{className:"info caption"},null===(M=z.deliveryInfo)||void 0===M?void 0:M.serviceProvider)))),r.createElement("div",{className:"ml-auto"},!!(null===(D=z.deliveryInfo)||void 0===D?void 0:D.trackingURL)&&!(null===(q=z.deliveryInfo)||void 0===q?void 0:q.checkpoints)&&r.createElement(s,{buttonStyle:"primary",buttonSize:"small",click:()=>{var e;window.open((e=z.deliveryInfo.trackingURL).startsWith("http://")||e.startsWith("https://")?e:`https://${e}`)},buttonName:"Track order"})))),ut&&r.createElement("div",{className:"header__refund-detail"},r.createElement("span",{className:"header__refund-detail__text"},Ee(null!==(T=z.refundDetails)&&void 0!==T?T:{status:te},mt)))),($t&&!bt&&!vt||ut)&&r.createElement("div",{className:"header__cancelOrder__refund-policy"},r.createElement("span",{onClick:()=>e.actionService.redirectToRefundPolicy()},"Refund policy")),r.createElement("div",{className:"details"},r.createElement("span",{className:"title4"},"Product Details"),r.createElement(oe,{reviewItems:Be,currency:Qe,openLoginPopup:Ft,showNoLoginReviews:kt,returnOrder:e=>{nt(e),xe(!0)},refreshOrderData:lt,currentOrder:z}),r.createElement("div",{className:"details__subtotal body-regular body-regular-mobile"},r.createElement("div",{className:"details__subtotal--wrapper"},r.createElement("div",{className:"bold-desk d-flex"},"Subtotal",r.createElement("div",{className:"ml-auto bold-desk bold-mob"},r.createElement(f.fP,{currency:Qe}),g(z.subTotal))),!!z.shippingCost&&r.createElement("div",{className:"d-flex row-gap"},"Shipping charge ",r.createElement("div",{className:"ml-auto bold-mob"}," +",r.createElement(f.fP,{currency:Qe}),g(z.shippingCost)," ")),!!z.discount&&r.createElement("div",{className:"d-flex row-gap"},r.createElement("div",null,"Discount ",r.createElement("br",null)," ",r.createElement("span",{className:"caption"},z.promoCode)),r.createElement("div",{className:"ml-auto bold-mob"}," -",r.createElement(f.fP,{currency:Qe}),g(z.discount)," ")),!!z.tax&&r.createElement("div",{className:"d-flex row-gap"},"Tax ",r.createElement("div",{className:"ml-auto bold-mob"}," +",r.createElement(f.fP,{currency:Qe}),g(z.tax)," ")),!!z.extraCharges&&r.createElement("div",{className:"d-flex row-gap"},"Extra Charges ",r.createElement("div",{className:"ml-auto bold-mob"}," +",r.createElement(f.fP,{currency:Qe}),g(z.extraCharges)," ")),!!z.adjustmentAmount&&r.createElement("div",{className:"d-flex row-gap"},r.createElement("div",null,"Adjustment Amount ",r.createElement("br",null)," ",r.createElement("span",{className:"caption"},z.adjustmentReason)),r.createElement("div",{className:"ml-auto bold-mob"}," ",z.adjustmentAmount>0?"+":"-",r.createElement(f.fP,{currency:Qe}),g(Math.abs(z.adjustmentAmount))," "))),r.createElement("div",{className:"details__subtotal--total"},"Total",r.createElement("div",{className:"ml-auto"},r.createElement(f.fP,{currency:Qe}),g(z.total)))),xt&&G&&r.createElement("div",{className:"details__subtotal body-regular body-regular-mobile"},r.createElement("div",{className:"details__subtotal--wrapper"},r.createElement("div",{className:"bold-desk d-flex"},"Margin Earned",r.createElement("div",{className:"ml-auto bold-desk bold-mob"},r.createElement(f.fP,{currency:Qe}),g(Number(Ht()))))),r.createElement("div",{className:"details__subtotal--total"},"Amount to be collected",r.createElement("div",{className:"ml-auto"},r.createElement(f.fP,{currency:Qe}),g(z.total+Number(Ht())))))),!Ve&&ht&&r.createElement("div",{className:"banner body-regular-mobile"},r.createElement("div",{className:"banner__left"},r.createElement("div",{className:"banner__left__title"},"Refer your friends & get \u20b9",it," for each referral"),r.createElement("div",{className:"banner__left__button",onClick:()=>e.actionService.redirectToReferralProgram()},"Start referring")),r.createElement("div",{className:"banner__right"},r.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/images-uid%2Fc8f50642-8f79-4e1c-9fa9-ab92a3f5fcc2?alt=media&token=fa2a96ba-316b-4999-bb85-97cf17339702",width:"100%",height:"100%"})))),!kt&&r.createElement("div",{className:"right-wrapper"},r.createElement("div",{className:"details"},r.createElement("span",{className:"title4 title4-mobile"},"Shipping Address"),r.createElement("div",{className:"margin-t16 body-regular caption-mobile"},z.customerName," ",r.createElement("br",null),z.phoneNumber,r.createElement("br",null),Ce)),r.createElement("div",{className:"details row-gap"},r.createElement("span",{className:"title4 title4-mobile"},"Payment Mode"),r.createElement("div",{className:"margin-t16 body-regular caption-mobile"},!!z.paymentBreakdown.onlinePayment&&r.createElement("div",null,"Online : ",r.createElement(f.fP,{currency:"INR"}),z.paymentBreakdown.onlinePayment),!!z.paymentBreakdown.codPayment&&r.createElement("div",null,"COD : ",r.createElement(f.fP,{currency:"INR"}),z.paymentBreakdown.codPayment),!!z.paymentBreakdown.offlinePayment&&r.createElement("div",null,"Offline : ",r.createElement(f.fP,{currency:"INR"}),z.paymentBreakdown.offlinePayment),!!z.paymentBreakdown.walletCredits&&r.createElement("div",null,"Wallet : ",r.createElement(f.fP,{currency:"INR"}),z.paymentBreakdown.walletCredits))),!!z.customFieldsResponse.length&&r.createElement("div",{className:"details row-gap"},r.createElement("span",{className:"title4 title4-mobile"},"Checkout Questions"),z.customFieldsResponse.map(((e,t)=>r.createElement("div",{className:"margin-t16 body-regular caption-mobile",key:t},r.createElement("div",{className:"checkout bold-desk bold-mob"},e.question),r.createElement("div",{className:"checkout"},e.answer))))),r.createElement("div",{className:"footer"},r.createElement(l,{buttonName:"Re-order",buttonStyle:"outline",buttonSize:"small",click:async()=>{He(et.reorderOrder(Ue))}}),Ve&&r.createElement(l,{buttonName:"Download invoice",buttonStyle:"outline",buttonSize:"small",click:zt}),(()=>{var e,t,a;return $e&&(null===(a=null===(t=null===(e=A.meta)||void 0===e?void 0:e.cancellationInformation)||void 0===t?void 0:t.featureEnabled)||void 0===a||a)})()?r.createElement("div",{className:"footer__outline"},r.createElement(l,{buttonName:"Cancel order",buttonStyle:"outline",buttonSize:"small",textColor:"#D53434",click:()=>{re(!0)}})):r.createElement("div",{className:"footer__outline"},r.createElement(s,{buttonStyle:"primary",buttonPadding:"12px",buttonSize:"small",click:()=>{jt()},buttonName:"Contact Us"})),ze===e.orderId&&r.createElement("div",{className:"success"},"Successfully added ",Ue.summary," products to cart"))),!kt&&Ve&&ht&&r.createElement("div",{className:"banner__wrapper"},r.createElement("div",{className:"banner body-regular-mobile"},r.createElement("div",{className:"banner__left"},r.createElement("div",{className:"banner__left__title"},"Refer your friends & get \u20b9",it," for each referral"),r.createElement("div",{className:"banner__left__button",onClick:()=>e.actionService.redirectToReferralProgram()},"Start referring")),r.createElement("div",{className:"banner__right"},r.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/images-uid%2Fc8f50642-8f79-4e1c-9fa9-ab92a3f5fcc2?alt=media&token=fa2a96ba-316b-4999-bb85-97cf17339702",width:"100%",height:"100%"})))),kt&&r.createElement(Me,{login:Ft,reviewItems:Be,showNoLoginReviews:kt}),kt&&r.createElement(De,{login:Ft,actionService:e.actionService})))))},it=a(11163),ot=a(95814),lt=a(27294),st=a(85893),dt=function(){var e=(0,it.useRouter)(),t=(0,se.j)(),a=ot.c.getInstance(e),n=(0,y.CG)((function(e){return e.cartState.uiCart})),i=(0,y.TL)(),o=e.query.orderId;return(0,r.useEffect)((function(){if(o){t.loadFromCache();var a=e.query.rzpOrderId||o;n.orderIdReference!==a&&n.orderIdReference!==o||i(lt.W2.emptyCart({}))}}),[]),(0,st.jsx)(nt,{orderId:o,actionService:a})}}}]);