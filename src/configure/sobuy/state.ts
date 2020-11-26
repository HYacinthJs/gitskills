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
import number from "./modules/specific/number";
import number_copy from "./modules/specific/number_copy";
import supplier from "./modules/specific/supplier";
import standard from "./modules/specific/standard";
import quality from "./modules/specific/quality";
import problem_type from "./modules/specific/problem_type";
import order from "./modules/specific/order";
import process from "./modules/specific/process";
import company from "./modules/specific/company";
import department from "./modules/specific/department";
import sample from "./modules/specific/sample";
import sample2 from "./modules/specific/sample2";
import home2 from "./modules/fixed/home2";
import ppsample from "./modules/specific/ppsample";
import newtechnology from "./modules/specific/newtechnology";
import material from "./modules/specific/material";
import midtest from "./modules/specific/midtest";
import determination_standard from "./modules/specific/determination_standard";
import component_information from "./modules/specific/component_information";
import accessories_information from "./modules/specific/accessories_information";
import tailcheck from "./modules/specific/tailcheck";
import re_examination from "./modules/specific/re_examination";
import flow from "./modules/fixed/flow";
import flow_step from "./modules/fixed/flow_step";
import flow_node from "./modules/fixed/flow_node";
import bulksample from "./modules/specific/bulksample";
import test_program from "./modules/specific/test_program";
import import_data from "./modules/specific/import_data";
import factory_quality from "./modules/specific/factory_quality";
import correct_quality from "./modules/specific/correct_quality";
import factory_correct_quality from "./modules/specific/factory_correct_quality";
import file_manage from "./modules/specific/file_manage";
import fixed_home from "./modules/specific/fixed_home";
import fixed_examine from "./modules/specific/fixed_examine";
import parts_config from "./modules/specific/parts_config";

Vue.use(VueRouter)
export function getState () {
    //数据对象
    console.log("开始")
    let store =new Store(config);
    store.addPageBase(<Page>utils.createComponents(error))
    store.addPageBase(<Page>utils.createComponents(login))
    store.addPageBase(<Page>utils.createComponents(home))
    store.addPageBase(<Page>utils.createComponents(menu))
    store.addPageBase(<Page>utils.createComponents(flow))
    store.addPageBase(<Page>utils.createComponents(flow_step))
    store.addPageBase(<Page>utils.createComponents(flow_node))
    store.addPageBase(<Page>utils.createComponents(jurisdiction))
    store.addPageBase(<Page>utils.createComponents(user))
    store.addPageBase(<Page>utils.createComponents(number))
    store.addPageBase(<Page>utils.createComponents(number_copy))
    store.addPageBase(<Page>utils.createComponents(supplier))
    store.addPageBase(<Page>utils.createComponents(standard))
    store.addPageBase(<Page>utils.createComponents(quality))
    store.addPageBase(<Page>utils.createComponents(problem_type))
    store.addPageBase(<Page>utils.createComponents(process))
    store.addPageBase(<Page>utils.createComponents(order))
    store.addPageBase(<Page>utils.createComponents(company))
    store.addPageBase(<Page>utils.createComponents(department))
    store.addPageBase(<Page>utils.createComponents(sample))
    store.addPageBase(<Page>utils.createComponents(sample2))
    store.addPageBase(<Page>utils.createComponents(home2))
    store.addPageBase(<Page>utils.createComponents(ppsample))
    store.addPageBase(<Page>utils.createComponents(newtechnology))
    store.addPageBase(<Page>utils.createComponents(material))
    store.addPageBase(<Page>utils.createComponents(midtest))
    store.addPageBase(<Page>utils.createComponents(determination_standard))
    store.addPageBase(<Page>utils.createComponents(component_information))
    store.addPageBase(<Page>utils.createComponents(accessories_information))
    store.addPageBase(<Page>utils.createComponents(tailcheck))
    store.addPageBase(<Page>utils.createComponents(re_examination))
    store.addPageBase(<Page>utils.createComponents(bulksample))
    store.addPageBase(<Page>utils.createComponents(test_program))
    store.addPageBase(<Page>utils.createComponents(import_data))
    store.addPageBase(<Page>utils.createComponents(factory_quality))
    store.addPageBase(<Page>utils.createComponents(correct_quality))
    store.addPageBase(<Page>utils.createComponents(factory_correct_quality))
    store.addPageBase(<Page>utils.createComponents(file_manage))
    store.addPageBase(<Page>utils.createComponents(fixed_home))
    store.addPageBase(<Page>utils.createComponents(fixed_examine))
    store.addPageBase(<Page>utils.createComponents(parts_config))

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