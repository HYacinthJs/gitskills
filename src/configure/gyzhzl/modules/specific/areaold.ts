import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_areaold',
    version:'PageNormal',
    api:{
        query: "/area/query",
        queryByAll: "/area/queryByAll",
        queryById:  "/area/queryById",
        save:  "/area/save",
        delete:  "/area/delete",
        getTree:  "/area/getTree",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"区域名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"name_f",label:"父级区域名称",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"区域名称",type: 'ComponentsInput'},
                {modelName:'content',name:"sort",label:"排序",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"p_id",label:"父级区域名称",type: 'ComponentsInputCascader',ajax_url:"getTree"},
                        {modelName:'content',name:"name",label:"区域名称",type: 'ComponentsInput'},
                        {modelName:'content',name:"sort",label:"排序",type: 'ComponentsInput'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
