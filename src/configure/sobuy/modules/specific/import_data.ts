import * as utils from "@/components/util/utils";

const myModule: { [key: string]: any } = {
    type: 'normal',
    name: 'import_data',
    version: 'PageNormal',
    api: {
        query: "/complaint/query",
        queryByAll: "/complaint/queryByAll",
        queryById: "/complaint/queryById",
        save: "/complaint/save",
        delete: "/import/delete",
        getCompany:  "/company/queryByAll",
        uploadSave:"/complaint/saveData",
        queryBySupplier: "/supplier/queryBySupplier",
        queryByFactory: "/supplier/queryByFactory",
        url4:"/order/querySelectType",

        queryScore:"/complaint/queryScore",
        saveScore:"/complaint/saveScore",
        queryScoreById:"/complaint/queryScoreById",

        queryQC:"/complaint/queryQC",
        saveQC:"/complaint/saveQC",
        queryQcById:"/complaint/queryQcById",

    },
    initPage(){                                                         //进入页面执行
        let content = utils.getPage().getComponents({system_id:"content"})
        let content2 = utils.getPage().getComponents({system_id:"content2"})
        let content3 = utils.getPage().getComponents({system_id:"content3"})
        let query = utils.getPage().getComponents({system_id:"query"})
        let query2 = utils.getPage().getComponents({system_id:"query2"})
        let query3 = utils.getPage().getComponents({system_id:"query3"})
        if(utils.isNotNull(query)&&utils.isNotNull(query.initValue)){
            query.initValue()
            query.initAjax()
        }
        if(utils.isNotNull(query2)&&utils.isNotNull(query2.initValue)){
            query2.initValue()
            query2.initAjax()
        }
        if(utils.isNotNull(query3)&&utils.isNotNull(query3.initValue)){
            query3.initValue()
            query3.initAjax()
        }
        if(utils.isNotNull(content)&&utils.isNotNull(content.query)){
            content.query()
        }
        if(utils.isNotNull(content2)&&utils.isNotNull(content2.query)){
            content2.query()
        }
        if(utils.isNotNull(content3)&&utils.isNotNull(content3.query)){
            content3.query()
        }
    },

    components: [
        {
            modelName:'content', type: 'AssemblyQuery',system_id:"query",
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        // {modelName:'content',name:"company_id",label:"公司名称",type: 'ComponentsInputSelect',
                        //     jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
                        {modelName: 'content', name: "number_name", label: "货号", type: 'ComponentsInput'},
                        {modelName:'content',name:"factory_id", label: '生产工厂',type:'ComponentsInputSelect',
                            ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',
                            ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"complaint_day",label:"月份",type: 'ComponentsInputMouth',day_auto:true},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ],},
        {
            modelName: 'content', type: 'AssemblyContent',title:"投诉信息", components: [
                {modelName: 'content', name: "complaint_day", label: "日期", type: 'ComponentsInputDay'},
                {modelName: 'content', name: "number_name", label: "货号", type: 'ComponentsInput'},
                {modelName: 'content', name: "product_grade", label: "产品等级", type: 'ComponentsInput'},
                {modelName: 'content', name: "supplier_name", label: "供应商", type: 'ComponentsInput'},
                {modelName: 'content', name: "factory_name", label: "生产工厂", type: 'ComponentsInput'},
                {modelName: 'content', name: "responsible_man", label: "品管负责人", type: 'ComponentsInput'},
                {modelName: 'content', name: "checkout_count", label: "出库量", type: 'ComponentsInput'},
                {modelName: 'content', name: "comlaint_count", label: "投诉量", type: 'ComponentsInput'},
                {modelName: 'content', name: "loss", label: "投诉损失额（RMB）", type: 'ComponentsInput'},
                {modelName: 'content', name: "reason", label: "投诉原因", type: 'ComponentsInput'},
                {modelName: 'content', name: "classification", label: "投诉分类", type: 'ComponentsInput'},
                {modelName: 'content', name: "supplier_id", label: "supplier_id", type: 'ComponentsInputHidden'},
                {modelName: 'content', name: "factory_id", label: "factory_id", type: 'ComponentsInputHidden'},
            ],toolBtn : [
                {label:"导入",show:true,
                    type:"primary",jurisdictionJson: [{jurisdiction: [{name: "import"}]}],click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'excel',title:"导入"})
                    }},
            ],
        },
        {
            modelName:'content', type: 'AssemblyQuery',system_id:"query2",
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        // {modelName:'content',name:"company_id",label:"公司名称",type: 'ComponentsInputSelect',
                        //     jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
                        {modelName: 'content', name: "number_name", label: "货号", type: 'ComponentsInput'},
                        {modelName:'content',name:"factory_id", label: '生产工厂',type:'ComponentsInputSelect',
                            ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',
                            ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"day",label:"月份",type: 'ComponentsInputMouth',day_auto:true},
                        {modelName:'content',type: 'ComponentsInputReQuery',contentName:"content2"},
                    ]}
            ],
        },
        {
            modelName: 'content', type: 'AssemblyContent', title:"评分信息",queryName:'query2', system_id:"content2",apiNameQuery:"queryScore", components: [
                {modelName: 'content', name: "day", label: "日期", type: 'ComponentsInputDay'},
                {modelName: 'content', name: "number_name", label: "货号", type: 'ComponentsInput'},
                {modelName: 'content', name: "grade", label: "产品等级", type: 'ComponentsInput'},
                {modelName: 'content', name: "supplier_name", label: "供应商", type: 'ComponentsInput'},
                {modelName: 'content', name: "factory_name", label: "生产工厂", type: 'ComponentsInput'},
                {modelName: 'content', name: "responsible_man", label: "品管负责人", type: 'ComponentsInput'},
                {modelName: 'content', name: "customer_score", label: "亚马逊评分", type: 'ComponentsInput'},
                {modelName: 'content', name: "supplier_id", label: "supplier_id", type: 'ComponentsInputHidden'},
                {modelName: 'content', name: "factory_id", label: "factory_id", type: 'ComponentsInputHidden'},
            ],toolBtn : [],tableBtn : [
                {label:"编辑",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "edit"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit2',title:"编辑"})
                        edit.query()
                    }},
                {label:"删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        utils.getStore().openDialog({name:'delete2',title:"删除"})}},
            ],
        },
        {
            modelName:'content', type: 'AssemblyQuery',system_id:"query3",
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        // {modelName:'content',name:"company_id",label:"公司名称",type: 'ComponentsInputSelect',
                        //     jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
                        {modelName: 'content', name: "number_name", label: "货号", type: 'ComponentsInput'},
                        {modelName:'content',name:"factory_id", label: '生产工厂',type:'ComponentsInputSelect',
                            ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',
                            ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"day",label:"月份",type: 'ComponentsInputMouth',day_auto:true},
                        {modelName:'content',type: 'ComponentsInputReQuery',contentName:"content3"},
                    ]}
            ],
        },
        {
            modelName: 'content', type: 'AssemblyContent', title:"QC货号信息",queryName:'query3', system_id:"content3",apiNameQuery:"queryQC", components: [
                {modelName: 'content', name: "day", label: "日期", type: 'ComponentsInputDay'},
                {modelName: 'content', name: "number_name", label: "货号", type: 'ComponentsInput'},
                {modelName: 'content', name: "grade", label: "产品等级", type: 'ComponentsInput'},
                {modelName: 'content', name: "supplier_name", label: "供应商", type: 'ComponentsInput'},
                {modelName: 'content', name: "factory_name", label: "生产工厂", type: 'ComponentsInput'},
                {modelName: 'content', name: "responsible_man", label: "负责人", type: 'ComponentsInput'},
                {modelName: 'content', name: "supplier_id", label: "supplier_id", type: 'ComponentsInputHidden'},
                {modelName: 'content', name: "factory_id", label: "factory_id", type: 'ComponentsInputHidden'},
            ],toolBtn : [],tableBtn : [
                {label:"编辑",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "edit"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit3',title:"编辑"})
                        edit.query()
                    }},
                {label:"删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){
                        utils.getStore().openDialog({name:'delete3',title:"删除"})}},
            ],
        },
        {modelName:'dialog',name:"excel",type: 'DialogEdit',dialog_width:"400px",apiName_save:"uploadSave", components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"file",label:"上传文件",limit:"1", upload_url:"/api/upload/uploadForComplaint",type: 'ComponentsInputUpload'},
                    ]},
            ]},
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                {modelName: 'content', name: "number_name", label: "货号", type: 'ComponentsInput'},
                {modelName: 'content', name: "product_grade", label: "产品等级", type: 'ComponentsInput'},
                {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',
                    rules:[{validator: utils.my_required, message: "请选择供应商"}],
                    ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                {modelName:'content',name:"factory_id", label: '生产工厂',type:'ComponentsInputSelect',
                    rules:[{validator: utils.my_required, message: "请选择工厂"}],
                    ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
                {modelName: 'content', name: "responsible_man", label: "品管负责人", type: 'ComponentsInput'},
                {modelName: 'content', name: "checkout_count", label: "出库量", type: 'ComponentsInput'},
                {modelName: 'content', name: "comlaint_count", label: "投诉量", type: 'ComponentsInput'},
                {modelName: 'content', name: "loss", label: "投诉损失额（RMB）", type: 'ComponentsInput'},
                {modelName: 'content', name: "classification", label: "投诉分类", type: 'ComponentsInput'},
                {modelName: 'content', name: "complaint_day", label: "日期", type:'ComponentsInputDay'},
                {modelName: 'content', name: "reason", label: "投诉原因", type: 'ComponentsInputTextarea'},
                {modelName: 'content', name: "id", label: "id", type: 'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"edit2",type: 'DialogEdit', tableName:"content2", apiName_save:"saveQC",apiName_queryById:"queryScoreById",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName: 'content', name: "number_name", label: "货号", type: 'ComponentsInput'},
                        {modelName: 'content', name: "grade", label: "产品等级", type: 'ComponentsInput'},
                        {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',
                            rules:[{validator: utils.my_required, message: "请选择供应商"}],
                            ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"factory_id", label: '生产工厂',type:'ComponentsInputSelect',
                            rules:[{validator: utils.my_required, message: "请选择工厂"}],
                            ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
                        {modelName: 'content', name: "responsible_man", label: "品管负责人", type: 'ComponentsInput'},
                        {modelName: 'content', name: "customer_score", label: "亚马逊评分", type: 'ComponentsInput'},
                        {modelName: 'content', name: "day", label: "日期", type: 'ComponentsInputDay'},
                        {modelName: 'content', name: "id", label: "id", type: 'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"edit3",type: 'DialogEdit', tableName:"content3",apiName_save:"saveQC",apiName_queryById:"queryQcById",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName: 'content', name: "number_name", label: "货号", type: 'ComponentsInput'},
                        {modelName: 'content', name: "grade", label: "产品等级", type: 'ComponentsInput'},
                        {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',
                            rules:[{validator: utils.my_required, message: "请选择供应商"}],
                            ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"factory_id", label: '生产工厂',type:'ComponentsInputSelect',
                            rules:[{validator: utils.my_required, message: "请选择工厂"}],
                            ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
                        {modelName: 'content', name: "responsible_man", label: "负责人", type: 'ComponentsInput'},
                        {modelName: 'content', name: "day", label: "日期", type: 'ComponentsInputDay'},
                        {modelName: 'content', name: "id", label: "id", type: 'ComponentsInputHidden'},
                    ]},
            ]},

    ]
}
export default myModule
