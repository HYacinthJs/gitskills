import { Prop,Vue } from 'vue-property-decorator';
import * as utils from "@/components/util/utils";
import {Component } from 'vue-property-decorator';
@Component
export class myVue extends Vue {
    /**
     * 当前页面
     */
    get page(){
        return utils.getPage();
    }
    /**
     * StatisticsNumber
     */
    get statistics_number(){
        return utils.getStatisticsNumber();
    }
    /**
     * 当前登陆页面
     */
    get user(){
        return utils.getloginUser();
    }
    /**
     * 当前项目
     */
    get store(){
        return utils.getStore();
    }
    /**
     * 当前工具栏按钮
     */
    get tools(){
        return utils.getTools();
    }
    /**
     * 当前工具栏按钮
     */
    get getHome(){
        return utils.getTools();
    }
    /**
     * 当前栏目列表
     */
    get menuList(){
        return utils.getMenuList();
    }

    /**
     * 当前组件model
     */
    get current(){
        return this.dataAll.current;
    }
    /**
     * 当前项目名称
     */
    get title () {
        return this.$store.state.title
    }
    /**
     * 当前项目名称1
     */
    get title1 () {
        return this.$store.state.title1
    }
    /**
     * 当前项目名称2
     */
    get title2 () {
        return this.$store.state.title2
    }
    /**
     * 当前按钮
     */
    get header_btn () {
        return this.$store.state.header_btn
    }
    @Prop() public dataAll!: {current:any,paved:boolean,model_style:{}};
    /**
     * 获取图片
     */
    public_getSystemImg (obj:any) {
        return utils.getSystemImg(obj)
    }
    /**
     * 跳转页面
     */
    public_goto (obj:any) {
        return utils.goTo(obj)
    }
    /**
     * 跳转到首页
     */
    public_goto_home (obj:any) {
        return utils.goTo({path:utils.getHomeName()})
    }
    public_callBack(){
        this.$router.go(-1)
    }
    /**
     * 当前文本国际化
     */
    public_i18n (message:string) {
        return utils.myI18n({name:message})
    }
    /**
     * 重新查询
     */
    reQuery (system_id:string = "content") {
        let content = utils.getPage().getComponents({system_id:system_id})
        content.query()
    }

    /**
     * 重新查询
     */
    openDialog (name:string = "execl",title:string) {
        utils.getStore().openDialog({name:name,title:title})
        let content = utils.getStore().openDialog({name:name,title:title})
        content.query()
    }
    /**
     * 重新查询
     */
    reQuery2 (system_id:string = "content") {
        let content = utils.getPage().getComponents({system_id:system_id})
        content.query2()
    }
    reQuery3 (system_id:string = "query2") {
        console.log(system_id)
        console.log("000000")
        let query2 = utils.getPage().getComponents({system_id:system_id})
        if(utils.isNotNull(query2)&&utils.isNotNull(query2.initValue)){
            query2.initValue()
            query2.initAjax()
        }
    }
    /**
     * 重新查询
     */
    exportWord (system_id:string = "content") {
        let content = utils.getPage().getComponents({system_id:system_id})
        content.query2()
    }
    /**
     * 判断权限
     */
    jurisdictionJson (data:{ [key: string]: any}) {
        return utils.isJurisdiction(data)
    }
}
