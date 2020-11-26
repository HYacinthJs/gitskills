import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyEcharts1 extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"图表",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _image_list: any[] = [{},{}];                          //账号
    private _echarts_map: { [key: string]: any} = {};

    get echarts_map(): { [p: string]: any } {
        return this._echarts_map;
    }

    set echarts_map(value: { [p: string]: any }) {
        this._echarts_map = value;
    }

    private _data_map:{ [key: string]: any} = {
        data1:{
            time:""
        },
        data2:{
            time:""
        },
        data3:{
            time:""
        },
        data4:{
            time:""
        },
        data5:{
            time:"",
        },
        data6:{
            time:"",
            number1:"",
            number2:"",
            number3:"",
            number_1:"",
            number_2:"",
            number_3:"",
        },
        data7:{
            time:"",
            number1:"",
            number2:"",
            number3:"",
            number4:"",
            number_1:"",
            number_2:"",
            number_3:"",
            number_4:"",
        },
        data8:{
            time:"",
            list:[]
        },
        data9:{
            time:""
        },
        data10:{
            time:"",
            number1:"",
            number_1:"",
        },
        data11:{
            time:""
        },
        data12:{
            time:""
        },
        data13:{
            time:""
        },
    };                          //账号
    associated_size(){
        console.log("associated_size55----")
        window.addEventListener("resize", () => {
            for(let key in this.echarts_map){
                this.echarts_map[key].resize();
            }
        });
    }
    get image_list(): any[] {
        return this._image_list;
    }

    set image_list(value: any[]) {
        this._image_list = value;
    }
    a(data:{ [key: string]: any}){
      this.a1(data)
      this.a2(data)
      this.a3(data)
      this.a4(data)
      this.a5(data)
      this.a6(data)
      this.a7(data)
      this.a8(data)
      this.a9(data)
      this.a10(data)
      this.a11(data)
      this.a12(data)
      this.a13(data)
    }
    a1(data:{ [key: string]: any}){
        let echartsData=[]
        for(let i=0;i<data.data1.list.length;i++){
            echartsData.push(
                {value: data.data1.list[i].number, name: data.data1.list[i].type},
            )
        }
        this.data_map.data1.time=data.data1.time
        this.echarts_map.a1 = utils.myEcharts.init(document.getElementById('echarts1'));
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
        this.echarts_map.a1.setOption(option);
    }
    a2(data:{ [key: string]: any}){
        let echartsData_data=[]
        let echartsData_name=[]
        for(let i=0;i<data.data2.list.length;i++){
            echartsData_data.push( data.data2.list[i].number)
            echartsData_name.push( data.data2.list[i].type)
        }
        this.data_map.data2.time=data.data2.time
        // @ts-ignore
        this.echarts_map.a2 = utils.myEcharts.init(document.getElementById('echarts2'));
        let option = { 
            color:['#7ecs-nocheckef4'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} '
            },
            grid: {
                left:40,
                right:20,
                top:30,
                bottom:0,
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0)'
                    }
                },
                axisLabel:{
                    color:"rgba(255,255,255,0)",
                },
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                inverse:true,
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.5)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisLabel:{
                    color:"rgba(255,255,255,.5)",
                    interval:0,
                    formatter: function (value:string,index:number) {
                        return '{number'+(index+1)+'|}'+value;
                    },
                    rich: {
                        number1: {
                            backgroundColor: {
                                image: "./assets/base/img/number1.png"
                            }
                        },
                        number2: {
                            backgroundColor: {
                                image: "./assets/base/img/number2.png"
                            }
                        },
                        number3: {
                            backgroundColor: {
                                image: "./assets/base/img/number3.png"
                            }
                        },
                        number4: {
                            backgroundColor: {
                                image: "./assets/base/img/number4.png"
                            }
                        },
                        number5: {
                            backgroundColor: {
                                image: "./assets/base/img/number5.png"
                            }
                        },
                        number6: {
                            backgroundColor: {
                                image: "./assets/base/img/number6.png"
                            }
                        },
                        number7: {
                            backgroundColor: {
                                image: "./assets/base/img/number7.png"
                            }
                        },
                        number8: {
                            backgroundColor: {
                                image: "./assets/base/img/number8.png"
                            }
                        },
                        number9: {
                            backgroundColor: {
                                image: "./assets/base/img/number9.png"
                            }
                        },
                        number10: {
                            backgroundColor: {
                                image: "./assets/base/img/number10.png"
                            }
                        }
                    }
                },
                data: echartsData_name
            },
            series: [
                {
                    name: '问题数量',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new utils.myEcharts.graphic.LinearGradient(
                                1, 0, 0, 1,
                                [
                                    {offset: 0, color: 'rgba(230,253,139,.7)'},
                                    {offset: 1, color: 'rgba(41,220,205,.7)'}
                                ]
                            )
                        }
                    },
                    data: echartsData_data
                }
            ]
        };
        this.echarts_map.a2.setOption(option);
    }
    a3(data:{ [key: string]: any}){
        let echartsData=[]
        for(let i=0;i<data.data3.list.length;i++){
            echartsData.push(
                {value: data.data3.list[i].number, name: data.data3.list[i].name},
            )
        }
        this.data_map.data3.time=data.data3.time
        this.echarts_map.a3 = utils.myEcharts.init(document.getElementById('echarts3'));
        let option ={
            color:["#7ecef4", "#7ecef4","#7ecef4","#7ecef4"],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '区域问题占比',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    roseType: 'area',
                    data:echartsData
                }
            ]
        };
        this.echarts_map.a3.setOption(option);
    }
    a4(data:{ [key: string]: any}){
        let echartsData_data=[]
        let echartsData_name=[]
        for(let i=0;i<data.data4.list.length;i++){
            echartsData_data.push( data.data4.list[i].number)
            echartsData_name.push( data.data4.list[i].name)
        }
        this.data_map.data4.time=data.data4.time
        this.echarts_map.a4 = utils.myEcharts.init(document.getElementById('echarts4'));
        let option = {
            color:['#7ecef4'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}'
            },
            grid: {
                left:40,
                right:20,
                top:30,
                bottom:0,
                containLabel: true
            },

            xAxis: {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0)'
                    }
                },
                axisLabel:{
                    color:"rgba(255,255,255,0)"
                },
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                inverse:true,
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.5)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisLabel:{
                    color:"rgba(255,255,255,.5)",
                    interval:0,
                    formatter: function (value:string,index:number) {
                        return '{number'+(index+1)+'|}'+value;
                    },
                    rich: {
                        number1: {
                            backgroundColor: {
                                image: "./assets/base/img/number1.png"
                            }
                        },
                        number2: {
                            backgroundColor: {
                                image: "./assets/base/img/number2.png"
                            }
                        },
                        number3: {
                            backgroundColor: {
                                image: "./assets/base/img/number3.png"
                            }
                        },
                        number4: {
                            backgroundColor: {
                                image: "./assets/base/img/number4.png"
                            }
                        },
                        number5: {
                            backgroundColor: {
                                image: "./assets/base/img/number5.png"
                            }
                        },
                        number6: {
                            backgroundColor: {
                                image: "./assets/base/img/number6.png"
                            }
                        },
                        number7: {
                            backgroundColor: {
                                image: "./assets/base/img/number7.png"
                            }
                        },
                        number8: {
                            backgroundColor: {
                                image: "./assets/base/img/number8.png"
                            }
                        },
                        number9: {
                            backgroundColor: {
                                image: "./assets/base/img/number9.png"
                            }
                        },
                        number10: {
                            backgroundColor: {
                                image: "./assets/base/img/number10.png"
                            }
                        }
                    }
                },
                data: echartsData_name
            },
            series: [
                {
                    name: '区域问题数量',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new utils.myEcharts.graphic.LinearGradient(
                                1, 0, 0, 1,
                                [
                                    {offset: 0, color: 'rgba(230,253,139,.7)'},
                                    {offset: 1, color: 'rgba(41,220,205,.7)'}
                                ]
                            )
                        }
                    },
                    data:echartsData_data
                }
            ]
        };
        this.echarts_map.a4.setOption(option);
    }
    a5(data:{ [key: string]: any}){
        let echartsData_data1=[]
        let echartsData_data2=[]
        let echartsData_name=[]
        for(let i=0;i<data.data5.list.length;i++){
            echartsData_data1.push( data.data5.list[i].data1)
            echartsData_data2.push( data.data5.list[i].data2)
            echartsData_name.push( data.data5.list[i].name)
        }
        this.data_map.data5.time=data.data5.time
        this.echarts_map.a5 = utils.myEcharts.init(document.getElementById('echarts5'));
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} '
            },
            xAxis: [
                {
                    type: 'category',
                    data: echartsData_name,
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine:{
                        lineStyle:{
                            color:'rgba(255,255,255,.5)'
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:'rgba(255,255,255,.1)'
                        }
                    },
                    axisLabel:{
                        color:"rgba(255,255,255,.5)"
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '问题数',
                    axisLine:{
                        lineStyle:{
                            color:'rgba(255,255,255,.5)'
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:'rgba(255,255,255,.1)'
                        }
                    },
                    axisLabel:{
                        color:"rgba(255,255,255,.5)"
                    },
                },
            ],
            series: [
                {
                    name: '问题数量',
                    type: 'bar',
                    data: echartsData_data1,
                    itemStyle: {
                        normal: {
                            color: new utils.myEcharts.graphic.LinearGradient(
                                1, 0, 0, 1,
                                [
                                    {offset: 0, color: 'rgba(230,253,139,.7)'},
                                    {offset: 1, color: 'rgba(41,220,205,.7)'}
                                ]
                            )
                        }
                    },
                },
                {
                    name: '上周',
                    type: 'bar',
                    data: echartsData_data2,
                    itemStyle: {
                        normal: {
                            color: new utils.myEcharts.graphic.LinearGradient(
                                1, 0, 0, 1,
                                [
                                    {offset: 0, color: 'rgba(230,253,139,.7)'},
                                    {offset: 1, color: 'rgba(41,220,205,.7)'}
                                ]
                            )
                        }
                    },
                }
            ]
        };
        this.echarts_map.a5.setOption(option);
    }
    a6(data:{ [key: string]: any}){
        this.data_map.data6.number1=data.data6.number1
        this.data_map.data6.number2=data.data6.number2
        this.data_map.data6.number3=data.data6.number3
        this.data_map.data6.number_1=data.data6.number_1
        this.data_map.data6.number_2=data.data6.number_2
        this.data_map.data6.number_3=data.data6.number_3
        this.data_map.data6.number_state_1=data.data6.number_state_1
        this.data_map.data6.number_state_2=data.data6.number_state_2
        this.data_map.data6.number_state_3=data.data6.number_state_3
        this.data_map.data6.time=data.data6.time
    }
    a7(data:{ [key: string]: any}){
        this.data_map.data7.number1=data.data7.number1
        this.data_map.data7.number2=data.data7.number2
        this.data_map.data7.number3=data.data7.number3
        this.data_map.data7.number4=data.data7.number4
        this.data_map.data7.number_1=data.data7.number_1
        this.data_map.data7.number_2=data.data7.number_2
        this.data_map.data7.number_3=data.data7.number_3
        this.data_map.data7.number_4=data.data7.number_4
        this.data_map.data7.number_state_1=data.data7.number_state_1
        this.data_map.data7.number_state_2=data.data7.number_state_2
        this.data_map.data7.number_state_3=data.data7.number_state_3
        this.data_map.data7.number_state_4=data.data7.number_state_4
        this.data_map.data7.time=data.data7.time
    }
    a8(data:{ [key: string]: any}){
        this.data_map.data8.list=data.data8.list
        this.data_map.data8.time=data.data8.time
    }
    a9(data:{ [key: string]: any}){
        let echartsData_data1=[]
        let echartsData_data2=[]
        let echartsData_name=[]
        for(let i=0;i<data.data9.list.length;i++){
            echartsData_data1.push( data.data9.list[i].data1)
            echartsData_data2.push( data.data9.list[i].data2)
            echartsData_name.push( data.data9.list[i].name)
        }
        this.data_map.data9.time=data.data9.time
        this.echarts_map.a9 = utils.myEcharts.init(document.getElementById('echarts9'));
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} '
            },
            xAxis: [
                {
                    type: 'category',
                    data:echartsData_name,
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine:{
                        lineStyle:{
                            color:'rgba(255,255,255,.5)'
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:'rgba(255,255,255,.1)'
                        }
                    },
                    axisLabel:{
                        interval:0,
                        color:"rgba(255,255,255,.5)"
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '问题数',
                    axisLine:{
                        lineStyle:{
                            color:'rgba(255,255,255,.5)'
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:'rgba(255,255,255,.1)'
                        }
                    },
                    axisLabel:{
                        interval:0,
                        color:"rgba(255,255,255,.5)"
                    },
                },
            ],
            series: [
                {
                    name: '问题数量',
                    type: 'bar',
                    data: echartsData_data1,
                    itemStyle: {
                        normal: {
                            color: new utils.myEcharts.graphic.LinearGradient(
                                1, 0, 0, 1,
                                [
                                    {offset: 0, color: 'rgba(230,253,139,.7)'},
                                    {offset: 1, color: 'rgba(41,220,205,.7)'}
                                ]
                            )
                        }
                    },
                },
                {
                    name: '去年',
                    type: 'bar',
                    data:echartsData_data2,
                    itemStyle: {
                        normal: {
                            color: new utils.myEcharts.graphic.LinearGradient(
                                1, 0, 0, 1,
                                [
                                    {offset: 0, color: 'rgba(230,253,139,.7)'},
                                    {offset: 1, color: 'rgba(41,220,205,.7)'}
                                ]
                            )
                        }
                    },
                },
            ]
        };
        this.echarts_map.a9.setOption(option);
    }
    a10(data:{ [key: string]: any}){
        this.data_map.data10.number4=data.data10.number4
        this.data_map.data10.number_4=data.data10.number_4
        this.data_map.data10.number_state_4=data.data10.number_state_4
        this.data_map.data10.time=data.data10.time
    }
    a11(data:{ [key: string]: any}){
        let echartsData=[]
        for(let i=0;i<data.data11.list.length;i++){
            echartsData.push(
                {value: data.data11.list[i].data1, name: data.data11.list[i].name},
            )
        }
        this.data_map.data11.time=data.data11.time
        this.echarts_map.a11 = utils.myEcharts.init(document.getElementById('echarts11'));
        let option = {
            color:["#7ecef4", "#7ecef4","#7ecef4","#7ecef4"],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '问题占比',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    roseType: 'area',
                    data: echartsData
                }
            ]
        };
        this.echarts_map.a11.setOption(option);
    }
    a12(data:{ [key: string]: any}){
        let echartsData_data=[]
        let echartsData_name=[]
        for(let i=0;i<data.data12.list.length;i++){
            echartsData_data.push( data.data12.list[i].data1)
            echartsData_name.push( data.data12.list[i].name)
        }
        this.data_map.data12.time=data.data12.time
        this.echarts_map.a12 = utils.myEcharts.init(document.getElementById('echarts12'));
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}'
            },
            color:["rgba(41,220,205,.7)"],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:echartsData_name,
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.5)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisLabel:{
                    color:"rgba(255,255,255,.5)"
                },
            },
            yAxis: {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.5)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisLabel:{
                    color:"rgba(255,255,255,.5)"
                },
            },
            series: [{
                name: '问题数量',
                data:echartsData_data,
                type: 'line',
                areaStyle: {
                    normal: {
                        color: new utils.myEcharts.graphic.LinearGradient(
                            1, 0, 0, 1,
                            [
                                {offset: 0, color: 'rgba(230,253,139,.7)'},
                                {offset: 1, color: 'rgba(41,220,205,.7)'}
                            ]
                        )
                    }
                },
            }]
        }
        this.echarts_map.a12.setOption(option);
    }
    a13(data:{ [key: string]: any}){
        let echartsData=[]
        for(let i=0;i<data.data13.list.length;i++){
            echartsData.push(
                {value: data.data13.list[i].number, name: data.data13.list[i].name},
            )
        }
        this.data_map.data13.time=data.data13.time
        this.echarts_map.a13 = utils.myEcharts.init(document.getElementById('echarts13'));
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color:['#7ecef4','#ff6c00','#ffff00','#f00f00','#9cff00'],
            series: [
                {
                    name: '完成情况占比',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data:echartsData,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        this.echarts_map.a13.setOption(option);
    }


    get data_map(): { [key: string]: any } {
        return this._data_map;
    }

    set data_map(value: { [key: string]: any }) {
        this._data_map = value;
    }
}
