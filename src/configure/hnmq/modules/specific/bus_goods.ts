import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'specific_busGoods',
    version:'PageNormal',
    requiresAuth:false,
    api:{
        query: "/bus_goods/query",
        queryByAll: "/bus_goods/queryByAll",
        queryById:  "/bus_goods/queryById",
        save:  "/bus_goods/save",
        delete:  "/bus_goods/delete",
        editTime:  "/bus_goods/editTime",
        supplier: "/bus_supplier/queryByAll",
        goods_type: "/bus_goods_type/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'name',label:'物品名称',type:'ComponentsInput'},
                        {modelName:'content',name: 'type', label: '物品类型',type:'ComponentsInputSelect',options:[{value:'食品'},{value:'日用品'}]},
                        {modelName:'content',type: 'ComponentsInputReQuery'}
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent',rows:100, components:[
                {modelName:'content',name: 'name', label: '物品名称',type:'ComponentsInput'},
               // {modelName:'content',name: 'picture', label: '图片',type:'ComponentsInput'},
                {modelName:'content',name: 'type', label: '物品类型',type:'ComponentsInput'},
                {modelName:'content',name: 'price', label: '物品价格(元)',type:'ComponentsInput'},
                {modelName:'content',name: 'count', label: '物品数量',type:'ComponentsInput'},
                {modelName:'content',name: 'count_dh', label: '已兑换数量',type:'ComponentsInput',value_default:0},
                {modelName:'content',name: 'count_yl', label: '已领数量',type:'ComponentsInput',value_default: 0},
                {modelName:'content',name: 'count_person', label: '购买上限',type:'ComponentsInput'},
                {modelName:'content',name: 'note', label: '备注',type:'ComponentsInput'},
                {modelName:'content',name: 'time_start', label: '开始时间',type:'ComponentsInput'},
                {modelName:'content',name: 'time_end', label: '结束时间',type:'ComponentsInput'},
            ],
            toolBtn : [
                {label:"修改时间",jurisdictionJson: [{jurisdiction: [{name: "add"}]}],show:true,type:"primary",click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'editTime'})
                        edit.queryBase()
                    }},
                {label:"添加",jurisdictionJson: [{jurisdiction: [{name: "add"}]}],show:true,type:"primary",click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'edit'})
                        edit.queryBase()
                    }},
                {label:"删除",jurisdictionJson: [{jurisdiction: [{name: "deleteAll"}]}],type:"danger",click:function(data:any){utils.getStore().openDialog({name:'deleteAll'})}},
            ]
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'name', label: '物品名称',type:'ComponentsInput',rules:[{ validator: utils.my_required, message: '请输入物品名称', trigger: 'blur' }]},
                        {modelName:'content',name: 'type', label: '物品类型',type:'ComponentsInputSelect',ajax_url:"goods_type",props_label:"name",props_value:"name",rules:[{ validator: utils.my_required, message: '请选择物品类型', trigger: 'blur' }]},
                        {modelName:'content',name: 'price', label: '物品价格',type:'ComponentsInput',unit: "元",rules:[{ validator: utils.my_float},{ validator: utils.my_required, message: '请输入物品价格', trigger: 'blur' }]},
                        {modelName:'content',name: 'count', label: '物品数量',type:'ComponentsInput',rules:[{ validator: utils.my_integer},{ validator: utils.my_required, message: '请输入物品数量', trigger: 'blur' },]},
                        {modelName:'content',name: 'count_person', label: '购买上限',type:'ComponentsInput',rules:[{ validator: utils.my_integer},{ validator: utils.my_required, message: '请输入每人购买上限', trigger: 'blur' },]},
                        {modelName:'content',name:"supplier",label:"供应商",type: 'ComponentsInputSelect',ajax_url:"supplier",props_label:"name",props_value:"id"},
                        {modelName:'content',name: 'time_start', label: '开始时间',type:'ComponentsInputDay',rules:[{ validator: utils.my_required, message: '请输入开始时间', trigger: 'blur' }]},
                        {modelName:'content',name: 'time_end', label: '结束时间',type:'ComponentsInputDay',rules:[{ validator: utils.my_required, message: '请输入结束时间', trigger: 'blur' }]},
                        {modelName:'content',name: 'note', label: '备注',type:'ComponentsInputTextarea'},
                        {modelName:'content',name: 'picture', label: '图片',type:'ComponentsInputUploadImage'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"editTime",type: 'DialogEdit',valueModel:"批量",apiName_save:"editTime",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name: 'time_start', label: '开始时间',day_auto:true,day_auto_type:"下周一",type:'ComponentsInputDay',rules:[{ validator: utils.my_required, message: '请输入开始时间', trigger: 'blur' }]},
                        {modelName:'content',name: 'time_end', label: '结束时间',day_auto:true,day_auto_type:"下周三",type:'ComponentsInputDay',rules:[{ validator: utils.my_required, message: '请输入结束时间', trigger: 'blur' }]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
