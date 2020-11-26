import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'fixed_user',
    version:'PageNormal',
    api:{
        query: "/user/query",
        queryByAll: "/user/queryByAll",
        queryById:  "/user/queryById",
        save:  "/user/save",
        delete:  "/user/delete",
        role:  "/role/queryByAll",
        department:  "/department/queryByAll",
        grid:  "/grid/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"ui_code",label:"帐号",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',
            components:[
                {modelName:'content',name:"ui_code",label:"帐号",type: 'ComponentsInput'},
                {modelName:'content',name:"ui_name",label:"用户名",type: 'ComponentsInput'},
                {modelName:'content',name:"department_name",label:"部门",type: 'ComponentsInput'},
                {modelName:'content',name:"grid_name",label:"网格",type: 'ComponentsInput'},
                {modelName:'content',name:"ui_telno",label:"联系方式",type: 'ComponentsInput'},
                {modelName:'content',name:"r_name",label:"角色",type: 'ComponentsInput'},
                {modelName:'content',name:"error_state",label:"状态",type: 'ComponentsInputHidden'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"r_id",label:"角色",type: 'ComponentsInputSelect',ajax_url:"role",props_label:"r_name",props_value:"r_id",system_id:"r_id"},
                        {modelName:'content',name:"department_id",label:"部门",type: 'ComponentsInputSelect',ajax_url:"department",props_label:"name",props_value:"id",jurisdictionJson: [{system_id_literal: [{r_id: "责任部门-审核人员"},{r_id: "责任部门-普通人员"}]}]},
                        {modelName:'content',name:"grid_id",label:"网格",type: 'ComponentsInputSelect',ajax_url:"grid",props_label:"name",props_value:"id",jurisdictionJson: [{system_id_literal: [{r_id: "网格单位-督查人员"}]},{system_id_literal: [{r_id: "网格单位-审核人员"}]}]},
                        {modelName:'content',name:"ui_name",label:"用户名",type: 'ComponentsInput'},
                        {modelName:'content',name:"ui_code",label:"帐号",type: 'ComponentsInput'},
                        {modelName:'content',name:"ui_telno",label:"联系方式",type: 'ComponentsInput'},
                        {modelName:'content',name:"ui_password",label:"密码",isSetValue:false,type: 'ComponentsInputPassword',rules:[{ validator: utils.my_required, message: '请输入密码' },{ validator:utils.validatePass }]},
                        {modelName:'content',name:"ui_password2",label:"确认密码",isSetValue:false,type: 'ComponentsInputPassword',rules:[{ required: true, message: '请输入确认密码' },{ validator:utils.validatePass2 }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
