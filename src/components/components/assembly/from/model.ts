import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyFrom extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"from表单",
            name:"from",
            label:"基础",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }

    private _inline: boolean = true;                            //组件描述
    //设置校验提示信息
    setValidateString(data: any[]) {
        let err= false;
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].validate_string=""
                for(let l=0;l<data.length;l++){
                    if(this.components[key][i].name==data[l].field){
                        err = true
                        this.components[key][i].validate_string=data[l].message
                    }
                }
            }
        }
        if(err){
            return this.name
        }else{
            return ""
        }
    }
    //获取校验信息
    getRulesValue() {
        let val:{ [key: string]: any}={}
        if(!this.components){
            return val
        }
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                if(this.components[key][i].show){
                    val[this.components[key][i].name]=super.components[key][i].rules
                }
            }
        }
        return val;
    }
    //获取值
    setEditValue() {
        let val:{ [key: string]: any}={}
        if(!this.components){
            return val
        }
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                val[this.components[key][i].name]=super.components[key][i].valueFormat()
            }
        }
        return val;

    }
    initComponentsDialogName(data:{ [key: string]: any}) {
        if(utils.isNull(data)){
            return ;
        }
        this.dialog_system_id = data.system_id
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].dialog_system_id = data.system_id
            }
        }
    }
    setFromValue(data:{ [key: string]: any}) {
        if(utils.isNull(data)){
            return ;
        }
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                if(utils.isNotNull(data[this.components[key][i].name])&&this.components[key][i].isSetValue){
                    this.components[key][i].initValueFormat( data[this.components[key][i].name])
                }else{
                    this.components[key][i].initValue()
                }
            }
        }
    }
    initValue() {
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].initValue()
            }
        }
    }
    initValidateString() {
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].initValidateString()
            }
        }
    }
    initAjax() {
        //不进行异步请求的组件（临时做法让如果有多个组件参数会有问题）
        let no = []
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                for(let l=0;l<this.components[key][i].associated_notice.length;l++){
                    no.push(this.components[key][i].associated_notice[l])
               }
            }
        }

        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                let bool=true
                for(let l=0;l<no.length;l++){
                    if(no[l]==this.components[key][i].system_id){
                        bool=false
                    }
                }
                if(bool){
                    this.components[key][i].initAjax()
                }
            }
        }
    }

    get inline(): boolean {
        return this._inline;
    }
    set inline(inline: boolean) {
        this._inline = inline;
    }
}
