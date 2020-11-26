import {
    Dialog
} from "@/components/class/Dialog";
import * as utils from "@/components/util/utils";

export class DialogTable extends Dialog {
    constructor(data: {
        [key: string]: any
    }) { //构造函数
        super();
        let defaultModel = {
            componentDescription: "列表弹出框",
            title: '编辑',
            tableName: 'content',
            system_id: 'content',
            dialog_width: '660px',
            value_default: [],
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        this.tableBtn = [
            //签封样
            {
                label: "查看",
                type: "primary",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'examine2',
                        title: "查看"
                    })
                    edit.queryThree()
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Qquery"
                    }],
                    "row": [{
                        "file_type": "签封样"
                    }]
                }]
            },
            {
                label: "修改",
                type: "primary",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'edit2',
                        title: "修改"
                    })
                    edit.queryThree()
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Qedit"
                    }],
                    "row": [{
                        "file_type": "签封样"
                    }]
                }]
            },
            {
                label: "申请审核",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'apply2',
                        title: "申请审核"
                    })
                    edit.query()
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Qapply"
                    }],
                    "row": [{
                        "file_type": "签封样",
                        "state": "检验完成"
                    }, {
                        "file_type": "签封样",
                        "state": "修改/重做"
                    }]
                }],
            },
            {
                label: "审核详情",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'detail2',
                        title: "审核详情"
                    })
                    edit.queryThree()
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Qquery"
                    }],
                    "row": [{
                        "file_type": "签封样",
                        "state": "审核通过"
                    }, {
                        "file_type": "签封样",
                        "state": "审核不通过"
                    }, {
                        "file_type": "签封样",
                        "state": "修改/重做"
                    }]
                }],
            },
            {
                label: "删除",
                type: "danger",
                click: function (data: any) {
                    utils.getStore().openDialog({
                        name: 'delete2',
                        title: "删除"
                    })
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Qdelete"
                    }],
                    "row": [{
                        "file_type": "签封样"
                    }]
                }]
            },

            //组装图
            {
                label: "查看",
                type: "primary",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'examine4',
                        title: "查看"
                    })
                    edit.queryThree()
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Zquery"
                    }],
                    "row": [{
                        "file_type": "组装图"
                    }]
                }]
            },
            {
                label: "修改",
                type: "primary",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'edit4',
                        title: "修改"
                    })
                    edit.queryThree()
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Zedit"
                    }],
                    "row": [{
                        "file_type": "组装图",
                        "state": "检验完成"
                    }, {
                        "file_type": "组装图",
                        "state": "修改/重做"
                    }]
                }],
            },
            {
                label: "申请审核",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'apply4',
                        title: "申请审核"
                    })
                    edit.query()
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Zapply"
                    }],
                    "row": [{
                        "file_type": "组装图",
                        "state": "检验完成"
                    }, {
                        "file_type": "组装图",
                        "state": "修改/重做"
                    }]
                }],
            },
            {
                label: "审核详情",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'detail4',
                        title: "审核详情"
                    })
                    edit.queryThree()
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Zquery"
                    }],
                    "row": [{
                        "file_type": "组装图",
                        "state": "审核通过"
                    }, {
                        "file_type": "组装图",
                        "state": "审核不通过"
                    }, {
                        "file_type": "组装图",
                        "state": "修改/重做"
                    }]
                }],
            },
            {
                label: "删除",
                type: "danger",
                click: function (data: any) {
                    utils.getStore().openDialog({
                        name: 'delete4',
                        title: "删除"
                    })
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Zdelete"
                    }],
                    "row": [{
                        "file_type": "组装图"
                    }]
                }]
            },

            //工艺单
            // {label:"查看",type:"primary",click:function(data:any){
            //         let edit = utils.getStore().openDialog({name:'examine3',title:"查看"})
            //         edit.queryThree()
            //     },jurisdictionJson: [{
            //         jurisdiction: [{name: "Gquery"}],
            //         "row":[{"file_type":"工艺单"}]
            //     }]
            // },
            {
                label: "查看",
                click: function (data: any) {
                    let system_id =
                        utils.my_post({
                            apiName: 'export1',
                            params: {
                                "id": data.row.id,
                                "wx": 1
                            },
                            ok: (json: any, dataAll: any) => {
                                window.open(json.path)
                            },
                            err: (json: any, dataAll: any) => {
                                alert("预览出错")
                            }
                        })
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Gquery"
                    }],
                    "row": [{
                            "file_type": "工艺单",
                            "state": "检验完成"
                        },
                        {
                            "file_type": "工艺单",
                            "state": "待审核"
                        },
                        {
                            "file_type": "工艺单",
                            "state": "审核通过"
                        },
                        {
                            "file_type": "工艺单",
                            "state": "审核不通过"
                        },
                        {
                            "file_type": "工艺单",
                            "state": "修改/重做"
                        }
                    ]
                }],
            },
            {
                label: "修改",
                type: "primary",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'edit3',
                        title: "修改"
                    })
                    edit.queryThree()
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Gedit"
                    }],
                    "row": [{
                        "file_type": "工艺单",
                        "state": "检验完成"
                    }, {
                        "file_type": "工艺单",
                        "state": "修改/重做"
                    }]
                }],
            },
            {
                label: "申请审核",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'apply3',
                        title: "申请审核"
                    })
                    edit.query()
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Gapply"
                    }],
                    "row": [{
                        "file_type": "工艺单",
                        "state": "检验完成"
                    }],
                }],
            },
            {
                label: "审核详情",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'detail3',
                        title: "审核详情"
                    })
                    edit.queryThree()
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Gquery"
                    }],
                    "row": [{
                        "file_type": "工艺单",
                        "state": "待审核"
                    }, {
                        "file_type": "工艺单",
                        "state": "审核通过"
                    }, {
                        "file_type": "工艺单",
                        "state": "审核不通过"
                    }, {
                        "file_type": "工艺单",
                        "state": "修改/重做"
                    }]
                }],
            },

            {
                label: "导出报告",
                click: function (data: any) {
                    let edit = utils.getStore().openDialog({
                        name: 'export',
                        title: "导出报告"
                    })
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Gquery"
                    }],
                    "row": [{
                            "file_type": "工艺单",
                            "state": "检验完成"
                        },
                        {
                            "file_type": "工艺单",
                            "state": "待审核"
                        },
                        {
                            "file_type": "工艺单",
                            "state": "审核通过"
                        },
                        {
                            "file_type": "工艺单",
                            "state": "审核不通过"
                        },
                        {
                            "file_type": "工艺单",
                            "state": "修改/重做"
                        }
                    ]
                }],
            },
            {
                label: "删除",
                type: "danger",
                click: function (data: any) {
                    utils.getStore().openDialog({
                        name: 'delete3',
                        title: "删除"
                    })
                },
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "Gdelete"
                    }],
                    "row": [{
                        "file_type": "工艺单"
                    }]
                }]
            },
            //检验项
            {
                label: "查看",
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "preview"
                    }],
                    "row": [{
                        "file_type": "产前样"
                    }, {
                        "file_type": "中期"
                    }, {
                        "file_type": "尾检"
                    }, {
                        "file_type": "复检"
                    }]
                }],
                click: function (data: any) {
                    window.location.href = data.row.url
                },
            },
            {
                label: "下载",
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "download"
                    }],
                    "row": [{
                        "file_type": "产前样"
                    }, {
                        "file_type": "中期"
                    }, {
                        "file_type": "尾检"
                    }, {
                        "file_type": "复检"
                    }]
                }],
                click: function (data: any) {
                    window.location.href = data.row.url
                },
            },
            //质量整改
            {
                label: "查看",
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "preview"
                    }],
                    "row": [{
                        "file_type": "质量整改"
                    }]
                }],
                click: function (data: any) {
                    window.location.href = data.row.url
                },
            },
            {
                label: "下载",
                jurisdictionJson: [{
                    jurisdiction: [{
                        name: "download"
                    }],
                    "row": [{
                        "file_type": "质量整改"
                    }]
                }],
                click: function (data: any) {
                    window.location.href = data.row.url
                },
            }
        ]
        this.initComponentsDialogName()
    }

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
    private _select_color: string = "#d9ecff"; //选中颜色

    private _activeName: string = ""; //当前分页
    private _dialog_width: string = ""; //当前分页
    private _apiName_save: string = "save"; //当前分页
    private _apiName_save_url: string = ""; //当前分页
    private _apiName_queryById: string = "queryById"; //当前分页
    private _apiName_queryBase: string = "queryBase"; //当前分页
    private _close_dialog: string[] = []; //按钮
    private _save_close: boolean = true; //按钮
    private _save_label: string = "保存"; //按钮
    private _system_save_id: string = "system_save_id"; //按钮
    private _open_url: string = ""; //按钮

    //获取dialogName
    initComponentsDialogName() {
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                this.components[key][i].initComponentsDialogName({
                    system_id: this.system_id
                })
            }
        }
    }

    powerEdit() {
        let that = this
        that.fileType = []
        for (let i = 0; i < that.power.length; i++) {
            let item = that.power[i];
            let bool = utils.isJurisdiction({
                jurisdictionList: item.jurisdictionJson
            })
            // let flag = ['签封样', '组装图', '工艺单', '质量整改']
            let flag: any = [{
                    zh: "产前样",
                    en: "PP Sample Inspection"
                },
                {
                    zh: "中期",
                    en: "Mid-term Inspection"
                },
                {
                    zh: "尾检",
                    en: "Final Inspection"
                },
                {
                    zh: "复检",
                    en: "Reinspection"
                },
                {
                    zh: "质量纠正",
                    en: "Quality Rectification"
                },
                {
                    zh: "签封样",
                    en: "Seal Sample"
                },
                {
                    zh: "组装图",
                    en: "Assembly Drawing"
                },
                {
                    zh: "工艺单",
                    en: "Single Process"
                },
            ]
            if (item.label == "以往报告") {
                if (bool) {
                    that.fileType.push({
                        label: '产前样',
                        value: '产前样'
                    }, {
                        label: '中期',
                        value: '中期'
                    }, {
                        label: '尾检',
                        value: '尾检'
                    }, {
                        label: '复检',
                        value: '复检'
                    }, )
                }
            } else if (utils.getStore().language == "zh") {
                for (let ii = 0; ii < flag.length; ii++) {
                    if (item.label == flag[ii].zh) {
                        if (bool) {
                            that.fileType.push({
                                label: item.label,
                                value: item.label
                            })
                        }
                    }
                }
            } else if (item.label == "Previous Reports") {
                if (bool) {
                    that.fileType.push({
                        label: 'PP Sample Inspection',
                        value: '产前样'
                    }, {
                        label: 'Mid-term Inspection',
                        value: '中期'
                    }, {
                        label: 'Final Inspection',
                        value: '尾检'
                    }, {
                        label: 'Reinspection',
                        value: '复检'
                    }, )
                }
            } else if (utils.getStore().language == "en2") {
                for (let ii = 0; ii < flag.length; ii++) {
                    if (item.label == flag[ii].en) {
                        if (bool) {
                            that.fileType.push({
                                label: item.label,
                                value: flag[ii].zh
                            })
                        }
                    }
                }
            }
        }
    }

    getParams() {
        let param: {
            [key: string]: any
        } = {}
        if (utils.getStore().language == "zh") {
            param['file_type'] = this.typeArr
        } else {
            let engchn: any = [{
                    zh: "产前样",
                    en: "PP Sample Inspection"
                },
                {
                    zh: "中期",
                    en: "Mid-term Inspection"
                },
                {
                    zh: "尾检",
                    en: "Final Inspection"
                },
                {
                    zh: "复检",
                    en: "Reinspection"
                },
                {
                    zh: "质量纠正",
                    en: "Quality Rectification"
                },
                {
                    zh: "签封样",
                    en: "Seal Sample"
                },
                {
                    zh: "组装图",
                    en: "Assembly Drawing"
                },
                {
                    zh: "工艺单",
                    en: "Single Process"
                },
            ]
            let typeArr2 = []
            for (let i = 0; i < engchn.length; i++) {
                for (let ii = 0; ii < this.typeArr.length; ii++) {
                    if (this.typeArr[ii] == engchn[i].en) {
                        typeArr2.push(engchn[i].zh)
                    } else if (this.typeArr[ii] == engchn[i].zh) {
                        typeArr2.push(engchn[i].zh)
                    }
                }
            }
            console.log(this.typeArr)
            console.log(typeArr2)
            param['file_type'] = typeArr2
        }

        param['search_date'] = this.search_date
        param['search_file'] = this.search_file
        param['factory_id'] = this.factory_id
        param['number_id'] = this.number_id
        param['page'] = this.currentPage
        param['rows'] = this.rows
        return param
    }

    query(lie: any) {
        console.log(lie)
        let that = this
        that.currentPage = 1
        that.search_date = ""
        that.search_file = ""
        that.typeArr = []
        if (lie.lie == "以往报告") {
            that.typeArr.push("产前样", "中期", "尾检", "复检")
        } else if (lie.lie == "Previous Reports") {
            that.typeArr.push("PP Sample Inspection", "Mid-term Inspection", "Final Inspection", "Reinspection")
        } else {
            that.typeArr.push(lie.lie)
        }
        that.power = lie.power
        that.powerEdit()
        that._factory_id = lie.factory_id
        that._number_id = lie.number_id
        // that.tableChange()

        let params = this.getParams()
        utils.my_post({
            apiName: this.apiName_queryById,
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

    Requery() {
        let that = this
        // that.tableChange()
        let params = this.getParams()
        utils.my_post({
            apiName: this.apiName_queryById,
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

    /**
     * 文件类型搜索传值
     */
    private _typeArr: any[] = [];

    //文件类型搜索传值


    get typeArr(): any[] {
        return this._typeArr;
    }

    set typeArr(value: any[]) {
        this._typeArr = value;
    }
    /**
     * 英文版文件类型搜索传值
     */
    private _typeArr2: any[] = [];

    //文件类型搜索传值


    get typeArr2(): any[] {
        return this._typeArr2;
    }

    set typeArr2(value: any[]) {
        this._typeArr2 = value;
    }

    /**
     * 权限搜索传值
     */
    private _power: any = null;

    //权限搜索传值

    get power(): any {
        return this._power;
    }

    set power(value: any) {
        this._power = value;
    }

    /**
     * 货号id搜索传值
     */
    private _number_id: string = '';

    //文件类型搜索传值

    get number_id(): string {
        return this._number_id;
    }

    set number_id(value: string) {
        this._number_id = value;
    }

    /**
     * 工厂id搜索传值
     */
    private _factory_id: string = '';

    //文件类型搜索传值

    get factory_id(): string {
        return this._factory_id;
    }

    set factory_id(value: string) {
        this._factory_id = value;
    }

    /**
     * 日期搜索值
     */
    private _search_date: string = "";

    get search_date(): string {
        return this._search_date;
    }

    set search_date(value: string) {
        this._search_date = value;
    }

    /**
     * 文件编号搜索值
     */
    private _search_file: string = "";

    //文件编号搜索值
    get search_file(): string {
        return this._search_file;
    }

    //文件编号搜索值
    set search_file(search_file: string) {
        this._search_file = search_file;
    }

    /**
     * 文件类型搜索值
     */
    private _fileType: any = [
        // { label: '签封样', value: '签封样' },
        // { label: '组装图', value: '组装图' },
        // { label: '工艺单', value: '工艺单' },
        // { label: '产前样', value: '产前样' },
        // { label: '中期', value: '中期' },
        // { label: '尾检', value: '尾检' },
        // { label: '复检', value: '复检' },
        // { label: '质量整改', value: '质量整改' },
    ];

    //文件类型搜索值

    get fileType(): any {
        return this._fileType;
    }

    set fileType(value: any) {
        this._fileType = value;
    }

    private _options: any = [{
        value: '签封样',
        label: '签封样',
    }, {
        value: '组装图',
        label: '组装图',
    }, {
        value: '工艺单',
        label: '工艺单',
    }, {
        value: '以往报告',
        label: '以往报告',
        children: [{
            value: '工艺单',
            label: '工艺单'
        }, {
            value: '产前样',
            label: '产前样'
        }, {
            value: '中期',
            label: '中期'
        }, {
            value: '尾检',
            label: '尾检'
        }, {
            value: '复检',
            label: '复检'
        }]
    }, {
        value: '质量整改',
        label: '质量整改',
    }]

    //文件类型搜索值

    get options(): [] {
        return this._options;
    }

    set options(value: []) {
        this._options = value;
    }

    /**
     * 表格行按钮
     */
    private _tableBtn: any[] = [];

    //表格行按钮
    get tableBtn(): any[] {
        let newTableBtn: any[] = []
        if (utils.isNotNull(this._tableBtn)) {
            for (let i = 0; i < this._tableBtn.length; i++) {
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
        let newToolBtn: any[] = []
        if (utils.isNotNull(this._toolBtn)) {
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

    //初始化表格要求的数据内容
    /**
     * 是否显示序号栏
     */
    private _numbershow: boolean = true; //是否显示下标栏
    //是否显示序号栏
    get numbershow(): boolean {
        return this._numbershow;
    }

    //是否显示序号栏
    set numbershow(numbershow: boolean) {
        this._numbershow = numbershow;
    }

    /**
     * 是否显示操作栏
     */
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

    close() {
        this.initValue()
        let content = utils.getPage().getComponents({
            system_id: "content"
        })
        if (utils.isNotNull(content) && utils.isNotNull(content.query)) {
            content.query()
        }
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

    cellClick(row: any, column: any, cell: any, event: any) {

    }

    initAjax() {
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                this.components[key][i].initAjax()
            }
        }
    }

    initValue() {
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                this.components[key][i].initValue()
            }
        }
    }

    initValidateString() {
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                this.components[key][i].initValidateString()
            }
        }
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

    //获取查询值
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


    get open_url(): string {
        return this._open_url;
    }

    set open_url(value: string) {
        this._open_url = value;
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


    get orderBy(): string {
        return this._orderBy;
    }

    set orderBy(value: string) {
        this._orderBy = value;
    }

    get rows(): number {
        return this._rows;
    }

    set rows(value: number) {
        this._rows = value;
    }

    get currentPage(): number {
        return this._currentPage;
    }

    set currentPage(value: number) {
        this._currentPage = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
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

    set selectRow(value: any) {
        this._selectRow = value;
    }

    get primaryKey(): string {
        return this._primaryKey;
    }

    set primaryKey(value: string) {
        this._primaryKey = value;
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

    get select_color(): string {
        return this._select_color;
    }

    set select_color(value: string) {
        this._select_color = value;
    }
}