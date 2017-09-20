<template>
  <div class="information">
    <div class='information-breadcrumb'>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>

      </el-breadcrumb>
    </div>
    <div class="search">
      <div class="search-content">
      <div class="search-input">
        <el-input placeholder="请输入您的编号" icon="search" v-model="input2" :on-icon-click="handleIconClick">
        </el-input>
</div>
      </div>
    </div>
    <section class='information-section'>
      <el-table :data="tableData4" border style="width: 100%">
        <el-table-column prop="id" label="编号" width="120">
        </el-table-column>
        <el-table-column fixed prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="occupation" label="职业" width="100">
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="80">
        </el-table-column>
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="120">
        </el-table-column>
        <el-table-column prop="postcode" label="邮编" width="120">
        </el-table-column>
        <el-table-column prop="type" label="爱吃的" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template scope="scope">
            <el-button size="small">
            <router-link to='/Navber/man'>
            添加
          </router-link>
          </el-button>

            <el-button type="warning" size="small" id='key' >
              <router-link :to="{name: 'editor', params: {id:tableData4[scope.$index].id}}" style="color:#fff">
                修改
              </router-link>
            </el-button>
          <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="danger"
          size="small">
          移除
        </el-button>

          </template>
        </el-table-column>
      </el-table>
    </section>
    <div class='currentPage'>
      <div class='currentPage-right'>
        <div class="block">
          <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tableData', 'labelData'],
  methods: {




  },
  data() {
    // console.log(this.dataman);
    return {
      input2: '',
      nub: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData4: [

      ],
    }
  },

  watch: {


    '$route'(val, oldval) {

      console.log(val, oldval)
      console.log(val.path)
    }
  },
  created() {
    console.log(this.nub);
    //    console.log(this.tableData4.id);
    // var data = [];
    for (var key in localStorage) {
      var dataman = JSON.parse(localStorage[key])
      // console.log(key);
      this.tableData4.push(dataman)
    }

  },
  methods: {
     show(index) {
      //   console.log(index);
    },
    // dateman:[],
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    addRow(index, rows) {

      console.log(index)
      //  var key=this.tableData4[index].id;
      rows.splice(index, 1);
      this.nub = index;
      console.log(index)
    },
 deleteRow(index, rows) {
          console.log(index)
      //  删除数据
      var key = this.tableData4[index].id;
      rows.splice(index, 1);
      this.nub=index;

      localStorage.removeItem(key);
         console.log(index);
        console.log(rows);
    },
    //  搜索点击事件的钩子
    handleIconClick(ev, value) {
      console.log(ev);
      console.log(this.input2);
      // 循环出缓存数据
      for (var key in localStorage) {
        var dataman = JSON.parse(localStorage[key]);
        var search = JSON.parse(localStorage.getItem(this.input2));
        console.log(search);
        // console.log(dataman[002])
        //打印是否获取搜索框的数据
        console.log(this.input2);
        // 转换key为字符串
        var key = JSON.stringify(key);
        if (key.indexOf(this.input2) == true) {
          this.tableData4 = [];
          console.log(this.tableData4);
          this.tableData4.push(search)
        }

      }

    }
  }
}
</script>
<style>
.content{
  background-color: #f7f7f7
  }
.information {}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}




/* //面包屑样式 */

.information-breadcrumb {
  /* padding: 20px; */
  background-color: #fff;
  height: 30px;
  padding-left: 20px;
  border-bottom: 1px  solid #ddd;
  line-height: 30px;
}

.information-breadcrumb span {
  color: #000;
    line-height: 30px;

  display:inline-block;
}




/* //面包屑样式 Over*/

.information .information-section {
  padding: 20px;
  height: auto;
}




/* 分页样式 */

.information .currentPage {
  height: 50px;
  padding-top: 20px;
  /* border: 1px solid red; */
  width: 100%;
}

.currentPage-right {
  float: right;
  padding-right: 20px;
}


/* //搜索 */

.search {
  height: 60px;
  width: 100%;
  margin: 20px 0;
}

.search-content{
  margin: 0 20px;
    border: 1px solid #dddddd;

}

.search-input {
  width: 300px;
  padding: 20px;
  margin: 0 auto;
}
</style>
