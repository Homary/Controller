import index from './index.vue';
import fontFix from '@common/js/pxToRem.js';
import '@common/less/index.less';
import router from '@src/router.js';

new Vue({
    el: '#app',
    router,
    render: h => h(index)
})