import {Page} from "@/components/class/Page";
import * as utils from "@/components/util/utils";
export class PageMain extends Page {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"主布局",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
}
