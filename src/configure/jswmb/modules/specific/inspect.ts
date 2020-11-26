
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_inspect',
    version:'PageNormal',
    api:{
        query: "/inspect/query",
        queryByAll: "/inspect/queryByAll",
        queryById:  "/inspect/queryById",
        save:  "/inspect/save",
        delete:  "/inspect/delete",
        queryBase:  "/inspect/queryBase",
        department:  "/department/queryByAll",
        industry:  "/inspect/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"industry_id",label:"考察类别",type: 'ComponentsInputSelect',ajax_url:"industry",props_label:"name",props_value:"id"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"industry_id",label:"考察项目",type: 'ComponentsInput'},
                //   {modelName:'content',name:"standard_name",label:"考察内容",type: 'ComponentsInput'},
                //   {modelName:'content',name:"standard_attribute_name",label:"考察标准",type: 'ComponentsInput'},
                //  {modelName:'content',name:"content",label:"问题描述",type: 'ComponentsInput'},
                {modelName:'content',name:"address",label:"问题地址",type: 'ComponentsInput'},
                {modelName:'content',name:"lng",label:"地址定位",type: 'ComponentsInput'},
                //    {modelName:'content',name:"lat",label:"地址定位",type: 'ComponentsInput'},
                // {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInput'},
                //    {modelName:'content',name:"examine_name",label:"督查人",type: 'ComponentsInput'},
                {modelName:'content',name:"source",label:"督查来源",type: 'ComponentsInput'},
                //  {modelName:'content',name:"department_name",label:"主要责任部门",type: 'ComponentsInput'},
                //   {modelName:'content',name:"department_name2",label:"次要责任部门",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",dialog_width:"970px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"industry_id",label:"考察类别",type: 'ComponentsInputSelect',ajax_url:"industry",props_label:"name",props_value:"id",system_id:"system_industry_id",associated_notice:["system_content"]},
                        {modelName:'content',name:"department_id",label:"主要责任部门",type: 'ComponentsInputSelect',ajax_url:"department",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"department_id2",label:"次要责任部门",type: 'ComponentsInputSelectMultiple',ajax_url:"department",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"source",label:"督查来源",type: 'ComponentsInputSelect',options:[{value:'日常督查',label:'日常督查'},{value:'领导现场办公',label:'领导现场办公'}]},
                        {modelName:'content',name:"content",label:"问题描述",type: 'ComponentsInputTextarea',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputUpload'},
                        {modelName:'content',name:"address",label:"问题地址",type: 'ComponentsInput'},
                        {modelName:'content',name:"lng",label:"地址定位",type: 'ComponentsInput'},
                        {modelName:'content',name:"p_id",label:"具体问题",type: 'ComponentsInputTableSelect2',ajax_url:"queryBase",system_id:"system_content",ajax_params:[{type:"control",name:"industry_id",system_id:"system_industry_id"}],label_show: false},
                    ]},
            ]},
    ]
}
export default myModule
