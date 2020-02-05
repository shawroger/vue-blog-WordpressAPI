<template>
	<mu-col span="12" md="6" xl="3" v-loading="loadingStatus">
		<mu-container>
			<mu-card>
				<mu-card-title
					:title="loadStatus ? essay.title.rendered : '所有文章加载完毕'"
					:sub-title="essay.date | toDate"
				></mu-card-title>
				<mu-card-text>
					<mu-button
						color="primary"
						:disabled="!loadStatus"
						@click="
							() => {
								$emit('load-more');
							}
						"
					>
						{{ loadStatus ? "LOAD MORE" : "文章已加载完" }}
					</mu-button>
				</mu-card-text>
			</mu-card>
		</mu-container>
	</mu-col>
</template>

<script lang="ts">
import { createComponent, computed, ref } from "@vue/composition-api";
import { EssayReponse } from "@/services/fetch";
import { useStyles, useWindow } from "@/utils/useHooks";

interface Props {
	essay: EssayReponse;
}
export default createComponent({
	name: "essay-loadmore",
	props: {
		essay: {
			default: () => {
				return {
					id: 0,
					date: new Date().toLocaleDateString(),
					title: {
						rendered: "加载更多"
					},
					author: 0,
					content: {
						rendered: ""
					},
					excerpt: {
						rendered: ""
					}
				};
			}
		},
		loadStatus: {
			default: 1
		},
		loadingStatus: {
			default: 0
		}
	},
	setup(props: Props, ctx) {
		const { width } = useWindow();
		const styleWidth = computed(() => {
			if (width.value >= 992) {
				return "233px";
			} else if (width.value > 768 && width.value < 992) {
				return "212px";
			}
		});
		const check = ref(true);
		const page = computed(() => ctx.root.$store.state.page as number);
		return { page, check };
	}
});
</script>

<style lang="less" scoped>
.mu-card-title {
	word-break: keep-all;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.mu-card-text {
	p {
		margin: 0px;
	}
	display: flex;
	flex-direction: row-reverse;

	.mu-button {
		margin-top: 10px;
	}
}
.mu-card {
	width: 100% !important;
	margin-bottom: 25px !important;
	padding: 15px !important;
	min-height: 232px !important;
}
</style>
