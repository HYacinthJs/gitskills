import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_cityscape',
    version:'PageNormal',
    api:{
        query: "/cityscape/query",
        queryByAll: "/cityscape/queryByAll",
        queryById:  "/cityscape/queryById",
        save:  "/cityscape/save",
        delete:  "/cityscape/delete",
        dict:  "/dict/queryByAll",
        updateUpload:  "/cityscape/updateUpload",
        updateExamine:  "/cityscape/updateExamine",
        updateIssued:  "/cityscape/updateIssued",
        updateRectification:  "/cityscape/updateRectification",
        updateReexamineOk:  "/cityscape/updateReexamineOk",
        updateReexamineErr:  "/cityscape/updateReexamineErr",
        updateDelay:  "/cityscape/updateDelay",
        queryByGY:  "/area/queryByGY",
        question:  "/question/getTree",
        department:  "/department/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"time",label:"整改期限",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"create_name",label:"来源",type: 'ComponentsInput'},
                        {modelName:'content',name:"area",label:"村（社区）",type: 'ComponentsInputSelect',ajax_url:"queryByGY",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"kind",label:"类型代码",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"市容管理"}]},
                        {modelName:'content',name:"process",label:"进度",type: 'ComponentsInputSelect',options_d_name:"干窑审核流程"},
                        {modelName:'content',name:"state_unfinished",value_default:'未完成',type: 'ComponentsInputHidden'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsInput'},
                {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsInput'},
                {modelName:'content',name:"check_time_str",label:"检查时间",type: 'ComponentsInputDay'},
                {modelName:'content',name:"time_str",label:"整改期限",type: 'ComponentsInputDay'},
                {modelName:'content',name:"kind_name",label:"主要类型",type: 'ComponentsInput'},
                {modelName:'content',name:"kind_name1",label:"次要类型",type: 'ComponentsInput'},
                {modelName:'content',name:"kind_name2",label:"次要类型",type: 'ComponentsInput'},
                {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsInput'},
                {modelName:'content',name:"create_name",label:"来源",type: 'ComponentsInput'},
                {modelName:'content',name:"department_name",label:"整改部门",type: 'ComponentsInput'},
                {modelName:'content',name:"process",label:"步骤",type: 'ComponentsInput'},
                {modelName:'content',name:"myd",label:"步骤2",type: 'ComponentsInputHidden'},
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
            tableBtn : [
                {label:"上传",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateUpload'})
                        edit.query()
                    },process:{process: '上传',flow:"市容管理"}
                },
                {label:"审核",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateExamine'})
                        edit.query()
                    },process:{process: '审核',flow:"市容管理"}
                },
                {label:"下发",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateIssued'})
                        edit.query()
                    },process:{process: '下发',flow:"市容管理"}
                },
                {label:"整改",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateRectification'})
                        edit.query()
                    },process:{process: '整改',flow:"市容管理"}
                },
                {label:"复审",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateReexamine'})
                        edit.query()
                    },process:{process: '复审',flow:"市容管理"}
                },
                {label:"延期",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateDelay'})
                        edit.query()
                    },process:{process: '延期',flow:"市容管理"}
                },
                {label:"编辑", jurisdictionJson: [{jurisdiction: [{name: "edit"}]}],show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit'})
                        edit.query()
                    }},
                {label:"详情",show:true,jurisdictionJson: [{jurisdiction: [{name: "info"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'info'})
                        edit.query()
                    }
                },
                {label:"删除",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){utils.getStore().openDialog({name:'delete'})}},

            ]
        },
        {modelName:'dialog',name:"edit",dialog_width:"970px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area",label:"所属地区",type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择所属地区' }],ajax_url:"queryByGY",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsInput'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsInputDay',rules:[{ validator: utils.my_required, message: '请输入检查时间' }]},
                        {modelName:'content',name:"kind",label:"主要类型",type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择主要类型' }],ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"市容管理"}]},
                        {modelName:'content',name:"kind1",label:"次要类型",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"市容管理"}]},
                        {modelName:'content',name:"kind2",label:"次要类型",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"市容管理"}]},
                        {modelName:'content',name:"department_id",label:"主要责任部门",label_width:'110px',type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择主要责任部门' }],ajax_url:"department",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"type",value:"市容管理"}]},
                        {modelName:'content',name:"department_id2",label:"次要责任部门",type: 'ComponentsInputSelectMultiple',ajax_url:"department",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"type",value:"市容管理"}]},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsInputTextarea',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputUpload',rules:[{ validator: utils.my_required_array, message: '请上传问题照片' }]},
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
                        {modelName:'content',name:"department_name",label:"主要部门",type: 'ComponentsText'},
                        {modelName:'content',name:"department_name2",label:"次要部门",type: 'ComponentsText'},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name:"list",label:"记录",type: 'ComponentsInputTable',addBtn:false,editTr:false,style:{width: "930px"},label_show: false,value_default:[],components:[
                                {modelName:'template',name:"create_name",label:"处理人",type: 'ComponentsText',style:{width: "150px"}},
                                {modelName:'template',name:"create_time",label:"处理时间",type: 'ComponentsText',style:{width: "170px"}},
                                {modelName:'template',name:"proposal",label:"处理意见",type: 'ComponentsText',style:{width: "280px"}},
                                {modelName:'template',name:"process",label:"流程",type: 'ComponentsText',style:{width: "80px"}},
                                {modelName:'template',name:"photo",label:"整改照片",type: 'ComponentsInputImage',style:{width: "250px"}},
                            ]},
                    ]},
            ],toolBtn : []
        },
        {modelName:'dialog',name:"updateUpload",apiName_save:"updateUpload",dialog_width:"970px",title:"上报",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsText'},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsText'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name",label:"主要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name1",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name2",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ],toolBtn : [
                {label:"上报",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateUpload'})
                        edit.save()
                    }}
            ]},
        {modelName:'dialog',name:"updateExamine",apiName_save:"updateExamine",dialog_width:"970px",title:"审核",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area",label:"所属地区",type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择所属地区' }],ajax_url:"queryByGY",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsInput'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsInputDay',rules:[{ validator: utils.my_required, message: '请输入检查时间' }]},
                        {modelName:'content',name:"kind",label:"主要类型",type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择主要类型' }],ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"市容管理"}]},
                        {modelName:'content',name:"kind1",label:"次要类型",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"市容管理"}]},
                        {modelName:'content',name:"kind2",label:"次要类型",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"市容管理"}]},
                        {modelName:'content',name:"department_id",label:"主要责任部门",label_width:'110px',type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择主要责任部门' }],ajax_url:"department",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"type",value:"市容管理"}]},
                        {modelName:'content',name:"department_id2",label:"次要责任部门",type: 'ComponentsInputSelectMultiple',ajax_url:"department",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"type",value:"市容管理"}]},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsInputTextarea',style:{width: "730px"}},
                        {modelName:'content',name:"log_proposal",label:"处理意见",type: 'ComponentsInputTextarea',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name:"list",label:"记录",type: 'ComponentsInputTable',addBtn:false,editTr:false,style:{width: "930px"},label_show: false,value_default:[],components:[
                                {modelName:'template',name:"create_name",label:"处理人",type: 'ComponentsText',style:{width: "150px"}},
                                {modelName:'template',name:"create_time",label:"处理时间",type: 'ComponentsText',style:{width: "170px"}},
                                {modelName:'template',name:"proposal",label:"处理意见",type: 'ComponentsText',style:{width: "280px"}},
                                {modelName:'template',name:"process",label:"流程",type: 'ComponentsText',style:{width: "80px"}},
                                {modelName:'template',name:"photo",label:"整改照片",type: 'ComponentsInputImage',style:{width: "250px"}},
                            ]},
                    ]},
            ],toolBtn : [
                {label:"审核通过",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateExamine'})
                        edit.save()
                    }}
            ]},
        {modelName:'dialog',name:"updateIssued",apiName_save:"updateIssued",dialog_width:"970px",title:"下发",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsText'},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsText'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name",label:"主要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name1",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name2",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"department_name",label:"主要部门",type: 'ComponentsText'},
                        {modelName:'content',name:"department_name2",label:"次要部门",type: 'ComponentsText'},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"time",label:"整改期限",type: 'ComponentsInputDay',rules:[{ validator: utils.my_required, message: '请输入整改期限' }]},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name:"list",label:"记录",type: 'ComponentsInputTable',addBtn:false,editTr:false,style:{width: "930px"},label_show: false,value_default:[],components:[
                                {modelName:'template',name:"create_name",label:"处理人",type: 'ComponentsText',style:{width: "150px"}},
                                {modelName:'template',name:"create_time",label:"处理时间",type: 'ComponentsText',style:{width: "170px"}},
                                {modelName:'template',name:"proposal",label:"处理意见",type: 'ComponentsText',style:{width: "280px"}},
                                {modelName:'template',name:"process",label:"流程",type: 'ComponentsText',style:{width: "80px"}},
                                {modelName:'template',name:"photo",label:"整改照片",type: 'ComponentsInputImage',style:{width: "250px"}},
                            ]},
                    ]},
            ],toolBtn : [
                {label:"下发",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateIssued'})
                        edit.save()
                    }}
            ]},
        {modelName:'dialog',name:"updateRectification",apiName_save:"updateRectification",dialog_width:"970px",title:"整改",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsText'},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsText'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name",label:"主要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name1",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name2",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"department_name",label:"主要部门",type: 'ComponentsText'},
                        {modelName:'content',name:"department_name2",label:"次要部门",type: 'ComponentsText'},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name:"log_photo",label:"整改照片",type: 'ComponentsInputUpload',rules:[{ validator: utils.my_required_array, message: '请上传整改照片' }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name:"list",label:"记录",type: 'ComponentsInputTable',addBtn:false,editTr:false,style:{width: "930px"},label_show: false,value_default:[],components:[
                                {modelName:'template',name:"create_name",label:"处理人",type: 'ComponentsText',style:{width: "150px"}},
                                {modelName:'template',name:"create_time",label:"处理时间",type: 'ComponentsText',style:{width: "170px"}},
                                {modelName:'template',name:"proposal",label:"处理意见",type: 'ComponentsText',style:{width: "280px"}},
                                {modelName:'template',name:"process",label:"流程",type: 'ComponentsText',style:{width: "80px"}},
                                {modelName:'template',name:"photo",label:"整改照片",type: 'ComponentsInputImage',style:{width: "250px"}},
                            ]},
                    ]},
            ],toolBtn : [
                {label:"整改",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateRectification'})
                        edit.save()
                    }}
            ]},
        {modelName:'dialog',name:"updateReexamine",system_id:"updateReexamine",dialog_width:"970px",title:"复审",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsText'},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsText'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name",label:"主要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name1",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name2",label:"次要类型",type: 'ComponentsText'},
                        {modelName:'content',name:"department_name",label:"主要部门",type: 'ComponentsText'},
                        {modelName:'content',name:"department_name2",label:"次要部门",type: 'ComponentsText'},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name:"list",label:"记录",type: 'ComponentsInputTable',addBtn:false,editTr:false,style:{width: "930px"},label_show: false,value_default:[],components:[
                                {modelName:'template',name:"create_name",label:"处理人",type: 'ComponentsText',style:{width: "150px"}},
                                {modelName:'template',name:"create_time",label:"处理时间",type: 'ComponentsText',style:{width: "170px"}},
                                {modelName:'template',name:"proposal",label:"处理意见",type: 'ComponentsText',style:{width: "280px"}},
                                {modelName:'template',name:"process",label:"流程",type: 'ComponentsText',style:{width: "80px"}},
                                {modelName:'template',name:"photo",label:"整改照片",type: 'ComponentsInputImage',style:{width: "250px"}},
                            ]},
                    ]},
            ],toolBtn : [
                {label:"通过",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateReexamineOk'})
                        edit.query()
                    }},
                {label:"不通过",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateReexamineErr'})
                        edit.query()
                    }},
            ]
        },
        {modelName:'dialog',name:"updateReexamineOk",apiName_save:"updateReexamineOk",close_dialog:["updateReexamine"],type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"log_proposal",label:"处理意见",type: 'ComponentsInputTextarea'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"updateReexamineErr",apiName_save:"updateReexamineErr",close_dialog:["updateReexamine"],type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"log_proposal",label:"处理意见",type: 'ComponentsInputTextarea'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"updateDelay",apiName_save:"updateDelay",title:"延期",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"time",label:"整改期限",type: 'ComponentsInputDay',rules:[{ validator: utils.my_required, message: '请输入整改期限' }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
