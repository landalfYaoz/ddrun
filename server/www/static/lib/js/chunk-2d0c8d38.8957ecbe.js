(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8d38"],{5711:function(e,t,a){"use strict";a.r(t);var n,l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-text-field",{staticClass:"pr-2",attrs:{label:"真实姓名"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getList()}},model:{value:e.query.realname,callback:function(t){e.$set(e.query,"realname",t)},expression:"query.realname"}})],1),a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-text-field",{staticClass:"pr-2",attrs:{label:"身份证号"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getList()}},model:{value:e.query.id_number,callback:function(t){e.$set(e.query,"id_number",t)},expression:"query.id_number"}})],1),a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-select",{attrs:{items:[{label:"全部",value:"2,3,4"},{label:"正常",value:2},{label:"停止服务",value:3},{label:"停止服务并冻结账户",value:4}],label:"状态","item-text":"label","item-value":"value"},on:{change:function(t){return e.getList()}},model:{value:e.query.status,callback:function(t){e.$set(e.query,"status",t)},expression:"query.status"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[a("v-btn",{attrs:{color:"gray"},on:{click:function(t){return e.resetSearch()}}},[e._v("重置")]),a("v-btn",{attrs:{color:"dark"},on:{click:function(t){return e.getList()}}},[a("v-icon",{attrs:{size:"14"}},[e._v("mdi-account-search")]),e._v(" 搜索\n      ")],1)],1)],1),a("v-divider"),a("v-layout",{attrs:{wrap:"","justify-space-between":""}},[a("v-flex",{attrs:{sm8:"",xs12:"",md8:"",lg8:""}},[a("v-btn",{staticClass:"inline-block",attrs:{color:"gray",icon:""},on:{click:function(t){return e.getList()}}},[a("v-icon",[e._v("mdi-autorenew")])],1)],1),a("div",[a("v-select",{staticClass:"pr-2 inline-block",attrs:{items:e.pageSizes,"item-text":"label","item-value":"value",label:"每页条数",required:""},on:{change:function(t){return e.getList()}},model:{value:e.query.pageSize,callback:function(t){e.$set(e.query,"pageSize",t)},expression:"query.pageSize"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoad,expression:"tableLoad"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.items,"tooltip-effect":"dark",border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"data_time",label:"日期"}}),a("el-table-column",{attrs:{prop:"platform_profit_total",label:"平台收益"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.platform_profit_total)+" 元")])]}}])}),a("el-table-column",{attrs:{prop:"runman_profit_total",label:"跑男收益"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.runman_profit_total)+" 元")])]}}])}),a("el-table-column",{attrs:{prop:"agent_profit_total",label:"代理收益"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.agent_profit_total)+" 元")])]}}])})],1)],1)],1),a("v-layout",{attrs:{wrap:"","justify-end":"","mt-3":""}},[a("el-pagination",{attrs:{"current-page":e.query.currentPage,"page-size":e.query.pageSize,layout:"total,  prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},r=[],s={data:function(){return{items:[],query:{id_number:"",realname:"",status:"2,3,4",ws_type:2,currentPage:1,pageSize:10},multipleSelection:[],pageSizes:this.$pageSizes,tableLoad:!1,total:0,dialog:!1,dialog2:!1,tempUser:{},pageLoad:!1}},props:{load:{type:Boolean,default:!1}},watch:{load:function(e){e&&(this.pageLoad=e)},pageLoad:function(e){e&&this.getList()}},mounted:function(){n=this},methods:{getList:function(){n.tableLoad=!0,n.$post("anlysis/order/list",this.query,function(e){n.tableLoad=!1,0===e.errno&&(n.items=e.data.data,n.total=e.data.count)})},resetSearch:function(){this.query.id_number="",this.query.realname="",this.query.status="2,3,4",this.getList()},handleSelectionChange:function(e){this.multipleSelection=e},getIds:function(){var e=[];for(var t in this.multipleSelection)e.push(this.multipleSelection[t].id);return e},handleCurrentChange:function(e){this.query.currentPage=e,this.getList()},statusChange:function(e,t){this.$post("admin/service/status",{id:e,status:t},function(e){0==e.errno&&(n.$message({showClose:!0,message:e.errmsg,type:"success"}),n.getList())})},noticeChange:function(e,t){this.$post("admin/service/notice",{id:e,is_notice:t},function(e){0==e.errno&&(n.$message({showClose:!0,message:e.errmsg,type:"success"}),n.getList())})},updateMsgChange:function(e){this.dialog=e},addminChange:function(e){this.dialog2=e},changeMsg:function(e){this.getList()}}},i=s,o=a("6691"),u=Object(o["a"])(i,l,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c8d38.8957ecbe.js.map