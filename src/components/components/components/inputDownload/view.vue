<template>
    <div>
        <span :key="item.system_id+'_'+index" v-for="(item, index) in current.value">
            <span @click='downLoad(item)'
                  onmouseover="this.style.color='#65CEA7';"
                  onMouseOut="this.style.color='#606266'" >{{item.name}}</span>
        </span>
    </div>
</template>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";
    @Component
    export default class HelloWorld extends myVue {
        downLoad(item:any){
            utils.myDownload({fileName: item.name, url: item.url})
        }
    }
</script>

<style scoped lang="scss">
    @import "style";
</style>