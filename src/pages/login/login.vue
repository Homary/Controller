<template>
<div class="lf-content">
    <loginForm></loginForm>
</div>
</template>

<script type="text/ecmascript-6">
import loginForm from '@components/loginForm/loginForm.vue';

export default{
    name: '',
    data: function() {
        return {
            
        }
    },
    components: {
        loginForm
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.lf-content{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url('bgImage.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>