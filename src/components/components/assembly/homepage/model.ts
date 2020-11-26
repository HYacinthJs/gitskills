import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyHomePage extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"首页",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    query() {
        let that = this
        utils.my_post({apiName:"query", params: {},
            ok: (json:any, dataAll:any) => {
                that.value=json.list
            }
        })
    }
}
