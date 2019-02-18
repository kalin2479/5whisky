import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
global.VueCookies = VueCookies
if (VueCookies.get('accessToken') === "false")
  VueCookies.set('accessToken', "false", { expires: '30s' });

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

import VueCarousel from 'vue-carousel';


Vue.use(VueCarousel);


//typical import
// import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"

//or get to the parts that aren't included inside TweenMax:
// import Draggable from "gsap/Draggable"
// import ScrollToPlugin from "gsap/ScrollToPlugin"

//or, as of 2.0.0, all tools are exported from the "all" file (excluding bonus plugins):
import {TweenMax, CSSPlugin, ScrollToPlugin, Draggable, Elastic} from "gsap/all"
//if tree shaking dumps plugins, just reference them somewhere in your code like:
const plugins = [CSSPlugin, ScrollToPlugin]

export const bus = new Vue();


import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

import routes from '@/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
