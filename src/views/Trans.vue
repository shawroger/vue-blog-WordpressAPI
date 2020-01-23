<template>
  <div id="page-trans">
    <trans-sendbox></trans-sendbox>
  </div>
</template>

<script>
import { createComponent } from "@vue/composition-api";

import transSendbox from "@/components/Trans/sendbox.vue";
export default createComponent({
  name: "page-trans",
  components: {
    transSendbox
  }
});
</script>
