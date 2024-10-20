import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{d as defineCustomElement$5}from"./sc-button2.js";import{d as defineCustomElement$4}from"./sc-dialog2.js";import{d as defineCustomElement$3}from"./sc-icon2.js";import{d as defineCustomElement$2}from"./sc-spinner2.js";const scUpgradeRequiredCss=":host{display:inline-block;color:var(--sc-color-gray-900);cursor:pointer}p,::slotted(p){font-size:var(--sc-font-size-medium) !important;font-weight:var(--sc-font-weight-normal);margin:0 0 var(--sc-spacing-medium) 0 !important;line-height:var(--sc-line-height-dense);white-space:normal}.trigger{pointer-events:auto}.trigger__disabled{pointer-events:none}.dialog__title{display:flex;gap:0.5em;align-items:center}.dialog__title sc-icon{font-size:18px;width:22px;stroke-width:4;color:var(--sc-color-primary-500)}",ScUpgradeRequired$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.size="small",this.required=!0,this.open=!1}render(){var e;return this.required?h(Host,{onClick:()=>this.open=!0},h("span",{class:"trigger"},h("span",{class:"trigger__disabled"},h("slot",null,h("sc-premium-badge",null)))),h("sc-dialog",{label:wp.i18n.__("Boost Your Revenue","surecart"),open:this.open,onScRequestClose:()=>(this.open=!1,!0),style:{"--width":"21rem",fontSize:"15px","--body-spacing":"2rem"}},h("span",{class:"dialog__title",slot:"label"},h("sc-icon",{name:"zap"}),h("span",null,wp.i18n.__("Boost Your Revenue","surecart"))),h("slot",{name:"content"},h("p",null,wp.i18n.__("Unlock revenue boosting features when you upgrade your plan!","surecart"))),h("sc-button",{href:`https://app.surecart.com/plans?switch_account_id=${null===(e=null===window||void 0===window?void 0:window.scData)||void 0===e?void 0:e.account_id}`,type:"primary",target:"_blank",full:!0},wp.i18n.__("Upgrade Now","surecart"),h("sc-icon",{name:"arrow-right",slot:"suffix"})))):h(Host,null,h("slot",null))}static get style(){return scUpgradeRequiredCss}},[1,"sc-upgrade-required",{size:[513],required:[516],open:[1028]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-upgrade-required","sc-button","sc-dialog","sc-icon","sc-spinner"].forEach((e=>{switch(e){case"sc-upgrade-required":customElements.get(e)||customElements.define(e,ScUpgradeRequired$1);break;case"sc-button":customElements.get(e)||defineCustomElement$5();break;case"sc-dialog":customElements.get(e)||defineCustomElement$4();break;case"sc-icon":customElements.get(e)||defineCustomElement$3();break;case"sc-spinner":customElements.get(e)||defineCustomElement$2()}}))}const ScUpgradeRequired=ScUpgradeRequired$1,defineCustomElement=defineCustomElement$1;export{ScUpgradeRequired,defineCustomElement};