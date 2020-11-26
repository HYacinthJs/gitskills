<template>
  <el-form :size="current.size" :inline="current.inline" ref="ruleForm">
    <template v-for="(item,index) in current.components.content">
      <el-form-item :style="item.item_style" :label="item.label_show?item.label:''"
        :label-width="item.label_show?item.label_width:'0px' "
        :class="item.rules&&item.rules.length>0&&item.validate_string_show?item.validate_string&&item.validate_string.length>0?[['is-required','is-error']]:[['is-required','is-success']]:['is-success']"
        :key="item.name+'_'+item.type+'_'+index" :prop="item.name" v-if="item.show">
        <div :is="'important2'" :dataAll="{current:item}"></div>
        <div v-if="item.validate_string&&item.validate_string.length>0" class="errorString">
          {{ item.validate_string }}
        </div>
      </el-form-item>
    </template>
  </el-form>
</template>
<script lang="ts">
  import {
    myVue
  } from "@/components/class/myVue";
  import {
    Component
  } from 'vue-property-decorator';

  @Component
  export default class HelloWorld extends myVue {}
</script>

<style scoped lang="scss">
  @import "style";
</style>