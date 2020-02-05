<template>
	<div id="search-result">
		<p v-if="res.length > 0">
			关键词 <span>{{ $route.query.s }}</span> 共发现
			<span>{{ res.length }}</span>
			个结果
		</p>
		<p v-else>
			<template v-if="resResult">
				正在搜索关键词 <span>{{ $route.query.s }}</span> ...
			</template>
			<template v-else>
				关键词 <span>{{ $route.query.s }}</span> 没有发现结果
			</template>
		</p>

		<mu-button
			flat
			@click="
				() => {
					$router.push({ name: 'search' });
				}
			"
			>返回搜索页面</mu-button
		>

		<mu-container :fluid="true">
			<mu-row :gutter="true">
				<essay-bar
					v-loading="loadingStatus"
					v-for="(item, index) in res"
					:key="index"
					:essay="item"
				></essay-bar>
			</mu-row>
		</mu-container>
		<mu-flex justify-content="center">
			<mu-pagination
				raised
				circle
				:total="totalPage"
				:page-size="1"
				:current.sync="page"
			></mu-pagination>
		</mu-flex>
	</div>
</template>

<script lang="ts">
import { createComponent, ref, watch, onUnmounted } from "@vue/composition-api";
import { fetchSearchText } from "@/services/fetch";
import essayBar from "@/components/Home/essay-bar.vue";

export default createComponent({
	name: "search-result",
	components: {
		essayBar
	},
	setup(props, ctx) {
		const loadingStatus = ref(false);
		const page = ref(1);
		const totalPage = ref(5);
		const res = ref([]);
		const label = ref("等待搜索结果 …");
		const resResult = ref(true);
		function loadAction() {
			loadingStatus.value = true;
			(async () => {
				const response = await fetchSearchText(
					ctx.root.$route.query.s as string,
					page.value
				).catch(() => {
					(ctx.root as any).$alert("已加载所有符合条件的文章！");
					totalPage.value = page.value - 1;
					return false;
				});

				if (typeof response !== "boolean") {
					(res.value as any) = response.data;
					label.value = `关键词 ${ctx.root.$route.query.s} 发现有${res.value.length}个结果`;
					resResult.value = response.data.length ? true : false;
				}
				loadingStatus.value = false;
			})();
		}

		const pageWatcher = watch([() => page.value], () => {
			loadAction();
		});

		onUnmounted(() => {
			pageWatcher();
		});
		loadAction();
		return { res, label, page, resResult, totalPage, loadingStatus };
	}
});
</script>

<style lang="less" scoped>
#search-result {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		margin: 35px 10px 5px 10px;
		unicode-bidi: isolate;
		font-variant-numeric: tabular-nums;
		line-height: 1.618;
		font-size: 18px;
		display: block;
		color: @textColor;
		font-weight: 300;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		text-align: center;
		span {
			color: orange;
		}
	}

	.mu-button {
		margin-bottom: 25px;
		color: @textColor;
	}

	.mu-pagination {
		margin-top: 20px;
	}
}
</style>
