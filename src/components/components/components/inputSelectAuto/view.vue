<template>
    <div id="absd">
        <!--编辑-->
        <template v-if="current.show_type=='编辑'">
            <el-select
                    :style="current.style.width"
                    size="mini"
                    clearable
                    :placeholder="current.label"
                    :value-key="current.name"
                    v-model="current.value"
                    :disabled="current.disabled"
                    filterable
                    :collapse-tags="current.collapse_tags">
              <el-option
                  v-for="info in current.options"
                  :key="info[current.props_value]"
                  :label="info[current.props_label]"
                  :value="info[current.props_value]">
                <span style="float: left">{{info[current.props_label]}}</span>
                <span style="color: #8492a6; font-size: 13px; margin-left: 10px"  v-if="info[current.props_note]">{{info[current.props_note]}}</span>
                <span style="color: #8492a6; font-size: 13px; margin-left: 10px"  v-if="info[current.props_side]">{{info[current.props_side]}}</span>
                <span style="color: #8492a6; font-size: 13px; margin-left: 10px"  v-if="info[current.props_side0]">{{info[current.props_side0]}}</span>
                <span style="color: #8492a6; font-size: 13px; margin-left: 10px"  v-if="info[current.props_side1]">{{info[current.props_side1]}}</span>
                <span style="color: #8492a6; font-size: 13px; margin-left: 10px"  v-if="info[current.props_side2]">{{info[current.props_side2]}}</span>
              </el-option>
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
    }
</script>

<style scoped lang="scss">
    @import "style";

    #absd > div > :nth-child(1) {
        width: 100% !important;
    }
</style>
