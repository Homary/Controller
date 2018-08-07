<template>
<div class="lf-content">
    <h3>GOCC 智慧城市操控中心</h3>
    <loginForm class="login-form"></loginForm>
    <copyFooter></copyFooter>
</div>
</template>

<script type="text/ecmascript-6">
import loginForm from '@components/loginForm/loginForm.vue';
import copyFooter from '@components/footer/footer.vue';

export default{
    name: '',
    data: function() {
        return {
        }
    },
    components: {
        loginForm: loginForm, 
        copyFooter: copyFooter
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
    height: 100%;
    background-image: url('bgImage.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    h3{
        position: absolute;
        top: 30%;
        right: 10%;
        font-size: .25rem;   
        color: #EEE;
        word-spacing: px;
    }
    .login-form{
        position: absolute;
        top: 40%;
        right: 15%;
        margin-left: -.3rem;
    }
}
</style>