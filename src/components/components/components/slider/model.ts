import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsSlider extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"滑动组件",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _step: number = 33;
    private _marks: number = 1;

                                                   
    get step(): number {
        return this._step;
    }

    set step(value: number) {
        this._step = value;
    }

    get marks(): number {
        return this._marks;
    }

    set marks(value: number) {
        this._marks = value;
    }
}
