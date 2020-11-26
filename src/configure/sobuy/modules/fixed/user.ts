import * as utils from "@/components/util/utils";

const myModule: {
    [key: string]: any
} = {
    type: 'normal',
    name: 'fixed_user',
    version: 'PageNormal',
    api: {
        query: "/user/query",
        queryByAll: "/user/queryByAll",
        queryById: "/user/queryById",
        save: "/user/save",
        delete: "/user/delete",
        getCompany: "/company/queryByAll",
        getTree: "/department/getTree",
        role: "/role/queryByAll",
        queryByFactory: "/supplier/queryByFactory",
        queryBySupplier: "/supplier/queryBySupplier",
    },
    components: [{
            modelName: 'content',
            type: 'AssemblyQuery',
            components: [{
                modelName: 'query',
                type: 'AssemblyFrom',
                components: [{
                        modelName: 'content',
                        name: "ui_code",
                        label: "帐号",
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
            title: "人员管理",
            type: 'AssemblyContent',
            components: [{
                    modelName: 'content',
                    name: "company_name",
                    label: "公司",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "department_name",
                    label: "部门",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "ui_code",
                    label: "帐号",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "ui_name",
                    label: "用户名",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "ui_telno",
                    label: "联系方式",
                    type: 'ComponentsInput'
                },
                {
                    modelName: 'content',
                    name: "r_name",
                    label: "角色",
                    type: 'ComponentsInput'
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
                        name: "company_id",
                        label: "公司",
                        type: 'ComponentsInputSelect',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择公司"
                        }],
                        ajax_url: "getCompany",
                        props_label: "name",
                        props_value: "id",
                        system_id: "system_company_id",
                        associated_notice: ["system_p_id"]
                    },
                    {
                        modelName: 'content',
                        name: "department_id",
                        label: "部门",
                        type: 'ComponentsInputCascader',
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择部门"
                        }],
                        ajax_url: "getTree",
                        system_id: "system_p_id",
                        ajax_params: [{
                            type: "control",
                            name: "company_id",
                            system_id: "system_company_id"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "r_id",
                        label: "角色",
                        type: 'ComponentsInputSelect',
                        system_id: "system_role",
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择角色"
                        }],
                        ajax_url: "role",
                        props_label: "r_name",
                        props_value: "r_id"
                    },
                    {
                        modelName: 'content',
                        name: "factory_id",
                        label: "工厂",
                        type: 'ComponentsInputSelect',
                        jurisdictionJson: [{
                            system_id: [{
                                system_role: 22
                            }, {
                                system_role: 26
                            }]
                        }],
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
                        name: "supplier_id",
                        label: "供应商",
                        type: 'ComponentsInputSelect',
                        jurisdictionJson: [{
                            system_id: [{
                                system_role: 27
                            }, {
                                system_role: 28
                            }]
                        }],
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
                        name: "factory_arr",
                        label: "负责工厂",
                        type: 'ComponentsInputSelectMultiple',
                        jurisdictionJson: [{
                            system_id: [{
                                system_role: 16
                            }]
                        }],
                        rules: [{
                            validator: utils.my_required,
                            message: "请选择负责工厂"
                        }],
                        ajax_url: "queryByFactory",
                        props_label: "name",
                        props_value: "id"
                    },
                    {
                        modelName: 'content',
                        name: "ui_name",
                        label: "用户名",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入用户名"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "ui_telno",
                        label: "联系方式",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入帐号"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "ui_code",
                        label: "账号",
                        type: 'ComponentsInput',
                        rules: [{
                            validator: utils.my_required,
                            message: "请输入联系方式"
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "ui_password",
                        label: "密码",
                        isSetValue: false,
                        type: 'ComponentsInputPassword',
                        rules: [{
                            validator: utils.my_required,
                            message: '请输入密码'
                        }, {
                            validator: utils.validatePass
                        }]
                    },
                    {
                        modelName: 'content',
                        name: "ui_password2",
                        label: "确认密码",
                        isSetValue: false,
                        type: 'ComponentsInputPassword',
                        rules: [{
                            required: true,
                            message: '请输入确认密码'
                        }, {
                            validator: utils.validatePass2
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
    ]
}
export default myModule