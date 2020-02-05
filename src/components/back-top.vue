<template>
	<vm-back-top>
		<div>
			<img src="@/assets/airplanemode_active-24px.svg" />
		</div>
	</vm-back-top>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";

export default createComponent({
	name: "app-back-top"
});
</script>

<style lang="less" scoped>
div {
	padding: 5px 6px;
	background: @themeColor;
	border-radius: 50%;
}
img {
	width: 25px;
	height: 25px;
	padding: 0;
	margin: 0;
	transform: translateY(2.5px);
}
</style>
