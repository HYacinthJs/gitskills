import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyEdit extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let that = this
        let defaultModel = {
            componentDescription:"编辑组件",
            title:"编辑",
            system_id:"content",
            queryName:"query",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        if(utils.isUndefined(data.toolBtn)){
            this.toolBtn = [
                {label:"保存",type:"primary",click:function(data:any){that.save()}},
            ]
        }
    }
    private _activeName: string = "";                                     //当前分页
    private _apiName_save: string = "save";                                     //当前分页
    private _apiName_queryById: string = "queryById";                                     //当前分页
    private _apiName_queryBase: string = "queryBase";                                     //当前分页
    private _toolBtn: any[] = [];                                    //按钮
    private _queryName: string = "";                            //组件描述
    /**************方法****************/

    getParams(){
        let param :{ [key: string]: any}={}
        let query = utils.getPage().getComponents({system_id:this.queryName})
        if(utils.isNotNull(query)){
            param=query.getEditValue()
        }
        return param
    }
    query2() {
        this.query()
    }
    query() {
        let that = this
        let params = this.getParams()
        utils.my_post({apiName:this.apiName_queryById, params: params,
            ok: (json:any, dataAll:any) => {
                that.setEditValue(json)
            },
            err:(json:any, dataAll:any) => {
                that.initValue()
            }
        })
    }
    initAjax(){
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].initAjax()
            }
        }
    }
    initValue() {
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].initValue()
            }
        }
    }
    save(){
        let that = this
        let callback = function (){
            that.saveByNoValidator()
        }
        utils.validator({callback,system_id:this.system_id})
    }
    saveByNoValidator(){
        let that = this
        let content = utils.getPage().getComponents({system_id:this.tableName})
        let params = this.getEditValue()
        utils.my_post({apiName:this.apiName_save,
            params: params,
            ok: (json:any, dataAll:any) => {
                content.query()
            }})
    }
    //设置校验提示信息
    setValidateString(data:any[]) {
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].setValidateString(data);
            }
        }
    }

    //获取值
    setEditValue(json:any) {
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
                    this.components[key][i].setEditValue(json[fromName][copyIndex[fromName]])
                }else{
                    this.components[key][i].setEditValue(json)
                }
            }
        }
    }
    getEditValue() {
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
    //获取值
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

    get activeName(): string {
        return this._activeName;
    }
    set activeName(activeName: string) {
        this._activeName = activeName;
    }

    get apiName_save(): string {
        return this._apiName_save;
    }

    set apiName_save(value: string) {
        this._apiName_save = value;
    }

    get apiName_queryById(): string {
        return this._apiName_queryById;
    }

    set apiName_queryById(value: string) {
        this._apiName_queryById = value;
    }

    get apiName_queryBase(): string {
        return this._apiName_queryBase;
    }

    set apiName_queryBase(value: string) {
        this._apiName_queryBase = value;
    }

    get toolBtn(): any[] {
        let newToolBtn:any[] =[]
        if(utils.isNotNull(this._toolBtn)) {
            for (let i = 0; i < this._toolBtn.length; i++) {
                newToolBtn.push(this._toolBtn[i])
            }
        }
        return newToolBtn;
    }

    set toolBtn(value: any[]) {
        this._toolBtn = value;
    }

    get queryName(): string {
        return this._queryName;
    }

    set queryName(value: string) {
        this._queryName = value;
    }

}
