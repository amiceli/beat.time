import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Information from './views/Information.vue'

Vue.use(Router)

export default new Router({
    mode : 'history',
    base : process.env.BASE_URL,
    routes : [
        {
            path : '/',
            name : 'home',
            component : Home
        },
        {
            path : '/about',
            name : 'about',
            component : About
        }, {
            path : '/what-the-beat',
            name : 'what-the-beat',
            component : Information
        }
    ]
})
