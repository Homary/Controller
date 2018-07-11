<!-- 分屏首页 -->
<template>
<div>
    <div>
        <div class="sc-container">
            <div class="sc-top-box">
                <div class="sc-top-screen">
                    <screen v-show = "!noneSelect" :screen_id="screen_id"></screen>
                    <div class="sc-screen-none sc-none-box" v-if = "noneSelect">
                        <i class="sc-none-icon"></i>
                        <span class="sc-none-single">无信号</span>
                    </div>
                    <saveWindow :win_condition = "win_condition" v-on:win_false= "hideWindow"
            class="sc-screen-none"></saveWindow>
                </div>
                <div class="sc-top-menu">
                    <span class="sc-menu-head"><i></i>预案选择</span>
                    <ul class="sc-menu-contain">
                        <li class="sc-menu-item-box" v-for = "item in planList">
                            {{item.name}}
                        </li>
                    </ul>
                    <span class="sc-menu-none">暂无</span>
                </div>
            </div>
            <div class="sc-bottom-box">
                <ul class="sc-bottom-menu-box">
                    <li tag="li" class="sc-bottom-menu-item" :id="item.id" 
                        v-for = "item in screenList" :key = "item.id" :name = "item.name"
                        @click = "handleScreenSelect">
                        <div @click = "noneSelect = false">
                            <i class="sc-bottom-menu-item-icon"></i>
                            <span>{{item.name}}</span>
                        </div>
                    </li>
                </ul>
                <div class="sc-button-box">
                    <span @click = "handleSave" class="sc-button-save" v-show="!noneSelect"></span>
                    <span @click="$router.go(-1)" class="sc-button-back" ></span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import {getScreenList, getPlanList, savePlan} from '@api/index';
import screen from '@components/screen/screen.vue';
import saveWindow from '@components/saveWindow/saveWindow.vue';
import eventBus from '@common/js/eventBus';
import {SUC_CODE, ERR_GET_SCREEN_INFO, ERR_GET_PLAN_LIST, ERR_SAVE_PLAN_INFO} from '@common/js/stateCode';

export default{
    name: 'splitSreen',
    components: {
        screen,
        saveWindow
    },
    data: function() {
        return {
            noneSelect: true,
            screenList: [],
            planList: [],
            screen_id: 'noSend',
            win_condition: false,
            plan_name: '',
            splitId: null // 存放当前选择的分屏项
        }
    },
    mounted(){
        eventBus.$on('_getScreenData', this.getScreenData);
    },
    beforeMount() {
        this._getScreenList();
        this._getPlanList();
    },
    beforeRouteEnter(to, from, next){
        eventBus.$emit('splitRouteChange', false);
        next();
    },
    beforeRouteLeave(to, from, next){
        eventBus.$emit('splitRouteChange', true);
        next();
    },
    methods: {
        _getScreenList(){
            getScreenList().then((data) => {

                if(data.errorcode === ERR_GET_SCREEN_INFO){
                    alert(data.msg);
                }else if(data.errorcode === SUC_CODE){
                    this.screenList = data.data.screen;
                }
            })
        },
        _getPlanList(){
            getPlanList().then((data) => {

                if(data.errorcode === ERR_GET_PLAN_LIST){
                    alert(data.msg);
                }else if(data.errorcode === SUC_CODE){
                    this.planList = data.data.plans;
                }
            })
        },
        handleScreenSelect(event){
            event.preventDefault();
            event.stopPropagation();

            this.addSelectClass(event.currentTarget);

            this.sendScreenId(event.currentTarget.getAttribute('name'));

            this.setSelectId(event.currentTarget.getAttribute('id'));
        },
        addSelectClass(elm){
            let _class = 'sc-screen-list-select',
                elms = document.getElementsByClassName(_class);

            for(let i=0, len=elms.length; i<len; i++){
                elms[i].classList.remove(_class);
            }
            elm.classList.add(_class)
        },
        setSelectId(id){
            this.splitId = id;
        },
        sendScreenId(name){
            this.screen_id = name;
        },
        handleSave(){
            this.showSaveWindow();
        },
        showSaveWindow(){
            this.win_condition = true;
        },
        hideWindow(name){
            if(name){
                this.getPlanName(name);
            }

            this.win_condition = false;
        },
        getPlanName(name){
            this.plan_name = name;

            // 取得当前各个分屏信息
            eventBus.$emit('splitGet');
            // POST 请求
            
        },
        getScreenData(data){
            let obj = {};
                obj.name = this.plan_name;
                obj.splitId = this.splitId;
                obj.windows = data;

            console.log(obj)
            this._savePlan(obj);
        },
        _savePlan(data){
            savePlan(data).then((data) => {
                console.log(data)
            })
        }
    }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>

@media only screen and (min-width: 1500px) {
    .sc-top-box{
        height: 4rem !important;
        .sc-menu-contain{
            height: 3.5rem !important;
            box-sizing: border-box;
            .sc-menu-item-box{
                height: .3rem !important;
                line-height: .3rem !important;
            }
        }
    }
}
@media only screen and (min-width: 1700px) {
    .sc-top-box{
        height: 3.5rem !important;
        .sc-menu-contain{
            height: 3rem !important;
            box-sizing: border-box;
            .sc-menu-item-box{
                height: .3rem !important;
                line-height: .3rem !important;
            }
        }
    }
}

.sc-container{
    margin-top: .8rem;
    color: #EEE;
    font-size: .12rem;
    .sc-top-box{
        display: flex;
        height: 5rem;
        .sc-top-screen{
            position: relative;
            flex: 6 0 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: .1rem;
            .sc-screen-none{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .sc-none-box{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                font-size: .18rem;
                color: #EEE;
                background-color: rgba(9, 16, 43, .7);
                .sc-none-icon{
                    width: .5rem;
                    height: .3rem;
                    background-image: url('无信号图标.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 50% 50%;
                    margin-bottom: 20px;
                }
                .sc-none-single{
                    opacity: .8;
                }
            }
        }
        .sc-top-menu{
            position: relative;
            flex: 1 0 20%;
            margin: .1rem 0;
            background-color: rgb(15, 23, 70);
            .sc-menu-head{
                display: block;
                height: .3rem;
                line-height: .3rem;
                text-align: left;
                text-indent: .1rem;
                background-color: rgb(9, 13, 40);
            }
            .sc-menu-contain{
                height: 4.7rem - .2rem;
                overflow-y: scroll;
                box-sizing: border-box;

                /*滚动条样式*/
                &::-webkit-scrollbar {/*滚动条整体样式*/
                    width: 40px;     /*高宽分别对应横竖滚动条的尺寸*/
                    height: 40px;
                }
                &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                    border-radius: 5px;
                    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                    background: rgba(0,0,0,0.2);
                }
                &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.2);
                    border-radius: 0;
                    background: rgba(0,0,0,0.1);
                }
                /*end*/

                .sc-menu-item-box{
                    height: .4rem;
                    line-height: .4rem;
                    text-align: left;
                    text-indent: .1rem;
                    cursor: pointer;
                    border-bottom: 1px solid #333;
                }
            }
            .sc-menu-none{
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                width: .3rem;
                height: .3rem;
                margin: auto;
                text-align: center;
                line-height: .3rem;
                display: none;
            }
        }
    }
    .sc-bottom-box{
        display: flex;
        align-items: center;
        height: .8rem;
        margin-left: .1rem;
        .sc-bottom-menu-box{
            flex: 6 0 80%;
            display: flex;
            align-items: center;
            height: .8rem;
            overflow-x: hidden;
            .sc-bottom-menu-item{
                width: .8rem;
                height: .6rem;
                margin: 0 .1rem;
                padding-top: .1rem;
                text-align: center;
                box-sizing: border-box;
                .sc-bottom-menu-item-icon{
                    display: block;
                    width: .3rem;
                    height: .3rem;
                    margin: 0 auto .05rem auto;
                    background-color: orange;
                }
            }

            /*底部列表选中样式*/
            .sc-screen-list-select{
                border: 2px solid yellowgreen;
                box-shadow: 0 0 5px yellowgreen;
            }
        }
        .sc-button-box{
            flex: 1 0 20%;
            margin-left: .2rem;
            text-align: center;
            .sc-button-save{
                display: inline-block;
                width: .5rem;
                height: .5rem;
                margin-right: .15rem;
                background-image: url('保存.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                border-radius: 50%;
                &:hover{
                    box-shadow: 0 0 10px #EEE;
                }
            }
            .sc-button-back{
                display: inline-block;
                width: .5rem;
                height: .5rem;
                text-decoration: none;
                background-image: url('返回.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                border-radius: 50%;
                &:hover{
                    box-shadow: 0 0 10px #EEE;
                }
            }
        }
    }
}
</style>