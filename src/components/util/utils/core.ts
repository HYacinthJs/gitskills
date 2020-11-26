// @ts-ignore
import Vue from 'vue'
import {PageNormal} from "../../components/page/normal/model";
import {PageSimple} from "../../components/page/simple/model";
import {AssemblyMenu} from "../../components/assembly/menu/model";
import {AssemblyContent} from "../../components/assembly/content/model";
import {Layout} from "../../class/Layout";
import * as utils from "../utils";
import {PageMain} from "../../components/page/main/model";
import {AssemblyHeader} from "../../components/assembly/header/model";
import {DialogSelect} from "../../components/dialog/select/model";
import {DialogConfig} from "../../components/dialog/config/model";
import {ComponentsInputEmail} from "../../components/components/inputEmail/model";
import {DialogEdit} from "../../components/dialog/edit/model";
import {AssemblyFrom} from "../../components/assembly/from/model";
import {AssemblyLogin} from "../../components/assembly/login/model";
import {AssemblyBreadcrumbs} from "@/components/components/assembly/breadcrumbs/model";
import {AssemblyQuery} from "@/components/components/assembly/query/model";
import {AssemblyFooter} from "@/components/components/assembly/footer/model";
import {AssemblyError} from "@/components/components/assembly/error/model";
import {ComponentsInputHidden} from "@/components/components/components/inputHidden/model";
import {ComponentsInputSelect} from "@/components/components/components/inputSelect/model";
import {ComponentsInputSelectAuto} from "@/components/components/components/inputSelectAuto/model";
import {ComponentsInputTime} from "@/components/components/components/inputTime/model";
import {ComponentsInput} from "@/components/components/components/input/model";
import {ComponentsCheckBox} from "@/components/components/components/checkBox/model";
import {ComponentsInputJurisdiction} from "@/components/components/components/inputJurisdiction/model";
import {ComponentsInputDay} from "@/components/components/components/inputDay/model";

import {AssemblyLogin2} from "../../components/assembly/login2/model";
import {AssemblyHomePage} from "@/components/components/assembly/homepage/model";
import {AssemblyTreeContent} from "@/components/components/assembly/treecontent/model";
import {ComponentsDataPicker} from "@/components/components/components/dataPicker/model"
import {ComponentsText} from "@/components/components/components/text/model";
import {ComponentsInputWithSelect} from "@/components/components/components/inputWithSelect/model"
import {ComponentsInputWithDateSelect} from "@/components/components/components/inputWithDateSelect/model"
import {ComponentsInputTextarea} from "@/components/components/components/inputTextarea/model";
import {ComponentsInputPassword} from "@/components/components/components/inputPassword/model";
import {ComponentsInputCascader} from "@/components/components/components/inputCascader/model";
import {ComponentsInputUpload} from "@/components/components/components/inputUpload/model";
import {ComponentsInputTable} from "@/components/components/components/inputTable/model";
import {ComponentsInputTableSelect} from "@/components/components/components/inputTableSelect/model";
import {ComponentsInputTableSelect2} from "@/components/components/components/inputTableSelect2/model";
import {ComponentsInputSelectMultiple} from "@/components/components/components/inputSelectMultiple/model";

import {AssemblyLogin3} from "../../components/assembly/login3/model";
import {ComponentsInputAutocomplete} from "@/components/components/components/inputAutocomplete/model";
import {ComponentsInputImage} from "@/components/components/components/inputImage/model";
import {ComponentsInputDownload} from "@/components/components/components/inputDownload/model";
import {ComponentsInputReQuery} from "@/components/components/components/inputReQuery/model";
import {AssemblyCollapse} from "@/components/components/assembly/collapse/model";
import {DialogImport} from "@/components/components/dialog/import/model";
import {ComponentsInputMap} from "@/components/components/components/inputMap/model";
import {ComponentsInputMapTrajectory} from "@/components/components/components/inputMapTrajectory/model";
import {AssemblyEdit} from "@/components/components/assembly/edit/model";
import {AssemblyFromSimple} from "@/components/components/assembly/fromSimple/model";
import {ComponentsInputMapTest} from "@/components/components/components/inputMapTest/model";
import {ComponentsInputUploadImage} from "@/components/components/components/inputUploadImage/model";
import {ComponentsInputTableEdit} from "@/components/components/components/inputTableEdit/model";
import {ComponentsInputTimeline} from "@/components/components/components/inputTimeline/model";
import {ComponentsInputTimelineHidden} from "@/components/components/components/inputTimelineHidden/model";
import {AssemblyHome} from "@/components/components/assembly/home/model";
import {AssemblyEcharts1} from "@/components/components/assembly/echarts1/model";
import {ComponentsInputEchartsbt} from "@/components/components/components/echartsbt/model";
import {ComponentsInputEchartszzt} from "@/components/components/components/echartszzt/model";
import {AssemblyContentEdit} from "@/components/components/assembly/contentEdit/model";
import {DialogDownload} from "@/components/components/dialog/download/model";
import {ComponentsInputMouth} from "@/components/components/components/inputMouth/model";
import {ComponentsInputYear} from "@/components/components/components/inputYear/model";
import {ComponentsInputTransfer} from "@/components/components/components/inputTransfer/model";
import {ComponentsInputDayInterval} from "@/components/components/components/inputDayInterval/model";
import {ComponentsInputRadio} from "@/components/components/components/inputRadio/model";
import {ComponentsInputEcharts} from "@/components/components/components/echarts/model";
import {ComponentsInputImport} from "@/components/components/components/inputImport/model";
import {PageNormal_jsgaj} from "@/components/components/page/normal_jsgaj/model";
import {AssemblyMenu_jsgaj} from "@/components/components/assembly/menu_jsgaj/model";
import {AssemblyHeader_jsgaj} from "@/components/components/assembly/header_jsgaj/model";
import {PageNormal_sobuy} from "@/components/components/page/normal_sobuy/model";
import {AssemblyMenu_sobuy} from "@/components/components/assembly/menu_sobuy/model";
import {AssemblyContentOnly} from "@/components/components/assembly/contentOnly/model";
import {AssemblyQueryOnly} from "@/components/components/assembly/queryOnly/model";
import {ComponentsInputCascaderPanel} from "@/components/components/components/inputCascaderPanel/model";
import {AssemblyLogin_jsgaj} from "@/components/components/assembly/login_jsgaj/model";
import {DialogTable} from "@/components/components/dialog/table/model";
import {DialogParts} from "@/components/components/dialog/parts/model";
import {AssemblyNumber} from "@/components/components/assembly/number/model";
import {AssemblyContentNumber} from "@/components/components/assembly/contentNumber/model";
import {ComponentsInputEchartsMap} from "@/components/components/components/echartsMap/model";
import {ComponentsInputForm} from "@/components/components/components/inputForm/model";
import {AssemblyHomeLine} from "@/components/components/assembly/home2/model";
import {ComponentsSlider} from "@/components/components/components/slider/model";


/**
 * 创建页面配置
 * @param data
 */
export function createPage (data:{ [key: string]: any}) {
    return data.page[data.name];
}
/**
 * 创建组件配置
 * @param data
 */
export function createComponents (data:{ [key: string]: any}) {
    if(utils.isNull(data.version)){
        data.version = data.type
    }
    let newComponents=null;
    Vue.component("Important", require("../../important/main/important.vue")["default"])
    Vue.component("Important2", require("../../important/main/important2.vue")["default"])
    switch(data.version) {
        case 'PageNormal':
            Vue.component("PageNormal", require("../../components/page/normal/view.vue")["default"])
            newComponents = new PageNormal(data)
            break;
        case 'PageNormal_jsgaj':
            Vue.component("PageNormal_jsgaj", require("../../components/page/normal_jsgaj/view.vue")["default"])
            newComponents = new PageNormal_jsgaj(data)
            break;
        case 'PageNormal_sobuy':
            Vue.component("PageNormal_sobuy", require("../../components/page/normal_sobuy/view.vue")["default"])
            newComponents = new PageNormal_sobuy(data)
            break;
        case 'PageSimple':
            Vue.component("PageSimple", require("../../components/page/simple/view.vue")["default"])
            newComponents = new PageSimple(data)
            break;
        case 'AssemblyMenu':
            Vue.component("AssemblyMenu", require("../../components/assembly/menu/view.vue")["default"])
            newComponents = new AssemblyMenu(data)
            break;
        case 'AssemblyMenu_jsgaj':
            Vue.component("AssemblyMenu_jsgaj", require("../../components/assembly/menu_jsgaj/view.vue")["default"])
            newComponents = new AssemblyMenu_jsgaj(data)
            break;
        case 'AssemblyMenu_sobuy':
            Vue.component("AssemblyMenu_sobuy", require("../../components/assembly/menu_sobuy/view.vue")["default"])
            newComponents = new AssemblyMenu_sobuy(data)
            break;
        case 'AssemblyCollapse':
            Vue.component("AssemblyCollapse", require("../../components/assembly/collapse/view.vue")["default"])
            newComponents = new AssemblyCollapse(data)
            break;
        case 'AssemblyContent':
            Vue.component("AssemblyContent", require("../../components/assembly/content/view.vue")["default"])
            Vue.component("view_content_details1", require("../../components/assembly/content/view_content_details1.vue")["default"])
            newComponents = new AssemblyContent(data)
            break;
        case 'AssemblyContentNumber':
            Vue.component("AssemblyContentNumber", require("../../components/assembly/contentNumber/view.vue")["default"])
            Vue.component("view_content_details1", require("../../components/assembly/contentNumber/view_content_details1.vue")["default"])
            newComponents = new AssemblyContentNumber(data)
            break;
        case 'AssemblyContentOnly':
            Vue.component("AssemblyContentOnly", require("../../components/assembly/contentOnly/view.vue")["default"])
            Vue.component("view_content_details1", require("../../components/assembly/contentOnly/view_content_details1.vue")["default"])
            newComponents = new AssemblyContentOnly(data)
            break;
        case 'AssemblyQuery':
            Vue.component("AssemblyQuery", require("../../components/assembly/query/view.vue")["default"])
            newComponents = new AssemblyQuery(data)
            break;
        case 'AssemblyQueryOnly':
            Vue.component("AssemblyQueryOnly", require("../../components/assembly/queryOnly/view.vue")["default"])
            newComponents = new AssemblyQueryOnly(data)
            break;
        case 'AssemblyEdit':
            Vue.component("AssemblyEdit", require("../../components/assembly/edit/view.vue")["default"])
            newComponents = new AssemblyEdit(data)
            break;
        case 'AssemblyFromSimple':
            Vue.component("AssemblyFromSimple", require("../../components/assembly/fromSimple/view.vue")["default"])
            newComponents = new AssemblyFromSimple(data)
            break;
        case 'AssemblyLogin':
            Vue.component("AssemblyLogin", require("../../components/assembly/login/view.vue")["default"])
            newComponents = new AssemblyLogin(data)
            break;
        case 'AssemblyError':
            Vue.component("AssemblyError", require("../../components/assembly/error/view.vue")["default"])
            newComponents = new AssemblyError(data)
            break;
        case 'AssemblyFrom':
            Vue.component("AssemblyFrom", require("../../components/assembly/from/view.vue")["default"])
            newComponents = new AssemblyFrom(data)
            break;
        case 'AssemblyBreadcrumbs':
            Vue.component("AssemblyBreadcrumbs", require("../../components/assembly/breadcrumbs/view.vue")["default"])
            newComponents = new AssemblyBreadcrumbs(data)
            break;
        case 'AssemblyFooter':
            Vue.component("AssemblyFooter", require("../../components/assembly/footer/view.vue")["default"])
            newComponents = new AssemblyFooter(data)
            break;
        case 'AssemblyHome':
            Vue.component("AssemblyHome", require("../../components/assembly/home/view.vue")["default"])
            newComponents = new AssemblyHome(data)
            break;
        case 'AssemblyHomeLine':
            Vue.component("AssemblyHomeLine", require("../../components/assembly/home2/view.vue")["default"])
            newComponents = new AssemblyHomeLine(data)
            break;
        case 'AssemblyEcharts1':
            Vue.component("AssemblyEcharts1", require("../../components/assembly/echarts1/view.vue")["default"])
            newComponents = new AssemblyEcharts1(data)
            break;
        case 'PageMain':
            Vue.component("PageMain", require("../../components/page/main/view.vue")["default"])
            newComponents = new PageMain(data)
            break;
        case 'AssemblyHeader':
            Vue.component("AssemblyHeader", require("../../components/assembly/header/view.vue")["default"])
            newComponents = new AssemblyHeader(data)
            break;
        case 'AssemblyHeader_jsgaj':
            Vue.component("AssemblyHeader_jsgaj", require("../../components/assembly/header_jsgaj/view.vue")["default"])
            newComponents = new AssemblyHeader_jsgaj(data)
            break;
        case 'AssemblyContentEdit':
            Vue.component("AssemblyContentEdit", require("../../components/assembly/contentEdit/view.vue")["default"])
            newComponents = new AssemblyContentEdit(data)
            break;
        case 'ComponentsText':
            Vue.component("ComponentsText", require("../../components/components/text/view.vue")["default"])
            newComponents = new ComponentsText(data)
            break;
        case 'ComponentsInput':
            Vue.component("ComponentsInput", require("../../components/components/input/view.vue")["default"])
            newComponents = new ComponentsInput(data)
            break;
        case 'ComponentsCheckBox':
            Vue.component("ComponentsCheckBox", require("../../components/components/checkBox/view.vue")["default"])
            newComponents = new ComponentsCheckBox(data)
            break;    
        case 'ComponentsInputRadio':
            Vue.component("ComponentsInputRadio", require("../../components/components/inputRadio/view.vue")["default"])
            newComponents = new ComponentsInputRadio(data)
            break;
        case 'ComponentsInputMouth':
            Vue.component("ComponentsInputMouth", require("../../components/components/inputMouth/view.vue")["default"])
            newComponents = new ComponentsInputMouth(data)
            break;
        case 'ComponentsInputYear':
            Vue.component("ComponentsInputYear", require("../../components/components/inputYear/view.vue")["default"])
            newComponents = new ComponentsInputYear(data)
            break;
        case 'ComponentsInputTransfer':
            Vue.component("ComponentsInputTransfer", require("../../components/components/inputTransfer/view.vue")["default"])
            newComponents = new ComponentsInputTransfer(data)
            break;
        case 'ComponentsInputEchartsbt':
            Vue.component("ComponentsInputEchartsbt", require("../../components/components/echartsbt/view.vue")["default"])
            newComponents = new ComponentsInputEchartsbt(data)
            break;
        case 'ComponentsInputEcharts':
            Vue.component("ComponentsInputEcharts", require("../../components/components/echarts/view.vue")["default"])
            newComponents = new ComponentsInputEcharts(data)
            break;
        case 'ComponentsInputEchartszzt':
            Vue.component("ComponentsInputEchartszzt", require("../../components/components/echartszzt/view.vue")["default"])
            newComponents = new ComponentsInputEchartszzt(data)
            break;
        case 'ComponentsInputEchartsMap':
            Vue.component("ComponentsInputEchartsMap", require("../../components/components/echartsMap/view.vue")["default"])
            newComponents = new ComponentsInputEchartsMap(data)
            break;
        case 'ComponentsInputDayInterval':
            Vue.component("ComponentsInputDayInterval", require("../../components/components/inputDayInterval/view.vue")["default"])
            newComponents = new ComponentsInputDayInterval(data)
            break;
        case 'ComponentsInputTimeline':
            Vue.component("ComponentsInputTimeline", require("../../components/components/inputTimeline/view.vue")["default"])
            newComponents = new ComponentsInputTimeline(data)
            break;
        case 'ComponentsInputTimelineHidden':
            Vue.component("ComponentsInputTimelineHidden", require("../../components/components/inputTimelineHidden/view.vue")["default"])
            newComponents = new ComponentsInputTimelineHidden(data)
            break;
        case 'ComponentsInputDownload':
            Vue.component("ComponentsInputDownload", require("../../components/components/inputDownload/view.vue")["default"])
            newComponents = new ComponentsInputDownload(data)
            break;
        case 'ComponentsInputReQuery':
            Vue.component("ComponentsInputReQuery", require("../../components/components/inputReQuery/view.vue")["default"])
            newComponents = new ComponentsInputReQuery(data)
            break;
        case 'ComponentsInputImport':
            Vue.component("ComponentsInputImport", require("../../components/components/inputImport/view.vue")["default"])
            newComponents = new ComponentsInputImport(data)
            break;
        case 'ComponentsInputImage':
            Vue.component("ComponentsInputImage", require("../../components/components/inputImage/view.vue")["default"])
            newComponents = new ComponentsInputImage(data)
            break;
        case 'ComponentsInputAutocomplete':
            Vue.component("ComponentsInputAutocomplete", require("../../components/components/inputAutocomplete/view.vue")["default"])
            newComponents = new ComponentsInputAutocomplete(data)
            break;
        case 'ComponentsInputTextarea':
            Vue.component("ComponentsInputTextarea", require("../../components/components/inputTextarea/view.vue")["default"])
            newComponents = new ComponentsInputTextarea(data)
            break;
        case 'ComponentsInputPassword':
            Vue.component("ComponentsInputPassword", require("../../components/components/inputPassword/view.vue")["default"])
            newComponents = new ComponentsInputPassword(data)
            break;
        case 'ComponentsInputCascader':
            Vue.component("ComponentsInputCascader", require("../../components/components/inputCascader/view.vue")["default"])
            newComponents = new ComponentsInputCascader(data)
            break;
        case 'ComponentsInputCascaderPanel':
            Vue.component("ComponentsInputCascaderPanel", require("../../components/components/inputCascaderPanel/view.vue")["default"])
            newComponents = new ComponentsInputCascaderPanel(data)
            break;
        case 'ComponentsInputUpload':
            Vue.component("ComponentsInputUpload", require("../../components/components/inputUpload/view.vue")["default"])
            newComponents = new ComponentsInputUpload(data)
            break;
        case 'ComponentsInputUploadImage':
            Vue.component("ComponentsInputUploadImage", require("../../components/components/inputUploadImage/view.vue")["default"])
            newComponents = new ComponentsInputUploadImage(data)
            break;
        case 'ComponentsInputTable':
            Vue.component("ComponentsInputTable", require("../../components/components/inputTable/view.vue")["default"])
            newComponents = new ComponentsInputTable(data)
            break;
        case 'ComponentsInputTableEdit':
            Vue.component("ComponentsInputTableEdit", require("../../components/components/inputTableEdit/view.vue")["default"])
            newComponents = new ComponentsInputTableEdit(data)
            break;
        case 'ComponentsInputForm':
            Vue.component("ComponentsInputForm", require("../../components/components/inputForm/view.vue")["default"])
            newComponents = new ComponentsInputForm(data)
            break;
        case 'ComponentsSlider':
            Vue.component("ComponentsSlider", require("../../components/components/slider/view.vue")["default"])
            newComponents = new ComponentsSlider(data)
            break;
        case 'ComponentsInputSelectMultiple':
            Vue.component("ComponentsInputSelectMultiple", require("../../components/components/inputSelectMultiple/view.vue")["default"])
            newComponents = new ComponentsInputSelectMultiple(data)
            break;
        case 'ComponentsInputSelectAuto':
            Vue.component("ComponentsInputSelectAuto", require("../../components/components/inputSelectAuto/view.vue")["default"])
            newComponents = new ComponentsInputSelectAuto(data)
            break;
        case 'ComponentsInputTableSelect':
            Vue.component("ComponentsInputTableSelect", require("../../components/components/inputTableSelect/view.vue")["default"])
            newComponents = new ComponentsInputTableSelect(data)
            break;
        case 'ComponentsInputTableSelect2':
            Vue.component("ComponentsInputTableSelect2", require("../../components/components/inputTableSelect2/view.vue")["default"])
            newComponents = new ComponentsInputTableSelect2(data)
            break;
        case 'ComponentsInputJurisdiction':
            Vue.component("ComponentsInputJurisdiction", require("../../components/components/inputJurisdiction/view.vue")["default"])
            newComponents = new ComponentsInputJurisdiction(data)
            break;
        case 'ComponentsInputEmail':
            Vue.component("ComponentsInputEmail", require("../../components/components/inputEmail/view.vue")["default"])
            newComponents = new ComponentsInputEmail(data)
            break;
        case 'ComponentsInputSelect':
            Vue.component("ComponentsInputSelect", require("../../components/components/inputSelect/view.vue")["default"])
            newComponents = new ComponentsInputSelect(data)
            break;
        case 'ComponentsInputHidden':
            Vue.component("ComponentsInputHidden", require("../../components/components/inputHidden/view.vue")["default"])
            newComponents = new ComponentsInputHidden(data)
            break;
        case 'ComponentsInputMap':
            Vue.component("ComponentsInputMap", require("../../components/components/inputMap/view.vue")["default"])
            newComponents = new ComponentsInputMap(data)
            break;
        case 'ComponentsInputMapTrajectory':
            Vue.component("ComponentsInputMapTrajectory", require("../../components/components/inputMapTrajectory/view.vue")["default"])
            newComponents = new ComponentsInputMapTrajectory(data)
            break;
        case 'ComponentsInputMapTest':
            Vue.component("ComponentsInputMapTest", require("../../components/components/inputMapTest/view.vue")["default"])
            newComponents = new ComponentsInputMapTest(data)
            break;
        case 'ComponentsInputTime':
            Vue.component("ComponentsInputTime", require("../../components/components/inputTime/view.vue")["default"])
            newComponents = new ComponentsInputTime(data)
            break;
        case 'ComponentsInputDay':
            Vue.component("ComponentsInputDay", require("../../components/components/inputDay/view.vue")["default"])
            newComponents = new ComponentsInputDay(data)
            break;
        case 'DialogSelect':
            Vue.component("DialogSelect", require("../../components/dialog/select/view.vue")["default"])
            newComponents = new DialogSelect(data)
            break;
        case 'DialogEdit':
            Vue.component("DialogEdit", require("../../components/dialog/edit/view.vue")["default"])
            newComponents = new DialogEdit(data)
            break;
        case 'DialogImport':
            Vue.component("DialogImport", require("../../components/dialog/import/view.vue")["default"])
            newComponents = new DialogImport(data)
            break;
        case 'DialogDownload':
            Vue.component("DialogDownload", require("../../components/dialog/download/view.vue")["default"])
            newComponents = new DialogDownload(data)
            break;
        case 'DialogConfig':
            Vue.component("DialogConfig", require("../../components/dialog/config/view.vue")["default"])
            newComponents = new DialogConfig(data)
            break;
        case 'DialogTable':
            Vue.component("DialogTable", require("../../components/dialog/table/view.vue")["default"])
            newComponents = new DialogTable(data)
            break;
        case 'DialogParts':
            Vue.component("DialogParts", require("../../components/dialog/parts/view.vue")["default"])
            newComponents = new DialogParts(data)
            break;
        case 'AssemblyLogin2':
            Vue.component("AssemblyLogin2", require("../../components/assembly/login2/view.vue")["default"])
            newComponents = new AssemblyLogin2(data)
            break;
        case 'AssemblyNumber':
            Vue.component("AssemblyNumber", require("../../components/assembly/number/view.vue")["default"])
            newComponents = new AssemblyNumber(data)
            break;
        case 'AssemblyHomePage':
            Vue.component("AssemblyHomePage", require("../../components/assembly/homepage/view.vue")["default"])
            newComponents = new AssemblyHomePage(data)
            break;
        case 'AssemblyTreeContent':
            Vue.component("AssemblyTreeContent", require("../../components/assembly/treecontent/view.vue")["default"])
            newComponents = new AssemblyTreeContent(data)
            break;
        case 'ComponentsDataPicker':
            Vue.component("ComponentsDataPicker", require("../../components/components/dataPicker/view.vue")["default"])
            newComponents = new ComponentsDataPicker(data)
            break;
        case 'ComponentsInputWithSelect':
            Vue.component("ComponentsInputWithSelect", require("../../components/components/inputWithSelect/view.vue")["default"])
            newComponents = new ComponentsInputWithSelect(data)
            break;
        case 'ComponentsInputWithDateSelect':
            Vue.component("ComponentsInputWithDateSelect", require("../../components/components/inputWithDateSelect/view.vue")["default"])
            newComponents = new ComponentsInputWithDateSelect(data)
            break;
        case 'AssemblyLogin3':
            Vue.component("AssemblyLogin3", require("../../components/assembly/login3/view.vue")["default"])
            newComponents = new AssemblyLogin3(data)
            break;
        case 'AssemblyLogin_jsgaj':
            Vue.component("AssemblyLogin_jsgaj", require("../../components/assembly/login_jsgaj/view.vue")["default"])
            newComponents = new AssemblyLogin_jsgaj(data)
            break;

        case 'Layout':
            newComponents = new Layout()
            break;
        default:
            newComponents = new Layout()
            utils.logErr("类未注册："+data.version)
            utils.log(data)
    }
    return newComponents;
}