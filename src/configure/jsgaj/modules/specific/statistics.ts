import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal_jsgaj',
    name:'sys_statistics',
    version:'PageNormal_jsgaj',
    api:{
        delete: "/files/delete",
        save: "/files/save",
        queryById: "/files/queryById",
        query: "/files/query",
        execl: "/files/toExeclNote",
        getTree:"/department/getTree",
        queryByEchart:"/files/queryByEcharts"
    },
    /**
     * 进入当前页面执行
     */
    initPage(){                                                         //进入页面执行
        let query = utils.getPage().getComponents({system_id:"query"})
        let query2 = utils.getPage().getComponents({system_id:"query2"})
        if(utils.isNotNull(query)&&utils.isNotNull(query.initValue)){
            query.initValue()
            query.initAjax()
        }
        if(utils.isNotNull(query2)&&utils.isNotNull(query2.initValue)){
            query2.initValue()
            query2.initAjax()
        }
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQueryOnly',label_query:false,
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: "dp_id", label: "部门", type: "ComponentsInputCascader", style: {width: "290px" },
                            ajax_url: "getTree",system_id:"system_dp_id",
                            },
                        {modelName:'content',name: "case_time", label: "受案时间", type: "ComponentsInputDayInterval", startlabel: "开始时间", endlabel: "结束时间",system_id: "system_case_time"},
                        {modelName:'content',name: "f_state", label: "是否完成", type: "ComponentsInputSelect",system_id: "system_f_state", value_default: -1, options: [{value: -1, label: "未完成"}, {value: 1, label: "完成"}, {value: 22, label: "全部"}]},
                        // {modelName:'content',name:"ui_code",label:"",type: 'ComponentsInputEcharts'},
                        // {modelName:'content',name:"ui_code2",label:"",type: 'ComponentsInputEcharts'},
                        {modelName:'content',type: 'ComponentsInputReQuery',onClick:function (data:any){
                                let content2 = utils.getPage().getComponents({system_id:"query2"})
                                content2.query()
                        }}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyQuery',name:"base1",system_id:"query2",
            components:[
                {modelName:'query',type: 'AssemblyFrom',   inline:false ,components:[
                        {modelName:'content',name:"ui_code",label:"",type: 'ComponentsInputEcharts',style: {width: "100%", height: "780px"}, item_style: {width: "50%",float:"left"},
                            onclick:function(param:any){
                            console.log("1111")
                                if(utils.isNull(param.data.children)){
                                    console.log(param)
                                    let query = utils.getPage().getComponents({system_id:"query"})
                                    let a = query.getEditValue()
                                    console.log(a)
                                    utils.getStore().addParameter({pageNameSpace:"sys_files",names: ["query"], value: {
                                            case_time:a.case_time,
                                            f_state:a.f_state,
                                            dp_id:a.dp_id,
                                            problem_id: param.data.problem_id,
                                            f_type_option: param.data.f_type_option,
                                            f_type_text:"刑事案件"
                                        }})
                                    utils.goTo({path:"sys_files"})
                                }
                            }, ajax_url:"queryByEchart",ajax_params:[{type:"control",name:"dp_id",system_id:"system_dp_id"},
                                {type:"control",name:"case_time",system_id:"system_case_time"},
                                {type:"control",name:"f_state",system_id:"system_f_state"},
                                {type: "text", value: "案件类型", name: "f_type_text"},
                            ],
                            /* getBaseValueURLSearchParams: function () {
                                 let dialog = utils.getEditValue(this.view_list)
                                 let params = new URLSearchParams()
                                 for (let i = 0; i < this.ajax.params.length; i++) {
                                     if (this.ajax.params[i].type === "control") {
                                         params.append(this.ajax.params[i].name, dialog[this.ajax.params[i].control])
                                     } else {
                                         params.append(this.ajax.params[i].name, this.ajax.params[i].value)
                                     }
                                 }
                                 let myedit = utils.getComponents({condition: [{view: "layout", type: "content"}, {view: "modules", type: "query", name: "query"}, {view: "assembly", type: "edit"}]})
                                 let a = myedit.public_getValue()
                                 params.append('case_time', a.case_time)
                                 params.append('f_state', a.f_state)
                                 params.append('dp_id', a.dp_id)
                                 return params
                             }*/
                        },
                        {modelName:'content',name:"ui_code2",label:"",type: 'ComponentsInputEchartsbt',style: {width: "100%", height: "780px"}, item_style:  {width: "50%",float:"left"},
                            onclick:function(param:any){
                                if(utils.isNull(param.data.children)){
                                    console.log(param)
                                    let query = utils.getPage().getComponents({system_id:"query"})
                                    let a = query.getEditValue()
                                    console.log(a)
                                    utils.getStore().addParameter({pageNameSpace:"sys_files",names: ["query"], value: {
                                            case_time:a.case_time,
                                            f_state:a.f_state,
                                            dp_id:a.dp_id,
                                            problem_id: param.data.problem_id,
                                            f_type_option: param.data.f_type_option,
                                            f_type_text:"行政案件"
                                        }})
                                    utils.goTo({path:"sys_files"})
                                }
                            }, ajax_url:"queryByEchart",ajax_params:[{type:"control",name:"dp_id",system_id:"system_dp_id"},
                                {type:"control",name:"case_time",system_id:"system_case_time"},
                                {type:"control",name:"f_state",system_id:"system_f_state"},
                                {type: "text", value: "案件类型", name: "f_type_text"},
                            ],},
                    ]}
            ],
        },

    ]
}
export default myModule
