<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex md3 lg2>
        <v-text-field
          v-model="query.phone_number"
          label="手机号"
          class="pr-2"
          v-on:keyup.enter="getList()"
        ></v-text-field>
      </v-flex>
      <v-flex md3 lg2>
        <v-text-field
          v-model="query.realname"
          label="真实姓名"
          class="pr-2"
          v-on:keyup.enter="getList()"
        ></v-text-field>
      </v-flex>
      <v-flex md3 lg2>
        <v-text-field
          v-model="query.id_number"
          label="身份证号"
          class="pr-2"
          v-on:keyup.enter="getList()"
        ></v-text-field>
      </v-flex>
      <v-flex md3 lg2>
        <v-select
          v-model="query.status"
          :items="[{label:'全部',value:'1,2'},{label:'拒绝',value:1},{label:'通过',value:2}]"
          label="状态"
          item-text="label"
          item-value="value"
          @change="getList()"
        ></v-select>
      </v-flex>
      
    </v-layout>
    <v-layout row wrap>
      <v-flex xs-12 md-12 lg-12 sm-12>
        <v-btn color="gray" @click="resetSearch()">重置</v-btn>
        <v-btn color="dark" @click="getList()">
          <v-icon size="14">mdi-account-search</v-icon>&nbsp;搜索
        </v-btn>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>

    <v-layout wrap justify-space-between>
      <v-flex sm8 xs12 md8 lg8>

        <v-btn color="gray" class="inline-block" icon @click="getList()">
          <v-icon>mdi-autorenew</v-icon>
        </v-btn>
      </v-flex>
      <div>
        <v-select
          v-model="query.pageSize"
          :items="pageSizes"
          item-text="label"
          @change="getList()"
          item-value="value"
          label="每页条数"
          class="pr-2 inline-block"
          required
        ></v-select>
      </div>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs-12 md-12 lg-12 sm-12>
        <el-table
          ref="multipleTable"
          :data="items"
          tooltip-effect="dark"
          style="width: 100%"
          border
          v-loading="tableLoad"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="ID" prop="id" width="60"></el-table-column>
          
          <el-table-column label="姓名">
            <template slot-scope="scope">
              <div>{{scope.row.realname || '-- --'}}</div>
            </template>
          </el-table-column>
         
          <el-table-column label="身份证号">
            <template slot-scope="scope">
              <div>{{scope.row.id_number || '-- -- --'}}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作描述">
            <template slot-scope="scope">
              <div>{{scope.row.refuse_des || '-- -- --'}}</div>
            </template>
          </el-table-column>
          
          <el-table-column prop label="状态">
            <template slot-scope="scope">
              <div>
                <v-chip
                  v-if="scope.row.status == 2"
                  class="ma-2"
                  text-color="white"
                  color="success"
                  small
                >通过</v-chip>
                <v-chip
                  v-if="scope.row.status == 1"
                  class="ma-2"
                  text-color="white"
                  color="red"
                  small
                >拒绝</v-chip>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作日期">
            <template slot-scope="scope">
              <div>{{scope.row.create_time || '-- -- --'}}</div>
            </template>
          </el-table-column>
        </el-table>
      </v-flex>
    </v-layout>
    <v-layout wrap justify-end mt-3>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="query.currentPage"
        :page-size="query.pageSize"
        layout="total,  prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </v-layout>
    <dover v-model="dialog" :msg="tempAgent" @change="updateMsgChange" @changemsg="changeMsg" />
    <!-- <agent-add v-model="dialog2"  @change="addminChange" @changemsg="changeMsg" /> -->
  </v-container>
</template>
<script>
import dover from "./doVerify";
let _this;
export default {
  components: { dover },
  data() {
    return {
      items: [],
      query: {
        realname: "",
        id_number: "",
        status: "1,2",
        sorts: "erd_wxapp_service_verify.create_time desc",
        currentPage: 1,
        pageSize: 10
      },
      api:this.$api,
      multipleSelection: [],
      pageSizes: this.$pageSizes,
      tableLoad: false,
      total: 0,
      dialog: false,
      dialog2: false,
      tempAgent: {}
    };
  },
  mounted() {
    _this = this;
    this.getList();
  },
  methods: {
    //获取列表
    getList() {
      this.tableLoad = true;
      this.$post("verify/log", this.query, function(res) {
        _this.tableLoad = false;
        if (res.errno === 0) {
          _this.items = res.data.data;
          _this.total = res.data.count;
        }
      });
    },
    //重置搜索
    resetSearch() {
      this.query.phone_number = "";
      this.query.id_number = "";
      this.query.status = "1,2";
      this.query.realname = "";
      this.getList();
    },

    //选中
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    //获取id
    getIds() {
      let arr = [];
      for (let i in this.multipleSelection) {
        arr.push(this.multipleSelection[i].id);
      }
      return arr;
    },

    //跳转页码
    handleCurrentChange(val) {
      this.query.currentPage = val;
      this.getList();
    },

    //启用或禁用
    statusChange(status) {
      if (this.$checkSelect(this.multipleSelection)) {
        this.$post(
          "agent/serve",
          {
            ids: this.getIds().toString(),
            is_serve: status
          },
          function(res) {
            if (res.errno == 0) {
              _this.$message({
                showClose: true,
                message: res.errmsg,
                type: "success"
              });
              _this.getList();
            }
          }
        );
      }
    },

    //启用或禁用
    crossChange(status){
      if (this.$checkSelect(this.multipleSelection)) {
        this.$post(
          "agent/cross",
          {
            ids: this.getIds().toString(),
            cross_city_service: status
          },
          function(res) {
            if (res.errno == 0) {
              _this.$message({
                showClose: true,
                message: res.errmsg,
                type: "success"
              });
              _this.getList();
            }
          }
        );
      }
    },

    //回收
    recover() {
      if (this.$checkSelect(this.multipleSelection)) {
        this.$confirm("删除否此数据将无效，可在回收站恢复, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$post(
              "agent/recover",
              {
                ids: this.getIds().toString()
              },
              function(res) {
                if (res.errno == 0) {
                  _this.$message({
                    showClose: true,
                    message: res.errmsg,
                    type: "success"
                  });
                  _this.getList();
                }
              }
            );
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    //绑定对话框的值
    updateMsgChange(val) {
      this.dialog = val;
    },
    addminChange(val) {
      this.dialog2 = val;
    },
    //更新值
    changeMsg(e) {
      this.getList();
    }
  }
};
</script>
