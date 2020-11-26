import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputMapTrajectory extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"地图轨迹组件",
            value_default : []
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        if(utils.isUndefined(data.associated_notice)){
            this.associated_notice=[this.system_id]
        }
    }
    private _map: any = null;                                  //是否有查询框
    associated(){
        this.initTrajectory({pointArr:this.value})
    }
    initMap(data:{ [key: string]: any}){
        //生成基础地图信息
        this.initBaseMap()
        //生成轨迹地图信息
        this.initTrajectory(data)
    }

    //根据经纬极值计算绽放级别。 (从网上复制)
    getZoom(maxLng:any, minLng:any, maxLat:any, minLat:any) {
        let zoom:any[] = ["50", "100", "200", "500", "1000", "2000", "5000", "10000", "20000", "25000", "50000", "100000", "200000", "500000", "1000000", "2000000"]; // 级别18到3。
        let pointA = new utils.myBMap.Point(maxLng, maxLat); // 创建点坐标A
        let pointB = new utils.myBMap.Point(minLng, minLat); // 创建点坐标B
        let distance = this.map.getDistance(pointA, pointB).toFixed(1); //获取两点距离,保留小数点后两位
        for (let i = 0, zoomLen = zoom.length; i < zoomLen; i++) {
            if (zoom[i] - distance > 0) {
                return 18 - i + 3; //之所以会多3，是因为地图范围常常是比例尺距离的10倍以上。所以级别会增加3。
            }
        }
    }
    //设置中心
    initZoom(points:any){
        if (points.length > 0) {
            var maxLng = points[0].lng;
            var minLng = points[0].lng;
            var maxLat = points[0].lat;
            var minLat = points[0].lat;
            var res;
            for (var i = points.length - 1; i >= 0; i--) {
                res = points[i];
                if (res.lng > maxLng) maxLng = res.lng;
                if (res.lng < minLng) minLng = res.lng;
                if (res.lat > maxLat) maxLat = res.lat;
                if (res.lat < minLat) minLat = res.lat;
            }
            var cenLng = (parseFloat(maxLng) + parseFloat(minLng)) / 2;
            var cenLat = (parseFloat(maxLat) + parseFloat(minLat)) / 2;
            var zoom = this.getZoom(maxLng, minLng, maxLat, minLat);
            this.map.centerAndZoom(new utils.myBMap.Point(cenLng, cenLat), zoom);
        } else {
            //没有坐标，显示默认
            this.map.centerAndZoom(new utils.myBMap.Point(120.905665, 30.892101), 14);
        }
    }
    //创建基础地图
    initBaseMap(){
        this.map = new utils.myBMap.Map(this.system_id);
        this.map.enableScrollWheelZoom(); // 开启鼠标滚轮缩放
        this.map.addControl(new utils.myBMap.ScaleControl()); // 添加比例尺控件
    }
    //画轨迹地图
    initTrajectory(data:{ [key: string]: any}){
        this.map.clearOverlays();
        let pointArr = data.pointArr?data.pointArr:[]
        let trackPoint = [];
        for (var i = 0, j = pointArr.length; i < j; i++) {
            trackPoint.push(new utils.myBMap.Point(pointArr[i].lng, pointArr[i].lat));
        }
        // 画线
        var polyline = new utils.myBMap.Polyline(trackPoint, {
            strokeColor: "#1869AD",
            strokeWeight: 3,
            strokeOpacity: 1
        });
        this.map.addOverlay(polyline);
        this.initZoom(pointArr)
    }



    get map(): any {
        return this._map;
    }

    set map(value: any) {
        this._map = value;
    }
}
