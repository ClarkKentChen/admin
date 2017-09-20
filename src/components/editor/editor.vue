<template>
  <div class='man'>
    <div class='man-breadcrumb'>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <section class='man-from'>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="编号" prop="id">
          <el-input v-model="ruleForm.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="职业" prop="occupation">
          <el-input v-model="ruleForm.occupation"></el-input>
        </el-form-item>
        <el-form-item label="邮编" prop="postcode">
          <el-input v-model="ruleForm.postcode"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" prop="date">
          <el-col :span="11">
            <el-date-picker value='2017-03-08' v-model="ruleForm.date" type="date" style="width: 100%;" placeholder="选择日期">
            </el-date-picker>
          </el-col>

        </el-form-item>

        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="ruleForm.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="爱吃的" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="猪肉" name="type"></el-checkbox>
            <el-checkbox label="蔬菜" name="type"></el-checkbox>
            <el-checkbox label="零食" name="type"></el-checkbox>
            <el-checkbox label="啥都能吃" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
const cityOptions = ['蔬菜', '水果', '肉类', '海鲜'];
// let date = new Array();

export default {

  data() {
    return {
      bdate: {},
      // date:[YYYY-MM-DD],
      id: this.$route.params.id,
      // checkedCities1: ['蔬菜', '肉类'],
      cities: cityOptions,
      ruleForm: {
        id: '',
        name: '',
        age: '',
        occupation: '',
        postcode: '',
        date: '',
        gender: '',
        type: [],
        desc: ''
      }, rules: {
        id: [
          { required: true, message: '请输入id', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1到 5 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1到 5 个字符', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { min: 1, max: 3, message: '长度在 1到 3 个字符', trigger: 'blur' }

        ],
        occupation: [
          { required: true, message: '请填写自己的职业', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1到 5 个字符', trigger: 'blur' }
        ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        postcode: [
          { required: true, message: '请填写自己的邮编', trigger: 'blur' },
          { min: 5, max: 8, message: '长度在 5到 8 个字符', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请至少选择一个', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择1种自己喜欢的食物', trigger: 'change' },

        ]
      }

    }
  }, created() {
    // 遍历所有的缓存数据
    for (var key in localStorage) {

      //this.id 是拿到了缓存的key  下面是拿到Key的数据
      var item = JSON.stringify(localStorage.getItem(this.id));
      var item = JSON.parse(localStorage[this.id])
      // 吧数据绑定到rulfeForm 表单上
      this.ruleForm = item;
      console.log(this.ruleForm);
      console.log(this.ruleForm.date);
      this.ruleForm.date = this.ruleForm.date;
      this.ruleForm = item;
    }

  },

  methods: {
    // 表单提交事件
    submitForm(formName) {
      // 格式化日期
      var m = this.ruleForm.date.getMonth() + 1;
      var y = this.ruleForm.date.getFullYear();
      var d = this.ruleForm.date.getDay();
      console.log(this.ruleForm.date);
      // 格式化完成
      var bdate = y + "-" + m + "-" + d;

      this.$refs[formName].validate((valid) => {

        this.ruleForm.date = bdate;

        if (valid) {
          alert('submit!');
          window.localStorage.setItem(this.ruleForm.id, JSON.stringify(this.ruleForm));//存储date数据

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
.man .man-breadcrumb {
  height: 50px;
  padding-top: 20px;
  padding-left: 20px;
  /* border: 1px solid red; */
  width: 100%;
}







/* 表单样式 */

.man .man-from {
  width: 600px;
  padding: 30px 20px;
  box-shadow: 0 0 5px rgba(52, 52, 52, 0.5);
  /* border:1px solid red; */
  margin: 0 auto;
  height: auto;
}
</style>
