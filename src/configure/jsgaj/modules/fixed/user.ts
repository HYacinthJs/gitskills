import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal_jsgaj',
    name:'fixed_user',
    version:'PageNormal_jsgaj',
    api:{
        delete:"/user/delete",
        save:"/user/save",
        queryById:"/user/queryById",
        query:"/user/query",
        unlock:"/user/unlock",
        resetPassword:"/user/resetPassword",
        role:"/role/queryByAll",
        getTree:"/department/getTree"
    },
    components:[
        { modelName:'breadcrumbs',type: 'AssemblyBreadcrumbs',isQuery:false},
        {
            modelName:'content', type: 'AssemblyQueryOnly',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: "ui_name", label: "用户名", type: "ComponentsInputHidden"},
                        {modelName:'content',name: "r_id", label: "角色", type: "ComponentsInputHidden"},
                        {modelName:'content',name: "fuzzy_query", label: "模糊查询", type: "ComponentsInput"},
                        {modelName:'content',name: "dp_id", label: "部门", type: "ComponentsInputCascader", style: { width: "490px" }, ajax_url:"getTree" },
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContentOnly',primaryKey:"ui_id",
            components:[
                {modelName:'content',name:"ui_code", label: "帐号", type: "ComponentsInput"},
                {modelName:'content',name:"ui_name", label: "用户名", type: "ComponentsInput"},
                {modelName:'content',name:"ui_telno", label: "联系方式", type: "ComponentsInput"},
                {modelName:'content',name:"r_name", label: "角色", type: "ComponentsInput"},
                {modelName:'content',name:"dp_name", label: "部门", type: "ComponentsInput"},
                {modelName:'content',name:"error_state", type: "ComponentsInputHidden"},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "r_id", label: "角色", type: "ComponentsInputSelect", ajax_url:"role", props_value:"r_id",props_label: "r_name",
                            rules: [{ validator: utils.my_number, message: "请选择角色"}]},
                        {modelName:'content', name: "ui_name", label: "用户名", type: "ComponentsInput", rules: [{ validator: utils.my_required, message: "请输入用户名"}]},
                        {modelName:'content', name: "ui_code", label: "帐号", type: "ComponentsInput", rules: [{ validator: utils.my_required, message: "请输入帐号"}]},
                        {modelName:'content', name: "ui_telno", label: "联系方式", type: "ComponentsInput" },
                        {modelName:'content', name: "ui_isuser", label: "法制", type: "ComponentsInputRadio", options: [{value:"1", label: "是"}, {value:"-1", label: "否"}],
                            rules: [{ validator: utils.my_required, message: "请选择是否是法制人员"}]},
                        {modelName:'content', name: "dp_id", label: "部门", type: "ComponentsInputCascader", style: { width: "490px" }, ajax_url:"getTree"},
                        {modelName:'content', name: "ui_password", label: "密码", type: "ComponentsInput", jurisdictionJson: [{jurisdiction: [{name: "add"}]}],
                            rules: [{ validator: utils.my_required, message: "请输入密码"}, { validator: utils.validatePass}]},
                        {modelName:'content', name: "ui_password2", label: "确认密码", type: "ComponentsInput", jurisdictionJson: [{jurisdiction: [{name: "add"}]}],
                            rules: [{ validator: utils.my_required, message: "请输入确认密码"}, { validator: utils.validatePass2}]},
                        {modelName:'content', name: "ui_id", type: "ComponentsInputHidden"},
                    ]},
            ]},
        {modelName:'dialog',name:"unlock",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                    
                    ]}
            ]}
    ]
}
export default myModule
