<template>
    <div>
        <div>
            <!--            <el-form :model="formInline" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
            <!--                <div v-for="(item, index) in formInline.formInlineList" :key="index">-->
            <!--                    &lt;!&ndash; formInlineList就是数据结构、要与表单formInLine放在一起，就是放在它里面 &ndash;&gt;-->
            <!--                    <el-form-item-->
            <!--                            :label="item.label"-->
            <!--                            :prop="'formInlineList.' + index + '.formInlineVal'"-->
            <!--                            :rules="item.rules.formInlineVal"-->
            <!--                    >-->
            <!--                        <el-input v-model="item.formInlineVal" :placeholder="item.placeHolder"></el-input>-->
            <!--                    </el-form-item>-->
            <!--                </div>-->
            <!--            </el-form>-->
            <div  v-for="(item0, index0) in current.value" :key="index0" class="container_form">
                <el-form ref="ruleForm" label-width="100px" style="position: relative;clear: both">
                    <div class="input_form_cell" v-for="(item, index) in current.components.template" :key="index">
                        <el-form-item
                                :prop="item.name"
                                v-if="item.type!='ComponentsInputHidden'"
                                :align="item.align"
                                :label="item.label"
                                :width="item.style.width"
                                style="float: none"
                                :key="item.label+index">
                            <template >
                                <template v-for="(item2, index2) in current.components['template'+index0]">
                                    <div :is="'important2'" :key="item2.system_id+'_'+index2" v-if="item2.name==item.name"
                                         :dataAll="{current:item2}"></div>
                                </template>
                            </template>
                        </el-form-item>
                    </div>
                    <div style="position: absolute; top: 0;right: 0; clear: both">
                        <el-button v-if="current.editTr"  @click="reIndex(index0)" type="danger" icon="el-icon-delete" circle></el-button>
                    </div>
                </el-form>
            </div>
            <!--            <el-table-->
            <!--                    :data="current.value"-->
            <!--                    :style="current.style">-->
            <!--                <template v-for="(item, index) in current.components.template" :key="index">-->
            <!--                    <el-table-column-->
            <!--                            :prop="item.name"-->
            <!--                            v-if="item.type!='ComponentsInputHidden'"-->
            <!--                            :align="item.align"-->
            <!--                            :label="item.label"-->
            <!--                            :width="item.style.width"-->
            <!--                            :key="item.label+index">-->
            <!--                        <template slot-scope="scope">-->
            <!--                            {{scope.$index}}-->
            <!--                            <template v-for="(item2, index2) in current.components['template'+scope.$index]">-->
            <!--                                <div :is="'important2'" :key="item2.system_id+'_'+index2" v-if="item2.name==item.name"-->
            <!--                                     :dataAll="{current:item2}"></div>-->
            <!--                            </template>-->
            <!--                        </template>-->
            <!--                    </el-table-column>-->
            <!--                </template>-->
            <!--                <el-table-column-->
            <!--                        label="操作"-->
            <!--                        fixed="right"-->
            <!--                        align="center"-->
            <!--                        v-if="current.editTr"-->
            <!--                        :width="current.operation_width">-->
            <!--                    <template slot-scope="scope">-->
            <!--                        <el-button @click="reIndex(scope.$index)">{{$t('删除')}}</el-button>-->
            <!--                    </template>-->
            <!--                </el-table-column>-->
            <!--            </el-table>-->
        </div>
        <div style="clear: both">
            <el-button v-if="current.addBtn" type="primary " size="mini" @click="add()">{{$t('添加一行')}}</el-button>
        </div>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component} from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";

    @Component
    export default class HelloWorld extends myVue {
        data() {
            return {
                formInline: {
                    formInlineList: [
                        {
                            index: 1,
                            formInlineVal: "",
                            label: "优惠券名称:",
                            placeHolder: "请输入优惠券名称",
                            rules: {
                                formInlineVal: [
                                    {required: true, message: "请输入优惠券名称", trigger: "blur"}
                                ]
                            }
                        },
                        {
                            index: 2,
                            formInlineVal: "",
                            label: "消费限制:",
                            placeHolder: "消费满XX元可用，不填表示不限",
                            rules: {
                                formInlineVal: [{required: false}]
                            }
                        },
                        {
                            index: 2,
                            formInlineVal: "",
                            label: "消费限制:",
                            placeHolder: "消费满XX元可用，不填表示不限",
                            rules: {
                                formInlineVal: [{required: false}]
                            }
                        },
                        {
                            index: 2,
                            formInlineVal: "",
                            label: "消费限制:",
                            placeHolder: "消费满XX元可用，不填表示不限",
                            rules: {
                                formInlineVal: [{required: false}]
                            }
                        }
                    ]
                },

            }
        }

        add() {
            this.current.add()
        }

        reIndex(edit_index: any) {
            let newValue: any[] = JSON.parse(this.current.valueFormat())
            if (utils.isNull(newValue)) {
                newValue = utils.lodash.cloneDeep(this.current.value)
            }
            utils.lodash.pullAt(newValue, edit_index);
            this.current.value = newValue
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>