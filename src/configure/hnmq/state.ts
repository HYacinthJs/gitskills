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

import flow from "./modules/fixed/flow";
import flow_step from "./modules/fixed/flow_step";
import flow_node from "./modules/fixed/flow_node";

import bus_food from "./modules/specific/bus_food";
import bus_goods from "./modules/specific/bus_goods";
import bus_menu_breakfast from "./modules/specific/bus_menu_breakfast";
import bus_menu_dinner from "./modules/specific/bus_menu_dinner";
import bus_menu_lunch from "./modules/specific/bus_menu_lunch";
import bus_menu_lunch_no_reserve from "./modules/specific/bus_menu_lunch_no_reserve";
import bus_menu_setmeal from "./modules/specific/bus_menu_setmeal";
import bus_menu_setmeal_food from "./modules/specific/bus_menu_setmeal_food";
import bus_account from "./modules/specific/bus_account";
import bus_account_user from "./modules/specific/bus_account_user";
import bus_account_user_error from "./modules/specific/bus_account_user_error";
import bus_loaded from "./modules/specific/bus_loaded";
import bus_order_by_order from "./modules/specific/bus_order_by_order";
import bus_order_goods from "./modules/specific/bus_order_goods";
import bus_report1 from "./modules/specific/bus_report1";
import bus_report2 from "./modules/specific/bus_report2";
import bus_report3 from "./modules/specific/bus_report3";
import bus_report4 from "./modules/specific/bus_report4";
import bus_notice from "./modules/specific/bus_notice";
import bus_goods_type from "./modules/specific/bus_goods_type";
import bus_supplier from "./modules/specific/bus_supplier";
import bus_order_by_goods from "./modules/specific/bus_order_by_goods";

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
    store.addPageBase(<Page>utils.createComponents(department))
    store.addPageBase(<Page>utils.createComponents(flow))
    store.addPageBase(<Page>utils.createComponents(flow_step))
    store.addPageBase(<Page>utils.createComponents(flow_node))
    store.addPageBase(<Page>utils.createComponents(bus_food))
    store.addPageBase(<Page>utils.createComponents(bus_goods))
    store.addPageBase(<Page>utils.createComponents(bus_menu_breakfast))
    store.addPageBase(<Page>utils.createComponents(bus_menu_dinner))
    store.addPageBase(<Page>utils.createComponents(bus_menu_lunch))
    store.addPageBase(<Page>utils.createComponents(bus_menu_lunch_no_reserve))
    store.addPageBase(<Page>utils.createComponents(bus_menu_setmeal))
    store.addPageBase(<Page>utils.createComponents(bus_menu_setmeal_food))
    store.addPageBase(<Page>utils.createComponents(bus_account))
    store.addPageBase(<Page>utils.createComponents(bus_account_user))
    store.addPageBase(<Page>utils.createComponents(bus_account_user_error))
    store.addPageBase(<Page>utils.createComponents(bus_loaded))
    store.addPageBase(<Page>utils.createComponents(bus_order_by_order))
    store.addPageBase(<Page>utils.createComponents(bus_order_goods))
    store.addPageBase(<Page>utils.createComponents(bus_report1))
    store.addPageBase(<Page>utils.createComponents(bus_report2))
    store.addPageBase(<Page>utils.createComponents(bus_report3))
    store.addPageBase(<Page>utils.createComponents(bus_report4))
    store.addPageBase(<Page>utils.createComponents(bus_notice))
    store.addPageBase(<Page>utils.createComponents(bus_goods_type))
    store.addPageBase(<Page>utils.createComponents(bus_supplier))
    store.addPageBase(<Page>utils.createComponents(bus_order_by_goods))
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