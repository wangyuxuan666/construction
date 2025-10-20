<!--
 * @Author: wangyuxuan 123@qq.com
 * @Date: 2025-10-02 15:05:32
 * @LastEditors: wangyuxuan 123@qq.com
 * @LastEditTime: 2025-10-06 18:02:53
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
            <span> ( {{ item.chinaName }} ) </span>
          </div>
          <div class="list_box">
            <div
              class="list"
              v-for="(v, i) in item.content"
              :key="i"
              @click="goGame(v.path)"
            >
              <img
                :src="require(`../../assets/images/fm/${v.path}.jpg`)"
                alt=""
                class="list_img"
              />
              <div class="listName">
                <h3 :style="{ fontSize: v.nameFontSize + 'px' }">
                  {{ v.name }}
                </h3>
                <h5 :style="{ fontSize: v.chinaNameFontSize + 'px' }">
                  {{ v.chinaName }}
                </h5>
              </div>
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
          chinaName: "推荐",
          name: "REC",
          content: [
            {
              chinaName: "德州扑克",
              name: "Texas Hold’em",
              nameFontSize: 20,
              chinaNameFontSize: 24,
              path: "4-1",
            },
          ],
        },
        {
          chinaName: "老虎机",
          name: "Slot Machines",
          content: [
            {
              chinaName: "传统老虎机",
              name: "Classic Slot",
              nameFontSize: 30,
              chinaNameFontSize: 24,
              path: "1-1",
            },
            {
              chinaName: "累计奖池老虎机",
              name: "Progressive Jackpot",
              nameFontSize: 20,
              chinaNameFontSize: 24,
              path: "1-2",
            },
            {
              chinaName: "技术型老虎机",
              name: "Skill-based Slot",
              nameFontSize: 24,
              chinaNameFontSize: 24,
              path: "1-3",
            },
          ],
        },
        {
          chinaName: "街机类",
          name: "ARCADE",
          content: [
            {
              chinaName: "捕鱼大师",
              name: "Fishing Master",
              nameFontSize: 20,
              chinaNameFontSize: 24,
              path: "2-1",
            },
            {
              chinaName: "麻将",
              name: "Mahjong",
              nameFontSize: 30,
              chinaNameFontSize: 24,
              path: "2-2",
            },
            {
              chinaName: "打鱼大师",
              name: "Fishing Superstars",
              nameFontSize: 20,
              chinaNameFontSize: 24,
              path: "2-3",
            },
          ],
        },
        {
          chinaName: "真人娱乐场",
          name: "Live Casino",
          content: [
            {
              chinaName: "百家乐",
              name: "Baccarat",
              nameFontSize: 30,
              chinaNameFontSize: 24,
              path: "3-1",
            },
            {
              chinaName: "21点",
              name: "Blackjack",
              nameFontSize: 30,
              chinaNameFontSize: 24,
              path: "3-2",
            },
            {
              chinaName: "轮盘游戏",
              name: "Roulette",
              nameFontSize: 30,
              chinaNameFontSize: 24,
              path: "3-3",
            },
          ],
        },
        {
          chinaName: "德州扑克",
          name: "Texas Hold’em",
          content: [
            {
              chinaName: "德州扑克",
              name: "Texas Hold’em",
              nameFontSize: 20,
              chinaNameFontSize: 24,
              path: "4-1",
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    goGame(id) {
      const targetRoute = this.$router.resolve({
        path: "/game",
        query: { id },
      });
      window.open(targetRoute.href, "_blank");
    },
  },
};
</script>

<style scoped lang="less">
.home {
  user-select: none;
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
      z-index: 10;
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
      top: 0px;
      bottom: 0px;
      left: 20px;
      right: 20px;
      overflow: auto;
      padding-top: 70px;
      z-index: 5;
      &::-webkit-scrollbar {
        width: 0px;
      }
      .playBox {
        margin: 10px 0 20px;
        .title {
          color: #fff;
          font-size: 24px;
          font-weight: 500;
          letter-spacing: 2px;
          text-shadow: 0px 0px 3px #3ace92;
          line-height: 1;
          margin-bottom: 25px;
          span {
            color: #eee;
            font-size: 16px;
          }
        }
        .list_box {
          width: 100%;
          padding: 10px 10px;
          border-radius: 3px;
          box-sizing: border-box;
          display: flex;
          .list {
            position: relative;
            width: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            cursor: pointer;
            transition: all 0.3s;
            margin-right: 16px;
            &:hover {
              transition-delay: 0.3s;
              width: 230px;
              img {
                transition-delay: 0.3s;
                height: 210px;
              }
              .listName {
                transition-delay: 0.3s;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.7);
              }
            }
            .listName {
              position: absolute;
              transition: all 0.3s;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: 2;
              color: transparent;
              background-color: transparent;
              font-weight: 700;
              font-size: 17px;
              font-family: 宋体;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              h3 {
                margin-bottom: 20px;
              }
              h5 {
              }
            }
            img {
              width: 100%;
              height: 180px;
              border-radius: 3px;
              transition: all 0.3s;
              z-index: 1;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}
</style>
