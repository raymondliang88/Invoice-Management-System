import axios from 'axios';
import { store } from '../store';
import { clearAuthData } from '../store/types/AuthTypes';
import { toast } from 'react-toastify'

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

    //Erorr handler here
    instance.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error?.response?.status === 401) {
            //place your reentry code
            const notify = () => toast.info("Your session has been expired.");
            store.dispatch(clearAuthData({}))
            notify();
            window.location.href = '/login'
        } else if (error?.response?.status > 404 || error.response.status >= 500) {
            const notify = () => toast.error("Ooops, something went wrong.");
            notify();
        } else if (error?.response?.data?.message) {
            const notify = () => toast.error(error?.response?.data.message);
            notify();
        }
        return error;
    });

    return instance;
};

export default HttpClient();