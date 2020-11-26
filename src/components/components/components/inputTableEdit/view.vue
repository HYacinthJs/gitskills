<template>
    <div>
        <div>
            <el-table
                    :data="current.value"
                    :style="current.style">
                <template  v-for="(item, index) in current.components.template">
                    <el-table-column
                            :prop="item.name"
                            v-if="item.type!='ComponentsInputHidden'&&item.type!='ComponentsInputTimelineHidden'"
                            :align="item.align"
                            :label="item.label"
                            :width="item.style.tableWidth"
                            :key="item.label+index">
                        <template slot-scope="scope">
                            <template v-for="(item2, index2) in current.components['template'+scope.$index]">
                               <div :is="'important2'" :key="item2.system_id+'_'+index2" v-if="item2.name==item.name" :dataAll="{current:item2}" ></div>
                            </template>
                        </template>
                    </el-table-column>
                </template>
                <el-table-column
                        label="操作"
                        fixed="right"
                        align="center"
                        :width="current.operation_width">
                    <template slot-scope="scope">
                        <el-button @click="setIndex(scope.$index)">{{$t(current.components['template'+scope.$index][0].show_type=='编辑' ?'确认': '修改')}}</el-button>
                        <el-button @click="reIndex(scope.$index)">{{$t('删除')}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column  fixed="right" v-if="current.history_show" type="expand" width="58" :label="public_i18n('更多')">
                        <template slot-scope="scope" >
                            <template v-for="(item, index) in current.components['template'+scope.$index]">
                                <el-timeline :key="item.system_id+'_'+index" v-if="item.name==current.history_name" :reverse="current.reverse">
                                      <el-timeline-item
                                              v-for="(item3, index3) in item.value"
                                              :key="index3"
                                              :timestamp="item3.timestamp">
                                          {{item3.content}}
                                      </el-timeline-item>
                                  </el-timeline>
                              </template>
                        </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-button  v-if="current.addBtn" type="primary " size="mini"  @click="add()" >{{$t('添加一行')}}</el-button>
        </div>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";
    @Component
    export default class HelloWorld extends myVue {
        add(){
            this.current.add()
        }
        setIndex(edit_index:any){
            for(let i=0;i< this.current.components['template'+edit_index].length;i++){
                if(this.current.components['template'+edit_index][i].show_type=='编辑'){
                    this.current.components['template'+edit_index][i].show_type='详情'
                }else{
                    this.current.components['template'+edit_index][i].show_type='编辑'

                }
            }
        }
        reIndex(edit_index:any){
          console.log(edit_index)
            let newValue:any[] = JSON.parse(this.current.valueFormat())
            if(utils.isNull(newValue)){
                newValue = utils.lodash.cloneDeep(this.current.value)
            }
            utils.lodash.pullAt(newValue,edit_index);
            this.current.value=newValue
        }
        historyList(edit_index:any){
            utils.lodash.pullAt(this.current.value,edit_index);
            this.current.initCopyComponents()
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>
