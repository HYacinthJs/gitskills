
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_demolition_query',
    version:'PageNormal',
    api:{
        query: "/demolition/query",
        queryByAll: "/demolition/queryByAll",
        queryById:  "/demolition/queryById",
        save:  "/demolition/save",
        delete:  "/demolition/delete",
        dict:  "/dict/queryByAll",
        updateUpload:  "/demolition/updateUpload",
        updateExamine:  "/demolition/updateExamine",
        updateIssued:  "/demolition/updateIssued",
        updateRectification:  "/demolition/updateRectification",
        updateReexamineOk:  "/demolition/updateReexamineOk",
        updateReexamineErr:  "/demolition/updateReexamineErr",
        updateDelay:  "/demolition/updateDelay",
        queryByGY:  "/area/queryByGY",
        question:  "/question/getTree",
        department:  "/department/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"time",label:"整改期限",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"create_name",label:"来源",type: 'ComponentsInput'},
                        {modelName:'content',name:"area",label:"村（社区）",type: 'ComponentsInputSelect',ajax_url:"queryByGY",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"kind",label:"类型代码",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"三改一拆"}]},
                        {modelName:'content',name:"process",label:"进度",type: 'ComponentsInputSelect',options_d_name:"干窑查询流程"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsInput'},
                {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsInput'},
                {modelName:'content',name:"check_time_str",label:"检查时间",type: 'ComponentsInputDay'},
                {modelName:'content',name:"time_str",label:"整改期限",type: 'ComponentsInputDay'},
                {modelName:'content',name:"kind_name",label:"主要类型",type: 'ComponentsInput'},
                {modelName:'content',name:"kind_name1",label:"次要类型",type: 'ComponentsInput'},
                {modelName:'content',name:"kind_name2",label:"次要类型",type: 'ComponentsInput'},
                {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsInput'},
                {modelName:'content',name:"create_name",label:"来源",type: 'ComponentsInput'},
                {modelName:'content',name:"department_name",label:"整改部门",type: 'ComponentsInput'},
                {modelName:'content',name:"process",label:"步骤",type: 'ComponentsInput'},
                {modelName:'content',name:"myd",label:"步骤2",type: 'ComponentsInputHidden'},
                {modelName:'content',name:"tx_type",label:"步骤",type: 'ComponentsInputHidden'},
            ],
            row_style({row, rowIndex}:any) {
                if (row.tx_type=='未完成') {
                    return {'background-color':'#feffb5'};
                }else if (row.tx_type=='超时未完成') {
                    return {'background-color':'#fa899d'};
                }else if (row.tx_type=='超时完成') {
                    return {'background-color':'#ffcd99'};
                }else if (row.tx_type=='正常完成') {
                    return {'background-color':'#c9edbd'};
                }
                return {'background-color':'#fff'};
            },
        },
        {modelName:'dialog',name:"info",dialog_width:"970px",title:"详情",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsText'},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsText'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name",label:"主要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name1",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name2",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"department_name",label:"主要部门",type: 'ComponentsText'},
                        {modelName:'content',name:"department_name2",label:"次要部门",type: 'ComponentsText'},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name:"list",label:"记录",type: 'ComponentsInputTable',addBtn:false,editTr:false,style:{width: "930px"},label_show: false,value_default:[],components:[
                                {modelName:'template',name:"create_name",label:"处理人",type: 'ComponentsText'},
                                {modelName:'template',name:"create_time",label:"处理时间",type: 'ComponentsText'},
                                {modelName:'template',name:"proposal",label:"处理意见",type: 'ComponentsText'},
                                {modelName:'template',name:"process",label:"流程",type: 'ComponentsText'},
                                {modelName:'template',name:"plan",label:"计划",type: 'ComponentsText'},
                                {modelName:'template',name:"photo",label:"整改照片",type: 'ComponentsInputImage'},
                            ]},
                    ]},
            ],toolBtn : []
        }
    ]
}
export default myModule