
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_grid',
    version:'PageNormal',
    api:{
        query: "/grid/query",
        queryByAll: "/grid/queryByAll",
        queryById:  "/grid/queryById",
        save:  "/grid/save",
        delete:  "/grid/delete",
        street:  "/street/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"网格名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"street_name",label:"街道",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"网格名称",type: 'ComponentsInput'},
                {modelName:'content',name:"people",label:"网格长",type: 'ComponentsInput'},
                {modelName:'content',name:"people_assistant",label:"副网格长",type: 'ComponentsInput'},
                {modelName:'content',name:"contacts",label:"网格联络员",type: 'ComponentsInput'},
                {modelName:'content',name:"contacts_phone",label:"联络员手机",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"street_id",label:"街道",type: 'ComponentsInputSelect',ajax_url:"street",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"name",label:"网格名称",type: 'ComponentsInput'},
                        {modelName:'content',name:"people",label:"网格长",type: 'ComponentsInput'},
                        {modelName:'content',name:"people_assistant",label:"副网格长",type: 'ComponentsInput'},
                        {modelName:'content',name:"contacts",label:"网格联络员",type: 'ComponentsInput'},
                        {modelName:'content',name:"contacts_phone",label:"联络员手机",type: 'ComponentsInput'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
