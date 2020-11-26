import * as utils from "@/components/util/utils";

/**
 * 获取联级下拉完整路径
 *
 * @param {any} list 完整的数据结构
 * @param {number | string} value 当前选中值
 *
 */
export function getCascaderPathAll (list:any, value:number | string) {
  return getCascaderPath(list, value)
}

function getCascaderPath (list:any, value:any) {
// 如果list为空返回
  let returnList :any[]= []
  if (!utils.isNotNull(list)) {
    return returnList
  }
  // 遍历list
  for (let i = 0; i < list.length; i++) {
    // 如果值相等结束遍历
    if (list[i].value == value) {
      returnList.unshift(list[i].value)
      return returnList
    }
    // 遍历子集
    if (!utils.isNotNull(list[i].children)) {
      list[i].children = []
    }
    let str:any = getCascaderPath(list[i].children, value)
    if (utils.isNotNull(str)) {
      str.unshift(list[i].value)
      return str
    }
  }
  return returnList
}