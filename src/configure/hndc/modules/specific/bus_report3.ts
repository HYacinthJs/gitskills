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
                {modelName:'content',name: 'num_1', label: '早餐',type:'ComponentsInput', components: [
                        {modelName:'content',name: "num_1", label: "次数",  type: "ComponentsInput",value_default:"0"},
                        {modelName:'content',name: "price_rea_1", label: "金额（打折）",   type: "ComponentsInput"},
                        {modelName:'content',name: "price_all_1", label: "金额（原价）", type: "ComponentsInput"},
                    ],},
                {modelName:'content',name: 'num_2', label: '午餐',type:'ComponentsInput', components: [
                        {modelName:'content',name: "num_2", label: "有效次数",   type: "ComponentsInput",value_default:"0"},
                        {modelName:'content',name: "price_rea_2", label: "实收金额",  type: "ComponentsInput"},
                        {modelName:'content',name: "price_all_2", label: "有效订单原价",type: "ComponentsInput"},
                        {modelName:'content',name: "num_2_2", label: "取消次数",  type: "ComponentsInput",value_default:"0"},
                        {modelName:'content',name: "price_rea2_2", label: "超时取消手续费",  type: "ComponentsInput"},
                    ],},
                {modelName:'content',name: 'num_3', label: '晚餐',type:'ComponentsInput', components: [
                        {modelName:'content',name: "num_3", label: "次数", type: "ComponentsInput",value_default:"0"},
                        {modelName:'content',name: "price_rea_3", label: "金额（打折）", type: "ComponentsInput"},
                        {modelName:'content',name: "price_all_3", label: "金额（原价）", type: "ComponentsInput"},
                    ],},
                {modelName:'content',name: 'num_4', label: '总次数',type:'ComponentsInput',value_default:"0"},
                {modelName:'content',name: 'price_rea_4', label: '总金额（打折）',type:'ComponentsInput'},
                {modelName:'content',name: 'price_all_4', label: '总金额（原价）',type:'ComponentsInput'},
                {modelName:'content',name: 'price_rea2_4', label: '结算金额',type:'ComponentsInput'},


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
