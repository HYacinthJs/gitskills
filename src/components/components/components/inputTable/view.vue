<template>
    <div>
        <div>
            <el-table :data="current.value" :style="current.styleEdit" @row-click="rowClick" @cell-click="cellClick">
                <el-table-column type="index" :label="current.getI18N('序号')" :key="Math.random()"
                    v-if="current.sort_able" style="color: #00a0e9;border:1px solid #00a0e9" align="center" fixed="left" width="58">
                </el-table-column>
                <template v-for="(item, index) in current.components.template">
                    <el-table-column :prop="item.name" v-if="item.type!='ComponentsInputHidden'" :align="item.align"
                        :label="item.label" :width="item.style.tebleWidth" :key="item.label+index">
                        <template slot-scope="scope">
                            <template v-for="(item2, index2) in current.components['template'+scope.$index]">
                                <div :is="'important2'" :key="item2.system_id+'_'+index2" v-if="item2.name==item.name"
                                    :dataAll="{current:item2}"></div>
                            </template>
                        </template>
                    </el-table-column>
                </template>
                <el-table-column label="操作" fixed="right" align="center" v-if="current.editTr"
                    :width="current.operation_width">
                    <template slot-scope="scope">
                        <el-button v-if="current.editMove" @click="moveIndex(scope.$index)">{{$t('清空')}}</el-button>
                        <el-button @click="reIndex(scope.$index)">{{$t('删除')}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-button v-if="current.addBtn" type="primary " size="mini" @click="add()">{{$t('添加一行')}}</el-button>
        </div>
    </div>
</template>
<script lang="ts">
    import {
        myVue
    } from "@/components/class/myVue";
    import {
        Component
    } from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";
    @Component
    export default class HelloWorld extends myVue {
        add() {
            this.current.add()
        }
        moveIndex(edit_index: any) {
            console.log(edit_index)
            console.log(this.current.value)
            let newValue: any[] = JSON.parse(this.current.valueFormat())
            if (utils.isNull(newValue)) {
                newValue = utils.lodash.cloneDeep(this.current.value)
            }
            console.log(newValue)
            newValue[edit_index] = {color: "",id: "",material_quality: "",name: "",note: "",number: "",part_id: "",process_part_no: "",specifications: "",surface_treatment: "",url: "[]"}
            this.current.value = newValue
        }
        reIndex(edit_index: any) {
            let newValue: any[] = JSON.parse(this.current.valueFormat())
            if (utils.isNull(newValue)) {
                newValue = utils.lodash.cloneDeep(this.current.value)
            }
            utils.lodash.pullAt(newValue, edit_index);
            this.current.value = newValue
        }
        rowClick(row: any, b: any, c: any) {
            this.current.selectRowOnly = row
        }
        cellClick(row: any, column: any, cell: any, event: any, data: any) {
            this.current.selectRowOnly = row
            this.current.cellClick(column)
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>