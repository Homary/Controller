<!-- 二级菜单 -->
<template>
<div class="td-container">
    <button @click="$router.go(-1)">返回上一页</button>
    <ul class="td-ul">
        <li v-for="item in list">{{item.name}}</li>
    </ul>
</div>
</template>

<script type="text/ecmascript-6">
import * as types from '@src/store/mutation-types';

export default{
    name: 'thirdList',
    props: ['index', 'i_index'],
    computed: {
        list(){
            if(!this.$store.state.list.length){
                this.$store.commit(types.FLASE_NAV_LIST);
            }
            return this.$store.state.list[this.index].subSystem[this.i_index].subSystem;
        }
    }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.td-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
}
.td-ul{
    font-size: .12rem;
    color: red;
    li{
        line-height: .3rem;
    }
}
</style>