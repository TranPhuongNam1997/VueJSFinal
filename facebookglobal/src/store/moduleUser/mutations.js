import Vue from 'vue'

export default {
    GET_USERBYID(state,data){
        // state.user = datauser;   
        // console.log('datauser = ',datauser)
        Vue.set(state.users, data.USERID, data)
    },
    SET_CURRENT_USER(state,data){
        state.currentUser = data.user;
        state.ACCESS_TOKEN = data.token;
        localStorage.setItem('token',data.token);
    },
    
    // SET_ACCESS_TOKEN(state,data){
        
    // },

    LOG_OUT(state){
        state.currentUser = '';
        state.ACCESS_TOKEN = '';
        localStorage.setItem('token','');
    }

}