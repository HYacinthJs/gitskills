import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal_jsgaj',
    name:'fixed_message_info',
    version:'PageNormal_jsgaj',
    api:{
        delete:  "/messageInfo/delete",
        save: "/messageInfo/save",
        queryById: "/messageInfo/queryById",
        query:  "/messageInfo/query"
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
            modelName:'content',type: 'AssemblyContentOnly',primaryKey:"i_id",
            components:[
                {modelName:'content',name: "dp_name", label: "部门", type: "ComponentsInput"},
                {modelName:'content',name: "d_name", label: "姓名", type: "ComponentsInput"},
                {modelName:'content',name: "d_phone", label: "手机号", type: "ComponentsInput"},
                {modelName:'content',name: "m_content", label: "发送内容", type: "ComponentsInput"},
                {modelName:'content',name: "send_time", label: "发送日期", type: "ComponentsInput"}
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: "m_name", label: "任务名称", type: "ComponentsInput"},
                        {modelName:'content',name: "u_name", label: "用户", type: "ComponentsInput"},
                        {modelName:'content',name: "i_state_str", label: "状态", type: "ComponentsInput"},
                        {modelName:'content',name: "send_time", label: "发送时间", type: "ComponentsInput"},
                        {modelName:'content',name: "m_time", label: "创建时间", type: "ComponentsInput", style: {width: "300px"} },
                        {modelName:'content',name: "m_content", label: "短信内容", type: "ComponentsInput", style: {width: "610px"}}
                    ]},
            ]},
    ]
}
export default myModule
