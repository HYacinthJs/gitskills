import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'sys_bulksample',
    version: 'PageNormal',
    api: {
        query: "/bigsample/query",
        queryByAll: "/bigsample/queryByAll",
        queryById: "/bigsample/queryById",
        queryDetail: "/bigsample/queryDetails",
        delete: "/bigsample/delete",
        save: "/bigsample/save",
        queryTestTypes: "/bigsample/queryTestTypes",
        querySelectTree: '/problemtype/querySelectTree',
        export: "/bigsample/toExcel",
        export1: "/bigsample/online",

        examineOk: "/bigsample/examineOk",
        apply: "/sample/newProposeAudit",
        queryApply: "/process/queryByType",
        queryFlow: "/index/getBZDesc",
        queryOrder: "/number/queryOrderList",
        queryNumber: "/number/queryByAll",
        queryNumberContent: "/bigsample/queryDeatils",
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
                        name: "number_id",
                        label: "货号",
                        type: 'ComponentsInputSelect',
                        ajax_url: "queryNumber",
                        props_label: "name",
                        props_value: "id",
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
            title: "大货样检验",
            type: 'AssemblyContent',
            components: [{
                    modelName: 'content',
                    name: "number_name",
                    label: "货号",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "code",
                    label: "五位码",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "ean_code",
                    label: "条形码",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "package_size",
                    label: "包装尺寸",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "name",
                    label: "中文品名",
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
                    name: "assembly_date",
                    label: "组装日期",
                    type: 'ComponentsInput'
                },
            ],
            tableBtn: [{
                    label: "编辑",
                    type: "primary",
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
                    type: "primary",
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
                //         let edit = utils.getStore().openDialog({
                //             name: 'examine',
                //             title: "审核"
                //         })
                //         edit.query()
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
                    }, ],
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
                    }
                },
                {
                    label: "删除",
                    type: "danger",
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
                            value: 9
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
                                        "type":9
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
            dialog_width: "50%",
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
                                name: "number_name",
                                label: "货号",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "code",
                                label: "五位码",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "ean_code",
                                label: "条形码",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "package_size",
                                label: "包装尺寸",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "name",
                                label: "中文品名",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "assembly_date",
                                label: "组装日期",
                                type: 'ComponentsInputDay'
                            },
                            {
                                modelName: 'content',
                                name: "id",
                                label: "id",
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
            name: "edit",
            type: 'DialogEdit',
            system_save_id: "system_save_id",
            dialog_width: "50%",
            save_close: false,
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                spread: true,
                label: "大货样检验",
                name: "base",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "基础信息",
                        system_id: 'system_base1',
                        components: [

                            {
                                modelName: 'content',
                                name: "number_id",
                                label: "货号",
                                type: 'ComponentsInputSelect',
                                ajax_url: "queryNumber",
                                props_label: "name",
                                props_value: "id",
                                system_id: 'system_number_no',
                                associated_notice: ['system_base1'],
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择货号"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "code",
                                label: "五位码",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "ean_code",
                                label: "条形码",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "package_size",
                                label: "包装尺寸",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "name",
                                label: "中文品名",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "assembly_date",
                                label: "组装日期",
                                type: 'ComponentsInputDay',
                                day_auto: true
                            },
                            {
                                modelName: 'content',
                                name: "number_name",
                                label: "number_name",
                                type: 'ComponentsInputHidden'
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
                                system_id: 'system_base1'
                            })
                            let system_id =
                                utils.my_post({
                                    apiName: 'queryNumberContent',
                                    params: {
                                        "default_id_": system_number_no.value
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        system_increase.setFromValue(json)
                                    },
                                    err: (json: any, dataAll: any) => {
                                        system_increase.initValue()
                                        system_increase.setFromValue({
                                            id: system_number_no.value
                                        })
                                    }
                                })
                        }
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "产品评分（最高5分）(组装难易程度 分数越低,安装越难）",
                        components: [

                            {
                                modelName: 'content',
                                name: "pf_cpbz",
                                label: "产品包装评分",
                                type: 'ComponentsInput',
                                system_id: "system_cpbz",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "cpbz_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_smsbz",
                                label: "说明书步骤评分",
                                type: 'ComponentsInput',
                                system_id: "system_smsbz",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "smsbz_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_bjbzbf",
                                label: "部件包装摆放评分",
                                type: 'ComponentsInput',
                                system_id: "system_bjbzbf",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "bjbzbf_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_pjfltzzl",
                                label: "配件辅料贴纸质量评分",
                                type: 'ComponentsInput',
                                system_id: "system_pjfltzzl",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "pjfltzzl_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_pjsl",
                                label: "配件数量评分",
                                type: 'ComponentsInput',
                                system_id: "system_pjsl",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "pjsl_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_zznycd",
                                label: "组装难易程度评分",
                                type: 'ComponentsInput',
                                system_id: "system_zznycd",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "zznycd_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_zpzg",
                                label: "产品做工评分",
                                type: 'ComponentsInput',
                                system_id: "system_zpzg",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "zpzg_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_sygs",
                                label: "使用感受评分",
                                type: 'ComponentsInput',
                                system_id: "system_sygs",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "sygs_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_cpzf",
                                label: "产品总分",
                                type: 'ComponentsText',
                                system_id: "system_cpzf",
                                associated: function () {
                                    let system_cpbz = utils.getPage().getComponents({
                                        system_id: 'system_cpbz'
                                    }).value
                                    let system_smsbz = utils.getPage().getComponents({
                                        system_id: 'system_smsbz'
                                    }).value
                                    let system_bjbzbf = utils.getPage().getComponents({
                                        system_id: 'system_bjbzbf'
                                    }).value
                                    let system_pjfltzzl = utils.getPage().getComponents({
                                        system_id: 'system_pjfltzzl'
                                    }).value
                                    let system_pjsl = utils.getPage().getComponents({
                                        system_id: 'system_pjsl'
                                    }).value
                                    let system_zznycd = utils.getPage().getComponents({
                                        system_id: 'system_zznycd'
                                    }).value
                                    let system_zpzg = utils.getPage().getComponents({
                                        system_id: 'system_zpzg'
                                    }).value
                                    let system_sygs = utils.getPage().getComponents({
                                        system_id: 'system_sygs'
                                    }).value

                                    let system_cpzf = utils.getPage().getComponents({
                                        system_id: 'system_cpzf'
                                    })
                                    let newV = (parseFloat(system_cpbz) +
                                        parseFloat(system_smsbz) +
                                        parseFloat(system_bjbzbf) +
                                        parseFloat(system_pjfltzzl) +
                                        parseFloat(system_pjsl) +
                                        parseFloat(system_zznycd) +
                                        parseFloat(system_zpzg) +
                                        parseFloat(system_sygs)) / 8
                                    if (typeof newV === 'number' && !isNaN(newV)) {
                                        system_cpzf.value = newV.toFixed(1)
                                    } else {
                                        system_cpzf.value = ""
                                    }
                                    // if(system_gross_sample == system_gross_tail){
                                    //     system_gross_result.value = "合格"
                                    // }else {
                                    //     system_gross_result.value = "不合格"
                                    // }
                                }
                            },
                            {
                                modelName: 'content',
                                name: "sfhg",
                                label: "是否合格",
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
                        label: "相关照片（包装照片）",
                        components: [{
                            modelName: 'content',
                            name: "packaging_picture",
                            label: "",
                            type: 'ComponentsInputUploadImage',
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "问题图片",
                        components: [{
                            modelName: 'content',
                            name: "problems_pic",
                            label: "",
                            type: 'ComponentsInputUploadImage',
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "预期客诉点",
                        components: [{
                            modelName: 'content',
                            name: "yqksd",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: true,
                            value_default: [],
                            components: [
                                // {modelName:'template',name:"type",label:"问题归类",type: 'ComponentsInputSelect',ajax_url:"querySelectTree",props_label:"name",props_value:"id",
                                //     rules:[{validator: utils.my_required, message: "请选择问题归类"}]},
                                {
                                    modelName: 'template',
                                    name: "description",
                                    label: "预期客诉点",
                                    type: 'ComponentsInputTextarea'
                                },
                                // {modelName:'template',name:"url",label:"反馈图片",type: 'ComponentsInputUploadImage'},
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
            }, ]
        },

        {
            modelName: 'dialog',
            name: "read",
            type: 'DialogEdit',
            dialog_width: "50%",
            save_close: false,
            apiName_save: "save",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                spread: true,
                label: "大货样检验",
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
                                name: "code",
                                label: "五位码",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "ean_code",
                                label: "条形码",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "package_size",
                                label: "包装尺寸",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "name",
                                label: "中文品名",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "assembly_date",
                                label: "组装日期",
                                type: 'ComponentsInputDay'
                            },
                            {
                                modelName: 'content',
                                name: "id",
                                label: "id",
                                type: 'ComponentsInputHidden'
                            },
                            {
                                modelName: 'content',
                                name: "number_id",
                                label: "number_id",
                                type: 'ComponentsInputHidden'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "产品评分（最高5分）(组装难易程度 分数越低,安装越难）",
                        components: [

                            {
                                modelName: 'content',
                                name: "pf_cpbz",
                                label: "产品包装评分",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "cpbz_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "pf_smsbz",
                                label: "说明书步骤评分",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "smsbz_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "pf_bjbzbf",
                                label: "部件包装摆放评分",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "bjbzbf_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "pf_pjfltzzl",
                                label: "配件辅料贴纸质量评分",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "pjfltzzl_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "pf_pjsl",
                                label: "配件数量评分",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "pjsl_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "pf_zznycd",
                                label: "组装难易程度评分",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "zznycd_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "pf_zpzg",
                                label: "产品做工评分",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "zpzg_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "pf_sygs",
                                label: "使用感受评分",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "sygs_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_cpzf",
                                label: "产品总分",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "sfhg",
                                label: "是否合格",
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
                        label: "相关照片（包装照片）",
                        components: [{
                            modelName: 'content',
                            name: "packaging_picture",
                            label: "",
                            type: 'ComponentsInputUploadImage',
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "问题图片",
                        components: [{
                            modelName: 'content',
                            name: "problems_pic",
                            label: "",
                            type: 'ComponentsInputUploadImage',
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "预期客诉点",
                        components: [{
                            modelName: 'content',
                            name: "yqksd",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: true,
                            value_default: [],
                            components: [
                                // {modelName:'template',name:"type",label:"问题归类",type: 'ComponentsInputSelect',ajax_url:"querySelectTree",props_label:"name",props_value:"id",
                                //     rules:[{validator: utils.my_required, message: "请选择问题归类"}]},
                                {
                                    modelName: 'template',
                                    name: "description",
                                    label: "市场部反馈",
                                    type: 'ComponentsInputTextarea'
                                },
                                // {modelName:'template',name:"url",label:"反馈图片",type: 'ComponentsInputUploadImage'},
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
            }, ],
            toolBtn: []
        },
        {
            modelName: 'dialog',
            name: "edit2",
            type: 'DialogEdit',
            dialog_width: "50%",
            save_close: false,
            apiName_save: "save",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                spread: true,
                label: "大货样检验",
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
                                name: "code",
                                label: "五位码",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "ean_code",
                                label: "条形码",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "package_size",
                                label: "包装尺寸",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "name",
                                label: "中文品名",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "assembly_date",
                                label: "组装日期",
                                type: 'ComponentsInputDay'
                            },
                            {
                                modelName: 'content',
                                name: "id",
                                label: "id",
                                type: 'ComponentsInputHidden'
                            },
                            {
                                modelName: 'content',
                                name: "number_id",
                                label: "number_id",
                                type: 'ComponentsInputHidden'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "产品评分（最高5分）(组装难易程度 分数越低,安装越难）",
                        components: [

                            {
                                modelName: 'content',
                                name: "pf_cpbz",
                                label: "产品包装评分",
                                type: 'ComponentsInput',
                                system_id: "system_cpbz2",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "cpbz_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_smsbz",
                                label: "说明书步骤评分",
                                type: 'ComponentsInput',
                                system_id: "system_smsbz2",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "smsbz_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_bjbzbf",
                                label: "部件包装摆放评分",
                                type: 'ComponentsInput',
                                system_id: "system_bjbzbf2",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "bjbzbf_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_pjfltzzl",
                                label: "配件辅料贴纸质量评分",
                                type: 'ComponentsInput',
                                system_id: "system_pjfltzzl2",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "pjfltzzl_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_pjsl",
                                label: "配件数量评分",
                                type: 'ComponentsInput',
                                system_id: "system_pjsl2",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "pjsl_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_zznycd",
                                label: "组装难易程度评分",
                                type: 'ComponentsInput',
                                system_id: "system_zznycd2",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "zznycd_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_zpzg",
                                label: "产品做工评分",
                                type: 'ComponentsInput',
                                system_id: "system_zpzg2",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "zpzg_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_sygs",
                                label: "使用感受评分",
                                type: 'ComponentsInput',
                                system_id: "system_sygs2",
                                associated_notice: ['system_cpzf']
                            },
                            {
                                modelName: 'content',
                                name: "sygs_ms",
                                label: "问题描述",
                                type: 'ComponentsInputTextarea'
                            },

                            {
                                modelName: 'content',
                                name: "pf_cpzf",
                                label: "产品总分",
                                type: 'ComponentsText',
                                system_id: "system_cpzf2",
                                associated: function () {
                                    let system_cpbz = utils.getPage().getComponents({
                                        system_id: 'system_cpbz2'
                                    }).value
                                    let system_smsbz = utils.getPage().getComponents({
                                        system_id: 'system_smsbz2'
                                    }).value
                                    let system_bjbzbf = utils.getPage().getComponents({
                                        system_id: 'system_bjbzbf2'
                                    }).value
                                    let system_pjfltzzl = utils.getPage().getComponents({
                                        system_id: 'system_pjfltzzl2'
                                    }).value
                                    let system_pjsl = utils.getPage().getComponents({
                                        system_id: 'system_pjsl2'
                                    }).value
                                    let system_zznycd = utils.getPage().getComponents({
                                        system_id: 'system_zznycd2'
                                    }).value
                                    let system_zpzg = utils.getPage().getComponents({
                                        system_id: 'system_zpzg2'
                                    }).value
                                    let system_sygs = utils.getPage().getComponents({
                                        system_id: 'system_sygs2'
                                    }).value

                                    let system_cpzf = utils.getPage().getComponents({
                                        system_id: 'system_cpzf2'
                                    })
                                    let newV = (parseFloat(system_cpbz) +
                                        parseFloat(system_smsbz) +
                                        parseFloat(system_bjbzbf) +
                                        parseFloat(system_pjfltzzl) +
                                        parseFloat(system_pjsl) +
                                        parseFloat(system_zznycd) +
                                        parseFloat(system_zpzg) +
                                        parseFloat(system_sygs)) / 8
                                    if (typeof newV === 'number' && !isNaN(newV)) {
                                        system_cpzf.value = newV.toFixed(1)
                                    } else {
                                        system_cpzf.value = ""
                                    }
                                    // if(system_gross_sample == system_gross_tail){
                                    //     system_gross_result.value = "合格"
                                    // }else {
                                    //     system_gross_result.value = "不合格"
                                    // }
                                }
                            },
                            {
                                modelName: 'content',
                                name: "sfhg",
                                label: "是否合格",
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
                        label: "相关照片（包装照片）",
                        components: [{
                            modelName: 'content',
                            name: "packaging_picture",
                            label: "",
                            type: 'ComponentsInputUploadImage',
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "问题图片",
                        components: [{
                            modelName: 'content',
                            name: "problems_pic",
                            label: "",
                            type: 'ComponentsInputUploadImage',
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "预期客诉点",
                        components: [{
                            modelName: 'content',
                            name: "yqksd",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: true,
                            value_default: [],
                            components: [
                                // {modelName:'template',name:"type",label:"问题归类",type: 'ComponentsInputSelect',ajax_url:"querySelectTree",props_label:"name",props_value:"id",
                                //     rules:[{validator: utils.my_required, message: "请选择问题归类"}]},
                                {
                                    modelName: 'template',
                                    name: "description",
                                    label: "市场部反馈",
                                    type: 'ComponentsInputTextarea'
                                },
                                // {modelName:'template',name:"url",label:"反馈图片",type: 'ComponentsInputUploadImage'},
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
            }, ]
        }
    ]
}

export default myModule