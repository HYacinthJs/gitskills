
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'fixed_jurisdiction',
    version:'PageNormal',
    api:{
        query: "/jurisdiction/query",
        queryByAll: "/jurisdiction/queryByAll",
        queryById:  "/jurisdiction/queryById",
        save:  "/jurisdiction/save",
        delete:  "/jurisdiction/delete",
        queryBase:  "/jurisdiction/queryBase",
    },
    components:[
        {
            modelName:'content',type: 'AssemblyContent',primaryKey : 'j_id', components:[
                {modelName:'content',name:"r_name",label:"角色",type: 'ComponentsInput'},
                {modelName:'content',name:"j_name",label:"描述",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',dialog_width:"1050px",name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"r_name",label:"角色",type: 'ComponentsInput'},
                        {modelName:'content',name:"j_name",label:"描述",type: 'ComponentsInput'},
                        {modelName:'content',name:"home",label:"pc首页",type: 'ComponentsInput'},
                        {modelName:'content',name:"r_id",label:"id",type: 'ComponentsInputHidden'},
                        {modelName:'content',name:"j_id",label:"id",type: 'ComponentsInputHidden'},
                    ]},
                {modelName:'from',name :'optional1',label:"pc",type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"j_json",label:"角色",type: 'ComponentsInputJurisdiction',label_show: false},
                    ]},
            ]},
    ]
}
export default myModule
