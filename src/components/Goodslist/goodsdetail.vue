<template>
<div class="goodsdetail_container">
<!-- 轮播图 -->
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
  <van-swipe-item v-for="item in lunboData" :key="item.src">
    <img :src='item.src'>
  </van-swipe-item>
</van-swipe>
<!-- 商品详情信息 -->
<div class="goodsinfo">
  <div class="goodsname">{{goodsInfo.title}}</div>
  <div class="price">
    <span>市场价:￥<span class="mark">{{goodsInfo.market_price}}</span></span>
    <span class="nowprice">本店价:<span class="nowprice_1">￥{{goodsInfo.sell_price}}</span></span>
  </div>
  <div class="goddsnumber">
    <span>购买数量:</span>
    <van-stepper v-model="value" />
  </div>
  <div class="btn-group">
    <van-button type="info">立即购买</van-button>
    <van-button type="danger" @click="addGoodsToCar">加入购物车</van-button>
  </div>
</div>
<div class="otherinfo">
  <div class="title">
      <h3>其他信息</h3>
  </div>
<div class="goods">
 <span>商品货号:{{goodsInfo.goods_no}}</span>
 <span>库存情况:{{goodsInfo.stock_quantity}}件</span>
 <span>上架时间:{{goodsInfo.add_time}}</span>
</div>
</div>
</div>
</template>

<script>
import { getGoodsthumb,getGoodsInfo } from '@/api/index'
export default {
   data(){
     return{
       id:this.$route.params.id,
       value:1,
       lunboData:[],
       goodsInfo:{}
     }
   },
   methods:{
     getlunBo(){
       getGoodsthumb(this.id).then(res=>{
         if(res.status===0){
           this.lunboData=res.message
         }
       })
     },
     //获取商品信息
     getgoodsinfo1(){
       getGoodsInfo(this.id).then(res=>{
         if(res.status===0){
           this.goodsInfo=res.message[0]
         }
       })
     },
     //加入商品到购物车
     addGoodsToCar(){
       //构造一个商品，用于存储
       var goods={
         id:this.id,//商品id
         number:this.value,//商品数量
         price:this.goodsInfo.sell_price,//商品价格
         selected:true//加入购物车，默认选中状态
       }
       this.$store.commit('add',goods)
     }
   },
   created(){
     this.getlunBo()
     this.getgoodsinfo1()
   }
}
</script>
<style scoped>
.goodsdetail_container{
  background-color: #eee;
  padding:5px 8px;
}
.van-swipe{
  width: 100%;
  height: 240px;
  border-radius: 10px;
  text-align: center;
  background-color: white;
}
.goodsinfo{
  background-color: white;
  padding:5px 8px;
  margin-top: 10px;
  border-radius: 10px;
}
.goodsname{
    font-size: 20px;
    border-bottom: 1px solid black;
    font-weight: bold;
    margin: 10px 0px;
    margin-bottom: 10px;
}
.goddsnumber{
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
}
.van-stepper{
  margin-left: 10px;
}

.btn-group{
  display: flex;
  justify-content: space-between;
}
.van-button{
  width: 180px;
}
.mark{
  text-decoration: line-through;
}
.nowprice{
  margin-left: 40px;
}
.nowprice_1{
  color: red;
  font-weight: bold;
}
.otherinfo{
  background-color: white;
  padding:5px 8px;
  margin-top: 10px;
  border-radius: 10px;


}
.title{
  border-bottom: 1px solid #88888888;
  margin: 15px 0px;
}
.goods{
  display: flex;
  /* 竖着排列 */
  flex-direction: column;
  justify-content: space-between;
}
.goods span{
margin: 2px 0px;
}
img{
  height: 240px;
}
</style>>


