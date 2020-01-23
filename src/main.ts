import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/composition-api';
import './plugins/vue-clipboard2';
import './plugins/element-ui';
import './plugins/axios';

import './plugins/directives';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
