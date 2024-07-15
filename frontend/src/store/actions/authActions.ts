import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '..'
import { setAuthData } from '../types/AuthTypes'
import { loginUser } from '../../api/Auth'
import { LoginFormData } from '../../types/LoginFormData'
import { toast } from 'react-toastify'

export const authenticateUser = createAsyncThunk<void, LoginFormData, { dispatch: AppDispatch }>('post/login', async (formData, { dispatch }) => {
    try {
        const res: any = (await loginUser(formData))
        const notify = () => toast.error("Email and Password did not match. Please try again");
        console.log(res)
        if (res.status === 200 || res.status === 201) {
            dispatch(setAuthData(res.data))
        } else {
            notify();
        }
    } catch (e) {
        console.error(e)
        throw e
    }
})