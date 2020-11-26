
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_report_cityscape_csl',
    version:'PageNormal',
    api:{
        query: "/reportCityscapeCsl/query",
        queryByAll: "/reportCityscapeCsl/queryByAll",
        queryById:  "/reportCityscapeCsl/queryById",
        save:  "/reportCityscapeCsl/save",
        delete:  "/reportCityscapeCsl/delete",
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
                {modelName:'content',name:"err1_1",label:"合计",type: 'ComponentsInput',value_default:0,components:[
                        {modelName:'content',name:"err1_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_4",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_5",label:"待下发",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_6",label:"待整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_7",label:"整改率（%）",type: 'ComponentsInput'},
                    ]},
            ],
        },
    ]
}
export default myModule
