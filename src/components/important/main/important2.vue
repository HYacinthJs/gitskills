<template>
  <div :class="myclass" :style='current.style'  :is="current.version" :dataAll="{current:current}" ></div>
</template>
<script lang="ts">
  import {myVue} from "@/components/class/myVue";
  import { Component } from 'vue-property-decorator';
  @Component
  export default class HelloWorld extends myVue {
    get myclass(){
      let cla=[]
      cla.push("rootElement")
      cla.push(this.current.version)
      return cla
    }
  }
</script>
