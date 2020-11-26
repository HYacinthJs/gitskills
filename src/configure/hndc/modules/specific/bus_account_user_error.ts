import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'specific_busAccountUserError',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_account/queryByUserError",
        queryByAll: "/bus_account/queryByAll",
        queryById:  "/bus_account/queryById",
        save:  "/bus_account/save",
        delete:  "/bus_account/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'user_name',label:'用户名',type:'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',utilshow:false, components:[
                {modelName:'content',name: 'user_name', label: '用户',type:'ComponentsInput'},
                {modelName:'content',name: 'money', label: '当前余额(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'money_recharge', label: '自费充值(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'money_recharge2', label: '公司补贴(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'money_refund', label: '手工退款金额(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'money_order', label: '点餐消费金额(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'money_cancel', label: '取消订单退款(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'money_error', label: '异常金额(元)',type:'ComponentsInput'},
            ],
        },
    ]
}
export default myModule
