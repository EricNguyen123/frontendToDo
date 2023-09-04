import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
    name: 'note',
    initialState: {},
    reducers: {
        newNote: (state, action) => {
            return (state = { ...action.payload });
        },
    },
});

const { reducer, actions } = noteSlice;

export const { newNote } = actions;
export default reducer;
