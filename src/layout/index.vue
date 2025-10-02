<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    };
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
}
</style>
