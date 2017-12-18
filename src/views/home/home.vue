<template>
  <div class="home">
      <header class='header'>
        <span class='left'><img src="../../assets/img/top.png" alt=""></span>
        <div class="center">
          <label for="serch"><span class="icon iconfont icon-search"></span></label>
          <input type="text" placeholder="请输入您要购买的东西" id='serch' @focus="search">
        </div>
        <dl class='right'>
          <dt class='icon iconfont icon-home'></dt>
          <dd>我的店铺</dd>
        </dl>
      </header>
      <section class="section" ref="main" @scroll="loadMore">
        <div ref="scroll" class="scroll">
          <div class="swiper-container wrapper-img">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="http://www.lb717.com/static/mobile/images/activity/banner_activite.jpg" alt="">
            </div>
            <div class="swiper-slide"><img src="http://www.lb717.com/static/mobile/images/homeImg/video717.png" alt="">
            </div>
            <div class="swiper-slide"><img src="http://www.lb717.com/static/mobile/images/homeImg/video.png" alt="">
            </div>
            <div class="swiper-slide"><img src="http://www.lb717.com/static/mobile/images/homeImg/banner1.png" alt="">
            </div>
            <div class='swiper-slide'><img src="http://www.lb717.com/static/mobile/images/homeImg/home.png" alt="">
            </div>
          </div>
          <div class="swiper-pagination swiperpage"></div> 
        </div>
          <ul class="home-nav">
            <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav1.png" alt=""><span>家乡味道</span></li>
            <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav2.png" alt=""><span>进口食品</span></li>
            <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav3.png" alt=""><span>牛奶乳品</span></li>
            <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav4.png" alt=""><span>茶果冲饮</span></li>
            <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav5.png" alt=""><span>休闲零食</span></li>
            <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav6.png" alt=""><span>米面粮油</span></li>
            <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav7.png" alt=""><span>调味调料</span></li>
            <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav8.png" alt=""><span>酒水饮料</span></li>
          </ul>
          <div class="mall-dynamic">
              <p>商城</br>动态</p>
              <div class="dynamic-content">
                <small>717商城社区服务功能正式上线！抢红包！晒家乡！好吃、好玩、好看尽在717商城社区！</small>
              </div>
          </div> 
          <div class="preferential">
              <span>
                  <i><img src="http://www.lb717.com/static/mobile/images/homeImg/todayimg.png"></i>
                  <label>天天特惠</label><small>每天有惊喜</small>
              </span>
              <p><a href="">更多<img src="http://www.lb717.com/static/mobile/images/homeImg/dayreturn.png"></a></p>
          </div>
          <div class="special">
            <div class="special-left">
                <a><img src="http://www.lb717.com/static/mobile/images/homeImg/home1.png"></a>
            </div>
            <div class="special-right">
                <div class="special-right-top">
                    <a ><img src="http://www.lb717.com/static/mobile/images/homeImg/ruwei.png"></a>
                </div>
                <div class="special-right-bottom">
                    <a ><img src="http://www.lb717.com/static/mobile/images/homeImg/gaodian.png"></a>
                </div>
            </div>
          </div>
          <div class="hometown">
            <img class="img1" src="http://www.lb717.com/static/mobile/images/homeImg/1.png" alt="">
            <label><img src="http://www.lb717.com/static/mobile/images/homeImg/homelandlogo.png"><small>家乡味道</small></label>
            <img class="img2" src="http://www.lb717.com/static/mobile/images/homeImg/1.png" alt="">
            <a>更多<img src="http://www.lb717.com/static/mobile/images/homeImg/homeland1.png"></a>
          </div>
          <div class="commodity">
            <commodity-pic v-for="(item, index) in list" :key="index" :data='item'></commodity-pic>
            <div class="more">{{Baseline}}</div>
          </div>
        </div>
      </section>
      <to-top v-if='isShow' v-on:toTop='toTop'></to-top>
  </div>
</template>
<script>
import Swiper from "swiper";
import commodityPic from '../../components/commodityPic';
import toTop from '../../components/toTop'
export default {
  name: "home",
  components: {
    'commodity-pic': commodityPic,
    'to-top': toTop
  },
  data: function () {
    return {
      list: [],
      channel_id: 2,
      flag: true,
      Baseline:'加载更多',
      isShow: false
    }
  },
  created: function () { // 数据双向绑定，此时DOM节点还没有生成
    this.queryGoodsList()
  },
  methods: {
    queryGoodsList: function () {
      this.$http.post('/mall/index/getGoodsChannel', {
        channel_id: this.channel_id
      }).then((res)=> {
        this.list = res.data.data.data;
      })
    },
    loadMore() {
      var that = this;
      if (!this.flag) return;
      let scroll = this.$refs.scroll;
      let main = this.$refs.main;
      let scrollHeight = scroll.offsetHeight;
      let mainHeight = main.offsetHeight;
      let scrollTop = main.scrollTop;
      if (scrollHeight - (mainHeight + scrollTop) <= 30) {
        this.isShow = true;
        this.flag = false;
        this.$http
          .post("/mall/index/getGoodsChannel", { channel_id: ++that.channel_id })
          .then(res => {
            if (res.data.data.data.length == 0) {
              that.Baseline = "我是有底线的";
            }
            that.list = that.list.concat(res.data.data.data);
            that.flag = true;
          });
      }
    },
    search(){
      this.$router.push({name: 'search'})
    },
    toTop(){
      let main = this.$refs.main;
      main.scrollTop = 0;
    }
  },
  mounted: function() {
    new Swiper(".wrapper-img", {
      loop: true,
      autoplay: true,
      pagination: ".swiperpage",
      paginationClickable: true
    });
  }
};
</script>
<style scoped src="./home.css"></style>
