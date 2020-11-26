import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsText extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"文本组件",
            // style:{width: "193px",font:"14px"},
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
}
