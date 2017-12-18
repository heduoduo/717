<template>
    <dl class='dl'>
        <dt>
        <span :class="{bgss: dataItem.checked}" @click="addBg" class='bgsa'></span>
        <img :src="dataItem.url" alt="">
        </dt>
        <dd>
        <p>{{dataItem.goodsName}}</p>
        <span class='count'>X{{dataItem.count}}</span>
        <div class="price">
            {{(dataItem.goodsPrice * dataItem.count).toFixed(2) }}
        </div>
        <ul>
            <li @click='reduce'>-</li><li>{{dataItem.count}}</li><li @click="increase">+</li>
        </ul>
        </dd>
    </dl>
</template>
<script>
export default {
    name: 'cartList',
    props: {
        dataItem: {
            required: true,
            type: Object
        }
    },
    methods: {
        addBg(){
            this.$store.commit('update_checked', {
                checked: !this.dataItem.checked,
                id: this.dataItem.id
            });
        },
        reduce(){
            this.dataItem.count--;
        },
        increase(){
            this.dataItem.count++;
        }
    }
}
</script>
<style>
.shoppingCar .dl .bgsa {
    display: inline-block;
    position: absolute;
    left: .2rem;
    top: 1.06rem;
    width: .48rem;
    height: .48rem;
    border-radius: 50%;
    border: 1px solid #ccc;
}
.shoppingCar .dl .bgss {
    display: inline-block;
    position: absolute;
    left: .2rem;
    top: 1.06rem;
    width: .48rem;
    height: .48rem;
    border-radius: 50%;
    border: 1px solid #ccc;
    background: url(../assets/img/8.gif) no-repeat  center center;
}
.shoppingCar .dl{
    padding-top:.2rem;
    width: 100%;
    height: 3.2rem;
    background: #fff;
    margin-bottom: .2rem;
    position: relative;
    display: flex;
    border-bottom: 1px solid #ccc;
}
.shoppingCar .dl dt{
    width: 50%;
}
.shoppingCar .dl dt img{
    margin-left:1rem; 
    width: 2.6rem;
    height: 2.6rem;
    border: 1px solid #ccc;
}
.shoppingCar .dl dd{
    flex:1;
    margin-left:.2rem; 
}
.shoppingCar .dl dd p{
    width: 65%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap
}
.shoppingCar .dl dd span{
    display: block;
}
.shoppingCar .dl dd .price{
    color:red;
}
.shoppingCar .dl dd ul{
    display: flex;
    position: absolute;
    right: .2rem;
}
.shoppingCar .dl dd ul li{
    width: .6rem;
    height: .6rem;
    border: 1px solid #ccc;
    text-align: center;
    line-height: .6rem;   
}
</style>
