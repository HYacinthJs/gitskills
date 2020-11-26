// @ts-ignore
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import * as utils from "@/components/util/utils";
import store from './components/store/index'
import configSystem from "./components/store/configSystem"     //项目配置
import i18n from "./components/i18n"                     //引入国际化
import ElementUI from 'element-ui';                 //引入Element组件库
import 'element-ui/lib/theme-chalk/index.css';      //引入Element组件样式
import "../src/components/util/utils/directive"
// @ts-ignore
import locale from 'element-ui/lib/locale';

Vue.config.productionTip = true                     //阻止启动生产消息  false关闭

Vue.use(ElementUI);                                 //使用Element组件库
locale.i18n((key:any, value:any) => i18n.t(key, value))

//axios
import axios from 'axios';

let pending:any[] = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken    // 重复请求----关闭方法

//添加到正在请求列表
let addPending = (config:any,cancel:any) => {
  //console.log("请求:"+config.url + "&" + config.method + "&" + config.components + "&" + config.pageName)
//  console.log(config)
  let bool = true
  for (let p in pending) {
    //已有相同请求  终止当前请求
   /*  if (pending[p].u === config.url + "&" + config.method + "&" + config.components + "&" + config.pageName) {
       utils.myMessage({message: "正在请求"})
       bool = false
       console.log("终止重复请求:"+pending[p].u)
       cancel()
     }*/
  }
  if(bool){
    utils.openLoading({config})
    pending.push({ u: config.url + "&" + config.method + "&" + config.components + "&" + config.pageName, cancel: cancel })
  }
  return bool
}
//从正在请求列表中删除
let removePending = (config:any) => {
  for (let number in pending) {
    if (pending[number].u === config.url + "&" + config.method + "&" + config.components + "&" + config.pageName) { // 当当前请求在数组中存在时执行函数体
      pending.splice(parseInt(number), 1) // 把这条记录从数组中移除
      utils.closeLoading()
    }
  }
}
//各类post拦截器
let interception:{ [key: string]: any} ={
  "model1":{
    request:function(config:any){
      let bool = true
      config.cancelToken = new cancelToken((cancel) => {
        bool = addPending(config,cancel)
      })
      if(bool){
        // 在每个请求上加默认参数（用户信息）
        let params = new URLSearchParams(config.data)
        if(!params.has("token")){
          if(utils.isNotNull(utils.getloginUser())&&utils.isNotNull(utils.getloginUser().token)){
            params.append("token", utils.getloginUser().token)
          }else{
            params.append("token", "")
          }
        }
        let newParams = new URLSearchParams()
        //加密开始
        if(config.isEncryption){
          for(let pair of params.entries()) {
            newParams.append(pair[0],utils.AESEncrypt(pair[1]))
          }
          newParams.append("isEncryption","true")
        }else{
          newParams = params;
        }
        //加密结束

        config.data = newParams
      }
      return config
    },
    requestErr:function(err:any){
      // 关闭加载提示框
      utils.closeLoading()
      // 提示错误
      utils.myMessage({message: "网络异常！ 错误：201", level: "warning"})
      return Promise.reject(err)
    },
    response:function(response:any){
      // 删除正在请求列表的当前数据
      removePending(response.config)
      // 关闭加载提示框
      return response
    },
    responseErr:function(err:any){
      removePending(err.response.config)
      // 关闭加载提示框
      utils.closeLoading()
      // 提示错误
      utils.errMessage(err)
      return Promise.reject(err.response.data)   // 返回接口返回的错误信息
    },
  },
  "model2":{
    request:function(config:any){
      return config
    },
    requestErr:function(err:any){
      return Promise.reject(err)
    },
    response:function(response:any){
      return response
    },
    responseErr:function(err:any){
      return Promise.reject(err.response.data)   // 返回接口返回的错误信息
    },
  }
}


// http request 拦截器
axios.interceptors.request.use(
    (config) => {
      return interception[config['interception']].request(config)
    }, (err) => {
      return interception[err['interception']].requestErr(err)
    }
)

// http response 拦截器
axios.interceptors.response.use(
    (response) => {
      return interception[response.config['interception']].response(response)
    },
    (err) => {
      return interception[err.config['interception']].responseErr(err)
    })
// 路由跳转前拦截用于判断是否必须登录才能访问
configSystem.router.beforeEach((to, from, next) => {
  //失去登录信息
  if(utils.isNull(utils.getloginUser())){
    //尝试从session获取登录信息
    let user = sessionStorage.getItem("myLoginData")                                // 删除当前连接数据
    if(utils.isNotNull(user)){
      store.state.user = utils.JSONparse(user)
    }else{
      //尝试从cookie获取登录信息
      user = utils.getCookie("myLoginData")                                                  // 删除自动登陆数据
      if(utils.isNotNull(user)){
        store.state.user = utils.JSONparse(user)
      }
    }
  }
  // 判断页面是否是必须登陆才能访问
  if (to.meta.requiresAuth) {
    // 获取token
    let user = utils.getloginUser()
    let token = '';
    if(utils.isNotNull(user)){
      token = user.token
    }
    // 如果有token,直接访问页面
    if (utils.isNotNull(token)) {
      next()
    } else {
      // 没有token ，跳转到登陆页面
      utils.myMessage({message: "请登录", level: "warning"})
      next({path: utils.getLoginName()})
    }
  } else {
    // 页面无限制，直接访问页面
    next()
  }
})
new Vue({
  router: configSystem.router,
  store,
  i18n,                                             //国际化
  render: h => h(App)
}).$mount('#app')
