import Vue from 'vue'

export default {
    GET_USERBYID(state,datauser){
        // state.user = datauser;
        // console.log('datauser = ',datauser)
        Vue.set(state.users, datauser.USERID,datauser)
    }
}