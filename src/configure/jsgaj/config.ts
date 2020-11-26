import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    title:"嘉善公安执法监督提醒系统",
    projectName:'jsgaj',
    loginName:"login",
    components:[
        {modelName:'dialog',name:"config",components:[],type: 'DialogConfig'},
        {modelName:'dialog',type: 'DialogEdit',name:"edit",components:[
                {modelName:'from',type: 'AssemblyFrom',name:"from",components:[
                        {name:"ComponentsInputEmail",value_default:"555",components:[],modelName:'content',type: 'ComponentsInput'},
                    ]}
            ]},
    ],
    assects:{
        img: {
            login_bg:{src:"/assets/base/img/bg.jpg",project: "base", name: "bg.jpg"},
            usercode:{src:"/assets/base/img/name.jpg",project: "base", name: "name.png"},
            password:{src:"/assets/base/img/password.png",project: "base", name: "password.png"},
            menu_logo1:{src:"/assets/base/img/replace.png",project: "base", name: "replace.png"},
            menu_logo3:{src:"/assets/base/img/color.png",project: "base", name: "color.png"},
            menu_logo4:{src:"/assets/base/img/more.png",project: "base", name: "more.png"},
            menu_jcsz: {src:"/assets/base/img/基础设置.png",project: "base", name: "基础设置.png"},
            menu_jcsz_select: {src:"/assets/base/img/基础设置.png",project: "base", name: "基础设置.png"},
            menu_zjgl: {src:"/assets/base/img/质检管理.png",project: "base", name: "质检管理.png"},
            menu_zjgl_select: {src:"/assets/base/img/质检管理.png",project: "base", name: "质检管理.png"},
            menu_xtsz: {src:"/assets/base/img/系统设置.png",project: "base", name: "系统设置.png"},
            menu_xtsz_select: {src:"/assets/base/img/系统设置.png",project: "base", name: "系统设置.png"},
            menu_logo: {src:"/assets/jsgaj/img/logo.png",project: "base", name: "logo.png"},
            menu_logo2: {src:"/assets/jsgaj/img/menu_logo2.png",project: "base", name: "menu_logo2.png"},
            menu_1: {src:"/assets/jsgaj/img/menu_1.png",project: "base", name: "menu_1.png"},
            menu_4: {src:"/assets/jsgaj/img/menu_4.png",project: "base", name: "menu_4.png"},
            menu: {src:"/assets/jsgaj/img/menu.png",project: "base", name: "menu.png"},
            left: {src:"/assets/jsgaj/img/left.png",project: "base", name: "left.png"},
            bg_login1: {src:"/assets/jsgaj/img/bg_login1.png",project: "base", name: "bg_login1.png"},
            bg_login2: {src:"/assets/jsgaj/img/bg_login2.png",project: "base", name: "bg_login2.png"},
            bg_login3: {src:"/assets/jsgaj/img/bg_login3.png",project: "base", name: "bg_login3.png"},
        }
    },
    header_btn :[
        {title:'中文',click:function(){utils.getStore().setLanguage({name:'zh'})}},
        {title:'英文',click:function(){utils.getStore().setLanguage({name:'en2'})}},
        {title:'修改密码',click:function(){utils.getStore().openDialogGlobal({name:'updatePassword'})}},
        {title:'退出登录',click:function(){utils.quit()}},
    ],
    tools: [
        {
            img: 'menu_logo1', class1: "my_color1", class2: "my_color1_2", click: function () {
                let menu = utils.getPage().getComponents({system_id:'menu'})
                menu.isCollapse = !menu.isCollapse
                let page  = utils.getPage()
                page.setAsideWidth()
            }
        },
        {
            img: 'menu_logo2', class1: "my_color2", class2: "my_color2_2", click: function () {
                utils.goTo({menu: {menu_linkurl: "fixed_user"}})
            },
        },
        {
            img: 'menu_logo3', class1: "my_color3", class2: "my_color3_2", click: function () {
                let name = window.document.documentElement.getAttribute("data-theme")
                if (name == 'night') {
                    window.document.documentElement.setAttribute("data-theme", "day")
                } else {
                    window.document.documentElement.setAttribute("data-theme", "night")
                }
            },
        },
        {
            img: 'menu_logo4', class1: "my_color4", class2: "my_color4_2", click: function () {
            },
        }
    ],
}
export default myModule
