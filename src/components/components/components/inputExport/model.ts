import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputExport extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"导出按钮组件",
            name:"ExportBtnz789",
            label:"导出",
            label_show:false,
            style : {width: "100px"}
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _contentName: string = "content";                            //组件描述
    private _dialogName: string = "export";                            //组件描述

    get contentName(): string {
        return this._contentName;
    }

    set contentName(value: string) {
        this._contentName = value;
    }

    get dialogName(): string {
        return this._dialogName;
    }

    set dialogName(value: string) {
        this._dialogName = value;
    }
}
