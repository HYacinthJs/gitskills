import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_bus_menu_breakfast',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_menu/queryByBreakfast",
        queryByAll: "/bus_menu/queryByAll",
        queryById:  "/bus_menu/queryById",
        save:  "/bus_menu/save",
        delete:  "/bus_menu/delete",
        queryByBreakfast:  "/bus_setmeal/queryByBreakfast",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'name',label:'物品名称',type:'ComponentsInput'},
                        {modelName:'content',name: 'type', label: '物品类型',type:'ComponentsInputSelect',options:[{value:'食品'},{value:'日用品'}]},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name: 'name', label: '菜单名称',type:'ComponentsInput'},
                {modelName:'content',name: 'time', label: '用餐日期',type:'ComponentsInput'},
                {modelName:'content',name: 'type', label: '菜单类型',type:'ComponentsInput',},
                {modelName:'content',name: 'state', label: '菜单状态',type:'ComponentsInput',},
                {modelName:'content',name: 'create_time', label: '录入日期',type:'ComponentsInput',},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'name', label: '菜单名称',type:'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入菜单名称', trigger: 'blur' }]},
                        {modelName:'content',name: 'time', label: '用餐日期',type:'ComponentsInputDay',rules:[{ validator: utils.my_required, message: '请输入用餐日期', trigger: 'blur' }]},
                        {modelName:'content',name: "breakfast",label_show:false, label: "早餐",filterable:true, type: "ComponentsInputTransfer",ajax_url:"queryByBreakfast",props_label:"name",props_value:"id" },
                        {modelName:'content',name: 'texttext', label: '说明',style: {width: "500px"},  type:'ComponentsText',value_default:'菜单不可删除，不可更改。可以取消，如果取消时有未取餐的订单会取消订单并且返回金额'},
                        {modelName:'content',name: 'type', label: '菜单类型',type:'ComponentsInputHidden',value_default:'早餐'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
