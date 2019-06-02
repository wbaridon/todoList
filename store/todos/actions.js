export default {
    addItem ({commit}, text) {
      commit('add', text)
    },
    async initList({commit}) {
    const list = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
      commit('SET_LIST', list)
    }
}