<template>
  <div class="location">
      <header class="header">
          <span @click='back'><</span>
          <b>收货地址</b>
          <span @click='home'>首页</span>
      </header>
      <div class="section">
          <p @click='addLocation'>+新增加地址</p>
      </div>
  </div>
</template>
<script>
export default {
  name: 'location',
  methods: {
        addLocation(){
            this.$router.push({name: 'newLocation'})
        },
        home(){
            this.$router.push({name: 'home'})
        },
        back(){
            this.$router.go(-1)
        }
  }
}
</script>
<style>
.location{
    width: 100%;
    height: 100%;
}
.location .header{
    width: 100%;
    height: 0.9rem;
    line-height: .9rem;
    border-bottom: 1px solid #ccc;
    padding: 0 .2rem;
    display: flex;
    justify-content: space-between;
}
.location p{
    width: 70%;
    height: 0.9rem;
    background: red;
    color:#fff;
    text-align: center;
    line-height: .9rem;
    margin-left:15%;
    border-radius: 1rem; 
    margin-top:1rem; 
}
</style>
