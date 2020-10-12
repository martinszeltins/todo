import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.prototype.lang = string => {
    return store.state.languages[store.state.app.language][string]
}

new Vue({
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
