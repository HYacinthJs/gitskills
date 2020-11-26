import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputHidden extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"隐藏组件",
            show:false
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
}
