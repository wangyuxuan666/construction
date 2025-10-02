<!--
 * @Author: wangyuxuan 123@qq.com
 * @Date: 2025-10-02 15:05:32
 * @LastEditors: wangyuxuan 123@qq.com
 * @LastEditTime: 2025-10-02 17:00:28
 * @FilePath: \construction\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home">
    <backgroud class="bacgroud" />
    <div class="console">
      <div class="header">
        <div class="tabs">
          <div class="tabs_item">娱乐场</div>
        </div>
        <div class="menu">
          <div class="menu_item">登录</div>
          <div class="menu_item">帮助</div>
        </div>
      </div>
      <div class="playMenu">
        <div v-for="(item, index) in playlist" :key="index" class="playBox">
          <div class="title">
            {{ item.name }}
          </div>
          <div class="list_box">
            <div class="list" v-for="(v, i) in item.content" :key="i">
              <img :src="v.img" alt="" />
              <p>{{ v.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroud from "./components/backgroud.vue";
export default {
  name: "",
  components: {
    backgroud,
  },
  data() {
    return {
      playlist: [
        {
          name: "推荐",
          content: [
            {
              name: "21点",
              img: "https://design.gemcoder.com/staticResource/echoAiSystemImages/99996e30063df92226d8d1d75a6929a8.png",
            },
          ],
        },
        {
          name: "德州",
          content: [
            {
              name: "21点",
              img: "https://design.gemcoder.com/staticResource/echoAiSystemImages/99996e30063df92226d8d1d75a6929a8.png",
            },
          ],
        },
        {
          name: "德州",
          content: [
            {
              name: "21点",
              img: "https://design.gemcoder.com/staticResource/echoAiSystemImages/99996e30063df92226d8d1d75a6929a8.png",
            },
          ],
        },
        {
          name: "德州",
          content: [
            {
              name: "21点",
              img: "https://design.gemcoder.com/staticResource/echoAiSystemImages/99996e30063df92226d8d1d75a6929a8.png",
            },
          ],
        },
        {
          name: "德州",
          content: [
            {
              name: "21点",
              img: "https://design.gemcoder.com/staticResource/echoAiSystemImages/99996e30063df92226d8d1d75a6929a8.png",
            },
          ],
        },
        {
          name: "德州",
          content: [
            {
              name: "21点",
              img: "https://design.gemcoder.com/staticResource/echoAiSystemImages/99996e30063df92226d8d1d75a6929a8.png",
            },
          ],
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  position: relative;
  .bacgroud {
    .positionFull(0); // 定位充满快捷
  }
  .console {
    .positionFull(1); // 定位充满快捷

    .header {
      backdrop-filter: blur(10px); /* 模糊效果 */
      background-color: rgba(15, 81, 50, 0.2); /* 半透明背景 */
      position: absolute; /* 定位 */
      top: 0px;
      left: 0px;
      right: 0px;
      height: 55px;
      border-radius: 5px;
      color: #aaa;
      font-size: 16px;
      line-height: 55px;
      padding: 0 25px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .tabs {
        .tabs_item {
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            color: #fff;
          }
        }
      }
      .menu {
        display: flex;
        .menu_item {
          cursor: pointer;
          margin-left: 10px;
          transition: all 0.3s;
          &:hover {
            color: #fff;
          }
        }
      }
    }
    .playMenu {
      position: absolute; /* 定位 */
      top: 85px;
      bottom: 15px;
      left: 20px;
      right: 20px;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0px;
      }
      .playBox {
        margin: 10px 0 20px;
        .title {
          color: #fff;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 2px;
          text-shadow: 0px 0px 3px #3ace92;
          line-height: 1;
          margin-bottom: 25px;
        }
        .list_box {
          width: 100%;
          padding: 10px 10px;
          border-radius: 3px;
          box-sizing: border-box;
          background-color: rgba(0, 0, 0, 0.2);
          .list {
            width: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              width: 230px;
              img {
                height: 210px;
              }
            }
            img {
              width: 100%;
              height: 180px;
              margin-bottom: 10px;
              border-radius: 3px;
              transition: all 0.3s;
            }
            p {
              text-align: center;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
