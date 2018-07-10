<template>
<div class="sw-container" v-show = "win_condition">
    <h6>保存为预案</h6>
    <form action="">
    <div class="sw-center">
        <label for="input">预案名称:</label>
        <input type="text" id="input" v-model = "name"/>
    </div>
    <div class="sw-btns-box">
        <button class="sw-btn-left" @click = "handleSure">确定</button>
        <button @click = "handleQuit">取消</button>
    </div>
    </form>
</div>
</template>

<script type="text/ecmascript-6">
    
export default{
    name: 'saveWindow',
    props: ['win_condition'],
    data: function() {
        return {
            name: ''
        }
    },
    methods: {
        handleSure(){
            this.submitName();
        },
        handleQuit(){
            this.hideWindow();
        },
        hideWindow(name = null){
            this.$emit('win_false', name);
        },
        submitName(){
            if(!this.name.trim().length){
                alert('请填写名称');
            }else{
                this.hideWindow(this.name);
            }
        }
    }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.sw-container{
    align-items: center;
    width: 1.8rem;
    height: 1rem;
    padding-top: 30px;
    font-size: .1rem;
    color: #DDD;
    background-color: deepskyblue;
    h6{
        margin: 0 0 30px 20px;
        font-size: 120%;
    }
    .sw-center{
        width: 80%;
        margin: 0 auto;
    }
    .sw-btns-box{
        width: 80%;
        margin: 25px auto 0 auto;
        button{
            width: 30%;
        }
        .sw-btn-left{
            margin-right: 30px;
        }
    }
}
</style>