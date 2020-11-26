import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_address',
    version:'PageNormal',
    api:{
        query: "/address/query",
        queryByAll: "/address/queryByAll",
        queryById:  "/address/queryById",
        save:  "/address/save",
        delete:  "/address/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"地址名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"name",label:"地址名称",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"地址名称",type: 'ComponentsInput'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
