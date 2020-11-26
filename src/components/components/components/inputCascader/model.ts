import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputCascader extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"联级下拉组件",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _options: any[] = [];                            //组件描述
    private _value_bf: any = null;                            //备份值
    private _show_all_levels:boolean =false
    private _change_on_select:boolean =false;
    valueFormat(){
        if(utils.isNotNull(this.value)){
            return  this.value[this.value.length - 1]
        }else{
            return ""
        }
    }
    initValueFormat(data:any){
        if(utils.isNotNull(this.options)){
            this.value = utils.getCascaderPathAll(this.options, data)

        }else{
            this.value_bf = data
        }

    }
    setAjaxOK(data :any){
        this.options=data
        if(utils.isNotNull(this.value_bf)){
            this.value = utils.getCascaderPathAll(this.options, this.value_bf)
            this.value_bf=""
        }
    }
    setAjaxERR(data :any){
        this.options=[]
        this.value = this.value_default;
    }
    associated(){
        this.initAjax()
    }

    get options(): any[] {
        return this._options;
    }

    set options(value: any[]) {
        this._options = value;
    }

    get value_bf(): any {
        return this._value_bf;
    }

    set value_bf(value: any) {
        this._value_bf = value;
    }

    get change_on_select(): boolean {
        return this._change_on_select;
    }

    set change_on_select(value: boolean) {
        this._change_on_select = value;
    }

    get show_all_levels(): boolean {
        return this._show_all_levels;
    }

    set show_all_levels(value: boolean) {
        this._show_all_levels = value;
    }
}
