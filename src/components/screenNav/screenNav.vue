<template>
<div>
    <button @click = "handleClick(tag.SELECT)">选择信号</button>
    <button @click = "handleClick(tag.CLOSE)">X</button>
    <p v-show = "func_item">{{func_item}}</p>
    <div v-show = "level === tag.FIRST">
        <ul>
            <li v-for = "(item, index) in list" 
            @click = "handleClick(item.routingkey, index)">{{item.name}}</li>
        </ul>
    </div>
    <div v-show = "level === tag.SECOND">
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
    </div>
    <button @click = "handleClick(tag.BACK)" v-show = "!func_item && level && level!==tag.FIRST">返回上一级</button>
</div>
</template>

<script type="text/ecmascript-6">
import {KEY_NAV_LIST, getStorage} from '@common/js/storage';
 
export default{
    name: 'screenNav',
    data: function() {
        return {
            level: null,
            func_item: null,
            sub_list: [],
            third_list: [],
            tag: {
                FIRST: 'first',
                SECOND: 'second',
                THIRD: 'third',
                CLOSE: 'close',
                BACK: 'back',
                SELECT: 'select',
                VISION: 'GXX:VISION',
                THEME: 'GXX:THEME'
            }
            
        }
    },
    beforeMount(){
        this.initData();
    },
    methods: {
        handleClick(key, index = null){
            switch (key){
                case this.tag.VISION:
                    this.showMenu(index);
                    break;

                case this.tag.THEME: 
                    this.showSubMenu(index);
                    break;

                case this.tag.BACK:
                    this.goBackMenu();
                    break;

                case this.tag.SELECT: 
                    this.selectSingle();
                    break;

                case this.tag.CLOSE: 
                    this.closeSingle();
                    break;

                default: 
                    break;
            }
        },
        initData(){
            this.list = getStorage(KEY_NAV_LIST);
        },
        showMenu(index){
            this.level = this.tag.SECOND;
            this.sub_list = this.list[index].subSystem;
        },
        showSubMenu(index){
            this.level = this.tag.THIRD;
            this.third_list = this.sub_list[index].subSystem;
        },
        selectSingle(){
            this.level = this.tag.FIRST;
        },
        closeSingle(){
            this.level = null;
            this.func_item = null;
        },
        goBackMenu(){

            if(!this.func_item){

                if(this.level === this.tag.SECOND){

                    this.level = this.tag.FIRST;

                }else if(this.level === this.tag.THIRD){

                    this.level = this.tag.SECOND;
                }
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