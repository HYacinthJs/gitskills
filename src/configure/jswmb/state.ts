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
import option from "./modules/fixed/option";
import flow from "./modules/fixed/flow";
import flow_step from "./modules/fixed/flow_step";
import flow_node from "./modules/fixed/flow_node";

import company from "./modules/specific/industry";
import department from "./modules/specific/department";
import examine from "./modules/specific/examine";
import grid from "./modules/specific/grid";
import inspect from "./modules/specific/inspect";
import problem from "./modules/specific/problem";
import standard from "./modules/specific/standard";
import street from "./modules/specific/street";
import address from "./modules/specific/address";
import rule from "./modules/specific/rule";



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
    store.addPageBase(<Page>utils.createComponents(company))
    store.addPageBase(<Page>utils.createComponents(department))
    store.addPageBase(<Page>utils.createComponents(examine))
    store.addPageBase(<Page>utils.createComponents(grid))
    store.addPageBase(<Page>utils.createComponents(inspect))
    store.addPageBase(<Page>utils.createComponents(problem))
    store.addPageBase(<Page>utils.createComponents(standard))
    store.addPageBase(<Page>utils.createComponents(rule))
    store.addPageBase(<Page>utils.createComponents(street))
    store.addPageBase(<Page>utils.createComponents(address))
    store.addPageBase(<Page>utils.createComponents(option))
    store.addPageBase(<Page>utils.createComponents(flow))
    store.addPageBase(<Page>utils.createComponents(flow_step))
    store.addPageBase(<Page>utils.createComponents(flow_node))

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
                utils.getStore().setCurrentPage({name:pageName})
                utils.getPage().initPage()
                next();
            }
        }])
    }
    return router;
}