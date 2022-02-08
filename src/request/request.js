// 封装request/axios请求
import axios from 'axios'



// 创建单例
const instance = axios.create({
    baseURL: 'http://49.232.2.177:8081',
    timeout: 10000
});


// 响应拦截
instance.interceptors.response.use(res=>{
    return res.data; //直接将数据返回
}, err=>{
    return Promise.reject(err)
});

/**
 * @author 孟祥龙
 * @Desc TODO 诗词相关请求
 * @date 2021/5/6 16:52
 * @return
 */
// 获取名句
export default  GetSentences = (params) => instance.get("/home/getSentenceRandom",{params});