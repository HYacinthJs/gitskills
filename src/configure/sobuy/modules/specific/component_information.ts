import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'t_component_information',
    version:'PageNormal',
    api:{
        query: "/componentinformation/query",
        queryByAll: "/componentinformation/queryByAll",
        queryById:  "/componentinformation/queryById",
        save:  "/componentinformation/save",
        delete:  "/componentinformation/delete",
        getCompany:  "/company/queryByAll",

    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"no",label:"部件编号",type: 'ComponentsInput'},
                        {modelName:'content',name:"name",label:"部件名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {modelName:'content',title:"部件信息管理",type: 'AssemblyContent', components:[
                {modelName:'content',name:"no",label:"部件编号",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"部件名称",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"no",label:"部件编号",type: 'ComponentsInput'},
                        {modelName:'content',name:"name",label:"部件名称",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入部件名称"}]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
