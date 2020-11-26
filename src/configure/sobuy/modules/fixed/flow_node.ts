
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'fixed_flow_node',
    version:'PageNormal',
    api:{
        query: "/flow_node/query",
        queryByAll: "/flow_node/queryByAll",
        queryById:  "/flow_node/queryById",
        save:  "/flow_node/save",
        delete:  "/flow_node/delete",
        flow:  "/flow/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"状态名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"flow_name",label:"流程名称",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"状态名称",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"flow_id",label:"流程名称",type: 'ComponentsInputSelect',ajax_url:"flow",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"name",label:"状态名称",type: 'ComponentsInput'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
