import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
/**
 * 主体内容
 */
export class AssemblyContent extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"主体内容",
            value_default:[],
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
                {label:"删除",jurisdictionJson: [{jurisdiction: [{name: "delete"}]}],type:"danger",click:function(data:any){utils.getStore().openDialog({name:'deleteAll',title:"删除"})}},
            ]
        }
    }
    //初始化表格要求的数据内容
    initTableControlShow() {
        let newTableControlShow: any[] = []
        if(utils.isNotNull(this.components.content)){
            for(let i=0;i<this.components.content.length;i++){
                if(utils.isNotNull(this.components.content[i].components)){
                    for(let l=0;l<this.components.content[i].components.content.length;l++){
                        if(utils.isNotNull(this.components.content[i].components.content[l].components)){
                            for(let k=0;k<this.components.content[i].components.content[l].components.content.length;k++){
                                newTableControlShow.push(this.components.content[i].components.content[l].components.content[k].name)
                            }
                        }else{
                            newTableControlShow.push(this.components.content[i].components.content[l].name)
                        }
                    }
                }else{
                    newTableControlShow.push(this.components.content[i].name)
                }
            }
        }
        newTableControlShow.push(this.primaryKey)
        this._tableControlShow = newTableControlShow
    }



    /**
     * 是否显示序号栏
     */
    private _sort_able: boolean = false;                                    //是否显示下标栏
    //是否显示序号栏

    get sort_able(): boolean {
        return this._sort_able;
    }

    set sort_able(value: boolean) {
        this._sort_able = value;
    }

    /**
     * 是否显示序号栏
     */
    private _numbershow: boolean = true;                                    //是否显示下标栏
    //是否显示序号栏
    get numbershow(): boolean {
        return this._numbershow;
    }
    //是否显示序号栏
    set numbershow(value: boolean) {
        this._numbershow = value;
    }

    /**
     * 是否显示多选框栏
     */
    private _selectionshow: boolean = true;
    //是否显示多选框栏
    get selectionshow(): boolean {
        return this._selectionshow;
    }
    //是否显示多选框栏
    set selectionshow(selectionshow: boolean) {
        this._selectionshow = selectionshow;
    }
    //是否显示操作栏
    private _utilshow: boolean = true;
    //是否显示操作栏
    get utilshow(): boolean {
        return this._utilshow;
    }
    //是否显示操作栏
    set utilshow(utilshow: boolean) {
        this._utilshow = utilshow;
    }

    /**
     * 操作栏宽度
     */
    private _operation_width: string = "200";
    //操作栏宽度
    get operation_width(): string {
        return this._operation_width;
    }
    //操作栏宽度
    set operation_width(operation_width: string) {
        this._operation_width = operation_width;
    }
    /**
     * 是否显示更多详情
     */
    private _details_show: boolean = false;
    //是否显示更多详情
    get details_show(): boolean {
        return this._details_show;
    }
    //是否显示更多详情
    set details_show(value: boolean) {
        this._details_show = value;
    }
    /**
     * 是否显示更多详情
     */
    private _details_info: string = "details_info";
    //是否显示更多详情
    get details_info(): string {
        return this._details_info;
    }
    //是否显示更多详情
    set details_info(value: string) {
        this._details_info = value;
    }

    /**
     * 是否显示统计行
     */
    private _summaryShow: boolean = false;
    //是否显示统计行
    get summaryShow(): boolean {
        return this._summaryShow;
    }
    //是否显示统计行
    set summaryShow(summaryShow: boolean) {
        this._summaryShow = summaryShow;
    }

    /**
     * 表格行按钮
     */
    private _tableBtn: any[] = [];
    //表格行按钮
    get tableBtn(): any[] {
        let newTableBtn:any[] =[]
        if(utils.isNotNull(this._tableBtn)){
            for(let i=0;i<this._tableBtn.length;i++){
                newTableBtn.push(this._tableBtn[i])
            }
        }
        return newTableBtn;
    }
    //表格行按钮
    set tableBtn(tableBtn: any[]) {
        this._tableBtn = tableBtn;
    }

    /**
     * 工具栏按钮
     */
    private _toolBtn: any[] = [];
    //工具栏按钮
    get toolBtn(): any[] {
        let newToolBtn:any[] =[]
        if(utils.isNotNull(this._toolBtn)) {
            for (let i = 0; i < this._toolBtn.length; i++) {
                newToolBtn.push(this._toolBtn[i])
            }
        }
        return newToolBtn;
    }
    //工具栏按钮
    set toolBtn(toolBtn: any[]) {
        this._toolBtn = toolBtn;
    }

    /**
     * 表格要显示的字段
     */
    private _tableControlShow: any[] = [];
    //表格要显示的字段
    get tableControlShow(): any[] {
        return this._tableControlShow;
    }
    //表格要显示的字段
    set tableControlShow(tableControlShow: any[]) {
        this._tableControlShow = tableControlShow;
    }
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
    private _select_color: string = "#d9ecff";                            //选中颜色
    private _backStyle: Boolean = true;

    /**************方法****************/
    getParams(){
        let param :{ [key: string]: any}={}
        let query = utils.getPage().getComponents({system_id:this.queryName})
        if(utils.isNotNull(query)){
            param=query.getEditValue()
        }

        param['page']=this.currentPage
        param['rows']=this.rows
        param['tableControlShow']=JSON.stringify(this.tableControlShow)
        let breadcrumbs = utils.getPage().getComponents({system_id:this.breadcrumbsName})
        if(breadcrumbs && breadcrumbs.isQuery){
            param['fuzzy_query']=breadcrumbs.queryValue
        }
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
    cell_style({ row, column, rowIndex, columnIndex }:any) {

    }
    row_style({row, rowIndex,that}:any) {
        if (row[this.primaryKey]==that.selectRowOnlyId && this.backStyle) {
            return   {'background-color':that.select_color};
        }
        return {'background-color':'#fff'};
    }
    rowClick(data:any) {


    }
    cellClick (row:any, column:any, cell:any, event:any) {
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

    get rows(): number {
        return this._rows;
    }
    set rows(rows: number) {
        this._rows = rows;
    }

    /**
     * 主键
     */
    get primaryKey(): string {
        return this._primaryKey;
    }
    set primaryKey(primaryKey: string) {
        this._primaryKey = primaryKey;
    }

    get backStyle(): Boolean {
        return this._backStyle;
    }
    set backStyle(value: Boolean) {
        this._backStyle = value;
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

    get selectRow(): any {
        return this._selectRow;
    }
    set selectRow(selectRow: any) {
        this._selectRow = selectRow;
        utils.getStore().addParameter({names: [ this.name,"selectRow"], value: selectRow})
    }

    get orderBy(): string {
        return this._orderBy;
    }
    set orderBy(orderBy: string) {
        this._orderBy = orderBy;
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



    get select_color(): string {
        return this._select_color;
    }

    set select_color(value: string) {
        this._select_color = value;
    }

}
