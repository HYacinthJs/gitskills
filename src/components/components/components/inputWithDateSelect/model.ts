import {
    Layout
} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputWithDateSelect extends Layout {


    constructor(data: {
        [key: string]: any
    }) { //构造函数
        super();
        let defaultModel = {
            componentDescription: "下拉组件",
            collapse_tags: true,
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }

    private _collapse_tags: boolean = true;
    private _options: any[] = [];
    private _inputName: string = "";
    private _selectName: string = "";
    private _props_label: string = "label"; //组件描述
    private _props_value: string = "value"; //组件描述
    private _dateShow: boolean = true;
    private _inputShow: boolean = false;
    private _selectShow: boolean = false;
    private _editShow: boolean = false;

    /**
     * 下拉选择搜索值
     */
    private _fileType: any = [{
            label: '日期以前(Date Before)',
            value: '1'
        },
        {
            label: '日期以后(Date After)',
            value: '2'
        },
        {
            label: '日期区间(Date Range)',
            value: '3'
        },
    ];

    private _typeArr: string = ''
    private _date_type: string = 'date'
    private _case_time: string = ''
    private _scene: string = ''

    reQuery() {
        let that = this
        if (that.scene == "尾检") {
            that.tailCheckQuery()
        } else {
            if (that.typeArr == "3") {
                that.date_type = "daterange"
            } else if (that.typeArr == "1" || that.typeArr == "2") {
                that.case_time = ''
                that.date_type = "date"
            } else if (that.typeArr == "4") {
                that.dateShow = false
                that.inputShow = false
                that.selectShow = true
                that.editShow = true
            } else if (that.typeArr == "5") {
                that.dateShow = false
                that.selectShow = false
                that.inputShow = true
                that.editShow = false
            }
        }

    }
    tailCheckQuery() {
        let that = this
        let system_order_id = utils.getPage().getComponents({
            system_id: 'system_order_no'
        })
        let system_number_id = utils.getPage().getComponents({
            system_id: 'system_number_no'
        })
        console.log(system_order_id)
        if(that.typeArr == "1"){
            system_order_id.label = "采购单编号"
            system_order_id.ajax_url = "queryOrder",
            system_order_id.name = "order_id",
            system_order_id.props_label = "no",
            system_order_id.props_value = "order_id",
            system_order_id.value = "",

            system_number_id.label = "货号"
            system_number_id.ajax_url = "queryNumberByOrder",
            system_number_id.props_label= "name",
            system_number_id.props_note= "number",
            system_number_id.props_value= "id",
            system_number_id.ajax_params = [{
                type: "control",
                name: "order_id",
                system_id: "system_order_no"
            }]
            system_order_id.initAjax()
            system_number_id.initAjax()
        }else if(that.typeArr == "2"){
            system_order_id.label = "货号"
            system_order_id.ajax_url = "queryNumber",
            system_order_id.name = "number_id",
            system_order_id.props_label = "name",
            system_order_id.props_value = "id",
            system_order_id.value = "",

            system_number_id.label = "采购单编号"
            system_number_id.ajax_url = "queryOrderByNumber",
            system_number_id.props_label= "no",
            system_number_id.props_note= "number",
            system_number_id.props_value= "order_number_id",
            system_number_id.ajax_params = [{
                type: "control",
                name: "number_id",
                system_id: "system_order_no"
            }]
            system_order_id.initAjax()
            system_number_id.initAjax()
        }
    }

    valueFormat() {
        if (this.typeArr == "1" || this.typeArr == "2" || this.typeArr == "3") {
            return JSON.stringify({
                "selectvalue": this.typeArr,
                "keysname": this.case_time
            })
        } else {
            return JSON.stringify({
                "selectvalue": this.typeArr,
                "keysname": this.value
            })
        }
    }
    valueLiteral() {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i][this.props_value] == this.value) {
                return this.options[i][this.props_label]
            }
        }
        return ""
    }
    setAjaxOK(data: any) {
        this.options = data
        let bool = true
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i][this.props_value] == this.value) {
                bool = false
            }
        }
        if (bool) {
            this.value = this.value_default;
        }
    }
    setAjaxERR(data: any) {
        this.options = []
        this.value = this.value_default;
    }
    associated() {
        this.initAjax()
    }


    get fileType(): any {
        return this._fileType;
    }

    set fileType(value: any) {
        this._fileType = value;
    }

    get typeArr(): string {
        return this._typeArr;
    }

    set typeArr(value: string) {
        this._typeArr = value;
    }

    get date_type(): string {
        return this._date_type;
    }

    set date_type(value: string) {
        this._date_type = value;
    }

    get dateShow(): boolean {
        return this._dateShow;
    }

    set dateShow(value: boolean) {
        this._dateShow = value;
    }

    get inputShow(): boolean {
        return this._inputShow;
    }

    set inputShow(value: boolean) {
        this._inputShow = value;
    }

    get selectShow(): boolean {
        return this._selectShow;
    }

    set selectShow(value: boolean) {
        this._selectShow = value;
    }

    get editShow(): boolean {
        return this._editShow;
    }

    set editShow(value: boolean) {
        this._editShow = value;
    }

    get case_time(): string {
        return this._case_time;
    }

    set case_time(value: string) {
        this._case_time = value;
    }
    get scene(): string {
        return this._scene;
    }

    set scene(value: string) {
        this._scene = value;
    }

    get collapse_tags(): boolean {
        return this._collapse_tags;
    }
    set collapse_tags(collapse_tags: boolean) {
        this._collapse_tags = collapse_tags;
    }
    get options(): any[] {
        return this._options;
    }
    set options(value: any[]) {
        this._options = value;
    }
    get selectName(): string {
        return this._selectName;
    }

    set selectName(value: string) {
        this._selectName = value;
    }
    get inputName(): string {
        return this._inputName;
    }

    set inputName(value: string) {
        this._inputName = value;
    }
    get props_label(): string {
        return this._props_label;
    }

    set props_label(value: string) {
        this._props_label = value;
    }
    get props_value(): string {
        return this._props_value;
    }

    set props_value(value: string) {
        this._props_value = value;
    }
}