const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_report_cityscape_zgl',
    version:'PageNormal',
    api:{
        query: "/reportCityscapeZgl/query",
        queryByAll: "/reportCityscapeZgl/queryByAll",
        queryById:  "/reportCityscapeZgl/queryById",
        save:  "/reportCityscapeZgl/save",
        delete:  "/reportCityscapeZgl/delete",
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


                {modelName:'content',name:"err1_1",label:"违章搭建、“六乱”整治",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err1_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"市政基础设施",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err2_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err2_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err2_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err2_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err2_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err2_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"环境卫生",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err3_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err3_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err3_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err3_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err3_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err3_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"市政环卫设施",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err4_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err4_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err4_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err4_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err4_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err4_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"绿化缺失",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err5_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err5_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err5_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err5_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err5_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err5_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
            ],
        },

    ]
}
export default myModule
