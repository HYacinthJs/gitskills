import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_standard',
    version:'PageNormal',
    api:{
        query: "/standard/query",
        queryByAll: "/standard/queryByAll",
        queryById:  "/standard/queryById",
        save:  "/standard/save",
        delete:  "/standard/delete",
        getCompany:  "/company/queryByAll",

    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"company_id",label:"公司名称",label_show:true,label_width:"140px",type: 'ComponentsInputSelect',jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"name",label:"检验标准名称",label_show:true,label_width:"250px",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',title:"检验标准管理",type: 'AssemblyContent', components:[
                // {modelName:'content',name:"company_name",label:"进出口公司",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"检验标准名称",type: 'ComponentsInput'},
                {modelName:'content',name:"start",label:"批量从",type: 'ComponentsInput'},
                {modelName:'content',name:"end",label:"批量至",type: 'ComponentsInput'},
                {modelName:'content',name:"s1",label:"S-1",type: 'ComponentsInput'},
                {modelName:'content',name:"s2",label:"S-2",type: 'ComponentsInput'},
                {modelName:'content',name:"s3",label:"S-3",type: 'ComponentsInput'},
                {modelName:'content',name:"s4",label:"S-4",type: 'ComponentsInput'},
                {modelName:'content',name:"n1",label:"Ⅰ",type: 'ComponentsInput'},
                {modelName:'content',name:"n2",label:"Ⅱ",type: 'ComponentsInput'},
                {modelName:'content',name:"n3",label:"Ⅲ",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"标准名称",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入名称"}]},
                        {modelName:'content',name:"start",label:"批量从",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入"}]},
                        {modelName:'content',name:"end",label:"批量至",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入"}]},
                        {modelName:'content',name:"s1",label:"S-1",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入"}]},
                        {modelName:'content',name:"s2",label:"S-2",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入"}]},
                        {modelName:'content',name:"s3",label:"S-3",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入"}]},
                        {modelName:'content',name:"s4",label:"S-4",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入"}]},
                        {modelName:'content',name:"n1",label:"Ⅰ",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入"}]},
                        {modelName:'content',name:"n2",label:"Ⅱ",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入"}]},
                        {modelName:'content',name:"n3",label:"Ⅲ",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入"}]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
