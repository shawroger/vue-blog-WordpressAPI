<template>
	<div id="app-nav">
		<mu-appbar style="width: 100%;" :color="__MAIN_COLOR__" :z-depth="8">
			<mu-button
				icon
				slot="left"
				@click="
					() => {
						if ($route.path !== '/') {
							$router.push('');
						}
					}
				"
			>
				<img src="@/assets/nav-logo.png" />
			</mu-button>
			<router-link to="/" class="title">{{ __TITLE__ }}</router-link>
			<mu-menu slot="right">
				<mu-button flat>
					<img src="@/assets/fingerprint-24px.svg" width="24" height="24" />
				</mu-button>
				<mu-list slot="content">
					<mu-list-item
						button
						v-for="item in nav"
						:key="item.to"
						@click="
							() => {
								if ($route.path !== item.to) {
									$router.push({ name: item.to });
								}
							}
						"
					>
						<mu-list-item-content>
							<mu-list-item-title>{{ item.title }}</mu-list-item-title>
						</mu-list-item-content>
					</mu-list-item>
				</mu-list>
			</mu-menu>
		</mu-appbar>
	</div>
</template>

<script lang="ts">
import { createComponent, onMounted, ref } from "@vue/composition-api";
import { __TITLE__, __MAIN_COLOR__ } from "@/utils/config";
export default createComponent({
	name: "app-nav",
	components: {},
	setup() {
		const nav = [
			{
				title: "首页",
				to: "/"
			},
			{
				title: "搜索",
				to: "search"
			},
			{
				title: "设置",
				to: "settings"
			},
			{
				title: "关于",
				to: "about"
			}
		];
		return {
			nav,
			__TITLE__,
			__MAIN_COLOR__
		};
	}
});
</script>

<style lang="less" scoped>
.mu-appbar {
	padding-left: 20px;
	padding-top: 2px;
}
img {
	width: 40px;
	height: 40px;
}
.title {
	font-size: 22px;
	color: white;
}

@media screen and (max-width: 750px) {
	.title {
		display: none;
	}
	img {
		width: 35px;
		height: 35px;
	}
}
</style>
