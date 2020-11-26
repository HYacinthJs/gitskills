<template>
    <div>
        <template v-if="current.show_type=='编辑'">
            <el-input
                    :style="current.style"
                    :size="current.size"
                    type="textarea"
                    :rows="2"
                    @keyup.enter.native="public_enter"
                    :placeholder="current.placeholder"
                    :disabled="current.disabled"
                    v-model="current.value" >
                <template slot="append" v-if="current.unit">{{$t(current.unit)}}</template>
            </el-input>

        </template>
        <template  v-else-if="current.show_type=='详情'">
            <el-input
                    :style="current.style"
                    :size="current.size"
                    type="textarea"
                    :rows="2"
                    @keyup.enter.native="public_enter"
                    :placeholder="current.placeholder"
                    :disabled=true
                    v-model="current.value" >
                <template slot="append" v-if="current.unit">{{$t(current.unit)}}</template>
            </el-input>
        </template>
    </div>
</template>

<!--<template>-->
<!--    <div>-->
<!--        &lt;!&ndash;编辑&ndash;&gt;-->
<!--        <template  v-if="current.show_type=='编辑'">-->
<!--            <el-input>-->
<!--                    :style="current.style"-->
<!--                    :size="current.size"-->
<!--                    type="textarea"-->
<!--                    :rows="2"-->
<!--                    @keyup.enter.native="public_enter"-->
<!--                    :placeholder="current.placeholder"-->
<!--                    :disabled="current.disabled"-->
<!--                    v-model="current.value" >-->
<!--                <template slot="append" v-if="current.unit">{{$t(current.unit)}}</template>-->
<!--            </el-input>-->
<!--        </template>-->
<!--        &lt;!&ndash;详情&ndash;&gt;-->
<!--        <template  v-else-if="current.show_type=='详情'">-->
<!--            {{$t(current.value)}}{{$t(current.unit)}}-->
<!--        </template>-->
<!--    </div>-->
<!--</template>-->

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