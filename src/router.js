import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Products from './views/Products.vue'
// import ProductsDetail from './views/ProductsDetail.vue'
// import Cart from './views/Cart.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            // component: Home,
            component: () => import('./views/Home.vue')
        },
        {
            path: '/products',
            name: 'products',
            // component: Products,
            component: () => import('./views/Products.vue')
        },
        {
            path: '/products/:productId',
            name: 'products-detail',
            // component: ProductsDetail,
            component: () => import('./views/ProductsDetail.vue'),
        },
        {
            path: '/cart',
            name: 'cart',
            // component: Cart,
            component: () => import('./views/Cart.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
