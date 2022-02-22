import axiosApi from '../../plugins/axios'

export default {
    async getListPost({ commit }, { pagesize = 10, currPage = 1 }) {
        console.log('da chay action')

        try {
            
            const result = await axiosApi.get(`/post/getListPagination.php?pagesize=${pagesize}&currPage=${currPage}`);

            console.log(result.data);

            if(result.data.status === 200){

                this.commit('GET_LISTPOST',result.data);

            }
            


            // if (result.data.status === 200) {
            //     this.commit('GET_LISTPOST', result.data)
            // }
            // else {
            //     return false
            // }

        } catch (error) {
            console.log("error", error);
        }
    },
    async getListPostByCategory({ commit }, { pagesize = 10, currPage = 1,tagIndex = 1 }) {

        console.log('da chay action')
        let config = {
            params:{
                pagesize : pagesize, 
            currPage : currPage
            }
            
        }


        try {
            
            const result = await axiosApi.get('/post/getListByCategory.php',config);

            console.log('getListPostByCategory', result.data);

            if(result.data.status === 200){

                this.commit('GET_LISTPOST',result.data);

            }
            


            // if (result.data.status === 200) {
            //     this.commit('GET_LISTPOST', result.data)
            // }
            // else {
            //     return false
            // }

        } catch (error) {
            console.log("error", error);
        }
    },
}