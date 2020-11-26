import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'fixed_flow',
    version:'PageNormal',
    api:{
        query: "/flow/query",
        queryByAll: "/flow/queryByAll",
        queryById:  "/flow/queryById",
        save:  "/flow/save",
        delete:  "/flow/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"流程名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"name",label:"流程名称",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"流程名称",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入流程名称' }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
