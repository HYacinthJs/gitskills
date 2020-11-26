import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'t_problem_type',
    version:'PageNormal',
    api:{
        query: "/problemtype/query",
        queryByAll: "/problemtype/queryByAll",
        queryById:  "/problemtype/queryById",
        queryTree:"/problemtype/queryTree",
        save:  "/problemtype/save",
        delete:  "/problemtype/delete",
        querySelectTree:'/problemtype/querySelectTree',
        queryBase:'/',
        getCompany:  "/company/queryByAll",

    },
    components:[
        { modelName:'breadcrumbs',type: 'AssemblyBreadcrumbs'},
        {
            modelName:'content', type: 'AssemblyQuery',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"company_id",label:"公司名称",label_show:true,label_width:"140px",type: 'ComponentsInputSelect',jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"name",label:"验收问题类别名称",label_show:true,label_width:"250px",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',title:"验收问题类别管理",type: 'AssemblyTreeContent',
            components:[
                // {modelName:'content',name:"company_name",label:"进出口公司",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"验收问题类别名称",type: 'ComponentsInputEmail'},
            ],

        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"验收问题类别名称",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入验收问题类型名称"}]},
                        {modelName:'content',name:"pid",label:" 父级类型",type: 'ComponentsInputSelect',ajax_url:"querySelectTree",props_label:"name",props_value:"id"},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ],queryBase(){
                // console.log("queryBase========")
                let that:any =this
                that.initValue()
                that.initAjax()
                let content = utils.getPage().getComponents({system_id:that.tableName})
                that.setEditValue({pid:content.tree_id})
            }},
    ]
}
export default myModule
