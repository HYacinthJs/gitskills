import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputMapTest extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"地图测试组件",
            value_default : []
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
        if(utils.isUndefined(data.associated_notice)){
            this.associated_notice=[this.system_id]
        }
    }
    private _map: any = null;                                  //是否有查询框
    associated(){
        //生成轨迹地图信息
        this.initTrajectory({trajectoryList:this.value.trajectoryList})
        this.initBoundary({arealist:this.value.arealist})
    }
    initMap(data:{ [key: string]: any}){
        //生成基础地图信息
        this.initBaseMap()
        //生成背景地图信息
        this.initBoundary(data)
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
    openInfo(content:string, point:any,opts:any) {
        var infoWindow = new utils.myBMap.InfoWindow(content, opts)  // 创建信息窗口对象
        this.map.openInfoWindow(infoWindow, point) // 开启信息窗口
    }
    //设置背景
    initBoundary(data:{ [key: string]: any}){
        let that = this
        let colors = {best:"#ff0", middle:"#f0f", worst:"#00f"}
        let arealist = data.arealist?data.arealist:[]
        for(let i=0;i<arealist.length;i++){
            //背景
            let ply = new utils.myBMap.Polygon(arealist[i].map_point_boundary, { strokeWeight: 2, strokeColor: "#ff0000" }); //建立多边形覆盖物
            ply.setFillColor(colors[arealist[i].state])   //设置多边形的填充颜色
            ply.setFillOpacity(0.35);
            this.map.addOverlay(ply);  //添加覆盖物
            //文字描述
            let point = new utils.myBMap.Point(arealist[i].map_point_lng,arealist[i].map_point_lat);
            let labelArray = new utils.myBMap.Label(arealist[i].name, {position:point});
            labelArray.setStyle({color: "red", fontSize: "12px", height: "20px", lineHeight: "20px", fontFamily: "微软雅黑"});
            this.map.addOverlay(labelArray);
            //详情
            var opts = {
                width : 200,     // 信息窗口宽度
                height: 150,     // 信息窗口高度
            }
            ply.addEventListener("mouseover", function(){
                let css ='width:110px;border: 2px solid #C9DAFF;padding: 3px 0px'
                that.openInfo(`
                <div style='color:#0C50BC;font-size:20px;width: 100%;text-align: center'>${arealist[i].name}问题信息</div>
                <div style='overflow:auto'>
                    <table style='text-align: center;border-collapse: collapse;margin-top:10px '>
                        <tr><td style='${css}'>问题类型</td><td style='${css}'>总数</td><td style='${css}'>已完成</td></tr>
                        <tr><td style='${css}'>四位一体</td><td style='${css}'>${arealist[i].number_i}</td><td style='${css}'>${arealist[i].number_i_2}</td></tr>
                        <tr><td style='${css}'>市容管理</td><td style='${css}'>${arealist[i].number_c}</td><td style='${css}'>${arealist[i].number_c_2}</td></tr>
                        <tr><td style='${css}'>三改一拆</td><td style='${css}'>${arealist[i].number_d}</td><td style='${css}'>${arealist[i].number_d_2}</td></tr>
                        <tr><td style='${css}'>水环境</td><td style='${css}'>${arealist[i].number_w}</td><td style='${css}'>${arealist[i].number_w_2}</td></tr>
                    </table>
                </div>
                `,point,opts)
            });
            ply.addEventListener("mouseout", function(){
                //this.map.closeInfoWindow(); //开启信息窗口
            });
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
        //生成背景地图信息
        this.initBoundary(data)
        let trajectoryList = data.trajectoryList?data.trajectoryList:[]
        let trackPoint = [];
        for (let i = 0, j = trajectoryList.length; i < j; i++) {
            trackPoint.push(new utils.myBMap.Point(trajectoryList[i].lng, trajectoryList[i].lat));
        }
        // 画线
        var polyline = new utils.myBMap.Polyline(trackPoint, {
            strokeColor: "#1869AD",
            strokeWeight: 3,
            strokeOpacity: 1
        });
        this.map.addOverlay(polyline);
        this.initZoom(trajectoryList)

        for (let i = 0, j = trajectoryList.length; i < j; i++) {
            let label = new utils.myBMap.Label(trajectoryList[i].create_time_str, {position:new utils.myBMap.Point(trajectoryList[i].lng, trajectoryList[i].lat)});
            label.setStyle({
                color: "red",
                fontSize: "12px",
                height: "20px",
                lineHeight: "20px",
                fontFamily: "微软雅黑"
            });
            this.map.addOverlay(label);
        }
    }



    get map(): any {
        return this._map;
    }

    set map(value: any) {
        this._map = value;
    }
}
