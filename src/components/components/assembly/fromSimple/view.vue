<template>
    <div>
        <template v-for="(item,index) in current.components.content">
            <div :is="'important2'" :key="item.system_id+'_'+index" :dataAll="{current:item}" ></div>
        </template>
    </div>
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