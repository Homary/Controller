<template>
<div class="content">
    <p class="admin-box">
        <i class="admin-logo"></i><span class="admin-indent">&nbsp;管理员</span><span>admin</span>
    </p>
    <input type="password" class="lf-password" v-model = "u_pass" required="required" />
    <div><button class="lf-button" @click = "handleLogin">登陆</button></div>
<!--     <p class="lf-bottom">
        <input type="checkbox" class="lf-radio" id="radio" v-model = "rememberMe" />
        <label for="radio">记住密码</label>
    </p> -->
</div>
</template>

<script type="text/ecmascript-6">
import {SUC_CODE, ERR_LOGIN_ERR, ERR_USER_PASS} from '@common/js/stateCode.js';
import {getLogin} from '@api/login.js';

export default{
    name: 'loginForm',

    data: function() {
        return {
            u_pass: '',
            //rememberMe: false,
        }
    },
    mounted: function() {        
    },
    methods: {
        handleLogin: function(event) {
            event.preventDefault();
            event.stopPropagation();

            //this.checkCheckbox();
            this._getLogin();
        },
        _getLogin: function() {
            let _pass = this.u_pass;

            getLogin(_pass).then((data)=>{

                if(data.errorcode === SUC_CODE){
                    window.location.href = 'index.html';
                }else if(data.errorcode === ERR_LOGIN_ERR){
                    alert(data.msg);
                }else if(data.errorcode === ERR_USER_PASS){
                    alert(data.msg);
                }
            })
        }
        // checkCheckbox: function() {
        //     let check     = this.rememberMe,
        //         _password = this.u_pass,
        //         storage   = window.localStorage; 

        //     if (check) {
        //         let _storage = storage.getItem('_password');
        //         storage.setItem('_password', _password);
        //     }else {
        //         storage.removeItem('_password');
        //     }
        // },
        // getStorage: function() {
        //     let storage = window.localStorage,
        //         _check = storage.getItem('_password');

        //     if (_check) {
        //         this.rememberMe = true;
        //         this.u_pass = _check;     
        //     } else {
        //         this.rememberMe = false;
        //     }
        // },
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
        input[type="checkbox"] + label::before {
        content: '\a0'; /* non-break space */
        display: inline-block;
        vertical-align: center;
        width: .15rem;
        height: .15rem;
        margin-right: .1rem;
        border-radius: 3px;
        background: silver;
        text-indent: .03rem;
        line-height: 1.2;
        }
        input[type="checkbox"]:checked + label::before {
        content: '\2713';
        background: yellowgreen;
        }
        input[type="checkbox"]:focus + label::before {
        //box-shadow: 0 0 .1em .1em #58a;
        }
        input[type="checkbox"]:disabled + label::before {
        background: gray;
        box-shadow: none;
        color: #555;
        }
    }
}
</style>