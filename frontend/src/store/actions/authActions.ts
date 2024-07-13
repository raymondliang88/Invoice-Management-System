import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '..'
import { setAuthData } from '../types/AuthTypes'
import { loginUser } from '../../api/Auth'
import { LoginFormData } from '../../types/LoginFormData'

export const authenticateUser = createAsyncThunk<void, LoginFormData, { dispatch: AppDispatch }>('post/authenticateUser', async (formData, { dispatch }) => {
    try {
        const data = (await loginUser(formData)).data
        dispatch(setAuthData(data))
    } catch (e) {
        console.error(e)
        throw e
    }
})