<template>
    <el-autocomplete
            class="inline-input"
            :style="current.style"
            :size="current.size"
            :value-key="current.props_value"
            :placeholder="current.placeholder"
            :disabled="current.disabled"
            v-model="current.value"
            :fetch-suggestions="querySearch"
    ></el-autocomplete>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends myVue {
        querySearch(queryString:any, cb:any) {
            let options = this.current.options;
            let results = queryString ? options.filter(this.createFilter(queryString)) : options;
            cb(results);
        }
        createFilter(queryString:any) {
            return (restaurant:any) => {
                return (restaurant[this.current.props_value].toLowerCase().indexOf(queryString.toLowerCase()) != -1);
            };
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>