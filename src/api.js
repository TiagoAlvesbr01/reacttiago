import axios from 'axios';

let api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/people?q=lauren'
})

export default api;