import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputUpload extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"上传组件",
            value_default:[]
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _dialogImageUrl: any = null;                                                        //ajax
    private _uploadFiles: any[] = [];                                                        //ajax
    private _upload_url: string = "/api/upload/defaultUpload";                                                        //ajax
    private _limit: number = 3;                                                        //ajax
    private _isCompress: boolean = false;                                                        //ajax
    private _checkTypeName: string = "";                                                        //ajax
    private _dir: string = "";                                                        //ajax

    valueFormat(){
        let filePath = []
        if (utils.isNotNull(this.value)) {
            for (let l = 0; l < this.value.length; l++) {
                if (this.value[l].response && this.value[l].response.list && this.value[l].response.list[0].url) {
                    let url = this.value[l].response.list[0].url
                    let url2 = url.substr(0,5)
                    if("/api\\" == url2 ){
                        url = url.substr(4)
                    }
                    if( "/api/" == url2 ){
                        url = url.substr(5)
                    }
                    filePath.push({"url": url, "name": this.value[l].response.list[0].name})
                } else {
                    let url = this.value[l].url
                    let url2 = url.substr(0,5)
                    if("/api\\" == url2 ){
                        url = url.substr(4)
                    }
                    if( "/api/" == url2 ){
                        url = url.substr(5)
                    }
                    filePath.push({"url": url, "name": this.value[l].name})
                }
            }
        }
        return JSON.stringify(filePath)
    }
    initValueFormat(data:any){
        let newData =  JSON.parse(data)
        if(utils.isNotNull(newData)){
            for(let i=0;i<newData.length;i++){
                newData[i]['url']="/api/"+newData[i]['url']
            }
        }

        this.value = newData
    }
    compress(file:any) {
        let _that = this
        let _file = file
        let isLt10M = file.size / 1024 / 1024 < 20
        let isLt150K = file.size / 1024 < 200
        let mykb = file.size / 1024
        let myratio=1
        if(mykb<1024){
            myratio=1
        }else if(mykb<10240){
            myratio=3
        }else {
            myratio=5
        }
        if (!isLt10M) {
            utils.myMessage({message:"上传图片大小不能超过 20M!"})
            return false
        } else {
            //大于150K 进行压缩未完成
            /*if (!isLt150K) {
                this.dialogImageUrl = URL.createObjectURL(file.raw)
                utils.compress(file.raw,myratio, function(val:any) {
                    let i = _that.uploadFiles.length
                    var file = utils.blobToFile(val, _that.uploadFiles[i-1].name);
                    file.lastModified =  _file.lastModified
                    file.percentage =  _file.percentage
                    file.status =  _file.status
                    file.uid =  _file.uid
                    _that.uploadFiles[i-1].raw = file
                    _that.uploadFiles[i-1].size = file.size
                    _that.submit()
                })
            }else{
                _that.submit()
            }*/
        }
    }
    compress_no(){
    }


    get upload_url(): string {
        return this._upload_url;
    }

    set upload_url(value: string) {
        this._upload_url = value;
    }

    get isCompress(): boolean {
        return this._isCompress;
    }

    set isCompress(value: boolean) {
        this._isCompress = value;
    }

    get limit(): number {
        return this._limit;
    }

    set limit(value: number) {
        this._limit = value;
    }

    get dialogImageUrl(): any {
        return this._dialogImageUrl;
    }

    set dialogImageUrl(value: any) {
        this._dialogImageUrl = value;
    }

    get uploadFiles(): any[] {
        return this._uploadFiles;
    }

    set uploadFiles(value: any[]) {
        this._uploadFiles = value;
    }

    get checkTypeName(): string {
        return this._checkTypeName;
    }

    set checkTypeName(value: string) {
        this._checkTypeName = value;
    }

    get dir(): string {
        return this._dir;
    }

    set dir(value: string) {
        this._dir = value;
    }
}
