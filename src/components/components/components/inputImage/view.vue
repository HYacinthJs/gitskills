<template>
    <div>
        <el-image fit="contain" style="max-width: 146px; max-height: 146px" :preview-src-list="srcList"
            :src="'/api/'+item.url" :key="item.system_id+'_'+index" v-for="(item, index) in current.value"></el-image>
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
    export default class HelloWorld extends myVue {
        get srcList() {
            let list = []
            for (let i = 0; i < this.current.value.length; i++) {
                list.push('/api/' + this.current.value[i].url)
            }
            return list
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>