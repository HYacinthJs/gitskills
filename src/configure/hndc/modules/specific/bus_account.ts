import * as utils from "../../../../components/util/utils";
import {Layout} from "@/components/class/Layout";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'specific_busAccount',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_account/query",
        queryByAll: "/bus_account/queryByAll",
        queryById:  "/bus_account/queryById",
        save:  "/bus_account/save",
        delete:  "/bus_account/delete",
        confirm:  "/bus_account/confirm",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'time',label:'日期',type:'ComponentsInputDay'},
                        {modelName:'content',name: 'time_start',label:'开始日期',type:'ComponentsInputDay'},
                        {modelName:'content',name: 'time_end',label:'结束日期',type:'ComponentsInputDay'},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name: 'time', label: '日期',type:'ComponentsInput'},
                {modelName:'content',name: 'money', label: '当前余额(元)  -',type:'ComponentsInput'},
                {modelName:'content',name: 'money_recharge', label: '(  自费充值(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'money_recharge2', label: '+ 公司补贴(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'money_refund', label: '-  退款金额(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'money_order', label: '-  点餐消费金额(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'money_cancel', label: '+  取消订单金额(元)  )',type:'ComponentsInput'},
                {modelName:'content',name: 'money_error', label: '=  异常金额(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'state', label: '状态',type:'ComponentsInput'},
                {modelName:'content',name: 'user_name', label: '对账人',type:'ComponentsInput'},
                {modelName:'content',name: 'account_time', label: '对账时间',type:'ComponentsInput'},
            ],
            tableBtn:[
                {label:"确认",jurisdictionJson: [{jurisdiction: [{name: "confirm"}]}],click:function(data:any){
                        utils.getStore().openDialog({name:'confirm'})
                    }},
            ],
            toolBtn : [
                {label:"批量确认",jurisdictionJson: [{jurisdiction: [{name: "confirm"}]}],type:"primary",click:function(data:any){
                      utils.getStore().openDialog({name:'confirmAll'})
                    }},
            ]
        },
        {modelName:'dialog',name:"confirm",title:'确认',msg:'是否确认？',type: 'DialogSelect',apiName_save:"confirm"},
        {modelName:'dialog',name:"confirmAll",title:'确认',msg:'是否确认批量确认？',valueModel:"批量",type: 'DialogSelect',apiName_save:"confirm"}
    ]
}
export default myModule
