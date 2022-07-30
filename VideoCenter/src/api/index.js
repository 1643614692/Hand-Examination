import axios from 'axios'
import {message} from 'antd'

const api = axios.create({
    baseURL:'https://www.fastmock.site/mock/93025dcab32e69d13b74fd7cec831841/videocenter'
})

const loading = () => {
    return message.loading({
        content: '加载中',
        className: 'custom-class',
        duration: 0,
        style: {
            marginTop: '40vh',
        },
    });
};
let close = () => {
    return false
}

// 请求拦截
api.interceptors.request.use(
    config => {

        // 配置业务逻辑 当用户有token时 发送请求在请求头自动携带token
        // const token = window.sessionStorage.token
        // if(token) config.headers.authorzation = token
        close = loading()
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 响应拦截
api.interceptors.response.use(response => {
    const {data} = response
    close()
    return data
})


export default api
