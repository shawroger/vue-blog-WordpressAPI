<template>
	<div id="about-show">
		<img
			v-no-drag
			src="http://diary.shawroger.com/view/wp-content/uploads/2019/08/rogerpic.jpg"
		/>
		<mu-container>
			<mu-row gutter justify-content="center">
				<mu-col span="10" sm="10" lg="6">
					<mu-expansion-panel
						v-for="item in about"
						:key="item.id"
						:expand="panel === item.id"
						@change="toggle(item.id)"
					>
						<div slot="header">{{ item.header }}</div>
						{{ item.text }}
					</mu-expansion-panel>
				</mu-col>
			</mu-row>
		</mu-container>

		<mu-snackbar
			position="bottom-end"
			:open.sync="openSnack"
			color="whiteSmoke"
			text-color="#3c4858"
		>
			Welcome to visit cafe 😘

			<mu-button flat slot="action" @click="openSnack = false">Close</mu-button>
		</mu-snackbar>
	</div>
</template>

<script lang="ts">
import { createComponent, ref } from "@vue/composition-api";
export default createComponent({
	name: "about-show",
	components: {},
	setup() {
		const about = [
			{
				id: "0",
				header: "Since 2017",
				text: "从2017年1月开始，我们的生活就已经存在数据库里"
			},
			{
				id: "1",
				header: "Struggle 2018",
				text: "残酷的2018年高考，只能默默把负面情绪仍在这里"
			},
			{
				id: "2",
				header: "Start 2019",
				text: "重新思考我的未来，2019就是新的开始"
			},
			{
				id: "3",
				header: "Smile 2020",
				text: "新的一年，微笑面对一个又一个未知"
			}
		];

		const panel = ref("0");
		const openSnack = ref(true);
		function toggle(newPanel: string) {
			panel.value = newPanel;
		}
		(() => {
			const timer = setTimeout(() => {
				openSnack.value = false;
			}, 1500);
		})();
		return {
			about,
			panel,
			toggle,
			openSnack
		};
	}
});
</script>

<style lang="less">
#about-show {
	width: 100%;
	margin: 25px 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	img {
		width: 80px;
		height: 80px;
		animation: logoRotate 2s;
		border-radius: 50%;
		margin: 0;
		margin: 25px 0px !important;
	}
}

.mu-expansion-panel-header,
.mu-expansion-panel-content {
	color: #3c4858;
}
</style>
