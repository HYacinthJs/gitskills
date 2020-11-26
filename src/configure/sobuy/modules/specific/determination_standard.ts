import * as utils from "@/components/util/utils";

const myModule: { [key: string]: any } = {
    type: 'normal',
    name: 't_determination_standard',
    version: 'PageNormal',
    api: {
        query: "/determinationstandard/query",
        queryByAll: "/determinationstandard/queryByAll",
        queryById: "/determinationstandard/queryById",
        save: "/determinationstandard/save",
        delete: "/determinationstandard/delete",
        getCompany:  "/company/queryByAll",

    },
    components: [
        {
            modelName: 'content', type: 'AssemblyQuery', components: [
            {
                modelName: 'query', type: 'AssemblyFrom', components: [
                {modelName: 'content', name: "test_project", label: "测试项目", type: 'ComponentsInput'},
                    {modelName:'content',type: 'ComponentsInputReQuery'},

                ]
            }
        ]
        },
        {
            modelName: 'content',title:"测试项目配置", type: 'AssemblyContent', components: [
            {modelName: 'content', name: "test_project", label: "测试项目", type: 'ComponentsInput'},
            {modelName: 'content', name: "test_tools", label: "测试工具/仪器", type: 'ComponentsInput'},
            {modelName: 'content', name: "test_method", label: "测试方法", type: 'ComponentsInput'},
            {modelName: 'content', name: "test_result", label: "结果判定", type: 'ComponentsInput'}
        ],
        },
        {
            modelName: 'dialog', name: "edit", type: 'DialogEdit', components: [
            {
                modelName: 'from', type: 'AssemblyFrom', components: [
                {
                    modelName: 'content',
                    name: "test_project",
                    label: "测试项目",
                    type: 'ComponentsInput',
                    rules: [{validator: utils.my_required, message: "请输入测试项目"}]
                },
                {
                    modelName: 'content',
                    name: "test_tools",
                    label: "测试工具/仪器",
                    type: 'ComponentsInput',
                    rules: [{validator: utils.my_required, message: "请输入测试工具/仪器"}]
                },
                {
                    modelName: 'content',
                    name: "test_method",
                    label: "测试方法",
                    type: 'ComponentsInput',
                    rules: [{validator: utils.my_required, message: "请输入测试方法"}]
                },
                {
                    modelName: 'content',
                    name: "test_result",
                    label: "结果判定",
                    type: 'ComponentsInput',
                    rules: [{validator: utils.my_required, message: "请输入结果判定"}]
                },
                {modelName: 'content', name: 'id', label: 'id', type: 'ComponentsInputHidden'}
            ]
            },
        ]
        },
    ]
}
export default myModule
