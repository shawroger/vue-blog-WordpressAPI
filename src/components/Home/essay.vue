<template>
	<div id="home-essay">
		<mu-container :fluid="true">
			<mu-row :gutter="true">
				<essay-bar
					v-for="(item, index) in settingState.cache ? $store.state.posts : res"
					:key="index"
					:essay="item"
				></essay-bar>
				<essay-loadmore
					v-on:load-more="loadAction"
					:loadStatus="loadStatus"
					:loadingStatus="loadingStatus"
				/>
			</mu-row>
		</mu-container>
	</div>
</template>

<script lang="ts">
import { createComponent, ref, Ref, computed } from "@vue/composition-api";
import essayBar from "./essay-bar.vue";
import essayLoadmore from "./essay-loadmore.vue";
import { fetchEssay, EssayReponse } from "@/services/fetch";

export default createComponent({
	name: "home-essay",
	components: { essayBar, essayLoadmore },
	setup(props, ctx) {
		const page = computed(() => ctx.root.$store.state.page as number);
		const settingState = computed(() => ctx.root.$store.state.settings);

		const res: any = ref(
			settingState.value.cache ? ctx.root.$store.state.posts : []
		);
		const loadStatus = ref(1);
		const loadingStatus = ref(0);

		function loadAction() {
			if (!loadStatus.value) return;
			loadingStatus.value = 1;
			if (res.value.length === 0) {
				ctx.root.$store.commit("SET_PAGE", 1);
			}
			(async () => {
				const response = await fetchEssay(page.value).catch(() => {
					(ctx.root as any).$alert("文章已加载完毕");
					loadStatus.value = 0;
					return false;
				});
				if (typeof response !== "boolean") {
					res.value = [...res.value, ...response.data];
					ctx.root.$store.commit("ADD_PAGE");
					if (settingState.value.cache) {
						ctx.root.$store.commit("SET_POSTS", res.value);
					}
				}
				loadingStatus.value = 0;
			})();
		}

		if (
			res.value.length === 0 ||
			(res.value.length !== 0 && settingState.value.autofetch === true)
		) {
			loadAction();
		}

		return {
			res,
			loadAction,
			loadStatus,
			settingState,
			loadingStatus
		};
	}
});
</script>

<style lang="less">
#home-essay {
	width: 100%;
}
</style>
