import axios from 'axios'
//导出接口数据
axios.defaults.baseURL = 'http://127.0.0.1:3000/api'
export const getlunbo = async function() {
    var res = await axios.get('/getlunbo')
    return res.data
}
export const getnewslist = async function() {
    var res = await axios.get('/getnewslist')
    return res.data
}
export const getnewsdetail = async function(id) {
    var res = await axios.get('getnew/' + id)
    return res.data
}

// 获取评论
export const getNewscomments = async function(id, pageindex) {
    var res = await axios.get('getcomments/' + id + '?pageindex=' + pageindex)
    return res.data
}

//发表评论
export const sendcomment = async function(id, content) {
        //对post表单的数据进行编码，模拟post表单来传递数据
        var parms = new URLSearchParams()
            //追加参数
        parms.append('content', content)
        var res = await axios.post('postcomment/' + id, parms)
        return res.data
    }
    //获取商品
export const getgoodslist = async function(pageindex) {
    var res = await axios.get('/getgoods?pageindex=' + pageindex)
    return res.data
}

//获取商品详情轮播
export const getGoodsthumb = async function(id) {
        var res = await axios.get('/getthumbimages/' + id)
        return res.data
    }
    // 获取商品参数区和价格，标题等数据
export const getGoodsInfo = async function(id) {
        var res = await axios.get('/getgoodsinfo/' + id)
        return res.data
    }
    //获取购物车数据
export const getcargoods = async function(ids) {
    var res = await axios.get('getshopcarlist/' + ids)
    return res.data
}
