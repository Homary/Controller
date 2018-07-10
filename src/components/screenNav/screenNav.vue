<template>
<div>
    <button @click = "handleClick(tag.SELECT)" v-show = "!func_item">选择信号</button>
    <button @click = "handleClick(tag.CLOSE)" v-show = "func_item">X</button>
    <p v-show = "func_item">{{func_item}}</p>
    <div v-show = "level">
        <ul>
            <li v-for = "(item, index) in list" 
            @click = "handleClick(tag.MENU, index)">{{item.name}}</li>
        </ul>
    </div>
<!--     <div v-show = "level === tag.SECOND">
        <ul>
            <li v-for = "(item, index) in sub_list" 
            @click = "handleClick(item.routingkey, index)">{{item.name}}</li>
        </ul>
    </div>
    <div v-show = "level === tag.THIRD && !func_item">
        <ul>
            <li v-for = "(item, index) in third_list" @click = "func_item = item.name"
            >{{item.name}}</li>
        </ul>
    </div> -->
    <button @click = "handleClick(tag.BACK)" v-show = "!func_item && level && level!==tag.FIRST">返回上一级</button>
</div>
</template>

<script type="text/ecmascript-6">
import {KEY_NAV_LIST, getStorage} from '@common/js/storage';
 
export default{
    name: 'screenNav',
    data: function() {
        return {
            level: false,
            func_item: null,
            list: [],
            lastList: [],
            tag: {
                MENU: 'menu',
                CLOSE: 'close',
                BACK: 'back',
                SELECT: 'select'
            }
        }
    },
    beforeMount(){
        this.initData();
    },
    methods: {
        handleClick(key, index = null){
            switch (key){
                case this.tag.MENU:
                    this.getMenuData(index);
                    break;

                case this.tag.SELECT: 
                    this.showMenu();
                    break;

                case this.tag.CLOSE: 
                    this.closeSingle();
                    break;

                case this.tag.BACK: 
                    this.goBackMenu();
                    break;

                default: 
                    break;
            }
        },
        initData(){
            this.list = getStorage(KEY_NAV_LIST);
        },
        getMenuData(index){
            if(this.list[index].subSystem){

                this.lastList.push(this.list);
                this.list = this.list[index].subSystem;

            }else{

                this.func_item = this.list[index].name;
                this.lastList = [];

                this.hideMenu();
                this.initData();
            }
        },
        showMenu(){
            this.level = true;
        },
        hideMenu(){
            this.level = false;
        },
        closeSingle(){
            this.level = null;
            this.func_item = null;
        },
        goBackMenu(){
            if(this.lastList.length){
                this.list = this.lastList.pop();
            }else{
                this.hideMenu();
            }
        }
    }   
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
li{
    height: .2rem;
    line-height: .2rem;
}
</style>    