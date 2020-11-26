import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_inspect_synchronous',
    version:'PageNormal',
    api:{
        query: "/inspect/query",
        queryByAll: "/inspect/queryByAll",
        queryById:  "/inspect/queryById",
        save:  "/inspect/save",
        delete:  "/inspect/delete",
        dict:  "/dict/queryByAll",
        updateUpload:  "/inspect/updateUpload",
        updateExamine:  "/inspect/updateExamine",
        batch_release:  "/inspect/batch_release",
        updateRectification:  "/inspect/updateRectification",
        updateReexamineOk:  "/inspect/updateReexamineOk",
        updateReexamineErr:  "/inspect/updateReexamineErr",
        updateDelay:  "/inspect/updateDelay",
        synchronousInspect:  "/inspect/synchronousInspect",
        queryByGY:  "/area/queryByGY",
        question:  "/question/getTree",
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
                        {modelName:'content',name:"type",value_default:'县四位一体同步',type: 'ComponentsInputHidden'},
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
                {modelName:'content',name:"tx_type",label:"步骤2",type: 'ComponentsInput'},
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
                {label:"同步",jurisdictionJson: [{jurisdiction: [{name: "synchronousInspect"}]}],show:true,type:"primary",click:function(data:any){utils.getStore().openDialog({name:'synchronousInspect'})}},
            ],
        },
        {modelName:'dialog',name:"edit",dialog_width:"970px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area",label:"所属地区",type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择所属地区' }],ajax_url:"queryByGY",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsInput'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsInputDay',rules:[{ validator: utils.my_required, message: '请输入检查时间' }]},
                        {modelName:'content',name:"kind",label:"主要类型",type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择主要类型' }],ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"四位一体"}]},
                        {modelName:'content',name:"kind1",label:"次要类型",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"四位一体"}]},
                        {modelName:'content',name:"kind2",label:"次要类型",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"四位一体"}]},
                        {modelName:'content',name:"question",label:"问题类型",type: 'ComponentsInputCascader',rules:[{ validator: utils.my_required, message: '请选择问题类型' }],ajax_url:"question"},
                        {modelName:'content',name:"d_score",label:"扣分",type: 'ComponentsInput',rules:[{ validator: utils.my_float_unsigned, message: '请输入数字' },{ validator: utils.my_required, message: '请输入初审扣分' }]},
                        {modelName:'content',name:"time",label:"整改期限",type: 'ComponentsInputDay',rules:[{ validator: utils.my_required, message: '请输入整改期限' }]},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsInputTextarea',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputUpload',rules:[{ validator: utils.my_required_array, message: '请上传问题照片' }]},
                        {modelName:'content',name: 'type', label: 'type',value_default:'村自查',type:'ComponentsInputHidden'},
                        {modelName:'content',name: 'state', label: 'state',value_default:'待整改',type:'ComponentsInputHidden'},
                        {modelName:'content',name: 'process', label: 'process',value_default:'待整改',type:'ComponentsInputHidden'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"info",dialog_width:"970px",title:"详情",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsText'},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsText'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name",label:"主要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name1",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name2",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"question_title",label:"问题类型",type: 'ComponentsText'},
                        {modelName:'content',name:"f_score",label:"初审扣分",type: 'ComponentsText'},
                        {modelName:'content',name:"d_score",label:"审定扣分",type: 'ComponentsText'},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name:"list",label:"记录",type: 'ComponentsInputTable',addBtn:false,editTr:false,style:{width: "930px"},label_show: false,value_default:[],components:[
                                {modelName:'template',name:"create_name",label:"处理人",type: 'ComponentsText',style:{width: "150px"}},
                                {modelName:'template',name:"create_time",label:"处理时间",type: 'ComponentsText',style:{width: "170px"}},
                                {modelName:'template',name:"proposal",label:"处理意见",type: 'ComponentsText',style:{width: "280px"}},
                                {modelName:'template',name:"process",label:"流程",type: 'ComponentsText',style:{width: "80px"}},
                                {modelName:'template',name:"photo",label:"整改照片",type: 'ComponentsInputImage',style:{width: "250px"}},
                            ]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ],toolBtn : []
        },
        {modelName:'dialog',name:"updateRectification",apiName_save:"updateReexamineOk",dialog_width:"970px",title:"整改",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsText'},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsText'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name",label:"主要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name1",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name2",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"question_title",label:"问题类型",type: 'ComponentsText'},
                        {modelName:'content',name:"f_score",label:"初审扣分",type: 'ComponentsText'},
                        {modelName:'content',name:"d_score",label:"审定扣分",type: 'ComponentsText'},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name:"log_photo",label:"整改照片",type: 'ComponentsInputUpload',rules:[{ validator: utils.my_required_array, message: '请上传整改照片' }]},
                        {modelName:'content',name:"list",label:"记录",type: 'ComponentsInputTable',addBtn:false,editTr:false,style:{width: "930px"},label_show: false,value_default:[],components:[
                                {modelName:'template',name:"create_name",label:"处理人",type: 'ComponentsText',style:{width: "150px"}},
                                {modelName:'template',name:"create_time",label:"处理时间",type: 'ComponentsText',style:{width: "170px"}},
                                {modelName:'template',name:"proposal",label:"处理意见",type: 'ComponentsText',style:{width: "280px"}},
                                {modelName:'template',name:"process",label:"流程",type: 'ComponentsText',style:{width: "80px"}},
                                {modelName:'template',name:"photo",label:"整改照片",type: 'ComponentsInputImage',style:{width: "250px"}},
                            ]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ],toolBtn : [
                {label:"整改",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateRectification'})
                        edit.save()
                    }}
            ]},
        {modelName:'dialog',name:"synchronousInspect",apiName_save:"synchronousInspect",valueModel:'无数据',title:'同步',msg:'是否确认同步县四位一体待整改数据？',type: 'DialogSelect'}

    ]
}
export default myModule
