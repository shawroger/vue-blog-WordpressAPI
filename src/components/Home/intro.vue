<template>
  <div id="home-intro">
    <app-logo></app-logo>
    <!--
    <p class="title">{{title}} · 2020 Service</p>
    -->
  </div>
</template>

<script lang="ts">
import { title } from "@/utils/sources";
import { createComponent } from "@vue/composition-api";
import appLogo from "../logo.vue";
export default createComponent({
  name: "home-intro",
  components: {
    appLogo
  },
  setup() {
    return {
      title
    };
  }
});
</script>

<style lang="less">
#home-intro {
  margin-top: 20px;
}
.title {
  font-size: 20px;
  font-family: Tahoma;
  text-align: center;
  color: #606266;
}
</style>
