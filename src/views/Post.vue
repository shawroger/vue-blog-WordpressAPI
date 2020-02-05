<template>
	<div id="page-post">
		<post-show></post-show>
	</div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import postShow from "../components/Post/show.vue";

export default createComponent({
	name: "page-post",
	components: {
		postShow
	}
});
</script>

<style lang="less" scoped></style>
