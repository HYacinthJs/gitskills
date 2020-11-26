import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputDownload extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"下载组件",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    initValueFormat(data:any){
        this.value = JSON.parse(data)
    }
}
