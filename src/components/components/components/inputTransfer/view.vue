<template>
    <el-transfer
            :style="current.style"
            :placeholder="current.label"
            v-model="current.value"
            :titles="current.titles"
            :filterable="current.filterable"
            :data="current.options">
    </el-transfer>
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