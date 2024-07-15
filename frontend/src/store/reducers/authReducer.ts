import { createReducer } from '@reduxjs/toolkit'
import { clearAuthData, setAuthData } from '../types/AuthTypes'
import { AuthResp } from '../../types/AuthResp';

interface DataReducer {
    data: AuthResp | null;
}

const initialState: DataReducer = {
    data: null
}

const dataReducer = createReducer<DataReducer>(initialState, (builder) => {
    builder.addCase(setAuthData, (state, action) => {
        state.data = action.payload
    })
    builder.addCase(clearAuthData, (state, action) => {
        state.data = null
    })
})

export default dataReducer
