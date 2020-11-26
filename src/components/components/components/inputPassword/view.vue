<template>
    <el-input
            :style="current.style"
            :size="current.size"
            show-password
            @keyup.enter.native="public_enter"
            :placeholder="current.placeholder"
            :disabled="current.disabled"
            v-model="current.value" >
        <template slot="append" v-if="current.unit">{{$t(current.unit)}}</template>
    </el-input>
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