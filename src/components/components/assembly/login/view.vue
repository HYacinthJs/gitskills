<template>
    <div id="particles-js">
        <div class="login">
            <div class="login-top" style="padding-left: 0px">
                <div style="text-align:center;width: 100%">{{title1}}</div>
                <div style="text-align:center;width: 100%">{{title2}}</div>
                <!-- <div style="text-align:center;width: 100%">嘉善县创建办</div>
                 <div style="text-align:center;width: 100%">督查问题交办系统</div>-->
            </div>
            <div class="login-center clearfix">
                <div class="login-center-img"><img  :src="public_getSystemImg({name:'logo_menu'})"/></div>
                <div class="login-center-input">
                    <input type="text" v-model="current.usercode" placeholder="请输入您的用户名" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的用户名'"/>
                    <div class="login-center-input-text">用户名</div>
                </div>
            </div>
            <div class="login-center clearfix">
                <div class="login-center-img" ><img :src="public_getSystemImg({name:'password'})"/></div>
                <div class="login-center-input">
                    <input type="password" v-model="current.password" placeholder="请输入您的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的密码'"/>
                    <div class="login-center-input-text">密码</div>
                </div>
            </div>
            <div class="login-center clearfix" style="height: 38px">
                <div class="login-center-img" style="width: 100px;margin: 0;"><img :src="current.yzm_url" @click="updateYzm"/></div>
                <div class="login-center-input" style="width: 150px;height: 38px;padding-top: 5px">
                    <input type="password" v-model="current.yzm" placeholder="请输入您的验证码" onfocus="this.placeholder=''" v-on:keyup.enter="login" onblur="this.placeholder='请输入您的验证码'"/>
                    <div class="login-center-input-text">验证码</div>
                </div>
            </div>
            <div class="login-button"  @click="login">
                登陆
            </div>
        </div>
        <div class="sk-rotating-plane"></div>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    import { init } from './js/js';
    import * as utils from "@/components/util/utils";
    @Component
    export default class HelloWorld extends myVue {
        mounted() {
            init()
        }
        updateYzm(){
            this.current.updateYzm()
        }
        login () {
            utils.my_post({apiName:"login",isEncryption:true,
                params: {
                    ui_code:this.current.usercode,
                    ui_password:this.current.password,
                    isCookie:this.current.isCookie,
                    yzm:this.current.yzm,
                    type:"pc"
                },
                ok: (json:any, dataAll:any) => {
                    this.current.usercode=""
                    this.current.password=""
                    utils.login({user: json})
                },err:(json:any, dataAll:any) => {
                    if(dataAll.message != "验证码错误"){
                        this.current.updateYzm()
                    }
                }})
        }
    }

</script>

<style scoped lang="scss">
    @import "style";
</style>
<style scoped >
    @import "css/style.css";
    @import "css/reset.css";
</style>