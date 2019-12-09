import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Trip from "./views/Trip";

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/trip/:start/:end',
            name: 'Trip',
            component: Trip
        }
    ]
});