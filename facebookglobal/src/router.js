import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './pages/HomePage.vue'
import ChangePassword from './pages/ChangePassword.vue'
import PostDetail from './pages/PostDetail.vue'
import PostUpload from './pages/PostUpload.vue'
import Register from './pages/Register.vue'
import Search from './pages/Search.vue'
import UserPage from './pages/UserPage.vue'
import UserProfile from './pages/UserProfile.vue'
import Login from './pages/Login.vue'
import NotFound from './pages/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        name: 'home-page',
        component: HomePage,
    },
    
    { 
        path: '/changepass/:id', 
        name: 'change-pass',
        component: ChangePassword,
    },
    { 
        path: '/post-detail/:id', 
        name: 'post-detail',
        component: PostDetail,
    },
    { 
        path: '/post-upload/:id', 
        name: 'post-upload',
        component: PostUpload,
    },
    { 
        path: '/register', 
        name: 'register',
        component: Register,
    },
    { 
        path: '/login', 
        name: 'login',
        component: Login,
    },
    { 
        path: '/search', 
        name: 'search',
        component: Search,
    },
    { 
        path: '/user-page/:id', 
        name: 'user-page',
        component: UserPage,
    },
    { 
        path: '/user-profile/:id', 
        name: 'user-profile',
        component: UserProfile,
    },
    { 
        path: '*', 
        name: 'not-found',
        component: NotFound,
    },

]
const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router