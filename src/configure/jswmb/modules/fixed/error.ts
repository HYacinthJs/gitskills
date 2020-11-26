const myModule:{ [key: string]: any} = {
    type:'simple',
    name:'fixed_error',
    version:'PageSimple',
    requiresAuth:false,
    error:true,
    components:[
        {modelName:'simple',name:"error",type: 'AssemblyError'},
    ],
}
export default myModule
