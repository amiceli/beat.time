import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
        theme : 'light'
    },

    mutations : {
        setTheme (state, theme) {
            state.theme = theme
        }
    }
})

export default store