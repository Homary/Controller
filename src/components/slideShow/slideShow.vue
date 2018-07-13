<!-- 主页二级菜单 -->
<template>
<div class="in-wraper">
    <i class="left-btn nav-btn" @click = "handleLeft"></i>
    <div class="in-screen">
        <div class="item-box">
            <span class="nav-item" :style="{'background-image': 'url(' + item.iconUrl + ')'}"
                @click="handleClick(index, item)" 
                v-for="(item, index) in list_show" >
                {{item.name}}
            </span>
        </div>
    </div>
    <i class="right-btn nav-btn" @click = "handleRight"></i>
    <button @click="$router.go(-1)" class="iw-btn-back"></button>
</div>
</template>

<script type="text/ecmascript-6">
import * as types from '@src/store/mutation-types';
import {_sendInstruction } from '@common/js/instruction';

export default{
    name: 'slideShow',
    data: function() {
        return {
            count: 0,
            last_list: [],
            list_show: [],
            indexs: []
        }
    },
    beforeMount(){
        this.indexs = this.setPath(this.$router.history.current.path);
        this.initData();

        this.setScreenSystem(this.indexs[0]);
    },
    watch: {
        '$route': function(newVal, old) {
            this.indexs = this.setPath(newVal.path);
            this.initData();
        }
    },
    methods: {
        initData(){

            let _indexs = Array.from(this.indexs);
            let _l = _indexs.shift();

            // 如果不存在list, 就从缓存中取
            if(!this.$store.state.list.length){
                this.$store.commit(types.FLASE_NAV_LIST);
            }
            this.list_show = this.$store.state.list[_l].subSystem;

            while(_indexs.length){
                let l = _indexs.shift();

                if(this.list_show[l].subSystem){

                    this.list_show = this.list_show[l].subSystem;

                }
            }

            // 分割数据
            if(this.list_show.length > 8){

                let _list = [],
                    i = 0;

                while(this.list_show.length){
                    _list.push(this.list_show.slice(0, 7));
                    this.list_show.splice(0, 7);

                    i++;
                }
            }
        },

        /**
         * 分割路由路径
         * @param {String} path 路径
         * 'subList/0/0 -> [0, 0]'
         */
        setPath(path){

            let _arr = path.split('/');
         
            _arr.splice(0, 2);

            for(let i=0, len=_arr.length; i<len; i++){
                _arr[i] = _arr[i]*1;
            }

            return _arr;
        },
        handleClick(index, item){

            this.goNextMenu(index);

            this.sendInstruction(item);
        },
        goNextMenu(index){
            let params = '';

            if(this.list_show[index].subSystem){

                this.indexs.push(index);
                for(let i=0, len=this.indexs.length; i<len; i++){

                    params += `/${this.indexs[i]}`;
                }
                this.$router.push({path: `/subList${params}`});
            }else{
console.log('最后一级菜单')
                // 最后一级菜单
            }
        },
        sendInstruction(item){
            let ins = item.instruction,
                key = item.routingkey;

            _sendInstruction(ins, key);
        },
        setScreenSystem(sysId){

            /**
             * 如果存在 screenId 说明页面是由分屏页面选择系统跳转过来的
             */
            if(this.$store.state.screen.screenId){

                let _screens = Array.from(this.$store.state.screen.windows),
                    position = this.$store.state.position;

                sysId = this.$store.state.list[sysId].id; // 将索引转为id

                for(let i=0, len = _screens.length; i<len; i++){

                    if(_screens[i].position === position){

                        // 设置当前选中窗口的信息 i: windows中的索引, sysId: 系统id
                        this.$store.commit(types.SET_SYS_ID, {i, sysId});
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
                refLength = Math.ceil(this.list_show.length / 8);

            if (this.count === refLength) { // 最右
                this.count = 0;
            }
            if (this.count === -1) { // 最左
                this.count = refLength - 1;
            }
            for(let i=0, len=items.length; i<len; i++){
                items[i].style.transition = 'all .5s';
                items[i].style.left = -7*this.count + 'rem';
            }
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>

@media only screen and (max-width: 1500px){
    .in-wraper{
        transform: translateY(1.15rem) !important;
        .iw-btn-back{
            bottom: -65% !important;
        }
    }
}

@media only screen and (max-width: 1600px){
    .in-wraper{
        transform: translateY(1.5rem) !important;
        .iw-btn-back{
            bottom: -30% !important;
        }
    }
}

@media only screen and (min-width: 1600px){
    .in-wraper{
        transform: translateY(1.5rem) !important;
        .iw-btn-back{
            bottom: -25% !important;
        }
    }
}

@media only screen and (min-width: 1800px){
    .in-wraper{
        transform: translateY(1rem) !important;
        .iw-btn-back{
            bottom: -30% !important;
        }
    }
}

.in-wraper{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
    transform: translateY(1.15rem);
    box-sizing: border-box;
    .nav-btn{
        width: .5rem;
        height: .5rem;
        background-repeat: no-repeat;
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
        height: 3rem;
        overflow: hidden;
        .item-box{
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex: 1 0 100%;
            height: 3rem;
            transition: left .5s;
            .nav-item{
                width: 1.75rem;
                height: 1.3rem;
                font-size: .14rem;
                color: #DDD;
                text-align: center;
                text-decoration: none !important;
                line-height: 15;
                background-size: .7rem .7rem;
                background-repeat: no-repeat;
                background-position: 50% 40%;
                box-sizing: border-box;
                cursor: pointer;
                &:hover{
                    color: #999;
                }
            }
        }
    }
    .iw-btn-back{
        position: absolute;
        bottom: -70%;
        right: 5%;
        width: .5rem;
        height: .5rem;
        background-image: url('返回.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border: 0;
        border-radius: 50%;
    }
}  
</style>