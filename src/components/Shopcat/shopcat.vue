<template>
  <div class="car_container">
   <div class="item" v-for="(item,index) in goodslist " :key='item.id'>
     <!-- 切换按钮 -->
       <van-switch v-model="$store.getters.getgoodsselect[item.id]"  @input="onInput(item.id,$store.getters.getgoodsselect[item.id])"/>
     <!-- 图片 -->
     <div class="thumb">
        <img :src="item.thumb_path">
     </div>
     <!-- 商品的信息 -->
     <div class="goodsinfo">
        <div class="title">
          {{item.title}}
        </div>
        <div class="otherinfo">
           <span class="price">￥{{item.sell_price}}</span>
           <van-stepper v-model="$store.getters.getgoodsnumber[item.id]"  class="vant"  @change="onChange(item.id)"/>
           <van-button type="danger" @click="delcargoods(item.id,index)">删除</van-button>
        </div>
     </div>
   </div>
   <div class="total">
     <div class="bottom_button">
       <div>总计(不含运费)</div>
       <div>已勾选商品<span class="price">{{$store.getters.gettota['number']}}</span>件,总价<span class="price">￥{{$store.getters.gettota['price']}}</span>元</div>
     </div>
     <van-button type="danger">结算</van-button>
   </div>
  </div>
</template>

<script>
import {getcargoods} from '@/api/index'
export default {
  data(){
    return{
       checked: true,
       goodslist:[],
    }
  },
  methods: {
    getcargoods(){
      //获取购物车中的id
      var ids=this.$store.getters.getcarid
      // var ids='88,91'
      getcargoods(ids).then(res=>{
        if(res.status===0){
          this.goodslist=res.message
        }
      })
    },
    //删除购物车中的商品
    delcargoods(id,index){
      //删除本身数据
      this.goodslist.splice(index,1)
      //删除本地存储
      this.$store.commit('del',id)
    },
    onInput(id,selected){
      // selected用来绑定当前切换的选中状态
      this.$store.commit('updataselect', {id,selected})
    },
    // 用来控制购物车商品的购买数量
    onChange(id,number){
      this.$store.commit('updatanumber',{id,number})
      console.log(id,number)

    }
  },

  created(){
    //获取购物车的商品信息
    this.getcargoods()
  }

}
</script>

<style scoped>
.car_container{
  background-color: #eee;
  padding: 1px;
}
.item{
  display: flex;
  background-color: #fff;
  padding: 4px;
  margin: 5px;
  justify-content: space-between;
  /* 水平居中 */
  /* justify-content: center; */
  /* 垂直居中 */
  align-items: center;
  margin-bottom: 10px;
}
.car_container .item .thumb img{
     width: 50px;
   }
.otherinfo{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price{
  color: red;
  font-weight: bold;
}
.title{
  margin-bottom: 5px;
  padding:1px
}
.total{
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 4px;
  margin: 5px;
  align-items: center;
}
.bottom_button div{
  margin-bottom: 8px;
}
.vant{
  padding: 0px 13px;
}
</style>
