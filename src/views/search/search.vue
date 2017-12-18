<template>
  <div class="search">
      <header class="header">
        <form class='form'>
          <span class='icon iconfont icon-search'></span>
          <input type="text" placeholder="情书入您要购买的商品" v-model.trim='goods'>
        </form>
        <b @click='search'>搜索</b>
      </header>
      <div class="section">
        <p class='recent'>
          <span>最近搜索</span>
          <img src="http://www.lb717.com/static/mobile/images/my/remo.png" alt="" @click='clear'>
        </p>
        <div class="record">
          暂无搜索记录
        </div>
        <ul class='list'>
          <li v-for="(item, index) in searchHistoryList" :key="index">{{item}}</li>
        </ul>
        <div class="common">
          <p>大家都在搜</p>
          <ul>
            <li>粽子</li>
            <li>锅巴</li>
            <li>酱</li>
            <li>小吃</li>
            <li>零食</li>
            <li>干果</li>
            <li>特产</li>
            <li>油</li>
            <li>大米</li>
            <li>面粉</li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'search',
  data: function () {
    return {
      goods: '',
      searchHistoryList: []
    }
  },
  created(){
    this.getHistory()
  },
  methods: {
    search: function () {
      if (!this.goods) return;
      let ls = window.localStorage;
      let sHistory = ls.getItem('searchHistory');
      // console.log(sHistory)
      if (!sHistory) {
        ls.setItem('searchHistory', JSON.stringify([this.goods]))
      } else {
        let newHistory = JSON.parse(sHistory);
        newHistory.unshift(this.goods);
        newHistory = _.uniq(newHistory)
        ls.setItem('searchHistory', JSON.stringify(newHistory))
      }
      this.getHistory()
    },
    getHistory(){
      let ls = window.localStorage;
      this.searchHistoryList = JSON.parse(ls.getItem('searchHistory'));
    },
    clear(){
      window.localStorage.clear();
      this.getHistory()
    }
  }
}
</script>
<style scoped src='./search.css'>

</style>
