<template>
            <el-radio-group
                    :style="current.style"
                    :size="current.size"
                    v-model="current.value"
            >
                <el-radio :label="info[current.props_value]" :key="info[current.props_value]"  v-for="info in current.options" >{{info[current.props_label]}}</el-radio>
            </el-radio-group>
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