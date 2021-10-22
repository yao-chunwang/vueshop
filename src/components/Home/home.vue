<template>
  <div class="home_container">
    <!-- 轮播图 -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for='item in lunBoData ' :key='item.img'>
    <img :src='item.img'>
  </van-swipe-item>
  </van-swipe>
  <!-- 九宫格 -->
<van-grid :border="false" :column-num="3">
    <router-link class="img-test" tag="div" to="/newlist">
      <img src="../../assets/img/menu1.png" >
      <div>新闻资讯</div>
    </router-link>
     <div class="img-test">
      <img src="../../assets/img/menu2.png">
      <div>图文分享</div>
    </div>
     <router-link class="img-test" tag="div" to="/goodslist">
      <img src="../../assets/img/menu3.png">
      <div>商品购买</div>
     </router-link>
     <div class="img-test">
      <img src="../../assets/img/menu4.png">
      <div>留言反馈</div>
    </div>
     <div class="img-test">
      <img src="../../assets/img/menu5.png">
      <div>视频专区</div>
    </div>
     <div class="img-test">
      <img src="../../assets/img/menu6.png">
      <div>话费充值</div>
    </div>
     <div class="img-test">
      <img src="../../assets/img/menu7.png">
      <div>联系我们</div>
    </div>
     <div class="img-test">
      <img src="../../assets/img/menu8.png">
      <div>清仓特卖</div>
    </div>
     <div class="img-test">
      <img src="../../assets/img/menu9.png">
      <div>一元福利</div>
    </div>
</van-grid>
</div>

</template>

<script>
//导入请求接口的函数
import {getlunbo} from '@/api/index'
export default {
     data () {
       return {
         lunBoData:[]
       }
     },
     methods: {
       getlun(){
         getlunbo().then(res=>{
          if(res.status==0){
            this.lunBoData=res.message
          }
         })
       }
     },
     created () {
       //自调用。获取轮播图数据
       this.getlun()
     }
}
</script>

<style  scoped>
.home_container{
   width: 100%;
   height: 100%;
}
.my-swipe img{
  width: 100%;
  height: 200px;
}
.img-test{
  text-align: center;
  padding: 5% 2%;
}
.img-test img{
  width: 50%;
}
div{
  font-size: 16px;
}
</style>
