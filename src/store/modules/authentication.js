const state = {
  user: null,
  token: null
}

const getters = {
  getUser: state => state.user,
  getToken: state => state.token
}

const actions = {
  setCredentials: ({ commit, state }, obj) => commit('setCredentials', obj),
  clearUser: ({ commit, state }) => commit('clearUser')
}

const mutations = {
  clearUser (state) {
    state.user = state.token = null
  },

  setCredentials (state, payload) {
    if (payload.token) {
      state.token = payload.token
    }
    if (payload.user) {
      state.user = payload.user
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
