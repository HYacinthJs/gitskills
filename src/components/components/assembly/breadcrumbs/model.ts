import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";

/**
 * 面包屑
 */
export class AssemblyBreadcrumbs extends Layout {
    constructor(data:{ [key: string]: any}) {                           //构造函数
        super();
        let defaultModel = {
            componentDescription:"面包屑",
            system_id:'breadcrumbs',
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }

    /**
     * 是否有查询框
     */
    private _isQuery: boolean = false;
    //是否有查询框
    get isQuery(): boolean {
        return this._isQuery;
    }
    //是否有查询框
    set isQuery(isQuery: boolean) {
        this._isQuery = isQuery;
    }
    /**
     * 查询框的内容
     */
    private _queryValue: string = "";
    //查询框的内容
    get queryValue(): string {
        return this._queryValue;
    }
    //查询框的内容
    set queryValue(queryValue: string) {
        this._queryValue = queryValue;
    }
    //面包屑路径
    get breadcrumbList(): any {
        return utils.getBreadcrumbList()
    }

}
