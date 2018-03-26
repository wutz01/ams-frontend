import Vue from 'vue'
import Router from 'vue-router'
import { EventBus } from '@/utils/event-bus'
import { UserService } from '@/api'
import { indexOf } from 'lodash/array'
// import { endsWith } from 'lodash/string'

Vue.use(Router)
/* eslint-disable handle-callback-err */

let requiresAuth = (to, from, next) => {
  if (to && to.meta && to.meta.public) {
    // its a public section
    next()
  } else {
    UserService.me().then((res) => {
      if (to && to.meta && to.meta.auth && to.meta.auth.length > 0) {
        if (indexOf(to.meta.auth, res.userType) !== -1) {
          next()
        } else {
          EventBus.$emit('display-toast', {text: 'Permission Denied. You can\'t access the page.', mode: 'error'})
          next(false)
        }
      } else { next() }
    }).catch((error) => {
      // if (error && error.response && error.response.status) {
      //   if (error.response.status === 503) {
      //     // server not available
      //   } else if (error.response.status === 401 || error.response.status === 500 || (error.response.status === 404 && endsWith(error.config.url, 'userservice/me'))) {
      //     EventBus.displayToast(`Invalid authentication. Please login again.`)
      //   }
      // } else {
      //   EventBus.displayToast(`Oops. Something went wrong. Please try again.`)
      // }

      EventBus.$emit('display-toast', {text: 'Authentication Failed. Please login again.', mode: 'error'})
      UserService.logout()
      next({name: 'login'})
    })
  }

  next()
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      meta: {public: true},
      component: () => import('@/pages/public/login')
    },
    {
      path: '/login',
      name: 'login',
      meta: {public: true},
      component: () => import('@/pages/public/login')
    },
    {
      path: '/logout',
      name: 'logout',
      meta: {public: true},
      component: () => import('@/pages/public/logout')
    },
    {
      path: '/registration',
      name: 'registration',
      meta: {public: true},
      component: () => import('@/pages/public/registration')
    },
    {
      path: '/our-products',
      name: 'our-products',
      meta: {public: true},
      component: () => import('@/pages/public/our-products')
    },
    {
      path: '/web',
      name: 'web-container',
      component: () => import('@/pages/container/web-container'),
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          meta: {auth: true, title: 'Dashboard'},
          component: () => import('@/pages/web/dashboard'),
          beforeEnter: requiresAuth
        },
        {
          path: '/products',
          name: 'products',
          meta: {auth: ['ADMIN'], title: 'Products'},
          component: () => import('@/pages/web/products'),
          beforeEnter: requiresAuth
        },
        {
          path: '/products/create',
          name: 'product-create',
          meta: {auth: ['ADMIN'], title: 'Products > Create'},
          component: () => import('@/pages/web/create-product'),
          beforeEnter: requiresAuth
        },
        {
          path: '/products/:productId/view',
          name: 'product-view',
          meta: {auth: ['ADMIN'], title: 'Products > View'},
          component: () => import('@/pages/web/product-view'),
          beforeEnter: requiresAuth
        },
        {
          path: '/product/supplier',
          name: 'product-supplier',
          meta: {auth: ['ADMIN'], title: 'Product Supplier'},
          component: () => import('@/pages/web/product-supplier'),
          beforeEnter: requiresAuth
        },
        {
          path: '/product/category',
          name: 'product-category',
          meta: {auth: ['ADMIN'], title: 'Product Category'},
          component: () => import('@/pages/web/product-category'),
          beforeEnter: requiresAuth
        }
      ]
    },
    {
      path: '/page-not-found',
      name: 'page-not-found',
      component: () => import('@/pages/web/page-not-found'),
      meta: {public: true}
    },
    {
      path: '*',
      redirect: '/page-not-found'
    }
  ]
})
