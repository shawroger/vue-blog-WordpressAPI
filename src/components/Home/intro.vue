<template>
	<div id="home-intro">
		<app-logo></app-logo>
		<mu-divider></mu-divider>
	</div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import appLogo from "../logo.vue";
export default createComponent({
	name: "home-intro",
	components: {
		appLogo
	}
});
</script>

<style lang="less">
#home-intro {
	margin-top: 35px;
}
.mu-divider {
	margin: 35px 0px !important;
}
</style>
