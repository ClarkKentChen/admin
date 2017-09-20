// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../src/components/App/App'
import router from './router'
// import { Button, Select,Input,Menu } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// import 'element-ui/lib/theme-default/index.css'
// Vue.use(Button)
// Vue.use(Menu)
Vue.use(ElementUI)

// router.push('/Navber/man');
// Vue.use(router)
// Vue.use(Input)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  watch:{
    '$route':'checkLogin'
  },
  created(){
    this.checkLogin();
  },

  methods:{
      checkLogin(){
        //取到是否存在cokie值            ----------这里有问题 晚点问下
        let username = document.cookie.split(';');
        // console.log(ca);
        if(username==''){
            router.push('/login')
        }

      }
  },
  template: '<App/>',
  components: { App },
})


