import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'fixed_examine',
    version: 'PageNormal',
    api: {
        query: "/index/myApproval",
        queryById: "/index/myBZDesc",
        queryById2: "/index/myApprovalById",
        querySelectTree: '/problemtype/querySelectTree',
        test: "/testrequirements/queryByAll",
        queryOrder: "/number/queryOrderList",
        queryProduct: "/number/queryByAll",

        queryByIdzu: "/assemblydrawing/queryById",
        queryByIdqi: "/sealsample/queryById",
        queryByIdgo: "/processform/queryById",
        queryByIdya: "/sample/queryById",
        queryByIdyu: "/material/queryById",
        queryByIdch: "/ppsample/queryById",
        queryByIdzh: "/midtest/queryById",
        queryByIdwe: "/tailcheck/queryById",
        queryByIdfu: "/recheck/queryById",
        queryByIdda: "/bigsample/queryById",
        queryByIdji: "/qualityCorrection/queryProblemById",

        exportzu: "/assemblydrawing/toExcel",
        exportqi: "/sealsample/toExcel",
        exportgo: "/processform/toExcel",
        exportya: "/sample/toExcel",
        exportyu: "/material/toExcel",
        exportch: "/ppsample/toExcel",
        exportzh: "/midtest/toExcel",
        exportwe: "/tailcheck/toExcel",
        exportfu: "/recheck/toExcel",
        exportda: "/bigsample/toExcel",
        exportji: "/simpleQuestion/simpleQuestion",

        onlinezu: "/assemblydrawing/online",
        onlineqi: "/sealsample/online",
        onlinego: "/processform/online",
        onlineya: "/sample/online",
        onlineyu: "/material/online",
        onlinech: "/ppsample/online",
        onlinezh: "/midtest/online",
        onlinewe: "/tailcheck/online",
        onlinefu: "/recheck/online",
        onlineda: "/bigsample/online",
        onlineji: "/simpleQuestion/online",

        examineOk: "/index/approval",
        apply: "/ppsample/proposeAudit",
        export: "/ppsample/toExcel",
        export1: "/ppsample/online",
    },
    components: [{
            modelName: 'content',
            type: 'AssemblyQuery',
            components: [{
                modelName: 'query',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "type",
                        label: "类型",
                        type: 'ComponentsInputSelect',
                        options: [{
                            label: '样品',
                            value: 1
                        }, {
                            label: '工艺单',
                            value: 2
                        }, {
                            label: '组装图',
                            value: 3
                        }, {
                            label: '产前样',
                            value: 4
                        }, {
                            label: '原材料',
                            value: 5
                        }, {
                            label: '中期',
                            value: 6
                        }, {
                            label: '尾期',
                            value: 7
                        }, {
                            label: '复检',
                            value: 8
                        }, {
                            label: '大货样',
                            value: 9
                        }, {
                            label: '签封样',
                            value: 10
                        }, {
                            label: '质量纠正',
                            value: 11
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "status",
                        label: "审批状态",
                        label_width: "140px",
                        type: 'ComponentsInputSelect',
                        options: [{
                            label: '待审批',
                            value: 1
                        }, {
                            label: '已审批',
                            value: 2
                        }],
                        value_default: 1
                    },
                    {
                        modelName: 'content',
                        name: "user",
                        label: "申请人",
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
            type: 'AssemblyContent',
            selectionshow: false,
            backStyle: false,
            title: "我的审批",
            primaryKey: "type_id",
            components: [
                {
                    modelName: 'content',
                    name: "no",
                    label: "货号/编号/名称",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "strtype",
                    label: "类型",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "status",
                    label: "状态",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "ui_name",
                    label: "申请人",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "user_time",
                    label: "申请日期",
                    type: 'ComponentsInputDay'
                },
                {
                    modelName: 'content',
                    name: "approval_results",
                    label: "审批结果",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "approver_time",
                    label: "审批时间",
                    type: 'ComponentsInputDay'
                },
                {
                    modelName: 'content',
                    name: "type",
                    label: "类型id",
                    type: 'ComponentsInputHidden'
                },
            ],
            // rowClick(row: any, b: any, c: any) {
            //     if (row.row.type == "组装图" || row.row.type == "工艺单") {
            //         utils.goTo({
            //             path: '/sys_number_copy'
            //         })
            //     } else if (row.row.type == "样品") {
            //         utils.goTo({
            //             path: '/sys_sample'
            //         })
            //     } else if (row.row.type == "原材料") {
            //         utils.goTo({
            //             path: '/material'
            //         })
            //     } else if (row.row.type == "产前样") {
            //         utils.goTo({
            //             path: '/ppsample'
            //         })
            //     } else if (row.row.type == "中期") {
            //         utils.goTo({
            //             path: '/midtest'
            //         })
            //     } else if (row.row.type == "尾检") {
            //         utils.goTo({
            //             path: '/tailcheck'
            //         })
            //     } else if (row.row.type == "复检") {
            //         utils.goTo({
            //             path: '/re_examination'
            //         })
            //     } else if (row.row.type == "大货样") {
            //         utils.goTo({
            //             path: '/sys_bulksample'
            //         })
            //     }
            // },
            toolBtn: [],
            tableBtn: [{
                    label: "查看",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: "read",
                            title: "审批详情"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "query"
                        }],
                        "row": [{
                            "status": "已审批"
                        }]
                    }],
                },
                {
                    label: "查看",
                    click: function (data: any) {
                        if (data.row.strtype == "组装图") {
                            let edit = utils.getStore().openDialog({
                                name: "readzu",
                                title: "查看"
                            })
                            edit.query()
                        } else if (data.row.strtype == "签封样") {
                            let edit = utils.getStore().openDialog({
                                name: "readqi",
                                title: "查看"
                            })
                            edit.query()
                        } else if (data.row.strtype == "工艺单") {
                            let system_id =
                                utils.my_post({
                                    apiName: 'onlinego',
                                    params: {
                                        "id": data.row.type_id,
                                        "wx": 1
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        window.open(json.path)
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("预览出错")
                                    }
                                })
                        } else if (data.row.strtype == "样品") {
                            let edit = utils.getStore().openDialog({
                                name: "readya",
                                title: "查看"
                            })
                            edit.query()
                        } else if (data.row.strtype == "原材料") {
                            let edit = utils.getStore().openDialog({
                                name: "readyu",
                                title: "查看"
                            })
                            edit.query()
                        } else if (data.row.strtype == "产前样") {
                            let edit = utils.getStore().openDialog({
                                name: "readch",
                                title: "查看"
                            })
                            edit.query()
                        } else if (data.row.strtype == "中期") {
                            let edit = utils.getStore().openDialog({
                                name: "readzh",
                                title: "查看"
                            })
                            edit.query()
                        } else if (data.row.strtype == "尾检") {
                            let edit = utils.getStore().openDialog({
                                name: "readwe",
                                title: "查看"
                            })
                            edit.query()
                        } else if (data.row.strtype == "复检") {
                            let edit = utils.getStore().openDialog({
                                name: "readfu",
                                title: "查看"
                            })
                            edit.query()
                        } else if (data.row.strtype == "大货样") {
                            let edit = utils.getStore().openDialog({
                                name: "readda",
                                title: "查看"
                            })
                            edit.query()
                        } else if (data.row.strtype == "质量纠正") {
                            let edit = utils.getStore().openDialog({
                                name: "readji",
                                title: "查看"
                            })
                            edit.query()
                        }
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "query"
                        }],
                        "row": [{
                            "status": "待审批"
                        }]
                    }],
                },
                {
                    label: "审核",
                    click: function (data: any) {
                        let examine = utils.getStore().openDialog({
                            name: 'examine',
                            title: "审核"
                        })
                        examine.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "apply"
                        }],
                        "row": [{
                            "status": "待审批"
                        }]
                    }]
                },
                {
                    label: "审核详情",
                    click: function (data: any) {
                        if (data.row.strtype == "组装图") {
                            let edit = utils.getStore().openDialog({
                                name: "detailzu",
                                title: "审核详情"
                            })
                            edit.query()
                        } else if (data.row.strtype == "签封样") {
                            let edit = utils.getStore().openDialog({
                                name: "detailqi",
                                title: "审核详情"
                            })
                            edit.query()
                        } else if (data.row.strtype == "工艺单") {
                            let edit = utils.getStore().openDialog({
                                name: "detailgo",
                                title: "审核详情"
                            })
                            edit.query()
                        } else if (data.row.strtype == "样品") {
                            let edit = utils.getStore().openDialog({
                                name: "detailya",
                                title: "审核详情"
                            })
                            edit.query()
                        } else if (data.row.strtype == "原材料") {
                            let edit = utils.getStore().openDialog({
                                name: "detailyu",
                                title: "审核详情"
                            })
                            edit.query()
                        } else if (data.row.strtype == "产前样") {
                            let edit = utils.getStore().openDialog({
                                name: "detailch",
                                title: "审核详情"
                            })
                            edit.query()
                        } else if (data.row.strtype == "中期") {
                            let edit = utils.getStore().openDialog({
                                name: "detailzh",
                                title: "审核详情"
                            })
                            edit.query()
                        } else if (data.row.strtype == "尾检") {
                            let edit = utils.getStore().openDialog({
                                name: "detailwe",
                                title: "审核详情"
                            })
                            edit.query()
                        } else if (data.row.strtype == "复检") {
                            let edit = utils.getStore().openDialog({
                                name: "detailfu",
                                title: "审核详情"
                            })
                            edit.query()
                        } else if (data.row.strtype == "大货样") {
                            let edit = utils.getStore().openDialog({
                                name: "detailda",
                                title: "审核详情"
                            })
                            edit.query()
                        } else if (data.row.strtype == "质量纠正") {
                            let edit = utils.getStore().openDialog({
                                name: "detailji",
                                title: "审核详情"
                            })
                            edit.query()
                        }
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "query"
                        }],
                    }],
                },
                {
                    label: "报告预览",
                    click: function (data: any) {
                        if (data.row.strtype == "样品") {
                            let system_id =
                                utils.my_post({
                                    apiName: 'onlineya',
                                    params: {
                                        "id": data.row.type_id,
                                        "wx": 1
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        window.open(json.path)
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("预览出错")
                                    }
                                })
                        } else if (data.row.strtype == "原材料") {
                            let system_id =
                                utils.my_post({
                                    apiName: 'onlineyu',
                                    params: {
                                        "id": data.row.type_id,
                                        "wx": 1
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        window.open(json.path)
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("预览出错")
                                    }
                                })
                        } else if (data.row.strtype == "产前样") {
                            let system_id =
                                utils.my_post({
                                    apiName: 'onlinech',
                                    params: {
                                        "id": data.row.type_id,
                                        "wx": 1
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        window.open(json.path)
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("预览出错")
                                    }
                                })
                        } else if (data.row.strtype == "中期") {
                            let system_id =
                                utils.my_post({
                                    apiName: 'onlinezh',
                                    params: {
                                        "id": data.row.type_id,
                                        "wx": 1
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        window.open(json.path)
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("预览出错")
                                    }
                                })
                        } else if (data.row.strtype == "尾检") {
                            let system_id =
                                utils.my_post({
                                    apiName: 'onlinewe',
                                    params: {
                                        "id": data.row.type_id,
                                        "wx": 1
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        window.open(json.path)
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("预览出错")
                                    }
                                })
                        } else if (data.row.strtype == "复检") {
                            let system_id =
                                utils.my_post({
                                    apiName: 'onlinefu',
                                    params: {
                                        "id": data.row.type_id,
                                        "wx": 1
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        window.open(json.path)
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("预览出错")
                                    }
                                })
                        } else if (data.row.strtype == "大货样") {
                            let system_id =
                                utils.my_post({
                                    apiName: 'onlineda',
                                    params: {
                                        "id": data.row.type_id,
                                        "wx": 1
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        window.open(json.path)
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("预览出错")
                                    }
                                })
                        } else if (data.row.strtype == "质量纠正") {
                            let system_id =
                                utils.my_post({
                                    apiName: 'onlineji',
                                    params: {
                                        "id": data.row.type_id,
                                        "wx": 1
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        window.open(json.path)
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("预览出错")
                                    }
                                })
                        }
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "preview"
                        }],
                        "row": [{
                            "strtype": "样品"
                        }, {
                            "strtype": "原材料"
                        }, {
                            "strtype": "产前样"
                        }, {
                            "strtype": "中期"
                        }, {
                            "strtype": "尾检"
                        }, {
                            "strtype": "复检"
                        }, {
                            "strtype": "大货样"
                        }, {
                            "strtype": "质量纠正"
                        }]
                    }],
                },
                {
                    label: "导出报告",
                    click: function (data: any) {
                        if (data.row.strtype == "工艺单") {
                            /*let edit = utils.getStore().openDialog({
                                name: 'exportgo',
                                title: "导出报告"
                            })*/
                            utils.my_post({
                                apiName: 'exportgo',
                                params: {
                                    "id": data.row.type_id,
                                    "wx": 1
                                },
                                ok: (json: any, dataAll: any) => {
                                    // console.log(json)
                                    window.location.href = json.filePath
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("导出出错")
                                }
                            })
                        } else if (data.row.strtype == "样品") {
                            /*let edit = utils.getStore().openDialog({
                                name: 'exportya',
                                title: "导出报告"
                            })*/
                            utils.my_post({
                                apiName: 'exportya',
                                params: {
                                    "id": data.row.type_id,
                                    "wx": 1
                                },
                                ok: (json: any, dataAll: any) => {
                                    // console.log(json)
                                    window.location.href = json.filePath
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("导出出错")
                                }
                            })
                        } else if (data.row.strtype == "原材料") {
                            /*let edit = utils.getStore().openDialog({
                                name: 'exportyu',
                                title: "导出报告"
                            })*/
                            utils.my_post({
                                apiName: 'exportyu',
                                params: {
                                    "id": data.row.type_id,
                                    "wx": 1
                                },
                                ok: (json: any, dataAll: any) => {
                                    // console.log(json)
                                    window.location.href = json.filePath
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("导出出错")
                                }
                            })
                        } else if (data.row.strtype == "产前样") {
                            /*let edit = utils.getStore().openDialog({
                                name: 'exportch',
                                title: "导出报告"
                            })*/
                            utils.my_post({
                                apiName: 'exportch',
                                params: {
                                    "id": data.row.type_id,
                                    "wx": 1
                                },
                                ok: (json: any, dataAll: any) => {
                                    // console.log(json)
                                    window.location.href = json.filePath
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("导出出错")
                                }
                            })
                        } else if (data.row.strtype == "中期") {
                            /*let edit = utils.getStore().openDialog({
                                name: 'exportzh',
                                title: "导出报告"
                            })*/
                            utils.my_post({
                                apiName: 'exportzh',
                                params: {
                                    "id": data.row.type_id,
                                    "wx": 1
                                },
                                ok: (json: any, dataAll: any) => {
                                    // console.log(json)
                                    window.location.href = json.filePath
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("导出出错")
                                }
                            })
                        } else if (data.row.strtype == "尾检") {
                            /*let edit = utils.getStore().openDialog({
                                name: 'exportwe',
                                title: "导出报告"
                            })*/
                            utils.my_post({
                                apiName: 'exportwe',
                                params: {
                                    "id": data.row.type_id,
                                    "wx": 1
                                },
                                ok: (json: any, dataAll: any) => {
                                    // console.log(json)
                                    window.location.href = json.filePath
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("导出出错")
                                }
                            })
                        } else if (data.row.strtype == "复检") {
                            /*let edit = utils.getStore().openDialog({
                                name: 'exportfu',
                                title: "导出报告"
                            })*/
                            utils.my_post({
                                apiName: 'exportfu',
                                params: {
                                    "id": data.row.type_id,
                                    "wx": 1
                                },
                                ok: (json: any, dataAll: any) => {
                                    // console.log(json)
                                    window.location.href = json.filePath
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("导出出错")
                                }
                            })
                        } else if (data.row.strtype == "大货样") {
                            /*let edit = utils.getStore().openDialog({
                                name: 'exportda',
                                title: "导出报告"
                            })*/
                            utils.my_post({
                                apiName: 'exportda',
                                params: {
                                    "id": data.row.type_id,
                                    "wx": 1
                                },
                                ok: (json: any, dataAll: any) => {
                                    // console.log(json)
                                    window.location.href = json.filePath
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("导出出错")
                                }
                            })
                        } else if (data.row.strtype == "质量纠正") {
                            /*let edit = utils.getStore().openDialog({
                                name: 'exportji',
                                title: "导出报告"
                            })*/
                            utils.my_post({
                                apiName: 'exportji',
                                params: {
                                    "id": data.row.type_id,
                                    "wx": 1
                                },
                                ok: (json: any, dataAll: any) => {
                                    // console.log(json)
                                    window.location.href = json.url
                                },
                                err: (json: any, dataAll: any) => {
                                    alert("导出出错")
                                }
                            })
                        }
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "download"
                        }],
                        "row": [{
                            "strtype": "工艺单"
                        }, {
                            "strtype": "样品"
                        }, {
                            "strtype": "原材料"
                        }, {
                            "strtype": "产前样"
                        }, {
                            "strtype": "中期"
                        }, {
                            "strtype": "尾检"
                        }, {
                            "strtype": "复检"
                        }, {
                            "strtype": "大货样"
                        }, {
                            "strtype": "质量纠正"
                        }]
                    }],
                },
            ],
        },
        // 审批详情
        {
            modelName: 'dialog',
            name: "read",
            type: 'DialogEdit',
            apiName_queryById: "queryById2",
            by_id: false,
            by_id_type: true,
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [
                    {
                        modelName: 'content',
                        name: "no",
                        label: "货号/编号/名称",
                        label_width: "110px",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "type_str",
                        label: "类型",
                        type: 'ComponentsText',
                    },
                    {
                        modelName: 'content',
                        name: "ui_name",
                        label: "申请人",
                        type: 'ComponentsText',
                    },
                    {
                        modelName: 'content',
                        name: "user_time",
                        label: "申请日期",
                        type: 'ComponentsText',
                    },
                    {
                        modelName: 'content',
                        name: "approval_results",
                        label: "审核结果",
                        type: 'ComponentsText',
                    },
                    {
                        modelName: 'content',
                        name: "opinion",
                        label: "审核内容",
                        type: 'ComponentsInputTextarea',
                        show_type: "详情"
                    },
                    {
                        modelName: 'content',
                        name: "pic",
                        label: "图片",
                        type: 'ComponentsInputImage'
                    },
                    {
                        modelName: 'content',
                        name: 'id',
                        label: 'id',
                        type: 'ComponentsInputHidden'
                    },
                ]
            }]
        },
        // 审核
        {
            modelName: 'dialog',
            name: "examine",
            type: 'DialogEdit',
            title: "审核",
            apiName_save: "examineOk",
            apiName_queryById: "queryById",
            by_id: false,
            by_id_type: true,
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "steps",
                        label: "审核流程",
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
                        name: "approval_results",
                        label: "审核结果",
                        type: 'ComponentsInputSelect',
                        system_id: "system_examine_result",
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
                        name: "opinion",
                        label: "审核内容",
                        type: 'ComponentsInputTextarea'
                    },
                    {
                        modelName: 'content',
                        name: "pic",
                        label: "上传图片",
                        type: 'ComponentsInputUploadImage'
                    },
                    {
                        modelName: 'content',
                        name: 'id',
                        label: 'id',
                        type: 'ComponentsInputHidden'
                    },
                ]
            }]
        },

        // 组装图
        {
            modelName: 'dialog',
            name: "readzu",
            type: 'DialogEdit',
            apiName_queryById: "queryByIdzu",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "url1",
                        label: '组装图二维码',
                        type: 'ComponentsInputImage',
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
                        name: "no",
                        label: "组装图编号",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "producer",
                        label: "制作人",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "createdate",
                        label: "制作日期",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "file_path",
                        label: "点击下载文件",
                        type: 'ComponentsInputUpload',
                        show_type: "详情"
                    },
                    {
                        modelName: 'content',
                        name: "note",
                        label: "备注",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "url",
                        label: '文件预览',
                        type: 'ComponentsInputImage'
                    },
                ]
            }, ],
            toolBtn: []
        },
        {
            modelName: 'dialog',
            name: "detailzu",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryByIdzu",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                label: "审核详情",
                name: "base8",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        spread: true,
                        label: "基础信息",
                        components: [{
                                modelName: 'content',
                                name: "url1",
                                label: '组装图二维码',
                                type: 'ComponentsInputImage',
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
                                name: "no",
                                label: "组装图编号",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "producer",
                                label: "制作人",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "createdate",
                                label: "制作日期",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "note",
                                label: "备注",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "url",
                                label: '文件预览',
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
        // 签封样
        {
            modelName: 'dialog',
            name: "readqi",
            type: 'DialogEdit',
            apiName_queryById: "queryByIdqi",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "url",
                        label: '图片',
                        type: 'ComponentsInputImage',
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
                        name: "no",
                        label: "签封样编号",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "sample_holder",
                        label: "签样人",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "approver",
                        label: "审批人",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "person",
                        label: "保管人",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "place",
                        label: "保管地点",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "date",
                        label: "签样日期",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "opinion",
                        label: "签样意见",
                        type: 'ComponentsInputTextarea',
                        show_type: "详情"
                    },
                ]
            }, ],
            toolBtn: []
        },
        {
            modelName: 'dialog',
            name: "detailqi",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryByIdqi",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                label: "审核详情",
                name: "base8",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        spread: true,
                        label: "基础信息",
                        components: [{
                                modelName: 'content',
                                name: "url1",
                                label: '组装图二维码',
                                type: 'ComponentsInputImage',
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
                                name: "no",
                                label: "组装图编号",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "producer",
                                label: "制作人",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "createdate",
                                label: "制作日期",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "note",
                                label: "备注",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "url",
                                label: '文件预览',
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
        // 工艺单
        {
            modelName: 'dialog',
            name: "exportgo",
            apiName_queryById: "queryByIdgo",
            apiName_download: "exportgo",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "detailgo",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryByIdgo",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                label: "审核详情",
                name: "base9",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyCollapse',
                        spread: true,
                        label: "基础信息",
                        components: [{
                                modelName: 'from',
                                type: 'AssemblyFrom',
                                label: "基础信息",
                                components: [{
                                        modelName: 'content',
                                        name: "factory_name",
                                        label: "工厂",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'content',
                                        name: "process_form_number",
                                        label: "工艺单编号",
                                        type: 'ComponentsText',
                                    },
                                    {
                                        modelName: 'content',
                                        name: "sample_no",
                                        label: "样品编号",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'content',
                                        name: "producer",
                                        label: "制作人",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'content',
                                        name: "createdate",
                                        label: "制作日期",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'content',
                                        name: 'number_id',
                                        label: 'number_id',
                                        type: 'ComponentsInputHidden'
                                    },
                                ]
                            },
                            {
                                modelName: 'from',
                                type: 'AssemblyFrom',
                                label: "样品信息",
                                components: [{
                                        modelName: 'content',
                                        name: "product_no",
                                        label: "货号",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'content',
                                        name: "cn_name",
                                        label: "中文品名",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'content',
                                        name: "en_name",
                                        label: "英文品名",
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
                                        name: "bar_code",
                                        label: "EAN码",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'content',
                                        name: "gross_weight",
                                        label: "毛重",
                                        type: 'ComponentsText',
                                        unit: "KG"
                                    },
                                    {
                                        modelName: 'content',
                                        name: "net_weight",
                                        label: "净重",
                                        type: 'ComponentsText',
                                        unit: "KG"
                                    },
                                    {
                                        modelName: 'content',
                                        name: "packing_outsize",
                                        label: "包装外径",
                                        type: 'ComponentsText',
                                        unit: "CM"
                                    },
                                    {
                                        modelName: 'content',
                                        name: "product_size",
                                        label: "产品尺寸",
                                        type: 'ComponentsText',
                                        unit: "CM"
                                    },
                                    {
                                        modelName: 'content',
                                        name: "express_day",
                                        label: "快递周长",
                                        type: 'ComponentsText',
                                        unit: "CM"
                                    },
                                    {
                                        modelName: 'content',
                                        name: "volume_weight",
                                        label: "体积重",
                                        type: 'ComponentsText',
                                        unit: "KG"
                                    },
                                ]
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
            }],
            toolBtn: []
        },
        // 样品
        {
            modelName: 'dialog',
            name: "exportya",
            apiName_queryById: "queryByIdya",
            apiName_download: "exportya",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "detailya",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryByIdya",
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
            name: "readya",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryByIdya",
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
        // 原材料
        {
            modelName: 'dialog',
            name: "exportyu",
            apiName_queryById: "queryByIdyu",
            apiName_download: "exportyu",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "detailyu",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryByIdyu",
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
            name: "readyu",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryByIdyu",
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
            ],
            toolBtn: []
        },
        // 产前样
        {
            modelName: 'dialog',
            name: "exportch",
            apiName_queryById: "queryByIdch",
            apiName_download: "exportch",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "detailch",
            type: 'DialogEdit',
            dialog_width: "100%",
            apiName_queryById: "queryByIdch",
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
                                name: "order_number_id",
                                label: "order_number_id",
                                type: 'ComponentsInputHidden'
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
            name: "readch",
            type: 'DialogEdit',
            dialog_width: "100%",
            apiName_queryById: "queryByIdch",
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
                            name: "order_number_id",
                            label: "order_number_id",
                            type: 'ComponentsInputHidden'
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
                                history_name: "history_record",
                                type: 'ComponentsInputTableEdit',
                                addBtn: false,
                                label_show: true,
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
                                label_show: true,
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
                                    // {modelName:'template',name: 'picture_id', label: 'picture_id',type:'ComponentsInputHidden'},
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
                                label_show: true,
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
                                        // }],
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
                            label: "上传集合体图片",
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
                            label: "上传细节图",
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
                                label_show: true,
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
                                    // {modelName:'template',name: 'picture_id', label: 'picture_id',type:'ComponentsInputHidden'},
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
                                label_show: true,
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
                                    // {modelName:'template',name: 'picture_id', label: 'problem_picture_id',type:'ComponentsInputHidden'},
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
                                label_show: true,
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
                                label_show: true,
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
                                    // {modelName:'template',name: 'picture_id', label: 'problem_picture_id',type:'ComponentsInputHidden'},
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
                                label_show: true,
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
                                label_show: true,
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
                                    // {modelName:'template',name: 'picture_id', label: 'problem_picture_id',type:'ComponentsInputHidden'},
                                ]
                            }, ]
                        },

                    ]
                },
                {
                    modelName: 'from',
                    type: 'AssemblyCollapse',
                    spread: true,
                    label: "签样意见",
                    name: "base7",
                    components: [{
                            modelName: 'from',
                            type: 'AssemblyFrom',
                            label: "签样意见",
                            components: [{
                                modelName: 'content',
                                name: "opinions",
                                label: "",
                                type: 'ComponentsInputTable',
                                addBtn: false,
                                label_show: true,
                                components: [{
                                        modelName: 'template',
                                        name: "item",
                                        label: "签样意见",
                                        type: 'ComponentsText'
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
                            name: "base2",
                            components: [{
                                modelName: 'content',
                                name: "opinions_problems",
                                label: "",
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
                                    // {modelName:'template',name: 'picture_id', label: 'problem_picture_id',type:'ComponentsInputHidden'},
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
        // 中期
        {
            modelName: 'dialog',
            name: "exportzh",
            apiName_queryById: "queryByIdzh",
            apiName_download: "exportzh",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "detailzh",
            type: 'DialogEdit',
            dialog_width: "100%",
            apiName_queryById: "queryByIdzh",
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
            name: "readzh",
            type: 'DialogEdit',
            dialog_width: "100%",
            apiName_queryById: "queryByIdzh",
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
        // 尾期
        {
            modelName: 'dialog',
            name: "exportwe",
            apiName_queryById: "queryByIdwe",
            apiName_download: "exportwe",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "detailwe",
            type: 'DialogEdit',
            dialog_width: "100%",
            apiName_queryById: "queryByIdwe",
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
            name: "readwe",
            type: 'DialogEdit',
            dialog_width: "100%",
            apiName_queryById: "queryByIdwe",
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
                                components: [{
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
        // 复检
        {
            modelName: 'dialog',
            name: "exportfu",
            apiName_queryById: "queryByIdfu",
            apiName_download: "exportfu",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "detailfu",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryByIdfu",
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
            name: "readfu",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryByIdfu",
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
                                // {modelName:'template',name:"result",label:"复检结果",type: 'ComponentsInput'},
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
        // 大货样
        {
            modelName: 'dialog',
            name: "exportda",
            apiName_queryById: "queryByIdda",
            apiName_download: "exportda",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "detailda",
            type: 'DialogEdit',
            dialog_width: "50%",
            apiName_queryById: "queryByIdda",
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
            name: "readda",
            type: 'DialogEdit',
            dialog_width: "50%",
            apiName_queryById: "queryByIdda",
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
        // 质量纠正
        {
            modelName: 'dialog',
            name: "exportji",
            apiName_queryById: "queryByIdji",
            apiName_download: "exportji",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "readji",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryByIdji",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                spread: true,
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
            }],
            toolBtn: []
        },
        {
            modelName: 'dialog',
            name: "detailji",
            type: 'DialogEdit',
            dialog_width: "80%",
            apiName_queryById: "queryByIdji",
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