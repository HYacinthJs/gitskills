import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputTimeline extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"时间线组件",
            value_default:[]
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _reverse: boolean = false;
    private _value_now: {} = {};

    get reverse(): boolean {
        return this._reverse;
    }

    set reverse(value: boolean) {
        this._reverse = value;
    }
    initValueFormat(data:any){
        let oldData = JSON.parse(data)
        let newData:any[] = []
        if(oldData.length>0&&oldData[oldData.length-1].system_no_f==this.system_no_f){
            for(let i=0;i<oldData.length;i++){
                if(i!=(oldData.length-1)){
                    newData.push(oldData[i])
                }else{
                    this.value_now = oldData[i]
                }
            }
        }else{
            newData = oldData
        }
        this.value = newData
    }
    valueFormat(): any {
        let data = utils.lodash.cloneDeep(this.value)
        if(utils.isNotNull(this.value_now)){
            this.value_now['system_no_f'] = this.system_no_f
            data.push(this.value_now)
        }

        return JSON.stringify(data)
    }

    get value_now(): {} {
        return this._value_now;
    }

    set value_now(value: {}) {
        this._value_now = value;
    }
}
