// @ts-ignore
import Vue from 'vue'
// @ts-ignore
import VueRouter from 'vue-router'
import {Store} from "@/components/class/Store";
import {Page} from "@/components/class/Page";
import * as utils from "@/components/util/utils";
import main from '../../components/important/main/view.vue'
import config from './config';
import login from "./modules/fixed/login";
import error from "./modules/fixed/error";
import home from "./modules/fixed/home";
import menu from "./modules/fixed/menu";
import jurisdiction from "./modules/fixed/jurisdiction";
import user from "./modules/fixed/user";
import home2 from "./modules/fixed/home2";
import department from "./modules/fixed/department";

import template from "./modules/specific/template";
import flow from "./modules/fixed/flow";
import flow_step from "./modules/fixed/flow_step";
import flow_node from "./modules/fixed/flow_node";
import dict from "./modules/specific/dict";
import question from "./modules/specific/question";
import demolition_query from "./modules/specific/demolition_query";
import demolition from "./modules/specific/demolition";
import inspect_query from "./modules/specific/inspect_query";
import inspect_self from "./modules/specific/inspect";
import inspect_village from "./modules/specific/inspect_village";
import inspect_synchronous from "./modules/specific/inspect_synchronous";
import inspect_county from "./modules/specific/inspect_county";
import inspect_city from "./modules/specific/inspect_city";
import cityscape_query from "./modules/specific/cityscape_query";
import cityscape from "./modules/specific/cityscape";
import water from "./modules/specific/water";
import water_query from "./modules/specific/water_query";
import report_inspect_zgl from "./modules/specific/report_inspect_zgl";
import report_inspect_dfpm from "./modules/specific/report_inspect_dfpm";
import report_inspect_csl from "./modules/specific/report_inspect_csl";
import report_demolition_zgl from "./modules/specific/report_demolition_zgl";
import report_demolition_csl from "./modules/specific/report_demolition_csl";
import report_cityscape_zgl from "./modules/specific/report_cityscape_zgl";
import report_cityscape_csl from "./modules/specific/report_cityscape_csl";
import report_water_zgl from "./modules/specific/report_water_zgl";
import report_water_csl from "./modules/specific/report_water_csl";
import area from "./modules/specific/area";
import trajectory from "./modules/specific/trajectory";
import garbage from "./modules/specific/garbage";
import message from "./modules/specific/message";
import resident from "./modules/specific/resident";
import echarts1 from "./modules/specific/echarts1";
import flow_step222 from "./modules/specific/flow_step222";

Vue.use(VueRouter)
export function getState () {
    //数据对象
    let store =new Store(config);
    store.addPageBase(<Page>utils.createComponents(home2))
    store.addPageBase(<Page>utils.createComponents(error))
    store.addPageBase(<Page>utils.createComponents(login))
    store.addPageBase(<Page>utils.createComponents(home))
    store.addPageBase(<Page>utils.createComponents(menu))
    store.addPageBase(<Page>utils.createComponents(jurisdiction))
    store.addPageBase(<Page>utils.createComponents(user))
    store.addPageBase(<Page>utils.createComponents(template))
    store.addPageBase(<Page>utils.createComponents(question))
    store.addPageBase(<Page>utils.createComponents(demolition))
    store.addPageBase(<Page>utils.createComponents(demolition_query))
    store.addPageBase(<Page>utils.createComponents(inspect_village))
    store.addPageBase(<Page>utils.createComponents(inspect_synchronous))
    store.addPageBase(<Page>utils.createComponents(inspect_self))
    store.addPageBase(<Page>utils.createComponents(inspect_county))
    store.addPageBase(<Page>utils.createComponents(inspect_city))
    store.addPageBase(<Page>utils.createComponents(inspect_query))
    store.addPageBase(<Page>utils.createComponents(cityscape))
    store.addPageBase(<Page>utils.createComponents(cityscape_query))
    store.addPageBase(<Page>utils.createComponents(water))
    store.addPageBase(<Page>utils.createComponents(water_query))
    store.addPageBase(<Page>utils.createComponents(report_inspect_zgl))
    store.addPageBase(<Page>utils.createComponents(report_inspect_dfpm))
    store.addPageBase(<Page>utils.createComponents(report_inspect_csl))
    store.addPageBase(<Page>utils.createComponents(report_demolition_zgl))
    store.addPageBase(<Page>utils.createComponents(report_demolition_csl))
    store.addPageBase(<Page>utils.createComponents(report_cityscape_zgl))
    store.addPageBase(<Page>utils.createComponents(report_cityscape_csl))
    store.addPageBase(<Page>utils.createComponents(report_water_zgl))
    store.addPageBase(<Page>utils.createComponents(report_water_csl))
    store.addPageBase(<Page>utils.createComponents(department))
    store.addPageBase(<Page>utils.createComponents(flow))
    store.addPageBase(<Page>utils.createComponents(flow_step))
    store.addPageBase(<Page>utils.createComponents(flow_node))
    store.addPageBase(<Page>utils.createComponents(area))
    store.addPageBase(<Page>utils.createComponents(dict))
    store.addPageBase(<Page>utils.createComponents(trajectory))
    store.addPageBase(<Page>utils.createComponents(garbage))
    store.addPageBase(<Page>utils.createComponents(message))
    store.addPageBase(<Page>utils.createComponents(resident))
    store.addPageBase(<Page>utils.createComponents(echarts1))
    store.addPageBase(<Page>utils.createComponents(flow_step222))
    return {
        store:store,
        router: getState2(store)
    }
}

export function getState2 (store:Store) {
    const router = new VueRouter({
        mode: 'history',
        routes:[]
    })
    for(let pageName in store.pageBase){
        if(store.pageBase[pageName].root){
            router.addRoutes([{
                path: '/',
                name: 'myroot123456',
                meta: { requiresAuth: store.pageBase[pageName].requiresAuth },
                component: main,
                beforeEnter:(to: any, from: { path: string; }, next: { (arg0: string): void; (): void; }) => {
                    utils.getStore().setCurrentPage({name:pageName})
                    next();
                }
            }])
        }
        if(store.pageBase[pageName].error){
            router.addRoutes([{
                path: '*',
                name: 'fixed_error',
                meta: { requiresAuth: store.pageBase['fixed_error'].requiresAuth },
                component: main,
                beforeEnter:(to: any, from: { path: string; }, next: { (arg0: string): void; (): void; }) => {
                    utils.getStore().setCurrentPage({name:'fixed_error'})
                    next();
                }
            }])
        }
        router.addRoutes([{
            path: '/'+pageName,
            name: pageName,
            meta: { requiresAuth: store.pageBase[pageName].requiresAuth },
            component: main,
            beforeEnter:(to: any, from: { path: string; }, next: { (arg0: string): void; (): void; }) => {
                if(store.pageBase[pageName].requiresAuth){
                    let user = utils.getloginUser()
                    if(utils.isNull(user)){
                        utils.myMessage({message:"请登录"})
                        return;
                    }
                    let myLsit = user.jurisdiction.j_json['/'+pageName]
                    if(utils.isNull(myLsit)){
                        utils.myMessage({message:"无权限"})
                        return ;
                    }
                    let err = true
                    for(let i=0;i<myLsit.length;i++){
                        if("page"==myLsit[i]){
                            err = false
                        }
                    }
                    if(err){
                        utils.myMessage({message:"无权限"})
                        return ;
                    }
                }
                utils.getStore().setCurrentPage({name:pageName})
                utils.getPage().initPage()
                next();
            }
        }])
    }
    return router;
}