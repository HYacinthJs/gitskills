import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'correct_quality',
    version: 'PageNormal',
    api: {
        query: "/qualityCorrection/query",
        queryByAll: "/supplier/queryByAll",
        queryById: "/qualityCorrection/queryById",
        save: "/qualityCorrection/save",
        delete: "/qualityCorrection/delete",
        getCompany: "/company/queryByAll",

        apply: "/sample/newProposeAudit",
        queryApply: "/process/queryByType",
        queryFlow: "/index/getBZDesc",

        queryOrder: "/number/queryOrderList",
        queryNumber: "/number/queryByAll",
        queryBySupplier: "/supplier/queryBySupplier",
        queryByFactory: "/supplier/queryByFactory",
        querySelectTree: '/problemtype/querySelectTree',

        query2: "/qualityCorrection/queryProblem",
        queryByAll2: "/contacts/queryByAll",
        queryById2: "/qualityCorrection/queryProblemById",
        save2: "/qualityCorrection/saveForProblem",
        delete2: "/qualityCorrection/deleteProblem",

        save3: "/qualityCorrection/saveUser",
        export: "/questionOverview/questionOverview",
        export1: "/questionOverview/online",
        export2: "/simpleQuestion/simpleQuestion",
        export3: "/simpleQuestion/online",
    },
    components: [{
            modelName: 'content',
            type: 'AssemblyQuery',
            components: [{
                modelName: 'query',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "number_id",
                        label: "货号",
                        type: 'ComponentsInputSelect',
                        ajax_url: "queryNumber",
                        props_label: "name",
                        props_value: "id"
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
            title: "质量纠正报告",
            type: 'AssemblyContent',
            system_id: "content",
            components: [{
                    modelName: 'content',
                    name: "number_name",
                    label: "货号",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "order_no",
                    label: "采购单编号",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "inspect_user",
                    label: "操作人",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "inspection_date",
                    label: "录入日期",
                    type: 'ComponentsInput'
                },
                // {modelName:'content',name:"name",label:"上架时间",type: 'ComponentsInput'},
                // {modelName:'content',name:"full_name",label:"当前设诉率",type: 'ComponentsInput'},
                {
                    modelName: 'content',
                    name: "wcs_num",
                    label: "完成数",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "yjzs_num",
                    label: "已纠正数",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "zacls_num",
                    label: "正在处理数",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "djz_num",
                    label: "待纠正数",
                    type: 'ComponentsInput'
                },
                // {modelName:'content',name:"city",label:"问题记录数",type: 'ComponentsInput'},
            ],
            rowClick: function (data: any) {
                let content2 = utils.getPage().getComponents({
                    system_id: "content2"
                })
                content2.query()
            },
            tableBtn: [{
                    label: "编辑",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "edit"
                        }]
                    }],
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'edit',
                            title: "编辑"
                        })
                        edit.query()
                    }
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
                        let system_id =
                            utils.my_post({
                                apiName: 'export',
                                params: {
                                    "id": data.row.id
                                },
                                ok: (json: any, dataAll: any) => {
                                    window.location.href = json.url
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("导出错误")
                                }
                            })
                    },
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
            ],
        },
        {
            modelName: 'content',
            title: "问题列表",
            type: 'AssemblyContent',
            system_id: "content2",
            tableName: "content2",
            apiNameQuery: "query2",
            components: [
                // {modelName:'content',name:"supplier_name",label:"货号",type: 'ComponentsInput'},
                // {modelName:'content',name:"department_name",label:"采购单编号",type: 'ComponentsInput'},
                // {modelName:'content',name:"name",label:"操作人",type: 'ComponentsInput'},
                // {modelName:'content',name:"post",label:"录入时间",type: 'ComponentsInputDay'},
                {
                    modelName: 'content',
                    name: "t_desc",
                    label: "问题描述",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "t_key",
                    label: "状态",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "reason",
                    label: "忽略原因",
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
                    name: "quality_correction_id",
                    label: "质量纠正id",
                    type: 'ComponentsInputHidden'
                },
            ],
            tableBtn: [{
                    label: "发起纠正",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'edit2',
                            title: "发起纠正"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "correct"
                        }],
                        "row": [{
                            "t_key": "待纠正"
                        }, {
                            "t_key": "未完成"
                        }]
                    }],
                },
                {
                    label: "忽略",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'edit3',
                            title: "忽略"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "correct"
                        }],
                        "row": [{
                            "t_key": "待纠正"
                        }]
                    }]
                },
                {
                    label: "验证",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'edit4',
                            title: "验证"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "verify"
                        }],
                        "row": [{
                            "t_key": "已纠正"
                        }]
                    }]
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
                            name: "apply"
                        }],
                        "row": [{
                            "t_key": "已完成"
                        }]
                    }]
                },
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
                            name: "correct"
                        },{
                            name: "verify"
                        },{
                            name: "apply"
                        },],
                        "row": [{
                            "t_key": "已完成"
                        }]
                    }]
                },
                {
                    label: "报告预览",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "preview"
                        }],
                        "row": [{
                            "t_key": "已纠正"
                        }, {
                            "t_key": "已完成"
                        }]
                    }],
                    click: function (data: any) {
                        let system_id =
                            utils.my_post({
                                apiName: 'export3',
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
                    click: function (data: any) {
                        let system_id =
                            utils.my_post({
                                apiName: 'export2',
                                params: {
                                    "id": data.row.id
                                },
                                ok: (json: any, dataAll: any) => {
                                    window.location.href = json.url
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("导出错误")
                                }
                            })
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "download"
                        }],
                        "row": [{
                            "t_key": "已纠正"
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
                            name: 'delete2',
                            title: "删除"
                        })
                    }
                },
            ],
            toolBtn: [],
            getParams() {
                let that: any = this
                let param: {
                    [key: string]: any
                } = {}
                let query = utils.getPage().getComponents({
                    system_id: that.queryName
                })
                if (utils.isNotNull(query)) {
                    param = query.getEditValue()
                }
                let content = utils.getPage().getComponents({
                    system_id: "content"
                })
                let breadcrumbs = utils.getPage().getComponents({
                    system_id: that.breadcrumbsName
                })
                param['page'] = that.currentPage
                param['rows'] = that.rows
                param['tableControlShow'] = JSON.stringify(that.tableControlShow)
                param['fuzzy_query'] = breadcrumbs.queryValue
                if (utils.isNotNull(content.selectRowOnly)) {
                    param['id'] = content.selectRowOnly[content.primaryKey]
                }
                return param
            }
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
            name: "export2",
            apiName_queryById: "queryById2",
            apiName_download: "export2",
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
            name: "edit",
            type: 'DialogEdit',
            dialog_width: "100%",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "number_id",
                        label: "货号",
                        type: 'ComponentsInputSelect',
                        ajax_url: "queryNumber",
                        props_label: "name",
                        props_value: "id",
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择货号"
                        }]
                    },
                    // {modelName:'content',name:"number_id",label:"货号",type: 'ComponentsInputSelect',
                    //     rules:[{validator: utils.my_required, message: "请选择货号"}],
                    //     ajax_url:"queryNumber",props_label:"name",props_value:"id",
                    // },
                    {
                        modelName: 'content',
                        name: "order_no",
                        label: "采购单编号",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "problems",
                        label: "",
                        type: 'ComponentsInputTable',
                        value_default: [],
                        components: [{
                                modelName: 'template',
                                name: "t_desc",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请填写问题描述"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "url",
                                label: "问题图片",
                                type: 'ComponentsInputUploadImage'
                            },
                        ]
                    },
                    {
                        modelName: 'content',
                        name: 'id',
                        label: 'id',
                        type: 'ComponentsInputHidden',
                    },
                ]
            }, ]
        },
        //发起纠正
        {
            modelName: 'dialog',
            name: "edit2",
            type: 'DialogEdit',
            dialog_width: "80%",
            tableName: "content2",
            apiName_save: "save2",
            apiName_queryById: "queryById2",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                spread: true,
                label: "基础",
                name: "base1",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "number_name",
                                label: "货号",
                                type: 'ComponentsText',
                                initValue() {
                                    let that: any = this
                                    let content = utils.getPage().getComponents({
                                        system_id: "content"
                                    })
                                    let value = content.selectRowOnly['number_name'];
                                    if (utils.isNotNull(value)) {
                                        that.value = content.selectRowOnly['number_name']
                                    } else {
                                        that.value = that.value_default;
                                    }
                                }
                            },
                            {
                                modelName: 'content',
                                name: "order_no",
                                label: "采购单编号",
                                type: 'ComponentsText',
                                initValue() {
                                    let that: any = this
                                    let content = utils.getPage().getComponents({
                                        system_id: "content"
                                    })
                                    let value = content.selectRowOnly['order_no'];
                                    if (utils.isNotNull(value)) {
                                        that.value = content.selectRowOnly['order_no']
                                    } else {
                                        that.value = that.value_default;
                                    }
                                }
                            },
                            {
                                modelName: 'content',
                                name: "factory_id",
                                label: "工厂",
                                type: 'ComponentsInputSelect',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择工厂"
                                }],
                                ajax_url: "queryByFactory",
                                props_label: "name",
                                props_value: "id"
                            },
                            {
                                modelName: 'content',
                                name: "supplier_id",
                                label: "供应商",
                                type: 'ComponentsInputSelect',
                                ajax_url: "queryBySupplier",
                                props_label: "name",
                                props_value: "id"
                            },
                            {
                                modelName: 'content',
                                name: "t_desc",
                                label: "问题描述",
                                type: 'ComponentsText',
                                style: {
                                    width: "1200px"
                                }
                            },
                            {
                                modelName: 'content',
                                name: "url",
                                label: "问题图片",
                                type: 'ComponentsInputImage'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "pro_type",
                                label: "问题归类",
                                type: 'ComponentsInputSelect',
                                ajax_url: "querySelectTree",
                                props_label: "name",
                                props_value: "id",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择问题归类"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "pro_part",
                                label: "问题部位",
                                type: 'ComponentsInputTextarea'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "pro_desc",
                                label: "简单分析",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "pro_desc_bz",
                                label: "备注",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "lscs",
                                label: "临时措施",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "lscs_bz",
                                label: "备注",
                                type: 'ComponentsInputTextarea'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                            modelName: 'content',
                            name: "lscs_url",
                            label: "图片",
                            type: 'ComponentsInputUploadImage'
                        }, ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "desc2",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "url2",
                                label: "图片",
                                type: 'ComponentsInputUploadImage'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "zyfx",
                                label: "真因分析",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "yjxyfcs",
                                label: "永久性预防纠正措施",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "yjxyfcs_bz",
                                label: "备注",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "keys",
                                label: 'keys',
                                type: 'ComponentsInputHidden',
                                value_default: '1'
                            },
                            {
                                modelName: 'content',
                                name: 'quality_correction_id',
                                label: '质量纠正id',
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
                ]
            }, ],
            save_callback(json: any, dataAll: any) {
                let that: any = this
                let content = utils.getPage().getComponents({
                    system_id: "content"
                })
                content.query()
            }
        },
        //忽略
        {
            modelName: 'dialog',
            name: "edit3",
            type: 'DialogEdit',
            dialog_width: "80%",
            tableName: "content2",
            apiName_save: "save2",
            apiName_queryById: "queryById2",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                spread: true,
                label: "基础",
                name: "base2",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        components: [{
                                modelName: 'content',
                                name: "t_desc",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea',
                                disabled: "true"
                            },
                            {
                                modelName: 'content',
                                name: "url",
                                label: "问题图片",
                                type: 'ComponentsInputImage'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        components: [{
                                modelName: 'content',
                                name: "reason",
                                label: "忽略原因",
                                type: 'ComponentsInputSelect',
                                system_id: "system_reason",
                                value_default: "已有历史发起为解决",
                                options: [{
                                    name: "已有历史发起未解决",
                                    value: "已有历史发起未解决"
                                }, {
                                    name: "不是重要问题",
                                    value: "不是重要问题"
                                }, {
                                    name: "后续不采购",
                                    value: "后续不采购"
                                }, {
                                    name: "其他",
                                    value: "其他"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "ignore",
                                label: "其他原因",
                                type: 'ComponentsInputTextarea',
                                jurisdictionJson: [{
                                    system_id: [{
                                        system_reason: '其他'
                                    }]
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "keys",
                                label: 'keys',
                                type: 'ComponentsInputHidden',
                                value_default: '0'
                            },
                            {
                                modelName: 'content',
                                name: 'quality_correction_id',
                                label: '质量纠正id',
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
                ]
            }, ]
        },
        //验证
        {
            modelName: 'dialog',
            name: "edit4",
            type: 'DialogEdit',
            dialog_width: "80%",
            tableName: "content2",
            apiName_save: "save3",
            apiName_queryById: "queryById2",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                spread: true,
                label: "验证",
                name: "base",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "number_name",
                                label: "货号",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "order_no",
                                label: "采购单编号",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "factory_name",
                                label: "工厂",
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
                                name: "t_desc",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea',
                                show_type: "详情"
                            },
                            {
                                modelName: 'content',
                                name: "url",
                                label: "问题图片",
                                type: 'ComponentsInputImage'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "problem_name",
                                label: "问题归类",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "pro_part",
                                label: "问题部位",
                                type: 'ComponentsInputTextarea',
                                show_type: "详情"
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "pro_desc",
                                label: "简单分析",
                                type: 'ComponentsInputTextarea',
                                show_type: "详情"
                            },
                            {
                                modelName: 'content',
                                name: "pro_desc_bz",
                                label: "备注",
                                type: 'ComponentsInputTextarea',
                                show_type: "详情"
                            },
                            {
                                modelName: 'content',
                                name: "lscs",
                                label: "临时措施",
                                type: 'ComponentsInputTextarea',
                                show_type: "详情"
                            },
                            {
                                modelName: 'content',
                                name: "lscs_bz",
                                label: "备注",
                                type: 'ComponentsInputTextarea',
                                show_type: "详情"
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                            modelName: 'content',
                            name: "lscs_url",
                            label: "图片",
                            type: 'ComponentsInputImage'
                        }, ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "desc2",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea',
                                show_type: "详情"
                            },
                            {
                                modelName: 'content',
                                name: "url2",
                                label: "图片",
                                type: 'ComponentsInputImage'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "zyfx",
                                label: "真因分析",
                                type: 'ComponentsInputTextarea',
                                show_type: "详情"
                            },
                            {
                                modelName: 'content',
                                name: "yjxyfcs",
                                label: "永久性预防纠正措施",
                                type: 'ComponentsInputTextarea',
                                show_type: "详情"
                            },
                            {
                                modelName: 'content',
                                name: "yjxyfcs_bz",
                                label: "备注",
                                type: 'ComponentsInputTextarea',
                                show_type: "详情"
                            },
                            {
                                modelName: 'content',
                                name: "keys",
                                label: 'keys',
                                type: 'ComponentsInputHidden',
                                value_default: '1'
                            },
                            {
                                modelName: 'content',
                                name: 'quality_correction_id',
                                label: '质量纠正id',
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
                        label: "工厂签名",
                        components: [{
                                modelName: 'content',
                                name: "title",
                                label: "",
                                type: 'ComponentsText',
                                style: {
                                    width: "1200px",
                                    'font-size': "20px",
                                    'text-align': "center"
                                },
                                value_default: "以上质量纠正经过我的确认，我会按照上述纠正措施执行，并承担相应的责任，请大家监督"
                            },
                            {
                                modelName: 'content',
                                name: "factory_user",
                                label: "",
                                type: 'ComponentsInputTable',
                                label_show: false,
                                editTr: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "user",
                                        label: "工厂人员签名",
                                        type: 'ComponentsText',
                                        style: {
                                            display: "inline-block",
                                            'text-align': "center"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "照片",
                                        type: 'ComponentsInputImage'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "zw",
                                        label: "职务",
                                        type: 'ComponentsText'
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "验证审核人员签名",
                        components: [{
                                modelName: 'content',
                                name: "title2",
                                label: "",
                                type: 'ComponentsText',
                                style: {
                                    width: "1200px",
                                    'font-size': "20px",
                                    'text-align': "center"
                                },
                                value_default: "对于工厂的质量纠正措施，已验证，可避免类似质量问题发生。"
                            },
                            {
                                modelName: 'content',
                                name: "result",
                                label: "判定结果",
                                type: 'ComponentsInputSelect',
                                options: [{
                                    name: "通过",
                                    value: "通过"
                                }, {
                                    name: "不通过",
                                    value: "不通过"
                                }],
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择判定结果"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "user",
                                label: "",
                                type: 'ComponentsInputTable',
                                label_show: false,
                                value_default: [],
                                components: [{
                                        modelName: 'template',
                                        name: "name",
                                        label: "添加验证审核人员",
                                        type: 'ComponentsInput',
                                        style: {
                                            display: "inline-block",
                                            'text-align': "center"
                                        }
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: "照片",
                                        type: 'ComponentsInputUploadImage'
                                    },
                                ]
                            },
                            {
                                modelName: 'content',
                                name: 'id',
                                label: 'id',
                                type: 'ComponentsInputHidden'
                            },
                        ]
                    },
                ]
            }, ]
        },
        {
            modelName: 'dialog',
            name: "delete2",
            type: 'DialogSelect',
            title: '删除',
            msg: '是否确认删除？',
            tableName: "content2",
            apiName_save: "delete2"
        },
        {
            modelName: 'dialog',
            name: "deleteAll2",
            type: 'DialogSelect',
            title: '删除',
            msg: '是否确认批量删除？',
            valueModel: "批量",
            tableName: "content",
            apiName_save: "delete2"
        },
        // 申请审核
        {
            modelName: 'dialog',
            name: "apply",
            type: 'DialogEdit',
            system_id: "system_word",
            apiName_queryById: "queryById2",
            tableName: "content2",
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
                            value: 11
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
                                        "type":11
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        let dialog = utils.getStore().selectDialog({
                                            name: 'apply'
                                        })
                                        dialog.show = false
                                        let content = utils.getPage().getComponents({
                                            system_id: 'content2'
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
        // 详情
        {
            modelName: 'dialog',
            name: "detail",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryById2",
            tableName:"content2",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                spread: true,
                name: "base",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "基础信息",
                        components: [{
                                modelName: 'content',
                                name: "number_name",
                                label: "货号",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "order_no",
                                label: "采购单编号",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "factory_name",
                                label: "工厂",
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
                                name: "t_desc",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea',
                                show_type: "详情"
                            },
                            {
                                modelName: 'content',
                                name: "url",
                                label: "问题图片",
                                type: 'ComponentsInputImage'
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
            }],
            toolBtn: []
        },
    ]
}
export default myModule