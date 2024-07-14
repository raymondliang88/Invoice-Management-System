import axios from 'axios';
import { store } from '../store';

const HttpClient = () => {
    const defaultOptions = {
        baseURL: process.env.REACT_APP_API_PATH,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Create instance
    let instance = axios.create(defaultOptions);

    // Set the AUTH token for any request
    instance.interceptors.request.use(function (config) {
        const { data } = store.getState()?.auth
        config.headers.Authorization = data?.accessToken ? `Bearer ${data?.accessToken}` : '';
        return config;
    });

    return instance;
};

export default HttpClient();