<!-- 分屏展示 -->
<template>
<div class="screen-wrapper">
    <div ref = "fullScreen" class="screen-contain-box">
        <div class="full-screen-box screen-size">
            <screenNav class="full-nav"></screenNav>
        </div>
    </div>
    <div ref = "screen1x2" class="screen-contain-box">
        <div class="screen-box-1x2">
            <div class="screen-left screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-right screen-size">
                <screenNav></screenNav>
            </div>
        </div>
    </div>
    <div ref = "screen1x3" class="screen-contain-box">
        <div class="screen-box-1x3">
            <div class="screen-left screen-size"><screenNav></screenNav></div>
            <div class="screen-center screen-size"><screenNav></screenNav></div>
            <div class="screen-right screen-size"><screenNav></screenNav></div>
        </div>
    </div>
    <div ref = "screen2x2" class="screen-contain-box">
        <div class="screen-box-2x2">
            <div class="screen-top-left screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-top-right screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-bottom-left screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-bottom-right screen-size">
                <screenNav></screenNav>
            </div>
        </div>
    </div>
    <div ref = "screen2x3" class="screen-contain-box">
        <div class="screen-box-2x3">
            <div class="screen-top-left screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-top-center screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-top-right screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-bottom-left screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-bottom-center screen-size">
                <screenNav></screenNav>       
            </div>
            <div class="screen-bottom-right screen-size">
                <screenNav></screenNav>
            </div>
        </div>
    </div>
    <div ref = "screen3x3" class="screen-contain-box">
        <div class="screen-box-3x3">
            <div class="screen-top-left screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-top-center screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-top-right screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-center-left screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-center-center screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-center-right screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-bottom-left screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-bottom-center screen-size">
                <screenNav></screenNav>
            </div>
            <div class="screen-bottom-right screen-size">
                <screenNav></screenNav>
            </div>
        </div>
    </div>
    <div ref = "screen4x4" class="screen-contain-box">
        <div class="screen-box-4x4">
            <div class="one-one screen-size">
                <screenNav></screenNav>
            </div>
            <div class="one-two screen-size">
                <screenNav></screenNav>
            </div>
            <div class="one-three screen-size">
                <screenNav></screenNav>
            </div>
            <div class="one-four screen-size">
                <screenNav></screenNav>
            </div>
            <div class="two-one screen-size">
                <screenNav></screenNav>
            </div>
            <div class="two-two screen-size">
                <screenNav></screenNav>
            </div>
            <div class="two-three screen-size">
                <screenNav></screenNav>
            </div>
            <div class="two-four screen-size">
                <screenNav></screenNav>
            </div>
            <div class="three-one screen-size">
                <screenNav></screenNav>
            </div>
            <div class="three-two screen-size">
                <screenNav></screenNav>
            </div>
            <div class="three-three screen-size">
                <screenNav></screenNav>
            </div>
            <div class="three-four screen-size">
                <screenNav></screenNav>
            </div>
            <div class="four-one screen-size">
                <screenNav></screenNav>
            </div>
            <div class="four-two screen-size">
                <screenNav></screenNav>
            </div>
            <div class="four-three screen-size">
                <screenNav></screenNav>
            </div>
            <div class="four-four screen-size">
                <screenNav></screenNav>
            </div>
        </div>
    </div>
    <div ref = "diy" class="screen-contain-box">
        <div class="screen-box-diy">
            <div class="screen-size screen-left">
                <screenNav></screenNav>
            </div>
            <div class="screen-right">
                <div class="screen-right-top screen-size">
                    <screenNav></screenNav>
                </div>
                <div class="screen-right-bottom screen-size">
                    <screenNav></screenNav>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import screenNav from '@components/screenNav/screenNav.vue';

export default{
    name: 'screen',
    components: {
        screenNav
    },
    props: ['screen_id'],
    watch: {
        'screen_id': {
            handler: function(newVal, old){
                this.showScreen(newVal);
            },
            immediate: true
        }
    },
    methods: {
        showScreen(id){
            let refs = this.$refs,
                mapTable =  {
                    '1*1分屏': 'fullScreen',
                    '1*2分屏': 'screen1x2',
                    '1*3分屏': 'screen1x3',
                    '2*2分屏': 'screen2x2',
                    '2*3分屏': 'screen2x3',
                    '3*3分屏': 'screen3x3',
                    '4*4分屏': 'screen4x4',
                    '自定义分屏': 'diy'
                }

            for(let key in refs){
                refs[key].setAttribute('style', 'display: none');
            }

            if(mapTable[id]){
                refs[mapTable[id]].setAttribute('style', 'display: block');
            }
        }
    }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.screen-wrapper{
    width: 100%;
    height: 100%;
    .screen-contain-box{
        height:100%;

        /*全部分屏里内容水平垂直居中*/
        .screen-size{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        /*end*/

        /*全屏*/
        .full-screen-box{
            width: 100%;
            height: 100%;
        }
        /*end*/

        /* 1x2分屏 */
        .screen-box-1x2{
            display: flex;
            width: 100%;
            height: 100%;
            .screen-size{
                flex: 1 1 50%;
                box-sizing: border-box;
            }
            .screen-left{
                border-right: 3px solid #DDD;
                // background-color: red;
            }
            .screen-right{
                // background-color: blue;
            }
        }
        /*end*/

        /* 1x3分屏 */
        .screen-box-1x3{
            display: flex;
            width: 100%;
            height: 100%;
            .screen-size{
                flex: 1 1 33%;
                box-sizing: border-box;
            }
            .screen-left, .screen-center{
                border-right: 3px solid #DDD;
            }
            .screen-left{
                // background-color: red;
            }
            .screen-center{
                // background-color: green;
            }
            .screen-right{
                // background-color: blue;
            }
        }
        /*end*/

        /* 2x2分屏 */
        .screen-box-2x2{
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            .screen-size{
                flex: 1 1 50%;
                height: 50%;
                box-sizing: border-box;
            }
            .screen-top-left, .screen-bottom-left{
                border-right: 3px solid #DDD;
            }
            .screen-top-left, .screen-top-right{
                border-bottom: 3px solid #DDD;
            }
            .screen-top-left{
                // background-color: red;
            }
            .screen-top-right{
                // background-color: green;
            }
            .screen-bottom-left{
                // background-color: blue;
            }
            .screen-bottom-right{
                // background-color: yellowgreen;
            }
        }
        /*end*/

        /* 2x3分屏 */
        .screen-box-2x3{
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            .screen-size{
                flex: 1 1 30%;
                height: 50%;
            }
            .screen-top-left, .screen-top-center, .screen-bottom-left, .screen-bottom-center{
                border-right: 3px solid #DDD;
            }
            .screen-top-left, .screen-top-center, .screen-top-right{
                border-bottom: 3px solid #DDD;
            }
            .screen-top-left{
                // background-color: red;
            }
            .screen-top-center{
                // background-color: green;
            }
            .screen-top-right{
                // background-color: blue;
            }
            .screen-bottom-left{
                // background-color: yellowgreen;
            }
            .screen-bottom-center{
                // background-color: deepskyblue;
            }
            .screen-bottom-right{
                // background-color: pink;
            }
        }
        /*end*/

        /* 3x3分屏 */
        .screen-box-3x3{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            .screen-size{
                flex: 1 1 30%;
                height: 33%;
                box-sizing: border-box;
            }
            .screen-top-left, .screen-top-center, .screen-center-left, .screen-center-center, .screen-bottom-left, .screen-bottom-center{
                border-right: 3px solid #DDD;
            }
            .screen-top-left, .screen-top-center, .screen-top-right, .screen-center-left, .screen-center-center, .screen-center-right{
                border-bottom: 3px solid #DDD;
            }
        }
        /*end*/

        /* 4x4分屏 */
        .screen-box-4x4{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            .screen-size{
                flex: 1 1 25%;
                height: 25%;
                box-sizing: border-box;
            }
            .one-one, .one-two, .one-three, .two-one, .two-two, .two-three, .three-one, .three-two, .three-three, .four-one, .four-two, .four-three{
                border-right: 3px solid #DDD;
            }
            .one-one, .one-two, .one-three, .one-four, .two-one, .two-two, .two-three, .two-four, .three-one, .three-two, .three-three, .three-four{
                border-bottom: 3px solid #DDD;
            }
        }
        /*end*/

        /* 自定义分屏 */
        .screen-box-diy{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            .screen-left{
                flex: 1 1 50%;
                box-sizing: border-box;
                border-right: 3px solid #DDD;
            }
            .screen-right{
                flex: 1 1 50%;
                height: 100%;
                box-sizing: border-box;
                .screen-right-top{
                    width: 100%;
                    height: 50%;
                    border-bottom: 3px solid #DDD;
                    box-sizing: border-box;
                }
                .screen-right-bottom{
                    width: 100%;
                    height: 50%;
                }
            }
        }
        /*end*/
    }
}

</style>
