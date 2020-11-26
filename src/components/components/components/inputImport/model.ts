import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputImport extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"导入按钮组件",
            name:"queryBtn789789",
            import_name:"导入",
            label_show:false,
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _contentName: string = "content";                            //组件描述
    private _dialogName: string = "excel";                            //组件描述
    private _import_name: string = "导入";                            //组件描述

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

    get import_name(): string {
        return this._import_name;
    }

    set import_name(value: string) {
        this._import_name = value;
    }
}
