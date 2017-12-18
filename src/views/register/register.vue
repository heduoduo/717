<template>
  <div class="register"  v-loading="$store.state.loading">
      <header class='header'>
        <span>返回</span>
        <b>注册会员</b>
        <span @click="login">登录</span>
      </header>
      <input type="text" placeholder="请输入您的手机号" v-model="user">
      <input type="text" placeholder="请输入您的密码" v-model="userPassword">
      <button @click='register'>确定</button>
  </div>
</template>
<script>
export default {
  name: 'register',
  data(){
      return {
        user:'',
        userPassword:''
      }
  },
  methods: {
      register(){
        this.$http.post('/admin/register',{
            user: this.user,
            userPassword: this.userPassword
        }).then((res)=> {
            console.log(res)
        })
      },
      login(){
        this.$router.push({name: 'login'})
      }
  }
}
</script>
<style scoped>
    .register{
    width: 100%;
    height: 100%;
  }
  .register .header{
    width: 100%;
    height: 0.9rem;
    line-height: .9rem;
    display:  flex;
    justify-content: space-between;
  }
  .register input{
    width: 90%;
    height: 1rem;
    outline: none;
    margin-top:.5rem; 
    margin-left:5%; 
  }
  .register button{
    width: 60%;
    height: 0.9rem;
    line-height: .9rem;
    background: red;
    color:#fff;
    border-radius: 1rem;
    text-align: center;
    outline: none;
    margin-top:1rem;
    border: none;
    margin-left:20%;  
  }
</style>
