import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class ComponentsInputImage extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"图片组件",
            value_default:[]
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    valueFormat(){
        let filePath = []
        if (utils.isNotNull(this.value)) {
            for (let l = 0; l < this.value.length; l++) {
                if (this.value[l].response && this.value[l].response.list && this.value[l].response.list[0].url) {
                    let url = this.value[l].response.list[0].url
                    let url2 = url.substr(0,5)
                    if("/api\\" == url2 ){
                        url = url.substr(4)
                    }
                    if( "/api/" == url2 ){
                        url = url.substr(5)
                    }
                    filePath.push({"url": url, "name": this.value[l].response.list[0].name})
                } else {
                    let url = this.value[l].url
                    let url2 = url.substr(0,5)
                    if("/api\\" == url2 ){
                        url = url.substr(4)
                    }
                    if( "/api/" == url2 ){
                        url = url.substr(5)
                    }
                    filePath.push({"url": url, "name": this.value[l].name})
                }
            }
        }
        return JSON.stringify(filePath)
    }
    initValueFormat(data:any){
        this.value = JSON.parse(data)
    }
}
