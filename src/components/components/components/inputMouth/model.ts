import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputMouth extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"日期组件",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _dateFormat: string = "yyyy-MM";
    private _dateValueFormat: string = "yyyy-MM";
    private _day_auto: boolean = false;
    private _day_auto_type: string = '当月';

    initValue() {
        console.log("initValue----day")
        this.validate_string = "";
        this.value = this.value_default;
        if(this.day_auto){
            console.log("day_auto---")
            let day_default = ""
            if(this.day_auto_type=='当月'){
                let day = new Date()
                let newDay = new Date()
                newDay.setFullYear(day.getFullYear() + 0)
                newDay.setMonth(day.getMonth()-1 + 0)
                day_default = newDay.getFullYear()+"-"+(newDay.getMonth()+1)
            }
            this.value = day_default
        }
    }

    valueFormat(){
        if(utils.isNotNull(this.value)){
            return this.value
        }
        return ""
    }
    get dateFormat(): string {
        return this._dateFormat;
    }

    set dateFormat(value: string) {
        this._dateFormat = value;
    }

    get dateValueFormat(): string {
        return this._dateValueFormat;
    }

    set dateValueFormat(value: string) {
        this._dateValueFormat = value;
    }

    get day_auto(): boolean {
        return this._day_auto;
    }

    set day_auto(value: boolean) {
        this._day_auto = value;
    }

    get day_auto_type(): string {
        return this._day_auto_type;
    }

    set day_auto_type(value: string) {
        this._day_auto_type = value;
    }
}
