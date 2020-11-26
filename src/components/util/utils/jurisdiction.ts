// 判断是否隐藏
import * as utils from "@/components/util/utils";

/**
 * 权限判断--是否不满足条件
 * @param obj
 */
export function isNotJurisdiction (obj:{ [key: string]: any}) {
    return !isJurisdiction(obj)
}
/**
 * 权限判断--是否满足条件
 * @param obj
 */
export function isJurisdiction (obj:{ [key: string]: any}) {
    if(utils.isNotNull(obj.process)){
        let user = utils.getloginUser()
        let json = user.flowList[obj.process.flow][obj.process.process]
        if(utils.isNotNull(json)&&json.length>2){
            obj.jurisdictionList = JSON.parse(user.flowList[obj.process.flow][obj.process.process])
        }
    }
    return isShowList(obj)
}
/**
 * 权限判断--只要满足有一个条件
 * @param obj
 */
function isShowList (obj:{ [key: string]: any}) {
    let data = obj.data
    let jurisdictionList = obj.jurisdictionList
    if (utils.isNull(jurisdictionList)) {
        return true
    }
    for (let i = 0; i < jurisdictionList.length; i++) {
        // 判断如果有一个条件满足，说明有权限
        if (isShowMap({data, jurisdictionList: jurisdictionList[i]})) {
            return true
        }
    }
    return false
}
/**
 * 权限判断--满足有所有条件，才有权限
 * @param obj
 */
function isShowMap (obj:{ [key: string]: any}) {
    let data = obj.data
    let jurisdictionList = obj.jurisdictionList
    for (let key in jurisdictionList) {

        // 从components 控件判断是否满足条件
        if (key === "row") {                     // table 行
            if (!isShowRow({data, jurisdictionList: jurisdictionList[key]})) {
                return false
            }
        }
        if (key === "user") {                    // 当前用户的
            if (!isShowUser({data, jurisdictionList: jurisdictionList[key]})) {
                return false
            }
        }
        if (key === "not_user") {                    // 当前用户的
            if (isShowUser({data, jurisdictionList: jurisdictionList[key]})) {
                return false
            }
        }
        if (key === "jurisdiction") {                    // 当前用户的权限
            if (!isShowJurisdiction({data, jurisdictionList: jurisdictionList[key]})) {
                return false
            }
        }
        if (key === "not_jurisdiction") {                    // 当前用户的权限
            if (isShowJurisdiction({data, jurisdictionList: jurisdictionList[key]})) {
                return false
            }
        }
        if (key === "system_id") {                    // 某个组件
            if (!isShowSystemId({data, jurisdictionList: jurisdictionList[key]})) {
                return false
            }
        }
        if (key === "system_id_literal") {                    // 当前用户的
            if (!isShowSystemIdLiteral({data, jurisdictionList: jurisdictionList[key]})) {
                return false
            }
        }
        // 判断如果是Array，说明是有多级权限
        if (jurisdictionList[key] instanceof Array) {
            if (!isShowList({data, jurisdictionList: jurisdictionList[key]})) {
                return false
            }
        }
    }
    return true
}

/**
 * 权限判断--当前登录用户登录信息是否满足条件
 * @param obj
 */
function isShowUser (obj:{ [key: string]: any}) {
    let user = utils.getloginUser()
    let bool = false
    let jurisdictionList = obj.jurisdictionList
    if (jurisdictionList.length < 1) {
        bool = true
    } else {
        for (let i = 0; i < jurisdictionList.length; i++) {
            if (!bool) {
                let bool2 = true
                for (let key in jurisdictionList[i]) {
                    if (jurisdictionList[i][key] !== user[key]) {
                        bool2 = false
                    }
                }
                bool = bool2
            }
        }
    }
    return bool
}
/**
 * 权限判断--某一个组件
 * @param obj
 */
function isShowSystemId (obj:{ [key: string]: any}) {
    let bool = false
    let jurisdictionList = obj.jurisdictionList
    if (jurisdictionList.length < 1) {
        bool = true
    } else {
        for (let i = 0; i < jurisdictionList.length; i++) {
            if (!bool) {
                let bool2 = true
                for (let key in jurisdictionList[i]) {
                    let components = utils.getPage().getComponents({system_id:key});
                    if (jurisdictionList[i][key] !== components.value) {
                        bool2 = false
                    }
                }
                bool = bool2
            }
        }
    }
    return bool
}
/**
 * 权限判断--某一个组件字面值
 * @param obj
 */
function isShowSystemIdLiteral (obj:{ [key: string]: any}) {
    let bool = false
    let jurisdictionList = obj.jurisdictionList
    if (jurisdictionList.length < 1) {
        bool = true
    } else {
        for (let i = 0; i < jurisdictionList.length; i++) {
            if (!bool) {
                let bool2 = true
                for (let key in jurisdictionList[i]) {
                    let components = utils.getPage().getComponents({system_id:key});
                    if (jurisdictionList[i][key] !== components.valueLiteral()) {
                        bool2 = false
                    }
                }
                bool = bool2
            }
        }
    }
    return bool
}
/**
 * 权限判断--table行数据
 * @param obj
 */
function isShowRow (obj:{ [key: string]: any}) {
    let bool = false
    let row = obj.data.row
    let jurisdictionList = obj.jurisdictionList
    if (jurisdictionList.length < 1) {
        bool = true
    } else {
        for (let i = 0; i < jurisdictionList.length; i++) {
            if (!bool) {
                let bool2 = true
                for (var key in jurisdictionList[i]) {
                    if (row[key] !== jurisdictionList[i][key]) {
                        bool2 = false
                    }
                }
                bool = bool2
            }
        }
    }
    return bool
}
/**
 * 权限判断--当前用户权限
 * @param obj
 */
function isShowJurisdiction (obj:any) {
    let bool = false
    let user = utils.getloginUser()
    let pageName = utils.getPageName()
    let myLsit = user.jurisdiction.j_json['/'+pageName]
    let jurisdictionList = obj.jurisdictionList
    if (jurisdictionList.length < 1) {
        bool = true
    } else {
        for (let i = 0; i < jurisdictionList.length; i++) {
            if (!bool) {
                let bool2 = false
                for (var key in jurisdictionList[i]) {
                    if (utils.isNotNull(myLsit)) {
                        for (let k = 0; k < myLsit.length; k++) {
                            if (jurisdictionList[i][key] === myLsit[k]) {
                                bool2 = true
                            }
                        }
                    }
                }
                bool = bool2
            }
        }
    }
    return bool
}