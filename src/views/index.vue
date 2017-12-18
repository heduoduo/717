<template>
  <div class="wrap">
      <!-- <transition name='route'> -->
            <keep-alive include='commodity'>
                <router-view class="container"></router-view>
            </keep-alive>
      <!-- </transition> -->
      <div class="footer">
          <ul>
                <router-link :to="{name:'home'}" :tag="'li'">
                    <i class='icon iconfont icon-shouye'></i>
                    <span>首页</span>
                </router-link>
                <router-link :to="{name: 'catatory'}" :tag="'li'">
                    <i class='icon iconfont icon-icon'></i>
                    <span>分类</span>
                </router-link>
                <router-link :to="{name: 'community'}" :tag="'li'">
                    <i class='icon iconfont icon-shequ'></i>
                    <span>社区</span>
                </router-link>
                <router-link :to="{name: 'shopping'}" :tag="'li'">
                    <i class='icon iconfont icon-gouwuchekong'></i>
                    <span>购物车</span>
                    <span class='bg'>{{$store.state.addCar.length}}</span>
                </router-link>
                <router-link :to="{name: 'my'}" :tag="'li'">
                    <i class='icon iconfont icon-home1'></i>
                    <span>我的</span>
                </router-link>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'index'
}
</script>
<style scoped>
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
    .container{
        flex:1;
        width: 100%;
        overflow: auto;
    }
    .footer, ul{
        width: 100%;
        flex-shrink: 0;
        height: .9rem;
        border-top:1px solid #eee; 
    }
    ul{
        display: flex;
    }
    ul li{
        flex:1;
        text-align: center;
    }
    .router-link-active{
        color:#fc4141;
    }
    ul li i, ul li span{
        display: block;
        height: 50%;
    }
    ul li .bg {
    width: .3rem;
    height: .3rem;
    font-size: 10px;
    line-height: .3rem;
    display: block;
    position: fixed;
    background: #fc4141;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    bottom:21px;
    right:25%;
    font-weight: normal;
    }
    /* .route-enter-active,.route-leave-active{
        transition: transform 5s ease;
    }
    .route-enter{
        transform: translate3d(100%, 0, 0)
    }
    .route-enter-to,.rout  e-leave{
        transform: translate3d(0,0,0)
    }
    .route-leave-to{
        transform: translate3d(-100%,0,0)
    } */
</style>