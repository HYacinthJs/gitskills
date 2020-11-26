import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyContentEdit extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"主体内容",
            title:"内容",
            system_id:'content',
            queryName:'query',
            breadcrumbsName:'breadcrumbs',
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        this.initTableControlShow()
        if(utils.isUndefined(data.tableBtn)){
            this.tableBtn =[
                {label:"编辑",jurisdictionJson: [{jurisdiction: [{name: "edit"}]}],show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit',title:"编辑"})
                        edit.query()
                    }},
                {label:"详情",jurisdictionJson: [{jurisdiction: [{name: "info"}]}],show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'info',title:"详情"})
                        edit.query()
                    }
                },
                {label:"删除",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],click:function(data:any){utils.getStore().openDialog({name:'delete',title:"删除"})}},
            ]
        }
        if(utils.isUndefined(data.toolBtn)){
            this.toolBtn = [
                {label:"添加",jurisdictionJson: [{jurisdiction: [{name: "add"}]}],show:true,type:"primary",click:function(data:any){
                        let edit =utils.getStore().openDialog({name:'edit',title:"添加"})
                        edit.queryBase()
                    }},
                {label:"删除",jurisdictionJson: [{jurisdiction: [{name: "deleteAll"}]}],type:"danger",click:function(data:any){utils.getStore().openDialog({name:'deleteAll',title:"删除"})}},
            ]
        }
    }
    //初始化表格要求的数据内容
    initTableControlShow() {
        let newTableControlShow: any[] = []
        if(utils.isNotNull(this.components.template)){
            for(let i=0;i<this.components.template.length;i++){
                if(utils.isNotNull(this.components.template[i].components)){
                    for(let l=0;l<this.components.template[i].components.content.length;l++){
                        if(utils.isNotNull(this.components.template[i].components.content[l].components)){
                            for(let k=0;k<this.components.template[i].components.template[l].components.content.length;k++){
                                newTableControlShow.push(this.components.template[i].components.content[l].components.content[k].name)
                            }
                        }else{
                            newTableControlShow.push(this.components.template[i].components.content[l].name)
                        }
                    }
                }else{
                    newTableControlShow.push(this.components.template[i].name)
                }
            }
        }
        newTableControlShow.push(this.primaryKey)
        this._tableControlShow = newTableControlShow
    }
    private _numbershow: boolean = true;                                    //是否显示下标栏
    private _selectionshow: boolean = true;                                    //是否显示多选框栏
    private _utilshow: boolean = true;                                    //是否显示按钮栏
    private _details_show: boolean = false;                                    //是否显示按钮栏
    private _summaryShow: boolean = false;                                    //是否显示按钮栏
    private _operation_width: string = "200";                                    //按钮栏宽度
    private _tableBtn: any[] = [];                                   //按钮
    private _toolBtn: any[] = [];                                    //按钮
    private _tableControlShow: any[] = [];                                    //按钮
    private _orderBy: string = "";                                    //排序
    private _rows: number = 10;                                    //一页几行
    private _currentPage: number = 1;                                    //第几页
    private _total: number = 1;                                    //共几条数据
    private _selectRowOnly: any = null;                                    //共几条数据
    private _selectRowOnlyId: any = null;                                    //共几条数据
    private _selectRow: any = null;                                    //共几条数据
    private _primaryKey: string = "id";                                    //主键
    private _apiNameQuery: string = "query";                                    //主键
    private _queryName: string = "";                            //组件描述
    private _select_color: string = "#409EFF";                            //选中颜色

    /**************方法****************/
    initValue() {
        this.system_no =  this.version+"_"+utils.randomChar(5);
        this.validate_string = "";
        this.value = this.value_default;
        for(let key in this.components){
            if(key!="template"){
                this.components[key]=[]
            }
        }
    }
    add(){
        let newValue:any[] = JSON.parse(this.valueFormat())
        if(utils.isNull(newValue)){
            newValue = utils.lodash.cloneDeep(this.value)
        }
        newValue.push({})
        this.value=newValue
    }
    initCopyComponents(){
        let old = this.components["template"]
        this.setComponents({"template":old})
        for(let i=0;i<this.value.length;i++){
            this.copyComponents({system_no:this.system_no,number:i,value:this.value[i]})
        }
        for(let key in this.components){
            for(let i=0;i<this.components[key].length;i++){
                this.components[key][i].initAjax()
            }
        }
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
    getParams(){
        let param :{ [key: string]: any}={}
        let query = utils.getPage().getComponents({system_id:this.queryName})
        if(utils.isNotNull(query)){
            param=query.getEditValue()
        }
        let breadcrumbs = utils.getPage().getComponents({system_id:this.breadcrumbsName})
        param['page']=this.currentPage
        param['rows']=this.rows
        param['tableControlShow']=JSON.stringify(this.tableControlShow)
        param['fuzzy_query']=breadcrumbs.queryValue
        return param
    }
    query2() {
        this.currentPage=1
        this.query()
    }
    query() {
        let that = this
        let params = this.getParams()
        utils.my_post({apiName:this.apiNameQuery, params: params,
            ok: (json:any, dataAll:any) => {
                that.value=json.list
                that.total=json.totalRow
                that.rows=json.pageSize
                that.currentPage=json.pageNumber
            },
            err:(json:any, dataAll:any) => {
                that.value=json.list
                that.total=json.totalRow
                that.rows=json.pageSize
                that.currentPage=json.pageNumber
            }
        })
    }
    cell_style({row, rowIndex}:any) {

    }
    row_style({row, rowIndex,that}:any) {
        if (row[this.primaryKey]==that.selectRowOnlyId) {
            return   {'background-color':that.select_color};
        }
        return {'background-color':'#fff'};
    }
    rowClick(data:any) {

    }
    //合计方法
    summaryData(param: any) {
        const { columns, data } = param
        const sums:{ [key: string]: any} = {}
        columns.forEach((column:any, index:number) => {
            if (index === 0) {
                sums[index] = "合计"
                return
            }
            if (index === 1) {
                sums[index] = ""
                return
            }
            if (index === columns.length - 1) {
                sums[index] = ""
                return
            }
            const values = data.map((item:any) => Number(item[column.property]))
            if (!values.every((value:any) => isNaN(value))) {
                sums[index] = values.reduce((prev:any, curr:any) => {
                    const value = Number(curr)
                    if (!isNaN(value)) {
                        return prev + curr
                    }
                    return prev
                }, 0)
            } else {
                sums[index] = "非数字"
            }
        })
        return sums
    }
    /**************存取器****************/
    get selectionshow(): boolean {
        return this._selectionshow;
    }
    set selectionshow(selectionshow: boolean) {
        this._selectionshow = selectionshow;
    }
    get rows(): number {
        return this._rows;
    }
    set rows(rows: number) {
        this._rows = rows;
    }
    get primaryKey(): string {
        return this._primaryKey;
    }
    set primaryKey(primaryKey: string) {
        this._primaryKey = primaryKey;
    }
    get currentPage(): number {
        return this._currentPage;
    }
    set currentPage(currentPage: number) {
        this._currentPage = currentPage;
    }
    get total(): number {
        return this._total;
    }
    set total(total: number) {
        this._total = total;
    }
    get selectRowOnly(): any {
        return this._selectRowOnly;
    }
    set selectRowOnly(selectRowOnly: any) {
        this._selectRowOnly = selectRowOnly;
        utils.getStore().addParameter({names: [ this.name,"selectRowOnly"], value: selectRowOnly})
        if(utils.isNotNull(selectRowOnly)){
            this.selectRowOnlyId = selectRowOnly[this.primaryKey];
        }
    }
    get selectRowOnlyId(): any {
        return this._selectRowOnlyId;
    }
    set selectRowOnlyId(selectRowOnlyId: any) {
        this._selectRowOnlyId = selectRowOnlyId;
    }
    get tableControlShow(): any[] {
        return this._tableControlShow;
    }
    set tableControlShow(tableControlShow: any[]) {
        this._tableControlShow = tableControlShow;
    }
    get selectRow(): any {
        return this._selectRow;
    }
    set selectRow(selectRow: any) {
        this._selectRow = selectRow;
        utils.getStore().addParameter({names: [ this.name,"selectRow"], value: selectRow})
    }
    get utilshow(): boolean {
        return this._utilshow;
    }
    set utilshow(utilshow: boolean) {
        this._utilshow = utilshow;
    }
    get numbershow(): boolean {
        return this._numbershow;
    }
    set numbershow(numbershow: boolean) {
        this._numbershow = numbershow;
    }
    get orderBy(): string {
        return this._orderBy;
    }
    set orderBy(orderBy: string) {
        this._orderBy = orderBy;
    }
    get tableBtn(): any[] {
        let newTableBtn:any[] =[]
        if(utils.isNotNull(this._tableBtn)){
            for(let i=0;i<this._tableBtn.length;i++){
                newTableBtn.push(this._tableBtn[i])
            }
        }
        return newTableBtn;
    }
    set tableBtn(tableBtn: any[]) {
            this._tableBtn = tableBtn;

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
    get summaryShow(): boolean {
        return this._summaryShow;
    }
    set summaryShow(summaryShow: boolean) {
        this._summaryShow = summaryShow;
    }
    get operation_width(): string {
        return this._operation_width;
    }
    set operation_width(operation_width: string) {
        this._operation_width = operation_width;
    }

    get apiNameQuery(): string {
        return this._apiNameQuery;
    }

    set apiNameQuery(value: string) {
        this._apiNameQuery = value;
    }
    get queryName(): string {
        return this._queryName;
    }
    set queryName(value :string) {
        this._queryName = value;
    }

    get details_show(): boolean {
        return this._details_show;
    }

    set details_show(value: boolean) {
        this._details_show = value;
    }

    get select_color(): string {
        return this._select_color;
    }

    set select_color(value: string) {
        this._select_color = value;
    }
}
