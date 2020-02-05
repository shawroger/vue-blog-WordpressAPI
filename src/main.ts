import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/global.less";

import "./plugins/vue-multiple-back-top";
import "./plugins/highlight-js";
import "./plugins/vue-progressbar";
import "./plugins/composition-api";
import "./plugins/vue-clipboard2";
import "./plugins/muse-ui";
import "./plugins/axios";

import "./plugins/directives";
import "./plugins/filters";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
