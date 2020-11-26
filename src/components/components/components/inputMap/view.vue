<template>
    <div :id="current.system_id" :style="current.style" ></div>

</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {
        mounted(){
            this.current.initMap({});
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>