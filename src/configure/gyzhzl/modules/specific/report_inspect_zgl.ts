const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_report_inspect_zgl',
    version:'PageNormal',
    api:{
        query: "/reportInspectZgl/query",
        queryByAll: "/reportInspectZgl/queryByAll",
        queryById:  "/reportInspectZgl/queryById",
        save:  "/reportInspectZgl/save",
        delete:  "/reportInspectZgl/delete",
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

                {modelName:'content',name:"err1_1",label:"垃圾问题",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err1_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err1_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"乱堆放问题",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err2_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err2_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err2_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err2_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err2_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err2_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"市政环卫基础设施问题",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err3_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err3_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err3_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err3_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err3_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err3_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"公共场所环境卫生问题",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err4_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err4_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err4_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err4_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err4_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err4_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"污水油烟直排外溢问题",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err5_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err5_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err5_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err5_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err5_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err5_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"旱厕等问题",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err6_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err6_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err6_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err6_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err6_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err6_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"畜禽养殖等问题",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err7_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err7_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err7_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err7_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err7_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err7_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"河道问题",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err8_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err8_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err8_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err8_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err8_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err8_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"田间地头问题",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err9_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err9_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err9_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err9_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err9_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err9_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"废品收购点问题",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err10_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err10_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err10_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err10_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err10_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err10_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
                {modelName:'content',name:"err1_1",label:"垃圾分类问题",type: 'ComponentsInput',components:[
                        {modelName:'content',name:"err11_1",label:"总数",type: 'ComponentsInput'},
                        {modelName:'content',name:"err11_2",label:"已整改",type: 'ComponentsInput'},
                        {modelName:'content',name:"err11_3",label:"整改中",type: 'ComponentsInput'},
                        {modelName:'content',name:"err11_4",label:"未整改到位",type: 'ComponentsInput'},
                        {modelName:'content',name:"err11_5",label:"待审核",type: 'ComponentsInput'},
                        {modelName:'content',name:"err11_6",label:"待下发",type: 'ComponentsInput'},
                    ]},
            ],
        },

    ]
}
export default myModule
