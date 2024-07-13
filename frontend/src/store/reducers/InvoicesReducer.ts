import { createReducer } from '@reduxjs/toolkit'

interface DataReducer {
    data: Invoice[];
}

const initialState: DataReducer = {
    data: []
}

const dataReducer = createReducer<DataReducer>(initialState, (builder) => {

})

export default dataReducer
