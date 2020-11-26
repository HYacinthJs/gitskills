import {Layout} from "../../../class/Layout";
import * as utils from "../../../util/utils";
export class AssemblyHeader extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"标题头部组件",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
}
