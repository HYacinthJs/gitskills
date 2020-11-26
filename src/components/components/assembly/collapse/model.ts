import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyCollapse extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"折叠面板",
            name:"from",
            label:'基础',
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }

    /**
     * 展开项title
     */
    private _col_title: string = "基础" ;

    get col_title(): string {
        return this._col_title;
    }

    set col_title(value: string) {
        this._col_title = value;
    }

    /**
     * 是否展开
     */
    private _spread: boolean = true ;
    //是否展开
    get spread(): boolean {
        return this._spread;
    }
    //是否展开
    set spread(value: boolean) {
        this._spread = value;
    }
    /**
     * 当前展开的面板
     */
    private _activeNames:any[] = [];
    //当前展开的面板
    get activeNames(): any[] {
        return this._activeNames;
    }
    //当前展开的面板
    set activeNames(value: any[]) {
        this._activeNames = value;
    }

    /**
     * 设置校验提示信息
     * @param data
     */
    setValidateString(data:any[]) {
        let newActiveName =""
        let newActiveNames = utils.lodash.cloneDeep(this.activeNames)
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                let name = this.components[key][i].setValidateString(data);
                if(utils.isNotNull(name)){
                    newActiveName = this.name
                    newActiveNames.push(i)
                }
            }
        }
        newActiveNames = utils.lodash.uniq(newActiveNames)
        this.activeNames = newActiveNames
        return newActiveName
    }
    /**
     * 获取数据校验参数
     */
    getRulesValue() {
        let returnData:{ [key: string]: any} = {}
        let myDate :{ [key: string]: any} = {}
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                let fromName = this.components[key][i].name;
                if (fromName.indexOf("__copy__") !== -1) {
                    let str = fromName.split("__copy__")
                    fromName = str[0]
                }
                let fromData = this.components[key][i].getRulesValue()
                if(this.components[key][i].copy){
                    if(utils.isNull(myDate[fromName])){
                        myDate[fromName]=[]
                    }
                    myDate[fromName].push(fromData)
                }else{
                    for(let fromKey in fromData){
                        returnData[fromKey] = fromData[fromKey]
                    }
                }
            }
        }
        for(let fromKey in myDate){
            returnData[fromKey] = JSON.stringify(myDate[fromKey])
        }
        return returnData
    }
    /**
     * 设置子组件的弹出框组件id为当前弹出框id
     * @param data
     */
    initComponentsDialogName(data:any) {
        this.dialog_system_id = data.system_id
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].initComponentsDialogName(data)
            }
        }
    }

    /**
     * 获取组件值
     * @param json
     */
    setFromValue(json:any) {
        let copyIndex :{ [key: string]: any}= {}
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                if (this.components[key][i].copy) {
                    let fromName = this.components[key][i].name;
                    if (fromName.indexOf("__copy__") !== -1) {
                        let str = fromName.split("__copy__")
                        fromName = str[0]
                    }
                    if(utils.isUndefined(copyIndex[fromName])){
                        copyIndex[fromName]=0
                    }else{
                        copyIndex[fromName] = copyIndex[fromName]+1
                    }
                    this.components[key][i].setFromValue(json[fromName][copyIndex[fromName]])
                }else{
                    this.components[key][i].setFromValue(json)
                    // let bool = utils.isJurisdiction({jurisdictionList: this.components[key][i].jurisdictionJson})
                    // if(bool){
                    //     this._col_title = this.components[key][i].label
                    // }else {
                    //     this._col_title = ""
                    // }
                }
            }
        }
    }
    /**
     * 获取组件值
     */
    setEditValue() {
        let returnData:{ [key: string]: any} = {}
        let myDate :{ [key: string]: any} = {}
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                let fromName = this.components[key][i].name;
                if (fromName.indexOf("__copy__") !== -1) {
                    let str = fromName.split("__copy__")
                    fromName = str[0]
                }
                let fromData = this.components[key][i].setEditValue()
                if(this.components[key][i].copy){
                    if(utils.isNull(myDate[fromName])){
                        myDate[fromName]=[]
                    }
                    myDate[fromName].push(fromData)
                }else{
                    for(let fromKey in fromData){
                        returnData[fromKey] = fromData[fromKey]
                    }
                }
            }
        }
        for(let fromKey in myDate){
            returnData[fromKey] = JSON.stringify(myDate[fromKey])
        }
        return returnData
    }
    /**
     * 初始化组件值
     */
    initValue() {
        let newActiveNames :any[] = []
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].initValue()
                newActiveNames.push(i)
            }
        }
        if(this.spread&&utils.isNotNull(newActiveNames)){
            this.activeNames =newActiveNames
        }
    }

    /**
     * 异步初始化
     */
    initAjax() {
        //不进行异步请求的组件（临时做法让如果有多个组件参数会有问题）
        let no = []
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                for(let l=0;l<this.components[key][i].associated_notice.length;l++){
                    no.push(this.components[key][i].associated_notice[l])
                }
            }
        }

        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                let bool=true
                for(let l=0;l<no.length;l++){
                    if(no[l]==this.components[key][i].system_id){
                        bool=false
                    }
                }
                if(bool){
                    this.components[key][i].initAjax()
                }
            }
        }
    }




}
