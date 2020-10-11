import Vue from 'vue'
import Vuex from 'vuex'
import app from './app.js'
import todos from './todos.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:
    {
        app,
        todos
    },
})