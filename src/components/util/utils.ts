/**
 * 工具类集合
 * 沈家盛
 * 2020.01.19
 * v1.0.0
 **/

export * from "./utils/system"
export * from "./utils/i18n"
export * from "./utils/theme"
export * from "./utils/core"
export * from "./utils/log"
export * from "./utils/util"
export * from "./utils/post"
export * from "./utils/cookie"
export * from "./utils/websocket"
export * from "./utils/json"
export * from "./utils/validate"
export * from "./utils/jurisdiction"
export * from "./utils/cascader"
export * from "./utils/image"
import lodash from "lodash"
// @ts-ignore
import $ from "jquery"
// @ts-ignore
const myEcharts = echarts
// @ts-ignore
const myBMap = BMap
export {lodash, $,myEcharts,myBMap}
