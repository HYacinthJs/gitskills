<template>
    <el-dialog :title="current.title" :visible.sync="current.show" :modal-append-to-body="false" :width="current.dialog_width"  @close="my_close" @open="my_open">
        <el-upload
                class="upload-demo"
                action="/api/upload/defaultUpload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="su"
                :data="{name:'',dir:'ex',type:'defaultUpload'}"
                style="width: 300px;float: left;"
                :file-list="current.fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传execl文件</div>
        </el-upload>
        <el-button type="primary" size="small" @click="download()" v-if="current.template_show">下载模板</el-button>
        <el-table
                :data="tableData"
                style="width: 100%"
                max-height="500">
            <el-table-column
                    type="index"
                    label="序号"
                    fixed="left"
                    width="50">
            </el-table-column>
            <template  v-for="(item, index) in current.components.template">
                <el-table-column
                        :prop="item.name"
                        v-if="item.type!='ComponentsInputHidden'"
                        :align="item.align"
                        :label="item.label"
                        :width="item.style.width"
                        :key="item.label+index">
                    <template slot-scope="scope">
                        <!--<template  v-for="(item2, index2) in current.components['template'+scope.$index]">
                            <div :is="'important2'" v-if="item2.name==item.name" :dataAll="{current:item2}" ></div>
                        </template>-->
                        <template  v-for="(item2, index2) in current.components['template'+scope.$index]">
                            <div :key="item2.system_id+'_'+index2" :is="'important2'" v-if="item2.name==item.name" :dataAll="{current:item2}" ></div>
                        </template>
                          <!--  <div v-if="item.type == 'ComponentsInput'">
                                {{scope.row[item.name]}}
                            </div>
                            <div v-else>
                                {{scope.row[item.name]}}
                            </div>-->
                    </template>
                </el-table-column>
            </template>
            <el-table-column
                    label="状态"
                    fixed="right">
                <template slot-scope="scope">
                    <span v-if="scope.row.save_state==''">待上传</span>
                    <i class="el-icon-loading" v-if="scope.row.save_state!=''&&scope.row.save_state==0"></i>
                    <i class="el-icon-success" v-if="scope.row.save_state==1"></i>
                    <i class="el-icon-error" v-if="scope.row.save_state==-1"></i>
                    <i class="el-icon-error" v-if="scope.row.save_state==-2"></i>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"  :current-page="current.page_page" :emelent-page-sizes="[10, 20, 50, 100]" :emelent-page-size="current.page_rows" background layout="total, sizes, prev, pager, next, jumper" :total="current.page_total">
        </el-pagination>
        <div style="width: 100%;padding-top: 10px" >
            <div style="float: left;width: 70px">
                总进度:
            </div>
            <div style="float: left;width: 300px">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="progress" status="success"></el-progress>
            </div>
            <div style="float: left;width: 120px">
                尚未保存:{{current.value.length - current.success_num - current.fail_num}}
            </div>
            <div style="float: left;width: 120px">
                保存成功:{{current.success_num}}
            </div>
            <div style="float: left;width: 120px">
                保存失败:{{current.fail_num}}
            </div>
            <div style="float: left;width: 120px">
                预计失败:{{current.estimate_fail_num}}
            </div>
            <div style="float: right">
                <el-button type="primary" @click="check()" v-if="current.btn_check" >校验</el-button>
            </div>
            <div style="float: right">
                <el-button type="primary" @click="save()" v-if="current.btn_save" >保存</el-button>
            </div>
            <div style="clear: both"></div>
        </div>
    </el-dialog>

</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";
    @Component
    export default class HelloWorld extends myVue {
        my_open(){
            this.current.btn_save=true
            this.current.open()
        }
        my_close(){
            this.current.close()
        }
        get progress (){
            let progress2 = 0
            if (this.current.value.length !== 0) {
                progress2 = Math.ceil((this.current.success_num + this.current.fail_num )* 100 / this.current.value.length)
            }
            return progress2
        }
        get tableData(){
            let newList = []
            let length = this.current.value.length
            this.current.page_total = length
            let index = this.current.page_rows * (this.current.page_page - 1)
            if (length < index) {
                index = 0
            }
            for (let i = 0; i < this.current.page_rows; i++) {
                if (length > index + i) {
                    newList.push(this.current.value[index + i])
                }
            }
            return newList
        }

        download () {
            utils.myDownload({fileName: this.current.template_name, apiName_download: this.current.template_url})
        }
        handleSizeChange (val:any) {         // 更新查询的行数
            this.current.page_rows = val
        }
        handleCurrentChange (val:any) {            // 更新查询的页数
            this.current.page_page = val
        }
        handleRemove (file:any, fileList:any) {
            this.current.fileList = []
            for (let l = 0; l < fileList.length; l++) {
                this.current.fileList.push(fileList[l])
            }
        }
        handlePreview (file:any) {
        }
        su (response:any, file:any, fileList:any) {
            this.current.success_num = 0
            this.current.fail_num = 0
            this.current.estimate_fail_num = 0
            var params = new URLSearchParams()
            let setting = []
            for(let i=0;i<this.current.components.template.length;i++){
                setting.push( { type: "String",copy: true,name: this.current.components.template[i].label, field: this.current.components.template[i].name})
            }
            this.current.sett.setting = setting
            this.current.sett.num = 2
            this.current.sett.auto = true
            params.append("set", JSON.stringify(this.current.sett))
            params.append("url", file.response.list[0].url)
            let that = this
            utils.my_post({apiName: "/api/execl/readExecl",
                params: params,
                ok: (json:any, dataAll:any) => {
                    this.current.value = json
                    if(that.current.initCheck){
                        that.check ()
                    }
                }})
        }
        check () {
            var params = new URLSearchParams()
            let that = this
            params.append("json_batch", this.current.valueFormat())
            utils.my_post({api:{url: this.current.data.checkUrl},params: params,
                ok: (json:any, dataAll:any) => {
                    that.progressBarCheck({okList:json.okList,errList:json.errList})
                },
                err: (json:any, dataAll:any) => {
                    that.progressBarCheck({okList:json.okList,errList:json.errList})
                }})
        }
        progressBarCheck(obj:any){
            let errList = obj.errList;
            for(let i = 0; i < errList.length; i++){
                if(this.current.value[errList[i]].save_state != -2){
                    this.current.estimate_fail_num = this.current.estimate_fail_num + 1
                }
                this.current.value[errList[i]].save_state = -2
            }
        }
        save () {
            this.current.btn_save = false
            let oldValue = JSON.parse(this.current.valueFormat())
            let newList = []
            for (let i = 0; i < oldValue.length; i++) {
                oldValue[i].index_123=i;
                newList.push(oldValue[i])
            }
            var params = new URLSearchParams()
            params.append("json_batch", JSON.stringify(newList))
            let that = this
            utils.my_post({apiName:this.current.apiName_save,
                params: params,
                ok: (json:any, dataAll:any) => {
                    this.reQuery()
                    that.progressBar({okList:json.okList,errList:json.errList})
                },err: (json:any, dataAll:any) => {
                    that.progressBar({okList:json.okList,errList:json.errList})
                }})
        }
        progressBar(obj:any){
            let okList = obj.okList;
            let errList = obj.errList;
            for(let i = 0; i < okList.length; i++){
                if(this.current.value[okList[i]].save_state != 1){
                    this.current.success_num = this.current.success_num + 1
                }
                this.current.value[okList[i]].save_state = 1
            }
            for(let i = 0; i < errList.length; i++){
                if(this.current.value[errList[i]].save_state != -1){
                    this.current.fail_num = this.current.fail_num + 1
                }
                this.current.value[errList[i]].save_state = -1
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>