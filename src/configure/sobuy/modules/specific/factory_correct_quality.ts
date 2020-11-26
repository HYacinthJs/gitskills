import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'factory_correct_quality',
    version:'PageNormal',
    api:{
        query: "/qualityCorrection/queryProblemByFactory",
        queryByAll: "/qualityCorrection/queryByAll",
        queryById:  "/qualityCorrection/queryProblemById",
        save:  "/qualityCorrection/saveFactoryUser",
        getCompany:  "/company/queryByAll",
        queryByFactory:  "/supplier/queryByFactory",
        querySelectTree:'/problemtype/querySelectTree',
        export:"/simpleQuestion/simpleQuestion",
        export1:"/simpleQuestion/online",

    },
    components:[
        /*{
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        // {modelName:'content',name:"no",label:"部件编号",type: 'ComponentsInput'},
                        // {modelName:'content',name:"name",label:"部件名称",type: 'ComponentsInput'},
                        // {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },*/
        {
            modelName:'content',title:"待纠正问题",type: 'AssemblyContent',system_id:"content",apiNameQuery:"query",operation_width:"140px", components:[
                // {modelName:'content',name:"supplier_name",label:"货号",type: 'ComponentsInput'},
                // {modelName:'content',name:"department_name",label:"订单号",type: 'ComponentsInput'},
                // {modelName:'content',name:"name",label:"操作人",type: 'ComponentsInput'},
                // {modelName:'content',name:"post",label:"录入时间",type: 'ComponentsInputDay'},
                {modelName:'content',name:"t_desc",label:"问题描述",type: 'ComponentsInput'},
                {modelName:'content',name:"t_key",label:"状态",type: 'ComponentsInput'},
                // {modelName:'content',name:"reason",label:"忽略原因",type: 'ComponentsInput'},
                {modelName:'content',name:"quality_correction_id",label:"质量纠正id",type: 'ComponentsInputHidden'},
            ],toolBtn:[],tableBtn :[
                {label:"执行",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit',title:"执行"})
                        edit.query()
                    },jurisdictionJson: [{
                        jurisdiction: [{name: "edit"}],
                        "row":[{"t_key":"已发起"}]
                    }]
                },
                {label:"报告预览",jurisdictionJson: [{jurisdiction: [{name: "preview"}],}],click:function(data:any){
                        let system_id =
                            utils.my_post({apiName:'export1', params: {"id" :data.row.id,"wx":1},
                                ok: (json:any, dataAll:any) => {
                                    window.open(json.path)
                                },err: (json:any, dataAll:any) => {
                                    alert("预览出错")
                                }
                            })
                    },
                },
                {label:"导出报告",jurisdictionJson: [{jurisdiction: [{name: "download"}]}],click:function(data:any){
                        let edit =  utils.getStore().openDialog({name:'export',title:"导出报告"})
                        edit.query()
                    },
                    // jurisdictionJson: [{"row":[{"state":"检验完成"}]},
                    //     {"row":[{"state":"待审核"}]},
                    //     {"row":[{"state":"审核通过"}]},
                    //     {"row":[{"state":"审核不通过"}]},
                    //     {"row":[{"state":"修改/重做"}]},
                    // ],
                },
                {label:"删除",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],
                    click:function(data:any){utils.getStore().openDialog({name:'delete',title:"删除"})}},
            ]
        },
        {modelName:'dialog',name:"export",apiName_queryById:"queryById",apiName_download:"export",type: 'DialogDownload'},
        {modelName:'dialog',name:"edit",type: 'DialogEdit',dialog_width:"1400px",tableName:"content",apiName_save:"save",apiName_queryById:"queryById",components:[
                {modelName:'from',type: 'AssemblyCollapse',spread:true,label:"验证",name:"base" ,components:[
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"number_name",label:"货号",type: 'ComponentsText'},
                                {modelName:'content',name:"order_no",label:"订单号",type: 'ComponentsText'},
                                {modelName:'content',name:"factory_name",label:"工厂",type: 'ComponentsText'},
                                {modelName:'content',name:"supplier_name",label:"供应商",type: 'ComponentsText'},
                                {modelName:'content',name:"t_desc",label:"问题描述",type: 'ComponentsInputTextarea',show_type: "详情"},
                                {modelName:'content',name:"url",label:"问题图片",type: 'ComponentsInputImage'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"problem_name",label:"问题归类",type: 'ComponentsText'},
                                {modelName:'content',name:"pro_part",label:"问题部位",type: 'ComponentsInputTextarea',show_type: "详情"},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"pro_desc",label:"简单分析",type: 'ComponentsInputTextarea',show_type: "详情"},
                                {modelName:'content',name:"pro_desc_bz",label:"备注",type: 'ComponentsInputTextarea',show_type: "详情"},
                                {modelName:'content',name:"lscs",label:"临时措施",type: 'ComponentsInputTextarea',show_type: "详情"},
                                {modelName:'content',name:"lscs_bz",label:"备注",type: 'ComponentsInputTextarea',show_type: "详情"},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"lscs_url",label:"图片",type: 'ComponentsInputImage'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"desc2",label:"问题描述",type: 'ComponentsInputTextarea',show_type: "详情"},
                                {modelName:'content',name:"url2",label:"图片",type: 'ComponentsInputImage'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"",components:[
                                {modelName:'content',name:"zyfx",label:"真因分析",type: 'ComponentsInputTextarea',show_type: "详情"},
                                {modelName:'content',name:"yjxyfcs",label:"永久性预防纠正措施",type: 'ComponentsInputTextarea',show_type: "详情"},
                                {modelName:'content',name:"yjxyfcs_bz",label:"备注",type: 'ComponentsInputTextarea',show_type: "详情"},
                                {modelName:'content',name: "keys", label: 'keys',type:'ComponentsInputHidden',value_default:'1'},
                                {modelName:'content',name: 'quality_correction_id', label: '质量纠正id',type:'ComponentsInputHidden'},
                                {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                            ]},
                        {modelName:'from',type: 'AssemblyFrom',label:"工厂签名",components:[
                                {modelName:'content',name:"title",label:"",type: 'ComponentsText',style:{width:"1200px",'font-size':"20px",'text-align':"center"},
                                    value_default: "以上质量纠正经过我的确认，我会按照上述纠正措施执行，并承担相应的责任，请大家监督"},
                                {modelName:'content',name:"factory_user",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"user",label:"质量负责人员签名",type: 'ComponentsInput',style:{display:"inline-block",'text-align':"center"}},
                                        {modelName:'template',name:"url",label:"照片",type: 'ComponentsInputUploadImage'},
                                        {modelName:'template',name:"zw",label:"职务",type: 'ComponentsInput'},
                                        {modelName:'template',name:"t_key",label:"区分",type: 'ComponentsInputHidden',value_default:"1"},
                                    ]},
                                {modelName:'content',name:"factory_user2",label:"",type: 'ComponentsInputTable',label_show: false,value_default:[],components:[
                                        {modelName:'template',name:"user",label:"工艺执行人员签名",type: 'ComponentsInput',style:{display:"inline-block",'text-align':"center"}},
                                        {modelName:'template',name:"url",label:"照片",type: 'ComponentsInputUploadImage'},
                                        {modelName:'template',name:"zw",label:"职务",type: 'ComponentsInput'},
                                        {modelName:'template',name:"t_key",label:"区分",type: 'ComponentsInputHidden',value_default:"2"},
                                    ]},
                            ]},
                    ]},
            ]},
    ]
}
export default myModule
