import {Page} from "@/components/class/Page";
import * as utils from "@/components/util/utils";
import {Layout} from "@/components/class/Layout";

export class Store {
    constructor(data:{ [key: string]: any}) {
        this.init(data)
    }
    init(data:{ [key: string]: any}) {
        for(let key in data){
            if(utils.isNotUndefined(this[key])&&utils.isNotUndefined(data[key])){
                this[key]=data[key]
            }
        }
    }
    /**************属性****************/

    /**
     * 当前项目语言环境，默认中文
     */
    private _language: string = "zh";
    //当前项目语言环境
    get language(): string {
        return this._language;
    }
    //当前项目语言环境
    set language(language: string) {
        window.document.documentElement.setAttribute("data-language", language)
        this._language = language;
    }

    /**
     * 当前项目主题，默认白天
     */
    private _themeName: string = "day";
    //当前项目主题
    get themeName(): string {
        return this._themeName;
    }
    //当前项目主题
    set themeName(themeName: string) {
        window.document.documentElement.setAttribute("data-theme", themeName)
        this._themeName = themeName;
    }

    /**
     * 当前浏览器环境 默认pc ,可选 phone  wx zfb
     */
    private _model: string = "pc";
    //当前浏览器环境
    get model(): string {
        return this._model;
    }
    //当前浏览器环境
    set model(model: string) {
        this._model = model;
    }

    /**
     * 当前项目登陆页面  默认 /login
     */
    private _loginName: string = "login";                                  //登录页面
    //当前项目登陆页面
    get loginName(): string {
        return this._loginName;
    }
    //当前项目登陆页面
    set loginName(value: string) {
        this._loginName = value;
    }

    /**
     * 当前项目名称
     */
    private _title: string = "";
    //当前项目名称
    get title(): string {
        return this._title;
    }
    //当前项目名称
    set title(title: string) {
        this._title = title;
    }

    /**
     * 当前项目名称(1)
     */
    private _title1: string = "";
    //当前项目名称(1)
    get title1(): string {
        return this._title1;
    }
    //当前项目名称(1)
    set title1(value: string) {
        this._title1 = value;
    }

    /**
     * 当前项目名称(2)
     */
    private _title2: string = "";
    //当前项目名称(2)
    get title2(): string {
        return this._title2;
    }
    //当前项目名称(2)
    set title2(value: string) {
        this._title2 = value;
    }

    /**
     * 当前项目工程名称
     */
    private _projectName: string = "";
    //当前项目工程名称
    get projectName(): string {
        return this._projectName;
    }
    //当前项目工程名称
    set projectName(projectName: string) {
        this._projectName = projectName;
    }

    /**
     * 当前登陆用户信息
      */
    private _user: any = null;
    //当前登陆用户信息
    get user(): any {
        return this._user;
    }
    //当前登陆用户信息
    set user(user: any) {
        this._user = user;
        this.initSocket()
        //同步页面名称
        utils.initPageTitle(user)

    }

    /**
     * 登陆后 用户和后台保持socket连接
     */
    private _socket: any = null;
    //socket连接
    get socket(): any {
        return this._socket;
    }
    //socket连接
    set socket(socket: any) {
        this._socket = socket;
    }

    /**
     * 当前页面信息
     */
    private _page: any = null;
    //当前页面信息
    get page(): any {
        return this._page;
    }

    /**
     * 所有页面配置信息
     */
    private _pageBase: { [key: string]: Page} = {};
    //所有页面配置信息
    get pageBase(): { [key: string]: Page} {
        return this._pageBase;
    }

    /**
     * 当前页面子组件
     */
    private _components: { [key: string]: any} = {};
    //页面子组件
    get components(): { [key: string]: any} {
        return this._components;
    }
    //页面子组件
    set components(components: { [key: string]: any}) {
        if(!components||typeof(components) == "undefined"){
            return ;
        }
        for(let i=0;i<components.length;i++){
            this.addComponents(<Layout>utils.createComponents(components[i]))
        }
    }

    /**
     * 保存各种参数共全局使用
      */
    private _parameter: { [key: string]: any} = {};
    //全局参数
    get parameter(): any {
        return this._parameter;
    }
    //全局参数
    set parameter(parameter: any) {
        this._parameter = parameter;
    }

    /**
     * 浏览器宽度
     */
    private _width: number = 0;
    //浏览器宽度
    get width(): number {
        return this._width;
    }
    //浏览器宽度
    set width(width: number) {
        this._width = width;
    }

    /**
     * 浏览器高度
     */
    private _height: number = 0;
    //浏览器高度
    get height(): number {
        return this._height;
    }
    //浏览器高度
    set height(height: number) {
        this._height = height;
    }

    /**
     * 浏览器宽度
     */
    private _clientWidth: string = "";
    //浏览器宽度
    get clientWidth(): string {
        return this._clientWidth;
    }
    //浏览器宽度
    set clientWidth(clientWidth: string) {

        if (parseInt(clientWidth) > 1920 && this.size != "big") {
            this.size = "big"
        }
        if (parseInt(clientWidth) >= 1280 && parseInt(clientWidth) <= 1920  && this.size != "middle") {
            this.size = "middle"
        }
        if (parseInt(clientWidth) < 1280 && this.size != "small"){
            this.size = "small"
        }
        //当页面大小有变化通知组件
        let page = utils.getPage();
        if(utils.isNotNull(page.associated_size_notice)&&utils.isNotNull(this._clientWidth)){
            for(let i=0;i<page.associated_size_notice.length;i++){
                let content = utils.getPage().getComponents({system_id:page.associated_size_notice[i]})
                if(utils.isNotNull(content)){
                    content.associated_size()
                }
            }
        }
        this._clientWidth = clientWidth;
    }

    /**
     * 浏览器高度
     */
    private _clientHeight: string = "";
    //浏览器高度
    get clientHeight(): string {
        return this._clientHeight;
    }
    //浏览器高度
    set clientHeight(clientHeight: string) {
        this._clientHeight = clientHeight;
    }

    /**
     * 浏览器大小
     */
    private _size: string = "";
    //浏览器大小
    get size(): string {
        return this._size;
    }
    //浏览器大小
    set size(size: string) {
        window.document.documentElement.setAttribute("data-size", size)
        this._size = size;
    }

    /**
     *   定时器
     */
    private _timer: { [key: string]: any} = {};
    //定时器
    get timer(): { [p: string]: any } {
        return this._timer;
    }
    //定时器
    set timer(value: { [p: string]: any }) {
        this._timer = value;
    }

    /**
     * 资源路径配置
     */
    private _assects: any = null;
    //资源路径配置
    get assects(): any {
        return this._assects;
    }
    //资源路径配置
    set assects(assects: any) {
        this._assects = assects;
    }

    /**
     * 快键按钮
     */
    private _tools: any = null;
    //快键按钮
    get tools(): any {
        return this._tools;
    }
    //快键按钮
    set tools(tools: any) {
        this._tools = tools;
    }

    /**
     * 快键按钮
     */
    private _header_btn: any = null;
    //快键按钮
    get header_btn(): any {
        return this._header_btn;
    }
    //快键按钮
    set header_btn(value: any) {
        this._header_btn = value;
    }
    /**
     * vue对象
     */
    private _myVue: any = null;
    //vue对象
    get myVue(): any {
        return this._myVue;
    }
    //vue对象
    set myVue(value: any) {
        this._myVue = value;
    }

    /**
     * 栏目统计数
     */
    private _statistics_number:  { [key: string]: any} = {};
    //栏目统计数
    get statistics_number():  { [key: string]: any} {
        return this._statistics_number;
    }
    //栏目统计数
    set statistics_number(value:  { [key: string]: any}) {
        this._statistics_number = value;
    }

    /**
     * loading 动画
     */
    private _loadingInstance: any = null;
    //loading 动画
    get loadingInstance(): any {
        return this._loadingInstance;
    }
    //loading 动画
    set loadingInstance(value: any) {
        this._loadingInstance = value;
    }

    /**************方法****************/
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

    /**
     * 删除子组件
     * @param data
     */
    deleteAllComponents(data: { [key: string]: any}) {
        this.components[data.modelName] = []
    }

    /**
     * 打开弹出框
     * @param data
     */
    openDialog(data:any) {
        for(let i=0;i<this.page.components.dialog .length;i++){
            if(this.page.components.dialog[i].name==data.name){
                if(this.page.components.dialog[i].valueModel=='批量'){
                    let content = utils.getPage().getComponents({system_id:this.page.components.dialog[i].tableName})
                    if(utils.isNull(content.selectRow)){
                        utils.myMessage({message:this.page.components.dialog[i].valueModelPLMessage, level: "warning"})
                        return
                    }
                }
                this.page.components.dialog[i].show=true;
                if(utils.isNotNull(data.title)){
                    this.page.components.dialog[i].title=data.title;
                }
                return this.page.components.dialog[i];
            }
        }
    }
    selectDialog(data:any){
        for(let i=0;i<this.page.components.dialog .length;i++){
            if(this.page.components.dialog[i].name==data.name){
                return this.page.components.dialog[i];
            }
        }
    }

    /**
     * 打开全局属性弹出框
     * @param data
     */
    openDialogGlobal(data:{name:string}) {
        for(let i=0;i<this.components.dialog.length;i++){
            if(this.components.dialog[i].name==data.name){
                if(this.components.dialog[i].valueModel=='批量'){
                    let content = utils.getPage().getComponents({system_id:this.components.dialog[i].tableName})
                    if(utils.isNull(content.selectRow)){
                        utils.myMessage({message:this.page.components.dialog[i].valueModelPLMessage, level: "warning"})
                        return
                    }
                }
                this.components.dialog[i].show=true;
            }
        }
    }

    /**
     * 添加页面配置
     * @param page
     */
    addPageBase(page: Page) {
        this._pageBase[page.name] = page;
    }

    /**
     * 设置当前打开的页面
     * @param page
     */
    setCurrentPage(data: { name: string; }) {
        this._page = this._pageBase[data.name];
    }

    /**
     * 设置当前语言环境
     * @param date
     */
    setLanguage(date:{name:string}) {
        utils.setLanguage(date);
    }

    /**
     * 设置当前主题环境
     * @param date
     */
    setTheme(date:{name:string}) {
        utils.setTheme(date);
    }

    /**
     * 跳转页面
     * @param date
     */
    goTo(date:{path:string}) {
        utils.goTo(date)
    }

    /**
     * 浏览器尺寸
     * @param date
     */
    initSize() {
        this.width = window.screen.width
        this.height = window.screen.height
        this.clientWidth = `${document.documentElement.clientWidth}`
        this.clientHeight = `${document.documentElement.clientHeight}`
    }

    /**
     * 进行Socke连接
     * @param date
     */
    initSocket() {
        console.log("-----initSocket")
        //有登陆信息并且无socket连接 进行连接操作
        if(utils.isNotNull(this.user)&&utils.isNull(this.socket)){
            utils.connect()                                                             //socket尝试连接
        }
        //无登陆信息并且有socket连接 进行断开操作
        if(utils.isNull(this.user)&&utils.isNotNull(this.socket)){
            this.socket.disconnect()                                       // socket断开连接
        }
    }

    /**
     * 添加参数共全局使用
     * @param date
     */
    addParameter(data:{ [key: string]: any}) {
        let name = data.name
        let value = data.value
        let names = data.names
        let pageNameSpace = "";
        if(data.pageNameSpace){
            pageNameSpace = data.pageNameSpace
        }
        if(utils.isNull(pageNameSpace)){
            pageNameSpace = utils.getPageName()
        }
        names.unshift(pageNameSpace)
        if (utils.isNotNull(names)) {
            let size = names.length
            if (size < 1 || size > 5) {
                utils.logWarn("setSystemParameter---1")
            } else {
                if (utils.isNull(this.parameter[names[0]])) {
                    this.parameter[names[0]] = {}
                }
                if (size === 1) {
                    return this.parameter[names[0]] = value
                }
                if (utils.isNull(this.parameter[names[0]][names[1]])) {
                    this.parameter[names[0]][names[1]] = {}
                }
                if (size === 2) {
                    return this.parameter[names[0]][names[1]] = value
                }
                if (utils.isNull(this.parameter[names[0]][names[1]][names[2]])) {
                    this.parameter[names[0]][names[1]][names[2]] = {}
                }
                if (size === 3) {
                    return this.parameter[names[0]][names[1]][names[2]] = value
                }
                if (utils.isNull(this.parameter[names[0]][names[1]][names[2]][names[3]])) {
                    this.parameter[names[0]][names[1]][names[2]][names[3]] = {}
                }
                if (size === 4) {
                    return this.parameter[names[0]][names[1]][names[2]][names[3]] = value
                }
                if (utils.isNull(this.parameter[names[0]][names[1]][names[2]][names[3]][names[4]])) {
                    this.parameter[names[0]][names[1]][names[2]][names[3]][names[4]] = {}
                }
                if (size === 5) {
                    return this.parameter[names[0]][names[1]][names[2]][names[3]][names[4]] = value
                }
            }
        } else {
            return this.parameter[name] = value
        }
    }

}
