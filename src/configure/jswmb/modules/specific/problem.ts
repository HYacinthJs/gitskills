
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_problem',
    version:'PageNormal',
    api:{
        query: "/problem/query",
        queryByAll: "/problem/queryByAll",
        queryById:  "/problem/queryById",
        save:  "/problem/save",
        delete:  "/problem/delete",
        queryBase:  "/problem/queryBase",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"测评内容",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent' , components:[
                {modelName:'content',name:"name",label:"测评内容",type: 'ComponentsInput'},
                {modelName:'content',name:"time",label:"测评时间",type: 'ComponentsInputDay'},
            ],
        },
        {modelName:'dialog',name:"edit",dialog_width:"1050px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"测评内容",type: 'ComponentsInput'},
                        {modelName:'content',name:"time",label:"测评时间",type: 'ComponentsInputDay'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
                {modelName:'from',name :'optional1',label:"公共广场",type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"j_json",label:"角色",type: 'ComponentsInputTableSelect',label_show: false},
                    ]},
            ]},
    ]
}
export default myModule
