import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3333/'
    baseURL: `http://192.168.0.88:3333`  //use seu IP local de endereço
})

export default api;