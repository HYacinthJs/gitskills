import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputSelectMultiple extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"下拉选择组件",
            collapse_tags:false,
            value_default:[],
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _collapse_tags: boolean = false;                            //组件描述
    private _props_label: string = "label";                            //组件描述
    private _props_value: string = "value";                            //组件描述
    private _options: any[] = [];                            //组件描述

    valueFormat(): any {
        return JSON.stringify(this.value)
    }
    initValueFormat(data:any){
        this.value = JSON.parse(data)
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
    get collapse_tags(): boolean {
        return this._collapse_tags;
    }
    set collapse_tags(collapse_tags: boolean) {
        this._collapse_tags = collapse_tags;
    }

    get props_label(): string {
        return this._props_label;
    }
    set props_label(props_label: string) {
        this._props_label = props_label;
    }
    get props_value(): string {
        return this._props_value;
    }
    set props_value(props_value: string) {
        this._props_value = props_value;
    }
    get options(): any[] {
        return this._options;
    }
    set options(options: any[]) {
        this._options = options;
    }
}
