<template>
  <div class="newLocation">
      <header class="header">
          <span @click="back">< </span>
          <b>收货人</b>
          <span @click='home'>首页</span>
      </header>
      <div class="section">
          <input type="text" placeholder="收货人姓名">
          <input type="text" placeholder="手机号">     
          <city-list :data='dataList'></city-list>
          <p>保存</p>
      </div>
  </div>
</template>
<script>
import cityList from "../../components/cityChoose.vue";
export default {
  name: "newLocation",
  data: function() {
    return {
      dataList: ''
    }
  },
  mounted() {
    this.$http.post("/location/city").then(res => {
      this.dataList = res.data;
      console.log(this.dataList);
    });
  },
  components: {
    'city-list': cityList
  },
  methods: {
    home(){
      this.$router.push({name: 'home'})
    },
    back(){
      this.$router.go(-1)
    }
  }
};
</script>
<style>
.newLocation {
  width: 100%;
  height: 100%;
  background: #eee;
}
.newLocation .header {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  border-bottom: 1px solid #ccc;
  padding: 0 0.2rem;
  display: flex;
  justify-content: space-between;
}
.newLocation input {
  width: 95%;
  height: 0.8rem;
  background: #fff;
  border: none;
  padding-left: 0.1rem;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.newLocation p {
  width: 70%;
  height: 0.9rem;
  background: red;
  color: #fff;
  text-align: center;
  line-height: 0.9rem;
  margin-left: 15%;
  border-radius: 1rem;
  margin-top: 1rem;
}
</style>
