import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0bd95236 = () => interopDefault(import('../pages/contribute.vue' /* webpackChunkName: "pages/contribute" */))
const _e880971e = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _6c1e669b = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _17b7fea6 = () => interopDefault(import('../pages/test1.vue' /* webpackChunkName: "pages/test1" */))
const _271c159c = () => interopDefault(import('../pages/admin/allword.vue' /* webpackChunkName: "pages/admin/allword" */))
const _2fc7a58b = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _1586f8e6 = () => interopDefault(import('../pages/auth/signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _30842819 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contribute",
    component: _0bd95236,
    name: "contribute"
  }, {
    path: "/search",
    component: _e880971e,
    name: "search"
  }, {
    path: "/test",
    component: _6c1e669b,
    name: "test"
  }, {
    path: "/test1",
    component: _17b7fea6,
    name: "test1"
  }, {
    path: "/admin/allword",
    component: _271c159c,
    name: "admin-allword"
  }, {
    path: "/auth/login",
    component: _2fc7a58b,
    name: "auth-login"
  }, {
    path: "/auth/signup",
    component: _1586f8e6,
    name: "auth-signup"
  }, {
    path: "/",
    component: _30842819,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
