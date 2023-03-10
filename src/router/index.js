import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
<<<<<<< HEAD
      isAuthenticated: true
=======
      isAuthenticated: false
>>>>>>> 9fea7c981f866a3925977ba0bcc25dd1af911d0d
    },
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    meta: {
      isAuthenticated: true
    },
<<<<<<< HEAD

    component: () => import(/* webpackChunkName: "about" */ '../views/KatalogView.vue')
=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
>>>>>>> 9fea7c981f866a3925977ba0bcc25dd1af911d0d
  },
  {
    path: '/product/:id',
    name: 'productDescription',
    meta: {
<<<<<<< HEAD
      isAuthenticated: true
    },

=======
      isAuthenticated: false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
>>>>>>> 9fea7c981f866a3925977ba0bcc25dd1af911d0d
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDescriptionView.vue')
  },
  {
    path: '/account',
    name: 'accountManagement',
    meta: {
      isAuthenticated: true
    },
<<<<<<< HEAD
=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
>>>>>>> 9fea7c981f866a3925977ba0bcc25dd1af911d0d
    component: () => import(/* webpackChunkName: "about" */ '../views/AccountManagementView.vue')
  },
  {
    path: '/cart',
    name: 'cartReview',
    meta: {
      isAuthenticated: true
    },
<<<<<<< HEAD
=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
>>>>>>> 9fea7c981f866a3925977ba0bcc25dd1af911d0d
    component: () => import(/* webpackChunkName: "about" */ '../views/CartReviewView.vue')
  },
  {
    path: '/orderDetails',
    name: 'orderDetailsView',
    meta: {
      isAuthenticated: true
    },
<<<<<<< HEAD
=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
>>>>>>> 9fea7c981f866a3925977ba0bcc25dd1af911d0d
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderDetailsView.vue')
  },
  {
    path: '/checkout',
    name: 'checkoutView',
    meta: {
      isAuthenticated: true
    },
<<<<<<< HEAD

=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
>>>>>>> 9fea7c981f866a3925977ba0bcc25dd1af911d0d
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
<<<<<<< HEAD
    const basePath = window.location.toString()
    if (!Vue.$keycloak.authenticated) {
      Vue.$keycloak.login({ redirectUri: basePath})
    } else {
      Vue.$keycloak.updateToken(70)
      Vue.prototype.$username = Vue.$keycloak.idTokenParsed.preferred_username;
       next()
    } 
  } else {
=======
    // Get the actual url of the app, it's needed for Keycloak
    const basePath = window.location.toString()
    if (!Vue.$keycloak.authenticated) {
      // The page is protected and the user is not authenticated. Force a login.
      Vue.$keycloak.login({ redirectUri: basePath})
    } else {
      // The user was authenticated, and has the app role (is authorized). Update the token.
      Vue.$keycloak.updateToken(70)
        .then(() => {
          next()
        })
        .catch(err => {
          console.error(err)
        })
    } 
  } else {
    // This page did not require authentication
>>>>>>> 9fea7c981f866a3925977ba0bcc25dd1af911d0d
    next()
  }
})

export default router