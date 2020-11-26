<template>
    <div >
        <div class="content">

            <div class="login_title">
                <img :src="public_getSystemImg({name:'bg_login1'})"  style="margin:40px;height: 60px;width: 500px;"  alt="嘉善县公安执法监督提醒系统">
            </div>
            <div class="login_main">
                <div class="login_panel" style="text-align: center">
                    <div class="sysname normal" style="align-items: center;width: 100%">
                        <img :src="public_getSystemImg({name:'bg_login3'})"  alt="">
                    </div>
                    <div class="loginuser">
                        <input type="text" v-model="current.usercode" v-on:keyup.enter="login" class="usertext normal" placeholder="账号" />

                    </div>
                    <div class="loginuser pd20 ">
                        <input type="password" v-model="current.password" v-on:keyup.enter="login" class="passwordtext normal" placeholder="密码" />

                    </div>
                    <div class="remeber pd20 normal " style="margin: 30px 0">
                        <input type="checkbox" />  自动登录
                    </div>
                    <div class="btn" style="text-align: center;margin: 30px 0">
                        <button class="btnsub" @click="login" v-on:keyup.enter="login">登 录</button>
                    </div>
                </div>
            </div>
<!--            <div class="form fr">-->
<!--                <div class="sysname normal">-->
<!--                    <img :src="public_getSystemImg({name:'bg_login3'})" style="margin:0px;height: 100%;width: 100%;"  alt="">-->
<!--                </div>-->
<!--                <div class="loginuser">-->
<!--                    <input type="text" v-model="current.usercode" v-on:keyup.enter="login" class="usertext normal" placeholder="账号" />-->

<!--                </div>-->
<!--                <div class="loginuser pd20 ">-->
<!--                    <input type="password" v-model="current.password" v-on:keyup.enter="login" class="usertext normal" placeholder="密码" />-->

<!--                </div>-->
<!--                <div class="remeber pd20 normal ">-->
<!--                    <input type="checkbox" />  自动登录-->
<!--                </div>-->
<!--                <div class="btn">-->
<!--                    <button class="btnsub" @click="login" v-on:keyup.enter="login">登 录</button>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";
    @Component
    export default class HelloWorld extends myVue {
        login () {
            utils.my_post({apiName:"login",
                params: {
                    ui_code:this.current.usercode,
                    ui_password:this.current.password,
                    isCookie:this.current.isCookie,
                    yzm:this.current.yzm
                },
                ok: (json:any, dataAll:any) => {
                    utils.login({user: json})
                }})
        }


    }

</script>

<style scoped lang="scss">
    @import "style";

</style>