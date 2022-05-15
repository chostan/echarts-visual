import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 引入全局样式表
import '@/assets/css/index.less';

import * as filters from '@/filters/index';

Object.keys(filters).forEach((key) => {
  // 注册自定义过滤器
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
