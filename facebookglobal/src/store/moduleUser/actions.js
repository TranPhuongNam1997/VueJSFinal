
import axiosApi from '../../plugins/axios'

export default {
    async getUserById({commit}, userid) {
        commit('SET_LOADING',true);
        try {
            var result = await axiosApi.get('/member/member.php?userid=' + userid);

            commit('SET_LOADING',false);
            

            if(result.data.status === 200){

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
}