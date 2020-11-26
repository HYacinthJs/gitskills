import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputSelectAuto extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"下拉单选组件",
            collapse_tags:true,
            options_d:{
                "干窑审核流程":[
                    {value:'待审核',label:'待审核'},
                    {value:'待下发',label:'待下发'},
                    {value:'待整改',label:'待整改'},
                    {value:'待复审',label:'待复审'},
                    {value:'待重改',label:'待重改'},
                    {value:'延期',label:'延期'},
                ],
                "干窑查询流程":[
                    {value:'待审核',label:'待审核'},
                    {value:'待下发',label:'待下发'},
                    {value:'待整改',label:'待整改'},
                    {value:'待复审',label:'待复审'},
                    {value:'待重改',label:'待重改'},
                    {value:'延期',label:'延期'},
                    {value:'已完成',label:'已完成'}
                ]
            }
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _collapse_tags: boolean = true;                            //组件描述
    private _props_label: string = "label";                            //组件描述
    private _props_note: string = "";                            //组件描述
    private _props_side: string = "";                            //组件描述
    private _props_side0: string = "";                            //组件描述
    private _props_side1: string = "";                            //组件描述
    private _props_side2: string = "";                            //组件描述
    private _props_value: string = "value";                            //组件描述
    private _options: any[] = [];                            //组件描述
    private _options_d_name: string = "";
    private _options_d: { [key: string]: any} = {}
    valueLiteral() {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i][this.props_value] == this.value) {
                this.props_label = this.options[i][this.props_label]
                this.props_note = this.options[i][this.props_note]
                this.props_side = this.options[i][this.props_side]
                this.props_side0 = this.options[i][this.props_side0]
                this.props_side1 = this.options[i][this.props_side1]
                this.props_side2 = this.options[i][this.props_side2]
            }
        }
        return ""
    }
    setAjaxOK(data :any){
        this.options=data
        let bool = true
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i][this.props_value] == this.value) {
                bool = false
            }
        }
        if(bool){
            this.value = this.value_default;
        }
    }
    setAjaxERR(data :any){
        this.options=[]
        this.value = this.value_default;
    }
    associated(){
        this.initAjax()
    }
    get collapse_tags(): boolean {
        return this._collapse_tags;
    }
    set collapse_tags(collapse_tags: boolean) {
        this._collapse_tags = collapse_tags;
    }

    get props_label(): string {
        return this._props_label;
    }
    set props_label(props_label: string) {
        this._props_label = props_label;
    }

    get props_note(): string {
        return this._props_note;
    }

    set props_note(value: string) {
        this._props_note = value;
    }

    get props_side(): string {
        return this._props_side;
    }

    set props_side(value: string) {
        this._props_side = value;
    }


    get props_side0(): string {
        return this._props_side0;
    }

    set props_side0(value: string) {
        this._props_side0 = value;
    }

    get props_side1(): string {
        return this._props_side1;
    }

    set props_side1(value: string) {
        this._props_side1 = value;
    }

    get props_side2(): string {
        return this._props_side2;
    }

    set props_side2(value: string) {
        this._props_side2 = value;
    }

    get props_value(): string {
        return this._props_value;
    }
    set props_value(props_value: string) {
        this._props_value = props_value;
    }
    get options(): any[] {
        return this._options;
    }
    set options(options: any[]) {
        this._options = options;
    }

    get options_d_name(): string {
        return this._options_d_name;
    }

    set options_d_name(value: string) {
        this._options_d_name = value;
        if(utils.isNotNull(value)){
            this.options=this.options_d[value]
        }
    }

    get options_d(): { [p: string]: any } {
        return this._options_d;
    }

    set options_d(value: { [p: string]: any }) {
        this._options_d = value;
    }
}
