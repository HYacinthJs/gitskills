import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal_jsgaj',
    name:'fixed_role',
    version:'PageNormal_jsgaj',
    api:{
        delete:"/role/delete",
        save:  "/role/save",
        queryById: "/role/queryById",
        query:  "/role/query"
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQueryOnly',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "r_name", label: "角色名称", type: "ComponentsInput",jurisdictionJson: [{jurisdiction: [{name: "query"}]}]},
                        {modelName:'content', name: "fuzzy_query", label: "模糊查询", type: "ComponentsInput"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContentOnly',primaryKey:"r_id",
            components:[
                {modelName:'content', name: "r_name", label: "角色名称", type: "ComponentsInput"}
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "r_name", label: "角色名称", type: "ComponentsInput",
                            rules: [{validator: utils.my_required, message: "请输入角色名称"}]},
                        {modelName:'content', name: "r_id", type: "ComponentsInputHidden"}
                    ]},
            ]},
    ]
}
export default myModule
