<template>
    <div id="absd">
        <!--编辑-->
        <template>
            <el-checkbox
                v-for="(opera,index) in current.value"
                v-model="opera.state"
                :key="opera.name+index"
                :disabled="opera.disabled"
                >{{opera.factory_name}}</el-checkbox>
        </template>
        <!--详情-->
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
    export default class HelloWorld extends myVue {
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>