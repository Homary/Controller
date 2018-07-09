import index from '@src/pages/index/index.vue';

const subList = () => import('@components/subList/subList.vue');
const indexContent = () => import('@components/indexContent/indexContent.vue');
const thirdList = () => import('@components/thirdList/thirdList.vue');
const test = () => import('@components/splitScreen/splitScreen.vue');

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
                    path: 'subList/:id',
                    component: subList,
                    props: true,
                    name: 'subList'
                },
                {
                    path: 'subList/:id/:i_id',
                    component: thirdList,
                    props: true,
                    name: 'thirdList'
                },
                {
                    path: 'test',
                    component: test
                }
            ]
        }
    ]
})