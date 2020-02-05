<template>
	<div id="page-404">
		<mu-paper class="demo-paper" :z-depth="2">
			<p>😇 404 NOT FOUND</p>
			<mu-button
				color="primary"
				@click="
					() => {
						$router.push('/');
					}
				"
				>BACK HOME</mu-button
			>
		</mu-paper>
	</div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";

export default createComponent({
	name: "page-404"
});
</script>

<style lang="less" scoped>
#page-404 {
	width: 100%;
	margin: 65px 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	.demo-paper {
		padding: 20px 25px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		p {
			font-variant-numeric: tabular-nums;
			margin: 0 0 15px;
			line-height: 1.618;
			font-size: 18px;
			display: block;
			margin-block-start: 1em;
			margin-block-end: 1em;
			color: #3c4858;
			font-weight: 300;
			font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		}
	}
}
</style>
