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
import sys_department from "./modules/fixed/department";
import fixed_directories from "./modules/fixed/directories";
import fixed_message from "./modules/fixed/message";
import fixed_message_info from "./modules/fixed/messageInfo";
import fixed_option from "./modules/fixed/option";
import fixed_role from "./modules/fixed/role";

import sys_problem from "./modules/specific/problem";
import sys_setting from "./modules/specific/setting";
import sys_statistics from "./modules/specific/statistics";
import sys_files from "./modules/specific/files";
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
    store.addPageBase(<Page>utils.createComponents(sys_department))
    store.addPageBase(<Page>utils.createComponents(fixed_directories))
    store.addPageBase(<Page>utils.createComponents(fixed_message))
    store.addPageBase(<Page>utils.createComponents(fixed_message_info))
    store.addPageBase(<Page>utils.createComponents(fixed_option))
    store.addPageBase(<Page>utils.createComponents(fixed_role))


    store.addPageBase(<Page>utils.createComponents(sys_problem))
    store.addPageBase(<Page>utils.createComponents(sys_setting))
    store.addPageBase(<Page>utils.createComponents(sys_statistics))
    store.addPageBase(<Page>utils.createComponents(sys_files))



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