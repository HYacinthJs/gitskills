<template>
    <div>
        <el-scrollbar  style="height:100%">

<!--        <div class="tools">-->
<!--            <div class="item" :class="item.class1"  :key="index" @click="item.click()" v-for="(item, index) in tools">-->
<!--                <div  :class="item.class2">-->
<!--                    <img :src="public_getSystemImg({name:item.img})" />-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
            <div class="logo" v-if="!current.isCollapse" >
                <a  href='javascript:;' style="margin:0px;height: 100%;width: 100%;" @click='public_goto_home()'>
                    <img :src="public_getSystemImg({name:'left_logo'})" style="margin:0px;height: 100%;width: 100%;"  alt=""></a>
            </div>
            <div class="logo-icon text-center" v-else style="height:50px;
    ">
                <a href='javascript:;' @click='public_goto_home()'><img :src="public_getSystemImg({name:'left_logo_mini'})" style="margin:0px;height: 100%;width: 66px;"   alt=""></a>
            </div>
        <el-menu class="el-menu-vertical-demo" @select="goto" @open="open2" @close="close2" :collapse="current.isCollapse">
            <template v-for="menu in menuList" class="item2">
                <el-menu-item :index="menu.menu_id+''" :key="menu.menu_id"   v-if="!menu.children&&menu.menu_linkurl.length>0">
                  <img :src="my_getSystemImg(menu)" class="menu_icon"/>
                    <span slot="title" v-if="!current.isCollapse" >{{$t(menu.menu_name)}}</span>
                </el-menu-item>

                <el-submenu :index="menu.menu_id+''"  :key="menu.menu_id" :class="menu.children?current.isCollapse==false?'':'hiddenIcon':'hiddenIcon'" v-if="menu.children">
                    <template slot="title">
                     <img :src="my_getSystemImg(menu)" v-if="menu.menu_imgurl" class="menu_icon"/>
                        <span slot="title" v-if="!current.isCollapse" >{{$t(menu.menu_name)}}{{getNum(menu.menu_name)}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item :route="info" :key="info.menu_id" :index="info.menu_id+''" v-for="info in menu.children">
                        <img :src="my_getSystemImg(info)" v-if="info.menu_imgurl" class="menu_icon"/>
                            {{$t(info.menu_name)}}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

            </template>
        </el-menu>
            </el-scrollbar>
    </div>

</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";
    @Component
    export default class HelloWorld extends myVue {
        my_getSystemImg(menu:any) {                          // 当前组件
            let name = menu.menu_imgurl
            if (utils.formatPageName(menu.menu_linkurl) === this.page.pageTitle) {
                name = name + "_select"
            }
            return utils.getSystemImg({name})
        }
        open2 (a:any, aa:any) {
            this.goto(a, aa)
        }
        close2 (a:any, aa:any) {
            this.goto(a, aa)
        }
        goto (a:any, aa:any) {
            this.current.getGoToUrl(aa[aa.length-1])
        }
        getNum (menu_name:string) {
            if(utils.isNotNull(this.statistics_number[menu_name])){
                return this.statistics_number[menu_name]
            }else{
                return "";
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>