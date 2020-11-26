import {
    Layout
} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyTreeContent extends Layout {

    constructor(data: {
        [key: string]: any
    }) { //构造函数
        super();
        let defaultModel = {
            componentDescription: "主体内容有树",
            value_default: [],
            title: '内容',
            system_id: 'content',
            primaryKey: 'id',
            operation_width: '120'
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        if (utils.isNull(data.tableBtn)) {
            this.tableBtn = [{
                    label: "编辑",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'edit',
                            title: "编辑"
                        })
                        edit.query()
                    }
                },
                {
                    label: "删除",
                    click: function (data: any) {
                        utils.getStore().openDialog({
                            name: 'delete',
                            title: "删除"
                        })
                    }
                },
            ]
        }
        if (utils.isNull(data.toolBtn)) {
            this.toolBtn = [{
                    label: "添加",
                    type: "primary",
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'edit',
                            title: "添加"
                        })
                        edit.queryBase()
                    }
                },
                {
                    label: "删除",
                    type: "danger",
                    click: function (data: any) {
                        utils.getStore().openDialog({
                            name: 'deleteAll',
                            title: "市场部"
                        })
                    }
                },
            ]
        }
    }

    private _numbershow: boolean = true; //是否显示下标栏
    private _selectionshow: boolean = true; //是否显示多选框栏
    private _utilshow: boolean = true; //是否显示按钮栏
    private _summaryShow: boolean = false; //是否显示按钮栏
    private _operation_width: any = true; //按钮栏宽度
    private _tableBtn: any[] = []; //按钮
    private _toolBtn: any[] = []; //按钮
    private _tree: any[] = []; //按钮
    private _tree_id: number = 0; //按钮
    private _defaultProps: {} = {
        children: 'children',
        label: 'label'

    }
    private _orderBy: string = ""; //排序
    private _rows: number = 10; //一页几行
    private _currentPage: number = 1; //第几页
    private _total: number = 1; //共几条数据
    private _selectRowOnly: any = null; //共几条数据
    private _selectRow: any = null; //共几条数据
    private _primaryKey: string = ""; //主键
    /**************方法****************/
    getParams() {
        let query = utils.getPage().getComponents({
            system_id: "query"
        })
        let param = query.getEditValue()
        param['page'] = this.currentPage
        param['rows'] = this.rows
        return param
    }
    query2() {
        this.currentPage = 1
        this.query()
    }
    query() {
        this.queryTree();
        let that = this
        let params = this.getParams()

        utils.my_post({
            apiName: "query",
            params: params,
            ok: (json: any, dataAll: any) => {
                that.value = json.list
                that.total = json.totalRow
                that.rows = json.pageSize
                that.currentPage = json.pageNumber

            },
            err: (json: any, dataAll: any) => {
                that.value = json.list
                that.total = json.totalRow
                that.rows = json.pageSize
                that.currentPage = json.pageNumber
            }
        })
    }
    queryByPid() {
        let that = this
        let params = this.getParams()
        if (this.tree_id && this.tree_id > 0)
            params["pid"] = this.tree_id
        utils.my_post({
            apiName: "query",
            params: params,
            ok: (json: any, dataAll: any) => {
                that.value = json.list
                that.total = json.totalRow
                that.rows = json.pageSize
                that.currentPage = json.pageNumber

            },
            err: (json: any, dataAll: any) => {
                that.value = json.list
                that.total = json.totalRow
                that.rows = json.pageSize
                that.currentPage = json.pageNumber
            }
        })
    }
    queryTree() {
        let that = this
        let params = {}

        utils.my_post({
            apiName: "queryTree",
            params: params,
            ok: (json: any, dataAll: any) => {

                that.tree = json
            }
        })
    }
    cell_style() {

    }
    row_style() {

    }
    //合计方法
    summaryData(param: any) {
        const {
            columns,
            data
        } = param
        const sums: {
            [key: string]: any
        } = {}
        columns.forEach((column: any, index: number) => {
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
            const values = data.map((item: any) => Number(item[column.property]))
            if (!values.every((value: any) => isNaN(value))) {
                sums[index] = values.reduce((prev: any, curr: any) => {
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
    get tree_id(): number {
        return this._tree_id;
    }

    set tree_id(value: number) {
        this._tree_id = value;
    }
    get total(): number {
        return this._total;
    }
    set total(total: number) {
        this._total = total;
    }
    get defaultProps(): {} {
        return this._defaultProps;
    }
    set defaultProps(defaultProps: {}) {
        this._defaultProps = defaultProps;
    }
    get tree(): any[] {
        return this._tree;
    }
    set tree(tree: any[]) {
        this._tree = tree;
    }

    get selectRowOnly(): any {
        return this._selectRowOnly;
    }
    set selectRowOnly(selectRowOnly: any) {
        this._selectRowOnly = selectRowOnly;
        utils.getStore().addParameter({
            names: [this.name, "selectRowOnly"],
            value: selectRowOnly
        })
    }
    get selectRow(): any {
        return this._selectRow;
    }
    set selectRow(selectRow: any) {
        this._selectRow = selectRow;
        utils.getStore().addParameter({
            names: [this.name, "selectRow"],
            value: selectRow
        })
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
        let newTableBtn: any[] = []
        for (let i = 0; i < this._tableBtn.length; i++) {
            newTableBtn.push(this._tableBtn[i])
        }
        return newTableBtn;
    }
    set tableBtn(tableBtn: any[]) {
        this._tableBtn = tableBtn;
    }
    get toolBtn(): any[] {
        let newToolBtn: any[] = []
        for (let i = 0; i < this._toolBtn.length; i++) {
            newToolBtn.push(this._toolBtn[i])
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
    get operation_width(): any {
        return this._operation_width;
    }
    set operation_width(operation_width: any) {
        this._operation_width = operation_width;
    }

}