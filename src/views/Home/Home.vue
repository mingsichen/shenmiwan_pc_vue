!<template>
  <div class="home">
    <Header />
    <!-- 轮播图 -->
    <div class="swiper-box">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide class="img-box">
          <a href>
            <img src="@/assets/images/banner1.png" alt />
          </a>
        </swiper-slide>
        <swiper-slide class="img-box">
          <a href>
            <img src="@/assets/images/banner2.png" alt />
          </a>
        </swiper-slide>
        <swiper-slide class="img-box">
          <a href>
            <img src="@/assets/images/banner1.png" alt />
          </a>
        </swiper-slide>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev left" slot="button-prev"></div>
        <div class="swiper-button-next right" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!-- 登录 -->
    <div class="w1260 login-box">
      <form action class="login">
        <div class="login-theme">
          <label for>游戏账号登录</label>
        </div>

        <div class="input-item dis-ali-center">
          <i class="iconfont icondenglu2 icons"></i>
          <input type="text" placeholder="请输入用户名/手机号" />
        </div>
        <div class="input-item dis-ali-center">
          <i class="iconfont icondenglu icons"></i>
          <input type="text" placeholder="请输入密码" />
        </div>
        <div class="dis-ali-center forget-box">
          <div class>
            <input type="checkbox" value="自动登录" placeholder />
            <span>自动登录</span>
          </div>
          <a href class="forget">忘记密码?</a>
        </div>
        <div class="login-btn">
          <button>登录</button>
        </div>
        <div class="other-login">
          <div class="other-loging-theme dis-jus-center">
            <p>其他账号登录</p>
          </div>
          <div class="other-item">
            <ul class="dis-jus-center">
              <li class="ipone">
                <a href class="iconshouji iconfont"></a>
              </li>
              <li class="wethat">
                <a href class="iconweixin iconfont"></a>
              </li>
              <li class="qq">
                <a href class="iconqq iconfont"></a>
              </li>
            </ul>
          </div>
          <div class="reg dis-jus-center">
            <p>
              还没有账号？
              <a>立即注册</a>
            </p>
          </div>
        </div>
      </form>
    </div>

    <!-- 精品推荐 -->
    <div class="w1260 fine">
      <div class="box-theme dis-ali-space">
        <div class="theme-left dis-ali-center">
          <span class="border-right"></span>
          <h3>精品推荐</h3>
        </div>
        <div class="theme-right">
          <i class="iconfont iconRectangleCopy8 refresh"></i>
          <span>更换一组</span>
        </div>
      </div>

      <div class="fine-game-list">
        <ul>
          <li class="game-item" v-for="(item,index) in recomList" :key="index">
            <a href class="dis-flex">
              <div class="pic">
                <img src="@/assets/images/game.png" alt />
              </div>
              <div class="info">
                <a href class="game-name">{{ item.title }}</a>
                <p class="game-type">
                  <span>{{ item.gameType}}</span>&nbsp; | &nbsp;
                  <span>{{ item.people }}人玩过</span>
                </p>
                <div class="game-btn">
                  <a href class="start-btn">开始游戏</a>
                  <a href class="get-gift">领取礼包</a>
                </div>
              </div>
            </a>
          </li>
          <!--         <li class="game-item">
            <a href class="dis-flex">
              <div class="pic">
                <img src="@/assets/images/game.png" alt />
              </div>
              <div class="info">
                <a href class="game-name">乐高无限</a>
                <p class="game-type">
                  <span>二次元</span>&nbsp; | &nbsp;
                  <span>1652人玩过</span>
                </p>
                <div class="game-btn">
                  <a href class="start-btn">开始游戏</a>
                  <a href class="get-gift">领取礼包</a>
                </div>
              </div>
            </a>
          </li> -->

        </ul>
      </div>
      <!-- 最近在玩 -->
      <div class="recent-paly dis-flex">
        <div class="recent-theme">
          <span>最近在玩</span>
        </div>
        <div class="recent-list">
          <ul class="dis-flex">
            <li class="recent-item">
              <a href class="dis-col-jus">
                <img class="game-icons" src="@/assets/images/game1.png" alt />
                <p>乐高无限</p>
              </a>
            </li>
            <li class="recent-item">
              <a href class="dis-col-jus">
                <img class="game-icons" src="@/assets/images/game1.png" alt />
                <p>乐高无限</p>
              </a>
            </li>
            <li class="recent-item">
              <a href class="dis-col-jus">
                <img class="game-icons" src="@/assets/images/game1.png" alt />
                <p>乐高无限</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 精品推荐 -->
    <div class="w1260 fine newsGame dis-flex">
      <div class="newsGame-left">
        <div class="box-theme dis-ali-space">
          <div class="theme-left dis-ali-center">
            <span class="border-right"></span>
            <h3>最新游戏</h3>
          </div>
          <div class="theme-right">
            <span>更多</span>
            <i class="iconfont iconRectangleCopy8 refresh"></i>
          </div>
        </div>
        <div class="newsGameList">
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
                  <span>二元</span>&nbsp; | &nbsp;
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>12人玩过</span>
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>16人玩过</span>
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
                  <span>次元</span>&nbsp; | &nbsp;
                  <span>16人玩过</span>
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>122玩过</span>
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>122玩过</span>
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>122玩过</span>
                </p>
                <div class="game-btn">
                  <a href class="btn-all">开始游戏</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="newsGame-right">
        <div class="box-theme dis-ali-center">
          <div class="theme-left dis-ali-center">
            <span class="border-right"></span>
            <h3>开服表</h3>
          </div>
          <div class="theme-right">
            <span>H5游戏</span>
          </div>
        </div>
        <div class="open-list">
          <div class="open-theme">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="已开服" name="first">
                <div class="opened-gameList">
                  <ul>
                    <li class="opened-item dis-ali-space">
                      <a href>10:30 10:00</a>
                      <a href>攻城掠地</a>
                      <a href>1996区</a>
                    </li>
                    <li class="opened-item dis-ali-space">
                      <a href>10:30 10:00</a>
                      <a href>攻城掠地</a>
                      <a href>1996区</a>
                    </li>
                    <li class="opened-item dis-ali-space">
                      <a href>10:30 10:00</a>
                      <a href>攻城掠地</a>
                      <a href>1996区</a>
                    </li>
                    <li class="opened-item dis-ali-space">
                      <a href>10:30 10:00</a>
                      <a href>攻城掠地</a>
                      <a href>1996区</a>
                    </li>
                    <li class="opened-item dis-ali-space">
                      <a href>10:30 10:00</a>
                      <a href>攻城掠地</a>
                      <a href>1996区</a>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="新服预告" name="second">配置管理</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>

    <!-- 中间层图片 -->
    <div class="w1260 middle-pic">
      <img src="@/assets/images/modlue.png" alt />
    </div>

    <!-- 特色活动 -->
    <div class="special-active w1260">
      <div class="box-theme dis-ali-space">
        <div class="theme-left dis-ali-center">
          <span class="border-right"></span>
          <h3>精品推荐</h3>
        </div>
        <div class="theme-right">
          <span>更换一组</span>
          <i class="iconfont iconRectangleCopy8 refresh"></i>
        </div>
      </div>
      <div class="special-box">
        <ul class="dis-wrap">
          <li class="special-item">
            <img src="@/assets/images/banner1.png" alt />
            <p class>11月12日周末主题活动</p>
          </li>
          <li class="special-item">
            <img src="@/assets/images/banner1.png" alt />
            <p class>11月12日周末主题活动</p>
          </li>
          <li class="special-item">
            <img src="@/assets/images/banner1.png" alt />
            <p class>11月12日周末主题活动</p>
          </li>
          <li class="special-item">
            <img src="@/assets/images/banner1.png" alt />
            <p class>11月12日周末主题活动</p>
          </li>
          <li class="special-item">
            <img src="@/assets/images/banner1.png" alt />
            <p class>11月12日周末主题活动</p>
          </li>
          <li class="special-item">
            <img src="@/assets/images/banner1.png" alt />
            <p class>11月12日周末主题活动</p>
          </li>
          <li class="special-item">
            <img src="@/assets/images/banner1.png" alt />
            <p class>11月12日周末主题活动</p>
          </li>
          <li class="special-item">
            <img src="@/assets/images/banner1.png" alt />
            <p class>11月12日周末主题活动</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 礼包模块 -->
    <div class="gift-center w1260">
      <div class="gift-left">
        <div class="box-theme dis-ali-space">
          <div class="theme-left dis-ali-center">
            <span class="border-right"></span>
            <h3>礼包中心</h3>
            <div class="theme-right">
              <span>H5游戏</span>
            </div>
          </div>
          <div class="theme-right">
            <span>更多</span>
            <i class="iconfont iconRectangleCopy8 refresh"></i>
          </div>
        </div>
        <div class="gift-left-box">
          <ul class="dis-wrap">
            <li class="gift-left-item">
              <div class="pic-info">
                <img src="@/assets/images/modlue.png" alt />
                <p class="pic-bottom">
                  <span class="game-name">斩月屠龙h5</span>
                  <span class="gift-btn">领取礼包</span>
                </p>
              </div>
              <div class="gift-name t-o-ellipsis">称霸武林，谁与争锋。</div>
            </li>
            <li class="gift-left-item">
              <div class="pic-info">
                <img src="@/assets/images/modlue.png" alt />
                <p class="pic-bottom">
                  <span class="game-name">斩月屠龙h5</span>
                  <span class="gift-btn">领取礼包</span>
                </p>
              </div>
              <div class="gift-name t-o-ellipsis">称霸武林，谁与争锋。</div>
            </li>
            <li class="gift-left-item">
              <div class="pic-info">
                <img src="@/assets/images/modlue.png" alt />
                <p class="pic-bottom">
                  <span class="game-name">斩月屠龙h5</span>
                  <span class="gift-btn">领取礼包</span>
                </p>
              </div>
              <div class="gift-name t-o-ellipsis">称霸武林，谁与争锋。</div>
            </li>
            <li class="gift-left-item">
              <div class="pic-info">
                <img src="@/assets/images/modlue.png" alt />
                <p class="pic-bottom">
                  <span class="game-name">斩月屠龙h5</span>
                  <span class="gift-btn">领取礼包</span>
                </p>
              </div>
              <div class="gift-name t-o-ellipsis">称霸武林，谁与争锋。</div>
            </li>
            <li class="gift-left-item">
              <div class="pic-info">
                <img src="@/assets/images/modlue.png" alt />
                <p class="pic-bottom">
                  <span class="game-name">斩月屠龙h5</span>
                  <span class="gift-btn">领取礼包</span>
                </p>
              </div>
              <div class="gift-name t-o-ellipsis">称霸武林，谁与争锋。</div>
            </li>
            <li class="gift-left-item">
              <div class="pic-info">
                <img src="@/assets/images/modlue.png" alt />
                <p class="pic-bottom">
                  <span class="game-name">斩月屠龙h5</span>
                  <span class="gift-btn">领取礼包</span>
                </p>
              </div>
              <div class="gift-name t-o-ellipsis">称霸武林，谁与争锋。</div>
            </li>
            <li class="gift-left-item">
              <div class="pic-info">
                <img src="@/assets/images/modlue.png" alt />
                <p class="pic-bottom">
                  <span class="game-name">斩月屠龙h5</span>
                  <span class="gift-btn">领取礼包</span>
                </p>
              </div>
              <div class="gift-name t-o-ellipsis">称霸武林，谁与争锋。</div>
            </li>
            <li class="gift-left-item">
              <div class="pic-info">
                <img src="@/assets/images/modlue.png" alt />
                <p class="pic-bottom">
                  <span class="game-name">斩月屠龙h5</span>
                  <span class="gift-btn">领取礼包</span>
                </p>
              </div>
              <div class="gift-name t-o-ellipsis">称霸武林，谁与争锋。</div>
            </li>
            <li class="gift-left-item">
              <div class="pic-info">
                <img src="@/assets/images/modlue.png" alt />
                <p class="pic-bottom">
                  <span class="game-name">斩月屠龙h5</span>
                  <span class="gift-btn">领取礼包</span>
                </p>
              </div>
              <div class="gift-name t-o-ellipsis">称霸武林，谁与争锋。</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="gift-right">
        <div class="new-top">
          <div class="box-theme dis-ali-space">
            <div class="theme-left dis-ali-center">
              <span class="border-right"></span>
              <h3>新间公告</h3>
            </div>
          </div>
          <div class="news-content">
            <h6 class="news-topic">【公告】乱住江湖满V版9月27日 更新公告</h6>
            <div class="news-box">
              <ul>
                <li class="news-item dis-ali-center">
                  <span>活动</span>
                  <a href class="text t-o-ellipsis">主公受惊了h5国庆活动</a>
                </li>
                <li class="news-item dis-ali-center">
                  <span>活动</span>
                  <a href class="text t-o-ellipsis">中秋活动 9月12日下午...</a>
                </li>
                <li class="news-item dis-ali-center">
                  <span>活动</span>
                  <a href class="text t-o-ellipsis">主公受惊了h5国庆活动</a>
                </li>
                <li class="news-item dis-ali-center">
                  <span>攻略</span>
                  <a href class="text t-o-ellipsis">《主公受惊了》游戏</a>
                </li>
                <li class="news-item dis-ali-center">
                  <span>活动</span>
                  <a href class="text t-o-ellipsis">主公受惊了h5国庆活动</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="new-bottom">
          <div class="box-theme dis-ali-space">
            <div class="theme-left dis-ali-center">
              <span class="border-right"></span>
              <h3>最新专题</h3>
            </div>
          </div>
          <div class="news-content">
            <div class="news-pic">
              <img src="@/assets/images/banner2.png" alt />
            </div>
            <div class="news-info">
              <ul>
                <li class="news-item dis-ali-center">
                  <span class="point"></span>
                  <a href class="text t-o-ellipsis">全速前进 开启你的飞驰人生！</a>
                  <span class="time">11-17</span>
                </li>
                <li class="news-item dis-ali-center">
                  <span class="point"></span>
                  <a href class="text t-o-ellipsis">全速前进 开启你的飞驰人生！</a>
                  <span class="time">11-17</span>
                </li>
                <li class="news-item dis-ali-center">
                  <span class="point"></span>
                  <a href class="text t-o-ellipsis">全速前进 开启你的飞驰人生！</a>
                  <span class="time">11-17</span>
                </li>
                <li class="news-item dis-ali-center">
                  <span class="point"></span>
                  <a href class="text t-o-ellipsis">全速前进 开启你的飞驰人生！</a>
                  <span class="time">11-17</span>
                </li>
                <li class="news-item dis-ali-center">
                  <span class="point"></span>
                  <a href class="text t-o-ellipsis">全速前进 开启你的飞驰人生！</a>
                  <span class="time">11-17</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 热门游戏 -->
    <div class="red-game w1260">
      <div class="box-theme dis-ali-space">
        <div class="theme-left dis-ali-center">
          <span class="border-right"></span>
          <h3>热门游戏</h3>
        </div>
        <div class="theme-right">
          <span>更多</span>
          <i class="iconfont iconRectangleCopy8 refresh"></i>
        </div>
      </div>
      <div class="red-game-box">
        <div class="newsGameList">
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
                  <span>二元</span>&nbsp; | &nbsp;
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>12人玩过</span>
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>16人玩过</span>
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
                  <span>次元</span>&nbsp; | &nbsp;
                  <span>16人玩过</span>
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>122玩过</span>
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>122玩过</span>
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>122玩过</span>
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>122玩过</span>
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>122玩过</span>
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
                  <span>二元</span>&nbsp; | &nbsp;
                  <span>122玩过</span>
                </p>
                <div class="game-btn">
                  <a href class="btn-all">开始游戏</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 尾部 -->
    <HomeFooter />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import HomeFooter from "@/components/HomeFooter/HomeFooter.vue";




export default {
  name: "Home",
  components: {
    Header,
    HomeFooter
  },
  data() {
    return {
      activeName: "first",
      recomList: [],

      swiperOption: {
        autoplay: false,
        // {
        //   // 自动播放
        //   delay: 3500,
        //   autoplay: false,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false
        // },
        pagination: {
          // 点
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          dynamicBullets: false
        },
        navigation: {
          // 右左两个按钮
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        speed: 1000,
        loop: true
      }
    };
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false)
    this.$axios.post('/news/api')

      .then((res) => {

        console.log(res)
        console.log(res.data.recomList)
        this.recomList = res.data.recomList

      })

      .catch((err) => {

        console.log(err)

      })



    // 引入接口axios
    /*  this.$axios.post("https://api.apiopen.top/videoHomeTab").then(res => {
       var datares = res.data;
       console.log(datares);
     });  */

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper

    }
  },

  methods: {
    // 点击切换开服列表
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" >
.home {
  .swiper-box {
    position: relative;
    .left,
    .right {
      z-index: 999;
    }
    .img-box {
      img {
        width: 100%;
        min-width: 1260px;
        max-width: 1920px;
        height: 520px;
        margin: 0 auto;
        display: block;
      }
    }
  }
  .login-box {
    position: relative;
    .login {
      height: 400px;
      width: 340px;
      position: absolute;
      left: 0px;
      top: -400px;
      z-index: 1;
      // text-align: center;
      background-color: #ffffff;
      .login-theme {
        text-align: center;
        margin: 20px 0;
        font-size: 20px;
        color: #1a1a1a;
      }
      .input-item {
        border: 1px solid #d5d5d5;
        height: 46px;
        line-height: 40px;
        margin: 12px 30px;
        .icons {
          font-size: 30px;
          padding: 0 10px;
          color: #b2b2b2;
        }
        input {
          height: 100%;
          border: none;
          outline: none;
        }
      }
      .forget-box {
        justify-content: space-between;
        margin: 0px 30px;
        .forget {
          color: #2786e6;
        }
      }
      .login-btn {
        display: flex;
        justify-content: center;
        button {
          border: none;
          width: 280px;
          border-radius: 5px;
          margin: 15px 0;
          height: 48px;
          color: #ffffff;
          background-color: #2786e6;
        }
      }
      .other-login {
        .other-loging-theme {
          position: relative;
          p:before,
          p:after {
            content: "";
            position: absolute;
            height: 1px;
            width: 65px;
            background-color: #a9a9a9;
            top: 12px;
          }
          p:before {
            left: 43px;
          }
          p:after {
            left: 230px;
          }
        }
        .other-item {
          ul {
            li {
              width: 36px;
              margin: 10px 15px;
              height: 36px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #fd9334;
              a {
                font-size: 25px;
                color: #ffffff;
              }
            }
            .ipone {
              background-color: #fd9334;
            }
            .wethat {
              background-color: #1fd659;
            }
            .qq {
              background-color: #ffffff;
              a {
                color: #2786e6;
                font-size: 36px;
              }
            }
          }
        }
        .reg {
          a {
            color: #4697e9;
            cursor: pointer;
          }
        }
      }
    }
  }
  .fine {
    // height: 1000px;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
    .box-theme {
      padding: 20px 0;
      .theme-left {
        .border-right {
          height: 30px;
          margin: 0px 20px;
          border-right: 5px solid #f9af14;
        }
      }
      .theme-right {
        margin-right: 20px;
        .refresh {
          font-size: 22px;
          margin-right: 10px;
        }
      }
    }
    .fine-game-list {
      border-bottom: 1px solid #dcdcdc;
      ul {
        padding: 0 10px 20px 10px;
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
        .game-item {
          // width: 220px;
          padding: 10px;
          padding-right: 20px;
          border-radius: 10px;
          margin: 0 15px 10px 0;
          .pic {
            img {
              width: 86px;
              height: 86px;
              border-radius: 10px;
            }
          }
          .info {
            margin-left: 20px;
            .game-name {
              color: #1a1a1a;
              font-size: 18px;
            }
            .game-name:hover {
              color: #2786e6;
            }
            .game-type {
              padding: 5px 0;
              color: #636364;
            }
            .game-btn {
              a {
                height: 30px;
                width: 72px;
                display: inline-block;
                line-height: 30px;
                text-align: center;
                border-radius: 5px;
              }
              .start-btn {
                color: #2786e6;
                border: 1px solid #2786e6;
                margin-right: 10px;
              }
              .get-gift {
                color: #f9af14;
                border: 1px solid #f9af14;
              }
            }
          }
        }
        .game-item:hover {
          box-shadow: 0px 2px 10px 0px rgba(94, 91, 95, 0.52);
        }
      }
    }
    .recent-paly {
      padding: 20px;
      .recent-theme {
        writing-mode: tb-rl;
        font-size: 23px;
        color: #636364;
        margin-right: 20px;
        width: 30px;
      }
      .recent-list {
        .recent-item {
          padding-right: 30px;
          p {
            padding: 10px 0;
            color: #1a1a1a;
          }
        }
      }
    }
  }
  .newsGame {
    height: 550px;
    justify-content: space-between;
    .newsGame-left {
      width: 70%;
      border-radius: 10px;
      box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
      .newsGameList {
        ul {
          padding-left: 10px;
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
    }
    .newsGame-right {
      width: 28%;
      border-radius: 10px;
      box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
      .box-theme {
        .theme-right {
          span {
            height: 30px;
            line-height: 30px;
            background-color: #fd9334;
            color: #ffffff;
            padding: 2px 8px;
            border-radius: 3px;
            margin-left: 20px;
            font-size: 14px;
          }
        }
      }
      .open-list {
        padding: 0 20px;
        .open-theme {
          .el-tabs__nav {
            width: 100%;
            display: flex !important;
            justify-content: space-between;
          }
          .el-tabs__item {
            width: 50%;
            text-align: center;
            font-size: 20px;
          }
        }
      }
      .opened-gameList {
        .opened-item {
          padding: 10px 0;
          border-bottom: 1px solid #dcdcdc;
        }
      }
    }
  }
  .middle-pic {
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
    img {
      width: 100%;
      height: 140px;
    }
  }
  .special-active {
    box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
    border-radius: 10px;
    .box-theme {
      padding: 20px 0;
      .theme-left {
        .border-right {
          height: 30px;
          margin: 0px 20px;
          border-right: 5px solid #f9af14;
        }
      }
      .theme-right {
        margin-right: 20px;
        .refresh {
          font-size: 22px;
          margin-right: 10px;
        }
      }
    }
    .special-box {
      padding: 0 20px;
      ul {
        justify-content: space-between;
        .special-item {
          position: relative;
          width: 275px;
          height: 165px;
          overflow: hidden;
          margin-bottom: 20px;
          // margin-right: 30px;
          img {
            width: 100%;
            height: 100%;
          }
          p {
            height: 30px;
            line-height: 30px;
            color: #ffffff;
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            font-size: 14px;
            padding-left: 10px;
            background-color: rgba(18, 18, 19, 0.49);
          }
        }
      }
    }
  }
  .gift-center {
    // height: 400px;
    display: flex;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
    .gift-left {
      width: 70%;
      box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
      .box-theme {
        padding: 20px 0;
        .theme-left {
          .border-right {
            height: 30px;
            margin: 0px 20px;
            border-right: 5px solid #f9af14;
          }
          .theme-right {
            span {
              height: 30px;
              line-height: 30px;
              background-color: #fd9334;
              color: #ffffff;
              padding: 2px 8px;
              border-radius: 3px;
              margin-left: 20px;
              font-size: 14px;
            }
          }
        }
        .theme-right {
          margin-right: 20px;
          .refresh {
            font-size: 22px;
            margin-right: 10px;
          }
        }
      }
      .gift-left-box {
        ul {
          padding: 0 20px;
          .gift-left-item {
            width: 260px;
            margin-right: 20px;
            margin-bottom: 30px;
            .pic-info {
              width: 100%;
              height: 160px;
              position: relative;
              img {
                width: 100%;
                height: 100%;
              }
              .pic-bottom {
                position: absolute;
                height: 30px;
                line-height: 30px;
                bottom: 0;
                left: 0;
                width: 100%;
                background-color: rgba(18, 18, 19, 0.49);
                color: #ffffff;
                .game-name {
                  font-size: 13px;
                  padding-left: 10px;
                }
                .gift-btn {
                  width: 70px;
                  height: 30px;
                  line-height: 30px;
                  background: #4697e9;
                  text-align: center;
                  border-radius: 5px;
                  font-size: 14px;
                  display: inline-block;
                  position: absolute;
                  right: 10px;
                  bottom: 10px;
                }
              }
            }
            .gift-name {
              padding-left: 10px;
              font-size: 15px;
              padding-top: 5px;
            }
          }
        }
      }
    }
    .gift-right {
      width: 28%;
      margin-left: 20px;
      box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
      .box-theme {
        padding: 20px 0;
        .theme-left {
          .border-right {
            height: 30px;
            margin: 0px 20px;
            border-right: 5px solid #f9af14;
          }
        }
      }
      .new-top {
        box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
        .news-content {
          padding: 0 20px;
          .news-topic {
            font-size: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .news-box {
            margin-top: 15px;
            border-radius: 10px;
            .news-item {
              padding-bottom: 15px;
              span {
                width: 56px;
                height: 30px;
                font-size: 15px;
                line-height: 30px;
                text-align: center;
                background: #e2e2e2;
                color: #8e8e93;
                display: inline-block;
                border-radius: 4px;
                margin-right: 10px;
              }
              .text {
                width: 80%;
              }
            }
          }
        }
      }
      .new-bottom {
        margin-top: 20px;
        box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
        .news-content {
          .news-pic {
            img {
              width: 100%;
              height: 160px;
            }
          }
          .news-info {
            padding: 0 15px;
            ul {
              .news-item {
                padding-bottom: 20px;
                .point {
                  height: 10px;
                  width: 10px;
                  border-radius: 50%;
                  background: #b0b0b5;
                  margin-right: 10px;
                }
                .text {
                  width: 73%;
                }
                .time {
                  width: 15%;
                  margin-left: 10px;
                  text-align: right;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
  .red-game {
    margin-top: 20px;
    box-shadow: 0px 7px 30px 0px rgba(191, 181, 181, 0.52);
    .box-theme {
      padding: 20px 0;
      .theme-left {
        .border-right {
          height: 30px;
          margin: 0px 20px;
          border-right: 5px solid #f9af14;
        }
      }
      .theme-right {
        margin-right: 20px;
        .refresh {
          font-size: 22px;
          margin-right: 10px;
        }
      }
    }
    .red-game-box {
      .newsGameList {
        ul {
          padding-left: 10px;
          .newGame-item {
            font-size: 15px;
            padding-right: 12px;
            padding-bottom: 10px;
            width: 230px;
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
    }
  }
}
</style>
