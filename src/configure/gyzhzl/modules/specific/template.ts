import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_template',
    version:'PageNormal',
    api:{
        query: "/template/query",
        queryByAll: "/template/queryByAll",
        queryById:  "/template/queryById",
        save:  "/template/save",
        delete:  "/template/delete",
        role:  "/role/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"content",label:"短信内容",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"r_name",label:"角色",type: 'ComponentsInput'},
                {modelName:'content',name:"content",label:"短信内容",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"r_id",label:"角色",type: 'ComponentsInputSelect',ajax_url:"role",props_label:"r_name",props_value:"r_id",ajax_params:[{type:"text",name:"type",value:"领导"}],rules:[{ validator: utils.my_required, message: '请选择角色' }]},
                        {modelName:'content',name:"content",label:"短信内容",type: 'ComponentsInputTextarea',rules:[{ validator: utils.my_required, message: '请输入短信内容' }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
