export const state = () => ({
  // counter: 0
  root: process.env.root,
  prefix: process.env.prefix
})

export const getters = {
  // counter: state => state.counter
}

export const mutations = {
  // increment (state) {
  //   state.counter++
  // }
}

export const actions = {
  // nuxtServerInit ({ commit }, { req }) {
  //   if (req.session.user) {
  //     commit('user', req.session.user)
  //   }
  // },
  // async nuxtServerInit({ dispatch }) {
  //   await dispatch('core/load')
  // }
}
