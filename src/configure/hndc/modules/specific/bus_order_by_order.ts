import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'specific_busOrderByOrder',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_order/query",
        queryByAll: "/bus_order/queryByAll",
        queryById:  "/bus_order/queryById",
        save:  "/bus_order/save",
        delete:  "/bus_order/delete",
        user:  "/user/queryByAll",
        department:  "/department/getTree",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'no',label:'订单号',type:'ComponentsInput'},
                        {modelName:'content',name: 'user_id', label: '用户',type:'ComponentsInputSelect',ajax_url:"user",props_label:"ui_name",props_value:"id" },
                        {modelName:'content',name: 'time', label: '用餐日',type:'ComponentsInputDay'},
                        {modelName:'content',name: 'dp_id', label: '部门',type:'ComponentsInputCascader',ajax_url:"department"},

                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name: 'ui_name', label: '用户',type:'ComponentsInput',},
                {modelName:'content',name: 'type', label: '订单类型',type:'ComponentsInput'},
                {modelName:'content',name: 'time_str', label: '用餐日',type:'ComponentsInput'},
                {modelName:'content',name: 'dp_name', label: '员工部门',type:'ComponentsInput'},
                {modelName:'content',name: 'create_time', label: '创建时间',type:'ComponentsInput',width: 170},
                {modelName:'content',name: 'no', label: '订单号',type:'input',width: 170,},
                {modelName:'content',name: 'price_all', label: '订单总价(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'price_rea', label: '实际支付(元)',type:'ComponentsInput',},
                {modelName:'content',name: 'is_out', label: '是否减量',type:'ComponentsInput',},
                {modelName:'content',name: 'is_pack', label: '是否打包',type:'ComponentsInput',},
                {modelName:'content',name: 'count', label: '食物数量',type:'ComponentsInput',},
                {modelName:'content',name: 'state', label: '状态',type:'ComponentsInput',},

            ],
        },
        {modelName:'dialog',name:"info",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',  name:'base',label:'总数',components:[
                        {modelName:'content',label_width: "120px",name: 'type', label: '订单类型:',type:'ComponentsText',style: {width: "170px","line-height": "40px"}, },
                        {modelName:'content',label_width: "120px",name: 'state', label: '状态:',type:'ComponentsText',style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'price_all', label: '总价:',unit: "元",type:'ComponentsText',value_default:"0.00",style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'price_rea', label: '实际支付:',unit: "元",type:'ComponentsText',value_default:"0.00",style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'price_del', label: '优惠金额:',unit: "元",type:'ComponentsText',value_default:"0.00",style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'price_tip', label: '服务费:',unit: "元",type:'ComponentsText',value_default:"0",style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'is_out', label: '是否减量:',type:'ComponentsText',value_default:"否",style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'count', label: '食物数量:',type:'ComponentsText',style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'is_pack', label: '是否打包:',type:'ComponentsText',value_default:"否",style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'price_pack', label: '打包费用:',unit: "元",type:'ComponentsText',value_default:"0",style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'is_back', label: '是否退款:',type:'ComponentsText',value_default:"否",style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'scale', label: '退款比例:',unit: "%",type:'ComponentsText',value_default:"0",style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'price_back', label: '退款金额:',unit: "元",type:'ComponentsText',value_default:"0.00",style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',label_width: "120px",name: 'time', label: '预计取餐时间:',type:'ComponentsText',style: {width: "170px","line-height": "40px"}},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',  name:'base2',label:'明细',components:[

                        {modelName:'content',name: 'type', label: '订单类型',type:'ComponentsInputHidden',system_id:"system_type" },

                        {modelName:'content',name:"breakfast_list",label:"早餐套餐",jurisdictionJson:[{system_id: [{system_type: '早餐'}]}],label_show: false,type: 'ComponentsInputTableEdit',addBtn: false,value_default:[],components:[
                                {modelName:'template',label_width: "100px",name: "name", type: "ComponentsText", label: "名称"},
                                {modelName:'template',label_width: "100px",name: "price", type: "ComponentsText", label: "原价(元)"},
                                {modelName:'template',label_width: "100px",name: "price_dis", type: "ComponentsText", label: "实际价格(元)"},
                            ]},
                        {modelName:'content',name:"lunch_list",label:"午餐套餐",jurisdictionJson:[{system_id: [{system_type: '现场午餐'},{system_type: '预定午餐'},{system_type: '午餐'}]}],label_show: false,type: 'ComponentsInputTableEdit',addBtn: false,value_default:[],components:[
                                {modelName:'template',label_width: "100px",name: "name", type: "ComponentsText", label: "名称"},
                                {modelName:'template',label_width: "100px",name: "price", type: "ComponentsText", label: "原价(元)"},
                                {modelName:'template',label_width: "100px",name: "price_dis", type: "ComponentsText", label: "实际价格(元)"},
                            ]},
                        {modelName:'content',name:"dinner_list",label:"晚餐套餐",jurisdictionJson:[{system_id: [{system_type: '晚餐'}]}],label_show: false,type: 'ComponentsInputTableEdit',addBtn: false,value_default:[],components:[
                                {modelName:'template',label_width: "100px",name: "name", type: "ComponentsText", label: "名称"},
                                {modelName:'template',label_width: "100px",name: "price", type: "ComponentsText", label: "原价(元)"},
                                {modelName:'template',label_width: "100px",name: "price_dis", type: "ComponentsText", label: "实际价格(元)"},
                            ]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]}
            ]},
    ]
}
export default myModule
