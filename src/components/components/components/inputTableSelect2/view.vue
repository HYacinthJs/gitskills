<template>
    <el-table
            :data="current.options"
            :span-method="objectSpanMethod"
            :style="current.style">
        <el-table-column
                prop="module"
                label="考察内容"
                width="150">
            <template slot-scope="scope">
                {{scope.row.page.label}}
            </template>
        </el-table-column>
        <el-table-column label="考察标准">
            <template slot-scope="scope">
                <div :key="scope.row.page.name+opera.name+index"  v-for="(opera,index) in scope.row.operation">
                    <el-radio v-model="current.value" :label="opera.name" >{{opera.label}}</el-radio>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {
        objectSpanMethod ({row, column, rowIndex, columnIndex}:any) {
            let moduleNum = this.moduleNum
            for (let i = 0; i < moduleNum.length; i++) {
                if (rowIndex >= moduleNum[i].min && rowIndex <= moduleNum[i].max && columnIndex === 0) {
                    return this.merge(rowIndex, columnIndex, moduleNum[i])
                }
            }
            return {
                rowspan: 1,
                colspan: 1
            }
        }
        merge (rowIndex:number, columnIndex:number, obj:any) {
            let min = obj.min
            let max = obj.max
            if (columnIndex === 0) {
                if (rowIndex === min) {
                    return {
                        rowspan: max - min + 1,
                        colspan: 1
                    }
                } else if (rowIndex > min && rowIndex <= max) {
                    return {
                        rowspan: 0,
                        colspan: 0
                    }
                }
                return {
                    rowspan: 1,
                    colspan: 1
                }
            }
        }
        get moduleNum () {
            let name=""
            let min=0;
            let max=0;
            let moduleNum = []
            for(let i=0;i<this.current.value.length;i++){
                let name2 = this.current.value[i].module
                if((name != "" && name != name2)){
                    moduleNum.push({min: min, max: (max-1)})
                    min = max;
                }
                if(this.current.value.length==(i+1)){
                    moduleNum.push({min: min, max: max})
                    min = max;
                }
                max++
                name = name2
            }
            return moduleNum
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>