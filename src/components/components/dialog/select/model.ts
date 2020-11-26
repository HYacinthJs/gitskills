import {Dialog} from "@/components/class/Dialog";
import * as utils from "@/components/util/utils";
export class DialogSelect extends Dialog {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let that = this
        let defaultModel = {
            componentDescription:"选择弹出框",
            title:'删除',
            tableName : 'content',
            msg :'是否确认删除？'
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        if(utils.isUndefined(data.toolBtn)){
            this.toolBtn = [
                {label:"取消",show:true,click:function(data:any){
                        that.show = false
                    }},
                {label:"确认",type:"primary",click:function(data:any){
                        let content = utils.getPage().getComponents({system_id:that.tableName})
                        let params = {}
                        if(that.valueModel=="批量"){
                            let json_batch = []
                            for(let i=0;i<content.selectRow.length;i++){
                                json_batch.push({id:content.selectRow[i][content.primaryKey]})
                            }
                            params = {
                                json_batch:JSON.stringify(json_batch)
                            }
                        }else if(that.valueModel=="单次"){
                            let json_batch = []
                            json_batch.push({id:content.selectRowOnly[content.primaryKey]})
                            params = {
                                json_batch:JSON.stringify(json_batch)
                            }
                        }else if(that.valueModel=="无数据"){
                            params = {}
                        }else if(that.valueModel == "货号"){
                            let json_batch = []
                            json_batch.push({id:content.selectRowOnly[content.primaryKey]})
                            params = {
                                json_batch:JSON.stringify(json_batch)
                            }
                        }else if(that.valueModel == "简单"){
                            params= {
                                id:content.selectRowOnly[content.primaryKey]
                            }
                        }else{
                            params= {
                                id:content.selectRowOnly[content.primaryKey]
                            }
                        }

                        utils.my_post({apiName:that.apiName_save,
                            params: params,
                            ok: (json:any, dataAll:any) => {
                            if(that.valueModel == "货号" || that.valueModel == "简单"){
                                content.Requery()
                            }else {
                                content.query()
                            }
                                that.show=false
                                for(let i=0;i<that.close_dialog.length;i++){
                                    let mydialog = utils.getPage().getComponents({system_id:that.close_dialog[i]})
                                    mydialog.show=false
                                }
                            }})
                }},
            ]
        }
    }
    /**************属性****************/
    private _msg: string = "";                            //组件描述
    private _apiName_save: string = "delete";                            //组件描述
    private _toolBtn: any[] = [];                                    //按钮
    private _close_dialog: string[] = [];                                    //按钮

    /**************方法****************/
    /**************存取器****************/
    get msg(): string {
        return this._msg;
    }
    set msg(msg: string) {
        this._msg = msg;
    }
    get apiName_save(): string {
        return this._apiName_save;
    }

    set apiName_save(value: string) {
        this._apiName_save = value;
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



    get close_dialog(): string[] {
        return this._close_dialog;
    }

    set close_dialog(value: string[]) {
        this._close_dialog = value;
    }
}
