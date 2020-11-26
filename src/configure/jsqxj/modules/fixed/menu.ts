
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'fixed_menu',
    version:'PageNormal',
    api:{
        query: "/menu/query",
        queryByAll: "/menu/queryByAll",
        queryById:  "/menu/queryById",
        save:  "/menu/save",
        delete:  "/menu/delete",
        queryByFirst:  "/menu/queryByFirst",
    },
    components:[
        {
            modelName:'content',type: 'AssemblyContent',primaryKey : 'menu_id',
            components:[
                {modelName:'content',name:"menu_name",label:"名称",type: 'ComponentsInput'},
                {modelName:'content',name:"menu_parent_name",label:"上级",type: 'ComponentsInput'},
                {modelName:'content',name:"menu_level",label:"等级",type: 'ComponentsInput'},
                {modelName:'content',name:"menu_linkurl",label:"路径",type: 'ComponentsInput'},
                {modelName:'content',name:"menu_imgurl",label:"图标",type: 'ComponentsInput'},
                {modelName:'content',name:"menu_valid",label:"是否有效",type: 'ComponentsInput'},
                // {modelName:'content',name:"id",label:"id",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit', jurisdictionJson: [{user: [{r_name: "系统管理员"}]}],components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"menu_level",label:"等级",type: 'ComponentsInputSelect',system_id:'system_menu_level',options:[{value:'主页面',label:'主页面'},{value:'子页面',label:'子页面'}]},
                        {modelName:'content',name:"menu_parent_id",label:"上级",type: 'ComponentsInputSelect',jurisdictionJson: [{system_id: [{system_menu_level: '子页面'}]}],ajax_url:"queryByFirst",props_label:"menu_name",props_value:"menu_id"},
                        {modelName:'content',name:"menu_name",label:"名称",type: 'ComponentsInput'},
                        {modelName:'content',name:"menu_linkurl",label:"路径",type: 'ComponentsInput',jurisdictionJson: [{system_id: [{system_menu_level: '子页面'}]}]},
                        {modelName:'content',name:"menu_imgurl",label:"图标",type: 'ComponentsInput'},
                        {modelName:'content',name:"menu_valid",label:"是否有效",type: 'ComponentsInputSelect',options:[{value:'有效',label:'有效'},{value:'无效',label:'无效'}]},
                        {modelName:'content',name:"menu_order",label:"排序",type: 'ComponentsInput'},
                        {modelName:'content',name: 'menu_id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__1',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__2',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__3',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__4',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},

            ]},
    ]
}
export default myModule
