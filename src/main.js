import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import Proyects from "./pages/Proyects.vue";
import About from "./pages/About.vue";

// const proyects = {template: Proyects}
// const about = {template: About}

const routes = [
    {path: '/', component: App},
    {path: '/proyects', component: Proyects},
    {path: '/about', component: About},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
