<template>
    <div>
    <div class="header">
        <h1 class="title">干窑四位一体分析</h1>
    </div>
        <div class="main">
            <!-- bnt end -->
            <div class="column1">
                <div class="row1">
                    <div class="div_left_top">
                        <h2 class="title"><span class="span1">来源分析</span></h2>
                        <div class="title2"><p class="fl">来源</p><p class="fr">{{current.data_map.data1.time}}</p></div>
                        <div class="content ">
                            <div class="content1">
                                <div style="width: 100%;height: 100%;" id="echarts1"></div>
                            </div>
                            <div class="content1" >
                                <div style="width: 100%;height: 100%;" id="echarts2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row2">
                    <div class="div_left_top2">
                        <h2 class="title"><span class="span2">区域分析</span></h2>
                        <div class="title2"><p class="fr">时间段：{{current.data_map.data3.time}}</p></div>
                        <div class="content ">
                            <div class="content1">
                                <div style="width: 100%;height: 100%;" id="echarts3"></div>
                            </div>
                            <div class="content1" >
                                <div style="width: 100%;height: 100%;" id="echarts4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row3">
                    <div class="div_left_top3">
                        <h2 class="title"><span class="span2">7天环比分析</span></h2>
                        <div class="title2"><p class="fr">时间段：{{current.data_map.data5.time}}</p></div>
                        <div class="content ">
                            <div class="content2">
                                <div style="width: 100%;height: 100%;" id="echarts5"></div>
                            </div>
                            <div class="content3" >
                                <div class="contentText">
                                    <p class="title">今日总数</p>
                                    <h3 class="number color1">{{current.data_map.data6.number1}}</h3>
                                    <h4 class="message" v-if="current.data_map.data6.number_1!=0">环比<img :src="my_getSystemImg(current.data_map.data6.number_state_1)" height="10" />{{current.data_map.data6.number_1}}%</h4>
                                </div>
                                <div class="contentText">
                                    <p class="title">本周总数</p>
                                    <h3 class="number color2">{{current.data_map.data6.number2}}</h3>
                                    <h4 class="message" v-if="current.data_map.data6.number_2!=0">环比<img :src="my_getSystemImg(current.data_map.data6.number_state_2)" height="10" />{{current.data_map.data6.number_2}}%</h4>
                                </div>
                                <div class="contentText">
                                    <p class="title">本月总数</p>
                                    <h3 class="number color3">{{current.data_map.data6.number3}}</h3>
                                    <h4 class="message" v-if="current.data_map.data6.number_3!=0">环比<img :src="my_getSystemImg(current.data_map.data6.number_state_3)" height="10" />{{current.data_map.data6.number_3}}%</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!--  left1 end -->
            <div class="column2">
                <div class="row1">
                    <div class="column_1">
                    <div class="row_1"><div class="div_left_top5">
                        <h2 class="title"><span class="span2">今日情况</span></h2>
                        <div class="title2"><p class="fr">时间段：{{current.data_map.data7.time}}</p></div>
                        <div class="content ">
                                <div class="content5">
                                <div class="contentText2">
                                    <p class="title">今日总数</p>
                                    <h3 class="number color1">{{current.data_map.data7.number1}}</h3>
                                    <h4 class="message" v-if="current.data_map.data7.number_1!=0">环比<img :src="my_getSystemImg(current.data_map.data7.number_state_1)" height="10" />{{current.data_map.data7.number_1}}%</h4>
                                </div>

                            </div>
                            <div class="content5" >
                                <div class="contentText2">
                                    <p class="title">本周总数</p>
                                    <h3 class="number color2">{{current.data_map.data7.number2}}</h3>
                                    <h4 class="message" v-if="current.data_map.data7.number_2!=0">环比<img :src="my_getSystemImg(current.data_map.data7.number_state_2)" height="10" />{{current.data_map.data7.number_2}}%</h4>
                                </div>
                            </div>
                            <div class="content5" >
                                <div class="contentText2">
                                    <p class="title">本月总数</p>
                                    <h3 class="number color3">{{current.data_map.data7.number3}}</h3>
                                    <h4 class="message" v-if="current.data_map.data7.number_3!=0">环比<img :src="my_getSystemImg(current.data_map.data7.number_state_3)" height="10" />{{current.data_map.data7.number_3}}%</h4>
                                </div>
                            </div>
                            <div class="content5" >
                                <div class="contentText2">
                                    <p class="title">今年总数</p>
                                    <h3 class="number color2">{{current.data_map.data7.number4}}</h3>
                                    <h4 class="message" v-if="current.data_map.data7.number_4!=0">环比<img :src="my_getSystemImg(current.data_map.data7.number_state_4)" height="10" />{{current.data_map.data7.number_4}}%</h4>
                                </div>
                            </div>
                        </div>
                    </div></div>
                    <div class="row_2"><div class="div_left_top6">
                        <h2 class="title"><span class="span2">最新的检查记录</span></h2>
                        <div class="title2"><p class="fr">时间段：{{current.data_map.data8.time}}</p></div>
                        <div class="content left2_table pumiddboxttop2_cont" style="overflow: hidden;">
                            <div class="content6">
                                <ul>
                                    <li :key="index" :class="index%2==0?'bg':''" v-for="(item,index) in  current.data_map.data8.list">
                                        <div class="text_l">{{item.type}}--{{item.remark}}</div>
                                        <div class="text_r">{{item.create_time}}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div></div>
                </div>
                </div>
                <!--  amidd_bott end-->
                <div class="row2">
                    <div class="div_left_top2">
                    <h2 class="title"><span class="span2">年环比分析</span></h2>
                    <div class="title2"><p class="fr">时间段：{{current.data_map.data9.time}}</p></div>
                    <div class="content ">
                        <div class="content2">
                            <div style="width: 100%;height: 100%;" id="echarts9"></div>
                        </div>
                        <div class="content3" >
                            <div class="contentText2">
                                <p class="title">今年总数</p>
                                <h3 class="number color1">{{current.data_map.data10.number4}}</h3>
                                <h4 class="message" v-if="current.data_map.data10.number_4!=0">环比<img :src="my_getSystemImg(current.data_map.data7.number_state_4)" height="10" />{{current.data_map.data10.number_4}}%</h4>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <!-- amidd_bott end -->
            </div>
            <!-- mrbox_top end -->
            <div class="column3">
                <div class="row1">
                    <div class="div_left_top4">
                    <h2 class="title"><span class="span2">数据分析</span></h2>
                    <div class="title2"><p class="fr">时间段：{{current.data_map.data11.time}}</p></div>
                    <div class="content ">
                        <div class="content4">
                            <div style="width: 100%;height: 100%;" id="echarts11"></div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="row2">
                    <div class="div_left_top4">
                    <h2 class="title"><span class="span2">数据分析</span></h2>
                    <div class="title2"><p class="fr">时间段：{{current.data_map.data12.time}}</p></div>
                    <div class="content ">
                        <div class="content4">
                            <div style="width: 100%;height: 100%;" id="echarts12"></div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="row3">
                    <div class="div_left_top4">
                    <h2 class="title"><span class="span2">数据分析</span></h2>
                    <div class="title2"><p class="fr">全部数据</p></div>
                    <!--<div class="title2"><p class="fr">时间段：{{current.data_map.data13.time}}</p></div>-->
                    <div class="content ">
                        <div class="content4">
                            <div style="width: 100%;height: 100%;" id="echarts13"></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    <!-- mrbox_top_right end -->
    </div>
</template>
<!--<style scoped >
    @import "css/style.css";
</style>-->
<style scoped lang="scss">
    @import "style";
</style>
<script lang="ts">
    import {myVue} from "@/components/class/myVue";
    import {Component } from 'vue-property-decorator';
    import * as utils from "@/components/util/utils";
    @Component
    export default class HelloWorld extends myVue {
        my_getSystemImg(number_state:any){
            let url = number_state=='上升'?utils.getSystemImg({name:'iconup'}):utils.getSystemImg({name:'icondown'})
            return url;
        }
    }
</script>

