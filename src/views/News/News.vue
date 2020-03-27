<template>
  <div class="news">
    <Header />

    <!-- 介绍 -->
    <div class=" w1260 container" style="display: flex">
      <div class="container-left">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="所有资讯" name="first">
            <ul>
              <li>
                <img src="@/assets/images/banner1.png" alt="">
                <div class="detail">
                  <a href="" class="title">《轩辕剑群侠录》八大法宝斩妖除魔</a>
                  <p class="content">轩辕剑群侠录》八大法宝斩妖除魔《轩辕剑群侠录》中法宝众多，但是真正能降妖除魔的法宝核心八大法宝；下面我们就来认识一下他们吧~【初心水莲】 生命：25000 攻击：1562 防御：781【冰焰莲台】生命：100000 攻击：6250 防御：3125【风雷战鼓】生命：175000 攻击：10937 防御：5468【引光神符】生命：250000 攻击：15625 防御：7812【猛犸象牙】生命：250000 攻击：15625 防御：7812【探风风铃】生命：375000 攻击：23437 防御：11718【送火神镜】生命：375000 攻击：23437 防御：11718【风雷灵镜】生命：625000 攻击：39062 防御：19531《轩辕剑群侠录》中，法宝在通过关卡30即可开启，法宝不断的进阶解锁更高形态和更高的属性，在玩家跑图的时候，会围绕着身体周围进行旋转，如果升到最高阶可想而知，是不是很帅呢~ 法宝可护玩家周全，以后妈妈再也不用担心抓妖怪会遇到危险了；根据情况不同，灵活调配强力的法宝技能能为战斗带来非凡的助力哦~ 更多关于法宝的精彩玩法还需要等你进入游戏亲自发现了！【关于《轩辕剑群侠录》】《新轩辕剑》是一款半回合制中国水墨风RPG_H5，故事起源于主人公陈靖仇遭受魔神袭击，战斗中打破了昆仑镜从而引起时空错乱，穿越多时空的故事背景，随着剧情的深入将开启伙伴、宠物等功能玩法邀请轩辕剑多部中的经典角色加入，抓捕世界中的各类奇珍异兽，共同消灭魔神撒旦。
                  </p>
                  <p class="time">2019-07-23 22:00</p>
                </div>
              </li>
              <li>
                <img src="@/assets/images/banner1.png" alt="">
                <div class="detail">
                  <a href="" class="title">《轩辕剑群侠录》八大法宝斩妖除魔</a>
                  <p class="content">轩辕剑群侠录》八大法宝斩妖除魔《轩辕剑群侠录》中法宝众多，但是真正能降妖除魔的法宝核心八大法宝；下面我们就来认识一下他们吧~【初心水莲】 生命：25000 攻击：1562 防御：781【冰焰莲台】生命：100000 攻击：6250 防御：3125【风雷战鼓】生命：175000 攻击：10937 防御：5468【引光神符】生命：250000 攻击：15625 防御：7812【猛犸象牙】生命：250000 攻击：15625 防御：7812【探风风铃】生命：375000 攻击：23437 防御：11718【送火神镜】生命：375000 攻击：23437 防御：11718【风雷灵镜】生命：625000 攻击：39062 防御：19531《轩辕剑群侠录》中，法宝在通过关卡30即可开启，法宝不断的进阶解锁更高形态和更高的属性，在玩家跑图的时候，会围绕着身体周围进行旋转，如果升到最高阶可想而知，是不是很帅呢~ 法宝可护玩家周全，以后妈妈再也不用担心抓妖怪会遇到危险了；根据情况不同，灵活调配强力的法宝技能能为战斗带来非凡的助力哦~ 更多关于法宝的精彩玩法还需要等你进入游戏亲自发现了！【关于《轩辕剑群侠录》】《新轩辕剑》是一款半回合制中国水墨风RPG_H5，故事起源于主人公陈靖仇遭受魔神袭击，战斗中打破了昆仑镜从而引起时空错乱，穿越多时空的故事背景，随着剧情的深入将开启伙伴、宠物等功能玩法邀请轩辕剑多部中的经典角色加入，抓捕世界中的各类奇珍异兽，共同消灭魔神撒旦。
                  </p>
                  <p class="time">2019-07-23 22:00</p>
                </div>
              </li>
              <li>
                <img src="@/assets/images/banner1.png" alt="">
                <div class="detail">
                  <a href="" class="title">《轩辕剑群侠录》八大法宝斩妖除魔</a>
                  <p class="content">轩辕剑群侠录》八大法宝斩妖除魔《轩辕剑群侠录》中法宝众多，但是真正能降妖除魔的法宝核心八大法宝；下面我们就来认识一下他们吧~【初心水莲】 生命：25000 攻击：1562 防御：781【冰焰莲台】生命：100000 攻击：6250 防御：3125【风雷战鼓】生命：175000 攻击：10937 防御：5468【引光神符】生命：250000 攻击：15625 防御：7812【猛犸象牙】生命：250000 攻击：15625 防御：7812【探风风铃】生命：375000 攻击：23437 防御：11718【送火神镜】生命：375000 攻击：23437 防御：11718【风雷灵镜】生命：625000 攻击：39062 防御：19531《轩辕剑群侠录》中，法宝在通过关卡30即可开启，法宝不断的进阶解锁更高形态和更高的属性，在玩家跑图的时候，会围绕着身体周围进行旋转，如果升到最高阶可想而知，是不是很帅呢~ 法宝可护玩家周全，以后妈妈再也不用担心抓妖怪会遇到危险了；根据情况不同，灵活调配强力的法宝技能能为战斗带来非凡的助力哦~ 更多关于法宝的精彩玩法还需要等你进入游戏亲自发现了！【关于《轩辕剑群侠录》】《新轩辕剑》是一款半回合制中国水墨风RPG_H5，故事起源于主人公陈靖仇遭受魔神袭击，战斗中打破了昆仑镜从而引起时空错乱，穿越多时空的故事背景，随着剧情的深入将开启伙伴、宠物等功能玩法邀请轩辕剑多部中的经典角色加入，抓捕世界中的各类奇珍异兽，共同消灭魔神撒旦。
                  </p>
                  <p class="time">2019-07-23 22:00</p>
                </div>
              </li>
              <li>
                <img src="@/assets/images/banner1.png" alt="">
                <div class="detail">
                  <a href="" class="title">《轩辕剑群侠录》八大法宝斩妖除魔</a>
                  <p class="content">轩辕剑群侠录》八大法宝斩妖除魔《轩辕剑群侠录》中法宝众多，但是真正能降妖除魔的法宝核心八大法宝；下面我们就来认识一下他们吧~【初心水莲】 生命：25000 攻击：1562 防御：781【冰焰莲台】生命：100000 攻击：6250 防御：3125【风雷战鼓】生命：175000 攻击：10937 防御：5468【引光神符】生命：250000 攻击：15625 防御：7812【猛犸象牙】生命：250000 攻击：15625 防御：7812【探风风铃】生命：375000 攻击：23437 防御：11718【送火神镜】生命：375000 攻击：23437 防御：11718【风雷灵镜】生命：625000 攻击：39062 防御：19531《轩辕剑群侠录》中，法宝在通过关卡30即可开启，法宝不断的进阶解锁更高形态和更高的属性，在玩家跑图的时候，会围绕着身体周围进行旋转，如果升到最高阶可想而知，是不是很帅呢~ 法宝可护玩家周全，以后妈妈再也不用担心抓妖怪会遇到危险了；根据情况不同，灵活调配强力的法宝技能能为战斗带来非凡的助力哦~ 更多关于法宝的精彩玩法还需要等你进入游戏亲自发现了！【关于《轩辕剑群侠录》】《新轩辕剑》是一款半回合制中国水墨风RPG_H5，故事起源于主人公陈靖仇遭受魔神袭击，战斗中打破了昆仑镜从而引起时空错乱，穿越多时空的故事背景，随着剧情的深入将开启伙伴、宠物等功能玩法邀请轩辕剑多部中的经典角色加入，抓捕世界中的各类奇珍异兽，共同消灭魔神撒旦。
                  </p>
                  <p class="time">2019-07-23 22:00</p>
                </div>
              </li>
              <li>
                <img src="@/assets/images/banner1.png" alt="">
                <div class="detail">
                  <a href="" class="title">《轩辕剑群侠录》八大法宝斩妖除魔</a>
                  <p class="content">轩辕剑群侠录》八大法宝斩妖除魔《轩辕剑群侠录》中法宝众多，但是真正能降妖除魔的法宝核心八大法宝；下面我们就来认识一下他们吧~【初心水莲】 生命：25000 攻击：1562 防御：781【冰焰莲台】生命：100000 攻击：6250 防御：3125【风雷战鼓】生命：175000 攻击：10937 防御：5468【引光神符】生命：250000 攻击：15625 防御：7812【猛犸象牙】生命：250000 攻击：15625 防御：7812【探风风铃】生命：375000 攻击：23437 防御：11718【送火神镜】生命：375000 攻击：23437 防御：11718【风雷灵镜】生命：625000 攻击：39062 防御：19531《轩辕剑群侠录》中，法宝在通过关卡30即可开启，法宝不断的进阶解锁更高形态和更高的属性，在玩家跑图的时候，会围绕着身体周围进行旋转，如果升到最高阶可想而知，是不是很帅呢~ 法宝可护玩家周全，以后妈妈再也不用担心抓妖怪会遇到危险了；根据情况不同，灵活调配强力的法宝技能能为战斗带来非凡的助力哦~ 更多关于法宝的精彩玩法还需要等你进入游戏亲自发现了！【关于《轩辕剑群侠录》】《新轩辕剑》是一款半回合制中国水墨风RPG_H5，故事起源于主人公陈靖仇遭受魔神袭击，战斗中打破了昆仑镜从而引起时空错乱，穿越多时空的故事背景，随着剧情的深入将开启伙伴、宠物等功能玩法邀请轩辕剑多部中的经典角色加入，抓捕世界中的各类奇珍异兽，共同消灭魔神撒旦。
                  </p>
                  <p class="time">2019-07-23 22:00</p>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="新闻" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="攻略" name="third">角色管理</el-tab-pane>
        </el-tabs>
      </div>
      <div class="container-right">
        <div class="right-top">
          <div class="right-news">
            <span></span>
            <h2>最新公告</h2>
          </div>
          <div class="newsList">
            <ul>
              <li>
                <a href="">《疯狂小主公》8月10日更新公告</a>
              </li>
              <li>
                <a href="">《疯狂小主公》8月10日更新公告</a>
              </li>
              <li>
                <a href="">《疯狂小主公》8月10日更新公告</a>
              </li>
              <li>
                <a href="">《疯狂小主公》8月10日更新公告</a>
              </li>
              <li>
                <a href="">《疯狂小主公》8月10日更新公告</a>
              </li>
            </ul>
          </div>

        </div>
        <div class="right-bottom">
          <div class="right-news">
            <span></span>
            <h2>最新公告</h2>
          </div>

          <div class="right-gameList">
            <ul>
              <li>
                <img src="@/assets/images/game.png" alt="">
                <div class="type">
                  <p>降妖除魔的</p>
                  <p>卫生类</p>
                  <p>1111人玩过</p>
                </div>
                <span class="btn-all ">开始游戏</span>
              </li>
              <li>
                <img src="@/assets/images/game.png" alt="">
                <div class="type">
                  <p>降妖除魔的</p>
                  <p>卫生类</p>
                  <p>1111人玩过</p>
                </div>
                <span class="btn-all ">开始游戏</span>
              </li>
              <li>
                <img src="@/assets/images/game.png" alt="">
                <div class="type">
                  <p>降妖除魔的</p>
                  <p>卫生类</p>
                  <p>1111人玩过</p>
                </div>
                <span class="btn-all ">开始游戏</span>
              </li>
              <li>
                <img src="@/assets/images/game.png" alt="">
                <div class="type">
                  <p>降妖除魔的</p>
                  <p>卫生类</p>
                  <p>1111人玩过</p>
                </div>
                <span class="btn-all ">开始游戏</span>
              </li>
              <li>
                <img src="@/assets/images/game.png" alt="">
                <div class="type">
                  <p>降妖除魔的</p>
                  <p>卫生类</p>
                  <p>1111人玩过</p>
                </div>
                <span class="btn-all ">开始游戏</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <!-- 底部 -->
    <HomeFooter />
  </div>
</template>

<script type="text/javascript">
import Header from "@/components/Header/Header.vue";
import HomeFooter from "@/components/HomeFooter/HomeFooter.vue";
export default {
  name: 'News',

  data() {
    return {
      activeName: 'first'
    }
  },
  components: {
    Header,
    HomeFooter
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
}
</script>

<style lang="scss" >
.news {
  .container {
    margin-top: 20px;
    .container-left {
      width: 900px;
      margin-top: 20px;
      .el-tabs__item {
        font-size: 24px;
      }
      ul {
        display: flex;
        flex-direction: column;
        li {
          display: flex;
          padding: 20px;
          background-color: #f7f3f3;
          border-bottom: 1px solid #ccc;
          img {
            width: 230px;
            height: 150px;
            margin-right: 20px;
            flex-shrink: 0;
          }
          .detail {
            display: flex;
            flex-direction: column;
            .title {
              font-size: 20px;
            }
            .content {
              font-size: 14px;
              margin-top: 10px;
              line-height: 1.5;
              color: #ccc;
              overflow: hidden;
              display: -webkit-box;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              white-space: normal;
            }
            .time {
              color: #ccc;
              margin-top: 20px;
              font-size: 14px;
            }
          }
        }
      }
    }

    .container-right {
      margin-left: 20px;
      width: 300px;

      .right-top {
        border-radius: 10px;
        .right-news {
          height: 60px;
          line-height: 60px;
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
          span {
            margin-left: 20px;
            height: 20px;
            border-left: 3px solid red;
          }
          h2 {
            margin-left: 20px;
          }
        }
        .newsList {
          padding: 10px 10px;
          li {
            margin-bottom: 20px;
          }
        }
      }

      .right-bottom {
        .right-news {
          height: 60px;
          line-height: 60px;
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
          span {
            margin-left: 20px;
            height: 20px;
            border-left: 3px solid red;
          }
          h2 {
            margin-left: 20px;
          }
        }
        ul {
          margin-top: 20px;
          li {
            margin-top: 20px;
            display: flex;
            align-items: center;

            img {
              width: 85px;
              height: 86px;
            }
            .type {
              display: flex;
              flex-direction: column;
              margin: 0 10px;
              p:nth-child(1) {
                font-size: 18px;
                color: red;
              }
              p:nth-child(2) {
                font-size: 14px;
                color: #666;
                margin: 5px 0;
              }
              p:nth-child(3) {
                margin-top: 5px;
                font-size: 14px;
                color: #666;
              }
            }
            .btn-all {
              background: #ff5722;
              color: #ffffff;
              margin-left: 10px;
              border: none;
            }
          }
        }
      }
    }
  }
}
</style>