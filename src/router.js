import index from '@src/pages/index/index.vue';

const indexContent = () => import('@components/indexContent/indexContent.vue');
const splitScreen = () => import('@components/splitScreen/splitScreen.vue');
const slideShow = () => import('@components/slideShow/slideShow.vue');

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: index,
            children: [
                {
                    path: '/',
                    component: indexContent
                },
                {
                    path: 'subList/*',
                    component: slideShow,
                    name: 'subList'
                },
                {
                    path: 'splitScreen',
                    component: splitScreen
                }
            ]
        }
    ]
})