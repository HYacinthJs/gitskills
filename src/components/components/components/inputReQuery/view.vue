<template>
    <div>
        <el-button size="mini" style="float: left;" type="primary" @click="reQuery2(current.contentName)" >{{$t('查询')}}</el-button>
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