import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputAutocomplete extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"输入组件有联想功能",
            style:{width: "150px"}
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _options: any[] = [];
    private _props_value: string = "value";                            //组件描述
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


    get options(): any[] {
        return this._options;
    }

    set options(value: any[]) {
        this._options = value;
    }

    get props_value(): string {
        return this._props_value;
    }

    set props_value(value: string) {
        this._props_value = value;
    }
}
