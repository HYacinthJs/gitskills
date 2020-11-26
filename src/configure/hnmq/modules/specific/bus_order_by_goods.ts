import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'specific_busOrderByGoods',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_order/queryByGoods",
        queryByAll: "/bus_order/queryByAll",
        queryById:  "/bus_order/queryById",
        save:  "/bus_order/save",
        delete:  "/bus_order/delete",
        user:  "/user/queryByAll",
        department:  "/department/getTree",
        toExecl:'/bus_order/toExeclByGoods',
        receive:'/bus_order/receive',
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'good_name',label:'物品名称',type:'ComponentsInput'},
                        {modelName:'content',name: 'create_time_1',label:'开始时间',type:'ComponentsInputDay'},
                        {modelName:'content',name: 'create_time_2',label:'结束时间',type:'ComponentsInputDay'},
                        {modelName:'content',name: 'no',label:'订单号',type:'ComponentsInput'},
                        {modelName:'content',name: 'user_id', label: '用户',type:'ComponentsInputSelect',ajax_url:"user",props_label:"ui_name",props_value:"id" },
                        {modelName:'content',name: 'dp_id', label: '部门',type:'ComponentsInputCascader',ajax_url:"department"},
                        {modelName:'content',name: 'state', label: '状态',type:'ComponentsInputSelect',options:[{value:'未领取'},{value:'已领取'}]},

                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ],
        },
        {
            modelName:'content',type: 'AssemblyContent',details_show:true, components:[
                {modelName:'content',name: 'ui_name', label: '用户',type:'ComponentsInput',},
                {modelName:'content',name: 'dp_name', label: '部门',type:'ComponentsInput'},
                {modelName:'content',name: 'create_time', label: '创建时间',type:'ComponentsInput',},
                {modelName:'content',name: 'time_complete', label: '领取时间',type:'ComponentsInput'},
                {modelName:'content',name: 'no', label: '订单号',type:'ComponentsInput'},
                {modelName:'content',name: 'price_all', label: '订单总价(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'state', label: '状态',type:'ComponentsInput',},

                {modelName:'details',name: 'name', label: '物品',type:'ComponentsInput',},
                {modelName:'details',name: 'number', label: '数量',type:'ComponentsInput',},
                {modelName:'details',name: 'price_unit', label: '单价',type:'ComponentsInput',},
                {modelName:'details',name: 'price', label: '总价',type:'ComponentsInput',},
            ],
            tableBtn :[
                {label:"领取",jurisdictionJson: [{jurisdiction: [{name: "receive"}],row: [{state: "未领取"}]}],click:function(data:any){
                    utils.getStore().openDialog({name:'receive'})
                }},
            ],
            toolBtn : [
                {label:"批量领取",jurisdictionJson: [{jurisdiction: [{name: "receive"}]}],type:"primary",click:function(data:any){
                    utils.getStore().openDialog({name:'receiveAll'})
                }},
                {label:"导出",jurisdictionJson: [{jurisdiction: [{name: "execl"}]}],type:"primary",click:function(data:any){
                    utils.getStore().openDialog({name:'execl'})
                }},
            ]
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'type', label: '订单类型',type:'ComponentsInputSelect',options:[{value:'早餐'},{value:'预定午餐'},{value:'现场午餐'},{value:'晚餐'},{value:'物品'}]},
                        {modelName:'content',name: 'price_all', label: '订单总价',type:'ComponentsInput'},
                        {modelName:'content',name: 'price_del', label: '订单优惠金额',type:'ComponentsInput'},
                        {modelName:'content',name: 'price_rea', label: '订单优惠后价格',type:'ComponentsInput'},
                        {modelName:'content',name: 'price_back', label: '退款金额',type:'ComponentsInput'},
                        {modelName:'content',name: 'is_back', label: '是否退款',type:'ComponentsInputSelect',options:[{value:'是'},{value:'否'}]},
                        {modelName:'content',name: 'scale', label: '退款比例(%)',type:'ComponentsInput'},
                        {modelName:'content',name: 'is_out', label: '是否减量',type:'ComponentsInputSelect',options:[{value:'是'},{value:'否'}]},
                        {modelName:'content',name: 'count', label: '食物数量',type:'ComponentsInput'},
                        {modelName:'content',name: 'state', label: '状态',type:'ComponentsInputSelect',options:[{value:'未取餐'},{value:'过期'},{value:'已取消'},{value:'已取餐'},{value:'对账完成'}]},
                        {modelName:'content',name: 'is_check', label: '是否对账',type:'ComponentsInputSelect',options:[{value:'是'},{value:'否'}]},
                        {modelName:'content',name: 'goods', label: '物品',jurisdictionJson:[{components:[{type:'物品'}]}],type:'ComponentsInputSelect',ajax:{url:'/bus_goods/queryByAll'},props:{value:'id',label:'name',}},
                        {modelName:'content',name: 'breakfast', label: '早餐',jurisdictionJson:[{components:[{type:'早餐'}]}],type:'ComponentsInputSelect',ajax:{url:'/bus_menu_setmeal/queryByBreakfast'},props:{value:'id',label:'name',}},
                        {modelName:'content',name: 'dinner', label: '晚餐',jurisdictionJson:[{components:[{type:'晚餐'}]}],type:'ComponentsInputSelect',ajax:{url:'/bus_menu_setmeal/queryByDinner'},props:{value:'id',label:'name',}},
                        {modelName:'content',name: "lunch", label: "午餐",jurisdictionJson:[{components:[{type:'预定午餐'},{type:'现场午餐'}]}], type: "ComponentsInputTransfer", ajax: {url: "/bus_menu_food/queryByAll",data_name: {key: "id", label: "name"}}},

                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},

        {modelName:'dialog',name:"receiveAll",type: 'DialogSelect',title:'领取',msg:'是否确认批量领取？',valueModel:"批量",tableName:"content",apiName_save:"receive"},
        {modelName:'dialog',name:"receive",type: 'DialogSelect',title:'领取',msg:'是否确认领取？',tableName:"content",apiName_save:"receive"},

        {modelName:'dialog',name:"execl",param_type:"传参下载",queryName_d:"query",downloadType:"下载",apiName_queryById:"queryById",apiName_download:"toExecl",type: 'DialogDownload'},

    ]
}
export default myModule
