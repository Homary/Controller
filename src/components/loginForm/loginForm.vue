<template>
<div class="content">
    <p><i class="admin-logo"></i></p>
    <p>
        <span>管理员</span><span>admin</span>
    </p>
    <input type="password" class="lf-password" />
    <div><button class="lf-button">登陆</button></div>
    <p class="lf-bottom">
        <input type="checkbox" class="lf-radio" id="radio" />
        <label for="radio">记住密码</label>
    </p>
</div>
</template>

<script type="text/ecmascript-6">
export default{
    name: 'loginForm'
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
    .admin-logo{
        display: inline-block;
        width: .32rem;
        height: .32rem;
        background-image: url('adminLogo.png');
        background-repeat: no-repeat;
    }
    .lf-password{
        display: block;
        width: 1.56rem;
        height: .34rem;
        margin-top: .25rem;
        text-indent: .36rem;
        background-color: #CCC;
        background-image: url('lock.png');
        background-size: .32rem .32rem;
        background-position: .02rem .01rem;
        background-repeat: no-repeat;
        box-sizing: border-box;
        border: 0;
        border-radius: .34rem;

        /*选中状态下样式*/
        &:focus{
            display: block;
            width: 1.56rem;
            height: .34rem;
            border-radius: .34rem;
            outline: none !important;
        }
    }
    .lf-button{
        display: inline-block;
        width: 1.56rem;
        height: .34rem;
        margin-top: .2rem;
        color: #FFF;
        background-color: rgb(143, 154, 176);
        border: 0;
        border-radius: .34rem;

        /*选中状态下样式*/
        &:focus{
            display: block;
            width: 1.56rem;
            height: .34rem;
            border-radius: .34rem;
            outline: none !important;
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
        line-height: 1;
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