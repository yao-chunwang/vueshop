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
    //对商品增删改
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
        },
        //删除购物车商品
        del(state, id) {
            state.carData.forEach(function(item, index) {
                    //找到指定id进行删除
                    if (item.id == id) {
                        state.carData.splice(index, 1)
                    }
                })
                //同步到本地存储
            localStorage.setItem('carData', JSON.stringify(state.carData))
        },
        //修改商品状态
        updataselect(state, goods) {
            state.carData.forEach(function(item, index) {
                    if (item.id == goods.id) {
                        item.selected = goods.selected
                    }
                })
                //同步到本地存储
            localStorage.setItem('carData', JSON.stringify(state.carData))
        },
        //修改商品步进器
        updatanumber(state, goods) {
            state.carData.forEach(function(item, index) {
                    if (item.id == goods.id) {
                        item.number = goods.number
                    }
                })
                //同步到本地存储
            localStorage.setItem('carData', JSON.stringify(state.carData))
        },
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
        },
        //获取购物车商品中的id
        getcarid(state) {
            var ids = [] //为了存储商品id
            state.carData.forEach(function(item, index) {
                ids.push(item.id)
            })
            return ids.toString()
        },
        //获取购物车中选中商品的总数量和总价格
        gettota(state) {
            // var obj = { number: 39, price: 30000 }
            // return obj;
            // state.carData.forEach(item, index) {
            //     if (item.selected == true) {
            //         obj.number += item.number
            //         obj.price += item.number * item.price
            //     }
            // }
            var obj = { number: 0, price: 0 }
            state.carData.forEach(function(item, index) {
                if (item.selected === true) {
                    obj.number += item.number
                    obj.price += item.number * item.price
                }
            })
            return obj
        },
        //获取指定商品的数量
        getgoodsnumber(state) {
            var obj = {}
            state.carData.forEach(function(item, index) {
                obj[item.id] = item.number
            })
            return obj
        },
        // 获取商品的选中状态
        getgoodsselect(state) {
            var obj = {}
            state.carData.forEach(function(item, index) {
                obj[item.id] = item.selected
            })
            return obj
        },
    },

})
export default store;
