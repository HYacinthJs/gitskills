import {Dialog} from "@/components/class/Dialog";
import * as utils from "@/components/util/utils";
export class DialogConfig extends Dialog {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"动态配置弹出框",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
}
