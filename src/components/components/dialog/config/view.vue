<template>
    <el-dialog title="提示" :visible.sync="current.show" width="30%" >
        <span>pzhi </span>
        <span slot="footer" class="dialog-footer">
        <el-button @click="current.show = false">{{$t('取消')}}</el-button>
        <el-button type="primary" @click="current.show = false">{{$t('取消')}}</el-button>
        </span>
    </el-dialog>
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