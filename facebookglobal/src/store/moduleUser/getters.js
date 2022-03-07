import {parseJwt} from '../../helper/index'

export default {
    isLogin: state => {
        const checkToken = parseJwt(state.ACCESS_TOKEN);
        console.log('userlogin = ',checkToken);
        if(checkToken){
            return true
        }
        else{
            return false
        }
    },
    currentUser: state => {

        return state.currentUser

    },
    getterPostCurrentUser: state =>{
        if(state.currentUser && state.currentUser.USERID){
            let postListUserCurent = state.postListUser[state.currentUser.USERID]
            return postListUserCurent
        }
        return null
    }
}