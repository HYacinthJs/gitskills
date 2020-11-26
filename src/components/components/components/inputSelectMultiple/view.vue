<template>
    <el-select
            :style="current.style"
            size="mini"
            multiple
            clearable
            :placeholder="current.label"
            :value-key="current.name"
            v-model="current.value"
            filterable
            :collapse-tags="current.collapse_tags">
        <el-option v-for="info in current.options" :key="info[current.props_value]" :label="info[current.props_label]" :value="info[current.props_value]"></el-option>
    </el-select>
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