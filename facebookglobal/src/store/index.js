import { createApp } from 'vue'
import { createStore } from 'vuex'
import user from './moduleUser'
import post from './modulePost'


const store = createStore({
    strict: process.env.NODE_ENV !== 'production',

    state: {
        
    },
    actions:{
        
    },

    mutations: {
        
    },

    modules:{
        user,
        post
    }
    

})

export default store