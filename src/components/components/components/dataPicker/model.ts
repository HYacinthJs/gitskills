import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsDataPicker extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"时间",
            label_width:"100px"
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
}
