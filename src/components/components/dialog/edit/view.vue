<template>
  <el-dialog :title="current.title" :visible.sync="current.show" :width="current.dialog_width" @close="my_close"
    @open="my_open" :close-on-click-modal="false" v-loading="current.loading" element-loading-text="加载数据中"
    element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">

    <el-tabs v-model="current.activeName" v-if="current.components.from.length>1">
      <el-tab-pane :label="item.label" :name="item.name" :key="item.name+index"
        v-for="(item, index) in current.components.from">
        <div :is="'important2'" :dataAll="{current:item}"></div>
      </el-tab-pane>
    </el-tabs>
    <div v-else :is="'important'" :dataAll="{current:current.components.from}"></div>

    <span slot="footer" class="dialog-footer">
      <template v-for="(item, index) in current.toolBtn">
        <el-button size="mini" :type="item.type" @click="public_click2({item:item})" :key="index"
          v-if="jurisdictionJson({process:item.process,jurisdictionList:item.jurisdictionJson})">
          {{ $t(item.label) }}
        </el-button>
      </template>

    </span>
  </el-dialog>
</template>
<script lang="ts">
  import {
    myVue
  } from "@/components/class/myVue";
  import {
    Component
  } from 'vue-property-decorator';

  @Component
  export default class HelloWorld extends myVue {
    my_open() {
      this.current.open()
    }

    my_close() {
      this.current.close()
    }

    public_click2(data: any) {
      data.item.click()
    }
  }
</script>

<style scoped lang="scss">
  @import "style";
</style>