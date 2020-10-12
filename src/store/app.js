export default {
    namespaced: true,
    
    state:
    {
        theme: 'dark',
    },

    mutations:
    {
        toggleTheme(state)
        {
            state.theme = state.theme == 'light' ? 'dark' : 'light'
        },
    },

    actions:
    {
        toggleTheme({ commit })
        {
            commit('toggleTheme')
        }
    },
}