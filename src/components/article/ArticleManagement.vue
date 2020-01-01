<template>
  <div>
    <!--按条件查询-->
    <div class="queryContent">
      <el-input placeholder="输入标题查找" v-model="inputTitle"></el-input>
      <el-date-picker v-model="inputLeiBie" type="date"  placeholder="选择类别"></el-date-picker>

      <el-button type="danger" @click="getArticleList()">搜索</el-button>

    </div>

    <!--表格-->
    <div class="table">
      <el-table :data="articleList" @selection-change="handleSelectionChange" style="width: 100%;" >
        <el-table-column fixed align="center" type="selection" :selectable="selectTable" v-model="checked"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="title" label="标题" ></el-table-column>
        <el-table-column  prop="lastEdittime" label="最近编辑时间" ></el-table-column>
        <el-table-column  prop="articleName" label="作者" ></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="" label="类别" ></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="" label="状态" >
          <template slot-scope="scope" width="140px">
            <span v-if="scope.row.status == 1">已发布</span>
            <span v-if="scope.row.status == 0">预览</span>
          </template>
        </el-table-column>

        <el-table-column  label="操作" >
          <template slot-scope="scope" class="edit">
            <span style="cursor: pointer;color: #F56C6C;" @click="deleteArticle(scope.row.uid)">删除</span>
            <span style="cursor: pointer;color: #F56C6C;" @click="updateTArticle(scope.row.uid)">编辑</span>
            <span style="cursor: pointer;color: #F56C6C;" @click="viewArticle(scope.row.uid)">查看</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pages">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>

    <!--查看文章-->
    <el-dialog
      title="查看文章信息"
      :visible.sync="dialogVisibleView"
      width="54%"
      :before-close="handleClose" class="summaryBox">

      <template>
        <!--{{articleDetails.title}}-->
        <!--{{articleDetails.articleName}}-->
        <!--<input type="textarea" v-model="articleDetails.content"/>-->
        <!--类别：{{articleDetails.leibie}}-->
        <!--状态：{{}}-->
        <!--发布时间：{{}}-->
      </template>

      <span slot="footer" class="dialog-footer">
     <el-button @click="dialogVisibleView = false">返回</el-button>
      </span>
    </el-dialog>


    <!--编辑文章-->
    <el-dialog
      title="编辑文章信息"
      :visible.sync="dialogVisibleUpdate"
      width="54%"
      :before-close="handleClose" class="summaryBox">

      <el-form :model="articleDetails" label-width="120px" >

        <el-form-item label="标题："  prop="title">
          <el-input size="small" style="width:580px;" v-model="articleDetails.title" readOnly/>
        </el-form-item>

        <!--<el-row>-->
        <!--<el-col :span="10">-->
        <el-form-item label="最近编辑时间："  prop="name">
          <el-input size="small" v-model="articleDetails.lastEdittime" readOnly/>
        </el-form-item>
        <!--</el-col>-->
        <!--<el-col :span="10" style="margin-left: 108px;">-->
        <el-form-item label="作者：" class="read" prop="title" >
          <el-input size="small" v-model="articleDetails.articleName " readOnly/>
        </el-form-item>
        <!--</el-col>-->
        <!--</el-row>-->


        <el-form-item label="类别：" prop="类别">
          <el-input size="small" v-model="articleDetails.articleName  " readOnly/>
        </el-form-item>

        <el-form-item label="状态：" prop="phone">
          <el-input size="small" v-model="articleDetails.articleName" readOnly/>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisibleUpdate = false">返回</el-button>
          <el-button @click="submitUpdate()">提交</el-button>
         </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "articlemManegement",
    data(){
      return{
        articleList:[
          {title:'',uid:'',lastEdittime:'',articleId:'',articleName:'',visible:'',reads:''}
        ],

        articleDetails:{
          title:'',uid:'',lastEdittime:'',articleId:'',articleName:'',visible:'',reads:'',
          content:'',
        },

        //  查询条件
        inputTitle:'',
        inputLeiBie:'',

        pageSize:5,
        currentPage:1,

        dialogVisibleView:false,
        dialogVisibleUpdate:false,

      }
    },
    created(){
      // this.getArticleList();
    },
    methods:{
      selectTable(row) {
        if (row.status == 0) {
          return true;
        } else {
          return false;
        }
      },
      handleSelectionChange(val) {
        this.checkObj = val;
      },
      //翻页设置
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.getArticleList();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getArticleList();
        console.log(`当前页: ${val}`);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      //得到文章列表
      getArticleList(){
        let data={
          title:this.inputTitle,
          leiBie:this.inputLeiBie,
          pageSize:this.pageSize,
          currentPage:this.currentPage,
        }
      },
      deleteArticle(data){

      },
      updateArticel(data){
        this.dialogVisibleUpdate = true;
      },
      viewArticle(data){
        this.dialogVisibleView = true;
      },
      submitUpdate(){
        let data={

        };

      },
    }
  }
</script>

<style scoped>

</style>
