import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputMap extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"地图组件",
            value_default : []
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _map: any = null;                                  //是否有查询框
    initMap(data:{ [key: string]: any}){
        //生成基础地图信息
        this.initBaseMap()
    }

    //创建基础地图
    initBaseMap(){
        this.map = new utils.myBMap.Map(this.system_id);
        this.map.enableScrollWheelZoom(); // 开启鼠标滚轮缩放
        this.map.addControl(new utils.myBMap.ScaleControl()); // 添加比例尺控件
    }


    get map(): any {
        return this._map;
    }

    set map(value: any) {
        this._map = value;
    }
}
