<template>
    <div>
        <div class="title">
            {{$t(projectTitle)}}
        </div>
        <div class="btn">
            <el-dropdown @command="handleCommand" >
                <el-button type="primary">
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