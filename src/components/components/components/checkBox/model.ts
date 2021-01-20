import {
    Layout
} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsCheckBox extends Layout {
    constructor(data: {
        [key: string]: any
    }) { //构造函数
        super();
        let defaultModel = {
            componentDescription: "多选框组件",
            show_type: "编辑",
            system_id: 'system_checkbox',
            value: [{
                    disabled: false,
                    label: "添加",
                    name: "add",
                    state: false
                },
                {
                    disabled: false,
                    label: "修改",
                    name: "edit",
                    state: false
                },
                {
                    disabled: false,
                    label: "删除",
                    name: "delete",
                    state: false
                },
                {
                    disabled: true,
                    label: "下载",
                    name: "download",
                    state: true
                },
            ]
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    // 私有变量
    private _isAll: boolean = true; //是否需要全选checkbox
    private _isIndeterminate: boolean = true; //全选checkbox的不确定状态
    private _checkAll: boolean = false; //全选checkbox是否选中
    private _checkedOptions: any[] = []; //选中集
    private _min: string = ""; //可被勾选的 checkbox 的最小数量
    private _max: string = ""; //可被勾选的 checkbox 的最大数量
    private _eleType: string = "checkbox"; //check展示类型
    private _isBorder: boolean = false; //是否显示边框
    private _onSize: string = "mini"; //Checkbox的尺寸，仅在border为真时有效medium / small / mini
    private _textColor: string = "#ffffff"; //按钮形式的选中时的文本颜色
    private _fillColor: string = "#409EFF"; //按钮形式的选中时的填充色和边框色

    // 基础渲染方法
    initValue() {
        console.log("initValue")
        this.checkAll = false
        this.checkedOptions = []
    }
    initAjax() {

    }

    setAjaxOK(data: any) {

    }
    setAjaxERR(data: any) {

    }

    initValueFormat(data: any) {
        if (utils.isNotNull(data)) {
            this.value = JSON.parse(data)
        }
    }
    valueFormat() {
        return JSON.stringify(this.checkedOptions)
    }

    // 组件Events
    handleCheckAllChange(event: any) {
        console.log(event)
    }
    handleCheckedOptionsChange(event: any) {
        console.log(event)
    }

    // 存取器
    get isAll(): boolean {
        return this._isAll;
    }
    set isAll(isAll: boolean) {
        this._isAll = isAll;
    }
    get isIndeterminate(): boolean {
        return this._isIndeterminate;
    }
    set isIndeterminate(isIndeterminate: boolean) {
        this._isIndeterminate = isIndeterminate;
    }
    get checkAll(): boolean {
        return this._checkAll;
    }
    set checkAll(checkAll: boolean) {
        this._checkAll = checkAll;
    }
    get checkedOptions(): any[] {
        return this._checkedOptions;
    }
    set checkedOptions(checkedOptions: any[]) {
        this._checkedOptions = checkedOptions;
    }
    get min(): string {
        return this._min;
    }
    set min(min: string) {
        this._min = min;
    }
    get max(): string {
        return this._max;
    }
    set max(max: string) {
        this._max = max;
    }
    get eleType(): string {
        return this._eleType;
    }
    set eleType(eleType: string) {
        this._eleType = eleType;
    }
    get isBorder(): boolean {
        return this._isBorder;
    }
    set isBorder(isBorder: boolean) {
        this._isBorder = isBorder;
    }
    get onSize(): string {
        return this._onSize;
    }
    set onSize(onSize: string) {
        this._onSize = onSize;
    }
    get textColor(): string {
        return this._textColor;
    }
    set textColor(textColor: string) {
        this._textColor = textColor;
    }
    get fillColor(): string {
        return this._fillColor;
    }
    set fillColor(fillColor: string) {
        this._fillColor = fillColor;
    }
}