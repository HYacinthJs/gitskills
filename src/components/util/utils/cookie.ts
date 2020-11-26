
/**
 * 获取cookie
 * @param key
 */
export function getCookie (key:string) {
  return localStorage.getItem(key)
}

/**
 * 设置cookie
 * @param key
 * @param value
 */
export function setCookie (key:string, value:any) {
  localStorage.setItem(key, value)
}

/**
 * 删除cookie
 * @param key
 */
export function delCookie (key:string) {
  localStorage.removeItem(key)
}
