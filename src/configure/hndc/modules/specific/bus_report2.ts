import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_bus_order',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_order/query",
        queryByAll: "/bus_order/queryByAll",
        queryById:  "/bus_order/queryById",
        save:  "/bus_order/save",
        delete:  "/bus_order/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'user_id', label: '用户',type:'ComponentsInputSelect',ajax:{url:'/user/queryByPTYH'},props:{value:'id',label:'ui_name',}},
                        {modelName:'content',name: 'time_start',label:'开始日期',type:'ComponentsInputDay'},
                        {modelName:'content',name: 'time_end',label:'结束日期',type:'ComponentsInputDay'},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name: 'ui_name', label: '人员姓名',type:'ComponentsInput'},
                {modelName:'content',name: 'dp_name', label: '部门名称',type:'ComponentsInput'},
                {modelName:'content',name: 'user_type', label: '账户类别',type:'ComponentsInput'},
                {modelName:'content',name: 'type', label: '项目',type:'ComponentsInput'},
                {modelName:'content',name: 'create_time', label: '变动时间',type:'ComponentsInput'},
                {modelName:'content',name: 'price', label: '变动金额',type:'ComponentsInput'},
                {modelName:'content',name: 'price_end', label: '卡内余额',type:'ComponentsInput'},

            ],
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
    ]
}
export default myModule
