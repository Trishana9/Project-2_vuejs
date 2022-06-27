import {createWebHistory,createRouter} from 'vue-router'
import HomePage from './components/HomePage.vue';
import CareerPage from './components/CareerPage.vue';
import CareerDetail from './components/CareerDetail.vue';


const routes=[
    {
        name: 'HomePage',
        path:'/',
        component: HomePage
    },
    {
        name: 'CareerPage',
        path:'/CareerPage',
        component: CareerPage
    },
    {
        name: 'CareerDetail',
        path:'/CareerDetail',
        component: CareerDetail
    },
];
const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router;