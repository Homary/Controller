<!-- 首页导航栏 -->
<template>
<div class="in-wraper">
    <i class="left-btn nav-btn" @click = "handleLeft"></i>
    <div class="in-screen">
        <div class="item-box" v-for="item in sysList">
            <span class="nav-item" 
                @click="handleClick(sub_item, sub_item.id)"
                v-for="(sub_item, index) in item"  :key="sub_item.id"
                :style="{'background-image': 'url('+ sub_item.iconUrl +')'}">
                {{sub_item.name}}
            </span>
        </div>
    </div>
    <i class="right-btn nav-btn" @click = "handleRight"></i>
</div>
</template>

<script type="text/ecmascript-6">
import { getSysList } from '@api/index';
import { SUC_CODE, ERR_GET_SYSTEM_INFO} from '@common/js/stateCode';
import * as types from '@src/store/mutation-types';
import { _sendInstruction } from '@common/js/instruction';
import eventBus from '@common/js/eventBus';

export default{
    name: '',
    data: function() {
        return {
            count: 0,
            sysList: null,
            splitScreen: false 
        }
    },
    beforeMount: function() {
        this._getSysList();
    },
    methods: {
        handleClick: function(item, index){
            let event = window.event || event;

            this.pushRoute(item, index);
        },
        sendInstruction: function(item){
            let ins = item.instruction,
                key = item.routingkey;

            // 不发送指令
            if(!ins.action){
                return;
            }
            _sendInstruction(ins, key);
        },
        pushRoute: function(item, index){

            if(this.$store.state.tipSplit){

                this.setScreenSystem(index);
                this.$router.push({path: '/splitScreen'});

            }else{
                this.$router.push({path: '/subList/' + index});

                // 发送指令
                this.sendInstruction(item);
            }
        },

        /**
         * 设置窗口系统 -> 将主页选择的系统展示到分屏上
         * @param {num} sysId 系统ID
         */
        setScreenSystem: function(sysId){

            /**
             * 如果存在 screenId 说明页面是由分屏页面选择系统跳转过来的
             */
            if(this.$store.state.screen.screenId){

                let _screens = Array.from(this.$store.state.screen.windows),
                    position = this.$store.state.position;

                for(let i=0, len = _screens.length; i<len; i++){

                    if(_screens[i].position === position){

                        // 设置当前选中窗口的信息 i: windows中的索引, sysId: 系统id
                        this.$store.commit(types.SET_SYS_ID, {i: i, sysId: sysId});
                    }
                }
            }
        },

        handleRight: function() {
            this.count++;
            this.moveItem();
        },
        handleLeft: function() {
            this.count--;
            this.moveItem();
        },
        moveItem: function() {
            let items = document.getElementsByClassName('item-box'),
                refLength = this.sysList.length;

            if (this.count === refLength) { // 最右
                this.count = 0;
            }
            if (this.count === -1) { // 最左
                this.count = refLength - 1;
            }

            for(let i=0, len=items.length; i<len; i++){
                items[i].style.left = -7*this.count + 'rem';
            }
        },

        _getSysList: function(){
            let self = this;

            getSysList().then(function(res) {
                let _arr = Array.from(res.data);

                self._saveSysList(_arr);

                if(res.errorcode === SUC_CODE){
                    let data = res.data,
                        len = Math.ceil(data.length / 4),
                        arr = [];

                    while(data.length){
                        arr.push(data.splice(0, 4))
                    }
                self.sysList = arr;

                }else if(res.errorcode === ERR_GET_SYSTEM_INFO){
                    alert(res.msg)
                }
            })
        },
        _saveSysList: function(data){
            this.$store.commit(types.SET_SYSTEM_LIST, data);
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.in-wraper{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
    .nav-btn{
        width: .5rem;
        height: .5rem;
        background-repeat: no-repeat;

        cursor: pointer;
        &:hover{
            background-size: 50%, 50%;
        }
    }
    .left-btn{
        background-position: 90% 50%;
        background-image: url('point_left.png');
    }
    .right-btn{
        background-position: 10% 50%;
        background-image: url('point_right.png');
    }
    .in-screen{
        display: flex;
        width: 7rem;
        height: 1rem;
        overflow: hidden;
        .item-box{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1 0 100%;
            height: 1rem;
            overflow: hidden;
            //transition: all .5s;
            .nav-item{
                width: 1.75rem;
                height: 1.7rem;
                font-size: .15rem;
                text-align: center;
                text-decoration: none !important;
                line-height: 17;
                background-size: .825rem .7rem;
                background-repeat: no-repeat;
                background-position: 50% 35%;
                cursor: pointer;
            }
            span{
                text-decoration: none !important;
                color: rgba(255, 255, 255, .8) !important;
                opacity: .8;
                &:hover{
                    color: #BBB;
                }
            }
        }
    }
}  
</style>