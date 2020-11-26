import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    title:"海宁点餐",
    title1:"海宁点餐",
    title2:"",
    projectName:'hndc',
    loginName:"login",
    components:[
        {modelName:'dialog',type: 'DialogEdit',name:"updatePassword",apiName_save_url:"/user/updatePasswordToken",components:[
                {modelName:'from',type: 'AssemblyFrom',name:"from",components:[
                        {modelName:'content',name:"ui_password_old",label:"原密码",isSetValue:false,type: 'ComponentsInputPassword',rules:[{ validator: utils.my_required, message: '请输入原密码' }]},
                        {modelName:'content',name:"ui_password",label:"密码",isSetValue:false,type: 'ComponentsInputPassword',rules:[{ validator: utils.my_required, message: '请输入密码' },{ validator:utils.validateComplexPass }]},
                        {modelName:'content',name:"ui_password2",label:"确认密码",isSetValue:false,type: 'ComponentsInputPassword',rules:[{ required: true, message: '请输入确认密码' },{ validator:utils.validateComplexPass2 }]},
                    ]}
            ]},
    ],
    assects:{
        img: {
            login_bg:{project: "base", name: "bg.jpg"},
            usercode:{project: "base", name: "name.png"},
            lpt1:{project: "base", name: "1.png"},
            lpt2:{project: "base", name: "2.png"},
            iconup:{project: "base", name: "iconup.png"},
            icondown:{project: "base", name: "icondown.png"},
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
        {title:'修改密码',click:function(){utils.getStore().openDialogGlobal({name:'updatePassword'})}},
        {title:'退出登录',click:function(){utils.quit()}},
    ],
        /*
         header_btn :   [
                {title:'中文',click:function(){utils.getStore().setLanguage({name:'zh'})}},
        {title:'英文',click:function(){utils.getStore().setLanguage({name:'en'})}},
        {title:'白天主题',click:function(){utils.getStore().setTheme({name:'day'})}},
        {title:'夜晚主题',click:function(){utils.getStore().setTheme({name:'night'})}},
        {title:'error',click:function(){utils.getStore().goTo({path:'error'})}},
        {title:'login',click:function(){utils.getStore().goTo({path:'login'})}},
        {title:'打开弹出框',click:function(){utils.getStore().openDialog({name:'dialog'})}},
        {title:'打开配置弹出框',click:function(){utils.getStore().openDialogGlobal({name:'config'})}},
        {title:'打开编辑弹出框',click:function(){utils.getStore().openDialogGlobal({name:'edit'})}},
        {title:'添加',click:function(){
            let components = utils.getPage().getComponents({system_id:"sobuyEdit"})
            components.components = [{
                "modelName": "edit",
                "name": "name",
                "label": "公司名称",
                "type": "ComponentsInput"
            }]
        }},
        {title:'删除',click:function(){
            let components = utils.getPage().getComponents({system_id:"content"})
            components.deleteAllComponents({modelName:"content"})
            components.title=utils.randomChar(1)
        }},
        {title:'gaim',click:function(){
            //  utils.getStore().title="555"
            utils.getRoot().commit('increment')
        }},
        {title:'退出登录',click:function(){
            utils.quit()
        }},
        ]*/
    tools: [
        {
            img: 'menu_logo1', class1: "my_color1", class2: "my_color1_2", click: function () {
                utils.updateStatisticsNumber()
              /*  let menu = utils.getPage().getComponents({system_id:'menu'})
                menu.isCollapse = !menu.isCollapse
                let page  = utils.getPage()
                page.setAsideWidth()*/
            }
        },
        {
            img: 'menu_logo2', class1: "my_color2", class2: "my_color2_2", click: function () {
               // utils.goTo({menu: {menu_linkurl: "fixed_user"}})
            },
        },
        {
            img: 'menu_logo3', class1: "my_color3", class2: "my_color3_2", click: function () {
             /*   let name = window.document.documentElement.getAttribute("data-theme")
                if (name == 'night') {
                    window.document.documentElement.setAttribute("data-theme", "day")
                } else {
                    window.document.documentElement.setAttribute("data-theme", "night")
                }*/
            },
        },
        {
            img: 'menu_logo4', class1: "my_color4", class2: "my_color4_2", click: function () {
            },
        }
    ],
}
export default myModule
