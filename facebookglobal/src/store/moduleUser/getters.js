import {parseJwt} from '../../helper/index'

export default {
    isLogin: state => {
        console.log('state.ACCESS_TOKEN = ',state.ACCESS_TOKEN)
        let checkToken = parseJwt(state.ACCESS_TOKEN);
        console.log('checkToken = ',checkToken);
        
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