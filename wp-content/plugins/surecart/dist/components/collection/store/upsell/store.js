import{getSerializedState}from"@store/utils";import{createStore}from"@stencil/store";const{upsell:upsell}=getSerializedState(),store=createStore({upsell:null,product:null,line_item:null,checkout_id:null,checkout:null,form_id:null,busy:!1,disabled:!1,success_url:null,text:{success:{title:"",description:"",button:""}},...upsell},((e,t)=>JSON.stringify(e)!==JSON.stringify(t))),{state:state,onChange:onChange,on:on,dispose:dispose,forceUpdate:forceUpdate}=store;export default state;export{state,onChange,on,dispose,forceUpdate};