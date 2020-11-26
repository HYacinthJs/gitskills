
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_rule',
    version:'PageNormal',
    api:{
        query: "/company/query",
        queryByAll: "/company/queryByAll",
        queryById:  "/company/queryById",
        save:  "/company/save",
        delete:  "/company/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"亮灯规则名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"name",label:"亮灯规则名称",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"开始时间",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"结束时间",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"亮灯规则名称",type: 'ComponentsInput'},
                        {modelName:'content',name:"name",label:"开始时间",type: 'ComponentsInput'},
                        {modelName:'content',name:"name",label:"结束时间",type: 'ComponentsInput'},
                        {modelName:'content',name:"name",label:"黄灯条件",type: 'ComponentsInput'},
                        {modelName:'content',name:"name",label:"橙灯条件",type: 'ComponentsInput'},
                        {modelName:'content',name:"name",label:"红灯条件",type: 'ComponentsInput'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
