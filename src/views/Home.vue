<template>
  <div id="page-home">
    <home-intro></home-intro>
    <home-essay></home-essay>
  </div>
</template>

<script>
import { createComponent } from "@vue/composition-api";

import homeIntro from "@/components/Home/intro.vue";
import homeEssay from "@/components/Home/essay.vue";
export default createComponent({
  name: "page-home",
  components: {
    homeIntro,
    homeEssay
  }
});
</script>
