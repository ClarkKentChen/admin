<template>
<div class='wrapper'>
<div class="nav">
<el-row class="tac">
  <el-col >

    <el-menu  theme="dark" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="icon iconfont icon-huiyuan1"></i>会员管理</template>
        <el-menu-item-group>

        <router-link to='/Navber/main'>  <el-menu-item index="1-1">添加会员</el-menu-item></router-link>
          <el-menu-item index="1-2">修改会员</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-menu-item index="2"><i class="icon iconfont icon-huiyuan"></i>员工管理</el-menu-item>
      <el-menu-item index="3"><i class="icon iconfont icon-quanxian2"></i>权限管理</el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</div>
 <div class="content">
     <router-view ></router-view>
      </div>
</div>
</template>

<script>
import './iconfont.js';
import './iconfont.eot';
import './iconfont.svg';
import './iconfont.ttf';
import './iconfont.woff';
export default {
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
@import './iconfont.css';
.el-menu-item  .icon ,.el-submenu__title .icon{
  font-size: 22px;
  margin-right: 10px;
}
.nav .tac .el-col .el-menu-vertical-demo{
      /* background-color: rgba(0, 0, 0, 0.25); */

}
.nav .tac .el-col .el-menu-vertical-demo .el-menu{
      /* background-color: rgba(0, 0, 0, 0.5); */
      /* color: #fff !important; */

}
.nav .tac .el-col .el-menu-vertical-demo .el-menu div,li{
      /* color: #fff !important; */

}
.nav .tac .el-col .el-menu-vertical-demo .el-menu li:hover{
  /* bac */
}

.admin .wrapper{
width:100%;
background-color: #fff;
display: table;
min-height: 1200px;
border: 1px solid red;
}
.admin .wrapper .nav{
  width: 250px;
  background-color:#324157;
  display: table-cell;
  min-height: 1500px;
  border: 1px solid red;
}
.admin .wrapper  .content{
  display: table-cell;
  min-height: 1500px;
  overflow: hidden;
}
</style>


