<!-- 分屏首页 -->
<template>
<div>
    <div>
        <div class="sc-container">
            <div class="sc-top-box">
                <div class="sc-top-screen">
                    <screen :screen_id="screen_id"></screen>
                    <saveWindow :win_condition = "win_condition" v-on:win_hidden= "hideWindow" v-on:win_save="getPlanName"
            class="sc-screen-none"></saveWindow>
                </div>
                <div class="sc-top-menu">
                    <span class="sc-menu-head"><i></i>预案选择</span>
                    <ul class="sc-menu-contain">
                        <li class="sc-menu-item-box" v-for = "(item, index) in planList"
                            @click="handleSelectPlan(item)" v-on:mouseenter="handleHoverPlanList(index)" v-on:mouseleave="handleLeavePlanList">
                            {{item.name}} 
                            <i v-show="index==hover_plan" 
                                @click="handleDelPlanItem(item)"
                                class="sc-del-plan-icon">X</i>
                        </li>
                    </ul>
                    <span class="sc-menu-none">暂无</span>
                </div>
            </div>
            <div class="sc-bottom-box">
                <ul class="sc-bottom-menu-box">
                    <li tag="li" :class="['sc-bottom-menu-item' ,{'sc-screen-list-select':  item.id == $store.state.splitId}]" :id="item.id" 
                        v-for = "item in screenList" :key = "item.id" :name = "item.name"
                        @click = "handleScreenSelect" :ref="'screenItem' + item.id">
                        <div>
                            <i class="sc-bottom-menu-item-icon" :style="{'background-image': 'url('+ item.iconUrl +')'}"></i>
                            <span>{{item.name}}</span>
                        </div>
                    </li>
                </ul>
                <div class="sc-button-box">
                    <span @click = "handleSave" class="sc-button-save"></span>
                    <span @click="clickGoBack" class="sc-button-back" ></span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import {getScreenList, getPlanList, savePlan, delPlan, sendSwitchScreenIns, sendPlanId} from '@api/index';
import screen from '@components/screen/screen.vue';
import saveWindow from '@components/saveWindow/saveWindow.vue';
import eventBus from '@common/js/eventBus';
import * as types from '@src/store/mutation-types';
import {SUC_CODE, ERR_GET_SCREEN_INFO, ERR_GET_PLAN_LIST, ERR_SAVE_PLAN_INFO, ERR_SENT_TIME_OUT} from '@common/js/stateCode';

export default{
    name: 'splitSreen',
    components: {
        screen,
        saveWindow
    },
    data: function() {
        return {
            hover_plan: null,
            screenList: [],
            planList: [],
            win_condition: '',
            plan_name: '',
            screen_id: '',
            splitId: null, // 存放当前选择的分屏项
            mapTable: {
                '全屏': 'fullScreen',
                '二分屏': 'diy',
                '等分屏': 'screen1x2',
                '三分屏': 'screen1x3',
                '四分屏': 'screen2x2',
                '六分屏': 'screen2x3',
                '3X3分屏': 'screen3x3',
                '4X4分屏': 'screen4x4'  
            }
        }
    },
    mounted(){

        // 主页以及分屏图标
        eventBus.$emit('splitRouteChange', false);
        eventBus.$emit('indexRouteChange', true);

        this._getScreenList();
        this._getPlanList();

        this.$nextTick(() => {

            if( !this.$store.state.position ){

                // 初始化为全屏模式
                this.sendScreenId('全屏');

                this.setSelectId('1');
            }else{
                this.sendScreenId(this.$store.state.screen.screenId);

                this.setSelectId(this.$store.state.splitId);
            }

console.log('mounted')
            eventBus.$on('sendInstruction', this._sendScreenInstruction);
            eventBus.$on('toggleScreenMode', this.isSelectSys);
            eventBus.$on('toggleSys', this.isToggleSys);
        })
        
    },
    beforeRouteEnter(to, from, next){
        let path = from.path;

        eventBus.$emit('splitRouteChange', false);

        /**
         * 判断如果不是由主页跳转过来的, 说明已经选择了系统
         */
        if(path.length !== 1){
            next((vm) => {
                if(vm.$store.state.position){
                    vm.setSelectSys();
                }     
            });
        }else{
            next();
        }
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
                    this.$store.commit(types.SET_ACTION, data.data.action);
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

        _sendScreenInstruction(){
            let action = this.$store.state.action ? this.$store.state.action.switchScreen : null,
                splitId = this.$store.state.splitId,
                screenId = this.$store.state.screen.screenId,
                windows = this.$store.state.cur_sys[this.mapTable[screenId]],
                _wins = [],
                data = {};

            // 切换分屏
            if( !this.$store.state.toggleSys ){
                for(let key in windows){
                    let _winItem = Object.assign({}, windows[key]);

                    _wins.push({
                        "windex": _winItem.wIndex,
                        "sysId": _winItem.id,
                        "wid": key
                    });
                }

                data = {
                    "action": action,
                    "params": {
                        "splitId": splitId*1,
                        "windows": _wins
                    }
                }

                this._sendInstruction(data, 'screen');

            // 切换系统时
            }else{
                let position = this.$store.state.position,
                    sysId = this.$store.state.sysId,
                    wIndex = this.$store.state.cur_sys[this.mapTable[screenId]][position].wIndex,
                    action = this.$store.state.action.switchSystem;

                if(!sysId) {
                    return;
                }

                data = {
                    "action": action,
                    "params": {
                        "splitId": splitId*1,
                        "windex": wIndex,
                        "sysId": sysId
                    }
                }

                this._sendInstruction(data, 'system');
            }
          
            // 防止多次触发
            eventBus.$off('sendInstruction');
            eventBus.$off('isToggleSys');

        },

        _sendInstruction(data, type){
            let _windows = [];

            try{
                if(!data.action || !data.params.windows.length){
                    return;
                }
                
            }catch(err){
                // 切换系统时某些属性不存在
            }     

            switch(type){
                case 'screen':
                    // 过滤掉未选择系统的窗口
                    if(data.params.windows){
                        for(let i=0, len=data.params.windows.length; i<len; i++){
                            if(data.params.windows[i].sysId >= 0){
                                _windows.push(data.params.windows[i]);
                            }
                        }

                        data.params.windows = _windows;
                    }

                    // 选择预案, 不发送请求
                    // 没系统
                    // 防止多次发送同条分屏指令

                    if(data.params.splitId === this.$store.state.cancelSendD || data.params.windows.length === 0 || this.$store.state.planData){
                        console.log('过滤重复发送指令');
                        return;
                    }

                    sendSwitchScreenIns(data).then((data) => {
                        if(data.errorcode === ERR_SENT_TIME_OUT){
                            alert('请求超时');
                        }else if(data.errorcode === SUC_CODE){
                            console.log('分屏指令发送成功');
                        }else{
                            alert(data.msg);
                        }
                    })

                    // 选择了系统,下一次选择就是切换
                    this.$store.commit(types.SET_TOGGLE_SYS, true);

                    // 防止多次发送指令
                    this.$store.commit(types.SET_SEND_DUNBLE, data.params.splitId);

                    break;

                case 'system':
                    
                    sendSwitchScreenIns(data).then((data) => {
                        if(data.errorcode === ERR_SENT_TIME_OUT){
                            alert('请求超时');
                        }else if(data.errorcode === SUC_CODE){
                            console.log('指令发送成功')
                        }else{
                            alert('未知错误');
                        }

                    })

                    break;

                default: 
                    break;
            }
        },

        // 切换系统时, 发送指令
        isToggleSys(){
console.log('切换系统');
            this._sendScreenInstruction();
        },

        /**
         * 设置之前选择的分屏模式
         */
        setSelectSys(){
            this.screen_id = this.$store.state.screen.screenId;
        },

        handleScreenSelect(event){
            event.preventDefault();
            event.stopPropagation();

            this.$store.commit(types.SET_PLAN_TAG, false);

            this.$store.commit(types.SET_FROM_PLAN, true);

            this.addSelectClass(event.currentTarget);

            this.sendScreenId(event.currentTarget.getAttribute('name'));

            this.setSelectId(event.currentTarget.getAttribute('id'));

            this.clearSelectPlanClass();
        },

        // 切换分屏模式时, 系统存在
        isSelectSys(){
            let screen_id = this.screen_id,
                systems = this.$store.state.cur_sys[this.mapTable[screen_id]];

            // 选择了系统,下一次选择就是切换
            this.$store.commit(types.SET_TOGGLE_SYS, false);

            for(let key in systems){
                if(systems[key].id >= 0){
                    this._sendScreenInstruction();

                    // 选择了系统,下一次选择就是切换
                    this.$store.commit(types.SET_TOGGLE_SYS, true);

                    return;
                }
            }

        },

        addSelectClass(elm){
            let _class = 'sc-screen-list-select',
                elms = document.getElementsByClassName(_class);

            for(let i=0, len=elms.length; i<len; i++){
                elms[i].classList.remove(_class);
            }
            elm.classList.add(_class)
        },

        addSelectPlanClass(elm){
            let _class = 'sc-screen-plan-select',
                elms = document.getElementsByClassName(_class);

            for(let i=0, len=elms.length; i<len; i++){
                elms[i].classList.remove(_class);
            }
            elm.classList.add(_class);
        },
        clearSelectPlanClass(){
            let _class = 'sc-screen-plan-select',
                elms = document.getElementsByClassName(_class);

            for(let i=0, len=elms.length; i<len; i++){
                elms[i].classList.remove(_class);
            }
        },
        setSelectId(id){
            this.splitId = id;
            this.$store.commit(types.SET_SPLIT_ID, id);
        },
        sendScreenId(name){
            this.screen_id = name;
        },
        clickGoBack(){
            this.$router.push({path: this.$store.state.lastPath});
            this.$store.commit(types.SET_TIP_SPLIT, false);
        },

        handleSave(){
            this.showSaveWindow(true);
        },
        showSaveWindow(boo){
            this.win_condition = boo;
        },
        hideWindow(boo){
            this.showSaveWindow(boo);
        },

        /**
         * 保存预案
         * @param  {string} name 预案名称
         */
        getPlanName(plan_name){

            let splitId = this.$store.state.splitId,
                screen_id = this.$store.state.screen.screenId,
                mode = this.$store.state.cur_sys[this.mapTable[screen_id]],
                keys = Object.keys(mode),
                windows = [];

            for(let i=0, len=keys.length; i<len; i++){
                windows.push({
                    wid: '', 
                    sysId: -1,
                    wIndex: 0
                });

                if(mode[keys[i]].id >= 0){

                    windows[i].sysId = mode[keys[i]].id;
                }else{
                    windows[i].sysId = -1;
                }
                
                windows[i].wid = keys[i];
                windows[i].wIndex = mode[keys[i]].wIndex;
            }

            // 取得当前各个分屏信息
            // POST 请求
            this._savePlan({
                name: plan_name,
                splitId,
                windows 
            })

            this.showSaveWindow(false);
        },
        _savePlan(data){
            savePlan(data).then(res => {
                if(res.errorcode === SUC_CODE){
                    alert('保存成功');
                    this._getPlanList();
                }else{
                    alert(res.msg);
                }
            })
        },

        handleSelectPlan(item){
            let event = window.event || event;

            this.$store.commit(types.SET_TIP_SPLIT, true);
            this.addSelectPlanClass(event.target);
            this.clearPlan();
            this.selectPlan(item);
        },
        clearPlan(){
            this.$store.commit(types.INIT_CUR_SYS);
        },
        selectPlan(item){

            // 如果不存在list, 就从缓存中取
            if(!this.$store.state.list.length){
                this.$store.commit(types.FLASE_NAV_LIST);
            }

            let _name,
                name,
                windows = item.windows,
                _id = item.id;

            for(let i=0, len=this.screenList.length; i<len; i++){
                if(this.screenList[i].id == item.splitId){
                    _name = this.screenList[i].name;
                }
            }
            name = this.mapTable[_name];

            for(let i=0, len=this.screenList.length; i<len; i++){

                if(this.screenList[i].id == item.splitId){
                    this.screen_id = this.screenList[i].name;

                    this.$store.commit(types.SET_SCREEN_ID, this.screen_id);
                }
            }

            this.$store.commit(types.SET_SPLIT_ID, item.splitId);
            this.$store.commit(types.SET_PLAN_DATA, {name, windows});

            this._selectPlan({
                "id": _id
            });
        },
        _selectPlan(id){
            sendPlanId(id).then(data => {
                if(data.errorcode === SUC_CODE){
                    console.log('选择预案成功');
                }else{
                    alert(data.msg);
                }
            })
        },

        handleHoverPlanList(index){
            let event = window.event || event;

            this.hoverPlanList(index);
        },
        hoverPlanList(index){
            this.hover_plan = index;
        },
        handleLeavePlanList(){
            this.hover_plan = null;
        },

        handleDelPlanItem(item){
            let event = window.event || event;

            event.stopPropagation();
            event.preventDefault();

            this._delPlanItem(item.id);
        },
        _delPlanItem(id){
            delPlan({"id": id}).then(data => {
                if(data.errorcode === SUC_CODE){
                    alert('删除成功');
                    this._getPlanList();
                }else{
                    alert('删除失败');
                }
            })
        }
    }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>


// 屏幕高度 < 800px;
@media only screen and (max-height: 700px){
    .sc-top-box{
        height: 3.2rem !important;
        .sc-menu-contain{
            height: 3rem !important;
            box-sizing: border-box;
            .sc-menu-item-box{
                display: flex;
                height: .3rem !important;
                line-height: .3rem !important;
            }
        }
    }
}

@media only screen and (max-height: 1000px) and (min-width: 1400px){
    .sc-top-box{
        height: 4rem !important;
        .sc-menu-contain{
            height: 3.5rem !important;
            box-sizing: border-box;
            .sc-menu-item-box{
                display: flex;
                height: .3rem !important;
                line-height: .3rem !important;
            }
        }
    }
}

// 屏幕宽度 > 1700px;
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
                    display: flex;
                    justify-content: space-between;
                    height: .4rem;
                    line-height: .4rem;
                    text-align: left;
                    text-indent: .1rem;
                    cursor: pointer;
                    border-bottom: 1px solid #333;
                    .sc-del-plan-icon{
                        margin-right: 10px;
                        color: red;
                        font-size: 120%;
                    }
                }

                /* 预案列表选中样式 */
                .sc-screen-plan-select{
                    background-color: deepskyblue !important;
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
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                }
            }

            /* 底部列表选中样式 */
            .sc-screen-list-select{
                background-image: url('选中底图.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
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