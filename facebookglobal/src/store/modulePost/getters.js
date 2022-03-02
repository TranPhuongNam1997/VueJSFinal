export default {
    listPost: state => {
        return state.listPost
    },
    postDetail (state, getters, rootState) {
        
        if(state.postDetail){
            
            var userId = state.postDetail.post.USERID;
            var dataUser = rootState.user.users[userId];
            let dataPostDetail = {
                post:{
                    ...state.postDetail.post,
                    fullname: dataUser.fullname,
                    profilepicture: dataUser.profilepicture

                },
                categories: state.postDetail.categories
            }
            return dataPostDetail
        }
    },

}