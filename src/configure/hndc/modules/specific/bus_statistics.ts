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
                {modelName:'content',name: 'time_str', label: '日期',type:'ComponentsInput'},
                {modelName:'content',name: 'total_num1', label: '早餐套餐数量',type:'ComponentsInput',value_default:0},
                {modelName:'content',name: 'total_num2', label: '现场午餐菜品数量',type:'ComponentsInput',value_default:0},
                {modelName:'content',name: 'total_num2_2', label: '预订午餐菜品数量',type:'ComponentsInput',value_default:0},
                {modelName:'content',name: 'total_num3', label: '晚餐套餐数量',type:'ComponentsInput',value_default:0},

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
