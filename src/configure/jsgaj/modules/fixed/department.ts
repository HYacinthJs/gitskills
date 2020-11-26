import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal_jsgaj',
    name:'fixed_department',
    version:'PageNormal_jsgaj',
    api:{
        delete: "/department/delete",
        save: "/department/save",
        queryById: "/department/queryById",
        query: "/department/query",

        role:"/role/queryByAll",
        getTree:"/department/getTree",
        import:"/department/saveAll"

    },
    components:[
        { modelName:'breadcrumbs',type: 'AssemblyBreadcrumbs',isQuery:false},
        {
            modelName:'content', type: 'AssemblyQueryOnly',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: "fuzzy_query", label: "部门名称", type: "ComponentsInput"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                        {modelName:'content',type: 'ComponentsInputImport',dialogName:"edit",import_name:"添加",
                            jurisdictionJson: [{jurisdiction: [{name: "edit"}]}]},
                        {modelName:'content',type: 'ComponentsInputImport',dialogName:"import",import_name:"导入部门",
                            jurisdictionJson: [{jurisdiction: [{name: "import"}]}]},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContentOnly',primaryKey:"dp_id",
            components:[
               {modelName:'content',name: "dp_name_f", label: "上级部门", type: "ComponentsInput"},
               {modelName:'content',name: "dp_name", label: "部门", type: "ComponentsInput"},
               {modelName:'content',name: "dp_nickname", label: "简称", type: "ComponentsInput"},
               {modelName:'content',name: "dp_code", label: "编号", type: "ComponentsInput"},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "dp_topid", label: "上级部门", type: "ComponentsInputCascader", style: { width: "490px" }, ajax_url: "getTree"},
                        {modelName:'content',name: "dp_name", label: "部门", type: "ComponentsInput", rules: [{ validator: utils.my_required, message: "请输入部门"}]},
                        {modelName:'content',name: "dp_nickname", label: "简称", type: "ComponentsInput", rules: [{ validator: utils.my_required, message: "请输入简称"}]},
                        {modelName:'content',name: "dp_code", label: "编号", type: "ComponentsInput", rules: [{ validator: utils.my_required, message: "请输入编号"}]},
                        {modelName:'content',name: "dp_id", type: "ComponentsInputHidden"}
                    ]},
            ]},
        {modelName:'dialog',name:"import",type: 'DialogImport',apiName_save:"import",width:"80%", components:[
                        {modelName:'template',label: "名称", value: "dp_name", type: "ComponentsText"},
                        {modelName:'template',label: "简称", value: "dp_nickname", type: "ComponentsText"},
                        {modelName:'template',label: "代码",value: "dp_code", type: "ComponentsText"},
                        {modelName:'template',label: "上级单位", value: "dp_top", type: "ComponentsText"}
            ]}
    ]
}
export default myModule
