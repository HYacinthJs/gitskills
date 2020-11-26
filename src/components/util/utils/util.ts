// @ts-ignore
import CryptoJS from "crypto-js"
import * as utils from "../utils";
import { Message } from "element-ui"

/**
 * 是否不为空
 * @param obj
 */
export function isNotNull (obj:any) {
    let state = true
    if (typeof obj === "undefined") {
        state = false
    } else if (typeof obj === "number") {
        if (obj === 0) {
            state = false
        }
    } else if (typeof obj === "string") {
        if (!(obj && obj.length > 0 && obj !== "undefined")) {
            state = false
        }
    } else if (typeof obj === "boolean") {
        state = obj
    } else if (typeof obj === "object") {
        if (! (obj instanceof Date)) {
            if (!(obj && Object.keys(obj).length > 0 && obj !== null && obj !== "null")) {
                state = false
            }
        }
    }
    return state
}
/**
 * 判断是否为空
 * @param obj
 */
export function isNull (obj:any) {
    if (isNotNull(obj)) {
        return false
    }
    return true
}
/**
 * 判断是否未定义
 * @param obj
 */
export function isUndefined (obj:any) {
    if (typeof obj === "undefined") {
        return true
    }
    return false
}
/**
 * 判断是否已定义
 * @param obj
 */
export function isNotUndefined (obj:any) {
    if (isUndefined(obj)) {
        return false
    }
    return true
}

/**
 * aes 解密
 * @param word
 * @constructor
 */
export function AESDecrypt(word:string) {
    let key = CryptoJS.enc.Utf8.parse("abcdefgabcdefg12");
    let decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

/**
 * aes 加密
 * @param word
 * @constructor
 */
export function AESEncrypt(word:string) {
    let key = CryptoJS.enc.Utf8.parse("abcdefgabcdefg12");
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
}

/**
 * 弹出提示信息
 * @param data
 */
export function myMessage(data:{ [key: string]: any}) {
    let message = data.message
    let level = data.level
    let model = data.model
    // 如果是开发模式，在生产模式时不打印
    if (model === "dev") {return}
    if (process.env.message_model === "prod" && model === "dev") {return}
    if (!isNotNull(level)) {level = "success"}
    if (!isNotNull(message)) {message = ""}
    if (data.message !== "暂无数据") {
        message = utils.myI18n({name:message})
        if(utils.getModel()=='pc'){
            Message({message: message, type: level})
        }else{
            Message({message: message, type: level})
          //  Vue.$vux.toast.text(message, "middle")
        }
    }
}

