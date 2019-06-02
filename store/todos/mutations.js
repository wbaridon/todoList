export default {
    SET_LIST (state, payload) {
      state.list = payload
    },
    add (state, text) {
        state.list.push({
            text: text,
        })
    },
    remove (state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
      },
    toggle (state, todo) {
        todo.done = !todo.done
    }
}