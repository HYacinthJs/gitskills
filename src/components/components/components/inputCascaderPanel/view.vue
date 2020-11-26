<template>
    <el-cascader-panel
            :style="current.style"
            clearable
            :placeholder="current.label"
            v-model="current.value"
            :options="current.options"
            :change-on-select="current.change_on_select"
            :show-all-levels="current.show_all_levels"
            filterable  ></el-cascader-panel>
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