
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'fixed_option',
    version:'PageNormal',
    api:{
        query: "/option/query",
        queryByAll: "/option/queryByAll",
        queryById:  "/option/queryById",
        save:  "/option/save",
        delete:  "/option/delete",
        getTree:  "/option/getTree",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"p_id",label:"上级",type: 'ComponentsInputCascader',ajax_url:"getTree"},
                        {modelName:'content',name:"name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"name_f",label:"上级",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"描述",type: 'ComponentsInput'},
                {modelName:'content',name:"value",label:"值",type: 'ComponentsInput'},
                {modelName:'content',name:"sort",label:"排序",type: 'ComponentsInput'},
                {modelName:'content',name:"state",label:"是否有效",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"p_id",label:"上级",type: 'ComponentsInputCascader',ajax_url:"getTree"},
                        {modelName:'content',name:"name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"value",label:"值",type: 'ComponentsInput'},
                        {modelName:'content',name:"sort",label:"排序",type: 'ComponentsInput'},
                        {modelName:'content',name:"state",label:"是否有效",type: 'ComponentsInputSelect',options:[{value:'有效',label:'有效'},{value:'无效',label:'无效'}]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
