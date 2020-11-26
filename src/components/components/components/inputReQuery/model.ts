import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputReQuery extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"重新查询按钮组件",
            name:"queryBtn789789",
            label:"查询",
            label_show:false,
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _contentName: string = "content";                            //组件描述
    private _label_query:  boolean =true;                            //组件描述

    get contentName(): string {
        return this._contentName;
    }

    set contentName(value: string) {
        this._contentName = value;
    }

    get label_query(): boolean {
        return this._label_query;
    }

    set label_query(value: boolean) {
        this._label_query = value;
    }
}
