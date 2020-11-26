import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal_jsgaj',
    name:'sys_problem',
    version:'PageNormal_jsgaj',
    api:{
        delete:  "/filesProblem/delete",
        save:  "/filesProblem/save",
        queryById:  "/filesProblem/queryById",
        query:  "/filesProblem/query",
        queryFirst:"/filesProblem/queryByFirst"
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQueryOnly',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"fuzzy_query",label:"模糊查询",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContentOnly',
            components:[
                {modelName:'content',name: "label_f", label: "上级", type: "ComponentsInput"},
                {modelName:'content',name: "label", label: "描述", type: "ComponentsInput"},
                {modelName:'content',name: "value", label: "值", type: "ComponentsInput"},
                {modelName:'content',name: "sort", label: "排序", type: "ComponentsInput"},
                {modelName:'content',name: "state_str", label: "是否有效", type: "ComponentsInput"}
            ],
            tableBtn : [

                {label:"编辑",type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit'})
                        edit.query()
                    }},
                {label:"详情",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit2'})
                        edit.query()
                    }},
                {label:"删除",type:"danger",click:function(data:any){
                        utils.getStore().openDialog({name:'delete'})}},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "id_top", label: "上级",  type: "ComponentsInputSelect",
                            ajax_url:"queryFirst",props_label:"label",props_value:"id"},
                        {modelName:'content', name: "label", label: "描述", type: "ComponentsInput" },
                        {modelName:'content', name: "value", label: "值", type: "ComponentsInput" },
                        {modelName:'content', name: "sort", label: "排序", type: "ComponentsInput" },
                        {modelName:'content', name: "state", label: "是否有效", type: "ComponentsInputSelect", options: [{label: "有效", value: "1"}, {label: "无效", value: "-1"}] },
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"edit2",save_label:"", type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content', name: "id_top", label: "上级",  type: "ComponentsInputSelect",
                            ajax_url:"queryFirst",props_label:"label",props_value:"id"},
                        {modelName:'content', name: "label", label: "描述", type: "ComponentsInput" },
                        {modelName:'content', name: "value", label: "值", type: "ComponentsInput" },
                        {modelName:'content', name: "sort", label: "排序", type: "ComponentsInput" },
                        {modelName:'content', name: "state", label: "是否有效", type: "ComponentsInputSelect", options: [{label: "有效", value: "1"}, {label: "无效", value: "-1"}] },
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
