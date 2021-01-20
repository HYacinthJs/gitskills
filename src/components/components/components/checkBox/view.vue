<template>
    <div id="system_checkbox">
        <!--编辑-->
        <template v-if="current.show_type=='编辑'">
            <el-checkbox v-if="current.isAll" :indeterminate="current.isIndeterminate" v-model="current.checkAll"
                @change="current.handleCheckAllChange($event)">全选</el-checkbox>
            <el-checkbox-group v-model="current.checkedOptions" :size="current.onSize" :min="current.min"
                :max="current.max" :text-color="current.textColor" :fill="current.fillColor"
                @change="current.handleCheckedOptionsChange($event)">
                <template v-if="current.eleType == 'checkbox'">
                    <el-checkbox v-for="(opera,index) in current.value" v-model="opera.state" :key="opera.name+index"
                        :disabled="opera.disabled" :border="current.isBorder">{{opera.label}}
                    </el-checkbox>
                </template>
                <template v-if="current.eleType == 'button'">
                    <el-checkbox-button v-for="(opera,index) in current.value" v-model="opera.state"
                        :key="opera.name+index" :disabled="opera.disabled" :border="current.isBorder">{{opera.label}}
                    </el-checkbox-button>
                </template>
            </el-checkbox-group>
        </template>
        <!--详情-->
        <template v-else-if="current.show_type=='详情'">
            <el-checkbox v-for="(opera,index) in current.value" v-model="opera.state" :key="opera.name+index"
                disabled="true">{{opera.factory_name}}</el-checkbox>
        </template>
    </div>
</template>
<script lang="ts">
    import {
        myVue
    } from "@/components/class/myVue";
    import {
        Component
    } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {}
</script>

<style scoped lang="scss">
    @import "style";
</style>