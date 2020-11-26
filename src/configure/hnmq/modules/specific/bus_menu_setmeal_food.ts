import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_bus_menu_setmeal_food',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_menu_setmeal_food/queryByLunchNoReserve",
        queryByAll: "/bus_menu_setmeal_food/queryByAll",
        queryById:  "/bus_menu_setmeal_food/queryById",
        save:  "/bus_menu_setmeal_food/save",
        delete:  "/bus_menu_setmeal_food/delete",
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
                {modelName:'content',name: 'setmeal_name', label: '菜单套餐',type:'ComponentsInput'},
                {modelName:'content',name: 'name', label: '食物名称',type:'ComponentsInput'},
                {modelName:'content',name: 'picture', label: '图片',type:'ComponentsInput',},
                {modelName:'content',name: 'type', label: '食物类型',type:'ComponentsInput'},
                {modelName:'content',name: 'price', label: '食物价格',type:'ComponentsInput'},
                {modelName:'content',name: 'note', label: '备注',type:'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'setmeal_id', label: '菜单套餐',type:'ComponentsInputSelect',ajax:{url:'/bus_menu_setmeal/queryByAll'},props:{value:'id',label:'name',}},
                        {modelName:'content',name: 'name', label: '食物名称',type:'ComponentsInput'},
                        {modelName:'content',name: 'type', label: '食物类型',type:'ComponentsInputSelect',options:[{value:'荤菜'},{value:'素菜'},{value:'其他'}]},
                        {modelName:'content',name: 'price', label: '食物价格',type:'ComponentsInput'},
                        {modelName:'content',name: 'note', label: '备注',type:'ComponentsInput'},
                        {modelName:'content',name: 'picture', label: '图片',type:'ComponentsInputUpload'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
