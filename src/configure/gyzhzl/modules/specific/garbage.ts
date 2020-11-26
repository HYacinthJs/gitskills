import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_garbage',
    version:'PageNormal',
    api:{
        query: "/garbage/query",
        queryByAll: "/garbage/queryByAll",
        queryById:  "/garbage/queryById",
        save:  "/garbage/save",
        delete:  "/garbage/delete",
        dict:  "/dict/queryByAll",
        updateUpload:  "/garbage/updateUpload",
        updateExamine:  "/garbage/updateExamine",
        updateIssued:  "/garbage/updateIssued",
        updateRectification:  "/garbage/updateRectification",
        updateReexamineOk:  "/garbage/updateReexamineOk",
        updateReexamineErr:  "/garbage/updateReexamineErr",
        updateDelay:  "/garbage/updateDelay",
        queryByGY:  "/area/queryByGY",
        question:  "/question/getTree",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"create_name",label:"来源",type: 'ComponentsInput'},
                        {modelName:'content',name:"area",label:"村（社区）",type: 'ComponentsInputSelect',ajax_url:"queryByGY",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"kind",label:"评分",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"垃圾分类"}]},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsInput'},
                {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsInput'},
                {modelName:'content',name:"check_time_str",label:"检查时间",type: 'ComponentsInputDay'},
                {modelName:'content',name:"kind_name",label:"评分",type: 'ComponentsInput'},
                {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsInput'},
                {modelName:'content',name:"create_name",label:"来源",type: 'ComponentsInput'},
                {modelName:'content',name:"process",label:"步骤",type: 'ComponentsInput'},
            ],
            tableBtn : [
                {label:"审核",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateExamine'})
                        edit.query()
                    },process:{process: '审核',flow:"垃圾分类"}
                },
                {label:"详情",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'info'})
                        edit.query()
                    }
                },

                {label:"删除",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){utils.getStore().openDialog({name:'delete'})}},
            ]
        },
        {modelName:'dialog',name:"edit",dialog_width:"970px",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area",label:"所属地区",type: 'ComponentsInputSelect',ajax_url:"queryByGY",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsInput'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"kind",label:"评分",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"垃圾分类"}]},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsInputTextarea',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputUpload'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"info",dialog_width:"970px",title:"详情",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area_name",label:"所属地区",type: 'ComponentsText'},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsText'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsText'},
                        {modelName:'content',name:"kind_name",label:"评分",type: 'ComponentsText'},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsText',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ],toolBtn : []
        },
        {modelName:'dialog',name:"updateExamine",apiName_save:"updateExamine",dialog_width:"970px",title:"审核",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"area",label:"所属地区",type: 'ComponentsInputSelect',ajax_url:"queryByGY",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"addr",label:"具体地点",type: 'ComponentsInput'},
                        {modelName:'content',name:"check_time",label:"检查时间",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"kind",label:"评分",type: 'ComponentsInputSelect',ajax_url:"dict",props_label:"name",props_value:"id",ajax_params:[{type:"text",name:"code",value:"垃圾分类"}]},
                        {modelName:'content',name:"remark",label:"问题描述",type: 'ComponentsInputTextarea',style:{width: "730px"}},
                        {modelName:'content',name:"photo",label:"问题照片",type: 'ComponentsInputImage',style:{width: "730px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ],toolBtn : [
                {label:"审核通过" ,type:"primary",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'updateExamine'})
                        edit.save()
                    }}
            ]},
    ]
}
export default myModule
