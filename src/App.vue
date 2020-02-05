<template>
	<div id="app">
		<app-nav></app-nav>
		<router-view></router-view>
		<app-footer></app-footer>
		<progress-bar></progress-bar>
		<app-back-top></app-back-top>
	</div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import { fetchCategories } from "@/services/fetch";

import appNav from "./components/nav.vue";
import appFooter from "./components/footer.vue";
import progressBar from "./components/progress-bar.vue";
import appBackTop from "./components/back-top.vue";

export default createComponent({
	name: "app",
	components: {
		appNav,
		appFooter,
		progressBar,
		appBackTop
	},
	setup(p, ctx) {
		(async () => {
			const response = await fetchCategories();
			ctx.root.$store.commit("FETCH_CATE", response.data);
		})();
	}
});
</script>

<style lang="less" scoped>
#app {
	width: 100%;
}
</style>
