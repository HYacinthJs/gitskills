import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputTableSelect extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"表格组件",
            value_default:[],
            style : {width: "730px"}
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    setAjaxOK(data :any){
        this.value = data.list
    }
    setAjaxERR(data :any){
        this.value=[]
        this.value = this.value_default;
    }
    valueFormat(): any {
        let map:{ [key: string]: any} = {}
        for (let i = 0; i < this.value.length; i++) {
            let list = []
            for (let j = 0; j < this.value[i].operation.length; j++) {
                if (this.value[i].operation[j].state && (!this.value[i].operation[j].disabled)) {
                    list.push(this.value[i].operation[j].name)
                }
            }
            if (this.value[i].page.state && (!this.value[i].page.disabled)) {
                list.push(this.value[i].page.name)
            }
            if (utils.isNotNull(list)) {
                map[this.value[i].pageName] = list
            }
        }
        return JSON.stringify(map)
    }


}
