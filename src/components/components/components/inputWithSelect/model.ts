import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputWithSelect extends Layout {


    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"下拉组件",
            collapse_tags:true,
            style:{width: "310px"}
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    setAjaxOK(data :any){
        this.options=data
    }
    setAjaxERR(data :any){
        this.options=[]
        this.value = this.value_default;
    }
    associated(){
        this.initAjax()
    }
    private _collapse_tags: boolean = true;
    private _options: any[] = [];
    private _inputName: string = "";
    private _selectName: string = "";
    private _props_label: string = "label";                            //组件描述
    private _props_value: string = "value";                            //组件描述
    valueFormat(){
        return  JSON.stringify( {"selectvalue": this.selectName,"keysname":this.value})
    }
    get collapse_tags(): boolean {
        return this._collapse_tags;
    }
    set collapse_tags(collapse_tags: boolean) {
        this._collapse_tags = collapse_tags;
    }
    get options(): any[] {
        return this._options;
    }
    set options(value: any[]) {
        this._options = value;
    }
    get selectName(): string {
        return this._selectName;
    }

    set selectName(value: string) {
        this._selectName = value;
    }
    get inputName(): string {
        return this._inputName;
    }

    set inputName(value: string) {
        this._inputName = value;
    }
    get props_label(): string {
        return this._props_label;
    }

    set props_label(value: string) {
        this._props_label = value;
    }
    get props_value(): string {
        return this._props_value;
    }

    set props_value(value: string) {
        this._props_value = value;
    }
}
