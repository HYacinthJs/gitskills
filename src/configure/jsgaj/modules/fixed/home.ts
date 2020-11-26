const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'home',
    version:'PageNormal',
    components:[
        {modelName:'menu',name:"menu", type: 'AssemblyMenu'},
        {modelName:'header',name:"header",type: 'AssemblyHeader'},
        {modelName:'content',name:"content",system_id:"query",type: 'AssemblyQuery',components:[
                {name:"ComponentsInputEmail",value_default:"home",components:[],modelName:'content',type: 'ComponentsInput'},
            ]},
        {modelName:'content',name:"content",system_id:"content",type: 'AssemblyContent',components:[
                {modelName:'content',name:"ui_code",label:"帐号",type: 'ComponentsInput'},
                {modelName:'content',name:"ui_name",label:"用户名",type: 'ComponentsInput'},
                {modelName:'content',name:"ui_telno",label:"联系方式",type: 'ComponentsInput'},
                {modelName:'content',name:"r_name",label:"角色",type: 'ComponentsInput'},
                {modelName:'btn',name:"r_name1",label:"按钮1",type: 'ComponentsInput'},
                {modelName:'btn',name:"r_name2",label:"按钮2",type: 'ComponentsInput'},
            ]},
        {modelName:'breadcrumbs',name:"breadcrumbs",type: 'AssemblyBreadcrumbs'},
        {modelName:'footer',name:"footer",type: 'AssemblyFooter'},
        {modelName:'dialog',name:"dialog",type: 'DialogSelect'},
    ]
}
export default myModule
