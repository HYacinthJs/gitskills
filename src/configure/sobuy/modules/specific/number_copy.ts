import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'sys_number_copy',
    version: 'PageNormal',
    api: {
        queryByAll: "/number/queryByAll",
        query: "/newnumber/query",
        queryById: "/newnumber/queryById",
        save: "/newnumber/save",
        save1: "/number/save",
        queryBySupplier: "/supplier/queryBySupplier",
        delete1: "/number/delete",
        query2: "/number/queryFactoryByNumberId",

        apply: "/sample/newProposeAudit",
        queryApply: "/process/queryByType",
        queryFlow: "/index/getBZDesc",
        factory: "/supplier/queryByFactory",
        deleteF: "/number/deleteFactory",

        query3: "/number/queryDetailsByNumberFactoryId",

        queryById2: "/sealsample/queryById",
        save2: "/sealsample/save",
        save5: "/newnumber/saveSeal",
        delete2: "/sealsample/delete",

        queryById3: "/processform/queryById",
        queryById5: "/processform/queryById2",
        save3: "/processform/save",
        delete3: "/processform/deleteProcessForm",
        sample: "/sample/queryByAll",
        component: "/componentinformation/queryByAll",
        queryPartById: "/partinformation/newQueryById",
        test: "/testrequirements/queryByAll",
        querySampleMessage: "/processform/querySampleMessageBySampleId",
        examineOk3: "/processform/examineOk",
        apply3: "/processform/proposeAudit",
        export: "/processform/toExcel",
        export1: "/processform/online",
        queryByAll3: "/processform/queryByAll",

        query_assemblydrawing: "/assemblydrawing/queryByNumberFactoryId",
        queryById4: "/assemblydrawing/queryById",
        save4: "/assemblydrawing/save",
        save6: "/newnumber/saveAsse",
        delete4: "/assemblydrawing/delete",
        examineOk4: "/assemblydrawing/examineOk",
        apply4: "/assemblydrawing/proposeAudit",
        getCompany: "/company/queryByAll",
        url4: "/newnumber/querySelectType",
        queryType: "/newnumber/queryByFileType",

        partsQuery: "/partinformation/query",
        part: "/partinformation/queryByAll",
        part2: "/partinformation/queryByAll2",
        part3: "/partinformation/queryByName",
        part4: "/partinformation/queryBySize",
        part5: "/partinformation/queryByCaizhi",
        part6: "/partinformation/queryByColor",
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
                        label: "货号",
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
                        name: "key_value",
                        label: "关键字",
                        type: 'ComponentsInputWithDateSelect',
                        dateShow: false,
                        inputShow: true,
                        fileType: [{
                                label: '工艺单(Single Process)',
                                value: '2'
                            },
                            {
                                label: '签封样(Seal Sample)',
                                value: '3'
                            },
                            {
                                label: '组装图(Assembly Drawing)',
                                value: '4'
                            },
                        ],
                    },
                    {
                        modelName: 'content',
                        name: "key_date",
                        label: "关键字",
                        type: 'ComponentsInputWithDateSelect'
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
            title: "货号管理",
            type: 'AssemblyContentNumber',
            system_id: "content",
            components: [{
                    modelName: 'content',
                    name: "picarray",
                    label: "主图",
                    type: 'ComponentsInputUploadImage'
                },
                {
                    modelName: 'content',
                    name: "name",
                    label: "货号",
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
                    name: "factory_id",
                    label: "工厂id",
                    type: 'ComponentsInputHidden'
                },
                {
                    modelName: 'content',
                    name: "supplier_name",
                    label: "供应商",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "seal_no",
                    label: "签封样",
                    type: 'ComponentsInput',
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "Qquery"
                        }]
                    }],
                },
                {
                    modelName: 'content',
                    name: "assembly_no",
                    label: "组装图",
                    type: 'ComponentsInput',
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "Zquery"
                        }]
                    }],
                },
                {
                    modelName: 'content',
                    name: "process_no",
                    label: "工艺单",
                    type: 'ComponentsInput',
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "Gquery"
                        }]
                    }],
                },
                {
                    modelName: 'content',
                    name: "post_report",
                    label: "以往报告",
                    type: 'ComponentsInput',
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "preview"
                        }]
                    }],
                },
                {
                    modelName: 'content',
                    name: "reform",
                    label: "质量整改",
                    type: 'ComponentsInput',
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "preview"
                        }]
                    }],
                },
                {
                    modelName: 'content',
                    name: "assembly_num",
                    label: "组装图待审核数量",
                    type: 'ComponentsInputHidden'
                },
                {
                    modelName: 'content',
                    name: "process_num",
                    label: "工艺单待审核数量",
                    type: 'ComponentsInputHidden'
                },
            ],
            cellClick(lie: any) {
                console.log(lie)
                if (lie.lie == "签封样" || lie.lie == "组装图" || lie.lie == "工艺单" || lie.lie == "以往报告" || lie.lie == "质量整改") {
                    let edit = utils.getStore().openDialog({
                        name: 'editTable',
                        title: "列表"
                    })
                    edit.query(lie)
                } else if (lie.lie == "Seal Sample" || lie.lie == "Assembly Drawing" || lie.lie == "Single Process" || lie.lie == "Previous Reports" || lie.lie == "Quality Rectification") {
                    let edit = utils.getStore().openDialog({
                        name: 'editTable',
                        title: "LIST"
                    })
                    edit.query(lie)
                }
            },
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
                    type: "danger",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "delete"
                        }]
                    }],
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'deleteAll1',
                            title: "批量删除"
                        })
                        edit.initValue()
                        edit.initAjax()
                    }
                },
            ],
            tableBtn: [{
                    label: "查看",
                    type: "primary",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "query"
                        }]
                    }],
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'examine1',
                            title: "查看"
                        })
                        edit.query()
                    }
                },
                {
                    label: "修改",
                    type: "primary",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "edit"
                        }]
                    }],
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'edit1',
                            title: "修改"
                        })
                        edit.query()
                    }
                },
                {
                    label: "添加签封样",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "Qadd"
                        }]
                    }],
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'increase1',
                            title: "添加签封样"
                        })
                        edit.query()
                    }
                },
                {
                    label: "添加组装图",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "Zadd"
                        }]
                    }],
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'increase2',
                            title: "添加组装图"
                        })
                        edit.query()
                    }
                },
                {
                    label: "添加工艺单",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "Gadd"
                        }]
                    }],
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'increase3',
                            title: "添加工艺单"
                        })
                        edit.query()
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
                            name: 'delete1',
                            title: "删除"
                        })
                    }
                },
            ],
        },
        {
            modelName: 'dialog',
            name: "editTable",
            type: 'DialogTable',
            apiName_save: "save",
            apiName_queryById: "queryType",
            tableName: "content_file",
            system_id: "content_file",
            dialog_width: "100%",
            components: []
        },
        {
            modelName: 'dialog',
            name: "deleteAll1",
            type: 'DialogSelect',
            title: '删除',
            msg: '是否确认批量删除？',
            valueModel: "批量",
            tableName: "content",
            apiName_save: "delete1"
        },
        {
            modelName: 'dialog',
            name: "delete1",
            type: 'DialogSelect',
            title: '删除',
            msg: '是否确认删除？',
            tableName: "content",
            apiName_save: "delete1"
        },
        {
            modelName: 'dialog',
            name: "examine1",
            type: 'DialogEdit',
            apiName_queryById: "queryById",
            tableName: "content",
            dialog_width: "80%",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                label: "货号信息",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: '货号信息',
                        components: [{
                                modelName: 'content',
                                name: "url",
                                label: '产品图片',
                                type: 'ComponentsInputImage',
                            },
                            {
                                modelName: 'content',
                                name: 'id',
                                label: 'id',
                                type: 'ComponentsInputHidden'
                            },
                            {
                                modelName: 'content',
                                name: "name",
                                label: "货号",
                                type: 'ComponentsText',
                            },
                            {
                                modelName: 'content',
                                name: "five_code",
                                label: "五位码",
                                type: 'ComponentsText',
                            },
                            {
                                modelName: 'content',
                                name: "bar_code",
                                label: "EAN码",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "cn_name",
                                label: "中文名",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "en_name",
                                label: "报关英文名",
                                type: 'ComponentsText'
                            },
                            {
                                modelName: 'content',
                                name: "createdate",
                                label: "新建日期",
                                type: 'ComponentsText'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "签封样",
                        components: [{
                            modelName: 'content',
                            name: "seal_no",
                            label: "",
                            type: 'ComponentsInputForm',
                            addBtn: false,
                            editTr: false,

                            components: [{
                                    modelName: 'template',
                                    name: "url",
                                    label: '图片',
                                    type: 'ComponentsInputImage',
                                },
                                {
                                    modelName: 'template',
                                    name: "factory_name",
                                    label: "工厂",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "supplier_name",
                                    label: "供应商",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "no",
                                    label: "签封样编号",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "sample_holder",
                                    label: "签样人",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "approver",
                                    label: "审批人",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "person",
                                    label: "保管人",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "place",
                                    label: "保管地点",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "date",
                                    label: "签样日期",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "opinion",
                                    label: "签样意见",
                                    type: 'ComponentsInputTextarea',
                                    show_type: "详情"
                                },
                            ]
                        }, ],
                        jurisdictionJson: [{
                            jurisdiction: [{
                                name: "Qquery"
                            }]
                        }],
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "组装图",
                        components: [{
                                modelName: 'content',
                                name: "assembly_no",
                                label: "",
                                addBtn: false,
                                editTr: false,
                                type: 'ComponentsInputForm',

                                components: [{
                                        modelName: 'template',
                                        name: "url1",
                                        label: '组装图二维码',
                                        type: 'ComponentsInputImage',
                                    },
                                    {
                                        modelName: 'template',
                                        name: "factory_name",
                                        label: "工厂",
                                        type: 'ComponentsText',
                                    },
                                    {
                                        modelName: 'template',
                                        name: "supplier_name",
                                        label: "供应商",
                                        type: 'ComponentsText',
                                    },
                                    {
                                        modelName: 'template',
                                        name: "no",
                                        label: "组装图编号",
                                        type: 'ComponentsText',
                                    },
                                    {
                                        modelName: 'template',
                                        name: "producer",
                                        label: "制作人",
                                        type: 'ComponentsText'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "createdate",
                                        label: "制作日期",
                                        type: 'ComponentsText',
                                    },
                                    {
                                        modelName: 'template',
                                        name: "file_path",
                                        label: "下载文件",
                                        type: 'ComponentsInputUpload',
                                        show_type: "详情"
                                    },
                                    {
                                        modelName: 'template',
                                        name: "note",
                                        label: "备注",
                                        type: 'ComponentsInputTextarea',
                                        show_type: "详情"
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: '文件预览',
                                        type: 'ComponentsInputImage',
                                    },
                                ]
                            },

                        ],
                        jurisdictionJson: [{
                            jurisdiction: [{
                                name: "Zquery"
                            }]
                        }],
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "签封样历史记录",
                        components: [{
                            modelName: 'content',
                            name: "seal_log",
                            label: "",
                            addBtn: false,
                            editTr: false,
                            type: 'ComponentsInputTable',

                            components: [{
                                    modelName: 'template',
                                    name: "user_name",
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
                                    name: "factory_name",
                                    label: "工厂",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "no",
                                    label: "签封样编号",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "sample_holder",
                                    label: "签样人",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "approver",
                                    label: "审批人",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "person",
                                    label: "保管人",
                                    type: 'ComponentsText'
                                },
                            ]
                        }, ],
                        jurisdictionJson: [{
                            jurisdiction: [{
                                name: "Qquery"
                            }]
                        }],
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "组装图历史记录",
                        components: [{
                            modelName: 'content',
                            name: "assembly_log",
                            label: "",
                            addBtn: false,
                            editTr: false,
                            type: 'ComponentsInputTable',


                            components: [{
                                    modelName: 'template',
                                    name: "user_name",
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
                                    name: "url",
                                    label: '文件预览',
                                    type: 'ComponentsInputImage',
                                },
                                {
                                    modelName: 'template',
                                    name: "factory_name",
                                    label: "工厂",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "no",
                                    label: "组装图编号",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "producer",
                                    label: "制作人",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "file_path",
                                    label: "文件",
                                    type: 'ComponentsInputUpload',
                                    show_type: "详情"
                                },
                            ]
                        }, ],
                        jurisdictionJson: [{
                            jurisdiction: [{
                                name: "Zquery"
                            }]
                        }],
                    },
                ]
            }],
            toolBtn: []
        },
        {
            modelName: 'dialog',
            name: "increase",
            type: 'DialogEdit',
            apiName_save: "save",
            apiName_queryById: "queryById",
            tableName: "content",
            save_close: false,
            dialog_width: "80%",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                label: "货号信息",
                name: "base10",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: '货号信息',
                        components: [{
                                modelName: 'content',
                                name: "url",
                                label: '产品图片',
                                type: 'ComponentsInputUploadImage',
                                rules: [{
                                    validator: utils.my_required_upload,
                                    message: "请上传图片"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: 'id',
                                label: 'id',
                                type: 'ComponentsInputHidden'
                            },
                            {
                                modelName: 'content',
                                name: "name",
                                label: "货号",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入货号"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "five_code",
                                label: "五位码",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入五位码"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "bar_code",
                                label: "EAN码",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "cn_name",
                                label: "中文名",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "en_name",
                                label: "报关英文名",
                                type: 'ComponentsInput'
                            },

                            {
                                modelName: 'content',
                                name: "createdate",
                                label: "新建日期",
                                type: 'ComponentsInputDay',
                                day_auto: true,
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择新建日期"
                                }]
                            },
                            // {modelName:'content',name:"reform",label:"质量整改",type: 'ComponentsInput'},
                        ]
                    },

                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "签封样",
                        components: [{
                            modelName: 'content',
                            name: "seal_no",
                            label: "",
                            type: 'ComponentsInputForm',

                            components: [{
                                    modelName: 'template',
                                    name: "url",
                                    label: '图片',
                                    type: 'ComponentsInputUploadImage',
                                },
                                {
                                    modelName: 'template',
                                    name: "factory_id",
                                    label: "工厂",
                                    type: 'ComponentsInputSelect',
                                    rules: [{
                                        validator: utils.my_required_array,
                                        message: "请选择工厂"
                                    }],
                                    ajax_url: "factory",
                                    props_label: "name",
                                    props_value: "id"
                                },
                                {
                                    modelName: 'template',
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
                                    modelName: 'template',
                                    name: "no",
                                    label: "签封样编号",
                                    type: 'ComponentsInput',
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请输入签封样编号"
                                    }]
                                },
                                {
                                    modelName: 'template',
                                    name: "sample_holder",
                                    label: "签样人",
                                    type: 'ComponentsInput',
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请输入签样人"
                                    }]
                                },
                                {
                                    modelName: 'template',
                                    name: "approver",
                                    label: "审批人",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'template',
                                    name: "person",
                                    label: "保管人",
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'template',
                                    name: "place",
                                    label: "保管地点",
                                    type: 'ComponentsInput',
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请输入保管地点"
                                    }]
                                },
                                {
                                    modelName: 'template',
                                    name: "date",
                                    label: "签样日期",
                                    type: 'ComponentsInputDay',
                                    day_auto: true,
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请选择签样日期"
                                    }]
                                },
                                {
                                    modelName: 'template',
                                    name: "opinion",
                                    label: "签样意见",
                                    type: 'ComponentsInputTextarea',
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请选择签样日期"
                                    }]
                                },
                            ]
                        }, ]
                    },

                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "组装图",
                        components: [{
                                modelName: 'content',
                                name: "assembly_no",
                                label: "",
                                type: 'ComponentsInputForm',

                                components: [{
                                        modelName: 'template',
                                        name: "url1",
                                        label: '组装图二维码',
                                        type: 'ComponentsInputUploadImage',
                                        // rules: [{validator: utils.my_required_upload, message: "请上传图片"}]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "factory_id",
                                        label: "工厂",
                                        type: 'ComponentsInputSelect',
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请选择工厂"
                                        }],
                                        ajax_url: "factory",
                                        props_label: "name",
                                        props_value: "id"
                                    },
                                    {
                                        modelName: 'template',
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
                                        modelName: 'template',
                                        name: "no",
                                        label: "组装图编号",
                                        type: 'ComponentsInput',
                                        rules: [{
                                            validator: utils.my_required,
                                            message: "请输入组装图编号"
                                        }]
                                    },
                                    {
                                        modelName: 'template',
                                        name: "producer",
                                        label: "制作人",
                                        type: 'ComponentsInput'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "createdate",
                                        label: "制作日期",
                                        type: 'ComponentsInputDay',
                                        day_auto: true
                                    },
                                    {
                                        modelName: 'template',
                                        name: "note",
                                        label: "备注",
                                        type: 'ComponentsInputTextarea'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "file",
                                        label: "上传文件",
                                        upload_url: "/api/upload/uploadForAssembly",
                                        type: 'ComponentsInputUpload'
                                    },
                                    {
                                        modelName: 'template',
                                        name: "url",
                                        label: '文件预览',
                                        type: 'ComponentsInputUploadImage',
                                        upload_url: "/api/upload/uploadForAssembly",
                                        rules: [{
                                            validator: utils.my_required_upload,
                                            message: "请上传图片"
                                        }]
                                    },

                                ]
                            },

                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "签封样历史记录",
                        components: [{
                            modelName: 'content',
                            name: "seal_log",
                            label: "",
                            addBtn: false,
                            editTr: false,
                            type: 'ComponentsInputTable',


                            components: [{
                                    modelName: 'template',
                                    name: "user_name",
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
                                    name: "factory_name",
                                    label: "工厂",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "no",
                                    label: "签封样编号",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "sample_holder",
                                    label: "签样人",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "approver",
                                    label: "审批人",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "person",
                                    label: "保管人",
                                    type: 'ComponentsText'
                                },
                            ]
                        }, ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "组装图历史记录",
                        components: [{
                            modelName: 'content',
                            name: "assembly_log",
                            label: "",
                            addBtn: false,
                            editTr: false,
                            type: 'ComponentsInputTable',


                            components: [{
                                    modelName: 'template',
                                    name: "user_name",
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
                                    name: "url",
                                    label: '文件预览',
                                    type: 'ComponentsInputImage',
                                },
                                {
                                    modelName: 'template',
                                    name: "factory_name",
                                    label: "工厂",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "no",
                                    label: "组装图编号",
                                    type: 'ComponentsText',
                                },
                                {
                                    modelName: 'template',
                                    name: "producer",
                                    label: "制作人",
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "file_path",
                                    label: "文件",
                                    type: 'ComponentsInputUpload',
                                    show_type: "详情"
                                },
                            ]
                        }, ]
                    },
                ]
            }]
        },
        {
            modelName: 'dialog',
            name: "edit1",
            type: 'DialogEdit',
            apiName_save: "save1",
            apiName_queryById: "queryById",
            tableName: "content",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                label: '货号信息',
                components: [{
                        modelName: 'content',
                        name: "url",
                        label: '产品图片',
                        type: 'ComponentsInputUploadImage',
                        rules: [{
                            validator: utils.my_required_upload,
                            message: "请上传图片"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: 'id',
                        label: 'id',
                        type: 'ComponentsInputHidden'
                    },
                    {
                        modelName: 'content',
                        name: "name",
                        label: "货号",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入货号"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "five_code",
                        label: "五位码",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入五位码"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "bar_code",
                        label: "EAN码",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "cn_name",
                        label: "中文名",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "en_name",
                        label: "报关英文名",
                        type: 'ComponentsInput'
                    },

                    {
                        modelName: 'content',
                        name: "createdate",
                        label: "新建日期",
                        type: 'ComponentsInputDay',
                        day_auto: true,
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择新建日期"
                        }]
                    },
                    // {modelName:'content',name:"reform",label:"质量整改",type: 'ComponentsInput'},
                ]
            }, ]
        },

        //签封样查增删改
        {
            modelName: 'dialog',
            name: "examine2",
            type: 'DialogEdit',
            apiName_save: "save2",
            apiName_queryById: "queryById2",
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
            name: "edit2",
            type: 'DialogEdit',
            apiName_save: "save2",
            number_save: "货号",
            apiName_queryById: "queryById2",
            tableName: "content_file",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "url",
                        label: '图片',
                        type: 'ComponentsInputUploadImage',
                    },
                    {
                        modelName: 'content',
                        name: "factory_id",
                        label: "工厂",
                        type: 'ComponentsInputSelect',
                        rules: [{
                            validator: utils.my_required_array,
                            message: "请选择工厂"
                        }],
                        ajax_url: "factory",
                        props_label: "name",
                        props_value: "id"
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
                        name: "no",
                        label: "签封样编号",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入签封样编号"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "sample_holder",
                        label: "签样人",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入签样人"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "approver",
                        label: "审批人",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "person",
                        label: "保管人",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "place",
                        label: "保管地点",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入保管地点"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "date",
                        label: "签样日期",
                        type: 'ComponentsInputDay',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择签样日期"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "opinion",
                        label: "签样意见",
                        type: 'ComponentsInputTextarea'
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
        {
            modelName: 'dialog',
            name: "delete2",
            type: 'DialogSelect',
            valueModel: "货号",
            title: '删除',
            msg: '是否确认删除？',
            tableName: "content_file",
            apiName_save: "delete2",
        },
        {
            modelName: 'dialog',
            name: "apply2",
            type: 'DialogEdit',
            system_id: "system_word2",
            apiName_queryById: "queryById2",
            tableName: "content_file",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "flow_id",
                        label: "审批流程",
                        type: 'ComponentsInputSelect',
                        system_id: "system_flow_id2",
                        ajax_url: "queryApply",
                        props_label: "name",
                        props_value: "flow_id",
                        ajax_params: [{
                            type: "text",
                            name: "type",
                            value: 10
                        }],
                        associated_notice: ['system_examine_slider2'],
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
                        system_id: "system_examine_slider2",
                        style: {
                            width: "500px !important"
                        },
                        associated: function () {
                            let system_flow_id = utils.getPage().getComponents({
                                system_id: 'system_flow_id2'
                            })
                            let system_examine_slider = utils.getPage().getComponents({
                                system_id: 'system_examine_slider2'
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
                        system_id: "system_apply_id2",
                        type: 'ComponentsInputHidden'
                    },
                ]
            }, ],
            toolBtn: [{
                    label: "取消",
                    click: function (data: any) {
                        let dialog = utils.getStore().selectDialog({
                            name: 'apply2'
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
                                system_id: 'system_flow_id2'
                            })
                            let system_apply_id = utils.getPage().getComponents({
                                system_id: 'system_apply_id2'
                            })
                            let system_id =
                                utils.my_post({
                                    apiName: 'apply',
                                    params: {
                                        "id": system_apply_id.value,
                                        "flow_id": system_flow_id.value,
                                        "type": 10
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        let dialog = utils.getStore().selectDialog({
                                            name: 'apply2'
                                        })
                                        dialog.show = false
                                        let content = utils.getPage().getComponents({
                                            system_id: 'content_file'
                                        })
                                        content.Requery()
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("请求错误")
                                    }
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
            name: "detail2",
            type: 'DialogEdit',
            apiName_save: "save2",
            apiName_queryById: "queryById2",
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



        //组装图查增删改
        {
            modelName: 'dialog',
            name: "apply4",
            type: 'DialogEdit',
            system_id: "system_word4",
            apiName_queryById: "queryById4",
            tableName: "content_file",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "flow_id",
                        label: "审批流程",
                        type: 'ComponentsInputSelect',
                        system_id: "system_flow_id4",
                        ajax_url: "queryApply",
                        props_label: "name",
                        props_value: "flow_id",
                        ajax_params: [{
                            type: "text",
                            name: "type",
                            value: 3
                        }],
                        associated_notice: ['system_examine_slider4'],
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
                        system_id: "system_examine_slider4",
                        style: {
                            width: "500px !important"
                        },
                        associated: function () {
                            let system_flow_id = utils.getPage().getComponents({
                                system_id: 'system_flow_id4'
                            })
                            let system_examine_slider = utils.getPage().getComponents({
                                system_id: 'system_examine_slider4'
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
                        system_id: "system_apply_id4",
                        type: 'ComponentsInputHidden'
                    },
                ]
            }, ],
            toolBtn: [{
                    label: "取消",
                    click: function (data: any) {
                        let dialog = utils.getStore().selectDialog({
                            name: 'apply4'
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
                                system_id: 'system_flow_id4'
                            })
                            let system_apply_id = utils.getPage().getComponents({
                                system_id: 'system_apply_id4'
                            })
                            let system_id =
                                utils.my_post({
                                    apiName: 'apply',
                                    params: {
                                        "id": system_apply_id.value,
                                        "flow_id": system_flow_id.value,
                                        "type": 3
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        let dialog = utils.getStore().selectDialog({
                                            name: 'apply4'
                                        })
                                        dialog.show = false
                                        let content = utils.getPage().getComponents({
                                            system_id: 'content_file'
                                        })
                                        content.Requery()
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("请求错误")
                                    }
                                })
                        }
                        utils.validator({
                            callback,
                            system_id: "system_word4"
                        })
                    }
                },
            ]
        },
        {
            modelName: 'dialog',
            name: "detail4",
            type: 'DialogEdit',
            title: '详情',
            dialog_width: "80%",
            apiName_queryById: "queryById4",
            tableName: "content_file",
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
        {
            modelName: 'dialog',
            name: "approve2",
            type: 'DialogEdit',
            tableName: "content_file",
            number_save: "货号",
            title: "审核",
            apiName_queryById: "queryById4",
            apiName_save: "examineOk4",
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
            name: "examine4",
            type: 'DialogEdit',
            apiName_save: "save4",
            apiName_queryById: "queryById4",
            tableName: "content_file",
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
            name: "edit4",
            type: 'DialogEdit',
            apiName_save: "save4",
            number_save: "货号",
            apiName_queryById: "queryById4",
            tableName: "content_file",
            save_close: false,
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "url1",
                        label: '组装图二维码',
                        type: 'ComponentsInputUploadImage',
                    },
                    {
                        modelName: 'content',
                        name: "factory_id",
                        label: "工厂",
                        type: 'ComponentsInputSelect',
                        rules: [{
                            validator: utils.my_required_array,
                            message: "请选择工厂"
                        }],
                        ajax_url: "factory",
                        props_label: "name",
                        props_value: "id"
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
                        name: "no",
                        label: "组装图编号",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入签封样编号"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "producer",
                        label: "制作人",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "createdate",
                        label: "制作日期",
                        type: 'ComponentsInputDay'
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
                        name: "file",
                        label: "上传文件",
                        upload_url: "/api/upload/uploadForAssembly",
                        type: 'ComponentsInputUpload'
                    },
                    {
                        modelName: 'content',
                        name: "note",
                        label: "备注",
                        type: 'ComponentsInputTextarea'
                    },
                    {
                        modelName: 'content',
                        name: "url",
                        label: '文件预览',
                        type: 'ComponentsInputUploadImage',
                        upload_url: "/api/upload/uploadForAssembly"
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
        {
            modelName: 'dialog',
            name: "delete4",
            type: 'DialogSelect',
            valueModel: "货号",
            title: '删除',
            msg: '是否确认删除？',
            tableName: "content_file",
            apiName_save: "delete4"
        },


        //工艺单查增删改
        {
            modelName: 'dialog',
            name: "export",
            apiName_queryById: "queryById3",
            downloadType: "货号",
            tableName: "content_file",
            apiName_download: "export",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "examine3",
            type: 'DialogEdit',
            tableName: "content_file",
            apiName_save: "save3",
            apiName_queryById: "queryById3",
            dialog_width: "80%",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                spread: true,
                label: "工艺单信息",
                name: "base1",
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
                                type: 'ComponentsText'
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
                                name: "name",
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
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "部件信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_bjxx",
                            label: "",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            editTr: false,
                            value_default: [],
                            components: [{
                                    modelName: 'template',
                                    name: "component_id",
                                    label: "部件名称1",
                                    type: 'ComponentsText',
                                    style: {
                                        width: "100%"
                                    }
                                },
                                {
                                    modelName: 'template',
                                    name: "number",
                                    label: "数量",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "material_quality",
                                    label: "材质",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "color",
                                    label: "颜色",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "specifications",
                                    label: "规格",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "surface_treatment",
                                    label: "表面处理",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "url",
                                    label: "图片",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'template',
                                    name: "note",
                                    label: "备注",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputTextarea',
                                    show_type: "详情"
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
                        label: "材质说明",
                        components: [{
                            modelName: 'content',
                            name: "material_description",
                            label: "",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            editTr: false,
                            components: [{
                                    modelName: 'template',
                                    name: "description",
                                    label: "材质说明",
                                    type: 'ComponentsInputTextarea',
                                    show_type: "详情"
                                },
                                {
                                    modelName: 'template',
                                    name: "id",
                                    label: "id",
                                    type: 'ComponentsInputHidden'
                                },
                            ]
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "配件信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_pjxx",
                            label: "",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            editTr: false,
                            components: [{
                                    modelName: 'template',
                                    name: "no",
                                    label: "配件编号",
                                    type: 'ComponentsText',
                                    style: {
                                        width: "100%"
                                    }
                                },
                                {
                                    modelName: 'template',
                                    name: "process_part_no",
                                    label: "组装图配件编号",
                                    type: 'ComponentsText',
                                    style: {
                                        width: "100%"
                                    }
                                },
                                {
                                    modelName: 'template',
                                    name: "name",
                                    label: "配件名称",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "number",
                                    label: "数量",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "specifications",
                                    label: "规格",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "material_quality",
                                    label: "材质",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "color",
                                    label: "颜色",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "surface_treatment",
                                    label: "表面处理",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "url",
                                    label: "图片",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'template',
                                    name: "note",
                                    label: "备注",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputTextarea',
                                    show_type: "详情"
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
                        label: "配件说明",
                        components: [{
                            modelName: 'content',
                            name: "part_description",
                            label: "",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            editTr: false,
                            components: [{
                                    modelName: 'template',
                                    name: "description",
                                    label: "配件说明",
                                    type: 'ComponentsInputTextarea',
                                    show_type: "详情"
                                },
                                {
                                    modelName: 'template',
                                    name: "id",
                                    label: "id",
                                    type: 'ComponentsInputHidden'
                                },
                            ]
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "包装材料信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_bzcl",
                            label: "",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            editTr: false,
                            value_default: [],
                            components: [{
                                    modelName: 'template',
                                    name: "type",
                                    label: "包材类型",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "name",
                                    label: "包材名称",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "number",
                                    label: "数量",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "specifications",
                                    label: "规格",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "material_quality",
                                    label: "材质",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "process",
                                    label: "工艺指标",
                                    type: 'ComponentsText',
                                    style: {
                                        width: "100%"
                                    },
                                },
                                {
                                    modelName: 'template',
                                    name: "url",
                                    label: "图片",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputImage'
                                },
                                {
                                    modelName: 'template',
                                    name: "note",
                                    label: "备注",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputTextarea',
                                    show_type: "详情"
                                },
                                {
                                    modelName: 'template',
                                    name: "id",
                                    label: "id",
                                    type: 'ComponentsInputHidden'
                                },
                            ]
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "包材说明",
                        components: [{
                            modelName: 'content',
                            name: "package_description",
                            label: "",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            editTr: false,
                            components: [{
                                    modelName: 'template',
                                    name: "description",
                                    label: "包材说明",
                                    type: 'ComponentsInputTextarea',
                                    show_type: "详情"
                                },
                                {
                                    modelName: 'template',
                                    name: "id",
                                    label: "id",
                                    type: 'ComponentsInputHidden'
                                },
                            ]
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "产品测试",
                        components: [{
                            modelName: 'content',
                            name: "gyd_test",
                            label: "产品测试",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            editTr: false,
                            components: [
                                // {modelName: 'template',name: "test_id",label: "测试项目",type: 'ComponentsInputText'},
                                {
                                    modelName: 'template',
                                    name: "test_id",
                                    label: "测试项目",
                                    type: 'ComponentsInputSelect',
                                    ajax_url: "test",
                                    props_label: "item",
                                    props_value: "id"
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
                        label: "签样信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_qyxx",
                            label: "",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            editTr: false,
                            components: [{
                                    modelName: 'template',
                                    name: "signature_number",
                                    label: "签样编号",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "date",
                                    label: "签样日期",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "name",
                                    label: "签样名称",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "position",
                                    label: "签样部位",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "color",
                                    label: "签样颜色",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "color_number",
                                    label: "色样编号",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "note",
                                    label: "备注",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputTextarea',
                                    show_type: "详情"
                                },
                                {
                                    modelName: 'template',
                                    name: 'id',
                                    label: 'id',
                                    type: 'ComponentsInputHidden'
                                },
                            ]
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "签样意见",
                        components: [{
                            modelName: 'content',
                            name: "gyd_qyyj",
                            label: "",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            editTr: false,
                            components: [{
                                    modelName: 'template',
                                    name: "qyyj_bh",
                                    label: "签样编号",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "qyyj_rq",
                                    label: "签样日期",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsText'
                                },
                                {
                                    modelName: 'template',
                                    name: "opinion",
                                    label: "签样意见",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputTextarea',
                                    show_type: "详情"
                                },
                                {
                                    modelName: 'template',
                                    name: 'id',
                                    label: 'id',
                                    type: 'ComponentsInputHidden'
                                },
                            ]
                        }]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "质量重点注意事项",
                        components: [{
                            modelName: 'content',
                            name: "gyd_zysx",
                            label: "注意事项",
                            type: 'ComponentsInputTable',
                            addBtn: false,
                            editTr: false,
                            components: [{
                                    modelName: 'template',
                                    name: "attention",
                                    label: "注意事项",
                                    type: 'ComponentsInputTextarea',
                                    show_type: "详情",
                                    style: "width:500px;",
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
                        label: "产品尺寸图片",
                        components: [{
                                modelName: 'content',
                                name: "overallsize_pictures",
                                label: "整体尺寸图",
                                type: 'ComponentsInputImage'
                            },
                            {
                                modelName: 'content',
                                name: "detailsize_pictures",
                                label: "细节尺寸图",
                                type: 'ComponentsInputImage'
                            },
                            {
                                modelName: 'content',
                                name: "localsize_pictures",
                                label: "局部尺寸图",
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
                                name: "brand_pictures",
                                label: "商标位置图",
                                type: 'ComponentsInputImage'
                            },
                            {
                                modelName: 'content',
                                name: "sealsample_pictures",
                                label: "签封样图",
                                type: 'ComponentsInputImage'
                            },
                            {
                                modelName: 'content',
                                name: "color_pictures",
                                label: "色样图",
                                type: 'ComponentsInputImage'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "尺寸说明",
                        components: [{
                            modelName: 'content',
                            name: "size_description",
                            label: "尺寸说明",
                            type: 'ComponentsInputTextarea',
                            show_type: "详情"
                        }, ]
                    },
                ]
            }, ],
            toolBtn: []
        },
        {
            modelName: 'dialog',
            name: "apply3",
            type: 'DialogEdit',
            system_id: "system_word3",
            apiName_queryById: "queryById3",
            tableName: "content_file",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "flow_id",
                        label: "审批流程",
                        type: 'ComponentsInputSelect',
                        system_id: "system_flow_id3",
                        ajax_url: "queryApply",
                        props_label: "name",
                        props_value: "flow_id",
                        ajax_params: [{
                            type: "text",
                            name: "type",
                            value: 2
                        }],
                        associated_notice: ['system_examine_slider3'],
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
                        system_id: "system_examine_slider3",
                        style: {
                            width: "500px !important"
                        },
                        associated: function () {
                            let system_flow_id = utils.getPage().getComponents({
                                system_id: 'system_flow_id3'
                            })
                            let system_examine_slider = utils.getPage().getComponents({
                                system_id: 'system_examine_slider3'
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
                        system_id: "system_apply_id3",
                        type: 'ComponentsInputHidden'
                    },
                ]
            }, ],
            toolBtn: [{
                    label: "取消",
                    click: function (data: any) {
                        let dialog = utils.getStore().selectDialog({
                            name: 'apply3'
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
                                system_id: 'system_flow_id3'
                            })
                            let system_apply_id = utils.getPage().getComponents({
                                system_id: 'system_apply_id3'
                            })
                            let system_id =
                                utils.my_post({
                                    apiName: 'apply',
                                    params: {
                                        "id": system_apply_id.value,
                                        "flow_id": system_flow_id.value,
                                        "type": 2
                                    },
                                    ok: (json: any, dataAll: any) => {
                                        let dialog = utils.getStore().selectDialog({
                                            name: 'apply3'
                                        })
                                        dialog.show = false
                                        let content = utils.getPage().getComponents({
                                            system_id: 'content_file'
                                        })
                                        content.Requery()
                                    },
                                    err: (json: any, dataAll: any) => {
                                        alert("请求错误")
                                    }
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
            name: "detail3",
            type: 'DialogEdit',
            title: '详情',
            number_save: "货号",
            dialog_width: "80%",
            apiName_queryById: "queryById3",
            tableName: "content_file",
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
                                        name: "name",
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
        {
            modelName: 'dialog',
            name: "approve3",
            type: 'DialogEdit',
            tableName: "content_file",
            number_save: "货号",
            title: "审核",
            apiName_queryById: "queryById3",
            apiName_save: "examineOk3",
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
            name: "edit3",
            type: 'DialogEdit',
            save_close: false,
            load_data: true,
            number_save: "货号",
            tableName: "content_file",
            apiName_save: "save3",
            apiName_queryById: "queryById3",
            dialog_width: "100%",

            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                spread: true,
                label: "工艺单信息",
                name: "base1",
                system_id: "system_base11",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "基础信息",
                        components: [{
                                modelName: 'content',
                                name: "process_id",
                                label: "复制工艺单",
                                type: 'ComponentsInputSelect',
                                ajax_url: "queryByAll3",
                                props_label: "process_form_number",
                                props_value: "id",
                                system_id: "system_process_id1",
                                associated_notice: ["system_base11"]
                            },
                            {
                                modelName: 'content',
                                name: "factory_name",
                                label: "工厂",
                                type: 'ComponentsText',
                            },
                            {
                                modelName: 'content',
                                name: "factory_id",
                                label: "工厂",
                                type: 'ComponentsInputHidden',
                                system_id: "system_factory_id1",
                            },
                            {
                                modelName: 'content',
                                name: "process_form_number",
                                label: "工艺单编号",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入工艺单编号"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "sample_id",
                                label: "样品编号",
                                type: 'ComponentsInputSelect',
                                ajax_url: "sample",
                                props_label: "no",
                                props_value: "id",
                                system_id: 'system_sample_id',
                                associated_notice: ['system_sample_message1'],
                            },
                            {
                                modelName: 'content',
                                name: "producer",
                                label: "制作人",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "createdate",
                                label: "制作日期",
                                type: 'ComponentsInputDay'
                            },
                            {
                                modelName: 'content',
                                name: 'number_id',
                                label: 'number_id',
                                type: 'ComponentsInputHidden',
                                system_id: "system_number_id",
                                initValue() {
                                    let that: any = this
                                    let content = utils.getPage().getComponents({
                                        system_id: "content"
                                    })
                                    let value = content.selectRowOnly[content.primaryKey];
                                    if (utils.isNotNull(value)) {
                                        that.value = content.selectRowOnly[content.primaryKey]
                                    } else {
                                        that.value = that.value_default;
                                    }
                                }
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        system_id: 'system_sample_message1',
                        label: "样品信息",
                        components: [{
                                modelName: 'content',
                                name: "name",
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
                                type: 'ComponentsInput',
                                unit: "KG",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入毛重"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "net_weight",
                                label: "净重",
                                type: 'ComponentsInput',
                                unit: "KG",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入净重"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "packing_outsize",
                                label: "包装外径",
                                type: 'ComponentsInput',
                                unit: "CM",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入包装外径"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "product_size",
                                label: "产品尺寸",
                                type: 'ComponentsInput',
                                unit: "CM",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入产品尺寸"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "express_day",
                                label: "快递周长",
                                type: 'ComponentsInput',
                                unit: "CM",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入快递周长"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "volume_weight",
                                label: "体积重",
                                type: 'ComponentsInput',
                                unit: "KG",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入体积重"
                                }]
                            },
                        ],
                        associated: function () {
                            let system_sample_id = utils.getPage().getComponents({
                                system_id: 'system_sample_id'
                            })
                            let system_number_id = utils.getPage().getComponents({
                                system_id: 'system_number_id'
                            })
                            let system_factory_id = utils.getPage().getComponents({
                                system_id: 'system_factory_id1'
                            })
                            let system_sample_message = utils.getPage().getComponents({
                                system_id: 'system_sample_message1'
                            })
                            let system_id = utils.my_post({
                                apiName: 'querySampleMessage',
                                params: {
                                    "default_id_": system_sample_id.value,
                                    "number_id": system_number_id.value,
                                    "factory_id": system_factory_id.value
                                },
                                ok: (json: any, dataAll: any) => {
                                    system_sample_message.setFromValue(json)
                                },
                                err: (json: any, dataAll: any) => {
                                    system_sample_message.initValue()
                                    system_sample_message.setFromValue({
                                        id: system_sample_id.value
                                    })
                                }
                            })
                        }
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "部件信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_bjxx",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,
                            sort_able: true,
                            components: [{
                                    modelName: 'template',
                                    name: "component_id",
                                    label: "部件名称",
                                    type: 'ComponentsInput',
                                    style: {
                                        width: "100%"
                                    },
                                    // ajax_url: "component",
                                    // props_label: "name",
                                    // props_value: "id",
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写部件名称"
                                    }],
                                },
                                {
                                    modelName: 'template',
                                    name: "number",
                                    label: "数量",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput',
                                    rules: [{
                                        validator: utils.my_number,
                                        message: "只能填写数字"
                                    }, ]
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
                        label: "材质说明",
                        components: [{
                            modelName: 'content',
                            name: "material_description",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "description",
                                    label: "材质说明",
                                    type: 'ComponentsInputTextarea',
                                    style: {
                                        width: "100%"
                                    },
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写材质说明"
                                    }]
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
                        label: "配件信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_pjxx",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,
                            sort_able: true,
                            editMove: true,
                            system_id: "dialogContent",
                            tableDialog: "dialogCloud",
                            components: [{
                                    modelName: 'template',
                                    name: "part_id",
                                    label: "配件编号",
                                    type: 'ComponentsInputSelectAuto',
                                    ajax_url: "part",
                                    props_label: "no",
                                    props_note: "name",
                                    props_side: "caizhi",
                                    props_side0: "color",
                                    props_side1: "smalltab",
                                    props_side2: "size",
                                    props_value: "id",
                                    style: {
                                        width: "100%"
                                    },
                                    system_id: "system_partId_copyIndex",
                                    associated_notice: ["system_partNo_copyIndex"]
                                },
                                {
                                    modelName: 'template',
                                    name: "process_part_no",
                                    label: "组装图配件编号",
                                    type: 'ComponentsInput',
                                    style: {
                                        width: "100%"
                                    },
                                    system_id: 'system_partNo_copyIndex',
                                    associated: function (data: any) {
                                        let that: any = this
                                        let system_number_id = utils.getPage().getComponents({
                                            system_id: 'system_number_id'
                                        })
                                        let system_part_id = utils.getPage().getComponents({
                                            system_id: "system_partId_" + that.copy_number
                                        })
                                        let system_part_name = utils.getPage().getComponents({
                                            system_id: "system_partName_" + that.copy_number
                                        })
                                        let system_part_no = utils.getPage().getComponents({
                                            system_id: "system_partNo_" + that.copy_number
                                        })
                                        let system_part_specifications = utils.getPage().getComponents({
                                            system_id: "system_partSpecifications_" + that.copy_number
                                        })
                                        let system_part_material = utils.getPage().getComponents({
                                            system_id: "system_partMaterial_" + that.copy_number
                                        })
                                        let system_part_color = utils.getPage().getComponents({
                                            system_id: "system_partColor_" + that.copy_number
                                        })
                                        let system_part_surface = utils.getPage().getComponents({
                                            system_id: "system_partSurface_" + that.copy_number
                                        })

                                        if (utils.isNotNull(system_part_id)) {
                                            let system_id =
                                                utils.my_post({
                                                    apiName: 'queryPartById',
                                                    params: {
                                                        "default_id_": system_part_id.value,
                                                        "sort": that.copy_number,
                                                        "number_id": system_number_id.value
                                                    },
                                                    ok: (json: any, dataAll: any) => {
                                                        system_part_name.value = json.name
                                                        system_part_no.value = json.process_part_no
                                                        system_part_specifications.value = json.specifications
                                                        system_part_material.value = json.material_quality
                                                        system_part_color.value = json.color
                                                        system_part_surface.value = json.surface_treatment
                                                    },
                                                    err: (json: any, dataAll: any) => {
                                                        console.log("err")
                                                        system_part_name.initValue()
                                                        system_part_no.initValue()
                                                        system_part_specifications.initValue()
                                                        system_part_material.initValue()
                                                        system_part_color.initValue()
                                                        system_part_surface.initValue()
                                                    }
                                                })
                                        }
                                    }
                                },
                                {
                                    modelName: 'template',
                                    name: "name",
                                    label: "配件名称",
                                    type: 'ComponentsInputSelect',
                                    ajax_url: "part2",
                                    props_label: "name",
                                    props_value: "name",
                                    style: {
                                        width: "100%"
                                    },
                                    system_id: 'system_partName_copyIndex',
                                },
                                {
                                    modelName: 'template',
                                    name: "number",
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
                                    type: 'ComponentsInputSelect',
                                    on_focus:true,
                                    ajax_post: "part3",
                                    props_label: "specifications",
                                    props_value: "specifications",
                                    ajax_params: [{
                                        type: "addparam",
                                        name: "name",
                                        system_id: "system_partName_copyIndex"
                                    }],
                                    system_id: 'system_partSpecifications_copyIndex',
                                },
                                {
                                    modelName: 'template',
                                    name: "material_quality",
                                    label: "材质",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputSelect',
                                    on_focus:true,
                                    ajax_post: "part4",
                                    props_label: "material_quality",
                                    props_value: "material_quality",
                                    ajax_params: [{
                                            type: "addparam",
                                            name: "name",
                                            system_id: "system_partName_copyIndex"
                                        },
                                        {
                                            type: "addparam",
                                            name: "specifications",
                                            system_id: "system_partSpecifications_copyIndex"
                                        }
                                    ],
                                    system_id: 'system_partMaterial_copyIndex',
                                },
                                {
                                    modelName: 'template',
                                    name: "color",
                                    label: "颜色",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputSelect',
                                    on_focus:true,
                                    on_blur:true,
                                    ajax_post: "part5",
                                    props_label: "color",
                                    props_value: "color",
                                    ajax_params: [{
                                        type: "addparam",
                                        name: "name",
                                        system_id: "system_partName_copyIndex"
                                    }, {
                                        type: "addparam",
                                        name: "specifications",
                                        system_id: "system_partSpecifications_copyIndex"
                                    }, {
                                        type: "addparam",
                                        name: "material_quality",
                                        system_id: "system_partMaterial_copyIndex"
                                    }],
                                    system_id: 'system_partColor_copyIndex',
                                    associated_color: ["system_partSurface_copyIndex"]
                                },
                                {
                                    modelName: 'template',
                                    name: "surface_treatment",
                                    label: "表面处理",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput',
                                    system_id: 'system_partSurface_copyIndex',
                                    associated: function (data: any) {
                                        let that: any = this
                                        let system_number_id = utils.getPage().getComponents({
                                            system_id: 'system_number_id'
                                        })
                                        let system_part_id = utils.getPage().getComponents({
                                            system_id: "system_partId_" + that.copy_number
                                        })
                                        let system_part_name = utils.getPage().getComponents({
                                            system_id: "system_partName_" + that.copy_number
                                        })
                                        let system_part_no = utils.getPage().getComponents({
                                            system_id: "system_partNo_" + that.copy_number
                                        })
                                        let system_part_specifications = utils.getPage().getComponents({
                                            system_id: "system_partSpecifications_" + that.copy_number
                                        })
                                        let system_part_material = utils.getPage().getComponents({
                                            system_id: "system_partMaterial_" + that.copy_number
                                        })
                                        let system_part_color = utils.getPage().getComponents({
                                            system_id: "system_partColor_" + that.copy_number
                                        })
                                        let system_part_surface = utils.getPage().getComponents({
                                            system_id: "system_partSurface_" + that.copy_number
                                        })
                                        if (utils.isNotNull(system_part_color)) {
                                        let system_id =
                                            utils.my_post({
                                                apiName: 'part6',
                                                params: {
                                                    "default_id_": system_part_id.value,
                                                    "sort": that.copy_number,
                                                    "number_id": system_number_id.value,
                                                    "name": system_part_name.value,
                                                    "specifications": system_part_specifications.value,
                                                    "material_quality": system_part_material.value,
                                                    "color": system_part_color.value,
                                                },
                                                ok: (json: any, dataAll: any) => {
                                                    system_part_id.value = json.part_id
                                                    system_part_no.value = json.process_part_no
                                                    system_part_surface.value = json.surface_treatment
                                                },
                                                err: (json: any, dataAll: any) => {
                                                    console.log("err")
                                                    system_part_id.initValue()
                                                    system_part_no.initValue()
                                                    system_part_surface.initValue()
                                                }
                                            })
                                        }
                                    }
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
                                    name: "id",
                                    label: "id",
                                    type: 'ComponentsInputHidden'
                                },
                            ],
                            // cellClick: function (column: any) {
                            //     console.log(column)
                            //     if (column.label == "配件编号") {
                            //         let edit = utils.getStore().openDialog({
                            //             name: 'cloud',
                            //             title: "配件选择"
                            //         })
                            //         edit.initValue()
                            //         edit.initAjax()
                            //         edit.query()
                            //     }
                            // }
                        }, ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "配件说明",
                        components: [{
                            modelName: 'content',
                            name: "part_description",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "description",
                                    label: "配件说明",
                                    type: 'ComponentsInputTextarea',
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写配件说明"
                                    }]
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
                        label: "包装材料信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_bzcl",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "type",
                                    label: "包材类型",
                                    type: 'ComponentsInput',
                                    style: {
                                        width: "100%"
                                    },
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写包材类型"
                                    }]
                                },
                                {
                                    modelName: 'template',
                                    name: "name",
                                    label: "包材名称",
                                    type: 'ComponentsInput',
                                    style: {
                                        width: "100%"
                                    }
                                },
                                {
                                    modelName: 'template',
                                    name: "number",
                                    label: "数量",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput',
                                    rules: [{
                                        validator: utils.my_number,
                                        message: "只能填写数字"
                                    }]
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
                                    name: "process",
                                    label: "工艺指标",
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
                        label: "包材说明",
                        components: [{
                            modelName: 'content',
                            name: "package_description",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "description",
                                    label: "包材说明",
                                    type: 'ComponentsInputTextarea',
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写包材说明"
                                    }]
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
                        label: "产品测试",
                        components: [{
                            modelName: 'content',
                            name: "gyd_test",
                            label: "产品测试",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "test_id",
                                    label: "测试项目",
                                    type: 'ComponentsInputSelect',
                                    ajax_url: "test",
                                    props_label: "item",
                                    props_value: "id",
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请选择测试项目"
                                    }]
                                },
                                // {modelName:'template',name:"standard",label:"测试标准",type: 'ComponentsInput'},
                                // {modelName:'template',name:"requirement",label:"测试要求",type: 'ComponentsInput'},
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
                        label: "签样信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_qyxx",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "signature_number",
                                    label: "签样编号",
                                    type: 'ComponentsInput',
                                    style: {
                                        width: "100%"
                                    },
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写签样编号"
                                    }]
                                },
                                {
                                    modelName: 'template',
                                    name: "date",
                                    label: "签样日期",
                                    type: 'ComponentsInputDay',
                                    day_auto: true,
                                    style: {
                                        width: "100%"
                                    },
                                },
                                {
                                    modelName: 'template',
                                    name: "name",
                                    label: "签样名称",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'template',
                                    name: "position",
                                    label: "签样部位",
                                    type: 'ComponentsInput',
                                    style: {
                                        width: "100%"
                                    },
                                },
                                {
                                    modelName: 'template',
                                    name: "color",
                                    label: "签样颜色",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'template',
                                    name: "color_number",
                                    label: "色样编号",
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
                        label: "签样意见",
                        components: [{
                            modelName: 'content',
                            name: "gyd_qyyj",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "qyyj_bh",
                                    label: "签样编号",
                                    type: 'ComponentsInput',
                                    style: {
                                        width: "100%"
                                    },
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写签样编号"
                                    }]
                                },
                                {
                                    modelName: 'template',
                                    name: "qyyj_rq",
                                    label: "签样日期",
                                    type: 'ComponentsInputDay',
                                    style: {
                                        width: "100%"
                                    },
                                    day_auto: true
                                },
                                {
                                    modelName: 'template',
                                    name: "opinion",
                                    label: "签样意见",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputTextarea'
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
                        label: "质量重点注意事项",
                        components: [{
                            modelName: 'content',
                            name: "gyd_zysx",
                            label: "注意事项",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "attention",
                                    label: "注意事项",
                                    type: 'ComponentsInputTextarea',
                                    style: "width:500px;",
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写注意事项"
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
                        label: "产品尺寸图片",
                        components: [{
                                modelName: 'content',
                                name: "overallsize_pictures",
                                label: "整体尺寸图",
                                type: 'ComponentsInputUploadImage'
                            },
                            {
                                modelName: 'content',
                                name: "detailsize_pictures",
                                label: "细节尺寸图",
                                type: 'ComponentsInputUploadImage'
                            },
                            {
                                modelName: 'content',
                                name: "localsize_pictures",
                                label: "局部尺寸图",
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
                                name: "brand_pictures",
                                label: "商标位置图",
                                type: 'ComponentsInputUploadImage'
                            },
                            {
                                modelName: 'content',
                                name: "sealsample_pictures",
                                label: "签封样图",
                                type: 'ComponentsInputUploadImage'
                            },
                            {
                                modelName: 'content',
                                name: "color_pictures",
                                label: "色样图",
                                type: 'ComponentsInputUploadImage'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "尺寸说明",
                        components: [{
                            modelName: 'content',
                            name: "size_description",
                            label: "尺寸说明",
                            type: 'ComponentsInputTextarea'
                        }, ]
                    },
                ],
                associated: function () {
                    let system_process_id = utils.getPage().getComponents({
                        system_id: 'system_process_id1'
                    })
                    let system_base1 = utils.getPage().getComponents({
                        system_id: 'system_base11'
                    })
                    if (utils.isNotNull(system_process_id.value)) {
                        let system_id =
                            utils.my_post({
                                apiName: 'queryById5',
                                params: {
                                    "default_id_": system_process_id.value
                                },
                                ok: (json: any, dataAll: any) => {
                                    system_base1.setFromValue(json)
                                },
                                err: (json: any, dataAll: any) => {
                                    system_base1.initValue()
                                    system_base1.setFromValue({
                                        id: system_process_id.value
                                    })
                                }
                            })
                    }
                }

            }, ]
        },
        {
            modelName: 'dialog',
            name: "increase1",
            type: 'DialogEdit',
            by_id: false,
            save_close: false,
            tableName: "content",
            apiName_save: "save5",
            dialog_width: "80%",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                label: "签封样",
                components: [{
                        modelName: 'content',
                        name: "seal_no",
                        label: "",
                        type: 'ComponentsInputForm',
                        addTrue: true,
                        components: [{
                                modelName: 'template',
                                name: "url",
                                label: '图片',
                                type: 'ComponentsInputUploadImage',
                            },
                            {
                                modelName: 'template',
                                name: "factory_id",
                                label: "工厂",
                                type: 'ComponentsInputSelect',
                                rules: [{
                                    validator: utils.my_required_array,
                                    message: "请选择工厂"
                                }],
                                ajax_url: "factory",
                                props_label: "name",
                                props_value: "id"
                            },
                            {
                                modelName: 'template',
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
                                modelName: 'template',
                                name: "no",
                                label: "签封样编号",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入签封样编号"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "sample_holder",
                                label: "签样人",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入签样人"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "approver",
                                label: "审批人",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'template',
                                name: "person",
                                label: "保管人",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'template',
                                name: "place",
                                label: "保管地点",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入保管地点"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "date",
                                label: "签样日期",
                                type: 'ComponentsInputDay',
                                day_auto: true,
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择签样日期"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "opinion",
                                label: "签样意见",
                                type: 'ComponentsInputTextarea',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择签样日期"
                                }]
                            },
                        ]
                    },
                    {
                        modelName: 'content',
                        name: 'number_id',
                        label: 'number_id',
                        type: 'ComponentsInputHidden',
                        initValue() {
                            let that: any = this
                            let content = utils.getPage().getComponents({
                                system_id: "content"
                            })
                            let value = content.selectRowOnly[content.primaryKey];
                            if (utils.isNotNull(value)) {
                                that.value = content.selectRowOnly[content.primaryKey]
                            } else {
                                that.value = that.value_default;
                            }
                        }
                    },
                ]
            }]
        },
        {
            modelName: 'dialog',
            name: "increase2",
            type: 'DialogEdit',
            by_id: false,
            save_close: false,
            tableName: "content",
            apiName_save: "save6",
            dialog_width: "80%",
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                label: "组装图",
                components: [{
                        modelName: 'content',
                        name: "assembly_no",
                        label: "",
                        type: 'ComponentsInputForm',
                        addTrue: true,
                        components: [{
                                modelName: 'template',
                                name: "url1",
                                label: '组装图二维码',
                                type: 'ComponentsInputUploadImage',
                                // rules: [{validator: utils.my_required_upload, message: "请上传图片"}]
                            },
                            {
                                modelName: 'template',
                                name: "factory_id",
                                label: "工厂",
                                type: 'ComponentsInputSelect',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请选择工厂"
                                }],
                                ajax_url: "factory",
                                props_label: "name",
                                props_value: "id"
                            },
                            {
                                modelName: 'template',
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
                                modelName: 'template',
                                name: "no",
                                label: "组装图编号",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入组装图编号"
                                }]
                            },
                            {
                                modelName: 'template',
                                name: "producer",
                                label: "制作人",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'template',
                                name: "createdate",
                                label: "制作日期",
                                type: 'ComponentsInputDay',
                                day_auto: true
                            },
                            {
                                modelName: 'template',
                                name: "note",
                                label: "备注",
                                type: 'ComponentsInputTextarea'
                            },
                            {
                                modelName: 'template',
                                name: "file",
                                label: "上传文件",
                                upload_url: "/api/upload/uploadForAssembly",
                                type: 'ComponentsInputUpload'
                            },
                            {
                                modelName: 'template',
                                name: "url",
                                label: '文件预览',
                                type: 'ComponentsInputUploadImage',
                                upload_url: "/api/upload/uploadForAssembly",
                                rules: [{
                                    validator: utils.my_required_upload,
                                    message: "请上传图片"
                                }]
                            },

                        ]
                    },
                    {
                        modelName: 'content',
                        name: 'number_id',
                        label: 'number_id',
                        type: 'ComponentsInputHidden',
                        initValue() {
                            let that: any = this
                            let content = utils.getPage().getComponents({
                                system_id: "content"
                            })
                            let value = content.selectRowOnly[content.primaryKey];
                            if (utils.isNotNull(value)) {
                                that.value = content.selectRowOnly[content.primaryKey]
                            } else {
                                that.value = that.value_default;
                            }
                        }
                    },
                ]
            }]
        },
        {
            modelName: 'dialog',
            name: "increase3",
            type: 'DialogEdit',
            save_close: false,
            tableName: "content",
            apiName_save: "save3",
            apiName_queryById: "queryById",
            dialog_width: "100%",
            components: [{
                modelName: 'from',
                type: 'AssemblyCollapse',
                spread: true,
                label: "工艺单信息",
                name: "base1",
                system_id: "system_base1",
                components: [{
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "基础信息",
                        components: [{
                                modelName: 'content',
                                name: "process_id",
                                label: "复制工艺单",
                                type: 'ComponentsInputSelect',
                                ajax_url: "queryByAll3",
                                props_label: "process_form_number",
                                props_value: "id",
                                system_id: "system_process_id",
                                associated_notice: ["system_base1"]
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
                                ajax_url: "factory",
                                props_label: "name",
                                props_value: "id",
                                system_id: "system_factory_id",
                                initValue() {
                                    let that: any = this
                                    let content = utils.getPage().getComponents({
                                        system_id: "content"
                                    })
                                    let value = content.selectRowOnly["factory_id"];
                                    if (utils.isNotNull(value)) {
                                        that.value = value
                                    } else {
                                        that.value = that.value_default;
                                    }
                                }
                            },
                            {
                                modelName: 'content',
                                name: "process_form_number",
                                label: "工艺单编号",
                                type: 'ComponentsInput',
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入工艺单编号"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "sample_id",
                                label: "样品编号",
                                type: 'ComponentsInputSelect',
                                ajax_url: "sample",
                                props_label: "no",
                                props_value: "id",
                                system_id: 'system_sample_id1',
                                associated_notice: ['system_sample_message'],
                            },
                            {
                                modelName: 'content',
                                name: "producer",
                                label: "制作人",
                                type: 'ComponentsInput'
                            },
                            {
                                modelName: 'content',
                                name: "createdate",
                                label: "制作日期",
                                type: 'ComponentsInputDay'
                            },
                            {
                                modelName: 'content',
                                name: 'number_id',
                                label: 'number_id',
                                type: 'ComponentsInputHidden',
                                system_id: "system_number_id1",
                                initValue() {
                                    let that: any = this
                                    let content = utils.getPage().getComponents({
                                        system_id: "content"
                                    })
                                    let value = content.selectRowOnly[content.primaryKey];
                                    if (utils.isNotNull(value)) {
                                        that.value = content.selectRowOnly[content.primaryKey]
                                    } else {
                                        that.value = that.value_default;
                                    }
                                }
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        system_id: 'system_sample_message',
                        label: "样品信息",
                        components: [{
                                modelName: 'content',
                                name: "name",
                                label: "货号",
                                type: 'ComponentsText',
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
                                type: 'ComponentsInput',
                                unit: "KG",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入毛重"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "net_weight",
                                label: "净重",
                                type: 'ComponentsInput',
                                unit: "KG",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入净重"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "packing_outsize",
                                label: "包装外径",
                                type: 'ComponentsInput',
                                unit: "CM",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入包装外径"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "product_size",
                                label: "产品尺寸",
                                type: 'ComponentsInput',
                                unit: "CM",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入产品尺寸"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "express_day",
                                label: "快递周长",
                                type: 'ComponentsInput',
                                unit: "CM",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入快递周长"
                                }]
                            },
                            {
                                modelName: 'content',
                                name: "volume_weight",
                                label: "体积重",
                                type: 'ComponentsInput',
                                unit: "KG",
                                rules: [{
                                    validator: utils.my_required,
                                    message: "请输入体积重"
                                }]
                            },
                        ],
                        associated: function () {
                            let system_sample_id = utils.getPage().getComponents({
                                system_id: 'system_sample_id1'
                            })
                            let system_number_id = utils.getPage().getComponents({
                                system_id: 'system_number_id1'
                            })
                            let system_factory_id = utils.getPage().getComponents({
                                system_id: 'system_factory_id'
                            })
                            let system_sample_message = utils.getPage().getComponents({
                                system_id: 'system_sample_message'
                            })
                            let system_id = utils.my_post({
                                apiName: 'querySampleMessage',
                                params: {
                                    "default_id_": system_sample_id.value,
                                    "number_id": system_number_id.value,
                                    "factory_id": system_factory_id.value
                                },
                                ok: (json: any, dataAll: any) => {
                                    system_sample_message.setFromValue(json)
                                },
                                err: (json: any, dataAll: any) => {
                                    system_sample_message.initValue()
                                    system_sample_message.setFromValue({
                                        id: system_sample_id.value
                                    })
                                }
                            })
                        }
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "部件信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_bjxx",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,
                            sort_able: true,
                            components: [{
                                    modelName: 'template',
                                    name: "component_id",
                                    label: "部件名称",
                                    type: 'ComponentsInput',
                                    style: {
                                        width: "100%"
                                    },
                                    // ajax_url: "component",
                                    // props_label: "name",
                                    // props_value: "id",
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写部件名称"
                                    }],
                                },
                                {
                                    modelName: 'template',
                                    name: "number",
                                    label: "数量",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput',
                                    rules: [{
                                        validator: utils.my_number,
                                        message: "只能填写数字"
                                    }, ]
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
                        label: "材质说明",
                        components: [{
                            modelName: 'content',
                            name: "material_description",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,
                            components: [{
                                    modelName: 'template',
                                    name: "description",
                                    label: "材质说明",
                                    type: 'ComponentsInputTextarea',
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写材质说明"
                                    }]
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
                        label: "配件信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_pjxx",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,
                            sort_able: true,
                            editMove: true,
                            system_id: "dialogContent",
                            tableDialog: "dialogCloud",
                            components: [{
                                    modelName: 'template',
                                    name: "part_id",
                                    label: "配件编号",
                                    type: 'ComponentsInputSelectAuto',
                                    ajax_url: "part",
                                    props_label: "no",
                                    props_note: "name",
                                    props_side: "caizhi",
                                    props_side0: "color",
                                    props_side1: "smalltab",
                                    props_side2: "size",
                                    props_value: "id",
                                    style: {
                                        width: "100%"
                                    },
                                    system_id: "system_partId1_copyIndex",
                                    associated_notice: ["system_partNo1_copyIndex"]
                                },
                                {
                                    modelName: 'template',
                                    name: "process_part_no",
                                    label: "组装图配件编号",
                                    type: 'ComponentsInput',
                                    style: {
                                        width: "100%"
                                    },
                                    system_id: 'system_partNo1_copyIndex',
                                    associated: function (data: any) {
                                        let that: any = this
                                        let system_number_id = utils.getPage().getComponents({
                                            system_id: 'system_number_id1'
                                        })
                                        let system_part_id = utils.getPage().getComponents({
                                            system_id: "system_partId1_" + that.copy_number
                                        })
                                        let system_part_name = utils.getPage().getComponents({
                                            system_id: "system_partName1_" + that.copy_number
                                        })
                                        let system_part_no = utils.getPage().getComponents({
                                            system_id: "system_partNo1_" + that.copy_number
                                        })
                                        let system_part_specifications = utils.getPage().getComponents({
                                            system_id: "system_partSpecifications1_" + that.copy_number
                                        })
                                        let system_part_material = utils.getPage().getComponents({
                                            system_id: "system_partMaterial1_" + that.copy_number
                                        })
                                        let system_part_color = utils.getPage().getComponents({
                                            system_id: "system_partColor1_" + that.copy_number
                                        })
                                        let system_part_surface = utils.getPage().getComponents({
                                            system_id: "system_partSurface1_" + that.copy_number
                                        })

                                        if (utils.isNotNull(system_part_id)) {
                                            let system_id =
                                                utils.my_post({
                                                    apiName: 'queryPartById',
                                                    params: {
                                                        "default_id_": system_part_id.value,
                                                        "sort": that.copy_number,
                                                        "number_id": system_number_id.value
                                                    },
                                                    ok: (json: any, dataAll: any) => {
                                                        system_part_name.value = json.name
                                                        system_part_no.value = json.process_part_no
                                                        system_part_specifications.value = json.specifications
                                                        system_part_material.value = json.material_quality
                                                        system_part_color.value = json.color
                                                        system_part_surface.value = json.surface_treatment
                                                    },
                                                    err: (json: any, dataAll: any) => {
                                                        console.log("err")
                                                        system_part_name.initValue()
                                                        system_part_no.initValue()
                                                        system_part_specifications.initValue()
                                                        system_part_material.initValue()
                                                        system_part_color.initValue()
                                                        system_part_surface.initValue()
                                                    }
                                                })
                                        }
                                    }
                                },
                                {
                                    modelName: 'template',
                                    name: "name",
                                    label: "配件名称",
                                    type: 'ComponentsInputSelect',
                                    ajax_url: "part2",
                                    props_label: "name",
                                    props_value: "name",
                                    style: {
                                        width: "100%"
                                    },
                                    system_id: 'system_partName1_copyIndex',
                                },
                                {
                                    modelName: 'template',
                                    name: "number",
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
                                    type: 'ComponentsInputSelect',
                                    on_focus:true,
                                    ajax_post: "part3",
                                    props_label: "specifications",
                                    props_value: "specifications",
                                    ajax_params: [{
                                        type: "addparam",
                                        name: "name",
                                        system_id: "system_partName1_copyIndex"
                                    }],
                                    system_id: 'system_partSpecifications1_copyIndex',
                                },
                                {
                                    modelName: 'template',
                                    name: "material_quality",
                                    label: "材质",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputSelect',
                                    on_focus:true,
                                    ajax_post: "part4",
                                    props_label: "material_quality",
                                    props_value: "material_quality",
                                    ajax_params: [{
                                            type: "addparam",
                                            name: "name",
                                            system_id: "system_partName1_copyIndex"
                                        },
                                        {
                                            type: "addparam",
                                            name: "specifications",
                                            system_id: "system_partSpecifications1_copyIndex"
                                        }
                                    ],
                                    system_id: 'system_partMaterial1_copyIndex',
                                },
                                {
                                    modelName: 'template',
                                    name: "color",
                                    label: "颜色",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputSelect',
                                    on_focus:true,
                                    on_blur:true,
                                    ajax_post: "part5",
                                    props_label: "color",
                                    props_value: "color",
                                    ajax_params: [{
                                        type: "addparam",
                                        name: "name",
                                        system_id: "system_partName1_copyIndex"
                                    }, {
                                        type: "addparam",
                                        name: "specifications",
                                        system_id: "system_partSpecifications1_copyIndex"
                                    }, {
                                        type: "addparam",
                                        name: "material_quality",
                                        system_id: "system_partMaterial1_copyIndex"
                                    }],
                                    system_id: 'system_partColor1_copyIndex',
                                    associated_color: ["system_partSurface1_copyIndex"]
                                },
                                {
                                    modelName: 'template',
                                    name: "surface_treatment",
                                    label: "表面处理",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput',
                                    system_id: 'system_partSurface1_copyIndex',
                                    associated: function (data: any) {
                                        let that: any = this
                                        let system_number_id = utils.getPage().getComponents({
                                            system_id: 'system_number_id1'
                                        })
                                        let system_part_id = utils.getPage().getComponents({
                                            system_id: "system_partId1_" + that.copy_number
                                        })
                                        let system_part_name = utils.getPage().getComponents({
                                            system_id: "system_partName1_" + that.copy_number
                                        })
                                        let system_part_no = utils.getPage().getComponents({
                                            system_id: "system_partNo1_" + that.copy_number
                                        })
                                        let system_part_specifications = utils.getPage().getComponents({
                                            system_id: "system_partSpecifications1_" + that.copy_number
                                        })
                                        let system_part_material = utils.getPage().getComponents({
                                            system_id: "system_partMaterial1_" + that.copy_number
                                        })
                                        let system_part_color = utils.getPage().getComponents({
                                            system_id: "system_partColor1_" + that.copy_number
                                        })
                                        let system_part_surface = utils.getPage().getComponents({
                                            system_id: "system_partSurface1_" + that.copy_number
                                        })
                                        if (utils.isNotNull(system_part_color)) {
                                        let system_id =
                                            utils.my_post({
                                                apiName: 'part6',
                                                params: {
                                                    "default_id_": system_part_id.value,
                                                    "sort": that.copy_number,
                                                    "number_id": system_number_id.value,
                                                    "name": system_part_name.value,
                                                    "specifications": system_part_specifications.value,
                                                    "material_quality": system_part_material.value,
                                                    "color": system_part_color.value,
                                                },
                                                ok: (json: any, dataAll: any) => {
                                                    system_part_id.value = json.part_id
                                                    system_part_no.value = json.process_part_no
                                                    system_part_surface.value = json.surface_treatment
                                                },
                                                err: (json: any, dataAll: any) => {
                                                    console.log("err")
                                                    system_part_id.initValue()
                                                    system_part_no.initValue()
                                                    system_part_surface.initValue()
                                                }
                                            })
                                    }
                                }
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
                                    name: "id",
                                    label: "id",
                                    type: 'ComponentsInputHidden'
                                },
                            ],
                            // cellClick: function (column: any) {
                            //     console.log(column)
                            //     if (column.label == "配件编号") {
                            //         let edit = utils.getStore().openDialog({
                            //             name: 'cloud',
                            //             title: "配件选择"
                            //         })
                            //         edit.initValue()
                            //         edit.initAjax()
                            //         edit.query()
                            //     }
                            // }
                        }, ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "配件说明",
                        components: [{
                            modelName: 'content',
                            name: "part_description",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "description",
                                    label: "配件说明",
                                    type: 'ComponentsInputTextarea',
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写配件说明"
                                    }]
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
                        label: "包装材料信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_bzcl",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "type",
                                    label: "包材类型",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput',
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写包材类型"
                                    }]
                                },
                                {
                                    modelName: 'template',
                                    name: "name",
                                    label: "包材名称",
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
                                    rules: [{
                                        validator: utils.my_number,
                                        message: "只能填写数字"
                                    }]
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
                                    name: "process",
                                    label: "工艺指标",
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
                        label: "包材说明",
                        components: [{
                            modelName: 'content',
                            name: "package_description",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "description",
                                    label: "包材说明",
                                    type: 'ComponentsInputTextarea',
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写包材说明"
                                    }]
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
                        label: "产品测试",
                        components: [{
                            modelName: 'content',
                            name: "gyd_test",
                            label: "产品测试",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "test_id",
                                    label: "测试项目",
                                    type: 'ComponentsInputSelect',
                                    ajax_url: "test",
                                    props_label: "item",
                                    props_value: "id",
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请选择测试项目"
                                    }]
                                },
                                // {modelName:'template',name:"standard",label:"测试标准",type: 'ComponentsInput'},
                                // {modelName:'template',name:"requirement",label:"测试要求",type: 'ComponentsInput'},
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
                        label: "签样信息",
                        components: [{
                            modelName: 'content',
                            name: "gyd_qyxx",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "signature_number",
                                    label: "签样编号",
                                    type: 'ComponentsInput',
                                    style: {
                                        width: "100%"
                                    },
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写签样编号"
                                    }]
                                },
                                {
                                    modelName: 'template',
                                    name: "date",
                                    label: "签样日期",
                                    type: 'ComponentsInputDay',
                                    style: {
                                        width: "100%"
                                    },
                                    day_auto: true
                                },
                                {
                                    modelName: 'template',
                                    name: "name",
                                    label: "签样名称",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'template',
                                    name: "position",
                                    label: "签样部位",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'template',
                                    name: "color",
                                    label: "签样颜色",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput'
                                },
                                {
                                    modelName: 'template',
                                    name: "color_number",
                                    label: "色样编号",
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
                        label: "签样意见",
                        components: [{
                            modelName: 'content',
                            name: "gyd_qyyj",
                            label: "",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "qyyj_bh",
                                    label: "签样编号",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInput',
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写签样编号"
                                    }]
                                },
                                {
                                    modelName: 'template',
                                    name: "qyyj_rq",
                                    label: "签样日期",
                                    style: {
                                        width: "100%"
                                    },
                                    type: 'ComponentsInputDay',
                                    day_auto: true
                                },
                                {
                                    modelName: 'template',
                                    name: "opinion",
                                    style: {
                                        width: "100%"
                                    },
                                    label: "签样意见",
                                    type: 'ComponentsInputTextarea'
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
                        label: "质量重点注意事项",
                        components: [{
                            modelName: 'content',
                            name: "gyd_zysx",
                            label: "注意事项",
                            type: 'ComponentsInputTable',
                            label_show: false,

                            components: [{
                                    modelName: 'template',
                                    name: "attention",
                                    label: "注意事项",
                                    type: 'ComponentsInputTextarea',
                                    style: "width:500px;",
                                    rules: [{
                                        validator: utils.my_required,
                                        message: "请填写注意事项"
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
                        label: "产品尺寸图片",
                        components: [{
                                modelName: 'content',
                                name: "overallsize_pictures",
                                label: "整体尺寸图",
                                type: 'ComponentsInputUploadImage'
                            },
                            {
                                modelName: 'content',
                                name: "detailsize_pictures",
                                label: "细节尺寸图",
                                type: 'ComponentsInputUploadImage'
                            },
                            {
                                modelName: 'content',
                                name: "localsize_pictures",
                                label: "局部尺寸图",
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
                                name: "brand_pictures",
                                label: "商标位置图",
                                type: 'ComponentsInputUploadImage'
                            },
                            {
                                modelName: 'content',
                                name: "sealsample_pictures",
                                label: "签封样图",
                                type: 'ComponentsInputUploadImage'
                            },
                            {
                                modelName: 'content',
                                name: "color_pictures",
                                label: "色样图",
                                type: 'ComponentsInputUploadImage'
                            },
                        ]
                    },
                    {
                        modelName: 'from',
                        type: 'AssemblyFrom',
                        label: "尺寸说明",
                        components: [{
                            modelName: 'content',
                            name: "size_description",
                            label: "尺寸说明",
                            type: 'ComponentsInputTextarea'
                        }, ]
                    },
                ],
                associated: function () {
                    let system_process_id = utils.getPage().getComponents({
                        system_id: 'system_process_id'
                    })
                    let system_base1 = utils.getPage().getComponents({
                        system_id: 'system_base1'
                    })
                    let system_id =
                        utils.my_post({
                            apiName: 'queryById5',
                            params: {
                                "default_id_": system_process_id.value
                            },
                            ok: (json: any, dataAll: any) => {
                                system_base1.setFromValue(json)
                            },
                            err: (json: any, dataAll: any) => {
                                system_base1.initValue()
                                system_base1.setFromValue({
                                    id: system_process_id.value
                                })
                            }
                        })
                }

            }, ]
        },
        {
            modelName: 'dialog',
            name: "delete3",
            type: 'DialogSelect',
            valueModel: "货号",
            title: '删除',
            msg: '是否确认删除？',
            tableName: "content_file",
            apiName_save: "delete3"
        },
        {
            modelName: 'dialog',
            name: "export1",
            downloadType: "货号",
            tableName: "content_file",
            apiName_download: "export",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "export2",
            downloadType: "货号",
            tableName: "content_file",
            apiName_download: "export",
            type: 'DialogDownload'
        },
        {
            modelName: 'dialog',
            name: "cloud",
            type: 'DialogParts',
            dialog_width: "80%",
            apiName_queryById: "partsQuery",
            apiName_save: "save",
            components: [{
                    modelName: 'query',
                    type: 'AssemblyFrom',
                    system_id: "dialogQuery",
                    contentName: 'dialogCloud',
                    apiNameQuery: "partsQuery",
                    components: [{
                            modelName: 'content',
                            name: "no",
                            label: "配件编号",
                            label_show: true,
                            label_width: "140px",
                            type: 'ComponentsInput'
                        },
                        {
                            modelName: 'content',
                            name: "name",
                            label: "配件名称",
                            label_show: true,
                            label_width: "140px",
                            type: 'ComponentsInput'
                        },
                        {
                            modelName: 'content',
                            contentName: 'dialogCloud',
                            type: 'ComponentsInputReQuery'
                        },
                    ]
                },
                {
                    modelName: 'content',
                    title: "配件信息管理",
                    type: 'AssemblyContent',
                    system_id: "dialogCloud",
                    apiNameQuery: "partsQuery",
                    queryName: "dialogQuery",
                    toolBtn: [],
                    components: [{
                            modelName: 'content',
                            name: "no",
                            label: "配件编号",
                            type: 'ComponentsInput'
                        },
                        {
                            modelName: 'content',
                            name: "bigtab",
                            label: "小类",
                            type: 'ComponentsInput'
                        },
                        {
                            modelName: 'content',
                            name: "smalltab",
                            label: "大类",
                            type: 'ComponentsInput'
                        },
                        {
                            modelName: 'content',
                            name: "name",
                            label: "配件名称",
                            type: 'ComponentsInput'
                        },
                        {
                            modelName: 'content',
                            name: "size",
                            label: "尺寸",
                            type: 'ComponentsInput'
                        },
                        {
                            modelName: 'content',
                            name: "color",
                            label: "颜色",
                            type: 'ComponentsInput'
                        },
                        {
                            modelName: 'content',
                            name: "caizhi",
                            label: "材质",
                            type: 'ComponentsInput'
                        },
                        {
                            modelName: 'content',
                            name: "bmcl",
                            label: "表面处理",
                            type: 'ComponentsInput'
                        },
                        {
                            modelName: 'content',
                            name: "number_name",
                            label: "适用货号",
                            type: 'ComponentsInput',
                            value_default: "点击查看"
                        }
                    ],
                    tableBtn: [{
                        label: "选择",
                        type: "primary",
                        click: function (data: any) {
                            let dialog = utils.getStore().selectDialog({
                                name: 'cloud'
                            })
                            console.log(dialog)
                            // dialog.show = false
                            // dialog.selected(data)
                        }
                    }, ]
                    // cellClick(column: any) {
                    //     if (column.label == "适用货号") {
                    //         let edit = utils.getStore().openDialog({
                    //             name: 'editTable',
                    //             title: "适用货号"
                    //         })
                    //         edit.query()
                    //     }
                    // },
                },
            ],
        }
    ]
}
export default myModule