<template>
    <div class="home_wrap">
        <div class="title">{{title}}</div>
        <div class="home_main">
            <div class="home_list">
                <div class="home_title">待审批列表</div>
                <template>
                <el-table
                        ref="filterTable"
                        :data="current.value"
                        border
                        @row-click="rowClick"
                >
                    <el-table-column
                            type="index"
                            :label="current.getI18N('序号')"
                            :key="Math.random()"
                            v-if="current.numbershow"
                            style="color: #00a0e9;text-align: center"
                            width="60px"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="类型"
                            style="text-align: center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="num"
                            label="待审批数量"
                    >
                    </el-table-column>

                </el-table>
                </template>
            </div>
            <div class="home_btn" @click="public_goto({path:'/sys_number_copy'})">
                <div class="home_title">货号管理</div>
                <template>
                    <el-table
                            :data="tableData.number">
                        <el-table-column
                                prop="no"
                                >
                        </el-table-column>

                    </el-table>
                </template>
            </div>
        </div>
        <div class="home_main">
            <div class="home_list">
                <div class="home_title">通知公告</div>
                <template>
                <el-table
                        ref="filterTable"
                        :data="tableData.notice"
                        border
                        @row-click="rowClick"
                >
                    <el-table-column
                            type="index"
                            :label="current.getI18N('序号')"
                            :key="Math.random()"
                            v-if="current.numbershow"
                            style="color: #00a0e9;text-align: center"
                            width="60px"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="notice_date"
                            label="日期"
                            sortable
                            style="text-align: center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="notice_content"
                            label="内容"
                            width="300px"
                    >
                    </el-table-column>

                    <el-table-column
                            prop="notice_file"
                            label="文件"
                    >
                    </el-table-column>
                    <el-table-column
                            :label="public_i18n('操作')"
                            v-if="current.utilshow"
                            align="center"
                            :width="current.operation_width">
                        <template slot-scope="scope">
                            <el-dropdown trigger="click" split-button size="mini" type="primary"
                                         v-if="myBtnList({row:scope.row}).length>0" @command="public_click"
                                         @click="public_click({item:myBtnOne({row:scope.row}),row:scope.row})">
                                {{$t(myBtnOne({row:scope.row}).label)}}
                                <el-dropdown-menu slot="dropdown">
                                    <template v-for="(item, index) in current.tableBtn">
                                        <template
                                                v-if="jurisdictionJson({process:item.process,jurisdictionList:item.jurisdictionJson,data:{row:scope.row}})">
                                            <el-dropdown-item :command="{item:item,row:scope.row}" :key="index">
                                                {{$t(item.label)}}
                                            </el-dropdown-item>
                                        </template>
                                    </template>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </template>
                    </el-table-column>
                </el-table>
                </template>
            </div>
            <div class="home_btn" @click="public_goto({path:'/file_manage'})">
                <div class="home_title">模板表格</div>
                <template>
                    <el-table
                            :data="tableData.modelFile"
                           >
                        <el-table-column
                                prop="no"
                        >
                        </el-table-column>
                    </el-table>
                </template>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    @import "style";
</style>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component} from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";

    @Component
    export default class HelloWorld extends myVue {
        data() {
            return {
                tableData:
                    {
                        product: [{
                            id: 1,
                            approve_type: '组装图',
                            approve_number: '2'
                        }, {
                            id: 2,
                            approve_type: '工艺单',
                            approve_number: '54'
                        }, {
                            id: 3,
                            approve_type: '产前样',
                            approve_number: '24'
                        }, {
                            id: 4,
                            approve_type: '中期',
                            approve_number: '23'
                        }, {
                            id: 5,
                            approve_type: '尾检',
                            approve_number: '19'
                        }], notice: [
                            {
                                id: 1,
                                notice_date: '2020-0703',
                                notice_content: '关于近期质量纠正报告的说明',
                                notice_file: '20200703',
                            }, {
                                id: 2,
                                notice_date: '2020-0703',
                                notice_content: '关于近期质量纠正报告的说明',
                                notice_file: '20200703',
                            }, {
                                id: 3,
                                notice_date: '2020-0703',
                                notice_content: '关于近期质量纠正报告的说明',
                                notice_file: '20200703',
                            }, {
                                id: 4,
                                notice_date: '2020-0703',
                                notice_content: '关于近期质量纠正报告的说明',
                                notice_file: '20200703',
                            }, {
                                id: 5,
                                notice_date: '2020-0703',
                                notice_content: '关于近期质量纠正报告的说明',
                                notice_file: '20200703',
                            }],
                        number:[
                            {no:"HH24132132"},
                            {no:"HH24132132"},
                            {no:"HH24132132"},
                            {no:"HH24132132"},],
                        modelFile:[
                            {no:"工艺单模板"},
                            {no:"质量纠正报告模板"},
                            {no:"订单模板"},
                            {no:"空白表格"},]
                    },

            }
        }

        test() {
            let routeUrl = this.$router.resolve({
                path: "/fixed_echarts1"
            });
            window.open(routeUrl.href, '_blank');
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
        public_click (data:any) {
            console.log(data)
            this.current.selectRowOnly = data.row
            data.item.click({row:data.row})
        }

        rowClick(row: any, b: any, c: any) {
            this.current.selectRowOnly = row
            console.log(row)
            if(row.type == "组装图" || row.type == "工艺单"){
                utils.goTo({path: '/sys_number_copy'})
            }else if(row.type == "样品管理"){
                utils.goTo({path: '/sys_sample'})
            }
            else if(row.type == "原材料"){
                utils.goTo({path: '/material'})
            }else if(row.type == "产前样"){
                utils.goTo({path: '/ppsample'})
            }else if(row.type == "中期"){
                utils.goTo({path: '/midtest'})
            }else if(row.type == "尾检"){
                utils.goTo({path: '/tailcheck'})
            }else if(row.type == "复检"){
                utils.goTo({path: '/re_examination'})
            }else if(row.type == "大货样"){
                utils.goTo({path: '/sys_bulksample'})
            }
        }

    }

</script>

<style scoped lang="scss">
    @import "style";

</style>