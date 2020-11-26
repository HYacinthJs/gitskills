import {
    Layout
} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputTable extends Layout {
    constructor(data: {
        [key: string]: any
    }) { //构造函数
        super();
        let defaultModel = {
            componentDescription: "表格组件",
            value_default: [],
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _addBtn: boolean = true; //返回值是否是json
    private _editTr: boolean = true; //返回值是否是json
    private _editMove: boolean = false; //返回值是否是json
    private _sort_able: boolean = false; //返回值是否是json
    private _styleEdit: any = {
        width: "1500px"
    };
    private _selectRowOnly: any = null; //共几条数据
    private _selectRowOnlyId: any = null; //共几条数据
    private _selectRow: any = null; //共几条数据
    private _primaryKey: string = "id";
    // private _item_style: any = {width: "100%"};              //返回值是否是json


    initValue() {
        this.system_no = this.version + "_" + utils.randomChar(5);
        this.validate_string = "";
        this.value = this.value_default;
        for (let key in this.components) {
            if (key != "template") {
                this.components[key] = []
            }
        }
    }
    add() {
        let newValue: any[] = JSON.parse(this.valueFormat())
        if (utils.isNull(newValue)) {
            newValue = utils.lodash.cloneDeep(this.value)
        }
        newValue.push({})
        this.value = newValue
    }
    addData(data: any) {
        let newValue: any[] = JSON.parse(this.valueFormat())
        // if (utils.isNull(newValue)) {
        //     newValue = utils.lodash.cloneDeep(this.value)
        // }
        let data1:any[] = [];
        data1.push(data)
        let data2:any[] = [];
        data1.map((item: any, index: any) => {
            data2.push(Object.assign({}, item, {
                part_id: item.no,
                number: '',
                specifications: '',
                material_quality: item.caizhi,
                surface_treatment: item.bmcl
            }))
        })
        // newValue.pop().push(JSON.parse(data))
        this.value = newValue.concat(data2)
    }
    initCopyComponents() {
        let old = this.components["template"]
        this.setComponents({
            "template": old
        })
        for (let i = 0; i < this.value.length; i++) {
            this.copyComponents({
                system_no: this.system_no,
                number: i,
                value: this.value[i]
            })
        }
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                this.components[key][i].initAjax()
            }
        }
    }
    initAjax() {
        //不进行异步请求的组件（临时做法让如果有多个组件参数会有问题）
        let no = []
        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                for (let l = 0; l < this.components[key][i].associated_notice.length; l++) {
                    no.push(this.components[key][i].associated_notice[l])
                }
            }
        }

        for (let key in this.components) {
            for (let i = 0; i < this.components[key].length; i++) {
                let bool = true
                for (let l = 0; l < no.length; l++) {
                    if (no[l] == this.components[key][i].system_id) {
                        bool = false
                    }
                }
                if (bool) {
                    this.components[key][i].initAjax()
                }
            }
        }
    }

    setAjaxOK(data: any) {
        this.value = data.list
    }
    setAjaxERR(data: any) {
        this.value = []
        this.value = this.value_default;
    }
    valueFormat(): any {
        let data: any[] = []
        if (!this.components) {
            return JSON.stringify(data)
        }
        for (let key in this.components) {
            if (key != "template") {
                let val: {
                    [key: string]: any
                } = {}
                for (let i = 0; i < this.components[key].length; i++) {
                    val[this.components[key][i].name] = super.components[key][i].valueFormat()
                }
                data.push(val)
            }
        }
        return JSON.stringify(data)
    }
    rowClick(row: any, b: any, c: any) {}
    cellClick(row: any, column: any, cell: any, event: any, data: any) {}

    get styleEdit(): any {
        return this._styleEdit;
    }

    set styleEdit(value: any) {
        this._styleEdit = value;
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

    /**
     * 主键
     */
    get primaryKey(): string {
        return this._primaryKey;
    }
    set primaryKey(primaryKey: string) {
        this._primaryKey = primaryKey;
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

    get addBtn(): boolean {
        return this._addBtn;
    }

    set addBtn(value: boolean) {
        this._addBtn = value;
    }

    get editTr(): boolean {
        return this._editTr;
    }

    set editTr(value: boolean) {
        this._editTr = value;
    }

    get editMove(): boolean {
        return this._editMove;
    }

    set editMove(value: boolean) {
        this._editMove = value;
    }

    get sort_able(): boolean {
        return this._sort_able;
    }

    set sort_able(value: boolean) {
        this._sort_able = value;
    }
}