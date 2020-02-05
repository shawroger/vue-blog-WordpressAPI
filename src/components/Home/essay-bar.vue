<template>
	<mu-col span="12" md="6" xl="3" v-if="essay.excerpt.rendered.length > 0">
		<mu-container>
			<mu-card>
				<mu-card-title
					:title="essay.title.rendered"
					:sub-title="
						`${toDate(essay.date)}  ·  ${getCateName(essay.categories[0])}`
					"
					@click="titleClick(essay)"
				></mu-card-title>
				<mu-card-text v-html="essay.excerpt.rendered"></mu-card-text>
			</mu-card>
		</mu-container>
	</mu-col>
</template>

<script lang="ts">
import { createComponent, computed, ref } from "@vue/composition-api";
import { EssayReponse } from "@/services/fetch";

interface Props {
	essay: EssayReponse;
}
export default createComponent({
	name: "essay-bar",
	props: {
		essay: {
			default: () => {
				return {
					id: 0,
					date: "",
					title: {
						rendered: ""
					},
					author: 0,
					content: {
						rendered: ""
					},
					excerpt: {
						rendered: ""
					},
					categories: []
				};
			}
		}
	},
	setup(props: Props, ctx) {
		const categories = computed(() => ctx.root.$store.state.categories);
		function titleClick(essay: Props["essay"]) {
			ctx.root.$router.push({
				name: "post",
				params: { id: essay.id.toString() }
			});
		}

		function getCateName(id: number) {
			for (let i in categories.value) {
				if (id === categories.value[i].id) {
					return categories.value[i].name;
				}
			}

			return "未分类";
		}

		const toDate = (value: string) => {
			const date = new Date(value);
			const dateArr = date.toLocaleDateString().split("/");
			if (dateArr[0] && dateArr[1] && dateArr[2]) {
				return `${dateArr[0]}年${dateArr[1]}月${dateArr[2]}日`;
			} else {
				return date.toLocaleDateString();
			}
		};
		return {
			titleClick,
			getCateName,
			toDate
		};
	}
});
</script>

<style lang="less" scoped>
.mu-card {
	width: 100% !important;
	margin-bottom: 25px !important;
	padding: 10px !important;
	height: 232px !important;
}
.mu-card-title {
	word-break: keep-all;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	cursor: pointer;
}
.mu-card-actions {
	display: flex;
	flex-direction: row-reverse;
}
.mu-card-text {
	p {
		margin: 0px;
	}
}
.mu-card-header .mu-card-title {
	transform: translateY(10px);
}
.card-hover {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100% !important;
	height: 100% !important;
	margin: 0;
	padding: 0;
	p:nth-child(1) {
		padding: 0;
		margin: 0;
		word-break: keep-all;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 24px;
		color: rgba(0, 0, 0, 0.87);
		line-height: 36px;
	}
}
@media screen and (max-width: 992px) {
	.mu-card {
		height: 212px;
		padding: 5px;
	}
}
</style>
