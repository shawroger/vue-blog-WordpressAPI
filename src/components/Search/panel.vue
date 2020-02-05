<template>
	<div id="search-panel">
		<mu-container>
			<mu-row gutter justify-content="center">
				<mu-col span="12" sm="12" lg="6">
					<mu-container>
						<mu-card>
							<mu-card-header title="SEARCH">
								<mu-avatar slot="avatar">
									<img v-no-drag src="@/assets/search-logo.png" />
								</mu-avatar>
							</mu-card-header>
							<mu-card-media
								title="#SEARCH WHAT YOU WANT"
								sub-title="IN THE WHOLE BLOG"
							>
								<img v-no-drag src="https://api.ooopn.com/image/bing/api.php" />
							</mu-card-media>

							<mu-card-text>
								<mu-form ref="form" :model="form" class="mu-demo-form">
									<mu-form-item label="关键词 KEYWORDS" prop="text">
										<mu-text-field
											v-model="form.text"
											prop="text"
										></mu-text-field>
									</mu-form-item>
									<mu-form-item prop="date" label="日期（可选）" v-show="0">
										<mu-date-input
											v-model="form.date"
											type="date"
										></mu-date-input>
									</mu-form-item> </mu-form
							></mu-card-text>
							<mu-card-actions>
								<mu-button flat @click="resetForm">RESET</mu-button>
								<mu-button flat @click="searchForm">SEARCH</mu-button>
							</mu-card-actions>
						</mu-card>
					</mu-container>
				</mu-col></mu-row
			></mu-container
		>
	</div>
</template>

<script lang="ts">
/* eslint-disable */
import { createComponent, ref, reactive } from "@vue/composition-api";
import { fetchSearchText } from "@/services/fetch";

export default createComponent({
	name: "search-panel",
	setup(props, ctx) {
		const form = reactive({
			text: "",
			date: ""
		});

		function resetForm() {
			form.text = "";
			form.date = "";
		}

		function searchForm() {
			// (async () => {
			// 	const response = await fetchSearchText(form.text, 1);
			// 	console.log(response);
			// })();
			if (form.text) {
				ctx.root.$router.push({ path: "search", query: { s: form.text } });
			} else {
				(ctx.root as any).$alert("搜索内容不能为空");
			}
		}
		return {
			form,
			resetForm,
			searchForm
		};
	}
});
</script>

<style lang="less" scoped>
#search-panel {
	width: 100%;
	margin-top: 55px;

	.mu-card-header .mu-card-title {
		transform: translateY(10px);
	}

	.mu-demo-form {
		margin-top: 15px;
	}
	.mu-card-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
}
</style>
