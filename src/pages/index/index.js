import index from './index.vue';
import fontFix from '@common/js/pxToRem.js';
import '@common/less/index.less';
import router from '@src/router.js';
import store from '@src/store/index.js';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(index)
})