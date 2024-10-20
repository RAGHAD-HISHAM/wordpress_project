import{h}from"@stencil/core";export class ScManualPaymentMethod{constructor(){this.paymentMethod=void 0,this.showDescription=!1}render(){var e,t;return h("div",{class:"manual-payment-method",part:"card"},h("div",{class:"payment-method__title"},null===(e=this.paymentMethod)||void 0===e?void 0:e.name),this.showDescription&&h("sc-prose",{class:"payment-method__description",innerHTML:null===(t=this.paymentMethod)||void 0===t?void 0:t.description}))}static get is(){return"sc-manual-payment-method"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-manual-payment-method.css"]}}static get styleUrls(){return{$:["sc-manual-payment-method.css"]}}static get properties(){return{paymentMethod:{type:"unknown",mutable:!1,complexType:{original:"ManualPaymentMethod",resolved:"ManualPaymentMethod",references:{ManualPaymentMethod:{location:"import",path:"../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""}},showDescription:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"show-description",reflect:!1,defaultValue:"false"}}}}