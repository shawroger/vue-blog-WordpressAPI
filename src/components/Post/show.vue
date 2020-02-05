<template>
	<div id="post-show">
		<mu-container>
			<mu-row gutter justify-content="center">
				<mu-col span="12" sm="12">
					<mu-card>
						<mu-card-header title="Roger" :sub-title="res.date | toDate">
							<mu-avatar slot="avatar">
								<img
									src="http://diary.shawroger.com/view/wp-content/uploads/2019/08/rogerpic.jpg"
								/>
							</mu-avatar>
						</mu-card-header>
						<mu-card-media :title="res.title.rendered" v-show="res.id !== -1">
							<img src="https://api.ooopn.com/image/bing/api.php" />
						</mu-card-media>
						<mu-card-text>
							<div
								id="post-show-render"
								v-highlight
								v-html="res.content.rendered"
							></div>
						</mu-card-text>
						<mu-card-actions>
							<mu-button
								flat
								v-clipboard:copy="copyMessage"
								v-clipboard:success="showCopyTips"
								>Share</mu-button
							>
							<mu-button
								flat
								@click="
									() => {
										$router.push('/');
									}
								"
								>BACK</mu-button
							>
						</mu-card-actions>
					</mu-card>
				</mu-col>
			</mu-row>
		</mu-container>
		<mu-snackbar
			position="bottom-end"
			:open="openCopyTips"
			color="whiteSmoke"
			text-color="#3c4858"
		>
			文章分享链接复制成功 😘

			<mu-button
				flat
				slot="action"
				@click="
					() => {
						openCopyTips = false;
					}
				"
				>OK</mu-button
			>
		</mu-snackbar>
	</div>
</template>

<script lang="ts">
import { createComponent, ref, computed } from "@vue/composition-api";
import { fetchEssayContent } from "@/services/fetch";
import { useScript } from "@/utils/useHooks";
export default createComponent({
	name: "post-show",
	setup(props, ctx) {
		const res = ref({
			id: -1,
			date: new Date().toString(),
			title: {
				rendered: "文章加载中…"
			},
			author: 0,
			content: {
				rendered: "<center>文章加载中…</center>"
			},
			excerpt: {
				rendered: ""
			}
		});

		const openCopyTips = ref(false);

		const copyMessage = computed(
			() =>
				`分享Roger Cafe的文章《${res.value.title.rendered}》-- 分享链接：${location.href}`
		);
		function showCopyTips() {
			let timer;
			if (timer) {
				clearTimeout(timer);
			}
			openCopyTips.value = true;
			timer = setTimeout(() => {
				openCopyTips.value = false;
			}, 1500);
		}
		function getContent() {
			(async () => {
				const response = await fetchEssayContent(ctx.root.$route.params.id);
				res.value = response.data;
				document.title = "Roger Cafe -- " + res.value.title.rendered;
			})();
		}

		getContent();
		return {
			res,
			copyMessage,
			openCopyTips,
			showCopyTips
		};
	}
});
</script>

<style lang="less" scoped>
#post-show {
	width: 100% !important;
	padding-top: 50px;
	.mu-container,
	.mu-card {
		padding: 5px;
		width: 100%;
	}

	@media screen and (max-width: 576px) {
		.mu-container,
		.mu-card {
			padding: 5px;
			width: 95vw;
		}
	}
	.mu-card-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
}
</style>
