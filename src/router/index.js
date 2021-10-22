import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/components/Home/home.vue'
import Shopcat from '@/components/Shopcat/shopcat.vue'
import Preson from '@/components/Preson/preson.vue'
import Newlist from '@/components/Newlist/newlist.vue'
import Newsdetails from '@/components/Newlist/newsdetails.vue'
import Goodslist from '@/components/Goodslist/goodslist.vue'
import Goodsdetail from '@/components/Goodslist/goodsdetail.vue'

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/shopcart',
            component: Shopcat,
        },
        {
            path: '/person',
            component: Preson,
        },
        {
            path: '/newlist',
            component: Newlist,
        },
        {
            path: '/newsdetails/:id',
            component: Newsdetails,
        },
        {
            path: '/goodslist',
            component: Goodslist,
        },
        {
            path: '/goodsdetail/:id',
            component: Goodsdetail,
        },
    ]
})