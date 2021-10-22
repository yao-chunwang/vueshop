import Vue from 'vue'
import Vuex from 'vuex'
//安装vuex到vue身上
Vue.use(Vuex)
    //一开始，本地存储可能已经有购物车数据
const carData = JSON.parse(localStorage.getItem('carData') || '[]')

const store = new Vuex.Store({
    //state用来提供数据
    state: {
        carData: carData
    },
    mutations: {
        add(state, goods) {
            var hasgoods = false
            state.carData.forEach(function(item) {
                if (item.id === goods.id) {
                    hasgoods = true
                    item.number += parseInt(goods.number)
                }
            })
            if (hasgoods === false) {
                state.carData.push(goods)
            }
            localStorage.setItem('carData', JSON.stringify(state.carData))
        }
    },
    //getters查数据
    // {id:商品id,number:商品数量，price:商品价格，selecte:是否选中}
    getters: {
        //获取商品购物出数量
        getCarNumber(state) {
            var totalnumber = 0;
            state.carData.forEach(function(item) {
                totalnumber += item.number
            })
            return totalnumber
        }
    }
})
export default store;
