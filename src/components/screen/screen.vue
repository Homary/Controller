<!-- 分屏展示 -->
<template>
<div>
    <div class="full-screen-box" ref = "fullScreen">
        <screenNav class="full-nav"></screenNav>
    </div>
    <div class="1x2-screen-box" ref = "screen1x2">
        1*2
    </div>
    <div class="1x3-screen-box" ref = "screen1x3">
        1*3
    </div>
    <div class="2x2-screen-box" ref = "screen2x2">
        2*2
    </div>
    <div class="2x2-screen-box" ref = "screen2x3">
        2*3
    </div>
    <div class="three-screen-box-1" ref = "screen3x3">
        3*3
    </div>
    <div class="three-screen-box-2" ref = "screen4x4">
        4*4
    </div>
    <div class="three-screen-box-3" ref = "diy">
        自定义
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import screenNav from '@components/screenNav/screenNav.vue';

export default{
    name: 'screen',
    components: {
        screenNav
    },
    props: ['screen_id'],
    watch: {
        'screen_id': {
            handler: function(newVal, old){
                this.showScreen(newVal);
            },
            immediate: true
        }
    },
    methods: {
        showScreen(id){
            let refs = this.$refs,
                mapTable =  {
                    '1*1分屏': 'fullScreen',
                    '1*2分屏': 'screen1x2',
                    '1*3分屏': 'screen1x3',
                    '2*2分屏': 'screen2x2',
                    '2*3分屏': 'screen2x3',
                    '3*3分屏': 'screen3x3',
                    '4*4分屏': 'screen4x4',
                    '自定义分屏': 'diy'
                }

            for(let key in refs){
                refs[key].setAttribute('style', 'display: none');
            }

            if(mapTable[id]){
                refs[mapTable[id]].setAttribute('style', 'display: block');
            }
        }
    }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
</style>
