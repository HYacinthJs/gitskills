import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyError extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"异常页面",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
}
