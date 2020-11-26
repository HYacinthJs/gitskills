
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'t_problem_type',
    version:'PageNormal',
    api:{
        query: "/question/query",
        queryByAll: "/question/queryByAll",
        queryById:  "/question/queryById",
        save:  "/question/save",
        delete:  "/question/delete",
        queryByFirst:  "/question/queryByFirst",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"问题类型",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"code",label:"类型",type: 'ComponentsInput'},
                {modelName:'content',name:"title_f",label:"父级问题",type: 'ComponentsInput'},
                {modelName:'content',name:"title",label:"问题标题",type: 'ComponentsInput'},
                {modelName:'content',name:"sort",label:"排序",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"code",label:"类型",type: 'ComponentsInputSelect',options:[{value:'四位一体',label:'四位一体'},{value:'市容管理',label:'市容管理'},{value:'三改一拆',label:'三改一拆'},{value:'垃圾分类',label:'垃圾分类'}]},
                        {modelName:'content',name:"p_id",label:"父级问题",type: 'ComponentsInputSelect',ajax_url:"queryByFirst",props_label:"title",props_value:"id"},
                        {modelName:'content',name:"title",label:"问题标题",type: 'ComponentsInput'},
                        {modelName:'content',name:"sort",label:"排序",type: 'ComponentsInput'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
