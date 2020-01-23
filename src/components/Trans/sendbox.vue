<template>
  <div id="trans-sendbox">
    <div class="input-textarea">
      <el-input type="textarea" :rows="6" :clearable="true" placeholder="请输入需要翻译的内容：" v-model="req"></el-input>
    </div>
    <div class="options-list">
      <el-select v-model="selectOptions" placeholder="请选择目标语言">
        <el-option
          v-for="item in translateOptions"
          :key="item.value"
          :label="item.name"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button @click="sendRequest" icon="el-icon-check" circle></el-button>
    </div>
    <div class="input-textarea">
      <el-input
        id="translate-result"
        type="textarea"
        v-model="tranlateResult"
        placeholder="目标语言的翻译结果："
        :rows="6"
        :readonly="true"
      ></el-input>
    </div>
    <div class="btn-list">
      <el-button @click="clearText" type="primary" plain>清屏</el-button>
      <el-button
        type="primary"
        v-clipboard:copy="tranlateResult"
        v-clipboard:success="copySuccess"
        v-clipboard:error="copyError"
      >复制</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchTranslate } from "@/services/fetch";
import { createComponent, ref, Ref } from "@vue/composition-api";
import { translateOptions } from "@/utils/translateOptions";

export default createComponent({
  name: "trans-sendbox",
  setup(props, ctx) {
    const req = ref("");
    const tranlateResult = ref("");
    const selectOptions = ref("");

    const copyError = () => {
      (ctx.root as any).$message("复制失败！");
    }
    const copySuccess = () => {
      (ctx.root as any).$message("复制成功！");
    }
    const sendRequest = async () => {
      if (req.value === "") {
        (ctx.root as any).$message("发送内容不能为空！");
        return;
      }
      if (selectOptions.value === "") {
        (ctx.root as any).$message("请选择目标语言！");
        return;
      }
      const res = await fetchTranslate(req.value, selectOptions.value);
      tranlateResult.value = res.data.data.target_text;
    };

    const clearText = () => {
      req.value = tranlateResult.value = "";
    };
    return {
      req,
      copyError,
      copySuccess,
      clearText,
      sendRequest,
      selectOptions,
      tranlateResult,
      translateOptions
    };
  }
});
</script>

<style lang="less">
#trans-sendbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}
.input-textarea {
  width: 60%;
  margin: 25px 0px;
}
.options-list {
  display: flex;
  justify-content: space-around;
  width: 60%;
}

.btn-list {
  width: 60%;
  margin: 10px 0px;
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 748px) {
  .input-textarea,
  .options-list,
  .btn-list {
    width: 80%;
  }
}
</style>
