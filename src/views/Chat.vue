<template>
  <div id="page-chat">
      <chat-sendbox></chat-sendbox>
  </div>
</template>

<script>
import { createComponent } from "@vue/composition-api";

import chatSendbox from "@/components/Chat/sendbox.vue";
export default createComponent({
  name: "page-chat",
  components: {
    chatSendbox
  }
});
</script>
