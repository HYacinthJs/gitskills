import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'specific_busReport3',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_report3/query",
        queryByAll: "/bus_report3/queryByAll",
        queryById:  "/bus_report3/queryById",
        save:  "/bus_report3/save",
        delete:  "/bus_report3/delete",
        toExecl:  "/bus_report3/toExecl",
        goods:  "/bus_goods/queryByAll",
        goods_type: "/bus_goods_type/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'name',label:'物品名称',type:'ComponentsInputSelect',ajax_url:"goods",props_label:"name",props_value:"name"},
                        {modelName:'content',name: 'type',label:'物品类型',type: 'ComponentsInputSelect',ajax_url:"goods_type",props_label:"name",props_value:"name"},
                        {modelName:'content',name: 'time_start',label:'开始日期',type:'ComponentsInputDay',day_auto:true,day_auto_type:"上周一"},
                        {modelName:'content',name: 'time_end',label:'结束日期',type:'ComponentsInputDay',day_auto:true},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',utilshow:false, components:[
                {modelName:'content',name: 'name', label: '物品名称',type:'ComponentsInput'},
                {modelName:'content',name: 'count', label: '总数量',type:'ComponentsInput',value_default:'0'},
                {modelName:'content',name: 'redeemed', label: '已兑换数量',type:'ComponentsInput',value_default:'0'},
                {modelName:'content',name: 'unredeemed', label: '剩余兑换数量',type:'ComponentsInput',value_default:'0'},
                {modelName:'content',name: 'received', label: '已领取数量',type:'ComponentsInput',value_default:'0'},
                {modelName:'content',name: 'unreceived', label: '未领取数量',type:'ComponentsInput',value_default:'0'},
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
