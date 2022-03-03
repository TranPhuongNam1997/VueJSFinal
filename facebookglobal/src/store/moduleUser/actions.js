
import axiosApi from '../../plugins/axios'
import parseJwt from '../../helper'

export default {

    async getUserById({commit}, userid) {
        commit('SET_LOADING',true);
        try {
            var result = await axiosApi.get('/member/member.php?userid=' + userid);

            commit('SET_LOADING',false);
            

            if(result.data.status === 200){
                console.log('ACTION USER result.data.user',result.data.user);
                
                commit('GET_USERBYID',result.data.user);
                
                return {
                    oke : true,
                    data: result.data.user,
                    error: null
                }

            }
            
        } catch (error) {
            console.log("error", error);
            return{
                oke: false,
                error: error.message
            }
        }
    },
    
    async Login({commit}, {email = '', password = ''}) {

        commit('SET_LOADING',true);
        try {
            let data = {
                email,
                password
            }
            var result = await axiosApi.post('/member/login.php',data);

            commit('SET_LOADING',false);

            if(result.data.status === 200){

                commit('SET_CURRENT_USER',result.data)
                // commit('SET_ACCESS_TOKEN',result.data.token)
                return {
                    oke : true,
                    data: result.data.user,
                    error: null
                }

            }
            else{
                return{
                    oke: false,
                    error: result.data.error
                }
            }
            
        } catch (error) {
            console.log("error", error);
            return{
                oke: false,
                error: error.message
            }
        }
    },
    // muc dich là khi load lại trang thì comvet jwt gui tài khoản user sang getUserById sau khi co được dữ lieeu thì đẩy sang mutation để lưu cái current user

    async checkLogin({commit,dispatch}) {

        commit('SET_LOADING',true);


        try {
            var tokenUserLocal = localStorage.getItem('token');


            console.log('tokenUser = ',tokenUserLocal);
            
            var infoAcc = parseJwt(tokenUserLocal);

            console.log('infoAcc = ',infoAcc);
            
            if(infoAcc){
                var infouser = await dispatch('getUserById',infoAcc.id);
                
                console.log('infouser = ',infouser.data);
                
                
                let data = {
                    user: infouser.data,
                    token: tokenUserLocal
                }
                commit('SET_CURRENT_USER',data)
            }

            commit('SET_LOADING',false);



            if(result.data.status === 200){

                // commit('SET_CURRENT_USER',result.data)
                
                return {
                    oke : true,
                    data: result.data,
                    error: null
                }

            }
            else{
                return{
                    oke: false,
                    error: error.message
                }
            }
            
        } catch (error) {
            console.log("error", error);
            return{
                oke: false,
                error: error.message
            }
        }
    },
}