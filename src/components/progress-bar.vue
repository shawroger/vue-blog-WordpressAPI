<template>
	<vue-progress-bar></vue-progress-bar>
</template>

<script lang="ts">
import { createComponent, onMounted } from "@vue/composition-api";

export default createComponent({
	name: "progress-bar",
	setup(props, ctx) {
		(ctx.root as any).$Progress.start();
		ctx.root.$router.beforeEach((to, from, next) => {
			if (to.meta.progress !== undefined) {
				let meta = to.meta.progress;
				(ctx.root as any).$Progress.parseMeta(meta);
			}
			(ctx.root as any).$Progress.start();
			next();
		});
		ctx.root.$router.afterEach((to, from) => {
			(ctx.root as any).$Progress.finish();
		});

		onMounted(() => {
			(ctx.root as any).$Progress.finish();
		});
	}
});
</script>
