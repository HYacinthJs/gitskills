<template>
    <div id="uploadImage" :class="{hide:current.hideUpload}">
        <!--编辑-->
        <template v-if="current.show_type=='编辑'">
            <el-upload
                    ref="uploadxls"
                    v-loading="current.loading"
                    :style="current.style"
                    :on-change="current.isCompress? compress:current.compress_no"
                    :class="{hide:current.hideUpload}"
                    :limit="current.limit"
                    :action="current.upload_url"
                    :on-remove="su"
                    list-type="picture-card"
                    :before-upload="beforeAvatarUpload"
                    :on-success="su"
                    :auto-upload="current.isCompress? false:true"
                    :multiple="current.multiple"
                    :data="{name:current.name,dir:current.dir,type:current.checkTypeName}"
                    :file-list="current.value">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                    <div class="base_img">
                        {{file.text}}
                    </div>
                    <span class="el-upload-list__item-actions">
                <div class="flag_img">{{file.text}}</div>
                <span class="el-upload-list__item-preview" @click="ShowImg(file)">
                    <i class="el-icon-zoom-in"></i>
                </span>
                <span v-if="current.btn_show" class="el-upload-list__item-delete" @click="Download(file)">
                    <i class="el-icon-download"></i>
                </span>
                <span v-if="current.btn_show" class="el-upload-list__item-delete" @click="deleteImg(file)">
                    <i class="el-icon-delete"></i>
                </span>
                <span v-if="current.btn_show" class="el-upload-list__item-delete" @click="editImg(file)">
                    <i class="el-icon-edit"></i>
                </span>

            </span>
                </div>
                <div slot="tip" class="el-upload__tip">{{current.msg}}</div>
            </el-upload>
            <el-dialog :modal=false :visible.sync="current.img_show">
                {{current.file_ol.text}}
                <img width="100%" :src="current.file_ol.url" alt="">
            </el-dialog>
            <el-dialog :modal=false :visible.sync="current.text_show">
                <el-input v-model="current.file_ol.text"></el-input>
                <span slot="footer" class="dialog-footer">
        </span>
            </el-dialog>
        </template>
        <!--详情-->
        <template v-else-if="current.show_type=='详情'">
            <el-image fit="contain" style="max-width: 300px; max-height: 300px" :preview-src-list="srcList"
                      :src="item.url" :key="item.system_id+'_'+index" v-for="(item, index) in current.value"></el-image>
        </template>
    </div>

</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component} from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";   

    @Component
    export default class HelloWorld extends myVue {
        get srcList() {
            let list = []
            for (let i = 0; i < this.current.value.length; i++) {
                list.push(this.current.value[i].url)
            }
            return list
        }

        ShowImg(file: any) {
            this.current.file_ol = file
            this.current.img_show = true;
        }

        Download(file: any) {
            utils.myDownload({fileName: file.name, apiName_download: file.url})
        }

        handlePictureCardPreview(fileObj: any, ratio: any, callback: any) {
            const _that: any = this
            const file: any = fileObj
            const _file: any = file
            const isLt10M = file.size / 1024 / 1024 < 20
            if (!isLt10M) {
                utils.myMessage({message: "上传图片大小不能超过 20M!"})
                return false
            } else {
                _that.dialogImageUrl = URL.createObjectURL(file.raw)
                utils.compress(file.raw, function (val: any) {
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
        compress(file:any,fileList:any){
        this.current.hideUpload = fileList.length >= this.current.limit;
        }
        beforeAvatarUpload(file:any) {
            this.current.loading = true
        }
        su(response: any, file: any, fileList: any) {
            this.current.loading = false
            this.current.hideUpload = fileList.length >= this.current.limit;
            let newValue: any[] = []
            if (utils.isNull(fileList)) {
                this.current.value = newValue
                return
            }
            for (let l = 0; l < fileList.length; l++) {
                if (fileList[l].response && fileList[l].response.list && fileList[l].response.list[0].url) {
                    newValue.push({
                        "url": "/api/" + fileList[l].response.list[0].url,
                        "name": fileList[l].response.list[0].name
                    })
                } else {
                    newValue.push(fileList[l])
                }
            }
            this.current.value = newValue
        }

        deleteImg(file: any) {
            let newValue: any[] = []
            for (let l = 0; l < this.current.value.length; l++) {
                if (file.name != this.current.value[l].name) {
                    newValue.push(this.current.value[l])
                }
            }
            this.current.value = newValue
            this.current.hideUpload = newValue.length >= this.current.limit;
        }

        editImg(file: any) {
            this.current.text_show = true;
            this.current.file_ol = file;
        }
    }
</script>

<style scoped lang="scss">
    @import "style";

    /*#uploadImage > div > :nth-child(2) {
        background-color: #fbfdff;
        border: 1px dashed #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        line-height: 120px;
        vertical-align: top;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(1) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(1) > div > span {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        cursor: default;
        text-align: center;
        color: #fff;
        opacity: 0;
        font-size: 20px;
        background-color: rgba(0, 0, 0, .5);
        -webkit-transition: opacity .3s;
        transition: opacity .3s;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(2) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(3) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(4) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(5) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(6) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(7) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(8) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(9) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(10) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(11) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(12) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(13) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(14) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(15) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(16) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(17) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(18) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(19) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(20) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(21) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(22) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(23) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(24) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(25) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(26) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(27) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(28) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(29) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(30) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(31) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(32) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(33) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(34) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(35) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(36) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(37) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(38) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(39) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > :nth-child(40) {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > li > div > :nth-child(3) {
        position: absolute;
        width: 120px;
        height: 120px;
        left: 0;
        top: 0;
        cursor: default;
        text-align: center;
        color: #fff;
        opacity: 0;
        font-size: 20px;
        background-color: rgba(0, 0, 0, .5);
        -webkit-transition: opacity .3s;
        transition: opacity .3s;
    }

    #uploadImage > :nth-child(1) > :nth-child(1) > li > div > :nth-child(1) {
        width: 120px;
        height: 120px;
    }*/
</style>
