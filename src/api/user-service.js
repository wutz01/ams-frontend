import Vue from 'vue'
import store from '@/store'

/* eslint-disable prefer-promise-reject-errors */
export default {
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      let payload = {
        email: email,
        password: password
      }

      Vue.http.post(`api/user/login`, payload).then((res) => {
        if (res && res.data && res.data.user && res.data.token) {
          let token = res.data.token
          let user = res.data.user

          store.dispatch('setCredentials', {user, token})
          resolve(res.data)
        } else {
          reject('Invalid user')
        }
      }).catch((loginErr) => {
        store.dispatch('clearUser')
        reject(loginErr)
      })
    })
  },

  logout: () => {
    store.dispatch('clearUser')
  },

  me: () => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`api/getUserLogin`).then((res) => {
        store.dispatch('setCredentials', {user: res.data.user})
        resolve(res.data.user)
      }).catch((meErr) => {
        store.dispatch('clearUser')
        reject(meErr)
      })
    })
  },

  register: (payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.post(`api/user/register`, payload).then((res) => {
        resolve(res.data)
      }).catch((meErr) => {
        store.dispatch('clearUser')
        reject(meErr)
      })
    })
  }
}
