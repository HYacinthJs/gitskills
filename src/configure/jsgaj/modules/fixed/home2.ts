
const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'home2',
    version:'PageNormal',
    api:{
        query: "/contacts/query",
    },
    components:[

         //{modelName:'content',type: 'AssemblyTree'},
         {modelName:'content',type: 'AssemblyHomePage'},


    ]
}
export default myModule
