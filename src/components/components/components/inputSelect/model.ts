import {
    Layout
} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputSelect extends Layout {
    constructor(data: {
        [key: string]: any
    }) { //构造函数
        super();
        let defaultModel = {
            componentDescription: "下拉单选组件",
            collapse_tags: true,
            options_d: {}
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _collapse_tags: boolean = true; //组件描述
    private _on_focus: boolean = false; //组件描述
    private _on_blur: boolean = false; //组件描述
    private _ajax_post: string = ""; //组件描述
    private _associated_color: any[] = []; //组件描述
    private _props_label: string = "label"; //组件描述
    private _props_value: string = "value"; //组件描述
    private _props_params: string = ""; //组件描述
    private _options: any[] = []; //组件描述
    private _options_d_name: string = "";
    private _options_d: {
        [key: string]: any
    } = {}
    valueLiteral() {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i][this.props_value] == this.value) {
                console.log(this.options[i][this.props_label])
                return this.options[i][this.props_label]
            } else {
                return this.value
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
    changeOp() {
        let that = this
        if (that.on_focus) {
            if (utils.isNotNull(this.ajax_post)) {
                let params: {
                    [key: string]: any
                } = {}
                for (let i = 0; i < this.ajax_params.length; i++) {
                    if (this.ajax_params[i].type == "control") {
                        let content = utils.getPage().getComponents({
                            system_id: this.ajax_params[i].system_id
                        })
                        params[this.ajax_params[i].name] = content.value
                    } else if (this.ajax_params[i].type == "addparam" && this.copy_number >= 0) {
                        let content = utils.getPage().getComponents({
                            system_id: this.ajax_params[i].system_id.slice(0, -9) + this.copy_number
                        })
                        if (utils.isNotNull(content.value)) {
                            params[this.ajax_params[i].name] = content.value
                        } else {
                            return;
                        }
                    } else {
                        params[this.ajax_params[i].name] = this.ajax_params[i].value
                    }
                }
                utils.my_post({
                    apiName: this.ajax_post,
                    params: params,
                    ok: (json: any, dataAll: any) => {
                        that.setAjaxOK(json)
                    },
                    err: (json: any, dataAll: any) => {
                        that.setAjaxERR(json)
                    },
                })
            }
        }
    }
    changeAll(callback:any) {
        if (this.on_blur && !callback) {
            if (this.label == "颜色" && this.value != "") {
                if (utils.isNotNull(this.associated_color)) {
                    for (let i = 0; i < this.associated_color.length; i++) {
                        let content = utils.getPage().getComponents({
                            system_id: this.associated_color[i].slice(0, -9) + this.copy_number
                        })
                        if (utils.isNotNull(content)) {
                            content.associated()
                        }
                    }
                }
            }
        }
    }
    get collapse_tags(): boolean {
        return this._collapse_tags;
    }
    set collapse_tags(collapse_tags: boolean) {
        this._collapse_tags = collapse_tags;
    }

    get on_focus(): boolean {
        return this._on_focus;
    }
    set on_focus(on_focus: boolean) {
        this._on_focus = on_focus;
    }

    get on_blur(): boolean {
        return this._on_blur;
    }
    set on_blur(on_blur: boolean) {
        this._on_blur = on_blur;
    }

    get ajax_post(): string {
        return this._ajax_post;
    }
    set ajax_post(ajax_post: string) {
        this._ajax_post = ajax_post;
    }

    get associated_color(): any[] {
        return this._associated_color;
    }
    set associated_color(associated_color: any[]) {
        this._associated_color = associated_color;
    }

    get props_label(): string {
        return this._props_label;
    }
    set props_label(props_label: string) {
        this._props_label = props_label;
    }
    get props_value(): string {
        return this._props_value;
    }
    set props_value(props_value: string) {
        this._props_value = props_value;
    }

    get props_params(): string {
        return this._props_params;
    }
    set props_params(props_params: string) {
        this._props_params = props_params;
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
        if (utils.isNotNull(value)) {
            this.options = this.options_d[value]
        }
    }

    get options_d(): {
        [p: string]: any
    } {
        return this._options_d;
    }

    set options_d(value: {
        [p: string]: any
    }) {
        this._options_d = value;
    }
}