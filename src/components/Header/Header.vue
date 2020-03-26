!<template>
  <div class="container">
    <div class="header w1260">
      <div class="header-left">
        <span class="h-add">添加收藏</span>
        <a href class="h-app">
          <span class="iconfont iconshouji iphone"></span>
          <span>APP下载</span>
        </a>
      </div>
      <div class="header-right">
        <a class="h-r-longin">
         <span>登录</span>
        </a>
        <div class="h-r-box dis-ali-center">
          <a href class="reg">注册</a>
          <a href class="all-game dis-ali-center">
            <span>所有游戏</span>
            <span class="iconfont iconRectangleCopy9 downarrow"></span>
          </a>
        </div>
      </div>
    </div>
    <header class="w1260 dis-ali-center">
      <a href class="logo dis-ali-center">
        <img src="@/assets/images/logo.png" alt />
      </a>
      <div class="nav">
        <ul class="dis-ali-center">
          <li>
            <router-link  to="/" active-class="">首页</router-link>
          </li>
          <li>
            <router-link to="/gameCenter">游戏中心</router-link>
          </li>
          <li>
            <router-link to="giftCenter">礼包中心</router-link>
          </li>
          <li>
            <router-link to="news">资讯</router-link>
          </li>
          <li>
            <router-link to="personalCenter">个人中心</router-link>
          </li>
          <li>
            <router-link to="customer">客服</router-link>
          </li>
        </ul>
      </div>
      <div class="search">
        <form action>
          <input type="text" placeholder="斩月屠龙" />
          <button class="btn-search">搜索</button>
        </form>
      </div>
    </header>
  </div>
</template>

<script type="text/javascript">
export default {
  neme: "Header",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #cac2c2;

  .header-left {
    color: #636364;
    .h-add {
      padding-right: 10px;
      border-right: 1px solid #636364;
    }
    .h-app {
      padding-left: 10px;
      color: #666;
      .iphone {
        color: #2786e6;
        font-size: 20px;
      }
    }
  }
  .header-right {
    display: flex;
    .h-r-longin span {
      padding-right: 10px;
      cursor: pointer;
      border-right: 1px solid #636364;
    }
    .h-r-box {
      padding-left: 10px;
      .reg {
        padding-right: 10px;
        color: #636364;
      }
      .all-game {
        color: #636364;
        .downarrow {
          font-size: 40px;
          color: #636364;
        }
      }
    }
  }
}

header {
  height: 100px;
  line-height: 100px;
  .logo {
    width: 20%;
  }
  .nav {
    width: 60%;

    ul > li {
      a {
        color: black;
      }
      font-size: 22px;
      margin: 0 20px;
    }
    a.router-link-exact-active {
      color: #2786e6;
      padding-bottom: 10px;
      border-bottom: 4px solid #2786e6;
    }
  }
  .search {
    width: 21%;
    input {
      padding: 10px 0;
      padding-left: 10px;
      font-size: 16px;
    }
    .btn-search {
      padding: 12px 10px;
      background-color: #2786e6;
      color: white;
      border: 1px solid #2786e6;
      border-radius: 0 3px 3px 0;
    }
  }
}
</style>
