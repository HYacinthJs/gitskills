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
        synchronousUser:  "/user/synchronousUser",
        delete:  "/user/delete",
        role:  "/role/queryByAll",
        user:  "/user/queryByAll",
        department:  "/department/getTree",
        area:  "/area/getTree",
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
                {modelName:'content',name:"ui_telno",label:"联系方式",type: 'ComponentsInput'},
                {modelName:'content',name:"r_name",label:"角色",type: 'ComponentsInput'},
                {modelName:'content',name:"error_state",label:"状态",type: 'ComponentsInputHidden'},
            ],
            toolBtn : [
                {label:"同步",jurisdictionJson: [{jurisdiction: [{name: "synchronousUser"}]}],show:true,type:"primary",click:function(data:any){utils.getStore().openDialog({name:'synchronousUser'})}},
                {label:"添加",jurisdictionJson: [{jurisdiction: [{name: "add"}]}],show:true,type:"primary",click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'edit'})
                        edit.queryBase()
                    }},
                {label:"删除",jurisdictionJson: [{jurisdiction: [{name: "deleteAll"}]}],type:"danger",click:function(data:any){utils.getStore().openDialog({name:'deleteAll'})}},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"r_id",label:"角色",type: 'ComponentsInputSelect',ajax_url:"role",props_label:"r_name",props_value:"r_id",system_id:"system_order_no",associated_notice:["system_order_no2"],rules:[{ validator: utils.my_required, message: '请选择角色' }]},
                        {modelName:'content',name:"rt_id",label:"角色t",type: 'ComponentsInputSelect',ajax_url:"user",ajax_params:[{type:"control",name:"r_id",system_id:"system_order_no"}],system_id:"system_order_no2",props_label:"ui_name",props_value:"id",rules:[{ validator: utils.my_required, message: '请选择角色' }]},
                        {modelName:'content',name:"ui_name",label:"用户名",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入用户名' }]},
                        {modelName:'content',name:"department_id",label:"部门",type: 'ComponentsInputCascader',ajax_url:"department"},
                        {modelName:'content',name:"area_id",label:"所属地区",type: 'ComponentsInputCascader',ajax_url:"area"},
                        {modelName:'content',name:"ui_code",label:"帐号",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入帐号' }]},
                        {modelName:'content',name:"ui_telno",label:"联系方式",type: 'ComponentsInput'},
                        {modelName:'content',name:"ui_password",label:"密码",jurisdictionJson: [{system_id:[{system_user_id:''}]}],isSetValue:false,type: 'ComponentsInputPassword',rules:[{ validator: utils.my_required, message: '请输入密码' },{ validator:utils.validateComplexPass }]},
                        {modelName:'content',name:"ui_password2",label:"确认密码",jurisdictionJson: [{system_id: [{system_user_id: ''}]}],isSetValue:false,type: 'ComponentsInputPassword',rules:[{ required: true, message: '请输入确认密码' },{ validator:utils.validateComplexPass2 }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden',system_id:"system_user_id"},
                    ]},
            ]},
        {modelName:'dialog',name:"synchronousUser",apiName_save:"synchronousUser",valueModel:'无数据',title:'同步',msg:'是否确认同步用户？',type: 'DialogSelect'}
    ]
}
export default myModule
