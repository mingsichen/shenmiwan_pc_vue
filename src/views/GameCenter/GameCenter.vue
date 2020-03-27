!<template>
  <div class="main">
    <Header />

    <!-- 游戏中心 -->
    <div class="w1260 gameList ">
      <div class="top">
        <div class="type_one">
          <title class="top_title" style="margin-bottom: 20px">类型: </title>
          <div class="seleter" style="height: 500px">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="全部" name="first">
                <ul class="dis-wrap">
                  <li class="newGame-item dis-flex">
                    <a href class="pic">
                      <img class="game-icons" src="@/assets/images/game.png" alt />
                    </a>
                    <div class="newsGame-info">
                      <a href class="game-name">乐高无限</a>
                      <p class="game-type">
                        <span>二次</span>&nbsp; | &nbsp;
                        <span>162人玩过</span>
                      </p>
                      <div class="game-btn">
                        <a href class="btn-all">开始游戏</a>
                      </div>
                    </div>
                  </li>

                  <li class="newGame-item dis-flex">
                    <a href class="pic">
                      <img class="game-icons" src="@/assets/images/game.png" alt />
                    </a>
                    <div class="newsGame-info">
                      <a href class="game-name">乐高无限</a>
                      <p class="game-type">
                        <span>二次</span>&nbsp; | &nbsp;
                        <span>162人玩过</span>
                      </p>
                      <div class="game-btn">
                        <a href class="btn-all">开始游戏</a>
                      </div>
                    </div>
                  </li>
                  <li class="newGame-item dis-flex">
                    <a href class="pic">
                      <img class="game-icons" src="@/assets/images/game.png" alt />
                    </a>
                    <div class="newsGame-info">
                      <a href class="game-name">乐高无限</a>
                      <p class="game-type">
                        <span>二次</span>&nbsp; | &nbsp;
                        <span>162人玩过</span>
                      </p>
                      <div class="game-btn">
                        <a href class="btn-all">开始游戏</a>
                      </div>
                    </div>
                  </li>
                        <li class="newGame-item dis-flex">
                    <a href class="pic">
                      <img class="game-icons" src="@/assets/images/game.png" alt />
                    </a>
                    <div class="newsGame-info">
                      <a href class="game-name">乐高无限</a>
                      <p class="game-type">
                        <span>二次</span>&nbsp; | &nbsp;
                        <span>162人玩过</span>
                      </p>
                      <div class="game-btn">
                        <a href class="btn-all">开始游戏</a>
                      </div>
                    </div>
                  </li>
                        <li class="newGame-item dis-flex">
                    <a href class="pic">
                      <img class="game-icons" src="@/assets/images/game.png" alt />
                    </a>
                    <div class="newsGame-info">
                      <a href class="game-name">乐高无限</a>
                      <p class="game-type">
                        <span>二次</span>&nbsp; | &nbsp;
                        <span>162人玩过</span>
                      </p>
                      <div class="game-btn">
                        <a href class="btn-all">开始游戏</a>
                      </div>
                    </div>
                  </li>
                        <li class="newGame-item dis-flex">
                    <a href class="pic">
                      <img class="game-icons" src="@/assets/images/game.png" alt />
                    </a>
                    <div class="newsGame-info">
                      <a href class="game-name">乐高无限</a>
                      <p class="game-type">
                        <span>二次</span>&nbsp; | &nbsp;
                        <span>162人玩过</span>
                      </p>
                      <div class="game-btn">
                        <a href class="btn-all">开始游戏</a>
                      </div>
                    </div>
                  </li>
                        <li class="newGame-item dis-flex">
                    <a href class="pic">
                      <img class="game-icons" src="@/assets/images/game.png" alt />
                    </a>
                    <div class="newsGame-info">
                      <a href class="game-name">乐高无限</a>
                      <p class="game-type">
                        <span>二次</span>&nbsp; | &nbsp;
                        <span>162人玩过</span>
                      </p>
                      <div class="game-btn">
                        <a href class="btn-all">开始游戏</a>
                      </div>
                    </div>
                  </li>
                        <li class="newGame-item dis-flex">
                    <a href class="pic">
                      <img class="game-icons" src="@/assets/images/game.png" alt />
                    </a>
                    <div class="newsGame-info">
                      <a href class="game-name">乐高无限</a>
                      <p class="game-type">
                        <span>二次</span>&nbsp; | &nbsp;
                        <span>162人玩过</span>
                      </p>
                      <div class="game-btn">
                        <a href class="btn-all">开始游戏</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="角色" name="second">角色</el-tab-pane>
              <el-tab-pane label="回合制" name="third">回合制</el-tab-pane>
              <el-tab-pane label="休闲益智" name="fourth">休闲益智</el-tab-pane>
              <el-tab-pane label="二次元" name="five">二次元</el-tab-pane>
              <el-tab-pane label="传奇类" name="six">传奇类</el-tab-pane>
              <el-tab-pane label="三国策略" name="seven">三国策略</el-tab-pane>
              <el-tab-pane label="仙类类" name="eight">仙类类</el-tab-pane>
              <el-tab-pane label="二次元" name="night">二次元</el-tab-pane>
            </el-tabs>
          </div>
        </div>

      </div>
    </div>

  <!-- 尾部 -->
    <HomeFooter />
  </div>
</template>

<script type="text/javascript">
import Header from "@/components/Header/Header.vue";
import HomeFooter from "@/components/HomeFooter/HomeFooter.vue";


export default {
  name: "GameCenter",

  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    Header,
     HomeFooter
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" >
.gameList {
  .top {
    .type_one {
      .seleter {
        .el-tabs__item {
          font-size: 20px;
        }
        .newGame-item {
          font-size: 15px;
          padding-right: 12px;
          padding-bottom: 10px;
          width: 200px;
          .game-icons {
            width: 75px;
            height: 75px;
            padding: 10px;
          }
          .newsGame-info {
            color: #1a1a1a;
            padding-top: 10px;
            .game-name {
              color: #1a1a1a;
            }
            .game-type {
              padding: 5px 0;
              font-size: 13px;
            }
            .btn-all {
              height: 25px;
              line-height: 25px;
            }
          }
        }
        .newGame-item:hover {
          box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
        }
      }
    }

    .top_title {
      display: block;
      font-size: 24px;
      font-weight: bold;
      height: 30px;
      line-height: 30px;
      color: #666;
    }
  }
}
</style>
