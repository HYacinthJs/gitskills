<template>
    <div :style="current.style.width">
        {{current.value}}
        <span v-if="current.unit">{{$t(current.unit)}}</span>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends myVue {
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>
