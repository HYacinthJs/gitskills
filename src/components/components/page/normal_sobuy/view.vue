<template>
    <el-container>

        <el-container>
            <el-aside :width="current.aside_width">
                <div :is="'important'" :dataAll="{current:current.components.menu}"  ></div>
            </el-aside>
            <el-container>
                <el-header>
                    <div :is="'important'" :dataAll="{current:current.components.header}" ></div>
                </el-header>
                <el-main>
                    <div :is="'important'" :dataAll="{current:current.components.content}" ></div>
                </el-main>
                <el-footer >
                    <div :is="'important'" :dataAll="{current:current.components.footer}" ></div>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
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