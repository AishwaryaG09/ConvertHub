import { configureStore } from '@reduxjs/toolkit';
import bankReducer from './bankSlice';

const store = configureStore({
    reducer: {
        banks: bankReducer,
    },
});


export default store


