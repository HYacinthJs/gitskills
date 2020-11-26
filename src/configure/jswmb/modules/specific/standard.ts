
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_standard',
    version:'PageNormal',
    api:{
        query: "/standard/query",
        queryByAll: "/standard/queryByAll",
        queryById:  "/standard/queryById",
        save:  "/standard/save",
        delete:  "/standard/delete",
        industry:  "/industry/queryByAll",
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
            modelName:'content',type: 'AssemblyContent',details_show:true, components:[
                {modelName:'content',name:"industry_name",label:"考察类别",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"考察内容",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",dialog_width:"1300px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"industry_id",label:"考察类别",type: 'ComponentsInputSelect',ajax_url:"industry",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"name",label:"考察内容",type: 'ComponentsInput'},
                        {modelName:'content',name:"list",label:"考察项",type: 'ComponentsInputTable',label_show: false,components:[
                            {modelName:'template',name:"name",label:"考察标准",type: 'ComponentsInputTextarea'},
                            {modelName:'template',name:"value",label:"分值",type: 'ComponentsInput'},
                        ]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
