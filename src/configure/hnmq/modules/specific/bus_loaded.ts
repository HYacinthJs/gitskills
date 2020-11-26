import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'specific_busLoaded',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_loaded/query",
        queryByAll: "/bus_loaded/queryByAll",
        queryById:  "/bus_loaded/queryById",
        save:  "/bus_loaded/save",
        delete:  "/bus_loaded/delete",
        user:  "/user/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'user_id', label: '用户',type:'ComponentsInputSelect',ajax_url:"user",props_label:"ui_name",props_value:"id" },
                        {modelName:'content',name: 'type', label: '类型',type:'ComponentsInputSelect',options:[{value:'自费充值'},{value:'公司补贴'},{value:'手工退款'},{value:'用餐消费'},{value:'物品消费'},{value:'取消订单退款'}]},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',utilshow:false,  components:[
                {modelName:'content',name: 'ui_name', label: '用户',type:'ComponentsInput'},
                {modelName:'content',name: 'type', label: '类型',type:'ComponentsInput'},
                {modelName:'content',name: 'price', label: '金额(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'price_beg', label: '操作前(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'price_end', label: '操作后(元)',type:'ComponentsInput',},
                {modelName:'content',name: 'content', label: '描述',type:'ComponentsInput',},

            ],
        },
    ]
}
export default myModule
