<!-- 二级菜单 -->
<template>
<div class="sl-container">
    <button @click="handleClick">返回上一页</button>
    <ul class="ul">
        <li v-for="item in list" :id="item.id">
            <router-link :to="'/subList/' + id + '/' + item.id">
                <i class="" :style="{'background-image': 'url(' + item.iconUrl + ')'}"></i>
                <span>{{item.name}}</span>
            </router-link>
        </li>
    </ul>
</div>
</template>

<script type="text/ecmascript-6">
import * as types from '@src/store/mutation-types';

export default{
    name: '',
    props: ['id'],
    computed: {
        list: function() {
            if(!this.$store.state.list.length){
                this.$store.commit(types.FLASE_NAV_LIST);
            }

            return this.$store.state.list[this.id -1].subSystem;
        }
    },
    methods: {
        handleClick(event) {
            event.preventDefault();
            event.stopPropagation();

            this.routeGoBack();
            return;
        },
        routeGoBack(){
            this.$router.go(-1);
            return;
        }
    }

}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.sl-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -150%);
}
.ul{
    font-size: .12rem;
    color: red;
    li a{
        text-decoration: none;
        color: red;
    }
}
</style>