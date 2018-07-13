<template>
<div class="sw-container" v-show = "win_condition">
    <h6>保存为预案</h6>
    <form action="">
    <div class="sw-center">
        <label for="input">预案名称</label>
        <input type="text" id="input" v-model = "plan_name"/>
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
            plan_name: ''
        }
    },
    methods: {
        handleSure(){
            this.submitName();
        },
        handleQuit(){
            this.$emit('win_hidden');
        },
        hideWindow(n){
            this.$emit('win_hidden', n);
        },
        submitName(){
            if(!this.plan_name.trim().length){
                alert('请填写名称');
            }else{
                this.hideWindow(this.plan_name);
            }
        }
    }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.sw-container{
    align-items: center;
    width: 3rem;
    height: 1.3rem;
    font-size: .1rem;
    color: #FFF;
    background-color: #FFF;
    h6{
        height: .25rem;
        margin-bottom: .2rem;
        line-height: .25rem;
        text-indent: .1rem;
        font-size: 120%;
        background-color: #C77301;
    }
    .sw-center{
        width: 80%;
        margin: 0 auto;
        color: #333;
        input{
            width: 1.5rem;
            height: .15rem;
            margin-left: .2rem;
            border: 1px solid #666;
            border-radius: 5px;
        }
    }
    .sw-btns-box{
        width: 60%;
        margin: 0 auto;
        transform: translateY(.25rem);
        button{
            width: .6rem;
            height: .2rem;
            color: #FFF;
            background-color: #313131;
            border: 0;
            border-radius: 5px;
        }
        .sw-btn-left{
            margin-right: .25rem;
        }
    }
}
</style>