<template>

    <el-input
            v-model="current.value"
            style="width:290px;"
            size="mini"
            class="input-with-select">
        <el-select
                size="mini"
                v-model="current.selectName"
                :collapse-tags="current.collapse_tags"
                slot="prepend"
                :placeholder="current.label"
                style="width:120px;">
            <!--            <el-option label="货号" value="1"></el-option>-->
            <!--            <el-option label="供应商" value="2"></el-option>-->
            <!--            <el-option label="生产工厂" value="3"></el-option>-->
            <el-option v-for="info in current.options" :key="info[current.props_value]" :label="info[current.props_label]" :value="info[current.props_value]"></el-option>


        </el-select>

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