import { createReducer } from '@reduxjs/toolkit'
import { setInvoiceData } from '../types/InvoiceTypes';

interface DataReducer {
    data: Invoice[];
}

const initialState: DataReducer = {
    data: []
}

const dataReducer = createReducer<DataReducer>(initialState, (builder) => {
    builder.addCase(setInvoiceData, (state, action) => {
        state.data = action.payload
    })
})

export default dataReducer
