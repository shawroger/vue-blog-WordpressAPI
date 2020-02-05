<template>
	<div id="page-search">
		
			<search-panel v-if="!$route.query.s"></search-panel>
			<search-result v-else-if="$route.query.s"></search-result>
		
	</div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import searchPanel from "../components/Search/panel.vue";
import searchResult from "../components/Search/result.vue";

export default createComponent({
	name: "page-search",
	components: {
		searchPanel,
		searchResult
	}
});
</script>

<style lang="less" scoped></style>
