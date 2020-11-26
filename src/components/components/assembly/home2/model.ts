import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";

export class AssemblyHomeLine extends Layout {
    constructor(data: { [key: string]: any }) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription: "九宫格首页",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        if(utils.isUndefined(data.tableBtn)){
            this.tableBtn =[
                {label:"编辑",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'edit',title:"编辑"})
                        edit.query()
                    }},
                {label:"详情",show:true,click:function(data:any){
                        let edit = utils.getStore().openDialog({name:'info',title:"详情"})
                        edit.query()
                    }
                },
                {label:"删除",click:function(data:any){utils.getStore().openDialog({name:'delete',title:"删除"})}},
            ]
        }
    }

    private _image_list: any[] = [{name: 'lpt1'}, {name: 'lpt2'}];                          //账号

    private _selectRowOnly: any = null;                                    //共几条数据
    private _selectRowOnlyId: any = null;                                    //共几条数据
    private _primaryKey: string = "id";                                    //主键

    query() {
        let that = this
        utils.my_post({apiName:"query", params: '',
            ok: (json:any, dataAll:any) => {
                that.value=json
            },
            err:(json:any, dataAll:any) => {
                that.value=json
            }
        })
    }


    get primaryKey(): string {
        return this._primaryKey;
    }

    set primaryKey(primaryKey: string) {
        this._primaryKey = primaryKey;
    }

    get selectRowOnly(): any {
        return this._selectRowOnly;
    }

    set selectRowOnly(selectRowOnly: any) {
        this._selectRowOnly = selectRowOnly;
        utils.getStore().addParameter({names: [this.name, "selectRowOnly"], value: selectRowOnly})
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

    /**
     * 表格行按钮
     */
    private _tableBtn: any[] = [];
    //表格行按钮
    get tableBtn(): any[] {
        let newTableBtn:any[] =[]
        if(utils.isNotNull(this._tableBtn)){
            for(let i=0;i<this._tableBtn.length;i++){
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
     * 是否显示序号栏
     */
    private _numbershow: boolean = true;                                    //是否显示下标栏
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

    get image_list(): any[] {
        return this._image_list;
    }

    set image_list(value: any[]) {
        this._image_list = value;
    }
}
