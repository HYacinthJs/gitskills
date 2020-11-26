/**
 * 项目数据
 * 沈家盛
 * 2020.01.19
 * v1.0.0
 **/
// @ts-ignore
import Vue from 'vue'
import Vuex from 'vuex'
import configSystem from "./configSystem"
Vue.use(Vuex)
export default new Vuex.Store({
  /**
   * 项目
   */
  state: configSystem.state,
  mutations: {
    increment (state) {
      // 变更状态
      state.title="666"
    }
  },
  actions: {
  },
  modules: {
  }
})
