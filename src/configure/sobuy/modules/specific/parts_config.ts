import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'parts_config',
    version: 'PageNormal',
    api: {
        query: "/partsRule/query",
        queryByAll: "/partsRule/queryByAll",
        queryById: "/partsRule/queryById",
        queryTree: "/partsRule/queryTree",
        save: "/partsRule/save",
        delete: "/partsRule/delete",
        querySelectTree: '/partsRule/querySelectTree',
        queryBase: '/',

    },
    components: [{
            modelName: 'breadcrumbs',
            type: 'AssemblyBreadcrumbs'
        },
        {
            modelName: 'content',
            type: 'AssemblyQuery',
            components: [{
                modelName: 'query',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "name",
                        label: "名称",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "code",
                        label: "编码",
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
            title: "配件编号规则管理",
            type: 'AssemblyTreeContent',
            components: [{
                    modelName: 'content',
                    name: "name",
                    label: "名称",
                    type: 'ComponentsInputEmail'
                },
                {
                    modelName: 'content',
                    name: "code",
                    label: "编码",
                    type: 'ComponentsInputEmail'
                },

            ],

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
                        name: "type",
                        label: " 分类",
                        type: 'ComponentsInputSelect',
                        ajax_url:"queryTree",props_label:"label",props_value:"id",
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择分类"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "name",
                        label: "名称",
                        type: 'ComponentsInput',
                    },
                    {
                        modelName: 'content',
                        name: "code",
                        label: " 编码",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入编码"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: 'id',
                        label: 'id',
                        type: 'ComponentsInputHidden'
                    },
                ]
            }, ],
            queryBase() {
                // console.log("queryBase========")
                let that: any = this
                that.initValue()
                that.initAjax()
                let content = utils.getPage().getComponents({
                    system_id: that.tableName
                })
                that.setEditValue({
                    pid: content.tree_id
                })
            }
        },
    ]
}
export default myModule