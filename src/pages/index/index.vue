<template>
<div>
    <p class="test">{{msg}}</p>
    <img src="./photo1.jpg" alt="" />
</div>
</template>

<script type="text/ecmascript-6">
export default{
    name: 'index',
    data: function() {
        return {
            msg: 'hello index'
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.test{
    box-shadow: 0 0 15px #FFF;
}
</style>