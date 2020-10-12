import { sleep } from '../helpers.js'

export default {
    namespaced: true,

    state:
    {
        todos: [],
        isLoading: false,
        selected: [],
    },

    mutations:
    {
        setTodos(state, todos)
        {
            state.todos = todos.reverse()

            state.todos.forEach(todo => {
                if (todo.completed) {
                    state.selected.push(todo.id)
                }
            })
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

            let index = state.selected.findIndex(id => {
                return id === todo.id
            })

            state.selected.splice(index, 1)
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

        updateTodo(state, todo)
        {
            const index = state.todos.findIndex(item => {
                return item.id === todo.id
            })

            state.todos[index].title = todo.title
        },

        updateSelected(state, todo)
        {
            if (todo.completed) {
                state.selected.push(todo.id)
            } else {
                let index = state.selected.findIndex(item => {
                    return item === todo.id
                })

                if (index >= 0) {
                    state.selected.splice(index, 1)
                }
            }
        },

        deleteSelected(state)
        {
            state.selected.forEach((id, selectedIndex) => {
                let index = state.todos.findIndex(todo => {
                    return todo.id === id
                })

                state.todos.splice(index, 1)
            })

            state.selected = []
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

        async fetch({ commit, dispatch })
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
            commit('updateSelected', todo)
        },

        updateTodo({ commit }, todo)
        {
            commit('updateTodo', todo)
        },

        deleteSelected({ commit })
        {
            commit('deleteSelected')
        },
    },

    getters:
    {
        selectedCount(state)
        {
            return state.selected.length
        },
    },
}