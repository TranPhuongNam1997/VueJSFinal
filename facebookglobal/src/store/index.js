import Vue from 'vue'
import Vuex from 'vuex'
import user from './moduleUser'
import post from './modulePost'

Vue.use(Vuex);
const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    state: {
        isLoading: false
    },
    actions:{
        loading({commit}, isLoading){
            commit('SET_LOADING',isLoading)
        }
    },

    mutations: {
        SET_LOADING : (state, isLoading) =>{
            state.isLoading = isLoading
        }
    },

    modules:{
        post,
        user
    }
    

})

export default store