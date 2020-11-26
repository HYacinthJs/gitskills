<template>
    <div>
        <div class="header">
            <div class="title">
                {{$t(current.title)}}
            </div>
        </div>
        <div class="content">
            <el-tabs v-model="current.activeName" v-if="current.components.from.length>1" >
                <el-tab-pane :label="item.label" :name="item.name" :key="item.name+index"  v-for="(item, index) in current.components.from">
                    <div  :is="'important2'" :dataAll="{current:item}"  ></div>
                </el-tab-pane>
            </el-tabs>
            <div v-else :is="'important'" :dataAll="{current:current.components.from}"  ></div>
        </div>
        <div class="footer">
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" :type="item.type" @click="public_click2({item:item})" :key="index" v-for="(item, index) in current.toolBtn">{{$t(item.label)}}</el-button>
            </span>
        </div>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {
        public_click2 (data:any) {
            data.item.click()
        }
    }

</script>

<style scoped lang="scss">
    @import "style";
</style>