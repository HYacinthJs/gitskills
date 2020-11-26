import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'midtest',
    version: 'PageNormal',
    api: {
        query: "/midtest/query",
        queryByAll: "/midtest/queryByAll",
        queryById: "/midtest/queryById",
        queryDetail: "/midtest/queryDetails",
        save: "/midtest/save",
        delete: "/midtest/delete",
        inspect: "/midtest/inspect",
        examineOk: "/midtest/examineOk",
        apply: "/sample/newProposeAudit",
        queryApply: "/process/queryByType",
        queryFlow: "/index/getBZDesc",
        export: "/midtest/toExcel",
        export1: "/midtest/online",

        queryBySupplier: "/supplier/queryByAll",
        queryByFactory: "/supplier/queryByFactory",
        queryByInspector: "/user/queryByAll",
        queryOrder: "/number/queryOrderList",
        queryNumber: "/number/queryByAll",
        queryNumberByOrder: "/newnumber/queryNumberListByOrderId",
        queryOrderByNumber: "/newnumber/queryOrderByNumberId",
        querySelectTree: '/problemtype/querySelectTree',
        getCompany: "/company/queryByAll",

    },
    components: [{
            modelName: 'content',
            type: 'AssemblyQuery',
            components: [{
                modelName: 'query',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "order_id",
                        label: "采购单编号",
                        label_show: true,
                        label_width: "140px",
                        type: 'ComponentsInputSelect',
                        ajax_url: "queryOrder",
                        props_label: "no",
                        props_value: "order_id",
                    },
                    // {modelName:'content',name:"sobuy_article_no",label:"索贝货号",type: 'ComponentsInput'},
                    // {modelName:'content',name:"factory_article_no",label:"工厂货号",type: 'ComponentsInput'},
                    {
                        modelName: 'content',
                        type: 'ComponentsInputReQuery'
                    },
                ]
            }]
        },
        {
            modelName: 'content',
            title: "中期检验报告",
            type: 'AssemblyContent',
            components: [
                // {modelName:'content',name:"sobuy_article_no",label:"索贝货号",type: 'ComponentsInput'},
                // {modelName:'content',name:"factory_article_no",label:"工厂货号",type: 'ComponentsInput'},
                {
                    modelName: 'content',
                    name: "order_no",
                    label: "采购单编号",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "number_name",
                    label: "货号",
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
                    name: "factory_name",
                    label: "生产工厂",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "product_name",
                    label: "产品名称",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "number",
                    label: "订单数量",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "state",
                    label: "质检状态",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "inspection_date",
                    label: "检验日期",
                    type: 'ComponentsInput'
                }
            ],
            toolBtn: [{
                    label: "添加",
                    type: "primary",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "add"
                        }]
                    }],
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'increase',
                            title: "添加"
                        })
                        edit.initValue()
                        edit.initAjax()
                    }
                },
                {
                    label: "批量删除",
                    type: "primary",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "delete"
                        }]
                    }],
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'deleteAll',
                            title: "批量删除"
                        })
                        edit.initValue()
                        edit.initAjax()
                    }
                },
            ],
            tableBtn: [{
                    label: "编辑",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'edit',
                            title: "编辑"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "edit"
                        }],
                        "row": [{
                            "state": "检验完成"
                        }, {
                            "state": "修改/重做"
                        }, {
                            "state": "待检验"
                        }]
                    }]
                },
                {
                    label: "查看",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'read',
                            title: "查看"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "query"
                        }]
                    }]
                },
                {
                    label: "删除",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "delete"
                        }]
                    }],
                    click: function (data: any) {
                        utils.getStore().openDialog({
                            name: 'delete',
                            title: "删除"
                        })
                    }
                },
                {
                    label: "申请审核",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'apply',
                            title: "申请审核"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "edit"
                        }],
                        "row": [{
                            "state": "检验完成"
                        }]
                    }],
                },
                // {
                //     label: "审核",
                //     click: function (data: any) {
                //         let examine = utils.getStore().openDialog({
                //             name: 'examine',
                //             title: "审核"
                //         })
                //         examine.query()
                //     },
                //     jurisdictionJson: [{
                //         jurisdiction: [{
                //             name: "apply"
                //         }],
                //         "row": [{
                //             "state": "待审核"
                //         }]
                //     }]
                // },
                {
                    label: "审核详情",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'detail',
                            title: "审核详情"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "edit"
                        }, {
                            name: "apply"
                        }],
                        "row": [{
                            "state": "待审核"
                        }, {
                            "state": "审核通过"
                        }, {
                            "state": "审核不通过"
                        }, {
                            "state": "修改/重做"
                        }]
                    }],
                },
                {
                    label: "报告预览",
                    click: function (data: any) {
                        let system_id =
                            utils.my_post({
                                apiName: 'export1',
                                params: {
                                    "id": data.row.id,
                                    "wx": 1
                                },
                                ok: (json: any, dataAll: any) => {
                                    window.open(json.path)
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("预览出错")
                                }
                            })
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "preview"
                        }],
                        "row": [{
                            "state": "检验完成"
                        }, {
                            "state": "待审核"
                        }, {
                            "state": "审核通过"
                        }, {
                            "state": "审核不通过"
                        }, {
                            "state": "修改/重做"
                        }]
                    }],
                },
                {
                    label: "导出报告",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'export',
                            title: "导出报告"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "download"
                        }],
                        "row": [{
                            "state": "检验完成"
                        }, {
                            "state": "待审核"
                        }, {
                            "state": "审核通过"
                        }, {
                            "state": "审核不通过"
                        }, {
                            "state": "修改/重做"
                        }]
                    }],
                },
            ]
        },
        {
            modelName: 'dialog',
            name: "export",
            apiName_queryById: "queryById",
            apiName_download: "export",
            type: 'DialogDownload'
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
            name: "apply",
            type: 'DialogEdit',
            system_id: "system_word",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "flow_id",
                        label: "审批流程",
                        type: 'ComponentsInputSelect',
                        system_id: "system_flow_id",
                        ajax_url: "queryApply",
                        props_label: "name",
                        props_value: "flow_id",
                        ajax_params: [{
                            type: "text",
                            name: "type",
                            value: 6
                        }],
                        associated_notice: ['system_examine_slider'],
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择审批流程"
                        }],
                    },
                    {
                        modelName: 'content',
                        name: "examine_slider",
                        label: "审批步骤",
                        type: 'ComponentsSlider',
                        system_id: "system_examine_slider",
                        style: {
                            width: "500px !important"
                        },
                        associated: function () {
                            let system_flow_id = utils.getPage().getComponents({
                                system_id: 'system_flow_id'
                            })
                            let system_examine_slider = utils.getPage().getComponents({
                                system_id: 'system_examine_slider'
                            })
                            let system_id = utils.my_post({
                                apiName: 'queryFlow',
                                params: {
                                    "flow_id": system_flow_id.value
                                },
                                ok: (json: any, dataAll: any) => {
                                    system_examine_slider.value = json
                                },
                                err: (json: any, dataAll: any) => {
                                    system_examine_slider.initValue()
                                }
                            })
                        }
                    },
                    {
                        modelName: 'content',
                        name: "id",
                        label: "id",
                        system_id: "system_apply_id",
                        type: 'ComponentsInputHidden'
                    },
                ]
            }, ],
            toolBtn: [{
                    label: "取消",
                    click: function (data: any) {
                        let dialog = utils.getStore().selectDialog({
                            name: 'apply'
                        })
                        dialog.show = false
                    },
                },
                {
                    label: "确认",
                    type: "primary",
                    click: function (data: any) {
                        let that = this
                        let callback = function () {
                            let system_flow_id = utils.getPage().getComponents({
                                system_id: 'system_flow_id'
                            })
                            let system_apply_id = utils.getPage().getComponents({
                                system_id: 'system_apply_id'
                            })
                            let system_id =
                                utils.my_post({
                                    apiName: 'apply',
                                    params: {
                                        "id": system_apply_id.value,
                                        "flow_id": system_flow_id.value,
                                        "type":6
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        let dialog = utils.getStore().selectDialog({
                                            name: 'apply'
                                        })
                                        dialog.show = false
                                        let content = utils.getPage().getComponents({
                                            system_id: 'content'
                                        })
                                        content.query()
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("请求错误")
                                    }
                                })
                        }
                        utils.validator({
                            callback,
                            system_id: "system_word"
                        })
                    }
                },
            ]
        },
        // {
        //     modelName: 'dialog',
        //     name: "apply",
        //     type: 'DialogSelect',
        //     title: '申请',
        //     msg: '是否确认提交审核申请？',
        //     valueModel: "其他",
        //     tableName: "content",
        //     apiName_save: "apply",
        // },
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
                        name: "base1",
                        components: [{
                                modelName: 'content',
                                name: "order_no",
                                label: "采购单编号",
                                type: 'ComponentsText',
                            },
                            {
                                modelName: 'content',
                                name: "product_no",
                                label: "货号",
                                type: 'ComponentsText',
                            },
                            {
                                modelName: 'content',
                                name: "supplier_name",
                                label: "供应商",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "factory_name",
                                label: "生产工厂",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "product_name",
                                label: "产品名称",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "number",
                                label: "订单数量",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "photo",
                                label: "产品图片",
                                type: 'ComponentsInputImage'
                            },
                            {
                                modelName: 'content',
                                name: 'order_id',
                                label: 'order_id',
                                type: 'ComponentsInputHidden'
                            },
                            {
                                modelName: 'content',
                                name: 'number_factory_id',
                                label: 'number_factory_id',
                                type: 'ComponentsInputHidden'
                            },
                            {
                                modelName: 'content',
                                name: 'id',
                                label: 'id',
                                type: 'ComponentsInputHidden'
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
                                },
                                {
                                    modelName: 'template',
                                    name: "audit_result",
                                    label: "处理结果",
                                    type: 'ComponentsText'
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
                        type: 'ComponentsInputTextarea',
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
            name: "read",
            type: 'DialogEdit',
            dialog_width: "100%",
            save_close: false,
            apiName_save: "save",
            components: [{
                    modelName: 'from',
                    type: 'AssemblyFrom',
                    label: "基础信息",
                    name: "base1",
                    components: [{
                            modelName: 'content',
                            name: "order_no",
                            label: "采购单编号",
                            type: 'ComponentsText',
                        },
                        {
                            modelName: 'content',
                            name: "product_no",
                            label: "货号",
                            type: 'ComponentsText',
                        },
                        {
                            modelName: 'content',
                            name: "supplier_name",
                            label: "供应商",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "factory_name",
                            label: "生产工厂",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "product_name",
                            label: "产品名称",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "number",
                            label: "订单数量",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "photo",
                            label: "产品图片",
                            type: 'ComponentsInputImage'
                        },
                        {
                            modelName: 'content',
                            name: 'order_id',
                            label: 'order_id',
                            type: 'ComponentsInputHidden'
                        },
                        {
                            modelName: 'content',
                            name: 'number_factory_id',
                            label: 'number_factory_id',
                            type: 'ComponentsInputHidden'
                        },
                        {
                            modelName: 'content',
                            name: 'id',
                            label: 'id',
                            type: 'ComponentsInputHidden'
                        },

                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "部件检验",
                    name: "base2",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "部件检验",
                            components: [{
                                modelName: 'content',
                                name: "components",
                                label: "",
                                type: 'ComponentsInputTableEdit',
                                addBtn: false,
                                value_default: [],
                                components: [
                                    // {modelName:'template',name:"no",label:"部件编号",type: 'ComponentsInput'},
                                    {
                                        modelName: 'template',
                                        name: "component_id",
                                        label: "部件名称",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "material_quality",
                                        label: "材质",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "specifications",
                                        label: "规格",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "图片",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "sampling_quantity",
                                        label: "抽检数量",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "material_result",
                                        label: "材质",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "size_result",
                                        label: "尺寸",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "hole_position_result",
                                        label: "孔位",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "assemble_result",
                                        label: "组装",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "paint_result",
                                        label: "油漆",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    // {modelName:'template',name:"component_id",label:"id",type: 'ComponentsInputHidden'},
                                    {
                                        modelName: 'template',
                                        name: "id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传集合体图片",
                            components: [{
                                modelName: 'content',
                                name: "components_all_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传细节图",
                            components: [{
                                modelName: 'content',
                                name: "components_detail_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                modelName: 'content',
                                name: "components_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "配件检验",
                    name: "base3",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "配件检验",
                            components: [{
                                modelName: 'content',
                                name: "parts",
                                label: "",
                                type: 'ComponentsInputTableEdit',
                                addBtn: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "no",
                                        label: "配件编号",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "name",
                                        label: "配件名称",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "数量",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "material_quality",
                                        label: "材质",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "color",
                                        label: "颜色",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "specifications",
                                        label: "规格",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "surface_treatment",
                                        label: "表面处理",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "图片",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "note",
                                        label: "备注",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "part_id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                    modelName: 'content',
                                    name: "parts_problems",
                                    label: "",
                                    type: 'ComponentsInputTable',
                                    value_default: [],
                                    components: [{
                                            modelName: 'template',
                                            name: "type",
                                            label: "问题归类",
                                            type: 'ComponentsInputSelect',
                                            ajax_url: "querySelectTree",
                                            props_label: "name",
                                            props_value: "id",
                                            // rules: [{
                                            //     validator: utils.my_required,
                                            //     message: "请选择问题归类"
                                            // }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            // rules: [{
                                            //     validator: utils.my_number,
                                            //     message: "只能填写数字"
                                            // }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "description",
                                            label: "问题描述",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "url",
                                            label: "问题图片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: 'id',
                                            label: 'id',
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                },

                            ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "签封样对比",
                    name: "base6",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传签封样对比图片",
                            components: [{
                                modelName: 'content',
                                name: "qfy_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "项目对比",
                            components: [{
                                modelName: 'content',
                                name: "contrast",
                                label: "",
                                type: 'ComponentsInputTable',
                                addBtn: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "item",
                                        label: "检验项目",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "result",
                                        label: "结果",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            name: "base3",
                            components: [{
                                modelName: 'content',
                                name: "contrast_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },

                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "尺寸检验",
                    name: "base4",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "尺寸图片",
                            components: [{
                                    modelName: 'content',
                                    name: "overallsize_pictures",
                                    label: "整体尺寸照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "detailsize_pictures",
                                    label: "细节尺寸照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "localsize_pictures",
                                    label: "局部尺寸照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "size_result",
                                    label: "尺寸检验结果",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                modelName: 'content',
                                name: "size_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "测试数据",
                    name: "base5",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "测试数据",
                            components: [{
                                modelName: 'content',
                                name: "test_data",
                                label: "",
                                type: 'ComponentsInputTable',
                                addBtn: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "item",
                                        label: "测试项目",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "standard",
                                        label: "测试标准",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "result",
                                        label: "测试结果",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "测试数据图片",
                            components: [{
                                modelName: 'content',
                                name: "test_photo",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                modelName: 'content',
                                name: "test_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyFrom',
                    label: "结果判定",
                    name: "base8",
                    components: [{
                            modelName: 'content',
                            name: "finalresult",
                            label: "结果判定",
                            type: 'ComponentsInputSelect',
                            options: [{
                                label: "合格",
                                value: "合格"
                            }, {
                                label: "不合格",
                                value: "不合格"
                            }],
                            // rules: [{
                            //     validator: utils.my_required,
                            //     message: "请选择结果判定"
                            // }]
                        },
                        // {modelName:'content',name:"opinion",label:"处理意见",type: 'ComponentsInputTextarea',
                        //     rules:[{validator: utils.my_required, message: "请填写处理意见"}]},
                        {
                            modelName: 'content',
                            name: "inspect_user",
                            label: "检验人员",
                            type: 'ComponentsInput',
                            // rules: [{
                            //     validator: utils.my_required,
                            //     message: "请填写检验人员"
                            // }]
                        },
                        {
                            modelName: 'content',
                            name: "inspection_date",
                            label: "检验日期",
                            type: 'ComponentsInputDay',
                            // rules: [{
                            //     validator: utils.my_required,
                            //     message: "请选择检验日期"
                            // }]
                        },
                    ]
                },
            ],
            toolBtn: []
        },

        {
            modelName: 'dialog',
            name: "edit",
            type: 'DialogEdit',
            dialog_width: "100%",
            save_close: false,
            apiName_save: "save",
            components: [{
                    modelName: 'from',
                    type: 'AssemblyFrom',
                    label: "基础信息",
                    name: "base1",
                    components: [{
                            modelName: 'content',
                            name: "order_no",
                            label: "采购单编号",
                            type: 'ComponentsText',
                        },
                        {
                            modelName: 'content',
                            name: "product_no",
                            label: "货号",
                            type: 'ComponentsText',
                        },
                        {
                            modelName: 'content',
                            name: "supplier_name",
                            label: "供应商",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "factory_name",
                            label: "生产工厂",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "product_name",
                            label: "产品名称",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "number",
                            label: "订单数量",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "photo",
                            label: "产品图片",
                            type: 'ComponentsInputImage'
                        },
                        {
                            modelName: 'content',
                            name: 'order_id',
                            label: 'order_id',
                            type: 'ComponentsInputHidden'
                        },
                        {
                            modelName: 'content',
                            name: 'number_factory_id',
                            label: 'number_factory_id',
                            type: 'ComponentsInputHidden'
                        },
                        {
                            modelName: 'content',
                            name: 'id',
                            label: 'id',
                            type: 'ComponentsInputHidden'
                        },

                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "部件检验",
                    name: "base2",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "部件检验",
                            components: [{
                                modelName: 'content',
                                name: "components",
                                label: "",
                                type: 'ComponentsInputTableEdit',
                                addBtn: false,
                                value_default: [],
                                components: [
                                    // {modelName:'template',name:"no",label:"部件编号",type: 'ComponentsInput'},
                                    {
                                        modelName: 'template',
                                        name: "component_id",
                                        label: "部件名称",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "material_quality",
                                        label: "材质",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "specifications",
                                        label: "规格",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "图片",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "sampling_quantity",
                                        label: "抽检数量",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "material_result",
                                        label: "材质",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "size_result",
                                        label: "尺寸",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "hole_position_result",
                                        label: "孔位",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "assemble_result",
                                        label: "组装",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "paint_result",
                                        label: "油漆",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    // {modelName:'template',name:"component_id",label:"id",type: 'ComponentsInputHidden'},
                                    {
                                        modelName: 'template',
                                        name: "id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传集合体图片",
                            components: [{
                                modelName: 'content',
                                name: "components_all_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传细节图",
                            components: [{
                                modelName: 'content',
                                name: "components_detail_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                modelName: 'content',
                                name: "components_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "配件检验",
                    name: "base3",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "配件检验",
                            components: [{
                                modelName: 'content',
                                name: "parts",
                                label: "",
                                type: 'ComponentsInputTableEdit',
                                addBtn: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "no",
                                        label: "配件编号",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "name",
                                        label: "配件名称",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "数量",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "material_quality",
                                        label: "材质",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "color",
                                        label: "颜色",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "specifications",
                                        label: "规格",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "surface_treatment",
                                        label: "表面处理",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "图片",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "note",
                                        label: "备注",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "part_id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                    modelName: 'content',
                                    name: "parts_problems",
                                    label: "",
                                    type: 'ComponentsInputTable',
                                    value_default: [],
                                    components: [{
                                            modelName: 'template',
                                            name: "type",
                                            label: "问题归类",
                                            type: 'ComponentsInputSelect',
                                            ajax_url: "querySelectTree",
                                            props_label: "name",
                                            props_value: "id",
                                            // rules: [{
                                            //     validator: utils.my_required,
                                            //     message: "请选择问题归类"
                                            // }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            // rules: [{
                                            //     validator: utils.my_number,
                                            //     message: "只能填写数字"
                                            // }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "description",
                                            label: "问题描述",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "url",
                                            label: "问题图片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: 'id',
                                            label: 'id',
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                },

                            ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "签封样对比",
                    name: "base6",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传签封样对比图片",
                            components: [{
                                modelName: 'content',
                                name: "qfy_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "项目对比",
                            components: [{
                                modelName: 'content',
                                name: "contrast",
                                label: "",
                                type: 'ComponentsInputTable',
                                addBtn: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "item",
                                        label: "检验项目",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "result",
                                        label: "结果",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            name: "base3",
                            components: [{
                                modelName: 'content',
                                name: "contrast_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },

                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "尺寸检验",
                    name: "base4",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "尺寸图片",
                            components: [{
                                    modelName: 'content',
                                    name: "overallsize_pictures",
                                    label: "整体尺寸照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "detailsize_pictures",
                                    label: "细节尺寸照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "localsize_pictures",
                                    label: "局部尺寸照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "size_result",
                                    label: "尺寸检验结果",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                modelName: 'content',
                                name: "size_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "测试数据",
                    name: "base5",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "测试数据",
                            components: [{
                                modelName: 'content',
                                name: "test_data",
                                label: "",
                                type: 'ComponentsInputTable',
                                addBtn: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "item",
                                        label: "测试项目",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "standard",
                                        label: "测试标准",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "result",
                                        label: "测试结果",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "测试数据图片",
                            components: [{
                                modelName: 'content',
                                name: "test_photo",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                modelName: 'content',
                                name: "test_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyFrom',
                    label: "结果判定",
                    name: "base8",
                    components: [{
                            modelName: 'content',
                            name: "finalresult",
                            label: "结果判定",
                            type: 'ComponentsInputSelect',
                            options: [{
                                label: "合格",
                                value: "合格"
                            }, {
                                label: "不合格",
                                value: "不合格"
                            }],
                            // rules: [{
                            //     validator: utils.my_required,
                            //     message: "请选择结果判定"
                            // }]
                        },
                        // {modelName:'content',name:"opinion",label:"处理意见",type: 'ComponentsInputTextarea',
                        //     rules:[{validator: utils.my_required, message: "请填写处理意见"}]},
                        {
                            modelName: 'content',
                            name: "inspect_user",
                            label: "检验人员",
                            type: 'ComponentsInput',
                            // rules: [{
                            //     validator: utils.my_required,
                            //     message: "请填写检验人员"
                            // }]
                        },
                        {
                            modelName: 'content',
                            name: "inspection_date",
                            label: "检验日期",
                            type: 'ComponentsInputDay',
                            // rules: [{
                            //     validator: utils.my_required,
                            //     message: "请选择检验日期"
                            // }]
                        },
                    ]
                },
            ]
        },

        {
            modelName: 'dialog',
            name: "increase",
            type: 'DialogEdit',
            dialog_width: "100%",
            save_close: false,
            system_save_id: "system_save_id",
            apiName_save: "save",
            system_id: 'system_increase',
            components: [{
                    modelName: 'from',
                    type: 'AssemblyFrom',
                    label: "基础信息",
                    name: "base1",
                    system_id: 'system_base1',
                    components: [{
                        modelName: 'content',
                        name: "order_id",
                        label: "采购单编号",
                        type: 'ComponentsInputWithDateSelect',
                        scene:"尾检",
                        dateShow:false,
                        selectShow:true,
                        ajax_url: "queryOrder",
                        props_label: "no",
                        props_value: "order_id",
                        typeArr:"1",
                        fileType:[{ label: '采购单编号(Purchase Number)', value: '1' },
                        { label: '货号(Sku)', value: '2' }],
                        system_id: 'system_order_no',
                        associated_notice: ["system_number_no"],
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "order_number_id",
                        label: "货号",
                        type: 'ComponentsInputSelectAuto',
                        ajax_url: "queryNumberByOrder",
                        props_label: "name",
                        props_note: "number",
                        props_value: "id",
                        ajax_params: [{
                            type: "control",
                            name: "order_id",
                            system_id: "system_order_no"
                        }],
                        system_id: 'system_number_no',
                        associated_notice: ['system_base1'],
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择"
                        }]
                    },
                        {
                            modelName: 'content',
                            name: "supplier_name",
                            label: "供应商",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "factory_name",
                            label: "生产工厂",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "product_name",
                            label: "产品名称",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "number",
                            label: "订单数量",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "photo",
                            label: "产品图片",
                            type: 'ComponentsInputImage'
                        },
                        {
                            modelName: 'content',
                            name: "id",
                            label: "id",
                            type: 'ComponentsInputHidden',
                            system_id: "system_save_id"
                        },
                    ],
                    associated: function () {
                        let system_number_no = utils.getPage().getComponents({
                            system_id: 'system_number_no'
                        })
                        let system_increase = utils.getPage().getComponents({
                            system_id: 'system_increase'
                        })
                        let system_order_no = utils.getPage().getComponents({
                            system_id: 'system_order_no'
                        })
                        if(system_number_no.value != '' && system_number_no.value != ''){
                            let system_id =
                            utils.my_post({
                                apiName: 'queryDetail',
                                params: {
                                    "default_id_": system_number_no.value,
                                    "order_id": system_order_no.value
                                },
                                ok: (json: any, dataAll: any) => {
                                    system_increase.setEditValue(json)
                                },
                                err: (json: any, dataAll: any) => {
                                    system_increase.initValue()
                                    system_increase.setEditValue({
                                        id: system_number_no.value
                                    })
                                }
                            })
                        }
                        
                    }
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "部件检验",
                    name: "base2",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "部件检验",
                            components: [{
                                modelName: 'content',
                                name: "components",
                                label: "",
                                type: 'ComponentsInputTableEdit',
                                addBtn: false,
                                value_default: [],
                                components: [
                                    // {modelName:'template',name:"no",label:"部件编号",type: 'ComponentsInput'},
                                    {
                                        modelName: 'template',
                                        name: "name",
                                        label: "部件名称",
                                        type: 'ComponentsInput',
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "material_quality",
                                        label: "材质",
                                        type: 'ComponentsInput',
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "specifications",
                                        label: "规格",
                                        type: 'ComponentsInput',
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "图片",
                                        type: 'ComponentsInputUploadImage',
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "sampling_quantity",
                                        label: "抽检数量",
                                        type: 'ComponentsInput',
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "material_result",
                                        label: "材质",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }],
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "size_result",
                                        label: "尺寸",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }],
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "hole_position_result",
                                        label: "孔位",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }],
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "assemble_result",
                                        label: "组装",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }],
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "paint_result",
                                        label: "油漆",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }],
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "component_id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传集合体图片",
                            components: [{
                                modelName: 'content',
                                name: "components_all_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传细节图",
                            components: [{
                                modelName: 'content',
                                name: "components_detail_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                modelName: 'content',
                                name: "components_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        type: 'ComponentsInputTextarea',
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "配件检验",
                    name: "base3",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "配件检验",
                            components: [{
                                modelName: 'content',
                                name: "parts",
                                label: "",
                                type: 'ComponentsInputTableEdit',
                                addBtn: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "no",
                                        label: "配件编号",
                                        type: 'ComponentsInput',
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "name",
                                        label: "配件名称",
                                        type: 'ComponentsInput',
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "数量",
                                        type: 'ComponentsInput',
                                        style: {
                                            width: "100%"
                                        },
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "material_quality",
                                        label: "材质",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "color",
                                        label: "颜色",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "specifications",
                                        label: "规格",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "surface_treatment",
                                        label: "表面处理",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "图片",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "note",
                                        label: "备注",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "part_id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                modelName: 'content',
                                name: "parts_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "签封样对比",
                    name: "base6",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传签封样对比图片",
                            components: [{
                                modelName: 'content',
                                name: "qfy_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "项目对比",
                            components: [{
                                modelName: 'content',
                                name: "contrast",
                                label: "",
                                type: 'ComponentsInputTable',
                                addBtn: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "item",
                                        label: "检验项目",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "result",
                                        label: "结果",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            name: "base3",
                            components: [{
                                modelName: 'content',
                                name: "contrast_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "尺寸检验",
                    name: "base4",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "尺寸图片",
                            components: [{
                                    modelName: 'content',
                                    name: "overallsize_pictures",
                                    label: "整体尺寸照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "detailsize_pictures",
                                    label: "细节尺寸照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "localsize_pictures",
                                    label: "局部尺寸照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "size_result",
                                    label: "尺寸检验结果",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                },
                            ]
                        },

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                modelName: 'content',
                                name: "size_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "测试数据",
                    name: "base5",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "测试数据",
                            components: [{
                                modelName: 'content',
                                name: "test_data",
                                label: "",
                                type: 'ComponentsInputTable',
                                addBtn: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "item",
                                        label: "测试项目",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "standard",
                                        label: "测试标准",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "result",
                                        label: "测试结果",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            label: "合格",
                                            value: "合格"
                                        }, {
                                            label: "不合格",
                                            value: "不合格"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "测试数据图片",
                            components: [{
                                modelName: 'content',
                                name: "test_photo",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "问题归类",
                            components: [{
                                modelName: 'content',
                                name: "test_problems",
                                label: "",
                                type: 'ComponentsInputTable',
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "type",
                                        label: "问题归类",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "querySelectTree",
                                        props_label: "name",
                                        props_value: "id",
                                        // rules: [{
                                        //     validator: utils.my_required,
                                        //     message: "请选择问题归类"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        // rules: [{
                                        //     validator: utils.my_number,
                                        //     message: "只能填写数字"
                                        // }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "问题图片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: 'id',
                                        label: 'id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyFrom',
                    label: "结果判定",
                    name: "base8",
                    components: [{
                            modelName: 'content',
                            name: "finalresult",
                            label: "结果判定",
                            type: 'ComponentsInputSelect',
                            options: [{
                                label: "合格",
                                value: "合格"
                            }, {
                                label: "不合格",
                                value: "不合格"
                            }],
                            // rules: [{
                            //     validator: utils.my_required,
                            //     message: "请选择结果判定"
                            // }]
                        },
                        // {modelName:'content',name:"opinion",label:"处理意见",type: 'ComponentsInputTextarea',
                        //     rules:[{validator: utils.my_required, message: "请填写处理意见"}]},
                        {
                            modelName: 'content',
                            name: "inspect_user",
                            label: "检验人员",
                            type: 'ComponentsInput',
                            // rules: [{
                            //     validator: utils.my_required,
                            //     message: "请填写检验人员"
                            // }]
                        },
                        {
                            modelName: 'content',
                            name: "inspection_date",
                            label: "检验日期",
                            type: 'ComponentsInputDay',
                            // rules: [{
                            //     validator: utils.my_required,
                            //     message: "请选择检验日期"
                            // }]
                        },
                    ]
                },
            ]
        },
    ]
}
export default myModule