import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// 适配htim字体大小
// npm i amfe-flexible
// npm install  postcss-pxtorem -D
import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
