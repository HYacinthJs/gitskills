const myModule:{ [key: string]: any} = {
    type:'simple',
    name:'fixed_unfinished',
    version:'PageSimple',
    requiresAuth:false,
    error:true,
    components:[
        {modelName:'simple',name:"unfinished",type: 'AssemblyUnfinished'},
    ],
}
export default myModule
