import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'specific_busReport4',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_report4/query",
        queryByAll: "/bus_report4/queryByAll",
        queryById:  "/bus_report4/queryById",
        save:  "/bus_report4/save",
        delete:  "/bus_report4/delete",
        toExecl:  "/bus_report4/toExecl",
        user:  '/user/queryByPTYH',
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'user_id',label:'用户',type:'ComponentsInputSelect',ajax_url:"user",props_label:"ui_name",props_value:"id"},
                        {modelName:'content',name: 'time_start',label:'开始日期',type:'ComponentsInputDay',day_auto:true,day_auto_type:"上周一"},
                        {modelName:'content',name: 'time_end',label:'结束日期',type:'ComponentsInputDay',day_auto:true},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',utilshow:false, components:[
                {modelName:'content',name: 'name', label: '用户名称',type:'ComponentsInput'},
                {modelName:'content',name: 'counts', label: '总次数',type:'ComponentsInput',value_default:"0"},
                {modelName:'content',name: 'price', label: '总金额（打折）',type:'ComponentsInput',value_default:"0"},
                {modelName:'content',name: 'price_all', label: '总金额（原价）',type:'ComponentsInput',value_default:"0"},
                {modelName:'content',name: 'price_pay', label: '结算金额',type:'ComponentsInput',value_default:"0"},
            ],
            toolBtn : [
                {label:"导出",jurisdictionJson: [{jurisdiction: [{name: "execl"}]}],show:true,type:"primary",click:function(data:any){
                        utils.getStore().openDialog({name:'execl'})
                    }},
            ]
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'order_id', label: '订单',type:'ComponentsInput'},
                        {modelName:'content',name: 'food_id', label: '食物名称',type:'ComponentsInput'},
                        {modelName:'content',name: 'is_dis', label: '是否折扣',type:'ComponentsInputSelect',options:[{value:'是'},{value:'否'}]},
                        {modelName:'content',name: 'discount', label: '折扣',type:'ComponentsInput'},
                        {modelName:'content',name: 'price_dis', label: '折扣后价格',type:'ComponentsInput'},

                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"execl",param_type:"传参下载",queryName_d:"query",downloadType:"下载",apiName_queryById:"queryById",apiName_download:"toExecl",type: 'DialogDownload'},

    ]
}
export default myModule
