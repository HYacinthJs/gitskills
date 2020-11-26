<template>
    <div :is="'important'" :dataAll="{current:current.components.simple}" ></div>
</template>
<script lang="ts">
    import { Component } from 'vue-property-decorator';
    import Important from "@/components/important/main/important.vue";
    import {myVue} from "@/components/class/myVue";
    export default class HelloWorld extends myVue {
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>