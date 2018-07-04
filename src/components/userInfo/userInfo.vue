<template>
<div class="ui-container">
    <div class="ui-header">
        <span>GOCC 智慧城市操控中心</span>
    </div>
    <div class="user-info-box">
        <span class="point-hover">username</span>
        <span class="point-hover">修改密码</span>
        <span class="point-hover">退出<i class="ui-quit"></i></span>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
export default{
    name: ''
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.ui-container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 30px 0 50px;
    box-sizing: border-box;
    .ui-header{
        font-size: .22rem;
        color: #EEE;
    }
    .user-info-box{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 0 0 15%;
        font-size: .12rem;
        color: #CCC;
        .ui-quit{
            display: inline-block;
            width: 13px;
            height: 13px;
            margin-left: 3px;
            background-image: url('quit.png');
            background-size: 100% 100%;
        }
        .point-hover{
            cursor: pointer;
        }
    }
}
</style>