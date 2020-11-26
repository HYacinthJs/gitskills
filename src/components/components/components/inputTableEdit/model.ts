import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputTableEdit extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"可编辑表格组件",
            value_default:[],
            style : {width: "1500px"}
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _addBtn: boolean = true;                        //返回值是否是json
    private _history_show: boolean = true;                        //返回值是否是json
    private _reverse: boolean = false;
    private _history_name: string = "";

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
    }

    setAjaxOK(data :any){
        this.value = data.list
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
        return JSON.stringify(data)
    }

    get addBtn(): boolean {
        return this._addBtn;
    }

    set addBtn(value: boolean) {
        this._addBtn = value;
    }

    get history_show(): boolean {
        return this._history_show;
    }

    set history_show(value: boolean) {
        this._history_show = value;
    }

    get reverse(): boolean {
        return this._reverse;
    }

    set reverse(value: boolean) {
        this._reverse = value;
    }

    get history_name(): string {
        return this._history_name;
    }

    set history_name(value: string) {
        this._history_name = value;
    }

}
