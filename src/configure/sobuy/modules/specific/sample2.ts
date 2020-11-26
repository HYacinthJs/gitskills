import * as utils from "@/components/util/utils";
import {AssemblyContent} from "@/components/components/assembly/content/model";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_sample2',
    version:'PageNormal',
    api:{
        query: "/sample/query",
        queryByAll: "/sample/queryByAll",
        queryById:  "/sample/queryById",
        save:  "/sample/save",
        gydadd:"/gyd/save",
        delete:  "/sample/delete",
        inspect:  "/sample/inspect",
        examineOk:  "/sample/examineOk",
        examineErr:  "/sample/examineErr",
        queryBySupplier:  "/supplier/queryBySupplier",
        queryByFactory:  "/supplier/queryByFactory",
        queryByInspector:  "/user/queryByAll",
        apiName_download:  "/sample/toExcel",
        company: "/company/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',inline:false,components:[
               /*       {modelName:'content',name:"company_id",label:"公司名称",type: 'ComponentsInputSelect',jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"name",label:"样品名称",type: 'ComponentsInput'},*/
                        {modelName:'content',name:"factory_id", label: '打样工厂',type:'ComponentsInputSelect',rules:[{validator: utils.my_required, message: "请选择打样工厂"}],ajax_url:"queryByFactory",props_label:"name",props_value:"name"},

                        {modelName:'content',name:"address",label:"问题地址",type: 'ComponentsInputAutocomplete',ajax_url:"company",props_value:"name"},
                        {modelName:'content',name:"name2",label:"样品名称2",type: 'ComponentsInputEchartsbt',label_show:false,item_style:{width: "30%",float: 'left',height: "200px"},style:{width: "100%",height: "200px"}},
                        {modelName:'content',name:"name3",label:"样品名称3",type: 'ComponentsInputEchartszzt',label_show:false,item_style:{width: "30%",float: 'left',height: "200px"},style:{width: "100%",height: "200px"}},
                        {modelName:'content',type: 'ComponentsInputReQuery',item_style:{width: "30%",float: 'left'}},
                    ]}
            ]
        },
        {
            modelName:'content',title:"样品管理",type: 'AssemblyContent', components:[
                {modelName:'content',name:"company_name",label:"进出口公司",type: 'ComponentsInput'},
                {modelName:'content',name:"no",label:"样品编号",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"样品名称",type: 'ComponentsInput'},
                {modelName:'content',name:"source",label:"样品来源",type: 'ComponentsInput'},
                {modelName:'content',name:"arrival_time",label:"到样时间",type: 'ComponentsInputDay'},
                {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInput'},
                {modelName:'content',name:"factory_id",label:"打样工厂",type: 'ComponentsInput'},
                {modelName:'content',name:"inspector_id",label:"检验人员",type: 'ComponentsInput'},
                {modelName:'content',name:"inspector_time",label:"检验时间",type: 'ComponentsInputDay'},
                {modelName:'content',name:"photo",label:"样品图",type: 'ComponentsInput'},
                {modelName:'content',name:"state",label:"状态",type: 'ComponentsInput'},
                {modelName:'content',name:"no",label:"备注",type: 'ComponentsInput'},
                {modelName:'content',name:"id",label:"备注",type: 'ComponentsInputHidden'},
            ],
            row_style({row, rowIndex}:any) {
                let content = utils.getPage().getComponents({system_id:"content"})
                let content2:AssemblyContent = <AssemblyContent>utils.getPage().getComponents({system_id:"content"})
                content2.primaryKey
                content2.init({})
                if (row.id==content.selectRowOnlyId) {
                    return   {'background-color':'red'};
                }
                return {'background-color':'blue'};
            },
            tableBtn : [
                {label:"编辑",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit',title:"编辑"})
                        edit.query()
                    }},
                {label:"下载",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'DialogDownload',title:"下载"})
                    }},
                {label:"检验",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'inspect',title:"检验"})
                        edit.query()
                    }},
                {label:"审核",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examine',title:"审核"})
                        edit.query()
                    },jurisdictionJson: [{"row":[{"state":"待审核"}]}]},
                {label:"添加工艺单",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'gyd',title:"添加工艺单"})
                        edit.query()
                    }},

                {label:"删除",click:function(data:any){utils.getStore().openDialog({name:'delete',title:"删除"})}},

                /*{label:"检验",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateUpload'})
                        edit.query()
                    },process:{process: '检验',flow:"样品"}
                },
                {label:"审核",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateExamine'})
                        edit.query()
                    },process:{process: '审核',flow:"样品"}
                },
                {label:"下发",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateIssued'})
                        edit.query()
                    },process:{process: '下发',flow:"样品"}
                },
                {label:"整改",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateRectification'})
                        edit.query()
                    },process:{process: '整改',flow:"样品"}
                },
                {label:"复审",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateReexamine'})
                        edit.query()
                    },process:{process: '复审',flow:"样品"}
                },
                {label:"延期",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateDelay'})
                        edit.query()
                    },process:{process: '延期',flow:"样品"}
                },
                {label:"详情",jurisdictionJson: [{jurisdiction: [{name: "info"}]}],show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'info'})
                        edit.query()
                    }
                },*/
            ]
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"样品名称",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入样品名称"}]},
                        {modelName:'content',name:"no",label:"样品编号",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入样品编号"}]},
                        {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',rules:[{validator: utils.my_required, message: "请选择供应商"}],ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"factory_id", label: '打样工厂',type:'ComponentsInputSelect',rules:[{validator: utils.my_required, message: "请选择打样工厂"}],ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"source", label: '样品来源',type:'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入样品来源"}]},
                        {modelName:'content',name:"inspector_id", label: '检验人员',type:'ComponentsInputSelect',rules:[{validator: utils.my_required, message: "请选择检验人员"}],ajax_url:"queryByInspector",props_label:"ui_name",props_value:"id",ajax_params:[{type:"text",name:"r_name",value:"样品检验人员"}]},
                        {modelName:'content',name:"arrival_time", label: '到样时间',type:'ComponentsInputDay',rules:[{validator: utils.my_required, message: "请输入到样时间"}]},
                        {modelName:'content',name:"inspector_time", label: '检验时间',type:'ComponentsInputDay',rules:[{validator: utils.my_required, message: "请输入检验时间"}]},
                        {modelName:'content',name:"photo", label: '产品图',type:'ComponentsInputUploadImage',rules:[{validator: utils.my_required, message: "请输入图片"}]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"examine",type: 'DialogEdit',save_close:false, components:[

                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"样品名称",type: 'ComponentsText'},
                        {modelName:'content',name:"no",label:"样品编号",type: 'ComponentsText'},
                        {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsText'},
                        {modelName:'content',name:"factory_id", label: '打样工厂',type:'ComponentsText'},
                        {modelName:'content',name:"source", label: '样品来源',type:'ComponentsText'},
                        {modelName:'content',name:"inspector_id", label: '检验人员',type:'ComponentsText'},
                        {modelName:'content',name:"arrival_time", label: '到样时间',type:'ComponentsText'},
                        {modelName:'content',name:"inspector_time", label: '检验时间',type:'ComponentsText'},
                        {modelName:'content',name:"photo", label: '产品图',type:'ComponentsText'},
                        {modelName:'content',name: 'sample_id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"测试",name:"base111",components:[
                        {modelName:'content',name:"test_data", label:"",type: 'ComponentsInputTable',label_show: true,value_default:[],components:[
                                {modelName:'template',name:"name",label:"测试项目",type: 'ComponentsInput'},
                                {modelName:'template',name:"programme",label:"测试方案",type: 'ComponentsInput'},
                                {modelName:'template',name:"result",label:"测试结果",type: 'ComponentsInput'},
                                {modelName:'template',name:"photo",label:"测试照片",type: 'ComponentsInputUploadImage'},
                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"外观检验",name:"base2",components:[
                        {modelName:'content',name:"wgjy_yg_bz",label:"邮购包装",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_yg_zp",label:"包装照片",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_cc_mzl",label:"毛重量",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_cc_c",label:"长",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_cc_k",label:"宽",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_cc_g",label:"高",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_cc_mzl_zp",label:"毛重量照片",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_cc_c_zp",label:"长照片",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_cc_k_zp",label:"宽照片",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_cc_g_zp",label:"高照片",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_sx_jg",label:"摔箱结果",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_sx_m_zp",label:"照片（面）",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_sx_b_zp",label:"照片（边）",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_sx_j_zp",label:"照片（角）",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_nbz_bz",label:"步骤检验结果",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_nbz_zp",label:"步骤检验照片",type: 'ComponentsText'},
                        {modelName:'content',name:"wgjy_bz",label:"检验备注",type: 'ComponentsText'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"部件检验",name:"base3",components:[
                        {modelName:'content',name:"bjjy_jht_zfclzp",label:"主副材料照片",type: 'ComponentsText'},
                        {modelName:'content',name:"bjjy_jhtwjpjzp",label:"五金配件照片",type: 'ComponentsText'},
                        {modelName:'content',name:"bjjy_qd_mz",label:"材料名称",type: 'ComponentsText'},
                        {modelName:'content',name:"bjjy_qd_sm",label:"表面工艺说明",type: 'ComponentsText'},
                        {modelName:'content',name:"bjjy_qd_zp",label:"手录单照片",type: 'ComponentsText'},
                        {modelName:'content',name:"bjjy_bz",label:"检验备注",type: 'ComponentsText'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"组装外观检验",name:"base4",components:[
                        {modelName:'content',name:"zzwg_zz_zst",label:"正视图",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_zz_45",label:"正侧 45度",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_zz_cm",label:"侧面",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_zz_bm",label:"背面",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_zz_db",label:"底部",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_zz_dkxg",label:"打开效果",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_zz_xj",label:"细节",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_cc_jzl",label:"净重量",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_cc_c",label:"长",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_cc_k",label:"宽",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_cc_g",label:"高",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_cc_jzl_zp",label:"净重量照片",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_cc_c_zp",label:"长照片",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_cc_k_zp",label:"宽照片",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_cc_g_zp",label:"高照片",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_ps_zp",label:"标识检验",type: 'ComponentsText'},
                        {modelName:'content',name:"zzwg_bz",label:"检验备注",type: 'ComponentsText'},

                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"功能及测试",name:"base5",components:[
                        {modelName:'content',name:"gncs_bz",label:"检验备注",type: 'ComponentsText'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"检验结果",name:"base6",components:[
                        {modelName:'content',name:"jyjg_zj",label:"总结",type: 'ComponentsText'},
                        {modelName:'content',name:"jyjg_jg",label:"判定结果",type: 'ComponentsText'},
                        {modelName:'content',name:"jyjg_qfy",label:"签封样",type: 'ComponentsText'},
                        {modelName:'content',name:"jyjg_qfry",label:"签封人员",type: 'ComponentsText'},
                        {modelName:'content',name:"jyjg_qfrq",label:"签封日期",type: 'ComponentsText'},
                        {modelName:'content',name:"jyjg_qfhh",label:"签封货号",type: 'ComponentsText'},
                    ]},
            ],toolBtn : [
                {label:"通过",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examineOk',title:"通过"})
                        edit.query()
                    }},
                {label:"不通过",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examineErr',title:"不通过"})
                        edit.query()
                    }},
            ]
        },
        {modelName:'dialog',name:"examineOk",type: 'DialogEdit',apiName_save:"examineOk",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"样品名称",type: 'ComponentsText'},
                        {modelName:'content',name:"number_name",label:"货号",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入货号"}]},
                        {modelName:'content',name:"number_code",label:"五位码",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入五位码"}]},
                        {modelName:'content',name:"number_no",label:"识别序号",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入系统识别序号"}]},
                        {modelName:'content',name: 'sample_id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name: 'company_id', label: 'id2',type:'ComponentsInputHidden'},
                        {modelName:'content',name: 'inspect_id', label: 'id3',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"examineErr",type: 'DialogEdit',apiName_save:"examineErr",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"样品名称",type: 'ComponentsText'},
                        {modelName:'content',name:"err_reasons",label:"原因",type: 'ComponentsInputTextarea'},
                        {modelName:'content',name: 'sample_id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name: 'company_id', label: 'id2',type:'ComponentsInputHidden'},
                        {modelName:'content',name: 'inspect_id', label: 'id3',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"inspect",dialog_width:"1400px",type: 'DialogEdit',apiName_save:"inspect",save_close:false, components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"样品名称",type: 'ComponentsText'},
                        {modelName:'content',name:"no",label:"样品编号",type: 'ComponentsText'},
                        {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsText'},
                        {modelName:'content',name:"factory_id", label: '打样工厂',type:'ComponentsText'},
                        {modelName:'content',name:"source", label: '样品来源',type:'ComponentsText'},
                        {modelName:'content',name:"inspector_id", label: '检验人员',type:'ComponentsText'},
                        {modelName:'content',name:"arrival_time", label: '到样时间',type:'ComponentsText'},
                        {modelName:'content',name:"inspector_time", label: '检验时间',type:'ComponentsText'},
                        {modelName:'content',name:"photo", label: '产品图',type:'ComponentsText'},
                        {modelName:'content',name: 'sample_id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"测试",name:"base111",components:[
                        {modelName:'content',name:"test_data", label:"",history_name:"result",type: 'ComponentsInputTableEdit',label_show: true,value_default:[],components:[
                                {modelName:'template',name:"photo",label:"测试照片",type: 'ComponentsInputUploadImage',system_id:"system_photo_copyIndex",associated_notice:['system_name2_copyIndex']},
                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',name:"base888",label:"判断是否邮购包装",components:[
                        {modelName:'content',name:"wgjy_yg_bz",label:"邮购包装",type: 'ComponentsInput'},
                        {modelName:'content',name:"wgjy_yg_zp",label:"包装照片",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',label:"外观检验",name:"base2",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"判断是否邮购包装",components:[
                                {modelName:'content',name:"wgjy_yg_bz",label:"邮购包装",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_yg_zp",label:"包装照片",type: 'ComponentsInput'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"外箱尺寸和毛重量",components:[
                                {modelName:'content',name:"wgjy_cc_mzl",label:"毛重量",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_cc_c",label:"长",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_cc_k",label:"宽",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_cc_g",label:"高",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_cc_mzl_zp",label:"毛重量照片",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_cc_c_zp",label:"长照片",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_cc_k_zp",label:"宽照片",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_cc_g_zp",label:"高照片",type: 'ComponentsInput'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"摔箱测试 （仅邮购包装）",components:[
                                {modelName:'content',name:"wgjy_sx_jg",label:"摔箱结果",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_sx_m_zp",label:"照片（面）",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_sx_b_zp",label:"照片（边）",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_sx_j_zp",label:"照片（角）",type: 'ComponentsInput'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"内包装步骤",components:[
                                {modelName:'content',name:"wgjy_nbz_bz",label:"步骤检验结果",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_nbz_zp",label:"步骤检验照片",type: 'ComponentsInput'},
                                {modelName:'content',name:"wgjy_bz",label:"检验备注",type: 'ComponentsInput'},
                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',label:"部件检验",name:"base3",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"部件集合图",components:[
                                {modelName:'content',name:"bjjy_jht_zfclzp",label:"主副材料照片",type: 'ComponentsInput'},
                                {modelName:'content',name:"bjjy_jhtwjpjzp",label:"五金配件照片",type: 'ComponentsInput'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"零部件检验清单",components:[
                                {modelName:'content',name:"bjjy_qd_mz",label:"材料名称",type: 'ComponentsInput'},
                                {modelName:'content',name:"bjjy_qd_sm",label:"表面工艺说明",type: 'ComponentsInput'},
                                {modelName:'content',name:"bjjy_qd_zp",label:"手录单照片",type: 'ComponentsInput'},
                                {modelName:'content',name:"bjjy_bz",label:"检验备注",type: 'ComponentsInput'},
                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',label:"组装外观检验",name:"base4",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"组装照片",components:[
                                {modelName:'content',name:"zzwg_zz_zst",label:"正视图",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_zz_45",label:"正侧 45度",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_zz_cm",label:"侧面",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_zz_bm",label:"背面",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_zz_db",label:"底部",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_zz_dkxg",label:"打开效果",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_zz_xj",label:"细节",type: 'ComponentsInput'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"产品尺寸和净重量",components:[
                                {modelName:'content',name:"zzwg_cc_jzl",label:"净重量",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_cc_c",label:"长",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_cc_k",label:"宽",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_cc_g",label:"高",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_cc_jzl_zp",label:"净重量照片",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_cc_c_zp",label:"长照片",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_cc_k_zp",label:"宽照片",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_cc_g_zp",label:"高照片",type: 'ComponentsInput'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"标识检验",components:[
                                {modelName:'content',name:"zzwg_ps_zp",label:"标识检验",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_bz",label:"检验备注",type: 'ComponentsInput'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"材料说明",components:[
                                {modelName:'content',name:"zzwg_ps_zp",label:"标识检验",type: 'ComponentsInput'},
                                {modelName:'content',name:"zzwg_bz",label:"检验备注",type: 'ComponentsInput'},
                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',label:"功能及测试",name:"base5",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"判断是否邮购包装",components:[
                                {modelName:'content',name:"gncs_bz",label:"检验备注",type: 'ComponentsInput'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"外箱尺寸和毛重量",components:[
                                {modelName:'content',name:"gncs_bz",label:"检验备注",type: 'ComponentsInput'},
                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"检验结果",name:"base6",components:[
                        {modelName:'content',name:"jyjg_zj",label:"总结",type: 'ComponentsInput'},
                        {modelName:'content',name:"jyjg_jg",label:"判定结果",type: 'ComponentsInput'},
                        {modelName:'content',name:"jyjg_qfy",label:"签封样",type: 'ComponentsInput'},
                        {modelName:'content',name:"jyjg_qfry",label:"签封人员",type: 'ComponentsInput'},
                        {modelName:'content',name:"jyjg_qfrq",label:"签封日期",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"jyjg_qfhh",label:"签封货号",type: 'ComponentsInput'},
                    ]},
            ]},
        {modelName:'dialog',name:"gyd",type: 'DialogEdit',apiName_save:"gydadd",dialog_width:"1400px",components:[
                {modelName:'from',type: 'AssemblyFrom',label:"基础信息",components:[
                        // {modelName:'content',name:"no",label:"样品编号",type: 'ComponentsText'},
                        {modelName:'content',name:"product_no",label:"货号",type: 'ComponentsText'},
                        {modelName:'content',name:"cn_name",label:"中文品名",type: 'ComponentsText'},
                        {modelName:'content',name:"en_name",label:"英文品名",type: 'ComponentsText'},
                        {modelName:'content',name:"five_code", label: '五位码',type:'ComponentsText'},
                        {modelName:'content',name:"gross_weight", label: '毛重',type:'ComponentsText'},
                        {modelName:'content',name:"net_weight", label: '净重',type:'ComponentsText'},
                        {modelName:'content',name:"bar_code", label: '条形码',type:'ComponentsText'},
                        {modelName:'content',name:"packing_outsize", label: '包装外径',type:'ComponentsText'},
                        {modelName:'content',name:"product_size", label: '产品尺寸',type:'ComponentsText'},
                        {modelName:'content',name:"tech_no", label: '工艺单编号',type:'ComponentsInput'},
                        {modelName:'content',name:"express_day", label: '快递周长',type:'ComponentsText'},
                        {modelName:'content',name:"volume_weight", label: '体积重',type:'ComponentsText'},
                        {modelName:'content',name: 'sample_id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"部件信息",name:"base2",components:[
                        {modelName:'content',name:"gyd_bjxx",label:"部件信息",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"bj_bh",label:"部件编号",type: 'ComponentsInput'},
                                {modelName:'template',name:"bj_mc",label:"部件名称",type: 'ComponentsInput'},
                                {modelName:'template',name:"bj_sl",label:"数量",type: 'ComponentsInput'},
                                {modelName:'template',name:"bj_cz",label:"材质",type: 'ComponentsInput'},
                                {modelName:'template',name:"bj_ys",label:"颜色",type: 'ComponentsInput'},
                                {modelName:'template',name:"bj_gg",label:"规格",type: 'ComponentsInput'},
                                {modelName:'template',name:"bj_bmcl",label:"表明处理",type: 'ComponentsInput'},
                                {modelName:'template',name:"bj_tp",label:"图片",type: 'ComponentsInputUpload'},
                                {modelName:'template',name:"bj_remark",label:"备注",type: 'ComponentsInput'},
                            ]},

                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"配件信息",name:"base3",components:[
                        {modelName:'content',name:"gyd_pjxx",label:"配件信息",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"pj_bh",label:"配件编号",type: 'ComponentsInput'},
                                {modelName:'template',name:"pj_mc",label:"配件名称",type: 'ComponentsInput'},
                                {modelName:'template',name:"pj_sl",label:"数量",type: 'ComponentsInput'},
                                {modelName:'template',name:"pj_gg",label:"规格",type: 'ComponentsInput'},
                                {modelName:'template',name:"pj_cz",label:"材质",type: 'ComponentsInput'},
                                {modelName:'template',name:"pj_ys",label:"颜色",type: 'ComponentsInput'},

                                {modelName:'template',name:"pj_bmcl",label:"表明处理",type: 'ComponentsInput'},
                                {modelName:'template',name:"pj_remark",label:"备注",type: 'ComponentsInput'},
                                {modelName:'template',name:"pj_tp",label:"图片",type: 'ComponentsInputUpload'},
                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"包装材料信息",name:"base4",components:[
                        {modelName:'content',name:"gyd_bzcl",label:"包装材料信息",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"bc_lx",label:"包材类型",type: 'ComponentsInput'},
                                {modelName:'template',name:"bc_mc",label:"包材名称",type: 'ComponentsInput'},
                                {modelName:'template',name:"bc_sl",label:"数量",type: 'ComponentsInput'},
                                {modelName:'template',name:"bc_gg",label:"规格",type: 'ComponentsInput'},
                                {modelName:'template',name:"bc_cz",label:"材质",type: 'ComponentsInput'},
                                {modelName:'template',name:"bc_gyzb",label:"工艺指标",type: 'ComponentsInput'},
                                {modelName:'template',name:"bc_bz",label:"备注",type: 'ComponentsInput'},
                                {modelName:'template',name:"bc_tp",label:"图片",type: 'ComponentsInputUpload'},
                            ]},

                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"产品测试",name:"base5",components:[
                        {modelName:'content',name:"gyd_test",label:"产品测试",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"test_xm",label:"测试项目",type: 'ComponentsInput'},
                                {modelName:'template',name:"test_bz",label:"测试标准",type: 'ComponentsInput'},
                                {modelName:'template',name:"test_yq",label:"测试要求",type: 'ComponentsInput'},

                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"产品签样",name:"base6",components:[
                        {modelName:'content',name:"gyd_qyxx",label:"签样信息",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"qy_bh",label:"签样编号",type: 'ComponentsInput'},
                                {modelName:'template',name:"qy_rq",label:"签样日期",type: 'ComponentsInput'},
                                {modelName:'template',name:"qy_mc",label:"签样名称",type: 'ComponentsInput'},
                                {modelName:'template',name:"qy_bw",label:"签样部位",type: 'ComponentsInput'},
                                {modelName:'template',name:"qy_ys",label:"签样颜色",type: 'ComponentsInput'},
                                {modelName:'template',name:"qy_sybh",label:"色样编号",type: 'ComponentsInput'},
                                {modelName:'template',name:"qy_remark",label:"备注",type: 'ComponentsInput'},

                            ]},
                        {modelName:'content',name:"gyd_qyyj",label:"签样意见",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"qyyj_bh",label:"签样编号",type: 'ComponentsInput'},
                                {modelName:'template',name:"qyyj_rq",label:"签样日期",type: 'ComponentsInput'},
                                {modelName:'template',name:"qyyj_mc",label:"签样意见",type: 'ComponentsInput',style:"width:300px;"},


                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"质量重点注意事项",name:"base7",components:[

                        {modelName:'content',name:"gyd_zysx",label:"注意事项",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"sxnr",label:"注意事项",type: 'ComponentsInput',style:"width:500px;"},

                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"相关照片",name:"base8",components:[

                        {modelName:'content',name:"ztcct1",label:"整体尺寸图1",type: 'ComponentsInputUpload'},
                        {modelName:'content',name:"ztcct2",label:"整体尺寸图2",type: 'ComponentsInputUpload'},
                        {modelName:'content',name:"xjcct1",label:"细节尺寸图1",type: 'ComponentsInputUpload'},
                        {modelName:'content',name:"sbwz",label:"商标位置",type: 'ComponentsInputUpload'},
                        {modelName:'content',name:"qfytp",label:"签封样图片",type: 'ComponentsInputUpload'},
                        {modelName:'content',name:"sytp",label:"色样图片",type: 'ComponentsInputUpload'},
                        {modelName:'content',name:"ccsm",label:"尺寸说明",type: 'ComponentsInputUpload'},


                    ]},
            ]},
        {modelName:'dialog',name:"DialogDownload",apiName_download:"apiName_download",type: 'DialogDownload',valueModel:"一般"},
    ]
}
export default myModule
