<template>
  <div id="app-footer">
    <p>{{__TITLE__}} · 2020 </p>
  </div>
</template>

<script lang="ts">
import { __TITLE__ } from "@/utils/config";
import { createComponent } from "@vue/composition-api";
export default createComponent({
  name: "app-footer",
  setup() {
    return {
      __TITLE__
    };
  }
});
</script>

<style lang="less" scoped>
#app-footer {
  padding: 20px;
}
p{
  font-size: 15px;
  text-align: center;
  color: #C0C4CC;
}
</style>
