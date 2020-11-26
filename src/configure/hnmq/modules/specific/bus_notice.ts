import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'fixed_notice',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/notice/query",
        queryByAll: "/notice/queryByAll",
        queryById:  "/notice/queryById",
        save:  "/notice/save",
        delete:  "/notice/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        { modelName:'content',name: 'title', label: '公告标题',type:'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',utilshow:false, components:[
                {modelName:'content',name: 'title', label: '公告标题',type:'ComponentsInput'},
                {modelName:'content',name: 'user_type', label: '通知范围',type:'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: 'user_type', label: '通知范围',type:'ComponentsInputSelect',options:[{value:'全部'},{value:'员工'}]},
                        {modelName:'content', name: 'title', label: '公告标题',type:'ComponentsInput'},
                        {modelName:'content', name: 'content', label: '公告内容',type:'ComponentsInputTextarea'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
