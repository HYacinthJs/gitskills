import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_question',
    version:'PageNormal',
    api:{
        query: "/question/query",
        queryByAll: "/question/queryByAll",
        queryById:  "/question/queryById",
        save:  "/question/save",
        delete:  "/question/delete",
        queryTree:"/question/getTree2",
        queryByFirst:  "/question/queryByFirst",
        queryBase:'/'
    },
    components:[
        { modelName:'breadcrumbs',type: 'AssemblyBreadcrumbs'},
        {
            modelName:'content', type: 'AssemblyQuery',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"问题类型",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyTreeContent',
            components:[
                {modelName:'content',name:"code",label:"类型",type: 'ComponentsInput'},
                {modelName:'content',name:"title_f",label:"父级问题",type: 'ComponentsInput'},
                {modelName:'content',name:"title",label:"问题标题",type: 'ComponentsInput'},
                {modelName:'content',name:"sort",label:"排序",type: 'ComponentsInput'},
            ],

            queryByPid() {
                let that:any = this
                let params = that.getParams()
                if(that.tree_id && that.tree_id>0)
                    params["p_id"]= that.tree_id
                    utils.my_post({apiName:"query", params: params,
                    ok: (json:any, dataAll:any) => {
                        that.value=json.list
                        that.total=json.totalRow
                        that.rows=json.pageSize
                        that.currentPage=json.pageNumber

                    },
                    err:(json:any, dataAll:any) => {
                        that.value=json.list
                        that.total=json.totalRow
                        that.rows=json.pageSize
                        that.currentPage=json.pageNumber
                    }
                })
            }
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"code",label:"类型",type: 'ComponentsInputSelect',rules:[{ validator: utils.my_required, message: '请选择类型' }],options:[{value:'四位一体',label:'四位一体'},{value:'市容管理',label:'市容管理'},{value:'三改一拆',label:'三改一拆'},{value:'垃圾分类',label:'垃圾分类'}]},
                        {modelName:'content',name:"p_id",label:"父级问题",type: 'ComponentsInputSelect',ajax_url:"queryByFirst",props_label:"title",props_value:"id"},
                        {modelName:'content',name:"title",label:"问题标题",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入问题标题' }]},
                        {modelName:'content',name:"sort",label:"排序",type: 'ComponentsInput',rules:[{ validator: utils.my_integer, message: '请输入整数' },{ validator: utils.my_required, message: '请输入排序' }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ],queryBase(){
                let that:any = this
                that.initValue()
                that.initAjax()
                let content = utils.getPage().getComponents({system_id:that.tableName})
                that.setEditValue({p_id:content.tree_id})
            }},
    ]
}
export default myModule
