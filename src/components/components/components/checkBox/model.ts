import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsCheckBox extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"多选框组件",
            value:[
                {disabled: false,label: "添加",name: "add",state: false},
                {disabled: false,label: "修改",name: "edit",state: false},
                {disabled: false,label: "删除",name: "delete",state: false},
                {disabled: true,label: "下载",name: "download",state: true},
            ]
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    
}
