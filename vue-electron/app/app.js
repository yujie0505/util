'use strict'

// web framework

import Vue from 'vue'

// custom modules

import './app.sass'
import './index.pug'

// render components

import App from './app.vue'

new Vue({
  el: '#v-app',
  render: h => h(App)
})
