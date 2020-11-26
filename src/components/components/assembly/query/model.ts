import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyQuery extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"查询组件",
            title:"查询",
            system_id:"query",
            model_style:{
                query:{
                    width: "100%",
                }
            }
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _queryShow: boolean = true;
    get queryShow(): boolean {
        return this._queryShow;
    }
    set queryShow(value: boolean) {
        this._queryShow = value;
    }

    /**************方法****************/
    //获取值
    getEditValue(page: Layout) {
        let returnData:{ [key: string]: any} = {}
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                return this.components[key][i].setEditValue()
            }
        }
        return {}
    }
    //初始化值
    initValue() {
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].initValue()
            }
        }
        console.log(utils.getPage().name)
        if(utils.getStore().parameter[utils.getPage().name]){
            console.log(utils.getStore().parameter[utils.getPage().name].query)
            utils.getStore().parameter[utils.getPage().name].query
            for(let key in this.components){
                for(let i=0;i<this.components[key].length;i++){
                    return this.components[key][i].setFromValue(utils.getStore().parameter[utils.getPage().name].query)
                }
            }
        }

    }
    initAjax() {
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].initAjax()
            }
        }
    }

}
