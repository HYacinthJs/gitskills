/**
 * 国际化类工具
 * 沈家盛
 * 2020.01.19
 * v1.0.0
 **/
import i18n from "../../i18n"
import * as utils from "../utils"

/**
 * 国际化
 * @param data
 */
export function myI18n (data: { name: string; }) {
    return i18n.tc(data.name);
}
/**
 * 设置当前国际化语言
 * @param data
 */
export function setLanguage (data: { name: string; }) {
    utils.getStore().language = data.name
}
