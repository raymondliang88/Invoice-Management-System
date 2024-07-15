import { createAction } from '@reduxjs/toolkit'
import { AuthResp } from '../../types/AuthResp'

export const setAuthData = createAction<AuthResp>('auth/setAuthData')
export const clearAuthData = createAction<{}>('auth/clearAuthData')