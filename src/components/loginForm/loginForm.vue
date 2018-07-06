<!-- 登录表单 -->
<template>
<div class="content">
    <p class="admin-box">
        <i class="admin-logo"></i><span class="admin-indent">&nbsp;管理员</span><span>admin</span>
    </p>
    <input type="password" class="lf-password" v-model = "u_pass" required="required" />
    <div>
        <button class="lf-button" @click="handleLogin" >登陆</button>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import {SUC_CODE, ERR_LOGIN_ERR, ERR_USER_PASS} from '@common/js/stateCode.js';
import {getLogin} from '@api/login.js';
import * as STORAGE from '@common/js/storage.js';

export default{
    name: 'loginForm',

    data: function() {
        return {
            u_pass: ''
        }
    },
    mounted: function() {        
    },
    methods: {
        handleLogin: function(event) {
            event.preventDefault();
            event.stopPropagation();

            this._getLogin();
        },
        _getLogin: function() {
            let _pass = this.u_pass;

            getLogin(_pass).then((data)=>{

                if(data.errorcode === SUC_CODE){

                    this._setUserInfo(data.data);
                    window.location.href = 'index.html';
                }else if(data.errorcode === ERR_LOGIN_ERR){

                    alert(data.msg);
                }else if(data.errorcode === ERR_USER_PASS){

                    alert(data.msg);
                }
            })
        },
        _setUserInfo: function(userInfo) {
            STORAGE.setStorage(STORAGE.KEY_USER_IFNO, userInfo);
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 2rem;
    font-size: .12rem;
    color: #fff;
    .admin-box{
        width: 1.56rem;
        padding-bottom: 5px;
        text-indent: .1rem;
        word-spacing: 5px;
        border-bottom: 1px solid #DDD;
        .admin-logo{
            display: inline-block;
            width: .32rem;
            height: .32rem;
            vertical-align: middle;
            background-image: url('adminLogo.png');
            background-size: 80% 80%;
            background-repeat: no-repeat;
        }
    }
    .lf-password{
        display: block;
        width: 1.56rem;
        height: .34rem;
        margin-top: .15rem;
        color: #FFF;
        text-indent: .46rem;
        background-color: transparent;
        background-image: url('lock.png');
        background-size: .32rem .32rem;
        background-position: .02rem .01rem;
        background-repeat: no-repeat;
        box-sizing: border-box;
        border: 0;
        border-bottom: 1px solid #DDD;        

        /*选中状态下样式*/
        &:focus{
            display: block;
            width: 1.56rem;
            height: .34rem;
            outline: none !important;
        }
    }
    .lf-button{
        display: inline-block;
        width: 1.56rem;
        height: .3rem;
        margin-top: .3rem;
        color: #EEE;
        background-color: rgb(143, 154, 176);
        border: 0;
        border-radius: .04rem;

        /*选中状态下样式*/
        &:focus{
            display: block;
            outline: none !important;
        }
        &:hover{
            color: #000;
            background-color: #CCC;
        }
    }
    .lf-bottom{
        margin-top: 10px;
        .lf-radio{
            width: .15rem;
            height: .15rem;
            margin-left: -.15rem;
            opacity: 0;
        }
    }
}
</style>