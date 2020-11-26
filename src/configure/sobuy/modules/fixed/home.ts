import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'simple',
    name:'fixed_home_back',
    api: {
        query: "/index/querySP",
    },
    initPage(){                                                         //进入页面执行
        let content = utils.getPage().getComponents({system_id:"content"})

        if(utils.isNotNull(content)&&utils.isNotNull(content.query)){
            content.query()
        }
    },
    version:'PageSimple',
    requiresAuth:false,
    error:true,
    components:[
        {modelName:'simple',name:"error",system_id:"content", type: 'AssemblyHome'},
    ],
}
export default myModule
