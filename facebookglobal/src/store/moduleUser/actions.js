
import axiosApi from '../../plugins/axios'
import {parseJwt} from '../../helper'

export default {

    // action lấy thông tin người dùng

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
            return{
                oke: false,
                error: error.message
            }
        }
    },
    
    // action Đăng nhập
    async Login({commit,dispatch}, {email = '', password = ''}) {

        commit('SET_LOADING',true);
        try {
            let data = {
                email,
                password
            }
            var result = await axiosApi.post('/member/login.php',data);

            //gửi id sang để lấy bài viết cho user

            commit('SET_LOADING',false);

            if(result.data.status === 200){

                
                console.log('result.data = xx' , result.data);
                
                commit('GET_USERBYID',result.data.user);
                commit('SET_CURRENT_USER',result.data);



                //khi đăng nhập gửi userid để lấy danh sách bài viết của user đó

                dispatch('getPostListByUserId',result.data.user.USERID);

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

            var infoAcc = parseJwt(tokenUserLocal);

            console.log('infoAcc = ',infoAcc);
            
            if(infoAcc){

                var infouser = dispatch('getUserById',infoAcc.id);

                var infopost = dispatch('getPostListByUserId',infoAcc.id);

                var [plusinfouser , plusinfopost] = await Promise.all([infouser,infopost ])

                
                let data = {
                    user: plusinfouser.data,
                    token: tokenUserLocal
                }
                commit('SET_CURRENT_USER',data)
            }

            commit('SET_LOADING',false);



            if(result.data.status === 200){

                return {
                    oke : true,
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
            return{
                oke: false,
                error: error.message
            }
        }
    },

    logout({commit}){
        commit('LOG_OUT');
    },
    async getPostListByUserId({commit},userid){

        try{

            let getTokenFromLocalStorage = localStorage.getItem('token');

            //truyền đi ID người dùng và Authorization để xác minh
            let config = {
                params:{
                    userid
                },
                headers:{
                    'accept': 'application/json, text/plain, */*, multipart/form-data',
                    //xác thực người dùng tương ứng , gửi token lên server để xác thực
                    //chú ý phải có dấu cách sau bearer
                    'Authorization': 'Bearer ' + getTokenFromLocalStorage
                }
            }

            var result = await axiosApi.get('/post/getListPostUserID.php',config);

            console.log('result- postbyuserid = ', result.data.posts)

            if(result.data.status === 200){

                let data = {
                    userid,
                    post: result.data.posts
                }
                commit('SET_POST_USERID',data);

                return {
                    oke: true,
                    data: result.data.posts,
                    error: null
                }

            }
            return{
                oke: false,
                error: error.message
            }
            
        }
        catch (error) {

            return{
                oke: false,
                error: error.message
            }

        }
    },
    async registor({commit,dispatch},{fullname= '',email= '',password= '',repassword= '',}){
        commit('SET_LOADING',true);

        try{

            let objdata = {
                fullname: fullname,
                email: email,
                password: password,
                repassword: repassword
            }
            var result = await axiosApi.post('/member/register.php',objdata);

            commit('SET_LOADING',false);

            if(result.data.status === 200){

                //Đăng ký xong thì không cần đăng nhập luôn 
                
                // Thực hiện lại y chang như login'
                console.log('lay du lieu registor',result.data);
                

                commit('GET_USERBYID',result.data.user);

                let objCurrentUser = {
                    token : result.data.token,
                    user : result.data.user
                }
                console.log('objCurrentUser = ',objCurrentUser)

                commit('SET_CURRENT_USER',objCurrentUser);

                //khi đăng nhập gửi userid để lấy danh sách bài viết của user đó

                dispatch('getPostListByUserId',result.data.user.USERID);

                commit('SET_LOADING',false);


                return {
                    oke: true,
                    data: result.data,
                    error: null
                }

            }

            return{
                
                oke: false,
                error: result.data.error
                
            }
            
            
        }
        catch (error) {
            commit('SET_LOADING',false);

            return{
                oke: false,
                error: result.data.error
            }

        }
    }
}