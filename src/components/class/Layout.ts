import {Components} from "./Components"
import Vue from 'vue'
import * as utils from "@/components/util/utils";
export class Layout extends Components {
    constructor() {
        super();
    }
    /**
     * 子组件
     */
    private _components: { [key: string]: any} = {};
    //子组件
    get components(): { [key: string]: any} {
        return this._components;
    }
    //子组件
    set components(components: { [key: string]: any}) {
        for(let i=0;i<components.length;i++){
            this.addComponents(<Layout>utils.createComponents(components[i]))
        }
    }

    /**************方法****************/

    setComponents(value: { [key: string]: any}) {
        this._components=value;
    }

    /**
     * 添加子组件
     * @param page
     */
    addComponents(page: Layout) {
        if(!this.components[page.modelName]){
            this.components[page.modelName] = []
        }
        this.components[page.modelName].push(page);
    }
    //删除子组件
    deleteAllComponents(data: { [key: string]: any}) {
        this.components[data.modelName] = []
    }
    //深拷贝子组件
    copyComponents(data: { [key: string]: any}) {
        let name = data.name?data.name:"template"
        let value = data.value?data.value:{}
        let number = data.number?data.number:0
        let system_no = data.system_no?data.system_no:""
        if(!this.components[name]){
           return
        }
        //vue2版本
        let newComponents = utils.lodash.cloneDeep(this.components[name])
        for(let i=0;i<newComponents.length;i++){
            newComponents[i].copy_number=number
            newComponents[i].system_no_f=system_no
            if(utils.isNotNull(value[newComponents[i].name])){
                newComponents[i].initValue()
                newComponents[i].initValueFormat(value[newComponents[i].name]);
            }
        }
        if(utils.isNull(this.components[name+""+number])){
            //vue2版本
            Vue.set(this.components, name+""+number,newComponents)
            //推荐但需要vue3版本
            // this.components[name+""+number] = utils.lodash.cloneDeep(this.components[name]);
        }


        return;

    }
    /**
     * 获取组件
     * @param data
     */
    getComponents(data: { [key: string]: any}) {
        //从当前页面
        let components = this.getComponentsPage(data)
        if(utils.isNull(components)){
            //从全局控件页面
            components = this.getComponentsGlobal(data)
        }
        return components;
    }
    /**
     * 从全局获取组件
     * @param data
     */
    getComponentsGlobal(data: { [key: string]: any}) {
        let components:any = null;
        //如果没有找全局组件
        let store = utils.getStore()
        for(let key in store.components){
            for(let i=0;i<store.components[key].length;i++){
                components = store.components[key][i].getComponentsPage(data)
                if(utils.isNotNull(components)){
                    return components;
                }
            }
        }
        return ;
    }
    /**
     * 从当前页面获取组件
     * @param data
     */
    getComponentsPage(data: { [key: string]: any}) {
        let components:any = null;
        if(utils.isNull(data.system_id)){
            return ;
        }
        //判断当前
        if(data.system_id==this.system_id){
            return this
        }
        //判断有没有子组件
        if(utils.isNull(this.components)){
            return;
        }
        //从子组件中查找
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                components = this.components[key][i].getComponentsPage(data)
                if(utils.isNotNull(components)){
                    return components;
                }
            }
        }
        return ;
    }



}
