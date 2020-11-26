import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 're_examination',
    version: 'PageNormal',
    api: {
        query: "/recheck/query",
        queryByAll: "/recheck/queryByAll",
        queryById: "/recheck/queryById",
        save: "/recheck/save",
        queryDetail: "/recheck/queryDetails",
        delete: "/recheck/delete",
        inspect: "/recheck/inspect",
        examineOk: "/recheck/examineOk",
        apply: "/sample/newProposeAudit",
        queryApply: "/process/queryByType",
        queryFlow: "/index/getBZDesc",
        export: "/recheck/toExcel",
        export1: "/recheck/online",

        queryBySupplier: "/supplier/queryByAll",
        queryByFactory: "/supplier/queryByFactory",
        queryByInspector: "/user/queryByAll",
        queryOrder: "/number/queryOrderList2",
        queryNumber: "/number/queryByAll2",
        queryNumberByOrder: "/newnumber/queryNumberListByOrderId2",
        queryOrderByNumber: "/newnumber/queryOrderByNumberId2",
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
                    {
                        modelName: 'content',
                        type: 'ComponentsInputReQuery'
                    },
                ]
            }]
        },
        {
            modelName: 'content',
            title: "复检报告单",
            type: 'AssemblyContent',
            operation_width: "140px",
            components: [{
                    modelName: 'content',
                    name: "order_no",
                    label: "订单号",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "product_no",
                    label: "产品货号",
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
                    name: "five_code",
                    label: "五位码",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "ean_code",
                    label: "EAN码",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "order_number",
                    label: "订单数量",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "state",
                    label: "质检状态",
                    type: 'ComponentsInput'
                },
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
                            name: 'edit',
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
                            name: 'edit2',
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
                        }]
                    }],
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
                        }],
                    }],
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
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "preview"
                        }],
                    }],
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
                },
                {
                    label: "导出报告",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "download"
                        }]
                    }],
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'export',
                            title: "导出报告"
                        })
                        edit.query()
                    }
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
                            value: 8
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
                                        "type": 8
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
            dialog_width: "80%",
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
                        components: [{
                                modelName: 'content',
                                name: "order_no",
                                label: "采购单编号：",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "product_no",
                                label: "货号",
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
            name: "edit",
            type: 'DialogEdit',
            dialog_width: "100%",
            system_id: 'system_increase',
            apiName_save: "save",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                system_id: 'system_base1',
                components: [{
                        modelName: 'content',
                        name: "order_id",
                        label: "采购单编号",
                        type: 'ComponentsInputWithDateSelect',
                        scene: "尾检",
                        dateShow: false,
                        selectShow: true,
                        ajax_url: "queryOrder",
                        props_label: "no",
                        props_value: "order_id",
                        typeArr: "1",
                        fileType: [{
                                label: '采购单编号(Purchase Number)',
                                value: '1'
                            },
                            {
                                label: '货号(Sku)',
                                value: '2'
                            }
                        ],
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
                    {
                        modelName: 'content',
                        name: 'id',
                        label: 'id',
                        type: 'ComponentsInputHidden',
                        system_id: "system_save_id"
                    },

                    {
                        modelName: 'content',
                        name: "problems",
                        label: "",
                        type: 'ComponentsInputTable',
                        addBtn: false,
                        label_show: true,
                        value_default: [],
                        components: [{
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
                                name: "name",
                                label: "问题归类",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'template',
                                name: "level",
                                label: "问题等级",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'template',
                                name: "number",
                                label: "问题数量",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'template',
                                name: "url",
                                label: "问题图片",
                                type: 'ComponentsInputImage'
                            },
                            {
                                modelName: 'template',
                                name: "rework_description",
                                label: "返工描述",
                                style: {
                                    width: "100%"
                                },
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'template',
                                name: "rework_url",
                                label: "返工图片",
                                type: 'ComponentsInputUploadImage'
                            },
                            {
                                modelName: 'template',
                                name: "result",
                                label: "复检结果",
                                type: 'ComponentsInputSelect',
                                options: [{
                                    label: "合格",
                                    value: "合格"
                                }, {
                                    label: "不合格",
                                    value: "不合格"
                                }],
                            },
                            {
                                modelName: 'template',
                                name: "type",
                                label: "问题id",
                                type: 'ComponentsInputHidden'
                            },
                            {
                                modelName: 'template',
                                name: 'id',
                                label: 'id',
                                type: 'ComponentsInputHidden'
                            },
                        ]
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
                    if (system_number_no.value != '' && system_number_no.value != '') {
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
            }, ]
        },

        {
            modelName: 'dialog',
            name: "read",
            type: 'DialogEdit',
            dialog_width: "100%",
            apiName_save: "save",
            components: [{
                    modelName: 'from',
                    type: 'AssemblyFrom',
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
                            name: 'id',
                            label: 'id',
                            type: 'ComponentsInputHidden'
                        },
                        {
                            modelName: 'content',
                            name: "problems",
                            label: "",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            label_show: true,
                            value_default: [],
                            components: [{
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
                                    name: "name",
                                    label: "问题归类",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "level",
                                    label: "问题等级",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "number",
                                    label: "问题数量",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "url",
                                    label: "问题图片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'template',
                                    name: "rework_description",
                                    label: "返工描述",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputTextarea'
                                },
                                {
                                    modelName: 'template',
                                    name: "rework_url",
                                    label: "返工图片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'template',
                                    name: "result",
                                    label: "复检结果",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                },
                                {
                                    modelName: 'template',
                                    name: "type",
                                    label: "问题id",
                                    type: 'ComponentsInputHidden'
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

            ],
            toolBtn: []
        },
        {
            modelName: 'dialog',
            name: "edit2",
            type: 'DialogEdit',
            dialog_width: "100%",
            apiName_save: "save",
            components: [{
                    modelName: 'from',
                    type: 'AssemblyFrom',
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
                            name: 'id',
                            label: 'id',
                            type: 'ComponentsInputHidden'
                        },
                        {
                            modelName: 'content',
                            name: "problems",
                            label: "",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            label_show: true,
                            value_default: [],
                            components: [{
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
                                    name: "name",
                                    label: "问题归类",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "level",
                                    label: "问题等级",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "number",
                                    label: "问题数量",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "url",
                                    label: "问题图片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'template',
                                    name: "rework_description",
                                    label: "返工描述",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputTextarea'
                                },
                                {
                                    modelName: 'template',
                                    name: "rework_url",
                                    label: "返工图片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'template',
                                    name: "result",
                                    label: "复检结果",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                },
                                {
                                    modelName: 'template',
                                    name: "type",
                                    label: "问题id",
                                    type: 'ComponentsInputHidden'
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

    ]
};
export default myModule