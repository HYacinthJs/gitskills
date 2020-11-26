<template>
<!--    <el-date-picker
            v-model="current.value"
            type="date"
            :format="current.dateFormat"
            :value-format="current.dateValueFormat"
            placeholder="选择日期">
    </el-date-picker>-->
    <el-date-picker
            :style="current.style"
            size="mini"
            v-model="current.value"
            :type="current.date_type"
            range-separator="至"
            :format="current.dateFormat"
            :value-format="current.dateValueFormat"
            :start-placeholder="current.start_label?current.start_label:current.label"
            :end-placeholder="current.end_label?current.end_label:current.label"> </el-date-picker>
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