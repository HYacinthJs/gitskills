/**
 * 系统类工具
 * 沈家盛
 * 2020.01.19
 * v1.0.0
 **/
import store from "../../store"
import * as utils from "../utils";
/**
 * 获取框架配置store
 */
export function getRoot () {
    return store
}
/**
 * 获取当前项目配置state
 */
export function getStore () {
    return store.state
}
/**
 * 获取当前页面page
 */
export function getPage () {
    return store.state.page
}
/**
 * 获取StatisticsNumber
 */
export function getStatisticsNumber () {
    return store.state.statistics_number
}
/**
 * 获取当前页面路径/名称
 */
export function getPageName () {
    return store.state.page.name
}
/**
 * 获取当前socket
 */
export function getSocket () {
    return store.state.socket
}
/**
 * 获取当前图片等资源信息
 */
export function getAssects () {
    return store.state.assects
}
/**
 * 获取当前登录用户信息
 */
export function getloginUser () {
    return store.state.user
}
/**
 * 获取左侧栏目工具栏
 */
export function getTools () {
    return store.state.tools
}
/**
 * 获取登录页面路径
 */
export function getLoginName () {
    return store.state.loginName;
}
/**
 * 获取首页路径
 */
export function getHomeName () {
    return store.state.user.home;
}
/**
 * 获取栏目配置
 */
export function getMenuList () {
    return store.state.user.menuList
}

/**
 * 跳转页面
 * @param data
 */
export function goTo (data: { [key: string]: any}) {
    store.state.myVue.$router.push({path: data.path})
}

/**
 * 生成随机数
 * @param number
 */
export function randomChar (number:number) {
    let x = "0123456789qwertyuioplkjhgfdsazxcvbnm"
    let tmp = ""
    let timestamp = new Date().getTime()
    for (let i = 0; i < number; i++) {
        tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length)
    }
    return timestamp + tmp
}

/**
 * 获取当前浏览器模式
 */
export function getModel () {
    return "pc";
}

/**
 * 登录保存登录信息
 * @param data
 */
export function login (data:{user:any}) {
    let user = data.user
    if (utils.isNotNull(user)) {
        sessionStorage.setItem("myLoginData", JSON.stringify(user))
        if (data.user.isCookie) {
            utils.setCookie("myLoginData", JSON.stringify(user))
        } else {
            utils.delCookie("myLoginData")
        }
    }
    store.state.user = data.user
    goTo({path:getHomeName()})
}
/**
 * 更新栏目统计数
 */
export function updateStatisticsNumber () {

    utils.my_post({apiName:"/api/user/statistics_number",
        ok: (json:any, dataAll:any) => {
            store.state.statistics_number = json
        },
        err:(json:any, dataAll:any) => {
            store.state.statistics_number = {}
        }
    })

}

/**
 * 退出登录
 */
export function quit () {
    sessionStorage.removeItem("myLoginData")                                // 删除当前连接数据
    utils.delCookie("myLoginData")                                                  // 删除自动登陆数据
    store.state.user = {}
    store.state.socket={}
    goTo({path:getLoginName()})
}

/**
 * 获取图片路径
 * @param data
 */
export function getSystemImg (data:{name:string}) {
    if (utils.isNotNull(getAssects().img[data.name])) {
        return getAssects().img[data.name].src;
       // return "/assets/" + getAssects().img[data.name].project + "/img/" + getAssects().img[data.name].name
    }
}
/**
 * 获取面包屑数据
 * @param url
 */
export function getBreadcrumbList () {
    let page = utils.getPage()
    let name = "/" + page.name
    let list = []
    let menuList = utils.getMenuList()
    if(utils.isNotNull(menuList)){
        for (let i = 0; i < menuList.length; i++) {
            if (menuList[i].menu_linkurl === name) {
                list.push(menuList[i])
            }
            if (menuList[i].children && menuList[i].children.length) {
                for (let l = 0; l < menuList[i].children.length; l++) {
                    if ( menuList[i].children[l].menu_linkurl === name) {
                        list.push( menuList[i])
                        list.push( menuList[i].children[l])
                    }
                }
            }
        }
    }
    return list
}
/**
 * 初始化页面标题
 * @param url
 */
export function initPageTitle (user:any) {
    if(utils.isNotNull(user)){
        for (let key in utils.getStore().pageBase) {
            let menuList = user.menuList
            if(utils.isNotNull(menuList)){
                for (let i = 0; i < menuList.length; i++) {
                    if (menuList[i].menu_linkurl === ("/" +key)) {
                        utils.getStore().pageBase[key].pageTitle = menuList[i].menu_name
                    }
                    if (menuList[i].children && menuList[i].children.length) {
                        for (let l = 0; l < menuList[i].children.length; l++) {
                            if ( menuList[i].children[l].menu_linkurl === ("/" +key)) {
                                utils.getStore().pageBase[key].pageTitle = menuList[i].children[l].menu_name
                            }
                        }
                    }
                }
            }
        }
    }
}
/**
 * 未完成
 * @param url
 */
export function formatPageName (url:string) {
   return "/assets/"
}