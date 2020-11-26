import {Layout} from "@/components/class/Layout";
export class Dialog extends Layout {
    constructor() {
        super();
        this.show=false;
    }

    private _valueModel: string = '单次';                                    //按钮
    private _valueModelPLMessage: string = '请选择操作数据';                                    //按钮
    get valueModel(): string {
        return this._valueModel;
    }

    set valueModel(value: string) {
        this._valueModel = value;
    }

    get valueModelPLMessage(): string {
        return this._valueModelPLMessage;
    }

    set valueModelPLMessage(value: string) {
        this._valueModelPLMessage = value;
    }
}
