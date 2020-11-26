<template>
    <div>

        <div class="content">
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">

                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>我的任务</span>
                            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                        </div>
                        <div  class="text item">
                            <template>
                                <el-table
                                        :data="current.value"
                                        style="width: 100%" size="mini">
                                    <el-table-column
                                            prop="name"
                                            label="任务名称"
                                            width="150">
                                    </el-table-column>
                                    <el-table-column
                                            prop="status"
                                            label="状态"
                                            width="80">
                                    </el-table-column>
                                    <el-table-column
                                            prop="date"
                                            label="截止日期">
                                    </el-table-column>
                                    <el-table-column
                                            prop="creator"
                                            label="创建者">
                                    </el-table-column>
                                </el-table>
                            </template>
                        </div>
                    </el-card>


                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">

                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>我的任务2</span>
                            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                        </div>
                        <div  class="text item">
                            <template>
                                <el-table
                                        :data="current.value"
                                        style="width: 100%" size="mini">
                                    <el-table-column
                                            prop="text1"
                                            label="任务名称"
                                            width="150">
                                    </el-table-column>
                                    <el-table-column
                                            prop="text2"
                                            label="状态"
                                            width="80">
                                    </el-table-column>
                                    <el-table-column
                                            prop="text3"
                                            label="截止日期">
                                    </el-table-column>
                                    <el-table-column
                                            prop="text4"
                                            label="创建者">
                                    </el-table-column>
                                </el-table>
                            </template>
                        </div>
                    </el-card>


                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">


                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">


                </div></el-col>
            </el-row>

        </div>

    </div>

</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {

    }

</script>

<style scoped lang="scss">
    @import "style";
</style>