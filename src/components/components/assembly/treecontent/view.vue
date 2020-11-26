<template>
    <div>
        <div class="header">
            <div class="title">
                {{$t(current.title)}}
            </div>
            <div class="btn">
                <el-button size="mini" :type="item.type" @click="public_click2({item:item})" :key="index"
                    v-for="(item, index) in current.toolBtn">{{$t(item.label)}}</el-button>
            </div>
        </div>
        <div class="content">
            <el-row>
                <el-col :span="6" style="max-height: 100%; background-color: #fff">
                    <div class="grid-content">
                        <el-tree :data="current.tree" node-key="id" :props="current.defaultProps"
                            :expand-on-click-node="false" default-expand-all @node-click="handleNodeClick"></el-tree>

                    </div>
                </el-col>
                <el-col :span="18">
                    <div class="grid-content ">
                        <el-table :data="current.value" ref="singleTable" border :show-summary="current.summaryShow"
                            :summary-method="myShowSummary" @sort-change="sortChange"
                            @selection-change="selectionChange" @cell-click="cellClick"
                            @cell-mouse-enter="cellMouseEnter" :cell-style="current.cell_style"
                            :row-style="current.row_style" class="table">
                            <template>
                                <el-table-column type="selection" :key="Math.random()" v-if="current.selectionshow"
                                    align="center" fixed="left" width="40">
                                </el-table-column>
                                <el-table-column type="index" :label="current.getI18N('序号')" :key="Math.random()"
                                    v-if="current.numbershow" style="color: #00a0e9" align="center" fixed="left"
                                    width="58">
                                </el-table-column>
                                <template v-for="(item, index) in current.components.content">
                                    <el-table-column :align="item.align" :key="index" :label="item.label"
                                        v-if="item.components&&item.components.tableControl&&item.components.tableControl.length>0">
                                        <el-table-column :prop="info.name" :align="info.align" :label="info.label"
                                            :key="info.label+index2" v-for="(info, index2) in item.components.content">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column v-else :prop="item.name" :align="item.align" :label="item.label"
                                        :key="item.label+index">
                                    </el-table-column>
                                </template>

                                <el-table-column label="操作" fixed="right" v-if="current.utilshow" align="center"
                                    :width="current.operation_width">
                                    <template slot-scope="scope">
                                        <el-dropdown split-button size="mini" type="primary" @command="public_click"
                                            @click="public_click({item:current.tableBtn[0],row:scope.row})">
                                            {{$t(current.tableBtn[0].label)}}
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item :command="{item:item,row:scope.row}" :key="index"
                                                    v-for="(item, index) in current.tableBtn">{{$t(item.label)}}
                                                </el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </template>
                                </el-table-column>
                            </template>
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
                    </div>
                </el-col>

            </el-row>

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
    @Component
    export default class HelloWorld extends myVue {
        handleNodeClick(data: any) {
            this.current.tree_id = data.id;
            this.current.currentPage = 1;
            this.current.rows = 10;
            this.current.queryByPid();

        }
        myShowSummary(param: any) {
            return this.current.summaryData(param)
        }
        handleSizeChange(val: any) { // 更新查询的行数
            this.current.rows = val
            this.reQuery("content")
        }
        handleCurrentChange(val: any) { // 更新查询的页数
            this.current.currentPage = val
            this.reQuery("content")
        }
        sortChange(a: any, b: any, c: any) {}
        selectionChange(selection: any) {
            this.current.selectRow = selection
        }
        cellClick(a: any, b: any, c: any) {}
        cellMouseEnter(a: any, b: any, c: any) {}
        public_click(data: any) {
            this.current.selectRowOnly = data.row
            data.item.click({
                row: data.row
            })
        }
        public_click2(data: any) {
            data.item.click()
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>