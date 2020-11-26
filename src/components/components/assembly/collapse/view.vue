<template>
    <el-collapse v-model="current.activeNames" >
        <el-collapse-item :title="item.label" :name="index" :key="item.name+'_'+item.type+'_'+index" v-for="(item,index) in current.components.from">
            <div :is="'important2'" :dataAll="{current:item}"
                 v-if="jurisdictionJson({jurisdictionList:item.jurisdictionJson})"></div>
        </el-collapse-item>
    </el-collapse>
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