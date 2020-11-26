import {Page} from "@/components/class/Page";
import * as utils from "@/components/util/utils";
import {Layout} from "@/components/class/Layout";
/**
 * PageNormal 主页面
 */
export class PageNormal_sobuy extends Page {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"上左右布局",
            system_id:'normal'
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        this.componentDefault(data)
    }
    /**
     * 初始化,并设置默认值
     *
     * @param { [key: string]: any} data 参数
     *
     */
    componentDefault(data:{ [key: string]: any}){
        let initMenu = true;
        let initHeader = true;
        let initBreadcrumbs = true;
        let initFooter = true;
        let initDelete = true;
        let initDeleteAll = true;
        for(let i=0;i<data.components.length;i++){
            if(data.components[i].modelName=='menu'){
                initMenu=false;
            }
            if(data.components[i].modelName=='header'){
                initHeader=false;
            }
            if(data.components[i].modelName=='breadcrumbs'){
                initBreadcrumbs=false;
            }
            if(data.components[i].modelName=='footer'){
                initFooter=false;
            }
            if(data.components[i].modelName=='dialog'&&data.components[i].modelName=='delete'){
                initDelete=false;
            }
            if(data.components[i].modelName=='dialog'&&data.components[i].modelName=='deleteAll'){
                initDeleteAll=false;
            }
        }
        if(initMenu){
            this.addComponents(<Layout>utils.createComponents({ modelName:'menu', type: 'AssemblyMenu_sobuy'}))
        }
        if(initHeader){
            this.addComponents(<Layout>utils.createComponents({ modelName:'header', type: 'AssemblyHeader_jsgaj'}))
        }
        if(initFooter){
            this.addComponents(<Layout>utils.createComponents({modelName:'footer',type: 'AssemblyFooter'}))
        }
        if(initDelete){
            this.addComponents(<Layout>utils.createComponents({modelName:'dialog',name:"delete",title:'删除',msg:'是否确认删除？',type: 'DialogSelect'}))
        }
        if(initDeleteAll){
            this.addComponents(<Layout>utils.createComponents({modelName:'dialog',name:"deleteAll",title:'删除',msg:'是否确认批量删除？',valueModel:"批量",type: 'DialogSelect'}))
        }
    }
    /**
     * 菜单栏宽度
     */
    private _aside_width: string = "240px";

    get aside_width(): string {
        return this._aside_width;
    }

    set aside_width(value: string) {
        this._aside_width = value;
    }
}
