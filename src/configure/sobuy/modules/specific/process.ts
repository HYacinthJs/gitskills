import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'sys_process',
    version: 'PageNormal',
    api: {
        query: "/process/query",
        queryByAll: "/process/queryByAll",
        queryById: "/process/queryById",
        save: "/process/save",
        delete: "/process/delete",
        role: "/role/queryByAll",
        getCompany: "/company/queryByAll",
        user:"/role/queryUserByRoleId"
    },
    components: [
        {
            modelName: 'content',
            type: 'AssemblyQuery',
            components: [{
                modelName: 'query',
                type: 'AssemblyFrom',
                components: [
                    {
                        modelName: 'content',
                        name: "name",
                        label: "质检流程名称",
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
            title: "质检流程管理",
            type: 'AssemblyContent',
            apiNameQuery: "query",
            components: [
                {
                    modelName: 'content',
                    name: "name",
                    label: "质检流程名称",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "step1",
                    label: "审核步骤1",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "step1_name",
                    label: "审核人员1",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "step2",
                    label: "审核步骤2",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "step2_name",
                    label: "审核人员2",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "step3",
                    label: "审核步骤3",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "step3_name",
                    label: "审核人员3",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "step4",
                    label: "审核步骤4",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "step4_name",
                    label: "审核人员4",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "step5",
                    label: "审核步骤5",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "step5_name",
                    label: "审核人员5",
                    type: 'ComponentsInput'
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
                components: [
                    {
                        modelName: 'content',
                        name: "name",
                        label: "质检流程名称",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "type",
                        label: "所属检验项",
                        type: 'ComponentsInputSelect',
                        options: [{
                            label: "样品",
                            value: "样品"
                        }, {
                            label: "工艺单",
                            value: "工艺单"
                        }, {
                            label: "组装图",
                            value: "组装图"
                        }, {
                            label: "签封样",
                            value: "签封样"
                        }, {
                            label: "原材料",
                            value: "原材料"
                        }, {
                            label: "产前样",
                            value: "产前样"
                        }, {
                            label: "中期",
                            value: "中期"
                        }, {
                            label: "尾检",
                            value: "尾检"
                        }, {
                            label: "复检",
                            value: "复检"
                        }, {
                            label: "大货样",
                            value: "大货样"
                        }, {
                            label: "质量纠正",
                            value: "质量纠正"
                        }],
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择所属检验项"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "step1",
                        label: "审核步骤1",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "step1_r_id",
                        label: "审核角色1",
                        type: 'ComponentsInputSelect',
                        ajax_url: "role",
                        props_label: "r_name",
                        props_value: "r_id",
                        system_id:"system_department1",
                        associated_notice: ["system_user1"],
                    },
                    {
                        modelName: 'content',
                        name: "step1_user",
                        label: "审核人员1",
                        type: 'ComponentsInputSelect',
                        system_id:"system_user1",
                        ajax_url: "user",
                        props_label: "ui_name",
                        props_value: "user_id",
                        ajax_params: [{
                            type: "control",
                            name: "r_id",
                            system_id: "system_department1"
                        }],
                        style: {
                            width: "100% !important"
                        }
                    },
                    {
                        modelName: 'content',
                        name: "step2",
                        label: "审核步骤2",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "step2_r_id",
                        label: "审核角色2",
                        type: 'ComponentsInputSelect',
                        ajax_url: "role",
                        props_label: "r_name",
                        props_value: "r_id",
                        system_id:"system_department2",
                        associated_notice: ["system_user2"],
                    },
                    {
                        modelName: 'content',
                        name: "step2_user",
                        label: "审核人员2",
                        type: 'ComponentsInputSelect',
                        system_id:"system_user2",
                        ajax_url: "user",
                        props_label: "ui_name",
                        props_value: "user_id",
                        ajax_params: [{
                            type: "control",
                            name: "r_id",
                            system_id: "system_department2"
                        }],
                    },
                    {
                        modelName: 'content',
                        name: "step3",
                        label: "审核步骤3",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "step3_r_id",
                        label: "审核角色3",
                        type: 'ComponentsInputSelect',
                        ajax_url: "role",
                        props_label: "r_name",
                        props_value: "r_id",
                        system_id:"system_department3",
                        associated_notice: ["system_user3"],
                    },
                    {
                        modelName: 'content',
                        name: "step3_user",
                        label: "审核人员3",
                        type: 'ComponentsInputSelect',
                        system_id:"system_user3",
                        ajax_url: "user",
                        props_label: "ui_name",
                        props_value: "user_id",
                        ajax_params: [{
                            type: "control",
                            name: "r_id",
                            system_id: "system_department3"
                        }],
                    },
                    {
                        modelName: 'content',
                        name: "step4",
                        label: "审核步骤4",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "step4_r_id",
                        label: "审核角色4",
                        type: 'ComponentsInputSelect',
                        ajax_url: "role",
                        props_label: "r_name",
                        props_value: "r_id",
                        system_id:"system_department4",
                        associated_notice: ["system_user4"],
                    },
                    {
                        modelName: 'content',
                        name: "step4_user",
                        label: "审核人员4",
                        type: 'ComponentsInputSelect',
                        system_id:"system_user4",
                        ajax_url: "user",
                        props_label: "ui_name",
                        props_value: "user_id",
                        ajax_params: [{
                            type: "control",
                            name: "r_id",
                            system_id: "system_department4"
                        }],
                    },
                    {
                        modelName: 'content',
                        name: "step5",
                        label: "审核步骤5",
                        type: 'ComponentsInput'
                    },
                    {
                        modelName: 'content',
                        name: "step5_r_id",
                        label: "审核角色5",
                        type: 'ComponentsInputSelect',
                        ajax_url: "role",
                        props_label: "r_name",
                        props_value: "r_id",
                        system_id:"system_department5",
                        associated_notice: ["system_user5"],
                    },
                    {
                        modelName: 'content',
                        name: "step5_user",
                        label: "审核人员5",
                        type: 'ComponentsInputSelect',
                        system_id:"system_user5",
                        ajax_url: "user",
                        props_label: "ui_name",
                        props_value: "user_id",
                        ajax_params: [{
                            type: "control",
                            name: "r_id",
                            system_id: "system_department5"
                        }],
                    },
                    {
                        modelName: 'content',
                        name: "id",
                        label: "id",
                        type: 'ComponentsInputHidden'
                    },
                ]
            }]
        },
    ]
}
export default myModule