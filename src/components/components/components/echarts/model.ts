import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputEcharts extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"echarts饼图",
            style:{width: "200px",height: "200px"}
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _my_echart: any = true;                            //组件描述

    get my_echart(): any {
        return this._my_echart;
    }

    set my_echart(value: any) {
        this._my_echart = value;
    }

    onclick(param:any){}
    initValue() {
        let  that = this
        setTimeout(function(){
            that.initEcharts()
        },1000);
    }
    initEcharts(){
        this.my_echart = utils.myEcharts.init(document.getElementById(this.system_id));
        let option = this.value
        this.my_echart.setOption(option);
        let that = this
        if(utils.isNotNull(this.onclick)){
            this.my_echart.on('click', function (param:any) {
                that.onclick(param)
            });
        }
    }
}
