import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_company',
    version:'PageNormal',
    api:{
        query: "/company/query",
        queryByAll: "/company/queryByAll",
        queryById:  "/company/queryById",
        save:  "/company/save",
        delete:  "/company/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"公司名称",label_show:true,label_width:"140px",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',title:"进出口公司管理",type: 'AssemblyContent',components:[
                {modelName:'content',name:"name",label:"公司名称",type: 'ComponentsInput'},
                {modelName:'content',name:"contacts",label:"负责人",type: 'ComponentsInput'},
                {modelName:'content',name:"phone",label:"手机号码",type: 'ComponentsInput'},
                {modelName:'content',name:"email",label:"邮箱",type: 'ComponentsInput'},
                {modelName:'content',name:"wei_xin",label:"微信",type: 'ComponentsInput'},
                {modelName:'content',name:"post",label:"职务",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"公司名称",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入公司名称"}]},
                        {modelName:'content',name:"contacts",label:"负责人",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入联系人"}]},
                        {modelName:'content',name:"phone",label:"手机号码",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入电话"}]},
                        {modelName:'content',name:"email",label:"邮箱",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入邮箱"}]},
                        {modelName:'content',name:"wei_xin",label:"微信",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入微信"}]},
                        {modelName:'content',name:"post",label:"职务",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入职务"}]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule
