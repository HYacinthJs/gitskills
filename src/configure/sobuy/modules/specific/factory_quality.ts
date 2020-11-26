import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'factory_quality',
    version: 'PageNormal',
    api: {
        query: "/factoryreport/query",
        queryByAll: "/factoryreport/queryByAll",
        queryById: "/factoryreport/queryById",
        queryById2: "/factoryreport/queryById2",
        save: "/factoryreport/save",
        delete: "/factoryreport/delete",
        queryByFactory: "/supplier/queryByFactory",
        reportWord: "/factoryreport/reportWord",
        export1: "/factoryreport/reportPdf",
        queryAll: "/factoryreport/queryAll"
    },

    components: [
        // {
        //     modelName:'content', type: 'AssemblyQuery',
        //     components:[
        //         {modelName:'query',type: 'AssemblyFrom',components:[
        //                 // {modelName:'content',name:"company_id",label:"公司名称",type: 'ComponentsInputSelect',
        //                 //     jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
        //                 {modelName: 'content', name: "number_name", label: "货号", type: 'ComponentsInput'},
        //                 {modelName:'content',name:"factory_id", label: '生产工厂',type:'ComponentsInputSelect',
        //                     ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
        //                 {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',
        //                     ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
        //                 {modelName:'content',name:"complaint_day",label:"月份",type: 'ComponentsInputMouth'},
        //                 {modelName:'content',type: 'ComponentsInputReQuery'},
        //             ]}
        //     ],},
        {
            modelName: 'content',
            type: 'AssemblyContent',
            title: "质量报告模板",
            components: [{
                    modelName: 'content',
                    name: "name",
                    label: "模板名称",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "pf_sjly",
                    label: "评分数据来源",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "pf_sjsm",
                    label: "评分数据说明",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "ts_sjly",
                    label: "投诉数据来源",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "ts_sjsm",
                    label: "投诉数据说明",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "tslmb",
                    label: "投诉率目标",
                    type: 'ComponentsInput'
                },
                /*{modelName: 'content', name: "zljy_sjly", label: "质量检验情况数据来源", type: 'ComponentsInput'},
                {modelName: 'content', name: "zljy_sjsm", label: "质量检验数据说明", type: 'ComponentsInput'},
                {modelName: 'content', name: "zljz_sjly", label: "质量纠正预防数据来源", type: 'ComponentsInput'},
                {modelName: 'content', name: "zljz_sjsm", label: "质量纠正预防数据说明", type: 'ComponentsInput'},*/
                {
                    modelName: 'content',
                    name: "ztpj1",
                    label: "整体评价一",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "ztpj2",
                    label: "整体评价二",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "ztpj3",
                    label: "整体评价三",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "luokuan",
                    label: "落款",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "num",
                    label: "工厂总数",
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
                    label: "年报",
                    show: true,
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "download"
                        }]
                    }],
                    type: "primary",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'word1',
                            title: "年报"
                        })
                        edit.queryTwo("年报")
                    }
                },
                {
                    label: "季报",
                    show: true,
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "download"
                        }]
                    }],
                    type: "primary",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'word2',
                            title: "季报"
                        })
                        edit.queryTwo("季报")
                    }
                },
                {
                    label: "月报",
                    show: true,
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "download"
                        }]
                    }],
                    type: "primary",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'word3',
                            title: "月报"
                        })
                        edit.queryTwo("月报")
                    }
                },
            ],
        },

        {
            modelName: 'dialog',
            name: "export1",
            apiName_download: "reportWord",
            type: 'DialogDownload',
            param_type: "传参下载",
            downloadType: "查看",
            queryName_d: "system_word1"
        },
        {
            modelName: 'dialog',
            name: "export2",
            apiName_download: "reportWord",
            type: 'DialogDownload',
            param_type: "传参下载",
            downloadType: "查看",
            queryName_d: "system_word2"
        },
        {
            modelName: 'dialog',
            name: "export3",
            apiName_download: "reportWord",
            type: 'DialogDownload',
            param_type: "传参下载",
            downloadType: "查看",
            queryName_d: "system_word3"
        },

        {
            modelName: 'dialog',
            name: "word1",
            type: 'DialogEdit',
            system_id: "system_word1",
            apiName_queryById: "queryById2",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "id",
                        label: "模板名称",
                        type: 'ComponentsInputSelect',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择模板"
                        }],
                        ajax_url: "queryAll",
                        props_label: "name",
                        props_value: "id"
                    },
                    {
                        modelName: 'content',
                        name: "date1",
                        label: "年份",
                        type: 'ComponentsInputYear',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择年份"
                        }],
                        system_id: "system_date1",
                        associated_notice: ["system_date2"],
                    },
                    {
                        modelName: 'content',
                        name: "date2",
                        label: "年份",
                        type: 'ComponentsInputHidden',
                        system_id: "system_date2",
                        associated: function () {
                            let system_date1 = utils.getPage().getComponents({
                                system_id: 'system_date1'
                            })
                            let system_date2 = utils.getPage().getComponents({
                                system_id: 'system_date2'
                            })
                            let system_type = utils.getPage().getComponents({
                                system_id: 'system_type'
                            })
                            system_type.value = '年报'
                            if (system_date1.value) {
                                system_date2.value = system_date1.value
                            } else {
                                system_date2.value = ''
                            }
                        }
                    },
                    {
                        modelName: 'content',
                        name: "factory_id",
                        label: '生产工厂',
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
                        name: "type",
                        label: "类型",
                        system_id: "system_type",
                        type: 'ComponentsInputHidden'
                    },
                ]
            }, ],
            toolBtn: [{
                    label: "报告预览",
                    type: "primary",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "preview"
                        }],
                    }],
                    click: function (data: any) {
                        let param = {}
                        let query = utils.getPage().getComponents({
                            system_id: "system_word1"
                        })
                        if (utils.isNotNull(query)) {
                            param = query.getEditValue()
                        }
                        param['wx'] = 1
                        let callback = function () {
                            let system_id = utils.my_post({
                                apiName: 'export1',
                                params: param,
                                ok: (json: any, dataAll: any) => {
                                    window.open(json.url)
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("预览出错")
                                }
                            })
                        }
                        utils.validator({
                            callback,
                            system_id: "system_word1"
                        })
                    },
                },
                {
                    label: "导出报告",
                    type: "primary",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "download"
                        }]
                    }],
                    click: function (data: any) {
                        let that = this
                        let callback = function () {
                            utils.getStore().openDialog({
                                name: 'export1',
                                title: "导出报告"
                            })
                        }
                        utils.validator({
                            callback,
                            system_id: "system_word1"
                        })
                    }
                },
            ]
        },
        {
            modelName: 'dialog',
            name: "word2",
            type: 'DialogEdit',
            system_id: "system_word2",
            apiName_queryById: "queryById2",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "id",
                        label: "模板名称",
                        type: 'ComponentsInputSelect',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择模板"
                        }],
                        ajax_url: "queryAll",
                        props_label: "name",
                        props_value: "id"
                    },
                    {
                        modelName: 'content',
                        name: "date1",
                        label: "年份",
                        type: 'ComponentsInputYear',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择年份"
                        }],
                        system_id: "system_date1",
                        associated_notice: ["system_type1"],
                    },
                    {
                        modelName: 'content',
                        name: "date2",
                        label: "季度",
                        type: 'ComponentsInputSelect',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择季度"
                        }],
                        options: [{
                            name: "第一季度",
                            value: "第一季度"
                        }, {
                            name: "第二季度",
                            value: "第二季度"
                        }, {
                            name: "第三季度",
                            value: "第三季度"
                        }, {
                            name: "第四季度",
                            value: "第四季度"
                        }],
                    },
                    {
                        modelName: 'content',
                        name: "factory_id",
                        label: '生产工厂',
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
                        name: "type",
                        label: "类型",
                        system_id: "system_type1",
                        type: 'ComponentsInputHidden',
                        associated: function () {
                            let system_type1 = utils.getPage().getComponents({
                                system_id: 'system_type1'
                            })
                            system_type1.value = '季报'
                        }
                    },
                ]
            }, ],
            toolBtn: [{
                    label: "报告预览",
                    type: "primary",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "preview"
                        }],
                    }],
                    click: function (data: any) {
                        let param = {}
                        let query = utils.getPage().getComponents({
                            system_id: "system_word2"
                        })
                        if (utils.isNotNull(query)) {
                            param = query.getEditValue()
                        }
                        param['wx'] = 1
                        let callback = function () {
                            let system_id = utils.my_post({
                                apiName: 'export1',
                                params: param,
                                ok: (json: any, dataAll: any) => {
                                    window.open(json.url)
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("预览出错")
                                }
                            })
                        }
                        utils.validator({
                            callback,
                            system_id: "system_word2"
                        })
                    },
                },
                {
                    label: "导出报告",
                    type: "primary",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "download"
                        }]
                    }],
                    click: function (data: any) {
                        let that = this
                        let callback = function () {
                            utils.getStore().openDialog({
                                name: 'export2',
                                title: "导出报告"
                            })
                        }
                        utils.validator({
                            callback,
                            system_id: "system_word2"
                        })
                    }
                },
            ]
        },
        {
            modelName: 'dialog',
            name: "word3",
            type: 'DialogEdit',
            system_id: "system_word3",
            apiName_queryById: "queryById2",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "id",
                        label: "模板名称",
                        type: 'ComponentsInputSelect',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择模板"
                        }],
                        ajax_url: "queryAll",
                        props_label: "name",
                        props_value: "id"
                    },
                    {
                        modelName: 'content',
                        name: "date1",
                        label: "年份",
                        type: 'ComponentsInputYear',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择年份"
                        }],
                        system_id: "system_date1",
                        associated_notice: ["system_type2"],
                    },
                    {
                        modelName: 'content',
                        name: "date2",
                        label: "月份",
                        type: 'ComponentsInputSelect',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择月份"
                        }],
                        options: [{
                                name: "一月",
                                value: "一月"
                            }, {
                                name: "二月",
                                value: "二月"
                            }, {
                                name: "三月",
                                value: "三月"
                            }, {
                                name: "四月",
                                value: "四月"
                            },
                            {
                                name: "五月",
                                value: "五月"
                            }, {
                                name: "六月",
                                value: "六月"
                            }, {
                                name: "七月",
                                value: "七月"
                            }, {
                                name: "八月",
                                value: "八月"
                            },
                            {
                                name: "九月",
                                value: "九月"
                            }, {
                                name: "十月",
                                value: "十月"
                            }, {
                                name: "十一月",
                                value: "十一月"
                            }, {
                                name: "十二月",
                                value: "十二月"
                            }
                        ],
                    },
                    {
                        modelName: 'content',
                        name: "factory_id",
                        label: '生产工厂',
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
                        name: "type",
                        label: "类型",
                        system_id: "system_type2",
                        type: 'ComponentsInputHidden',
                        associated: function () {
                            let system_type2 = utils.getPage().getComponents({
                                system_id: 'system_type2'
                            })
                            system_type2.value = '月报'
                        }
                    },
                ]
            }, ],
            toolBtn: [{
                    label: "报告预览",
                    type: "primary",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "preview"
                        }],
                    }],
                    click: function (data: any) {
                        let param = {}
                        let query = utils.getPage().getComponents({
                            system_id: "system_word3"
                        })
                        if (utils.isNotNull(query)) {
                            param = query.getEditValue()
                        }
                        param['wx'] = 1
                        let callback = function () {
                            let system_id = utils.my_post({
                                apiName: 'export1',
                                params: param,
                                ok: (json: any, dataAll: any) => {
                                    window.open(json.url)
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("预览出错")
                                }
                            })
                        }
                        utils.validator({
                            callback,
                            system_id: "system_word3"
                        })
                    },
                },
                {
                    label: "导出报告",
                    type: "primary",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "download"
                        }]
                    }],
                    click: function (data: any) {
                        let that = this
                        let callback = function () {
                            utils.getStore().openDialog({
                                name: 'export3',
                                title: "导出报告"
                            })
                        }
                        utils.validator({
                            callback,
                            system_id: "system_word3"
                        })
                    }
                },
            ]
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
                        label: "模板名称",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入模板名称"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "pf_sjly",
                        label: "评分数据来源",
                        type: 'ComponentsInputTextarea',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入评分数据来源"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "pf_sjsm",
                        label: "评分数据说明",
                        type: 'ComponentsInput',
                        unit: '(x)',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入评分数据说明"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "pf_sjsm2",
                        label: " ",
                        type: 'ComponentsInputTextarea',
                        rules: [{
                            validator: utils.my_required,
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "ts_sjly",
                        label: "投诉数据来源",
                        type: 'ComponentsInputTextarea',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入投诉数据来源"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "ts_sjsm",
                        label: "投诉数据说明",
                        type: 'ComponentsInputTextarea',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入投诉数据说明"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "tslmb",
                        label: "投诉率目标",
                        type: 'ComponentsInput',
                        unit: '%',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入投诉率目标"
                        }]
                    },
                    /*{modelName: 'content', name: "zljy_sjly", label: "质量检验情况数据来源", type: 'ComponentsInputTextarea'},
                    {modelName: 'content', name: "zljy_sjsm", label: "质量检验数据说明", type: 'ComponentsInputTextarea'},
                    {modelName: 'content', name: "zljz_sjly", label: "质量纠正预防数据来源", type: 'ComponentsInputTextarea'},
                    {modelName: 'content', name: "zljz_sjsm", label: "质量纠正预防数据说明", type: 'ComponentsInputTextarea'},*/
                    {
                        modelName: 'content',
                        name: "ztpj1",
                        label: "整体评价一",
                        type: 'ComponentsInputTextarea',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入整体评价一"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "ztpj2",
                        label: "整体评价二",
                        type: 'ComponentsInputTextarea',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入整体评价二"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "ztpj3",
                        label: "整体评价三",
                        type: 'ComponentsInputTextarea'
                    },
                    {
                        modelName: 'content',
                        name: "luokuan",
                        label: "落款",
                        type: 'ComponentsInput',
                        unit: '号',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入落款"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "num",
                        label: "工厂总数",
                        type: 'ComponentsInput',
                        unit: '个',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入工厂总数"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "id",
                        label: "id",
                        type: 'ComponentsInputHidden'
                    },
                ]
            }, ]
        },
    ]
}
export default myModule