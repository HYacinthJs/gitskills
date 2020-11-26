import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_number',
    version:'PageNormal',
    api:{
        query: "/number/query",
        queryByAll: "/number/queryByAll",
        queryById:  "/number/queryById",
        save:  "/number/save",
        queryBySupplier:  "/supplier/queryBySupplier",
        delete1:"/number/delete",
        query2:"/number/queryFactoryByNumberId",

        factory:"/supplier/queryByFactory",
        saveF:"/number/saveFactory",
        deleteF:"/number/deleteFactory",

        query3: "/number/queryDetailsByNumberFactoryId",

        query_sealsample:"/sealsample/queryByNumberFactoryId",
        queryById2:"/sealsample/queryById",
        save2:"/sealsample/save",
        delete2:"/sealsample/delete",

        query_processform:"/processform/queryByNumberFactoryId",
        queryById3:"/processform/queryById",
        save3:"/processform/save",
        delete3:"/processform/deleteProcessForm",
        sample:"/sample/queryByAll",
        component:"/componentinformation/queryByAll",
        part:"/partinformation/queryByAll",
        test:"/testrequirements/queryByAll",
        querySampleMessage:"/processform/querySampleMessageBySampleId",
        examineOk3: "/processform/examineOk",
        apply3: "/processform/proposeAudit",
        export:"/processform/toExcel",

        query_assemblydrawing:"/assemblydrawing/queryByNumberFactoryId",
        queryById4:"/assemblydrawing/queryById",
        save4:"/assemblydrawing/save",
        delete4:"/assemblydrawing/delete",
        examineOk4: "/assemblydrawing/examineOk",
        apply4: "/assemblydrawing/proposeAudit",
        getCompany:  "/company/queryByAll",
        url4:"/order/querySelectType",

    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"货号",type: 'ComponentsInput'},
                        {modelName:'content',name:"key_value",label:"关键字",type: 'ComponentsInputWithSelect',ajax_url:"url4",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"startDate",label:"日期以前",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"endDate",label:"日期以后",type: 'ComponentsInputDay'},
                        {modelName:'content',name: "case_time", label: "日期区间", start_label: "开始时间", end_label: "结束时间",type: "ComponentsInputDayInterval"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',title:"货号管理",type: 'AssemblyContent',system_id: "content", components:[
                {modelName:'content',name:"id",label:"id",type: 'ComponentsInputHidden'},
                {modelName:'content',name:"no",label:"识别码",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"货号",type: 'ComponentsInput'},
                {modelName:'content',name:"code",label:"五位码",type: 'ComponentsInput'},
                {modelName:'content',name:"ean_code",label:"EAN码",type: 'ComponentsInput'},
                {modelName:'content',name:"chinese_name",label:"中文名",type: 'ComponentsInput'},
                {modelName:'content',name:"english_name",label:"报关英文名",type: 'ComponentsInput'},
                {modelName:'content',name:"reform",label:"质量整改",type: 'ComponentsInput'},
            ],rowClick:function (data:any){
                let content2 = utils.getPage().getComponents({system_id:"content2"})
                let content3 = utils.getPage().getComponents({system_id: "content3"})
                let content4 = utils.getPage().getComponents({system_id: "content4"})
                let content5 = utils.getPage().getComponents({system_id: "content5"})
                content2.query()
                content2.selectRowOnlyId=null
                content3.initValue()
                content4.initValue()
                content5.initValue()
            },toolBtn:[
                {label:"添加",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "add"}]}],click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'increase1',title:"添加"})
                        edit.initValue()
                        edit.initAjax()
                    }},
                {label:"批量删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'deleteAll1',title:"批量删除"})
                        edit.initValue()
                        edit.initAjax()
                    }},
            ],
            tableBtn : [
                {label:"查看",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "query"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examine1',title:"查看"})
                        edit.query()
                    }},
                {label:"修改",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "edit"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit1',title:"修改"})
                        edit.query()
                    }},
                {label:"打印",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'print1',title:"打印"})
                        edit.query()
                    }},
                {label:"删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        utils.getStore().openDialog({name:'delete1',title:"删除"})}},
            ],

        },
        {
            modelName:'content',title:"工厂管理",type: 'AssemblyContent',system_id:"content2",apiNameQuery:"query2", components:[
                {modelName:'content',name:"full_name",label:"工厂",type: 'ComponentsInput'},
                {modelName:'content',name:"no",label:"企业编号",type: 'ComponentsInput'},
                {modelName:'content',name:"province",label:"省份",type: 'ComponentsInput'},
                {modelName:'content',name:"city",label:"城市",type: 'ComponentsInput'},

            ],
            toolBtn : [
                {label:"添加",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "add"}]}],click:function(data:any){
                        let content = utils.getPage().getComponents({system_id:"content"})
                        if(!content.selectRowOnlyId){
                            utils.myMessage({message:"请先选择一个货号"})
                            return;
                        }
                        let edit =utils.getStore().openDialog({name:'addFactory',title:"添加"})
                        edit.initValue()
                        edit.initAjax()
                    }},
                {label:"批量删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'deleteAllFactory',title:"批量删除"})
                        edit.initValue()
                        edit.initAjax()
                    }},
            ],
            tableBtn : [
                {label:"删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        utils.getStore().openDialog({name:'deleteF',title:"删除"})}},
            ],
            getParams(){
                let that:any =  this
                let param :{ [key: string]: any}={}
                let query = utils.getPage().getComponents({system_id:that.queryName})
                if(utils.isNotNull(query)){
                    param=query.getEditValue()
                }
                let content = utils.getPage().getComponents({system_id:"content"})
                let breadcrumbs = utils.getPage().getComponents({system_id:that.breadcrumbsName})
                param['page']=that.currentPage
                param['rows']=that.rows
                param['tableControlShow']=JSON.stringify(that.tableControlShow)
                param['fuzzy_query']=breadcrumbs.queryValue
                if(utils.isNotNull(content.selectRowOnly)){
                    param['default_id_']=content.selectRowOnly[content.primaryKey]
                }
                return param
            },
            rowClick:function (data:any) {
                let content3 = utils.getPage().getComponents({system_id: "content3"})
                let content4 = utils.getPage().getComponents({system_id: "content4"})
                let content5 = utils.getPage().getComponents({system_id: "content5"})
                content3.query()
                content4.query()
                content5.query()
            }
        },
        {
            modelName:'content',title:"签封样",type: 'AssemblyContent',system_id: "content3",apiNameQuery:"query_sealsample", components:[
                {modelName:'content',name:"no",label:"签封样编号",type: 'ComponentsInput'},
                {modelName:'content',name:"date",label:"签样日期",type: 'ComponentsInput'},
                {modelName:'content',name:"approver",label:"审批人",type: 'ComponentsInput'},
                {modelName:'content',name:"sample_holder",label:"签样人",type: 'ComponentsInput'},
                {modelName:'content',name:"person",label:"保管人",type: 'ComponentsInput'},
                {modelName:'content',name:"place",label:"保管地点",type: 'ComponentsInput'},
            ],
            toolBtn:[
                {label:"添加",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "add"}]}],click:function(data:any){
                        let content = utils.getPage().getComponents({system_id:"content2"})
                        if(!content.selectRowOnlyId){
                            utils.myMessage({message:"请先选择一个工厂"})
                            return;
                        }
                        let edit =utils.getStore().openDialog({name:'increase2',title:"添加"})
                        edit.initValue()
                        edit.initAjax()
                    }},
                {label:"批量删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'deleteAll2',title:"批量删除"})
                        edit.initValue()
                        edit.initAjax()
                    }},
            ],
            tableBtn : [
                {label:"查看",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "query"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examine2',title:"查看"})
                        edit.query()
                    }},
                {label:"修改",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "edit"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit2',title:"修改"})
                        edit.query()
                    }},
                {label:"打印",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'print2',title:"打印"})
                        edit.query()
                    }},
                {label:"删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        utils.getStore().openDialog({name:'delete2',title:"删除"})}},
            ],
            getParams(){
                let that:any = this
                let param :{ [key: string]: any}={}
                let query = utils.getPage().getComponents({system_id:that.queryName})
                if(utils.isNotNull(query)){
                    param=query.getEditValue()
                }
                let content = utils.getPage().getComponents({system_id:"content2"})
                let breadcrumbs = utils.getPage().getComponents({system_id:that.breadcrumbsName})
                param['page']=that.currentPage
                param['rows']=that.rows
                param['tableControlShow']=JSON.stringify(that.tableControlShow)
                param['fuzzy_query']=breadcrumbs.queryValue
                if(utils.isNotNull(content.selectRowOnly)){
                    param['default_id_']=content.selectRowOnly[content.primaryKey]
                }
                return param
            },
        },
        {
            modelName:'content',title:"工艺单",type: 'AssemblyContent',system_id: "content4",apiNameQuery:"query_processform", components:[
                {modelName:'content',name:"process_form_number",label:"工艺单编号",type: 'AssemblyContent'},
                {modelName:'content',name:"producer",label:"制作人",type: 'AssemblyContent'},
                {modelName:'content',name:"createdate",label:"制作日期",type: 'AssemblyContent'},
                {modelName:'content',name:"state",label:"质检状态",type: 'ComponentsInput'}
            ],
            toolBtn:[
                {label:"添加",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "add"}]}],click:function(data:any){
                        let content = utils.getPage().getComponents({system_id:"content2"})
                        if(!content.selectRowOnlyId){
                            utils.myMessage({message:"请先选择一个工厂"})
                            return;
                        }
                        let edit =utils.getStore().openDialog({name:'increase3',title:"添加"})
                        edit.initValue()
                        edit.initAjax()
                    }},
                {label:"批量删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'deleteAll3',title:"批量删除"})
                        edit.initValue()
                        edit.initAjax()
                    }},
            ],
            tableBtn : [
                {label:"查看",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "query"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examine3',title:"查看"})
                        edit.query()
                    }},
                {label:"修改",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit3',title:"修改"})
                        edit.query()
                    },jurisdictionJson: [{
                        jurisdiction: [{name: "edit"}],
                        "row":[{"state":"检验完成"},{"state":"修改/重做"}]
                    }],
                },
                {label:"申请审核",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'apply3',title:"申请审核"})
                        edit.query()
                    },jurisdictionJson: [{

                        "row":[{"state":"检验完成"}]
                    }],
                },
                {label:"审核",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'approve3',title:"审核"})
                        edit.query()
                    },jurisdictionJson: [{

                        "row":[{"state":"待审核"}]
                    }]
                },
                {label:"审核详情",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'detail3',title:"申请审核"})
                        edit.query()
                    },jurisdictionJson: [{

                        "row":[{"state":"待审核"},{"state":"审核通过"},{"state":"审核不通过"},{"state":"修改/重做"}]},
                    ],
                },
                {label:"导出报告",click:function(data:any){
                        let edit =  utils.getStore().openDialog({name:'export',title:"导出报告"})
                        edit.query()
                    },jurisdictionJson: [{"row":[{"state":"检验完成"}]},
                        {"row":[{"state":"待审核"}]},
                        {"row":[{"state":"审核通过"}]},
                        {"row":[{"state":"审核不通过"}]},
                        {"row":[{"state":"修改/重做"}]},
                    ],
                },
                {label:"打印",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'print3',title:"打印"})
                        edit.query()
                    }},
                {label:"删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        utils.getStore().openDialog({name:'delete3',title:"删除"})}},
            ],
            getParams(){
                let that:any = this
                let param :{ [key: string]: any}={}
                let query = utils.getPage().getComponents({system_id:that.queryName})
                if(utils.isNotNull(query)){
                    param=query.getEditValue()
                }
                let content = utils.getPage().getComponents({system_id:"content2"})
                let breadcrumbs = utils.getPage().getComponents({system_id:that.breadcrumbsName})
                param['page']=that.currentPage
                param['rows']=that.rows
                param['tableControlShow']=JSON.stringify(that.tableControlShow)
                param['fuzzy_query']=breadcrumbs.queryValue
                if(utils.isNotNull(content.selectRowOnly)){
                    param['default_id_']=content.selectRowOnly[content.primaryKey]
                }
                return param
            },
        },
        {
            modelName:'content',title:"组装图",type: 'AssemblyContent',system_id: "content5",apiNameQuery:"query_assemblydrawing", components:[
                {modelName:'content',name:"no",label:"组装图编号",type: 'AssemblyContent'},
                {modelName:'content',name:"create_user",label:"制作人",type: 'AssemblyContent'},
                {modelName:'content',name:"createdate",label:"制作日期",type: 'AssemblyContent'},
                {modelName:'content',name:"state",label:"质检状态",type: 'ComponentsInput'},
                {modelName:'content',name:"note",label:"备注",type: 'AssemblyContent'},
            ],
            toolBtn:[
                {label:"添加",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "add"}]}],click:function(data:any){
                        let content = utils.getPage().getComponents({system_id:"content2"})
                        if(!content.selectRowOnlyId){
                            utils.myMessage({message:"请先选择一个工厂"})
                            return;
                        }
                        let edit =utils.getStore().openDialog({name:'increase4',title:"添加"})
                        edit.initValue()
                        edit.initAjax()
                    }},
                {label:"批量删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'deleteAll4',title:"批量删除"})
                        edit.initValue()
                        edit.initAjax()
                    }},
            ],
            tableBtn : [
                {label:"查看",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "query"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'examine4',title:"查看"})
                        edit.query()
                    }},
                {label:"修改",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit4',title:"修改"})
                        edit.query()
                    },jurisdictionJson: [{
                        jurisdiction: [{name: "edit"}],
                        "row":[{"state":"检验完成"},{"state":"修改/重做"}]
                    }],
                },
                {label:"申请审核",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'apply4',title:"申请审核"})
                        edit.query()
                    },jurisdictionJson: [{

                        "row":[{"state":"检验完成"}]
                    }],
                },
                {label:"审核",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'approve2',title:"审核"})
                        edit.query()
                    },jurisdictionJson: [{

                        "row":[{"state":"待审核"}]}
                    ]},
                {label:"审核详情",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'detail4',title:"审核详情"})
                        edit.query()
                    },jurisdictionJson: [{

                        "row":[{"state":"待审核"},{"state":"审核通过"},{"state":"审核不通过"},{"state":"修改/重做"}]
                    }],
                },
                {label:"打印",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'print4',title:"打印"})
                        edit.query()
                    }},
                {label:"删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        utils.getStore().openDialog({name:'delete4',title:"删除"})}},
            ],
            getParams(){
                let that:any =this
                let param :{ [key: string]: any}={}
                let query = utils.getPage().getComponents({system_id:that.queryName})
                if(utils.isNotNull(query)){
                    param=query.getEditValue()
                }
                let content = utils.getPage().getComponents({system_id:"content2"})
                let breadcrumbs = utils.getPage().getComponents({system_id:that.breadcrumbsName})
                param['page']=that.currentPage
                param['rows']=that.rows
                param['tableControlShow']=JSON.stringify(that.tableControlShow)
                param['fuzzy_query']=breadcrumbs.queryValue
                if(utils.isNotNull(content.selectRowOnly)){
                    param['default_id_']=content.selectRowOnly[content.primaryKey]
                }
                return param
            },
        },
        //货号管理查增删改
        {modelName:'dialog',name:"examine1",type: 'DialogEdit',apiName_queryById:"queryById",tableName:"content", components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"no",label:"识别码",type: 'ComponentsText'},
                        {modelName:'content',name:"name",label:"货号",type: 'ComponentsText'},
                        {modelName:'content',name:"chinese_name",label:"中文名",type: 'ComponentsText'},
                        {modelName:'content',name:"english_name",label:"报关英文名",type: 'ComponentsText'},
                        {modelName:'content',name:"code",label:"五位码",type: 'ComponentsText'},
                        {modelName:'content',name:"ean_code",label:"EAN码",type: 'ComponentsText'},
                        {modelName:'content',name:"supplier_name",label:"供应商",type: 'ComponentsText'},
                        {modelName:'content',name:"createdate",label:"新建日期",type: 'ComponentsText'},
                        {modelName:'content',name:"url", label: '产品图片',type:'ComponentsInputImage'},
                    ]},
            ],toolBtn:[]},
        {modelName:'dialog',name:"increase1",type: 'DialogEdit',tableName:"content",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"no",label:"识别码",type: 'ComponentsInput'},
                        {modelName:'content',name:"name",label:"货号",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入货号"}]},
                        {modelName:'content',name:"chinese_name",label:"中文名",type: 'ComponentsInput'},
                        {modelName:'content',name:"english_name",label:"报关英文名",type: 'ComponentsInput'},
                        {modelName:'content',name:"code",label:"五位码",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入五位码"}]},
                        {modelName:'content',name:"ean_code",label:"EAN码",type: 'ComponentsInput'},
                        {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',rules:[{validator: utils.my_required, message: "请选择供应商"}],ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"createdate",label:"新建日期",type: 'ComponentsInputDay',day_auto:true,
                            rules:[{validator: utils.my_required, message: "请选择新建日期"}]},
                        {modelName:'content',name:"url", label: '产品图片',type:'ComponentsInputUploadImage',rules:[{validator: utils.my_required, message: "请上传图片"}]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden',},
                    ]},
            ]},
        {modelName:'dialog',name:"edit1",type: 'DialogEdit',apiName_save:"save",apiName_queryById:"queryById",tableName:"content",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"no",label:"识别码",type: 'ComponentsInput'},
                        {modelName:'content',name:"name",label:"货号",type: 'ComponentsInput',
                            rules:[{validator: utils.my_required, message: "请输入货号"}]},
                        {modelName:'content',name:"chinese_name",label:"中文名",type: 'ComponentsInput'},
                        {modelName:'content',name:"english_name",label:"报关英文名",type: 'ComponentsInput'},
                        {modelName:'content',name:"code",label:"五位码",type: 'ComponentsInput',
                            rules:[{validator: utils.my_required, message: "请输入五位码"}]},
                        {modelName:'content',name:"ean_code",label:"EAN码",type: 'ComponentsInput'},
                        {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',
                            rules:[{validator: utils.my_required, message: "请选择供应商"}],
                            ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"createdate",label:"新建日期",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"url", label: '产品图片',type:'ComponentsInputUploadImage',rules:[{validator: utils.my_required, message: "请输入图片"}]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden',},
                    ]},
            ]},
        {modelName:'dialog',name:"deleteAll1",type: 'DialogSelect',title:'删除',msg:'是否确认批量删除？',valueModel:"批量",tableName:"content",apiName_save:"delete1"},
        {modelName:'dialog',name:"delete1",type: 'DialogSelect',title:'删除',msg:'是否确认删除？',tableName:"content",apiName_save:"delete1"},

        //工厂查增删改
        {modelName:'dialog',name:"addFactory",type: 'DialogEdit', system_save_id:"system_save_id",apiName_save:"saveF",tableName:"content2",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"factory_id",label:"工厂",type: 'ComponentsInputSelect',
                            rules:[{validator: utils.my_required, message: "请选择工厂"}],
                            ajax_url:"factory",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"factory_article_no",label:"工厂货号",type: 'ComponentsInput',
                            // rules:[{validator: utils.my_required, message: "请输入工厂货号"}]
                        },
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden',system_id:"system_save_id"},
                        {modelName:'content',name: 'number_id', label: 'number_id',type:'ComponentsInputHidden',initValue() {
                                let that:any =this
                                let content = utils.getPage().getComponents({system_id:"content"})
                                let value = content.selectRowOnly[content.primaryKey];
                                if(utils.isNotNull(value)){
                                    that.value =content.selectRowOnly[content.primaryKey]
                                }else{
                                    that.value = that.value_default;
                                }
                            }},
                    ]},
            ]},
        {modelName:'dialog',name:"deleteAllFactory",type: 'DialogSelect',title:'删除',msg:'是否确认批量删除？',valueModel:"批量",tableName:"content2",apiName_save:"deleteF"},
        {modelName:'dialog',name:"deleteF",type: 'DialogSelect',title:'删除',msg:'是否确认删除？',tableName:"content2",apiName_save:"deleteF"},

        //签封样查增删改
        {modelName:'dialog',name:"examine2",type: 'DialogEdit',apiName_save:"save2",apiName_queryById:"queryById2",tableName:"content3", components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"no",label:"签封样编号",type: 'ComponentsText'},
                        {modelName:'content',name:"sample_holder",label:"签样人",type: 'ComponentsText'},
                        {modelName:'content',name:"approver",label:"审批人",type: 'ComponentsText'},
                        {modelName:'content',name:"person",label:"保管人",type: 'ComponentsText'},
                        {modelName:'content',name:"place",label:"保管地点",type: 'ComponentsText'},
                        {modelName:'content',name:"date",label:"签样日期",type: 'ComponentsText'},
                        {modelName:'content',name: 'number_factory_id', label: 'id',type:'ComponentsInputHidden',},
                    ]},
            ],toolBtn:[]},
        {modelName:'dialog',name:"increase2",type: 'DialogEdit',tableName:"content3",apiName_save:"save2",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"no",label:"签封样编号",type: 'ComponentsInput',
                            rules:[{validator: utils.my_required, message: "请输入签封样编号"}]},
                        {modelName:'content',name:"sample_holder",label:"签样人",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入签样人"}]},
                        {modelName:'content',name:"approver",label:"审批人",type: 'ComponentsInput'},
                        {modelName:'content',name:"person",label:"保管人",type: 'ComponentsInput'},
                        {modelName:'content',name:"place",label:"保管地点",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入保管地点"}]},
                        {modelName:'content',name:"date",label:"签样日期",type: 'ComponentsInputDay',day_auto:true,
                            rules:[{validator: utils.my_required, message: "请选择签样日期"}]},
                        {modelName:'content',name: 'number_factory_id', label: 'id',type:'ComponentsInputHidden',initValue() {
                                let that:any =this
                                let content = utils.getPage().getComponents({system_id:"content2"})
                                let value = content.selectRowOnly[content.primaryKey];
                                if(utils.isNotNull(value)){
                                    that.value =content.selectRowOnly[content.primaryKey]
                                }else{
                                    that.value = that.value_default;
                                }
                            }},
                    ]},
            ]},
        {modelName:'dialog',name:"edit2",type: 'DialogEdit',apiName_save:"save2",apiName_queryById:"queryById2",tableName:"content3",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"no",label:"签封样编号",type: 'ComponentsInput',
                            rules:[{validator: utils.my_required, message: "请输入签封样编号"}]},
                        {modelName:'content',name:"sample_holder",label:"签样人",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入签样人"}]},
                        {modelName:'content',name:"approver",label:"审批人",type: 'ComponentsInput'},
                        {modelName:'content',name:"person",label:"保管人",type: 'ComponentsInput'},
                        {modelName:'content',name:"place",label:"保管地点",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入保管地点"}]},
                        {modelName:'content',name:"date",label:"签样日期",type: 'ComponentsInputDay',rules:[{validator: utils.my_required, message: "请选择签样日期"}]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name: 'number_factory_id', label: 'id',type:'ComponentsInputHidden',initValue() {
                                let that:any =this
                                let content = utils.getPage().getComponents({system_id:"content2"})
                                let value = content.selectRowOnly[content.primaryKey];
                                if(utils.isNotNull(value)){
                                    that.value =content.selectRowOnly[content.primaryKey]
                                }else{
                                    that.value = that.value_default;
                                }
                            }},
                    ]},
            ]},
        {modelName:'dialog',name:"deleteAll2",type: 'DialogSelect',title:'删除',msg:'是否确认批量删除？',valueModel:"批量",tableName:"content3",apiName_save:"delete2"},
        {modelName:'dialog',name:"delete2",type: 'DialogSelect',title:'删除',msg:'是否确认删除？',tableName:"content3",apiName_save:"delete2"},

        //工艺单查增删改
        {modelName:'dialog',name:"export",apiName_queryById:"queryById3", tableName:"content4",apiName_download:"export",type: 'DialogDownload'},

        {modelName:'dialog',name:"examine3",type: 'DialogEdit',tableName:"content4",apiName_save:"save3",apiName_queryById:"queryById3",dialog_width:"1400px",components:[
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"基础信息",name:"base1",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"process_form_number",label:"工艺单编号",type: 'ComponentsText'},
                                {modelName:'content',name:"no",label:"样品编号",type: 'ComponentsText'},
                                {modelName:'content',name:"producer",label:"制作人",type: 'ComponentsText'},
                                {modelName:'content',name:"createdate",label:"制作日期",type: 'ComponentsText'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom', label:"样品信息",components:[
                                {modelName:'content',name:"product_no",label:"货号",type: 'ComponentsText',initValue() {
                                        let that:any =this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['name'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['name']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"cn_name",label:"中文品名",type: 'ComponentsText',initValue() {
                                        let that:any =this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['chinese_name'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['chinese_name']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"en_name",label:"英文品名",type: 'ComponentsText',initValue() {
                                        let that:any = this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['english_name'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['english_name']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"five_code",label:"五位码",type: 'ComponentsText',initValue() {
                                        let that:any = this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['code'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['code']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"bar_code",label:"EAN码",type: 'ComponentsText',initValue() {
                                        let that:any =this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['ean_code'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['ean_code']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"gross_weight",label:"毛重",type: 'ComponentsText'},
                                {modelName:'content',name:"net_weight",label:"净重",type: 'ComponentsText'},
                                {modelName:'content',name:"packing_outsize",label:"包装外径",type: 'ComponentsText'},
                                {modelName:'content',name:"product_size",label:"产品尺寸",type: 'ComponentsText'},
                                {modelName:'content',name:"express_day",label:"快递周长",type: 'ComponentsText'},
                                {modelName:'content',name:"volume_weight",label:"体积重",type: 'ComponentsText'},
                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"部件信息",name:"base2",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"部件信息",components:[
                                {modelName:'content',name:"gyd_bjxx",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"component_id",label:"部件名称",type: 'ComponentsInputSelect',
                                            ajax_url:"component",props_label:"name",props_value:"id",rules:[{validator: utils.my_required, message: "请选择部件名称"}],},
                                        {modelName:'template',name:"number",label:"数量",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_number, message: "只能填写数字"},
                                            ]},
                                        {modelName:'template',name:"material_quality",label:"材质",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color",label:"颜色",type: 'ComponentsInput'},
                                        {modelName:'template',name:"specifications",label:"规格",type: 'ComponentsInput'},
                                        {modelName:'template',name:"surface_treatment",label:"表面处理",type: 'ComponentsInput'},
                                        {modelName:'template',name:"url",label:"图片",type: 'ComponentsInputUploadImage'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"材质说明",components:[
                                {modelName:'content',name:"material_description",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"description",label:"材质说明",type: 'ComponentsInputTextarea',
                                            rules:[{validator: utils.my_required, message: "请填写材质说明"}]},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"配件信息",name:"base3",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"配件信息",components:[
                                {modelName:'content',name:"gyd_pjxx",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"part_id",label:"配件名称",type: 'ComponentsInputSelect',ajax_url:"part",props_label:"name",props_value:"id",
                                            rules:[{validator: utils.my_required, message: "请选择配件名称"}]},
                                        {modelName:'template',name:"number",label:"数量",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_number, message: "只能填写数字"},
                                            ]},
                                        {modelName:'template',name:"specifications",label:"规格",type: 'ComponentsInput'},
                                        {modelName:'template',name:"material_quality",label:"材质",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color",label:"颜色",type: 'ComponentsInput'},
                                        {modelName:'template',name:"surface_treatment",label:"表面处理",type: 'ComponentsInput'},
                                        {modelName:'template',name:"url",label:"图片",type: 'ComponentsInputUploadImage'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name:'id', label:'id',type:'ComponentsInputHidden'},
                                    ]},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"配件说明",components:[
                                {modelName:'content',name:"part_description",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"description",label:"配件说明",type: 'ComponentsInputTextarea',
                                            rules:[{validator: utils.my_required, message: "请填写配件说明"}]},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"包装材料信息",name:"base4",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"包装材料信息",components:[
                                {modelName:'content',name:"gyd_bzcl",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"type",label:"包材类型",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_required, message: "请填写包材类型"}]},
                                        {modelName:'template',name:"name",label:"包材名称",type: 'ComponentsInput'},
                                        {modelName:'template',name:"number",label:"数量",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_number, message: "只能填写数字"},
                                            ]},
                                        {modelName:'template',name:"specifications",label:"规格",type: 'ComponentsInput'},
                                        {modelName:'template',name:"material_quality",label:"材质",type: 'ComponentsInput'},
                                        {modelName:'template',name:"process",label:"工艺指标",type: 'ComponentsInput'},
                                        {modelName:'template',name:"url",label:"图片",type: 'ComponentsInputUploadImage'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},
                        {modelName:'from',type: 'AssemblyFrom',label:"包材说明",components:[
                                {modelName:'content',name:"package_description",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"description",label:"包材说明",type: 'ComponentsInputTextarea',
                                            rules:[{validator: utils.my_required, message: "请填写包材说明"}]},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},

                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"产品测试",name:"base5",components:[
                        {modelName:'content',name:"gyd_test",label:"产品测试",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"test_id",label:"测试项目",type: 'ComponentsInputSelect',ajax_url:"test",props_label:"item",props_value:"id",
                                    rules:[{validator: utils.my_required, message: "请选择测试项目"}]},
                                // {modelName:'template',name:"standard",label:"测试标准",type: 'ComponentsInput'},
                                // {modelName:'template',name:"requirement",label:"测试要求",type: 'ComponentsInput'},
                                {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"产品签样",name:"base6",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"签样信息",components:[
                                {modelName:'content',name:"gyd_qyxx",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"signature_number",label:"签样编号",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_required, message: "请填写签样编号"}]},
                                        {modelName:'template',name:"date",label:"签样日期",type: 'ComponentsInputDay'},
                                        {modelName:'template',name:"name",label:"签样名称",type: 'ComponentsInput'},
                                        {modelName:'template',name:"position",label:"签样部位",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color",label:"签样颜色",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color_number",label:"色样编号",type: 'ComponentsInput'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},

                                    ]},]},
                        {modelName:'from',type: 'AssemblyFrom',label:"签样意见",components:[
                                {modelName:'content',name:"gyd_qyyj",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"qyyj_bh",label:"签样编号",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_required, message: "请填写签样编号"}]},
                                        {modelName:'template',name:"qyyj_rq",label:"签样日期",type: 'ComponentsInputDay'},
                                        {modelName:'template',name:"opinion",label:"签样意见",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},

                                    ]},]},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"质量重点注意事项",name:"base7",components:[
                        {modelName:'content',name:"gyd_zysx",label:"注意事项",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"attention",label:"注意事项",type: 'ComponentsInputTextarea',style:"width:500px;",
                                    rules:[{validator: utils.my_required, message: "请填写注意事项"}]},
                                {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},

                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"相关照片",name:"base8",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"产品尺寸图片",components:[
                                {modelName:'content',name:"overallsize_pictures",label:"整体尺寸图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"detailsize_pictures",label:"细节尺寸图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"localsize_pictures",label:"局部尺寸图",type: 'ComponentsInputUploadImage'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"brand_pictures",label:"商标位置图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"sealsample_pictures",label:"签封样图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"color_pictures",label:"色样图",type: 'ComponentsInputUploadImage'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"尺寸说明",components:[
                                {modelName:'content',name:"size_description",label:"尺寸说明",type: 'ComponentsInputTextarea'},
                            ]},
                    ]},
            ],toolBtn:[]},

        {modelName:'dialog',name:"apply3",type: 'DialogSelect',title:'申请',tableName:"content4",apiName_save:"apply3",msg:'是否确认提交审核申请？',valueModel:"其他"},
        {modelName:'dialog',name:"detail3",type: 'DialogEdit',title:'详情',dialog_width:"1400px",apiName_queryById:"queryById3",tableName:"content4", components:[
                {modelName:'from',type: 'AssemblyCollapse',label:"审核详情",name:"base8",components:[
                        {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"基础信息",components:[
                                {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                        {modelName:'content',name:"process_form_number",label:"工艺单编号",type: 'ComponentsText'},
                                        {modelName:'content',name:"no",label:"样品编号",type: 'ComponentsText'},
                                        {modelName:'content',name:"producer",label:"制作人",type: 'ComponentsText'},
                                        {modelName:'content',name:"create_date",label:"制作日期",type: 'ComponentsText'},
                                    ]},
                                {modelName:'from',type: 'AssemblyFrom', label:"样品信息",components:[
                                        {modelName:'content',name:"product_no",label:"货号",type: 'ComponentsText',initValue() {
                                                let that:any = this
                                                let content = utils.getPage().getComponents({system_id:"content"})
                                                let value = content.selectRowOnly['name'];
                                                if(utils.isNotNull(value)){
                                                    that.value =content.selectRowOnly['name']
                                                }else{
                                                    that.value = that.value_default;
                                                }
                                            }},
                                        {modelName:'content',name:"cn_name",label:"中文品名",type: 'ComponentsText'},
                                        {modelName:'content',name:"en_name",label:"英文品名",type: 'ComponentsText'},
                                        {modelName:'content',name:"five_code",label:"五位码",type: 'ComponentsText'},
                                        {modelName:'content',name:"bar_code",label:"EAN码",type: 'ComponentsText'},
                                        {modelName:'content',name:"gross_weight",label:"毛重",type: 'ComponentsText'},
                                        {modelName:'content',name:"net_weight",label:"净重",type: 'ComponentsText'},
                                        {modelName:'content',name:"packing_outsize",label:"包装外径",type: 'ComponentsText'},
                                        {modelName:'content',name:"product_size",label:"产品尺寸",type: 'ComponentsText'},
                                        {modelName:'content',name:"express_day",label:"快递周长",type: 'ComponentsText'},
                                        {modelName:'content',name:"volume_weight",label:"体积重",type: 'ComponentsText'},
                                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                                    ]
                                },
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"审核流程",components:[
                                {modelName:'content',name:"flowdesc",label:"",addBtn: false,editTr:false, type: 'ComponentsInputTable',value_default:[],components:[
                                        {modelName:'template',name:"ui_name",label:"处理人",type: 'ComponentsText'},
                                        {modelName:'template',name:"create_time",label:"处理时间",type: 'ComponentsText',style:{width:"190px"}},
                                        {modelName:'template',name:"audit_opinion",label:"处理意见",type: 'ComponentsText'},
                                        {modelName:'template',name:"name",label:"流程",type: 'ComponentsText'},
                                        {modelName:'template',name:"rectification_pic1",label:"整改照片",type: 'ComponentsInputImage'},
                                        // {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                                    ]},
                            ]},
                    ]}],toolBtn:[]},
        {modelName:'dialog',name:"approve3",type: 'DialogEdit',tableName:"content4",title:"审核",apiName_queryById:"queryById3",apiName_save:"examineOk3",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"examine_result",label:"审核结果",type: 'ComponentsInputSelect',
                            options:[{name:"通过",value:"通过"},{name:"修改/重做",value:"修改/重做"},{name:"不通过",value:"不通过"}]},
                        {modelName:'content',name:"examine_content",label:"审核内容",type: 'ComponentsInputTextarea',},
                        {modelName:'content',name:"examine_pictures",label:"上传照片",type: 'ComponentsInputUploadImage'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name: 'company_id', label: 'id2',type:'ComponentsInputHidden'},
                    ]},]},
        {modelName:'dialog',name:"increase3",type: 'DialogEdit',save_close:false,tableName:"content4",system_save_id:"system_save_id3",apiName_save:"save3",dialog_width:"100%",components:[
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"基础信息",name:"base1",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"process_form_number",label:"工艺单编号",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入工艺单编号"}]},
                                {modelName:'content',name:"sample_id",label:"样品编号",type: 'ComponentsInputSelect',
                                    rules:[{validator: utils.my_required, message: "请输入样品编号"}],
                                    ajax_url:"sample",props_label:"no",props_value:"id",
                                    system_id:'system_sample_id',associated_notice:['system_sample_message'],
                                },
                                {modelName:'content',name:"producer",label:"制作人",type: 'ComponentsInput'},
                                {modelName:'content',name:"createdate",label:"制作日期",type: 'ComponentsInputDay',day_auto:true},
                                {modelName:'content',name: 'number_factory_id', label: 'id',type:'ComponentsInputHidden',initValue() {
                                        let that:any =this
                                        let content = utils.getPage().getComponents({system_id:"content2"})
                                        let value = content.selectRowOnly[content.primaryKey];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly[content.primaryKey]
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden',system_id:"system_save_id3"},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',system_id:'system_sample_message', label:"样品信息",components:[
                                {modelName:'content',name:"product_no",label:"货号",type: 'ComponentsText',initValue() {
                                        let that:any =this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['name'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['name']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"cn_name",label:"中文品名",type: 'ComponentsText',initValue() {
                                        let that:any =this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['chinese_name'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['chinese_name']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"en_name",label:"英文品名",type: 'ComponentsText',initValue() {
                                        let that:any =this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['english_name'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['english_name']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"five_code",label:"五位码",type: 'ComponentsText',initValue() {
                                        let that:any =this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['code'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['code']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"bar_code",label:"EAN码",type: 'ComponentsText',initValue() {
                                        let that:any = this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['ean_code'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['ean_code']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"gross_weight",label:"毛重",type: 'ComponentsText'},
                                {modelName:'content',name:"net_weight",label:"净重",type: 'ComponentsText'},
                                {modelName:'content',name:"packing_outsize",label:"包装外径",type: 'ComponentsText'},
                                {modelName:'content',name:"product_size",label:"产品尺寸",type: 'ComponentsText'},
                                {modelName:'content',name:"express_day",label:"快递周长",type: 'ComponentsText'},
                                {modelName:'content',name:"volume_weight",label:"体积重",type: 'ComponentsText'},
                                {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                            ],
                            associated:function(){
                                let system_sample_id = utils.getPage().getComponents({system_id:'system_sample_id'})
                                let system_sample_message = utils.getPage().getComponents({system_id:'system_sample_message'})
                                let system_id =
                                    utils.my_post({apiName:'querySampleMessage', params: {"default_id_" :system_sample_id.value},
                                        ok: (json:any, dataAll:any) => {
                                            system_sample_message.setFromValue(json)
                                        },err: (json:any, dataAll:any) => {
                                            system_sample_message.initValue()
                                            system_sample_message.setFromValue({id:system_sample_id.value})
                                        }
                                    })
                            }
                        },
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"部件信息",name:"base2",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"部件信息",components:[
                                {modelName:'content',name:"gyd_bjxx",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"component_id",label:"部件名称",type: 'ComponentsInputSelect',
                                            ajax_url:"component",props_label:"name",props_value:"id",rules:[{validator: utils.my_required, message: "请选择部件名称"}],},
                                        {modelName:'template',name:"number",label:"数量",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_number, message: "只能填写数字"},
                                            ]},
                                        {modelName:'template',name:"material_quality",label:"材质",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color",label:"颜色",type: 'ComponentsInput'},
                                        {modelName:'template',name:"specifications",label:"规格",type: 'ComponentsInput'},
                                        {modelName:'template',name:"surface_treatment",label:"表面处理",type: 'ComponentsInput'},
                                        {modelName:'template',name:"url",label:"图片",type: 'ComponentsInputUploadImage'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"材质说明",components:[
                                {modelName:'content',name:"material_description",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"description",label:"材质说明",type: 'ComponentsInputTextarea',
                                            rules:[{validator: utils.my_required, message: "请填写材质说明"}]},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"配件信息",name:"base3",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"配件信息",components:[
                                {modelName:'content',name:"gyd_pjxx",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"part_id",label:"配件名称",type: 'ComponentsInputSelect',ajax_url:"part",props_label:"name",props_value:"id",
                                            rules:[{validator: utils.my_required, message: "请选择配件名称"}]},
                                        {modelName:'template',name:"number",label:"数量",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_number, message: "只能填写数字"},
                                            ]},
                                        {modelName:'template',name:"specifications",label:"规格",type: 'ComponentsInput'},
                                        {modelName:'template',name:"material_quality",label:"材质",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color",label:"颜色",type: 'ComponentsInput'},
                                        {modelName:'template',name:"surface_treatment",label:"表面处理",type: 'ComponentsInput'},
                                        {modelName:'template',name:"url",label:"图片",type: 'ComponentsInputUploadImage'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name:'id', label:'id',type:'ComponentsInputHidden'},
                                    ]},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"配件说明",components:[
                                {modelName:'content',name:"part_description",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"description",label:"配件说明",type: 'ComponentsInputTextarea',
                                            rules:[{validator: utils.my_required, message: "请填写配件说明"}]},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"包装材料信息",name:"base4",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"包装材料信息",components:[
                                {modelName:'content',name:"gyd_bzcl",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"type",label:"包材类型",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_required, message: "请填写包材类型"}]},
                                        {modelName:'template',name:"name",label:"包材名称",type: 'ComponentsInput'},
                                        {modelName:'template',name:"number",label:"数量",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_number, message: "只能填写数字"}
                                            ]},
                                        {modelName:'template',name:"specifications",label:"规格",type: 'ComponentsInput'},
                                        {modelName:'template',name:"material_quality",label:"材质",type: 'ComponentsInput'},
                                        {modelName:'template',name:"process",label:"工艺指标",type: 'ComponentsInput'},
                                        {modelName:'template',name:"url",label:"图片",type: 'ComponentsInputUploadImage'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},
                        {modelName:'from',type: 'AssemblyFrom',label:"包材说明",components:[
                                {modelName:'content',name:"package_description",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"description",label:"包材说明",type: 'ComponentsInputTextarea',
                                            rules:[{validator: utils.my_required, message: "请填写包材说明"}]},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},

                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"产品测试",name:"base5",components:[
                        {modelName:'content',name:"gyd_test",label:"产品测试",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"test_id",label:"测试项目",type: 'ComponentsInputSelect',ajax_url:"test",props_label:"item",props_value:"id",
                                    rules:[{validator: utils.my_required, message: "请选择测试项目"}]},
                                // {modelName:'template',name:"standard",label:"测试标准",type: 'ComponentsInput'},
                                // {modelName:'template',name:"requirement",label:"测试要求",type: 'ComponentsInput'},
                                {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"产品签样",name:"base6",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"签样信息",components:[
                                {modelName:'content',name:"gyd_qyxx",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"signature_number",label:"签样编号",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_required, message: "请填写签样编号"}]},
                                        {modelName:'template',name:"date",label:"签样日期",type: 'ComponentsInputDay',day_auto:true},
                                        {modelName:'template',name:"name",label:"签样名称",type: 'ComponentsInput'},
                                        {modelName:'template',name:"position",label:"签样部位",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color",label:"签样颜色",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color_number",label:"色样编号",type: 'ComponentsInput'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},

                                    ]},]},
                        {modelName:'from',type: 'AssemblyFrom',label:"签样意见",components:[
                                {modelName:'content',name:"gyd_qyyj",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"qyyj_bh",label:"签样编号",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_required, message: "请填写签样编号"}]},
                                        {modelName:'template',name:"qyyj_rq",label:"签样日期",type: 'ComponentsInputDay',day_auto:true},
                                        {modelName:'template',name:"opinion",label:"签样意见",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},

                                    ]},]},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"质量重点注意事项",name:"base7",components:[
                        {modelName:'content',name:"gyd_zysx",label:"注意事项",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"attention",label:"注意事项",type: 'ComponentsInputTextarea',style:"width:500px;",
                                    rules:[{validator: utils.my_required, message: "请填写注意事项"}]},
                                {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},

                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"相关照片",name:"base8",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"产品尺寸图片",components:[
                                {modelName:'content',name:"overallsize_pictures",label:"整体尺寸图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"detailsize_pictures",label:"细节尺寸图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"localsize_pictures",label:"局部尺寸图",type: 'ComponentsInputUploadImage'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"brand_pictures",label:"商标位置图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"sealsample_pictures",label:"签封样图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"color_pictures",label:"色样图",type: 'ComponentsInputUploadImage'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"尺寸说明",components:[
                                {modelName:'content',name:"size_description",label:"尺寸说明",type: 'ComponentsInputTextarea'},
                            ]},
                    ]},
            ]},

        {modelName:'dialog',name:"edit3",type: 'DialogEdit',save_close:false,tableName:"content4",apiName_save:"save3",apiName_queryById:"queryById3",dialog_width:"1400px",components:[
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"基础信息",name:"base1",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"process_form_number",label:"工艺单编号",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入工艺单编号"}]},
                                {modelName:'content',name:"sample_id",label:"样品编号",type: 'ComponentsInputSelect',
                                    rules:[{validator: utils.my_required, message: "请输入样品编号"}],
                                    ajax_url:"sample",props_label:"no",props_value:"id",
                                    system_id:'system_sample_id2',associated_notice:['system_sample_message2'],
                                },
                                {modelName:'content',name:"producer",label:"制作人",type: 'ComponentsInput'},
                                {modelName:'content',name:"createdate",label:"制作日期",type: 'ComponentsInputDay'},
                                {modelName:'content',name: 'number_factory_id', label: 'id',type:'ComponentsInputHidden',initValue() {
                                        let that:any = this
                                        let content = utils.getPage().getComponents({system_id:"content2"})
                                        let value = content.selectRowOnly[content.primaryKey];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly[content.primaryKey]
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden',system_id:"system_save_id3"},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',system_id:'system_sample_message2', label:"样品信息",components:[
                                {modelName:'content',name:"product_no",label:"货号",type: 'ComponentsText',initValue() {
                                        let that:any =this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['name'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['name']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"cn_name",label:"中文品名",type: 'ComponentsText',initValue() {
                                        let that:any = this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['chinese_name'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['chinese_name']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"en_name",label:"英文品名",type: 'ComponentsText',initValue() {
                                        let that:any = this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['english_name'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['english_name']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"five_code",label:"五位码",type: 'ComponentsText',initValue() {
                                        let that:any = this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['code'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['code']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"bar_code",label:"EAN码",type: 'ComponentsText',initValue() {
                                        let that:any = this
                                        let content = utils.getPage().getComponents({system_id:"content"})
                                        let value = content.selectRowOnly['ean_code'];
                                        if(utils.isNotNull(value)){
                                            that.value =content.selectRowOnly['ean_code']
                                        }else{
                                            that.value = that.value_default;
                                        }
                                    }},
                                {modelName:'content',name:"gross_weight",label:"毛重",type: 'ComponentsText'},
                                {modelName:'content',name:"net_weight",label:"净重",type: 'ComponentsText'},
                                {modelName:'content',name:"packing_outsize",label:"包装外径",type: 'ComponentsText'},
                                {modelName:'content',name:"product_size",label:"产品尺寸",type: 'ComponentsText'},
                                {modelName:'content',name:"express_day",label:"快递周长",type: 'ComponentsText'},
                                {modelName:'content',name:"volume_weight",label:"体积重",type: 'ComponentsText'},
                                {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                            ],
                            associated:function(){
                                let system_sample_id = utils.getPage().getComponents({system_id:'system_sample_id2'})
                                let system_sample_message = utils.getPage().getComponents({system_id:'system_sample_message2'})
                                let system_id =
                                    utils.my_post({apiName:'querySampleMessage', params: {"default_id_" :system_sample_id.value},
                                        ok: (json:any, dataAll:any) => {
                                            system_sample_message.setFromValue(json)
                                        },err: (json:any, dataAll:any) => {
                                            system_sample_message.initValue()
                                            system_sample_message.setFromValue({id:system_sample_id.value})

                                        }
                                    })
                            }
                        },
                    ]},

                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"部件信息",name:"base2",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"部件信息",components:[
                                {modelName:'content',name:"gyd_bjxx",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"component_id",label:"部件名称",type: 'ComponentsInputSelect',
                                            ajax_url:"component",props_label:"name",props_value:"id",rules:[{validator: utils.my_required, message: "请选择部件名称"}],},
                                        {modelName:'template',name:"number",label:"数量",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_number, message: "只能填写数字"},
                                            ]},
                                        {modelName:'template',name:"material_quality",label:"材质",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color",label:"颜色",type: 'ComponentsInput'},
                                        {modelName:'template',name:"specifications",label:"规格",type: 'ComponentsInput'},
                                        {modelName:'template',name:"surface_treatment",label:"表面处理",type: 'ComponentsInput'},
                                        {modelName:'template',name:"url",label:"图片",type: 'ComponentsInputUploadImage'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"材质说明",components:[
                                {modelName:'content',name:"material_description",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"description",label:"材质说明",type: 'ComponentsInputTextarea',
                                            rules:[{validator: utils.my_required, message: "请填写材质说明"}]},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"配件信息",name:"base3",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"配件信息",components:[
                                {modelName:'content',name:"gyd_pjxx",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"part_id",label:"配件名称",type: 'ComponentsInputSelect',ajax_url:"part",props_label:"name",props_value:"id",
                                            rules:[{validator: utils.my_required, message: "请选择配件名称"}]},
                                        {modelName:'template',name:"number",label:"数量",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_number, message: "只能填写数字"},
                                            ]},
                                        {modelName:'template',name:"specifications",label:"规格",type: 'ComponentsInput'},
                                        {modelName:'template',name:"material_quality",label:"材质",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color",label:"颜色",type: 'ComponentsInput'},
                                        {modelName:'template',name:"surface_treatment",label:"表面处理",type: 'ComponentsInput'},
                                        {modelName:'template',name:"url",label:"图片",type: 'ComponentsInputUploadImage'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name:'id', label:'id',type:'ComponentsInputHidden'},
                                    ]},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"配件说明",components:[
                                {modelName:'content',name:"part_description",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"description",label:"配件说明",type: 'ComponentsInputTextarea',
                                            rules:[{validator: utils.my_required, message: "请填写配件说明"}]},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"包装材料信息",name:"base4",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"包装材料信息",components:[
                                {modelName:'content',name:"gyd_bzcl",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"type",label:"包材类型",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_required, message: "请填写包材类型"}]},
                                        {modelName:'template',name:"name",label:"包材名称",type: 'ComponentsInput'},
                                        {modelName:'template',name:"number",label:"数量",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_number, message: "只能填写数字"},
                                            ]},
                                        {modelName:'template',name:"specifications",label:"规格",type: 'ComponentsInput'},
                                        {modelName:'template',name:"material_quality",label:"材质",type: 'ComponentsInput'},
                                        {modelName:'template',name:"process",label:"工艺指标",type: 'ComponentsInput'},
                                        {modelName:'template',name:"url",label:"图片",type: 'ComponentsInputUploadImage'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},
                        {modelName:'from',type: 'AssemblyFrom',label:"包材说明",components:[
                                {modelName:'content',name:"package_description",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"description",label:"包材说明",type: 'ComponentsInputTextarea',
                                            rules:[{validator: utils.my_required, message: "请填写包材说明"}]},
                                        {modelName:'template',name:"id",label:"id",type: 'ComponentsInputHidden'},
                                    ]},]},

                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"产品测试",name:"base5",components:[
                        {modelName:'content',name:"gyd_test",label:"产品测试",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"test_id",label:"测试项目",type: 'ComponentsInputSelect',ajax_url:"test",props_label:"item",props_value:"id",
                                    rules:[{validator: utils.my_required, message: "请选择测试项目"}]},
                                // {modelName:'template',name:"standard",label:"测试标准",type: 'ComponentsInput'},
                                // {modelName:'template',name:"requirement",label:"测试要求",type: 'ComponentsInput'},
                                {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"产品签样",name:"base6",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"签样信息",components:[
                                {modelName:'content',name:"gyd_qyxx",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"signature_number",label:"签样编号",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_required, message: "请填写签样编号"}]},
                                        {modelName:'template',name:"date",label:"签样日期",type: 'ComponentsInputDay'},
                                        {modelName:'template',name:"name",label:"签样名称",type: 'ComponentsInput'},
                                        {modelName:'template',name:"position",label:"签样部位",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color",label:"签样颜色",type: 'ComponentsInput'},
                                        {modelName:'template',name:"color_number",label:"色样编号",type: 'ComponentsInput'},
                                        {modelName:'template',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},

                                    ]},]},
                        {modelName:'from',type: 'AssemblyFrom',label:"签样意见",components:[
                                {modelName:'content',name:"gyd_qyyj",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"qyyj_bh",label:"签样编号",type: 'ComponentsInput',
                                            rules:[{validator: utils.my_required, message: "请填写签样编号"}]},
                                        {modelName:'template',name:"qyyj_rq",label:"签样日期",type: 'ComponentsInputDay'},
                                        {modelName:'template',name:"opinion",label:"签样意见",type: 'ComponentsInputTextarea'},
                                        {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},

                                    ]},]},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"质量重点注意事项",name:"base7",components:[
                        {modelName:'content',name:"gyd_zysx",label:"注意事项",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                {modelName:'template',name:"attention",label:"注意事项",type: 'ComponentsInputTextarea',style:"width:500px;",
                                    rules:[{validator: utils.my_required, message: "请填写注意事项"}]},
                                {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},

                            ]},
                    ]},
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"相关照片",name:"base8",components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"产品尺寸图片",components:[
                                {modelName:'content',name:"overallsize_pictures",label:"整体尺寸图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"detailsize_pictures",label:"细节尺寸图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"localsize_pictures",label:"局部尺寸图",type: 'ComponentsInputUploadImage'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"brand_pictures",label:"商标位置图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"sealsample_pictures",label:"签封样图",type: 'ComponentsInputUploadImage'},
                                {modelName:'content',name:"color_pictures",label:"色样图",type: 'ComponentsInputUploadImage'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"尺寸说明",components:[
                                {modelName:'content',name:"size_description",label:"尺寸说明",type: 'ComponentsInputTextarea'},
                            ]},
                    ]},
            ]},
        {modelName:'dialog',name:"deleteAll3",type: 'DialogSelect',title:'删除',msg:'是否确认批量删除？',valueModel:"批量",tableName:"content4",apiName_save:"delete3"},
        {modelName:'dialog',name:"delete3",type: 'DialogSelect',title:'删除',msg:'是否确认删除？',tableName:"content4",apiName_save:"delete3"},

        //组装图查增删改
        {modelName:'dialog',name:"apply4",type: 'DialogSelect',title:'申请',tableName:"content5",apiName_save:"apply4",msg:'是否确认提交审核申请？',valueModel:"其他"},
        {modelName:'dialog',name:"detail4",type: 'DialogEdit',title:'详情',dialog_width:"1400px",apiName_queryById:"queryById4",tableName:"content5", components:[
                {modelName:'from',type: 'AssemblyCollapse',label:"审核详情",name:"base8",components:[
                        {modelName:'from',type: 'AssemblyFrom',spread:true,label:"基础信息",components:[
                                {modelName:'content',name:"no",label:"组装图编号",type: 'ComponentsText',rules:[{validator: utils.my_required, message: "请输入签封样编号"}]},
                                {modelName:'content',name:"producer",label:"制作人",type: 'ComponentsText'},
                                {modelName:'content',name:"createdate",label:"制作日期",type: 'ComponentsText'},
                                {modelName:'content',name:"note",label:"备注",type: 'ComponentsText'},
                                {modelName:'content',name: 'number_factory_id', label: 'id',type:'ComponentsInputHidden',},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"审核流程",components:[
                                {modelName:'content',name:"flowdesc",label:"",addBtn: false,editTr:false, type: 'ComponentsInputTable',value_default:[],components:[
                                        {modelName:'template',name:"ui_name",label:"处理人",type: 'ComponentsText'},
                                        {modelName:'template',name:"create_time",label:"处理时间",type: 'ComponentsText',style:{width:"190px"}},
                                        {modelName:'template',name:"audit_opinion",label:"处理意见",type: 'ComponentsText'},
                                        {modelName:'template',name:"name",label:"流程",type: 'ComponentsText'},
                                        {modelName:'template',name:"rectification_pic1",label:"整改照片",type: 'ComponentsInputImage'},
                                        // {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                                    ]},
                            ]},
                    ]}, ],toolBtn:[]},
        {modelName:'dialog',name:"approve2",type: 'DialogEdit',tableName:"content5",title:"审核",apiName_queryById:"queryById4",apiName_save:"examineOk4",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"examine_result",label:"审核结果",type: 'ComponentsInputSelect',
                            options:[{name:"通过",value:"通过"},{name:"修改/重做",value:"修改/重做"},{name:"不通过",value:"不通过"}]},
                        {modelName:'content',name:"examine_content",label:"审核内容",type: 'ComponentsInputTextarea',},
                        {modelName:'content',name:"examine_pictures",label:"上传照片",type: 'ComponentsInputUploadImage'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name: 'company_id', label: 'id2',type:'ComponentsInputHidden'},
                    ]},]},
        {modelName:'dialog',name:"increase4",type: 'DialogEdit',tableName:"content5",apiName_save:"save4",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"no",label:"组装图编号",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入签封样编号"}]},
                        {modelName:'content',name:"producer",label:"制作人",type: 'ComponentsInput'},
                        {modelName:'content',name:"create_date",label:"制作日期",type: 'ComponentsInputDay',day_auto:true},
                        {modelName:'content',name:"file",label:"上传文件",type: 'ComponentsInputUpload'},
                        {modelName:'content',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                        {modelName:'content',name: 'number_factory_id', label: 'id',type:'ComponentsInputHidden',initValue() {
                                let that:any =this
                                let content = utils.getPage().getComponents({system_id:"content2"})
                                let value = content.selectRowOnly[content.primaryKey];
                                if(utils.isNotNull(value)){
                                    that.value =content.selectRowOnly[content.primaryKey]
                                }else{
                                    that.value = that.value_default;
                                }
                            }},
                    ]},
            ]},
        {modelName:'dialog',name:"deleteAll4",type: 'DialogSelect',title:'删除',msg:'是否确认批量删除？',valueModel:"批量",tableName:"content5",apiName_save:"delete4"},
        {modelName:'dialog',name:"examine4",type: 'DialogEdit',apiName_save:"save4",apiName_queryById:"queryById4",tableName:"content5", components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"no",label:"组装图编号",type: 'ComponentsText',rules:[{validator: utils.my_required, message: "请输入签封样编号"}]},
                        {modelName:'content',name:"producer",label:"制作人",type: 'ComponentsText'},
                        {modelName:'content',name:"createdate",label:"制作日期",type: 'ComponentsText'},
                        {modelName:'content',name:"file_path",label:"点击下载文件",type: 'ComponentsInputUpload',show_type:"详情"},
                        {modelName:'content',name:"note",label:"备注",type: 'ComponentsText'},
                        {modelName:'content',name: 'number_factory_id', label: 'id',type:'ComponentsInputHidden',},
                    ]},
            ],toolBtn:[]},
        {modelName:'dialog',name:"edit4",type: 'DialogEdit',apiName_save:"save4",apiName_queryById:"queryById4",tableName:"content5",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"no",label:"组装图编号",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入签封样编号"}]},
                        {modelName:'content',name:"producer",label:"制作人",type: 'ComponentsInput'},
                        {modelName:'content',name:"createdate",label:"制作日期",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"file",label:"上传文件",type: 'ComponentsInputUpload'},

                        {modelName:'content',name:"note",label:"备注",type: 'ComponentsInputTextarea'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                        {modelName:'content',name: 'number_factory_id', label: 'id',type:'ComponentsInputHidden',initValue() {
                                let that:any = this
                                let content = utils.getPage().getComponents({system_id:"content2"})
                                let value = content.selectRowOnly[content.primaryKey];
                                if(utils.isNotNull(value)){
                                    that.value =content.selectRowOnly[content.primaryKey]
                                }else{
                                    that.value = that.value_default;
                                }
                            }},
                    ]},
            ],},
        {modelName:'dialog',name:"delete4",type: 'DialogSelect',title:'删除',msg:'是否确认删除？',tableName:"content5",apiName_save:"delete4"},
    ]
}
export default myModule
