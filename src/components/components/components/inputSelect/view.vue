<template>
    <div id="absd">
        <!--编辑-->
        <template v-if="current.show_type=='编辑'">
            <el-select
                    :style="current.style"
                    size="mini"
                    clearable
                    :placeholder="current.label"
                    :value-key="current.name"
                    v-model="current.value"
                    :disabled="current.disabled"
                    filterable
                    :collapse-tags="current.collapse_tags"
                    @focus="current.changeOp()"
                    @visible-change="changeAll"
                    >
                <el-option v-for="info in current.options" :key="info[current.props_value]"
                           :label="info[current.props_label]" :value="info[current.props_value]"></el-option>
            </el-select>
        </template>
        <!--详情-->
        <template v-else-if="current.show_type=='详情'">
            {{valueLiteral}}
        </template>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends myVue {
        get valueLiteral() {
            return this.current.valueLiteral()
        }
        changeAll(callback:any){
            this.current.changeAll(callback)
        }
    }
</script>

<style scoped lang="scss">
    @import "style";

    #absd > div > :nth-child(1) {
        width: 100% !important;
    }
</style>
