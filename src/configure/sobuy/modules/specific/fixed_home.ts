import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'fixed_home',
    version: 'PageNormal',
    api: {
        query: "/index/queryTZ",
        query2: "/index/myMessage",
        queryById: "/index/readMessageById",
        allRead: "/index/readMessages",
        save2: "/index/readMessage"
    },
    initPage() { //进入页面执行
        let content = utils.getPage().getComponents({
            system_id: "content"
        })
        if (utils.isNotNull(content) && utils.isNotNull(content.query)) {
            content.query()
        }
        let content2 = utils.getPage().getComponents({
            system_id: "content2"
        })
        if (utils.isNotNull(content2) && utils.isNotNull(content2.query)) {
            content2.query()
        }
    },
    components: [{
            modelName: 'content',
            type: 'AssemblyContent',
            selectionshow: false,
            title: "通知公告",
            components: [{
                    modelName: 'content',
                    name: "message",
                    label: "内容",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "file0",
                    label: "文件",
                    type: 'ComponentsInputHidden'
                },
                {
                    modelName: 'content',
                    name: "create_time",
                    label: "日期",
                    type: 'ComponentsInputDay'
                },
            ],
            toolBtn: [],
            tableBtn: [{
                    label: "预览",
                    show: true,
                    click: function (data: any) {
                        console.log(data)
                        window.open(data.row.file0)
                    }
                },
                {
                    label: "下载",
                    show: true,
                    click: function (data: any) {
                        if (utils.isNotNull(data.row.url)) {
                            let prefix = process.env.VUE_APP_URL //url前缀
                            let url = prefix + JSON.parse(data.row.url)[0].url
                            let fileName = JSON.parse(data.row.url)[0].name
                            if ("download" in document.createElement("a")) { // 非IE下载
                                const elink = document.createElement("a")
                                elink.download = fileName
                                elink.style.display = "none"
                                elink.href = url
                                document.body.appendChild(elink)
                                elink.click()
                                URL.revokeObjectURL(elink.href) // 释放URL 对象
                                document.body.removeChild(elink)
                            } else {
                                window.open(url, fileName, "", true)
                            }
                        }
                    }
                },
            ],
        },
        {
            modelName: 'content',
            type: 'AssemblyContent',
            selectionshow: false,
            system_id: "content2",
            title: "消息列表",
            apiNameQuery: "query2",
            components: [{
                    modelName: 'content',
                    name: "message",
                    label: "内容",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "create_time",
                    label: "日期",
                    type: 'ComponentsInputDay'
                },
                {
                    modelName: 'content',
                    name: "type",
                    label: "已读",
                    type: 'ComponentsInputHidden'
                },
            ],
            toolBtn: [{
                label: "一键已阅",
                type: 'primary',
                show: true,
                click: function (data: any) {
                    let system_id =
                        utils.my_post({
                            apiName: 'allRead',
                            params: {},
                            ok: (json: any, dataAll: any) => {
                                let content2 = utils.getPage().getComponents({
                                    system_id: 'content2'
                                })
                                content2.query()
                            },
                            err: (json: any, dataAll: any) => {
                                alert("请求出错")
                            }
                        })
                }
            }, ],
            tableBtn: [{
                    label: "已读",
                    show: true,
                    type: 'danger',
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: "read",
                            title: "查看"
                        })
                        edit.query()
                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "query"
                        }],
                        "row": [{
                            "type": 2
                        }],
                    }],
                },
                {
                    label: "查看",
                    show: true,
                    type: 'primary',
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: "read",
                            title: "查看"
                        })
                        edit.query()
                        let system_id =
                            utils.my_post({
                                apiName: 'save2',
                                params: {
                                    "id": data.row.id
                                },
                                ok: (json: any, dataAll: any) => {},
                                err: (json: any, dataAll: any) => {}
                            })

                    },
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "query"
                        }],
                        "row": [{
                            "type": 1
                        }],
                    }],
                }
            ],
        },
        {
            modelName: 'dialog',
            name: "read",
            type: 'DialogEdit',
            apiName_save: "save2",
            tableName: 'content2',
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "create_time",
                        label: "发布时间",
                        type: 'ComponentsText'
                    },
                    {
                        modelName: 'content',
                        name: "message",
                        label: "内容",
                        type: 'ComponentsInputTextarea',
                        show_type: "详情"
                    },
                    {
                        modelName: 'content',
                        name: 'id',
                        label: 'id',
                        type: 'ComponentsInputHidden'
                    },
                ]
            }],
            toolBtn: []
        },
    ]
}
export default myModule