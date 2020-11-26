
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
                        {modelName:'content',name:"home_sj",label:"手机首页",type: 'ComponentsInput'},
                        {modelName:'content',name:"home_wx",label:"微信首页",type: 'ComponentsInput'},
                        {modelName:'content',name:"home_zfb",label:"支付宝首页",type: 'ComponentsInput'},
                        {modelName:'content',name:"r_id",label:"id",type: 'ComponentsInputHidden'},
                        {modelName:'content',name:"j_id",label:"id",type: 'ComponentsInputHidden'},
                    ]},
                {modelName:'from',name :'optional1',label:"pc",type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"j_json",label:"角色",type: 'ComponentsInputJurisdiction',label_show: false},
                    ]},
                {modelName:'from',name :'optional2',label:"手机",type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"j_json_sj",label:"角色",type: 'ComponentsInputJurisdiction',label_show: false},
                    ]},
                {modelName:'from',name :'optional3',label:"微信",type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"j_json_wx",label:"角色",type: 'ComponentsInputJurisdiction',label_show: false},
                    ]},
                {modelName:'from',name :'optional4',label:"支付宝",type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"j_json_zfb",label:"角色",type: 'ComponentsInputJurisdiction',label_show: false},
                    ]},
            ]},
    ]
}
export default myModule
