<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html {
  padding: 0;
  margin: 0;
  height: 100%;
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
}
/*字体图标*/
@font-face {
  font-family: "icon_font";
  src: url("~@/assets/iconfont.ttf");
}
/*字体图标*/
.icon {
  font-family: icon_font;
  color: transparent;
}
</style>
