import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal_jsgaj',
    name:'fixed_directories',
    version:'PageNormal_jsgaj',
    api:{
        delete:  "/directories/delete",
        save: "/directories/save",
        queryById:  "/directories/queryById",
        query: "/directories/query",
        getTree:"/department/getTree",
        import:"/directories/saveAll"

    },
    components:[
        {
            modelName:'content', type: 'AssemblyQueryOnly',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "fuzzy_query", label: "模糊查询", type: "ComponentsInput"},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                        {modelName:'content',type: 'ComponentsInputImport',dialogName:"edit",import_name:"添加",
                            jurisdictionJson: [{jurisdiction: [{name: "edit"}]}]},
                        {modelName:'content',type: 'ComponentsInputImport',dialogName:"import",import_name:"导入通讯录",
                            jurisdictionJson: [{jurisdiction: [{name: "import"}]}]},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContentOnly',primaryKey:"d_id",
            components:[
                {modelName:'content', name: "dp_name", label: "部门", type: "ComponentsInput"},
                {modelName:'content', name: "d_name", label: "姓名", type: "ComponentsInput"},
                {modelName:'content', name: "d_phone", label: "手机", type: "ComponentsInput"},
                {modelName:'content', name: "d_phone_simple", label: "短号", type: "ComponentsInput"},
                {modelName:'content', name: "d_code", label: "警号", type: "ComponentsInput"},
                {modelName:'content', name: "d_post", label: "职务", type: "ComponentsInput"}
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "dp_id", label: "部门", type: "ComponentsInputCascader", style: { width: "490px" }, ajax_url: "getTree"},
                        {modelName:'content', name: "d_name", label: "姓名", type: "ComponentsInput", rules: [{ validator: utils.my_required, message: "请输入姓名"}] },
                        {modelName:'content', name: "d_phone", label: "手机号", type: "ComponentsInput", rules: [{ validator: utils.my_required, message: "请输入手机号"}] },
                        {modelName:'content', name: "d_phone_simple", label: "短号", type: "ComponentsInput", rules: [{validator: utils.my_required, message: "请输入短号"}] },
                        {modelName:'content', name: "d_code", label: "警号", type: "ComponentsInput", rules: [{validator: utils.my_required, message: "请输入警号"}] },
                        {modelName:'content', name: "d_post", label: "职务", type: "ComponentsInput", rules: [{ validator: utils.my_required, message: "请输入职务"}] },
                        {modelName:'content', name: "d_id", type: "ComponentsInputHidden"}
                    ]},
            ]},
        {modelName:'dialog',name:"import",type: 'DialogImport',dialog_width:"1040px",components:[
                        {modelName:'template', label: "姓名", name: "d_name", type: "ComponentsText"},
                        {modelName:'template', label: "警号", name: "d_code", type: "ComponentsText"},
                        {modelName:'template', label: "手机号码", name: "d_phone", type: "ComponentsText"},
                        {modelName:'template', label: "手机短号", name: "d_phone_simple", type: "ComponentsText"},
                        {modelName:'template', label: "部门", name: "dp_name", type: "ComponentsText"},
                        {modelName:'template', label: "职务", name: "d_post", type: "ComponentsText"}
            ]}
    ]
}
export default myModule
