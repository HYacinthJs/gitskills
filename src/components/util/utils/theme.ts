/**
 * 主题类工具
 * 沈家盛
 * 2020.01.19
 * v1.0.0
 *
 **/
import * as utils from "../utils";

/**
 * 设置主题
 * @param data
 */
export function setTheme (data: { name: string; }) {
    utils.getStore().themeName = data.name
}