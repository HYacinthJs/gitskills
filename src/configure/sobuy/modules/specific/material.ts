import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'material',
    version: 'PageNormal',
    api: {
        query: "/material/query",
        queryByAll: "/material/queryByAll",
        queryById: "/material/queryById",
        delete: "/material/delete",
        save: "/material/save",
        queryTestTypes: "/material/queryTestTypes",
        queryMaterialLevelList: "/material/queryMaterialLevelList",
        queryMaterialType: "/material/queryMaterialTypes",
        materialtesttypeQueryAll: "/materialtesttype/queryByAll",
        examineOk: "/material/examineOk",
        apply: "/sample/newProposeAudit",
        queryApply: "/process/queryByType",
        queryFlow: "/index/getBZDesc",
        export: "/material/toExcel",
        export1: "/material/online",

        queryBySupplier: "/supplier/queryByAll",
        queryByFactory: "/supplier/queryByAll",
        queryByInspector: "/user/queryByAll",
        getCompany: "/company/queryByAll",
        queryOrder: "/number/queryOrderList",
        queryProduct: "/number/queryByAll",

    },
    components: [{
            modelName: 'content',
            type: 'AssemblyQuery',
            components: [{
                modelName: 'query',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "name",
                        label: "原材料名称",
                        label_show: true,
                        label_width: "150px",
                        type: 'ComponentsInput'
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
            title: "原材料检验",
            type: 'AssemblyContent',
            components: [{
                    modelName: 'content',
                    name: "name",
                    label: "原材料名称",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "customer",
                    label: "客户",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "brand",
                    label: "原材料品牌",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "number",
                    label: "来料数量",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "factory",
                    label: "验收工厂",
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
                    name: "checkdate",
                    label: "检验日期",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "examiner",
                    label: "检验人员",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "result",
                    label: "检验结果",
                    type: 'ComponentsInputSelect'
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
                            value: 5
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
                                        "type":5
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
                        label: "来料类型",
                        components: [{
                                modelName: 'content',
                                name: "material_type_name",
                                label: "",
                                type: 'ComponentsText',
                            },
                            {
                                modelName: 'content',
                                name: "url",
                                label: "材料图片",
                                type: 'ComponentsInputImage'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "基础信息",
                        components: [{
                                modelName: 'content',
                                name: "name",
                                label: "原材料名称",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "brand",
                                label: "原材料品牌",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "number",
                                label: "来料数量",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "customer",
                                label: "客户",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "factory",
                                label: "验收工厂",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "examiner",
                                label: "检验人员",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "result",
                                label: "检验结果",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "checkdate",
                                label: "检验日期",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: 'id',
                                label: 'id',
                                type: 'ComponentsInputHidden'
                            },
                            {
                                modelName: 'content',
                                name: 'material_type',
                                label: 'material_type',
                                type: 'ComponentsInputHidden'
                            }
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
            system_save_id: "system_save_id",
            dialog_width: "80%",
            save_close: false,
            apiName_save: "save",
            components: [{
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    label: "基础信息",
                    name: "base",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "来料类型",
                            components: [{
                                modelName: 'content',
                                name: "material_type",
                                label: "",
                                type: 'ComponentsInputSelect',
                                ajax_url: "queryMaterialType",
                                props_label: "name",
                                props_value: "id",
                                system_id: "system_material_type",
                                associated_notice: ["system_other", "system_url"],
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择来料类型"
                                }]
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "",
                            components: [{
                                modelName: 'content',
                                name: "url",
                                label: "材料图片",
                                type: 'ComponentsInputImage',
                                system_id: "system_url",
                                associated: function () {
                                    let system_material_type = utils.getPage().getComponents({
                                        system_id: 'system_material_type'
                                    })
                                    let system_url = utils.getPage().getComponents({
                                        system_id: 'system_url'
                                    })
                                    let system_id =
                                        utils.my_post({
                                            apiName: 'queryTestTypes',
                                            params: {
                                                "default_id_": system_material_type.value
                                            },
                                            ok: (json: any, dataAll: any) => {
                                                system_url.initValueFormat(json.url)
                                            },
                                            err: (json: any, dataAll: any) => {
                                                system_url.initValue()
                                            }
                                        })
                                }
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "基础信息",
                            components: [{
                                    modelName: 'content',
                                    name: "name",
                                    label: "原材料名称",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "brand",
                                    label: "原材料品牌",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "number",
                                    label: "来料数量",
                                    type: 'ComponentsInput',
                                    rules: [{
                                            validator: utils.my_number,
                                            message: "只能填写数字"
                                        },
                                        {
                                            validator: utils.my_required,
                                            message: "请填写来料数量"
                                        },
                                    ],
                                },

                                {
                                    modelName: 'content',
                                    name: "customer",
                                    label: "客户",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "factory",
                                    label: "验收工厂",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "examiner",
                                    label: "检验人员",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "result",
                                    label: "检验结果",
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
                                    modelName: 'content',
                                    name: "checkdate",
                                    label: "检验日期",
                                    type: 'ComponentsInputDay',
                                    day_auto: true
                                },
                                {
                                    modelName: 'content',
                                    name: 'id',
                                    label: 'id',
                                    type: 'ComponentsInputHidden',
                                    system_id: "system_save_id"
                                }
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "对应货号信息",
                            components: [{
                                modelName: 'content',
                                name: "records",
                                label: "对应货号信息",
                                type: 'ComponentsInputTable',
                                label_show: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "product_id",
                                        label: "货号",
                                        type: 'ComponentsInputSelect',
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请选择货号"
                                        }],
                                        ajax_url: "queryProduct",
                                        props_label: "name",
                                        props_value: "id"
                                    },
                                    {
                                        modelName: 'template',
                                        name: "order_id",
                                        label: "采购单编号",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "queryOrder",
                                        props_label: "no",
                                        props_value: "order_id"
                                    },
                                    {
                                        modelName: 'template',
                                        name: "order_number",
                                        label: "订单数量",
                                        type: 'ComponentsInput',
                                        rules: [{
                                            validator: utils.my_number,
                                            message: "只能填写数字"
                                        }, ],
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
                            label: "上传来样照片",
                            components: [{
                                modelName: 'content',
                                name: "sample_pictures",
                                label: "",
                                type: 'ComponentsInputUploadImage'
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    label: "基础检验",
                    name: "base2",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "包装检验",
                            components: [{
                                    modelName: 'content',
                                    name: "package_pictures",
                                    label: "验收照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "package_problems",
                                    type: 'ComponentsInputTable',
                                    label_show: false,
                                    value_default: [],
                                    components: [{
                                            modelName: 'template',
                                            name: "description",
                                            label: "问题描述",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea',
                                            rules: [{
                                                validator: utils.my_required,
                                                message: "请填写问题描述"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            rules: [{
                                                validator: utils.my_number,
                                                message: "只能填写数字"
                                            }, ]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "opinion",
                                            label: "处理意见",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "url",
                                            label: "上传问题照片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "id",
                                            label: "id",
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "尺寸检验",
                            components: [{
                                    modelName: 'content',
                                    name: "size_result",
                                    label: "来样尺寸",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "size_pictures",
                                    label: "验收照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "size_problems",
                                    type: 'ComponentsInputTable',
                                    label_show: false,
                                    value_default: [],
                                    components: [{
                                            modelName: 'template',
                                            name: "description",
                                            label: "问题描述",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea',
                                            rules: [{
                                                validator: utils.my_required,
                                                message: "请填写问题描述"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            rules: [{
                                                validator: utils.my_number,
                                                message: "只能填写数字"
                                            }, ]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "opinion",
                                            label: "处理意见",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "url",
                                            label: "上传问题照片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "id",
                                            label: "id",
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "颜色检验",
                            components: [{
                                    modelName: 'content',
                                    name: "color_result",
                                    label: "来样颜色",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "color_pictures",
                                    label: "验收照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "color_problems",
                                    type: 'ComponentsInputTable',
                                    label_show: false,
                                    value_default: [],
                                    components: [{
                                            modelName: 'template',
                                            name: "description",
                                            label: "问题描述",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea',
                                            rules: [{
                                                validator: utils.my_required,
                                                message: "请填写问题描述"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            rules: [{
                                                validator: utils.my_number,
                                                message: "只能填写数字"
                                            }, ]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "opinion",
                                            label: "处理意见",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "url",
                                            label: "上传问题照片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "id",
                                            label: "id",
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "工艺检验",
                            components: [{
                                    modelName: 'content',
                                    name: "process_result",
                                    label: "来样工艺",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "process_pictures",
                                    label: "验收照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "process_problems",
                                    type: 'ComponentsInputTable',
                                    label_show: false,
                                    value_default: [],
                                    components: [{
                                            modelName: 'template',
                                            name: "description",
                                            label: "问题描述",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea',
                                            rules: [{
                                                validator: utils.my_required,
                                                message: "请填写问题描述"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            rules: [{
                                                validator: utils.my_number,
                                                message: "只能填写数字"
                                            }, ]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "opinion",
                                            label: "处理意见",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "url",
                                            label: "上传问题照片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "id",
                                            label: "id",
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    label: "其他检验",
                    name: "base3",
                    system_id: 'system_other',
                    components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "material_check",
                                system_id: "system_material_check",
                                label: "",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "items",
                                type: 'ComponentsInputTable',
                                label_show: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "item",
                                        label: "检验类型",
                                        type: 'ComponentsInput',
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请填写检验类型"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "result",
                                        label: "检验结果",
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
                                        name: "url",
                                        label: "验收照片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea',
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请填写问题描述"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "problems_picture",
                                        label: "上传问题照片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            },
                        ]
                    }, ],
                    associated: function () {
                        let system_material_type = utils.getPage().getComponents({
                            system_id: 'system_material_type'
                        })
                        let system_other = utils.getPage().getComponents({
                            system_id: 'system_other'
                        })
                        let system_id =
                            utils.my_post({
                                apiName: 'queryTestTypes',
                                params: {
                                    "default_id_": system_material_type.value
                                },
                                ok: (json: any, dataAll: any) => {
                                    system_other.setFromValue(json)
                                },
                                err: (json: any, dataAll: any) => {
                                    system_other.initValue()
                                    system_other.setFromValue({
                                        id: system_material_type.value
                                    })
                                }
                            })
                    }
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    label: "签封样对比",
                    name: "base4",
                    components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "签封样对比图片",
                        components: [{
                                modelName: 'content',
                                name: "sealsample_pictures",
                                label: "",
                                type: 'ComponentsInputUploadImage'
                            },
                            {
                                modelName: 'content',
                                name: "sealsample_result",
                                label: "对比结果",
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
                                modelName: 'content',
                                name: "sealsample_problems",
                                type: 'ComponentsInputTable',
                                label_show: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea',
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请填写问题描述"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        rules: [{
                                            validator: utils.my_number,
                                            message: "只能填写数字"
                                        }, ]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "opinion",
                                        label: "处理意见",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "上传问题照片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }
                        ]
                    }, ]
                },
            ]
        },
        {
            modelName: 'dialog',
            name: "edit2",
            type: 'DialogEdit',
            dialog_width: "80%",
            save_close: false,
            apiName_save: "save",
            components: [{
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    label: "基础信息",
                    name: "base",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "来料类型",
                            components: [{
                                modelName: 'content',
                                name: "material_type_name",
                                label: "",
                                type: 'ComponentsText',
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "",
                            components: [{
                                modelName: 'content',
                                name: "url",
                                label: "材料图片",
                                type: 'ComponentsInputImage'
                            }, ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "基础信息",
                            components: [{
                                    modelName: 'content',
                                    name: "name",
                                    label: "原材料名称",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "brand",
                                    label: "原材料品牌",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "number",
                                    label: "来料数量",
                                    type: 'ComponentsInput',
                                    rules: [{
                                            validator: utils.my_number,
                                            message: "只能填写数字"
                                        },
                                        {
                                            validator: utils.my_required,
                                            message: "请填写来料数量"
                                        },
                                    ],
                                },
                                {
                                    modelName: 'content',
                                    name: "customer",
                                    label: "客户",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "factory",
                                    label: "验收工厂",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "examiner",
                                    label: "检验人员",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "result",
                                    label: "检验结果",
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
                                    modelName: 'content',
                                    name: "checkdate",
                                    label: "检验日期",
                                    type: 'ComponentsInputDay'
                                },
                                {
                                    modelName: 'content',
                                    name: 'id',
                                    label: 'id',
                                    type: 'ComponentsInputHidden'
                                },
                                {
                                    modelName: 'content',
                                    name: 'material_type',
                                    label: 'material_type',
                                    type: 'ComponentsInputHidden'
                                }
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "对应货号信息",
                            components: [{
                                modelName: 'content',
                                name: "records",
                                label: "对应货号信息",
                                type: 'ComponentsInputTable',
                                label_show: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "product_id",
                                        label: "货号",
                                        type: 'ComponentsInputSelect',
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请选择货号"
                                        }],
                                        ajax_url: "queryProduct",
                                        props_label: "name",
                                        props_value: "id"
                                    },
                                    {
                                        modelName: 'template',
                                        name: "order_id",
                                        label: "采购单编号",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "queryOrder",
                                        props_label: "no",
                                        props_value: "order_id"
                                    },
                                    {
                                        modelName: 'template',
                                        name: "order_number",
                                        label: "订单数量",
                                        type: 'ComponentsInput',
                                        rules: [{
                                            validator: utils.my_number,
                                            message: "只能填写数字"
                                        }, ],
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
                            label: "上传来样照片",
                            components: [{
                                modelName: 'content',
                                name: "sample_pictures",
                                label: "",
                                type: 'ComponentsInputUploadImage'
                            }, ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    label: "基础检验",
                    name: "base2",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "包装检验",
                            components: [{
                                    modelName: 'content',
                                    name: "package_pictures",
                                    label: "验收照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "package_problems",
                                    type: 'ComponentsInputTable',
                                    label_show: false,
                                    value_default: [],
                                    components: [{
                                            modelName: 'template',
                                            name: "description",
                                            label: "问题描述",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea',
                                            rules: [{
                                                validator: utils.my_required,
                                                message: "请填写问题描述"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            rules: [{
                                                validator: utils.my_number,
                                                message: "只能填写数字"
                                            }, ]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "opinion",
                                            label: "处理意见",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "url",
                                            label: "上传问题照片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "id",
                                            label: "id",
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "尺寸检验",
                            components: [{
                                    modelName: 'content',
                                    name: "size_result",
                                    label: "来样尺寸",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "size_pictures",
                                    label: "验收照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "size_problems",
                                    type: 'ComponentsInputTable',
                                    label_show: false,
                                    value_default: [],
                                    components: [{
                                            modelName: 'template',
                                            name: "description",
                                            label: "问题描述",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea',
                                            rules: [{
                                                validator: utils.my_required,
                                                message: "请填写问题描述"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            rules: [{
                                                validator: utils.my_number,
                                                message: "只能填写数字"
                                            }, ]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "opinion",
                                            label: "处理意见",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "url",
                                            label: "上传问题照片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "id",
                                            label: "id",
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "颜色检验",
                            components: [{
                                    modelName: 'content',
                                    name: "color_result",
                                    label: "来样颜色",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "color_pictures",
                                    label: "验收照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "color_problems",
                                    type: 'ComponentsInputTable',
                                    label_show: false,
                                    value_default: [],
                                    components: [{
                                            modelName: 'template',
                                            name: "description",
                                            label: "问题描述",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea',
                                            rules: [{
                                                validator: utils.my_required,
                                                message: "请填写问题描述"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            rules: [{
                                                validator: utils.my_number,
                                                message: "只能填写数字"
                                            }, ]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "opinion",
                                            label: "处理意见",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "url",
                                            label: "上传问题照片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "id",
                                            label: "id",
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "工艺检验",
                            components: [{
                                    modelName: 'content',
                                    name: "process_result",
                                    label: "来样工艺",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'content',
                                    name: "process_pictures",
                                    label: "验收照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "process_problems",
                                    type: 'ComponentsInputTable',
                                    label_show: false,
                                    value_default: [],
                                    components: [{
                                            modelName: 'template',
                                            name: "description",
                                            label: "问题描述",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea',
                                            rules: [{
                                                validator: utils.my_required,
                                                message: "请填写问题描述"
                                            }]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "number",
                                            label: "问题数量",
                                            type: 'ComponentsInput',
                                            rules: [{
                                                validator: utils.my_number,
                                                message: "只能填写数字"
                                            }, ]
                                        },
                                        {
                                            modelName: 'template',
                                            name: "opinion",
                                            label: "处理意见",
                                            style: {
                                                width: "100%"
                                            },
                                            type: 'ComponentsInputTextarea'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "url",
                                            label: "上传问题照片",
                                            type: 'ComponentsInputUploadImage'
                                        },
                                        {
                                            modelName: 'template',
                                            name: "id",
                                            label: "id",
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    label: "其他检验",
                    name: "base3",
                    components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "material_check",
                                label: "",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "items",
                                type: 'ComponentsInputTable',
                                label_show: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "item",
                                        label: "检验类型",
                                        type: 'ComponentsInput',
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请填写问题描述"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "result",
                                        label: "检验结果",
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
                                        name: "url",
                                        label: "验收照片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea',
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请填写问题描述"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "problems_picture",
                                        label: "上传问题照片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            },
                        ]
                    }, ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    label: "签封样对比",
                    name: "base4",
                    components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "签封样对比图片",
                        components: [{
                                modelName: 'content',
                                name: "sealsample_pictures",
                                label: "",
                                type: 'ComponentsInputUploadImage'
                            },
                            {
                                modelName: 'content',
                                name: "sealsample_result",
                                label: "对比结果",
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
                                modelName: 'content',
                                name: "sealsample_problems",
                                type: 'ComponentsInputTable',
                                label_show: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "description",
                                        label: "问题描述",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea',
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请填写问题描述"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "number",
                                        label: "问题数量",
                                        type: 'ComponentsInput',
                                        rules: [{
                                            validator: utils.my_number,
                                            message: "只能填写数字"
                                        }, ]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "opinion",
                                        label: "处理意见",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "上传问题照片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "id",
                                        label: "id",
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            }
                        ]
                    }, ]
                },
            ]
        }
    ]
}

export default myModule