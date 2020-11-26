<template>
    <el-date-picker
            v-model="current.value"
            type="month"
            size="mini"
            :format="current.dateFormat"
            :value-format="current.dateValueFormat"
            placeholder="选择月份">
    </el-date-picker>
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