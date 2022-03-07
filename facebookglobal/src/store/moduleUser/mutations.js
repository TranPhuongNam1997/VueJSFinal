import Vue from 'vue'

export default {
    GET_USERBYID(state,data){

        Vue.set(state.users, data.USERID, data)

    },

    SET_CURRENT_USER(state,data){
        state.currentUser = data.user;
        state.ACCESS_TOKEN = data.token;
        localStorage.setItem('token',data.token);
    },
    
    LOG_OUT(state){
        state.currentUser = '';
        state.ACCESS_TOKEN = '';
        localStorage.setItem('token','');
    },
    
    SET_POST_USERID(state,{userid,post}){

        Vue.set(state.postListUser, userid, post)

    },
}