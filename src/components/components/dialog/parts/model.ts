import {
    Dialog
} from "@/components/class/Dialog";
import * as utils from "@/components/util/utils";

export class DialogParts extends Dialog {
    constructor(data: {
        [key: string]: any
    }) { //构造函数
        super();
        let defaultModel = {
            componentDescription: "表格弹出框",
            title: '编辑',
            tableName: 'dialogContent',
            queryName: 'dialogQuery',
            dialog_width: '660px',
            breadcrumbsName: 'breadcrumbs',
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        this.initTableControlShow()

        if (utils.isUndefined(data.tableBtn)) {
            this.tableBtn = [{
                    label: "编辑",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "edit"
                        }]
                    }],
                    show: true,
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'edit',
                            title: "编辑"
                        })
                        edit.query()
                    }
                },
                {
                    label: "详情",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "info"
                        }]
                    }],
                    show: true,
                    click: function (data: any) {
                        let edit = utils.getStore().openDialog({
                            name: 'info',
                            title: "详情"
                        })
                        edit.query()
                    }
                },
                {
                    label: "删除",
                    jurisdictionJson: [{
                        jurisdiction: [{
                            name: "delete"
                        }]
                    }],
                    click: function (data: any) {
                        utils.getStore().openDialog({
                            name: 'delete',
                            title: "删除"
                        })
                    }
                },
            ]
        }
        if (utils.isUndefined(data.toolBtn)) {
            let that = this
            this.toolBtn = [{
                label: that.save_label,
                type: "primary",
                click: function (data: any) {
                    that.save()
                }
            }, ]
        }
    }
    //初始化表格要求的数据内容
    initTableControlShow() {
        let newTableControlShow: any[] = []
        if (utils.isNotNull(this.components.content)) {
            for (let i = 0; i < this.components.content.length; i++) {
                if (utils.isNotNull(this.components.content[i].components)) {
                    for (let l = 0; l < this.components.content[i].components.content.length; l++) {
                        if (utils.isNotNull(this.components.content[i].components.content[l].components)) {
                            for (let k = 0; k < this.components.content[i].components.content[l].components.content.length; k++) {
                                newTableControlShow.push(this.components.content[i].components.content[l].components.content[k].name)
                            }
                        } else {
                            newTableControlShow.push(this.components.content[i].components.content[l].name)
                        }
                    }
                } else {
                    newTableControlShow.push(this.components.content[i].name)
                }
            }
        }
        newTableControlShow.push(this.primaryKey)
        this._tableControlShow = newTableControlShow
    }

    private _activeName: string = ""; //当前分页
    private _dialog_width: string = ""; //当前分页
    private _apiName_save: string = "save"; //当前分页
    private _apiName_save_url: string = ""; //当前分页
    private _apiName_queryById: string = "queryById"; //当前分页
    private _apiName_queryBase: string = "queryBase"; //当前分页
    private _toolBtn: any[] = []; //按钮
    private _close_dialog: string[] = []; //按钮
    private _save_close: boolean = true; //按钮
    private _by_id: boolean = true; //按钮
    private _by_id_type: boolean = false; //按钮
    private _save_label: string = "保存"; //按钮
    private _system_save_id: string = "system_save_id"; //按钮

    private _numbershow: boolean = true; //是否显示序号列
    private _selectionshow: boolean = true; //是否显示选择框列
    private _utilshow: boolean = true; //是否显示操作列
    private _operation_width: string = "200";//操作列宽度
    private _details_show: boolean = false; //是否显示更多详情
    private _details_info: string = "details_info";
    private _summaryShow: boolean = false; //是否显示统计行
    private _tableControlShow: any[] = []; //表格显示的字段
    private _tableBtn: any[] = []; //操作按钮
    private _orderBy: string = ""; //排序
    private _rows: number = 10; //一页几行
    private _currentPage: number = 1; //第几页
    private _total: number = 1; //共几条数据
    private _selectRowOnly: any = null; //共几条数据
    private _selectRowOnlyId: any = null; //共几条数据
    private _selectRow: any = null; //共几条数据
    private _primaryKey: string = "id"; //主键
    private _apiNameQuery: string = "query"; //主键
    private _queryName: string = ""; //组件描述
    private _tableDialog: string = "dialogCloud"; //组件描述
    private _select_color: string = "#d9ecff"; //选中颜色
    private _backStyle: Boolean = true;

    close() {
        this.initValue()
    }

    open() {
        let myName = "";
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                if (myName == "") {
                    myName = this.components[key][i].name;
                }
            }
        }
        this.activeName = myName
    }

    save() {
        let that = this
        let callback = function () {
            that.saveByNoValidator()
        }
        this.initValidateString()
        utils.validator({
            callback,
            system_id: this.system_id
        })
    }

    saveByNoValidator() {
        let params = this.getEditValue()
        utils.my_post({
            apiName: this.apiName_save,
            url: this.apiName_save_url,
            params: params,
            ok: (json: any, dataAll: any) => {
                    this.save_callback(json, dataAll)
                let id = utils.getPage().getComponents({
                    system_id: this.system_save_id
                })
                if (utils.isNotNull(id) && utils.isNotNull(json)) {
                    id.value = json.id
                }

                if (this.save_close) {
                    this.show = false
                    for (let i = 0; i < this.close_dialog.length; i++) {
                        let mydialog = utils.getPage().getComponents({
                            system_id: this.close_dialog[i]
                        })
                        mydialog.show = false
                    }
                }
            }
        })
    }

    save_callback(json: any, dataAll: any) {
        let content = utils.getPage().getComponents({
            system_id: this.tableName
        })
        content.query()
    }
    getParams() {
        let param: {
            [key: string]: any
        } = {}
        let query = utils.getPage().getComponents({
            system_id: this.queryName
        })
        if (utils.isNotNull(query)) {
            console.log(query)
            for(let key in query.components){
                for(let i=0;i<query.components[key].length;i++){
                    param[query.components[key][i].name] = query.components[key][i].value
                }
            }
            // param = query.getEditValue()
        }
        let content = utils.getPage().getComponents({
            system_id: this.tableName
        })
        if (utils.isNotNull(content.selectRow)) {
            console.log(content)
            param['default_id_'] = content.selectRowOnly[content.primaryKey]
        }

        param['page'] = this.currentPage
        param['rows'] = this.rows
        param['tableControlShow'] = JSON.stringify(this.tableControlShow)
        let breadcrumbs = utils.getPage().getComponents({
            system_id: this.breadcrumbsName
        })
        if (breadcrumbs && breadcrumbs.isQuery) {
            param['fuzzy_query'] = breadcrumbs.queryValue
        }
        return param
    }

    query() {
        this.initValue()
        this.initAjax()
        let that = this
        let params = this.getParams()
        if (that.by_id) {
            let content = utils.getPage().getComponents({
                system_id: this.tableDialog
            })
            console.log(content)
            utils.my_post({
                apiName: this.apiName_queryById,
                params: params,
                ok: (json: any, dataAll: any) => {
                    content.value = json.list
                    content.total = json.totalRow
                    content.rows = json.pageSize
                    content.currentPage = json.pageNumber
                },
                err: (json: any, dataAll: any) => {
                    content.value = json.list
                    content.total = json.totalRow
                    content.rows = json.pageSize
                    content.currentPage = json.pageNumber
                }
            })
        }
    }
    query2() {
        this.currentPage = 1
        this.query()
    }
    selected(data:any){
        console.log(data)
        let content = utils.getPage().getComponents({
            system_id: this.tableName
        })
        content.addData(data.row)
    }

    //获取值
    setEditValue(json: any) {
        let copyIndex: {
            [key: string]: any
        } = {}
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                if (this.components[key][i].copy) {
                    let fromName = this.components[key][i].name;
                    if (fromName.indexOf("__copy__") !== -1) {
                        let str = fromName.split("__copy__")
                        fromName = str[0]
                    }
                    if (utils.isUndefined(copyIndex[fromName])) {
                        copyIndex[fromName] = 0
                    } else {
                        copyIndex[fromName] = copyIndex[fromName] + 1
                    }
                    this.components[key][i].setFromValue(json[fromName][copyIndex[fromName]])
                } else {
                    this.components[key][i].setFromValue(json)
                }
            }
        }
    }

    getEditValue() {
        let returnData: {
            [key: string]: any
        } = {}
        let myDate: {
            [key: string]: any
        } = {}
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                let fromName = this.components[key][i].name;
                if (fromName.indexOf("__copy__") !== -1) {
                    let str = fromName.split("__copy__")
                    fromName = str[0]
                }
                let fromData = this.components[key][i].setEditValue()
                if (this.components[key][i].copy) {
                    if (utils.isNull(myDate[fromName])) {
                        myDate[fromName] = []
                    }
                    myDate[fromName].push(fromData)
                } else {
                    for (let fromKey in fromData) {
                        returnData[fromKey] = fromData[fromKey]
                    }
                }
            }
        }
        for (let fromKey in myDate) {
            returnData[fromKey] = JSON.stringify(myDate[fromKey])
        }
        let content = utils.getPage().getComponents({
            system_id: this.tableName
        })
        if (this.valueModel == "批量") {
            let json_batch = []
            for (let i = 0; i < content.selectRow.length; i++) {
                json_batch.push({
                    id: content.selectRow[i][content.primaryKey]
                })
            }
            returnData['json_batch'] = JSON.stringify(json_batch)
        }
        return returnData
    }

    initAjax() {
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
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
        console.log(utils.getPage().name)
        if(utils.getStore().parameter[utils.getPage().name]){
            console.log(utils.getStore().parameter[utils.getPage().name].query)
            utils.getStore().parameter[utils.getPage().name].query
            for(let key in this.components){
                for(let i=0;i<this.components[key].length;i++){
                    return this.components[key][i].setFromValue(utils.getStore().parameter[utils.getPage().name].query)
                }
            }
        }

    }

    // initValue() {
    //     for (let key in this.components) {
    //         for (let i = 0; i < this.components[key].length; i++) {
    //             this.components[key][i].initValue()
    //         }
    //     }
    // }

    initValidateString() {
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                this.components[key][i].initValidateString()
            }
        }
    }

    cell_style({
        row,
        column,
        rowIndex,
        columnIndex
    }: any) {

    }
    row_style({
        row,
        rowIndex,
        that
    }: any) {
        if (row[this.primaryKey] == that.selectRowOnlyId && this.backStyle) {
            return {
                'background-color': that.select_color
            };
        }
        return {
            'background-color': '#fff'
        };
    }
    rowClick(data: any) {}
    cellClick(row: any, column: any, cell: any, event: any) {}
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

    //设置校验提示信息
    setValidateString(data: any[]) {
        let newActiveName = ""
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                let name = this.components[key][i].setValidateString(data);
                if (utils.isNull(newActiveName) && utils.isNotNull(name)) {
                    newActiveName = name
                }
            }
        }
        this.activeName = newActiveName
    }

    //获取值
    getRulesValue() {
        let returnData: {
            [key: string]: any
        } = {}
        let myDate: {
            [key: string]: any
        } = {}
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                let fromName = this.components[key][i].name;
                if (fromName.indexOf("__copy__") !== -1) {
                    let str = fromName.split("__copy__")
                    fromName = str[0]
                }
                let fromData = this.components[key][i].getRulesValue()
                if (this.components[key][i].copy) {
                    if (utils.isNull(myDate[fromName])) {
                        myDate[fromName] = []
                    }
                    myDate[fromName].push(fromData)
                } else {
                    for (let fromKey in fromData) {
                        returnData[fromKey] = fromData[fromKey]
                    }
                }
            }
        }
        for (let fromKey in myDate) {
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

    get dialog_width(): string {
        return this._dialog_width;
    }

    set dialog_width(dialog_width: string) {
        this._dialog_width = dialog_width;
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

    get save_label(): string {
        return this._save_label;
    }

    set save_label(value: string) {
        this._save_label = value;
    }

    get toolBtn(): any[] {
        let newToolBtn: any[] = []
        if (utils.isNotNull(this._toolBtn)) {
            for (let i = 0; i < this._toolBtn.length; i++) {
                newToolBtn.push(this._toolBtn[i])
            }
        }
        return newToolBtn;
    }

    set toolBtn(value: any[]) {
        this._toolBtn = value;
    }

    get close_dialog(): string[] {
        return this._close_dialog;
    }

    set close_dialog(value: string[]) {
        this._close_dialog = value;
    }

    get save_close(): boolean {
        return this._save_close;
    }

    set save_close(value: boolean) {
        this._save_close = value;
    }

    get by_id(): boolean {
        return this._by_id;
    }

    set by_id(value: boolean) {
        this._by_id = value;
    }

    get by_id_type(): boolean {
        return this._by_id_type;
    }

    set by_id_type(value: boolean) {
        this._by_id_type = value;
    }

    get apiName_save_url(): string {
        return this._apiName_save_url;
    }

    set apiName_save_url(value: string) {
        this._apiName_save_url = value;
    }


    get system_save_id(): string {
        return this._system_save_id;
    }

    set system_save_id(value: string) {
        this._system_save_id = value;
    }

    get numbershow(): boolean {
        return this._numbershow;
    }
    set numbershow(value: boolean) {
        this._numbershow = value;
    }
    get selectionshow(): boolean {
        return this._selectionshow;
    }
    set selectionshow(selectionshow: boolean) {
        this._selectionshow = selectionshow;
    }
    get utilshow(): boolean {
        return this._utilshow;
    }
    set utilshow(utilshow: boolean) {
        this._utilshow = utilshow;
    }
    get operation_width(): string {
        return this._operation_width;
    }
    set operation_width(operation_width: string) {
        this._operation_width = operation_width;
    }
    get details_show(): boolean {
        return this._details_show;
    }
    set details_show(value: boolean) {
        this._details_show = value;
    }
    get details_info(): string {
        return this._details_info;
    }
    set details_info(value: string) {
        this._details_info = value;
    }
    get summaryShow(): boolean {
        return this._summaryShow;
    }
    set summaryShow(summaryShow: boolean) {
        this._summaryShow = summaryShow;
    }
    get tableBtn(): any[] {
        let newTableBtn: any[] = []
        if (utils.isNotNull(this._tableBtn)) {
            for (let i = 0; i < this._tableBtn.length; i++) {
                newTableBtn.push(this._tableBtn[i])
            }
        }
        return newTableBtn;
    }
    set tableBtn(tableBtn: any[]) {
        this._tableBtn = tableBtn;
    }
    get tableControlShow(): any[] {
        return this._tableControlShow;
    }
    set tableControlShow(tableControlShow: any[]) {
        this._tableControlShow = tableControlShow;
    }
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
        utils.getStore().addParameter({
            names: [this.name, "selectRowOnly"],
            value: selectRowOnly
        })
        if (utils.isNotNull(selectRowOnly)) {
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
        utils.getStore().addParameter({
            names: [this.name, "selectRow"],
            value: selectRow
        })
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
    set queryName(value: string) {
        this._queryName = value;
    }
    get tableDialog(): string {
        return this._tableDialog;
    }
    set tableDialog(value: string) {
        this._tableDialog = value;
    }
    get select_color(): string {
        return this._select_color;
    }
    set select_color(value: string) {
        this._select_color = value;
    }
}