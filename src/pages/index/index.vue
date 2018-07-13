<template>
<div class="index">
    <userInfo class="user-header"></userInfo>
    <transition name="router" mode="out-in">
        <router-view class="router-view"></router-view>
    </transition>
</div>
</template>

<script type="text/ecmascript-6">
import userInfo from '@components/userInfo/userInfo.vue';

export default{
    name: 'index',
    components: {
        userInfo
    }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>

html, body{
    width: 100%;
    height: 100%;
}
.index{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('主页底图.jpg');
    // background-image: -webkit-linear-gradient(0 0, 100% 100%, color-stop(0, #13194C), color-stop(100%, #134C9E));
    // background-image: linear-gradient(135deg, #13194C, #134C9E);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    .user-header{
        position: absolute;
        z-index: 9999;
    }
    .router-enter-active, .router-leave-active {
      transition: opacity .1s;
    }
    .router-enter, .router-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
}

</style>