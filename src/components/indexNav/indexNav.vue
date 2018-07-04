<template>
<div class="in-wraper">
    <i class="left-btn nav-btn" @click = "handleLeft"></i>
    <div class="in-screen">
        <div class="item-box item-box1" ref = "navItem1">
            <span class="nav-item nav-item-one">法人库</span>
            <span class="nav-item nav-item-two">制作门户</span>
            <span class="nav-item nav-item-three">目录管理</span>
            <span class="nav-item nav-item-four">人口库</span>
        </div>
        <div class="item-box item-box2" ref = "navItem2">
            <span class="nav-item">5</span>
            <span class="nav-item">6</span>
            <span class="nav-item">7</span>
            <span class="nav-item">8</span>
        </div>
        <div class="item-box item-box3" ref = "navItem3">
            <span class="nav-item">9</span>
            <span class="nav-item">10</span>
            <span class="nav-item">11</span>
            <span class="nav-item">12</span>
        </div>
    </div>
    <i class="right-btn nav-btn" @click = "handleRight"></i>
</div>
</template>

<script type="text/ecmascript-6">
export default{
    name: '',
    data: function() {
        return {
            count: 1        
        }
    },
    mounted: function() {

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
        moveItem: function(p) {
            let items = this.$refs;

            if (this.count === 3) { // 最右
                this.count = 0;
            }
            if (this.count === -1) { // 最左
                this.count = 2;
            }
console.log(this.count)
            for(let key in items){
                items[key].style.left = -8*this.count + 'rem';
            }
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.in-wraper{
    display: flex;
    align-items: center;
    .nav-btn{
        width: .3rem;
        height: .3rem;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        &:hover{
            transform: scale(2);
        }
    }
    .left-btn{
        background-image: url('point_left.png');
    }
    .right-btn{
        background-image: url('point_right.png');
    }
    .in-screen{
        display: flex;
        width: 8rem;
        height: 2rem;
        overflow: hidden;
        .item-box{
            position: relative;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex: 1 0 100%;
            height: 2rem;
            overflow: hidden;
            .nav-item{
                width: 1.5rem;
                height: 2.2rem;
                margin-top: -.2rem;
                font-size: .16rem;
                color: #EEE;
                text-align: center;
                line-height: 25;
                //background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: 50% 50%;
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