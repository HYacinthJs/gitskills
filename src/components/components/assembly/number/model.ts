import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyNumber extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"货号管理页面",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _usercode: string = "";                          //账号
    private _password: string = "";                          //密码
    private _isCookie: boolean = false;                     //是否记住密码
    private _yzm: string = "";                               //验证码
    private _yzm_url: string = "/api/user/VerifyCode";                               //验证码
    updateYzm(){
        this.yzm_url = "/api/user/VerifyCode?"+Math.random()
    }
    get usercode(): string {
        return this._usercode;
    }
    set usercode(usercode: string) {
        this._usercode = usercode;
    }
    get password(): string {
        return this._password;
    }
    set password(password: string) {
        this._password = password;
    }
    get yzm(): string {
        return this._yzm;
    }
    set yzm(yzm: string) {
        this._yzm = yzm;
    }
    get isCookie(): boolean {
        return this._isCookie;
    }
    set isCookie(isCookie: boolean) {
        this._isCookie = isCookie;
    }

    get yzm_url(): string {
        return this._yzm_url;
    }

    set yzm_url(value: string) {
        this._yzm_url = value;
    }
}
