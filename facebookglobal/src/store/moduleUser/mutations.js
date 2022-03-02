import Vue from 'vue'

export default {
    GET_USERBYID(state,data){
        // state.user = datauser;   
        // console.log('datauser = ',datauser)
        Vue.set(state.users, data.USERID, data)
    },
    SET_CURRENT_USER(state,data){
        state.currentUser = data
    },
    
    SET_ACCESS_TOKEN(state,data){
        state.ACCESS_TOKEN = data;
        localStorage.setItem('token',data);
    },

}