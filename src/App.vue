<template>
  <div class="app_container">
  <!-- 头部导航 -->
<div class="top_head">
  <van-nav-bar
  fixed
  title="爱购商城"
  :left-text="backTack"
  :left-arrow='isBack'
  @click-left='goback'
/>
      </div>
      <!-- 中间部分 -->
      <router-view></router-view>
      <!-- 底部导航 -->
      <div class="bottom">
          <van-tabbar v-model="active" route>
          <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
          <van-tabbar-item icon="cart-o" :badge="this.$store.getters.getCarNumber" to='/shopcart'>购物车</van-tabbar-item>
          <van-tabbar-item icon="friends-o" to='/person'>个人中心</van-tabbar-item>
     </van-tabbar>
      </div>
  </div>
</template>

<script>
export default {
   data () {
     return {
       active:0,
       backTack:'',
       isBack:false
     }
   },
   methods: {
     goback(){
       //返回上一页
       this.$router.go(-1)
     }
   },
   watch: {
     $route:function(newPath,oldPath){
        if(newPath.path=='/home'){
           this.backTack=""
           this.isBack=false
        }else{
           this.backTack="返回"
           this.isBack=true
        }
     }
   }
}
</script>

<style>
.app_container{
  margin-bottom: 50px;
  margin-top: 46px;
}
.van-nav-bar {
  background-color: rgb(113, 113, 250);
}
 .van-nav-bar__title{
  font-size: 18px;
  font-weight: 600px;
  color: white;
}
.van-nav-bar .van-icon {
 color: white;
}
.van-nav-bar__left .van-nav-bar__text{
  color: white;
}
</style>
