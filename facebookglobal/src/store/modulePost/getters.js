export default {
    listPost: state => {
        return state.listPost
    },
    postDetail (state, getters, rootState) {
        
        if(state.postDetail){
            console.log('state = ',state);
            console.log('getters =',getters);
            console.log('rootState = ',rootState);
            
            var userId = state.postDetail.USERID;
            var dataUser = rootState.user.users[userId];
            console.log('dataUser -= ', dataUser);
            let dataPostDetail = {
                post:{
                    ...state.postDetail,
                    fullname: dataUser.fullname,
                    profilepicture: dataUser.profilepicture

                }
            }
            return dataPostDetail
        }

        
    },

}