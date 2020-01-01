<template>
  <el-container class="home_container">
    <el-header>
      <div class="home_title">MyBlog博客管理平台</div>
      <div class="home_userinfoContainer">
        <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link home_userinfo">
    {{currentUserName}}<i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="sysMsg">系统消息</el-dropdown-item>
            <el-dropdown-item command="MyArticle">我的文章</el-dropdown-item>
            <el-dropdown-item command="MyHome">个人主页</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-col :span="12" style="width: 100%;height: 100%">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            active-text-color="#00CD00" style="height: 100%">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">文章列表</el-menu-item>
                <el-menu-item index="1-2">文章发布</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-user-solid"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="3" >
              <i class="el-icon-s-operation"></i>
              <span slot="title">栏目管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-chat-dot-round"></i>
              <span slot="title">留言管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-microphone"></i>
              <span slot="title">系统公告</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-s-data"></i>
              <span slot="title">数据统计</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>

      </el-main>
    </el-container>
  </el-container>

</template>
<script>
  import {getRequest} from '../utils/api'
  export default{
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleCommand(command){
        var _this = this;
        if (command == 'logout') {
          this.$confirm('注销登录吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(function () {
            _this.currentUserName = '游客';
            _this.$router.replace({path: '/'});
          }, function () {
            //取消
          })
        }
      }
    },
    mounted: function () {
      var _this = this;
      var admin = JSON.parse(sessionStorage.getItem("admin"));
      this.currentUserName = admin.adminName;
    },
    data(){
      return {
        currentUserName: ''
      }
    }
  }
</script>
<style>
  .home_container {
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }

  .el-header {
    background-color: #1AAD5F;
    color: #333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .el-aside {
    background-color: #ECECEC;
  }

  .el-main {
    background-color: #fff;
    color: #000;
    text-align: center;
  }

  .home_title {
    color: #fff;
    font-size: 22px;
    display: inline;
    margin-left: 20px;
  }

  .home_userinfo {
    color: #fff;
    cursor: pointer;
  }

  .home_userinfoContainer {
    display: inline;
    margin-right: 20px;
  }
</style>
