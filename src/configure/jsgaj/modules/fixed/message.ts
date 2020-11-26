import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal_jsgaj',
    name:'fixed_message',
    version:'PageNormal_jsgaj',
    api:{
        delete:  "/message/delete",
        save:  "/message/save",
        queryById:  "/message/queryById",
        query:  "/message/query",
        getTree:"/department/getTree",
        directories:"/directories/queryByAll"
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQueryOnly',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "fuzzy_query", label: "模糊查询", type: "ComponentsInput"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContentOnly',primaryKey:"m_id",
            components:[
                {modelName:'content', name: "dp_name", label: "部门", type: "ComponentsInput"},
                {modelName:'content', name: "m_name", label: "短信", type: "ComponentsInput", cellClick: "m_no_cellClick2"},
                {modelName:'content', name: "m_content", label: "内容", type: "ComponentsInput"},
                {modelName:'content', name: "create_time", label: "发送时间", type: "ComponentsInput"}
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "m_area", label: "人员", type: "ComponentsInputTransfer", ajax_url: "directories",props_value:"d_id",props_label:"d_name"},
                        {modelName:'content', name: "m_content", label: "内容", type: "ComponentsInputTextarea" },
                        {modelName:'content', name: "m_id", type: "ComponentsInputHidden"}
                    ]},
            ]},
    ]
}
export default myModule
