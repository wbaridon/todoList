import Vuex from 'vuex'
import todos from './todos/'

const createStore = () => {
    return new Vuex.Store({
        namespaced: true,
        modules: {
            todos: todos
        }
    })
}

export default createStore