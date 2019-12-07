import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home"
import Trip from "./components/Trip"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/:details',
            name: 'Trip',
            component: Trip
        }
    ]
})