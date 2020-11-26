import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'tailcheck',
    version: 'PageNormal',
    api: {
        query: "/tailcheck/query",
        queryByAll: "/tailcheck/queryByAll",
        queryById: "/tailcheck/queryById",
        save: "/tailcheck/save",
        delete: "/tailcheck/delete",
        inspect: "/tailcheck/inspect",
        queryDetail: "/tailcheck/queryDetails",
        examineOk: "/tailcheck/examineOk",
        apply: "/sample/newProposeAudit",
        queryApply: "/process/queryByType",
        queryFlow: "/index/getBZDesc",
        getAQL: "/tailcheck/getAQL",
        export: "/tailcheck/toExcel",
        export1: "/tailcheck/online",

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
                    {
                        modelName: 'content',
                        type: 'ComponentsInputReQuery'
                    },
                ]
            }]
        },
        {
            modelName: 'content',
            title: "尾检报告单",
            type: 'AssemblyContent',
            components: [{
                    modelName: 'content',
                    name: "order_no",
                    label: "采购单编号",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "product_no",
                    label: "货号",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "sample_standard",
                    label: "抽检标准",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "quality_level",
                    label: "品质标准",
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
                        }],
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
                            value: 7
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
                                        "type":7
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
                                label: "采购单编号：",
                                type: 'ComponentsText',
                            },
                            {
                                modelName: 'content',
                                name: "product_no",
                                label: "货号",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "five_code",
                                label: "五位码",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "ean_code",
                                label: "EN码",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "supplier_name",
                                label: "供应商",
                                type: 'ComponentsText',
                            },
                            {
                                modelName: 'content',
                                name: "factory_name",
                                label: "生产工厂",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "sample_standard",
                                label: "抽检标准",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "quality_level",
                                label: "品质标准",
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
                                name: "aql_number",
                                label: "AQL抽检量",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "photo",
                                label: "产品照片",
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
                        label: "上传照片",
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
            save_close: false,
            system_save_id: "system_save_id",
            system_id: 'system_increase',
            apiName_save: "save",
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
                            name: "five_code",
                            label: "五位码",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "ean_code",
                            label: "EN码",
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
                            name: "factory_name",
                            label: "生产工厂",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "sample_standard",
                            label: "抽检标准",
                            type: 'ComponentsInputSelect',
                            options: [{
                                name: "Ⅰ",
                                value: "Ⅰ"
                            }, {
                                name: "Ⅱ",
                                value: "Ⅱ"
                            }, {
                                name: "Ⅲ",
                                value: "Ⅲ"
                            }],
                            
                            system_id: 'system_standard',
                            associated_notice: ['sample_standard_key'],
                        },
                        {
                            modelName: 'content',
                            name: "sample_standard_key",
                            label: "抽检标准传值",
                            type: 'ComponentsInputHidden',
                            system_id: 'sample_standard_key',
                            associated: function () {
                                let system_standard = utils.getPage().getComponents({
                                    system_id: 'system_standard'
                                })
                                let sample_standard_key = utils.getPage().getComponents({
                                    system_id: 'sample_standard_key'
                                })
                                if (system_standard.value == "Ⅰ") {
                                    sample_standard_key.value = "n1"
                                } else if (system_standard.value == "Ⅱ") {
                                    sample_standard_key.value = "n2"
                                } else if (system_standard.value == "Ⅲ") {
                                    sample_standard_key.value = "n3"
                                } else {
                                    sample_standard_key.value = ""
                                }
                            }
                        },
                        {
                            modelName: 'content',
                            name: "quality_level",
                            label: "品质标准",
                            type: 'ComponentsInputSelect',
                            options: [{
                                name: "AQL(1.0)",
                                value: "AQL(1.0)"
                            }, {
                                name: "AQL(2.5)",
                                value: "AQL(2.5)"
                            }, {
                                name: "AQL(4.0)",
                                value: "AQL(4.0)"
                            }],
                            system_id: 'system_level',
                            associated_notice: ['sample_AQL'],
                        },
                        {
                            modelName: 'content',
                            name: "number",
                            label: "订单数量",
                            type: 'ComponentsText',
                            system_id: 'system_order_number'
                        },
                        {
                            modelName: 'content',
                            name: "aql_number",
                            label: "AQL抽检量",
                            type: 'ComponentsText',
                            system_id: 'sample_AQL',
                            associated: function () {
                                let sample_standard_key = utils.getPage().getComponents({
                                    system_id: 'sample_standard_key'
                                })
                                let system_level = utils.getPage().getComponents({
                                    system_id: 'system_level'
                                })
                                let system_order_number = utils.getPage().getComponents({
                                    system_id: 'system_order_number'
                                })
                                let sample_AQL = utils.getPage().getComponents({
                                    system_id: 'sample_AQL'
                                })

                                let system_id =
                                    utils.my_post({
                                        apiName: 'getAQL',
                                        params: {
                                            "cjbz": sample_standard_key.value,
                                            "number": system_order_number.value
                                        },
                                        ok: (json: any, dataAll: any) => {
                                            sample_AQL.initValueFormat(json.number)
                                        },
                                        err: (json: any, dataAll: any) => {
                                            sample_AQL.initValue()
                                        }
                                    })
                            }
                        },
                        {
                            modelName: 'content',
                            name: "photo",
                            label: "产品照片",
                            type: 'ComponentsInputImage'
                        },

                        // {modelName:'content',name: 'order_number_id', label: 'order_number_id',type:'ComponentsInputHidden'},
                        {
                            modelName: 'content',
                            name: 'id',
                            label: 'id',
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
                    label: "常规检验",
                    name: "base2",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "完成量",
                            components: [{
                                    modelName: 'content',
                                    name: "complete_number",
                                    label: "完成量",
                                    type: 'ComponentsInput',
                                },
                                {
                                    modelName: 'content',
                                    name: "complete_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "complete_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "实际抽检数量",
                            components: [{
                                    modelName: 'content',
                                    name: "real_number",
                                    label: "实际抽检数量",
                                    type: 'ComponentsInput',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "real_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "毛重",
                            components: [{
                                    modelName: 'content',
                                    name: "gross_weight",
                                    label: "毛重",
                                    system_id: "system_gross_sample",
                                    type: 'ComponentsText',
                                    unit: 'KG'
                                },
                                {
                                    modelName: 'content',
                                    name: "tail_gross_weight",
                                    label: "毛重",
                                    system_id: "system_gross_tail",
                                    type: 'ComponentsInput',
                                    unit: 'KG',
                                    
                                    associated_notice: ['system_gross_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "gross_weight_result",
                                    label: "毛重对比结果",
                                    system_id: "system_gross_result",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                    
                                    associated: function () {
                                        let system_gross_sample = utils.getPage().getComponents({
                                            system_id: 'system_gross_sample'
                                        }).value
                                        let system_gross_tail = utils.getPage().getComponents({
                                            system_id: 'system_gross_tail'
                                        }).value
                                        let system_gross_result = utils.getPage().getComponents({
                                            system_id: 'system_gross_result'
                                        })
                                        if (system_gross_sample == system_gross_tail) {
                                            system_gross_result.value = "合格"
                                        } else {
                                            system_gross_result.value = "不合格"
                                        }
                                    }
                                },
                                {
                                    modelName: 'content',
                                    name: "gross_weight_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "gross_weight_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "外箱尺寸",
                            components: [{
                                    modelName: 'content',
                                    name: "wgjy_cc_c",
                                    label: "外箱尺寸长",
                                    system_id: "system_outsize_c",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_k",
                                    label: "外箱尺寸宽",
                                    system_id: "system_outsize_k",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_g",
                                    label: "外箱尺寸高",
                                    system_id: "system_outsize_g",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "",
                            components: [{
                                    modelName: 'content',
                                    name: "box_c",
                                    label: "长",
                                    type: 'ComponentsInput',
                                    system_id: "system_outsize_cc",
                                    unit: 'CM',
                                    
                                    associated_notice: ['system_outsize_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "box_k",
                                    label: "宽",
                                    type: 'ComponentsInput',
                                    system_id: "system_outsize_kk",
                                    unit: 'CM',
                                    associated_notice: ['system_outsize_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "box_g",
                                    label: "高",
                                    type: 'ComponentsInput',
                                    system_id: "system_outsize_gg",
                                    unit: 'CM',
                                    associated_notice: ['system_outsize_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "box_size_result",
                                    label: "对比结果",
                                    system_id: "system_outsize_result",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                    associated: function () {
                                        let system_outsize_c = utils.getPage().getComponents({
                                            system_id: 'system_outsize_c'
                                        }).value
                                        let system_outsize_k = utils.getPage().getComponents({
                                            system_id: 'system_outsize_k'
                                        }).value
                                        let system_outsize_g = utils.getPage().getComponents({
                                            system_id: 'system_outsize_g'
                                        }).value
                                        let system_outsize_cc = utils.getPage().getComponents({
                                            system_id: 'system_outsize_cc'
                                        }).value
                                        let system_outsize_kk = utils.getPage().getComponents({
                                            system_id: 'system_outsize_kk'
                                        }).value
                                        let system_outsize_gg = utils.getPage().getComponents({
                                            system_id: 'system_outsize_gg'
                                        }).value
                                        let system_outsize_result = utils.getPage().getComponents({
                                            system_id: 'system_outsize_result'
                                        })
                                        if (system_outsize_c == system_outsize_cc && system_outsize_k == system_outsize_kk && system_outsize_g == system_outsize_gg) {
                                            system_outsize_result.value = "合格"
                                        } else {
                                            system_outsize_result.value = "不合格"
                                        }
                                    }
                                },
                                {
                                    modelName: 'content',
                                    name: "box_size_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "box_size_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "包装效果",
                            components: [{
                                    modelName: 'content',
                                    name: "package_effect_result",
                                    label: "包装效果",
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
                                    modelName: 'content',
                                    name: "package_effect_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "package_effect_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "摔箱测试",
                            components: [{
                                modelName: 'content',
                                name: "drop_box_test",
                                label: "摔箱测试",
                                type: 'ComponentsInputSelect',
                                options: [{
                                        name: "76cm高度，1A",
                                        value: "76cm高度，1A"
                                    },
                                    {
                                        name: "76cm高度，2A",
                                        value: "76cm高度，2A"
                                    },
                                    {
                                        name: "76cm高度，3A",
                                        value: "76cm高度，3A"
                                    },
                                    {
                                        name: "64cm高度，1A",
                                        value: "64cm高度，1A"
                                    },
                                    {
                                        name: "64cm高度，2A",
                                        value: "64cm高度，2A"
                                    },
                                    {
                                        name: "64cm高度，3A",
                                        value: "64cm高度，3A"
                                    },
                                    {
                                        name: "46cm高度，1A",
                                        value: "46cm高度，1A"
                                    },
                                    {
                                        name: "46cm高度，2A",
                                        value: "46cm高度，2A"
                                    },
                                    {
                                        name: "46cm高度，3A",
                                        value: "46cm高度，3A"
                                    },
                                ],
                                
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "唛头确认",
                            components: [{
                                    modelName: 'content',
                                    name: "shipping_marks_pictures",
                                    label: "唛头确认照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "shipping_marks_result",
                                    label: "唛头确认",
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
                                    modelName: 'content',
                                    name: "shipping_marks_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "红绳确认",
                            components: [{
                                    modelName: 'content',
                                    name: "red_rope_result",
                                    label: "红绳确认",
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
                                    modelName: 'content',
                                    name: "red_rope_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "组装图",
                            components: [{
                                    modelName: 'content',
                                    name: "assembly_drawing_result",
                                    label: "组装图",
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
                                    modelName: 'content',
                                    name: "assembly_drawing_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "售后说明书",
                            components: [{
                                    modelName: 'content',
                                    name: "manual_result",
                                    label: "售后说明书",
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
                                    modelName: 'content',
                                    name: "manual_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "包材确认",
                            components: [{
                                    modelName: 'content',
                                    name: "package_confirmation_result",
                                    label: "包材确认",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }, {
                                        name: "不需要",
                                        value: "不需要"
                                    }],
                                },
                                {
                                    modelName: 'content',
                                    name: "package_confirmation_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "快递周长",
                            components: [{
                                    modelName: 'content',
                                    name: "express_day",
                                    label: "快递周长",
                                    system_id: "system_express_sample",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "express_perimeter",
                                    label: "快递周长",
                                    system_id: "system_express_tail",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                    associated_notice: ['system_express_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "express_perimeter_result",
                                    label: "快递周长结果",
                                    system_id: "system_express_result",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                    associated: function () {
                                        let system_express_sample = utils.getPage().getComponents({
                                            system_id: 'system_express_sample'
                                        }).value
                                        let system_express_tail = utils.getPage().getComponents({
                                            system_id: 'system_express_tail'
                                        }).value
                                        let system_express_result = utils.getPage().getComponents({
                                            system_id: 'system_express_result'
                                        })
                                        if (system_express_sample == system_express_tail) {
                                            system_express_result.value = "合格"
                                        } else {
                                            system_express_result.value = "不合格"
                                        }
                                    }
                                },
                                {
                                    modelName: 'content',
                                    name: "express_perimeter_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                    label: "部件检验",
                    name: "base3",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "试摔验证",
                            components: [{
                                    modelName: 'content',
                                    name: "test_verification_result",
                                    label: "试摔效果",
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
                                    modelName: 'content',
                                    name: "test_verification_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
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
                                        name: "mini_number",
                                        label: "数量",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput',
                                        
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
                                        label: "规格（mm)",
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
                                        name: "surface_treatment",
                                        label: "表面处理",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
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
                                        name: "url",
                                        label: "照片",
                                        style: {
                                            width: "100%"
                                        },
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传验货照片",
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
                            label: "上传细节照片",
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
                                        
                                    },
                                    {
                                        modelName: 'template',
                                        name: "level",
                                        label: "问题等级",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            name: "关键问题",
                                            value: "关键问题"
                                        }, {
                                            name: "主要问题",
                                            value: "主要问题"
                                        }, {
                                            name: "次要问题",
                                            value: "次要问题"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        
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
                                        label: "问题照片",
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
                    name: "base4",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "备用包检验",
                            components: [{
                                    modelName: 'content',
                                    name: "spare_package_result",
                                    label: "备用包检验",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        name: "有",
                                        value: "有"
                                    }, {
                                        name: "无",
                                        value: "无"
                                    }, {
                                        name: "不需要",
                                        value: "不需要"
                                    }],
                                },
                                {
                                    modelName: 'content',
                                    name: "spare_package_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
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
                                        name: "mini_number",
                                        label: "数量",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput',
                                        
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
                                        name: "surface_treatment",
                                        label: "表面处理",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
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
                                        name: "url",
                                        label: "照片",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "part_id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
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
                            label: "上传验货照片",
                            components: [{
                                modelName: 'content',
                                name: "parts_all_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                               
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传细节照片",
                            components: [{
                                modelName: 'content',
                                name: "parts_detail_img",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: 'id',
                                            label: 'id',
                                            type: 'ComponentsInputHidden'
                                        },
                                        // {modelName:'template',name: 'picture_id', label: 'picture_id',type:'ComponentsInputHidden'},
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
                    label: "其他检验",
                    name: "base5",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "组装图验证",
                            components: [{
                                    modelName: 'content',
                                    name: "assembly_drawing_result2",
                                    label: "组装图验证",
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
                                    modelName: 'content',
                                    name: "assemble_number",
                                    label: "组装数量",
                                    type: 'ComponentsInput',
                                },
                                {
                                    modelName: 'content',
                                    name: "file_path",
                                    label: "查看文件",
                                    type: 'ComponentsInputUpload',
                                    show_type: "查看"
                                },
                                {
                                    modelName: 'content',
                                    name: "assembly_drawing_problems2",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "尺寸照片",
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
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "产品尺寸",
                            components: [{
                                    modelName: 'content',
                                    name: "length",
                                    label: "长",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                },
                                {
                                    modelName: 'content',
                                    name: "width",
                                    label: "宽",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                },
                                {
                                    modelName: 'content',
                                    name: "height",
                                    label: "高",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                },
                                {
                                    modelName: 'content',
                                    name: "product_size_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "product_size_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "签样对比",
                            components: [{
                                    modelName: 'content',
                                    name: "sealsample_pictures",
                                    label: "签封样照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "sign_sample_pictures",
                                    label: "签封样对比照片",
                                    type: 'ComponentsInputUploadImage',
                                },
                                {
                                    modelName: 'content',
                                    name: "sign_sample_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "颜色确认",
                            components: [{
                                    modelName: 'content',
                                    name: "color_confirm",
                                    label: "颜色确认",
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
                                    modelName: 'content',
                                    name: "color_confirm_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "标签确认",
                            components: [{
                                    modelName: 'content',
                                    name: "label_confirm_pictures",
                                    label: "上传验收照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "label_confirm_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "净重确认",
                            components: [{
                                    modelName: 'content',
                                    name: "net_weight",
                                    label: "净重",
                                    system_id: "system_net_sample",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'content',
                                    name: "tail_net_weight",
                                    label: "净重",
                                    system_id: "system_net_tail",
                                    type: 'ComponentsInput',
                                    unit: 'KG',
                                    associated_notice: ['system_net_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "net_weight_result",
                                    label: "净重对比结果",
                                    system_id: "system_net_result",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                    associated: function () {
                                        let system_net_sample = utils.getPage().getComponents({
                                            system_id: 'system_net_sample'
                                        }).value
                                        let system_net_tail = utils.getPage().getComponents({
                                            system_id: 'system_net_tail'
                                        }).value
                                        let system_net_result = utils.getPage().getComponents({
                                            system_id: 'system_net_result'
                                        })
                                        if (system_net_sample == system_net_tail) {
                                            system_net_result.value = "合格"
                                        } else {
                                            system_net_result.value = "不合格"
                                        }
                                    }
                                },
                                {
                                    modelName: 'content',
                                    name: "net_weight_pictures",
                                    label: "上传验收照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "net_weight_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                    label: "测试数据",
                    name: "base6",
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
                                        }],
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
                                        
                                    },
                                    {
                                        modelName: 'template',
                                        name: "level",
                                        label: "问题等级",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            name: "关键问题",
                                            value: "关键问题"
                                        }, {
                                            name: "主要问题",
                                            value: "主要问题"
                                        }, {
                                            name: "次要问题",
                                            value: "次要问题"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        
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
                                        label: "问题照片",
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
                    name: "base7",
                    components: [{
                            modelName: 'content',
                            name: "result",
                            label: "结果判定",
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
                            modelName: 'content',
                            name: "sign",
                            label: "签名",
                            type: 'ComponentsInputUploadImage'
                        },
                        {
                            modelName: 'content',
                            name: "opinion",
                            label: "处理意见",
                            type: 'ComponentsInputTextarea',
                            
                        },
                        {
                            modelName: 'content',
                            name: "examiner",
                            label: "检验员",
                            type: 'ComponentsInput',
                            
                        },
                        {
                            modelName: 'content',
                            name: "inspection_date",
                            label: "检验日期",
                            type: 'ComponentsInputDay',
                            day_auto: true,
                            
                        },
                    ]
                },
            ]
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
                    label: "基础信息",
                    name: "base1",
                    components: [{
                            modelName: 'content',
                            name: "order_no",
                            label: "采购单编号：",
                            type: 'ComponentsText',
                        },
                        {
                            modelName: 'content',
                            name: "product_no",
                            label: "货号",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "five_code",
                            label: "五位码",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "ean_code",
                            label: "EN码",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "supplier_name",
                            label: "供应商",
                            type: 'ComponentsText',
                        },
                        {
                            modelName: 'content',
                            name: "factory_name",
                            label: "生产工厂",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "sample_standard",
                            label: "抽检标准",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "quality_level",
                            label: "品质标准",
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
                            name: "aql_number",
                            label: "AQL抽检量",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "photo",
                            label: "产品照片",
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
                    label: "常规检验",
                    name: "base2",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "完成量",
                            components: [{
                                    modelName: 'content',
                                    name: "complete_number",
                                    label: "完成量",
                                    type: 'ComponentsInput',
                                },
                                {
                                    modelName: 'content',
                                    name: "complete_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "complete_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "实际抽检数量",
                            components: [{
                                    modelName: 'content',
                                    name: "real_number",
                                    label: "实际抽检数量",
                                    type: 'ComponentsInput',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "real_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "毛重",
                            components: [{
                                    modelName: 'content',
                                    name: "gross_weight",
                                    label: "毛重",
                                    type: 'ComponentsText',
                                    unit: 'KG'
                                },
                                {
                                    modelName: 'content',
                                    name: "tail_gross_weight",
                                    label: "毛重",
                                    type: 'ComponentsInput',
                                    unit: 'KG',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "gross_weight_result",
                                    label: "毛重对比结果",
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
                                    modelName: 'content',
                                    name: "gross_weight_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "gross_weight_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "外箱尺寸",
                            components: [{
                                    modelName: 'content',
                                    name: "wgjy_cc_c",
                                    label: "外箱尺寸长",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_k",
                                    label: "外箱尺寸宽",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_g",
                                    label: "外箱尺寸高",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "",
                            components: [{
                                    modelName: 'content',
                                    name: "box_c",
                                    label: "长",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                },
                                {
                                    modelName: 'content',
                                    name: "box_k",
                                    label: "宽",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                },
                                {
                                    modelName: 'content',
                                    name: "box_g",
                                    label: "高",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                },
                                {
                                    modelName: 'content',
                                    name: "box_size_result",
                                    label: "对比结果",
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
                                    modelName: 'content',
                                    name: "box_size_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "box_size_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "包装效果",
                            components: [{
                                    modelName: 'content',
                                    name: "package_effect_result",
                                    label: "包装效果",
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
                                    modelName: 'content',
                                    name: "package_effect_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "package_effect_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "摔箱测试",
                            components: [{
                                modelName: 'content',
                                name: "drop_box_test",
                                label: "摔箱测试",
                                type: 'ComponentsInputSelect',
                                options: [{
                                        name: "76cm高度，1A",
                                        value: "76cm高度，1A"
                                    },
                                    {
                                        name: "76cm高度，2A",
                                        value: "76cm高度，2A"
                                    },
                                    {
                                        name: "76cm高度，3A",
                                        value: "76cm高度，3A"
                                    },
                                    {
                                        name: "64cm高度，1A",
                                        value: "64cm高度，1A"
                                    },
                                    {
                                        name: "64cm高度，2A",
                                        value: "64cm高度，2A"
                                    },
                                    {
                                        name: "64cm高度，3A",
                                        value: "64cm高度，3A"
                                    },
                                    {
                                        name: "46cm高度，1A",
                                        value: "46cm高度，1A"
                                    },
                                    {
                                        name: "46cm高度，2A",
                                        value: "46cm高度，2A"
                                    },
                                    {
                                        name: "46cm高度，3A",
                                        value: "46cm高度，3A"
                                    },
                                ],
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "唛头确认",
                            components: [{
                                    modelName: 'content',
                                    name: "shipping_marks_pictures",
                                    label: "唛头确认照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "shipping_marks_result",
                                    label: "唛头确认",
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
                                    modelName: 'content',
                                    name: "shipping_marks_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "红绳确认",
                            components: [{
                                    modelName: 'content',
                                    name: "red_rope_result",
                                    label: "红绳确认",
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
                                    modelName: 'content',
                                    name: "red_rope_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "组装图",
                            components: [{
                                    modelName: 'content',
                                    name: "assembly_drawing_result",
                                    label: "组装图",
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
                                    modelName: 'content',
                                    name: "assembly_drawing_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "售后说明书",
                            components: [{
                                    modelName: 'content',
                                    name: "manual_result",
                                    label: "售后说明书",
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
                                    modelName: 'content',
                                    name: "manual_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "包材确认",
                            components: [{
                                    modelName: 'content',
                                    name: "package_confirmation_result",
                                    label: "包材确认",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }, {
                                        name: "不需要",
                                        value: "不需要"
                                    }],
                                },
                                {
                                    modelName: 'content',
                                    name: "package_confirmation_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "快递周长",
                            components: [{
                                    modelName: 'content',
                                    name: "express_day",
                                    label: "快递周长",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "express_perimeter",
                                    label: "快递周长",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                },
                                {
                                    modelName: 'content',
                                    name: "express_perimeter_result",
                                    label: "快递周长结果",
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
                                    modelName: 'content',
                                    name: "express_perimeter_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                    label: "部件检验",
                    name: "base3",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "试摔验证",
                            components: [{
                                    modelName: 'content',
                                    name: "test_verification_result",
                                    label: "试摔效果",
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
                                    modelName: 'content',
                                    name: "test_verification_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
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
                                        name: "mini_number",
                                        label: "数量",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput',
                                        
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
                                        label: "规格（mm)",
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
                                        name: "surface_treatment",
                                        label: "表面处理",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
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
                                        name: "url",
                                        label: "照片",
                                        style: {
                                            width: "100%"
                                        },
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传验货照片",
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
                            label: "上传细节照片",
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
                                        
                                    },
                                    {
                                        modelName: 'template',
                                        name: "level",
                                        label: "问题等级",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            name: "关键问题",
                                            value: "关键问题"
                                        }, {
                                            name: "主要问题",
                                            value: "主要问题"
                                        }, {
                                            name: "次要问题",
                                            value: "次要问题"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        
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
                                        label: "问题照片",
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
                    name: "base4",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "备用包检验",
                            components: [{
                                    modelName: 'content',
                                    name: "spare_package_result",
                                    label: "备用包检验",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        name: "有",
                                        value: "有"
                                    }, {
                                        name: "无",
                                        value: "无"
                                    }, {
                                        name: "不需要",
                                        value: "不需要"
                                    }],
                                },
                                {
                                    modelName: 'content',
                                    name: "spare_package_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
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
                                        name: "mini_number",
                                        label: "数量",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput',
                                        
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
                                        name: "surface_treatment",
                                        label: "表面处理",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
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
                                        name: "url",
                                        label: "照片",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "part_id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
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
                            label: "上传验货照片",
                            components: [{
                                modelName: 'content',
                                name: "parts_all_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                               
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传细节照片",
                            components: [{
                                modelName: 'content',
                                name: "parts_detail_img",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: 'id',
                                            label: 'id',
                                            type: 'ComponentsInputHidden'
                                        },
                                        // {modelName:'template',name: 'picture_id', label: 'picture_id',type:'ComponentsInputHidden'},
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
                    label: "其他检验",
                    name: "base5",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "组装图验证",
                            components: [{
                                    modelName: 'content',
                                    name: "assembly_drawing_result2",
                                    label: "组装图验证",
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
                                    modelName: 'content',
                                    name: "assemble_number",
                                    label: "组装数量",
                                    type: 'ComponentsInput',
                                },
                                {
                                    modelName: 'content',
                                    name: "file_path",
                                    label: "查看文件",
                                    type: 'ComponentsInputUpload',
                                    show_type: "查看"
                                },
                                {
                                    modelName: 'content',
                                    name: "assembly_drawing_problems2",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "尺寸照片",
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
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "产品尺寸",
                            components: [{
                                    modelName: 'content',
                                    name: "length",
                                    label: "长",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                },
                                {
                                    modelName: 'content',
                                    name: "width",
                                    label: "宽",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                },
                                {
                                    modelName: 'content',
                                    name: "height",
                                    label: "高",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                },
                                {
                                    modelName: 'content',
                                    name: "product_size_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "product_size_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "签样对比",
                            components: [{
                                    modelName: 'content',
                                    name: "sealsample_pictures",
                                    label: "签封样照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "sign_sample_pictures",
                                    label: "签封样对比照片",
                                    type: 'ComponentsInputUploadImage',
                                },
                                {
                                    modelName: 'content',
                                    name: "sign_sample_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "颜色确认",
                            components: [{
                                    modelName: 'content',
                                    name: "color_confirm",
                                    label: "颜色确认",
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
                                    modelName: 'content',
                                    name: "color_confirm_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "标签确认",
                            components: [{
                                    modelName: 'content',
                                    name: "label_confirm_pictures",
                                    label: "上传验收照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "label_confirm_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "净重确认",
                            components: [{
                                    modelName: 'content',
                                    name: "net_weight",
                                    label: "净重",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'content',
                                    name: "tail_net_weight",
                                    label: "净重",
                                    type: 'ComponentsInput',
                                    unit: 'KG',
                                },
                                {
                                    modelName: 'content',
                                    name: "net_weight_result",
                                    label: "净重对比结果",
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
                                    modelName: 'content',
                                    name: "net_weight_pictures",
                                    label: "上传验收照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "net_weight_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                    label: "测试数据",
                    name: "base6",
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
                                        }],
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
                                        
                                    },
                                    {
                                        modelName: 'template',
                                        name: "level",
                                        label: "问题等级",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            name: "关键问题",
                                            value: "关键问题"
                                        }, {
                                            name: "主要问题",
                                            value: "主要问题"
                                        }, {
                                            name: "次要问题",
                                            value: "次要问题"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        
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
                                        label: "问题照片",
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
                    name: "base7",
                    components: [{
                            modelName: 'content',
                            name: "result",
                            label: "结果判定",
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
                            modelName: 'content',
                            name: "sign",
                            label: "签名",
                            type: 'ComponentsInputUploadImage'
                        },
                        {
                            modelName: 'content',
                            name: "opinion",
                            label: "处理意见",
                            type: 'ComponentsInputTextarea',
                            
                        },
                        {
                            modelName: 'content',
                            name: "examiner",
                            label: "检验人员",
                            type: 'ComponentsInput',
                        },
                        {
                            modelName: 'content',
                            name: "inspection_date",
                            label: "检验日期",
                            type: 'ComponentsInputDay',
                            
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
                    label: "基础信息",
                    name: "base1",
                    components: [{
                            modelName: 'content',
                            name: "order_no",
                            label: "采购单编号：",
                            type: 'ComponentsText',
                        },
                        {
                            modelName: 'content',
                            name: "product_no",
                            label: "货号",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "five_code",
                            label: "五位码",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "ean_code",
                            label: "EN码",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "supplier_name",
                            label: "供应商",
                            type: 'ComponentsText',
                        },
                        {
                            modelName: 'content',
                            name: "factory_name",
                            label: "生产工厂",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "sample_standard",
                            label: "抽检标准",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "quality_level",
                            label: "品质标准",
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
                            name: "aql_number",
                            label: "AQL抽检量",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "photo",
                            label: "产品照片",
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
                    label: "常规检验",
                    name: "base2",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "完成量",
                            components: [{
                                    modelName: 'content',
                                    name: "complete_number",
                                    label: "完成量",
                                    type: 'ComponentsInput',
                                },
                                {
                                    modelName: 'content',
                                    name: "complete_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "complete_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "实际抽检数量",
                            components: [{
                                    modelName: 'content',
                                    name: "real_number",
                                    label: "实际抽检数量",
                                    type: 'ComponentsInput',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "real_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "毛重",
                            components: [{
                                    modelName: 'content',
                                    name: "gross_weight",
                                    label: "毛重",
                                    system_id: "system_gross_sample",
                                    type: 'ComponentsText',
                                    unit: 'KG'
                                },
                                {
                                    modelName: 'content',
                                    name: "tail_gross_weight",
                                    label: "毛重",
                                    system_id: "system_gross_tail",
                                    type: 'ComponentsInput',
                                    unit: 'KG',
                                    
                                    associated_notice: ['system_gross_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "gross_weight_result",
                                    label: "毛重对比结果",
                                    system_id: "system_gross_result",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                    
                                    associated: function () {
                                        let system_gross_sample = utils.getPage().getComponents({
                                            system_id: 'system_gross_sample'
                                        }).value
                                        let system_gross_tail = utils.getPage().getComponents({
                                            system_id: 'system_gross_tail'
                                        }).value
                                        let system_gross_result = utils.getPage().getComponents({
                                            system_id: 'system_gross_result'
                                        })
                                        if (system_gross_sample == system_gross_tail) {
                                            system_gross_result.value = "合格"
                                        } else {
                                            system_gross_result.value = "不合格"
                                        }
                                    }
                                },
                                {
                                    modelName: 'content',
                                    name: "gross_weight_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "gross_weight_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "外箱尺寸",
                            components: [{
                                    modelName: 'content',
                                    name: "wgjy_cc_c",
                                    label: "外箱尺寸长",
                                    system_id: "system_outsize_c",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_k",
                                    label: "外箱尺寸宽",
                                    system_id: "system_outsize_k",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_g",
                                    label: "外箱尺寸高",
                                    system_id: "system_outsize_g",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "",
                            components: [{
                                    modelName: 'content',
                                    name: "box_c",
                                    label: "长",
                                    type: 'ComponentsInput',
                                    system_id: "system_outsize_cc",
                                    unit: 'CM',
                                    associated_notice: ['system_outsize_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "box_k",
                                    label: "宽",
                                    type: 'ComponentsInput',
                                    system_id: "system_outsize_kk",
                                    unit: 'CM',
                                    associated_notice: ['system_outsize_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "box_g",
                                    label: "高",
                                    type: 'ComponentsInput',
                                    system_id: "system_outsize_gg",
                                    unit: 'CM',
                                    associated_notice: ['system_outsize_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "box_size_result",
                                    label: "对比结果",
                                    system_id: "system_outsize_result",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                    associated: function () {
                                        let system_outsize_c = utils.getPage().getComponents({
                                            system_id: 'system_outsize_c'
                                        }).value
                                        let system_outsize_k = utils.getPage().getComponents({
                                            system_id: 'system_outsize_k'
                                        }).value
                                        let system_outsize_g = utils.getPage().getComponents({
                                            system_id: 'system_outsize_g'
                                        }).value
                                        let system_outsize_cc = utils.getPage().getComponents({
                                            system_id: 'system_outsize_cc'
                                        }).value
                                        let system_outsize_kk = utils.getPage().getComponents({
                                            system_id: 'system_outsize_kk'
                                        }).value
                                        let system_outsize_gg = utils.getPage().getComponents({
                                            system_id: 'system_outsize_gg'
                                        }).value
                                        let system_outsize_result = utils.getPage().getComponents({
                                            system_id: 'system_outsize_result'
                                        })
                                        if (system_outsize_c == system_outsize_cc && system_outsize_k == system_outsize_kk && system_outsize_g == system_outsize_gg) {
                                            system_outsize_result.value = "合格"
                                        } else {
                                            system_outsize_result.value = "不合格"
                                        }
                                    }
                                },
                                {
                                    modelName: 'content',
                                    name: "box_size_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "box_size_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "包装效果",
                            components: [{
                                    modelName: 'content',
                                    name: "package_effect_result",
                                    label: "包装效果",
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
                                    modelName: 'content',
                                    name: "package_effect_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "package_effect_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "摔箱测试",
                            components: [{
                                modelName: 'content',
                                name: "drop_box_test",
                                label: "摔箱测试",
                                type: 'ComponentsInputSelect',
                                options: [{
                                        name: "76cm高度，1A",
                                        value: "76cm高度，1A"
                                    },
                                    {
                                        name: "76cm高度，2A",
                                        value: "76cm高度，2A"
                                    },
                                    {
                                        name: "76cm高度，3A",
                                        value: "76cm高度，3A"
                                    },
                                    {
                                        name: "64cm高度，1A",
                                        value: "64cm高度，1A"
                                    },
                                    {
                                        name: "64cm高度，2A",
                                        value: "64cm高度，2A"
                                    },
                                    {
                                        name: "64cm高度，3A",
                                        value: "64cm高度，3A"
                                    },
                                    {
                                        name: "46cm高度，1A",
                                        value: "46cm高度，1A"
                                    },
                                    {
                                        name: "46cm高度，2A",
                                        value: "46cm高度，2A"
                                    },
                                    {
                                        name: "46cm高度，3A",
                                        value: "46cm高度，3A"
                                    },
                                ],
                                
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "唛头确认",
                            components: [{
                                    modelName: 'content',
                                    name: "shipping_marks_pictures",
                                    label: "唛头确认照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "shipping_marks_result",
                                    label: "唛头确认",
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
                                    modelName: 'content',
                                    name: "shipping_marks_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "红绳确认",
                            components: [{
                                    modelName: 'content',
                                    name: "red_rope_result",
                                    label: "红绳确认",
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
                                    modelName: 'content',
                                    name: "red_rope_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "组装图",
                            components: [{
                                    modelName: 'content',
                                    name: "assembly_drawing_result",
                                    label: "组装图",
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
                                    modelName: 'content',
                                    name: "assembly_drawing_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "售后说明书",
                            components: [{
                                    modelName: 'content',
                                    name: "manual_result",
                                    label: "售后说明书",
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
                                    modelName: 'content',
                                    name: "manual_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "包材确认",
                            components: [{
                                    modelName: 'content',
                                    name: "package_confirmation_result",
                                    label: "包材确认",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }, {
                                        name: "不需要",
                                        value: "不需要"
                                    }],
                                },
                                {
                                    modelName: 'content',
                                    name: "package_confirmation_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "快递周长",
                            components: [{
                                    modelName: 'content',
                                    name: "express_day",
                                    label: "快递周长",
                                    system_id: "system_express_sample",
                                    type: 'ComponentsText',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "express_perimeter",
                                    label: "快递周长",
                                    system_id: "system_express_tail",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                    associated_notice: ['system_express_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "express_perimeter_result",
                                    label: "快递周长结果",
                                    system_id: "system_express_result",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                    associated: function () {
                                        let system_express_sample = utils.getPage().getComponents({
                                            system_id: 'system_express_sample'
                                        }).value
                                        let system_express_tail = utils.getPage().getComponents({
                                            system_id: 'system_express_tail'
                                        }).value
                                        let system_express_result = utils.getPage().getComponents({
                                            system_id: 'system_express_result'
                                        })
                                        if (system_express_sample == system_express_tail) {
                                            system_express_result.value = "合格"
                                        } else {
                                            system_express_result.value = "不合格"
                                        }
                                    }
                                },
                                {
                                    modelName: 'content',
                                    name: "express_perimeter_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                    label: "部件检验",
                    name: "base3",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "试摔验证",
                            components: [{
                                    modelName: 'content',
                                    name: "test_verification_result",
                                    label: "试摔效果",
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
                                    modelName: 'content',
                                    name: "test_verification_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
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
                                        name: "mini_number",
                                        label: "数量",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput',
                                        
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
                                        label: "规格（mm)",
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
                                        name: "surface_treatment",
                                        label: "表面处理",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
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
                                        name: "url",
                                        label: "照片",
                                        style: {
                                            width: "100%"
                                        },
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传验货照片",
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
                            label: "上传细节照片",
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
                                        
                                    },
                                    {
                                        modelName: 'template',
                                        name: "level",
                                        label: "问题等级",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            name: "关键问题",
                                            value: "关键问题"
                                        }, {
                                            name: "主要问题",
                                            value: "主要问题"
                                        }, {
                                            name: "次要问题",
                                            value: "次要问题"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        
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
                                        label: "问题照片",
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
                    name: "base4",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "备用包检验",
                            components: [{
                                    modelName: 'content',
                                    name: "spare_package_result",
                                    label: "备用包检验",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        name: "有",
                                        value: "有"
                                    }, {
                                        name: "无",
                                        value: "无"
                                    }, {
                                        name: "不需要",
                                        value: "不需要"
                                    }],
                                },
                                {
                                    modelName: 'content',
                                    name: "spare_package_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
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
                                        name: "mini_number",
                                        label: "数量",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput',
                                        
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
                                        name: "surface_treatment",
                                        label: "表面处理",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInput'
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
                                        name: "url",
                                        label: "照片",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "part_id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
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
                            label: "上传验货照片",
                            components: [{
                                modelName: 'content',
                                name: "parts_all_img",
                                label: "",
                                type: 'ComponentsInputUploadImage',
                               
                            }]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "上传细节照片",
                            components: [{
                                modelName: 'content',
                                name: "parts_detail_img",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: 'id',
                                            label: 'id',
                                            type: 'ComponentsInputHidden'
                                        },
                                        // {modelName:'template',name: 'picture_id', label: 'picture_id',type:'ComponentsInputHidden'},
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
                    label: "其他检验",
                    name: "base5",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "组装图验证",
                            components: [{
                                    modelName: 'content',
                                    name: "assembly_drawing_result2",
                                    label: "组装图验证",
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
                                    modelName: 'content',
                                    name: "assemble_number",
                                    label: "组装数量",
                                    type: 'ComponentsInput',
                                },
                                {
                                    modelName: 'content',
                                    name: "file_path",
                                    label: "查看文件",
                                    type: 'ComponentsInputUpload',
                                    show_type: "查看"
                                },
                                {
                                    modelName: 'content',
                                    name: "assembly_drawing_problems2",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "尺寸照片",
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
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "产品尺寸",
                            components: [{
                                    modelName: 'content',
                                    name: "length",
                                    label: "长",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                },
                                {
                                    modelName: 'content',
                                    name: "width",
                                    label: "宽",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                   
                                },
                                {
                                    modelName: 'content',
                                    name: "height",
                                    label: "高",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "product_size_pictures",
                                    label: "相关照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "product_size_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "签样对比",
                            components: [{
                                    modelName: 'content',
                                    name: "sealsample_pictures",
                                    label: "签封样照片",
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "sign_sample_pictures",
                                    label: "签封样对比照片",
                                    type: 'ComponentsInputUploadImage',
                                },
                                {
                                    modelName: 'content',
                                    name: "sign_sample_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "颜色确认",
                            components: [{
                                    modelName: 'content',
                                    name: "color_confirm",
                                    label: "颜色确认",
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
                                    modelName: 'content',
                                    name: "color_confirm_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "标签确认",
                            components: [{
                                    modelName: 'content',
                                    name: "label_confirm_pictures",
                                    label: "上传验收照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "label_confirm_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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

                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "净重确认",
                            components: [{
                                    modelName: 'content',
                                    name: "net_weight",
                                    label: "净重",
                                    system_id: "system_net_sample",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'content',
                                    name: "tail_net_weight",
                                    label: "净重",
                                    system_id: "system_net_tail",
                                    type: 'ComponentsInput',
                                    unit: 'KG',
                                    associated_notice: ['system_net_result']
                                },
                                {
                                    modelName: 'content',
                                    name: "net_weight_result",
                                    label: "净重对比结果",
                                    system_id: "system_net_result",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        label: "合格",
                                        value: "合格"
                                    }, {
                                        label: "不合格",
                                        value: "不合格"
                                    }],
                                    associated: function () {
                                        let system_net_sample = utils.getPage().getComponents({
                                            system_id: 'system_net_sample'
                                        }).value
                                        let system_net_tail = utils.getPage().getComponents({
                                            system_id: 'system_net_tail'
                                        }).value
                                        let system_net_result = utils.getPage().getComponents({
                                            system_id: 'system_net_result'
                                        })
                                        if (system_net_sample == system_net_tail) {
                                            system_net_result.value = "合格"
                                        } else {
                                            system_net_result.value = "不合格"
                                        }
                                    }
                                },
                                {
                                    modelName: 'content',
                                    name: "net_weight_pictures",
                                    label: "上传验收照片",
                                    type: 'ComponentsInputUploadImage',
                                    
                                },
                                {
                                    modelName: 'content',
                                    name: "net_weight_problems",
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
                                            
                                        },
                                        {
                                            modelName: 'template',
                                            name: "level",
                                            label: "问题等级",
                                            type: 'ComponentsInputSelect',
                                            options: [{
                                                name: "关键问题",
                                                value: "关键问题"
                                            }, {
                                                name: "主要问题",
                                                value: "主要问题"
                                            }, {
                                                name: "次要问题",
                                                value: "次要问题"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            
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
                                            label: "问题照片",
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
                    label: "测试数据",
                    name: "base6",
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
                                        }],
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
                                        
                                    },
                                    {
                                        modelName: 'template',
                                        name: "level",
                                        label: "问题等级",
                                        type: 'ComponentsInputSelect',
                                        options: [{
                                            name: "关键问题",
                                            value: "关键问题"
                                        }, {
                                            name: "主要问题",
                                            value: "主要问题"
                                        }, {
                                            name: "次要问题",
                                            value: "次要问题"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        
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
                                        label: "问题照片",
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
                    name: "base7",
                    components: [{
                            modelName: 'content',
                            name: "result",
                            label: "结果判定",
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
                            modelName: 'content',
                            name: "sign",
                            label: "签名",
                            type: 'ComponentsInputUploadImage'
                        },
                        {
                            modelName: 'content',
                            name: "opinion",
                            label: "处理意见",
                            type: 'ComponentsInputTextarea',
                            
                        },
                        {
                            modelName: 'content',
                            name: "examiner",
                            label: "检验员",
                            type: 'ComponentsInput',
                            
                        },
                        {
                            modelName: 'content',
                            name: "inspection_date",
                            label: "检验日期",
                            type: 'ComponentsInputDay',
                            
                        },
                    ]
                },
            ]
        },

    ]
};
export default myModule