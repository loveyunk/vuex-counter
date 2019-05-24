import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // root state object.
  // each Vuex instance is just a single state tree.
  state: {
    count: 0
  },
  // mutations are operations that actually matates the state.
  // each mutation handler gets the entire state tree as the
  // first argument, followed by additional payload arguments.
  // mutations must be synchronous and can be recorded by pllugins
  // for debugging purposes.
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  // actions are functions that cause side effects and can involve
  // asynchronous operations.
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd ({ commit, state }) {
      if ((state.count + 1) % 2 === 0) {
        commit('increment')
      }
    },
    incrementAsync ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
  },
  // getter are functions
  getters: {
    evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd')
  }
})
