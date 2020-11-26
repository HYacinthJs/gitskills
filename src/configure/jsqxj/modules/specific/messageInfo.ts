import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_problem',
    version:'PageNormal',
    api:{
        delete:"/messageInfo/delete",
        save:"/messageInfo/save",
        queryById:"/messageInfo/queryById",
        query:"/messageInfo/query"
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"fuzzy_query",label:"模糊查询",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',
            components:[
                {modelName:'content',name: "m_time", label: "创建时间", type: "input", align: "center"},
                {modelName:'content',name: "m_name", label: "任务名称", type: "input"},
                {modelName:'content',name: "i_phone", label: "用户", type: "input", align: "center"},
                {modelName:'content',name: "send_time", label: "发送时间", type: "input", align: "center"},
                {modelName:'content',name: "i_state_str", label: "状态", type: "input", align: "center"},
                {modelName:'content',name: "i_id", label: "状态2", type: "hidden", align: "center"}
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: "m_name", label: "任务名称", type: "input"},
                        {modelName:'content',name: "u_name", label: "用户", type: "input"},
                        {modelName:'content',name: "i_state_str", label: "状态", type: "input"},
                        {modelName:'content',name: "send_time", label: "发送时间", type: "input"},
                        {modelName:'content',name: "m_time", label: "创建时间", type: "input", style: {width: "300px"} },
                        {modelName:'content',name: "m_content", label: "短信内容", type: "input", style: {width: "610px"}}
                    ]},
            ]},
    ]
}
export default myModule
