import axios from 'axios';

conast instance = axios.create({
    baseURL: 'https://burger-builder-hemantxs5-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;