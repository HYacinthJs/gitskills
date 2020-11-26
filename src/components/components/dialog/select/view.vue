<template>
    <el-dialog :title="current.title" :visible.sync="current.show" width="30%" >
        <span> {{$t(current.msg)}}</span>
        <span slot="footer" class="dialog-footer">
            <el-button :type="item.type" @click="public_click2({item:item})" :key="index" v-for="(item, index) in current.toolBtn">{{$t(item.label)}}</el-button>
        </span>
    </el-dialog>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {
        delete2(){
            this.current.delete()
        }
        public_click2 (data:any) {
            data.item.click()
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>