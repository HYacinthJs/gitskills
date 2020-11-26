import {Dialog} from "@/components/class/Dialog";
import * as utils from "@/components/util/utils";
export class DialogDownload extends Dialog {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let that = this
        let defaultModel = {
            componentDescription:"下载弹出框",
            title:'下载',
            msg :'是否确认下载？',
            tableName : 'content'
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        if(utils.isUndefined(data.toolBtn)){
            this.toolBtn = [
                {label:"取消",show:true,click:function(data:any){
                        that.show = false
                    }},
                {label:"下载",type:"primary",click:function(data:any){
                        that.show = false
                        let param = that.getParams()
                        console.log(param)
                    if("直接下载"==that.downloadType){
                        utils.myDownload({ apiName_download: that.apiName_download,param:param})
                    }else if("下载"==that.downloadType){
                        utils.myPostFile({ apiName: that.apiName_download,params:param})
                    }else if("查看"==that.downloadType){
                        utils.myPostFileOnly({ apiName: that.apiName_download,params:param})
                    }else {
                        utils.myDownload({ apiName_download: that.apiName_download,param:param})
                    }
                    }},
            ]
        }
    }
    /**************属性****************/
    private _msg: string = "";                            //组件描述
    private _apiName_download_external: string = "delete";                            //组件描述
    private _apiName_download: string = "delete";                            //组件描述
    private _toolBtn: any[] = [];                                    //按钮
    private _close_dialog: string[] = [];                                    //按钮
    private _queryName_d: string = '';                                    //按钮
    private _downloadType: string = "直接下载";                                    //按钮
    private _param_type: string = "id";                                    //按钮

    /**************方法****************/
    getParams(){

        let param :{ [key: string]: any}={}
        if(this.param_type=='id'){
                let content = utils.getPage().getComponents({system_id:this.tableName})
                param[content.primaryKey]=content.selectRowOnly[content.primaryKey]
        }else if(this.param_type=='传参下载'){
            if(this.queryName_d !=""){
                let query =  utils.getPage().getComponents({system_id:this.queryName_d})
                if(utils.isNotNull(query)){
                    param=query.getEditValue()
                }
            }
        }

        param['token']= utils.getloginUser().token
        return param
    }
    /**************存取器****************/
    get msg(): string {
        return this._msg;
    }
    set msg(msg: string) {
        this._msg = msg;
    }

    get param_type(): string {
        return this._param_type;
    }

    set param_type(value: string) {
        this._param_type = value;
    }

    get apiName_download(): string {
        return this._apiName_download;
    }

    set apiName_download(value: string) {
        this._apiName_download = value;
    }
    get toolBtn(): any[] {
        let newToolBtn:any[] =[]
        if(utils.isNotNull(this._toolBtn)) {
            for (let i = 0; i < this._toolBtn.length; i++) {
                newToolBtn.push(this._toolBtn[i])
            }
        }
        return newToolBtn;
    }
    set toolBtn(toolBtn: any[]) {
        this._toolBtn = toolBtn;
    }


    get queryName_d(): string {
        return this._queryName_d;
    }

    set queryName_d(value: string) {
        this._queryName_d = value;
    }

    get close_dialog(): string[] {
        return this._close_dialog;
    }

    set close_dialog(value: string[]) {
        this._close_dialog = value;
    }

    get downloadType(): string {
        return this._downloadType;
    }

    set downloadType(value: string) {
        this._downloadType = value;
    }
}
