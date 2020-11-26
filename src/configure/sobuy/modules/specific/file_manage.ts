import * as utils from "@/components/util/utils";

const myModule: { [key: string]: any } = {
    type: 'normal',
    name: 'file_manage',
    version: 'PageNormal',
    api: {
        query: "/file/queryFileType",
        queryByAll: "/file/queryAll",
        queryById: "/file/queryById",
        save: "/file/saveFileType",
        delete: "/file/delete",

        query2: "/file/queryFile",
        save2: "/file/saveFile",
        delete2: "/file/deleteForFile",
        role: "/role/queryByAll",
        queryByFactory: "/supplier/queryByFactory",
        queryBySupplier: "/supplier/queryBySupplier",
        queryType: "/file/queryAll",

    },

    components: [
        // {
        //     modelName: 'content', type: 'AssemblyQuery', system_id: "query",
        //     components: [
        //         {
        //             modelName: 'query', type: 'AssemblyFrom', components: [
        //                 // {modelName:'content',name:"company_id",label:"公司名称",type: 'ComponentsInputSelect',
        //                 //     jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
        //                 {modelName: 'content', name: "file_name", label: "文件夹名", type: 'ComponentsInput'},
        //                 {
        //                     modelName: 'content',
        //                     name: "case_time",
        //                     label: "日期区间",
        //                     start_label: "开始时间",
        //                     end_label: "结束时间",
        //                     type: "ComponentsInputDayInterval"
        //                 },
        //                 {modelName: 'content', type: 'ComponentsInputReQuery'},
        //             ]
        //         }
        //     ],
        // },
        {
            modelName: 'content', type: 'AssemblyContent', title: "文件夹", components: [
                {modelName: 'content', name: "create_time", label: "创建时间", type: 'ComponentsInputDay'},
                {modelName: 'content', name: "create_name", label: "创建人", type: 'ComponentsInput'},
                {modelName: 'content', name: "file_name", label: "文件夹名", type: 'ComponentsInput'},
                {modelName: 'content', name: "file_user_name", label: "接收方", type: 'ComponentsInput'},
                {modelName: 'content', name: "update_name", label: "修改人", type: 'ComponentsInput'},
                {modelName: 'content', name: "id", label: "id", type: 'ComponentsInputHidden'},
            ], tableBtn:[
                {label:"编辑",jurisdictionJson: [{jurisdiction: [{name: "edit"}]}],show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit',title:"编辑"})
                        edit.query()
                    }},
            ],
            toolBtn: [
                {
                    label: "新建文件夹", show: true,
                    type: "primary", click: function (data: any) {
                        let edit = utils.getStore().openDialog({name: 'folder', title: "新建文件夹"})
                        edit.initValue()
                        edit.initAjax()
                    },
                    jurisdictionJson: [{jurisdiction: [{name: "add"}]}],
                },
                {
                    label: "文件上传", show: true,
                    type: "primary", click: function (data: any) {
                        let edit = utils.getStore().openDialog({name: 'excel', title: "文件上传"})
                        edit.initValue()
                        edit.initAjax()
                    },
                    jurisdictionJson: [{jurisdiction: [{name: "add"}]}],
                },
            ],rowClick: function (data: any) {
                let content2 = utils.getPage().getComponents({system_id: "content2"})
                content2.query()
            }

        },
        {
            modelName: 'content',
            type: 'AssemblyContent',
            title: "文件",
            queryName: 'query2',
            apiNameQuery: "query2",
            system_id: "content2",
            components: [
                {modelName: 'content', name: "create_time", label: "创建时间", type: 'ComponentsInputDay'},
                {modelName: 'content', name: "create_name", label: "创建人", type: 'ComponentsInputDay'},
                {modelName: 'content', name: "message", label: "文件描述", type: 'ComponentsInput'},
            ],
            toolBtn: [],
            tableBtn: [
                {
                    label: "查看",
                    type: "primary",
                    jurisdictionJson: [{jurisdiction: [{name: "query"}]}],
                    click: function (data: any) {
                        console.log(data.row)
                        if(utils.isNotNull(data.row.file0) && data.row.file0.length >0){
                                window.location.href = data.row.file0
                        }else {
                            alert("该项没有文件(There is no folder for this item)")
                        }
                    }
                },
                {
                    label: "下载", click: function (data: any) {
                        if(utils.isNotNull(data.row.file0) && data.row.file0.length >0){
                            window.location.href = data.row.file0
                        }else {
                            alert("该项没有文件(There is no folder for this item)")
                        }
                    },
                    jurisdictionJson: [{jurisdiction: [{name: "download"}]}]
                },
                {
                    label: "删除",
                    type: "danger",
                    jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],
                    click: function (data: any) {
                        utils.getStore().openDialog({name: 'delete2', title: "删除"})
                    }
                },
            ],
            getParams() {
                let that: any = this
                let param: { [key: string]: any } = {}
                let query = utils.getPage().getComponents({system_id: that.queryName})
                if (utils.isNotNull(query)) {
                    param = query.getEditValue()
                }
                let content = utils.getPage().getComponents({system_id: "content"})
                let breadcrumbs = utils.getPage().getComponents({system_id: that.breadcrumbsName})
                param['page'] = that.currentPage
                param['rows'] = that.rows
                param['tableControlShow'] = JSON.stringify(that.tableControlShow)
                param['fuzzy_query'] = breadcrumbs.queryValue
                if (utils.isNotNull(content.selectRowOnly)) {
                    param['id'] = content.selectRowOnly[content.primaryKey]
                }
                return param
            }
        },
        {
            modelName: 'dialog',
            name: "folder",
            type: 'DialogEdit',
            components: [
                {
                    modelName: 'from', type: 'AssemblyFrom', components: [
                        {
                            modelName: 'content',
                            name: "file_name",
                            label: "文件夹名",
                            type: 'ComponentsInput',
                        },
                        {
                            modelName: 'content',
                            name: "file_user",
                            label: "接收方",
                            type: 'ComponentsInputSelectMultiple',
                            system_id: "system_role",
                            rules: [{validator: utils.my_required, message: "请选择角色"}],
                            ajax_url: "role",
                            props_label: "r_name",
                            props_value: "r_id"
                        },
                        {modelName: 'content', name: "id", label: "id", type: 'ComponentsInputHidden'},
                        // {modelName:'content',name:"factory_id",label:"工厂",type: 'ComponentsInputSelect',jurisdictionJson: [{system_id: [{system_role: 11}]}],
                        //     rules:[{validator: utils.my_required, message: "请选择工厂"}],
                        //     ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
                        // {modelName:'content',name:"factory_id",label:"工厂",type: 'ComponentsInputSelect',jurisdictionJson: [{system_id: [{system_role: 12}]}],
                        //     rules:[{validator: utils.my_required, message: "请选择工厂"}],
                        //     ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
                        // {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',jurisdictionJson: [{system_id: [{system_role: 20}]}],
                        //     rules:[{validator: utils.my_required, message: "请选择供应商"}],
                        //     ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                        // {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',jurisdictionJson: [{system_id: [{system_role: 22}]}],
                        //     rules:[{validator: utils.my_required, message: "请选择供应商"}],
                        //     ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                    ]
                },
            ]
        },
        {
            modelName: 'dialog',
            name: "excel",
            type: 'DialogEdit',
            apiName_save: "save2",
            components: [
                {
                    modelName: 'from', type: 'AssemblyFrom', components: [
                        {
                            modelName: 'content',
                            name: "file_id",
                            label: "文件夹",
                            type: 'ComponentsInputSelect',
                            rules: [{validator: utils.my_required, message1: "请选择文件夹",message2:"Please enter"}],
                            ajax_url: "queryType",
                            props_label: "file_name",
                            props_value: "file_id",

                        },
                        {modelName: 'content', name: "message", label: "文件描述", type: 'ComponentsInputTextarea'},
                        {
                            modelName: 'content',
                            name: "url",
                            label: "上传文件",
                            limit:1,
                            upload_url: "/api/upload/uploadForFile",
                            type: 'ComponentsInputUpload'
                        },
                        {modelName:'content',name:"title",label:"",type: 'ComponentsText',style:{width:"200px"},
                            value_default: "每次只能上传一个文件！(Only one file can be uploaded at a time)"},
                    ]
                },
            ]
        },
        {
            modelName: 'dialog',
            name: "edit",
            type: 'DialogEdit',
            components: [
                {
                    modelName: 'from', type: 'AssemblyFrom', components: [
                        {
                            modelName: 'content',
                            name: "file_name",
                            label: "文件夹名",
                            type: 'ComponentsInput',
                        },
                        {
                            modelName: 'content',
                            name: "file_user",
                            label: "接收方",
                            type: 'ComponentsInputSelectMultiple',
                            system_id: "system_role",
                            rules: [{validator: utils.my_required, message: "请选择角色"}],
                            ajax_url: "role",
                            props_label: "r_name",
                            props_value: "r_id"
                        },
                        {modelName: 'content', name: "id", label: "id", type: 'ComponentsInputHidden'},
                        // {modelName:'content',name:"factory_id",label:"工厂",type: 'ComponentsInputSelect',jurisdictionJson: [{system_id: [{system_role: 11}]}],
                        //     rules:[{validator: utils.my_required, message: "请选择工厂"}],
                        //     ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
                        // {modelName:'content',name:"factory_id",label:"工厂",type: 'ComponentsInputSelect',jurisdictionJson: [{system_id: [{system_role: 12}]}],
                        //     rules:[{validator: utils.my_required, message: "请选择工厂"}],
                        //     ajax_url:"queryByFactory",props_label:"name",props_value:"id"},
                        // {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',jurisdictionJson: [{system_id: [{system_role: 20}]}],
                        //     rules:[{validator: utils.my_required, message: "请选择供应商"}],
                        //     ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                        // {modelName:'content',name:"supplier_id",label:"供应商",type: 'ComponentsInputSelect',jurisdictionJson: [{system_id: [{system_role: 22}]}],
                        //     rules:[{validator: utils.my_required, message: "请选择供应商"}],
                        //     ajax_url:"queryBySupplier",props_label:"name",props_value:"id"},
                    ]
                },
            ]
        },
        {
            modelName: 'dialog',
            name: "delete",
            type: 'DialogSelect',
            title: '删除',
            msg: '是否确认删除？',
            tableName: "content",
            apiName_save: "delete"
        },
        {
            modelName: 'dialog',
            name: "delete",
            type: 'DialogSelect',
            title: '删除',
            msg: '是否确认删除？',
            tableName: "content2",
            apiName_save: "delete2"
        },


    ]
}
export default myModule
