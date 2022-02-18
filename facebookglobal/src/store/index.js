import Vue from 'vue'
import Vuex from 'vuex'
import user from './moduleUser'
import post from './modulePost'

Vue.use(Vuex);
const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    state: {
        
    },
    actions:{
        
    },

    mutations: {
        
    },

    modules:{
        post,
        user
    }
    

})

export default store