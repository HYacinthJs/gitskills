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
        user:  "/user/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'no',label:'订单号',type:'ComponentsInput'},
                        {modelName:'content',name: 'user_id', label: '用户',type:'ComponentsInputSelect',ajax_url:"user",props_label:"ui_name",props_value:"id" },
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name: 'ui_name', label: '人员姓名',type:'ComponentsInput'},
                {modelName:'content',name: 'sex', label: '性别',type:'ComponentsInput'},
                {modelName:'content',name: 'type', label: '人员分类',type:'ComponentsInput'},
                {modelName:'content',name: 'dp_name', label: '一级部门',type:'ComponentsInput'},
                {modelName:'content',name: 'dp_name2', label: '二级部门',type:'ComponentsInput'},
                {modelName:'content',name: 'ui_telno', label: '电话',type:'ComponentsInput'},
                {modelName:'content',name: 'type2', label: '账户状态',type:'ComponentsInput'},
                {modelName:'content',name: 'create_time', label: '开户时间',type:'ComponentsInput'},


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
