import login from './login.vue';

import fontFix from '@common/js/pxToRem.js';
import '@common/less/login.less';

new Vue({
    el: '#app',
    render: h => h(login)
})