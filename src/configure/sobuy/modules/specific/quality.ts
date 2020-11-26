import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'t_quality',
    version:'PageNormal',
    api:{
        query: "/quality/query",
        queryByAll: "/quality/queryByAll",
        queryById:  "/quality/queryById",
        save:  "/quality/save",
        delete:  "/quality/delete",
        getCompany:  "/company/queryByAll",

    },
    components:[
        { modelName:'breadcrumbs',type: 'AssemblyBreadcrumbs'},
        {
            modelName:'content', type: 'AssemblyQuery',
            components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"company_id",label:"公司名称",type: 'ComponentsInputSelect',jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"code",label:"样品大小",type: 'ComponentsInputEmail'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',title:"品质水平管理",type: 'AssemblyContent',
            components:[
                // {modelName:'content',name:"company_name",label:"进出口公司",type: 'ComponentsInput'},
                {modelName:'content',name:"code",label:"样本大小代码",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"size",label:"样本大小",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"ac10",label:"1.0Ac",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"re10",label:"1.0Re",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"ac15",label:"1.5Ac",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"re15",label:"1.5Re",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"ac25",label:"2.5Ac",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"re25",label:"2.5Re",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"ac40",label:"4.0Ac",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"re40",label:"4.0Re",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"ac65",label:"6.5Ac",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"re65",label:"6.5Re",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"ac100",label:"10Ac",type: 'ComponentsInputEmail'},
                {modelName:'content',name:"re100",label:"10Re",type: 'ComponentsInputEmail'},


            ],

        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[

                        {modelName:'content',name:"code",label:"样本大小代码",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入样本大小代码"}]},
                        {modelName:'content',name:"size",label:"样本大小",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"ac10",label:"1.0Ac",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"re10",label:"1.0Re",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"ac15",label:"1.5Ac",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"re15",label:"1.5Re",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"ac25",label:"2.5Ac",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"re25",label:"2.5Re",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"ac40",label:"4.0Ac",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"re40",label:"4.0Re",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"ac65",label:"6.5Ac",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"re65",label:"6.5Re",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"ac100",label:"10Ac",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name:"re100",label:"10Re",type: 'ComponentsInput',rules: [{validator: utils.my_number, message: "请输入数字"}]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
