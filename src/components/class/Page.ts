import {Layout} from "@/components/class/Layout";
import * as utils from "@/components/util/utils";
export class Page extends Layout {
    constructor() {
        super();
    }


    /**************属性****************/
    /**
     * 当前页面配置的api
     */
    private _api: { [key: string]: any} = {};
    //当前页面配置的api
    get api(): { [key: string]: any} {
        return this._api;
    }
    //当前页面配置的api
    set api(api: { [key: string]: any}) {
        this._api = api;
    }

    /**
     * 当前页面标题
     */
    private _pageTitle: string = "无标题";
    //当前页面标题
    get pageTitle(): string {
        return this._pageTitle;
    }
    //当前页面标题
    set pageTitle(pageTitle: string) {
        this._pageTitle = pageTitle;
    }

    /**
     * 当前页面是否是根页面
     */
    private _root: boolean = false;
    //当前页面是否是根页面
    get root(): boolean {
        return this._root;
    }
    //当前页面是否是根页面
    set root(root: boolean) {
        this._root = root;
    }

    /**
     * 当前页面是否是错误页面
     */
    private _error: boolean = false;
    //当前页面是否是错误页面
    get error(): boolean {
        return this._error;
    }
    //当前页面是否是错误页面
    set error(error: boolean) {
        this._error = error;
    }

    /**
     * 当前页面是否必须登录才能进入
     */
    private _requiresAuth: boolean = true;
    //当前页面是否必须登录才能进入
    get requiresAuth(): boolean {
        return this._requiresAuth;
    }
    //当前页面是否必须登录才能进入
    set requiresAuth(requiresAuth: boolean) {
        this._requiresAuth = requiresAuth;
    }

    /**
     * 当前页面大小有变化通知组件
     */
    private _associated_size_notice: any[] = [];
    //当前页面大小有变化通知组件
    get associated_size_notice(): any[] {
        return this._associated_size_notice;
    }
    //当前页面大小有变化通知组件
    set associated_size_notice(value: any[]) {
        this._associated_size_notice = value;
    }

    /**************方法****************/
    /**
     * 获取当前页面配置的url
     * @param data
     */
    getUrl(data:{ [key: string]: any}){
        let prefix = process.env.VUE_APP_URL               //url前缀
        let url = this.api[data.name];
        if(utils.isNotNull(url)){
            if (url.substring(0,4 )=="http") {
                return url
            }else{
                return prefix + url
            }
        }else{
            if (data.name.substring(0,4 )=="/api") {
                return data.name
            }else{
                return prefix + data.name
            }
        }
    }

    /**
     * 进入当前页面执行
     */
    initPage(){                                                         //进入页面执行
        let content = utils.getPage().getComponents({system_id:"content"})
        // let content2 = utils.getPage().getComponents({system_id:"content2"})
        let query = utils.getPage().getComponents({system_id:"query"})
        if(utils.isNotNull(query)&&utils.isNotNull(query.initValue)){
            query.initValue()
            query.initAjax()
        }
        if(utils.isNotNull(content)&&utils.isNotNull(content.query)){
            content.query()
        }
        // if(utils.isNotNull(content2)&&utils.isNotNull(content2.query)){
        //     content2.query()
        // }
    }
    /**
     * 添加当页面大小发生变化时通知的对象
     */
    addAssociatedSizeNotice(value: Layout) {
        this.associated_size_notice.push(value);
    }
}
