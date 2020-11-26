<template>
    <div>
        <div class="title" >
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <a  href='javascript:;' @click='public_goto_home()' >  {{$t('首页')}}</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item :key="item.menu_name+'_'+item.menu_linkurl" v-for="item in breadcrumbList" >
                    <a  href='javascript:;' @click='public_goto({path:item.menu_linkurl})' v-if="item.menu_linkurl&&item.menu_linkurl.length>2"> {{$t(item.menu_name)}}</a>
                    <span  v-if="!(item.menu_linkurl&&item.menu_linkurl.length>2)"> {{$t(item.menu_name)}}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="btn" v-if="current.isQuery">
            <el-input :placeholder="current.getI18N('查询')" @keyup.enter.native="reQuery()" v-model="current._queryValue" size="mini" prefix-icon="el-icon-search">
            </el-input>
        </div>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {
        handleCommand(command:any) {
            command.item.click()
        }
        get breadcrumbList(){
            return this.current.breadcrumbList;
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>