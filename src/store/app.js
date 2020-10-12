export default {
    namespaced: true,
    
    state:
    {
        theme: 'light',
        language: 'en',
    },

    mutations:
    {
        toggleTheme(state)
        {
            state.theme = state.theme == 'light' ? 'dark' : 'light'
        },

        changeLanguage(state)
        {
            state.language = (state.language == 'lv') ? 'en' : 'lv'
        },
    },

    actions:
    {
        toggleTheme({ commit })
        {
            commit('toggleTheme')
        },

        changeLanguage({ commit })
        {
            commit('changeLanguage')
        },
    },

    getters:
    {
        otherLanguage(state)
        {
            return (state.language == 'lv') ? 'en' : 'lv'
        },
    },
}