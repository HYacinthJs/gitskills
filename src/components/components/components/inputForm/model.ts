import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputForm extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"添加表单组件",
            value_default:[],
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _addBtn: boolean = true;                       //返回值是否是json
    private _editTr: boolean = true;                       //返回值是否是json
    private _addTrue: boolean = false;                       //返回值是否是json
    private _valueObj: any = {formInlineList:[]};                       //返回值是否是json


    initValue() {
        this.system_no =  this.version+"_"+utils.randomChar(5);
        this.validate_string = "";
        this.value = this.value_default;
        for(let key in this.components){
            if(key!="template"){
                this.components[key]=[]
            }
        }
    }
    add(){
        let newValue:any[] = JSON.parse(this.valueFormat())
        if(utils.isNull(newValue)){
            newValue = utils.lodash.cloneDeep(this.value)
        }
        newValue.push({})
        this.value=newValue
    }
    initCopyComponents(){
        let old = this.components["template"]
        this.setComponents({"template":old})
        for(let i=0;i<this.value.length;i++){
            this.copyComponents({system_no:this.system_no,number:i,value:this.value[i]})
        }
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].initAjax()
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
        if(this.addTrue){
            this.add()
        }
    }

    setAjaxOK(data :any){
        this.value = {
            formInlineList:data.list}

    }
    setAjaxERR(data :any){
        this.value=[]
        this.value = this.value_default;
    }
    valueFormat(): any {
        let data:any[]=[]
        if(!this.components){
            return JSON.stringify(data)
        }
        for(let key in this.components){
            if(key!="template"){
                let val:{ [key: string]: any}={}
                for(let i=0;i<this.components[key].length;i++){
                    val[this.components[key][i].name]=super.components[key][i].valueFormat()
                }
                data.push(val)
            }
        }
        this.valueObj = {formInlineList:this.value}
        return JSON.stringify(data)
    }

    get valueObj(): any {
        return this._valueObj;
    }

    set valueObj(value: any) {
        this._valueObj = value;
    }

    get addBtn(): boolean {
        return this._addBtn;
    }

    set addBtn(value: boolean) {
        this._addBtn = value;
    }

    get editTr(): boolean {
        return this._editTr;
    }

    set editTr(value: boolean) {
        this._editTr = value;
    }
    get addTrue(): boolean {
        return this._addTrue;
    }

    set addTrue(value: boolean) {
        this._addTrue = value;
    }
}
