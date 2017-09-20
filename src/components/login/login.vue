<template>

    <div class="login" v-show="detailShow">
      <div class='content'>
        <h3 class='title'>超人-ADMIN V1.1</h3>
        <div class="container">
          <h3>登录你的帐号</h3>
          <label class="title">
            帐号
          </label>
          <div class="input-name">
            <el-input placeholder="请输入你的账号" v-model="name">
              <template slot="prepend">
                <i class="icon iconfont icon-userID"></i>
              </template>
            </el-input>
          </div>
          <div class="input-passworld">
            <label class="title">
              密码
            </label>
            <div class="input-name">
              <el-input placeholder="请输入你的密码" type='password' v-model="passwolrd">
                <template slot="prepend">
                  <i class="icon iconfont icon-icons64x6429"></i>
                </template>
              </el-input>
            </div>
            <div class="from-action">
              <el-button type="warning" @click="login"> 登 录 </el-button>
            </div>
          </div>
        </div>
      </div>
          <Loading v-if="isLoging" > </Loading>
    </div>


</template>

<script>
import Loading from '../Loading/Loading.vue'
import './iconfont.js'
import './iconfont.eot'
import './iconfont.svg'
import './iconfont.woff'
import './iconfont.ttf'
export default {
  data() {
    return {
      isLoging: false,
      detailShow: true,
      input: '',
      passwolrd: '',
      name: ''

    }
  },

  created() {
    console.log(this);
  },
  components:{
  Loading
  },
  methods: {
    //登录判断
    login() {
      if (this.name != '' && this.passwolrd != '') {
        //跳转对的条件
        this.toLogin();
      }
    },

    toLogin() {
      //给密码加密
      // let password_sha = hex_sha1(hex_sha1(this.password));
      //  吧账号密码发送给后台
      let loginParam = {
        //账号
        name: this.name,
        //密码
        passwolrd: this.passwolrd
      };
      console.log(this.name);
      //设置cookie 保存用户数据 = //李白打野带节奏到主页
        document.cookie=this.name+'='+this.name;
        // SetCookie(document.all.username.value,document.all.password.value);

      //
      this.isLoging = true;

      setTimeout(() => {
        // /登录状态7天后过期
        let expireDays = 1000 * 60 * 60 * 24 * 7;
        this.isLoging = false;
        //登录成功跳转的页面
        this.$router.push('/Admin');

      }, 3000)

    }
  }
}
</script>

<style>
@import './iconfont.css';
html {
  height: 100%;
  width: 100%;
  /* position: absolute; */
}

body {
  position: relative;
  height: 100%;
  overflow: hidden;
  width: 100%;
}

body {

}
.app{
height: 100%;

  width: 100%;
  }
.login {
  background: url('./a.jpg') no-repeat;
  /* background-color: #d2d2d2; */
 background-size: cover;
  width: 100%;
  height: 100%;
}
.login .content {
  /* padding-top: 100px; */
  width: 100%;
  position: absolute;
  top: 50%;
  margin-top: -250px;
  overflow: hidden;
  /* padding-bottom: 200px; */
}

.content .title {
  padding-bottom: 10px;
  font-size: 24px;
  color: #fff;
  text-align: center;
}

.login .container {
  width: 350px;
  margin: 0 auto;
  /* padding: 30px; */
  border: 1px solid red;
  height: 400px;
  padding: 30px 15px 15px;
  background-color: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.container h3 {
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 30px;
  color: #fff;
}

.login .container .title {
  /* margin-left: 30px; */
  font-size: 16px;
}

.input-name .el-input__inner {
  background-color: rgba(0, 0, 0, 0.25) !important;
  /* height: 35px !important; */
  color: rgb(255, 255, 255);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.input-name .el-input-group__prepend {
  background-color: rgba(0, 0, 0, 0.25) !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.input-name .el-input-group__prepend i {
  color: #fff;
}

.input-name {
  /* margin-left: 30px; */
  margin-top: 20px;
  /* width: 200px; */
}

.pass-title {
  margin: 30px 0;
  overflow: hidden
}

.input-passworld {
  margin: 20px 0;
}

.from-action {
  background-color: rgba(0, 0, 0, 0.25);
  margin-left: -15px;
  margin-right: -15px;
  text-align: center;
  margin-top: 20px;
  padding: 19px 20px 20px;
}

.from-action button a {
  color: #fff;
}
</style>

