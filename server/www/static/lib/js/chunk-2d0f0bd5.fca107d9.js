(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0bd5"],{"9e3f":function(t,e,a){"use strict";a.r(e);var s,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-text-field",{staticClass:"pr-2",attrs:{label:"真实姓名"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.realname,callback:function(e){t.$set(t.query,"realname",e)},expression:"query.realname"}})],1),a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-text-field",{staticClass:"pr-2",attrs:{label:"身份证号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.id_number,callback:function(e){t.$set(t.query,"id_number",e)},expression:"query.id_number"}})],1),a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-select",{attrs:{items:[{label:"全部",value:"2,3,4"},{label:"正常",value:2},{label:"停止服务",value:3},{label:"停止服务并冻结账户",value:4}],label:"状态","item-text":"label","item-value":"value"},on:{change:function(e){return t.getList()}},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[a("v-btn",{attrs:{color:"gray"},on:{click:function(e){return t.resetSearch()}}},[t._v("重置")]),a("v-btn",{attrs:{color:"dark"},on:{click:function(e){return t.getList()}}},[a("v-icon",{attrs:{size:"14"}},[t._v("mdi-account-search")]),t._v(" 搜索\n      ")],1)],1)],1),a("v-divider"),a("v-layout",{attrs:{wrap:"","justify-space-between":""}},[a("v-flex",{attrs:{sm8:"",xs12:"",md8:"",lg8:""}},[a("v-btn",{staticClass:"inline-block",attrs:{color:"gray",icon:""},on:{click:function(e){return t.getList()}}},[a("v-icon",[t._v("mdi-autorenew")])],1)],1),a("div",[a("v-select",{staticClass:"pr-2 inline-block",attrs:{items:t.pageSizes,"item-text":"label","item-value":"value",label:"每页条数",required:""},on:{change:function(e){return t.getList()}},model:{value:t.query.pageSize,callback:function(e){t.$set(t.query,"pageSize",e)},expression:"query.pageSize"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoad,expression:"tableLoad"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.items,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"ID",prop:"id"}}),a("el-table-column",{attrs:{prop:"realname",label:"真实姓名"}}),a("el-table-column",{attrs:{prop:"fans",label:"评分"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.score)+"分")])]}}])}),a("el-table-column",{attrs:{prop:"commission",label:"余额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.surplus_amount)+"元")])]}}])}),a("el-table-column",{attrs:{prop:"cash_amount",label:"累计提现"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.cash_amount)+"元")])]}}])}),a("el-table-column",{attrs:{prop:"fine_amount",label:"罚款"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.fine_amount)+"元")])]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[2==e.row.status?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"green",small:""}},[t._v("正常")]):t._e(),3==e.row.status?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"warning",small:""}},[t._v("停止服务")]):t._e(),4==e.row.status?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"red",small:""}},[t._v("停止服务冻结账户")]):t._e()],1)]}}])}),a("el-table-column",{attrs:{label:"消息提醒"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1==e.row.is_notice?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"green",small:""}},[t._v("开启")]):t._e(),0==e.row.is_notice?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"warning",small:""}},[t._v("关闭")]):t._e()],1)]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-menu",{attrs:{"offset-y":"","content-class":"dropdown-menu",transition:"slide-y-transition"}},[a("v-btn",{attrs:{slot:"activator",small:"",color:"success"},slot:"activator"},[t._v("展开操作")]),a("v-card",[a("v-list",{attrs:{dense:""}},[3==e.row.status||4==e.row.status?a("v-list-tile",{on:{click:function(a){return t.statusChange(e.row.id,2)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("开启服务")}})],1):t._e(),2==e.row.status||4==e.row.status?a("v-list-tile",{on:{click:function(a){return t.statusChange(e.row.id,3)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("停止服务")}})],1):t._e(),2==e.row.status||3==e.row.status?a("v-list-tile",{on:{click:function(a){return t.statusChange(e.row.id,4)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("停止服务并冻结")}})],1):t._e(),0==e.row.is_notice?a("v-list-tile",{on:{click:function(a){return t.noticeChange(e.row.id,1)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("开启提醒")}})],1):t._e(),1==e.row.is_notice?a("v-list-tile",{on:{click:function(a){return t.noticeChange(e.row.id,0)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("关闭提醒")}})],1):t._e()],1)],1)],1)]}}])})],1)],1)],1),a("v-layout",{attrs:{wrap:"","justify-end":"","mt-3":""}},[a("el-pagination",{attrs:{"current-page":t.query.currentPage,"page-size":t.query.pageSize,layout:"total,  prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},l=[],i={data:function(){return{items:[],query:{id_number:"",realname:"",status:"2,3,4",ws_type:1,currentPage:1,pageSize:10},multipleSelection:[],pageSizes:this.$pageSizes,tableLoad:!1,total:0,dialog:!1,dialog2:!1,tempUser:{},pageLoad:!1}},props:{load:{type:Boolean,default:!1}},watch:{load:function(t){t&&(this.pageLoad=t)},pageLoad:function(t){t&&this.getList()}},mounted:function(){s=this},methods:{getList:function(){s.tableLoad=!0,s.$post("admin/service/list",this.query,function(t){s.tableLoad=!1,0===t.errno&&(s.items=t.data.data,s.total=t.data.count)})},resetSearch:function(){this.query.id_number="",this.query.realname="",this.query.status="2,3,4",this.getList()},handleSelectionChange:function(t){this.multipleSelection=t},getIds:function(){var t=[];for(var e in this.multipleSelection)t.push(this.multipleSelection[e].id);return t},handleCurrentChange:function(t){this.query.currentPage=t,this.getList()},statusChange:function(t,e){this.$post("admin/service/status",{id:t,status:e},function(t){0==t.errno&&(s.$message({showClose:!0,message:t.errmsg,type:"success"}),s.getList())})},noticeChange:function(t,e){this.$post("admin/service/notice",{id:t,is_notice:e},function(t){0==t.errno&&(s.$message({showClose:!0,message:t.errmsg,type:"success"}),s.getList())})},updateMsgChange:function(t){this.dialog=t},addminChange:function(t){this.dialog2=t},changeMsg:function(t){this.getList()}}},o=i,r=a("6691"),u=Object(r["a"])(o,n,l,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0f0bd5.fca107d9.js.map