import * as utils from "@/components/util/utils/system";

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
            ],tableBtn :[
                {label:"编辑",jurisdictionJson: [{jurisdiction: [{name: "edit"}]}],show:true,click:function(data:any){
                    let that:any = this
                        if(data.row.menu_name == "货号管理"){
                            let edit1 = utils.getStore().openDialog({name:'edit1',title:"编辑"})
                            edit1.query()
                        }else {
                            let edit = utils.getStore().openDialog({name:'edit',title:"编辑"})
                            edit.query()
                        }

                    }},
                {label:"详情",jurisdictionJson: [{jurisdiction: [{name: "info"}]}],show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'info',title:"详情"})
                        edit.query()
                    }
                },
                {label:"删除",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){utils.getStore().openDialog({name:'delete',title:"删除"})}},
            ]
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
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
                {modelName:'from',copy:true,name:'jurisdiction__copy__5',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__6',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__7',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__8',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
            ]},
        {modelName:'dialog',name:"edit1",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"menu_level",label:"等级",type: 'ComponentsInputSelect',system_id:'system_menu_level1',options:[{value:'主页面',label:'主页面'},{value:'子页面',label:'子页面'}]},
                        {modelName:'content',name:"menu_parent_id",label:"上级",type: 'ComponentsInputSelect',jurisdictionJson: [{system_id: [{system_menu_level1: '子页面'}]}],ajax_url:"queryByFirst",props_label:"menu_name",props_value:"menu_id"},
                        {modelName:'content',name:"menu_name",label:"名称",type: 'ComponentsInput'},
                        {modelName:'content',name:"menu_linkurl",label:"路径",type: 'ComponentsInput',jurisdictionJson: [{system_id: [{system_menu_level1: '子页面'}]}]},
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
                {modelName:'from',copy:true,name:'jurisdiction__copy__5',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__6',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__7',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__8',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__9',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__10',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__11',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__12',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__13',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__14',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__15',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__16',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__17',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__18',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__19',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__20',label:'权限',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__21',label:'权限',type: 'AssemblyFrom',components:[
                    {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                    {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                ]},
                {modelName:'from',copy:true,name:'jurisdiction__copy__22',label:'权限',type: 'AssemblyFrom',components:[
                    {modelName:'content',name:"a_name",label:"描述",type: 'ComponentsInput'},
                    {modelName:'content',name:"a_attribute",label:"属性",type: 'ComponentsInput'},
                ]},
            ]},
    ]
}
export default myModule
