import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_problem',
    version:'PageNormal',
    api:{
        delete:"/baseStationUser/delete",
        save:"/baseStationUser/save",
        queryById:"/baseStationUser/queryById",
        query:"/baseStationUser/query",
        import:"/baseStationUser/saveAll"
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"fuzzy_query",label:"模糊查询",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                        {modelName:'content',type: 'ComponentsInputImport',dialogName:"import",import_name:"导入一般用户",
                            jurisdictionJson: [{jurisdiction: [{name: "import"}]}]},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',
            components:[
                {modelName:'content', name: "b_name", label: "基站名称", type: "ComponentsInput"},
                {modelName:'content', name: "u_name", label: "手机号", type: "ComponentsInput"},
                {modelName:'content', name: "u_level_str", label: "级别", type: "ComponentsInput"}
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "u_name", label: "手机号", type: "ComponentsInput"},
                        {modelName:'content', name: "b_name", label: "基站名称", type: "ComponentsInput"},
                        {modelName:'content', name: "u_send_state", label: "是否发送", type: "ComponentsInputSelect", options: [{value: 1, label: "发送"}, {value: -1, label: "不发送"}] },
                        {modelName:'content', name: "u_id", type: "ComponentsInputHidden"}
                    ]},
            ]},
        {modelName:'dialog',name:"import",type: 'DialogImport',apiName_save:"import", components:[
                {modelName:'template',label: "手机号", value: "u_name", type: "ComponentsText"},
                {modelName:'template',label: "基站名称", value: "b_name", type: "ComponentsText"},
            ]},
    ]
}
export default myModule
