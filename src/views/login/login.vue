<template>
  <div class="login"  v-loading="$store.state.loading">
      <header class='header'>
        <span>返回</span>
        <b>会员登录</b>
        <span @click='register'>注册</span>
      </header>
      <input type="text" placeholder="请输入您的手机号" v-model="user">
      <input type="text" placeholder="请输入您的密码" v-model="userPassword">
      <button @click='logining'>立即登录</button>
  </div>
</template>
<script>
import {setCookie} from '../../utils/utils'
export default {
  name: 'login',
  data(){
    return {
      user:'',
      userPassword:'',
      loading: true
    }
  },
  methods: {
    logining(){
        let that = this;
        let reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
        if(!reg.test(this.user)){ 
          alert('请输入正确格式的手机号');
          return;
        }
        that.loading = this.$store.commit('update_login', true)
        this.$http_token.post('/admin/loginUser',{
            user: this.user,
            userPassword: this.userPassword
        }).then(({data})=> {
            setTimeout(()=> {
                  if (data.code === 1) {
                      setCookie('token', data.token);
                      this.$router.push({name: 'home'})
                  } else {
                      alert('还没有注册');
                      this.$router.push({name: 'register'})
                  }
                  that.loading = this.$store.commit('update_login', false)
                  this.$store.commit('user_name', this.user)
            },1000)
        })        
    },
    register(){
      this.$router.push({name: 'register'})
    }
  }
}
</script>
<style scoped>
  .login{
    width: 100%;
    height: 100%;
  }
  .login .header{
    width: 100%;
    height: 0.9rem;
    line-height: .9rem;
    display:  flex;
    justify-content: space-between;
  }
  .login input{
    width: 90%;
    height: 1rem;
    outline: none;
    margin-top:.5rem; 
    margin-left:5%; 
  }
  .login button{
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
