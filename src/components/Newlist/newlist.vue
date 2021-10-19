<template>
  <div class="newlist_container">
    <van-loading size="24px" v-show='flag' vertical>加载中...</van-loading>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="newlist" v-for="item in newslist" :key="item.id">
      <router-link tag="div" class="newitem" :to="'/newsdetails/'+item.id">
        <div class="img_container">
          <img :src="item.img_url">
        </div>
        <div class="info">
          <h3>{{item.title}}</h3>
          <div class="time_click">
            <div>发布时间:{{item.add_time | dateFormat}}</div>
            <div class="click">点击次数：{{item.click}}次</div>
          </div>
        </div>
    </router-link>
    </div>
</van-pull-refresh>
  </div>
</template>

<script>
//引入接口
import{getnewslist} from '@/api/index'
export default {
  data(){
    return{
      newslist:[],
      isLoading:true,
      flag:true,
      hasPull:false
    }
  },
  methods:{
    //请求新闻列表数据
    getnewslist(){
      getnewslist().then(res=>{
        if(res.status===0){
          //隐藏loging显示
          this.flag=false
          this.isLoading = false;
          this.newslist=res.message
        }
      })
    },
    //下拉刷新事件
    onRefresh(){
      //下拉重新获取数据
      getnewslist().then(res=>{
        if(res.status===0){
          //隐藏loging显示
          this.flag=false;
          this.isLoading = false;
          this.newslist=res.message;
          this.$toast('刷新成功')
        }
      })
  this.getnewslist()
    }
  },
 created(){
   //加载新闻资讯数据
   this.getnewslist()
 }
}
</script>

<style scoped>
.newlist_container {
  padding: 8px;
  background-color: #eee;
  margin-bottom: 50px;
}
.newlist_container .newlist .newitem{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #d1cece;
}

.newlist_container .newlist .newitem .info div{
 font-size: 12px;
}
.newlist_container .newlist .newitem .info h3{
 font-size: 17px;
}
.newlist_container .newlist .newitem .info .time_click{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-right: 45px;
  color: #888;
  margin-bottom: 20px;
   width: 100%;
}

.img_container{
  width: 100px;
  height: 100px;
  margin-right: 5px;
}
 img{
   width: 100px;
   height: 90px;
 }
</style>
