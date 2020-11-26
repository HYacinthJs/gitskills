import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    title:"索贝QC检验系统后台",
    projectName:'sobuy',
    loginName:"login",
    components:[
        {modelName:'dialog',name:"config",components:[],type: 'DialogConfig'},
        {modelName:'dialog',type: 'DialogEdit',name:"edit",components:[
                {modelName:'from',type: 'AssemblyFrom',name:"from",components:[
                        {name:"ComponentsInputEmail",value_default:"555",components:[],modelName:'content',type: 'ComponentsInput'},
                    ]}
            ]},
        {modelName:'dialog',type: 'DialogEdit',name:"updatePassword",apiName_save:"/user/updatePasswordToken",components:[
                {modelName:'from',type: 'AssemblyFrom',name:"from",components:[
                        {modelName:'content',name:"ui_password_old",label:"原密码",isSetValue:false,type: 'ComponentsInputPassword',rules:[{ validator: utils.my_required, message: '请输入原密码' }]},
                        {modelName:'content',name:"ui_password",label:"密码",isSetValue:false,type: 'ComponentsInputPassword',rules:[{ validator: utils.my_required, message: '请输入密码' },{ validator:utils.validateComplexPass }]},
                        {modelName:'content',name:"ui_password2",label:"确认密码",isSetValue:false,type: 'ComponentsInputPassword',rules:[{ required: true, message: '请输入确认密码' },{ validator:utils.validateComplexPass2 }]},
                    ]}
            ]},
    ],
    assects:{
        img: {
            login_bg:{src:"/assets/base/img/bg.jpg",project: "base", name: "bg.jpg"},
            usercode:{src:"/assets/base/img/name.jpg",project: "base", name: "name.png"},
            password:{src:"/assets/base/img/password.png",project: "base", name: "password.png"},
            menu_logo1:{src:"/assets/base/img/replace.png",project: "base", name: "replace.png"},
            menu_logo2:{src:"/assets/base/img/user.png",project: "base", name: "user.png"},
            menu_logo3:{src:"/assets/base/img/color.png",project: "base", name: "color.png"},
            menu_logo4:{src:"/assets/base/img/more.png",project: "base", name: "more.png"},

            menu_jcsz: {src:"/assets/base/img/基础设置.png",project: "base", name: "基础设置.png"},
            menu_jcsz_select: {src:"/assets/base/img/基础设置.png",project: "base", name: "基础设置.png"},
            menu_zjgl: {src:"/assets/base/img/质检管理.png",project: "base", name: "质检管理.png"},
            menu_zjgl_select: {src:"/assets/base/img/质检管理.png",project: "base", name: "质检管理.png"},
            menu_xtsz: {src:"/assets/base/img/系统设置.png",project: "base", name: "系统设置.png"},
            menu_xtsz_select: {src:"/assets/base/img/系统设置.png",project: "base", name: "系统设置.png"},
            menu_form: {src:"/assets/base/img/报表.png",project: "base", name: "数据报表.png"},
            menu_order: {src:"/assets/base/img/订单.png",project: "base", name: "订单资料.png"},
            menu_inspect: {src:"/assets/base/img/检验.png",project: "base", name: "检验流程.png"},

            left_logo: {src:"/assets/sobuy/img/logo.png",project: "base", name: "logo.png"},
            left_logo_mini: {src:"/assets/sobuy/img/more.png",project: "base", name: "logo2.png"},

        }
    },
    header_btn :[
        {title:'中文',click:function(){utils.getStore().setLanguage({name:'zh'})}},
        {title:'英文',click:function(){utils.getStore().setLanguage({name:'en2'})}},
        {title:'返回主页',click:function(){utils.goTo({path:'/fixed_home'})}},
        {title:'修改密码',click:function(){utils.getStore().openDialogGlobal({name:'updatePassword'})}},
        {title:'退出登录',click:function(){utils.quit()}},
    ],
    tools:[]
    // tools: [
    //     {
    //         img: 'menu_logo1', class1: "my_color1", class2: "my_color1_2", click: function () {
    //             let menu = utils.getPage().getComponents({system_id:'menu'})
    //             menu.isCollapse = !menu.isCollapse
    //             let page  = utils.getPage()
    //             page.setAsideWidth()
    //         }
    //     },
    //     {
    //         img: 'menu_logo2', class1: "my_color2", class2: "my_color2_2", click: function () {
    //             utils.goTo({menu: {menu_linkurl: "fixed_user"}})
    //         },
    //     },
    //     {
    //         img: 'menu_logo3', class1: "my_color3", class2: "my_color3_2", click: function () {
    //             let name = window.document.documentElement.getAttribute("data-theme")
    //             if (name == 'night') {
    //                 window.document.documentElement.setAttribute("data-theme", "day")
    //             } else {
    //                 window.document.documentElement.setAttribute("data-theme", "night")
    //             }
    //         },
    //     },
    //     {
    //         img: 'menu_logo4', class1: "my_color4", class2: "my_color4_2", click: function () {
    //         },
    //     }
    // ],
}
export default myModule
