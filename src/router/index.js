import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      isAuthenticated: true

    },
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    meta: {
      isAuthenticated: true
    },

    component: () => import(/* webpackChunkName: "about" */ '../views/KatalogView.vue')

  },
  {
    path: '/product/:id',
    name: 'productDescription',
    meta: {
      isAuthenticated: true
    },

    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDescriptionView.vue')
  },
  {
    path: '/account',
    name: 'accountManagement',
    meta: {
      isAuthenticated: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AccountManagementView.vue')
  },
  {
    path: '/cart',
    name: 'cartReview',
    meta: {
      isAuthenticated: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/CartReviewView.vue')
  },
  {
    path: '/orderDetails',
    name: 'orderDetailsView',
    meta: {
      isAuthenticated: true
    },

    component: () => import(/* webpackChunkName: "about" */ '../views/OrderDetailsView.vue')
  },
  {
    path: '/checkout',
    name: 'checkoutView',
    meta: {
      isAuthenticated: true
    },

    component: () => import(/* webpackChunkName: "about" */ '../views/CheckoutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuthenticated) {
    const basePath = window.location.toString()
    if (!Vue.$keycloak.authenticated) {
      Vue.$keycloak.login({ redirectUri: basePath})
    } else {
      Vue.$keycloak.updateToken(70)
      Vue.prototype.$username = Vue.$keycloak.idTokenParsed.preferred_username;
       next()
    } 
  } else {

  }
})

export default router