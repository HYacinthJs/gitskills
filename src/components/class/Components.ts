import * as utils from "@/components/util/utils";

export class Components {
    constructor() {
    }
    /**************属性****************/
    /**
     *  组件功能描述--创建组件默认设置
     * （不推荐手动设置）
     */
    private _componentDescription: string = "未设置组件描述";
    //组件功能描述--创建组件默认设置
    get componentDescription(): string {
        return this._componentDescription;
    }
    //组件功能描述--创建组件默认设置
    set componentDescription(componentDescription: string) {
        this._componentDescription = componentDescription;
    }
    /**
     * 如果有父级是弹出框，值为弹出框id
     * 框架自动调用
     */
    private _dialog_system_id: string = "";
    //如果有父级是弹出框，值为弹出框id
    get dialog_system_id(): string {
        return this._dialog_system_id;
    }
    //如果有父级是弹出框，值为弹出框id
    set dialog_system_id(value: string) {
        this._dialog_system_id = value;
    }
    /**
     * 组件版本
     * 框架自动调用
     */
    private _version: string = "";
    //组件版本
    get version(): string {
        return this._version;
    }
    //组件版本
    set version(version: string) {
        this._version = version;
    }
    /**
     * 组件编号(待确认)
     * 框架自动生成
     */
    private _system_no: string = "";
    //组件编号(待确认)
    get system_no(): string {
        return this._system_no;
    }
    //组件编号(待确认)
    set system_no(value: string) {
        this._system_no = value;
    }
    /**
     * 组件编号(待确认)
     * 框架自动生成
     */
    private _system_no_f: string = "";
    //组件编号(待确认)
    get system_no_f(): string {
        return this._system_no_f;
    }
    //组件编号(待确认)
    set system_no_f(value: string) {
        this._system_no_f = value;
    }
    /**
     *  组件值错误显示文本
     * 框架自动调用
     */
    private _validate_string: string = "";
    //组件值错误显示文本
    get validate_string(): string {
        return this._validate_string;
    }
    //组件值错误显示文本
    set validate_string(value: string) {
        this._validate_string = value;
    }
    /**
     * 复制的控件当前index
     * 框架自动生成
     */
    private _copy_number: number = -1;
    get copy_number(): number {
        return this._copy_number;
    }
    set copy_number(value: number) {

        this._copy_number = value;
        //设置动态通知
        if(this.copy_number>-1&&utils.isNotNull(this.associated_notice)){
            let new_associated_notice: any[]=[]
            for(let i=0;i<this.associated_notice.length;i++){
                if(this.copy_number>-1){
                    let newStr = this.associated_notice[i].replace("_copyIndex","_"+this.copy_number)
                    new_associated_notice.push(newStr);
                }else{
                    new_associated_notice.push( this.associated_notice[i]);
                }
            }
            this._associated_notice = new_associated_notice;
        }

        //设置动态id
        if(this.copy_number>-1&&utils.isNotNull(this.system_id)) {
            if (this.copy_number>-1) {
                let newStr = this.system_id.replace("_copyIndex", "_"+this.copy_number)
                this._system_id = newStr
            } else {
                this._system_id = this.system_id;
            }
        }
    }


    /**
     * 组件名称
     */
    private _name: string = "";
    //组件名称
    get name(): string {
        return this._name;
    }
    //组件名称
    set name(name: string) {
        this._name = name;
    }
    /**
     * 组件父级区域名称
     * 用于设置显示在父级组件的具体位置
     */
    private _modelName: string = "";
    //组件父级区域名称
    get modelName(): string {
        return this._modelName;
    }
    //组件父级区域名称
    set modelName(modelName: string) {
        this._modelName = modelName;
    }
    /**
     * 组件类型
     */
    private _type: string = "";
    //组件类型
    get type(): string {
        return this._type;
    }
    //组件类型
    set type(type: string) {
        this._type = type;
    }
    /**
     * 组件id
     * 如果没有手动设置，框架自动生成
     * 不可第二次改
     */
    private _system_id: string = "";
    //组件id
    get system_id(): string {
        return this._system_id;
    }
    //组件id
    set system_id(system_id: string) {
        this._system_id = system_id;
    }
    /**
     * 当前组件尺寸大小
     */
    private _size: string = "";
    //当前组件尺寸大小
    get size(): string {
        return this._size;
    }
    //当前组件尺寸大小
    set size(size: string) {
        this._size = size;
    }
    /**
     * 组件标题
     */
    private _title: string = "";
    //组件标题
    get title(): string {
        return utils.myI18n({name:this._title});
    }
    //组件标题
    set title(title: string) {
        this._title = title;
    }
    /**
     * 当组件值发生改变通知其他组件
     * ```js
     * // 示例
     * associated_notice:['system_id_1','system_id_2']
     *
     * ```
     */
    private _associated_notice: any[] = [];
    //当组件值发生改变通知其他组件
    get associated_notice(): any[] {
        return this._associated_notice;
    }
    //当组件值发生改变通知其他组件
    set associated_notice(associated_notice: any[]) {
        this._associated_notice = associated_notice;
    }
    /**
     * 默认关联table组件
     */
    private _tableName: string = "";
    //默认关联table组件
    get tableName(): string {
        return this._tableName;
    }
    //默认关联table组件
    set tableName(tableName :string) {
        this._tableName = tableName;
    }
    /**
     * 默认关联breadcrumbsName组件
     */
    private _breadcrumbsName: string = "";
    //默认关联breadcrumbsName组件
    get breadcrumbsName(): string {
        return this._breadcrumbsName;
    }
    //默认关联breadcrumbsName组件
    set breadcrumbsName(breadcrumbsName :string) {
        this._breadcrumbsName = breadcrumbsName;
    }
    /**
     * 组件值的单位
     */
    private _unit: string = "";
    //组件值的单位
    get unit(): string {
        return this._unit;
    }
    //组件值的单位
    set unit(value: string) {
        this._unit = value;
    }
    /**
     * 组件值
     */
    private _value: any = null;
    //组件值
    get value(): any {
        return this._value;
    }
    //组件值
    set value(value: any) {
        let old = utils.lodash.cloneDeep(this.value)
        if(utils.isNull(value)){
            this._value = this._value_default
        }
        this.validate_string = "";
        this._value = value;
        if(old!=value){
            if(utils.isNotNull(this.associated_notice)){
                for(let i=0;i<this.associated_notice.length;i++){
                    let content = utils.getPage().getComponents({system_id:this.associated_notice[i]})
                    if(utils.isNotNull(content)){
                        if(utils.isNotNull(content.dialog_system_id)){
                            let dialog = utils.getPage().getComponents({system_id:content.dialog_system_id})
                            if(dialog.show===false){
                                console.log("弹出框隐藏")
                                continue;
                            }
                        }

                        content.associated()
                    }else{
                        /* let obj = {
                             "异常描述":"无组件:"+this.associated_notice[i],
                             "异常方法":"associated",
                         }
                         utils.logErr('associated异常')
                         utils.log(obj)*/
                    }
                }
            }
        }
        this.initCopyComponents()
    }
    /**
     * 组件值的默认值
     */
    private _value_default: any = null;
    //组件值的默认值
    get value_default(): any {
        return this._value_default;
    }
    //组件值的默认值
    set value_default(value_default :any) {
        this._value_default = value_default;
        if(utils.isNull(this._value)){
            this._value = value_default
        }
    }
    /**
     * 是否设置查询到的数据到值
     */
    private _isSetValue: boolean = true;
    //是否设置查询到的数据到值
    get isSetValue(): boolean {
        return this._isSetValue;
    }
    //是否设置查询到的数据到值
    set isSetValue(value: boolean) {
        this._isSetValue = value;
    }
    /**
     *  组件显示模式  编辑 详情
     *  可自定义 类型
     *  参考ComponentsInput 组件
     *
     */
    private _show_type: string = "编辑";
    //组件显示模式  编辑 详情
    get show_type(): string {
        return this._show_type;
    }
    //组件显示模式  编辑 详情
    set show_type(value: string) {
        this._show_type = value;
    }
    /**
     *  placeholder提示
     *
     */
    private _placeholder: string = "";
    // placeholder提示
    get placeholder(): string {
        if(this._placeholder==""){
            return utils.myI18n({name:this._label});
        }
        return utils.myI18n({name:this._placeholder});
    }
    // placeholder提示
    set placeholder(placeholder: string) {
        this._placeholder = placeholder;
    }
    /**
     *  label
     *
     */
    private _label: string = "";
    //label
    get label(): string {
        return utils.myI18n({name:this._label});
    }
    //label
    set label(label: string) {
        this._label = label;
    }
    /**
     *  label宽度  135px
     *
     */
    private _label_width: string = "100px";
    //label宽度  130px
    get label_width(): string {
        return this._label_width;
    }
    //label宽度  135px
    set label_width(label_width: string) {
        this._label_width = label_width;
    }
    /**
     *  是否显示label
     *
     */
    private _label_show: boolean = true;
    //是否显示label
    get label_show(): boolean {
        return this._label_show;
    }
    //是否显示label
    set label_show(label_show: boolean) {
        this._label_show = label_show;
    }
    /**
     *  对齐方式
     *  默认居中 center
     *
     */
    private _align: string = "center";
    //对齐方式
    get align(): string {
        return this._align;
    }
    //对齐方式
    set align(align: string) {
        this._align = align;
    }
    /**
     *  组件动态css样式
     *
     */
    private _style: { [key: string]: any} = {};
    //组件动态css样式
    get style(): { [key: string]: any} {
        return this._style;
    }
    //组件动态css样式
    set style(style :{ [key: string]: any}) {
        this._style = style;
    }
    /**
     *  组件值校验格式
     *
     */
    private _rules: any[] = [];
    //组件值校验格式
    get rules(): any[] {
        return this._rules;
    }
    //组件值校验格式
    set rules(value: any[]) {
        this._rules = value;
    }
    /**
     *  组件值校验失败是否显示提示
     *
     */
    private _validate_string_show: boolean = true;
    //组件值校验失败是否显示提示
    get validate_string_show(): boolean {
        return this._validate_string_show;
    }
    //组件值校验失败是否显示提示
    set validate_string_show(value: boolean) {
        this._validate_string_show = value;
    }
    /**
     * 组件ajax请求
     */
    private _ajax_url: string = "";
    //组件ajax请求
    get ajax_url(): string {
        return this._ajax_url;
    }
    //组件ajax请求
    set ajax_url(ajax_url: string) {
        this._ajax_url = ajax_url;
    }
    /**
     * 组件ajax请求参数
     */
    private _ajax_params: any[] = [];
    //组件ajax请求参数
    get ajax_params(): any[] {
        return this._ajax_params;
    }
    //组件ajax请求参数
    set ajax_params(ajax_params: any[]) {
        this._ajax_params = ajax_params;
    }
    /**
     * from表单css
     */
    private _item_style: any = null;
    //from表单css
    get item_style(): any {
        return this._item_style;
    }
    //from表单css
    set item_style(value: any) {
        this._item_style = value;
    }
    /**
     * 是否显示
     * true 显示
     * false 不显示
     */
    private _show: boolean = true;
    //是否显示
    get show(): boolean {
        if(this._show==false){
            return false;
        }
        if(utils.isNotNull(this.jurisdictionJson)){
            return utils.isJurisdiction({ jurisdictionList: this.jurisdictionJson,process:this.process})
        }
        return this._show;
    }
    //是否显示
    set show(show: boolean) {
        this._show = show;
    }
    /**
     * 是否显示
     * true 显示
     * false 不显示
     */
    private _disabled: boolean = false;
    //是否显示
    get disabled(): boolean {
        if(utils.isNotNull(this.disabledJson)){
            return !utils.isJurisdiction({ jurisdictionList: this.disabledJson,process:this.process})
        }
        return this._disabled;
    }
    //是否显示
    set disabled(disabled: boolean) {
        this._disabled = disabled;
    }
    /**
     * 组件权限配置
     */
    private _jurisdictionJson: any[] = [];
    //组件权限配置
    get jurisdictionJson(): any[] {
        return this._jurisdictionJson;
    }
    //组件权限配置
    set jurisdictionJson(jurisdictionJson: any[]) {
        this._jurisdictionJson = jurisdictionJson;
    }
    /**
     * 组件权限配置
     */
    private _disabledJson: any[] = [];
    //组件权限配置
    get disabledJson(): any[] {
        return this._disabledJson;
    }
    //组件权限配置
    set disabledJson(disabledJson: any[]) {
        this._disabledJson = disabledJson;
    }
    /**
     * 组件流程权限配置
     */
    private _process: { [key: string]: any} = {};
    //组件流程权限配置
    get process(): { [p: string]: any } {
        return this._process;
    }
    //组件流程权限配置
    set process(value: { [p: string]: any }) {
        this._process = value;
    }
    /**
     * 是否是复制的控件
     */
    private _copy: boolean = false;
    //是否是复制的控件
    get copy(): boolean {
        return this._copy;
    }
    //是否是复制的控件
    set copy(copy: boolean) {
        this._copy = copy;
    }
    /**
     * important css样式
     */
    private _model_style: any = null;
    //important css样式
    get model_style(): any {
        return this._model_style;
    }
    //important css样式
    set model_style(value: any) {
        this._model_style = value;
    }
    /**
     * important css样式
     */
    private _sortable: any = null;
    //important css样式
    get sortable(): any {
        return this._sortable;
    }
    //important css样式
    set sortable(value: any) {
        this._sortable = value;
    }



    private _el: any = null;                                  //el对象
    private _vueobj: any = null;                                  //vue对象
    private _width: string = "";                                  //组件宽度
    private _height: string = "";                                 //组件高度
    private _focus_elements: string = "";                                  //focus Dom对象
    private _disabledJsonMessage: string = "";                    //组件不可用描述
    private _life: any = null;                                  //组件生命周期
    private _lift_mounted: any = null;                                  //组件生命周期----初始化
    private _lift_page_enter: any = null;                                  //组件生命周期----进入新页面
    private _lift_page_leave: any = null;                                  //组件生命周期----离开页面
    private _lift_size: any = null;                                  //组件生命周期----页面大小变化
    private _lift_invisible: any = null;                                  //组件生命周期----可见转不可见
    private _lift_visible: any = null;                                   //组件生命周期----不可见转可见
    /**************方法****************/

    /**
     *
     *  初始化组件配置--框架自动调用
     * （不推荐手动使用）
     *
     *  @param { [key: string]: any} data 组件配置文档
     *
     */
    init(data:{ [key: string]: any}) {
        if(utils.isNull(data.system_id)){
            data._system_id = this.version+"_"+utils.randomChar(5)
        }
        if(utils.isNull(data._system_no)){
            data._system_no = this.version+"_"+utils.randomChar(5)
        }
        if(utils.isNull(data.version)){
            data.version=data.type
        }
        if(utils.isUndefined(data.value_default)){
            data.value_default = ""
        }
        for(let key in data){
            if(utils.isNotUndefined(this[key])&&utils.isNotUndefined(data[key])){
                this[key]=data[key]
            }else{
                utils.logWarn(this.type+"不存在属性或方法："+key)
            }
        }
    }
    /**
     * 国际化操作
     * @param test 需要国际化的文本
     */
    getI18N(test: string) {
        return utils.myI18n({name:test})
    }
    /**
     * 获取字面量
     */
    valueLiteral() {
        return this.value
    }
    /**
     * 获取监听回调
     */
    associated() {
    }
    /**
     * 当页面大小有变化是执行
     */
    associated_size() {
    }
    /**
     * 初始化值
     */
    initValue() {
        this.validate_string = "";
        this.value = this.value_default;
    }
    /**
     * 清空错误描述
     */
    initValidateString() {
        this.validate_string = "";
    }
    /**
     * ajax请求
     */
    initAjax(){
        if(utils.isNotNull(this.ajax_url)){
            let that = this
            let params:{ [key: string]: any} = {}
            for(let i=0;i<this.ajax_params.length;i++){
                if(this.ajax_params[i].type == "control"){
                    let content = utils.getPage().getComponents({system_id:this.ajax_params[i].system_id})
                    params[this.ajax_params[i].name]=content.value
                }else if(this.ajax_params[i].type == "addparam" && this.copy_number >= 0){
                    let content = utils.getPage().getComponents({system_id:this.ajax_params[i].system_id.slice(0,-9) + this.copy_number})
                    params[this.ajax_params[i].name]=content.value
                }else{
                    params[this.ajax_params[i].name]=this.ajax_params[i].value
                }
            }
            utils.my_post({apiName:this.ajax_url,
                params: params,
                ok: (json:any, dataAll:any) => {
                    that.setAjaxOK(json)
                },err: (json:any, dataAll:any) => {
                    that.setAjaxERR(json)
                },})
        }
    }
    /**
     * ajax请求成功回调
     */
    setAjaxOK(data :any){

    }
    /**
     * ajax请求失败回调
     */
    setAjaxERR(data :any){

    }
    /**
     * 初始化复制组件
     */
    initCopyComponents(){

    }
    /**
     * 获取格式化后的值
     */
    valueFormat(){
        return this.value
    }
    /**
     * 设置格式化前的值
     */
    initValueFormat(data:any){
        this.value = data
    }


}
