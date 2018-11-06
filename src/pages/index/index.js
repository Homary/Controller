import index from './index.vue';
import fontFix from '@common/js/pxToRem.js';
import reAlert from '@common/js/reAlert.js';
import '@common/less/index.less';
import router from '@src/router.js';
import store from '@src/store/index.js';
import 'babel-polyfill';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(index)
})