import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal_jsgaj',
    name:'sys_files',
    version:'PageNormal_jsgaj',
    api:{
        delete:  "/files/delete",
        save:  "/files/save",
        saveQZCS:  "/filesOperate/save",
        savePZ:  "/filesRemark/save",
        saveState:  "/filesState/save",
        saveNote:  "/filesNote/save",
        saveNoteTemporary:  "/filesNote/saveNoteTemporary",
        saveNoteUnit:  "/filesNoteUnit/save",
        queryById:  "/files/queryById",
        queryByIdNote:  "/files/queryByIdNote",
        query:  "/files/query",
        toExecl:  "/files/toExecl",
        toExeclNote:  "/files/toExeclNote",
        toExeclNoteUnit:  "/files/toExeclNoteUnit",
        queryByLabel:"/option/queryByLabel",
        queryByDepartment:"/directories/queryByDepartment",
        getTree:"/department/getTree"
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQueryOnly',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: "f_type_option", label: "案件类型",type: "ComponentsInputSelect",system_id:"f_type_option",
                            ajax_url:"queryByLabel",ajax_params:[{type: "text", value: "案件类型", name: "o_label"}],
                        },
                        {modelName:'content',name: "fs_type_option", label: "案卷状态", type: "ComponentsInputSelect",
                            ajax_url:"queryByLabel",ajax_params:[{type: "control", system_id:"f_type_option", name: "o_id_top"}, {type: "text", value: "事由", name: "o_label"}]},
                        {modelName:'content',name: "f_state", label: "是否完成", type: "ComponentsInputSelect", value_default: -1,
                            options: [{value: -1, label: "未完成"}, {value: 1, label: "完成"}, {value: 22, label: "全部"}]},
                        {modelName:'content',name: "f_name", label: "案件名称", type: "ComponentsInput"},
                        {modelName:'content',name: "f_no", label: "案件编号", type: "ComponentsInput"},
                        {modelName:'content',name: "f_suspect", label: "嫌疑人", type: "ComponentsInput"},
                        {modelName:'content', name: "dp_id", label: "部门", type: "ComponentsInputCascader", style: {width: "290px" },
                            ajax_url:"getTree",
                        },
                        {modelName:'content',name: "qzcs_time1",label_width: "120px", label: "开始措施时间", type: "ComponentsInputDay"},
                        {modelName:'content',name: "qzcs_time2",label_width: "120px", label: "结束措施时间", type: "ComponentsInputDay"},
                        {modelName:'content',name: "case_time", label: "受案时间", start_label: "开始时间", end_label: "结束时间",type: "ComponentsInputDayInterval",
                        },
                        {modelName:'content',name: "problem_id", label: "problem_id", type: "ComponentsInputHidden"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                        {modelName:'content',type: 'ComponentsInputImport',dialogName:"edit",import_name:"添加",
                            jurisdictionJson: [{jurisdiction: [{name: "edit"}]}]},
                        {modelName:'content',type: 'ComponentsInputImport',dialogName:"delete",import_name:"删除",
                            jurisdictionJson: [{jurisdiction: [{name: "edit"}]}]},
                        {modelName:'content',type: 'ComponentsInputImport',dialogName:"excel",import_name:"导出excel"},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContentOnly',primaryKey:"f_id",
            components:[
                {modelName:'content',name: "f_name", label: "案件名称", type: "ComponentsInput", cellClick: function () {
                    }},
                {value: "f_label", label: "案件类型", align: "center", type: "input"},
                {modelName:'content',name: "f_no", label: "案件编号", type: "ComponentsInput"},
                {modelName:'content',name: "dp_nickname", label: "部门", type: "ComponentsInput"},
                {modelName:'content',name: "d_name", label: "办案人", type: "ComponentsInput"},
                {modelName:'content',name: "fo_operate_type_str", label: "措施名称", type: "ComponentsInput"},
                {modelName:'content',name: "tx_time1", label: "提醒时间", type: "ComponentsInput"},
                {modelName:'content',name: "fo_operate_time1", label: "措施时间", type: "ComponentsInput"},
                {modelName:'content',name: "fo_operate_time2", label: "到期时间", type: "ComponentsInput"},
                {modelName:'content',name: "fs_type_str", label: "案卷状态", type: "ComponentsInput"},
                {modelName:'content',name: "f_type_str", label: "案卷类型", type: "ComponentsInput"},
                {modelName:'content',name: "f_case_time", label: "受案时间", type: "ComponentsInput"},
                {modelName:'content',name: "tx_type", label: "提醒状态", type: "ComponentsInputHidden"},
                {modelName:'content',name: "create_user", label: "cteate_user", type: "ComponentsInputHidden"}
            ],tableBtn : [
                {label:"编辑",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "edit"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit',title:"编辑"})
                        edit.query()
                    }},
                {label:"详情",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "info"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'infoList',title:"详情"})
                        edit.query()
                    }
                },
                {label:"删除",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'delete',title:"删除"})
                        edit.query()
                    }
                },
                {label:"案卷状态",jurisdictionJson: [{jurisdiction: [{name: "updateState"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'stateList',title:"案卷状态"})
                        edit.query()
                    }
                },
                {label:"案件进程",jurisdictionJson: [{jurisdiction: [{name: "coerciveMeasures"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'coerciveMeasuresList',title:"案件进程"})
                        edit.query()
                    }
                },
                {label:"导出",jurisdictionJson: [{jurisdiction: [{name: "updateState"}]}],click:function(data:any){
                        let edit =  utils.getStore().openDialog({name:'excel',title:"导出"})
                        edit.query()
                    }
                },
                {label:"添加法制审核",jurisdictionJson: [{jurisdiction: [{name: "note"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'noteList',title:"添加法制审核"})
                        edit.query()
                    }},
                {label:"导出法制审核",jurisdictionJson: [{jurisdiction: [{name: "excelNote"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'execlNote',title:"导出法制审核"})
                        edit.query()
                    }},
                {label:"添加单位审核",jurisdictionJson: [{jurisdiction: [{name: "noteUnit"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'noteUnitList',title:"添加单位审核"})
                        edit.query()
                    }},
                {label:"导出单位审核",jurisdictionJson: [{jurisdiction: [{name: "excelNoteUnit"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'execlNoteUnit',title:"导出单位审核"})
                        edit.query()
                    }},

            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "f_name", label: "案件名称", type: "ComponentsInput",
                            rules:[{validator: utils.my_required, message: "请输入案件名称"}]},
                        {modelName:'content', name: "f_no", label: "案件编号", type: "ComponentsInput"},
                        {modelName:'content',name: "f_suspect", label: "嫌疑人",  type: "ComponentsInput",
                            rules:[{validator: utils.my_required, message: "请输入嫌疑人"}]},
                        {modelName:'content', name: "f_case_time", label: "受案时间", type: "ComponentsInputDay",
                            jurisdictionJson: [{jurisdiction: [{name: "add"}]}],
                            rules:[{validator: utils.my_required, message: "请输入受案时间"}]},
                        {modelName:'content',name: "f_type_option", label: "案件类型", type: "ComponentsInputSelect",
                            ajax_url:"queryByLabel",ajax_params:[{type: "text", value: "案件类型", name: "o_label"}],
                            jurisdictionJson: [{jurisdiction: [{name: "add"}]}],
                            rules:[{validator: utils.my_required, message: "请选择案件类型"}],
                        },
                        {modelName:'content', name: "u_id_create", label: "办案人", type: "ComponentsInputSelect",
                            rules:[{validator: utils.my_required, message: "请选择办案人"}],
                            ajax_url:"queryByDepartment",props_label:"d_name",props_value:"d_id",
                        },
                        {modelName:'content',name: "u_id_notify", label: "到期通知人",  limit: 7, type: "ComponentsInputSelectMultiple",
                            rules:[{validator: utils.my_required, message: "请选择到期通知人"}],
                            ajax_url:"queryByDepartment",props_label:"d_name",props_value:"d_id",style: {width: "440px"}},
                        {modelName:'content',name: 'f_id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"noteList",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom', components:[
                        {modelName:'content', name: "fn_name", label: "措施名称", type: "ComponentsInputRadio",jurisdictionJson: [{"row":[{"f_type_text":"刑事案件"}]}],
                            options: [{value: "刑拘", label: "刑拘"}, {value: "取保", label: "取保"}, {value: "监居", label: "监居"}, {value: "逮捕", label: "逮捕"}, {value: "起诉", label: "起诉"}],
                            style: {width: "490px" , 'line-height': '40px' },
                            rules:[{validator: utils.my_required, message: "请选择类型"}]},
                        {modelName:'content', name: "fn_name2", label: "措施名称", type: "ComponentsInputRadio",jurisdictionJson: [{"row":[{"f_type_text":"行政案件"}]}], options: [{value: "审批", label: "审批"}, {value: "初评", label: "初评"}, {value: "复评", label: "复评"}],
                            style: {width: "490px" ,'line-height': '40px' },
                            rules:[{validator: utils.my_required, message: "请选择类型"}]},
                        {modelName:'content', name: "fn_day_number", label: "办案用时", type: "ComponentsInput",
                            jurisdictionJson: [{"row":[{"f_type_text":"刑事案件"}],
                                not_components:[{fn_name:"起诉"}]}],},
                        {modelName:'content', name: "fn_send", label: "发送短信"  , type: "ComponentsInputSelect", options: [{label: "发送", value: "发送"}, {label: "不发送", value: "不发送"}]},
                        {modelName:'content', name: "fn_note", label: "提醒内容" , type: "ComponentsInputTextarea" },
                        {modelName:'content', name: "f_type_text", type: "ComponentsInputHidden"},
                        {modelName:'content', name: "f_id", type: "ComponentsInputHidden"},
                        {modelName:'content', name: "fn_id", type: "ComponentsInputHidden"}
                    ]},
                {modelName:'from',type: 'AssemblyFrom',name:"base1",components:[
                        {modelName:'content', name: "problem_id", label: "问题类型", type: "ComponentsInputCascader",style: {width: "490px"},
                            change_on_select:false,show_all_levels:true,
                            ajax: {url: "/filesProblem/getTree"}, props: {value: "id", label: "label"} },
                        {modelName:'content', name: "problem_mark", label: "扣分", type: "ComponentsInput"},
                        {modelName:'content',name: "problem", label: "问题", },
                        {modelName:'content', name: "fnp_id", type: "ComponentsInputHidden"}
                    ]},
            ]},
        {modelName:'dialog',name:"noteUnitList",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "fn_note", label: "便签内容", type: "ComponentsInputTextarea",
                            rules:[{validator: utils.my_required, message: "请输入便签内容"}]},
                        {modelName:'content', name: "f_id", type: "ComponentsInputHidden"}
                    ]},
            ]},
        {modelName:'dialog',name:"infoList",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "f_name", label: "案件名称",style: {'line-height': '40px' } ,type: "ComponentsInput",show_type:'详情' },
                        {modelName:'content', name: "f_no", label: "案件编号",style: {'line-height': '40px' } ,type: "ComponentsInput",show_type:'详情'},
                        {modelName:'content', name: "f_suspect", label: "嫌疑人",style: {'line-height': '40px' } , type: "ComponentsInput",show_type:'详情'},
                        {modelName:'content', name: "f_case_time", label: "受案时间",style: {'line-height': '40px' } , type: "ComponentsInput",show_type:'详情',
                            public_custom: function (val:any) {return val.substring(0, 10);} },
                        {modelName:'content', name: "f_type_option", label: "案件类型",style: {'line-height': '40px' } , type: "ComponentsInputSelect",show_type:'详情',
                            ajax_url:"queryByLabel", ajax_params: [{type: "text", value: "案件类型", name: "o_label"}]},
                        {modelName:'content', name: "u_id_create", label: "办案人",style: {'line-height': '40px' } , type: "ComponentsInputSelect",show_type:'详情',
                            rules: [{ validator: utils.my_required, message: "请选择办案人"}],
                            ajax_url:"queryByDepartment",props_label:"d_name",props_value:"d_id"},
                        {modelName:'content', name: "u_id_notify", label: "到期通知人",  style: {'line-height': '40px' } ,type: "ComponentsInputSelect",show_type:'详情', limit: 7,
                             rules: [{ validator: utils.my_required, message: "请选择到期通知人"}],
                            ajax_url:"queryByDepartment",props_label:"d_name",props_value:"d_id"},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',name:"base1",components:[
                        {modelName:'content', name: "o_label", type: "ComponentsInput", label: "类型"},
                        {modelName:'content', name: "fo_operate_time1", type: "ComponentsInput", label: "开始时间", public_custom: function (val:any) {if (utils.isNotNull(val)) {return val.substring(0, 10);}}},
                        {modelName:'content', name: "fo_operate_time2", type: "ComponentsInput", label: "结束时间", public_custom: function (val:any) {if (utils.isNotNull(val)) {return val.substring(0, 10);}}},
                        {modelName:'content', name: "create_time", type: "ComponentsInput", label: "操作时间", public_custom: function (val:any) {if (utils.isNotNull(val)) {return val.substring(0, 16);}}}
                    ]},
                {modelName:'from',type: 'AssemblyFrom',name:"base2",components:[
                        {modelName:'content', name: "o_label2", type: "ComponentsInput", label: "事由"},
                        {modelName:'content', name: "o_label", type: "ComponentsInput", label: "出入柜操作"},
                        {modelName:'content', name: "fs_inout_time", type: "ComponentsInput", label: "出入柜时间", public_custom: function (val:any) {if (utils.isNotNull(val)) {return val.substring(0, 16);}}},
                        {modelName:'content', name: "create_time", type: "ComponentsInput", label: "操作时间", public_custom: function (val:any) {if (utils.isNotNull(val)) {return val.substring(0, 16);}}}
                    ]},
                {modelName:'from',type: 'AssemblyFrom',name:"base3",components:[
                        {modelName:'content', name: "ui_name", type: "ComponentsInput", label: "录入人"},
                        {modelName:'content', name: "fn_name", type: "ComponentsInput", label: "措施名称"},
                        {modelName:'content', name: "fn_day_number", type: "ComponentsInput", label: "办案用时(天)"},
                        {modelName:'content', name: "fn_send", type: "ComponentsInput", label: "发送短信"},
                        {modelName:'content', name: "fn_note", type: "ComponentsInput", label: "提醒内容"},
                        {modelName:'content', name: "problem_list", type: "ComponentsInput", label: "问题"},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',name:"base4",components:[
                        {modelName:'content', name: "ui_name", type: "ComponentsInput", label: "录入人"},
                        {modelName:'content', name: "fn_note", type: "ComponentsInput", label: "便签内容"},
                    ]},

                    ]},
        {modelName:'dialog',name:"infoList2",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "f_suspect", label: "嫌疑人", type: "ComponentsInput" }
                    ]},
            ]},
        {modelName:'dialog',name:"stateList",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: "f_name", label: "案件名称",  type: "ComponentsInput",
                            rules: [{ validator: utils.my_required, message: "请输入案件名称"}],
                            disabledJson: [{show: [{name: "hidden"}]}]},
                        {modelName:'content',name: "fs_type_option", label: "事由", type: "ComponentsInputSelect",
                            rules:[{validator: utils.my_required, message: "请选择事由"}],
                            ajax_url:"queryByLabel",ajax_params:[{type: "control", system_id:"f_type_option1", name: "o_id_top"}, {type: "text", value: "事由", name: "o_label"}]},
                        { modelName:'content',name: "fs_inout_type_option", label: "出入柜操作", type: "ComponentsInputSelect",
                            rules: [{ validator: utils.my_required, message: "请输入出入柜操作"}],
                            ajax_url: "queryByLabel", ajax_params: [{type: "text", value: "出入柜操作", name: "o_label"}]},
                        {modelName:'content',name: "fs_inout_time", label: "出入柜时间",type:"ComponentsInputDay",
                            rules: [{ validator: utils.my_required, message: "请输入出入柜时间"}],
                         },
                        {modelName:'content',name: "f_id", type: "ComponentsInputHidden"},
                        {modelName:'content',name: "f_type_option", system_id:"f_type_option1", type: "ComponentsInputHidden"},
                        {modelName:'content',name: "fs_inout_type", type: "ComponentsInputHidden"}
                    ]},
            ]},
        {modelName:'dialog',name:"coerciveMeasuresList",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "f_name", label: "案件名称", type: "input",
                            rules: [{ validator: utils.my_required, message: "请输入案件名称",}],
                            disabledJson: [{show: [{name: "hidden"}]}]},
                        {modelName:'content', name: "fo_operate_type_option1", label_width: "120px",  label: "强制措施", type: "ComponentsInputSelect",
                            jurisdictionJson: [{"row":[{"f_type_text":"刑事案件"}]}],
                            rules: [{ validator: utils.my_required, message: "请选择强制措施",}],
                            ajax: "queryByLabel", ajax_params: [{type: "control", system_id: "f_type_option2", name: "o_id_top"}, {type: "text", value: "强制措施", name: "o_label"}]},
                        {modelName:'content', name: "fo_operate_type_option2",label: "行政处罚决定", label_width: "120px", type: "ComponentsInputSelect",
                            jurisdictionJson: [{"row":[{"f_type_str":"行政案件"}]}],
                            rules: [{ validator: utils.my_required, message: "请选择行政处罚决定"}],
                             ajax: "queryByLabel", ajax_params: [{type: "control", system_id: "f_type_option2", name: "o_id_top"}, {type: "text", value: "行政处罚决定", name: "o_label"}]},
                        {modelName:'content', name: "fo_operate_time1",label: "开始时间", type: "ComponentsInputDay",
                            rules: [{ validator: utils.my_required, message: "请输入开始时间",}]},
                        {modelName:'content', name: "fo_operate_time2", label: "到期时间", type: "ComponentsInputDay",label_width: "120px",
                            jurisdictionJson: [{"row": [{"f_type_str": "刑事案件"}], not_components_label: [{fo_operate_type_option1: "在办"}]}],
                            rules: [{ validator: utils.my_required, message: "请输入到期时间"}]},
                        {modelName:'content', name: "f_id", type: "ComponentsInputHidden"},
                        {modelName:'content', name: "f_type_option",system_id:"f_type_option2", type: "ComponentsInputHidden"},
                        {modelName:'content', name: "f_type_str", type: "ComponentsInputHidden"}
                    ]},
            ]},
        {modelName:'dialog',name:"rectificationOpinionList",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "f_name", label: "案件名称", type: "ComponentsInputHidden"},
                        {modelName:'content', name: "fr_remark", label: "批注", type: "ComponentsInputTextarea" },
                        {modelName:'content', name: "f_id", label: "id", type: "ComponentsInputHidden" },
                        {modelName:'content', name: "fr_id", type: "ComponentsInputHidden"}
                    ]},
            ]},

    ]
}
export default myModule
