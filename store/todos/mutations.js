export default {
    SET_LIST (state, payload) {
      state.list = payload
    },
    add (state, text) {
        state.list.push({
            text: text,
        })
    },
    DELETE_ITEM (state, id ) {
      let index = state.list.findIndex( list => list.id == id)
      state.list.splice(index, 1)
    },
    toggle (state, todo) {
        todo.done = !todo.done
    }
}