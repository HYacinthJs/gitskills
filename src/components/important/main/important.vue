<template>
  <div class="aaaaaa" :style="mys">
    <div :is="'important2'" :key="item.version+'_'+index" :dataAll="{current:item}"  v-for="(item,index) in  current"  ></div>
  </div>
</template>
<script lang="ts">
  import {myVue} from "@/components/class/myVue";
  import { Component } from 'vue-property-decorator';
  import * as utils from "@/components/util/utils";
  @Component
  export default class HelloWorld extends myVue {
    get mys(){
      let style:{ [key: string]: any} = {}
      if(!this.dataAll.paved){
        style.height ='100%'
      }
      if(utils.isNotNull(this.dataAll.model_style)){
        style = this.dataAll.model_style
      }
      return style;
    }
  }

</script>
