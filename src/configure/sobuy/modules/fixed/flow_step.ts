import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'fixed_flow_step',
    version:'PageNormal',
    api:{
        query: "/flow_step/query",
        queryByAll: "/flow_step/queryByAll",
        queryById:  "/flow_step/queryById",
        save:  "/flow_step/save",
        delete:  "/flow_step/delete",
        flow:  "/flow/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"步骤名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"flow_name",label:"流程名称",type: 'ComponentsInput'},
                {modelName:'content',name:"json",label:"条件",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"步骤名称",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"flow_id",label:"流程名称",type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择流程名称' }],ajax_url:"flow",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"json",label:"条件",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入条件' }]},
                        {modelName:'content',name:"name",label:"步骤名称",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入步骤名称' }]},
                        {modelName:'content',name:"sort",label:"排序",type: 'ComponentsInput',rules:[{ validator: utils.my_integer, message: '请输入整数' },{ validator: utils.my_required, message: '请输入排序' }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
