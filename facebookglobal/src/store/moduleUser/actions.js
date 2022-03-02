
import axiosApi from '../../plugins/axios'

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
        console.log('aasdasd')

        try {
            let data = {
                email,
                password
            }
            var result = await axiosApi.post('/member/login.php',data);

            commit('SET_LOADING',false);

            if(result.data.status === 200){

                console.log('datauser',result.data)

                commit('SET_CURRENT_USER',result.data.user)
                commit('SET_ACCESS_TOKEN',result.data.token)
                return {
                    oke : true,
                    data: result.data.user,
                    error: null
                }

            }
            else{
                return{
                    oke: false,
                    error: result.data.message
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