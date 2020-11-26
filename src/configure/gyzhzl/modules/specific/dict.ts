import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_dict',
    version:'PageNormal',
    api:{
        query: "/dict/query",
        queryByAll: "/dict/queryByAll",
        queryById:  "/dict/queryById",
        save:  "/dict/save",
        delete:  "/dict/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"code",label:"类型",type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择类型' }],options:[{value:'四位一体',label:'四位一体'},{value:'市容管理',label:'市容管理'},{value:'三改一拆',label:'三改一拆'},{value:'垃圾分类',label:'垃圾分类'},{value:'水环境管理',label:'水环境管理'}]},
                        {modelName:'content',name:"name",label:"名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"code",label:"类型",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"名称",type: 'ComponentsInput'},
                {modelName:'content',name:"val",label:"值",type: 'ComponentsInput'},
                {modelName:'content',name:"score",label:"分数",type: 'ComponentsInput'},
                {modelName:'content',name:"remark",label:"备注",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"code",label:"类型",type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择类型' }],options:[{value:'四位一体',label:'四位一体'},{value:'市容管理',label:'市容管理'},{value:'三改一拆',label:'三改一拆'},{value:'垃圾分类',label:'垃圾分类'},{value:'水环境管理',label:'水环境管理'}]},
                        {modelName:'content',name:"name",label:"名称",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入名称' }]},
                        {modelName:'content',name:"val",label:"值",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入值' }]},
                        {modelName:'content',name:"score",label:"分数",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入分数' }]},
                        {modelName:'content',name:"remark",label:"备注",type: 'ComponentsInput'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
