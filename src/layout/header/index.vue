<template>
  <div class="header_content">
    <div
      class="icon_fold icon"
      :style="`transform:rotateZ(${openAsideOk ? 0 : 180}deg)`"
      style="float: left"
      @click="openAsideBox"
    >
      &#xe620;
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openAsideOk: false,
    };
  },
  methods: {
    openAsideBox() {
      // 打开侧边栏展开
      this.openAsideOk = !this.openAsideOk;
      this.$emit("openAsideOk", this.openAsideOk);
    },
  },
};
</script>

<style lang="less" scoped>
.header_content {
  border-left: 1px solid #dcdfe6;
  padding-left: 20px;
  display: flex;
  align-items: center;
  .icon_fold {
    width: 30px;
    height: 30px;
    font-size: 26px;
    color: #606266;
    line-height: 30px;
    cursor: pointer;
    transition: all 0.8s;
  }
}
</style>
