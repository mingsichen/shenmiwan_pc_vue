!<template>
  <div class="footer">
    <div class="w1260 footer-box">
      <div class="abousUs">
        <a>关于我们</a>&nbsp;|
        <a>联系我们</a>&nbsp;|
        <a>推广平台</a>&nbsp;|
        <a>H5游戏</a>
      </div>
      <div class="abousUs">
        <p>广州神秘玩网络科技有限公司 版权所有 粤ICP备19084395号</p>
      </div>
      <div class="abousUs footer-other">
        <p>低质不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</p>
      </div>
      <div class="abousUs footer-other">
        <p>纠纷处理方式：联系客服或依《用户协议》约定方式处理</p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "HomeFooter",

  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.footer {
  height: 220px;
  margin-top: 20px;
  background-color: #272727;
  .footer-box {
    padding: 50px 0;
    .abousUs {
      padding-bottom: 10px ;
      color: #ffffff;
      a {
        color: #ffffff;
        padding: 0 10px;
      }
      text-align: center;
    }
    .footer-other{
      color:#8E8E93;
    }
  }
}
</style>
