<template>
    <div>
        <!--编辑-->
        <template  v-if="current.show_type=='编辑'">
        <el-upload
                ref="uploadxls"
                :style="current.style"
                :class="current.class"
                :limit="current.limit"
                :action="current.upload_url"
                :on-remove="su"
                :on-success="su"
                :on-change="current.isCompress? current.compress:current.compress_no"
                :auto-upload="current.isCompress? false:true"
                multiple
                :data="{name:current.name,dir:current.dir,type:current.checkTypeName}"
                :file-list="current.value">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">{{current.msg}}</div>
        </el-upload>
        </template>
        <!--详情-->
        <template  v-else-if="current.show_type=='详情'">
            <div @click="Download(item)" onmouseover="this.style.color='#65CEA7';" onMouseOut="this.style.color='#606266'" :key="item.system_id+'_'+index"  v-for="(item, index) in current.value">{{item.name}}</div>
        </template>
        <template  v-else-if="current.show_type=='查看'">
            <div @click="openUrl(item)" onmouseover="this.style.color='#65CEA7';" onMouseOut="this.style.color='#606266'" :key="item.system_id+'_'+index"  v-for="(item, index) in current.value">{{item.name}}</div>
        </template>
    </div>

</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";
    @Component
    export default class HelloWorld extends myVue {
        get srcList(){
            let list =[]
            for(let i=0;i<this.current.value.length;i++){
                list.push('/api/'+this.current.value[i].url)
            }
            return list
        }
        Download(file:any) {
            utils.myDownload({fileName: file.name, apiName_download: file.url})
        }
        openUrl(file:any) {
            utils.myOpen({fileName: file.name, apiName_download: file.url})
        }
        handlePictureCardPreview(fileObj: any, ratio: any, callback: any) {
            const _that:any = this
            const file:any = fileObj
            const _file:any = file
            const isLt10M = file.size / 1024 / 1024 < 20
            if (!isLt10M) {
                utils.myMessage({message:"上传图片大小不能超过 20M!"})
                return false
            } else {
                _that.current.dialogImageUrl = URL.createObjectURL(file.raw)
                utils.compress(file.raw, function (val:any) {
                    let i = _that.$refs.uploadxls.uploadFiles.length
                    var file = _that.blobToFile(val, _that.$refs.uploadxls.uploadFiles[i - 1].name);
                    file.lastModified = _file.lastModified
                    file.percentage = _file.percentage
                    file.status = _file.status
                    file.uid = _file.uid
                    _that.$refs.uploadxls.uploadFiles[i - 1].raw = file
                    _that.$refs.uploadxls.uploadFiles[i - 1].size = file.size
                    _that.$refs.uploadxls.submit()
                }, callback)
            }
        }
        handleRemove (file:any, fileList:any) {
            this.current.value = []
            for (let l = 0; l < fileList.length; l++) {
                this.current.value.push(fileList[l])
            }
        }
        handlePreview (file:any) {
            this.current.dialogImageUrl = file.url;
        }
        su (response:any, file:any, fileList:any) {
            let newValue:any[] =[]
            if(utils.isNull(fileList)){
                this.current.value = newValue
                return
            }
            for (let l = 0; l < fileList.length; l++) {
                if (fileList[l].response && fileList[l].response.list && fileList[l].response.list[0].url) {
                    newValue.push({
                        "url": "/api/"+fileList[l].response.list[0].url,
                        "name": fileList[l].response.list[0].name
                    })
                }else{
                    newValue.push(fileList[l])
                }
            }
            this.current.value = newValue
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>