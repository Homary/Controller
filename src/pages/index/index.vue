<template>
<div>
    <bgCanvas></bgCanvas>
    <indexNav class="index-nav"></indexNav>
    <router-view class="router-view"></router-view>
</div>
</template>

<script type="text/ecmascript-6">
import bgCanvas from '@components/bgCanvas/bgCanvas.vue';
import indexNav from '@components/indexNav/indexNav.vue';

export default{
    name: 'index',
    data: function() {
        return {
            
        }
    },
    components: {
        bgCanvas,
        indexNav
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
html, body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.index-nav{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -90%);
    z-index: 999;
}
.router-view{
    position: absolute;
}
</style>