"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1657],{55506:function(e,t,r){r.d(t,{V:function(){return n}});var a=r(47984),o=r(93311);class n{static async generateReferralCode(e,t,r,o){const i=n.CLOUD_FUNCTION_URL+"/referralsApiFunctions-generateReferralCode";try{return await a.sM.sendData({apiPath:i,requestHeader:n.headers,apiMethod:a.s1.POST,requestBody:{storeId:e,storeName:o,referrerId:t,referrerName:r}})}catch(l){return console.error(l),{}}}static async getReferralDetails(e){const t=n.CLOUD_FUNCTION_URL+"/referralsApiFunctions-getReferralDetails";try{return(await a.sM.sendData({apiPath:t,requestHeader:n.headers,apiMethod:a.s1.POST,requestBody:{referralCode:e}})).data}catch(r){return console.error(r),{}}}static async getReferralCode(e,t){const r=n.CLOUD_FUNCTION_URL+"/referralsApiFunctions-getReferralCode";try{return(await a.sM.sendData({apiPath:r,apiMethod:a.s1.POST,requestHeader:n.headers,requestBody:{storeId:e,customerId:t}})).data}catch(o){return console.error(o),{}}}static async getReferralSettings(e){const t=n.CLOUD_FUNCTION_URL+"/referralsApiFunctions-getReferralSettings";try{return(await a.sM.sendData({apiPath:t,requestHeader:n.headers,apiMethod:a.s1.POST,requestBody:{storeId:e}})).data}catch(r){return console.error(r),{}}}static async getReffererUsageDetails(e,t){const r=n.CLOUD_FUNCTION_URL+"/referralsApiFunctions-getReferrerUsageDetails";try{return(await a.sM.sendData({apiPath:r,apiMethod:a.s1.POST,requestHeader:n.headers,requestBody:{storeId:e,customerId:t}})).data}catch(o){return console.error(o),{}}}}n.CLOUD_FUNCTION_URL=o.q.functions.FASITY_FUNCTION,n.headers={"Content-Type":"application/json"}},85724:function(e,t,r){r.d(t,{qq:function(){return R},g2:function(){return S},ZP:function(){return O}});var a=r(67294),o=r(42809),n=r(25617),i=r(28573),l=r(30054),s=r(54549),d=r(53918),c=r(28818),m=r(8195),p=r(1926);var u=e=>{const t=`${m.N.getInstance().websiteLink()}/ref/${e.referralCode}`,r=(0,s.iP)(),[n,i]=(0,a.useState)(!1),u=new p.C;return a.createElement(d.ThemeProvider,{theme:c.t},a.createElement(l.FQ,null,a.createElement("div",{className:"generated__wrapper"},a.createElement("div",{className:"generated__wrapper__top"},a.createElement("div",{className:"generated__wrapper__text"},a.createElement("div",{className:"generated__wrapper__title"},"Spread the word and earn reward"),a.createElement("div",{className:"generated__wrapper__subtitle"},"Get \u20b9",e.discountVal," reward for every person you refer")),!r&&a.createElement("div",{className:"generated__wrapper__image"},a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/images-uid%2Fecd9559d-feaa-43ed-a250-be5aa2c30b85?alt=media&token=5af78f0d-8baa-4b15-a271-7c24bb690e21",width:"172px",height:"92px"}))),a.createElement("div",{className:"generated__wrapper__bottom"},a.createElement("div",{className:"generated__wrapper__bottom__text"},"Share your unique referral link"),a.createElement("div",{className:"generated__wrapper__bottom__share"},a.createElement("div",{className:"generated__wrapper__bottom__coupon"},a.createElement("div",{className:"generated__wrapper__bottom__coupon__text"},t),a.createElement("div",{className:"generated__wrapper__bottom__coupon__copy",onClick:()=>{navigator.clipboard.writeText(`${t}`),i(!0)}},n?"Copied!":"Copy link")),!r&&a.createElement("div",{className:"generated__wrapper__bottom__social"},a.createElement("div",{className:"generated__wrapper__bottom__social__whatsapp",onClick:()=>{const e=`https://api.whatsapp.com/send?text=Use this referral link ${t}`;window.open(e,"_blank")}},a.createElement(o.M$,null)),a.createElement("div",{className:"generated__wrapper__bottom__social__facebook",onClick:()=>{const e=`https://www.facebook.com/sharer/sharer.php?u=${t}`;window.open(e,"_blank")}},a.createElement(o.Vq,null)),a.createElement("div",{className:"generated__wrapper__bottom__social__twitter",onClick:()=>{const e=`http://twitter.com/share?text=Use this referral link ${t}`;window.open(e,"_blank")}},a.createElement(o.Zm,null))),r&&a.createElement("div",{className:"generated__wrapper__bottom__mobile",onClick:()=>{navigator.userAgent.includes("wv")?u.shareOnWhatsapp(t):navigator.share({title:"Referral Link",text:"Share the below referral link",url:`${t}`}).then((()=>{})).catch(console.error)}},a.createElement(o.fM,null),"Share"))))))};const x=d.default.div`
  width: 756px;
  height: 545px;
  background: ${e=>e.theme.colors.tint3};
  border-radius: 8px;
  padding:24px;
  @media(max-width: 768px){
    max-width: 296px;
  }
  .modal{
    &__top{
      display: flex;
      flex-direction: row;
    }
    &__text{
      font-style: normal;
      ${e=>e.theme.fonts.title3};
      color: ${e=>e.theme.colors.shade1};
      padding-bottom: 16px;
      flex:1;
    }
    &__points {
      display: flex;
      flex-direction: row;
      margin-bottom: 24px;
      gap: 24px;
      @media(max-width: 768px){
        flex-direction: column;
      }
    }
    &__image{
      @media(max-width: 768px){
        display: none;
      }

    }
  }
`,_=d.default.div`
  flex: 0 0 50%;
  padding: 8px;
  @media(max-width:768px){
    flex: 0 0 100%;

}
  .zero-state {
    background: ${e=>e.theme.colors.tint5};
  }
  .add-opacity {
    opacity: 0.8;
    background: ${e=>e.theme.colors.tint3} !important;
  }


  .ref-lower {
    display: flex;
    padding: 0 0 16px 16px;
    justify-content: space-between;

    .copy-btn {
      margin-right: 5px;
      cursor: pointer;

      @media (max-width: 768px) {
        border: 0px solid ${e=>e.theme.colors.shade2};
      }

      .text {
        font-style: normal;
        ${e=>e.theme.fonts.title3Mobile};
        color: #4f545c;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 8px;
      }
    }
    .used-btn {
      border: 1px solid ${e=>e.theme.colors.warning};
      box-sizing: border-box;
      border-radius: 4px;
      margin-right: 5px;

      @media (max-width: 768px) {
        border: 1px solid ${e=>e.theme.colors.warning};
        padding: 0px;
      }
      .text-used{
        font-style: normal;
        ${e=>e.theme.fonts.toastMobile};
        text-transform: uppercase;
        color: ${e=>e.theme.colors.warning};
        margin: 0px 8px;
      }
    }
  }
  .ref-upper {
    justify-content: left;
    display: flex;
    flex-direction: row;
    padding: 16px 0 0 16px;

    .offer-digit {
      font-style: normal;
      ${e=>e.theme.fonts.bodyLarge};
      font-feature-settings: "tnum" on, "lnum" on;

      color: ${e=>e.theme.colors.textPrimary};
    }

    .offer-text {
      margin: 0 8px;
      width: 100%;
      font-style: normal;
      padding-top: 5px;
      ${e=>e.theme.fonts.hintText};
      color: ${e=>e.theme.colors.shade2};
      opacity: 0.8;
    }
  }
  .referee-ticket {

    background: ${e=>e.theme.colors.tint5};
    position: relative;

    @media (max-width: 768px) {
      margin: 16px auto 0px;
    }

    .circle {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 37%;
      background: ${e=>e.theme.colors.tint3};
      border-radius: 50%;
      border: 1px dashed rgba(79, 84, 92, 0.2);
      z-index: 1;
      border-bottom: 0px;
      -webkit-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);

      border-right: 0px;
      border-left: 0px;

      &.left-cir {
        transform: rotate(90deg);
        left: -15px;
      }

      &.right-cir {
        right: -15px;
        transform: rotate(-90deg);
      }
    }

    .main-ref-ticket {
      border: 1px dashed rgba(79, 84, 92, 0.2);
      box-sizing: border-box;
      border-radius: 8px;
      padding: 16px;
    }

    .ref-text{
      text-align: center;
    }

    .main-ref-ticket-empty {
      border: 1px dashed rgba(79, 84, 92, 0.2);
      box-sizing: border-box;
      border-radius: 8px;
      padding: 35px;
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
`,h=d.default.div`
  .overview__wrapper{
    background: ${e=>e.theme.colors.tint3};
    border: 1px solid ${e=>e.theme.colors.tint1};
    box-sizing: border-box;
    border-radius: 4px;
    padding: 24px 16px;
    margin-top: 24px;
    &__coupon{
      &__container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 8px;
        margin: 0 -16px;
      }
      &__button{
        width:100%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        border-radius: 4px;
        text-align: center;
        font-style: normal;
        ${e=>e.theme.fonts.bodySmallMobile};
        color: #4F545C;
        padding: 4px 0px 4px 0px;
        cursor: pointer;
      }

      &__text{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: ${e=>e.theme.colors.shade1};
      }
    }
    &__top{
      display: flex;
      flex-direction: row;
      &__text{
        flex:1;
        font-style: normal;
        ${e=>e.theme.fonts.title3Mobile};
        color: ${e=>e.theme.colors.shade1};
      }
      &__modal{
        font-style: normal;
        ${e=>e.theme.fonts.title3Mobile};
        color: ${e=>e.theme.colors.shade2};
        cursor: pointer;
      }
      &__modal > svg {
        margin-right: 4px;
      }
    }

    &__text{
      margin-top: 8px;
      font-style: normal;
      ${e=>e.theme.fonts.bodyRegularMobile};
      font-feature-settings: 'tnum' on, 'lnum' on;
      color: ${e=>e.theme.colors.shade1};
      padding-bottom: 16px;
    }
    &__amount{
      display: flex;
      flex-direction: row;
      gap:16px;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }
  }
`,g=d.default.div`
  flex-grow:1;
  max-width: 100%;
.total{
  &__wrapper{
    display: flex;
    flex-direction: row;
    gap:16px;
    background: ${e=>e.theme.colors.tint3};
    border: 1px solid ${e=>e.theme.colors.tint1};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
  }
  &__left {
    flex:1;
    &__title{
      font-style: normal;
      ${e=>e.theme.fonts.hintText};
      color: ${e=>e.theme.colors.secondary};
      margin-bottom: 4px;
    }
    &__amount{
      font-style: normal;
      ${e=>e.theme.fonts.title1Mobile};
      color: ${e=>e.theme.colors.shade1};
      margin-bottom: 4px;
      width: 100%;
    }
    &__subtitle{
      font-style: normal;
      ${e=>e.theme.fonts.hintText};
      color: ${e=>e.theme.colors.secondary};
    }
  }
}
`;var f=r(28967);var b=e=>{const t=[{imageIcon:a.createElement("div",null,a.createElement(o.xU,null)),title:"Refer a friend",subtitle:"Share your unique discount with your friend"},{imageIcon:a.createElement("div",null,a.createElement(o.Nh,null)),title:"Your friend purchases",subtitle:"Your friend signs up with the link and gets a discount"},{imageIcon:a.createElement("div",null,a.createElement(o.nc,null)),title:"Redeem rewards",subtitle:"Earn rewards in the form of coupon codes"}];return a.createElement(x,null,a.createElement("div",{className:"modal__top"},a.createElement("div",{className:"modal__text"},"How referral works"),a.createElement("div",{onClick:e.onClickHandle},a.createElement(f.Z,{width:24,height:25}))),a.createElement("div",{className:"modal__points"},t.map(((e,t)=>a.createElement(S,{imageIcon:e.imageIcon,title:e.title,subtitle:e.subtitle,key:t})))),a.createElement("div",{className:"modal__image"},a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/images-uid%2F17f3fc6d-bbec-4c07-b8f0-336c3ebde86a?alt=media&token=9730f75f-8031-4416-8c78-912edb1c2dda",width:"100%",alt:"something"})))},w=r(55506);class v{static SanitizeReffererUsageDetails(e){if(e.used.length+e.unused.length<=0)return[];const t=[];return e.unused.forEach((e=>{t.push(Object.assign(Object.assign({},e),{isUsed:!1}))})),e.used.forEach((e=>{t.push(Object.assign(Object.assign({},e),{isUsed:!0}))})),t}static GetSumOfUnlocked(e){let t=0;return e.forEach((e=>t+=e.promoDoc.v)),t}static GetSumOfRedeemed(e){let t=0;return e.forEach((e=>t+=e.isUsed?e.promoDoc.v:0)),t}static GetNumberOfCouponsUnlocked(e){return e.length}static GetNumberOfCouponsRedeemed(e){return e.filter((e=>e.isUsed)).length}}var E=r(4507);const y=e=>{const t=(0,s.iP)();return a.createElement(g,null,a.createElement("div",{className:"total__wrapper"},a.createElement("div",{className:"total__left"},a.createElement("div",{className:"total__left__title"},e.title),a.createElement("div",{className:"total__left__amount"},"\u20b9",e.amount),a.createElement("div",{className:"total__left__subtitle"},e.subtitle)),!t&&a.createElement("div",{className:"total__right"})))},N=e=>a.createElement(d.ThemeProvider,{theme:c.t},a.createElement(_,null,a.createElement("div",{className:"referee-ticket "+(e.couponArray.isUsed?"add-opacity":"")},a.createElement("div",{className:"circle left-cir"}),a.createElement("div",{className:"main-ref-ticket"},a.createElement("div",{className:"ref-upper"},a.createElement("div",{className:"offer-digit"},a.createElement("span",null,"\u20b9",e.couponArray.promoDoc.v)),a.createElement("div",{className:"offer-text"},a.createElement("span",null,"off on any purchase above \u20b9",e.couponArray.promoDoc.b))),a.createElement("div",{className:"seperator"}),a.createElement("div",{className:"ref-lower"},a.createElement("div",{className:"coupon-code"},a.createElement("span",null,e.couponArray.promoDoc.c)),e.couponArray.isUsed?a.createElement("div",{className:"used-btn"},a.createElement("span",{className:"text-used"},"CODE USED")):a.createElement("div",{className:"copy-btn",onClick:()=>{navigator.clipboard.writeText(e.couponArray.promoDoc.c)}},a.createElement("span",{className:"text"},"Copy")))),a.createElement("div",{className:"circle right-cir"})))),$=()=>a.createElement(d.ThemeProvider,{theme:c.t},a.createElement(_,null,a.createElement("div",{className:"referee-ticket zero-state"},a.createElement("div",{className:"circle left-cir"}),a.createElement("div",{className:"main-ref-ticket-empty"},a.createElement("div",{className:"ref-upper"}),a.createElement("div",{className:"ref-text"},"Your coupon will appear here"),a.createElement("div",{className:"ref-lower"},a.createElement("div",{className:"coupon-code"}))),a.createElement("div",{className:"circle right-cir"}))));var k=e=>{const[t,r]=(0,a.useState)(!1),[i,l]=(0,a.useState)(!1),[d,m]=(0,a.useState)(!1),[p,u]=(0,a.useState)(!1),[x,_]=(0,a.useState)([]),g=(0,s.iP)(),f=(0,n.v9)((e=>e.storeState.store)).meta.id,k=(0,n.v9)((e=>e.customerState.customer)).id;(0,a.useEffect)((()=>{(async()=>{const e=await w.V.getReffererUsageDetails(f,k);return v.SanitizeReffererUsageDetails(e)})().then((e=>{const t=e.length;return t&&u(!0),t<4&&m(!0),_(e)}))}),[]);const C=()=>{r(!t)},S=[{title:"Rewards unlocked",subtitle:""+(g?`${v.GetNumberOfCouponsUnlocked(x)} referred`:`${v.GetNumberOfCouponsUnlocked(x)} customers referred`),amount:""+(x.length?`${v.GetSumOfUnlocked(x)}`:"0")},{title:"Rewards redeemed",subtitle:`${v.GetNumberOfCouponsRedeemed(x)} coupons used`,amount:""+(x.length?`${v.GetSumOfRedeemed(x)}`:"0")}];return a.createElement(E.Z,{THEME:c.t},a.createElement(h,null,a.createElement("div",{className:"overview__wrapper"},t&&a.createElement(o.u_,null,a.createElement(b,{onClickHandle:C})),a.createElement("div",{className:"overview__wrapper__top"},a.createElement("div",{className:"overview__wrapper__top__text"},"Referral Overview"),a.createElement("div",{className:"overview__wrapper__top__modal",onClick:C},a.createElement(o.Zc,null),g?"Know more":"How referrals work")),a.createElement("div",{className:"overview__wrapper__text"},"You can redeem \u20b9",e.discountVal," coupon code per purchase"),a.createElement("div",{className:"overview__wrapper__amount"},S.map(((e,t)=>a.createElement(y,{amount:e.amount,title:e.title,subtitle:e.subtitle,key:t})))),a.createElement("div",{className:"overview__wrapper__coupon"},a.createElement("div",{className:"overview__wrapper__coupon__text"},"My Rewards"),a.createElement("div",{className:"overview__wrapper__coupon__container"},p&&(()=>{let e=x.length?x:[];return e.length>4&&(e=i?e:e.slice(0,4)),e.map(((e,t)=>a.createElement(N,{couponArray:e,key:t})))})(),!p&&a.createElement($,null),!p&&a.createElement($,null)),!d&&a.createElement("div",{className:"overview__wrapper__coupon__button",onClick:()=>{l(!i)}},i?"Show Less":"Show More")))))},C=r(68420);const S=e=>a.createElement(l.Cg,null,a.createElement("div",{className:"tutorial__wrapper"},a.createElement("div",{className:"tutorial__wrapper__top"},a.createElement("div",{className:"tutorial__wrapper__img"},e.imageIcon),a.createElement("div",{className:"tutorial__wrapper__title"},e.title)),a.createElement("div",{className:"tutorial__wrapper__bottom"},e.subtitle))),R=e=>a.createElement(l.$Y,null,a.createElement("div",{className:"nologin__wrapper"},a.createElement("div",{className:"nologin__wrapper__left"},a.createElement("div",{className:"nologin__wrapper__title"},"Refer your friends & earn rewards"),a.createElement("div",{className:"nologin__wrapper__icons"},a.createElement(o.zH,null)),a.createElement("div",{className:"nologin__wrapper__button"},a.createElement(l.W4,null,a.createElement(o.qz,{buttonName:"Start referring now",buttonStyle:"primary",buttonSize:"small",click:e.onClickHandle,isLoading:!1,buttonHeight:"48px",buttonWidth:"100%",backgroundColor:"#8440AD",textColor:"#FFFFFF",buttonPadding:"14px 16px"})))),a.createElement("div",{className:"nologin__wrapper__right"},false,a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/bikayi-chat.appspot.com/o/images-uid%2F36a23497-21d3-4964-9a7e-b09fd0ca636a?alt=media&token=618a86ba-664c-4586-9a8b-652ad5b8ae2c"})))),U=e=>{(0,n.v9)((e=>e.storeState.store));const[t,r]=(0,a.useState)(""),[i,s]=(0,a.useState)(""),[d,c]=(0,a.useState)(!1);return a.createElement(l.ZE,null,a.createElement("div",{className:"no-coupon"},a.createElement("div",{className:"no-coupon__header"},"Enter your name to generate your unique referral link"),a.createElement("div",{className:"no-coupon__component"},a.createElement("div",{className:"no-coupon__component__input"},a.createElement(o.Gj,{placeHolder:"NAME",value:t,type:"text",onChange:e=>{return t=e,s(""),void r(t.target.value);var t},id:"id",error:i.length>0,subText:i.length>0?i:"",name:"name",height:"38px"})),a.createElement("div",{className:"no-coupon__component__button"},a.createElement(l.W4,null,a.createElement(o.qz,{buttonStyle:"primary",buttonSize:"small",click:async()=>{if(t.length<=0)return void s("*Required Field");c(!0);const r=await w.V.generateReferralCode(e.storeId,e.customerId,t,e.storeName),a=await JSON.parse(JSON.stringify(r));e.onClickHandle(a.data.referralCode)},isLoading:d,buttonHeight:"48px",buttonWidth:"100%",backgroundColor:"#8440AD",textColor:"#FFFFFF",buttonPadding:"14px 16px"},d?"":"Generate"))))))};var O=()=>{const e=(0,n.v9)((e=>e.storeState.store)),t=(0,n.v9)((e=>e.customerState.customer)),r=e.meta.id,s=e.meta.username,[d,m]=(0,a.useState)(),[p,x]=(0,a.useState)(),[_,h]=(0,a.useState)(!1),g=t.id,f=async e=>{h(!1),m(e);const t=await w.V.getReferralDetails(e),r=await JSON.parse(JSON.stringify(t));r.referralSettings&&x(r.referralSettings.discountValReferrer),h(!0)};(0,a.useEffect)((()=>{h(!1);w.V.getReferralCode(r,g).then((e=>{403!==e.status?f(e.referralCode):h(!0)}))}),[]);const b=[{imageIcon:a.createElement("div",null,a.createElement(o.xU,null)),title:"Refer a friend",subtitle:"Share your unique discount link with your friend"},{imageIcon:a.createElement("div",null,a.createElement(o.Nh,null)),title:"Your friend purchases",subtitle:"Your friend signs up with the link and gets a discount"},{imageIcon:a.createElement("div",null,a.createElement(o.nc,null)),title:"Redeem rewards",subtitle:"Earn rewards in the form of coupon codes"}];return a.createElement(E.Z,{THEME:c.t},a.createElement(i.l,null,!_&&a.createElement(C.Z,{boxes:[{height:"24px",width:"120px"},{height:"24px",width:"100%"},{height:"24px",width:"120px"},{height:"24px",width:"100%"},{height:"24px",width:"120px"},{height:"24px",width:"100%"}]}),_&&a.createElement(l.yW,{id:"referrer-wrapper"},a.createElement("div",{className:"orders--header--container"},a.createElement("div",{className:"orders--wrapper--header"},a.createElement("div",{className:"orders--header--text"},a.createElement("div",{className:"svg--wrapper"},a.createElement(o.G7,null)),a.createElement("h1",{className:"title1"},"Referral Program"))),a.createElement("hr",null)),!d&&a.createElement(U,{onClickHandle:f,storeId:r,customerId:g,storeName:s}),!d&&a.createElement(l.oz,null,a.createElement("div",{className:"refer_tutorial"},a.createElement("div",{className:"refer_tutorial__title"},"How referrals work"),a.createElement("div",{className:"refer_tutorial__component"},b.map(((e,t)=>a.createElement(S,{imageIcon:e.imageIcon,title:e.title,subtitle:e.subtitle,key:t})))))),!!d&&a.createElement(u,{storeName:s,referralCode:d,discountVal:p}),!!d&&a.createElement(k,{discountVal:p}))))}},30054:function(e,t,r){r.d(t,{W4:function(){return o},FQ:function(){return n},$Y:function(){return i},yW:function(){return l},PO:function(){return s},ZE:function(){return d},oz:function(){return c},Cg:function(){return m}});var a=r(53918);const o=a.default.div`
  ${e=>e.theme.fonts.buttonSmall};
  cursor: pointer;
  padding: 0px;
  width: 148px;
  @media(max-width: 768px) {
    width: 100%;
  }
`,n=a.default.div`
.generated__wrapper{
  background: ${e=>e.theme.colors.tint3};
  border: 1px solid ${e=>e.theme.colors.tint1};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 24px;
  margin-top: 24px;
  @media(max-width: 768px){
    padding: 16px;
  }
  &__top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid ${e=>e.theme.colors.tint2};
  }
  &__title{
    font-style: normal;
    ${e=>e.theme.fonts.buttonLarge};
    color: ${e=>e.theme.colors.shade1};
    padding-bottom: 4px;
  }
  &__subtitle{
    font-style: normal;
    ${e=>e.theme.fonts.bodySmallMobile};
    color: ${e=>e.theme.colors.shade2};
    padding-bottom: 24px;
  }
  &__image{
    flex: 0;
  }
  &__bottom{

    &__mobile{
      width:100%;
      height: 40px;
      border: 1px solid ${e=>e.theme.colors.shade2};
      box-sizing: border-box;
      border-radius: 4px;
      text-align: center;
      padding-top: 4px;
      ${e=>e.theme.fonts.title4};
    }
    &__mobile > svg {
      margin-right: 8px;
    }
    &__social{
      display: flex;
      flex-direction: row;
      gap: 16px;
    }

    &__share{
      display: flex;
      flex-direction: row;
      gap:16px;
      @media(max-width: 768px){
        display: flex;
        flex-direction: column;
      }
    }

    &__text{
      font-style: normal;
      ${e=>e.theme.fonts.bodySmallMobile};
      color: ${e=>e.theme.colors.shade2};
      padding-top: 16px;
      padding-bottom: 16px;
    }
    &__coupon{
      width: 351px;
      height: 48px;
      background: ${e=>e.theme.colors.tint2};
      border: 1px dashed ${e=>e.theme.colors.grey1};
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 12px 24px 12px 16px;
      @media(max-width: 768px){
        width:100%;
      }
      &__text{
        flex:1;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        ${e=>e.theme.fonts.linkText};
        color: ${e=>e.theme.colors.shade1};
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &__copy{
        font-style: normal;
        ${e=>e.theme.fonts.bodySmall};
        text-align: center;
        color: ${e=>e.theme.colors.brandMain};
        cursor: pointer;
      }
    }

  }
}
`,i=a.default.div`
  .nologin__wrapper{
    background: ${e=>e.theme.colors.tint3};
    border: 1px solid ${e=>e.theme.colors.tint1};
    box-sizing: border-box;
    border-radius: 4px;
    padding: 32px 40px ;
    display: flex;
    flex-direction: row;
    @media(max-width: 768px){
    flex-direction: column-reverse;
      padding: 24px 26px;
  }
    &__title{
      font-style: normal;
      ${e=>e.theme.fonts.title2};
      color: ${e=>e.theme.colors.onyx};
      padding-bottom: 28px;
    }
    &__icons{
      padding-bottom: 28px;
    }
  }

`,l=a.default.div`
  background-color: ${e=>e.theme.colors.tint3};
  width: 100%;

  @media (max-width: 768px) {
    margin: 20px 16px 16px 16px;
    width: auto;

  }

  .padding-extra{
    padding-top: 28px;
    @media(max-width: 768px) {
      padding-top: 0px;
    }

  }

  .orders--header--container {
    top: 0;
    background-color: ${e=>e.theme.colors.tint3};

    hr {
      width: 100%;
      margin-bottom: 24px;
      margin-top: 24px;
      background-color: ${e=>e.theme.colors.lightGray2};

      @media (max-width: 768px) {
        margin-bottom: 16px ;
        margin-top: 16px ;
      }
    }
  }

  .orders--wrapper--header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;

    .orders--header--text {
      display: flex;
      align-items: center;

      .svg--wrapper {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${e=>e.theme.colors.tint4};
        margin-right: 16px;
      }

      h1 {
        margin: 0;
        ${e=>e.theme.fonts.title1Mobile};

      }
    }
  }
`,s=a.default.div`
  background-color: ${e=>e.theme.colors.tint3};
  width: fit-content;
  margin: 0 auto 20px;

  @media (max-width: 768px) {
    margin: 20px 16px 16px 16px;
    width: auto;

  }

  .padding-extra{
    padding-top: 28px;
  }

  .orders--header--container {
    top: 0;
    background-color: ${e=>e.theme.colors.tint3};

    hr {
      width: 100%;
      margin-bottom: 24px;
      margin-top: 24px;
      background-color: ${e=>e.theme.colors.lightGray2};

      @media (max-width: 768px) {
        margin-bottom: 16px ;
        margin-top: 16px ;
      }
    }
  }

  .orders--wrapper--header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;

    .orders--header--text {
      display: flex;
      align-items: center;

      .svg--wrapper {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${e=>e.theme.colors.tint4};
        margin-right: 16px;
      }

      h1 {
        margin: 0;
        ${e=>e.theme.fonts.title1Mobile};

      }
    }
  }
`,d=a.default.div`
  background: ${e=>e.theme.colors.tint2};
  border: 1px solid ${e=>e.theme.colors.tint1};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 24px;
  .no-coupon {
    &__header {
      font-style: normal;
      ${e=>e.theme.fonts.bodyRegularBold};
      color: ${e=>e.theme.colors.textPrimary};
      padding-bottom: 16px;
    }
    &__component {
      display: flex;
      flex-direction: row;
      gap: 8px;
      @media(max-width: 768px){
        flex-direction: column;
      }

      &__input{
        width:330px;
        box-sizing: border-box;
        height: 49px;
        background-color: white;
        @media(max-width: 768px){
          width: 100%;
        }
      }
    }
  }
`,c=a.default.div`
.refer_tutorial{
  padding-top: 24px;

  &__title{
    font-style: normal;
    ${e=>e.theme.fonts.title3};
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: ${e=>e.theme.colors.shade1};
    padding-bottom: 16px;
  }
  &__component {
    display: flex;
    flex-direction: row;
    gap: 24px;
    @media(max-width: 768px){
      flex-direction: column;
    }
  }
}
`,m=a.default.div`
.tutorial__wrapper {
  background: ${e=>e.theme.colors.tint3};
  border: 1px solid ${e=>e.theme.colors.tint1};
  box-sizing: border-box;
  border-radius: 4px;
  width:220px;
  padding: 16px;
  @media(max-width: 768px){
    width: 100%
  }
  &__top {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  &__img > div > svg {
    cursor: unset;
  }
  &__title {
    text-align: center;
    padding-top: 12px;
    font-style: normal;
    ${e=>e.theme.fonts.toast};
    color: ${e=>e.theme.colors.title4};
  }
  &__bottom{
    padding-top: 16px;
    font-style: normal;
    ${e=>e.theme.fonts.bodyRegularMobile};
    color: ${e=>e.theme.colors.title4};
    opacity: 0.72;
  }
}
`},28573:function(e,t,r){r.d(t,{l:function(){return n}});var a=r(67294),o=r(4507);const n=({children:e})=>a.createElement(o.Z,null,e)},53857:function(e,t,r){r(67294);var a=r(53918),o=r(85893),n=a.default.div.withConfig({displayName:"LayoutWrapper__LayoutWrapperStyle",componentId:"sc-b8rzhv-0"})([".wrapper__content{min-height:100vh;overflow-x:inherit;}"]);t.Z=function(e){return(0,o.jsx)(n,{children:(e.SSR,(0,o.jsx)("div",{className:"wrapper__content",children:e.children}))})}}}]);