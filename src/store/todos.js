import { sleep } from '../helpers.js'

export default {
    namespaced: true,

    state:
    {
        todos: [],
        isLoading: false,
    },

    mutations:
    {
        setTodos(state, todos)
        {
            state.todos = todos.reverse()
        },

        add(state, todo)
        {
            state.todos.unshift(todo)
        },

        delete(state, todo)
        {
            state.todos = state.todos.filter(item => {
                return item.id !== todo.id
            })
        },

        setLoading(state, status)
        {
            state.isLoading = status
        },

        updateCompleted(state, todo)
        {
            const index = state.todos.findIndex(item => {
                return item.id === todo.id
            })

            state.todos[index].completed = todo.completed
        },
    },

    actions:
    {
        add({ commit, state }, todo)
        {
            if (todo === '') return

            const lastID = state.todos[0]?.id ?? 0

            commit('add', {
                id: lastID + 1,
                title: todo,
                completed: false,
            })
        },

        delete({ commit }, todo)
        {
            commit('delete', todo)
        },

        async fetch({ commit })
        {
            commit('setLoading', true)
            
            await sleep(1)
            let response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            let todos = await response.json()
            
            commit('setTodos', todos)
            commit('setLoading', false)
        },

        updateCompleted({ commit }, todo)
        {
            commit('updateCompleted', todo)
        },
    },
}