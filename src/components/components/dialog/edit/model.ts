import {
    Dialog
} from "@/components/class/Dialog";
import * as utils from "@/components/util/utils";

export class DialogEdit extends Dialog {
    constructor(data: {
        [key: string]: any
    }) { //构造函数
        super();
        let defaultModel = {
            componentDescription: "编辑弹出框",
            title: '编辑',
            tableName: 'content',
            dialog_width: '660px'
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
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
        this.initComponentsDialogName()
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
    private _loading: boolean = false;
    private _load_data: boolean = false;
    private _save_label: string = "保存"; //按钮
    private _system_save_id: string = "system_save_id"; //按钮
    private _number_save: string = ""; //按钮


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
        let that = this
        let params = this.getEditValue()
        utils.my_post({
            apiName: this.apiName_save,
            url: this.apiName_save_url,
            params: params,
            ok: (json: any, dataAll: any) => {
                if (this.number_save == "货号") {
                    this.save_callback_number(json, dataAll)
                } else {
                    this.save_callback(json, dataAll)
                }
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

    save_callback_number(json: any, dataAll: any) {
        let content = utils.getPage().getComponents({
            system_id: this.tableName
        })
        content.Requery()
    }

    query() {
        let content = utils.getPage().getComponents({
            system_id: "content"
        })
        console.log(content)
        this.initValue()
        this.initAjax()
        let that = this
        if (that.by_id) {
            let content = utils.getPage().getComponents({
                system_id: that.tableName
            })
            console.log(content)
            console.log(content.primaryKey)
            utils.my_post({
                apiName: that.apiName_queryById,
                params: {
                    "default_id_": content.selectRowOnly[content.primaryKey]
                },
                ok: (json: any, dataAll: any) => {
                    that.setEditValue(json)
                    that.loading = false
                }
            })
        } else if (that.by_id_type) {
            // 审批byid
            let content = utils.getPage().getComponents({
                system_id: that.tableName
            })
            console.log(content)
            utils.my_post({
                apiName: that.apiName_queryById,
                params: {
                    "default_id_": content.selectRowOnly['id'],
                    "type": content.selectRowOnly["type"]
                },
                ok: (json: any, dataAll: any) => {
                    that.setEditValue(json)
                    that.loading = false
                }
            })
        }

    }

    queryTwo(data:any) {
        this.initValue()
        this.initAjax()
        let that = this
            let content = utils.getPage().getComponents({
                system_id: that.tableName
            })
            utils.my_post({
                apiName: that.apiName_queryById,
                params: {
                    "type": data
                },
                ok: (json: any, dataAll: any) => {
                    that.setEditValue(json)
                    that.loading = false
                }
            })
    }

    queryThree() {
        this.initValue()
        this.initAjax()
        let that = this
        let content = utils.getPage().getComponents({
            system_id: "content_file"
        })
        console.log(content)
        utils.my_post({
            apiName: that.apiName_queryById,
            params: {
                "default_id_": content.selectRowOnly[content.primaryKey],
                "type": content.selectRowOnly["file_type"]
            },
            ok: (json: any, dataAll: any) => {
                that.setEditValue(json)
                that.loading = false
            }
        })
    }

    queryBase() {
        this.initValue()
        this.initAjax()
        let that = this
        let url = utils.getPage().getUrl({
            name: that.apiName_queryBase
        })
        if (url != "queryBase" && url != "/apiqueryBase") {
            utils.my_post({
                apiName: that.apiName_queryBase,
                params: {},
                ok: (json: any, dataAll: any) => {
                    that.setEditValue(json)
                }
            })
        }
    }

    initAjax() {
        if(this.load_data){
            this.loading = true
        }
        console.log("false")
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

    get loading(): boolean {
        return this._loading;
    }

    set loading(value: boolean) {
        this._loading = value;
    }

    get load_data(): boolean {
        return this._load_data;
    }

    set load_data(value: boolean) {
        this._load_data = value;
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

    get number_save(): string {
        return this._number_save;
    }

    set number_save(value: string) {
        this._number_save = value;
    }
}