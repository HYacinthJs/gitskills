<template>
    <div :style="current.style">
        <!--编辑-->
        <template>
            <el-steps :active="current.value.step" finish-status="success">
                <template v-for="(item, index) in current.value.marks" >
                    <el-step :key="index" :title="item.title" :description="item.desc"></el-step>
                </template>
            </el-steps>
            <!-- <el-slider :disabled="current.disabled" v-model="current.value" :marks="current.marks">
            </el-slider> -->
        </template>
    </div>
</template>
<script lang="ts">
    import {
        myVue
    } from "@/components/class/myVue";
    import {
        Component
    } from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends myVue {}
</script>

<style scoped lang="scss">
    @import "style";
</style>