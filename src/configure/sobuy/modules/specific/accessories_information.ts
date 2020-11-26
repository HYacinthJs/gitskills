import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 't_accessories_information',
    version: 'PageNormal',
    api: {
        query: "/partinformation/query",
        queryByAll: "/partinformation/queryByAll",
        queryById: "/partinformation/queryById",
        save: "/partinformation/save",
        delete: "/partinformation/delete",
        getCompany: "/company/queryByAll",

    },
    components: [
        {
            modelName: 'content',
            type: 'AssemblyQuery',
            components: [
                {
                modelName: 'query',
                type: 'AssemblyFrom',
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
                        type: 'ComponentsInputReQuery'
                    },
                ]}
        ]
        },
        {
            modelName: 'content',
            title: "配件信息管理",
            type: 'AssemblyContent',
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
            cellClick(column: any) {
                if (column.label == "适用货号") {
                    let edit = utils.getStore().openDialog({
                        name: 'editTable',
                        title: "适用货号"
                    })
                    edit.query()
                }
            },
        },
        {
            modelName: 'dialog',
            name: "editTable",
            type: 'DialogEdit',
            components: [{
                modelName: 'from',
                type: 'AssemblyFrom',
                components: [{
                    modelName: 'content',
                    name: "number_name",
                    label: "适用货号",
                    type: 'ComponentsInputTextarea',
                    show_type: "详情"
                }, ]
            }],
            toolBtn: []
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
                        name: "bigtab",
                        label: "小类",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "smalltab",
                        label: "大类",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入大类"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "name",
                        label: "配件名称",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入配件名称"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "size",
                        label: "尺寸",
                        type: 'ComponentsInput',
                        value_default:"无",
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入尺寸"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "color",
                        label: "颜色",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入颜色"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "caizhi",
                        label: "材质",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入材质"
                        }]
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
            }, ]
        },
    ]
}
export default myModule
