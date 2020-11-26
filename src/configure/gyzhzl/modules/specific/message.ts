
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_message',
    version:'PageNormal',
    api:{
        query: "/message/query",
        queryByAll: "/message/queryByAll",
        queryById:  "/message/queryById",
        save:  "/message/save",
        delete:  "/message/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"user_name",label:"用户",type: 'ComponentsInput'},
                        {modelName:'content',name:"phone",label:"手机号",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"user_name",label:"用户",type: 'ComponentsInput'},
                {modelName:'content',name:"phone",label:"手机号",type: 'ComponentsInput'},
                {modelName:'content',name:"content",label:"短信内容",type: 'ComponentsInput'},
            ],
        },
    ]
}
export default myModule
