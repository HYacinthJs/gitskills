import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_problem',
    version:'PageNormal',
    api:{
        delete: "/workdyn/delete",
        save: "/workdyn/save",
        queryById: "/workdyn/queryById",
        infobyid: "/workdyn/infoById",
        query: "/workdyn/query"
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: "dyntitle", label: "标题", type: "text"},
                        {modelName:'content',name: "dyntype", label: "类型", type: "text", value_default: "工作计划"},
                        {modelName:'content',name: "dynstate1", label: "上报时间起", type: "text"},
                        {modelName:'content',name: "dynstate2", label: "上报时间止", type: "text"},
                        {modelName:'content',name: "listDescriptionShowValue", label: "模糊查询", type: "text"},
                        {modelName:'content',name: "comid", type: "hidden"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',
            components:[
                {modelName:'content',name: "label_f", label: "上级", type: "ComponentsInput"},
                {modelName:'content',name: "label", label: "描述", type: "ComponentsInput"},
                {modelName:'content',name: "value", label: "值", type: "ComponentsInput"},
                {modelName:'content',name: "sort", label: "排序", type: "ComponentsInput"},
                {modelName:'content',name: "state_str", label: "是否有效", type: "ComponentsInput"}
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: "d_name", label: "部门名称", type: "input", rules: [{ required: true, message: "请输入部门名称", trigger: "blur" }]},
                        {modelName:'content',name: "d_name2", label: "部门别称", type: "input"},
                        {modelName:'content',name: "d_sort", label: "排序", type: "input", rules: [{ required: true, message: "请输入排序", trigger: "blur" }]},
                        {modelName:'content',name: "d_id", type: "hidden"}
                    ]},
            ]},
    ]
}
export default myModule
