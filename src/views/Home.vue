<template>
  <div id="page-home">
    <home-intro></home-intro>
  </div>
</template>

<script>
import { createComponent } from "@vue/composition-api";

import homeIntro from '@/components/Home/intro.vue';
export default createComponent({
  name: "page-home",
  components: {
    homeIntro
  }
});
</script>
