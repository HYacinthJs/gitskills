import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 't_order',
    version: 'PageNormal',
    api: {
        query: "/order/query",
        queryByAll: "/order/queryByAll",
        queryById: "/order/queryById",
        save: "/order/save",
        delete: "/order/delete",
        examineOk: "/order/examineOk",
        apply: "/order/proposeAudit",
        queryBySupplier: "/supplier/queryBySupplier",
        queryByFactory: "/supplier/queryByFactory",
        url3: "/number/queryByAll",
        url4: "/order/querySelectType",
        getCompany: "/company/queryByAll",
        saveNumber: "/order/saveNumber"

    },
    components: [{
            modelName: 'menu',
            type: 'AssemblyMenu'
        },
        {
            modelName: 'header',
            type: 'AssemblyHeader'
        },
        {
            modelName: 'breadcrumbs',
            type: 'AssemblyBreadcrumbs'
        },
        {
            modelName: 'content',
            type: 'AssemblyQuery',
            components: [{
                modelName: 'query',
                type: 'AssemblyFrom',
                components: [
                    // {modelName:'content',name:"name",label:"关键字",type: 'ComponentsInputWithSelect',ajax_url:"url4",props_label:"name",props_value:"id"},
                    {
                        modelName: 'content',
                        name: "number_name",
                        label: "货号",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "order_no",
                        label: "采购单号",
                        label_show: true,
                        label_width: "140px",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "factory_name",
                        label: "工厂",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "supplier_name",
                        label: "供应商",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "remarks",
                        label: "备注",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        type: 'ComponentsInputReQuery'
                    },
                ]
            }],
        },
        {
            //utilshow:false,
            modelName: 'content',
            title: "订单管理",
            type: 'AssemblyContent',
            utilshow: false,
            components: [{
                    modelName: 'content',
                    name: "number_name",
                    label: "货号",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "order_no",
                    label: "采购单号",
                    type: 'ComponentsInput',
                },
                {
                    modelName: 'content',
                    name: "factory_name",
                    label: "工厂",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "supplier_name",
                    label: "供应商",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "estimated_time",
                    label: "预计发货日",
                    type: 'ComponentsInput',
                    sortable: true,
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "edit"
                        }]
                    }],
                },
                {
                    modelName: 'content',
                    name: "number",
                    label: "计划数量",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "re_number",
                    label: "已验数量",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "remarks",
                    label: "备注",
                    type: 'ComponentsInput'
                },
            ],
            toolBtn: [],
            tableBtn: [
                // {label:"查看",type:"primary",click:function(data:any){
                //         let edit = utils.getStore().openDialog({name:'edit',title:"编辑"})
                //         edit.query()
                //     },jurisdictionJson: [{
                //         jurisdiction: [{name: "query"}],
                //     }],
                // },
                // {label:"修改",type:"primary",click:function(data:any){
                //         let edit = utils.getStore().openDialog({name:'edit',title:"编辑"})
                //         edit.query()
                //     },jurisdictionJson: [{
                //         jurisdiction: [{name: "edit"}],
                //     }],
                // },
            ],
            cellClick(column: any) {
                console.log(column.label)
                if (column.label == "预计发货日") {
                    let edit = utils.getStore().openDialog({
                        name: 'goodsDay',
                        title: "预计发货日"
                    })
                    edit.query()
                } else if (column.label == "ETD") {
                    let edit = utils.getStore().openDialog({
                        name: 'goodsDay',
                        title: "ETD"
                    })
                    edit.query()
                }
            }
        },

        {
            modelName: 'dialog',
            name: "goodsDay",
            type: 'DialogEdit',
            apiName_save: "saveNumber",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "estimated_time",
                        label: "预计发货日",
                        type: 'ComponentsInputDay',
                        rules: [{
                            validator: utils.my_required,
                            message: "请填写预计发货日"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "id",
                        label: "id",
                        type: 'ComponentsInputHidden'
                    },
                ]
            }],
            toolBtn: [{
                label: "保存",
                type: "primary",
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "edit"
                    }]
                }],
                click: function (data: any) {
                    let dialog = utils.getStore().selectDialog({
                        name: 'goodsDay'
                    })
                    dialog.save()
                }
            }]
        },
        {
            modelName: 'dialog',
            name: "deleteAll",
            type: 'DialogSelect',
            title: '删除',
            msg: '是否确认批量删除？',
            valueModel: "批量",
            tableName: "content",
            apiName_save: "delete"
        },
        {
            modelName: 'dialog',
            name: "delete",
            type: 'DialogSelect',
            title: '删除',
            msg: '是否确认删除？',
            tableName: "content",
            apiName_save: "delete"
        },
        {
            modelName: 'dialog',
            name: "examine1",
            type: 'DialogEdit',
            title: "审核",
            apiName_save: "examineOk",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "examine_result",
                        label: "审核结果",
                        type: 'ComponentsInputSelect',
                        options: [{
                            name: "通过",
                            value: "通过"
                        }, {
                            name: "修改/重做",
                            value: "修改/重做"
                        }, {
                            name: "不通过",
                            value: "不通过"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "examine_content",
                        label: "审核内容",
                        type: 'ComponentsInputTextarea'
                    },
                    {
                        modelName: 'content',
                        name: "examine_pictures",
                        label: "上传图片",
                        type: 'ComponentsInputUploadImage'
                    },
                    {
                        modelName: 'content',
                        name: 'id',
                        label: 'id',
                        type: 'ComponentsInputHidden'
                    },
                    {
                        modelName: 'content',
                        name: 'company_id',
                        label: 'id2',
                        type: 'ComponentsInputHidden'
                    },
                ]
            }, ]
        },
        {
            modelName: 'dialog',
            name: "apply",
            type: 'DialogSelect',
            title: '申请',
            msg: '是否确认提交审核申请？',
            valueModel: "其他",
            tableName: "content",
            apiName_save: "apply",
        },
        {
            modelName: 'dialog',
            name: "detail",
            type: 'DialogEdit',
            title: '详情',
            dialog_width: "100%",
            tableName: "content",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                label: "审核详情",
                name: "base8",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "基础信息",
                        name: "base8",
                        components: [{
                                modelName: 'content',
                                name: "order_no",
                                label: "采购单号",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "supplier_name",
                                label: "供应商",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "estimated_time",
                                label: "预计发货日",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "latest_time",
                                label: "最晚尾检期",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "numbers",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "product_no",
                                        label: "货号",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "product_name",
                                        label: "产品名称",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "factory_name",
                                        label: "生产工厂",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "factory_article_no",
                                        label: "工厂货号",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "计划数量",
                                        type: 'ComponentsText'
                                    },
                                ]
                            },
                            {
                                modelName: 'content',
                                name: "remarks",
                                label: "备注",
                                type: 'ComponentsText'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "审核流程",
                        components: [{
                            modelName: 'content',
                            name: "flowdesc",
                            label: "",
                            addBtn: false,
                            editTr: false,
                            type: 'ComponentsInputTable',
                            value_default: [],
                            components: [{
                                    modelName: 'template',
                                    name: "ui_name",
                                    label: "处理人",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "create_time",
                                    label: "处理时间",
                                    type: 'ComponentsText',
                                    style: {
                                        width: "190px"
                                    }
                                },
                                {
                                    modelName: 'template',
                                    name: "audit_opinion",
                                    label: "处理意见",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "name",
                                    label: "流程",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "rectification_pic1",
                                    label: "整改照片",
                                    type: 'ComponentsInputImage'
                                },
                                // {modelName:'template',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                            ]
                        }, ]
                    },
                ]
            }, ],
            toolBtn: []
        },
        {
            modelName: 'dialog',
            name: "examine",
            type: 'DialogEdit',
            dialog_width: "80%",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "order_no",
                        label: "采购单号",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入订单编号"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "supplier_id",
                        label: "供应商",
                        type: 'ComponentsInputSelect',
                        ajax_url: "queryBySupplier",
                        props_label: "name",
                        props_value: "id",
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入供应商"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "estimated_time",
                        label: "预计发货日",
                        type: 'ComponentsInputDay',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入预计发货日"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "latest_time",
                        label: "最晚尾检期",
                        type: 'ComponentsInputDay'
                    },
                    // {modelName:'content',name:"state",label:"质检状态",type: 'ComponentsInput'},
                    {
                        modelName: 'content',
                        name: "numbers",
                        label: "",
                        type: 'ComponentsInputTable',
                        value_default: [],
                        components: [{
                                modelName: 'template',
                                name: "number_id",
                                label: "货号",
                                type: 'ComponentsInputSelect',
                                ajax_url: "url3",
                                props_label: "name",
                                props_value: "id",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择货号"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "product_name",
                                label: "产品名称",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入产品名称"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "factory_id",
                                label: "生产工厂",
                                type: 'ComponentsInputSelect',
                                ajax_url: "queryByFactory",
                                props_label: "name",
                                props_value: "id",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入生产工厂"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "factory_article_no",
                                label: "工厂货号",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'template',
                                name: "number",
                                label: "计划数量",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入计划数量"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: 'id',
                                label: 'id',
                                type: 'ComponentsInputHidden'
                            },
                        ]
                    },
                    {
                        modelName: 'content',
                        name: "remarks",
                        label: "备注",
                        type: 'ComponentsInputTextarea'
                    },
                    {
                        modelName: 'content',
                        name: 'id',
                        label: 'id',
                        type: 'ComponentsInputHidden'
                    },
                    {
                        modelName: 'content',
                        name: 'order_number_id',
                        label: 'order_number_id',
                        type: 'ComponentsInputHidden'
                    },

                ]
            }]
        },
        {
            modelName: 'dialog',
            name: "edit",
            type: 'DialogEdit',
            dialog_width: "80%",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "order_no",
                        label: "采购单号",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入订单编号"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "supplier_id",
                        label: "供应商",
                        type: 'ComponentsInputSelect',
                        ajax_url: "queryBySupplier",
                        props_label: "name",
                        props_value: "id",
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入供应商"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "estimated_time",
                        label: "预计发货日",
                        type: 'ComponentsInputDay',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入预计发货日"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "latest_time",
                        label: "最晚尾检期",
                        type: 'ComponentsInputDay'
                    },
                    // {modelName:'content',name:"state",label:"质检状态",type: 'ComponentsInput'},
                    {
                        modelName: 'content',
                        name: "numbers",
                        label: "",
                        type: 'ComponentsInputTable',
                        value_default: [],
                        components: [{
                                modelName: 'template',
                                name: "number_id",
                                label: "货号",
                                type: 'ComponentsInputSelect',
                                ajax_url: "url3",
                                props_label: "name",
                                props_value: "id",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择货号"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "product_name",
                                label: "产品名称",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入产品名称"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "factory_id",
                                label: "生产工厂",
                                type: 'ComponentsInputSelect',
                                ajax_url: "queryByFactory",
                                props_label: "name",
                                props_value: "id",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入生产工厂"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "factory_article_no",
                                label: "工厂货号",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'template',
                                name: "number",
                                label: "计划数量",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入计划数量"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: 'id',
                                label: 'id',
                                type: 'ComponentsInputHidden'
                            },
                        ]
                    },
                    {
                        modelName: 'content',
                        name: "remarks",
                        label: "备注",
                        type: 'ComponentsInputTextarea'
                    },
                    {
                        modelName: 'content',
                        name: 'id',
                        label: 'id',
                        type: 'ComponentsInputHidden'
                    },
                    {
                        modelName: 'content',
                        name: 'order_number_id',
                        label: 'order_number_id',
                        type: 'ComponentsInputHidden'
                    },

                ]
            }]
        },
    ]
}
export default myModule