import {
    AssemblyContentEdit
} from '@/components/components/assembly/contentEdit/model';
import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'sys_sample',
    version: 'PageNormal',
    api: {
        query: "/sample/query",
        queryByAll: "/sample/queryByAll",
        queryById: "/sample/queryById",
        save: "/sample/save",
        delete: "/sample/delete",
        inspect: "/sample/inspect",
        examineOk: "/sample/examineOk",
        examineErr: "/sample/examineErr",
        export: "/sample/toExcel",
        export1: "/sample/online",
        test: "/testrequirements/queryByAll",
        apply: "/sample/newProposeAudit",
        queryApply: "/process/queryByType",
        queryFlow: "/index/getBZDesc",

        queryBySupplier: "/supplier/queryBySupplier",
        queryByFactory: "/supplier/queryByFactory",
        queryByInspector: "/user/queryByAll",
        getCompany: "/company/query",
        querySelectTree: '/problemtype/querySelectTree',
        queryMaterialLevelList: '/material/queryMaterialLevelList',

    },
    components: [{
            modelName: 'content',
            type: 'AssemblyQuery',
            components: [{
                modelName: 'query',
                type: 'AssemblyFrom',
                components: [
                    // {modelName:'content',name:"company_id",label:"公司名称",type: 'ComponentsInputSelect',jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
                    {
                        modelName: 'content',
                        name: "no",
                        label: "样品编号",
                        label_show: true,
                        label_width: "140px",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "name",
                        label: "样品名称",
                        label_show: true,
                        label_width: "140px",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "factory_id",
                        label: '工厂',
                        type: 'ComponentsInputSelect',
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
                        type: 'ComponentsInputReQuery'
                    },
                ]
            }]
        },
        {
            modelName: 'content',
            title: "样品管理",
            type: 'AssemblyContent',
            components: [
                // {modelName:'content',name:"company_name",label:"进出口公司",type: 'ComponentsInput'},
                {
                    modelName: 'content',
                    name: "no",
                    label: "样品编号",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "name",
                    label: "样品名称",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "source",
                    label: "样品来源",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "arrival_time",
                    label: "到样时间",
                    type: 'ComponentsInputDay'
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
                    label: "打样工厂",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "inspector_name",
                    label: "检验人员",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "inspector_time",
                    label: "检验时间",
                    type: 'ComponentsInputDay'
                },
                // {modelName:'content',name:"photo",label:"样品图",type: 'ComponentsInput'},
                {
                    modelName: 'content',
                    name: "state",
                    label: "质检状态",
                    type: 'ComponentsInput'
                },
            ],
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
                    }],
                },
                {
                    label: "检验",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'inspect',
                            title: "检验"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "inspect"
                        }],
                        "row": [{
                            "state": "待检验"
                        }, {
                            "state": "检验完成"
                        }, {
                            "state": "修改/重做"
                        }, ]
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
                            name: "inspect"
                        }],
                        "row": [{
                            "state": "检验完成"
                        }]
                    }]
                },
                {
                    label: "审核",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'examine',
                            title: "审核"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "apply"
                        }],
                        "row": [{
                            "state": "待审核"
                        }]
                    }],
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
                            name: "inspect"
                        }, {
                            name: "apply"
                        }, {
                            name: "edit"
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
                {
                    label: "删除",
                    click: function (data: any) {
                        utils.getStore().openDialog({
                            name: 'delete',
                            title: "删除"
                        })
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "delete"
                        }]
                    }]
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
            name: "edit",
            type: 'DialogEdit',
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "name",
                        label: "样品名称",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入样品名称"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "no",
                        label: "样品编号",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入样品编号"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "supplier_id",
                        label: "供应商",
                        type: 'ComponentsInputSelect',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择供应商"
                        }],
                        ajax_url: "queryBySupplier",
                        props_label: "name",
                        props_value: "id"
                    },
                    {
                        modelName: 'content',
                        name: "factory_id",
                        label: '打样工厂',
                        type: 'ComponentsInputSelect',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择打样工厂"
                        }],
                        ajax_url: "queryByFactory",
                        props_label: "name",
                        props_value: "id"
                    },
                    {
                        modelName: 'content',
                        name: "source",
                        label: '样品来源',
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入样品来源"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "inspector_id",
                        label: '检验人员',
                        type: 'ComponentsInputSelect',
                        ajax_url: "queryByInspector",
                        props_label: "ui_name",
                        props_value: "id",
                        ajax_params: [{
                            type: "text",
                            name: "r_name",
                            value: "QA人员"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "arrival_time",
                        label: '到样时间',
                        type: 'ComponentsInputDay',
                        day_auto: true
                    },
                    {
                        modelName: 'content',
                        name: "inspector_time",
                        label: '检验时间',
                        type: 'ComponentsInputDay'
                    },
                    {
                        modelName: 'content',
                        name: "photo",
                        label: '产品图片',
                        type: 'ComponentsInputUploadImage',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入图片"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: 'id',
                        label: 'id',
                        type: 'ComponentsInputHidden'
                    },
                ]
            }, ]
        },
        // {
        //     modelName: 'dialog',
        //     name: "apply",
        //     type: 'DialogEdit',
        //     title: '申请',
        //     msg: '是否确认提交审核申请？',
        //     valueModel: "其他",
        //     tableName: "content",
        //     apiName_save: "apply",
        // },
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
                            value: 1
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
                                        "type":1
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
        {
            modelName: 'dialog',
            name: "examine",
            type: 'DialogEdit',
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
            name: "detail",
            type: 'DialogEdit',
            dialog_width: "80%",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                label: "审核详情",
                name: "base8",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        components: [{
                                modelName: 'content',
                                name: "name",
                                label: "样品名称",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "no",
                                label: "样品编号",
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
                                label: '打样工厂',
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "source",
                                label: '样品来源',
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "ui_name",
                                label: '检验人员',
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "arrival_time",
                                label: '到样时间',
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "inspector_time",
                                label: '检验时间',
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "photo",
                                label: '产品图',
                                type: 'ComponentsInputImage'
                            },
                            {
                                modelName: 'content',
                                name: "supplier_id",
                                label: "supplier_id",
                                type: 'ComponentsInputHidden'
                            },
                            {
                                modelName: 'content',
                                name: "factory_id",
                                label: 'factory_id',
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
            name: "inspect",
            type: 'DialogEdit',
            dialog_width: "80%",
            system_save_id: "system_save_id",
            save_close: false,
            apiName_save: "inspect",
            components: [{
                    modelName: 'from',
                    type: 'AssemblyFrom',
                    components: [{
                            modelName: 'content',
                            name: "name",
                            label: "样品名称",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "no",
                            label: "样品编号",
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
                            label: '打样工厂',
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "source",
                            label: '样品来源',
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "ui_name",
                            label: '检验人员',
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "arrival_time",
                            label: '到样时间',
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "inspector_time",
                            label: '检验时间',
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "photo",
                            label: '产品图',
                            type: 'ComponentsInputImage'
                        },
                        {
                            modelName: 'content',
                            name: "supplier_id",
                            label: "supplier_id",
                            type: 'ComponentsInputHidden'
                        },
                        {
                            modelName: 'content',
                            name: "factory_id",
                            label: 'factory_id',
                            type: 'ComponentsInputHidden'
                        },
                        {
                            modelName: 'content',
                            name: 'id',
                            label: 'id',
                            type: 'ComponentsInputHidden',
                            system_id: "system_save_id"
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "包装检验",
                    name: "base2",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            name: '1',
                            activeNames: ['1'],
                            label: "判断是否邮购包装",
                            components: [{
                                    modelName: 'content',
                                    name: "wgjy_yg_bz",
                                    label: "邮购包装",
                                    system_id: 'system_yg',
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        name: "邮购包装",
                                        value: "邮购包装"
                                    }, {
                                        name: "非邮购包装",
                                        value: "非邮购包装"
                                    }]
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_yg_zp",
                                    label: "包装照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "外箱尺寸和毛重量",
                            components: [{
                                    modelName: 'content',
                                    name: "gross_weight",
                                    label: "毛重量",
                                    type: 'ComponentsInput',
                                    unit: 'KG',
                                    system_id: 'system_mzl',
                                    associated_notice: ['system_yq'],
                                },
                                {
                                    modelName: 'content',
                                    label: "",
                                    type: 'ComponentsText',
                                    system_id: 'system_yq',
                                    associated: function () {
                                        let system_yg = utils.getPage().getComponents({
                                            system_id: 'system_yg'
                                        })
                                        let system_yq = utils.getPage().getComponents({
                                            system_id: 'system_yq'
                                        })
                                        let system_mzl = utils.getPage().getComponents({
                                            system_id: 'system_mzl'
                                        })
                                        if (system_yg.value == "邮购包装") {
                                            if (system_mzl.value > 30) {
                                                system_yq.value = '已超出快递要求'
                                            } else {
                                                system_yq.value = ''
                                            }
                                        }
                                    }
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_c",
                                    label: "长",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                    system_id: 'system_c',
                                    associated_notice: ['system_gg'],
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_k",
                                    label: "宽",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                    system_id: 'system_k',
                                    associated_notice: ['system_gg'],
                                },
                                {
                                    modelName: 'content',
                                    name: "express_day",
                                    label: "快递周长",
                                    type: 'ComponentsInputHidden',
                                    system_id: 'system_zc'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_g",
                                    label: "高",
                                    type: 'ComponentsInput',
                                    unit: 'CM',
                                    system_id: 'system_g',
                                    associated_notice: ['system_gg'],
                                },
                                {
                                    modelName: 'content',
                                    label: "",
                                    type: 'ComponentsText',
                                    system_id: 'system_gg',
                                    associated: function () {
                                        let system_gg = utils.getPage().getComponents({
                                            system_id: 'system_gg'
                                        })
                                        let system_zc = utils.getPage().getComponents({
                                            system_id: 'system_zc'
                                        })
                                        let system_c = parseFloat(utils.getPage().getComponents({
                                            system_id: 'system_c'
                                        }).value)
                                        let system_k = parseFloat(utils.getPage().getComponents({
                                            system_id: 'system_k'
                                        }).value)
                                        let system_g = parseFloat(utils.getPage().getComponents({
                                            system_id: 'system_g'
                                        }).value)
                                        let t = 0
                                        if (system_c > system_k) {
                                            t = system_c;
                                            system_c = system_k;
                                            system_k = t
                                        }
                                        if (system_c > system_g) {
                                            t = system_c;
                                            system_c = system_g;
                                            system_g = t;
                                        }
                                        if (system_k > system_g) {
                                            t = system_k;
                                            system_k = system_g;
                                            system_g = t;
                                        }
                                        let system_yg = utils.getPage().getComponents({
                                            system_id: 'system_yg'
                                        })
                                        system_zc.value = system_g + (system_c + system_k) * 2
                                        if (system_yg.value == "邮购包装") {
                                            console.log(system_g + (system_c + system_k) * 2)
                                            if (system_g + (system_c + system_k) * 2 > 300) {
                                                system_gg.value = '已超出规格'
                                            } else {
                                                system_gg.value = ''
                                            }
                                        }
                                    }
                                },
                                {
                                    modelName: 'content',
                                    name: "gross_weight_zp",
                                    label: "毛重量照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_c_zp",
                                    label: "长照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_k_zp",
                                    label: "宽照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_g_zp",
                                    label: "高照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "摔箱测试 （仅邮购包装）",
                            components: [{
                                    modelName: 'content',
                                    name: "wgjy_sx_jg",
                                    label: "摔箱结果",
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
                                    name: "wgjy_sx_m_zp",
                                    label: "照片（面）",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_sx_b_zp",
                                    label: "照片（边）",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_sx_j_zp",
                                    label: "照片（角）",
                                    type: 'ComponentsInputUploadImage'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "内包装步骤",
                            components: [{
                                    modelName: 'content',
                                    name: "wgjy_nbz_bz",
                                    label: "步骤检验结果",
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
                                    name: "wgjy_nbz_zp",
                                    label: "步骤检验照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_bz",
                                    label: "检验备注",
                                    type: 'ComponentsInputTextarea'
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
                            label: "部件集合图",
                            components: [{
                                    modelName: 'content',
                                    name: "bjjy_jht_zfclzp",
                                    label: "主副材料照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "bjjy_jhtwjpjzp",
                                    label: "五金配件照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "零部件检验清单",
                            components: [{
                                    modelName: 'content',
                                    name: "bjjy_qd_zp",
                                    label: "手录单照片（备注：零件必须测量，部件选择测量）",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "bjjy_bz",
                                    label: "检验备注",
                                    type: 'ComponentsInputTextarea'
                                },
                            ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "组装外观检验",
                    name: "base4",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "组装照片",
                            components: [{
                                    modelName: 'content',
                                    name: "zzwg_zz_zst",
                                    label: "正视图",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_45",
                                    label: "正侧 45度",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_cm",
                                    label: "侧面",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_bm",
                                    label: "背面",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_db",
                                    label: "底部",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_dkxg",
                                    label: "打开效果",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_xj",
                                    label: "产品细节展示",
                                    type: 'ComponentsInputUploadImage'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "组装问题",
                            components: [{
                                modelName: 'content',
                                label: "",
                                name: 'zz_problems',
                                type: 'ComponentsInputTable',
                                label_show: true,
                                components: [{
                                        modelName: 'template',
                                        name: "type",
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
                                        name: "description",
                                        label: "组装问题描述",
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
                            label: "产品尺寸和净重量",
                            components: [{
                                    modelName: 'content',
                                    name: "net_weight",
                                    label: "净重量",
                                    type: 'ComponentsInput',
                                    unit: "KG"
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_c",
                                    label: "长",
                                    type: 'ComponentsInput',
                                    unit: "CM"
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_k",
                                    label: "宽",
                                    type: 'ComponentsInput',
                                    unit: "CM"
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_g",
                                    label: "高",
                                    type: 'ComponentsInput',
                                    unit: "CM"
                                },
                                {
                                    modelName: 'content',
                                    name: "net_weight_zp",
                                    label: "净重量照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_c_zp",
                                    label: "长照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_k_zp",
                                    label: "宽照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_g_zp",
                                    label: "高照片",
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
                                    name: "size_description",
                                    label: "尺寸描述",
                                    type: 'ComponentsInputTextarea'
                                },
                                {
                                    modelName: 'content',
                                    name: "weight_description",
                                    label: "重量描述",
                                    type: 'ComponentsInputTextarea'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "标识检验",
                            components: [{
                                    modelName: 'content',
                                    name: "zzwg_ps_zp",
                                    label: "标识检验",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_bz",
                                    label: "检验备注",
                                    type: 'ComponentsInputTextarea'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "材料说明",
                            components: [{
                                modelName: 'content',
                                label: "",
                                name: 'material_description',
                                type: 'ComponentsInputTable',
                                label_show: true,
                                components: [{
                                        modelName: 'template',
                                        name: "zzwg_cl_mc",
                                        label: "材料名称",
                                        type: 'ComponentsInput',
                                        // ajax_url:"queryMaterialLevelList",props_label:"name",props_value:"id",
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请选择材料名称"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "zzwg_cl_gy",
                                        label: "表面工艺说明",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "zzwg_cl_wz",
                                        label: "使用位置",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
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
                    label: "功能及测试",
                    name: "base5",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "功能及整体检验",
                            components: [{
                                    modelName: 'content',
                                    name: "function_pictures",
                                    label: "验收照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "gncs_bz",
                                    label: "检验备注",
                                    type: 'ComponentsInputTextarea'
                                },
                                {
                                    modelName: 'content',
                                    label: "",
                                    name: 'problems',
                                    type: 'ComponentsInputTable',
                                    label_show: true,
                                    components: [{
                                            modelName: 'template',
                                            name: "type",
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
                                            name: "id",
                                            label: "id",
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "测试",
                            components: [{
                                modelName: 'content',
                                name: "test_data",
                                label: "",
                                type: 'ComponentsInputTable',
                                label_show: true,
                                components: [{
                                        modelName: 'template',
                                        name: "name",
                                        label: "测试项目",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "test",
                                        props_label: "item",
                                        props_value: "item",
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请选择测试项目"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "programme",
                                        label: "测试方案",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
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
                                        name: "photo",
                                        label: "测试照片",
                                        type: 'ComponentsInputUploadImage'
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
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    label: "检验结果",
                    name: "base6",
                    components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "jyjg_zj",
                                label: "样品综合评价",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "jyjg_jg",
                                label: "判定结果",
                                type: 'ComponentsInputSelect',
                                options: [{
                                    label: "合格",
                                    value: "合格"
                                }, {
                                    label: "不合格",
                                    value: "不合格"
                                }],
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择判定结果"
                                }]
                            },

                        ]
                    }, {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "jyjg_qfy",
                                label: "签封样",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "jyjg_qfry",
                                label: "签封人员",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "jyjg_qfrq",
                                label: "签封日期",
                                type: 'ComponentsInputDay'
                            },
                            {
                                modelName: 'content',
                                name: "jyjg_qfhh",
                                label: "签封货号",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "jyjg_qfzp",
                                label: "签样照片",
                                type: 'ComponentsInputUploadImage'
                            },
                        ]
                    }, ]
                },
            ]
        },
        {
            modelName: 'dialog',
            name: "read",
            type: 'DialogEdit',
            dialog_width: "80%",
            save_close: false,
            apiName_save: "inspect",
            components: [{
                    modelName: 'from',
                    type: 'AssemblyFrom',
                    components: [{
                            modelName: 'content',
                            name: "name",
                            label: "样品名称",
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "no",
                            label: "样品编号",
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
                            label: '打样工厂',
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "source",
                            label: '样品来源',
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "ui_name",
                            label: '检验人员',
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "arrival_time",
                            label: '到样时间',
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "inspector_time",
                            label: '检验时间',
                            type: 'ComponentsText'
                        },
                        {
                            modelName: 'content',
                            name: "photo",
                            label: '产品图',
                            type: 'ComponentsInputImage'
                        },
                        {
                            modelName: 'content',
                            name: "supplier_id",
                            label: "supplier_id",
                            type: 'ComponentsInputHidden'
                        },
                        {
                            modelName: 'content',
                            name: "factory_id",
                            label: 'factory_id',
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
                    label: "包装检验",
                    name: "base2",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            name: '1',
                            activeNames: ['1'],
                            label: "判断是否邮购包装",
                            components: [{
                                    modelName: 'content',
                                    name: "wgjy_yg_bz",
                                    label: "邮购包装",
                                    type: 'ComponentsInputSelect',
                                    options: [{
                                        name: "邮购包装",
                                        value: "邮购包装"
                                    }, {
                                        name: "非邮购包装",
                                        value: "非邮购包装"
                                    }]
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_yg_zp",
                                    label: "包装照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "外箱尺寸和毛重量",
                            components: [{
                                    modelName: 'content',
                                    name: "gross_weight",
                                    label: "毛重量",
                                    type: 'ComponentsInput',
                                    unit: 'KG'
                                },
                                {
                                    modelName: 'content',
                                    label: "",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_c",
                                    label: "长",
                                    type: 'ComponentsInput',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_k",
                                    label: "宽",
                                    type: 'ComponentsInput',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "express_day",
                                    label: "快递周长",
                                    type: 'ComponentsInputHidden'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_g",
                                    label: "高",
                                    type: 'ComponentsInput',
                                    unit: 'CM'
                                },
                                {
                                    modelName: 'content',
                                    name: "gross_weight_zp",
                                    label: "毛重量照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_c_zp",
                                    label: "长照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_k_zp",
                                    label: "宽照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_cc_g_zp",
                                    label: "高照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "摔箱测试 （仅邮购包装）",
                            components: [{
                                    modelName: 'content',
                                    name: "wgjy_sx_jg",
                                    label: "摔箱结果",
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
                                    name: "wgjy_sx_m_zp",
                                    label: "照片（面）",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_sx_b_zp",
                                    label: "照片（边）",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_sx_j_zp",
                                    label: "照片（角）",
                                    type: 'ComponentsInputUploadImage'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "内包装步骤",
                            components: [{
                                    modelName: 'content',
                                    name: "wgjy_nbz_bz",
                                    label: "步骤检验结果",
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
                                    name: "wgjy_nbz_zp",
                                    label: "步骤检验照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "wgjy_bz",
                                    label: "检验备注",
                                    type: 'ComponentsInputTextarea'
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
                            label: "部件集合图",
                            components: [{
                                    modelName: 'content',
                                    name: "bjjy_jht_zfclzp",
                                    label: "主副材料照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "bjjy_jhtwjpjzp",
                                    label: "五金配件照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "零部件检验清单",
                            components: [{
                                    modelName: 'content',
                                    name: "bjjy_qd_zp",
                                    label: "手录单照片（备注：零件必须测量，部件选择测量）",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "bjjy_bz",
                                    label: "检验备注",
                                    type: 'ComponentsInputTextarea'
                                },
                            ]
                        },
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "组装外观检验",
                    name: "base4",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "组装照片",
                            components: [{
                                    modelName: 'content',
                                    name: "zzwg_zz_zst",
                                    label: "正视图",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_45",
                                    label: "正侧 45度",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_cm",
                                    label: "侧面",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_bm",
                                    label: "背面",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_db",
                                    label: "底部",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_dkxg",
                                    label: "打开效果",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_zz_xj",
                                    label: "产品细节展示",
                                    type: 'ComponentsInputUploadImage'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "组装问题",
                            components: [{
                                modelName: 'content',
                                label: "",
                                name: 'zz_problems',
                                type: 'ComponentsInputTable',
                                label_show: true,
                                components: [{
                                        modelName: 'template',
                                        name: "type",
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
                                        name: "description",
                                        label: "组装问题描述",
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
                            label: "产品尺寸和净重量",
                            components: [{
                                    modelName: 'content',
                                    name: "net_weight",
                                    label: "净重量",
                                    type: 'ComponentsInput',
                                    unit: "KG"
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_c",
                                    label: "长",
                                    type: 'ComponentsInput',
                                    unit: "CM"
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_k",
                                    label: "宽",
                                    type: 'ComponentsInput',
                                    unit: "CM"
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_g",
                                    label: "高",
                                    type: 'ComponentsInput',
                                    unit: "CM"
                                },
                                {
                                    modelName: 'content',
                                    name: "net_weight_zp",
                                    label: "净重量照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_c_zp",
                                    label: "长照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_k_zp",
                                    label: "宽照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_cc_g_zp",
                                    label: "高照片",
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
                                    name: "size_description",
                                    label: "尺寸描述",
                                    type: 'ComponentsInputTextarea'
                                },
                                {
                                    modelName: 'content',
                                    name: "weight_description",
                                    label: "重量描述",
                                    type: 'ComponentsInputTextarea'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "标识检验",
                            components: [{
                                    modelName: 'content',
                                    name: "zzwg_ps_zp",
                                    label: "标识检验",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "zzwg_bz",
                                    label: "检验备注",
                                    type: 'ComponentsInputTextarea'
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "材料说明",
                            components: [{
                                modelName: 'content',
                                label: "",
                                name: 'material_description',
                                type: 'ComponentsInputTable',
                                label_show: true,
                                components: [{
                                        modelName: 'template',
                                        name: "zzwg_cl_mc",
                                        label: "材料名称",
                                        type: 'ComponentsInput',
                                        // ajax_url:"queryMaterialLevelList",props_label:"name",props_value:"id",
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请选择材料名称"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "zzwg_cl_gy",
                                        label: "表面工艺说明",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "zzwg_cl_wz",
                                        label: "使用位置",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
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
                    label: "功能及测试",
                    name: "base5",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "功能及整体检验",
                            components: [{
                                    modelName: 'content',
                                    name: "function_pictures",
                                    label: "验收照片",
                                    type: 'ComponentsInputUploadImage'
                                },
                                {
                                    modelName: 'content',
                                    name: "gncs_bz",
                                    label: "检验备注",
                                    type: 'ComponentsInputTextarea'
                                },
                                {
                                    modelName: 'content',
                                    label: "",
                                    name: 'problems',
                                    type: 'ComponentsInputTable',
                                    label_show: true,
                                    components: [{
                                            modelName: 'template',
                                            name: "type",
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
                                            name: "id",
                                            label: "id",
                                            type: 'ComponentsInputHidden'
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "测试",
                            components: [{
                                modelName: 'content',
                                name: "test_data",
                                label: "",
                                type: 'ComponentsInputTable',
                                label_show: true,
                                components: [{
                                        modelName: 'template',
                                        name: "name",
                                        label: "测试项目",
                                        type: 'ComponentsInputSelect',
                                        ajax_url: "test",
                                        props_label: "item",
                                        props_value: "item",
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请选择测试项目"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "programme",
                                        label: "测试方案",
                                        style: {
                                            width: "100%"
                                        },
                                        type: 'ComponentsInputTextarea'
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
                                        name: "photo",
                                        label: "测试照片",
                                        type: 'ComponentsInputUploadImage'
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
                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    label: "检验结果",
                    name: "base6",
                    components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "jyjg_zj",
                                label: "样品综合评价",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'content',
                                name: "jyjg_jg",
                                label: "判定结果",
                                type: 'ComponentsInputSelect',
                                options: [{
                                    label: "合格",
                                    value: "合格"
                                }, {
                                    label: "不合格",
                                    value: "不合格"
                                }],
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择判定结果"
                                }]
                            },

                        ]
                    }, {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "",
                        components: [{
                                modelName: 'content',
                                name: "jyjg_qfy",
                                label: "签封样",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "jyjg_qfry",
                                label: "签封人员",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "jyjg_qfrq",
                                label: "签封日期",
                                type: 'ComponentsInputDay'
                            },
                            {
                                modelName: 'content',
                                name: "jyjg_qfhh",
                                label: "签封货号",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "jyjg_qfzp",
                                label: "签样照片",
                                type: 'ComponentsInputUploadImage'
                            },
                        ]
                    }, ]
                },
            ],
            toolBtn: []
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
    ]
}
export default myModule