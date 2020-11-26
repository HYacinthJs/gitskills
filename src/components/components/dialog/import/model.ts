import {Dialog} from "@/components/class/Dialog";
import * as utils from "@/components/util/utils";
export class DialogImport extends Dialog {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let that = this
        data.value =[]
        data.value_default =[]
        let defaultModel = {
            componentDescription:"导入弹出框",
            title:'导入',
            tableName : 'content',
            msg :'是否确认导入？',
            dialog_width:"80%"
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        if(utils.isUndefined(data.toolBtn)){
            this.toolBtn = [
                {label:"取消",show:true,click:function(data:any){
                        that.show = false
                    }},
                {label:"确认",type:"primary",click:function(data:any){
                        let content = utils.getPage().getComponents({system_id:that.tableName})
                        let params = {}
                        if(that.valueModel=="批量"){
                            let json_batch = []
                            for(let i=0;i<content.selectRow.length;i++){
                                json_batch.push({id:content.selectRow[i][content.primaryKey]})
                            }
                            params = {
                                json_batch:JSON.stringify(json_batch)
                            }
                        }else if(that.valueModel=="单次"){
                            let json_batch = []
                            json_batch.push({id:content.selectRowOnly[content.primaryKey]})
                            params = {
                                json_batch:JSON.stringify(json_batch)
                            }
                        }else{
                            params= {
                                id:content.selectRowOnly[content.primaryKey]
                            }
                        }

                        utils.my_post({apiName:that.apiName_save,
                            params: params,
                            ok: (json:any, dataAll:any) => {
                                content.query()
                                that.show=false
                                for(let i=0;i<that.close_dialog.length;i++){
                                    let mydialog = utils.getPage().getComponents({system_id:that.close_dialog[i]})
                                    mydialog.show=false
                                }
                            }})
                }},
            ]
        }
    }
    /**************属性****************/
    private _msg: string = "";                            //组件描述
    private _apiName_save: string = "saveAll";                            //组件描述
    private _toolBtn: any[] = [];                                    //按钮
    private _close_dialog: string[] = [];                                    //按钮
    private _tableDataAll: [] = []
    private _fileList: [] = []
    private _fail_num:number= 0
    private _estimate_fail_num:number= 0
    private _success_num:number= 0
    private _page_rows:number= 10
    private _page_page:number= 1
    private _page_total:number= 0
    private _template_show:boolean= false
    private _btn_check:boolean= false
    private _btn_save:boolean= true
    private _initCheck:boolean= false
    private _template_name:string= ""
    private _template_url:string= ""
    private _sett:{ [key: string]: any}= {}
    private _setting:[]=[]
    private _dialog_width:string=""
    /**************方法****************/
    close(){
        this.initValue()
    }
    initValue() {
        this.validate_string = "";
        this.value = this.value_default;
        this.fileList = [];
        for(let key in this.components){
            if(key!="template"){
                this.components[key]=[]
            }
        }
    }
    add(){
        let newValue:any[] = utils.lodash.cloneDeep(this.value)
        newValue.push({})
        this.value=newValue
    }
    initCopyComponents(){
        for(let i=0;i<this.value.length;i++){
            this.copyComponents({number:i,value:this.value[i]})
        }
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].initAjax()
            }
        }
        //this.initAjax()
    }
    valueFormat(): any {
        let data:any[]=[]
        if(!this.components){
            return JSON.stringify(data)
        }
        for(let key in this.components){
            if(key!="template"){
                let val:{ [key: string]: any}={}
                for(let i=0;i<this.components[key].length;i++){
                    val[this.components[key][i].name]=super.components[key][i].valueFormat()
                }
                data.push(val)
            }
        }
        return JSON.stringify(data)
    }
    /**************存取器****************/
    get msg(): string {
        return this._msg;
    }
    set msg(msg: string) {
        this._msg = msg;
    }
    get apiName_save(): string {
        return this._apiName_save;
    }

    set apiName_save(value: string) {
        this._apiName_save = value;
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
    set toolBtn(toolBtn: any[]) {
        this._toolBtn = toolBtn;
    }

    get dialog_width(): string {
        return this._dialog_width;
    }

    set dialog_width(value: string) {
        this._dialog_width = value;
    }

    get close_dialog(): string[] {
        return this._close_dialog;
    }

    set close_dialog(value: string[]) {
        this._close_dialog = value;
    }

    get tableDataAll(): [] {
        return this._tableDataAll;
    }

    set tableDataAll(value: []) {
        this._tableDataAll = value;
    }

    get fileList(): [] {
        return this._fileList;
    }

    set fileList(value: []) {
        this._fileList = value;
    }

    get fail_num(): number {
        return this._fail_num;
    }

    set fail_num(value: number) {
        this._fail_num = value;
    }

    get estimate_fail_num(): number {
        return this._estimate_fail_num;
    }

    set estimate_fail_num(value: number) {
        this._estimate_fail_num = value;
    }

    get success_num(): number {
        return this._success_num;
    }

    set success_num(value: number) {
        this._success_num = value;
    }

    get template_show(): boolean {
        return this._template_show;
    }

    set template_show(value: boolean) {
        this._template_show = value;
    }

    get btn_check(): boolean {
        return this._btn_check;
    }

    set btn_check(value: boolean) {
        this._btn_check = value;
    }

    get btn_save(): boolean {
        return this._btn_save;
    }

    set btn_save(value: boolean) {
        this._btn_save = value;
    }

    get template_name(): string {
        return this._template_name;
    }

    set template_name(value: string) {
        this._template_name = value;
    }

    get template_url(): string {
        return this._template_url;
    }

    set template_url(value: string) {
        this._template_url = value;
    }

    get sett(): { [p: string]: any } {
        return this._sett;
    }

    set sett(value: { [p: string]: any }) {
        this._sett = value;
    }

    get setting(): [] {
        return this._setting;
    }

    set setting(value: []) {
        this._setting = value;
    }


    get page_rows(): number {
        return this._page_rows;
    }

    set page_rows(value: number) {
        this._page_rows = value;
    }

    get page_page(): number {
        return this._page_page;
    }

    set page_page(value: number) {
        this._page_page = value;
    }

    get page_total(): number {
        return this._page_total;
    }

    set page_total(value: number) {
        this._page_total = value;
    }

    get initCheck(): boolean {
        return this._initCheck;
    }

    set initCheck(value: boolean) {
        this._initCheck = value;
    }
}
