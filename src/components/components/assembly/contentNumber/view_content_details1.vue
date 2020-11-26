<template >
    <div>
                <el-table
                        :data="dataAll.row[current.details_info]"
                        style="width: 100%">
                    <template  v-for="(item, index) in current.components.details">
                        <template  v-if="item.type!='ComponentsInputHidden'" >
                            <el-table-column :prop="item.name" :align="item.align" :label="item.label" :key="item.label+index">
                                <template slot-scope="scope">
                                    <div v-if="item.type == 'ComponentsInput'">
                                        {{scope.row[item.name]}}
                                    </div>
                                    <div v-else>
                                        {{scope.row[item.name]}}
                                    </div>
                                </template>
                            </el-table-column>
                        </template>
                    </template>
                </el-table>
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