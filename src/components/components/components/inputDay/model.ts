import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputDay extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"日期组件",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _dateFormat: string = "yyyy-MM-dd";
    private _dateValueFormat: string = "yyyy-MM-dd";
    private _day_auto: boolean = false;
    private _day_auto_type: string = '当天';

    initValue() {
        this.validate_string = "";
        this.value = this.value_default;
        if(this.day_auto){
            let day_default = ""
            if(this.day_auto_type=='当天'){
                let day = new Date()
                let newDay = new Date()
                newDay.setFullYear(day.getFullYear() + 0)
                newDay.setMonth(day.getMonth() + 0)
                newDay.setDate(day.getDate() + 0)
                day_default = newDay.getFullYear()+"-"+(newDay.getMonth()+1)+"-"+newDay.getDate();
            }else if(this.day_auto_type=='上个月第一天'){
                let day = new Date()
                day.setDate(0);
                day_default = day.getFullYear()+"-"+(day.getMonth()+1)+"-01";
            }else if(this.day_auto_type=='上个月最后一天'){
                let day = new Date()
                day.setDate(0);
                day_default = day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate();
            }else if(this.day_auto_type=='下周一'){
                let Stamp = new Date();
                Stamp.setDate(Stamp.getDate() + (7-Stamp.getDay()+1));
                day_default = Stamp.getFullYear()+"-"+(Stamp.getMonth()+1)+"-"+Stamp.getDate();
            }else if(this.day_auto_type=='下周三'){
                let Stamp = new Date();
                Stamp.setDate(Stamp.getDate() + (7-Stamp.getDay()+3));
                day_default = Stamp.getFullYear()+"-"+(Stamp.getMonth()+1)+"-"+Stamp.getDate();
            }else if(this.day_auto_type=='上周一'){
                let Stamp = new Date();
                Stamp.setDate(Stamp.getDate() + (7-Stamp.getDay()+1-7-7));
                day_default = Stamp.getFullYear()+"-"+(Stamp.getMonth()+1)+"-"+Stamp.getDate();
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
