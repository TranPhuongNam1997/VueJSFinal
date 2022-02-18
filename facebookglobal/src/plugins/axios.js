import axios from 'axios';

const axiosApi = axios.create({
    baseURL: `https://api-meme-zendvn-01.herokuapp.com/api/`,
    
    headers: {
        accept: 'application/json'
    }
})

export default axiosApi
