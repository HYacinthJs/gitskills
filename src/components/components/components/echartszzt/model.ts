import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputEchartszzt extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"echarts柱状图",
            style:{width: "200px",height: "200px"}
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    initValue() {
        let  that = this
        setTimeout(function(){
            that.initEcharts()
        },1000);
    }
    initEcharts(){
        let echartsData=[{value:"1",name:"1"},{value:"2",name:"2"}]
        let myChart = utils.myEcharts.init(document.getElementById(this.system_id));
        let option = {
            color:['#7ecef4','#ff6c00','#ffff00','#f00f00','#9cff00'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '问题来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: echartsData,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        myChart.setOption(option);
    }
}
