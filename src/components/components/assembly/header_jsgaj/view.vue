<template>
    <div>
        <div class="btn1" style="float: left;height: 100%;width: 50px;border-right: 1px solid #e7e7e7;">
            <img :src="public_getSystemImg({name:'menu'})" @click="current.switchMenu()" style="margin:10px;height: 24px;width: 24px"  alt="">
        </div>
        <div class="btn2" style="float: left;height: 100%;width: 50px;border-right: 1px solid #e7e7e7;">
            <img :src="public_getSystemImg({name:'left'})" @click="public_callBack()" style="margin:10px;height: 24px;width: 24px"  alt="">
        </div>
        <div class="title" style="float: left; color:#7a7676; font-weight:bold;font-size: 20px">
            {{page.pageTitle}}
            <!--<img :src="public_getSystemImg({name:'logo_menu'})" style="margin:0px;height: 44px;"  alt="">-->
        </div>
        <div class="btn">
            <el-dropdown @command="handleCommand" >
                <el-button type="primary" style="color:black">
                    {{$t(user?user.ui_name:"请登录")}}
                   <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="{item:item}" :key="index"  v-for="(item, index) in header_btn"><div class="test">{{$t(item.title)}}</div></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";
    @Component
    export default class HelloWorld extends myVue {
        handleCommand(command:any) {
            command.item.click()
        }
        get projectTitle(){
            return utils.getStore().title
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>