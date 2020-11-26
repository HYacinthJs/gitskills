// @ts-ignore
import io from "socket.io-client"
import * as utils from "../utils"

/**
 * socket 连接
 */
export function connect () {
  console.log("-----connect")
  let user_id = utils.getloginUser().user_id
  let token = utils.getloginUser().token
  // 已经连接
  if (utils.isNotNull(utils.getSocket())) {
    return
  }

  // 未登录
  if (!utils.isNotNull(user_id)) {
    return
  }

  let socket = io.connect('127.0.0.1:8888' + "?id=" + user_id + "&token=" + token)
  /*socket.on("info", (obj:any) => {
    info(obj)
  })
  socket.on("chat", (obj:any) => {
    sendMsgByS(obj)
  })*/
  socket.on("disconnect", (obj:any) => {
    utils.log("socket已断开")
  })
  utils.getStore().socket = socket
}
/*
function info (obj:any) {
  let obj2 = JSON.parse(decodeURIComponent(obj))
  if(utils.isNotNull(utils[obj2.name])){
    utils[obj2.name](obj2)
  }
}


export function sendMsgByS (message:any) {
  utils.getSocket().chatRecord.push(message)
}
export function ws_autoExit(obj:any) {
  utils.goTo({menu: {menu_linkurl: "signOut"}})
  utils.myMessage(obj.data)
}
export function ws_custom(obj:any) {
  store.state.pageBase.page.fixed_custom=JSON.parse(decodeURIComponent(obj.data.content))
  utils.goTo({menu: {menu_linkurl: "fixed_custom"}})
}
export function ws_test(obj:any) {
  let max_no = 1;
  obj.data.order.json.create_time_str = obj.data.order.json.create_time_str.replace("+"," ")
  let assembly= utils.getComponents2_1({view: "assembly",type:'from',name:"query"})

  //所有css 设置为first2
  for(let i=0;i<assembly.components.length;i++){
    assembly.components[i].className = 'first2'
  }

  if(utils.isNotNull(assembly.components[assembly.components.length-1].value)){
    max_no = assembly.components[0].no+1
    let newcomponents = utils.copyComponents(assembly.components[assembly.components.length-1])
    assembly.components.unshift(newcomponents)
    newcomponents.public_setValue(obj.data.order.json)
    newcomponents.className = 'first'
    newcomponents.no = max_no
  }else{
    assembly.components[assembly.components.length-1].public_setValue(obj.data.order.json)
    assembly.components[assembly.components.length-1].className = 'first'
    assembly.components[assembly.components.length-1].no = max_no
  }

  //超过8个删除第8个
  if(assembly.components.length>8){
    let assembly= utils.getComponents2_1({view: "assembly",type:'from'})
    assembly.components.splice(8)
  }
}
export function ws_test2(obj:any) {
  let assembly= utils.getComponents2_1({view: "components",type:'hndcInfo2'})
  assembly.public_setValue(obj.data.total)
}
export function ws_execl(obj:any) {
  utils.progressBar({okList:obj.data.okList,errList:obj.data.errList})
}
export function ws_execl_check(obj:any) {
  utils.progressBarCheck({okList:obj.data.okList,errList:obj.data.errList})
}
export function ws_testOld(obj:any) {
  obj.data.order.json.create_time_str = obj.data.order.json.create_time_str.replace("+"," ")
  let assembly= utils.getComponents2_1({view: "assembly",type:'from'})

  //所有css 设置为first2
  for(let i=0;i<assembly.components.length;i++){
    assembly.components[i].className = 'first2'
  }

  if(utils.isNotNull(assembly.components[assembly.components.length-1].value)){
    let newcomponents = utils.copyComponents(assembly.components[assembly.components.length-1])
    assembly.components.unshift(newcomponents)
    newcomponents.public_setValue(obj.data.order.json)
    newcomponents.className = 'first'
  }else{
    assembly.components[assembly.components.length-1].public_setValue(obj.data.order.json)
    assembly.components[assembly.components.length-1].className = 'first'
  }

  //超过8个删除第8个
  if(assembly.components.length>8){
    let assembly= utils.getComponents2_1({view: "assembly",type:'from'})
    assembly.components.splice(8)
  }
  for(let i=0;i<assembly.components.length;i++){
    assembly.components[i].no = i+1
  }
}
export function ws_message(obj:any) {
  utils.myMessage(obj.data)
}
export function ws_goto(obj:any) {
  utils.setSystemParameter({pageNameSpace:obj.data.goto,names: [ "goto"], value:obj.data.data});
  utils.goTo({menu: {menu_linkurl: obj.data.goto}})
}
export function ws_assembly(obj:any) {
  utils.myMessage({message: "ws_assembly"})
}
*/
