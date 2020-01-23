<template>
  <div class="sender">
    <div>
      <img src="@/assets/robot.jpg" />
    </div>
    <div class="main">
      <div class="left-triangle"></div>
      <span class="text-wrap" v-text="text"></span>
    </div>
  </div>
</template>
<script>
import { createComponent, ref } from "@vue/composition-api";
export default createComponent({
  name: "chat-leftbar",
  props: {
    text: {
      type: String,
      default: ""
    }
  }
});
</script>
<style scoped>
.sender {
  clear: both;
}
.sender div:nth-of-type(1) {
  float: left;
}
.sender div:nth-of-type(2) {
  background-color: aquamarine;
  float: left;
  margin: 0 20px 10px 20px;
  padding: 10px 20px 10px 10px;
  border-radius: 7px;
}

.receiver div:first-child img,
.sender div:first-child img {
  width: 50px;
  height: 50px;
}

.receiver {
  clear: both;
}
.receiver div:nth-child(1) {
  float: right;
}
.receiver div:nth-of-type(2) {
  float: right;
  background-color: gold;
  margin: 0 10px 10px 20px;
  padding: 10px 0px 10px 10px;
  border-radius: 7px;
}

.left-triangle {
  height: 0px;
  width: 0px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent aquamarine transparent transparent;
  position: relative;
  left: -26px;
  top: 3px;
}

.text-wrap {
  word-wrap: break-word;
  font-family: Tahoma;
  text-align: center;
  color: #606266;
}

.main {
  max-width: 360px !important;
}
@media screen and (max-width: 740px) {
  .main {
    max-width: 160px !important;
  }
}
</style>
