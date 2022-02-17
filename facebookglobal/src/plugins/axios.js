import axios from 'axios';

export const axiosApi = axios.create({
    baseURL: `https://api-meme-zendvn-01.herokuapp.com/api/`,
    
    headers: {
        accept: 'application/json, text/plain, */*, multipart/form-data'
    }
})

