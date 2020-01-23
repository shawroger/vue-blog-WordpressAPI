<template>
  <div id="chat-sandbox">
    <div class="message-list">
      <component
        v-for="(item, index) in messageBox"
        :text="item.text"
        :is="setComponentsName(item.type)"
        :key="index"
      ></component>
    </div>
    <div class="input-textarea">
      <el-input type="textarea" :rows="6" placeholder="请输入消息内容" v-model="req"></el-input>
      <div class="btn-list">
        <el-button @click="clearRequestList" type="primary" plain>清屏</el-button>
        <el-button @click="genChatList" type="primary" plain>存档</el-button>
        <el-button @click="sendRequest" :disabled="loading" type="primary" plain>发送</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, ref, Ref } from "@vue/composition-api";
import { fetchChat } from "@/services/fetch";
import { genFile } from "@/services/filexon";

import chatLeftbar from "./leftbar.vue";
import chatRightbar from "./rightbar.vue";

interface Message {
  type: "robot" | "person";
  text: string;
}
export default createComponent({
  name: "chat-sandbox",
  components: { chatLeftbar, chatRightbar },
  setup(props, ctx) {
    const req = ref("");
    const loading = ref(false);
    const messageBox: Ref<Array<Message>> = ref([]);
    const setComponentsName = (type: Message["type"]) => {
      if (type === "robot") return "chatLeftbar";
      else return "chatRightbar";
    };
    const sendRequest = async () => {
      if (req.value === "") {
        (ctx.root as any).$message("发送内容不能为空！");
        return;
      }
      loading.value = true;
      messageBox.value.push({ text: req.value, type: "person" });
      const res = await fetchChat(req.value);

      req.value = "";
      loading.value = false;
      if (res.statusText === "OK") {
        messageBox.value.push({ text: res.data.data.answer, type: "robot" });
      }
    };

    const genChatList = () => {
      genFile(JSON.stringify(messageBox.value));
    };

    const clearRequestList = () => {
      messageBox.value = [];
	};
	
    return {
      req,
      loading,
      messageBox,
      sendRequest,
      setComponentsName,
      clearRequestList,
      genChatList
    };
  }
});
</script>

<style lang="less">
#chat-sandbox {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-textarea {
  width: 60%;
}
.message-list {
  width: 60%;
  margin: 25px 0px;
}
.btn-list {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 748px) {
  .input-textarea {
    width: 80%;
  }
  .message-list {
    width: 80%;
  }
}
</style>
