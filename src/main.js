// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
//时间
import moment from 'moment'

//图片懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Lazyload, {
    lazyComponent: true,
});

Vue.use(Vant);

Vue.config.productionTip = false
    //定义全局时间转化过滤器
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD') {
        return moment(dataStr).format(pattern)
    })
    /* eslint-disable no-new */

//引入store数据管理
import store from './store/carStore';


new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
