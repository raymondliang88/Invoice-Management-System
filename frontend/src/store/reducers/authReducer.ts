import { createReducer } from '@reduxjs/toolkit'
import { setAuthData } from '../types/authTypes'
import { AuthResp } from '~/types/AuthResp';

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
})

export default dataReducer
