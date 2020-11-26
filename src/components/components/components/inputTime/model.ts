import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputTime extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"时间组件",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
}
