import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'fixed_flow_step222',
    version:'PageNormal',
    requiresAuth:false,
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
            toolBtn : [
                {label:"导入",show:true,type:"primary",click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'execl'})
                    }},
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
        {modelName:'dialog',name:"execl",type: 'DialogImport',
            components:[
                {modelName:'template',name:"area_name",label:"所属地区",type: 'ComponentsText'},
                {modelName:'template',name:"addr",label:"具体地点",type: 'ComponentsText'},
                {modelName:'template',name:"check_time",label:"检查时间",type: 'ComponentsText'},
                {modelName:'template',name:"kind_name",label:"主要类型",type: 'ComponentsText'},
                {modelName:'template',name:"kind_name1",label:"次要类型",type: 'ComponentsText'},
                {modelName:'template',name:"kind_name2",label:"次要类型",type: 'ComponentsText'},
                {modelName:'template',name:"question",label:"问题类型",type: 'ComponentsText'},
                {modelName:'template',name:"f_score",label:"初审扣分",type: 'ComponentsText'},
                {modelName:'template',name:"remark",label:"问题描述",type: 'ComponentsText'},
                {modelName:'template',name:"photo",label:"问题照片",type: 'ComponentsInputUpload',style:{width:'190px'}},
                {modelName:'template',name:"type",label:"市级问题导入",value_default:'市级问题导入',type: 'ComponentsInputHidden'},
            ]
        },
    ]
}
export default myModule
