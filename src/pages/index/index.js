import index from './index.vue';
import fontFix from '@common/js/pxToRem.js';
import '@common/less/index.less';

new Vue({
    el: '#app',
    render: h => h(index)
})