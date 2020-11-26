<template>
    <div >
        <div class="content">


            <div class="form fr">
                <div class="sysname normal">索贝QC检验系统后台</div>
                <div class="loginuser">
                    <input type="text" v-model="current.usercode" v-on:keyup.enter="login" class="usertext normal" placeholder="账号" />

                </div>
                <div class="loginuser pd20 ">
                    <input type="password" v-model="current.password" v-on:keyup.enter="login" class="usertext normal" placeholder="密码" />

                </div>
                <div class="remeber pd20 normal ">
                    <input type="checkbox" />  自动登录
                </div>
                <div class="btn">
                    <button class="btnsub" @click="login" v-on:keyup.enter="login">登 录</button>
                </div>
            </div>
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