<!-- 首页导航栏 -->
<template>
<div class="in-wraper">
    <i class="left-btn nav-btn" @click = "handleLeft"></i>
    <div class="in-screen">
        <div class="item-box" v-for="item in sysList">
            <router-link :to="'/subList/' + index" class="nav-item" 
                v-for="(sub_item, index) in item"  :key="sub_item.id"
                :style="{'background-image': 'url('+ sub_item.iconUrl +')'}">
                {{sub_item.name}}
            </router-link>
        </div>
    </div>
    <i class="right-btn nav-btn" @click = "handleRight"></i>
</div>
</template>

<script type="text/ecmascript-6">
import { getSysList } from '@api/index.js';
import { SUC_CODE, ERR_GET_SYSTEM_INFO} from '@common/js/stateCode.js';
import * as types from '@src/store/mutation-types.js';

export default{
    name: '',
    data: function() {
        return {
            count: 0,
            sysList: null    
        }
    },
    beforeMount: function() {
        this._getSysList();
    },
    methods: {
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
        _getSysList(){
            getSysList().then((res) => {
                let _arr = Array.from(res.data);

                this._saveSysList(_arr);

                if(res.errorcode === SUC_CODE){
                    let data = res.data,
                        len = Math.ceil(data.length / 4),
                        arr = [];

                    while(data.length){
                        arr.push(data.splice(0, 4))
                    }
                this.sysList = arr;

                }else if(res.errorcode === ERR_GET_SYSTEM_INFO){
                    alert(res.msg)
                }
            })
        },
        _saveSysList(data){
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
                height: 1.3rem;
                margin-top: -.1rem;
                font-size: .15rem;
                text-align: center;
                text-decoration: none !important;
                line-height: 15;
                background-size: .825rem .8rem;
                background-repeat: no-repeat;
                background-position: 50% 40%;
            }
            a{
                text-decoration: none !important;
                color: rgba(255, 255, 255, .8) !important;
                opacity: .8;
                &:hover{
                    color: #BBB;
                }
            }
            .nav-item-one{
                background-image: url('法人库.png');
            }
            .nav-item-two{
                background-image: url('制作门户.png');
            }
            .nav-item-three{
                background-image: url('人口库2.png');
            }
            .nav-item-four{
                background-image: url('目录管理.png');
            }
        }
    }
}  
</style>