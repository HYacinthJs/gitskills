
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_report_inspect_dfpm',
    version:'PageNormal',
    api:{
        query: "/reportInspectDfpm/query",
        queryByAll: "/reportInspectDfpm/queryByAll",
        queryById:  "/reportInspectDfpm/queryById",
        save:  "/reportInspectDfpm/save",
        delete:  "/reportInspectDfpm/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"start_time",label:"开始日期",day_auto:true,day_auto_type:'上个月第一天',type: 'ComponentsInputDay'},
                        {modelName:'content',name:"end_time",label:"结束日期",day_auto:true,day_auto_type:'上个月最后一天',type: 'ComponentsInputDay'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            rows:200, modelName:'content',type: 'AssemblyContent', numbershow:false, selectionshow:false, utilshow:false,components:[
                {modelName:'content',name:"name",label:"村社区",type: 'ComponentsInput'},
                {modelName:'content',name:"score",label:"考核扣分",type: 'ComponentsInput',value_default:0},
                {modelName:'content',name:"indx",label:"排名",type: 'ComponentsInput',value_default:0},
                        {modelName:'content',name:"err1_1",label:"镇区保洁",type: 'ComponentsInput',components:[
                                {modelName:'content',name:"err1_1",label:"主次道路、背街小巷",type: 'ComponentsInput'},
                                {modelName:'content',name:"err1_2",label:"居民小区",type: 'ComponentsInput'},
                                {modelName:'content',name:"err1_3",label:"公共场所、农贸市场",type: 'ComponentsInput'},
                                {modelName:'content',name:"err1_4",label:"公共厕所、压缩式垃圾中转站",type: 'ComponentsInput'},
                            ]},
                        {modelName:'content',name:"err1_1",label:"村庄保洁",type: 'ComponentsInput',components:[
                                {modelName:'content',name:"err2_1",label:"村容整洁",type: 'ComponentsInput'},
                                {modelName:'content',name:"err2_2",label:"房前屋后",type: 'ComponentsInput'},
                                {modelName:'content',name:"err2_3",label:"村级垃圾中转房等环卫设施",type: 'ComponentsInput'},
                            ]},
                        {modelName:'content',name:"err1_1",label:"道路保洁",type: 'ComponentsInput',components:[
                                {modelName:'content',name:"err3_1",label:"路面",type: 'ComponentsInput'},
                                {modelName:'content',name:"err3_2",label:"两侧及公共设施",type: 'ComponentsInput'},
                            ]},
                        {modelName:'content',name:"err1_1",label:"河道保洁",type: 'ComponentsInput',components:[
                                {modelName:'content',name:"err4_1",label:"河道清洁",type: 'ComponentsInput'},
                                {modelName:'content',name:"err4_2",label:"河岸整洁",type: 'ComponentsInput'},
                                {modelName:'content',name:"err4_3",label:"河道畅通",type: 'ComponentsInput'},
                            ]},
                        {modelName:'content',name:"err1_1",label:"田园整治",type: 'ComponentsInput',components:[
                                {modelName:'content',name:"err5_1",label:"农业废弃物处理",type: 'ComponentsInput'},
                                {modelName:'content',name:"err5_2",label:"农业设施用房管理",type: 'ComponentsInput'},
                            ]},
                        {modelName:'content',name:"err1_1",label:"其他",type: 'ComponentsInput',components:[
                                {modelName:'content',name:"err6_1",label:"废品收购点",type: 'ComponentsInput'},
                            ]},
            ],
        },
    ]
}
export default myModule
