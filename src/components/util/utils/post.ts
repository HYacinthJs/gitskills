/* eslint-disable no-undef */
/* eslint-disable handle-callback-err */
// ajax请求
import { Loading } from "element-ui"
import * as utils from "../utils";
import axios from 'axios';
import {myMessage} from "@/components/util/utils/util";

/**
 * ajax请求
 * @param obj
 */
export function my_post (obj:{ [key: string]: any}) {

  let ok = obj.ok?obj.ok:(json:any, dataAll:any) => {}                    //当返回值正常时，执行
  let err = obj.err?obj.err:(json:any, dataAll:any) => {}                     //当返回值不正常时，执行
  let loading = obj.loading?obj.loading:true                             //有没有加载时动画
  let loadingText = obj.loadingText?obj.loadingText:""                  //加载时描述
  let interception = obj.interception?obj.interception:"model1"               //启用的拦截器
  let isEncryption = obj.isEncryption?obj.isEncryption:false            //是否加密
  let parameter_domain = obj.parameter_domain?obj.parameter_domain:""     //参数域
  let params = obj.params?obj.params:{}                                   //参数
  let url = utils.getPage().getUrl({name:obj.apiName})      //获取url

  if(""==url){
    utils.log({
      "异常描述":"api未配置："+obj.apiName,
      "异常方法":"my_post",
    })
    return ;
  }
  //封装不同的作用域
  if(parameter_domain=="URLSearchParams"){                                //---------FormData作用域
    let urlSearchParams = new URLSearchParams()
    if(utils.isNotNull(params)){
      for(let key in params){
        urlSearchParams.append(key, params[key])
      }
    }
    params = urlSearchParams
  }

  //进行请求
  // @ts-ignore
  axios.post(url, params,
      {
        timeout: 120000,                     // 设置请求超时时间30s
        // @ts-ignore
        loadingText:loadingText,
        loading:loading,
        isEncryption:isEncryption,
        interception:interception,
      }
  ).then((res:any) => {
    utils.myMessage(res.data)
    ajaxState(res, ok, err)
  })["catch"]((err:any) => {
    let obj = {
      "异常描述":err,
      "异常方法":"my_post",
    }
    utils.myMessage({message:"请求异常"})
    utils.logErr('post异常')
    utils.log(obj)
  })
}
/**
 * ajax下载
 * @param apiObj
 * @param params
 * @param ok
 * @param err
 */
export function myPostFile (obj:{ [key: string]: any}) {
  let params = obj.params?obj.params:{}                                   //参数
  let url = utils.getPage().getUrl({name:obj.apiName})      //获取url
  let loadingText = obj.loadingText?obj.loadingText:""                  //加载时描述
  let interception = obj.interception?obj.interception:"model1"               //启用的拦截器
  let isEncryption = obj.isEncryption?obj.isEncryption:false            //是否加密
  let loading = obj.loading?obj.loading:true                             //有没有加载时动画
  axios.post(url, params,
      {
        timeout: 120000,                     // 设置请求超时时间30s
        // @ts-ignore
        loadingText:loadingText,
        loading:loading,
        isEncryption:isEncryption,
        interception:interception,
      }
  ).then((res:any) => {
    myDownload({fileName: res.data.json.fileName, apiName_download: res.data.json.url})
  })["catch"]((err:any) => {
    let obj = {
      "异常描述":err,
      "异常方法":"my_post",
    }
    utils.myMessage({message:"请求异常"})
    utils.logErr('post异常')
    utils.log(obj)
  })
}

export function myPostFileOnly (obj:{ [key: string]: any}) {
  let params = obj.params?obj.params:{}                                   //参数
  let url = utils.getPage().getUrl({name:obj.apiName})      //获取url
  let loadingText = obj.loadingText?obj.loadingText:""                  //加载时描述
  let interception = obj.interception?obj.interception:"model1"               //启用的拦截器
  let isEncryption = obj.isEncryption?obj.isEncryption:false            //是否加密
  let loading = obj.loading?obj.loading:true                             //有没有加载时动画
  axios.post(url, params,
      {
        timeout: 120000,                     // 设置请求超时时间30s
        // @ts-ignore
        loadingText:loadingText,
        loading:loading,
        isEncryption:isEncryption,
        interception:interception,
      }
  ).then((res:any) => {
    window.open( res.data.json.url, res.data.json.fileName, "", true)
  })["catch"]((err:any) => {
    let obj = {
      "异常描述":err,
      "异常方法":"my_post",
    }
    utils.myMessage({message:"请求异常"})
    utils.logErr('post异常')
    utils.log(obj)
  })
}
/**
 * 验证ajax 是否成功
 * @param res
 * @param ok
 * @param err
 */
function ajaxState (res:any, ok:any, err:any) {
  if(utils.isNotNull(res.data.state)){
    let json = res.data.json;
    if (res.data.isEncryption) {
      let list = [];
      json = utils.AESDecrypt(json)
      json = JSON.parse(json)
      for(let i=0;i<json.list.length;i++){
        list.push(json.list[i].columns)
      }
      json.list =list
    }
    if (res.data.state === 100) {
      ok(json, res.data)
    } else {
      if(res.data.message=='token异常'){
        utils.quit()
      }else{
        err(json, res.data)
      }
    }
  }else{
    if (res.data) {
      ok(res.data.Response, res.data)
    } else {
      err(res.data.Response, res.data)
    }
  }

}
/**
 * 下载
 * @param obj
 */
export function myDownload (obj:any) {
  let fileName = obj.fileName
  let param = obj.param
  let url = utils.getPage().getUrl({name:obj.apiName_download})
  if(utils.isNotNull(param)){
    url=url+"?aaaaaaaa=4"
    for(let key in param){
      url=url+"&"+key+"="+param[key]
    }
  }
  console.log("url----"+url)
  if ("download" in document.createElement("a")) { // 非IE下载
    const elink = document.createElement("a")
    elink.download = fileName
    elink.style.display = "none"
    elink.href = url
    document.body.appendChild(elink)
    elink.click()
    URL.revokeObjectURL(elink.href) // 释放URL 对象
    document.body.removeChild(elink)
  } else {
    window.open( url, fileName, "", true)
  }
}
export function myOpen (obj:any) {
  let fileName = obj.fileName
  let param = obj.param
  let url = utils.getPage().getUrl({name:obj.apiName_download})
  if(utils.isNotNull(param)){
    url=url+"?aaaaaaaa=4"
    for(let key in param){
      url=url+"&"+key+"="+param[key]
    }
  }
    window.open( url, fileName, "", true)
}

/**
 * 打开加载提示
 * @param obj
 */
export function openLoading (obj:any) {
// 启用加载提示
  let config = obj.config
  if (config.loading) {
    utils.getStore().loadingInstance = Loading.service({ fullscreen: true, background: "rgba(0, 0, 0, 0.7)", text: config.loadingText})
  }
}
/**
 * 关闭加载提示
 */
export function closeLoading () {
  if(utils.isNotNull(utils.getStore().loadingInstance)&&utils.isNotNull(utils.getStore().loadingInstance.close)){
    utils.getStore().loadingInstance.close()
  }
}