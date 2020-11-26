<template>
    <div >
        <section class="error-wrapper text-center">
            <h1><img alt="" :src="public_getSystemImg({name:'logo_404'})"></h1>
            <h2>正在开发中...</h2>
            <h3>请联系我们 :</h3>
            <a class="back-btn" @click='public_goto_home()'  > 返回首页</a>
        </section>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {
    }

</script>

<style scoped lang="scss">
    @import "style";
</style>