<template>
<div>
    <p>{{msg}}</p>
</div>
</template>

<script type="text/ecmascript-6">
export default{
    name: '',
    data: function() {
        return {
            msg: "hello world"
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
 p{
    display: flex;
    flex: 1;
 }
</style>