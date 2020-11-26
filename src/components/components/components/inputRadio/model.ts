import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputRadio extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"单选框",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }

    private _options:[] = [];
    private _props_value:string="value";
    private _props_label:string="label";
    private _props_disabled:boolean=false;


    get options(): [] {
        return this._options;
    }

    set options(value: []) {
        this._options = value;
    }

    get props_value(): string {
        return this._props_value;
    }

    set props_value(value: string) {
        this._props_value = value;
    }

    get props_label(): string {
        return this._props_label;
    }

    set props_label(value: string) {
        this._props_label = value;
    }

    get props_disabled(): boolean {
        return this._props_disabled;
    }

    set props_disabled(value: boolean) {
        this._props_disabled = value;
    }
}
