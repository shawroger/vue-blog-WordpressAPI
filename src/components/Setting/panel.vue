<template>
	<div id="setting-panel">
		<img v-no-drag src="@/assets/color_lens-24px.svg" />
		<p>设置 · Settings</p>
		<mu-container>
			<mu-row gutter justify-content="center">
				<mu-col span="10" sm="10" lg="6">
					<mu-expansion-panel
						:expand="panel === 'panel1'"
						@change="toggle('panel1')"
					>
						<div slot="header">缓存文章</div>
						<div class="setting-cache">
							<div class="setting-label">
								<mu-flex class="select-control-row">
									<mu-switch v-model="settingCtrl.cache"></mu-switch>
								</mu-flex>
								<p>
									<span>{{ settingCtrl.cache ? "开启" : "关闭" }}</span>
									文章缓存
								</p>
							</div>
							<div class="setting-tips">
								开启文章缓存后，在进行界面切换时，已经加载的文章列表不会重置
							</div>
						</div>
					</mu-expansion-panel>
					<mu-expansion-panel
						:expand="panel === 'panel2'"
						@change="toggle('panel2')"
					>
						<div slot="header">自动加载</div>
						<div class="setting-cache">
							<div class="setting-label">
								<mu-flex class="select-control-row">
									<mu-switch v-model="settingCtrl.autofetch"></mu-switch>
								</mu-flex>
								<p>
									<span>{{ settingCtrl.autofetch ? "开启" : "关闭" }}</span>
									自动加载
								</p>
							</div>
							<div class="setting-tips">
								开启文章自动加载后，在回到首页之后，会自动获取下一页的文章
							</div>
						</div>
					</mu-expansion-panel>
					<mu-expansion-panel
						:expand="panel === 'panel3'"
						@change="toggle('panel3')"
					>
						<div slot="header">记录设置</div>
						<div class="setting-cache">
							<div class="setting-label">
								<mu-flex class="select-control-row">
									<mu-switch v-model="settingCtrl.memory"></mu-switch>
								</mu-flex>
								<p>
									<span>{{ settingCtrl.memory ? "开启" : "关闭" }}</span>
									记录设置
								</p>
							</div>
							<div class="setting-tips">
								开启记录设置后，所有的设置在生效后都将储存在浏览器的localStorage内
							</div>
						</div>
					</mu-expansion-panel>
				</mu-col>
			</mu-row>
		</mu-container>
	</div>
</template>

<script lang="ts">
import {
	createComponent,
	ref,
	reactive,
	watch,
	toRefs,
	computed
} from "@vue/composition-api";
/*eslint-disable */
export default createComponent({
	name: "setting-panel",
	components: {},
	setup(props, ctx) {
		const panel = ref("panel1");
		const settingState = computed(() => ctx.root.$store.state.settings);
		const settingCtrl = reactive({
			...settingState.value
		});

		function toggle(setPanel: string) {
			panel.value = setPanel;
		}

		watch(
			[
				() => settingCtrl.cache,
				() => settingCtrl.autofetch,
				() => settingCtrl.memory
			],
			() => {
				const snapshot: any = {};
				for (let i in toRefs(settingCtrl)) {
					snapshot[i] = (toRefs(settingCtrl) as any)[i].value;
				}
				ctx.root.$store.commit("SET_SETTINGS", snapshot);
			},
			{
				lazy: true
			}
		);
		return {
			panel,
			toggle,
			settingCtrl
		};
	}
});
</script>

<style lang="less" scoped>
#setting-panel {
	width: 100%;
	margin: 35px 0px;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		width: 75px;
		height: 75px;
		animation: logoRotate 2s;
	}
	p {
		font-size: 16px;
		font-weight: 400;
		margin: 0px 0px 25px 0px;
		color: #90a4ae;
	}

	.setting-cache {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.setting-label {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			p {
				font-size: 14px;
				color: #909399;
				margin: 0 15px;
				span {
					color: orange;
				}
			}
		}

		.setting-tips {
			margin-top: 10px;
			color: #909399;
		}
	}
}

@keyframes logoRotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
