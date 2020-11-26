/**
 * 日志--普通
 * @param message
 */
export function log (message:any) {
    console.log(message)
}
/**
 * 日志--警告
 * @param message
 */
export function logWarn (message:string) {
    console.warn(message)
}
/**
 * 日志--异常
 * @param message
 */
export function logErr (message:string) {
    console.error(message)
}
/**
 * 日志--提示信息
 * @param message
 */
export function logInfo (message:string) {
    console.log("%c " + message, "color:#00f;")
}

/**
 * 错误信息
 * @param word
 */
export function errMessage(word:string) {
    console.log(word)
}