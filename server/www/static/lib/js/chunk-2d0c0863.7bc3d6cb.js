(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0863"],{"41c3":function(t,e,a){"use strict";a.r(e);var o,l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-form",{directives:[{name:"loading",rawName:"v-loading",value:t.tload,expression:"tload"}],staticStyle:{"max-width":"1000px",margin:"auto"}},[[a("p",{staticClass:"red--text"},[t._v("请根据ID在模板库中查找，根据关键字的顺序，添加关键字。然后把生成的模板ID添加到这里。")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.formData.templates,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"100"}}),a("el-table-column",{attrs:{prop:"title",label:"标题",width:"120"}}),a("el-table-column",{attrs:{prop:"templateId",label:"模板ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-input",{attrs:{placeholder:"输入模板ID"},model:{value:e.row.templateId,callback:function(a){t.$set(e.row,"templateId",a)},expression:"scope.row.templateId"}})],1)]}}])}),a("el-table-column",{attrs:{prop:"keywords",label:"关键词"}})],1)],a("v-btn",{staticClass:"mt-3 dark",attrs:{loading:t.tload},on:{click:function(e){return t.submit()}}},[t._v("保存")])],2)],1)},n=[],i={props:{load:{type:Boolean,default:!1}},data:function(){return{formData:{templates:[{id:"AT0257",keywords:"订单状态、订单号、完成时间、订单金额",templateId:"_AMW26pY_uG2FPFIEYI3B2pcwIcYBBQwl5H5s9lsFl4",title:"订单完成通知"},{id:"AT1853",keywords:"订单类型、订单编号、配送地址、配送人员",templateId:"74i4HLS8mxaUFp-ojjriwU-EuENLOwONPXWkfaFHFRg",title:"配送完成通知"},{id:"AT0177",keywords:"配送状态、订单编号、下单时间、配送地址、配送员",templateId:"74i4HLS8mxaUFp-ojjriwcPZSwDiTWSc4607h48AfXw",title:"订单配送通知"},{id:"AT0024",keywords:"订单编号、订单退款、取消原因、取消人",templateId:"HUoEOk8ICvFE7Pg51Iqn6Z7_SYjdwV3LKFIukXRMVT8",title:"订单取消通知"},{id:"AT0146",keywords:"审核结果、拒绝理由",templateId:"PAkbHwMwihArUlzVjk3H_kdURzRSuzwx7se_K_nOCbI",title:"审核结果通知"}]},pageLoad:this.load,tload:!1}},watch:{load:function(t){t&&(this.pageLoad=t)},pageLoad:function(t){t&&this.getConfig()}},mounted:function(){o=this},methods:{getConfig:function(){o.tload=!0,this.$post("config/get",{config_key:"wxapp_template"},function(t){o.tload=!1,0==t.errno&&t.data.config_content&&(o.formData=JSON.parse(t.data.config_content))})},submit:function(){this.tload=!0,this.$post("config/update",{config_key:"wxapp_template",config_content:JSON.stringify(this.formData)},function(t){o.tload=!1,0===t.errno&&o.$message({showClose:!0,message:t.errmsg,type:"success"})})}}},s=i,d=a("6691"),r=Object(d["a"])(s,l,n,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0c0863.7bc3d6cb.js.map