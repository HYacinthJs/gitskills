import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'test_program',
    version:'PageNormal',
    api:{
        query: "/testrequirements/query",
        queryByAll: "/testrequirements/queryByAll",
        queryById:  "/testrequirements/queryById",
        save:  "/testrequirements/save",
        delete:  "/testrequirements/delete",
        getCompany:  "/company/queryByAll",

    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"item",label:"测试项目",type: 'ComponentsInput'},

                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {modelName:'content',title:"测试项目配置",type: 'AssemblyContent', components:[
                {modelName:'content',name:"item",label:"测试项目",type: 'ComponentsInput'},
                {modelName:'content',name:"standard",label:"结果判定",type: 'ComponentsInput'},
                {modelName:'content',name:"requirement",label:"测试方法",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"item",label:"测试项目",type: 'ComponentsInput',
                            rules:[{validator: utils.my_required, message: "请填写测试项目"}] },
                        {modelName:'content',name:"standard",label:"结果判定",type: 'ComponentsInput'},
                        {modelName:'content',name:"requirement",label:"测试方法",type: 'ComponentsInputTextarea'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
