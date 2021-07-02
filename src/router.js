import Headless from "./views/headless/index.vue";
import Composition from "./views/composition/index.vue";

import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/headless', component: Headless },
        { path: '/', component: Composition}
    ]
});