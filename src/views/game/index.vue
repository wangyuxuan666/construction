<!--
 * @Author: wangyuxuan 123@qq.com
 * @Date: 2025-10-02 15:05:32
 * @LastEditors: wangyuxuan 123@qq.com
 * @LastEditTime: 2025-10-06 18:02:53
 * @FilePath: \construction\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="game">
    <img
      :src="require(`../../assets/images/bj/${path}.jpg`)"
      alt=""
      class="list_img"
    />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      path: "",
    };
  },
  created() {
    this.path = this.$route.query.id;
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.game {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #000;
  display: flex;
  align-items: center;
  .list_img {
    width: 100%;
  }
}
</style>
