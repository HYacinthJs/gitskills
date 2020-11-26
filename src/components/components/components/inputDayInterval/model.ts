import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputDayInterval extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"日期组件",
            style: {width: "400px"},
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _dateFormat: string = "yyyy-MM-dd";
    private _dateValueFormat: string = "yyyy-MM-dd";
    private _date_type : string = "datetimerange";
    private _start_label : string = "";
    private _end_label : string = "";

    get dateFormat(): string {
        return this._dateFormat;
    }

    set dateFormat(value: string) {
        this._dateFormat = value;
    }


    get start_label(): string {
        return this._start_label;
    }

    set start_label(value: string) {
        this._start_label = value;
    }

    get end_label(): string {
        return this._end_label;
    }

    set end_label(value: string) {
        this._end_label = value;
    }

    get date_type(): string {
        return this._date_type;
    }

    set date_type(value: string) {
        this._date_type = value;
    }

    get dateValueFormat(): string {
        return this._dateValueFormat;
    }

    set dateValueFormat(value: string) {
        this._dateValueFormat = value;
    }

}
