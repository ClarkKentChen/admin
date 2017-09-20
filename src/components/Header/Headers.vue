<template>
<div class='headers'>
  <div class='logo'>
超人后台管理系统
  </div>
<el-menu theme="dark"  class="el-menu-demo" mode="horizontal" >
  <!-- <el-menu-item index="1">处理中心</el-menu-item> -->
    <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">前台首页</a></el-menu-item>

  <el-submenu index="2">
    <template slot="title" class="right">admin</template>
    <el-menu-item index="2-1">个人信息</el-menu-item>
    <el-menu-item index="2-2">切换账号</el-menu-item>
    <el-menu-item index="2-3">退出</el-menu-item>
  </el-submenu>
</el-menu>


</el-menu>

</div>
</template>

<script>
export default{
data(){

},

}

</script>>



<style>
 .headers{
   /* overflow: hidden; */
  background-color: #08a2ba;
  height: 61px;
   }
 .headers .el-menu-demo {
  width: 30%;
  padding-right: 10px;
  float:right;
  background-color: rgba(0, 0, 0, 0);
  height: 61px;
  padding-left: 200px;

}
.el-menu--horizontal .el-submenu .el-submenu__title{
  color: #fff;
}
.el-menu--horizontal .el-submenu .el-submenu__title:hover{
background-color: #08a2ba;
}
.el-menu-item a{
  color: #fff !important;
}
 .headers .el-menu-demo li{
   float:right;
 }
 .headers .logo{
   font-size: 24px;
   color: #fff;
   margin-left: 20px;
   float: left;
  line-height: 61px;
 }

 .headers  .right{
   float: right;
 }
.is-active{
  background: rgba(255,255,255,0);
  color: #fff !important;
}
.el-menu-item:hover{
  background-color: #08a2ba !important;
}
</style>

