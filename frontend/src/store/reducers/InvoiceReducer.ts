import { createReducer } from '@reduxjs/toolkit'
import { getInvoiceData } from '../types/InvoiceTypes';

interface DataReducer {
    data: Invoice[];
}

const initialState: DataReducer = {
    data: []
}

const dataReducer = createReducer<DataReducer>(initialState, (builder) => {
    builder.addCase(getInvoiceData, (state, action) => {
        state.data = action.payload
    })
})

export default dataReducer
