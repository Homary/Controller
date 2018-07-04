<template>
<div>
    <bgCanvas></bgCanvas>
</div>
</template>

<script type="text/ecmascript-6">
import bgCanvas from '@components/bgCanvas/bgCanvas.vue';
import loginForm from '@components/loginForm/loginForm.vue';

export default{
    name: 'index',
    data: function() {
        return {
            msg: 'hello index'
        }
    },
    components: {
        bgCanvas,
        loginForm
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
html, body{
    height: 100%;
    overflow: hidden;
}
.login{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
}
</style>