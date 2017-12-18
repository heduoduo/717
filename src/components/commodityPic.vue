<template>
        <dl class='commodity-list' @click="goods_detail">
            <dt><img :src="'http://www.lb717.com/'+data.obj_data" alt=""></dt>
            <dd>
            <p>{{data.goods_name}}</p>
            <p><span>{{data.discount_price}}</span>
            <img src="http://www.lb717.com//static/mobile/images/homeImg/homeland3.png" alt="" @click.stop='addCart'></p>
            </dd>
        </dl>    
</template>
<script>
import {getCookie} from '../utils/utils.js'
export default {
  name: "commodity",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    goods_detail() {
      console.log(this.data.goods_id);
      this.$router.push({
        name: "detail",
        params: {
          id: this.data.goods_id,
          goodsImg: this.data.obj_data,
          goodsPrice: this.data.discount_price,
          goodsName: this.data.goods_name
        }
      });
    },
    addCart() {
      let that = this;
      this.$http.post("/admin/add/addCart", {
        id: this.data.goods_id,
        goodsName: this.data.goods_name,
        goodsPrice: this.data.discount_price
      }).then(res => {       
        if(!getCookie('token')){
          this.$router.push({
            name:'login',
            query: {
              from:'home'
            }
          })
          return;
        } else {
          this.$message('添加成功');
          this.$store.commit('update_addCar', {
            id: that.data.goods_id,
            goodsName: that.data.goods_name,
            goodsPrice: that.data.discount_price,
            count: 1,
            url: 'http://www.lb717.com/'+that.data.obj_data,
            checked: false
          });
          // console.log(this.$store.state.addCar)
        }
      });
    }
  }
};
</script>
<style scoped>
body{
  position: relative;
}
.commodity-list {
  width: 48%;
  height: 100%;
  margin-top: 0.12rem;
  margin-bottom: 0.12rem;
  margin-left: 0.12rem;
}
.commodity-list dt img {
  width: 100%;
  height: auto;
}
.commodity-list dd p:nth-child(1) {
  width: 100%;
  height: 0.7rem;
  font-size: 0.2rem;
}
.commodity-list dd p:nth-child(2) {
  color: red;
}
.commodity-list dd p:nth-child(2) span {
  float: left;
}
.commodity-list dd p:nth-child(2) img {
  width: 0.5rem;
  vertical-align: middle;
  float: right;
}
/* .el-notification  right{
  background: red;
  position:absolute;
  top:50%;
  left:50%;
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  transform:translate(-50%,-50%);  
} */
</style>
