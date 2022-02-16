import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `https://api-meme-zendvn-01.herokuapp.com/api/`,
    
    headers: {
        Authorization: 'Bearer {{ACCESS_TOKEN}}'
    }
})
