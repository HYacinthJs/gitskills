<template>
    <div :style="current.style.width">
        <!--编辑-->
        <template v-if="current.show_type=='编辑'">
            <el-input
                    :style="current.style.width"
                    size="mini"
                    @keyup.enter.native="public_enter"
                    :placeholder="current.placeholder"
                    :disabled="current.disabled"
                    v-model="current.value">
                <template slot="append" v-if="current.unit">{{$t(current.unit)}}</template>
            </el-input>
        </template>
        <!--详情-->
        <template v-else-if="current.show_type=='详情'">
            {{$t(current.value)}}{{$t(current.unit)}}
        </template>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends myVue {
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>
