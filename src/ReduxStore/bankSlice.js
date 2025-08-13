import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Banks: [],
};

const bankSlice = createSlice({
    name: 'Banks',
    initialState,
    reducers: {
        addBankData: (state, action) => {
            state.Banks = action.payload;
        }
    },
});

export const { addBankData } = bankSlice.actions;
export default bankSlice.reducer;