<template>
	<div id="page-about">
		<about-show></about-show>
	</div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import aboutShow from "../components/About/show.vue";

export default createComponent({
	name: "page-about",
	components: {
		aboutShow
	}
});
</script>

<style lang="less" scoped></style>
