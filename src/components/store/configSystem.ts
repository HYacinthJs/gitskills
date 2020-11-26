/* eslint-disable camelcase,indent */
import {getState} from "../../configure/sobuy/state"
const configSystem = {
  state: getState().store,                                       // 当前项目的主要配置
  router:getState().router
}
export default configSystem