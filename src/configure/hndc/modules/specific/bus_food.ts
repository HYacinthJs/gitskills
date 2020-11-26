import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_bus_food',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_food/query",
        queryByAll: "/bus_food/queryByAll",
        queryById:  "/bus_food/queryById",
        save:  "/bus_food/save",
        delete:  "/bus_food/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'name',label:'食物名称',type:'ComponentsInput'},
                        {modelName:'content',name: 'type', label: '食物类型',type:'ComponentsInputSelect',options:[{value:'荤菜'},{value:'素菜'},{value:'其他'},{value:'套餐'}]},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name: 'name', label: '食物名称',type:'ComponentsInput'},
                {modelName:'content',name: 'picture', label: '图片',type:'ComponentsInput',},
                {modelName:'content',name: 'type', label: '食物类型',type:'ComponentsInput'},
                {modelName:'content',name: 'price', label: '食物价格(元)',type:'ComponentsInput',},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'name', label: '食物名称',type:'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入食物名称', trigger: 'blur' }]},
                        {modelName:'content',name: 'type', label: '食物类型',type:'ComponentsInputSelect',options:[{value:'荤菜'},{value:'素菜'},{value:'其他'},{value:'套餐'}],rules:[{ validator: utils.my_required, message: '请选择食物类型', trigger: 'blur' }]},
                        {modelName:'content',name: 'price', label: '食物价格',type:'ComponentsInput',unit: "元",rules:[{ validator: utils.my_float},{ validator: utils.my_required, message: '请输入食物价格', trigger: 'blur' }]},
                        {modelName:'content',name: 'picture', label: '图片',type:'ComponentsInputUpload'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
