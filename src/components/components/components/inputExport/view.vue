<template>
    <div>
        <el-button  style="float: left;" type="primary" @click="exportWord(current.contentName)" >{{$t('导出')}}</el-button>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>