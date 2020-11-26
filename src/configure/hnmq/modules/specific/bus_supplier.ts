import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_bus_supplier',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_supplier/query",
        queryByAll: "/bus_supplier/queryByAll",
        queryById:  "/bus_supplier/queryById",
        save:  "/bus_supplier/save",
        delete:  "/bus_supplier/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'name',label:'供应商名称',type:'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name: 'name', label: '供应商名称',type:'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'name', label: '供应商名称',type:'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入食物名称', trigger: 'blur' }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
