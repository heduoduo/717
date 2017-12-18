<template>
  <div class="shoppingCar">
      <header class="header">
        <span></span>
        <b>购物车</b>
        <span @click='edit'>编辑</span>
      </header>
      <div class="section">
        <!-- {{$store.state.addCar}} -->
        <div class="list">
          <div class="cartNull" v-if='$store.state.addCar.length==0'>
            购物为空，去逛逛
          </div>
          <div class='cart' v-else>
            <cart-list v-for="(item, index) in dataList" :key="index" :dataItem="item"></cart-list>
          </div>
        </div>
        <div class="totle">
          <div class="all">
            <span  @click="choseAll" class='bgsa' :class="{bgss: $store.state.checkedAll}"></span>
            <label for="chooseAll">全选</label>
          </div>
          <div class="Settlement" v-if="toggle">
            <b>合计： ￥{{$store.getters.sumerise.toFixed(2)}}</b>
            <strong>结算</strong>
          </div>
          <div class="remove" v-else @click="remove">
            删除
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import cartList from '../../components/cartList'
export default {
  name: 'shoppingCar',
  components: {
    'cart-list': cartList
  },
  data: function () {
    return {
      dataList:this.$store.state.addCar,
      bgss: false,
      toggle: true,
      flag: true
    }
  },
  methods: {
    choseAll(){
      this.$store.state.checkedAll = !this.$store.state.checkedAll
      this.$store.commit('update_chose_all', this.$store.state.checkedAll);
    },
    edit(){
      this.toggle = !this.toggle;
      this.flag = !this.flag;
    },
    remove(){
      let num = 0;
      this.$confirm('将永久删除选中的商品，是否继续', '确定', {
        confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
      }).then(()=>{
        this.$store.state.addCar.forEach((item, index)=>{
          if (item.checked) {
            num++;
          }
          this.$store.commit('delete_list', {
            len: num
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    }
  }
}
</script>
<style scoped src="./shoppingCar.css"></style>
