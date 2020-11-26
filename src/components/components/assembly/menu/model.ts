import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyMenu extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"栏目",
            system_id:'menu'
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _isCollapse: boolean = false;                                   //是否展开
    /**************方法****************/
    //添加子组件
    getGoToUrl(id:string) {
        let menu_linkurl = ""
        let menuList = utils.getMenuList()
        for (let i = 0; i < menuList.length; i++) {
            //主栏目
            if (menuList[i].menu_id.toString() === id) {
                menu_linkurl = menuList[i].menu_linkurl
            }else{
                if(utils.isNotNull(menuList[i].children)){
                    for (let l = 0; l < menuList[i].children.length; l++) {
                        if (menuList[i].children[l].menu_id.toString() === id) {
                            menu_linkurl = menuList[i].children[l].menu_linkurl
                        }
                    }
                }
            }
        }
        if(menu_linkurl!=""){
            utils.goTo({path: menu_linkurl})
        }
    }
    /**************存取器****************/
    get isCollapse(): boolean {
        return this._isCollapse;
    }
    set isCollapse(isCollapse: boolean) {
        this._isCollapse = isCollapse;
    }
}
