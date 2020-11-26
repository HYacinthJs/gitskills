<template>
    <div>
        <el-select size="mini" style="width: 120px" clearable v-model="current.typeArr"  @change="reQuery" :placeholder="current.label">
            <el-option v-for="info in current.fileType" :key="info.value" :label="info.label" :value="info.value"></el-option>
        </el-select>
        <template v-if="current.dateShow">
            <el-date-picker
                    size="mini"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    v-model="current.case_time"
                    :type="current.date_type"
                    >
            </el-date-picker>
        </template>
        <template v-if="current.inputShow">
            <el-input
                    size="mini"
                    style="width: 220px"
                    @keyup.enter.native="public_enter"
                    :disabled="current.disabled"
                    v-model="current.value" >
            </el-input>
        </template>
        <template v-if="current.selectShow">
            <el-select
                    @on-create="handleCreate"
                    size="mini"
                    style="width: 220px"
                    clearable
                    :placeholder="current.label"
                    :value-key="current.name"
                    v-model="current.value"
                    :disabled="current.disabled"
                    filterable
                    :collapse-tags="current.collapse_tags">
                <el-option v-for="info in current.options" :key="info[current.props_value]" :label="info[current.props_label]" :value="info[current.props_value]"></el-option>
            </el-select>
        </template>
    </div>
</template>

<!--<template>-->
<!--    <el-date-picker-->
<!--            type="date"-->
<!--            v-model="current.value"-->
<!--            style="width:290px;"-->
<!--            size="mini"-->
<!--            class="input-with-select">-->
<!--    </el-date-picker>-->
<!--</template>-->
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                value1: ''
            }
        }
        handleCreate(data:any){
        }
        reQuery(){
            this.current.reQuery()
        }

    }
</script>

<style scoped lang="scss">
    @import "style";
</style>