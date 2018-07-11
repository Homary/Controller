<template>
<div>
    <button @click = "handleClick(tag.SELECT)" v-show = "!func_item">选择信号</button>
    <button @click = "handleClick(tag.CLOSE)" v-show = "func_item">X</button>
    <p v-show = "func_item" class="sn-select-func" :data-id="menu_id">{{func_item}}</p>
    <div v-show = "level">
        <ul>
            <li v-for = "(item, index) in list" 
            @click = "handleClick(tag.MENU, index)">{{item.name}}</li>
        </ul>
    </div>
    <button @click = "handleClick(tag.BACK)" v-show = "!func_item && level && level!==tag.FIRST">返回上一级</button>
</div>
</template>

<script type="text/ecmascript-6">
import {KEY_NAV_LIST, getStorage} from '@common/js/storage';
import eventBus from '@common/js/eventBus';

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
            },
            menu_id: ''
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
            this.menu_id = this._menu_id;
            this._menu_id = '';
            this.list = getStorage(KEY_NAV_LIST);
        },
        getMenuData(index){

            if(this.list[index].subSystem){

                this._menu_id += `${this.list[index].id}@`;
                this.lastList.push(this.list);
                this.list = this.list[index].subSystem;

            }else{

                this.func_item = this.list[index].name;
                this._menu_id += this.list[index].id;
                this.lastList = [];
                this.hideMenu();
                this.initData();
            }
        },
        showMenu(){
            this.level = true;
            this.$router.push({path: '/'});
        },
        hideMenu(){
            this.level = false;
        },
        closeSingle(){
            this.level = null;
            this.func_item = null;
            this.menu_id = null;
        },
        goBackMenu(){
            if(this.lastList.length){
                this.list = this.lastList.pop();

               let _arr =  this._menu_id.split('@');

               _arr.splice(length-2, 1);

               if(_arr.length === 1){
                    this._menu_id = '';
               }else{
                    this._menu_id = _arr.join('@');
               }

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