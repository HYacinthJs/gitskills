const myModule:{ [key: string]: any} = {
    type:'simple',
    name:'fixed_home',
    version:'PageSimple',
    requiresAuth:false,
    error:true,
    components:[
        {modelName:'simple',name:"error",type: 'AssemblyHome'},
    ],
}
export default myModule
