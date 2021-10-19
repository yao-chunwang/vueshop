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