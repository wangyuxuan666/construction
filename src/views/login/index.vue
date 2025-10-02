<template>
  <div class="login">
    <img src="@/assets/images/login/login_bg.png" alt="" class="left_img" />
    <ui-card class="box_card">
      <h3>UI</h3>
      <ui-input
        class="userInput"
        v-model="username"
        placeholder="账号"
        clearable
        suffix-icon="&#xe624;"
      ></ui-input>
      <ui-input
        class="passWordInput"
        v-model="passWord"
        placeholder="密码"
        clearable
        show-password
        suffix-icon="&#xe8b2;"
      ></ui-input>
      <ui-button class="submit_button" type="others" plain>登 录</ui-button>
    </ui-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      passWord: "",
    };
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 5% 10%;
  box-sizing: border-box;
  .left_img {
    height: 100%;
  }
  .box_card {
    position: relative;
    width: 500px;
    height: 550px;
    padding: 60px 76px 0;
    text-align: center;
    box-sizing: border-box;
    h3 {
      font-size: 35px;
      letter-spacing: 4px;
      color: #4bcbae;
      font-family: "宋体";
      margin-bottom: 70px;
    }
    // 账号
    .userInput {
      margin-bottom: 40px;
    }
    // 密码
    .passWordInput {
      margin-bottom: 70px;
    }
    // 登录
    .submit_button {
      width: 100%;
    }
    // 底部文字
    .bottom_text {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 9px;
      color: #4bcbae;
    }
  }
}

@keyframes an {
  0% {
    transform: translate(96%, 90%) rotate(360deg);
  }
  25% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0);
  }
}
</style>
