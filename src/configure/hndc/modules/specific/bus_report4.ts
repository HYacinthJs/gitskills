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
                        {modelName:'content',name: 'time_start',label:'开始日期',type:'ComponentsInputDay'},
                        {modelName:'content',name: 'time_end',label:'结束日期',type:'ComponentsInputDay'},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name: 'name', label: '单位名称',type:'ComponentsInput'},
                {modelName:'content',name: 'price1', label: '总收入',type:'ComponentsInput'},
                {modelName:'content',name: 'price2', label: '总支出',type:'ComponentsInput'},
                {modelName:'content',name: 'price3', label: '净收入',type:'ComponentsInput'},
                {modelName:'content',name: 'price4', label: '现金充值',type:'ComponentsInput'},
                {modelName:'content',name: 'price5', label: '公司补贴',type:'ComponentsInput'},
                {modelName:'content',name: 'price6', label: '就餐消费',type:'ComponentsInput'},
                {modelName:'content',name: 'price7', label: '取消预定扣款金额',type:'ComponentsInput'},
                {modelName:'content',name: 'price8', label: '手工取款',type:'ComponentsInput'},
                {modelName:'content',name: 'price9', label: '换购费用',type:'ComponentsInput'},

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
