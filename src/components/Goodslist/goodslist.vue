<template>
  <div class="goodslist_container">
   <router-link tag="div" class="item" v-for="item in goodslist" :key="item.id" :to="'/goodsdetail/'+ item.id">
     <!-- 图片懒加载 -->
     <img v-lazy="item.img_url">
     <h3 class="goodsname">{{item.title}}</h3>
     <div class="goodsInfo">
       <div class="price">
         <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
       </div>
       <div class="hot">
         <span>热卖中</span>
         <span>剩余{{item.stock_quantity}}件</span>
       </div>
     </div>
   </router-link>
   <van-button type="danger"  size="large" color="red"  @click="loadmore">加载更多</van-button>
  </div>
</template>

<script>
import { getgoodslist } from '@/api/index';
export default {
   data(){
     return{
       goodslist:[],
       pageindex:1,
       hasGoods:true
     }
   },
   methods:{
     getGoodsList(){
       //判断数据是否加载完毕
       if(this.hasGoods===false){
         this.$toast('没有更多数据了')
         return
       }
       //获取商品列表数据
       getgoodslist(this.pageindex).then(res=>{
         if(res.message.length===0){
           this.hasGoods=false
           this.$toast('数据加载完毕')
           return
         }
         if(res.status===0){
           //把原来的goodlist在连接返回
           console.log(this.pageindex)
           this.goodslist=this.goodslist.concat(res.message)
           this.$toast('加载成功')
         }
       })

     },
     //加载更多
     loadmore(){
      ++ this.pageindex;
       this.getGoodsList();
     }
   },
   created(){
     this.getGoodsList()
   }
}
</script>

<style scoped>
.goodslist_container{
  display: flex;
  flex-wrap: wrap;
  background-color: #f0f0f0;

}
.item{
  width: 47%;
  padding: 5px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 3px 6px;
  border-radius: 12px;
  box-shadow: 6px 5px 13px #c1c1c1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 352px;
}
.goodsname{
  font-size: 17px;
  color: #232326;

}
.price .now{
  color: red;
  font-weight: bold;
  margin-right: 20px;
}
.old{
  text-decoration: line-through;
  font-size: 16px;
}
.hot{
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin-top: 10px;
  color: #565652;

}
  img{
    width: 100%;
    height: 189px;
  }
</style>>

</style>
