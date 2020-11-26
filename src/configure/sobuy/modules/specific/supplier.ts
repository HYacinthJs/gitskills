import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_supplier',
    version:'PageNormal',
    api:{
        query: "/supplier/query",
        queryByAll: "/supplier/queryByAll",
        queryById:  "/supplier/queryById",
        save:  "/supplier/save",
        delete:  "/supplier/delete",
        getCompany:  "/company/queryByAll",
        query2: "/contacts/query",
        queryByAll2: "/contacts/queryByAll",
        queryById2:  "/contacts/queryById",
        save2:  "/contacts/save",
        delete2:  "/contacts/delete",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"company_id",label:"公司名称",label_show:true,label_width:"140px",type: 'ComponentsInputSelect',jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"name",label:"企业名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', title:"企业管理",components:[
                // {modelName:'content',name:"company_name",label:"进出口公司",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"企业简称",type: 'ComponentsInput'},
                {modelName:'content',name:"full_name",label:"企业全称",type: 'ComponentsInput'},
                {modelName:'content',name:"no",label:"企业编号",type: 'ComponentsInput'},
                {modelName:'content',name:"type",label:"企业类型",type: 'ComponentsInput'},
                {modelName:'content',name:"level",label:"企业等级",type: 'ComponentsInput'},
                {modelName:'content',name:"province",label:"省份",type: 'ComponentsInput'},
                {modelName:'content',name:"city",label:"城市",type: 'ComponentsInput'},
                {modelName:'content',name:"address",label:"地址",type: 'ComponentsInput'},
                {modelName:'content',name:"remarks",label:"备注",type: 'ComponentsInput'},
            ],rowClick:function (data:any){
                let content2 = utils.getPage().getComponents({system_id:"content2"})
                content2.query()
            }
        },
        {
            modelName:'content',type: 'AssemblyContent',system_id:"content2", title:"成员管理",apiNameQuery:"query2", components:[
                {modelName:'content',name:"supplier_name",label:"所属企业",type: 'ComponentsInput'},
                {modelName:'content',name:"department_name",label:"部门",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"联系人",type: 'ComponentsInput'},
                {modelName:'content',name:"post",label:"职务",type: 'ComponentsInput'},
                {modelName:'content',name:"telephone",label:"电话",type: 'ComponentsInput'},
                {modelName:'content',name:"phone",label:"手机",type: 'ComponentsInput'},
                {modelName:'content',name:"email",label:"邮箱",type: 'ComponentsInput'},
                {modelName:'content',name:"qq",label:"QQ号",type: 'ComponentsInput'},
                {modelName:'content',name:"wei_xin",label:"微信号",type: 'ComponentsInput'},
                {modelName:'content',name:"birthday",label:"生日",type: 'ComponentsInput'},
                {modelName:'content',name:"leader",label:"直属领导",type: 'ComponentsInput'},
            ],
            tableBtn : [
                {label:"编辑",jurisdictionJson: [{jurisdiction: [{name: "edit"}]}],click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit2',title:"编辑"})
                        edit.query()
                    }},
                {label:"删除",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],
                    click:function(data:any){utils.getStore().openDialog({name:'delete2',title:"删除"})}},
            ],
            toolBtn : [
                {label:"添加",type:"primary",jurisdictionJson: [{jurisdiction: [{name: "add"}]}],click:function(data:any){
                        let content = utils.getPage().getComponents({system_id:"content"})
                        if(!content.selectRowOnlyId){
                            utils.myMessage({message:"请先选择一个企业"})
                            return;
                        }
                        let edit =utils.getStore().openDialog({name:'edit2',title:"添加"})
                        edit.initValue()
                        edit.initAjax()
                    }},
                {label:"删除",type:"danger",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],
                    click:function(data:any){utils.getStore().openDialog({name:'deleteAll2',title:"删除"})}},
            ],
            getParams(){
                let that:any = this
                let param :{ [key: string]: any}={}
                let query = utils.getPage().getComponents({system_id:that.queryName})
                if(utils.isNotNull(query)){
                    param=query.getEditValue()
                }
                let content = utils.getPage().getComponents({system_id:"content"})
                let breadcrumbs = utils.getPage().getComponents({system_id:that.breadcrumbsName})
                param['page']=that.currentPage
                param['rows']=that.rows
                param['tableControlShow']=JSON.stringify(that.tableControlShow)
                param['fuzzy_query']=breadcrumbs.queryValue
                if(utils.isNotNull(content.selectRowOnly)){
                    param['supplier_id']=content.selectRowOnly[content.primaryKey]
                }
                return param
            }
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"企业简称",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入企业简称"}]},
                        {modelName:'content',name:"full_name",label:"企业全称",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入企业全称"}]},
                        {modelName:'content',name:"no",label:"企业编号",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请选择企业编号"}]},
                        {modelName:'content',name:"type",label:"企业类型",type: 'ComponentsInputSelect',options:[{value:"供应商",label:"供应商"},{value:"工厂",label:"工厂"},{value:"供应商工厂",label:"供应商工厂"}],rules:[{validator: utils.my_required, message: "请选择企业类型"}]},
                        {modelName:'content',name:"level",label:"企业等级",type: 'ComponentsInputSelect',options:[{value:"Ⅰ级",label:"Ⅰ级"},{value:"Ⅱ级",label:"Ⅱ级"},{value:"Ⅲ级",label:"Ⅲ级"}],rules:[{validator: utils.my_required, message: "请输入企业等级"}]},
                        {modelName:'content',name:"province",label:"省份",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入省份"}]},
                        {modelName:'content',name:"city",label:"城市",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入城市"}]},
                        {modelName:'content',name:"address",label:"地址",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入地址"}]},
                        {modelName:'content',name:"remarks",label:"备注",type: 'ComponentsInputTextarea'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden',},
                    ]},
            ]},
        {modelName:'dialog',name:"delete",type: 'DialogSelect',title:'删除',msg:'是否确认删除？',tableName:"content",apiName_save:"delete"},
        {modelName:'dialog',name:"deleteAll",type: 'DialogSelect',title:'删除',msg:'是否确认批量删除？',valueModel:"批量",tableName:"content",apiName_save:"delete"},

        {modelName:'dialog',name:"edit2",type: 'DialogEdit',tableName:"content2",apiName_save:"save2",apiName_queryById:"queryById2",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"supplier_id",label:"所属企业",type: 'ComponentsInputSelect',rules:[{validator: utils.my_required, message: "请选择所属企业"}],ajax_url:"queryByAll",props_label:"name",props_value:"id",
                            initValue() {
                                let that:any = this
                                let content = utils.getPage().getComponents({system_id:"content"})
                                let value = content.selectRowOnly[content.primaryKey];
                                if(utils.isNotNull(value)){
                                    that.value =content.selectRowOnly[content.primaryKey]
                                }else{
                                    that.value = that.value_default;
                                }
                            }},
                        {modelName:'content',name:"department_name",label:"部门",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请选择所属企业"}]},
                        {modelName:'content',name:"name",label:"联系人",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入联系人"}]},
                        {modelName:'content',name:"post",label:"职务",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入职务"}]},
                        {modelName:'content',name:"phone",label:"手机",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入手机"}]},
                        {modelName:'content',name:"telephone",label:"电话",type: 'ComponentsInput'},
                        {modelName:'content',name:"email",label:"邮箱",type: 'ComponentsInput'},
                        {modelName:'content',name:"qq",label:"QQ号",type: 'ComponentsInput'},
                        {modelName:'content',name:"wei_xin",label:"微信号",type: 'ComponentsInput'},
                        {modelName:'content',name:"birthday",label:"生日",type: 'ComponentsInput'},
                        {modelName:'content',name:"leader",label:"直属领导",type: 'ComponentsInput'},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"delete2",type: 'DialogSelect',title:'删除',msg:'是否确认删除？',tableName:"content2",apiName_save:"delete2"},
        {modelName:'dialog',name:"deleteAll2",type: 'DialogSelect',title:'删除',msg:'是否确认批量删除？',valueModel:"批量",tableName:"content2",apiName_save:"delete2"},
    ]
}
export default myModule
