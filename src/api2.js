import axios from 'axios';

let api2 = axios.create({
    baseURL: 'http://localhost/8080'
})

export default api2;