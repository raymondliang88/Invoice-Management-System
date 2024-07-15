import axios from 'axios';
import { store } from '../store';
import { clearAuthData } from '../store/types/AuthTypes';

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

    //clear session data
    instance.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
            //place your reentry code
            store.dispatch(clearAuthData({}))
            window.location.href = '/login'
        }
        return error;
    });

    return instance;
};

export default HttpClient();