const state = () => ({
  isLoading: false,
})

const getters = {
}
const actions = {
}

const mutations = {
  setState(state, ops) {
    state[ops.key] = ops.value
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
