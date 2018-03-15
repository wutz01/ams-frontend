// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/app'
import router from '@/router'
import store from './store'
import axios from 'axios'
import Vuetify from 'vuetify'
import Carousel3d from 'vue-carousel-3d'
import VueLazyLoad from 'vue-lazyload'
import 'babel-polyfill'

import { EventBus } from '@/utils/event-bus'
import { mapKeys } from 'lodash/object'

import 'vuetify/dist/vuetify.min.css'
import 'npm/mdi/scss/materialdesignicons.scss'
import '@/assets/main.styl'

Vue.use(Vuetify)
Vue.use(store)
Vue.use(Carousel3d)
Vue.use(VueLazyLoad, {
  // set observer to true
  observer: true,
  // optional
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})

Vue.config.productionTip = false

let http = axios.create({
  baseURL: process.env.API_SERVER_URL
})

http.interceptors.request.use(config => {
  if (store.getters.getToken !== null) {
    config.headers = { Authorization: `Bearer ${store.getters.getToken}` }
  }

  return config
})

Vue.http = Vue.axios = http

/* eslint-disable no-useless-escape */
let globalMixins = {
  methods: {
    inputRules () {
      return {
        required: (value) => !!value || 'This is a required field',
        email: (value) => {
          const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid Email'
        },
        phoneNumber: (value) => {
          const pattern = /^[0-9]+$/
          return pattern.test(value) || 'Invalid mobile number'
        },
        money: (value) => {
          const pattern = /^\$?\-?([1-9]{1}[0-9]{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))$|^\-?\$?([1-9]{1}\d{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))$|^\(\$?([1-9]{1}\d{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))\)$/
          return pattern.test(value) || 'Invalid amount'
        },
        multipleRequired: (value) => {
          return value.length > 0 || 'You must select atleast 1'
        }
      }
    },

    constructImageUrl (image) {
      console.log(image)
      if (image && image.imagePath && image.filename && image.extension) {
        return image.imagePath + image.filename + '.' + image.extension
      }

      return null
    },

    timeformat () {
      return 'DD-MMM-YY hh:mm a'
    },

    displayToast (text, mode = 'info') {
      EventBus.$emit('display-toast', {text, mode})
    },

    parseErrorRes (errRes) {
      let res = errRes.response
      let errors = []

      if (!res) return

      if (res.data && res.data.errors && res.data.errors) {
        mapKeys(res.data.errors, (value, key) => {
          errors.push(value)
        })

        return errors.join(`\n\n`)
      } else {
        return res.data.error || 'An error occured. Please try again.'
      }
    }
  }
}

Vue.mixin(globalMixins)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
