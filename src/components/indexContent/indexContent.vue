<!-- 首页默认路由模板 -->
<template>
<div>
    <bgCanvas></bgCanvas>
    <indexNav class="index-nav"></indexNav>
</div>
</template>

<script type="text/ecmascript-6">
import bgCanvas from '@components/bgCanvas/bgCanvas.vue';
import indexNav from '@components/indexNav/indexNav.vue';
import eventBus from '@common/js/eventBus.js';

export default{
    name: 'indexContent',
    components: {
        bgCanvas,
        indexNav
    },
    beforeRouteLeave(to, from, next){
        eventBus.$emit('indexRouteChange', true);
        eventBus.$emit('parentRouteChange', true);
        next();
    },
    beforeRouteEnter(to, from, next){
        eventBus.$emit('indexRouteChange', false);
        next();
    }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.index-nav{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -90%);
    z-index: 999;
}
</style>