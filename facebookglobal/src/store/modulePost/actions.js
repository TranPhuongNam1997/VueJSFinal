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

            if(result.data.status === 200){

                var promiseDataUser = dispatch('getUserById',result.data.data.post.USERID)

                var promiseDataComment = dispatch('atcComments',postId)

                var [dataUser,dataComment] = await Promise.all([promiseDataUser,promiseDataComment])

                let objdata={
                    ...result.data.data,
                    comments: []
                }
                console.log('dataComment',dataComment);
                
                if(dataComment.oke){
                    objdata.comments = dataComment.data.comments
                    
                }
                console.log('objdata',objdata);


                commit('SET_LOADING',false);
                commit('GET_POSTDETAIL',objdata);
                
                return {
                    oke : true,
                    data: result.data.data,
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
    async getPostSearch({commit}, textsearch) {

        commit('SET_LOADING',true);

        try {

            
            var result = await axiosApi.get('/post/search.php?query=' + textsearch);

            if(result.data.status === 200){

                console.log('result.data',result.data);
                commit('SET_LOADING',false);

                return {
                    oke : true,
                    data: result.data,
                    error: null
                }

            }
            
        } catch (error) {
            return{
                oke: false,
                error: error
            }
        }
    },
    async atcCreateNewPost({commit}, {url_image = '',post_content='',category='' ,obj_image = null}) {

        commit('SET_LOADING',true);

        try {

            let getTokenFromLocalStorage = localStorage.getItem('token');

            var bodyFormData = new FormData();

            bodyFormData.append('url_image', url_image);
            bodyFormData.append('post_content', post_content);
            bodyFormData.append('category', category);

            if(obj_image){
                bodyFormData.append('obj_image', obj_image); 
            }

            let config = {
                
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization': 'Bearer ' + getTokenFromLocalStorage
                }
            }
            var result = await axiosApi.post('/post/addNew.php',bodyFormData,config);

            if(result.data.status === 200){

                console.log('result.data',result.data);
                commit('SET_LOADING',false);

                return {
                    oke : true,
                    data: result.data,
                    error: null
                }
                
            }
            
        } catch (error) {
            return{
                oke: false,
                error: error
            }
        }
    },
    async atcComments({commit}, postId) {
        try {

            var result = await axiosApi.get('/comment/comments.php?postid=' + postId);

            
            if(result.data.status === 200){
                
                return {
                    oke : true,
                    data: result.data,
                    error: null
                }
                
            }
            
        } catch (error) {
            return{
                oke: false,
                error: error
            }
        }
    },
    async atcAddComment({commit,rootState}, {comment= "" ,postid=null}) {
        commit('SET_LOADING',true);

        try {
            let getTokenFromLocalStorage = localStorage.getItem('token');
            
            let objdata  = {
                comment: comment,
                postid: postid
            }

            let config = {
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization': 'Bearer ' + getTokenFromLocalStorage
                }
            }
            
            var result = await axiosApi.post('/comment/add_new.php',objdata,config);

            commit('SET_LOADING',false);
            
            if(result.data.status === 200){
                // rootState.postDetail.comments.push(result.data.body);

                let comment = {
                    ...result.data.body,
                    fullname: rootState.user.currentUser.fullname,
                    profilepicture: rootState.user.currentUser.profilepicture
                }
                commit('SET_COMMENT',comment);
                
                return {
                    oke : true,
                    data: result.data.body,
                    error: null
                }
                
            }
            
        } catch (error) {
            commit('SET_LOADING',false);

            return{
                oke: false,
                error: error
            }
        }
    },

    

}