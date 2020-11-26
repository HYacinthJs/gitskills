import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_bus_menu_setmeal',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_menu_setmeal/queryByLunchNoReserve",
        queryByAll: "/bus_menu_setmeal/queryByAll",
        queryById:  "/bus_menu_setmeal/queryById",
        save:  "/bus_menu_setmeal/save",
        delete:  "/bus_menu_setmeal/delete",
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
                {modelName:'content',name: 'menu_name', label: '菜单名称',type:'ComponentsInput'},
                {modelName:'content',name: 'picture', label: '图片',type:'ComponentsInput',},
                {modelName:'content',name: 'name', label: '套餐名称',type:'ComponentsInput'},
                {modelName:'content',name: 'type', label: '套餐类型',type:'ComponentsInput'},
                {modelName:'content',name: 'price', label: '套餐总价',type:'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'menu_id', label: '菜单名称',type:'ComponentsInputSelect',ajax:{url:'/bus_menu/queryByAll'},props:{value:'id',label:'name',}},
                        {modelName:'content',name: 'name', label: '套餐名称',type:'ComponentsInput'},
                        {modelName:'content',name: 'type', label: '套餐类型',type:'ComponentsInputSelect',options:[{value:'早餐'},{value:'晚餐'}]},
                        {modelName:'content',name: 'price', label: '套餐总价',type:'ComponentsInput'},
                        {modelName:'content',name: 'picture', label: '图片',type:'ComponentsInputUpload'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
