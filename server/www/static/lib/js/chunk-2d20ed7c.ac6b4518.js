(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ed7c"],{b0a9:function(t,a,o){"use strict";o.r(a);var e,s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-container",[o("v-form",{directives:[{name:"loading",rawName:"v-loading",value:t.tload,expression:"tload"}],staticStyle:{"max-width":"600px",margin:"auto"}},[o("p",{staticClass:"red--text"},[t._v("\n        规则描述：用户将小程序转发给用户后，用户点击进入小程序既有一次获得优惠券的概率。\n    ")]),o("p",{staticClass:"mt-4"},[t._v("状态")]),o("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:t.formData.status,callback:function(a){t.$set(t.formData,"status",a)},expression:"formData.status"}},[o("v-radio",{attrs:{label:"开启",value:1}}),o("v-radio",{attrs:{label:"关闭",value:0}})],1),o("v-text-field",{attrs:{label:"获得优惠券的概率",type:"number",disabled:0==t.formData.status},model:{value:t.formData.ids,callback:function(a){t.$set(t.formData,"ids",a)},expression:"formData.ids"}}),o("v-text-field",{attrs:{label:"输入优惠券ID（可输入多个ID，并用英文逗号隔开）",disabled:0==t.formData.status},model:{value:t.formData.ids,callback:function(a){t.$set(t.formData,"ids",a)},expression:"formData.ids"}}),o("v-btn",{staticClass:"mt-3 dark",attrs:{loading:t.tload},on:{click:function(a){return t.submit()}}},[t._v("保存")])],1)],1)},n=[],i={props:{load:{type:Boolean,default:!1}},data:function(){return{formData:{ids:"",status:0,rate:""},pageLoad:this.load,tload:!1}},watch:{load:function(t){t&&(this.pageLoad=t)},pageLoad:function(t){t&&this.getConfig()}},mounted:function(){e=this,e.getConfig()},methods:{getConfig:function(){e.tload=!0,this.$post("config/get",{config_key:"coupon_share"},function(t){e.tload=!1,0==t.errno&&t.data.config_content&&(e.formData=JSON.parse(t.data.config_content))})},submit:function(){this.tload=!0,this.$post("config/update",{config_key:"coupon_share",config_content:JSON.stringify(this.formData)},function(t){e.tload=!1,0===t.errno&&e.$message({showClose:!0,message:t.errmsg,type:"success"})})}}},r=i,l=o("6691"),d=Object(l["a"])(r,s,n,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d20ed7c.ac6b4518.js.map