import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'simple',
    name:'fixed_echarts1',
    version:'PageSimple',
    requiresAuth:false,
    error:true,
    associated_size_notice:["system_echarts1"],
    api: {
        queryByMap: "/echarts1/queryByMap",
    },
    components:[
        {modelName:'simple',name:"error",type: 'AssemblyEcharts1',system_id:"system_echarts1"},
    ],
    initPage(){
        let system_login = utils.getPage().getComponents({system_id:"system_echarts1"})
        setTimeout(function(){
            utils.my_post({apiName:'queryByMap', params: {},
                ok: (json:any, dataAll:any) => {
                    system_login.a(json.json)
                },err: (json:any, dataAll:any) => {
                //    system_login.a(json.json)
                }
            })
            system_login.a()

        },1000);
    }
}
export default myModule
