import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInput extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"输入组件",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
}
