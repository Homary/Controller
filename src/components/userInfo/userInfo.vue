<!-- 顶部用户信息 -->
<template>
<div class="ui-container">
    <div class="ui-header">
        <span class="ui-head-en">GOCC </span><span class="ui-head-ch">智慧城市操控中心</span>
    </div>
    <div class="user-info-box">
        <span class="user-head-img" 
            :style="{'background-image': 'url(' + userInfo.userIconUrl + ')'}">头像</span>
        <span class="point-hover">{{userInfo.userName}}</span>
        <span class="point-hover">修改密码</span>
        <span class="point-hover" @click="handleClickQuit">退出<i class="ui-quit"></i></span>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import * as types from '@src/store/mutation-types.js';
import * as STORAGE from '@common/js/storage.js';
import { quitLogin } from '@api/login.js';
import { SUC_CODE, ERR_QUIT } from '@common/js/stateCode.js';

export default{
    name: '',
    computed: {
        userInfo: function() {
            if( !this.$store.state.user.id ){
                console.log('用户ID不存在');
            }

            return this.$store.state.user;
        }
    },
    beforeMount: function() {
        this.$store.commit(types.SET_USER_INFO, STORAGE.KEY_USER_IFNO);
    },
    methods: {
        handleClickQuit(event) {
            event.stopPropagation();
            event.preventDefault();

            this._quitLogin();
        },
        _quitLogin() {
            quitLogin().then((data)=>{
                if(data.errorcode === SUC_CODE){
                    STORAGE.clearStorage();
                    alert('退出成功');
                    window.location.href = '/';
                }else if(data.errorcode === ERR_QUIT){
                    alert(data.msg);
                }
            })
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.ui-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.3rem 0 0 0.25rem;
    box-sizing: border-box;
    .ui-header{
        font-size: .16rem;
        font-family: '微软雅黑';
        .ui-head-en{
            color: #FFF;
        }
        .ui-head-ch{
            color: rgba(255, 255, 255, .7);
            opacity: .7;
        }
    }
    .user-info-box{
        display: flex;
        font-family: '微软雅黑';
        font-size: .11rem;
        color: rgba(255, 255, 255, .7);
        .user-head-img{
            width: .3rem;
            height: .3rem;
            margin-right: 10px;
            text-align: center;
            line-height: .3rem;
            border-radius: 50%;
            background-color: #CCC;
            transform: translateY(-25%);
        }
        .ui-quit{
            display: inline-block;
            width: 13px;
            height: 13px;
            margin-left: 3px;
            background-image: url('quit.png');
            background-size: 100% 100%;
        }
        .point-hover{
            display: inline-block;
            padding-right: .2rem;
            cursor: pointer;
        }
    }
}
</style>