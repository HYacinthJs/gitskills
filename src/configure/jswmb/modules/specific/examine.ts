import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_examine',
    version:'PageNormal',
    api:{
        query: "/examine/query",
        queryByAll: "/examine/queryByAll",
        queryById:  "/examine/queryById",
        save:  "/examine/save",
        delete:  "/examine/delete",
        queryBase:  "/examine/queryBase",
        department:  "/department/queryByAll",
        industry:  "/industry/queryByAll",
        address:  "/address/queryByAll",
        option:  "/option/queryByAll",
        updateState1:  "/examine/updateState1",
        updateState2:  "/examine/updateState2",
        updateState3:  "/examine/updateState3",
        updateState4:  "/examine/updateState4",
        updateState5:  "/examine/updateState5",
        updateState6:  "/examine/updateState6",
        updateState7:  "/examine/updateState7",
        updateState8:  "/examine/updateState8",
        updateState9:  "/examine/updateState9",
        updateState10:  "/examine/updateState10",
        updateState11:  "/examine/updateState11",
        updateState12:  "/examine/updateState12",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"industry_id",label:"考察类别",type: 'ComponentsInputSelect',ajax_url:"industry",props_label:"name",props_value:"id"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"standard_name",label:"考察项目",type: 'ComponentsInput',},
                {modelName:'content',name:"address",label:"问题地址",type: 'ComponentsInput'},
                {modelName:'content',name:"department_name",label:"主要责任部门",type: 'ComponentsInput'},
                {modelName:'content',name:"time",label:"预计完成时间",type: 'ComponentsInputImage'},
                {modelName:'content',name:"finish_time",label:"实际完成时间",type: 'ComponentsInputImage'},
                {modelName:'content',name:"source",label:"督查来源",type: 'ComponentsInput'},
                {modelName:'content',name:"process",label:"当前流程",type: 'ComponentsInput'},
                {modelName:'content',name:"create_name",label:"上报人员",type: 'ComponentsInput'},
            ],
            cell_style : ({row, rowIndex}:any) => {
                if(utils.isNotNull(row.time)){
                    let endTime:any = new Date(row.time); // 开始时间
                    let startTime:any = new Date(); // 结束时间
                    let usedTime = endTime - startTime;
                    let days = Math.floor(usedTime / (24 * 3600 * 1000));
                    if (days>10) {
                        return "background-color:Coral";
                    } else if (days>0) {
                        return "background-color:GoldEnrod";
                    }
                }
            },
            /*toolBtn : [
                {label:"添加",jurisdictionJson: [{jurisdiction: [{name: "add"}]}],show:true,type:"primary",click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'edit'})
                        edit.queryBase()
                    }},
                {label:"删除",type:"danger",click:function(data:any){utils.getStore().openDialog({name:'deleteAll'})}},
            ],*/
            tableBtn : [
                {label:"编辑",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit'})
                        edit.query()
                    }},
                {label:"详情",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'info'})
                        edit.query()
                    }},
                {label:"网格单位审核",show:true,process:{process: '网格单位审核',flow:"督查"},click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examine'})
                        edit.query()
                    }
                },
                {label:"下发",show:true,process:{process: '下发',flow:"督查"},click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit2'})
                        edit.query()
                    }
                },
                {label:"取消下发",show:true,process:{process: '取消下发',flow:"督查"},click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'delete3'})
                        edit.query()
                    }
                },
                {label:"下发申诉",show:true,process:{process: '下发申诉',flow:"督查"},click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit3'})
                        edit.query()
                    }
                },
                {label:"二次下发",show:true,process:{process: '二次下发',flow:"督查"},click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit4'})
                        edit.query()
                    }
                },
                {label:"申请延期",show:true,process:{process: '申请延期',flow:"督查"},click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit5'})
                        edit.query()
                    }
                },
                {label:"延期",show:true,process:{process: '延期',flow:"督查"},click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit7'})
                        edit.query()
                    }
                },
                {label:"申请销号",show:true,process:{process: '申请销号',flow:"督查"},click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit6'})
                        edit.query()
                    }
                },
                {label:"审核销号",show:true,process:{process: '审核销号',flow:"督查"},click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examine2'})
                        edit.query()
                    }
                },
                {label:"删除",click:function(data:any){utils.getStore().openDialog({name:'delete'})}},
            ]
        },
        {modelName:'dialog',name:"edit",dialog_width:"970px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"industry_id",label:"考察类别",type: 'ComponentsInputSelect',ajax_url:"industry",props_label:"name",props_value:"id",system_id:"system_industry_id",associated_notice:["system_content"]},
                        {modelName:'content',name:"source",label:"督查来源",type: 'ComponentsInputSelect',ajax_url:"option",ajax_params:[{type:"text",name:"standard_attribute_name",value:"督查来源-责任单位"}]},
                        {modelName:'content',name:"address",label:"问题地址",type: 'ComponentsInputAutocomplete',ajax_url:"address",props_value:"name"},
                        {modelName:'content',name:"address_detailed",label:"详细地址",type: 'ComponentsInput',style:{width: "730px"}},
                        {modelName:'content',name:"content",label:"问题描述",type: 'ComponentsInputTextarea',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputUpload',limit:5},
                        {modelName:'content',name:"p_id",label:"具体问题",type: 'ComponentsInputTableSelect2',ajax_url:"queryBase",system_id:"system_content",ajax_params:[{type:"control",name:"industry_id",system_id:"system_industry_id"}],label_show: false},
                        {modelName:'content',name:"lng",label:"地址定位",type: 'ComponentsInputHidden'},
                        {modelName:'content',name:"lat",label:"地址定位",type: 'ComponentsInputHidden'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"info",dialog_width:"970px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"industry_id",label:"考察类别",type: 'ComponentsText'},
                        {modelName:'content',name:"source",label:"督查来源",type: 'ComponentsText'},
                        {modelName:'content',name:"address",label:"问题地址",type: 'ComponentsText'},
                        {modelName:'content',name:"time",label:"计划完成时间",type: 'ComponentsText'},
                        {modelName:'content',name:"finish_time",label:"实际完成时间",type: 'ComponentsText'},
                        {modelName:'content',name:"address",label:"问题地址",type: 'ComponentsText'},
                        {modelName:'content',name:"address_detailed",label:"详细地址",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"content",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name:"standard_attribute_name",label:"具体问题",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',name:"base1",label:"整改记录",components:[
                        {modelName:'content',name:"list",label:"详情",type: 'ComponentsInputTable',addBtn:false,editTr:false,style:{width: "930px"},label_show: false,value_default:[],components:[
                            {modelName:'template',name:"photo",label:"图片",type: 'ComponentsInputImage'},
                            {modelName:'template',name:"state",label:"状态",type: 'ComponentsText'},
                            {modelName:'template',name:"fail_reason",label:"失败原因",type: 'ComponentsText'},
                            {modelName:'template',name:"create_time",label:"时间",type: 'ComponentsText'},
                        ]},
                    ]},
            ],
            toolBtn:[]
        },
        {modelName:'dialog',name:"examine",system_id:"system_examine",dialog_width:"970px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"industry_id",label:"考察类别",type: 'ComponentsText'},
                        {modelName:'content',name:"source",label:"督查来源",type: 'ComponentsText'},
                        {modelName:'content',name:"address",label:"问题地址",type: 'ComponentsText'},
                        {modelName:'content',name:"address_detailed",label:"详细地址",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"content",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name:"standard_attribute_name",label:"具体问题",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]}
            ],toolBtn : [
                {label:"通过",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examineOk'})
                        edit.query()
                    }},
                {label:"不通过",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examineErr'})
                        edit.query()
                    }},
            ]
        },
        {modelName:'dialog',name:"examineOk",apiName_save:"updateState2",close_dialog:["system_examine"],type: 'DialogSelect',valueModel:"一般",title:'审核',msg:'是否确认审核通过？'},
        {modelName:'dialog',name:"examineErr",apiName_save:"updateState3",close_dialog:["system_examine"],type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"fail",label:"不通过原因",type: 'ComponentsInputTextarea'},
                        {modelName:'content',name: 'id', label: 'id3',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"edit2",apiName_save:"updateState4",dialog_width:"970px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"department_id",label:"主要责任部门",type: 'ComponentsInputSelect',ajax_url:"department",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"department_id2",label:"次要责任部门",type: 'ComponentsInputSelectMultiple',ajax_url:"department",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"time",label:"整改日期",type: 'ComponentsInputDay'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"delete3",apiName_save:"updateState5",type: 'DialogSelect',title:'取消',msg:'是否取消下发？',valueModel:"一般"},
        {modelName:'dialog',name:"edit3",apiName_save:"updateState6",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"appeal",label:"申诉原因",type: 'ComponentsInputTextarea'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"edit4",apiName_save:"updateState7",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"department_id",label:"主要责任部门",type: 'ComponentsInputSelect',ajax_url:"department",props_label:"name",props_value:"id"},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},

        {modelName:'dialog',name:"edit5",apiName_save:"updateState8",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"delay_file",label:"延期资料附件",type: 'ComponentsInputUpload'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"edit7",apiName_save:"updateState9",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"delay_file",label:"延期资料附件",type: 'ComponentsInputDownload'},
                        {modelName:'content',name:"time",label:"延期",type: 'ComponentsInputDay'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"edit6",apiName_save:"updateState10",dialog_width:"970px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"industry_id",label:"考察类别",type: 'ComponentsText'},
                        {modelName:'content',name:"source",label:"督查来源",type: 'ComponentsText'},
                        {modelName:'content',name:"address",label:"问题地址",type: 'ComponentsText'},
                        {modelName:'content',name:"time",label:"计划完成时间",type: 'ComponentsText'},
                        {modelName:'content',name:"address_detailed",label:"详细地址",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"content",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name:"standard_attribute_name",label:"具体问题",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo_record",label:"整改照片",type: 'ComponentsInputUpload',limit:5,rules:[{ validator: utils.my_required_array, message: '请上传整改照片' }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',name:"base1",label:"整改记录",components:[
                        {modelName:'content',name:"list",label:"详情",type: 'ComponentsInputTable',addBtn:false,editTr:false,style:{width: "930px"},label_show: false,value_default:[],components:[
                                {modelName:'template',name:"photo",label:"图片",type: 'ComponentsInputImage'},
                                {modelName:'template',name:"state",label:"状态",type: 'ComponentsText'},
                                {modelName:'template',name:"fail_reason",label:"失败原因",type: 'ComponentsText'},
                                {modelName:'template',name:"create_time",label:"时间",type: 'ComponentsText'},
                            ]},
                    ]},
            ]},

        {modelName:'dialog',name:"examine2",system_id:"system_examine2",dialog_width:"970px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"industry_id",label:"考察类别",type: 'ComponentsText'},
                        {modelName:'content',name:"source",label:"督查来源",type: 'ComponentsText'},
                        {modelName:'content',name:"address",label:"问题地址",type: 'ComponentsText'},
                        {modelName:'content',name:"time",label:"计划完成时间",type: 'ComponentsText'},
                        {modelName:'content',name:"finish_time",label:"实际完成时间",type: 'ComponentsText'},
                        {modelName:'content',name:"address_detailed",label:"详细地址",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"content",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name:"standard_attribute_name",label:"具体问题",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',name:"base1",label:"整改记录",components:[
                        {modelName:'content',name:"list",label:"详情",type: 'ComponentsInputTable',addBtn:false,editTr:false,style:{width: "930px"},label_show: false,value_default:[],components:[
                                {modelName:'template',name:"photo",label:"图片",type: 'ComponentsInputImage'},
                                {modelName:'template',name:"state",label:"状态",type: 'ComponentsText'},
                                {modelName:'template',name:"fail_reason",label:"失败原因",type: 'ComponentsText'},
                                {modelName:'template',name:"create_time",label:"时间",type: 'ComponentsText'},
                            ]},
                    ]},
            ],toolBtn : [
                {label:"通过",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examineOk2'})
                        edit.query()
                    }},
                {label:"不通过",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examineErr2'})
                        edit.query()
                    }},
            ]
        },
        {modelName:'dialog',name:"examineOk2",apiName_save:"updateState11",close_dialog:["system_examine2"],type: 'DialogSelect',title:'审核',msg:'是否确认审核通过？',valueModel:"一般",},
        {modelName:'dialog',name:"examineErr2",apiName_save:"updateState12",close_dialog:["system_examine2"],type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"fail_reason",label:"原因",type: 'ComponentsInputTextarea'},
                        {modelName:'content',name: 'id', label: 'id3',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
