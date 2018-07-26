<!-- 分屏展示 -->
<template>
<div class="screen-wrapper">
    <div ref = "fullScreen" class="screen-contain-box">
        <div class="full-screen-box">
            <div class="screen-center screen-size">
                <button @click="handleClick('select')" @tap="handleClick('select')" v-show="$store.state.cur_sys['fullScreen']['screen-center']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['fullScreen']['screen-center']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['fullScreen']['screen-center']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
        </div>
    </div>
    <div ref = "screen1x2" class="screen-contain-box">
        <div class="screen-box-1x2">
            <div class="screen-left screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen1x2']['screen-left']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen1x2']['screen-left']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen1x2']['screen-left']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-right screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen1x2']['screen-right']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen1x2']['screen-right']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen1x2']['screen-right']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
        </div>
    </div>
    <div ref = "screen1x3" class="screen-contain-box">
        <div class="screen-box-1x3">
            <div class="screen-left screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen1x3']['screen-left']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen1x3']['screen-left']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen1x3']['screen-left']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-center screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen1x3']['screen-center']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen1x3']['screen-center']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen1x3']['screen-center']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-right screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen1x3']['screen-right']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen1x3']['screen-right']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen1x3']['screen-right']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
        </div>
    </div>
    <div ref = "screen2x2" class="screen-contain-box">
        <div class="screen-box-2x2">
            <div class="screen-top-left screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen2x2']['screen-top-left']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen2x2']['screen-top-left']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen2x2']['screen-top-left']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-top-right screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen2x2']['screen-top-right']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen2x2']['screen-top-right']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen2x2']['screen-top-right']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-bottom-left screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen2x2']['screen-bottom-left']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen2x2']['screen-bottom-left']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen2x2']['screen-bottom-left']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-bottom-right screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen2x2']['screen-bottom-right']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen2x2']['screen-bottom-right']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen2x2']['screen-bottom-right']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
        </div>
    </div>
    <div ref = "screen2x3" class="screen-contain-box">
        <div class="screen-box-2x3">
            <div class="screen-top-left screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen2x3']['screen-top-left']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen2x3']['screen-top-left']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen2x3']['screen-top-left']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-top-center screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen2x3']['screen-top-center']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen2x3']['screen-top-center']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen2x3']['screen-top-center']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-top-right screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen2x3']['screen-top-right']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen2x3']['screen-top-right']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen2x3']['screen-top-right']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-bottom-left screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen2x3']['screen-bottom-left']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen2x3']['screen-bottom-left']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen2x3']['screen-bottom-left']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-bottom-center screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen2x3']['screen-bottom-center']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen2x3']['screen-bottom-center']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen2x3']['screen-bottom-center']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>       
            </div>
            <div class="screen-bottom-right screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen2x3']['screen-bottom-right']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen2x3']['screen-bottom-right']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen2x3']['screen-bottom-right']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
        </div>
    </div>
    <div ref = "screen3x3" class="screen-contain-box">
        <div class="screen-box-3x3">
            <div class="screen-top-left screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen3x3']['screen-top-left']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen3x3']['screen-top-left']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen3x3']['screen-top-left']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-top-center screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen3x3']['screen-top-center']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen3x3']['screen-top-center']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen3x3']['screen-top-center']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-top-right screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen3x3']['screen-top-right']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen3x3']['screen-top-right']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen3x3']['screen-top-right']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-center-left screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen3x3']['screen-center-left']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen3x3']['screen-center-left']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen3x3']['screen-center-left']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-center-center screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen3x3']['screen-center-center']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen3x3']['screen-center-center']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen3x3']['screen-center-center']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>       
            </div>
            <div class="screen-center-right screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen3x3']['screen-center-right']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen3x3']['screen-center-right']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen3x3']['screen-center-right']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-bottom-left screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen3x3']['screen-bottom-left']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen3x3']['screen-bottom-left']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen3x3']['screen-bottom-left']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-bottom-center screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen3x3']['screen-bottom-center']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen3x3']['screen-bottom-center']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen3x3']['screen-bottom-center']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>       
            </div>
            <div class="screen-bottom-right screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen3x3']['screen-bottom-right']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen3x3']['screen-bottom-right']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen3x3']['screen-bottom-right']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
        </div>
    </div>
    <div ref = "screen4x4" class="screen-contain-box">
        <div class="screen-box-4x4">
            <div class="one-one screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['one-one']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['one-one']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['one-one']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="one-two screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['one-two']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['one-two']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['one-two']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="one-three screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['one-three']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['one-three']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['one-three']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="one-four screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['one-four']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['one-four']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['one-four']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="two-one screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['two-one']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['two-one']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['two-one']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="two-two screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['two-two']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['two-two']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['two-two']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="two-three screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['two-three']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['two-three']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['two-three']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="two-four screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['two-four']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['two-four']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['two-four']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="three-one screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['three-one']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['three-one']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['three-one']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="three-two screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['three-two']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['three-two']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['three-two']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="three-three screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['three-three']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['three-three']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['three-three']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="three-four screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['three-four']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['three-four']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['three-four']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="four-one screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['four-one']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['four-one']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['four-one']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="four-two screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['four-two']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['four-two']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['four-two']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="four-three screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['four-three']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['four-three']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['four-three']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="four-four screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['screen4x4']['four-four']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['screen4x4']['four-four']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['screen4x4']['four-four']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
        </div>
    </div>
    <div ref = "diy" class="screen-contain-box">
        <div class="screen-box-diy">
            <div class="screen-size screen-left">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['diy']['screen-left']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['diy']['screen-left']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['diy']['screen-left']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
            <div class="screen-right screen-size">
                <button @click="handleClick('select')" v-show="$store.state.cur_sys['diy']['screen-right']['name'].length === 0" class="none-single-button">无信号</button>
                <div class="screen-system-show" v-show="$store.state.cur_sys['diy']['screen-right']['name'].length !== 0">
                    <h5>{{$store.state.cur_sys['diy']['screen-right']['name']}}</h5>
                    <button class="sc-button-toggle" @click="handleClick('toggle')">切换系统</button>
                    <button class="sc-button-clear" @click="handleClick('clear')">清空</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import eventBus from '@common/js/eventBus';
import * as types from '@src/store/mutation-types';
import {clearWindow} from '@api/index';
import {SUC_CODE} from '@common/js/stateCode';

export default{
    name: 'screen',
    data: function() {
        return {

            // 映射表, 后台返回的分屏模式 -> DOM节点上的ref属性
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
    props: ['screen_id'],
    watch: {
        'screen_id': {
            handler: function(newVal, old){

console.log(`旧分屏模式 -> %c ${old}`, 'color: #CD3278');
console.log(`新分屏模式 -> %c ${newVal}`, 'color: #9B30FF');

                this.showScreen(newVal);

                let len = Object.keys(this.$refs);

                // position: 是否有点击信号按钮
                // 判断refs是否已经存在 
                if(this.$store.state.position && len.length || this.$store.state.planData){

                    // 分屏模式的切换, old为空: 路由来自主页
                    //                  不为空: 模式切换
                    //           出现old, newVal为undefined的情况
                    if(typeof old === 'undefined'){
                        old = ''
                    }
                    if(typeof newVal === 'undefined'){
                        newVal = ''
                    }

                    if(!old.length){
                        this.setWindowData(newVal);
                    }else{
                        let old_mode = this.mapTable[old],
                            new_mode = this.mapTable[newVal];

                            // 由少屏切换多屏时, 要重新设置screen_id;
                            this.$store.commit(types.SET_SCREEN_ID, newVal);

                        try{
                            this.$store.commit(types.TOGGLE_SCREEN_DATA, {old_mode, new_mode});

                            // 通知splitScreen
                            eventBus.$emit('toggleScreenMode');
                        }catch(error){
                            console.log(`旧分屏模式 -> %c ${old}`, 'color: #CD3278');
                        }
                        
                    }
                    
                }else{
                    // $refs不存在
                }

                eventBus.$emit('sendInstruction');
            },
            immediate: true
        }
    },
    methods: {
        /**
         * 展示哪一个分屏选项
         * @param  {string} id 分屏选项
         * @return {[type]}    通过mapTable映射找到对应的DOM节点
         */
        showScreen(id){
            let refs = this.$refs;

            for(let key in refs){
                refs[key].setAttribute('style', 'display: none');
            }

            if(this.mapTable[id]){
                refs[this.mapTable[id]].setAttribute('style', 'display: block');
            }
        },
        /**
         * 保存当前小窗口的系统名称
         * @param {string} screen_id 当前选中的分屏模式
         */
        setWindowData(screen_id){

            let refs = this.$refs,
                childs,
                fun_arr = [],
                position = this.$store.state.position,
                sysId = this.$store.state.sysId;

            if(this.screen_id.length){
                childs = refs[this.mapTable[this.screen_id]].getElementsByTagName('div');
            }else{

                // 由全屏切换成其他模式, 首次执行$refs不存在
                return;
            }
   
            for(let i=0, len=childs.length; i<len; i++){

                if(childs[i].className === 'screen-system-show'){
                    childs[i].parentNode.classList.remove('screen-size');

                    if(position === childs[i].parentNode.className){
                        let win = {};

                        win.ref = this.mapTable[this.screen_id];
                        win.position = position;
                        win.id = sysId;

                        for(let j=0, _len=this.$store.state.list.length; j<_len; j++){

                            if(this.$store.state.list[j].id === sysId){
                                win.data = this.$store.state.list[j].name;
                            }  
                        }

                        this.$store.commit(types.SET_WINDOW_DATA, win);
                    }

                    childs[i].parentNode.classList.add('screen-size');
                }
            }

            return;
        },
        /**
         * 组件中点击事件的总代理
         * @param  {string} type 标识不同的按钮点击选项
         */
        handleClick(type){

            let path,
                position,
                event = window.event || event;

            switch(type){
                case 'select':
                    path = event.path[1];
                    position = this.getPosition(path);

                    this.setCurSelectScreen(position); 
                    break;

                case 'toggle':
                    path = event.path[2];
                    position = this.getPosition(path);

                    this.setCurSelectScreen(position); 
                    this.$store.commit(types.SET_TOGGLE_SYS, true);

                    eventBus.$emit('toggleSys');
                    break;

                case 'clear':
                    path = event.path[2];
                    position = this.getPosition(path);

                    this.clearCurSystem(this.mapTable[this.screen_id], position);
                    this._clearWindow(this.mapTable[this.screen_id], position);
                    break;

                default: 
                    break;
            }
            
        },
        /**
         * 将当前小窗口的位置发送给主页
         * @param {string} position 小窗口的位置
         */
        setCurSelectScreen(position){

            let screenId = this.screen_id,
                wIndex = this.$store.state.cur_sys[this.mapTable[this.screen_id]][position].wIndex; // 窗口编号从0开始

            this.$store.commit(types.SET_SELECT_SYS, {screenId, position, sysId: null, wIndex});
            this.$router.push({path: '/'});
        },
        /**
         * 获取节点位置
         * @param  {dom} elm 父节点
         */
        getPosition(elm){
            elm.classList.remove('screen-size');

            let position = elm.className;
            elm.classList.add('screen-size');

            return position;
        },
        /**
         * 清除当前小窗口选中的系统
         * @param  {string} screen_id 分屏模式
         * @param  {string} position   窗口位置
         */
        clearCurSystem(screen_id, position){
            this.$store.commit(types.CLEAR_CUR_SYS, {screen_id, position});
        },

        _clearWindow(screen_id, position){
console.log('关闭指令');
            let wIndex = this.$store.state.cur_sys[screen_id][position].wIndex,
                splitId = this.$store.state.splitId,
                action = this.$store.state.action.closeWindow;

            clearWindow({
                "action": action,
                "params": {
                    "windex": wIndex,
                    "splitId": splitId   
                }
            }).then(data => {
                if(data.errorcode === SUC_CODE){
                    console.log('关闭指令发送成功');
                }else{
                    alert(data.msg);
                }
            })
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
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgba(9, 16, 43, .7);
            button{
                color: #EEE;
                text-decoration: none;
                border: 0;
                background-color: transparent;
            }
            .none-single-button{

                // 使Safari点击事件生效
                cursor: pointer;

                &:before{
                    content: '';
                    display: block;
                    width: .3rem;
                    height: .2rem;
                    margin-bottom: 15px;
                    background-image: url('无信号图标.png');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                }
            }
            .screen-system-show{
                text-align: center;
                h5{
                    margin-bottom: .4rem;
                    font-size: 130%;
                    color: #EEE;
                }
                .sc-button-toggle{
                    color: #333;
                    background-color: #EEE;
                    border-radius: 5px;
                    margin-right: .1rem;

                    &:before{
                        content: '';
                        display: inline-block;
                        width: .1rem;
                        height: .1rem;
                        margin-right: 5px;
                        padding: 5px;
                        line-height: .1rem;
                        background-image: url('change.png');
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                    }
                }
                .sc-button-clear{
                    color: #333;
                    background-color: #EEE;
                    border-radius: 5px;

                    &:before{
                        content: '';
                        display: inline-block;
                        width: .1rem;
                        height: .1rem;
                        margin-right: 5px;
                        padding: 5px;
                        line-height: .1rem;
                        background-image: url('clear.png');
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                    }
                }
            }
        }
        /*end*/

        /*全屏*/
        .full-screen-box{
            width: 100%;
            height: 100%;
            .screen-size{
                width: 100%;
                height: 100%;
            }
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
                margin-right: 10px;
            }
        }
        /*end*/

        /* 1x3分屏 */
        .screen-box-1x3{
            display: flex;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            .screen-size{
                flex: 1 1 33%;
                box-sizing: border-box;
            }
            .screen-left, .screen-center{
                margin-right: 10px;
            }
        }
        /*end*/

        /* 2x2分屏 */
        .screen-box-2x2{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            .screen-size{
                flex: 1 1 48%;
                height: 50%;
                box-sizing: border-box;
            }
            .screen-top-left, .screen-bottom-left{
                margin-right: 10px;
            }
            .screen-top-left, .screen-top-right{
                margin-bottom: 10px;
            }
        }
        /*end*/

        /* 2x3分屏 */
        .screen-box-2x3{
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            height: 100%;
            box-sizing: border-box;
            .screen-size{
                flex: 1 1 30%;
                height: 50%;
            }
            .screen-top-left, .screen-top-center, .screen-bottom-left, .screen-bottom-center{
                margin-right: 10px;
            }
            .screen-top-left, .screen-top-center, .screen-top-right{
                margin-bottom: 10px;
            }
        }
        /*end*/

        /* 3x3分屏 */
        .screen-box-3x3{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            .screen-size{
                flex: 1 1 30%;
                height: 33.33%;
                box-sizing: border-box;
            }
            .screen-top-left, .screen-top-center, .screen-center-left, .screen-center-center, .screen-bottom-left, .screen-bottom-center{
                margin-right: 10px;
            }
            .screen-top-left, .screen-top-center, .screen-top-right, .screen-center-left, .screen-center-center, .screen-center-right{
                margin-bottom: 10px;
            }
        }
        /*end*/

        /* 4x4分屏 */
        .screen-box-4x4{
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            .screen-size{
                flex: 1 1 23%;
                height: 24%;
                box-sizing: border-box;
            }
            .one-one, .one-two, .one-three, .two-one, .two-two, .two-three, .three-one, .three-two, .three-three, .four-one, .four-two, .four-three{
                margin-right: 10px;
            }
            .one-one, .one-two, .one-three, .one-four, .two-one, .two-two, .two-three, .two-four, .three-one, .three-two, .three-three, .three-four{
                margin-bottom: 10px;
            }
        }
        /*end*/

        /* 自定义分屏 */
        .screen-box-diy{
            display: flex;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            .screen-left{
                flex: 1 1 66%;
                margin-right: 10px;
            }
            .screen-right{
                flex: 1 1 33%;
                display: flex;
                flex-direction: column;
            }
        }
        /*end*/
    }
}

</style>
