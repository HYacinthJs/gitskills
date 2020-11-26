import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'bus_goods_type',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_goods_type/query",
        queryByAll: "/bus_goods_type/queryByAll",
        queryById:  "/bus_goods_type/queryById",
        save:  "/bus_goods_type/save",
        delete:  "/bus_goods_type/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'name',label:'物品类型',type:'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name: 'name', label: '物品类型',type:'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'name', label: '物品类型',type:'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入食物名称', trigger: 'blur' }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
