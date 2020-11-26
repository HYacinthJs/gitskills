import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    title:"嘉善气象局预警短信分区发布平台",
    projectName:'jsqxj',
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
            login_bg:{project: "base", name: "bg.jpg"},
            usercode:{project: "base", name: "name.png"},
            password:{project: "base", name: "password.png"},
            menu_logo1:{project: "base", name: "replace.png"},
            menu_logo2:{project: "base", name: "user.png"},
            menu_logo3:{project: "base", name: "color.png"},
            menu_logo4:{project: "base", name: "more.png"},
            menu_jcsz: {project: "base", name: "基础设置.png"},
            menu_jcsz_select: {project: "base", name: "基础设置.png"},
            menu_zjgl: {project: "base", name: "质检管理.png"},
            menu_zjgl_select: {project: "base", name: "质检管理.png"},
            menu_xtsz: {project: "base", name: "系统设置.png"},
            menu_xtsz_select: {project: "base", name: "系统设置.png"},
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
