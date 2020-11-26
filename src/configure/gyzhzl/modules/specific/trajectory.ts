
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_trajectory',
    version:'PageNormal',
    api:{
        query: "/trajectory/query",
        queryByMap: "/trajectory/queryByMap",
        queryByAll: "/trajectory/queryByAll",
        queryById:  "/trajectory/queryById",
        save:  "/trajectory/save",
        delete:  "/trajectory/delete",
        role:  "/role/queryByAll",
        user:  "/user/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"user_id",label:"用户",type: 'ComponentsInputSelect',ajax_url:"user",props_label:"ui_name",props_value:"id",ajax_params:[{type:"text",name:"type",value:"检查人员"}]},
                        {modelName:'content',name:"day",label:"时间",type: 'ComponentsInputDay',day_auto:true},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content', type: 'AssemblyEdit',apiName_queryById:"queryByMap",components:[
                {modelName:'from',type: 'AssemblyFromSimple',components:[
                        {modelName:'content',name:"map",label:"地图",label_show: false,type: 'ComponentsInputMapTest',style:{width:"100%"}},
                    ]}
            ],toolBtn:[]
        },
    ]
}
export default myModule
