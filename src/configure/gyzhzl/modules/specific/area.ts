import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_area',
    version:'PageNormal',
    api:{
        query: "/area/query",
        queryByAll: "/area/queryByAll",
        queryById:  "/area/queryById",
        save:  "/area/save",
        delete:  "/area/delete",
        queryTree:"/area/getTree2",
        getTree:"/area/getTree",
        queryBase:'/'
    },
    components:[
        { modelName:'breadcrumbs',type: 'AssemblyBreadcrumbs'},
        {
            modelName:'content', type: 'AssemblyQuery',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"区域名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyTreeContent',
            components:[
                {modelName:'content',name:"name_f",label:"上级区域名称",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"区域名称",type: 'ComponentsInput'},
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
                        {modelName:'content',name:"p_id",label:"上级区域名称",type: 'ComponentsInputCascader',ajax_url:"getTree"},
                        {modelName:'content',name:"name",label:"区域名称",type: 'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入区域名称' }]},
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
