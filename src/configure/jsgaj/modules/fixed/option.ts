import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal_jsgaj',
    name:'fixed_option',
    version:'PageNormal_jsgaj',
    api:{
        delete: "/option/delete",
        save:  "/option/save",
        queryById: "/option/queryById",
        query:  "/option/query",
        getTree:"/option/getTree",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQueryOnly',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: "fuzzy_query", label: "模糊查询", type: "ComponentsInput"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContentOnly',primaryKey:"o_id",
            components:[
                {modelName:'content',name: "o_label_f", label: "上级", type: "ComponentsInput"},
                {modelName:'content',name: "o_label", label: "描述", type: "ComponentsInput"},
                {modelName:'content',name: "o_value", label: "值", type: "ComponentsInput"},
                {modelName:'content',name: "o_order", label: "排序", type: "ComponentsInput"},
                {modelName:'content',name: "o_state_str", label: "是否有效", type: "ComponentsInput"}
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                       {modelName:'content',name: "o_id_top", label: "上级", type: "ComponentsInputCascader", ajax_url: "getTree", props_value: "o_id", props_label: "o_label"},
                       {modelName:'content',name: "o_label", label: "描述", type: "ComponentsInput" },
                       {modelName:'content',name: "o_value", label: "值", type: "ComponentsInput" },
                       {modelName:'content',name: "o_order", label: "排序", type: "ComponentsInput" },
                       {modelName:'content',name: "o_state", label: "是否有效", type: "ComponentsInputSelect", options: [{label: "有效", value: "1"}, {label: "无效", value: "-1"}] },
                       {modelName:'content',name: "o_id", type: "ComponentsInputHidden"}
                    ]},
            ]},
    ]
}
export default myModule
