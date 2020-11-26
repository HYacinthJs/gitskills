import {Layout} from "../../../class/Layout";
import * as utils from "@/components/util/utils";
export class AssemblyLogin_jsgaj extends Layout {
    constructor(data:{ [key: string]: any}) {                                               //构造函数
        super();
        let defaultModel = {
            componentDescription:"登陆页面",
        }
        this.init(utils.lodash.merge({}, defaultModel, data))
    }
    private _usercode: string = "";                          //账号
    private _password: string = "";                          //密码
    private _isCookie: boolean = false;                     //是否记住密码
    private _yzm: string = "";                               //验证码
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
}
