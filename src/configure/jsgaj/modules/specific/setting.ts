import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal_jsgaj',
    name:'sys_setting',
    version:'PageNormal_jsgaj',
    api:{
        delete:  "/set/delete",
        save:  "/set/save",
        queryById:  "/set/queryById",
        query:  "/set/query"
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQueryOnly',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"fuzzy_query",label:"模糊查询",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },



        {
            modelName:'content',type: 'AssemblyContentOnly',primaryKey:"o_id",
            components:[
                {modelName:'content',name: "f_label", label: "案件类型", type: "ComponentsInput"},
                {modelName:'content',name: "o_label", label: "描述", type: "ComponentsInput"},
                {modelName:'content',name: "o_value_special", label: "提前X天提醒", type: "ComponentsInput"},
                {modelName:'content',name: "o_value_special4", label: "到期天数", type: "ComponentsInput"},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "o_value_special4", label_width: "120px", label: "到期天数", type: "ComponentsInput" },
                        {modelName:'content', name: "o_value_special", label_width: "120px", label: "提前X天提醒",  type: "ComponentsInput",
                            rules:[{validator: utils.my_required, message: "请输入提前X天提醒"}]},
                        {modelName:'content', name: "o_value_special2", label_width: "120px", style: {width: "470px" }, label: "提醒短信内容", type: "ComponentsInputTextarea" },
                        {modelName:'content', name: "o_value_special3", label_width: "120px", style: {width: "470px" }, label: "超时短信内容", type: "ComponentsInputTextarea" },
                        {modelName:'content', name: 'o_id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
