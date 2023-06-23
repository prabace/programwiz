import { configureStore } from '@reduxjs/toolkit'
import filterSliceReducer from './Slices/filterSlice'

export const store = configureStore({
    reducer: {
        jobFilter: filterSliceReducer
    }
})