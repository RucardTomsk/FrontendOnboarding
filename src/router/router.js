import {createRouter, createWebHashHistory} from "vue-router";
import Main from "@/pages/main.vue"

// Global components
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"


const routes = [
    {
        path:'/',
        component: Main
    }
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})
export default router;