import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputTableSelect2 extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"表格组件",
            value_default:[],
            style : {width: "930px"}
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    associated(){
        this.initAjax()
    }
    setAjaxOK(data :any){
        this.options=data.j_json
    }
    setAjaxERR(data :any){
        this.options=[]
        this.value = this.value_default;
    }

    private _options: any[] = [];                            //组件描述


    get options(): any[] {
        return this._options;
    }

    set options(value: any[]) {
        this._options = value;
    }
}
