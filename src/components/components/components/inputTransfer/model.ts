import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputTransfer extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"输入组件",
            style:{width: "700px"},
            value_default:[]
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    setAjaxOK(data :any){
        let newOptions = []
        for (let i = 0; i < data.length; i++) {
            newOptions.push({key: data[i][this.props_value], label: data[i][this.props_label]})
        }
        this.options=newOptions
    }
    setAjaxERR(data :any){
        this.options=[]
    }
    valueFormat(){
        return  JSON.stringify( this.value)
    }
    /**
     * 组件描述
     */
    private _props_label: string = "label";
    //组件描述
    get props_label():  string  {
        return this._props_label;
    }
    //组件描述
    set props_label(value:  string ) {
        this._props_label = value
    }

    /**
     * 组件描述
     */
    private _props_value: string = "value";
    //组件描述
    get props_value():  string  {
        return this._props_value;
    }
    //组件描述
    set props_value(value:  string ) {
        this._props_value = value
    }
    /**
     * 选项
     */
    private _options: any[] = ["未选中", "选中"];
    //选项
    get options():  any[]  {
        return this._options;
    }
    //选项
    set options(value:  any[] ) {
        this._options = value
    }
    /**
     * 小标题
     */
    private _titles: any[] = ["未选中", "选中"];
    //小标题
    get titles():  any[]  {
        return this._titles;
    }
    //小标题
    set titles(value:  any[] ) {
        this._titles = value
    }
    /**
     * 子组件
     */
    private _filterable:boolean = true;
    //子组件
    get filterable():  boolean  {
        return this._filterable;
    }
    //子组件
    set filterable(value:  boolean ) {
        this._filterable = value
    }

}
