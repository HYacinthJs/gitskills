<template>
    <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"><button @click="store.setLanguage({name:'zh'})">{{$t("中文")}}</button></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><button @click="store.setLanguage({name:'en'})">{{$t("英文")}}</button></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><button @click="store.setTheme({name:'day'})">{{$t("白天主题")}}</button></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><button @click="store.setTheme({name:'night'})">{{$t("夜晚主题")}}</button></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><button @click="store.goTo({path:'error'})">{{$t("error")}}</button></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple"><button @click="store.goTo({path:'login'})">{{$t("login2")}}</button></div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple">
            <div :is="'important'" :dataAll="{current:current.components.login}" ></div>
        </div></el-col>
    </el-row>
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