<template>
    <div v-show="current.queryShow">
        <div class="header">
            <div class="title">
                {{$t(current.title)}}
            </div>
        </div>
        <div class="content">
            <div :is="'important'" :dataAll="{current:current.components.query,model_style:current.model_style.query}"  ></div>
        </div>
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