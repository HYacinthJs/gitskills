const myModule:{ [key: string]: any} = {
    type:'simple',
    name:'login',
    version:'PageSimple',
    requiresAuth:false,
    root: true,
    api:{
        login: "/user/login",
    },
    components:[
            {modelName:'simple',name:"login",type: 'AssemblyLogin3'},
        ],
}
export default myModule
