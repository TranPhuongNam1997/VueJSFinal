export default {
    GET_LISTPOST(state,data){
        state.listPost = data;
    },
    GET_LISTPOST_MORE(state,data){
        
        state.listPost = [...state.listPost,...data]
    },
    
    GET_POSTDETAIL(state,data){
        state.postDetail = data;
        
    },
    // GET_COMMENT(state,data){
    //     state.comments = data
    // },
    SET_COMMENT(state, comment){
        state.postDetail.comments.push(comment)
    }

}