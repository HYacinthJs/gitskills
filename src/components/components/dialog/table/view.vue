<template>
    <el-dialog :title="current.title" :visible.sync="current.show"  :width="current.dialog_width" @close="my_close" @open="my_open" :close-on-click-modal="false">
<!--        <el-button @click="resetDateFilter">清除日期筛选</el-button>-->
<!--        <el-button @click="clearFilter">清除所有筛选</el-button>-->
        <el-table
                ref="filterTable"
                :data="current.value"
                border
                @cell-click="cellClick"
                :cell-style="cell_style"
        style="width: 100%">
            <el-table-column
                    type="index"
                    :label="current.getI18N('序号')"
                    :key="Math.random()"
                    v-if="current.numbershow"
                    style="color: #00a0e9"
                    align="center"
                    fixed="left"
                   >
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    sortable
                    style="text-align: center"
                    column-key="date"
            >
            </el-table-column>
            <el-table-column>
                <template slot="header">
                    <el-date-picker
                            style="border-left: none !important;"
                            v-model="current.search_date"
                            type="date"
                            size="mini"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd"
                            @change="current.Requery()"
                            placeholder="选择日期搜索">
                    </el-date-picker>
                </template>
            </el-table-column>
            <el-table-column
                    prop="no"
                    label="文件编号"
                    >
            </el-table-column>
            <el-table-column
                    >
                <template slot="header">
                    <el-input
                            v-model="current.search_file"
                            size="mini"
                            label="文件编号"
                            @change="current.Requery()"
                            placeholder="输入文件编号搜索"/>
                </template>
            </el-table-column>
            <el-table-column
                    width="250px"
                    prop="file_type">
                <template slot="header">
<!--                    <el-cascader :options="current.options" :props="{ checkStrictly: true }" :show-all-levels="false" clearable v-model="current.file_type"  @change="current.Requery()" placeholder="选择文件类型搜索"></el-cascader>-->
                    <el-select style="width: 240px;" multiple clearable v-model="current.typeArr"  @change="current.Requery()" placeholder="选择文件类型搜索">
                        <el-option v-for="info in current.fileType" :key="info.value" :label="info.label" :value="info.value"></el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="质检状态"
                    >
            </el-table-column>
            <el-table-column
                    :label="public_i18n('操作')"
                    v-if="current.utilshow"
                    align="center"
                    :width="current.operation_width">
                <template slot-scope="scope">
                    <el-dropdown trigger="click" split-button size="mini" type="primary" v-if="myBtnList({row:scope.row}).length>0" @command="public_click" @click="public_click({item:myBtnOne({row:scope.row}),row:scope.row})" >
                        {{$t(myBtnOne({row:scope.row}).label)}}
                        <el-dropdown-menu slot="dropdown">
                            <template v-for="(item, index) in current.tableBtn">
                                <template v-if="jurisdictionJson({process:item.process,jurisdictionList:item.jurisdictionJson,data:{row:scope.row}})">
                                    <el-dropdown-item  :command="{item:item,row:scope.row}"  :key="index">{{$t(item.label)}}</el-dropdown-item>
                                </template>
                            </template>
                        </el-dropdown-menu>
                    </el-dropdown>
                </template>
            </el-table-column>
        </el-table>
        <div class="footer">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="current.currentPage"
                    :page-sizes="[10, 20, 50, 100,200]"
                    :page-size="current.rows"
                    background
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="current.total">
            </el-pagination>
        </div>
    </el-dialog>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";
    @Component
    export default class HelloWorld extends myVue {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    no: '王小虎',
                    tag: '签封样'
                }, {
                    date: '2016-05-04',
                    no: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    tag: '组装图'
                }, {
                    date: '2015-05-01',
                    no: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    tag: '工艺单'
                }, {
                    date: '2016-05-03',
                    no: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '以往报告'
                }, {
                    date: '2016-05-03',
                    no: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '质量整改'
                }],
            }
        }

        my_open(){
            this.current.open()
        }
        my_close(){
            this.current.close()
        }
        cellClick (row:any, column:any, cell:any, event:any) {
            this.current.selectRowOnly = row
            // if(column.label == "文件编号"){
            //     if(row.file_type == "签封样"){
            //         let edit = utils.getStore().openDialog({name:'examine2',title:"查看"})
            //         edit.queryThree()
            //     }else if(row.file_type == "组装图"){
            //         let edit = utils.getStore().openDialog({name:'examine4',title:"查看"})
            //         edit.queryThree()
            //     }else if(row.file_type == "工艺单"){
            //         let edit = utils.getStore().openDialog({name:'examine3',title:"查看"})
            //         edit.queryThree()
            //     }
            // }
        }
        cell_style({ row, column, rowIndex, columnIndex }:any) {
            // if(columnIndex === 3){
            //     if(row.file_type == "签封样" || row.file_type == "组装图" || row.file_type == "工艺单") {
            //             return {'background-color':"#CEFFCE"};
            //     }
            // }
        }
        arraySpanMethod({ row, column, rowIndex, columnIndex }:any) {
                if (columnIndex === 1) {
                    return [1, 2];
                }else if(columnIndex === 2){
                    return [2,2];
                }
        }

        filterHandler(value:any, row:any, column:any) {
            const property = column['property'];
            let date = row[property];
            let arr = date.split("-")
            let d = new Date();
            d.setFullYear(arr[0],arr[1],arr[2]);
            return d.getFullYear() == value;
        }
        myBtnList (data:any) {
            let list =[]
            for(let i=0;i<this.current.tableBtn.length;i++){
                let item = this.current.tableBtn[i];
                let bool = utils.isJurisdiction({
                    process:item.process,
                    jurisdictionList:item.jurisdictionJson,
                    data:{row:data.row}
                })
                if(bool){
                    list.push(item)
                }
            }
            return list
        }
        myBtnOne (data:any) {
            let list = this.myBtnList(data);
            if(list.length>0){
                return list[0]
            }else{
                return {}
            }
        }
        handleSizeChange (val:any) {         // 更新查询的行数
            this.current.rows = val
            this.current.Requery()
        }
        handleCurrentChange (val:any) {            // 更新查询的页数
            this.current.currentPage = val
            this.current.Requery()
        }
        public_click (data:any) {
            this.current.selectRowOnly = data.row
            data.item.click({row:data.row})
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>