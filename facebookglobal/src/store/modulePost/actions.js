import axiosApi from '../../plugins/axios'
import {PAGE_SIZE,CURREN_PAGE} from '../../instant'

export default {
    async getListPostAll({commit}, { pagesize = PAGE_SIZE, currPage = CURREN_PAGE,tagIndex = null }) {
        commit('SET_LOADING',true);
        try {
            let config = {
                params:{
                    pagesize, 
                    currPage,
                },
            }
            if(tagIndex){
                config.params.tagIndex = tagIndex
                var result = await axiosApi.get('/post/getListByCategory.php',config);
            }
            else{
                var result = await axiosApi.get('/post/getListPagination.php',config);
            }
            commit('SET_LOADING',false);

            if(result.data.status === 200){
                if(currPage === 1) commit('GET_LISTPOST',result.data.posts);
                if(currPage > 1){
                    commit('GET_LISTPOST_MORE',result.data.posts);
                    console.log('GET_LISTPOST_MORE = ',result.data.posts);
                    
                }
            }
            
            
        } catch (error) {
            console.log("error", error);
        }
    },

    async getPostDetailByPostId({commit,dispatch}, postId) {
        commit('SET_LOADING',true);
        try {
            var result = await axiosApi.get('/post/post.php?postid=' + postId);

            commit('SET_LOADING',false);
            

            if(result.data.status === 200){
                let data = result.data.data.post;

                commit('GET_POSTDETAIL',data);
                console.log('result.data.data.post.USERID = ',result.data.data.post.USERID);


                var dataUser = await dispatch('getUserById',result.data.data.post.USERID)
                console.log('dataUser = ',dataUser);
                
                return {
                    oke : true,
                    data: result.data,
                    error: null
                }

            }
            
        } catch (error) {
            return{
                oke: false,
                error: error.message
            }
        }
    },
}