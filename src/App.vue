<template>
  <div id="app" v-document-title="title">
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
<script>
  import {getStore} from "./components/util/utils/system"
  export default {
    name: "app",
    created () {
      //关闭加载动画
    //  document.body.removeChild(document.getElementById("appload"))
    },
    mounted: function () {
      //设置项目名至document属性
      window.document.documentElement.setAttribute("data-project", getStore().projectName)
      window.document.documentElement.setAttribute("data-theme",getStore().themeName)
      //设置全局vue对象
      getStore().myVue = this
      //设置当前屏幕尺寸至document属性
      getStore().initSize()
      window.onresize = function temp () {
        getStore().initSize()
      }
    },
    computed: {
      language () {                        // 数据
        return this.$store.state.language
      },
      title () {                        // 数据
        return this.$store.state.title
      },
    },
    watch: {
      "language" (to, from) {
        this.$i18n.locale = to
      },
    }
  }

</script>
