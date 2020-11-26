import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_problem',
    version:'PageNormal',
    api:{
        delete: "/baseStation/delete",
        save: "/baseStation/save",
        queryById: "/baseStation/queryById",
        query: "/baseStation/query",
        import:"/baseStation/saveAll"
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"fuzzy_query",label:"模糊查询",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                        {modelName:'content',type: 'ComponentsInputImport',dialogName:"import",import_name:"导入基站",
                            jurisdictionJson: [{jurisdiction: [{name: "import"}]}]},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',
            components:[
                { modelName:'content',name: "b_name", label: "基站名称", type: "ComponentsInput"},
                { modelName:'content',name: "b_area", label: "区域", type: "ComponentsInput"},
                { modelName:'content',name: "b_town", label: "镇", type: "ComponentsInput"},
                { modelName:'content',name: "b_lat", label: "经度", type: "ComponentsInput"},
                { modelName:'content',name: "b_lng", label: "纬度", type: "ComponentsInput"},
                { modelName:'content',name: "state_str", label: "是否有效", type: "ComponentsInput"}
            ]
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        { modelName:'content',name: "b_name", label: "基站名称", type: "ComponentsInput"},
                        {  modelName:'content',name: "b_area", label: "区域", type: "ComponentsInput"},
                        {  modelName:'content',name: "b_town", label: "镇", type: "ComponentsInput"},
                        {  modelName:'content',name: "b_lat", label: "经度", type: "ComponentsInput"},
                        {  modelName:'content',name: "b_lng", label: "纬度", type: "ComponentsInput"},
                        { modelName:'content', name: "b_id", type: "ComponentsInputHidden"}
                    ]},
            ]},
        {modelName:'dialog',name:"import",type: 'DialogImport',apiName_save:"import", components:[
                {modelName:'template',label: "区域名称", value: "b_area", type: "ComponentsText"},
                {modelName:'template',label: "微片区", value: "b_town", type: "ComponentsText"},
                {modelName:'template',label: "基站名称",value: "b_name", type: "ComponentsText"},
                {modelName:'template',label: "纬度", value: "b_lat", type: "ComponentsText"},
                {modelName:'template',label: "经度", value: "b_lng", type: "ComponentsText"},
            ]},

    ]
}
export default myModule
