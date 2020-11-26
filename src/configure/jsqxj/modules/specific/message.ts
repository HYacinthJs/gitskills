import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_problem',
    version:'PageNormal',
    api:{
        delete: "/message/delete",
        save: "/message/save",
        getNum: "/message/getNum",
        queryById: "/message/queryById",
        query: "/message/query"
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: "m_name", label: "任务名称", type: "ComponentsInputHidden"},
                        {modelName:'content',name: "listDescriptionShowValue", label: "模糊查询", type: "ComponentsInput"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',
            components:[
                {modelName:'content',name: "m_time", label: "发送时间", type: "ComponentsInput"},
                {modelName:'content',name: "m_name", label: "任务名称", type: "ComponentsInput", cellClick: "m_no_cellClick2"},
                {modelName:'content',name: "m_content", label: "短信内容", type: "ComponentsInput"},
                {modelName:'content',name: "num", label: "覆盖人群", type: "ComponentsInput"},
                {modelName:'content',name: "ui_name", label: "发送人员", type: "ComponentsInput"}
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "id_top", label: "上级",  type: "ComponentsInputSelect",
                            ajax_url:"queryFirst",props_label:"label",props_value:"id"},
                        {modelName:'content', name: "label", label: "描述", type: "ComponentsInput" },
                        {modelName:'content', name: "value", label: "值", type: "ComponentsInput" },
                        {modelName:'content', name: "sort", label: "排序", type: "ComponentsInput" },
                        {modelName:'content', name: "state", label: "是否有效", type: "ComponentsInputSelect", options: [{label: "有效", value: "1"}, {label: "无效", value: "-1"}] },
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
