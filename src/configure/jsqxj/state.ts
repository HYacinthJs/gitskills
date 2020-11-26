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
import sys_baseStation from "./modules/specific/baseStation";
import sys_baseStationUser from "./modules/specific/baseStationUser";
import sys_baseStationUserSenior from "./modules/specific/baseStationUserSenior";
import sys_map from "./modules/specific/map";
import sys_message from "./modules/specific/message";
import sys_messageInfo from "./modules/specific/messageInfo";
import sys_test from "./modules/specific/test";

Vue.use(VueRouter)
export function getState () {
    //数据对象
    console.log("开始")
    let store =new Store(config);
    store.addPageBase(<Page>utils.createComponents(error))
    store.addPageBase(<Page>utils.createComponents(login))
    store.addPageBase(<Page>utils.createComponents(home))
    store.addPageBase(<Page>utils.createComponents(menu))
    store.addPageBase(<Page>utils.createComponents(jurisdiction))
    store.addPageBase(<Page>utils.createComponents(user))
    store.addPageBase(<Page>utils.createComponents(home2))

    store.addPageBase(<Page>utils.createComponents(sys_baseStation))
    store.addPageBase(<Page>utils.createComponents(sys_baseStationUser))
    store.addPageBase(<Page>utils.createComponents(sys_baseStationUserSenior))
    store.addPageBase(<Page>utils.createComponents(sys_map))
    store.addPageBase(<Page>utils.createComponents(sys_message))
    store.addPageBase(<Page>utils.createComponents(sys_messageInfo))
    store.addPageBase(<Page>utils.createComponents(sys_test))

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