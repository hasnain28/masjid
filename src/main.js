import {createApp} from 'vue'
import App from './App.vue'
import HomePage from "@/components/HomePage";
import AboutUsPage from "@/components/AboutUsPage";
import DonateSection from "@/components/DonateSection";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', component: HomePage},
    {path: '/about-us', component: AboutUsPage},
    {path: '/donate', component: DonateSection}
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
    linkActiveClass: "active"
})
createApp(App).use(router).mount('#app')
