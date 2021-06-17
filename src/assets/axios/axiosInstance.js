
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://o53hpo7bf9.execute-api.us-west-2.amazonaws.com/dev',
    headers:{
        "Content-Type": "application/json"
    }
});
