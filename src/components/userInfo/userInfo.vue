<!-- 顶部用户信息 -->
<template>
<div class="ui-container">
    <div class="ui-header">
        <span class="ui-head-en">GOCC </span><span class="ui-head-ch">智慧城市操控中心</span>
    </div>
    <div class="user-info-box">
        <span class="ui-home" @click="clickGoHome" v-if="noHome"></span>
        <span class="user-head-img" 
            :style="{'background-image': 'url(' + userInfo.userIconUrl + ')'}"></span>
        <span class="point-hover">{{userInfo.userName}}</span>
        <span class="point-hover">修改密码</span>
        <span class="point-hover" @click="handleClickQuit">退出<i class="ui-quit"></i></span>
    </div>
    <div class="split-icon" @click="handleGoSplit" v-if="noSplit"></div>
</div>
</template>

<script type="text/ecmascript-6">
import * as types from '@src/store/mutation-types';
import * as STORAGE from '@common/js/storage';
import { quitLogin } from '@api/login';
import { SUC_CODE, ERR_QUIT } from '@common/js/stateCode';
import eventBus from '@common/js/eventBus';

export default{
    name: 'userInfo',
    data: function() {
        return {
            noHome: false,
            noSplit: true
        }
    },
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
    mounted: function() {
        eventBus.$on('indexRouteChange', this.showHomeIcon);
        eventBus.$on('splitRouteChange', this.showSplitIcon);
    },
    methods: {
        handleClickQuit(event) {
            this._quitLogin();
        },
        handleGoSplit(){
            let cur_path = this.$router.history.current.fullPath;

            this.$store.commit(types.SET_LAST_PATH, cur_path);
            this.$router.push({path: '/splitScreen'});
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
        },
        showHomeIcon(boo){
            this.noHome = boo;
        },
        showSplitIcon(boo){
            this.noSplit = boo;
        },
        clickGoHome(){
            this.$router.push( {path: '/'} );
            //this.$store.commit(types.CLAER_SPLIT_ID);
            this.$store.commit(types.SET_TIP_SPLIT, false);
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
    .ui-home{
        width: .3rem;
        height: .3rem;
        margin-right: 30px;
        background-image: url('主页图标.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transform: translateY(-25%);
    }
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
            background-size: 100% 100%;
            background-repeat: no-repeat;
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
    .split-icon{
        position: fixed;
        top: 1rem;
        right: .5rem;
        width: .5rem;
        height: .5rem;
        background-image: url('分屏浮标按钮.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 50%;
        &:hover{
            box-shadow: 0 0 10px #EEE;
        }
    }
}
</style>