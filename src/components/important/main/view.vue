<template>
    <div style="height: 100%;width: 100%">
        <div :is="'important2'" :dataAll="{current:page}"  ></div>
        <div :is="'important'" :dataAll="{current:page.components.dialog,paved:true}"  ></div>
        <div :is="'important'" :dataAll="{current:store.components.dialog,paved:true}"  ></div>
    </div>
</template>

<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import { Component } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {

    }
</script>
