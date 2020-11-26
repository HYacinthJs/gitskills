import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'newtechnology',
    version:'PageNormal',
    api:{
        query: "/newtechsingle/query",
        queryByAll: "/newtechsingle/queryByAll",
        queryById:  "/newtechsingle/queryById",
        save:  "/newtechsingle/save",
        delete:  "/newtechsingle/delete",
        inspect:  "/newtechsingle/inspect",
        queryBySupplier:  "/supplier/queryByAll",
        queryByFactory:  "/supplier/queryByAll",
        queryByInspector:  "/user/queryByAll",
        getCompany:  "/company/queryByAll",

    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery',components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"project_num",label:"货号",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',title:"货号管理",type: 'AssemblyContent', components:[
                {modelName:'content',name:"cn_name",label:"中文品名",type: 'ComponentsInput'},
                {modelName:'content',name:"en_name",label:"英文品名",type: 'ComponentsInput'},

                {modelName:'content',name:"project_num",label:"货号",type: 'ComponentsInput'},
                {modelName:'content',name:"factory_id",label:"工厂",type: 'ComponentsInput'},
                {modelName:'content',name:"is_sign_sample",label:"签封样",type: 'ComponentsInput'},
                {modelName:'content',name:"tech_num",label:"工艺单",type: 'ComponentsInput'},

            ],
            tableBtn :[
                {label:"编辑",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit',title:"编辑"})
                        edit.query()
                    }},
                {label:"检验",click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'inspect',title:"检验"})
                        edit.query()
                    }},
                {label:"删除",click:function(data:any){utils.getStore().openDialog({name:'delete',title:"删除"})}},
            ]
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"project_num",label:"货号",type: 'ComponentsInput'},
                        {modelName:'content',name:"five_code",label:"五位码",type: 'ComponentsInput'},
                        {modelName:'content',name:"bar_code",label:"条形码",type: 'ComponentsInput'},
                        {modelName:'content',name:"cn_name", label: '中文品名',type:'ComponentsInput'},
                        {modelName:'content',name:"en_name", label: '英文品名',type:'ComponentsInput'},
                        {modelName:'content',name:"supplier_id", label: '供应商',type:'ComponentsInput'},
                        {modelName:'content',name:"project_size", label: '产品尺寸',type:'ComponentsInput'},
                        {modelName:'content',name:"packing_size", label: '包装尺寸',type:'ComponentsInput'},
                        {modelName:'content',name:"gross_weight", label: '毛重',type:'ComponentsInput'},

                        {modelName:'content',name:"tech_num", label: '工艺单编号',type:'ComponentsInput'},
                        {modelName:'content',name:"is_sign_sample", label: '是否签封样',type:'ComponentsInput'},
                        {modelName:'content',name:"factory_id", label: '生产工厂',type:'ComponentsInput'},
                        {modelName:'content',name:"old_num", label: '原编码',type:'ComponentsInput'},
                        {modelName:'content',name:"perimeter_box", label: '外箱周长',type:'ComponentsInput'},
                        {modelName:'content',name:"sample_code", label: '寄样编号',type:'ComponentsInput'},
                        {modelName:'content',name:"quality_record", label: '质量整改记录',type:'ComponentsInput'},

                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
        {modelName:'dialog',name:"inspect",type: 'DialogEdit',apiName_save:"inspect",components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"bas_bj_bh",label:"部件编号",type: 'ComponentsInput'},
                        {modelName:'content',name:"bas_bj_mc",label:"部件名称",type: 'ComponentsInput'},
                        {modelName:'content',name:"bas_bj_sl",label:"数量",type: 'ComponentsInput'},
                        {modelName:'content',name:"bas_bj_gg", label: '规格',type:'ComponentsInput'},
                        {modelName:'content',name:"bas_bj_cz", label: '材质',type:'ComponentsInput'},
                        {modelName:'content',name:"bas_bj_ys", label: '颜色',type:'ComponentsInput'},
                        {modelName:'content',name:"bas_bj_bmcl", label: '表明处理',type:'ComponentsInput'},
                        {modelName:'content',name:"bas_bj_tp", label: '图片',type:'ComponentsInput'},
                        {modelName:'content',name: 't_new_tech_single_id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"配件信息",name:"base2",components:[
                        {modelName:'content',name:"pj_bh",label:"配件编号",type: 'ComponentsInput'},
                        {modelName:'content',name:"pj_mc",label:"配件名称",type: 'ComponentsInput'},
                        {modelName:'content',name:"pj_sl",label:"数量",type: 'ComponentsInput'},
                        {modelName:'content',name:"pj_gg", label: '规格',type:'ComponentsInput'},
                        {modelName:'content',name:"pj_cz", label: '材质',type:'ComponentsInput'},
                        {modelName:'content',name:"pj_ys", label: '颜色',type:'ComponentsInput'},
                        {modelName:'content',name:"pj_bmcl", label: '表面处理',type:'ComponentsInput'},
                        {modelName:'content',name:"pj_tp", label: '图片',type:'ComponentsInput'},

                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"技术要求",name:"base3",components:[
                        {modelName:'content',name:"jsyq_gdsm",label:"改动说明",type: 'ComponentsInput'},
                        {modelName:'content',name:"jsyq_czsm",label:"材质说明",type: 'ComponentsInput'},
                        {modelName:'content',name:"jsyq_yq",label:"油漆",type: 'ComponentsInput'},
                        {modelName:'content',name:"jsyq_pb", label: 'PB版三胺面',type:'ComponentsInput'},
                        {modelName:'content',name:"jsyq_zg", label: '做工',type:'ComponentsInput'},
                        {modelName:'content',name:"jsyq_cz", label: '最大承重',type:'ComponentsInput'},
                        {modelName:'content',name:"jsyq_xz", label: '限重标',type:'ComponentsInput'},

                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"包装要求",name:"base4",components:[
                        {modelName:'content',name:"bzyq_wx", label: '外箱',type:'ComponentsInput'},
                        {modelName:'content',name:"bzyq_nbbz", label: '内部包装',type:'ComponentsInput'},
                        {modelName:'content',name:"bzyq_bzsm", label: '包装说明',type:'ComponentsInput'},
                        {modelName:'content',name:"bzyq_wjzl", label: '文件资料',type:'ComponentsInput'},
                        {modelName:'content',name:"bzyq_ssbz", label: '试摔标准',type:'ComponentsInput'},
                        {modelName:'content',name:"bzyq_zysx", label: '注意事项',type:'ComponentsInput'},
                        {modelName:'content',name:"bzyq_pjyq", label: '2%配件要求',type:'ComponentsInput'},
                        {modelName:'content',name:"bzyq_bywj", label: '备用五金',type:'ComponentsInput'},

                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"唛头要求",name:"base5",components:[
                        {modelName:'content',name:"mtyq_img1",label:"唛头图片1",type: 'ComponentsInput'},
                        {modelName:'content',name:"mtyq_img2",label:"唛头图片2",type: 'ComponentsInput'},
                        {modelName:'content',name:"mtyq_img3",label:"唛头图片3",type: 'ComponentsInput'},
                        {modelName:'content',name:"mtyq_img4",label:"唛头图片4",type: 'ComponentsInput'},
                        {modelName:'content',name:"mtyq_img5",label:"唛头图片5",type: 'ComponentsInput'},
                    ]},
                {modelName:'from',type: 'AssemblyFrom',label:"产品图片",name:"base6",components:[
                        {modelName:'content',name:"cptp_img1",label:"图片",type: 'ComponentsInput'},
                        // {modelName:'content',name:"test",label:"注意事项",type: 'ComponentsInput'},
                        {modelName:'content',name:"qt_zbr",label:"制表人",type: 'ComponentsInput'},
                        {modelName:'content',name:"qt_zbrq",label:"制表日期",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"qt_csr",label:"初审人",type: 'ComponentsInput'},
                        {modelName:'content',name:"qt_csrq",label:"审核日期",type: 'ComponentsInputDay'},
                        {modelName:'content',name:"qt_qrr",label:"工厂确认人员",type: 'ComponentsInput'},
                        {modelName:'content',name:"qt_qrrq",label:"工厂确认日期",type: 'ComponentsInputDay'},
                    ]},
            ]},
    ]
}
export default myModule
