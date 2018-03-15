import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import Authentication from '@/store/modules/authentication'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Authentication
  },
  plugins: [createPersistedState({
    key: '_bst_',
    paths: [
      'Authentication'
    ]
  })]
})
