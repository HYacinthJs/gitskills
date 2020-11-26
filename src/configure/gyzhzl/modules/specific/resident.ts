import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_resident',
    version:'PageNormal',
    api:{
        query: "/resident/query",
        queryByAll: "/resident/queryByAll",
        queryById:  "/resident/queryById",
        save:  "/resident/save",
        delete:  "/resident/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"居民名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"name",label:"居民名称",type: 'ComponentsInput'},
                {modelName:'content',name:"address",label:"地点",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"居民名称",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入居民名称' }]},
                        {modelName:'content',name:"address",label:"地点",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入地点' }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
