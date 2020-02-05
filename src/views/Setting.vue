<template>
	<div id="page-setting">
		<setting-panel></setting-panel>
	</div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import settingPanel from "@/components/Setting/panel.vue";

export default createComponent({
	name: "page-setting",
	components: {
		settingPanel
	}
});
</script>

<style lang="less" scoped>
#page-setting {
	width: 100%;
	margin: 0;
	padding: 0;
}
</style>
