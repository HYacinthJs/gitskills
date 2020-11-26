import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_inspect_city',
    version:'PageNormal',
    api:{
        query: "/inspect/query",
        queryByAll: "/inspect/queryByAll",
        queryById:  "/inspect/queryById",
        save:  "/inspect/save",
        delete:  "/inspect/delete",
        saveAll:  "/inspect/saveAll",
        queryByGY:  "/area/queryByGY",
        dict:  "/dict/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"time",label:"整改期限",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"create_name",label:"来源",type: 'ComponentsInput'},
                        {modelName:'content',name:"area",label:"村（社区）",type: 'ComponentsInputSelect',ajax_url:"queryByGY",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"kind",label:"类型代码",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"四位一体"}]},
                        {modelName:'content',name:"process",label:"进度",type: 'ComponentsInputSelect',options_d_name:"干窑审核流程"},
                        {modelName:'content',name:"type",value_default:'市级问题导入',type: 'ComponentsInputHidden'},
                        {modelName:'content',name:"state_unfinished",value_default:'未完成',type: 'ComponentsInputHidden'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',utilshow:false, components:[
                {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsInput'},
                {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsInput'},
                {modelName:'content',name:"check_time_str",label:"检查时间",type: 'ComponentsInputDay'},
                {modelName:'content',name:"time_str",label:"整改期限",type: 'ComponentsInputDay'},
                {modelName:'content',name:"kind_name",label:"主要类型",type: 'ComponentsInput'},
                {modelName:'content',name:"kind_name1",label:"次要类型",type: 'ComponentsInput'},
                {modelName:'content',name:"kind_name2",label:"次要类型",type: 'ComponentsInput'},
                {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsInput'},
                {modelName:'content',name:"create_name",label:"来源",type: 'ComponentsInput'},
                {modelName:'content',name:"process",label:"步骤",type: 'ComponentsInput'},
                {modelName:'content',name:"tx_type",label:"步骤",type: 'ComponentsInputHidden'},
            ],
            row_style({row, rowIndex}:any) {
                if (row.tx_type=='未完成') {
                    return {'background-color':'#feffb5'};
                }else if (row.tx_type=='超时未完成') {
                    return {'background-color':'#fa899d'};
                }else if (row.tx_type=='超时完成') {
                    return {'background-color':'#ffcd99'};
                }else if (row.tx_type=='正常完成') {
                    return {'background-color':'#c9edbd'};
                }
                return {'background-color':'#fff'};
            },
            toolBtn : [
                {label:"导入",show:true,jurisdictionJson: [{jurisdiction: [{name: "execl"}]}],type:"primary",click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'execl'})
                    }},
            ],
        },
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
