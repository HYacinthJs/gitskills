import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputEchartsbt extends Layout {
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
        let option = {
            "series": {
                "data": [{
                    "children": [{
                        "problem_id": 58,
                        "name": "（一）接处警、接报案(1)(16%)",
                        "itemStyle": {},
                        "f_type_option": 16,
                        "value": 1
                    }],
                    "name": "一、接处警和其他现场执法",
                    "itemStyle": {}
                }, {
                    "children": [{
                        "problem_id": 81,
                        "name": "五、涉案财物、非涉案财物和物证保管(1)(16%)",
                        "itemStyle": {},
                        "f_type_option": 16,
                        "value": 1
                    }],
                    "name": "五、涉案财物、非涉案财物和物证保管",
                    "itemStyle": {}
                }],
                "highlightPolicy": "ancestor",
                "sort": null,
                "type": "sunburst",
                "radius": [0, "95%"],
                "levels": [{}, {
                    "r": "35%",
                    "itemStyle": {
                        "borderWidth": 2
                    },
                    "label": {
                        "rotate": "tangential"
                    },
                    "r0": "15%"
                }, {
                    "r": "70%",
                    "label": {
                        "align": "right"
                    },
                    "r0": "35%"
                }, {
                    "r": "72%",
                    "itemStyle": {
                        "borderWidth": 3
                    },
                    "label": {
                        "padding": 3,
                        "silent": false,
                        "position": "outside"
                    },
                    "r0": "70%"
                }]
            },
            "title": {
                "text": "行政案件"
            }
        }
        this.my_echart.setOption(option);
        let that = this
        if(utils.isNotNull(this.onclick)){
            this.my_echart.on('click', function (param:any) {
                that.onclick(param)
            });
        }
    }
}
